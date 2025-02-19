document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputForm");
  const displayArea = document.getElementById("displayArea");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userText = document.getElementById("userText").value;

    // If you want to treat each line as a separate list item:
    //   1. Split lines
    //   2. Convert to an HTML string with numbering
    if (userText.trim().length > 0) {
      const lines = userText.split("\n").filter(line => line.trim() !== "");
      
      let numberedText = "";
      lines.forEach((line, index) => {
        numberedText += `${index + 1}. ${line}\n`;
      });
      
      // Insert text preserving newlines
      displayArea.textContent = numberedText;
    } else {
      displayArea.textContent = "Nothing to display!";
    }
  });
});
