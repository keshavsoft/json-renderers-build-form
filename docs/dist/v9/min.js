const A = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.type;
  if (s === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof s != "string")
    throw new TypeError("type must be a string");
  return !0;
}, j = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.data;
  if (s === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(s))
    throw new TypeError("data must be an Array");
  return !0;
}, I = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.columns;
  if (s === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(s))
    throw new TypeError("columns must be an Array");
  return !0;
}, B = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object")
    throw new TypeError("Config must be an object");
  const s = t.showLog;
  if (s !== void 0 && typeof s != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, v = (e) => {
  const t = (e == null ? void 0 : e.inConfig) ?? e;
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("Config must be an object");
  return A(t), j(t), I(t), B(t), !0;
}, R = "table", q = "", E = [], L = [], W = "", z = "replace";
const y = {
  type: R,
  targetHtmlId: q,
  data: E,
  columns: L,
  classToApply: W,
  appendPosition: z,
  showLog: !1
}, S = (e) => {
  const t = typeof e == "object" && e !== null ? e.inKey ?? e.key : e;
  return t && t in y ? y[t] : { ...y };
};
Object.assign(S, y);
const V = {
  version: "1.9.1",
  name: "json-renderers-build-form",
  git: "https://github.com/keshavsoft/json-renderers-build-form"
}, O = (e) => {
  var t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), (t = globalThis.ks).jsonRenderers ?? (t.jsonRenderers = {}), globalThis.ks.jsonRenderers.buildForm = { meta: V, render: e });
}, U = "div", D = {
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
], H = {
  tagName: U,
  attributes: D,
  children: K
}, P = () => structuredClone(H), M = (e) => typeof e == "object" && e !== null && !Array.isArray(e), G = (e, t) => {
  if (!M(e)) return;
  let s = {};
  for (const [o, r] of Object.entries(e))
    s[o] = p(t, r);
  return s;
}, J = (e, t) => {
  const s = structuredClone(e);
  return Array.isArray(s) ? s.map((r) => p(t, r)) : void 0;
}, g = (e, t, s) => {
  if (e === "${agg:count}" && "rowData" in t) {
    if (Array.isArray(t == null ? void 0 : t.rowData))
      return t == null ? void 0 : t.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in t ? t == null ? void 0 : t.rowData : e.replace(/\$\{(\w+)\}/g, (o, r) => t[r] !== void 0 ? t[r] : o);
}, Q = (e, t) => g(e, t), X = (e, t, s) => {
  if (s && console.log("inElement : ", e), s && console.log("inTemplate : ", t), t == null)
    throw new TypeError("inTemplate is required");
  if (typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, Y = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, Z = (e) => {
  var t, s;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), (t = globalThis.ks).applyTemplate ?? (t.applyTemplate = e), (s = globalThis.ks).transformerFuncs ?? (s.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: Y,
    applyTemplate: e
  });
}, p = (e, t, s) => {
  const o = e, r = t;
  X(o, r, s);
  const a = structuredClone(r);
  return typeof a == "string" ? g(a, o) : (a === null || typeof a != "object" || ("textContent" in a && (a.textContent = Q(a == null ? void 0 : a.textContent, o)), "attributes" in a && (a.attributes = G(a == null ? void 0 : a.attributes, o)), "children" in a && (a.children = J(a == null ? void 0 : a.children, o))), a);
};
Z(p);
const _ = (e, t) => {
  if (!Array.isArray(e))
    throw new TypeError("inSource must be an Array");
  if (e.length === 0)
    throw new Error("inSource cannot be empty");
  for (let s = 0; s < e.length; s++)
    if (!e[s] || typeof e[s] != "object")
      throw new TypeError(`inSource[${s}] must be an object`);
  if (!t || typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, N = (e, t) => {
  const s = e, o = t;
  return _(s, o), s.map((r) => p(r, o));
}, ee = (e, t) => e.map((o) => ({
  ...o,
  rowData: t[o.columnName]
})), te = (e, t, s) => {
  var r, a, n, d, c, u;
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
  if (!s || typeof s != "object" || Array.isArray(s))
    throw new TypeError("inSpec must be an object");
  const o = ((n = (a = (r = e[0]) == null ? void 0 : r.template) == null ? void 0 : a.body) == null ? void 0 : n.tr) || "buildBodyTr";
  if (!(o in s))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let l = 0; l < e.length; l++) {
    const i = e[l], b = ((c = (d = i.template) == null ? void 0 : d.body) == null ? void 0 : c.cell) || ((u = i.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in s))
      throw new Error(`Cell template "${b}" for column "${i.columnName}" not found in inSpec`);
  }
  return !0;
}, se = (e, t) => e.map((o) => {
  var d, c, u;
  const r = ((c = (d = o.template) == null ? void 0 : d.body) == null ? void 0 : c.cell) || ((u = o.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", a = t[r];
  return p(o, a);
}), oe = (e, t, s) => {
  var u, l, i;
  te(e, t, s);
  const o = e, r = t, a = s, n = ((i = (l = (u = o[0]) == null ? void 0 : u.template) == null ? void 0 : l.body) == null ? void 0 : i.tr) || "buildBodyTr", d = a[n];
  return r.map((b) => {
    const m = p(b, d), k = ee(o, b), F = se(k, a);
    return m.children = F, m;
  });
}, f = (e, t) => {
  var s;
  if (((s = e == null ? void 0 : e.attributes) == null ? void 0 : s["data-role"]) === t) return e;
  for (const o of (e == null ? void 0 : e.children) ?? []) {
    const r = f(o, t);
    if (r) return r;
  }
  return null;
}, ae = "header-actions", re = "button", $ = {
  destinationRole: ae,
  template: re
}, ne = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, le = {
  button: ne
}, ie = (e, t) => {
  const s = structuredClone(e), o = N(t.header.actions, le[$.template]);
  return f(s, $.destinationRole).children.push(...o), s;
}, ce = "form-body", ue = {
  destinationRole: ce
}, de = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
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
}, pe = {
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
}, me = {
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
}, ye = {
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
}, fe = {
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
}, he = {
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
}, Ce = {
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
}, $e = {
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
}, we = {
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
}, ge = {
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
}, Ne = {
  buildBodyTr: de,
  buildBodyCell: be,
  buildRequiredField: pe,
  buildTextareaField: me,
  buildCheckboxField: ye,
  buildInlineField: fe,
  buildInlineRequiredField: he,
  buildInlineFieldWithButton: Ce,
  buildInlineRequiredFieldWithButton: $e,
  buildInlineTextareaField: we,
  buildInlineCheckboxField: ge
}, xe = (e, t, s) => {
  const o = e.map((n) => {
    var u, l, i, b, m;
    const d = ((l = (u = n.template) == null ? void 0 : u.body) == null ? void 0 : l.cell) ?? (n.required ? "buildRequiredField" : "buildBodyCell");
    let c = ((i = s.fieldTemplates) == null ? void 0 : i[d]) ?? d;
    return n.buttonText && (c = ((b = s.buttonFieldTemplates) == null ? void 0 : b[c]) ?? c), {
      ...n,
      label: n.label ?? n.title ?? n.columnName,
      type: n.type ?? "text",
      placeholder: n.placeholder ?? "",
      buttonType: n.buttonType ?? "button",
      template: { ...n.template, body: { ...(m = n.template) == null ? void 0 : m.body, cell: c } }
    };
  }), r = t[0] ?? {}, a = Object.fromEntries(o.map((n) => [
    n.columnName,
    r[n.columnName] ?? n.value ?? ""
  ]));
  return { columns: o, rows: [a] };
}, Te = (e, t, s) => {
  const o = xe(t.columns, t.records, s.body), r = oe(o.columns, o.rows, Ne), a = structuredClone(e);
  return f(a, ue.destinationRole).children.push(...Array.isArray(r) ? r : [r]), a;
}, ke = "footer-actions", Fe = "button", w = {
  destinationRole: ke,
  template: Fe
}, Ae = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, je = {
  button: Ae
}, Ie = (e, t) => {
  const s = structuredClone(e), o = N(t.footer.actions, je[w.template]);
  return f(s, w.destinationRole).children.push(...o), s;
}, x = ({ inColumns: e, inData: t, inOptions: s, columns: o, data: r, options: a } = {}) => ({
  columns: Array.isArray(e) && e.length > 0 ? e : Array.isArray(o) ? o : [],
  records: Array.isArray(t) && t.length > 0 ? t : Array.isArray(r) ? r : [],
  options: s && Object.keys(s).length > 0 ? s : a ?? {}
}), Be = "bigButtonsForm", ve = "Account details", Re = "Update your profile information.", qe = "", Ee = "label", Le = "stacked", We = "saveCancel", ze = {
  formId: Be,
  title: ve,
  description: Re,
  recordId: qe,
  header: Ee,
  body: Le,
  footer: We
}, Se = {
  actions: []
}, Ve = {
  actions: []
}, Oe = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, Ue = {
  actions: []
}, De = {
  none: Se,
  label: Ve,
  labelWithRefresh: Oe,
  labelWithId: Ue
}, Ke = {
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
}, He = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Pe = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Me = {
  inline: Ke,
  stacked: He,
  threeColumns: Pe
}, Ge = {
  actions: []
}, Je = {
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
}, Qe = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, Xe = {
  none: Ge,
  saveCancel: Je,
  edit: Qe
}, h = (e, t, s) => {
  const o = e[t];
  if (!o) throw new RangeError("Unknown bigButtons " + s + ": " + t);
  return o;
}, T = (e) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const t = e["form.bigButtons"] ?? {};
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const s = { ...ze, ...t };
  return {
    options: s,
    header: h(De, s.header, "header"),
    body: h(Me, s.body, "body"),
    footer: h(Xe, s.footer, "footer")
  };
}, Ye = (e, t = {}) => {
  const s = x(t), o = T(s.options), r = ie(e, o), a = Te(r, s, o);
  return Ie(a, o);
}, Ze = {
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
}, _e = {
  bootstrap: Ze
}, et = (e, t) => {
  var o;
  const s = (o = _e[t]) == null ? void 0 : o[e.header];
  if (!s) throw new RangeError("Unknown bigButtons header: " + e.header);
  return s;
}, tt = "bootstrap", st = {
  bootstrap: {
    base: {
      cardClass: "card border-0 shadow-sm w-100",
      cardBodyClass: "card-body p-4 p-lg-5",
      labelClass: "form-label fw-semibold",
      inputClass: "form-control",
      inputSizeClass: "form-control-lg",
      checkboxWrapperClass: "form-check mb-3",
      checkboxInputClass: "form-check-input",
      checkboxLabelClass: "form-check-label"
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
    }
  }
}, C = {
  defaultFramework: tt,
  frameworks: st
}, ot = (e, t) => {
  const s = C.frameworks[t];
  if (!s) throw new RangeError("Unknown bigButtons framework: " + t);
  const o = s.bodies[e.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + e.body);
  return { ...s.base, ...o };
}, at = {
  base: {
    footerClass: "card-footer bg-transparent",
    footerActionsClass: "d-flex flex-wrap justify-content-end gap-2",
    buttonSizeClass: "btn-lg",
    buttonPaddingClass: "px-4 py-2",
    primaryButtonClass: "btn btn-primary text-nowrap",
    secondaryButtonClass: "btn btn-outline-secondary text-nowrap",
    infoButtonClass: "btn btn-outline-info text-nowrap",
    inlineButtonClass: "btn btn-outline-secondary text-nowrap"
  },
  footers: {
    none: {
      footerClass: "d-none"
    },
    saveCancel: {},
    edit: {}
  }
}, rt = {
  bootstrap: at
}, nt = (e, t) => {
  const s = rt[t], o = s == null ? void 0 : s.footers[e.footer];
  if (!s) throw new RangeError("Unknown bigButtons framework: " + t);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + e.footer);
  return { ...s.base, ...o };
}, lt = (e, t = {}) => {
  const s = T(x(t).options), { options: o } = s, r = o.framework ?? C.defaultFramework;
  if (!C.frameworks[r]) throw new RangeError("Unknown bigButtons framework: " + r);
  const n = Object.assign(
    {},
    o,
    ot(o, r),
    et(o, r),
    nt(o, r)
  );
  return p(n, structuredClone(e));
}, it = (e = {}) => {
  const t = P(), s = Ye(t, e);
  return lt(s, e);
}, ct = (e = {}) => {
  const t = { ...e, type: e.type ?? "form.bigButtons" };
  return v(t), it(t);
};
O(ct);
export {
  it as bigButtons,
  ct as default,
  ct as render,
  ct as renderForm
};
