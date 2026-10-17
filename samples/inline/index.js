import render from "../../docs/dist/v1/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const columns = [
  {
    columnName: "Keyword",
    type: "search",
    label: "Filter:",
    placeholder: "Type keyword...",
    buttonText: "Search",
    buttonClass: "btn btn-primary"
  }
];

const startFunc = () => {
  try {
    const spec = render({
      columns,
      options: {
        formId: "filter-form",
        layout: "inline",
        className: "d-flex align-items-center gap-3",
        showSubmit: false
      }
    });

    const specOutput = document.getElementById("spec-output");
    if (specOutput) {
      specOutput.textContent = JSON.stringify(spec, null, 2);
    }

    const target = document.getElementById("render-target");
    if (target && buildSpecElement) {
      const dom = buildSpecElement(spec);
      target.replaceChildren(...(Array.isArray(dom) ? dom : [dom]));
    }
  } catch (err) {
    console.error("Error rendering inline form:", err);
  }
};

startFunc();
