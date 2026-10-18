import render from "../../docs/dist/v3/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const columns = [
  { columnName: "Name", label: "Full name", type: "text", placeholder: "Enter your name", template: { body: { cell: "buildRequiredField" } } },
  { columnName: "Email", label: "Email address", type: "email", placeholder: "name@example.com", template: { body: { cell: "buildRequiredField" } } },
  { columnName: "Phone", label: "Phone number", type: "tel", placeholder: "Enter your phone number" }
];

const options = {
  "form.bigButtons": {
    formId: "big-buttons-demo",
    title: "Create a contact",
    description: "Add contact details and choose an action.",
    header: "labelWithRefresh",
    body: "threeColumns",
    footer: "saveCancel"
  }
};

const formSpec = render({ type: "form.bigButtons", columns, data: [{}], options });
const target = document.getElementById("render-target");
const dom = buildSpecElement(formSpec);
target.replaceChildren(...(Array.isArray(dom) ? dom : [dom]));
document.getElementById("spec-output").textContent = JSON.stringify(formSpec, null, 2);

const form = target.querySelector("form");
const status = document.getElementById("form-status");

const showStatus = (message, kind = "secondary") => {
  status.textContent = message;
  status.className = `alert alert-${kind} mt-3`;
};

form.addEventListener("submit", event => {
  event.preventDefault();
  showStatus("Contact saved for this preview.", "success");
});

form.addEventListener("reset", () => {
  showStatus("The form is ready for a new contact.");
});

form.querySelectorAll('[data-role="header-actions"] button, [data-role="footer-actions"] button[type="button"]').forEach(button => {
  button.addEventListener("click", () => {
    const action = button.textContent.trim();
    if (action === "Refresh") form.reset();
    else showStatus(`${action} action selected for this preview.`, "info");
  });
});
