const $ = (s) => {
  const r = (s == null ? void 0 : s.inConfig) ?? s;
  if (!r || typeof r != "object")
    throw new TypeError("Config must be an object");
  const e = r.type;
  if (e === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof e != "string")
    throw new TypeError("type must be a string");
  return !0;
}, k = (s) => {
  const r = (s == null ? void 0 : s.inConfig) ?? s;
  if (!r || typeof r != "object")
    throw new TypeError("Config must be an object");
  const e = r.data;
  if (e === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(e))
    throw new TypeError("data must be an Array");
  return !0;
}, C = (s) => {
  const r = (s == null ? void 0 : s.inConfig) ?? s;
  if (!r || typeof r != "object")
    throw new TypeError("Config must be an object");
  const e = r.columns;
  if (e === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(e))
    throw new TypeError("columns must be an Array");
  return !0;
}, E = (s) => {
  const r = (s == null ? void 0 : s.inConfig) ?? s;
  if (!r || typeof r != "object")
    throw new TypeError("Config must be an object");
  const e = r.showLog;
  if (e !== void 0 && typeof e != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, R = (s) => {
  const r = (s == null ? void 0 : s.inConfig) ?? s;
  if (!r || typeof r != "object" || Array.isArray(r))
    throw new TypeError("Config must be an object");
  return $(r), k(r), C(r), E(r), !0;
}, W = "table", F = "", M = [], D = [], P = "", _ = "replace";
const y = {
  type: W,
  targetHtmlId: F,
  data: M,
  columns: D,
  classToApply: P,
  appendPosition: _,
  showLog: !1
}, G = (s) => {
  const r = typeof s == "object" && s !== null ? s.inKey ?? s.key : s;
  return r && r in y ? y[r] : { ...y };
};
Object.assign(G, y);
const H = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, K = (s) => {
  const r = s;
  typeof globalThis > "u" || !r || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = {
    meta: H,
    render: r
  });
}, z = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, V = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, q = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, J = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, Q = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, m = {
  form: z,
  fieldWrapper: V,
  label: q,
  input: J,
  submitButton: Q
}, U = ({ inColumn: s, inRow: r = {}, inIndex: e = 0 } = {}) => {
  var I, N;
  const t = s, b = r, i = e, c = (t == null ? void 0 : t.columnName) ?? `field_${i}`, d = (t == null ? void 0 : t.type) ?? "text", a = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? c, u = (t == null ? void 0 : t.id) ?? `form-${i}-${c.toLowerCase()}`, n = b[c] ?? (t == null ? void 0 : t.value), o = structuredClone(m.fieldWrapper), l = structuredClone(m.label);
  if (l.textContent = a, l.attributes.for = u, d === "checkbox") {
    o.attributes.class = "form-check mb-3";
    const f = structuredClone(m.input);
    return f.attributes.type = "checkbox", f.attributes.class = "form-check-input", f.attributes.id = u, f.attributes.name = c, f.attributes.value = "true", f.properties = { checked: !!(n ?? (t == null ? void 0 : t.checked) ?? !1) }, l.attributes.class = "form-check-label", o.children = [f, l], o;
  }
  if (d === "textarea") {
    const f = {
      tagName: "textarea",
      textContent: n ? String(n) : "",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-control",
        rows: String((t == null ? void 0 : t.rows) ?? 3),
        id: u,
        name: c,
        placeholder: (t == null ? void 0 : t.placeholder) ?? ""
      }
    };
    return o.children = [l, f], o;
  }
  if (d === "select") {
    const f = {
      tagName: "select",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-select",
        id: u,
        name: c
      },
      children: ((t == null ? void 0 : t.options) ?? []).map((h) => {
        const S = String(typeof h == "object" ? h.value : h), j = typeof h == "object" ? h.label ?? h.value : String(h), L = n != null && String(n) === S;
        return {
          tagName: "option",
          textContent: j,
          attributes: {
            value: S,
            ...L ? { selected: !0 } : {}
          }
        };
      })
    };
    return o.children = [l, f], o;
  }
  const p = structuredClone(m.input);
  if (p.attributes.type = d, p.attributes.id = u, p.attributes.name = c, t != null && t.placeholder && (p.attributes.placeholder = t.placeholder), t != null && t.class && (p.attributes.class = t.class), n != null && (p.attributes.value = String(n)), t != null && t.buttonText || t != null && t.button) {
    const f = {
      tagName: "button",
      textContent: t.buttonText ?? ((I = t.button) == null ? void 0 : I.text) ?? "Action",
      attributes: {
        type: "button",
        class: t.buttonClass ?? ((N = t.button) == null ? void 0 : N.class) ?? "btn btn-success",
        id: t.buttonId ?? `${u}-btn`
      }
    };
    return o.children = [l, p, f], o;
  }
  return o.children = [l, p], o;
}, g = ({ inColumns: s = [], inData: r = [], inOptions: e = {}, columns: t, data: b, options: i } = {}) => {
  const c = Array.isArray(s) && s.length > 0 ? s : Array.isArray(t) ? t : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(b) ? b : [], a = e && Object.keys(e).length > 0 ? e : i ?? {}, u = d[0] ?? {}, n = structuredClone(m.form);
  if (a != null && a.formId && (n.attributes.id = a.formId), a != null && a.className && (n.attributes.class = a.className), n.children = c.map(
    (o, l) => U({ inColumn: o, inRow: u, inIndex: l })
  ), (a == null ? void 0 : a.showSubmit) !== !1 && (a == null ? void 0 : a.submitButton) !== !1) {
    const o = structuredClone(m.submitButton);
    a != null && a.submitLabel && (o.textContent = a.submitLabel), a != null && a.submitClass && (o.attributes.class = a.submitClass), n.children.push(o);
  }
  return n;
}, X = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "inlineFormId"
  },
  children: []
}, Y = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, T = {
  form: X,
  submitButton: Y
}, Z = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, O = (s) => {
  const r = s;
  if (typeof globalThis > "u" || !r) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof r == "function" ? r : r.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Z,
    render: e,
    ...typeof r == "object" ? r : {}
  };
}, tt = "input", et = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, st = {
  tagName: tt,
  attributes: et
}, x = ({ inOptions: s = {}, options: r = {} } = {}) => {
  const e = s && Object.keys(s).length > 0 ? s : r, t = structuredClone(st);
  return e.placeholder && (t.attributes.placeholder = e.placeholder), e.class && (t.attributes.class = e.class), e.id && (t.attributes.id = e.id), e.name && (t.attributes.name = e.name), e.type && (t.attributes.type = e.type), e.value && (t.attributes.value = e.value), t;
}, rt = "div", at = {
  class: "d-flex align-items-center gap-2"
}, nt = [
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
], it = {
  tagName: rt,
  attributes: at,
  children: nt
}, w = ({ inOptions: s = {}, options: r = {} } = {}) => {
  const e = s && Object.keys(s).length > 0 ? s : r, t = structuredClone(it), b = t.children[0], i = t.children[1];
  return e.label && (b.textContent = e.label), e.id && (b.attributes.for = e.id, i.attributes.id = e.id), e.placeholder && (i.attributes.placeholder = e.placeholder), e.class && (i.attributes.class = e.class), e.name && (i.attributes.name = e.name), e.type && (i.attributes.type = e.type), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (b.attributes.class = e.labelClass), t;
}, ot = "div", ct = {
  class: "d-flex align-items-center gap-2"
}, bt = [
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
], ut = {
  tagName: ot,
  attributes: ct,
  children: bt
}, A = ({ inOptions: s = {}, options: r = {} } = {}) => {
  const e = s && Object.keys(s).length > 0 ? s : r, t = structuredClone(ut), b = t.children[0], i = t.children[1], c = t.children[2];
  return e.label && (b.textContent = e.label), e.id && (b.attributes.for = e.id, i.attributes.id = e.id), e.placeholder && (i.attributes.placeholder = e.placeholder), e.class && (i.attributes.class = e.class), e.name && (i.attributes.name = e.name), e.type && (i.attributes.type = e.type), e.buttonText && (c.textContent = e.buttonText), e.buttonClass && (c.attributes.class = e.buttonClass), e.buttonId && (c.attributes.id = e.buttonId), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (b.attributes.class = e.labelClass), t;
}, lt = {
  input: x,
  inputOnly: x,
  inputWithLabel: w,
  inputWithLabelButton: A
}, dt = ({
  type: s = "inputWithLabel",
  options: r = {},
  inType: e,
  inOptions: t
} = {}) => {
  const b = e ?? s, i = t ?? r;
  return (lt[b] || w)({ inOptions: i, options: i });
};
O({
  render: dt,
  inputOnly: x,
  inputWithLabel: w,
  inputWithLabelButton: A
});
const ft = ({ inColumn: s, inRow: r = {}, inIndex: e = 0 } = {}) => {
  var o, l;
  const t = s, b = r, i = e, c = (t == null ? void 0 : t.columnName) ?? `field_${i}`, d = (t == null ? void 0 : t.type) ?? "text", a = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? c, u = (t == null ? void 0 : t.id) ?? `form-${i}-${c.toLowerCase()}`, n = b[c] ?? (t == null ? void 0 : t.value);
  return t != null && t.buttonText || t != null && t.button ? A({
    inOptions: {
      label: a,
      type: d,
      id: u,
      name: c,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: n != null ? String(n) : void 0,
      buttonText: t.buttonText ?? ((o = t.button) == null ? void 0 : o.text) ?? "Action",
      buttonClass: t.buttonClass ?? ((l = t.button) == null ? void 0 : l.class) ?? "btn btn-outline-primary",
      buttonId: t.buttonId ?? `${u}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : w({
    inOptions: {
      label: a,
      type: d,
      id: u,
      name: c,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: n != null ? String(n) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, v = ({ inColumns: s = [], inData: r = [], inOptions: e = {}, columns: t, data: b, options: i } = {}) => {
  const c = Array.isArray(s) && s.length > 0 ? s : Array.isArray(t) ? t : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(b) ? b : [], a = e && Object.keys(e).length > 0 ? e : i ?? {}, u = d[0] ?? {}, n = structuredClone(T.form);
  if (a != null && a.formId && (n.attributes.id = a.formId), a != null && a.className && (n.attributes.class = a.className), n.children = c.map(
    (o, l) => ft({ inColumn: o, inRow: u, inIndex: l })
  ), (a == null ? void 0 : a.showSubmit) !== !1 && (a == null ? void 0 : a.submitButton) !== !1) {
    const o = structuredClone(T.submitButton);
    a != null && a.submitLabel && (o.textContent = a.submitLabel), a != null && a.submitClass && (o.attributes.class = a.submitClass), n.children.push(o);
  }
  return n;
}, pt = {
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
}, ht = {
  buttonBar: pt
}, B = ({ inColumns: s = [], inData: r = [], inOptions: e = {}, columns: t, data: b, options: i } = {}) => {
  const c = Array.isArray(s) && s.length > 0 ? s : Array.isArray(t) ? t : [], d = Array.isArray(r) && r.length > 0 ? r : Array.isArray(b) ? b : [], a = e && Object.keys(e).length > 0 ? e : i ?? {}, u = g({
    inColumns: c,
    inData: d,
    inOptions: { ...a, submitButton: !1, showSubmit: !1 }
  }), n = structuredClone(ht.buttonBar);
  return a.submitLabel && (n.children[0].textContent = a.submitLabel), a.cancelLabel && (n.children[1].textContent = a.cancelLabel), u.children.push(n), u;
}, mt = {
  stacked: g,
  vertical: g,
  inline: v,
  horizontal: v,
  withButtons: B,
  buttons: B
}, yt = (s = {}) => (s.type ?? (s.type = "stacked"), R(s), (mt[s.type] || g)({
  inColumns: s.columns,
  inData: s.data,
  inOptions: s.options
}));
K(yt);
export {
  yt as default,
  yt as render
};
