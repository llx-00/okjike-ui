import { ElemMap } from "./ElemMap";

function main() {
  function hiddenOriginPage() {
    document.querySelectorAll("body > *").forEach((i) => {
      try {
        (i as HTMLElement).style.display = "none";
      } catch (error) {}
    });
  }

  function forEachEle(name: string) {
    const Eles = (ElemMap[name] || []).map(({ name, query }) => ({
      name,
      elem: document.querySelector<HTMLElement>(query) || query,
    }));
    console.log(`====${name}====`);
    Eles.forEach(({ name, elem }) => {
      console.log(name, elem);
      if (typeof elem !== "string") {
        elem.style.border = "2px solid green";
      }
    });
  }

  console.log("ElemMap", ElemMap);
  Object.keys(ElemMap).forEach(forEachEle);

  // hiddenOriginPage();
  console.log(hiddenOriginPage);
}

window.addEventListener("load", () => {
  console.log("====window.onLoad====");
  main();
  console.log("=====================");
});
