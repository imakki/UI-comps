const itemHeader = document.querySelectorAll(".item-header");

itemHeader.forEach((header) => {
  header.addEventListener("click", () => {
    const currentActiveAccordionElement = document.querySelector(
      ".item-header.active"
    );
    if (
      currentActiveAccordionElement &&
      currentActiveAccordionElement !== header
    ) {
      currentActiveAccordionElement.classList.toggle("active");
      currentActiveAccordionElement.nextElementSibling.style.maxHeight = 0;
    }
    header.classList.toggle("active");
    const accordionItemBody = header.nextElementSibling;
    if (header.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
