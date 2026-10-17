import render from "../../docs/dist/v1/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const columns = [
  { columnName: "Name", type: "text", label: "Full Name", placeholder: "Ada Lovelace", required: true },
  { columnName: "Email", type: "email", label: "Email Address", placeholder: "ada@example.com", required: true },
  { columnName: "Role", type: "select", label: "Role", options: ["Designer", "Engineer", "Product Manager"] },
  { columnName: "Notes", type: "textarea", label: "Notes", placeholder: "Special instructions..." },
  { columnName: "Updates", type: "checkbox", label: "Subscribe to product updates" }
];

const data = [
  {
    Name: "Ada Lovelace",
    Email: "ada@example.com",
    Role: "Engineer",
    Notes: "Excited about json-renderers ecosystem!",
    Updates: true
  }
];

const startFunc = () => {
  try {
    const spec = render({
      columns,
      data,
      options: {
        formId: "contact-form",
        submitLabel: "Save Contact"
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
    console.error("Error rendering form:", err);
  }
};

startFunc();
