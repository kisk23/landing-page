/*
creat section dynamically 
by using addSection function and add them to navigation bar
ES6
*/
const addSections = (function (sections, ul) {
  //create a new fragment
  const segment = document.createDocumentFragment();
//move all over the sections
  sections.forEach(section=>{
    const anchorTag = document.createElement("a");
    anchorTag.classList.add("menu__link");
    anchorTag.textContent = section.getAttribute("data-nav");
    const li = document.createElement("li");
    li.appendChild(anchorTag);
    //move to the section when u click on
    li.addEventListener("click", (e) => {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
    segment.appendChild(li);
  })


  ul.appendChild(segment);
})
//returns the first Element within the document that matches the specified 
//selector or group of selectors
(
  document.querySelectorAll("section"),
  document.querySelector("#navbar__list")
);
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  const anchorTags = document.querySelectorAll(".menu__link");
//get the postion of the element
  for (section of sections) {
    const sectionPos = section.getBoundingClientRect();
//check the new element postion to add it or not 
    if (sectionPos.top <= 250 && sectionPos.top >= 0) {
      sections.forEach((innerSection) => {
        innerSection != section
          ? innerSection.classList.remove("activated")
          : section.classList.add("activated");
      });
      
      anchorTags.forEach((anchorTag) => {
        anchorTag.textContent == section.getAttribute("data-nav")
          ? anchorTag.classList.add("activated-link")
          : anchorTag.classList.remove("activated-link");
      });
    }
  }
});
