const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", () => {
  it("contains a <head> tag", () => {
    const htmlElement = document.querySelector("html");

    // the first child should be a <head> tag
    const hint1 = "Include a <head> element nested inside the <html> element";
    expect(htmlElement, hint1).to.have.descendant("head");
  });

  describe("within <head>", () => {
    it("contains a <link> tag", () => {
      const link = document.querySelector("link");
      const hint = "No <link> tag was found";
      expect(link, hint).to.exist;
    });

    it("correctly links to the main.css file with a relative path", () => {
      const link = document.querySelector("link");
      const hint1 =
        "Make sure you provide a rel attribute to identify the link as a stylesheet";
      expect(link, hint1).to.have.attribute("rel", "stylesheet");
      const hint2 =
        "Make sure you provide a relative path to main.css from index.html";
      expect(link, hint2).to.have.attribute("href", "./main.css");
    });
  });

  it("contains a <body> tag", () => {
    const htmlElement = document.querySelector("html");
    const hint1 = "Include a <body> element nested inside the <html> element";
    expect(htmlElement, hint1).to.have.descendant("body");
  });

  describe("within <body>", () => {
    it('contains a <div> tag with an id of "red" ', () => {
      const redDiv = document.querySelector("#red");
      const hint = "Add the id 'red' to the first, outer div";
      expect(redDiv, hint).to.exist;
    });

    it('contains a <div> tag with an id of "orange" ', () => {
      const orangeDiv = document.querySelector("#orange");
      const hint = "Add the id 'orange' to the second div";
      expect(orangeDiv, hint).to.exist;
    });

    it('contains a <div> tag with an id of "yellow" ', () => {
      const yellowDiv = document.querySelector("#yellow");
      const hint = "Add the id 'yellow' to the third div";
      expect(yellowDiv, hint).to.exist;
    });

    it('contains a <div> tag with an id of "green" ', () => {
      const greenDiv = document.querySelector("#green");
      const hint = "Add the id 'green' to the fourth div";
      expect(greenDiv, hint).to.exist;
    });

    it('contains a <div> tag with an id of "blue" ', () => {
      const blueDiv = document.querySelector("#blue");
      const hint = "Add the id 'blue' to the fifth div";
      expect(blueDiv, hint).to.exist;
    });

    it('contains a <div> tag with an id of "indigo" ', () => {
      const indigoDiv = document.querySelector("#indigo");
      const hint = "Add the id 'indigo' to the sixth div";
      expect(indigoDiv, hint).to.exist;
    });

    it('contains a <div> tag with an id of "violet" ', () => {
      const violetDiv = document.querySelector("#violet");
      const hint = "Add the id 'violet' to the seventh div";
      expect(violetDiv, hint).to.exist;
    });
  });
});
