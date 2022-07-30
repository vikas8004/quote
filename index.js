let quote = document.querySelector(".quoteData");
let name = document.getElementById("name1");
let btnSpeak = document.querySelector(".btnSpeak");
let btnCopy = document.querySelector(".btnCopy");
let clipboard = document.querySelector(".copied");
let btnNextQuote = document.querySelector(".btnNextQuote");

let url = "https://api.quotable.io/random";
window.onload = quoteGenerator();
function quoteGenerator() {
    fetch(url).then(res =>
        res.json()).then(result => {
            quote.textContent = ` ${result.content} `;
            name.textContent = `--${result.author}`;
        })
}
function textSpeaker() {
    let utterance = new SpeechSynthesisUtterance(`${quote.textContent} said by ${name.textContent}`);
    utterance.rate = .8;
    speechSynthesis.speak(utterance);
}
function copied() {
    navigator.clipboard.writeText(quote.textContent);
    clipboard.classList.add("show");
    setTimeout(() => {
        clipboard.classList.remove("show");
    }, 1500);

}
btnNextQuote.addEventListener("click", quoteGenerator);
btnSpeak.addEventListener("click", textSpeaker);
btnCopy.addEventListener("click", copied);

