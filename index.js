const myvideo = document.getElementById("video");
const str =
  "新年快乐,遇见你很高兴<br>来日方长,我们慢慢相遇<br>希望你万事顺意,永远被爱<br>世界辽阔,祝你闪闪发光";

let i = 0;
const divTyping = document.getElementById("wish");
console.log(divTyping, "divTyping");
function typing() {
  if (i <= str.length) {
    divTyping.innerHTML = str.slice(0, i++) + "_";
    setTimeout(typing, 200);
  } else {
    divTyping.innerHTML = str;
  }
}
function play() {
  myvideo.play();
  document.getElementById("top").classList.add("tran");
  document.getElementById("bottom").classList.add("trans");
  setTimeout(typing, 2 * 1000);
}
