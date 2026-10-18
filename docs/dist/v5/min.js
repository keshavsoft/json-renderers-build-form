const q = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const a = t.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, L = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const a = t.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, S = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const a = t.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, W = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const a = t.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, z = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("Config must be an object");
  return q(t), L(t), S(t), W(t), !0;
}, V = "table", D = "", O = [], K = [], M = "", U = "replace";
const C = {
  type: V,
  targetHtmlId: D,
  data: O,
  columns: K,
  classToApply: M,
  appendPosition: U,
  showLog: !1
}, H = (e) => {
  const t = typeof e == "object" && e !== null ? e.inKey ?? e.key : e;
  return t && t in C ? C[t] : { ...C };
};
Object.assign(H, C);
const G = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, J = (e) => {
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: G, render: e });
}, Q = [
  {
    narration: "Build the header actions into the base header slot.",
    func: "fromCollection",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "headerActions"
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
        fileName: "data",
        filePath: [
          "columns"
        ]
      },
      {
        fileName: "data",
        filePath: [
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
        fileName: "data",
        filePath: [
          "footerActions"
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
], X = [
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
], j = {
  build: Q,
  style: X
}, Y = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Z = (e, t) => {
  if (!Y(e)) return;
  let a = {};
  for (const [s, r] of Object.entries(e))
    a[s] = f(t, r);
  return a;
}, _ = (e, t) => {
  const a = structuredClone(e);
  return Array.isArray(a) ? a.map((r) => f(t, r)) : void 0;
}, E = (e, t, a) => {
  if (e === "${agg:count}" && "rowData" in t) {
    if (Array.isArray(t == null ? void 0 : t.rowData))
      return t == null ? void 0 : t.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in t ? t == null ? void 0 : t.rowData : e.replace(/\$\{(\w+)\}/g, (s, r) => t[r] !== void 0 ? t[r] : s);
}, ee = (e, t) => E(e, t), te = (e, t, a) => {
  if (a && console.log("inElement : ", e), a && console.log("inTemplate : ", t), t == null)
    throw new TypeError("inTemplate is required");
  if (typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, f = (e, t, a) => {
  const s = e, r = t;
  te(s, r, a);
  const o = structuredClone(r);
  return typeof o == "string" ? E(o, s) : (o === null || typeof o != "object" || ("textContent" in o && (o.textContent = ee(o == null ? void 0 : o.textContent, s)), "attributes" in o && (o.attributes = Z(o == null ? void 0 : o.attributes, s)), "children" in o && (o.children = _(o == null ? void 0 : o.children, s))), o);
}, ae = (e, t) => {
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
}, se = (e, t) => {
  const a = e, s = t;
  return ae(a, s), a.map((r) => f(r, s));
}, oe = (e, t) => e.map((s) => ({
  ...s,
  rowData: t[s.columnName]
})), re = (e, t, a) => {
  var r, o, l, u, d, b;
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
    const i = e[n], p = ((d = (u = i.template) == null ? void 0 : u.body) == null ? void 0 : d.cell) || ((b = i.template) == null ? void 0 : b.bodyCell) || "buildBodyCell";
    if (!(p in a))
      throw new Error(`Cell template "${p}" for column "${i.columnName}" not found in inSpec`);
  }
  return !0;
}, le = (e, t) => e.map((s) => {
  var u, d, b;
  const r = ((d = (u = s.template) == null ? void 0 : u.body) == null ? void 0 : d.cell) || ((b = s.template) == null ? void 0 : b.bodyCell) || "buildBodyCell", o = t[r];
  return f(s, o);
}), ne = (e, t, a) => {
  var b, n, i;
  re(e, t, a);
  const s = e, r = t, o = a, l = ((i = (n = (b = s[0]) == null ? void 0 : b.template) == null ? void 0 : n.body) == null ? void 0 : i.tr) || "buildBodyTr", u = o[l];
  return r.map((p) => {
    const h = f(p, u), m = oe(s, p), $ = le(m, o);
    return h.children = $, h;
  });
}, N = (e, t) => {
  var a;
  if (((a = e == null ? void 0 : e.attributes) == null ? void 0 : a["data-role"]) === t) return e;
  for (const s of (e == null ? void 0 : e.children) ?? []) {
    const r = N(s, t);
    if (r) return r;
  }
  return null;
}, ie = (e, t) => {
  const a = e[t.fileName], s = t.dataRole ? N(a, t.dataRole) : a;
  return (t.filePath ?? []).reduce((r, o) => r[o], s);
}, B = (e) => Array.isArray(e) ? e : [e], v = {
  set: (e, t, a) => {
    e[t] = a;
  },
  push: (e, t, a) => {
    e[t].push(...B(a));
  },
  unshift: (e, t, a) => {
    e[t].unshift(...B(a));
  }
}, ce = (e, t, a) => {
  const s = t.dataRole ? N(e[t.fileName], t.dataRole) : e[t.fileName], r = [...t.filePath ?? []];
  if (r.length === 0) {
    e[t.fileName] = a;
    return;
  }
  const o = r.pop(), l = r.reduce((u, d) => u[d], s);
  (v[t.action] ?? v.set)(l, o, a);
}, ue = { applyTemplate: f, fromCollection: se, twoDimensional: ne }, P = (e, t) => {
  t.forEach((a) => {
    const s = a.inputPaths.map((l) => ie(e, l));
    if (a.skipIfEmpty && s.some((l) => Array.isArray(l) && l.length === 0)) return;
    const o = ue[a.func](...s);
    ce(e, a.destinationPath, o);
  });
}, de = (e) => {
  P(e, j.build), P(e, j.style);
}, be = "div", me = {
  class: "${cardClass}",
  "data-role": "form-card"
}, pe = [
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
], fe = {
  tagName: be,
  attributes: me,
  children: pe
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
}, R = {
  defaultFramework: he,
  frameworks: ye
}, Ce = "bigButtonsForm", $e = "Account details", we = "Update your profile information.", ge = "", Ne = "label", xe = "stacked", Ae = "saveCancel", Ie = {
  formId: Ce,
  title: $e,
  description: we,
  recordId: ge,
  header: Ne,
  body: xe,
  footer: Ae
}, Te = {
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
}, Fe = {
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
}, ke = {
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
}, w = {
  headers: Te,
  bodies: Fe,
  footers: ke
}, je = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
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
}, Re = {
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
}, qe = {
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
}, Le = {
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
}, Se = {
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
}, We = {
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
}, ze = {
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
}, Ve = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, De = {
  buildBodyTr: je,
  buildBodyCell: Be,
  buildRequiredField: ve,
  buildTextareaField: Pe,
  buildCheckboxField: Re,
  buildInlineField: Ee,
  buildInlineRequiredField: qe,
  buildInlineFieldWithButton: Le,
  buildInlineRequiredFieldWithButton: Se,
  buildInlineTextareaField: We,
  buildInlineCheckboxField: ze,
  button: Ve
}, Oe = ({ inColumns: e, inData: t, inOptions: a, columns: s, data: r, options: o } = {}) => ({
  localColumns: Array.isArray(e) && e.length > 0 ? e : Array.isArray(s) ? s : [],
  localData: Array.isArray(t) && t.length > 0 ? t : Array.isArray(r) ? r : [],
  localOptions: a && Object.keys(a).length > 0 ? a : o ?? {}
}), g = (e, t, a) => {
  const s = e[t];
  if (!s) throw new RangeError("Unknown bigButtons " + a + ": " + t);
  return s;
}, Ke = (e = {}) => {
  const { localColumns: t, localData: a, localOptions: s } = Oe(e), r = s ?? {};
  if (typeof r != "object" || Array.isArray(r))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const o = r["form.bigButtons"] ?? {};
  if (typeof o != "object" || Array.isArray(o))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const l = { ...Ie, ...o }, u = g(w.headers, l.header, "header"), d = g(w.bodies, l.body, "body"), b = g(w.footers, l.footer, "footer"), n = t.map((c) => {
    var A, I, T, F, k;
    const x = ((I = (A = c.template) == null ? void 0 : A.body) == null ? void 0 : I.cell) ?? (c.required ? "buildRequiredField" : "buildBodyCell");
    let y = ((T = d.fieldTemplates) == null ? void 0 : T[x]) ?? x;
    return c.buttonText && (y = ((F = d.buttonFieldTemplates) == null ? void 0 : F[y]) ?? y), {
      ...c,
      label: c.label ?? c.title ?? c.columnName,
      type: c.type ?? "text",
      placeholder: c.placeholder ?? "",
      buttonType: c.buttonType ?? "button",
      template: {
        ...c.template,
        body: { ...(k = c.template) == null ? void 0 : k.body, cell: y }
      }
    };
  }), i = a[0] ?? {}, p = Object.fromEntries(n.map((c) => [
    c.columnName,
    i[c.columnName] ?? c.value ?? ""
  ])), h = l.framework ?? R.defaultFramework, m = R.frameworks[h];
  if (!m) throw new RangeError("Unknown bigButtons framework: " + h);
  const $ = Object.assign(
    {},
    l,
    m.base,
    m.headers.label,
    m.headers[l.header],
    m.bodies[l.body],
    m.footers[l.footer]
  );
  return {
    data: {
      columns: n,
      rows: [p],
      options: l,
      headerActions: u.actions,
      footerActions: b.actions
    },
    base: structuredClone(fe),
    context: { templateValues: $ },
    spec: De
  };
}, Me = (e = {}) => {
  const t = Ke(e);
  return de(t), t.base;
}, Ue = (e = {}) => {
  const t = { ...e, type: e.type ?? "form.bigButtons" };
  return z(t), Me(t);
};
J(Ue);
export {
  Me as bigButtons,
  Ue as default,
  Ue as render,
  Ue as renderForm
};
