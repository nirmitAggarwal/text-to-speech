document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text-input");
  const speakButton = document.getElementById("speak-btn");

  function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

  speakButton.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (text) {
      speakText(text);
    }
  });
});
