const C = {
  version: "1.1.0",
  name: "json-renderers-build-form"
}, E = (s) => {
  const t = s;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const n = typeof t == "function" ? t : t.render;
  globalThis.ks.jsonRenderersBuildForm = {
    meta: C,
    render: n,
    ...typeof t == "object" ? t : {}
  };
}, F = ({ inConfig: s } = {}) => {
  const t = s;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (t.columns && !Array.isArray(t.columns))
    throw console.error("columns must be an Array"), new TypeError("columns must be an Array");
  if (t.data && !Array.isArray(t.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (t.options && typeof t.options != "object")
    throw console.error("options must be an object"), new TypeError("options must be an object");
  return !0;
}, W = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, $ = {
  tagName: "button",
  textContent: "Save",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, B = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: [
    {
      tagName: "label",
      textContent: "Notes",
      attributes: {
        class: "form-label fw-semibold",
        for: "fieldId"
      }
    },
    {
      tagName: "textarea",
      attributes: {
        class: "form-control",
        rows: "3",
        id: "fieldId",
        name: "fieldName"
      }
    }
  ]
}, V = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: [
    {
      tagName: "label",
      textContent: "Select",
      attributes: {
        class: "form-label fw-semibold",
        for: "fieldId"
      }
    },
    {
      tagName: "select",
      attributes: {
        class: "form-select",
        id: "fieldId",
        name: "fieldName"
      },
      children: []
    }
  ]
}, D = {
  tagName: "div",
  attributes: {
    class: "form-check mb-3"
  },
  children: [
    {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "form-check-input",
        id: "fieldId",
        name: "fieldName",
        value: "true"
      }
    },
    {
      tagName: "label",
      textContent: "Agree",
      attributes: {
        class: "form-check-label",
        for: "fieldId"
      }
    }
  ]
}, w = {
  form: W,
  submitButton: $,
  textareaRow: B,
  selectRow: V,
  checkboxRow: D
}, _ = {
  version: "1.1.0",
  name: "json-renderers-build-input-row"
}, P = (s) => {
  const t = s;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const n = typeof t == "function" ? t : t.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: _,
    render: n,
    ...typeof t == "object" ? t : {}
  };
}, x = [
  "input",
  "inputOnly",
  "inputWithLabel",
  "inputWithLabelButton"
], q = ({ inConfig: s } = {}) => {
  const t = s;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (t.type && (typeof t.type != "string" || !x.includes(t.type)))
    throw console.error(`type must be one of: ${x.join(", ")}`), new Error(`type must be one of: ${x.join(", ")}`);
  if (t.options && typeof t.options != "object")
    throw console.error("options must be an object"), new TypeError("options must be an object");
  return !0;
}, G = {
  tagName: "input",
  attributes: {
    type: "search",
    placeholder: "Search...",
    class: "form-control",
    id: "searchInputId"
  }
}, U = {
  tagName: "label",
  textContent: "Search:",
  attributes: {
    class: "form-label mb-0 text-nowrap fw-semibold",
    for: "searchInputId"
  }
}, Y = {
  tagName: "button",
  textContent: "Search",
  attributes: {
    type: "button",
    class: "btn btn-primary text-nowrap",
    id: "searchButtonId"
  }
}, z = {
  tagName: "div",
  attributes: {
    class: "d-flex align-items-center gap-2"
  },
  children: []
}, f = {
  input: G,
  label: U,
  button: Y,
  rowWrapper: z
}, g = ({ inOptions: s = {} } = {}) => {
  const t = s, n = structuredClone(f.input);
  return t != null && t.placeholder && (n.attributes.placeholder = t.placeholder), t != null && t.class && (n.attributes.class = t.class), t != null && t.id && (n.attributes.id = t.id), t != null && t.name && (n.attributes.name = t.name), t != null && t.type && (n.attributes.type = t.type), t != null && t.value && (n.attributes.value = t.value), n;
}, S = ({ inOptions: s = {} } = {}) => {
  const t = s, n = structuredClone(f.rowWrapper), a = structuredClone(f.label), e = (t == null ? void 0 : t.id) ?? f.input.attributes.id;
  t != null && t.wrapperClass && (n.attributes.class = t.wrapperClass), t != null && t.label && (a.textContent = t.label), t != null && t.labelClass && (a.attributes.class = t.labelClass), a.attributes.for = e;
  const o = g({
    inOptions: {
      ...t,
      id: e
    }
  });
  return n.children = [a, o], n;
}, I = ({ inOptions: s = {} } = {}) => {
  const t = s, n = structuredClone(f.rowWrapper), a = structuredClone(f.label), e = structuredClone(f.button), o = (t == null ? void 0 : t.id) ?? f.input.attributes.id, u = (t == null ? void 0 : t.buttonId) ?? f.button.attributes.id;
  t != null && t.wrapperClass && (n.attributes.class = t.wrapperClass), t != null && t.label && (a.textContent = t.label), t != null && t.labelClass && (a.attributes.class = t.labelClass), a.attributes.for = o;
  const d = g({
    inOptions: {
      ...t,
      id: o
    }
  });
  return t != null && t.buttonText && (e.textContent = t.buttonText), t != null && t.buttonClass && (e.attributes.class = t.buttonClass), t != null && t.buttonType && (e.attributes.type = t.buttonType), e.attributes.id = u, n.children = [a, d, e], n;
}, M = {
  input: g,
  inputOnly: g,
  inputWithLabel: S,
  inputWithLabelButton: I
}, H = ({
  type: s = "inputWithLabel",
  options: t = {},
  inType: n,
  inOptions: a,
  showLog: e = !1
} = {}) => {
  const o = n ?? s, u = a ?? t, d = e;
  q({ inConfig: { type: o, options: u } });
  const r = M[o];
  if (!r)
    throw new Error(`Flavour for type "${o}" not found.`);
  const c = r({ inOptions: u });
  return d && console.log("json-renderers-build-input-row output:", c), c;
};
P({
  render: H,
  inputOnly: g,
  inputWithLabel: S,
  inputWithLabelButton: I
});
const J = /* @__PURE__ */ new Set([
  "text",
  "email",
  "number",
  "tel",
  "url",
  "password",
  "search",
  "date",
  "datetime-local",
  "time",
  "month",
  "week",
  "color"
]), K = (s) => String(s ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "field", Q = ({ inOption: s, inSelectedValue: t } = {}) => {
  const n = s, a = t, e = n && typeof n == "object" ? n.value : n, o = n && typeof n == "object" ? n.label ?? e : n, u = a != null && String(e) === String(a);
  return {
    tagName: "option",
    textContent: String(o ?? ""),
    attributes: {
      value: String(e ?? ""),
      ...u ? { selected: !0 } : {}
    }
  };
}, A = ({ inColumn: s, inRow: t = {}, inIndex: n = 0, inFormLayout: a = "vertical" } = {}) => {
  var T, v, N;
  const e = s, o = t, u = n, d = a, r = (e == null ? void 0 : e.columnName) ?? `field_${u}`, c = (e == null ? void 0 : e.type) ?? "text", p = (e == null ? void 0 : e.label) ?? (e == null ? void 0 : e.title) ?? r, i = (e == null ? void 0 : e.id) ?? `form-${u}-${K(r)}`, b = o[r] ?? (e == null ? void 0 : e.value), y = {
    id: i,
    name: r,
    ...e != null && e.placeholder ? { placeholder: e.placeholder } : {},
    ...e != null && e.required ? { required: !0 } : {},
    ...e != null && e.disabled ? { disabled: !0 } : {},
    ...e != null && e.readOnly ? { readonly: !0 } : {}
  };
  if (c === "checkbox") {
    const l = structuredClone(w.checkboxRow), m = l.children[0], h = l.children[1];
    return Object.assign(m.attributes, y, {
      type: "checkbox",
      value: (e == null ? void 0 : e.value) ?? "true"
    }), m.properties = { checked: !!(b ?? (e == null ? void 0 : e.checked) ?? !1) }, h.textContent = p, h.attributes.for = i, l;
  }
  if (c === "textarea") {
    const l = structuredClone(w.textareaRow), m = l.children[0], h = l.children[1];
    return m.textContent = p, m.attributes.for = i, Object.assign(h.attributes, y, {
      rows: String((e == null ? void 0 : e.rows) ?? 3)
    }), b != null && (h.textContent = String(b)), l;
  }
  if (c === "select") {
    const l = structuredClone(w.selectRow), m = l.children[0], h = l.children[1];
    return m.textContent = p, m.attributes.for = i, Object.assign(h.attributes, y), h.children = ((e == null ? void 0 : e.options) ?? []).map(
      (L) => Q({ inOption: L, inSelectedValue: b })
    ), l;
  }
  const k = J.has(c) ? c : "text", j = {
    label: p,
    type: k,
    id: i,
    name: r,
    placeholder: (e == null ? void 0 : e.placeholder) ?? "",
    class: (e == null ? void 0 : e.class) ?? "form-control",
    value: b != null ? String(b) : void 0,
    wrapperClass: d === "inline" ? "d-flex align-items-center gap-2 mb-3" : "mb-3",
    labelClass: d === "inline" ? "form-label mb-0 text-nowrap fw-semibold" : "form-label fw-semibold"
  };
  return e != null && e.buttonText || e != null && e.button ? I({
    inOptions: {
      ...j,
      buttonText: e.buttonText ?? ((T = e.button) == null ? void 0 : T.text) ?? "Action",
      buttonClass: e.buttonClass ?? ((v = e.button) == null ? void 0 : v.class) ?? "btn btn-outline-primary",
      buttonId: e.buttonId ?? ((N = e.button) == null ? void 0 : N.id) ?? `${i}-btn`
    }
  }) : S({ inOptions: j });
}, R = ({ inColumns: s = [], inData: t = [], inOptions: n = {}, columns: a, data: e, options: o } = {}) => {
  const u = Array.isArray(s) && s.length > 0 ? s : Array.isArray(a) ? a : [], d = Array.isArray(t) && t.length > 0 ? t : Array.isArray(e) ? e : [], r = n && Object.keys(n).length > 0 ? n : o ?? {}, c = d[0] ?? {}, p = (r == null ? void 0 : r.layout) ?? "vertical", i = structuredClone(w.form);
  if (r != null && r.formId && (i.attributes.id = r.formId), r != null && r.className && (i.attributes.class = r.className), r != null && r.ariaLabel && (i.attributes["aria-label"] = r.ariaLabel), i.children = u.map(
    (b, y) => A({
      inColumn: b,
      inRow: c,
      inIndex: y,
      inFormLayout: p
    })
  ), (r == null ? void 0 : r.showSubmit) !== !1) {
    const b = structuredClone(w.submitButton);
    b.textContent = (r == null ? void 0 : r.submitLabel) ?? "Save", r != null && r.submitClass && (b.attributes.class = r.submitClass), r != null && r.submitId && (b.attributes.id = r.submitId), i.children.push(b);
  }
  return i;
}, X = ({
  columns: s = [],
  data: t = [],
  options: n = {},
  inColumns: a,
  inData: e,
  inOptions: o,
  showLog: u = !1
} = {}) => {
  const d = a ?? s, r = e ?? t, c = o ?? n, p = u;
  F({
    inConfig: {
      columns: d,
      data: r,
      options: c
    }
  });
  const i = R({
    inColumns: d,
    inData: r,
    inOptions: c
  });
  return p && console.log("json-renderers-build-form output:", i), i;
};
E({
  render: X,
  renderForm: R,
  renderField: A
});
export {
  X as default,
  X as render,
  A as renderField,
  R as renderForm
};
