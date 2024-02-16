const accordianBtns = document.querySelectorAll(".accordian-btn");

accordianBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // get the paragraph and icons
    const accordianDescription = btn.nextElementSibling;
    const plusIcon = btn.querySelector(".plus");
    const minusIcon = btn.querySelector(".minus");

    // toggle the description - based on max height
    if (accordianDescription.style.maxHeight) {
      accordianDescription.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      accordianDescription.style.maxHeight =
        accordianDescription.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
