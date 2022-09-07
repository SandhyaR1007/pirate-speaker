const serverURL = "https://api.funtranslations.com/translate/pirate.json";
let originalText = document.querySelector("#original-text");
let translatedText = document.querySelector("#translated-text");
let convertBtn = document.querySelector("#convert-btn");

const translate = (text) => {
  console.log(text);
  if (text !== "") {
    fetch(`${serverURL}?text=${text}`)
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        translatedText.innerText = val.contents.translated;
      });
  } else {
    alert("Please enter some text");
  }
};
convertBtn.addEventListener("click", () => {
  translate(originalText.value);
});
