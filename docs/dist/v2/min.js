const j = ({ inConfig: n, inValue: s } = {}) => {
  const e = n, t = e ? e.type : s;
  if (t === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof t != "string")
    throw new TypeError("type must be a string");
  return !0;
}, R = ({ inConfig: n, inValue: s } = {}) => {
  const e = n, t = e ? e.targetHtmlId : s;
  if (t === void 0)
    throw new Error('Missing compulsory key: "targetHtmlId"');
  if (typeof t != "string")
    throw new TypeError("targetHtmlId must be a string");
  if (t.trim().length === 0)
    throw new Error("targetHtmlId must be a non-empty string");
  return !0;
}, F = ({ inConfig: n, inValue: s } = {}) => {
  const e = n, t = e ? e.data : s;
  if (t === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(t))
    throw new TypeError("data must be an Array");
  return !0;
}, M = ({ inConfig: n, inValue: s } = {}) => {
  const e = n, t = e ? e.columns : s;
  if (t === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(t))
    throw new TypeError("columns must be an Array");
  return !0;
}, P = ({ inConfig: n, inValue: s } = {}) => {
  const e = n, t = e ? e.classToApply : s;
  if (t === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof t != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, H = ({ inConfig: n, inValue: s } = {}) => {
  const e = n, t = e ? e.appendPosition : s;
  if (t === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof t != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, W = ({ inConfig: n, inValue: s } = {}) => {
  const e = n, t = e ? e.showLog : s;
  if (t === void 0)
    throw new Error('Missing compulsory key: "showLog"');
  if (typeof t != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, D = "table", _ = "", G = [], z = [], K = "", V = "replace";
const g = {
  type: D,
  targetHtmlId: _,
  data: G,
  columns: z,
  classToApply: K,
  appendPosition: V,
  showLog: !1
}, L = ({ inKey: n } = {}) => {
  const s = n;
  return s && s in g ? g[s] : { ...g };
};
Object.assign(L, g);
const T = ({ inConfig: n, config: s } = {}) => {
  const e = n ?? s;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return j({ inConfig: e }), R({ inConfig: e }), F({ inConfig: e }), M({ inConfig: e }), P({ inConfig: e }), H({ inConfig: e }), W({ inConfig: e }), !0;
};
T.getSpec = L;
T.configSpec = g;
const q = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, J = (n) => {
  const s = n;
  if (typeof globalThis > "u" || !s) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof s == "function" ? s : s.render;
  globalThis.ks.jsonRenderersBuildForm = {
    meta: q,
    render: e,
    ...typeof s == "object" ? s : {}
  };
}, Q = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, U = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, X = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, Y = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, Z = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, h = {
  form: Q,
  fieldWrapper: U,
  label: X,
  input: Y,
  submitButton: Z
}, C = ({ inColumn: n, inRow: s = {}, inIndex: e = 0 } = {}) => {
  var S, v;
  const t = n, l = s, o = e, c = (t == null ? void 0 : t.columnName) ?? `field_${o}`, d = (t == null ? void 0 : t.type) ?? "text", r = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? c, u = (t == null ? void 0 : t.id) ?? `form-${o}-${c.toLowerCase()}`, a = l[c] ?? (t == null ? void 0 : t.value), i = structuredClone(h.fieldWrapper), b = structuredClone(h.label);
  if (b.textContent = r, b.attributes.for = u, d === "checkbox") {
    i.attributes.class = "form-check mb-3";
    const f = structuredClone(h.input);
    return f.attributes.type = "checkbox", f.attributes.class = "form-check-input", f.attributes.id = u, f.attributes.name = c, f.attributes.value = "true", f.properties = { checked: !!(a ?? (t == null ? void 0 : t.checked) ?? !1) }, b.attributes.class = "form-check-label", i.children = [f, b], i;
  }
  if (d === "textarea") {
    const f = {
      tagName: "textarea",
      textContent: a ? String(a) : "",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-control",
        rows: String((t == null ? void 0 : t.rows) ?? 3),
        id: u,
        name: c,
        placeholder: (t == null ? void 0 : t.placeholder) ?? ""
      }
    };
    return i.children = [b, f], i;
  }
  if (d === "select") {
    const f = {
      tagName: "select",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-select",
        id: u,
        name: c
      },
      children: ((t == null ? void 0 : t.options) ?? []).map((m) => {
        const k = String(typeof m == "object" ? m.value : m), $ = typeof m == "object" ? m.label ?? m.value : String(m), E = a != null && String(a) === k;
        return {
          tagName: "option",
          textContent: $,
          attributes: {
            value: k,
            ...E ? { selected: !0 } : {}
          }
        };
      })
    };
    return i.children = [b, f], i;
  }
  const p = structuredClone(h.input);
  if (p.attributes.type = d, p.attributes.id = u, p.attributes.name = c, t != null && t.placeholder && (p.attributes.placeholder = t.placeholder), t != null && t.class && (p.attributes.class = t.class), a != null && (p.attributes.value = String(a)), t != null && t.buttonText || t != null && t.button) {
    const f = {
      tagName: "button",
      textContent: t.buttonText ?? ((S = t.button) == null ? void 0 : S.text) ?? "Action",
      attributes: {
        type: "button",
        class: t.buttonClass ?? ((v = t.button) == null ? void 0 : v.class) ?? "btn btn-success",
        id: t.buttonId ?? `${u}-btn`
      }
    };
    return i.children = [b, p, f], i;
  }
  return i.children = [b, p], i;
}, y = ({ inColumns: n = [], inData: s = [], inOptions: e = {}, columns: t, data: l, options: o } = {}) => {
  const c = Array.isArray(n) && n.length > 0 ? n : Array.isArray(t) ? t : [], d = Array.isArray(s) && s.length > 0 ? s : Array.isArray(l) ? l : [], r = e && Object.keys(e).length > 0 ? e : o ?? {}, u = d[0] ?? {}, a = structuredClone(h.form);
  if (r != null && r.formId && (a.attributes.id = r.formId), r != null && r.className && (a.attributes.class = r.className), a.children = c.map(
    (i, b) => C({ inColumn: i, inRow: u, inIndex: b })
  ), (r == null ? void 0 : r.showSubmit) !== !1 && (r == null ? void 0 : r.submitButton) !== !1) {
    const i = structuredClone(h.submitButton);
    r != null && r.submitLabel && (i.textContent = r.submitLabel), r != null && r.submitClass && (i.attributes.class = r.submitClass), a.children.push(i);
  }
  return a;
}, O = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "inlineFormId"
  },
  children: []
}, tt = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, B = {
  form: O,
  submitButton: tt
}, et = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, st = (n) => {
  const s = n;
  if (typeof globalThis > "u" || !s) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof s == "function" ? s : s.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: et,
    render: e,
    ...typeof s == "object" ? s : {}
  };
}, rt = "input", nt = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, at = {
  tagName: rt,
  attributes: nt
}, x = ({ inOptions: n = {}, options: s = {} } = {}) => {
  const e = n && Object.keys(n).length > 0 ? n : s, t = structuredClone(at);
  return e.placeholder && (t.attributes.placeholder = e.placeholder), e.class && (t.attributes.class = e.class), e.id && (t.attributes.id = e.id), e.name && (t.attributes.name = e.name), e.type && (t.attributes.type = e.type), e.value && (t.attributes.value = e.value), t;
}, it = "div", ot = {
  class: "d-flex align-items-center gap-2"
}, ct = [
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
], lt = {
  tagName: it,
  attributes: ot,
  children: ct
}, w = ({ inOptions: n = {}, options: s = {} } = {}) => {
  const e = n && Object.keys(n).length > 0 ? n : s, t = structuredClone(lt), l = t.children[0], o = t.children[1];
  return e.label && (l.textContent = e.label), e.id && (l.attributes.for = e.id, o.attributes.id = e.id), e.placeholder && (o.attributes.placeholder = e.placeholder), e.class && (o.attributes.class = e.class), e.name && (o.attributes.name = e.name), e.type && (o.attributes.type = e.type), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (l.attributes.class = e.labelClass), t;
}, ut = "div", bt = {
  class: "d-flex align-items-center gap-2"
}, dt = [
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
], ft = {
  tagName: ut,
  attributes: bt,
  children: dt
}, N = ({ inOptions: n = {}, options: s = {} } = {}) => {
  const e = n && Object.keys(n).length > 0 ? n : s, t = structuredClone(ft), l = t.children[0], o = t.children[1], c = t.children[2];
  return e.label && (l.textContent = e.label), e.id && (l.attributes.for = e.id, o.attributes.id = e.id), e.placeholder && (o.attributes.placeholder = e.placeholder), e.class && (o.attributes.class = e.class), e.name && (o.attributes.name = e.name), e.type && (o.attributes.type = e.type), e.buttonText && (c.textContent = e.buttonText), e.buttonClass && (c.attributes.class = e.buttonClass), e.buttonId && (c.attributes.id = e.buttonId), e.wrapperClass && (t.attributes.class = e.wrapperClass), e.labelClass && (l.attributes.class = e.labelClass), t;
}, pt = {
  input: x,
  inputOnly: x,
  inputWithLabel: w,
  inputWithLabelButton: N
}, mt = ({
  type: n = "inputWithLabel",
  options: s = {},
  inType: e,
  inOptions: t
} = {}) => {
  const l = e ?? n, o = t ?? s;
  return (pt[l] || w)({ inOptions: o, options: o });
};
st({
  render: mt,
  inputOnly: x,
  inputWithLabel: w,
  inputWithLabelButton: N
});
const ht = ({ inColumn: n, inRow: s = {}, inIndex: e = 0 } = {}) => {
  var i, b;
  const t = n, l = s, o = e, c = (t == null ? void 0 : t.columnName) ?? `field_${o}`, d = (t == null ? void 0 : t.type) ?? "text", r = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? c, u = (t == null ? void 0 : t.id) ?? `form-${o}-${c.toLowerCase()}`, a = l[c] ?? (t == null ? void 0 : t.value);
  return t != null && t.buttonText || t != null && t.button ? N({
    inOptions: {
      label: r,
      type: d,
      id: u,
      name: c,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: a != null ? String(a) : void 0,
      buttonText: t.buttonText ?? ((i = t.button) == null ? void 0 : i.text) ?? "Action",
      buttonClass: t.buttonClass ?? ((b = t.button) == null ? void 0 : b.class) ?? "btn btn-outline-primary",
      buttonId: t.buttonId ?? `${u}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : w({
    inOptions: {
      label: r,
      type: d,
      id: u,
      name: c,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: a != null ? String(a) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, A = ({ inColumns: n = [], inData: s = [], inOptions: e = {}, columns: t, data: l, options: o } = {}) => {
  const c = Array.isArray(n) && n.length > 0 ? n : Array.isArray(t) ? t : [], d = Array.isArray(s) && s.length > 0 ? s : Array.isArray(l) ? l : [], r = e && Object.keys(e).length > 0 ? e : o ?? {}, u = d[0] ?? {}, a = structuredClone(B.form);
  if (r != null && r.formId && (a.attributes.id = r.formId), r != null && r.className && (a.attributes.class = r.className), a.children = c.map(
    (i, b) => ht({ inColumn: i, inRow: u, inIndex: b })
  ), (r == null ? void 0 : r.showSubmit) !== !1 && (r == null ? void 0 : r.submitButton) !== !1) {
    const i = structuredClone(B.submitButton);
    r != null && r.submitLabel && (i.textContent = r.submitLabel), r != null && r.submitClass && (i.attributes.class = r.submitClass), a.children.push(i);
  }
  return a;
}, yt = {
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
}, gt = {
  buttonBar: yt
}, I = ({ inColumns: n = [], inData: s = [], inOptions: e = {}, columns: t, data: l, options: o } = {}) => {
  const c = Array.isArray(n) && n.length > 0 ? n : Array.isArray(t) ? t : [], d = Array.isArray(s) && s.length > 0 ? s : Array.isArray(l) ? l : [], r = e && Object.keys(e).length > 0 ? e : o ?? {}, u = y({
    inColumns: c,
    inData: d,
    inOptions: { ...r, submitButton: !1, showSubmit: !1 }
  }), a = structuredClone(gt.buttonBar);
  return r.submitLabel && (a.children[0].textContent = r.submitLabel), r.cancelLabel && (a.children[1].textContent = r.cancelLabel), u.children.push(a), u;
}, wt = {
  stacked: y,
  vertical: y,
  inline: A,
  horizontal: A,
  withButtons: I,
  buttons: I
}, xt = ({
  type: n = "stacked",
  columns: s = [],
  data: e = [],
  options: t = {},
  inType: l,
  inColumns: o,
  inData: c,
  inOptions: d
} = {}) => {
  const r = l ?? n, u = o ?? s, a = c ?? e, i = d ?? t;
  return T({
    inConfig: {
      type: "form",
      columns: u,
      data: a,
      options: i
    }
  }), (wt[r] || y)({
    inColumns: u,
    inData: a,
    inOptions: i
  });
}, At = y, It = C;
J({
  render: xt,
  stacked: y,
  inline: A,
  withButtons: I,
  renderForm: At,
  renderField: It
});
export {
  xt as default,
  A as inline,
  xt as render,
  It as renderField,
  At as renderForm,
  ht as renderInlineField,
  C as renderStackedField,
  y as stacked,
  I as withButtons
};
