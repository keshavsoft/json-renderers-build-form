# json-renderers-build-form

Focused form specification builder for `json-renderers`, assembling form fields, rows, and action bars into JSON-to-DOM specs.

Powered by [`json-renderers-build-input-row`](https://github.com/keshavsoft/json-renderers-build-input-row) for atomic input row construction.

## Features

- **Field Support**: text, email, number, tel, url, password, search, date, select, textarea, checkbox.
- **Powered by `input-row`**: Directly leverages `inputWithLabel` and `inputWithLabelButton` for all standard inputs.
- **Layouts**: Vertical stacked forms (`layout: "vertical"`) and inline filter forms (`layout: "inline"`).
- **Action Buttons**: Custom submit button text and optional field-level action buttons (e.g. search, verify, apply).
- **Big buttons form**: Predefined header, body, and footer recipes selected through type-scoped options.

## Installation

```bash
npm install json-renderers-build-form
```

## Usage

```javascript
import render, { renderForm } from "json-renderers-build-form";

const spec = render({
  columns: [
    { columnName: "Name", type: "text", label: "Full Name", placeholder: "Ada Lovelace", required: true },
    { columnName: "Email", type: "email", label: "Email Address", placeholder: "ada@example.com" },
    { columnName: "Role", type: "select", label: "Role", options: ["Designer", "Engineer", "PM"] },
    { columnName: "Notes", type: "textarea", label: "Notes" },
    { columnName: "Updates", type: "checkbox", label: "Subscribe to updates" }
  ],
  data: [
    { Name: "Ada Lovelace", Email: "ada@example.com", Role: "Engineer" }
  ],
  options: {
    formId: "contact-form",
    submitLabel: "Save Contact"
  }
});
```

### Big buttons form

Set `type: "form.bigButtons"` to build a form from its header, body, and footer recipes. Keep form-specific choices under the matching type key in `options`, so they remain scoped when forms and tables share a renderer configuration:

```js
render({
  type: "form.bigButtons",
  columns,
  data,
  options: {
    "form.bigButtons": {
      header: "labelWithRefresh",
      body: "stacked",
      footer: "saveCancel"
    }
  }
});
```

Available headers are `none`, `label`, `labelWithRefresh`, and `labelWithId`. Bodies are `inline`, `stacked`, and `threeColumns`. Footers are `none`, `saveCancel`, and `edit`. The button definitions and Bootstrap classes come from the internal JSON recipes; callers only choose the recipes and provide their form data.
