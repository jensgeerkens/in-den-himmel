/* Headless-Smoke-Test: laedt data/manifest/visuals/script mit DOM-Shim, ruft init(). */
const fs = require("fs");

function makeEl(tag) {
  const el = {
    tagName: (tag || "div").toUpperCase(), style: {}, dataset: {}, className: "",
    children: [], attributes: {}, hidden: false, scrollTop: 0, tabIndex: 0,
    _text: "", innerHTML: "",
    setAttribute(k, v) { this.attributes[k] = v; }, getAttribute(k) { return this.attributes[k] ?? null; },
    removeAttribute(k) { delete this.attributes[k]; },
    appendChild(c) { this.children.push(c); return c; }, append(...c) { this.children.push(...c); },
    replaceChildren() { this.children = [].slice.call(arguments); },
    addEventListener() {}, removeEventListener() {}, focus() {},
    querySelector() { return makeEl("div"); }, querySelectorAll() { return []; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 10, height: 10, right: 10, bottom: 10 }; },
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    appendChildNS() {},
    get textContent() { return this._text; }, set textContent(v) { this._text = v; },
    focus() {},
  };
  return el;
}

const ctx2d = new Proxy({}, { get: (t, p) => {
  if (p === "createLinearGradient" || p === "createRadialGradient") return () => ({ addColorStop() {} });
  if (p === "createPattern") return () => ({});
  if (p === "createImageData") return () => ({ data: new Uint8ClampedArray(64 * 64 * 4) });
  if (p === "getImageData") return () => ({ data: new Uint8ClampedArray(64 * 64 * 4) });
  if (p === "setTransform") return () => {};
  return () => {};
}});

const canvas = makeEl("canvas");
canvas.getContext = () => ctx2d;

const ids = {};
function getEl(id) { if (!ids[id]) { ids[id] = makeEl("div"); if (id === "bg") return canvas; } return id === "bg" ? canvas : ids[id]; }

global.window = {
  innerWidth: 1440, innerHeight: 900, scrollY: 0, devicePixelRatio: 2,
  matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
  scrollTo() {}, addEventListener() {}, removeEventListener() {},
  requestAnimationFrame() { return 0; }, cancelAnimationFrame() {},
  performance: { now: () => 0 },
};
global.requestAnimationFrame = () => 0;
global.cancelAnimationFrame = () => {};
global.performance = { now: () => 0 };
global.document = {
  documentElement: makeEl("html"), body: Object.assign(makeEl("body"), { scrollHeight: 100000 }),
  title: "", hidden: false, readyState: "complete",
  getElementById: getEl,
  createElement: (t) => (t === "canvas" ? Object.assign(makeEl("canvas"), { getContext: () => ctx2d }) : makeEl(t)),
  createElementNS: (ns, t) => makeEl(t),
  createDocumentFragment: () => makeEl("frag"),
  createTextNode: (t) => ({ _text: t }),
  querySelector: () => makeEl("div"),
  querySelectorAll: () => [],
  addEventListener() {}, activeElement: makeEl("div"),
};

let code = "";
for (const f of ["data.js", "images/manifest.js", "visuals.js", "sizes.js", "data_details.js", "dd_life.js", "dd_tech1.js", "dd_space.js", "dd_solar.js", "dd_stellar.js", "dd_deep.js", "dd_compare.js", "script.js"]) {
  code += fs.readFileSync(f, "utf8") + "\n";
}
try {
  new Function("window", "document", "requestAnimationFrame", "cancelAnimationFrame", "performance", code)(
    global.window, global.document, global.requestAnimationFrame, global.cancelAnimationFrame, global.performance);
  console.log("SMOKE OK — init() lief ohne Exception.");
} catch (e) {
  console.error("SMOKE FAIL:", e.message, "\n", e.stack.split("\n").slice(0, 4).join("\n"));
  process.exit(1);
}
