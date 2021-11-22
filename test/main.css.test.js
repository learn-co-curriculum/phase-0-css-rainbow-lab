const fs = require("fs");
const path = require("path");
const chai = require("chai");
const CSSOM = require("cssom");
chai.use(require("chai-dom"));
const { expect } = chai;

const cssFile = fs.readFileSync(
  path.resolve(__dirname, "../main.css"),
  "utf-8"
);

function findRule(rules, cssSelector) {
  return rules.find((r) => r.selectorText === cssSelector);
}

describe("main.css", () => {
  let css;
  before(() => {
    css = CSSOM.parse(cssFile);
  });

  it("sets #red div border-top-color to #f00", () => {
    const rule = findRule(css.cssRules, "#red");
    expect(rule, "Missing #red rule").to.exist;

    const hint = "Incorrect border-top-color property for #red";
    expect(rule.style["border-top-color"], hint).to.eq("#f00");
  });

  it("sets #orange div border-top-color to #ffa500", () => {
    const rule = findRule(css.cssRules, "#orange");
    expect(rule, "Missing #orange rule").to.exist;

    const hint = "Incorrect border-top-color property for #orange";
    expect(rule.style["border-top-color"], hint).to.eq("#ffa500");
  });

  it("sets #yellow div border-top-color to #ff0", () => {
    const rule = findRule(css.cssRules, "#yellow");
    expect(rule, "Missing #yellow rule").to.exist;

    const hint = "Incorrect border-top-color property for #yellow";
    expect(rule.style["border-top-color"], hint).to.eq("#ff0");
  });

  it("sets #green div border-top-color to #00bc3f", () => {
    const rule = findRule(css.cssRules, "#green");
    expect(rule, "Missing #green rule").to.exist;

    const hint = "Incorrect border-top-color property for #green";
    expect(rule.style["border-top-color"], hint).to.eq("#00bc3f");
  });

  it("sets #blue div border-top-color to #06f", () => {
    const rule = findRule(css.cssRules, "#blue");
    expect(rule, "Missing #blue rule").to.exist;

    const hint = "Incorrect border-top-color property for #blue";
    expect(rule.style["border-top-color"], hint).to.eq("#06f");
  });

  it("sets #indigo div border-top-color to #8a2be2", () => {
    const rule = findRule(css.cssRules, "#indigo");
    expect(rule, "Missing #indigo rule").to.exist;

    const hint = "Incorrect border-top-color property for #indigo";
    expect(rule.style["border-top-color"], hint).to.eq("#8a2be2");
  });

  it("sets #violet div border-top-color to #d300c9", () => {
    const rule = findRule(css.cssRules, "#violet");
    expect(rule, "Missing #violet rule").to.exist;

    const hint = "Incorrect border-top-color property for #violet";
    expect(rule.style["border-top-color"], hint).to.eq("#d300c9");
  });
});
