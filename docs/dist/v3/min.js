const Z = (e) => {
  const s = (e == null ? void 0 : e.inConfig) ?? e;
  if (!s || typeof s != "object")
    throw new TypeError("Config must be an object");
  const a = s.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, O = (e) => {
  const s = (e == null ? void 0 : e.inConfig) ?? e;
  if (!s || typeof s != "object")
    throw new TypeError("Config must be an object");
  const a = s.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, tt = (e) => {
  const s = (e == null ? void 0 : e.inConfig) ?? e;
  if (!s || typeof s != "object")
    throw new TypeError("Config must be an object");
  const a = s.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, et = (e) => {
  const s = (e == null ? void 0 : e.inConfig) ?? e;
  if (!s || typeof s != "object")
    throw new TypeError("Config must be an object");
  const a = s.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, at = (e) => {
  const s = (e == null ? void 0 : e.inConfig) ?? e;
  if (!s || typeof s != "object" || Array.isArray(s))
    throw new TypeError("Config must be an object");
  return Z(s), O(s), tt(s), et(s), !0;
}, st = "table", rt = "", nt = [], ot = [], lt = "", it = "replace";
const x = {
  type: st,
  targetHtmlId: rt,
  data: nt,
  columns: ot,
  classToApply: lt,
  appendPosition: it,
  showLog: !1
}, ct = (e) => {
  const s = typeof e == "object" && e !== null ? e.inKey ?? e.key : e;
  return s && s in x ? x[s] : { ...x };
};
Object.assign(ct, x);
const ut = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, dt = (e) => {
  const s = e;
  typeof globalThis > "u" || !s || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = {
    meta: ut,
    render: s
  });
}, bt = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, mt = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, pt = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, ft = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, ht = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, C = {
  form: bt,
  fieldWrapper: mt,
  label: pt,
  input: ft,
  submitButton: ht
}, yt = ({ inColumn: e, inRow: s = {}, inIndex: a = 0 } = {}) => {
  var g, h;
  const t = e, o = s, r = a, l = (t == null ? void 0 : t.columnName) ?? `field_${r}`, d = (t == null ? void 0 : t.type) ?? "text", n = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? l, u = (t == null ? void 0 : t.id) ?? `form-${r}-${l.toLowerCase()}`, i = o[l] ?? (t == null ? void 0 : t.value), c = structuredClone(C.fieldWrapper), b = structuredClone(C.label);
  if (b.textContent = n, b.attributes.for = u, d === "checkbox") {
    c.attributes.class = "form-check mb-3";
    const p = structuredClone(C.input);
    return p.attributes.type = "checkbox", p.attributes.class = "form-check-input", p.attributes.id = u, p.attributes.name = l, p.attributes.value = "true", t != null && t.required && (p.attributes.required = !0), p.properties = { checked: !!(i ?? (t == null ? void 0 : t.checked) ?? !1) }, b.attributes.class = "form-check-label", c.children = [p, b], c;
  }
  if (d === "textarea") {
    const p = {
      tagName: "textarea",
      textContent: i ? String(i) : "",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-control",
        rows: String((t == null ? void 0 : t.rows) ?? 3),
        id: u,
        name: l,
        placeholder: (t == null ? void 0 : t.placeholder) ?? "",
        ...t != null && t.required ? { required: !0 } : {}
      }
    };
    return c.children = [b, p], c;
  }
  if (d === "select") {
    const p = {
      tagName: "select",
      attributes: {
        class: (t == null ? void 0 : t.class) ?? "form-select",
        id: u,
        name: l,
        ...t != null && t.required ? { required: !0 } : {}
      },
      children: ((t == null ? void 0 : t.options) ?? []).map((m) => {
        const w = String(typeof m == "object" ? m.value : m), $ = typeof m == "object" ? m.label ?? m.value : String(m), N = i != null && String(i) === w;
        return {
          tagName: "option",
          textContent: $,
          attributes: {
            value: w,
            ...N ? { selected: !0 } : {}
          }
        };
      })
    };
    return c.children = [b, p], c;
  }
  const f = structuredClone(C.input);
  if (f.attributes.type = d, f.attributes.id = u, f.attributes.name = l, t != null && t.required && (f.attributes.required = !0), t != null && t.placeholder && (f.attributes.placeholder = t.placeholder), t != null && t.class && (f.attributes.class = t.class), i != null && (f.attributes.value = String(i)), t != null && t.buttonText || t != null && t.button) {
    const p = {
      tagName: "button",
      textContent: t.buttonText ?? ((g = t.button) == null ? void 0 : g.text) ?? "Action",
      attributes: {
        type: "button",
        class: t.buttonClass ?? ((h = t.button) == null ? void 0 : h.class) ?? "btn btn-success",
        id: t.buttonId ?? `${u}-btn`
      }
    };
    return c.children = [b, f, p], c;
  }
  return c.children = [b, f], c;
}, T = ({ inColumns: e = [], inData: s = [], inOptions: a = {}, columns: t, data: o, options: r } = {}) => {
  const l = Array.isArray(e) && e.length > 0 ? e : Array.isArray(t) ? t : [], d = Array.isArray(s) && s.length > 0 ? s : Array.isArray(o) ? o : [], n = a && Object.keys(a).length > 0 ? a : r ?? {}, u = d[0] ?? {}, i = structuredClone(C.form);
  if (n != null && n.formId && (i.attributes.id = n.formId), n != null && n.className && (i.attributes.class = n.className), i.children = l.map(
    (c, b) => yt({ inColumn: c, inRow: u, inIndex: b })
  ), (n == null ? void 0 : n.showSubmit) !== !1 && (n == null ? void 0 : n.submitButton) !== !1) {
    const c = structuredClone(C.submitButton);
    n != null && n.submitLabel && (c.textContent = n.submitLabel), n != null && n.submitClass && (c.attributes.class = n.submitClass), i.children.push(c);
  }
  return i;
}, gt = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "inlineFormId"
  },
  children: []
}, $t = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, L = {
  form: gt,
  submitButton: $t
}, Ct = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, wt = (e) => {
  const s = e;
  if (typeof globalThis > "u" || !s) return;
  globalThis.ks ?? (globalThis.ks = {});
  const a = typeof s == "function" ? s : s.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Ct,
    render: a,
    ...typeof s == "object" ? s : {}
  };
}, Nt = "input", xt = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, It = {
  tagName: Nt,
  attributes: xt
}, P = ({ inOptions: e = {}, options: s = {} } = {}) => {
  const a = e && Object.keys(e).length > 0 ? e : s, t = structuredClone(It);
  return a.placeholder && (t.attributes.placeholder = a.placeholder), a.class && (t.attributes.class = a.class), a.id && (t.attributes.id = a.id), a.name && (t.attributes.name = a.name), a.type && (t.attributes.type = a.type), a.value && (t.attributes.value = a.value), t;
}, At = "div", Bt = {
  class: "d-flex align-items-center gap-2"
}, kt = [
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
], Tt = {
  tagName: At,
  attributes: Bt,
  children: kt
}, I = ({ inOptions: e = {}, options: s = {} } = {}) => {
  const a = e && Object.keys(e).length > 0 ? e : s, t = structuredClone(Tt), o = t.children[0], r = t.children[1];
  return a.label && (o.textContent = a.label), a.id && (o.attributes.for = a.id, r.attributes.id = a.id), a.placeholder && (r.attributes.placeholder = a.placeholder), a.class && (r.attributes.class = a.class), a.name && (r.attributes.name = a.name), a.type && (r.attributes.type = a.type), a.wrapperClass && (t.attributes.class = a.wrapperClass), a.labelClass && (o.attributes.class = a.labelClass), t;
}, Pt = "div", vt = {
  class: "d-flex align-items-center gap-2"
}, Ft = [
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
], jt = {
  tagName: Pt,
  attributes: vt,
  children: Ft
}, v = ({ inOptions: e = {}, options: s = {} } = {}) => {
  const a = e && Object.keys(e).length > 0 ? e : s, t = structuredClone(jt), o = t.children[0], r = t.children[1], l = t.children[2];
  return a.label && (o.textContent = a.label), a.id && (o.attributes.for = a.id, r.attributes.id = a.id), a.placeholder && (r.attributes.placeholder = a.placeholder), a.class && (r.attributes.class = a.class), a.name && (r.attributes.name = a.name), a.type && (r.attributes.type = a.type), a.buttonText && (l.textContent = a.buttonText), a.buttonClass && (l.attributes.class = a.buttonClass), a.buttonId && (l.attributes.id = a.buttonId), a.wrapperClass && (t.attributes.class = a.wrapperClass), a.labelClass && (o.attributes.class = a.labelClass), t;
}, Rt = {
  input: P,
  inputOnly: P,
  inputWithLabel: I,
  inputWithLabelButton: v
}, St = ({
  type: e = "inputWithLabel",
  options: s = {},
  inType: a,
  inOptions: t
} = {}) => {
  const o = a ?? e, r = t ?? s;
  return (Rt[o] || I)({ inOptions: r, options: r });
};
wt({
  render: St,
  inputOnly: P,
  inputWithLabel: I,
  inputWithLabelButton: v
});
const Et = ({ inColumn: e, inRow: s = {}, inIndex: a = 0 } = {}) => {
  var c, b;
  const t = e, o = s, r = a, l = (t == null ? void 0 : t.columnName) ?? `field_${r}`, d = (t == null ? void 0 : t.type) ?? "text", n = (t == null ? void 0 : t.label) ?? (t == null ? void 0 : t.title) ?? l, u = (t == null ? void 0 : t.id) ?? `form-${r}-${l.toLowerCase()}`, i = o[l] ?? (t == null ? void 0 : t.value);
  return t != null && t.buttonText || t != null && t.button ? v({
    inOptions: {
      label: n,
      type: d,
      id: u,
      name: l,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      buttonText: t.buttonText ?? ((c = t.button) == null ? void 0 : c.text) ?? "Action",
      buttonClass: t.buttonClass ?? ((b = t.button) == null ? void 0 : b.class) ?? "btn btn-outline-primary",
      buttonId: t.buttonId ?? `${u}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : I({
    inOptions: {
      label: n,
      type: d,
      id: u,
      name: l,
      placeholder: (t == null ? void 0 : t.placeholder) ?? "",
      class: (t == null ? void 0 : t.class) ?? "form-control",
      value: i != null ? String(i) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, q = ({ inColumns: e = [], inData: s = [], inOptions: a = {}, columns: t, data: o, options: r } = {}) => {
  const l = Array.isArray(e) && e.length > 0 ? e : Array.isArray(t) ? t : [], d = Array.isArray(s) && s.length > 0 ? s : Array.isArray(o) ? o : [], n = a && Object.keys(a).length > 0 ? a : r ?? {}, u = d[0] ?? {}, i = structuredClone(L.form);
  if (n != null && n.formId && (i.attributes.id = n.formId), n != null && n.className && (i.attributes.class = n.className), i.children = l.map(
    (c, b) => Et({ inColumn: c, inRow: u, inIndex: b })
  ), (n == null ? void 0 : n.showSubmit) !== !1 && (n == null ? void 0 : n.submitButton) !== !1) {
    const c = structuredClone(L.submitButton);
    n != null && n.submitLabel && (c.textContent = n.submitLabel), n != null && n.submitClass && (c.attributes.class = n.submitClass), i.children.push(c);
  }
  return i;
}, Lt = (e) => typeof e == "object" && e !== null && !Array.isArray(e), qt = (e, s) => {
  if (!Lt(e)) return;
  let a = {};
  for (const [t, o] of Object.entries(e))
    a[t] = y(s, o);
  return a;
}, Wt = (e, s) => {
  const a = structuredClone(e);
  return Array.isArray(a) ? a.map((o) => y(s, o)) : void 0;
}, H = (e, s, a) => {
  if (e === "${agg:count}" && "rowData" in s) {
    if (Array.isArray(s == null ? void 0 : s.rowData))
      return s == null ? void 0 : s.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in s ? s == null ? void 0 : s.rowData : e.replace(/\$\{(\w+)\}/g, (t, o) => s[o] !== void 0 ? s[o] : t);
}, Dt = (e, s) => H(e, s), Vt = (e, s, a) => {
  if (a && console.log("inElement : ", e), a && console.log("inTemplate : ", s), s == null)
    throw new TypeError("inTemplate is required");
  if (typeof s != "object" && typeof s != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, y = (e, s, a) => {
  const t = e, o = s;
  Vt(t, o, a);
  const r = structuredClone(o);
  return typeof r == "string" ? H(r, t) : (r === null || typeof r != "object" || ("textContent" in r && (r.textContent = Dt(r == null ? void 0 : r.textContent, t)), "attributes" in r && (r.attributes = qt(r == null ? void 0 : r.attributes, t)), "children" in r && (r.children = Wt(r == null ? void 0 : r.children, t))), r);
}, zt = (e, s) => {
  if (!Array.isArray(e))
    throw new TypeError("inSource must be an Array");
  if (e.length === 0)
    throw new Error("inSource cannot be empty");
  for (let a = 0; a < e.length; a++)
    if (!e[a] || typeof e[a] != "object")
      throw new TypeError(`inSource[${a}] must be an object`);
  if (!s || typeof s != "object" && typeof s != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, J = (e, s) => {
  const a = e, t = s;
  return zt(a, t), a.map((o) => y(o, t));
}, Kt = (e, s) => e.map((t) => ({
  ...t,
  rowData: s[t.columnName]
})), Mt = (e, s, a) => {
  var o, r, l, d, n, u;
  if (!Array.isArray(e))
    throw new TypeError("inColumns must be an Array");
  if (e.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let i = 0; i < e.length; i++) {
    const c = e[i];
    if (!c || typeof c != "object")
      throw new TypeError(`inColumns[${i}] must be an object`);
    if (typeof c.columnName != "string" || !c.columnName.trim())
      throw new TypeError(`inColumns[${i}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(s))
    throw new TypeError("inData must be an Array");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!c || typeof c != "object")
      throw new TypeError(`inData[${i}] must be an object`);
  }
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("inSpec must be an object");
  const t = ((l = (r = (o = e[0]) == null ? void 0 : o.template) == null ? void 0 : r.body) == null ? void 0 : l.tr) || "buildBodyTr";
  if (!(t in a))
    throw new Error(`Row template "${t}" not found in inSpec`);
  for (let i = 0; i < e.length; i++) {
    const c = e[i], b = ((n = (d = c.template) == null ? void 0 : d.body) == null ? void 0 : n.cell) || ((u = c.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in a))
      throw new Error(`Cell template "${b}" for column "${c.columnName}" not found in inSpec`);
  }
  return !0;
}, _t = (e, s) => e.map((t) => {
  var d, n, u;
  const o = ((n = (d = t.template) == null ? void 0 : d.body) == null ? void 0 : n.cell) || ((u = t.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", r = s[o];
  return y(t, r);
}), U = (e, s, a) => {
  var u, i, c;
  Mt(e, s, a);
  const t = e, o = s, r = a, l = ((c = (i = (u = t[0]) == null ? void 0 : u.template) == null ? void 0 : i.body) == null ? void 0 : c.tr) || "buildBodyTr", d = r[l];
  return o.map((b) => {
    const f = y(b, d), g = Kt(t, b), h = _t(g, r);
    return f.children = h, f;
  });
}, F = (e, s) => {
  var a;
  if (((a = e == null ? void 0 : e.attributes) == null ? void 0 : a["data-role"]) === s) return e;
  for (const t of (e == null ? void 0 : e.children) ?? []) {
    const o = F(t, s);
    if (o) return o;
  }
  return null;
}, Q = (e, s) => {
  const a = e[s.fileName], t = s.dataRole ? F(a, s.dataRole) : a;
  return (s.filePath ?? []).reduce((o, r) => o[r], t);
}, Gt = {
  tagName: "div",
  attributes: {
    class: "vstack gap-3"
  },
  children: []
}, Ht = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "form-label fw-semibold",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "form-control",
        id: "${columnName}",
        name: "${columnName}",
        value: "${rowValue}"
      }
    }
  ]
}, Jt = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "form-label fw-semibold",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "form-control",
        id: "${columnName}",
        name: "${columnName}",
        value: "${rowValue}",
        required: "required"
      }
    }
  ]
}, Ut = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "form-label fw-semibold",
        for: "${columnName}"
      }
    },
    {
      tagName: "textarea",
      textContent: "${rowValue}",
      attributes: {
        class: "form-control",
        id: "${columnName}",
        name: "${columnName}",
        rows: "3"
      }
    }
  ]
}, Qt = {
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
        id: "${columnName}",
        name: "${columnName}",
        value: "true"
      }
    },
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "form-check-label",
        for: "${columnName}"
      }
    }
  ]
}, Xt = {
  tagName: "button",
  textContent: "${submitLabel}",
  attributes: {
    type: "submit",
    class: "${submitClass}",
    id: "submitBtnId"
  }
}, Yt = {
  tagName: "button",
  textContent: "${cancelLabel}",
  attributes: {
    type: "reset",
    class: "${cancelClass}",
    id: "cancelBtnId"
  }
}, Zt = {
  buildBodyTr: Gt,
  buildBodyCell: Ht,
  buildRequiredField: Jt,
  buildTextareaField: Ut,
  buildCheckboxField: Qt,
  buildSubmitButton: Xt,
  buildCancelButton: Yt
}, Ot = "form", te = {
  id: "${formId}",
  class: "${formClass}"
}, ee = [
  {
    tagName: "div",
    attributes: {
      class: "vstack gap-3",
      "data-role": "form-fields"
    },
    children: []
  },
  {
    tagName: "div",
    attributes: {
      class: "${buttonBarClass}",
      "data-role": "form-actions"
    },
    children: []
  }
], ae = {
  tagName: Ot,
  attributes: te,
  children: ee
}, se = [
  {
    narration: "Apply the caller's form options to the page template.",
    func: "applyTemplate",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "options"
        ]
      },
      {
        fileName: "page"
      }
    ],
    destinationPath: {
      fileName: "page"
    }
  },
  {
    narration: "Build the submit button from its JSON template.",
    func: "fromCollection",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "optionsRows"
        ]
      },
      {
        fileName: "spec",
        filePath: [
          "buildSubmitButton"
        ]
      }
    ],
    destinationPath: {
      fileName: "page",
      dataRole: "form-actions",
      filePath: [
        "children"
      ],
      action: "push"
    }
  },
  {
    narration: "Build the cancel button from its JSON template.",
    func: "fromCollection",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "optionsRows"
        ]
      },
      {
        fileName: "spec",
        filePath: [
          "buildCancelButton"
        ]
      }
    ],
    destinationPath: {
      fileName: "page",
      dataRole: "form-actions",
      filePath: [
        "children"
      ],
      action: "push"
    }
  }
], re = [
  {
    narration: "Build each row's form fields from the column schema and row data.",
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
      fileName: "page",
      dataRole: "form-fields",
      filePath: [
        "children"
      ],
      action: "push"
    },
    skipIfEmpty: !0
  }
], X = ({ inColumns: e, inData: s, inOptions: a, columns: t, data: o, options: r } = {}) => ({
  localColumns: Array.isArray(e) && e.length > 0 ? e : Array.isArray(t) ? t : [],
  localData: Array.isArray(s) && s.length > 0 ? s : Array.isArray(o) ? o : [],
  localOptions: a && Object.keys(a).length > 0 ? a : r ?? {}
}), W = (e) => Array.isArray(e) ? e : [e], D = {
  set: (e, s, a) => {
    e[s] = a;
  },
  push: (e, s, a) => {
    e[s].push(...W(a));
  },
  unshift: (e, s, a) => {
    e[s].unshift(...W(a));
  }
}, Y = (e, s, a) => {
  const t = s.dataRole ? F(e[s.fileName], s.dataRole) : e[s.fileName], o = [...s.filePath ?? []];
  if (o.length === 0) {
    e[s.fileName] = a;
    return;
  }
  const r = o.pop(), l = o.reduce((d, n) => d[n], t);
  (D[s.action] ?? D.set)(l, r, a);
}, ne = { applyTemplate: y, fromCollection: J, twoDimensional: U }, V = (e, s) => {
  s.forEach((a) => {
    const t = a.inputPaths.map((l) => Q(e, l));
    if (a.skipIfEmpty && t.some((l) => Array.isArray(l) && l.length === 0)) return;
    const r = ne[a.func](...t);
    Y(e, a.destinationPath, r);
  });
}, z = (e = {}) => {
  const { localColumns: s, localData: a, localOptions: t } = X(e), o = {
    formId: "formWithButtonsId",
    formClass: "vstack gap-3",
    buttonBarClass: "d-flex align-items-center justify-content-end gap-2 mt-4 pt-3 border-top",
    submitLabel: "Submit",
    cancelLabel: "Cancel",
    submitClass: "btn btn-primary",
    cancelClass: "btn btn-outline-secondary",
    ...t
  }, r = {
    data: {
      columns: s,
      rows: a.length > 0 ? [a[0]] : [{}],
      options: o,
      optionsRows: [o]
    },
    page: structuredClone(ae),
    spec: Zt
  };
  return V(r, se), V(r, re), r.page;
}, oe = [
  {
    narration: "Fill the form identity from its type-scoped options.",
    func: "applyTemplate",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "options"
        ]
      },
      {
        fileName: "page"
      }
    ],
    destinationPath: {
      fileName: "page"
    }
  },
  {
    narration: "Build the selected header recipe, when enabled.",
    func: "fromCollection",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "header"
        ]
      },
      {
        fileName: "spec",
        filePath: [
          "header"
        ]
      }
    ],
    destinationPath: {
      fileName: "page",
      filePath: [
        "children"
      ],
      action: "push"
    },
    skipIfEmpty: !0
  },
  {
    narration: "Add the form body skeleton.",
    func: "fromCollection",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "body"
        ]
      },
      {
        fileName: "spec",
        filePath: [
          "body"
        ]
      }
    ],
    destinationPath: {
      fileName: "page",
      filePath: [
        "children"
      ],
      action: "push"
    }
  },
  {
    narration: "Build the body fields from columns and the form record.",
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
      fileName: "page",
      dataRole: "form-body",
      filePath: [
        "children"
      ],
      action: "push"
    },
    skipIfEmpty: !0
  },
  {
    narration: "Build the selected header actions from the shared button template.",
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
      fileName: "page",
      dataRole: "header-actions",
      filePath: [
        "children"
      ],
      action: "push"
    },
    skipIfEmpty: !0
  },
  {
    narration: "Build the selected footer recipe and its action slot.",
    func: "fromCollection",
    inputPaths: [
      {
        fileName: "data",
        filePath: [
          "footer"
        ]
      },
      {
        fileName: "spec",
        filePath: [
          "footer"
        ]
      }
    ],
    destinationPath: {
      fileName: "page",
      filePath: [
        "children"
      ],
      action: "push"
    },
    skipIfEmpty: !0
  },
  {
    narration: "Build the selected footer actions from the shared button template.",
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
      fileName: "page",
      dataRole: "footer-actions",
      filePath: [
        "children"
      ],
      action: "push"
    },
    skipIfEmpty: !0
  }
], le = [
  {
    narration: "Apply the selected class recipe to the completed form tree.",
    func: "applyTemplate",
    inputPaths: [
      {
        fileName: "context",
        filePath: [
          "classValues"
        ]
      },
      {
        fileName: "page"
      }
    ],
    destinationPath: {
      fileName: "page"
    }
  }
], K = {
  build: oe,
  style: le
}, ie = { applyTemplate: y, fromCollection: J, twoDimensional: U }, M = (e, s) => {
  s.forEach((a) => {
    const t = a.inputPaths.map((l) => Q(e, l));
    if (a.skipIfEmpty && t.some((l) => Array.isArray(l) && l.length === 0)) return;
    const r = ie[a.func](...t);
    Y(e, a.destinationPath, r);
  });
}, ce = (e) => {
  M(e, K.build), M(e, K.style);
}, ue = [
  {
    columnName: "Name",
    label: "Full name",
    type: "text",
    placeholder: "Enter your name",
    template: {
      body: {
        cell: "buildRequiredField"
      }
    }
  },
  {
    columnName: "Email",
    label: "Email address",
    type: "email",
    placeholder: "name@example.com",
    template: {
      body: {
        cell: "buildRequiredField"
      }
    }
  },
  {
    columnName: "Phone",
    label: "Phone number",
    type: "tel",
    placeholder: "Enter your phone number"
  }
], de = [
  {
    Name: "",
    Email: "",
    Phone: ""
  }
], be = {
  formId: "bigButtonsForm",
  title: "Account details",
  description: "Update your profile information.",
  recordId: "",
  header: "label",
  body: "stacked",
  footer: "saveCancel"
}, A = {
  columns: ue,
  data: de,
  options: be
}, me = "bootstrap", pe = {
  bootstrap: {
    base: {
      formClass: "card border-0 shadow-sm w-100 p-4 p-lg-5",
      bodyClass: "mt-4",
      labelClass: "form-label fw-semibold",
      inputClass: "form-control",
      inputSizeClass: "form-control-lg",
      checkboxWrapperClass: "form-check mb-3",
      checkboxInputClass: "form-check-input",
      checkboxLabelClass: "form-check-label",
      footerClass: "mt-4 pt-3 border-top",
      footerActionsClass: "d-flex flex-wrap justify-content-end gap-2",
      buttonSizeClass: "btn-lg",
      buttonPaddingClass: "px-4 py-2",
      primaryButtonClass: "btn btn-primary text-nowrap",
      secondaryButtonClass: "btn btn-outline-secondary text-nowrap",
      infoButtonClass: "btn btn-outline-info text-nowrap",
      inlineButtonClass: "btn btn-outline-secondary text-nowrap"
    },
    headers: {
      none: {},
      label: {
        headerClass: "d-flex align-items-center justify-content-between gap-3",
        headingClass: "me-auto",
        titleClass: "h4 fw-semibold mb-1",
        descriptionClass: "text-muted mb-0",
        recordIdClass: "d-none",
        headerActionsClass: "d-none",
        headerButtonClass: "btn btn-outline-secondary text-nowrap"
      },
      labelWithRefresh: {
        headerClass: "d-flex align-items-center justify-content-between gap-3",
        headingClass: "me-auto",
        titleClass: "h4 fw-semibold mb-1",
        descriptionClass: "text-muted mb-0",
        recordIdClass: "d-none",
        headerActionsClass: "d-flex align-items-center gap-2",
        headerButtonClass: "btn btn-outline-secondary text-nowrap"
      },
      labelWithId: {
        headerClass: "d-flex align-items-center justify-content-between gap-3",
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
      none: {},
      saveCancel: {},
      edit: {}
    }
  }
}, _ = {
  defaultFramework: me,
  frameworks: pe
}, fe = "form", he = {
  id: "${formId}",
  class: "${formClass}",
  "data-form-type": "bigButtons"
}, ye = [], ge = {
  tagName: fe,
  attributes: he,
  children: ye
}, $e = {
  none: {
    show: !1,
    actions: []
  },
  label: {
    show: !0,
    actions: []
  },
  labelWithRefresh: {
    show: !0,
    actions: [
      {
        label: "Refresh",
        type: "button",
        buttonClass: "${headerButtonClass}"
      }
    ]
  },
  labelWithId: {
    show: !0,
    actions: []
  }
}, Ce = {
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
}, we = {
  none: {
    show: !1,
    actions: []
  },
  saveCancel: {
    show: !0,
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
    show: !0,
    actions: [
      {
        label: "Edit",
        type: "button",
        buttonClass: "${infoButtonClass}"
      }
    ]
  }
}, B = {
  headers: $e,
  bodies: Ce,
  footers: we
}, Ne = {
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
}, xe = {
  tagName: "section",
  attributes: {
    class: "${bodyClass}",
    "data-role": "form-body"
  },
  children: []
}, Ie = {
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
}, Ae = {
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
}, Pe = {
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
    }
  ]
}, Fe = {
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
}, je = {
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
}, Ee = {
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
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, qe = {
  header: Ne,
  body: xe,
  footer: Ie,
  buildBodyTr: Ae,
  buildBodyCell: Be,
  buildRequiredField: ke,
  buildTextareaField: Te,
  buildCheckboxField: Pe,
  buildInlineField: ve,
  buildInlineRequiredField: Fe,
  buildInlineFieldWithButton: je,
  buildInlineRequiredFieldWithButton: Re,
  buildInlineTextareaField: Se,
  buildInlineCheckboxField: Ee,
  button: Le
}, k = (e, s, a) => {
  const t = e[s];
  if (!t) throw new RangeError("Unknown bigButtons " + a + ": " + s);
  return t;
}, We = (e = {}) => {
  const { localColumns: s, localData: a, localOptions: t } = X(e), o = t ?? {};
  if (typeof o != "object" || Array.isArray(o))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const r = o["form.bigButtons"] ?? o.bigButtons ?? {};
  if (typeof r != "object" || Array.isArray(r))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const l = { ...A.options, ...r }, d = k(B.headers, l.header, "header"), n = k(B.bodies, l.body, "body"), u = k(B.footers, l.footer, "footer"), i = Array.isArray(e.inColumns) || Array.isArray(e.columns), b = (s.length || i ? s : A.columns).map((m) => {
    var N, j, R, S, E;
    const w = ((j = (N = m.template) == null ? void 0 : N.body) == null ? void 0 : j.cell) ?? "buildBodyCell";
    let $ = ((R = n.fieldTemplates) == null ? void 0 : R[w]) ?? w;
    return m.buttonText && ($ = ((S = n.buttonFieldTemplates) == null ? void 0 : S[$]) ?? $), {
      ...m,
      label: m.label ?? m.title ?? m.columnName,
      type: m.type ?? "text",
      placeholder: m.placeholder ?? "",
      buttonType: m.buttonType ?? "button",
      template: {
        ...m.template,
        body: { ...(E = m.template) == null ? void 0 : E.body, cell: $ }
      }
    };
  }), f = a[0] ?? A.data[0] ?? {}, g = Object.fromEntries(b.map((m) => [
    m.columnName,
    f[m.columnName] ?? m.value ?? ""
  ])), h = _.frameworks[_.defaultFramework];
  return {
    context: { classValues: Object.assign(
      {},
      h.base,
      h.headers[l.header],
      h.bodies[l.body],
      h.footers[l.footer]
    ) },
    data: {
      columns: b,
      rows: [g],
      options: l,
      header: d.show ? [{
        title: l.title,
        description: l.description,
        recordId: l.recordId
      }] : [],
      headerActions: d.actions,
      body: [{}],
      footer: u.show ? [{}] : [],
      footerActions: u.actions
    },
    page: structuredClone(ge),
    spec: qe
  };
}, G = (e = {}) => {
  const s = We(e);
  return ce(s), s.page;
}, De = {
  stacked: T,
  vertical: T,
  inline: q,
  horizontal: q,
  withButtons: z,
  buttons: z,
  bigButtons: G,
  "form.bigButtons": G
}, Ve = (e = {}) => (e.type ?? (e.type = "stacked"), at(e), (De[e.type] || T)({
  inColumns: e.columns,
  inData: e.data,
  inOptions: e.options
}));
dt(Ve);
export {
  Ve as default,
  Ve as render
};
