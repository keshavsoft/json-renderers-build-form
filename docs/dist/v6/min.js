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
}, P = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("Config must be an object");
  return T(t), k(t), j(t), B(t), !0;
}, v = "table", R = "", E = [], q = [], L = "", W = "replace";
const f = {
  type: v,
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
}, O = [
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
    narration: "Resolve the selected framework classes for the card and its sections.",
    func: "resolveClasses",
    inputPaths: [
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
        "templateValues"
      ]
    }
  }
], D = [
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
], K = [
  {
    narration: "Apply the selected framework classes to the completed form.",
    func: "applyTemplate",
    inputPaths: [
      {
        fileName: "context",
        filePath: [
          "templateValues"
        ]
      },
      {
        fileName: "base"
      }
    ],
    destinationPath: {
      fileName: "base"
    }
  }
], h = {
  prepare: O,
  build: D,
  style: K
}, M = (e) => typeof e == "object" && e !== null && !Array.isArray(e), U = (e, t) => {
  if (!M(e)) return;
  let a = {};
  for (const [s, r] of Object.entries(e))
    a[s] = m(t, r);
  return a;
}, H = (e, t) => {
  const a = structuredClone(e);
  return Array.isArray(a) ? a.map((r) => m(t, r)) : void 0;
}, A = (e, t, a) => {
  if (e === "${agg:count}" && "rowData" in t) {
    if (Array.isArray(t == null ? void 0 : t.rowData))
      return t == null ? void 0 : t.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in t ? t == null ? void 0 : t.rowData : e.replace(/\$\{(\w+)\}/g, (s, r) => t[r] !== void 0 ? t[r] : s);
}, G = (e, t) => A(e, t), J = (e, t, a) => {
  if (a && console.log("inElement : ", e), a && console.log("inTemplate : ", t), t == null)
    throw new TypeError("inTemplate is required");
  if (typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, m = (e, t, a) => {
  const s = e, r = t;
  J(s, r, a);
  const o = structuredClone(r);
  return typeof o == "string" ? A(o, s) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = G(o == null ? void 0 : o.textContent, s)), "attributes" in o && (o.attributes = U(o == null ? void 0 : o.attributes, s)), "children" in o && (o.children = H(o == null ? void 0 : o.children, s))), o);
}, Q = (e, t) => {
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
}, X = (e, t) => {
  const a = e, s = t;
  return Q(a, s), a.map((r) => m(r, s));
}, Y = (e, t) => e.map((s) => ({
  ...s,
  rowData: t[s.columnName]
})), Z = (e, t, a) => {
  var r, o, l, d, c, u;
  if (!Array.isArray(e))
    throw new TypeError("inColumns must be an Array");
  if (e.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (!i || typeof i != "object")
      throw new TypeError(`inColumns[${n}] must be an object`);
    if (typeof i.columnName != "string" || !i.columnName.trim())
      throw new TypeError(`inColumns[${n}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(t))
    throw new TypeError("inData must be an Array");
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (!i || typeof i != "object")
      throw new TypeError(`inData[${n}] must be an object`);
  }
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("inSpec must be an object");
  const s = ((l = (o = (r = e[0]) == null ? void 0 : r.template) == null ? void 0 : o.body) == null ? void 0 : l.tr) || "buildBodyTr";
  if (!(s in a))
    throw new Error(`Row template "${s}" not found in inSpec`);
  for (let n = 0; n < e.length; n++) {
    const i = e[n], b = ((c = (d = i.template) == null ? void 0 : d.body) == null ? void 0 : c.cell) || ((u = i.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in a))
      throw new Error(`Cell template "${b}" for column "${i.columnName}" not found in inSpec`);
  }
  return !0;
}, _ = (e, t) => e.map((s) => {
  var d, c, u;
  const r = ((c = (d = s.template) == null ? void 0 : d.body) == null ? void 0 : c.cell) || ((u = s.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", o = t[r];
  return m(s, o);
}), ee = (e, t, a) => {
  var u, n, i;
  Z(e, t, a);
  const s = e, r = t, o = a, l = ((i = (n = (u = s[0]) == null ? void 0 : u.template) == null ? void 0 : n.body) == null ? void 0 : i.tr) || "buildBodyTr", d = o[l];
  return r.map((b) => {
    const p = m(b, d), F = Y(s, b), I = _(F, o);
    return p.children = I, p;
  });
}, w = (e, t) => {
  var a;
  if (((a = e == null ? void 0 : e.attributes) == null ? void 0 : a["data-role"]) === t) return e;
  for (const s of (e == null ? void 0 : e.children) ?? []) {
    const r = w(s, t);
    if (r) return r;
  }
  return null;
}, te = (e, t) => {
  const a = e[t.fileName], s = t.dataRole ? w(a, t.dataRole) : a;
  return (t.filePath ?? []).reduce((r, o) => r[o], s);
}, g = (e) => Array.isArray(e) ? e : [e], N = {
  set: (e, t, a) => {
    e[t] = a;
  },
  push: (e, t, a) => {
    e[t].push(...g(a));
  },
  unshift: (e, t, a) => {
    e[t].unshift(...g(a));
  }
}, ae = (e, t, a) => {
  const s = t.dataRole ? w(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []];
  if (r.length === 0) {
    e[t.fileName] = a;
    return;
  }
  const o = r.pop(), l = r.reduce((d, c) => d[c], s);
  (N[t.action] ?? N.set)(l, o, a);
}, se = "bigButtonsForm", oe = "Account details", re = "Update your profile information.", le = "", ne = "label", ie = "stacked", ce = "saveCancel", de = {
  formId: se,
  title: oe,
  description: re,
  recordId: le,
  header: ne,
  body: ie,
  footer: ce
}, ue = {
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
}, be = {
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
}, me = {
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
}, y = {
  headers: ue,
  bodies: be,
  footers: me
}, C = (e, t, a) => {
  const s = e[t];
  if (!s) throw new RangeError("Unknown bigButtons " + a + ": " + t);
  return s;
}, pe = (e = {}) => {
  if (typeof e != "object" || Array.isArray(e))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const t = e["form.bigButtons"] ?? {};
  if (typeof t != "object" || Array.isArray(t))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const a = { ...de, ...t };
  return {
    options: a,
    header: C(y.headers, a.header, "header"),
    body: C(y.bodies, a.body, "body"),
    footer: C(y.footers, a.footer, "footer")
  };
}, fe = (e, t, a) => {
  const s = e.map((l) => {
    var u, n, i, b, p;
    const d = ((n = (u = l.template) == null ? void 0 : u.body) == null ? void 0 : n.cell) ?? (l.required ? "buildRequiredField" : "buildBodyCell");
    let c = ((i = a.body.fieldTemplates) == null ? void 0 : i[d]) ?? d;
    return l.buttonText && (c = ((b = a.body.buttonFieldTemplates) == null ? void 0 : b[c]) ?? c), {
      ...l,
      label: l.label ?? l.title ?? l.columnName,
      type: l.type ?? "text",
      placeholder: l.placeholder ?? "",
      buttonType: l.buttonType ?? "button",
      template: {
        ...l.template,
        body: { ...(p = l.template) == null ? void 0 : p.body, cell: c }
      }
    };
  }), r = t[0] ?? {}, o = Object.fromEntries(s.map((l) => [
    l.columnName,
    r[l.columnName] ?? l.value ?? ""
  ]));
  return { columns: s, rows: [o] };
}, he = "bootstrap", ye = {
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
}, x = {
  defaultFramework: he,
  frameworks: ye
}, Ce = (e) => {
  const { options: t } = e, a = t.framework ?? x.defaultFramework, s = x.frameworks[a];
  if (!s) throw new RangeError("Unknown bigButtons framework: " + a);
  return Object.assign(
    {},
    t,
    s.base,
    s.headers[t.header],
    s.bodies[t.body],
    s.footers[t.footer]
  );
}, $e = { applyTemplate: m, fromCollection: X, twoDimensional: ee, resolveOptions: pe, prepareFields: fe, resolveClasses: Ce }, $ = (e, t) => {
  t.forEach((a) => {
    const s = a.inputPaths.map((l) => te(e, l));
    if (a.skipIfEmpty && s.some((l) => Array.isArray(l) && l.length === 0)) return;
    const o = $e[a.func](...s);
    ae(e, a.destinationPath, o);
  });
}, we = (e) => {
  $(e, h.prepare), $(e, h.build), $(e, h.style);
}, ge = "div", Ne = {
  class: "${cardClass}",
  "data-role": "form-card"
}, xe = [
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
], Ae = {
  tagName: ge,
  attributes: Ne,
  children: xe
}, Fe = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, Ie = {
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
}, Te = {
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
}, ke = {
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
}, je = {
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
}, Be = {
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
}, Pe = {
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
}, ve = {
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
}, Re = {
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
}, Ee = {
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
}, qe = {
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
}, Le = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, We = {
  buildBodyTr: Fe,
  buildBodyCell: Ie,
  buildRequiredField: Te,
  buildTextareaField: ke,
  buildCheckboxField: je,
  buildInlineField: Be,
  buildInlineRequiredField: Pe,
  buildInlineFieldWithButton: ve,
  buildInlineRequiredFieldWithButton: Re,
  buildInlineTextareaField: Ee,
  buildInlineCheckboxField: qe,
  button: Le
}, ze = ({ inColumns: e, inData: t, inOptions: a, columns: s, data: r, options: o } = {}) => ({
  columns: Array.isArray(e) && e.length > 0 ? e : Array.isArray(s) ? s : [],
  records: Array.isArray(t) && t.length > 0 ? t : Array.isArray(r) ? r : [],
  options: a && Object.keys(a).length > 0 ? a : o ?? {}
}), Se = (e = {}) => ({
  data: ze(e),
  base: structuredClone(Ae),
  context: {},
  spec: We
}), Ve = (e = {}) => {
  const t = Se(e);
  return we(t), t.base;
}, Oe = (e = {}) => {
  const t = { ...e, type: e.type ?? "form.bigButtons" };
  return P(t), Ve(t);
};
V(Oe);
export {
  Ve as bigButtons,
  Oe as default,
  Oe as render,
  Oe as renderForm
};
