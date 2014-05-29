---
tags: html elements, css styling, css selectors, importing stylesheets
languages: html, css
---
#My Little Rainbow
In this tutorial we're going to make a rainbow with HTML `<div>` elements. And while we do it we're going to learn about html elements, css styling, css selectors, how color works in css, and importing stylesheets.  That might sound like a lot but it isn't.

##HTML Basics
Hyper Text Markup Language, or HTML, is a way to demarcate a document into different parts. Each part is _marked_ by elements (using tags). Each element has it's own special conotation that the browser uses to make _render_ the HTML document. Use this [cheat sheet](http://www.cril.univ-artois.fr/~lecoutre/teaching/web/sheets/HTML.pdf) on HTML elements for guidance.

Elements
  - All begin with `<` and end with `>` ex. `<div>` (this last part is a tag)
  - Most have an opening tag such as `<div>` and a closing tag `</div>`
    - The `/` indicates to the browser that that tag is a closing tag
    - The element is everything between the tags and the tags themselves
    - Closing tags are very important! Here's a [website]() that has no closing tags. Don't do that!
  - Some tags are self closing like the line break element `<br/>`, which has the `/` to signify that it is self closing.
  - Elements can have IDs and classes to aid the browser in finding specific tags.
    - Must begin with a letter A-Z or a-z
    - Can be followed by: letters (A-Za-z), digits (0-9), hyphens ("-"), and underscores ("_")
    - IDs __can__ only be used once per page. ex: `<div id="this-special-div"></div>`
    - Classes can be used as many times as you want. ex: `<div classes="a-less-special-div"></div>`
  - Elements nested inside other elements are called children
  - Elements next to one another are siblings

Here's and example of element relations:
```
  <div>  <!-- the parent element -->
    <p></p>  <!-- the first sibling element/the first child-->
    <p></p>  <!-- the second sibling element/the second child -->
  </div>
```

## CSS Basics
Cascading Style Sheets, or CSS, is language created to style an HTML document by telling the browser how specific elements should look. CSS does this by selecting elments based on their tag, ids, classes, or all of the above. The reason for CSS is the seperation of concerns. We want HTML only to be concerned with how it displays and demarcates information, and we let CSS worry about how to make that information look pretty.

CSS selectors
  - Selects elements to assign them styles
  - `*` (wildcard) selects every element
  - An element, such as `div` will select all elements of that type
  - Select an id like so `#some-id`
  - Classes are selected like this `.some-class`
  - To select all children elements of a parent do something like this `div p`
  - to select multiple different elements seperate them by commas like this `div, p, a`

Here's an example of CSS styling:
```
  * {
    color: red;  /* all elements will have red font */
  }
```
