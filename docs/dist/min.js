const T = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const a = t.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, k = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const a = t.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, j = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const a = t.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, B = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const a = t.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, v = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("Config must be an object");
  return T(t), k(t), j(t), B(t), !0;
}, P = "table", R = "", E = [], q = [], L = "", W = "replace";
const f = {
  type: P,
  targetHtmlId: R,
  data: E,
  columns: q,
  classToApply: L,
  appendPosition: W,
  showLog: !1
}, z = (e) => {
  const t = typeof e == "object" && e !== null ? e.inKey ?? e.key : e;
  return t && t in f ? f[t] : { ...f };
};
Object.assign(z, f);
const S = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, V = (e) => {
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: S, render: e });
}, O = "div", D = {
  class: "${cardClass}",
  "data-role": "form-card"
}, K = [
  {
    tagName: "header",
    attributes: {
      class: "${headerClass}",
      "data-role": "form-header"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "${headingClass}"
        },
        children: [
          {
            tagName: "h2",
            textContent: "${title}",
            attributes: {
              class: "${titleClass}"
            }
          },
          {
            tagName: "p",
            textContent: "${description}",
            attributes: {
              class: "${descriptionClass}"
            }
          }
        ]
      },
      {
        tagName: "span",
        textContent: "${recordId}",
        attributes: {
          class: "${recordIdClass}",
          "data-role": "record-id"
        }
      },
      {
        tagName: "div",
        attributes: {
          class: "${headerActionsClass}",
          "data-role": "header-actions"
        },
        children: []
      }
    ]
  },
  {
    tagName: "div",
    attributes: {
      class: "${cardBodyClass}"
    },
    children: [
      {
        tagName: "form",
        attributes: {
          id: "${formId}",
          "data-role": "form-body"
        },
        children: []
      }
    ]
  },
  {
    tagName: "footer",
    attributes: {
      class: "${footerClass}",
      "data-role": "form-footer"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "${footerActionsClass}",
          "data-role": "footer-actions"
        },
        children: []
      }
    ]
  }
], M = {
  tagName: O,
  attributes: D,
  children: K
}, U = () => structuredClone(M), H = "bigButtonsForm", J = "Account details", G = "Update your profile information.", Q = "", X = "label", Y = "stacked", Z = "saveCancel", N = {
  formId: H,
  title: J,
  description: G,
  recordId: Q,
  header: X,
  body: Y,
  footer: Z
}, _ = [
  {
    narration: "Resolve the selected header, body, and footer recipes.",
    func: "resolveOptions",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "options"
        ]
      }
    ],
    destinationPath: {
      fileName: "context",
      filePath: [
        "selection"
      ]
    }
  },
  {
    narration: "Prepare the form fields and the values for the active record.",
    func: "prepareFields",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "columns"
        ]
      },
      {
        fileName: "data",
        filePath: [
          "records"
        ]
      },
      {
        fileName: "context",
        filePath: [
          "selection"
        ]
      }
    ],
    destinationPath: {
      fileName: "context",
      filePath: [
        "fields"
      ]
    }
  },
  {
    narration: "Build the header actions into the base header slot.",
    func: "fromCollection",
    inputPaths: [
      {
        fileName: "context",
        filePath: [
          "selection",
          "header",
          "actions"
        ]
      },
      {
        fileName: "spec",
        filePath: [
          "button"
        ]
      }
    ],
    destinationPath: {
      fileName: "base",
      dataRole: "header-actions",
      filePath: [
        "children"
      ],
      action: "push"
    },
    skipIfEmpty: !0
  },
  {
    narration: "Build the form fields into the base body slot.",
    func: "twoDimensional",
    inputPaths: [
      {
        fileName: "context",
        filePath: [
          "fields",
          "columns"
        ]
      },
      {
        fileName: "context",
        filePath: [
          "fields",
          "rows"
        ]
      },
      {
        fileName: "spec"
      }
    ],
    destinationPath: {
      fileName: "base",
      dataRole: "form-body",
      filePath: [
        "children"
      ],
      action: "push"
    },
    skipIfEmpty: !0
  },
  {
    narration: "Build the footer actions into the base footer slot.",
    func: "fromCollection",
    inputPaths: [
      {
        fileName: "context",
        filePath: [
          "selection",
          "footer",
          "actions"
        ]
      },
      {
        fileName: "spec",
        filePath: [
          "button"
        ]
      }
    ],
    destinationPath: {
      fileName: "base",
      dataRole: "footer-actions",
      filePath: [
        "children"
      ],
      action: "push"
    },
    skipIfEmpty: !0
  }
], ee = {
  none: {
    actions: []
  },
  label: {
    actions: []
  },
  labelWithRefresh: {
    actions: [
      {
        label: "Refresh",
        type: "button",
        buttonClass: "${headerButtonClass}"
      }
    ]
  },
  labelWithId: {
    actions: []
  }
}, te = {
  inline: {
    fieldTemplates: {
      buildBodyCell: "buildInlineField",
      buildRequiredField: "buildInlineRequiredField",
      buildTextareaField: "buildInlineTextareaField",
      buildCheckboxField: "buildInlineCheckboxField"
    },
    buttonFieldTemplates: {
      buildInlineField: "buildInlineFieldWithButton",
      buildInlineRequiredField: "buildInlineRequiredFieldWithButton"
    }
  },
  stacked: {
    fieldTemplates: {},
    buttonFieldTemplates: {}
  },
  threeColumns: {
    fieldTemplates: {},
    buttonFieldTemplates: {}
  }
}, ae = {
  none: {
    actions: []
  },
  saveCancel: {
    actions: [
      {
        label: "Save",
        type: "submit",
        buttonClass: "${primaryButtonClass}"
      },
      {
        label: "Cancel",
        type: "reset",
        buttonClass: "${secondaryButtonClass}"
      }
    ]
  },
  edit: {
    actions: [
      {
        label: "Edit",
        type: "button",
        buttonClass: "${infoButtonClass}"
      }
    ]
  }
}, h = {
  headers: ee,
  bodies: te,
  footers: ae
}, se = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, oe = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${labelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}"
      }
    }
  ]
}, re = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${labelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}",
        required: "required"
      }
    }
  ]
}, ne = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${labelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "textarea",
      textContent: "${rowValue}",
      attributes: {
        class: "${inputClass} ${inputSizeClass}",
        rows: "3",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}"
      }
    }
  ]
}, le = {
  tagName: "div",
  attributes: {
    class: "${checkboxWrapperClass} ${fieldClass}"
  },
  children: [
    {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "${checkboxInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        value: "true"
      }
    },
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${checkboxLabelClass}",
        for: "${columnName}"
      }
    }
  ]
}, ie = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}"
      }
    }
  ]
}, ce = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}",
        required: "required"
      }
    }
  ]
}, de = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}"
      }
    },
    {
      tagName: "button",
      textContent: "${buttonText}",
      attributes: {
        type: "${buttonType}",
        class: "${inlineButtonClass}"
      }
    }
  ]
}, ue = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}",
        required: "required"
      }
    },
    {
      tagName: "button",
      textContent: "${buttonText}",
      attributes: {
        type: "${buttonType}",
        class: "${inlineButtonClass}"
      }
    }
  ]
}, be = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "textarea",
      textContent: "${rowValue}",
      attributes: {
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        rows: "3",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}"
      }
    }
  ]
}, me = {
  tagName: "div",
  attributes: {
    class: "${inlineCheckboxWrapperClass}"
  },
  children: [
    {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "${checkboxInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        value: "true"
      }
    },
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${checkboxLabelClass}",
        for: "${columnName}"
      }
    }
  ]
}, pe = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, fe = {
  buildBodyTr: se,
  buildBodyCell: oe,
  buildRequiredField: re,
  buildTextareaField: ne,
  buildCheckboxField: le,
  buildInlineField: ie,
  buildInlineRequiredField: ce,
  buildInlineFieldWithButton: de,
  buildInlineRequiredFieldWithButton: ue,
  buildInlineTextareaField: be,
  buildInlineCheckboxField: me,
  button: pe
}, he = (e) => typeof e == "object" && e !== null && !Array.isArray(e), ye = (e, t) => {
  if (!he(e)) return;
  let a = {};
  for (const [s, r] of Object.entries(e))
    a[s] = m(t, r);
  return a;
}, Ce = (e, t) => {
  const a = structuredClone(e);
  return Array.isArray(a) ? a.map((r) => m(t, r)) : void 0;
}, x = (e, t, a) => {
  if (e === "${agg:count}" && "rowData" in t) {
    if (Array.isArray(t == null ? void 0 : t.rowData))
      return t == null ? void 0 : t.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in t ? t == null ? void 0 : t.rowData : e.replace(/\$\{(\w+)\}/g, (s, r) => t[r] !== void 0 ? t[r] : s);
}, $e = (e, t) => x(e, t), we = (e, t, a) => {
  if (a && console.log("inElement : ", e), a && console.log("inTemplate : ", t), t == null)
    throw new TypeError("inTemplate is required");
  if (typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, m = (e, t, a) => {
  const s = e, r = t;
  we(s, r, a);
  const o = structuredClone(r);
  return typeof o == "string" ? x(o, s) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = $e(o == null ? void 0 : o.textContent, s)), "attributes" in o && (o.attributes = ye(o == null ? void 0 : o.attributes, s)), "children" in o && (o.children = Ce(o == null ? void 0 : o.children, s))), o);
}, ge = (e, t) => {
  if (!Array.isArray(e))
    throw new TypeError("inSource must be an Array");
  if (e.length === 0)
    throw new Error("inSource cannot be empty");
  for (let a = 0; a < e.length; a++)
    if (!e[a] || typeof e[a] != "object")
      throw new TypeError(`inSource[${a}] must be an object`);
  if (!t || typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, Ne = (e, t) => {
  const a = e, s = t;
  return ge(a, s), a.map((r) => m(r, s));
}, xe = (e, t) => e.map((s) => ({
  ...s,
  rowData: t[s.columnName]
})), Ae = (e, t, a) => {
  var r, o, n, d, c, u;
  if (!Array.isArray(e))
    throw new TypeError("inColumns must be an Array");
  if (e.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let l = 0; l < e.length; l++) {
    const i = e[l];
    if (!i || typeof i != "object")
      throw new TypeError(`inColumns[${l}] must be an object`);
    if (typeof i.columnName != "string" || !i.columnName.trim())
      throw new TypeError(`inColumns[${l}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(t))
    throw new TypeError("inData must be an Array");
  for (let l = 0; l < t.length; l++) {
    const i = t[l];
    if (!i || typeof i != "object")
      throw new TypeError(`inData[${l}] must be an object`);
  }
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("inSpec must be an object");
  const s = ((n = (o = (r = e[0]) == null ? void 0 : r.template) == null ? void 0 : o.body) == null ? void 0 : n.tr) || "buildBodyTr";
  if (!(s in a))
    throw new Error(`Row template "${s}" not found in inSpec`);
  for (let l = 0; l < e.length; l++) {
    const i = e[l], b = ((c = (d = i.template) == null ? void 0 : d.body) == null ? void 0 : c.cell) || ((u = i.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in a))
      throw new Error(`Cell template "${b}" for column "${i.columnName}" not found in inSpec`);
  }
  return !0;
}, Fe = (e, t) => e.map((s) => {
  var d, c, u;
  const r = ((c = (d = s.template) == null ? void 0 : d.body) == null ? void 0 : c.cell) || ((u = s.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", o = t[r];
  return m(s, o);
}), Ie = (e, t, a) => {
  var u, l, i;
  Ae(e, t, a);
  const s = e, r = t, o = a, n = ((i = (l = (u = s[0]) == null ? void 0 : u.template) == null ? void 0 : l.body) == null ? void 0 : i.tr) || "buildBodyTr", d = o[n];
  return r.map((b) => {
    const p = m(b, d), F = xe(s, b), I = Fe(F, o);
    return p.children = I, p;
  });
}, C = (e, t) => {
  var a;
  if (((a = e == null ? void 0 : e.attributes) == null ? void 0 : a["data-role"]) === t) return e;
  for (const s of (e == null ? void 0 : e.children) ?? []) {
    const r = C(s, t);
    if (r) return r;
  }
  return null;
}, Te = (e, t) => {
  const a = e[t.fileName], s = t.dataRole ? C(a, t.dataRole) : a;
  return (t.filePath ?? []).reduce((r, o) => r[o], s);
}, $ = (e) => Array.isArray(e) ? e : [e], w = {
  set: (e, t, a) => {
    e[t] = a;
  },
  push: (e, t, a) => {
    e[t].push(...$(a));
  },
  unshift: (e, t, a) => {
    e[t].unshift(...$(a));
  }
}, ke = (e, t, a) => {
  const s = t.dataRole ? C(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []];
  if (r.length === 0) {
    e[t.fileName] = a;
    return;
  }
  const o = r.pop(), n = r.reduce((d, c) => d[c], s);
  (w[t.action] ?? w.set)(n, o, a);
}, y = (e, t, a) => {
  const s = e[t];
  if (!s) throw new RangeError("Unknown bigButtons " + a + ": " + t);
  return s;
}, je = (e = {}) => {
  if (typeof e != "object" || Array.isArray(e))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const t = e["form.bigButtons"] ?? {};
  if (typeof t != "object" || Array.isArray(t))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const a = { ...N, ...t };
  return {
    options: a,
    header: y(h.headers, a.header, "header"),
    body: y(h.bodies, a.body, "body"),
    footer: y(h.footers, a.footer, "footer")
  };
}, Be = (e, t, a) => {
  const s = e.map((n) => {
    var u, l, i, b, p;
    const d = ((l = (u = n.template) == null ? void 0 : u.body) == null ? void 0 : l.cell) ?? (n.required ? "buildRequiredField" : "buildBodyCell");
    let c = ((i = a.body.fieldTemplates) == null ? void 0 : i[d]) ?? d;
    return n.buttonText && (c = ((b = a.body.buttonFieldTemplates) == null ? void 0 : b[c]) ?? c), {
      ...n,
      label: n.label ?? n.title ?? n.columnName,
      type: n.type ?? "text",
      placeholder: n.placeholder ?? "",
      buttonType: n.buttonType ?? "button",
      template: {
        ...n.template,
        body: { ...(p = n.template) == null ? void 0 : p.body, cell: c }
      }
    };
  }), r = t[0] ?? {}, o = Object.fromEntries(s.map((n) => [
    n.columnName,
    r[n.columnName] ?? n.value ?? ""
  ]));
  return { columns: s, rows: [o] };
}, ve = { applyTemplate: m, fromCollection: Ne, twoDimensional: Ie, resolveOptions: je, prepareFields: Be }, Pe = (e, t) => {
  t.forEach((a) => {
    const s = a.inputPaths.map((n) => Te(e, n));
    if (a.skipIfEmpty && s.some((n) => Array.isArray(n) && n.length === 0)) return;
    const o = ve[a.func](...s);
    ke(e, a.destinationPath, o);
  });
}, A = ({ inColumns: e, inData: t, inOptions: a, columns: s, data: r, options: o } = {}) => ({
  columns: Array.isArray(e) && e.length > 0 ? e : Array.isArray(s) ? s : [],
  records: Array.isArray(t) && t.length > 0 ? t : Array.isArray(r) ? r : [],
  options: a && Object.keys(a).length > 0 ? a : o ?? {}
}), Re = (e, t = {}) => {
  const a = {
    data: A(t),
    base: structuredClone(e),
    context: {},
    spec: fe
  };
  return Pe(a, _), a.base;
}, Ee = "bootstrap", qe = {
  bootstrap: {
    base: {
      cardClass: "card border-0 shadow-sm w-100",
      cardBodyClass: "card-body p-4 p-lg-5",
      labelClass: "form-label fw-semibold",
      inputClass: "form-control",
      inputSizeClass: "form-control-lg",
      checkboxWrapperClass: "form-check mb-3",
      checkboxInputClass: "form-check-input",
      checkboxLabelClass: "form-check-label",
      footerClass: "card-footer bg-transparent",
      footerActionsClass: "d-flex flex-wrap justify-content-end gap-2",
      buttonSizeClass: "btn-lg",
      buttonPaddingClass: "px-4 py-2",
      primaryButtonClass: "btn btn-primary text-nowrap",
      secondaryButtonClass: "btn btn-outline-secondary text-nowrap",
      infoButtonClass: "btn btn-outline-info text-nowrap",
      inlineButtonClass: "btn btn-outline-secondary text-nowrap"
    },
    headers: {
      none: {
        headerClass: "d-none",
        headerActionsClass: "d-none"
      },
      label: {
        headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
        headingClass: "me-auto",
        titleClass: "h4 fw-semibold mb-1",
        descriptionClass: "text-muted mb-0",
        recordIdClass: "d-none",
        headerActionsClass: "d-none",
        headerButtonClass: "btn btn-outline-secondary text-nowrap"
      },
      labelWithRefresh: {
        headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
        headingClass: "me-auto",
        titleClass: "h4 fw-semibold mb-1",
        descriptionClass: "text-muted mb-0",
        recordIdClass: "d-none",
        headerActionsClass: "d-flex align-items-center gap-2",
        headerButtonClass: "btn btn-outline-secondary text-nowrap"
      },
      labelWithId: {
        headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
        headingClass: "me-auto",
        titleClass: "h4 fw-semibold mb-1",
        descriptionClass: "text-muted mb-0",
        recordIdClass: "badge text-bg-light border text-secondary",
        headerActionsClass: "d-none",
        headerButtonClass: "btn btn-outline-secondary text-nowrap"
      }
    },
    bodies: {
      inline: {
        rowClass: "vstack gap-3",
        fieldClass: "d-flex align-items-center gap-3",
        inlineLabelClass: "form-label fw-semibold mb-0 text-nowrap",
        inlineInputClass: "flex-grow-1",
        inlineCheckboxWrapperClass: "form-check d-flex align-items-center gap-2"
      },
      stacked: {
        rowClass: "vstack gap-3",
        fieldClass: "w-100"
      },
      threeColumns: {
        rowClass: "row g-3",
        fieldClass: "col-md-4"
      }
    },
    footers: {
      none: {
        footerClass: "d-none"
      },
      saveCancel: {},
      edit: {}
    }
  }
}, g = {
  defaultFramework: Ee,
  frameworks: qe
}, Le = (e, t = {}) => {
  const a = A(t).options, s = { ...N, ...a["form.bigButtons"] ?? {} }, r = s.framework ?? g.defaultFramework, o = g.frameworks[r];
  if (!o) throw new RangeError("Unknown bigButtons framework: " + r);
  const n = Object.assign(
    {},
    s,
    o.base,
    o.headers[s.header],
    o.bodies[s.body],
    o.footers[s.footer]
  );
  return m(n, structuredClone(e));
}, We = (e = {}) => {
  const t = U(), a = Re(t, e);
  return Le(a, e);
}, ze = (e = {}) => {
  const t = { ...e, type: e.type ?? "form.bigButtons" };
  return v(t), We(t);
};
V(ze);
export {
  We as bigButtons,
  ze as default,
  ze as render,
  ze as renderForm
};
