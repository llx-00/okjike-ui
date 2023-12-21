import { EleMap } from "./EleMap";

function main() {
  document
    .querySelectorAll("div")
    .forEach((i) => (i.style.border = "1px solid red"));

  const NavBarMe = document.querySelector<HTMLElement>(EleMap.NavBar.Me);
  if (NavBarMe) {
    NavBarMe.style.border = "5px solid green'";
    NavBarMe.style.fontSize = "100px";
  }

  console.log("======================");
  console.log("EleMap", EleMap);
  console.log("NavBarMe", NavBarMe);
  console.log("======================");
}
window.addEventListener("load", () => {
  console.log("======================load");
  main();
});

console.log("======================main");
main();
