# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot


https://github.com/Sushmita-Ghosh/frontend-mentors/assets/82622059/b2c70a51-6aba-4014-a008-e5664370b9f2



![image](https://github.com/Sushmita-Ghosh/frontend-mentors/assets/82622059/373bd47d-741b-4a10-bb97-194054eae73d)


### Links

- Solution URL: [https://github.com/Sushmita-Ghosh/frontend-mentors/tree/master/faq-accordion-main])
- Live Site URL: [https://faq-accordion-main-swart.vercel.app/])

## My process

### Built with

- HTML
- CSS
- JS

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Most interesting takeout from this assignment was how we are toggling the description on based of the maxheight.

```js
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
```
