import { create } from "zustand";

// Dummy data for predefined questions
const dummyQA = {
  hello:
    "Hello there! This is a dummy response. How can I help you today? (Try asking how are you?, what is this project about?, or tell me a joke, or any other question about GDSC like how to join, events, etc.)",
  "what is your name?":
    "I am a demo assistant. My responses are predefined for this portfolio showcase.",
  "how are you?":
    "I'm functioning as expected in this demo environment! Thanks for asking.",
  "tell me a joke":
    "Why don't scientists trust atoms? Because they make up everything! (This is a classic, served fresh from the dummy data!)",
  "what is this project about?":
    "This project showcases a chat interface. In a real scenario, it would connect to a powerful LLM backend, but for this demo, it uses predefined responses to avoid backend costs.",
  "how does it work?":
    "You type a question, and the interface displays it along with a simulated answer. The animations and UI are fully functional!",
  "explain how can i get into gdsc ?":
    "To get into GDSC, you typically look for announcements from our university's GDSC chapter regarding recruitment drives or information sessions. These are often held at the start of second semester of the year. You need to sign up on our recruitment platform. We have 5 domains: web, android, design, ML, and programming. We conduct programming contests on the platform for programmers and tasks for the rest, along with aptitude questions. This is followed by a technical interview and then an HR interview.",
  "tell me about the members of gdsc ?":
    "GDSC members are usually students from various disciplines who are passionate about technology, learning, and community building. You'll find developers, designers, and enthusiasts eager to explore Google technologies and other tech domains. The core team often consists of leads for different areas like tech, events, marketing, etc., all working together to organize activities.",
  "what kind of events that gdsc organize ?":
    "GDSCs organize a wide array of events! These can include hands-on workshops on technologies like Android development, Web development, Cloud computing, AI/ML, and more. They also host speaker sessions with industry professionals, hackathons, coding competitions, study jams, and community-building activities. The goal is to provide learning opportunities and a platform for students to connect and grow.",
  "what is the role of google within gdsc ?":
    "Google supports Google Developer Student Clubs by providing resources, learning materials, and access to a global network of student developers. Google offers guidance, mentorship opportunities through Google Developer Experts, and platforms for GDSCs to share their learning and projects. While GDSCs are student-run, Google's backing helps ensure access to up-to-date information and technologies.",
};

const genericUnavailableMessage =
  "Thank you for your message! To showcase the frontend capabilities and user interface of this chat application without incurring ongoing backend operational costs for this portfolio demonstration, live AI responses have been temporarily disabled. This allows you to experience the flow and design of the chat. For a full demonstration with AI-powered answers, please feel free to contact me. We appreciate your understanding!";

export const useChatStore = create((set, get) => ({
  session_id: null,
  messages: [],

  createChatSession: async () => {
    // Simulate creating a chat session
    set({ session_id: `dummy-session-${Date.now()}`, messages: [] });
    // No API call needed
    // try {
    //   const response = await axios.get(
    //     `${import.meta.env.VITE_ZEPHYR_URL}create_chat`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${import.meta.env.VITE_ZEPHYR_API_KEY}`,
    //       },
    //     }
    //   );
    //   set({ session_id: response.data[0].session_id, messages: [] });
    // } catch (error) {
    //   console.error("Error creating chat session:", error);
    // }
  },

  sendMessage: async (question) => {
    const { session_id, messages } = get();
    if (!session_id) {
      // Attempt to create a session if one doesn't exist
      await get().createChatSession();
      // Re-fetch session_id and messages after creation
      const { session_id: new_session_id, messages: new_messages } = get();
      if (!new_session_id) {
        console.error("Failed to create a dummy session automatically.");
        // Optionally set an error message in the chat
        set((state) => ({
          messages: [
            ...state.messages,
            { question, answer: "Error: Could not initialize chat session." },
          ],
        }));
        return;
      }
      // Proceed with the new session context
      const normalizedQuestion = question.toLowerCase().trim();
      let answer = dummyQA[normalizedQuestion] || genericUnavailableMessage;

      // Simulate a small delay, like an API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      set({
        messages: [
          ...new_messages, // Use new_messages here
          { question, answer },
        ],
      });
      return; // Exit after handling with new session
    }

    const normalizedQuestion = question.toLowerCase().trim();
    let answer = dummyQA[normalizedQuestion] || genericUnavailableMessage;

    // Simulate a small delay, like an API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    set({
      messages: [...messages, { question, answer }],
    });

    // Original API call logic removed
    // try {
    //   const response = await axios.post(
    //     `${import.meta.env.VITE_ZEPHYR_URL}chat`,
    //     {
    //       session_id,
    //       question,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${import.meta.env.VITE_ZEPHYR_API_KEY}`,
    //       },
    //     }
    //   );
    //   if (response.data[1] === 500) {
    //     set({
    //       messages: [
    //         ...messages,
    //         {
    //           question,
    //           answer:
    //             "Some error occured kindly resend the message or contact the team",
    //         },
    //       ],
    //     });
    //   } else {
    //     set({
    //       messages: [
    //         ...messages,
    //         { question, answer: response.data[0].answer },
    //       ],
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error sending message:", error);
    //   // Optionally set an error message in the chat for the user
    //   set(state => ({
    //      messages: [...state.messages, { question, answer: "An error occurred while trying to send your message. Please try again." }]
    //   }));
    // }
  },
}));

export default useChatStore;
