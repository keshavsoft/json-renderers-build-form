import render from "../../docs/dist/v3/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const columns = [
  { columnName: "Name", type: "text", label: "Full name", required: true, template: { body: { cell: "buildRequiredField" } } },
  { columnName: "Email", type: "email", label: "Email address", required: true, template: { body: { cell: "buildRequiredField" } } },
  { columnName: "Role", type: "text", label: "Contact type" },
  { columnName: "Notes", type: "textarea", label: "Notes", template: { body: { cell: "buildTextareaField" } } },
  { columnName: "Updates", type: "checkbox", label: "Send me occasional product updates", template: { body: { cell: "buildCheckboxField" } } }
];

const startFunc = () => {
  try {
    const spec = render({
      type: "form.withButtons",
      columns,
      options: {
        formId: "contact-form",
        submitLabel: "Save contact",
        cancelLabel: "Clear form"
      },
      data: []
    });

    const target = document.getElementById("render-target");
    if (target && buildSpecElement) {
      const dom = buildSpecElement(spec);
      target.replaceChildren(...(Array.isArray(dom) ? dom : [dom]));
    }

    const form = target?.querySelector("form");
    const status = document.getElementById("form-status");
    if (form && status) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        status.textContent = "Contact saved for this preview.";
        status.className = "alert alert-success mt-3 mb-0";
      });

      document.getElementById("cancelBtnId")?.addEventListener("click", () => {
        form.reset();
        status.textContent = "The form has been cleared.";
        status.className = "alert alert-secondary mt-3 mb-0";
      });
    }
  } catch (err) {
    console.error("Error rendering form:", err);
  }
};

startFunc();
