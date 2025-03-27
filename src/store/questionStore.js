import { create } from "zustand";
import axios from "axios";

export const useChatStore = create((set, get) => ({
  session_id: null,
  messages: [],

  createChatSession: async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ZEPHYR_URL}create_chat`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ZEPHYR_API_KEY}`,
          },
        }
      );
      set({ session_id: response.data[0].session_id, messages: [] });
    } catch (error) {
      console.error("Error creating chat session:", error);
    }
  },

  sendMessage: async (question) => {
    const { session_id, messages } = get();
    if (!session_id) {
      console.error("No session ID. Start a chat session first.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_ZEPHYR_URL}chat`,
        {
          session_id,
          question,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ZEPHYR_API_KEY}`,
          },
        }
      );
      if (response.data[1] === 500) {
        set({
          messages: [
            ...messages,
            {
              question,
              answer:
                "Some error occured kindly resend the message or contact the team",
            },
          ],
        });
      } else {
        set({
          messages: [
            ...messages,
            { question, answer: response.data[0].answer },
          ],
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  },
}));

export default useChatStore;
