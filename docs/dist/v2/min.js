const T = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, j = (a) => {
  const r = a;
  if (typeof globalThis > "u" || !r) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof r == "function" ? r : r.render;
  globalThis.ks.jsonRenderersBuildForm = {
    meta: T,
    render: e,
    ...typeof r == "object" ? r : {}
  };
}, R = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, F = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, W = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, C = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, _ = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, m = {
  form: R,
  fieldWrapper: F,
  label: W,
  input: C,
  submitButton: _
}, v = ({ inColumn: a, inRow: r = {}, inIndex: e = 0 } = {}) => {
  var A, B;
  const t = a, u = r, c = e, b = (t == null ? void 0 : t.columnName) ?? `field_${c}`, d = (t == null ? void 0 : t.type) ?? "text", s = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? b, o = (t == null ? void 0 : t.id) ?? `form-${c}-${b.toLowerCase()}`, i = u[b] ?? (t == null ? void 0 : t.value), n = structuredClone(m.fieldWrapper), l = structuredClone(m.label);
  if (l.textContent = s, l.attributes.for = o, d === "checkbox") {
    n.attributes.class = "form-check mb-3";
    const f = structuredClone(m.input);
    return f.attributes.type = "checkbox", f.attributes.class = "form-check-input", f.attributes.id = o, f.attributes.name = b, f.attributes.value = "true", f.properties = { checked: !!(i ?? (t == null ? void 0 : t.checked) ?? !1) }, l.attributes.class = "form-check-label", n.children = [f, l], n;
  }
  if (d === "textarea") {
    const f = {
      tagName: "textarea",
      textContent: i ? String(i) : "",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-control",
        rows: String((t == null ? void 0 : t.rows) ?? 3),
        id: o,
        name: b,
        placeholder: (t == null ? void 0 : t.placeholder) ?? ""
      }
    };
    return n.children = [l, f], n;
  }
  if (d === "select") {
    const f = {
      tagName: "select",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-select",
        id: o,
        name: b
      },
      children: ((t == null ? void 0 : t.options) ?? []).map((h) => {
        const S = String(typeof h == "object" ? h.value : h), k = typeof h == "object" ? h.label ?? h.value : String(h), L = i != null && String(i) === S;
        return {
          tagName: "option",
          textContent: k,
          attributes: {
            value: S,
            ...L ? { selected: !0 } : {}
          }
        };
      })
    };
    return n.children = [l, f], n;
  }
  const p = structuredClone(m.input);
  if (p.attributes.type = d, p.attributes.id = o, p.attributes.name = b, t != null && t.placeholder && (p.attributes.placeholder = t.placeholder), t != null && t.class && (p.attributes.class = t.class), i != null && (p.attributes.value = String(i)), t != null && t.buttonText || t != null && t.button) {
    const f = {
      tagName: "button",
      textContent: t.buttonText ?? ((A = t.button) == null ? void 0 : A.text) ?? "Action",
      attributes: {
        type: "button",
        class: t.buttonClass ?? ((B = t.button) == null ? void 0 : B.class) ?? "btn btn-success",
        id: t.buttonId ?? `${o}-btn`
      }
    };
    return n.children = [l, p, f], n;
  }
  return n.children = [l, p], n;
}, y = ({ inColumns: a = [], inData: r = [], inOptions: e = {}, columns: t, data: u, options: c } = {}) => {
  const b = Array.isArray(a) && a.length > 0 ? a : Array.isArray(t) ? t : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(u) ? u : [], s = e && Object.keys(e).length > 0 ? e : c ?? {}, o = d[0] ?? {}, i = structuredClone(m.form);
  if (s != null && s.formId && (i.attributes.id = s.formId), s != null && s.className && (i.attributes.class = s.className), i.children = b.map(
    (n, l) => v({ inColumn: n, inRow: o, inIndex: l })
  ), (s == null ? void 0 : s.showSubmit) !== !1 && (s == null ? void 0 : s.submitButton) !== !1) {
    const n = structuredClone(m.submitButton);
    s != null && s.submitLabel && (n.textContent = s.submitLabel), s != null && s.submitClass && (n.attributes.class = s.submitClass), i.children.push(n);
  }
  return i;
}, D = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "inlineFormId"
  },
  children: []
}, E = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, $ = {
  form: D,
  submitButton: E
}, M = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, G = (a) => {
  const r = a;
  if (typeof globalThis > "u" || !r) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof r == "function" ? r : r.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: M,
    render: e,
    ...typeof r == "object" ? r : {}
  };
}, P = "input", z = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, V = {
  tagName: P,
  attributes: z
}, x = ({ inOptions: a = {}, options: r = {} } = {}) => {
  const e = a && Object.keys(a).length > 0 ? a : r, t = structuredClone(V);
  return e.placeholder && (t.attributes.placeholder = e.placeholder), e.class && (t.attributes.class = e.class), e.id && (t.attributes.id = e.id), e.name && (t.attributes.name = e.name), e.type && (t.attributes.type = e.type), e.value && (t.attributes.value = e.value), t;
}, q = "div", H = {
  class: "d-flex align-items-center gap-2"
}, J = [
  {
    tagName: "label",
    textContent: "Search:",
    attributes: {
      class: "form-label mb-0 text-nowrap fw-semibold",
      for: "searchInputId"
    }
  },
  {
    tagName: "input",
    attributes: {
      type: "search",
      placeholder: "Search...",
      class: "form-control",
      id: "searchInputId"
    }
  }
], K = {
  tagName: q,
  attributes: H,
  children: J
}, g = ({ inOptions: a = {}, options: r = {} } = {}) => {
  const e = a && Object.keys(a).length > 0 ? a : r, t = structuredClone(K), u = t.children[0], c = t.children[1];
  return e.label && (u.textContent = e.label), e.id && (u.attributes.for = e.id, c.attributes.id = e.id), e.placeholder && (c.attributes.placeholder = e.placeholder), e.class && (c.attributes.class = e.class), e.name && (c.attributes.name = e.name), e.type && (c.attributes.type = e.type), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (u.attributes.class = e.labelClass), t;
}, Q = "div", U = {
  class: "d-flex align-items-center gap-2"
}, X = [
  {
    tagName: "label",
    textContent: "Search:",
    attributes: {
      class: "form-label mb-0 text-nowrap fw-semibold",
      for: "searchInputId"
    }
  },
  {
    tagName: "input",
    attributes: {
      type: "search",
      placeholder: "Search...",
      class: "form-control",
      id: "searchInputId"
    }
  },
  {
    tagName: "button",
    textContent: "Search",
    attributes: {
      type: "button",
      class: "btn btn-primary text-nowrap",
      id: "searchButtonId"
    }
  }
], Y = {
  tagName: Q,
  attributes: U,
  children: X
}, w = ({ inOptions: a = {}, options: r = {} } = {}) => {
  const e = a && Object.keys(a).length > 0 ? a : r, t = structuredClone(Y), u = t.children[0], c = t.children[1], b = t.children[2];
  return e.label && (u.textContent = e.label), e.id && (u.attributes.for = e.id, c.attributes.id = e.id), e.placeholder && (c.attributes.placeholder = e.placeholder), e.class && (c.attributes.class = e.class), e.name && (c.attributes.name = e.name), e.type && (c.attributes.type = e.type), e.buttonText && (b.textContent = e.buttonText), e.buttonClass && (b.attributes.class = e.buttonClass), e.buttonId && (b.attributes.id = e.buttonId), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (u.attributes.class = e.labelClass), t;
}, Z = {
  input: x,
  inputOnly: x,
  inputWithLabel: g,
  inputWithLabelButton: w
}, O = ({
  type: a = "inputWithLabel",
  options: r = {},
  inType: e,
  inOptions: t
} = {}) => {
  const u = e ?? a, c = t ?? r;
  return (Z[u] || g)({ inOptions: c, options: c });
};
G({
  render: O,
  inputOnly: x,
  inputWithLabel: g,
  inputWithLabelButton: w
});
const tt = ({ inColumn: a, inRow: r = {}, inIndex: e = 0 } = {}) => {
  var n, l;
  const t = a, u = r, c = e, b = (t == null ? void 0 : t.columnName) ?? `field_${c}`, d = (t == null ? void 0 : t.type) ?? "text", s = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? b, o = (t == null ? void 0 : t.id) ?? `form-${c}-${b.toLowerCase()}`, i = u[b] ?? (t == null ? void 0 : t.value);
  return t != null && t.buttonText || t != null && t.button ? w({
    inOptions: {
      label: s,
      type: d,
      id: o,
      name: b,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      buttonText: t.buttonText ?? ((n = t.button) == null ? void 0 : n.text) ?? "Action",
      buttonClass: t.buttonClass ?? ((l = t.button) == null ? void 0 : l.class) ?? "btn btn-outline-primary",
      buttonId: t.buttonId ?? `${o}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : g({
    inOptions: {
      label: s,
      type: d,
      id: o,
      name: b,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, I = ({ inColumns: a = [], inData: r = [], inOptions: e = {}, columns: t, data: u, options: c } = {}) => {
  const b = Array.isArray(a) && a.length > 0 ? a : Array.isArray(t) ? t : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(u) ? u : [], s = e && Object.keys(e).length > 0 ? e : c ?? {}, o = d[0] ?? {}, i = structuredClone($.form);
  if (s != null && s.formId && (i.attributes.id = s.formId), s != null && s.className && (i.attributes.class = s.className), i.children = b.map(
    (n, l) => tt({ inColumn: n, inRow: o, inIndex: l })
  ), (s == null ? void 0 : s.showSubmit) !== !1 && (s == null ? void 0 : s.submitButton) !== !1) {
    const n = structuredClone($.submitButton);
    s != null && s.submitLabel && (n.textContent = s.submitLabel), s != null && s.submitClass && (n.attributes.class = s.submitClass), i.children.push(n);
  }
  return i;
}, et = {
  tagName: "div",
  attributes: {
    class: "d-flex align-items-center gap-2 mt-3"
  },
  children: [
    {
      tagName: "button",
      textContent: "Submit",
      attributes: {
        type: "submit",
        class: "btn btn-primary",
        id: "submitBtnId"
      }
    },
    {
      tagName: "button",
      textContent: "Cancel",
      attributes: {
        type: "button",
        class: "btn btn-secondary",
        id: "cancelBtnId"
      }
    }
  ]
}, st = {
  buttonBar: et
}, N = ({ inColumns: a = [], inData: r = [], inOptions: e = {}, columns: t, data: u, options: c } = {}) => {
  const b = Array.isArray(a) && a.length > 0 ? a : Array.isArray(t) ? t : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(u) ? u : [], s = e && Object.keys(e).length > 0 ? e : c ?? {}, o = y({
    inColumns: b,
    inData: d,
    inOptions: { ...s, submitButton: !1, showSubmit: !1 }
  }), i = structuredClone(st.buttonBar);
  return s != null && s.buttons && Array.isArray(s.buttons) ? i.children = s.buttons.map((n, l) => ({
    tagName: "button",
    textContent: n.text ?? n.label ?? "Action",
    attributes: {
      type: n.type ?? "button",
      class: n.class ?? (l === 0 ? "btn btn-primary" : "btn btn-secondary"),
      id: n.id ?? `btn-${l}`
    }
  })) : (s != null && s.submitLabel && (i.children[0].textContent = s.submitLabel), s != null && s.cancelLabel && (i.children[1].textContent = s.cancelLabel)), o.children.push(i), o;
}, rt = {
  stacked: y,
  vertical: y,
  inline: I,
  horizontal: I,
  withButtons: N,
  buttons: N
}, at = ({
  type: a = "stacked",
  columns: r = [],
  data: e = [],
  options: t = {},
  inType: u,
  inColumns: c,
  inData: b,
  inOptions: d
} = {}) => {
  const s = u ?? a, o = c ?? r, i = b ?? e, n = d ?? t;
  return (rt[s] || y)({
    inColumns: o,
    inData: i,
    inOptions: n
  });
}, nt = y, it = v;
j({
  render: at,
  stacked: y,
  inline: I,
  withButtons: N,
  renderForm: nt,
  renderField: it
});
export {
  at as default,
  I as inline,
  at as render,
  it as renderField,
  nt as renderForm,
  tt as renderInlineField,
  v as renderStackedField,
  y as stacked,
  N as withButtons
};
