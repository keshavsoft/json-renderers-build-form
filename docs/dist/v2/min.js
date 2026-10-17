const v = {
  type: "table",
  data: [],
  columns: [],
  options: {},
  showLog: !1
}, E = {
  type: "table",
  targetHtmlId: "",
  data: [],
  columns: [],
  classToApply: "",
  appendPosition: "replace",
  showLog: !1
}, R = {
  rendererBuildV19: v,
  rendererV17: E
}, S = ["table", "tableFromSpec", "select", "selectOptionsOnly", "dataList", "datalist", "searchInput", "search", "inputRow", "form"], F = ["table", "tableFromSpec"];
function V({ inConfig: i, contractName: a = "rendererBuildV19" } = {}) {
  const e = i, t = a, c = R[t];
  if (!c)
    throw new Error(`Unknown guard contract: ${t}`);
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  if (t === "rendererV17") {
    for (const r of Object.keys(c)) {
      if (!(r in e) || e[r] === void 0)
        throw new Error(`Missing compulsory key: "${r}"`);
      if (Array.isArray(c[r])) {
        if (!Array.isArray(e[r])) throw new TypeError(`${r} must be an Array`);
      } else if (typeof e[r] != typeof c[r])
        throw new TypeError(`${r} must be of type ${typeof c[r]}`);
    }
    if (!e.targetHtmlId.trim()) throw new TypeError("targetHtmlId must be a non-empty string");
    return !0;
  }
  if (typeof e.type != "string" || !S.includes(e.type))
    throw new Error(`type must be one of: ${S.join(", ")}`);
  if (!Array.isArray(e.data)) throw new TypeError("data must be an Array");
  if (e.showLog !== void 0 && typeof e.showLog != "boolean")
    throw new TypeError("showLog must be a boolean");
  if (F.includes(e.type)) {
    if (!Array.isArray(e.columns)) throw new TypeError("columns must be an array for table rendering");
    for (let r = 0; r < e.columns.length; r++) {
      const n = e.columns[r];
      if (!n || typeof n != "object" || Array.isArray(n)) throw new TypeError(`columns[${r}] must be an object`);
      if (typeof n.columnName != "string" || !n.columnName.trim())
        throw new TypeError(`columns[${r}].columnName must be a non-empty string`);
    }
    for (let r = 0; r < e.data.length; r++) {
      const n = e.data[r];
      if (!n || typeof n != "object" || Array.isArray(n)) throw new TypeError(`data[${r}] must be an object`);
    }
    if (e.columns.length && e.data.length) {
      const r = e.columns.map((u) => u.columnName), n = Object.keys(e.data[0]);
      if (!r.some((u) => n.includes(u)))
        throw new Error(`Data alignment error: None of the columns [${r.join(", ")}] match any keys in data rows [${n.join(", ")}]`);
    }
  }
  if (e.type === "form") {
    if (!Array.isArray(e.columns))
      throw new TypeError("columns must be an array for form rendering");
    for (let r = 0; r < e.columns.length; r++) {
      const n = e.columns[r];
      if (!n || typeof n != "object" || Array.isArray(n))
        throw new TypeError(`columns[${r}] must be an object`);
      if (typeof n.columnName != "string" || !n.columnName.trim())
        throw new TypeError(`columns[${r}].columnName must be a non-empty string`);
    }
  }
  return !0;
}
const W = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, C = (i) => {
  const a = i;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildForm = {
    meta: W,
    render: e,
    ...typeof a == "object" ? a : {}
  };
}, _ = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, D = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, P = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, M = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, H = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, y = {
  form: _,
  fieldWrapper: D,
  label: P,
  input: M,
  submitButton: H
}, k = ({ inColumn: i, inRow: a = {}, inIndex: e = 0 } = {}) => {
  var I, $;
  const t = i, c = a, r = e, n = (t == null ? void 0 : t.columnName) ?? `field_${r}`, u = (t == null ? void 0 : t.type) ?? "text", s = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? n, l = (t == null ? void 0 : t.id) ?? `form-${r}-${n.toLowerCase()}`, o = c[n] ?? (t == null ? void 0 : t.value), b = structuredClone(y.fieldWrapper), d = structuredClone(y.label);
  if (d.textContent = s, d.attributes.for = l, u === "checkbox") {
    b.attributes.class = "form-check mb-3";
    const f = structuredClone(y.input);
    return f.attributes.type = "checkbox", f.attributes.class = "form-check-input", f.attributes.id = l, f.attributes.name = n, f.attributes.value = "true", f.properties = { checked: !!(o ?? (t == null ? void 0 : t.checked) ?? !1) }, d.attributes.class = "form-check-label", b.children = [f, d], b;
  }
  if (u === "textarea") {
    const f = {
      tagName: "textarea",
      textContent: o ? String(o) : "",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-control",
        rows: String((t == null ? void 0 : t.rows) ?? 3),
        id: l,
        name: n,
        placeholder: (t == null ? void 0 : t.placeholder) ?? ""
      }
    };
    return b.children = [d, f], b;
  }
  if (u === "select") {
    const f = {
      tagName: "select",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-select",
        id: l,
        name: n
      },
      children: ((t == null ? void 0 : t.options) ?? []).map((m) => {
        const T = String(typeof m == "object" ? m.value : m), j = typeof m == "object" ? m.label ?? m.value : String(m), L = o != null && String(o) === T;
        return {
          tagName: "option",
          textContent: j,
          attributes: {
            value: T,
            ...L ? { selected: !0 } : {}
          }
        };
      })
    };
    return b.children = [d, f], b;
  }
  const p = structuredClone(y.input);
  if (p.attributes.type = u, p.attributes.id = l, p.attributes.name = n, t != null && t.placeholder && (p.attributes.placeholder = t.placeholder), t != null && t.class && (p.attributes.class = t.class), o != null && (p.attributes.value = String(o)), t != null && t.buttonText || t != null && t.button) {
    const f = {
      tagName: "button",
      textContent: t.buttonText ?? ((I = t.button) == null ? void 0 : I.text) ?? "Action",
      attributes: {
        type: "button",
        class: t.buttonClass ?? (($ = t.button) == null ? void 0 : $.class) ?? "btn btn-success",
        id: t.buttonId ?? `${l}-btn`
      }
    };
    return b.children = [d, p, f], b;
  }
  return b.children = [d, p], b;
}, h = ({ inColumns: i = [], inData: a = [], inOptions: e = {}, columns: t, data: c, options: r } = {}) => {
  const n = Array.isArray(i) && i.length > 0 ? i : Array.isArray(t) ? t : [], u = Array.isArray(a) && a.length > 0 ? a : Array.isArray(c) ? c : [], s = e && Object.keys(e).length > 0 ? e : r ?? {}, l = u[0] ?? {}, o = structuredClone(y.form);
  if (s != null && s.formId && (o.attributes.id = s.formId), s != null && s.className && (o.attributes.class = s.className), o.children = n.map(
    (b, d) => k({ inColumn: b, inRow: l, inIndex: d })
  ), (s == null ? void 0 : s.showSubmit) !== !1 && (s == null ? void 0 : s.submitButton) !== !1) {
    const b = structuredClone(y.submitButton);
    s != null && s.submitLabel && (b.textContent = s.submitLabel), s != null && s.submitClass && (b.attributes.class = s.submitClass), o.children.push(b);
  }
  return o;
}, G = {
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
}, B = {
  form: G,
  submitButton: Y
}, z = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, K = (i) => {
  const a = i;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: z,
    render: e,
    ...typeof a == "object" ? a : {}
  };
}, U = "input", q = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, J = {
  tagName: U,
  attributes: q
}, w = ({ inOptions: i = {}, options: a = {} } = {}) => {
  const e = i && Object.keys(i).length > 0 ? i : a, t = structuredClone(J);
  return e.placeholder && (t.attributes.placeholder = e.placeholder), e.class && (t.attributes.class = e.class), e.id && (t.attributes.id = e.id), e.name && (t.attributes.name = e.name), e.type && (t.attributes.type = e.type), e.value && (t.attributes.value = e.value), t;
}, Q = "div", X = {
  class: "d-flex align-items-center gap-2"
}, Z = [
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
], O = {
  tagName: Q,
  attributes: X,
  children: Z
}, g = ({ inOptions: i = {}, options: a = {} } = {}) => {
  const e = i && Object.keys(i).length > 0 ? i : a, t = structuredClone(O), c = t.children[0], r = t.children[1];
  return e.label && (c.textContent = e.label), e.id && (c.attributes.for = e.id, r.attributes.id = e.id), e.placeholder && (r.attributes.placeholder = e.placeholder), e.class && (r.attributes.class = e.class), e.name && (r.attributes.name = e.name), e.type && (r.attributes.type = e.type), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (c.attributes.class = e.labelClass), t;
}, tt = "div", et = {
  class: "d-flex align-items-center gap-2"
}, rt = [
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
], st = {
  tagName: tt,
  attributes: et,
  children: rt
}, N = ({ inOptions: i = {}, options: a = {} } = {}) => {
  const e = i && Object.keys(i).length > 0 ? i : a, t = structuredClone(st), c = t.children[0], r = t.children[1], n = t.children[2];
  return e.label && (c.textContent = e.label), e.id && (c.attributes.for = e.id, r.attributes.id = e.id), e.placeholder && (r.attributes.placeholder = e.placeholder), e.class && (r.attributes.class = e.class), e.name && (r.attributes.name = e.name), e.type && (r.attributes.type = e.type), e.buttonText && (n.textContent = e.buttonText), e.buttonClass && (n.attributes.class = e.buttonClass), e.buttonId && (n.attributes.id = e.buttonId), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (c.attributes.class = e.labelClass), t;
}, nt = {
  input: w,
  inputOnly: w,
  inputWithLabel: g,
  inputWithLabelButton: N
}, at = ({
  type: i = "inputWithLabel",
  options: a = {},
  inType: e,
  inOptions: t
} = {}) => {
  const c = e ?? i, r = t ?? a;
  return (nt[c] || g)({ inOptions: r, options: r });
};
K({
  render: at,
  inputOnly: w,
  inputWithLabel: g,
  inputWithLabelButton: N
});
const it = ({ inColumn: i, inRow: a = {}, inIndex: e = 0 } = {}) => {
  var b, d;
  const t = i, c = a, r = e, n = (t == null ? void 0 : t.columnName) ?? `field_${r}`, u = (t == null ? void 0 : t.type) ?? "text", s = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? n, l = (t == null ? void 0 : t.id) ?? `form-${r}-${n.toLowerCase()}`, o = c[n] ?? (t == null ? void 0 : t.value);
  return t != null && t.buttonText || t != null && t.button ? N({
    inOptions: {
      label: s,
      type: u,
      id: l,
      name: n,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: o != null ? String(o) : void 0,
      buttonText: t.buttonText ?? ((b = t.button) == null ? void 0 : b.text) ?? "Action",
      buttonClass: t.buttonClass ?? ((d = t.button) == null ? void 0 : d.class) ?? "btn btn-outline-primary",
      buttonId: t.buttonId ?? `${l}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : g({
    inOptions: {
      label: s,
      type: u,
      id: l,
      name: n,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: o != null ? String(o) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, x = ({ inColumns: i = [], inData: a = [], inOptions: e = {}, columns: t, data: c, options: r } = {}) => {
  const n = Array.isArray(i) && i.length > 0 ? i : Array.isArray(t) ? t : [], u = Array.isArray(a) && a.length > 0 ? a : Array.isArray(c) ? c : [], s = e && Object.keys(e).length > 0 ? e : r ?? {}, l = u[0] ?? {}, o = structuredClone(B.form);
  if (s != null && s.formId && (o.attributes.id = s.formId), s != null && s.className && (o.attributes.class = s.className), o.children = n.map(
    (b, d) => it({ inColumn: b, inRow: l, inIndex: d })
  ), (s == null ? void 0 : s.showSubmit) !== !1 && (s == null ? void 0 : s.submitButton) !== !1) {
    const b = structuredClone(B.submitButton);
    s != null && s.submitLabel && (b.textContent = s.submitLabel), s != null && s.submitClass && (b.attributes.class = s.submitClass), o.children.push(b);
  }
  return o;
}, ot = {
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
}, ct = {
  buttonBar: ot
}, A = ({ inColumns: i = [], inData: a = [], inOptions: e = {}, columns: t, data: c, options: r } = {}) => {
  const n = Array.isArray(i) && i.length > 0 ? i : Array.isArray(t) ? t : [], u = Array.isArray(a) && a.length > 0 ? a : Array.isArray(c) ? c : [], s = e && Object.keys(e).length > 0 ? e : r ?? {}, l = h({
    inColumns: n,
    inData: u,
    inOptions: { ...s, submitButton: !1, showSubmit: !1 }
  }), o = structuredClone(ct.buttonBar);
  return s.submitLabel && (o.children[0].textContent = s.submitLabel), s.cancelLabel && (o.children[1].textContent = s.cancelLabel), l.children.push(o), l;
}, bt = {
  stacked: h,
  vertical: h,
  inline: x,
  horizontal: x,
  withButtons: A,
  buttons: A
}, lt = ({
  type: i = "stacked",
  columns: a = [],
  data: e = [],
  options: t = {},
  inType: c,
  inColumns: r,
  inData: n,
  inOptions: u
} = {}) => {
  const s = c ?? i, l = r ?? a, o = n ?? e, b = u ?? t;
  return V({
    inConfig: {
      type: "form",
      columns: l,
      data: o,
      options: b
    }
  }), (bt[s] || h)({
    inColumns: l,
    inData: o,
    inOptions: b
  });
}, ut = h, dt = k;
C({
  render: lt,
  stacked: h,
  inline: x,
  withButtons: A,
  renderForm: ut,
  renderField: dt
});
export {
  lt as default,
  x as inline,
  lt as render,
  dt as renderField,
  ut as renderForm,
  it as renderInlineField,
  k as renderStackedField,
  h as stacked,
  A as withButtons
};
