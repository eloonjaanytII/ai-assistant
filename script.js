const accordionItemHeaders = document.querySelectorAll(".accordion__item-title");

accordionItemHeaders.forEach(accordionItemHeader => {

  accordionItemHeader.addEventListener("click", (e) => {

    accordionItemHeader.classList.toggle("active");

    const accordionItemBody = accordionItemHeader.nextElementSibling;

    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


