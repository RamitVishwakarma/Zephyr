export function wrapLinksWithATag(sentence) {
  if (!sentence) return "";

  const urlRegex = /(https?:\/\/[^\s<]+)/g;
  const modifiedSentence = sentence.replace(urlRegex, (url) => {
    try {
      const urlObj = new URL(url);
      const displayText = urlObj.pathname;
      return `<a href="${url}" class="text-[#80B0FF] hover:text-[#A3C5FF] underline" target="_blank" rel="noopener noreferrer">${displayText}</a>`;
    } catch (e) {
      return url;
    }
  });

  return modifiedSentence;
}
