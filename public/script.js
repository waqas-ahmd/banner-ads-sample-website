var prevButton = document.querySelector("#prvBtn");
var nextButton = document.querySelector("#nxtBtn");
var iFrame = document.querySelector("#adsElement");
var title = document.querySelector("#title");

max = 4;

prevButton.addEventListener("click", () => {
  var cF = Number(iFrame.getAttribute("src")[0]);
  var pF = cF === 1 ? 4 : cF - 1;
  iFrame.setAttribute("src", `${pF}/index.html`);
  title.innerHTML = `HTML5 ADS ${pF}/${max}`;
});

nextButton.addEventListener("click", () => {
  var cF = Number(iFrame.getAttribute("src")[0]);
  var nF = cF === max ? 1 : cF + 1;
  iFrame.setAttribute("src", `${nF}/index.html`);
  title.innerHTML = `HTML5 ADS ${nF}/${max}`;
});
