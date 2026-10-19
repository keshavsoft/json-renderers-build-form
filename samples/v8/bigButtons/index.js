import render from "../../../docs/dist/v9/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const columns = [
  { columnName: "Name", label: "Full name", type: "text", placeholder: "Enter your name", required: true },
  { columnName: "Email", label: "Email address", type: "email", placeholder: "name@example.com", required: true },
  { columnName: "Phone", label: "Phone number", type: "tel", placeholder: "Enter your phone number" }
];

const options = {
  "form.bigButtons": {
    title: "Create a contact",
    description: "Add contact details and choose an action.",
    header: "labelWithRefresh",
    body: "stacked",
    footer: "saveCancel"
  }
};

const formSpec = render({ type: "form.bigButtons", columns, data: [], options });
const formElement = buildSpecElement(formSpec);
document.getElementById("render-target").replaceChildren(
  ...(Array.isArray(formElement) ? formElement : [formElement])
);
