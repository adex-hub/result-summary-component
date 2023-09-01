# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content ✅

### Links
**Come back to edit this!**
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This project was mainly made for me to practice my understanding of props in react ⚛️. At first there was no problem with 'Area' reusable component that I made until I needed to add utility classes which dictated the color and background color of each of the four summary components. This was particularly difficult until I came across a blog (which I would link below) which simplified this for me. Here is the area component with necessary props

```js
const Area = ({className, icon, titleText, number}) => {
  return (
    <div className= {`criterion ${className}`}>
      <div className="title">
        <img src={icon} alt="reaction-img" />
        <span>{titleText}</span>
      </div>
      <div className="score">
        {number}<span> / 100</span>
      </div>
    </div>
  );
};

export default Area;
```

### Continued development

I'd really like to explore the react context API in the future and build more complex projects and get good in working with API's within react.

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Passing react className as a prop](https://bobbyhadz.com/blog/react-pass-classname-as-prop) - This really helped me to set the needed class to style my Area component.
- [Creating react apps with vite](https://flaviocopes.com/vite-react-app/?utm_source=pocket_saves) - This helped me get up and running with vite.

## Author

- Frontend Mentor - [@Adex-hub](https://www.frontendmentor.io/profile/adex-hub)
