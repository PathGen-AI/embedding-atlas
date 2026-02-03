import { coordinator as aw, MosaicClient as bc, queryFieldInfo as fw } from "@uwdata/mosaic-core";
import { Query as Ro, count as cw, cast as Lf, column as ci, row_number as hw, desc as dw, eq as gw, literal as vw } from "@uwdata/mosaic-sql";
const Ze = 2, Hs = 4, Ws = 8, Rn = 16, Sn = 32, ar = 64, Ao = 128, jt = 512, je = 1024, mt = 2048, En = 4096, Ot = 8192, Bn = 16384, Io = 32768, ir = 65536, Ff = 1 << 17, yc = 1 << 18, Nr = 1 << 19, _w = 1 << 20, or = 32768, Ss = 1 << 21, Ns = 1 << 22, kn = 1 << 23, tr = Symbol("$state"), xc = Symbol("legacy props"), pw = Symbol(""), Ir = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Bs = 3, Br = 8, Cc = !1;
var ks = Array.isArray, mw = Array.prototype.indexOf, qs = Array.from, Rc = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, Sc = Object.getOwnPropertyDescriptors, Ec = Object.prototype, ww = Array.prototype, Oo = Object.getPrototypeOf, Mf = Object.isExtensible;
function bw(o) {
  for (var n = 0; n < o.length; n++)
    o[n]();
}
function Tc() {
  var o, n, i = new Promise((s, a) => {
    o = s, n = a;
  });
  return { promise: i, resolve: o, reject: n };
}
function Ac(o) {
  return o === this.v;
}
function Ic(o, n) {
  return o != o ? n == n : o !== n || o !== null && typeof o == "object" || typeof o == "function";
}
function Oc(o) {
  return !Ic(o, this.v);
}
function Pc(o) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function yw() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function xw(o) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Cw() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Rw(o) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Sw() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ew() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Tw() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Aw() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Iw() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ow() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let bi = !1, Pw = !1;
function Lw() {
  bi = !0;
}
const Lc = 1, Fc = 2, Mc = 4, Fw = 8, Mw = 16, Dw = 1, Hw = 2, Dc = "[", Po = "[!", zs = "]", Fr = {}, Qe = Symbol(), Ww = "http://www.w3.org/1999/xhtml", Nw = [];
function Hc(o, n = !1, i = !1) {
  return yo(o, /* @__PURE__ */ new Map(), "", Nw, null, i);
}
function yo(o, n, i, s, a = null, f = !1) {
  if (typeof o == "object" && o !== null) {
    var d = n.get(o);
    if (d !== void 0) return d;
    if (o instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(o)
    );
    if (o instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(o)
    );
    if (ks(o)) {
      var _ = (
        /** @type {Snapshot<any>} */
        Array(o.length)
      );
      n.set(o, _), a !== null && n.set(a, _);
      for (var m = 0; m < o.length; m += 1) {
        var p = o[m];
        m in o && (_[m] = yo(p, n, i, s, null, f));
      }
      return _;
    }
    if (Oo(o) === Ec) {
      _ = {}, n.set(o, _), a !== null && n.set(a, _);
      for (var b in o)
        _[b] = yo(
          // @ts-expect-error
          o[b],
          n,
          i,
          s,
          null,
          f
        );
      return _;
    }
    if (o instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(o)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    o.toJSON == "function" && !f)
      return yo(
        /** @type {T & { toJSON(): any } } */
        o.toJSON(),
        n,
        i,
        s,
        // Associate the instance with the toJSON clone
        o
      );
  }
  if (o instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      o
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(o)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      o
    );
  }
}
let Le = null;
function Mr(o) {
  Le = o;
}
function dt(o) {
  return (
    /** @type {T} */
    Wc().get(o)
  );
}
function qt(o, n) {
  return Wc().set(o, n), n;
}
function De(o, n = !1, i) {
  Le = {
    p: Le,
    i: !1,
    c: null,
    e: null,
    s: o,
    x: null,
    l: bi && !n ? { s: null, u: null, $: [] } : null
  };
}
function He(o) {
  var n = (
    /** @type {ComponentContext} */
    Le
  ), i = n.e;
  if (i !== null) {
    n.e = null;
    for (var s of i)
      ah(s);
  }
  return n.i = !0, Le = n.p, /** @type {T} */
  {};
}
function kr() {
  return !bi || Le !== null && Le.l === null;
}
function Wc(o) {
  return Le === null && Pc(), Le.c ??= new Map(Bw(Le) || void 0);
}
function Bw(o) {
  let n = o.p;
  for (; n !== null; ) {
    const i = n.c;
    if (i !== null)
      return i;
    n = n.p;
  }
  return null;
}
let er = [];
function Nc() {
  var o = er;
  er = [], bw(o);
}
function fr(o) {
  if (er.length === 0 && !gi) {
    var n = er;
    queueMicrotask(() => {
      n === er && Nc();
    });
  }
  er.push(o);
}
function kw() {
  for (; er.length > 0; )
    Nc();
}
function Lo(o) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function qw() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let se = !1;
function xn(o) {
  se = o;
}
let _e;
function _t(o) {
  if (o === null)
    throw Lo(), Fr;
  return _e = o;
}
function yi() {
  return _t(
    /** @type {TemplateNode} */
    /* @__PURE__ */ an(_e)
  );
}
function he(o) {
  if (se) {
    if (/* @__PURE__ */ an(_e) !== null)
      throw Lo(), Fr;
    _e = o;
  }
}
function zw(o = 1) {
  if (se) {
    for (var n = o, i = _e; n--; )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ an(i);
    _e = i;
  }
}
function So(o = !0) {
  for (var n = 0, i = _e; ; ) {
    if (i.nodeType === Br) {
      var s = (
        /** @type {Comment} */
        i.data
      );
      if (s === zs) {
        if (n === 0) return i;
        n -= 1;
      } else (s === Dc || s === Po) && (n += 1);
    }
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ an(i)
    );
    o && i.remove(), i = a;
  }
}
function Bc(o) {
  if (!o || o.nodeType !== Br)
    throw Lo(), Fr;
  return (
    /** @type {Comment} */
    o.data
  );
}
function $e(o) {
  if (typeof o != "object" || o === null || tr in o)
    return o;
  const n = Oo(o);
  if (n !== Ec && n !== ww)
    return o;
  var i = /* @__PURE__ */ new Map(), s = ks(o), a = /* @__PURE__ */ k(0), f = rr, d = (_) => {
    if (rr === f)
      return _();
    var m = ue, p = rr;
    vt(null), Bf(f);
    var b = _();
    return vt(m), Bf(p), b;
  };
  return s && i.set("length", /* @__PURE__ */ k(
    /** @type {any[]} */
    o.length
  )), new Proxy(
    /** @type {any} */
    o,
    {
      defineProperty(_, m, p) {
        (!("value" in p) || p.configurable === !1 || p.enumerable === !1 || p.writable === !1) && Tw();
        var b = i.get(m);
        return b === void 0 ? b = d(() => {
          var C = /* @__PURE__ */ k(p.value);
          return i.set(m, C), C;
        }) : I(b, p.value, !0), !0;
      },
      deleteProperty(_, m) {
        var p = i.get(m);
        if (p === void 0) {
          if (m in _) {
            const b = d(() => /* @__PURE__ */ k(Qe));
            i.set(m, b), vi(a);
          }
        } else
          I(p, Qe), vi(a);
        return !0;
      },
      get(_, m, p) {
        if (m === tr)
          return o;
        var b = i.get(m), C = m in _;
        if (b === void 0 && (!C || Or(_, m)?.writable) && (b = d(() => {
          var O = $e(C ? _[m] : Qe), L = /* @__PURE__ */ k(O);
          return L;
        }), i.set(m, b)), b !== void 0) {
          var S = g(b);
          return S === Qe ? void 0 : S;
        }
        return Reflect.get(_, m, p);
      },
      getOwnPropertyDescriptor(_, m) {
        var p = Reflect.getOwnPropertyDescriptor(_, m);
        if (p && "value" in p) {
          var b = i.get(m);
          b && (p.value = g(b));
        } else if (p === void 0) {
          var C = i.get(m), S = C?.v;
          if (C !== void 0 && S !== Qe)
            return {
              enumerable: !0,
              configurable: !0,
              value: S,
              writable: !0
            };
        }
        return p;
      },
      has(_, m) {
        if (m === tr)
          return !0;
        var p = i.get(m), b = p !== void 0 && p.v !== Qe || Reflect.has(_, m);
        if (p !== void 0 || ae !== null && (!b || Or(_, m)?.writable)) {
          p === void 0 && (p = d(() => {
            var S = b ? $e(_[m]) : Qe, O = /* @__PURE__ */ k(S);
            return O;
          }), i.set(m, p));
          var C = g(p);
          if (C === Qe)
            return !1;
        }
        return b;
      },
      set(_, m, p, b) {
        var C = i.get(m), S = m in _;
        if (s && m === "length")
          for (var O = p; O < /** @type {Source<number>} */
          C.v; O += 1) {
            var L = i.get(O + "");
            L !== void 0 ? I(L, Qe) : O in _ && (L = d(() => /* @__PURE__ */ k(Qe)), i.set(O + "", L));
          }
        if (C === void 0)
          (!S || Or(_, m)?.writable) && (C = d(() => /* @__PURE__ */ k(void 0)), I(C, $e(p)), i.set(m, C));
        else {
          S = C.v !== Qe;
          var W = d(() => $e(p));
          I(C, W);
        }
        var M = Reflect.getOwnPropertyDescriptor(_, m);
        if (M?.set && M.set.call(b, p), !S) {
          if (s && typeof m == "string") {
            var D = (
              /** @type {Source<number>} */
              i.get("length")
            ), H = Number(m);
            Number.isInteger(H) && H >= D.v && I(D, H + 1);
          }
          vi(a);
        }
        return !0;
      },
      ownKeys(_) {
        g(a);
        var m = Reflect.ownKeys(_).filter((C) => {
          var S = i.get(C);
          return S === void 0 || S.v !== Qe;
        });
        for (var [p, b] of i)
          b.v !== Qe && !(p in _) && m.push(p);
        return m;
      },
      setPrototypeOf() {
        Aw();
      }
    }
  );
}
var Es, kc, qc, zc;
function Ts() {
  if (Es === void 0) {
    Es = window, kc = /Firefox/.test(navigator.userAgent);
    var o = Element.prototype, n = Node.prototype, i = Text.prototype;
    qc = Or(n, "firstChild").get, zc = Or(n, "nextSibling").get, Mf(o) && (o.__click = void 0, o.__className = void 0, o.__attributes = null, o.__style = void 0, o.__e = void 0), Mf(i) && (i.__t = void 0);
  }
}
function Gt(o = "") {
  return document.createTextNode(o);
}
// @__NO_SIDE_EFFECTS__
function lr(o) {
  return qc.call(o);
}
// @__NO_SIDE_EFFECTS__
function an(o) {
  return zc.call(o);
}
function ve(o, n) {
  if (!se)
    return /* @__PURE__ */ lr(o);
  var i = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ lr(_e)
  );
  if (i === null)
    i = _e.appendChild(Gt());
  else if (n && i.nodeType !== Bs) {
    var s = Gt();
    return i?.before(s), _t(s), s;
  }
  return _t(i), i;
}
function At(o, n = !1) {
  if (!se) {
    var i = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ lr(
        /** @type {Node} */
        o
      )
    );
    return i instanceof Comment && i.data === "" ? /* @__PURE__ */ an(i) : i;
  }
  if (n && _e?.nodeType !== Bs) {
    var s = Gt();
    return _e?.before(s), _t(s), s;
  }
  return _e;
}
function Ut(o, n = 1, i = !1) {
  let s = se ? _e : o;
  for (var a; n--; )
    a = s, s = /** @type {TemplateNode} */
    /* @__PURE__ */ an(s);
  if (!se)
    return s;
  if (i && s?.nodeType !== Bs) {
    var f = Gt();
    return s === null ? a?.after(f) : s.before(f), _t(f), f;
  }
  return _t(s), /** @type {TemplateNode} */
  s;
}
function Uc(o) {
  o.textContent = "";
}
function Gc() {
  return !1;
}
function Kc(o) {
  var n = ae;
  if (n === null)
    return ue.f |= kn, o;
  if ((n.f & Io) === 0) {
    if ((n.f & Ao) === 0)
      throw o;
    n.b.error(o);
  } else
    Dr(o, n);
}
function Dr(o, n) {
  for (; n !== null; ) {
    if ((n.f & Ao) !== 0)
      try {
        n.b.error(o);
        return;
      } catch (i) {
        o = i;
      }
    n = n.parent;
  }
  throw o;
}
const wo = /* @__PURE__ */ new Set();
let ke = null, It = null, on = [], Fo = null, As = !1, gi = !1;
class ln {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #r = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #u = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #i = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #o = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#r > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(n) {
    on = [], this.apply();
    var i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const s of n)
      this.#l(s, i);
    this.is_fork || this.#f(), this.is_deferred() ? (this.#s(i.effects), this.#s(i.render_effects), this.#s(i.block_effects)) : (ke = null, Df(i.render_effects), Df(i.effects), this.#u?.resolve()), It = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #l(n, i) {
    n.f ^= je;
    for (var s = n.first; s !== null; ) {
      var a = s.f, f = (a & (Sn | ar)) !== 0, d = f && (a & je) !== 0, _ = d || (a & Ot) !== 0 || this.skipped_effects.has(s);
      if ((s.f & Ao) !== 0 && s.b?.is_pending() && (i = {
        parent: i,
        effect: s,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !_ && s.fn !== null) {
        f ? s.f ^= je : (a & Hs) !== 0 ? i.effects.push(s) : xi(s) && ((s.f & Rn) !== 0 && i.block_effects.push(s), mi(s));
        var m = s.first;
        if (m !== null) {
          s = m;
          continue;
        }
      }
      var p = s.parent;
      for (s = s.next; s === null && p !== null; )
        p === i.effect && (this.#s(i.effects), this.#s(i.render_effects), this.#s(i.block_effects), i = /** @type {EffectTarget} */
        i.parent), s = p.next, p = p.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(n) {
    for (const i of n)
      ((i.f & mt) !== 0 ? this.#i : this.#o).push(i), this.#a(i.deps), et(i, je);
  }
  /**
   * @param {Value[] | null} deps
   */
  #a(n) {
    if (n !== null)
      for (const i of n)
        (i.f & Ze) === 0 || (i.f & or) === 0 || (i.f ^= or, this.#a(
          /** @type {Derived} */
          i.deps
        ));
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(n, i) {
    this.previous.has(n) || this.previous.set(n, i), (n.f & kn) === 0 && (this.current.set(n, n.v), It?.set(n, n.v));
  }
  activate() {
    ke = this, this.apply();
  }
  deactivate() {
    ke === this && (ke = null, It = null);
  }
  flush() {
    if (this.activate(), on.length > 0) {
      if (Yc(), ke !== null && ke !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const n of this.#t) n(this);
    this.#t.clear();
  }
  #f() {
    if (this.#r === 0) {
      for (const n of this.#e) n();
      this.#e.clear();
    }
    this.#n === 0 && this.#c();
  }
  #c() {
    if (wo.size > 1) {
      this.previous.clear();
      var n = It, i = !0, s = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const a of wo) {
        if (a === this) {
          i = !1;
          continue;
        }
        const f = [];
        for (const [_, m] of this.current) {
          if (a.current.has(_))
            if (i && m !== a.current.get(_))
              a.current.set(_, m);
            else
              continue;
          f.push(_);
        }
        if (f.length === 0)
          continue;
        const d = [...a.current.keys()].filter((_) => !this.current.has(_));
        if (d.length > 0) {
          const _ = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map();
          for (const p of f)
            Xc(p, d, _, m);
          if (on.length > 0) {
            ke = a, a.apply();
            for (const p of on)
              a.#l(p, s);
            on = [], a.deactivate();
          }
        }
      }
      ke = null, It = n;
    }
    this.committed = !0, wo.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(n) {
    this.#n += 1, n && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(n) {
    this.#n -= 1, n && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const n of this.#i)
      et(n, mt), sr(n);
    for (const n of this.#o)
      et(n, En), sr(n);
    this.#i = [], this.#o = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(n) {
    this.#e.add(n);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(n) {
    this.#t.add(n);
  }
  settled() {
    return (this.#u ??= Tc()).promise;
  }
  static ensure() {
    if (ke === null) {
      const n = ke = new ln();
      wo.add(ke), gi || ln.enqueue(() => {
        ke === n && n.flush();
      });
    }
    return ke;
  }
  /** @param {() => void} task */
  static enqueue(n) {
    fr(n);
  }
  apply() {
  }
}
function Uw(o) {
  var n = gi;
  gi = !0;
  try {
    for (var i; ; ) {
      if (kw(), on.length === 0 && (ke?.flush(), on.length === 0))
        return Fo = null, /** @type {T} */
        i;
      Yc();
    }
  } finally {
    gi = n;
  }
}
function Yc() {
  var o = nr;
  As = !0;
  try {
    var n = 0;
    for (Wf(!0); on.length > 0; ) {
      var i = ln.ensure();
      if (n++ > 1e3) {
        var s, a;
        Gw();
      }
      i.process(on), qn.clear();
    }
  } finally {
    As = !1, Wf(o), Fo = null;
  }
}
function Gw() {
  try {
    Sw();
  } catch (o) {
    Dr(o, Fo);
  }
}
let yn = null;
function Df(o) {
  var n = o.length;
  if (n !== 0) {
    for (var i = 0; i < n; ) {
      var s = o[i++];
      if ((s.f & (Bn | Ot)) === 0 && xi(s) && (yn = /* @__PURE__ */ new Set(), mi(s), s.deps === null && s.first === null && s.nodes_start === null && (s.teardown === null && s.ac === null ? hh(s) : s.fn = null), yn?.size > 0)) {
        qn.clear();
        for (const a of yn) {
          if ((a.f & (Bn | Ot)) !== 0) continue;
          const f = [a];
          let d = a.parent;
          for (; d !== null; )
            yn.has(d) && (yn.delete(d), f.push(d)), d = d.parent;
          for (let _ = f.length - 1; _ >= 0; _--) {
            const m = f[_];
            (m.f & (Bn | Ot)) === 0 && mi(m);
          }
        }
        yn.clear();
      }
    }
    yn = null;
  }
}
function Xc(o, n, i, s) {
  if (!i.has(o) && (i.add(o), o.reactions !== null))
    for (const a of o.reactions) {
      const f = a.f;
      (f & Ze) !== 0 ? Xc(
        /** @type {Derived} */
        a,
        n,
        i,
        s
      ) : (f & (Ns | Rn)) !== 0 && (f & mt) === 0 && // we may have scheduled this one already
      Zc(a, n, s) && (et(a, mt), sr(
        /** @type {Effect} */
        a
      ));
    }
}
function Zc(o, n, i) {
  const s = i.get(o);
  if (s !== void 0) return s;
  if (o.deps !== null)
    for (const a of o.deps) {
      if (n.includes(a))
        return !0;
      if ((a.f & Ze) !== 0 && Zc(
        /** @type {Derived} */
        a,
        n,
        i
      ))
        return i.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return i.set(o, !1), !1;
}
function sr(o) {
  for (var n = Fo = o; n.parent !== null; ) {
    n = n.parent;
    var i = n.f;
    if (As && n === ae && (i & Rn) !== 0 && (i & yc) === 0)
      return;
    if ((i & (ar | Sn)) !== 0) {
      if ((i & je) === 0) return;
      n.f ^= je;
    }
  }
  on.push(n);
}
function Kw(o) {
  let n = 0, i = ur(0), s;
  return () => {
    Do() && (g(i), Ks(() => (n === 0 && (s = Ci(() => o(() => vi(i)))), n += 1, () => {
      fr(() => {
        n -= 1, n === 0 && (s?.(), s = void 0, vi(i));
      });
    })));
  };
}
var Yw = ir | Nr | Ao;
function Xw(o, n, i) {
  new Zw(o, n, i);
}
class Zw {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = se ? _e : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #u;
  /** @type {Effect} */
  #i;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #l = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {DocumentFragment | null} */
  #a = null;
  /** @type {TemplateNode | null} */
  #f = null;
  #c = 0;
  #h = 0;
  #g = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #d = null;
  #v = Kw(() => (this.#d = ur(this.#c), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(n, i, s) {
    this.#t = n, this.#r = i, this.#u = s, this.parent = /** @type {Effect} */
    ae.b, this.#e = !!this.#r.pending, this.#i = Si(() => {
      if (ae.b = this, se) {
        const f = this.#n;
        yi(), /** @type {Comment} */
        f.nodeType === Br && /** @type {Comment} */
        f.data === Po ? this.#p() : this.#_();
      } else {
        var a = this.#b();
        try {
          this.#o = zt(() => s(a));
        } catch (f) {
          this.error(f);
        }
        this.#h > 0 ? this.#w() : this.#e = !1;
      }
      return () => {
        this.#f?.remove();
      };
    }, Yw), se && (this.#t = _e);
  }
  #_() {
    try {
      this.#o = zt(() => this.#u(this.#t));
    } catch (n) {
      this.error(n);
    }
    this.#e = !1;
  }
  #p() {
    const n = this.#r.pending;
    n && (this.#l = zt(() => n(this.#t)), ln.enqueue(() => {
      var i = this.#b();
      this.#o = this.#m(() => (ln.ensure(), zt(() => this.#u(i)))), this.#h > 0 ? this.#w() : (Pr(
        /** @type {Effect} */
        this.#l,
        () => {
          this.#l = null;
        }
      ), this.#e = !1);
    }));
  }
  #b() {
    var n = this.#t;
    return this.#e && (this.#f = Gt(), this.#t.before(this.#f), n = this.#f), n;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#e || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #m(n) {
    var i = ae, s = ue, a = Le;
    un(this.#i), vt(this.#i), Mr(this.#i.ctx);
    try {
      return n();
    } catch (f) {
      return Kc(f), null;
    } finally {
      un(i), vt(s), Mr(a);
    }
  }
  #w() {
    const n = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#o !== null && (this.#a = document.createDocumentFragment(), this.#a.append(
      /** @type {TemplateNode} */
      this.#f
    ), vh(this.#o, this.#a)), this.#l === null && (this.#l = zt(() => n(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #y(n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#y(n);
      return;
    }
    this.#h += n, this.#h === 0 && (this.#e = !1, this.#l && Pr(this.#l, () => {
      this.#l = null;
    }), this.#a && (this.#t.before(this.#a), this.#a = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(n) {
    this.#y(n), this.#c += n, this.#d && Hr(this.#d, this.#c);
  }
  get_effect_pending() {
    return this.#v(), g(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(n) {
    var i = this.#r.onerror;
    let s = this.#r.failed;
    if (this.#g || !i && !s)
      throw n;
    this.#o && (pt(this.#o), this.#o = null), this.#l && (pt(this.#l), this.#l = null), this.#s && (pt(this.#s), this.#s = null), se && (_t(
      /** @type {TemplateNode} */
      this.#n
    ), zw(), _t(So()));
    var a = !1, f = !1;
    const d = () => {
      if (a) {
        qw();
        return;
      }
      a = !0, f && Ow(), ln.ensure(), this.#c = 0, this.#s !== null && Pr(this.#s, () => {
        this.#s = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#m(() => (this.#g = !1, zt(() => this.#u(this.#t)))), this.#h > 0 ? this.#w() : this.#e = !1;
    };
    var _ = ue;
    try {
      vt(null), f = !0, i?.(n, d), f = !1;
    } catch (m) {
      Dr(m, this.#i && this.#i.parent);
    } finally {
      vt(_);
    }
    s && fr(() => {
      this.#s = this.#m(() => {
        ln.ensure(), this.#g = !0;
        try {
          return zt(() => {
            s(
              this.#t,
              () => n,
              () => d
            );
          });
        } catch (m) {
          return Dr(
            m,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        } finally {
          this.#g = !1;
        }
      });
    });
  }
}
function Jw(o, n, i, s) {
  const a = kr() ? Mo : Jc;
  if (i.length === 0 && o.length === 0) {
    s(n.map(a));
    return;
  }
  var f = ke, d = (
    /** @type {Effect} */
    ae
  ), _ = Vw();
  function m() {
    Promise.all(i.map((p) => /* @__PURE__ */ Qw(p))).then((p) => {
      _();
      try {
        s([...n.map(a), ...p]);
      } catch (b) {
        (d.f & Bn) === 0 && Dr(b, d);
      }
      f?.deactivate(), Eo();
    }).catch((p) => {
      Dr(p, d);
    });
  }
  o.length > 0 ? Promise.all(o).then(() => {
    _();
    try {
      return m();
    } finally {
      f?.deactivate(), Eo();
    }
  }) : m();
}
function Vw() {
  var o = ae, n = ue, i = Le, s = ke;
  return function(f = !0) {
    un(o), vt(n), Mr(i), f && s?.activate();
  };
}
function Eo() {
  un(null), vt(null), Mr(null);
}
// @__NO_SIDE_EFFECTS__
function Mo(o) {
  var n = Ze | mt, i = ue !== null && (ue.f & Ze) !== 0 ? (
    /** @type {Derived} */
    ue
  ) : null;
  return ae !== null && (ae.f |= Nr), {
    ctx: Le,
    deps: null,
    effects: null,
    equals: Ac,
    f: n,
    fn: o,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Qe
    ),
    wv: 0,
    parent: i ?? ae,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Qw(o, n) {
  let i = (
    /** @type {Effect | null} */
    ae
  );
  i === null && yw();
  var s = (
    /** @type {Boundary} */
    i.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), f = ur(
    /** @type {V} */
    Qe
  ), d = !ue, _ = /* @__PURE__ */ new Map();
  return ub(() => {
    var m = Tc();
    a = m.promise;
    try {
      Promise.resolve(o()).then(m.resolve, m.reject).then(() => {
        p === ke && p.committed && p.deactivate(), Eo();
      });
    } catch (S) {
      m.reject(S), Eo();
    }
    var p = (
      /** @type {Batch} */
      ke
    );
    if (d) {
      var b = !s.is_pending();
      s.update_pending_count(1), p.increment(b), _.get(p)?.reject(Ir), _.delete(p), _.set(p, m);
    }
    const C = (S, O = void 0) => {
      if (p.activate(), O)
        O !== Ir && (f.f |= kn, Hr(f, O));
      else {
        (f.f & kn) !== 0 && (f.f ^= kn), Hr(f, S);
        for (const [L, W] of _) {
          if (_.delete(L), L === p) break;
          W.reject(Ir);
        }
      }
      d && (s.update_pending_count(-1), p.decrement(b));
    };
    m.promise.then(C, (S) => C(null, S || "unknown"));
  }), uh(() => {
    for (const m of _.values())
      m.reject(Ir);
  }), new Promise((m) => {
    function p(b) {
      function C() {
        b === a ? m(f) : p(a);
      }
      b.then(C, C);
    }
    p(a);
  });
}
// @__NO_SIDE_EFFECTS__
function F(o) {
  const n = /* @__PURE__ */ Mo(o);
  return th(n), n;
}
// @__NO_SIDE_EFFECTS__
function Jc(o) {
  const n = /* @__PURE__ */ Mo(o);
  return n.equals = Oc, n;
}
function Vc(o) {
  var n = o.effects;
  if (n !== null) {
    o.effects = null;
    for (var i = 0; i < n.length; i += 1)
      pt(
        /** @type {Effect} */
        n[i]
      );
  }
}
function jw(o) {
  for (var n = o.parent; n !== null; ) {
    if ((n.f & Ze) === 0)
      return (
        /** @type {Effect} */
        n
      );
    n = n.parent;
  }
  return null;
}
function Us(o) {
  var n, i = ae;
  un(jw(o));
  try {
    o.f &= ~or, Vc(o), n = oh(o);
  } finally {
    un(i);
  }
  return n;
}
function Qc(o) {
  var n = Us(o);
  if (o.equals(n) || (o.v = n, o.wv = rh()), !cr)
    if (It !== null)
      Do() && It.set(o, o.v);
    else {
      var i = (o.f & jt) === 0 ? En : je;
      et(o, i);
    }
}
let Is = /* @__PURE__ */ new Set();
const qn = /* @__PURE__ */ new Map();
let jc = !1;
function ur(o, n) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: o,
    reactions: null,
    equals: Ac,
    rv: 0,
    wv: 0
  };
  return i;
}
// @__NO_SIDE_EFFECTS__
function k(o, n) {
  const i = ur(o);
  return th(i), i;
}
// @__NO_SIDE_EFFECTS__
function $c(o, n = !1, i = !0) {
  const s = ur(o);
  return n || (s.equals = Oc), bi && i && Le !== null && Le.l !== null && (Le.l.s ??= []).push(s), s;
}
function I(o, n, i = !1) {
  ue !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!sn || (ue.f & Ff) !== 0) && kr() && (ue.f & (Ze | Rn | Ns | Ff)) !== 0 && !Cn?.includes(o) && Iw();
  let s = i ? $e(n) : n;
  return Hr(o, s);
}
function Hr(o, n) {
  if (!o.equals(n)) {
    var i = o.v;
    cr ? qn.set(o, n) : qn.set(o, i), o.v = n;
    var s = ln.ensure();
    s.capture(o, i), (o.f & Ze) !== 0 && ((o.f & mt) !== 0 && Us(
      /** @type {Derived} */
      o
    ), et(o, (o.f & jt) !== 0 ? je : En)), o.wv = rh(), eh(o, mt), kr() && ae !== null && (ae.f & je) !== 0 && (ae.f & (Sn | ar)) === 0 && (kt === null ? tb([o]) : kt.push(o)), !s.is_fork && Is.size > 0 && !jc && $w();
  }
  return n;
}
function $w() {
  jc = !1;
  const o = Array.from(Is);
  for (const n of o)
    (n.f & je) !== 0 && et(n, En), xi(n) && mi(n);
  Is.clear();
}
function vi(o) {
  I(o, o.v + 1);
}
function eh(o, n) {
  var i = o.reactions;
  if (i !== null)
    for (var s = kr(), a = i.length, f = 0; f < a; f++) {
      var d = i[f], _ = d.f;
      if (!(!s && d === ae)) {
        var m = (_ & mt) === 0;
        if (m && et(d, n), (_ & Ze) !== 0) {
          var p = (
            /** @type {Derived} */
            d
          );
          It?.delete(p), (_ & or) === 0 && (_ & jt && (d.f |= or), eh(p, En));
        } else m && ((_ & Rn) !== 0 && yn !== null && yn.add(
          /** @type {Effect} */
          d
        ), sr(
          /** @type {Effect} */
          d
        ));
      }
    }
}
let Hf = !1;
function eb() {
  Hf || (Hf = !0, document.addEventListener(
    "reset",
    (o) => {
      Promise.resolve().then(() => {
        if (!o.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            o.target.elements
          )
            n.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Gs(o) {
  var n = ue, i = ae;
  vt(null), un(null);
  try {
    return o();
  } finally {
    vt(n), un(i);
  }
}
let nr = !1;
function Wf(o) {
  nr = o;
}
let cr = !1;
function Nf(o) {
  cr = o;
}
let ue = null, sn = !1;
function vt(o) {
  ue = o;
}
let ae = null;
function un(o) {
  ae = o;
}
let Cn = null;
function th(o) {
  ue !== null && (Cn === null ? Cn = [o] : Cn.push(o));
}
let it = null, Tt = 0, kt = null;
function tb(o) {
  kt = o;
}
let nh = 1, pi = 0, rr = pi;
function Bf(o) {
  rr = o;
}
function rh() {
  return ++nh;
}
function xi(o) {
  var n = o.f;
  if ((n & mt) !== 0)
    return !0;
  if (n & Ze && (o.f &= ~or), (n & En) !== 0) {
    var i = o.deps;
    if (i !== null)
      for (var s = i.length, a = 0; a < s; a++) {
        var f = i[a];
        if (xi(
          /** @type {Derived} */
          f
        ) && Qc(
          /** @type {Derived} */
          f
        ), f.wv > o.wv)
          return !0;
      }
    (n & jt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    It === null && et(o, je);
  }
  return !1;
}
function ih(o, n, i = !0) {
  var s = o.reactions;
  if (s !== null && !Cn?.includes(o))
    for (var a = 0; a < s.length; a++) {
      var f = s[a];
      (f.f & Ze) !== 0 ? ih(
        /** @type {Derived} */
        f,
        n,
        !1
      ) : n === f && (i ? et(f, mt) : (f.f & je) !== 0 && et(f, En), sr(
        /** @type {Effect} */
        f
      ));
    }
}
function oh(o) {
  var n = it, i = Tt, s = kt, a = ue, f = Cn, d = Le, _ = sn, m = rr, p = o.f;
  it = /** @type {null | Value[]} */
  null, Tt = 0, kt = null, ue = (p & (Sn | ar)) === 0 ? o : null, Cn = null, Mr(o.ctx), sn = !1, rr = ++pi, o.ac !== null && (Gs(() => {
    o.ac.abort(Ir);
  }), o.ac = null);
  try {
    o.f |= Ss;
    var b = (
      /** @type {Function} */
      o.fn
    ), C = b(), S = o.deps;
    if (it !== null) {
      var O;
      if (To(o, Tt), S !== null && Tt > 0)
        for (S.length = Tt + it.length, O = 0; O < it.length; O++)
          S[Tt + O] = it[O];
      else
        o.deps = S = it;
      if (nr && Do() && (o.f & jt) !== 0)
        for (O = Tt; O < S.length; O++)
          (S[O].reactions ??= []).push(o);
    } else S !== null && Tt < S.length && (To(o, Tt), S.length = Tt);
    if (kr() && kt !== null && !sn && S !== null && (o.f & (Ze | En | mt)) === 0)
      for (O = 0; O < /** @type {Source[]} */
      kt.length; O++)
        ih(
          kt[O],
          /** @type {Effect} */
          o
        );
    return a !== null && a !== o && (pi++, kt !== null && (s === null ? s = kt : s.push(.../** @type {Source[]} */
    kt))), (o.f & kn) !== 0 && (o.f ^= kn), C;
  } catch (L) {
    return Kc(L);
  } finally {
    o.f ^= Ss, it = n, Tt = i, kt = s, ue = a, Cn = f, Mr(d), sn = _, rr = m;
  }
}
function nb(o, n) {
  let i = n.reactions;
  if (i !== null) {
    var s = mw.call(i, o);
    if (s !== -1) {
      var a = i.length - 1;
      a === 0 ? i = n.reactions = null : (i[s] = i[a], i.pop());
    }
  }
  i === null && (n.f & Ze) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (it === null || !it.includes(n)) && (et(n, En), (n.f & jt) !== 0 && (n.f ^= jt, n.f &= ~or), Vc(
    /** @type {Derived} **/
    n
  ), To(
    /** @type {Derived} **/
    n,
    0
  ));
}
function To(o, n) {
  var i = o.deps;
  if (i !== null)
    for (var s = n; s < i.length; s++)
      nb(o, i[s]);
}
function mi(o) {
  var n = o.f;
  if ((n & Bn) === 0) {
    et(o, je);
    var i = ae, s = nr;
    ae = o, nr = !0;
    try {
      (n & Rn) !== 0 ? ab(o) : ch(o), fh(o);
      var a = oh(o);
      o.teardown = typeof a == "function" ? a : null, o.wv = nh;
      var f;
      Cc && Pw && (o.f & mt) !== 0 && o.deps;
    } finally {
      nr = s, ae = i;
    }
  }
}
function g(o) {
  var n = o.f, i = (n & Ze) !== 0;
  if (ue !== null && !sn) {
    var s = ae !== null && (ae.f & Bn) !== 0;
    if (!s && !Cn?.includes(o)) {
      var a = ue.deps;
      if ((ue.f & Ss) !== 0)
        o.rv < pi && (o.rv = pi, it === null && a !== null && a[Tt] === o ? Tt++ : it === null ? it = [o] : it.includes(o) || it.push(o));
      else {
        (ue.deps ??= []).push(o);
        var f = o.reactions;
        f === null ? o.reactions = [ue] : f.includes(ue) || f.push(ue);
      }
    }
  }
  if (cr) {
    if (qn.has(o))
      return qn.get(o);
    if (i) {
      var d = (
        /** @type {Derived} */
        o
      ), _ = d.v;
      return ((d.f & je) === 0 && d.reactions !== null || sh(d)) && (_ = Us(d)), qn.set(d, _), _;
    }
  } else if (i) {
    if (d = /** @type {Derived} */
    o, It?.has(d))
      return It.get(d);
    xi(d) && Qc(d), nr && Do() && (d.f & jt) === 0 && lh(d);
  } else if (It?.has(o))
    return It.get(o);
  if ((o.f & kn) !== 0)
    throw o.v;
  return o.v;
}
function lh(o) {
  if (o.deps !== null) {
    o.f ^= jt;
    for (const n of o.deps)
      (n.reactions ??= []).push(o), (n.f & Ze) !== 0 && (n.f & jt) === 0 && lh(
        /** @type {Derived} */
        n
      );
  }
}
function sh(o) {
  if (o.v === Qe) return !0;
  if (o.deps === null) return !1;
  for (const n of o.deps)
    if (qn.has(n) || (n.f & Ze) !== 0 && sh(
      /** @type {Derived} */
      n
    ))
      return !0;
  return !1;
}
function Ci(o) {
  var n = sn;
  try {
    return sn = !0, o();
  } finally {
    sn = n;
  }
}
const rb = -7169;
function et(o, n) {
  o.f = o.f & rb | n;
}
function ib(o) {
  if (!(typeof o != "object" || !o || o instanceof EventTarget)) {
    if (tr in o)
      Os(o);
    else if (!Array.isArray(o))
      for (let n in o) {
        const i = o[n];
        typeof i == "object" && i && tr in i && Os(i);
      }
  }
}
function Os(o, n = /* @__PURE__ */ new Set()) {
  if (typeof o == "object" && o !== null && // We don't want to traverse DOM elements
  !(o instanceof EventTarget) && !n.has(o)) {
    n.add(o), o instanceof Date && o.getTime();
    for (let s in o)
      try {
        Os(o[s], n);
      } catch {
      }
    const i = Oo(o);
    if (i !== Object.prototype && i !== Array.prototype && i !== Map.prototype && i !== Set.prototype && i !== Date.prototype) {
      const s = Sc(i);
      for (let a in s) {
        const f = s[a].get;
        if (f)
          try {
            f.call(o);
          } catch {
          }
      }
    }
  }
}
function ob(o) {
  ae === null && (ue === null && Rw(), Cw()), cr && xw();
}
function lb(o, n) {
  var i = n.last;
  i === null ? n.last = n.first = o : (i.next = o, o.prev = i, n.last = o);
}
function Tn(o, n, i) {
  var s = ae;
  s !== null && (s.f & Ot) !== 0 && (o |= Ot);
  var a = {
    ctx: Le,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: o | mt | jt,
    first: null,
    fn: n,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (i)
    try {
      mi(a), a.f |= Io;
    } catch (_) {
      throw pt(a), _;
    }
  else n !== null && sr(a);
  var f = a;
  if (i && f.deps === null && f.teardown === null && f.nodes_start === null && f.first === f.last && // either `null`, or a singular child
  (f.f & Nr) === 0 && (f = f.first, (o & Rn) !== 0 && (o & ir) !== 0 && f !== null && (f.f |= ir)), f !== null && (f.parent = s, s !== null && lb(f, s), ue !== null && (ue.f & Ze) !== 0 && (o & ar) === 0)) {
    var d = (
      /** @type {Derived} */
      ue
    );
    (d.effects ??= []).push(f);
  }
  return a;
}
function Do() {
  return ue !== null && !sn;
}
function uh(o) {
  const n = Tn(Ws, null, !1);
  return et(n, je), n.teardown = o, n;
}
function Pe(o) {
  ob();
  var n = (
    /** @type {Effect} */
    ae.f
  ), i = !ue && (n & Sn) !== 0 && (n & Io) === 0;
  if (i) {
    var s = (
      /** @type {ComponentContext} */
      Le
    );
    (s.e ??= []).push(o);
  } else
    return ah(o);
}
function ah(o) {
  return Tn(Hs | _w, o, !1);
}
function sb(o) {
  ln.ensure();
  const n = Tn(ar | Nr, o, !0);
  return (i = {}) => new Promise((s) => {
    i.outro ? Pr(n, () => {
      pt(n), s(void 0);
    }) : (pt(n), s(void 0));
  });
}
function Ri(o) {
  return Tn(Hs, o, !1);
}
function ub(o) {
  return Tn(Ns | Nr, o, !0);
}
function Ks(o, n = 0) {
  return Tn(Ws | n, o, !0);
}
function qe(o, n = [], i = [], s = []) {
  Jw(s, n, i, (a) => {
    Tn(Ws, () => o(...a.map(g)), !0);
  });
}
function Si(o, n = 0) {
  var i = Tn(Rn | n, o, !0);
  return i;
}
function zt(o) {
  return Tn(Sn | Nr, o, !0);
}
function fh(o) {
  var n = o.teardown;
  if (n !== null) {
    const i = cr, s = ue;
    Nf(!0), vt(null);
    try {
      n.call(null);
    } finally {
      Nf(i), vt(s);
    }
  }
}
function ch(o, n = !1) {
  var i = o.first;
  for (o.first = o.last = null; i !== null; ) {
    const a = i.ac;
    a !== null && Gs(() => {
      a.abort(Ir);
    });
    var s = i.next;
    (i.f & ar) !== 0 ? i.parent = null : pt(i, n), i = s;
  }
}
function ab(o) {
  for (var n = o.first; n !== null; ) {
    var i = n.next;
    (n.f & Sn) === 0 && pt(n), n = i;
  }
}
function pt(o, n = !0) {
  var i = !1;
  (n || (o.f & yc) !== 0) && o.nodes_start !== null && o.nodes_end !== null && (fb(
    o.nodes_start,
    /** @type {TemplateNode} */
    o.nodes_end
  ), i = !0), ch(o, n && !i), To(o, 0), et(o, Bn);
  var s = o.transitions;
  if (s !== null)
    for (const f of s)
      f.stop();
  fh(o);
  var a = o.parent;
  a !== null && a.first !== null && hh(o), o.next = o.prev = o.teardown = o.ctx = o.deps = o.fn = o.nodes_start = o.nodes_end = o.ac = null;
}
function fb(o, n) {
  for (; o !== null; ) {
    var i = o === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ an(o)
    );
    o.remove(), o = i;
  }
}
function hh(o) {
  var n = o.parent, i = o.prev, s = o.next;
  i !== null && (i.next = s), s !== null && (s.prev = i), n !== null && (n.first === o && (n.first = s), n.last === o && (n.last = i));
}
function Pr(o, n, i = !0) {
  var s = [];
  Ys(o, s, !0), dh(s, () => {
    i && pt(o), n && n();
  });
}
function dh(o, n) {
  var i = o.length;
  if (i > 0) {
    var s = () => --i || n();
    for (var a of o)
      a.out(s);
  } else
    n();
}
function Ys(o, n, i) {
  if ((o.f & Ot) === 0) {
    if (o.f ^= Ot, o.transitions !== null)
      for (const d of o.transitions)
        (d.is_global || i) && n.push(d);
    for (var s = o.first; s !== null; ) {
      var a = s.next, f = (s.f & ir) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Sn) !== 0 && (o.f & Rn) !== 0;
      Ys(s, n, f ? i : !1), s = a;
    }
  }
}
function Xs(o) {
  gh(o, !0);
}
function gh(o, n) {
  if ((o.f & Ot) !== 0) {
    o.f ^= Ot, (o.f & je) === 0 && (et(o, mt), sr(o));
    for (var i = o.first; i !== null; ) {
      var s = i.next, a = (i.f & ir) !== 0 || (i.f & Sn) !== 0;
      gh(i, a ? n : !1), i = s;
    }
    if (o.transitions !== null)
      for (const f of o.transitions)
        (f.is_global || n) && f.in();
  }
}
function vh(o, n) {
  for (var i = o.nodes_start, s = o.nodes_end; i !== null; ) {
    var a = i === s ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ an(i)
    );
    n.append(i), i = a;
  }
}
const _h = /* @__PURE__ */ new Set(), Ps = /* @__PURE__ */ new Set();
function cb(o) {
  if (!se) return;
  o.removeAttribute("onload"), o.removeAttribute("onerror");
  const n = o.__e;
  n !== void 0 && (o.__e = void 0, queueMicrotask(() => {
    o.isConnected && o.dispatchEvent(n);
  }));
}
function hb(o, n, i, s = {}) {
  function a(f) {
    if (s.capture || hi.call(n, f), !f.cancelBubble)
      return Gs(() => i?.call(this, f));
  }
  return o.startsWith("pointer") || o.startsWith("touch") || o === "wheel" ? fr(() => {
    n.addEventListener(o, a, s);
  }) : n.addEventListener(o, a, s), a;
}
function Wr(o, n, i, s, a) {
  var f = { capture: s, passive: a }, d = hb(o, n, i, f);
  (n === document.body || // @ts-ignore
  n === window || // @ts-ignore
  n === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  n instanceof HTMLMediaElement) && uh(() => {
    n.removeEventListener(o, d, f);
  });
}
function An(o) {
  for (var n = 0; n < o.length; n++)
    _h.add(o[n]);
  for (var i of Ps)
    i(o);
}
let kf = null;
function hi(o) {
  var n = this, i = (
    /** @type {Node} */
    n.ownerDocument
  ), s = o.type, a = o.composedPath?.() || [], f = (
    /** @type {null | Element} */
    a[0] || o.target
  );
  kf = o;
  var d = 0, _ = kf === o && o.__root;
  if (_) {
    var m = a.indexOf(_);
    if (m !== -1 && (n === document || n === /** @type {any} */
    window)) {
      o.__root = n;
      return;
    }
    var p = a.indexOf(n);
    if (p === -1)
      return;
    m <= p && (d = m);
  }
  if (f = /** @type {Element} */
  a[d] || o.target, f !== n) {
    Rc(o, "currentTarget", {
      configurable: !0,
      get() {
        return f || i;
      }
    });
    var b = ue, C = ae;
    vt(null), un(null);
    try {
      for (var S, O = []; f !== null; ) {
        var L = f.assignedSlot || f.parentNode || /** @type {any} */
        f.host || null;
        try {
          var W = f["__" + s];
          W != null && (!/** @type {any} */
          f.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          o.target === f) && W.call(f, o);
        } catch (M) {
          S ? O.push(M) : S = M;
        }
        if (o.cancelBubble || L === n || L === null)
          break;
        f = L;
      }
      if (S) {
        for (let M of O)
          queueMicrotask(() => {
            throw M;
          });
        throw S;
      }
    } finally {
      o.__root = n, delete o.currentTarget, vt(b), un(C);
    }
  }
}
function db(o) {
  var n = document.createElement("template");
  return n.innerHTML = o.replaceAll("<!>", "<!---->"), n.content;
}
function Lr(o, n) {
  var i = (
    /** @type {Effect} */
    ae
  );
  i.nodes_start === null && (i.nodes_start = o, i.nodes_end = n);
}
// @__NO_SIDE_EFFECTS__
function fe(o, n) {
  var i = (n & Dw) !== 0, s = (n & Hw) !== 0, a, f = !o.startsWith("<!>");
  return () => {
    if (se)
      return Lr(_e, null), _e;
    a === void 0 && (a = db(f ? o : "<!>" + o), i || (a = /** @type {Node} */
    /* @__PURE__ */ lr(a)));
    var d = (
      /** @type {TemplateNode} */
      s || kc ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (i) {
      var _ = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lr(d)
      ), m = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Lr(_, m);
    } else
      Lr(d, d);
    return d;
  };
}
function $n() {
  if (se)
    return Lr(_e, null), _e;
  var o = document.createDocumentFragment(), n = document.createComment(""), i = Gt();
  return o.append(n, i), Lr(n, i), o;
}
function ne(o, n) {
  if (se) {
    var i = (
      /** @type {Effect} */
      ae
    );
    ((i.f & Io) === 0 || i.nodes_end === null) && (i.nodes_end = _e), yi();
    return;
  }
  o !== null && o.before(
    /** @type {Node} */
    n
  );
}
const gb = ["touchstart", "touchmove"];
function vb(o) {
  return gb.includes(o);
}
function fn(o, n) {
  var i = n == null ? "" : typeof n == "object" ? n + "" : n;
  i !== (o.__t ??= o.nodeValue) && (o.__t = i, o.nodeValue = i + "");
}
function ph(o, n) {
  return mh(o, n);
}
function _b(o, n) {
  Ts(), n.intro = n.intro ?? !1;
  const i = n.target, s = se, a = _e;
  try {
    for (var f = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ lr(i)
    ); f && (f.nodeType !== Br || /** @type {Comment} */
    f.data !== Dc); )
      f = /** @type {TemplateNode} */
      /* @__PURE__ */ an(f);
    if (!f)
      throw Fr;
    xn(!0), _t(
      /** @type {Comment} */
      f
    );
    const d = mh(o, { ...n, anchor: f });
    return xn(!1), /**  @type {Exports} */
    d;
  } catch (d) {
    if (d instanceof Error && d.message.split(`
`).some((_) => _.startsWith("https://svelte.dev/e/")))
      throw d;
    return d !== Fr && console.warn("Failed to hydrate: ", d), n.recover === !1 && Ew(), Ts(), Uc(i), xn(!1), ph(o, n);
  } finally {
    xn(s), _t(a);
  }
}
const Ar = /* @__PURE__ */ new Map();
function mh(o, { target: n, anchor: i, props: s = {}, events: a, context: f, intro: d = !0 }) {
  Ts();
  var _ = /* @__PURE__ */ new Set(), m = (C) => {
    for (var S = 0; S < C.length; S++) {
      var O = C[S];
      if (!_.has(O)) {
        _.add(O);
        var L = vb(O);
        n.addEventListener(O, hi, { passive: L });
        var W = Ar.get(O);
        W === void 0 ? (document.addEventListener(O, hi, { passive: L }), Ar.set(O, 1)) : Ar.set(O, W + 1);
      }
    }
  };
  m(qs(_h)), Ps.add(m);
  var p = void 0, b = sb(() => {
    var C = i ?? n.appendChild(Gt());
    return Xw(
      /** @type {TemplateNode} */
      C,
      {
        pending: () => {
        }
      },
      (S) => {
        if (f) {
          De({});
          var O = (
            /** @type {ComponentContext} */
            Le
          );
          O.c = f;
        }
        if (a && (s.$$events = a), se && Lr(
          /** @type {TemplateNode} */
          S,
          null
        ), p = o(S, s) || {}, se && (ae.nodes_end = _e, _e === null || _e.nodeType !== Br || /** @type {Comment} */
        _e.data !== zs))
          throw Lo(), Fr;
        f && He();
      }
    ), () => {
      for (var S of _) {
        n.removeEventListener(S, hi);
        var O = (
          /** @type {number} */
          Ar.get(S)
        );
        --O === 0 ? (document.removeEventListener(S, hi), Ar.delete(S)) : Ar.set(S, O);
      }
      Ps.delete(m), C !== i && C.parentNode?.removeChild(C);
    };
  });
  return Ls.set(p, b), p;
}
let Ls = /* @__PURE__ */ new WeakMap();
function pb(o, n) {
  const i = Ls.get(o);
  return i ? (Ls.delete(o), i(n)) : Promise.resolve();
}
function mb(o) {
  return new wb(o);
}
class wb {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(n) {
    var i = /* @__PURE__ */ new Map(), s = (f, d) => {
      var _ = /* @__PURE__ */ $c(d, !1, !1);
      return i.set(f, _), _;
    };
    const a = new Proxy(
      { ...n.props || {}, $$events: {} },
      {
        get(f, d) {
          return g(i.get(d) ?? s(d, Reflect.get(f, d)));
        },
        has(f, d) {
          return d === xc ? !0 : (g(i.get(d) ?? s(d, Reflect.get(f, d))), Reflect.has(f, d));
        },
        set(f, d, _) {
          return I(i.get(d) ?? s(d, _), _), Reflect.set(f, d, _);
        }
      }
    );
    this.#t = (n.hydrate ? _b : ph)(n.component, {
      target: n.target,
      anchor: n.anchor,
      props: a,
      context: n.context,
      intro: n.intro ?? !1,
      recover: n.recover
    }), (!n?.props?.$$host || n.sync === !1) && Uw(), this.#e = a.$$events;
    for (const f of Object.keys(this.#t))
      f === "$set" || f === "$destroy" || f === "$on" || Rc(this, f, {
        get() {
          return this.#t[f];
        },
        /** @param {any} value */
        set(d) {
          this.#t[f] = d;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (f) => {
      Object.assign(a, f);
    }, this.#t.$destroy = () => {
      pb(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(n) {
    this.#t.$set(n);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(n, i) {
    this.#e[n] = this.#e[n] || [];
    const s = (...a) => i.call(this, ...a);
    return this.#e[n].push(s), () => {
      this.#e[n] = this.#e[n].filter(
        /** @param {any} fn */
        (a) => a !== s
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
const bb = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(bb);
class Zs {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Effect>} */
  #t = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Branch>} */
  #n = /* @__PURE__ */ new Map();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #r = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(n, i = !0) {
    this.anchor = n, this.#r = i;
  }
  #u = () => {
    var n = (
      /** @type {Batch} */
      ke
    );
    if (this.#e.has(n)) {
      var i = (
        /** @type {Key} */
        this.#e.get(n)
      ), s = this.#t.get(i);
      if (s)
        Xs(s);
      else {
        var a = this.#n.get(i);
        a && (this.#t.set(i, a.effect), this.#n.delete(i), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), s = a.effect);
      }
      for (const [f, d] of this.#e) {
        if (this.#e.delete(f), f === n)
          break;
        const _ = this.#n.get(d);
        _ && (pt(_.effect), this.#n.delete(d));
      }
      for (const [f, d] of this.#t) {
        if (f === i) continue;
        const _ = () => {
          if (Array.from(this.#e.values()).includes(f)) {
            var p = document.createDocumentFragment();
            vh(d, p), p.append(Gt()), this.#n.set(f, { effect: d, fragment: p });
          } else
            pt(d);
          this.#t.delete(f);
        };
        this.#r || !s ? Pr(d, _, !1) : _();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #i = (n) => {
    this.#e.delete(n);
    const i = Array.from(this.#e.values());
    for (const [s, a] of this.#n)
      i.includes(s) || (pt(a.effect), this.#n.delete(s));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(n, i) {
    var s = (
      /** @type {Batch} */
      ke
    ), a = Gc();
    if (i && !this.#t.has(n) && !this.#n.has(n))
      if (a) {
        var f = document.createDocumentFragment(), d = Gt();
        f.append(d), this.#n.set(n, {
          effect: zt(() => i(d)),
          fragment: f
        });
      } else
        this.#t.set(
          n,
          zt(() => i(this.anchor))
        );
    if (this.#e.set(s, n), a) {
      for (const [_, m] of this.#t)
        _ === n ? s.skipped_effects.delete(m) : s.skipped_effects.add(m);
      for (const [_, m] of this.#n)
        _ === n ? s.skipped_effects.delete(m.effect) : s.skipped_effects.add(m.effect);
      s.oncommit(this.#u), s.ondiscard(this.#i);
    } else
      se && (this.anchor = _e), this.#u();
  }
}
function Js(o, n, ...i) {
  var s = new Zs(o);
  Si(() => {
    const a = n() ?? null;
    s.ensure(a, a && ((f) => a(f, ...i)));
  }, ir);
}
function qr(o) {
  Le === null && Pc(), bi && Le.l !== null ? yb(Le).m.push(o) : Pe(() => {
    const n = Ci(o);
    if (typeof n == "function") return (
      /** @type {() => void} */
      n
    );
  });
}
function yb(o) {
  var n = (
    /** @type {ComponentContextLegacy} */
    o.l
  );
  return n.u ??= { a: [], b: [], m: [] };
}
function gt(o, n, i = !1) {
  se && yi();
  var s = new Zs(o), a = i ? ir : 0;
  function f(d, _) {
    if (se) {
      const p = Bc(o) === Po;
      if (d === p) {
        var m = So();
        _t(m), s.anchor = m, xn(!1), s.ensure(d, _), xn(!0);
        return;
      }
    }
    s.ensure(d, _);
  }
  Si(() => {
    var d = !1;
    n((_, m = !0) => {
      d = !0, f(m, _);
    }), d || f(!1, null);
  }, a);
}
function xb(o, n, i) {
  se && yi();
  var s = new Zs(o), a = !kr();
  Si(() => {
    var f = n();
    a && f !== null && typeof f == "object" && (f = /** @type {V} */
    {}), s.ensure(f, i);
  });
}
function Cb(o, n) {
  return n;
}
function Rb(o, n, i) {
  for (var s = [], a = n.length, f = 0; f < a; f++)
    Ys(n[f].e, s, !0);
  dh(s, () => {
    var d = s.length === 0 && i !== null;
    if (d) {
      var _ = (
        /** @type {Element} */
        i
      ), m = (
        /** @type {Element} */
        _.parentNode
      );
      Uc(m), m.append(_), o.items.clear(), rn(o, n[0].prev, n[a - 1].next);
    }
    for (var p = 0; p < a; p++) {
      var b = n[p];
      d || (o.items.delete(b.k), rn(o, b.prev, b.next)), pt(b.e, !d);
    }
    o.first === n[0] && (o.first = n[0].prev);
  });
}
function _i(o, n, i, s, a, f = null) {
  var d = o, _ = { items: /* @__PURE__ */ new Map(), first: null }, m = (n & Mc) !== 0, p = (n & Lc) !== 0, b = (n & Fc) !== 0;
  if (m) {
    var C = (
      /** @type {Element} */
      o
    );
    d = se ? _t(
      /** @type {Comment | Text} */
      /* @__PURE__ */ lr(C)
    ) : C.appendChild(Gt());
  }
  se && yi();
  var S = null, O = /* @__PURE__ */ Jc(() => {
    var H = i();
    return ks(H) ? H : H == null ? [] : qs(H);
  }), L, W = !0;
  function M() {
    Sb(D, L, _, d, n, s), S !== null && (L.length === 0 ? (S.fragment ? (d.before(S.fragment), S.fragment = null) : Xs(S.effect), D.first = S.effect) : Pr(S.effect, () => {
      S = null;
    }));
  }
  var D = Si(() => {
    L = /** @type {V[]} */
    g(O);
    var H = L.length;
    let G = !1;
    if (se) {
      var J = Bc(d) === Po;
      J !== (H === 0) && (d = So(), _t(d), xn(!1), G = !0);
    }
    for (var K = /* @__PURE__ */ new Set(), U = (
      /** @type {Batch} */
      ke
    ), q = null, de = Gc(), $ = 0; $ < H; $ += 1) {
      se && _e.nodeType === Br && /** @type {Comment} */
      _e.data === zs && (d = /** @type {Comment} */
      _e, G = !0, xn(!1));
      var Te = L[$], Ae = s(Te, $), be = W ? null : _.items.get(Ae);
      be ? (p && Hr(be.v, Te), b ? Hr(
        /** @type {Value<number>} */
        be.i,
        $
      ) : be.i = $, U.skipped_effects.delete(be.e)) : (be = Eb(
        W ? d : null,
        q,
        Te,
        Ae,
        $,
        a,
        n,
        i
      ), W && (be.o = !0, q === null ? _.first = be : q.next = be, q = be), _.items.set(Ae, be)), K.add(Ae);
    }
    if (H === 0 && f && !S)
      if (W)
        S = {
          fragment: null,
          effect: zt(() => f(d))
        };
      else {
        var le = document.createDocumentFragment(), Ce = Gt();
        le.append(Ce), S = {
          fragment: le,
          effect: zt(() => f(Ce))
        };
      }
    se && H > 0 && _t(So());
    for (const [ze, Se] of _.items)
      K.has(ze) || U.skipped_effects.add(Se.e);
    W || (de ? (U.oncommit(M), U.ondiscard(() => {
    })) : M()), G && xn(!0), g(O);
  });
  W = !1, se && (d = _e);
}
function Sb(o, n, i, s, a, f) {
  var d = (a & Fw) !== 0, _ = n.length, m = i.items, p = i.first, b, C = null, S, O = [], L = [], W, M, D, H;
  if (d)
    for (H = 0; H < _; H += 1)
      W = n[H], M = f(W, H), D = /** @type {EachItem} */
      m.get(M), D.a?.measure(), (S ??= /* @__PURE__ */ new Set()).add(D);
  for (H = 0; H < _; H += 1) {
    if (W = n[H], M = f(W, H), D = /** @type {EachItem} */
    m.get(M), i.first ??= D, !D.o) {
      D.o = !0;
      var G = C ? C.next : p;
      rn(i, C, D), rn(i, D, G), is(D, G, s), C = D, O = [], L = [], p = C.next;
      continue;
    }
    if ((D.e.f & Ot) !== 0 && (Xs(D.e), d && (D.a?.unfix(), (S ??= /* @__PURE__ */ new Set()).delete(D))), D !== p) {
      if (b !== void 0 && b.has(D)) {
        if (O.length < L.length) {
          var J = L[0], K;
          C = J.prev;
          var U = O[0], q = O[O.length - 1];
          for (K = 0; K < O.length; K += 1)
            is(O[K], J, s);
          for (K = 0; K < L.length; K += 1)
            b.delete(L[K]);
          rn(i, U.prev, q.next), rn(i, C, U), rn(i, q, J), p = J, C = q, H -= 1, O = [], L = [];
        } else
          b.delete(D), is(D, p, s), rn(i, D.prev, D.next), rn(i, D, C === null ? i.first : C.next), rn(i, C, D), C = D;
        continue;
      }
      for (O = [], L = []; p !== null && p.k !== M; )
        (p.e.f & Ot) === 0 && (b ??= /* @__PURE__ */ new Set()).add(p), L.push(p), p = p.next;
      if (p === null)
        continue;
      D = p;
    }
    O.push(D), C = D, p = D.next;
  }
  if (p !== null || b !== void 0) {
    for (var de = b === void 0 ? [] : qs(b); p !== null; )
      (p.e.f & Ot) === 0 && de.push(p), p = p.next;
    var $ = de.length;
    if ($ > 0) {
      var Te = (a & Mc) !== 0 && _ === 0 ? s : null;
      if (d) {
        for (H = 0; H < $; H += 1)
          de[H].a?.measure();
        for (H = 0; H < $; H += 1)
          de[H].a?.fix();
      }
      Rb(i, de, Te);
    }
  }
  d && fr(() => {
    if (S !== void 0)
      for (D of S)
        D.a?.apply();
  }), o.first = i.first && i.first.e, o.last = C && C.e, C && (C.e.next = null);
}
function Eb(o, n, i, s, a, f, d, _) {
  var m = (d & Lc) !== 0, p = (d & Mw) === 0, b = m ? p ? /* @__PURE__ */ $c(i, !1, !1) : ur(i) : i, C = (d & Fc) === 0 ? a : ur(a), S = {
    i: C,
    v: b,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    o: !1,
    prev: n,
    next: null
  };
  try {
    if (o === null) {
      var O = document.createDocumentFragment();
      O.append(o = Gt());
    }
    return S.e = zt(() => f(
      /** @type {Node} */
      o,
      b,
      C,
      _
    )), S.e.prev = n && n.e, n !== null && (n.next = S, n.e.next = S.e), S;
  } finally {
  }
}
function is(o, n, i) {
  for (var s = o.next ? (
    /** @type {TemplateNode} */
    o.next.e.nodes_start
  ) : i, a = n ? (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ) : i, f = (
    /** @type {TemplateNode} */
    o.e.nodes_start
  ); f !== null && f !== s; ) {
    var d = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ an(f)
    );
    a.before(f), f = d;
  }
}
function rn(o, n, i) {
  n === null ? o.first = i : (n.next = i, n.e.next = i && i.e), i !== null && (i.prev = n, i.e.prev = n && n.e);
}
function We(o, n) {
  Ri(() => {
    var i = o.getRootNode(), s = (
      /** @type {ShadowRoot} */
      i.host ? (
        /** @type {ShadowRoot} */
        i
      ) : (
        /** @type {Document} */
        i.head ?? /** @type {Document} */
        i.ownerDocument.head
      )
    );
    if (!s.querySelector("#" + n.hash)) {
      const a = document.createElement("style");
      a.id = n.hash, a.textContent = n.code, s.appendChild(a);
    }
  });
}
function Vs(o, n, i) {
  Ri(() => {
    var s = Ci(() => n(o, i?.()) || {});
    if (i && s?.update) {
      var a = !1, f = (
        /** @type {any} */
        {}
      );
      Ks(() => {
        var d = i();
        ib(d), a && Ic(f, d) && (f = d, s.update(d));
      }), a = !0;
    }
    if (s?.destroy)
      return () => (
        /** @type {Function} */
        s.destroy()
      );
  });
}
function Tb(o, n, i) {
  var s = o == null ? "" : "" + o;
  return n && (s = s ? s + " " + n : n), s === "" ? null : s;
}
function qf(o, n = !1) {
  var i = n ? " !important;" : ";", s = "";
  for (var a in o) {
    var f = o[a];
    f != null && f !== "" && (s += " " + a + ": " + f + i);
  }
  return s;
}
function Ab(o, n) {
  if (n) {
    var i = "", s, a;
    return Array.isArray(n) ? (s = n[0], a = n[1]) : s = n, s && (i += qf(s)), a && (i += qf(a, !0)), i = i.trim(), i === "" ? null : i;
  }
  return String(o);
}
function zn(o, n, i, s, a, f) {
  var d = o.__className;
  if (se || d !== i || d === void 0) {
    var _ = Tb(i, s);
    (!se || _ !== o.getAttribute("class")) && (_ == null ? o.removeAttribute("class") : o.className = _), o.__className = i;
  }
  return f;
}
function os(o, n = {}, i, s) {
  for (var a in i) {
    var f = i[a];
    n[a] !== f && (i[a] == null ? o.style.removeProperty(a) : o.style.setProperty(a, f, s));
  }
}
function wt(o, n, i, s) {
  var a = o.__style;
  if (se || a !== n) {
    var f = Ab(n, s);
    (!se || f !== o.getAttribute("style")) && (f == null ? o.removeAttribute("style") : o.style.cssText = f), o.__style = n;
  } else s && (Array.isArray(s) ? (os(o, i?.[0], s[0]), os(o, i?.[1], s[1], "important")) : os(o, i, s));
  return s;
}
const Ib = Symbol("is custom element"), Ob = Symbol("is html");
function Pb(o) {
  if (se) {
    var n = !1, i = () => {
      if (!n) {
        if (n = !0, o.hasAttribute("value")) {
          var s = o.value;
          wi(o, "value", null), o.value = s;
        }
        if (o.hasAttribute("checked")) {
          var a = o.checked;
          wi(o, "checked", null), o.checked = a;
        }
      }
    };
    o.__on_r = i, fr(i), eb();
  }
}
function Lb(o, n) {
  var i = wh(o);
  i.checked !== (i.checked = // treat null and undefined the same for the initial value
  n ?? void 0) && (o.checked = n);
}
function wi(o, n, i, s) {
  var a = wh(o);
  se && (a[n] = o.getAttribute(n), n === "src" || n === "srcset" || n === "href" && o.nodeName === "LINK") || a[n] !== (a[n] = i) && (n === "loading" && (o[pw] = i), i == null ? o.removeAttribute(n) : typeof i != "string" && Fb(o).includes(n) ? o[n] = i : o.setAttribute(n, i));
}
function wh(o) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    o.__attributes ??= {
      [Ib]: o.nodeName.includes("-"),
      [Ob]: o.namespaceURI === Ww
    }
  );
}
var zf = /* @__PURE__ */ new Map();
function Fb(o) {
  var n = o.getAttribute("is") || o.nodeName, i = zf.get(n);
  if (i) return i;
  zf.set(n, i = []);
  for (var s, a = o, f = Element.prototype; f !== a; ) {
    s = Sc(a);
    for (var d in s)
      s[d].set && i.push(d);
    a = Oo(a);
  }
  return i;
}
class Qs {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #t;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(n) {
    this.#n = n;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(n, i) {
    var s = this.#e.get(n) || /* @__PURE__ */ new Set();
    return s.add(i), this.#e.set(n, s), this.#r().observe(n, this.#n), () => {
      var a = this.#e.get(n);
      a.delete(i), a.size === 0 && (this.#e.delete(n), this.#t.unobserve(n));
    };
  }
  #r() {
    return this.#t ?? (this.#t = new ResizeObserver(
      /** @param {any} entries */
      (n) => {
        for (var i of n) {
          Qs.entries.set(i.target, i);
          for (var s of this.#e.get(i.target) || [])
            s(i);
        }
      }
    ));
  }
}
var Mb = /* @__PURE__ */ new Qs({
  box: "border-box"
});
function $t(o, n, i) {
  var s = Mb.observe(o, () => i(o[n]));
  Ri(() => (Ci(() => i(o[n])), s));
}
function Uf(o, n) {
  return o === n || o?.[tr] === n;
}
function ot(o = {}, n, i, s) {
  return Ri(() => {
    var a, f;
    return Ks(() => {
      a = f, f = [], Ci(() => {
        o !== i(...f) && (n(o, ...f), a && Uf(i(...a), o) && n(null, ...a));
      });
    }), () => {
      fr(() => {
        f && Uf(i(...f), o) && n(null, ...f);
      });
    };
  }), o;
}
let bo = !1;
function Db(o) {
  var n = bo;
  try {
    return bo = !1, [o(), bo];
  } finally {
    bo = n;
  }
}
function zr(o, n, i, s) {
  var a = (
    /** @type {V} */
    s
  ), f = !0, d = () => (f && (f = !1, a = /** @type {V} */
  s), a), _;
  {
    var m = tr in o || xc in o;
    _ = Or(o, n)?.set ?? (m && n in o ? (M) => o[n] = M : void 0);
  }
  var p, b = !1;
  [p, b] = Db(() => (
    /** @type {V} */
    o[n]
  ));
  var C;
  if (C = () => {
    var M = (
      /** @type {V} */
      o[n]
    );
    return M === void 0 ? d() : (f = !0, M);
  }, _) {
    var S = o.$$legacy;
    return (
      /** @type {() => V} */
      (function(M, D) {
        return arguments.length > 0 ? ((!D || S || b) && _(D ? C() : M), M) : C();
      })
    );
  }
  var O = !1, L = /* @__PURE__ */ Mo(() => (O = !1, C()));
  g(L);
  var W = (
    /** @type {Effect} */
    ae
  );
  return (
    /** @type {() => V} */
    (function(M, D) {
      if (arguments.length > 0) {
        const H = D ? g(L) : $e(M);
        return I(L, H), O = !0, a !== void 0 && (a = H), M;
      }
      return cr && O || (W.f & Bn) !== 0 ? L.v : g(L);
    })
  );
}
var Nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function js(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var di = { exports: {} };
var Hb = di.exports, Gf;
function Wb() {
  return Gf || (Gf = 1, (function(o, n) {
    (function() {
      var i, s = "4.17.21", a = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", p = 500, b = "__lodash_placeholder__", C = 1, S = 2, O = 4, L = 1, W = 2, M = 1, D = 2, H = 4, G = 8, J = 16, K = 32, U = 64, q = 128, de = 256, $ = 512, Te = 30, Ae = "...", be = 800, le = 16, Ce = 1, ze = 2, Se = 3, Fe = 1 / 0, lt = 9007199254740991, bt = 17976931348623157e292, Pt = NaN, ye = 4294967295, Kt = ye - 1, Un = ye >>> 1, Ho = [
        ["ary", q],
        ["bind", M],
        ["bindKey", D],
        ["curry", G],
        ["curryRight", J],
        ["flip", $],
        ["partial", K],
        ["partialRight", U],
        ["rearg", de]
      ], hr = "[object Arguments]", Ei = "[object Array]", Rh = "[object AsyncFunction]", Ur = "[object Boolean]", Gr = "[object Date]", Sh = "[object DOMException]", Ti = "[object Error]", Ai = "[object Function]", eu = "[object GeneratorFunction]", Yt = "[object Map]", Kr = "[object Number]", Eh = "[object Null]", cn = "[object Object]", tu = "[object Promise]", Th = "[object Proxy]", Yr = "[object RegExp]", Xt = "[object Set]", Xr = "[object String]", Ii = "[object Symbol]", Ah = "[object Undefined]", Zr = "[object WeakMap]", Ih = "[object WeakSet]", Jr = "[object ArrayBuffer]", dr = "[object DataView]", Wo = "[object Float32Array]", No = "[object Float64Array]", Bo = "[object Int8Array]", ko = "[object Int16Array]", qo = "[object Int32Array]", zo = "[object Uint8Array]", Uo = "[object Uint8ClampedArray]", Go = "[object Uint16Array]", Ko = "[object Uint32Array]", Oh = /\b__p \+= '';/g, Ph = /\b(__p \+=) '' \+/g, Lh = /(__e\(.*?\)|\b__t\)) \+\n'';/g, nu = /&(?:amp|lt|gt|quot|#39);/g, ru = /[&<>"']/g, Fh = RegExp(nu.source), Mh = RegExp(ru.source), Dh = /<%-([\s\S]+?)%>/g, Hh = /<%([\s\S]+?)%>/g, iu = /<%=([\s\S]+?)%>/g, Wh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nh = /^\w*$/, Bh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yo = /[\\^$.*+?()[\]{}|]/g, kh = RegExp(Yo.source), Xo = /^\s+/, qh = /\s/, zh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Uh = /\{\n\/\* \[wrapped with (.+)\] \*/, Gh = /,? & /, Kh = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Yh = /[()=,{}\[\]\/\s]/, Xh = /\\(\\)?/g, Zh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ou = /\w*$/, Jh = /^[-+]0x[0-9a-f]+$/i, Vh = /^0b[01]+$/i, Qh = /^\[object .+?Constructor\]$/, jh = /^0o[0-7]+$/i, $h = /^(?:0|[1-9]\d*)$/, ed = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Oi = /($^)/, td = /['\n\r\u2028\u2029\\]/g, Pi = "\\ud800-\\udfff", nd = "\\u0300-\\u036f", rd = "\\ufe20-\\ufe2f", id = "\\u20d0-\\u20ff", lu = nd + rd + id, su = "\\u2700-\\u27bf", uu = "a-z\\xdf-\\xf6\\xf8-\\xff", od = "\\xac\\xb1\\xd7\\xf7", ld = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", sd = "\\u2000-\\u206f", ud = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", au = "A-Z\\xc0-\\xd6\\xd8-\\xde", fu = "\\ufe0e\\ufe0f", cu = od + ld + sd + ud, Zo = "['’]", ad = "[" + Pi + "]", hu = "[" + cu + "]", Li = "[" + lu + "]", du = "\\d+", fd = "[" + su + "]", gu = "[" + uu + "]", vu = "[^" + Pi + cu + du + su + uu + au + "]", Jo = "\\ud83c[\\udffb-\\udfff]", cd = "(?:" + Li + "|" + Jo + ")", _u = "[^" + Pi + "]", Vo = "(?:\\ud83c[\\udde6-\\uddff]){2}", Qo = "[\\ud800-\\udbff][\\udc00-\\udfff]", gr = "[" + au + "]", pu = "\\u200d", mu = "(?:" + gu + "|" + vu + ")", hd = "(?:" + gr + "|" + vu + ")", wu = "(?:" + Zo + "(?:d|ll|m|re|s|t|ve))?", bu = "(?:" + Zo + "(?:D|LL|M|RE|S|T|VE))?", yu = cd + "?", xu = "[" + fu + "]?", dd = "(?:" + pu + "(?:" + [_u, Vo, Qo].join("|") + ")" + xu + yu + ")*", gd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", vd = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Cu = xu + yu + dd, _d = "(?:" + [fd, Vo, Qo].join("|") + ")" + Cu, pd = "(?:" + [_u + Li + "?", Li, Vo, Qo, ad].join("|") + ")", md = RegExp(Zo, "g"), wd = RegExp(Li, "g"), jo = RegExp(Jo + "(?=" + Jo + ")|" + pd + Cu, "g"), bd = RegExp([
        gr + "?" + gu + "+" + wu + "(?=" + [hu, gr, "$"].join("|") + ")",
        hd + "+" + bu + "(?=" + [hu, gr + mu, "$"].join("|") + ")",
        gr + "?" + mu + "+" + wu,
        gr + "+" + bu,
        vd,
        gd,
        du,
        _d
      ].join("|"), "g"), yd = RegExp("[" + pu + Pi + lu + fu + "]"), xd = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Cd = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], Rd = -1, Ee = {};
      Ee[Wo] = Ee[No] = Ee[Bo] = Ee[ko] = Ee[qo] = Ee[zo] = Ee[Uo] = Ee[Go] = Ee[Ko] = !0, Ee[hr] = Ee[Ei] = Ee[Jr] = Ee[Ur] = Ee[dr] = Ee[Gr] = Ee[Ti] = Ee[Ai] = Ee[Yt] = Ee[Kr] = Ee[cn] = Ee[Yr] = Ee[Xt] = Ee[Xr] = Ee[Zr] = !1;
      var Re = {};
      Re[hr] = Re[Ei] = Re[Jr] = Re[dr] = Re[Ur] = Re[Gr] = Re[Wo] = Re[No] = Re[Bo] = Re[ko] = Re[qo] = Re[Yt] = Re[Kr] = Re[cn] = Re[Yr] = Re[Xt] = Re[Xr] = Re[Ii] = Re[zo] = Re[Uo] = Re[Go] = Re[Ko] = !0, Re[Ti] = Re[Ai] = Re[Zr] = !1;
      var Sd = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, Ed = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Td = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Ad = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Id = parseFloat, Od = parseInt, Ru = typeof Nn == "object" && Nn && Nn.Object === Object && Nn, Pd = typeof self == "object" && self && self.Object === Object && self, Ye = Ru || Pd || Function("return this")(), $o = n && !n.nodeType && n, Gn = $o && !0 && o && !o.nodeType && o, Su = Gn && Gn.exports === $o, el = Su && Ru.process, Lt = (function() {
        try {
          var y = Gn && Gn.require && Gn.require("util").types;
          return y || el && el.binding && el.binding("util");
        } catch {
        }
      })(), Eu = Lt && Lt.isArrayBuffer, Tu = Lt && Lt.isDate, Au = Lt && Lt.isMap, Iu = Lt && Lt.isRegExp, Ou = Lt && Lt.isSet, Pu = Lt && Lt.isTypedArray;
      function yt(y, E, R) {
        switch (R.length) {
          case 0:
            return y.call(E);
          case 1:
            return y.call(E, R[0]);
          case 2:
            return y.call(E, R[0], R[1]);
          case 3:
            return y.call(E, R[0], R[1], R[2]);
        }
        return y.apply(E, R);
      }
      function Ld(y, E, R, B) {
        for (var V = -1, ce = y == null ? 0 : y.length; ++V < ce; ) {
          var Ue = y[V];
          E(B, Ue, R(Ue), y);
        }
        return B;
      }
      function Ft(y, E) {
        for (var R = -1, B = y == null ? 0 : y.length; ++R < B && E(y[R], R, y) !== !1; )
          ;
        return y;
      }
      function Fd(y, E) {
        for (var R = y == null ? 0 : y.length; R-- && E(y[R], R, y) !== !1; )
          ;
        return y;
      }
      function Lu(y, E) {
        for (var R = -1, B = y == null ? 0 : y.length; ++R < B; )
          if (!E(y[R], R, y))
            return !1;
        return !0;
      }
      function In(y, E) {
        for (var R = -1, B = y == null ? 0 : y.length, V = 0, ce = []; ++R < B; ) {
          var Ue = y[R];
          E(Ue, R, y) && (ce[V++] = Ue);
        }
        return ce;
      }
      function Fi(y, E) {
        var R = y == null ? 0 : y.length;
        return !!R && vr(y, E, 0) > -1;
      }
      function tl(y, E, R) {
        for (var B = -1, V = y == null ? 0 : y.length; ++B < V; )
          if (R(E, y[B]))
            return !0;
        return !1;
      }
      function Ie(y, E) {
        for (var R = -1, B = y == null ? 0 : y.length, V = Array(B); ++R < B; )
          V[R] = E(y[R], R, y);
        return V;
      }
      function On(y, E) {
        for (var R = -1, B = E.length, V = y.length; ++R < B; )
          y[V + R] = E[R];
        return y;
      }
      function nl(y, E, R, B) {
        var V = -1, ce = y == null ? 0 : y.length;
        for (B && ce && (R = y[++V]); ++V < ce; )
          R = E(R, y[V], V, y);
        return R;
      }
      function Md(y, E, R, B) {
        var V = y == null ? 0 : y.length;
        for (B && V && (R = y[--V]); V--; )
          R = E(R, y[V], V, y);
        return R;
      }
      function rl(y, E) {
        for (var R = -1, B = y == null ? 0 : y.length; ++R < B; )
          if (E(y[R], R, y))
            return !0;
        return !1;
      }
      var Dd = il("length");
      function Hd(y) {
        return y.split("");
      }
      function Wd(y) {
        return y.match(Kh) || [];
      }
      function Fu(y, E, R) {
        var B;
        return R(y, function(V, ce, Ue) {
          if (E(V, ce, Ue))
            return B = ce, !1;
        }), B;
      }
      function Mi(y, E, R, B) {
        for (var V = y.length, ce = R + (B ? 1 : -1); B ? ce-- : ++ce < V; )
          if (E(y[ce], ce, y))
            return ce;
        return -1;
      }
      function vr(y, E, R) {
        return E === E ? Jd(y, E, R) : Mi(y, Mu, R);
      }
      function Nd(y, E, R, B) {
        for (var V = R - 1, ce = y.length; ++V < ce; )
          if (B(y[V], E))
            return V;
        return -1;
      }
      function Mu(y) {
        return y !== y;
      }
      function Du(y, E) {
        var R = y == null ? 0 : y.length;
        return R ? ll(y, E) / R : Pt;
      }
      function il(y) {
        return function(E) {
          return E == null ? i : E[y];
        };
      }
      function ol(y) {
        return function(E) {
          return y == null ? i : y[E];
        };
      }
      function Hu(y, E, R, B, V) {
        return V(y, function(ce, Ue, xe) {
          R = B ? (B = !1, ce) : E(R, ce, Ue, xe);
        }), R;
      }
      function Bd(y, E) {
        var R = y.length;
        for (y.sort(E); R--; )
          y[R] = y[R].value;
        return y;
      }
      function ll(y, E) {
        for (var R, B = -1, V = y.length; ++B < V; ) {
          var ce = E(y[B]);
          ce !== i && (R = R === i ? ce : R + ce);
        }
        return R;
      }
      function sl(y, E) {
        for (var R = -1, B = Array(y); ++R < y; )
          B[R] = E(R);
        return B;
      }
      function kd(y, E) {
        return Ie(E, function(R) {
          return [R, y[R]];
        });
      }
      function Wu(y) {
        return y && y.slice(0, qu(y) + 1).replace(Xo, "");
      }
      function xt(y) {
        return function(E) {
          return y(E);
        };
      }
      function ul(y, E) {
        return Ie(E, function(R) {
          return y[R];
        });
      }
      function Vr(y, E) {
        return y.has(E);
      }
      function Nu(y, E) {
        for (var R = -1, B = y.length; ++R < B && vr(E, y[R], 0) > -1; )
          ;
        return R;
      }
      function Bu(y, E) {
        for (var R = y.length; R-- && vr(E, y[R], 0) > -1; )
          ;
        return R;
      }
      function qd(y, E) {
        for (var R = y.length, B = 0; R--; )
          y[R] === E && ++B;
        return B;
      }
      var zd = ol(Sd), Ud = ol(Ed);
      function Gd(y) {
        return "\\" + Ad[y];
      }
      function Kd(y, E) {
        return y == null ? i : y[E];
      }
      function _r(y) {
        return yd.test(y);
      }
      function Yd(y) {
        return xd.test(y);
      }
      function Xd(y) {
        for (var E, R = []; !(E = y.next()).done; )
          R.push(E.value);
        return R;
      }
      function al(y) {
        var E = -1, R = Array(y.size);
        return y.forEach(function(B, V) {
          R[++E] = [V, B];
        }), R;
      }
      function ku(y, E) {
        return function(R) {
          return y(E(R));
        };
      }
      function Pn(y, E) {
        for (var R = -1, B = y.length, V = 0, ce = []; ++R < B; ) {
          var Ue = y[R];
          (Ue === E || Ue === b) && (y[R] = b, ce[V++] = R);
        }
        return ce;
      }
      function Di(y) {
        var E = -1, R = Array(y.size);
        return y.forEach(function(B) {
          R[++E] = B;
        }), R;
      }
      function Zd(y) {
        var E = -1, R = Array(y.size);
        return y.forEach(function(B) {
          R[++E] = [B, B];
        }), R;
      }
      function Jd(y, E, R) {
        for (var B = R - 1, V = y.length; ++B < V; )
          if (y[B] === E)
            return B;
        return -1;
      }
      function Vd(y, E, R) {
        for (var B = R + 1; B--; )
          if (y[B] === E)
            return B;
        return B;
      }
      function pr(y) {
        return _r(y) ? jd(y) : Dd(y);
      }
      function Zt(y) {
        return _r(y) ? $d(y) : Hd(y);
      }
      function qu(y) {
        for (var E = y.length; E-- && qh.test(y.charAt(E)); )
          ;
        return E;
      }
      var Qd = ol(Td);
      function jd(y) {
        for (var E = jo.lastIndex = 0; jo.test(y); )
          ++E;
        return E;
      }
      function $d(y) {
        return y.match(jo) || [];
      }
      function eg(y) {
        return y.match(bd) || [];
      }
      var tg = (function y(E) {
        E = E == null ? Ye : mr.defaults(Ye.Object(), E, mr.pick(Ye, Cd));
        var R = E.Array, B = E.Date, V = E.Error, ce = E.Function, Ue = E.Math, xe = E.Object, fl = E.RegExp, ng = E.String, Mt = E.TypeError, Hi = R.prototype, rg = ce.prototype, wr = xe.prototype, Wi = E["__core-js_shared__"], Ni = rg.toString, pe = wr.hasOwnProperty, ig = 0, zu = (function() {
          var e = /[^.]+$/.exec(Wi && Wi.keys && Wi.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Bi = wr.toString, og = Ni.call(xe), lg = Ye._, sg = fl(
          "^" + Ni.call(pe).replace(Yo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), ki = Su ? E.Buffer : i, Ln = E.Symbol, qi = E.Uint8Array, Uu = ki ? ki.allocUnsafe : i, zi = ku(xe.getPrototypeOf, xe), Gu = xe.create, Ku = wr.propertyIsEnumerable, Ui = Hi.splice, Yu = Ln ? Ln.isConcatSpreadable : i, Qr = Ln ? Ln.iterator : i, Kn = Ln ? Ln.toStringTag : i, Gi = (function() {
          try {
            var e = Vn(xe, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), ug = E.clearTimeout !== Ye.clearTimeout && E.clearTimeout, ag = B && B.now !== Ye.Date.now && B.now, fg = E.setTimeout !== Ye.setTimeout && E.setTimeout, Ki = Ue.ceil, Yi = Ue.floor, cl = xe.getOwnPropertySymbols, cg = ki ? ki.isBuffer : i, Xu = E.isFinite, hg = Hi.join, dg = ku(xe.keys, xe), Ge = Ue.max, Je = Ue.min, gg = B.now, vg = E.parseInt, Zu = Ue.random, _g = Hi.reverse, hl = Vn(E, "DataView"), jr = Vn(E, "Map"), dl = Vn(E, "Promise"), br = Vn(E, "Set"), $r = Vn(E, "WeakMap"), ei = Vn(xe, "create"), Xi = $r && new $r(), yr = {}, pg = Qn(hl), mg = Qn(jr), wg = Qn(dl), bg = Qn(br), yg = Qn($r), Zi = Ln ? Ln.prototype : i, ti = Zi ? Zi.valueOf : i, Ju = Zi ? Zi.toString : i;
        function c(e) {
          if (Me(e) && !Q(e) && !(e instanceof ie)) {
            if (e instanceof Dt)
              return e;
            if (pe.call(e, "__wrapped__"))
              return Va(e);
          }
          return new Dt(e);
        }
        var xr = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!Oe(t))
              return {};
            if (Gu)
              return Gu(t);
            e.prototype = t;
            var r = new e();
            return e.prototype = i, r;
          };
        })();
        function Ji() {
        }
        function Dt(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
        }
        c.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Dh,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Hh,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: iu,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: c
          }
        }, c.prototype = Ji.prototype, c.prototype.constructor = c, Dt.prototype = xr(Ji.prototype), Dt.prototype.constructor = Dt;
        function ie(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ye, this.__views__ = [];
        }
        function xg() {
          var e = new ie(this.__wrapped__);
          return e.__actions__ = st(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = st(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = st(this.__views__), e;
        }
        function Cg() {
          if (this.__filtered__) {
            var e = new ie(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function Rg() {
          var e = this.__wrapped__.value(), t = this.__dir__, r = Q(e), l = t < 0, u = r ? e.length : 0, h = Hv(0, u, this.__views__), v = h.start, w = h.end, x = w - v, T = l ? w : v - 1, A = this.__iteratees__, P = A.length, N = 0, z = Je(x, this.__takeCount__);
          if (!r || !l && u == x && z == x)
            return wa(e, this.__actions__);
          var X = [];
          e:
            for (; x-- && N < z; ) {
              T += t;
              for (var ee = -1, Z = e[T]; ++ee < P; ) {
                var re = A[ee], oe = re.iteratee, St = re.type, rt = oe(Z);
                if (St == ze)
                  Z = rt;
                else if (!rt) {
                  if (St == Ce)
                    continue e;
                  break e;
                }
              }
              X[N++] = Z;
            }
          return X;
        }
        ie.prototype = xr(Ji.prototype), ie.prototype.constructor = ie;
        function Yn(e) {
          var t = -1, r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
            var l = e[t];
            this.set(l[0], l[1]);
          }
        }
        function Sg() {
          this.__data__ = ei ? ei(null) : {}, this.size = 0;
        }
        function Eg(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function Tg(e) {
          var t = this.__data__;
          if (ei) {
            var r = t[e];
            return r === m ? i : r;
          }
          return pe.call(t, e) ? t[e] : i;
        }
        function Ag(e) {
          var t = this.__data__;
          return ei ? t[e] !== i : pe.call(t, e);
        }
        function Ig(e, t) {
          var r = this.__data__;
          return this.size += this.has(e) ? 0 : 1, r[e] = ei && t === i ? m : t, this;
        }
        Yn.prototype.clear = Sg, Yn.prototype.delete = Eg, Yn.prototype.get = Tg, Yn.prototype.has = Ag, Yn.prototype.set = Ig;
        function hn(e) {
          var t = -1, r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
            var l = e[t];
            this.set(l[0], l[1]);
          }
        }
        function Og() {
          this.__data__ = [], this.size = 0;
        }
        function Pg(e) {
          var t = this.__data__, r = Vi(t, e);
          if (r < 0)
            return !1;
          var l = t.length - 1;
          return r == l ? t.pop() : Ui.call(t, r, 1), --this.size, !0;
        }
        function Lg(e) {
          var t = this.__data__, r = Vi(t, e);
          return r < 0 ? i : t[r][1];
        }
        function Fg(e) {
          return Vi(this.__data__, e) > -1;
        }
        function Mg(e, t) {
          var r = this.__data__, l = Vi(r, e);
          return l < 0 ? (++this.size, r.push([e, t])) : r[l][1] = t, this;
        }
        hn.prototype.clear = Og, hn.prototype.delete = Pg, hn.prototype.get = Lg, hn.prototype.has = Fg, hn.prototype.set = Mg;
        function dn(e) {
          var t = -1, r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
            var l = e[t];
            this.set(l[0], l[1]);
          }
        }
        function Dg() {
          this.size = 0, this.__data__ = {
            hash: new Yn(),
            map: new (jr || hn)(),
            string: new Yn()
          };
        }
        function Hg(e) {
          var t = uo(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function Wg(e) {
          return uo(this, e).get(e);
        }
        function Ng(e) {
          return uo(this, e).has(e);
        }
        function Bg(e, t) {
          var r = uo(this, e), l = r.size;
          return r.set(e, t), this.size += r.size == l ? 0 : 1, this;
        }
        dn.prototype.clear = Dg, dn.prototype.delete = Hg, dn.prototype.get = Wg, dn.prototype.has = Ng, dn.prototype.set = Bg;
        function Xn(e) {
          var t = -1, r = e == null ? 0 : e.length;
          for (this.__data__ = new dn(); ++t < r; )
            this.add(e[t]);
        }
        function kg(e) {
          return this.__data__.set(e, m), this;
        }
        function qg(e) {
          return this.__data__.has(e);
        }
        Xn.prototype.add = Xn.prototype.push = kg, Xn.prototype.has = qg;
        function Jt(e) {
          var t = this.__data__ = new hn(e);
          this.size = t.size;
        }
        function zg() {
          this.__data__ = new hn(), this.size = 0;
        }
        function Ug(e) {
          var t = this.__data__, r = t.delete(e);
          return this.size = t.size, r;
        }
        function Gg(e) {
          return this.__data__.get(e);
        }
        function Kg(e) {
          return this.__data__.has(e);
        }
        function Yg(e, t) {
          var r = this.__data__;
          if (r instanceof hn) {
            var l = r.__data__;
            if (!jr || l.length < a - 1)
              return l.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new dn(l);
          }
          return r.set(e, t), this.size = r.size, this;
        }
        Jt.prototype.clear = zg, Jt.prototype.delete = Ug, Jt.prototype.get = Gg, Jt.prototype.has = Kg, Jt.prototype.set = Yg;
        function Vu(e, t) {
          var r = Q(e), l = !r && jn(e), u = !r && !l && Wn(e), h = !r && !l && !u && Er(e), v = r || l || u || h, w = v ? sl(e.length, ng) : [], x = w.length;
          for (var T in e)
            (t || pe.call(e, T)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
            (T == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            u && (T == "offset" || T == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            h && (T == "buffer" || T == "byteLength" || T == "byteOffset") || // Skip index properties.
            pn(T, x))) && w.push(T);
          return w;
        }
        function Qu(e) {
          var t = e.length;
          return t ? e[Rl(0, t - 1)] : i;
        }
        function Xg(e, t) {
          return ao(st(e), Zn(t, 0, e.length));
        }
        function Zg(e) {
          return ao(st(e));
        }
        function gl(e, t, r) {
          (r !== i && !Vt(e[t], r) || r === i && !(t in e)) && gn(e, t, r);
        }
        function ni(e, t, r) {
          var l = e[t];
          (!(pe.call(e, t) && Vt(l, r)) || r === i && !(t in e)) && gn(e, t, r);
        }
        function Vi(e, t) {
          for (var r = e.length; r--; )
            if (Vt(e[r][0], t))
              return r;
          return -1;
        }
        function Jg(e, t, r, l) {
          return Fn(e, function(u, h, v) {
            t(l, u, r(u), v);
          }), l;
        }
        function ju(e, t) {
          return e && tn(t, Ke(t), e);
        }
        function Vg(e, t) {
          return e && tn(t, at(t), e);
        }
        function gn(e, t, r) {
          t == "__proto__" && Gi ? Gi(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
          }) : e[t] = r;
        }
        function vl(e, t) {
          for (var r = -1, l = t.length, u = R(l), h = e == null; ++r < l; )
            u[r] = h ? i : Jl(e, t[r]);
          return u;
        }
        function Zn(e, t, r) {
          return e === e && (r !== i && (e = e <= r ? e : r), t !== i && (e = e >= t ? e : t)), e;
        }
        function Ht(e, t, r, l, u, h) {
          var v, w = t & C, x = t & S, T = t & O;
          if (r && (v = u ? r(e, l, u, h) : r(e)), v !== i)
            return v;
          if (!Oe(e))
            return e;
          var A = Q(e);
          if (A) {
            if (v = Nv(e), !w)
              return st(e, v);
          } else {
            var P = Ve(e), N = P == Ai || P == eu;
            if (Wn(e))
              return xa(e, w);
            if (P == cn || P == hr || N && !u) {
              if (v = x || N ? {} : qa(e), !w)
                return x ? Tv(e, Vg(v, e)) : Ev(e, ju(v, e));
            } else {
              if (!Re[P])
                return u ? e : {};
              v = Bv(e, P, w);
            }
          }
          h || (h = new Jt());
          var z = h.get(e);
          if (z)
            return z;
          h.set(e, v), pf(e) ? e.forEach(function(Z) {
            v.add(Ht(Z, t, r, Z, e, h));
          }) : vf(e) && e.forEach(function(Z, re) {
            v.set(re, Ht(Z, t, r, re, e, h));
          });
          var X = T ? x ? Dl : Ml : x ? at : Ke, ee = A ? i : X(e);
          return Ft(ee || e, function(Z, re) {
            ee && (re = Z, Z = e[re]), ni(v, re, Ht(Z, t, r, re, e, h));
          }), v;
        }
        function Qg(e) {
          var t = Ke(e);
          return function(r) {
            return $u(r, e, t);
          };
        }
        function $u(e, t, r) {
          var l = r.length;
          if (e == null)
            return !l;
          for (e = xe(e); l--; ) {
            var u = r[l], h = t[u], v = e[u];
            if (v === i && !(u in e) || !h(v))
              return !1;
          }
          return !0;
        }
        function ea(e, t, r) {
          if (typeof e != "function")
            throw new Mt(d);
          return ai(function() {
            e.apply(i, r);
          }, t);
        }
        function ri(e, t, r, l) {
          var u = -1, h = Fi, v = !0, w = e.length, x = [], T = t.length;
          if (!w)
            return x;
          r && (t = Ie(t, xt(r))), l ? (h = tl, v = !1) : t.length >= a && (h = Vr, v = !1, t = new Xn(t));
          e:
            for (; ++u < w; ) {
              var A = e[u], P = r == null ? A : r(A);
              if (A = l || A !== 0 ? A : 0, v && P === P) {
                for (var N = T; N--; )
                  if (t[N] === P)
                    continue e;
                x.push(A);
              } else h(t, P, l) || x.push(A);
            }
          return x;
        }
        var Fn = Ta(en), ta = Ta(pl, !0);
        function jg(e, t) {
          var r = !0;
          return Fn(e, function(l, u, h) {
            return r = !!t(l, u, h), r;
          }), r;
        }
        function Qi(e, t, r) {
          for (var l = -1, u = e.length; ++l < u; ) {
            var h = e[l], v = t(h);
            if (v != null && (w === i ? v === v && !Rt(v) : r(v, w)))
              var w = v, x = h;
          }
          return x;
        }
        function $g(e, t, r, l) {
          var u = e.length;
          for (r = j(r), r < 0 && (r = -r > u ? 0 : u + r), l = l === i || l > u ? u : j(l), l < 0 && (l += u), l = r > l ? 0 : wf(l); r < l; )
            e[r++] = t;
          return e;
        }
        function na(e, t) {
          var r = [];
          return Fn(e, function(l, u, h) {
            t(l, u, h) && r.push(l);
          }), r;
        }
        function Xe(e, t, r, l, u) {
          var h = -1, v = e.length;
          for (r || (r = qv), u || (u = []); ++h < v; ) {
            var w = e[h];
            t > 0 && r(w) ? t > 1 ? Xe(w, t - 1, r, l, u) : On(u, w) : l || (u[u.length] = w);
          }
          return u;
        }
        var _l = Aa(), ra = Aa(!0);
        function en(e, t) {
          return e && _l(e, t, Ke);
        }
        function pl(e, t) {
          return e && ra(e, t, Ke);
        }
        function ji(e, t) {
          return In(t, function(r) {
            return mn(e[r]);
          });
        }
        function Jn(e, t) {
          t = Dn(t, e);
          for (var r = 0, l = t.length; e != null && r < l; )
            e = e[nn(t[r++])];
          return r && r == l ? e : i;
        }
        function ia(e, t, r) {
          var l = t(e);
          return Q(e) ? l : On(l, r(e));
        }
        function tt(e) {
          return e == null ? e === i ? Ah : Eh : Kn && Kn in xe(e) ? Dv(e) : Zv(e);
        }
        function ml(e, t) {
          return e > t;
        }
        function ev(e, t) {
          return e != null && pe.call(e, t);
        }
        function tv(e, t) {
          return e != null && t in xe(e);
        }
        function nv(e, t, r) {
          return e >= Je(t, r) && e < Ge(t, r);
        }
        function wl(e, t, r) {
          for (var l = r ? tl : Fi, u = e[0].length, h = e.length, v = h, w = R(h), x = 1 / 0, T = []; v--; ) {
            var A = e[v];
            v && t && (A = Ie(A, xt(t))), x = Je(A.length, x), w[v] = !r && (t || u >= 120 && A.length >= 120) ? new Xn(v && A) : i;
          }
          A = e[0];
          var P = -1, N = w[0];
          e:
            for (; ++P < u && T.length < x; ) {
              var z = A[P], X = t ? t(z) : z;
              if (z = r || z !== 0 ? z : 0, !(N ? Vr(N, X) : l(T, X, r))) {
                for (v = h; --v; ) {
                  var ee = w[v];
                  if (!(ee ? Vr(ee, X) : l(e[v], X, r)))
                    continue e;
                }
                N && N.push(X), T.push(z);
              }
            }
          return T;
        }
        function rv(e, t, r, l) {
          return en(e, function(u, h, v) {
            t(l, r(u), h, v);
          }), l;
        }
        function ii(e, t, r) {
          t = Dn(t, e), e = Ka(e, t);
          var l = e == null ? e : e[nn(Nt(t))];
          return l == null ? i : yt(l, e, r);
        }
        function oa(e) {
          return Me(e) && tt(e) == hr;
        }
        function iv(e) {
          return Me(e) && tt(e) == Jr;
        }
        function ov(e) {
          return Me(e) && tt(e) == Gr;
        }
        function oi(e, t, r, l, u) {
          return e === t ? !0 : e == null || t == null || !Me(e) && !Me(t) ? e !== e && t !== t : lv(e, t, r, l, oi, u);
        }
        function lv(e, t, r, l, u, h) {
          var v = Q(e), w = Q(t), x = v ? Ei : Ve(e), T = w ? Ei : Ve(t);
          x = x == hr ? cn : x, T = T == hr ? cn : T;
          var A = x == cn, P = T == cn, N = x == T;
          if (N && Wn(e)) {
            if (!Wn(t))
              return !1;
            v = !0, A = !1;
          }
          if (N && !A)
            return h || (h = new Jt()), v || Er(e) ? Na(e, t, r, l, u, h) : Fv(e, t, x, r, l, u, h);
          if (!(r & L)) {
            var z = A && pe.call(e, "__wrapped__"), X = P && pe.call(t, "__wrapped__");
            if (z || X) {
              var ee = z ? e.value() : e, Z = X ? t.value() : t;
              return h || (h = new Jt()), u(ee, Z, r, l, h);
            }
          }
          return N ? (h || (h = new Jt()), Mv(e, t, r, l, u, h)) : !1;
        }
        function sv(e) {
          return Me(e) && Ve(e) == Yt;
        }
        function bl(e, t, r, l) {
          var u = r.length, h = u, v = !l;
          if (e == null)
            return !h;
          for (e = xe(e); u--; ) {
            var w = r[u];
            if (v && w[2] ? w[1] !== e[w[0]] : !(w[0] in e))
              return !1;
          }
          for (; ++u < h; ) {
            w = r[u];
            var x = w[0], T = e[x], A = w[1];
            if (v && w[2]) {
              if (T === i && !(x in e))
                return !1;
            } else {
              var P = new Jt();
              if (l)
                var N = l(T, A, x, e, t, P);
              if (!(N === i ? oi(A, T, L | W, l, P) : N))
                return !1;
            }
          }
          return !0;
        }
        function la(e) {
          if (!Oe(e) || Uv(e))
            return !1;
          var t = mn(e) ? sg : Qh;
          return t.test(Qn(e));
        }
        function uv(e) {
          return Me(e) && tt(e) == Yr;
        }
        function av(e) {
          return Me(e) && Ve(e) == Xt;
        }
        function fv(e) {
          return Me(e) && _o(e.length) && !!Ee[tt(e)];
        }
        function sa(e) {
          return typeof e == "function" ? e : e == null ? ft : typeof e == "object" ? Q(e) ? fa(e[0], e[1]) : aa(e) : Of(e);
        }
        function yl(e) {
          if (!ui(e))
            return dg(e);
          var t = [];
          for (var r in xe(e))
            pe.call(e, r) && r != "constructor" && t.push(r);
          return t;
        }
        function cv(e) {
          if (!Oe(e))
            return Xv(e);
          var t = ui(e), r = [];
          for (var l in e)
            l == "constructor" && (t || !pe.call(e, l)) || r.push(l);
          return r;
        }
        function xl(e, t) {
          return e < t;
        }
        function ua(e, t) {
          var r = -1, l = ut(e) ? R(e.length) : [];
          return Fn(e, function(u, h, v) {
            l[++r] = t(u, h, v);
          }), l;
        }
        function aa(e) {
          var t = Wl(e);
          return t.length == 1 && t[0][2] ? Ua(t[0][0], t[0][1]) : function(r) {
            return r === e || bl(r, e, t);
          };
        }
        function fa(e, t) {
          return Bl(e) && za(t) ? Ua(nn(e), t) : function(r) {
            var l = Jl(r, e);
            return l === i && l === t ? Vl(r, e) : oi(t, l, L | W);
          };
        }
        function $i(e, t, r, l, u) {
          e !== t && _l(t, function(h, v) {
            if (u || (u = new Jt()), Oe(h))
              hv(e, t, v, r, $i, l, u);
            else {
              var w = l ? l(ql(e, v), h, v + "", e, t, u) : i;
              w === i && (w = h), gl(e, v, w);
            }
          }, at);
        }
        function hv(e, t, r, l, u, h, v) {
          var w = ql(e, r), x = ql(t, r), T = v.get(x);
          if (T) {
            gl(e, r, T);
            return;
          }
          var A = h ? h(w, x, r + "", e, t, v) : i, P = A === i;
          if (P) {
            var N = Q(x), z = !N && Wn(x), X = !N && !z && Er(x);
            A = x, N || z || X ? Q(w) ? A = w : Ne(w) ? A = st(w) : z ? (P = !1, A = xa(x, !0)) : X ? (P = !1, A = Ca(x, !0)) : A = [] : fi(x) || jn(x) ? (A = w, jn(w) ? A = bf(w) : (!Oe(w) || mn(w)) && (A = qa(x))) : P = !1;
          }
          P && (v.set(x, A), u(A, x, l, h, v), v.delete(x)), gl(e, r, A);
        }
        function ca(e, t) {
          var r = e.length;
          if (r)
            return t += t < 0 ? r : 0, pn(t, r) ? e[t] : i;
        }
        function ha(e, t, r) {
          t.length ? t = Ie(t, function(h) {
            return Q(h) ? function(v) {
              return Jn(v, h.length === 1 ? h[0] : h);
            } : h;
          }) : t = [ft];
          var l = -1;
          t = Ie(t, xt(Y()));
          var u = ua(e, function(h, v, w) {
            var x = Ie(t, function(T) {
              return T(h);
            });
            return { criteria: x, index: ++l, value: h };
          });
          return Bd(u, function(h, v) {
            return Sv(h, v, r);
          });
        }
        function dv(e, t) {
          return da(e, t, function(r, l) {
            return Vl(e, l);
          });
        }
        function da(e, t, r) {
          for (var l = -1, u = t.length, h = {}; ++l < u; ) {
            var v = t[l], w = Jn(e, v);
            r(w, v) && li(h, Dn(v, e), w);
          }
          return h;
        }
        function gv(e) {
          return function(t) {
            return Jn(t, e);
          };
        }
        function Cl(e, t, r, l) {
          var u = l ? Nd : vr, h = -1, v = t.length, w = e;
          for (e === t && (t = st(t)), r && (w = Ie(e, xt(r))); ++h < v; )
            for (var x = 0, T = t[h], A = r ? r(T) : T; (x = u(w, A, x, l)) > -1; )
              w !== e && Ui.call(w, x, 1), Ui.call(e, x, 1);
          return e;
        }
        function ga(e, t) {
          for (var r = e ? t.length : 0, l = r - 1; r--; ) {
            var u = t[r];
            if (r == l || u !== h) {
              var h = u;
              pn(u) ? Ui.call(e, u, 1) : Tl(e, u);
            }
          }
          return e;
        }
        function Rl(e, t) {
          return e + Yi(Zu() * (t - e + 1));
        }
        function vv(e, t, r, l) {
          for (var u = -1, h = Ge(Ki((t - e) / (r || 1)), 0), v = R(h); h--; )
            v[l ? h : ++u] = e, e += r;
          return v;
        }
        function Sl(e, t) {
          var r = "";
          if (!e || t < 1 || t > lt)
            return r;
          do
            t % 2 && (r += e), t = Yi(t / 2), t && (e += e);
          while (t);
          return r;
        }
        function te(e, t) {
          return zl(Ga(e, t, ft), e + "");
        }
        function _v(e) {
          return Qu(Tr(e));
        }
        function pv(e, t) {
          var r = Tr(e);
          return ao(r, Zn(t, 0, r.length));
        }
        function li(e, t, r, l) {
          if (!Oe(e))
            return e;
          t = Dn(t, e);
          for (var u = -1, h = t.length, v = h - 1, w = e; w != null && ++u < h; ) {
            var x = nn(t[u]), T = r;
            if (x === "__proto__" || x === "constructor" || x === "prototype")
              return e;
            if (u != v) {
              var A = w[x];
              T = l ? l(A, x, w) : i, T === i && (T = Oe(A) ? A : pn(t[u + 1]) ? [] : {});
            }
            ni(w, x, T), w = w[x];
          }
          return e;
        }
        var va = Xi ? function(e, t) {
          return Xi.set(e, t), e;
        } : ft, mv = Gi ? function(e, t) {
          return Gi(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: jl(t),
            writable: !0
          });
        } : ft;
        function wv(e) {
          return ao(Tr(e));
        }
        function Wt(e, t, r) {
          var l = -1, u = e.length;
          t < 0 && (t = -t > u ? 0 : u + t), r = r > u ? u : r, r < 0 && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0;
          for (var h = R(u); ++l < u; )
            h[l] = e[l + t];
          return h;
        }
        function bv(e, t) {
          var r;
          return Fn(e, function(l, u, h) {
            return r = t(l, u, h), !r;
          }), !!r;
        }
        function eo(e, t, r) {
          var l = 0, u = e == null ? l : e.length;
          if (typeof t == "number" && t === t && u <= Un) {
            for (; l < u; ) {
              var h = l + u >>> 1, v = e[h];
              v !== null && !Rt(v) && (r ? v <= t : v < t) ? l = h + 1 : u = h;
            }
            return u;
          }
          return El(e, t, ft, r);
        }
        function El(e, t, r, l) {
          var u = 0, h = e == null ? 0 : e.length;
          if (h === 0)
            return 0;
          t = r(t);
          for (var v = t !== t, w = t === null, x = Rt(t), T = t === i; u < h; ) {
            var A = Yi((u + h) / 2), P = r(e[A]), N = P !== i, z = P === null, X = P === P, ee = Rt(P);
            if (v)
              var Z = l || X;
            else T ? Z = X && (l || N) : w ? Z = X && N && (l || !z) : x ? Z = X && N && !z && (l || !ee) : z || ee ? Z = !1 : Z = l ? P <= t : P < t;
            Z ? u = A + 1 : h = A;
          }
          return Je(h, Kt);
        }
        function _a(e, t) {
          for (var r = -1, l = e.length, u = 0, h = []; ++r < l; ) {
            var v = e[r], w = t ? t(v) : v;
            if (!r || !Vt(w, x)) {
              var x = w;
              h[u++] = v === 0 ? 0 : v;
            }
          }
          return h;
        }
        function pa(e) {
          return typeof e == "number" ? e : Rt(e) ? Pt : +e;
        }
        function Ct(e) {
          if (typeof e == "string")
            return e;
          if (Q(e))
            return Ie(e, Ct) + "";
          if (Rt(e))
            return Ju ? Ju.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -Fe ? "-0" : t;
        }
        function Mn(e, t, r) {
          var l = -1, u = Fi, h = e.length, v = !0, w = [], x = w;
          if (r)
            v = !1, u = tl;
          else if (h >= a) {
            var T = t ? null : Pv(e);
            if (T)
              return Di(T);
            v = !1, u = Vr, x = new Xn();
          } else
            x = t ? [] : w;
          e:
            for (; ++l < h; ) {
              var A = e[l], P = t ? t(A) : A;
              if (A = r || A !== 0 ? A : 0, v && P === P) {
                for (var N = x.length; N--; )
                  if (x[N] === P)
                    continue e;
                t && x.push(P), w.push(A);
              } else u(x, P, r) || (x !== w && x.push(P), w.push(A));
            }
          return w;
        }
        function Tl(e, t) {
          return t = Dn(t, e), e = Ka(e, t), e == null || delete e[nn(Nt(t))];
        }
        function ma(e, t, r, l) {
          return li(e, t, r(Jn(e, t)), l);
        }
        function to(e, t, r, l) {
          for (var u = e.length, h = l ? u : -1; (l ? h-- : ++h < u) && t(e[h], h, e); )
            ;
          return r ? Wt(e, l ? 0 : h, l ? h + 1 : u) : Wt(e, l ? h + 1 : 0, l ? u : h);
        }
        function wa(e, t) {
          var r = e;
          return r instanceof ie && (r = r.value()), nl(t, function(l, u) {
            return u.func.apply(u.thisArg, On([l], u.args));
          }, r);
        }
        function Al(e, t, r) {
          var l = e.length;
          if (l < 2)
            return l ? Mn(e[0]) : [];
          for (var u = -1, h = R(l); ++u < l; )
            for (var v = e[u], w = -1; ++w < l; )
              w != u && (h[u] = ri(h[u] || v, e[w], t, r));
          return Mn(Xe(h, 1), t, r);
        }
        function ba(e, t, r) {
          for (var l = -1, u = e.length, h = t.length, v = {}; ++l < u; ) {
            var w = l < h ? t[l] : i;
            r(v, e[l], w);
          }
          return v;
        }
        function Il(e) {
          return Ne(e) ? e : [];
        }
        function Ol(e) {
          return typeof e == "function" ? e : ft;
        }
        function Dn(e, t) {
          return Q(e) ? e : Bl(e, t) ? [e] : Ja(ge(e));
        }
        var yv = te;
        function Hn(e, t, r) {
          var l = e.length;
          return r = r === i ? l : r, !t && r >= l ? e : Wt(e, t, r);
        }
        var ya = ug || function(e) {
          return Ye.clearTimeout(e);
        };
        function xa(e, t) {
          if (t)
            return e.slice();
          var r = e.length, l = Uu ? Uu(r) : new e.constructor(r);
          return e.copy(l), l;
        }
        function Pl(e) {
          var t = new e.constructor(e.byteLength);
          return new qi(t).set(new qi(e)), t;
        }
        function xv(e, t) {
          var r = t ? Pl(e.buffer) : e.buffer;
          return new e.constructor(r, e.byteOffset, e.byteLength);
        }
        function Cv(e) {
          var t = new e.constructor(e.source, ou.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function Rv(e) {
          return ti ? xe(ti.call(e)) : {};
        }
        function Ca(e, t) {
          var r = t ? Pl(e.buffer) : e.buffer;
          return new e.constructor(r, e.byteOffset, e.length);
        }
        function Ra(e, t) {
          if (e !== t) {
            var r = e !== i, l = e === null, u = e === e, h = Rt(e), v = t !== i, w = t === null, x = t === t, T = Rt(t);
            if (!w && !T && !h && e > t || h && v && x && !w && !T || l && v && x || !r && x || !u)
              return 1;
            if (!l && !h && !T && e < t || T && r && u && !l && !h || w && r && u || !v && u || !x)
              return -1;
          }
          return 0;
        }
        function Sv(e, t, r) {
          for (var l = -1, u = e.criteria, h = t.criteria, v = u.length, w = r.length; ++l < v; ) {
            var x = Ra(u[l], h[l]);
            if (x) {
              if (l >= w)
                return x;
              var T = r[l];
              return x * (T == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function Sa(e, t, r, l) {
          for (var u = -1, h = e.length, v = r.length, w = -1, x = t.length, T = Ge(h - v, 0), A = R(x + T), P = !l; ++w < x; )
            A[w] = t[w];
          for (; ++u < v; )
            (P || u < h) && (A[r[u]] = e[u]);
          for (; T--; )
            A[w++] = e[u++];
          return A;
        }
        function Ea(e, t, r, l) {
          for (var u = -1, h = e.length, v = -1, w = r.length, x = -1, T = t.length, A = Ge(h - w, 0), P = R(A + T), N = !l; ++u < A; )
            P[u] = e[u];
          for (var z = u; ++x < T; )
            P[z + x] = t[x];
          for (; ++v < w; )
            (N || u < h) && (P[z + r[v]] = e[u++]);
          return P;
        }
        function st(e, t) {
          var r = -1, l = e.length;
          for (t || (t = R(l)); ++r < l; )
            t[r] = e[r];
          return t;
        }
        function tn(e, t, r, l) {
          var u = !r;
          r || (r = {});
          for (var h = -1, v = t.length; ++h < v; ) {
            var w = t[h], x = l ? l(r[w], e[w], w, r, e) : i;
            x === i && (x = e[w]), u ? gn(r, w, x) : ni(r, w, x);
          }
          return r;
        }
        function Ev(e, t) {
          return tn(e, Nl(e), t);
        }
        function Tv(e, t) {
          return tn(e, Ba(e), t);
        }
        function no(e, t) {
          return function(r, l) {
            var u = Q(r) ? Ld : Jg, h = t ? t() : {};
            return u(r, e, Y(l, 2), h);
          };
        }
        function Cr(e) {
          return te(function(t, r) {
            var l = -1, u = r.length, h = u > 1 ? r[u - 1] : i, v = u > 2 ? r[2] : i;
            for (h = e.length > 3 && typeof h == "function" ? (u--, h) : i, v && nt(r[0], r[1], v) && (h = u < 3 ? i : h, u = 1), t = xe(t); ++l < u; ) {
              var w = r[l];
              w && e(t, w, l, h);
            }
            return t;
          });
        }
        function Ta(e, t) {
          return function(r, l) {
            if (r == null)
              return r;
            if (!ut(r))
              return e(r, l);
            for (var u = r.length, h = t ? u : -1, v = xe(r); (t ? h-- : ++h < u) && l(v[h], h, v) !== !1; )
              ;
            return r;
          };
        }
        function Aa(e) {
          return function(t, r, l) {
            for (var u = -1, h = xe(t), v = l(t), w = v.length; w--; ) {
              var x = v[e ? w : ++u];
              if (r(h[x], x, h) === !1)
                break;
            }
            return t;
          };
        }
        function Av(e, t, r) {
          var l = t & M, u = si(e);
          function h() {
            var v = this && this !== Ye && this instanceof h ? u : e;
            return v.apply(l ? r : this, arguments);
          }
          return h;
        }
        function Ia(e) {
          return function(t) {
            t = ge(t);
            var r = _r(t) ? Zt(t) : i, l = r ? r[0] : t.charAt(0), u = r ? Hn(r, 1).join("") : t.slice(1);
            return l[e]() + u;
          };
        }
        function Rr(e) {
          return function(t) {
            return nl(Af(Tf(t).replace(md, "")), e, "");
          };
        }
        function si(e) {
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
              case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);
              case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
              case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            var r = xr(e.prototype), l = e.apply(r, t);
            return Oe(l) ? l : r;
          };
        }
        function Iv(e, t, r) {
          var l = si(e);
          function u() {
            for (var h = arguments.length, v = R(h), w = h, x = Sr(u); w--; )
              v[w] = arguments[w];
            var T = h < 3 && v[0] !== x && v[h - 1] !== x ? [] : Pn(v, x);
            if (h -= T.length, h < r)
              return Ma(
                e,
                t,
                ro,
                u.placeholder,
                i,
                v,
                T,
                i,
                i,
                r - h
              );
            var A = this && this !== Ye && this instanceof u ? l : e;
            return yt(A, this, v);
          }
          return u;
        }
        function Oa(e) {
          return function(t, r, l) {
            var u = xe(t);
            if (!ut(t)) {
              var h = Y(r, 3);
              t = Ke(t), r = function(w) {
                return h(u[w], w, u);
              };
            }
            var v = e(t, r, l);
            return v > -1 ? u[h ? t[v] : v] : i;
          };
        }
        function Pa(e) {
          return _n(function(t) {
            var r = t.length, l = r, u = Dt.prototype.thru;
            for (e && t.reverse(); l--; ) {
              var h = t[l];
              if (typeof h != "function")
                throw new Mt(d);
              if (u && !v && so(h) == "wrapper")
                var v = new Dt([], !0);
            }
            for (l = v ? l : r; ++l < r; ) {
              h = t[l];
              var w = so(h), x = w == "wrapper" ? Hl(h) : i;
              x && kl(x[0]) && x[1] == (q | G | K | de) && !x[4].length && x[9] == 1 ? v = v[so(x[0])].apply(v, x[3]) : v = h.length == 1 && kl(h) ? v[w]() : v.thru(h);
            }
            return function() {
              var T = arguments, A = T[0];
              if (v && T.length == 1 && Q(A))
                return v.plant(A).value();
              for (var P = 0, N = r ? t[P].apply(this, T) : A; ++P < r; )
                N = t[P].call(this, N);
              return N;
            };
          });
        }
        function ro(e, t, r, l, u, h, v, w, x, T) {
          var A = t & q, P = t & M, N = t & D, z = t & (G | J), X = t & $, ee = N ? i : si(e);
          function Z() {
            for (var re = arguments.length, oe = R(re), St = re; St--; )
              oe[St] = arguments[St];
            if (z)
              var rt = Sr(Z), Et = qd(oe, rt);
            if (l && (oe = Sa(oe, l, u, z)), h && (oe = Ea(oe, h, v, z)), re -= Et, z && re < T) {
              var Be = Pn(oe, rt);
              return Ma(
                e,
                t,
                ro,
                Z.placeholder,
                r,
                oe,
                Be,
                w,
                x,
                T - re
              );
            }
            var Qt = P ? r : this, bn = N ? Qt[e] : e;
            return re = oe.length, w ? oe = Jv(oe, w) : X && re > 1 && oe.reverse(), A && x < re && (oe.length = x), this && this !== Ye && this instanceof Z && (bn = ee || si(bn)), bn.apply(Qt, oe);
          }
          return Z;
        }
        function La(e, t) {
          return function(r, l) {
            return rv(r, e, t(l), {});
          };
        }
        function io(e, t) {
          return function(r, l) {
            var u;
            if (r === i && l === i)
              return t;
            if (r !== i && (u = r), l !== i) {
              if (u === i)
                return l;
              typeof r == "string" || typeof l == "string" ? (r = Ct(r), l = Ct(l)) : (r = pa(r), l = pa(l)), u = e(r, l);
            }
            return u;
          };
        }
        function Ll(e) {
          return _n(function(t) {
            return t = Ie(t, xt(Y())), te(function(r) {
              var l = this;
              return e(t, function(u) {
                return yt(u, l, r);
              });
            });
          });
        }
        function oo(e, t) {
          t = t === i ? " " : Ct(t);
          var r = t.length;
          if (r < 2)
            return r ? Sl(t, e) : t;
          var l = Sl(t, Ki(e / pr(t)));
          return _r(t) ? Hn(Zt(l), 0, e).join("") : l.slice(0, e);
        }
        function Ov(e, t, r, l) {
          var u = t & M, h = si(e);
          function v() {
            for (var w = -1, x = arguments.length, T = -1, A = l.length, P = R(A + x), N = this && this !== Ye && this instanceof v ? h : e; ++T < A; )
              P[T] = l[T];
            for (; x--; )
              P[T++] = arguments[++w];
            return yt(N, u ? r : this, P);
          }
          return v;
        }
        function Fa(e) {
          return function(t, r, l) {
            return l && typeof l != "number" && nt(t, r, l) && (r = l = i), t = wn(t), r === i ? (r = t, t = 0) : r = wn(r), l = l === i ? t < r ? 1 : -1 : wn(l), vv(t, r, l, e);
          };
        }
        function lo(e) {
          return function(t, r) {
            return typeof t == "string" && typeof r == "string" || (t = Bt(t), r = Bt(r)), e(t, r);
          };
        }
        function Ma(e, t, r, l, u, h, v, w, x, T) {
          var A = t & G, P = A ? v : i, N = A ? i : v, z = A ? h : i, X = A ? i : h;
          t |= A ? K : U, t &= ~(A ? U : K), t & H || (t &= -4);
          var ee = [
            e,
            t,
            u,
            z,
            P,
            X,
            N,
            w,
            x,
            T
          ], Z = r.apply(i, ee);
          return kl(e) && Ya(Z, ee), Z.placeholder = l, Xa(Z, e, t);
        }
        function Fl(e) {
          var t = Ue[e];
          return function(r, l) {
            if (r = Bt(r), l = l == null ? 0 : Je(j(l), 292), l && Xu(r)) {
              var u = (ge(r) + "e").split("e"), h = t(u[0] + "e" + (+u[1] + l));
              return u = (ge(h) + "e").split("e"), +(u[0] + "e" + (+u[1] - l));
            }
            return t(r);
          };
        }
        var Pv = br && 1 / Di(new br([, -0]))[1] == Fe ? function(e) {
          return new br(e);
        } : ts;
        function Da(e) {
          return function(t) {
            var r = Ve(t);
            return r == Yt ? al(t) : r == Xt ? Zd(t) : kd(t, e(t));
          };
        }
        function vn(e, t, r, l, u, h, v, w) {
          var x = t & D;
          if (!x && typeof e != "function")
            throw new Mt(d);
          var T = l ? l.length : 0;
          if (T || (t &= -97, l = u = i), v = v === i ? v : Ge(j(v), 0), w = w === i ? w : j(w), T -= u ? u.length : 0, t & U) {
            var A = l, P = u;
            l = u = i;
          }
          var N = x ? i : Hl(e), z = [
            e,
            t,
            r,
            l,
            u,
            A,
            P,
            h,
            v,
            w
          ];
          if (N && Yv(z, N), e = z[0], t = z[1], r = z[2], l = z[3], u = z[4], w = z[9] = z[9] === i ? x ? 0 : e.length : Ge(z[9] - T, 0), !w && t & (G | J) && (t &= -25), !t || t == M)
            var X = Av(e, t, r);
          else t == G || t == J ? X = Iv(e, t, w) : (t == K || t == (M | K)) && !u.length ? X = Ov(e, t, r, l) : X = ro.apply(i, z);
          var ee = N ? va : Ya;
          return Xa(ee(X, z), e, t);
        }
        function Ha(e, t, r, l) {
          return e === i || Vt(e, wr[r]) && !pe.call(l, r) ? t : e;
        }
        function Wa(e, t, r, l, u, h) {
          return Oe(e) && Oe(t) && (h.set(t, e), $i(e, t, i, Wa, h), h.delete(t)), e;
        }
        function Lv(e) {
          return fi(e) ? i : e;
        }
        function Na(e, t, r, l, u, h) {
          var v = r & L, w = e.length, x = t.length;
          if (w != x && !(v && x > w))
            return !1;
          var T = h.get(e), A = h.get(t);
          if (T && A)
            return T == t && A == e;
          var P = -1, N = !0, z = r & W ? new Xn() : i;
          for (h.set(e, t), h.set(t, e); ++P < w; ) {
            var X = e[P], ee = t[P];
            if (l)
              var Z = v ? l(ee, X, P, t, e, h) : l(X, ee, P, e, t, h);
            if (Z !== i) {
              if (Z)
                continue;
              N = !1;
              break;
            }
            if (z) {
              if (!rl(t, function(re, oe) {
                if (!Vr(z, oe) && (X === re || u(X, re, r, l, h)))
                  return z.push(oe);
              })) {
                N = !1;
                break;
              }
            } else if (!(X === ee || u(X, ee, r, l, h))) {
              N = !1;
              break;
            }
          }
          return h.delete(e), h.delete(t), N;
        }
        function Fv(e, t, r, l, u, h, v) {
          switch (r) {
            case dr:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case Jr:
              return !(e.byteLength != t.byteLength || !h(new qi(e), new qi(t)));
            case Ur:
            case Gr:
            case Kr:
              return Vt(+e, +t);
            case Ti:
              return e.name == t.name && e.message == t.message;
            case Yr:
            case Xr:
              return e == t + "";
            case Yt:
              var w = al;
            case Xt:
              var x = l & L;
              if (w || (w = Di), e.size != t.size && !x)
                return !1;
              var T = v.get(e);
              if (T)
                return T == t;
              l |= W, v.set(e, t);
              var A = Na(w(e), w(t), l, u, h, v);
              return v.delete(e), A;
            case Ii:
              if (ti)
                return ti.call(e) == ti.call(t);
          }
          return !1;
        }
        function Mv(e, t, r, l, u, h) {
          var v = r & L, w = Ml(e), x = w.length, T = Ml(t), A = T.length;
          if (x != A && !v)
            return !1;
          for (var P = x; P--; ) {
            var N = w[P];
            if (!(v ? N in t : pe.call(t, N)))
              return !1;
          }
          var z = h.get(e), X = h.get(t);
          if (z && X)
            return z == t && X == e;
          var ee = !0;
          h.set(e, t), h.set(t, e);
          for (var Z = v; ++P < x; ) {
            N = w[P];
            var re = e[N], oe = t[N];
            if (l)
              var St = v ? l(oe, re, N, t, e, h) : l(re, oe, N, e, t, h);
            if (!(St === i ? re === oe || u(re, oe, r, l, h) : St)) {
              ee = !1;
              break;
            }
            Z || (Z = N == "constructor");
          }
          if (ee && !Z) {
            var rt = e.constructor, Et = t.constructor;
            rt != Et && "constructor" in e && "constructor" in t && !(typeof rt == "function" && rt instanceof rt && typeof Et == "function" && Et instanceof Et) && (ee = !1);
          }
          return h.delete(e), h.delete(t), ee;
        }
        function _n(e) {
          return zl(Ga(e, i, $a), e + "");
        }
        function Ml(e) {
          return ia(e, Ke, Nl);
        }
        function Dl(e) {
          return ia(e, at, Ba);
        }
        var Hl = Xi ? function(e) {
          return Xi.get(e);
        } : ts;
        function so(e) {
          for (var t = e.name + "", r = yr[t], l = pe.call(yr, t) ? r.length : 0; l--; ) {
            var u = r[l], h = u.func;
            if (h == null || h == e)
              return u.name;
          }
          return t;
        }
        function Sr(e) {
          var t = pe.call(c, "placeholder") ? c : e;
          return t.placeholder;
        }
        function Y() {
          var e = c.iteratee || $l;
          return e = e === $l ? sa : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function uo(e, t) {
          var r = e.__data__;
          return zv(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
        }
        function Wl(e) {
          for (var t = Ke(e), r = t.length; r--; ) {
            var l = t[r], u = e[l];
            t[r] = [l, u, za(u)];
          }
          return t;
        }
        function Vn(e, t) {
          var r = Kd(e, t);
          return la(r) ? r : i;
        }
        function Dv(e) {
          var t = pe.call(e, Kn), r = e[Kn];
          try {
            e[Kn] = i;
            var l = !0;
          } catch {
          }
          var u = Bi.call(e);
          return l && (t ? e[Kn] = r : delete e[Kn]), u;
        }
        var Nl = cl ? function(e) {
          return e == null ? [] : (e = xe(e), In(cl(e), function(t) {
            return Ku.call(e, t);
          }));
        } : ns, Ba = cl ? function(e) {
          for (var t = []; e; )
            On(t, Nl(e)), e = zi(e);
          return t;
        } : ns, Ve = tt;
        (hl && Ve(new hl(new ArrayBuffer(1))) != dr || jr && Ve(new jr()) != Yt || dl && Ve(dl.resolve()) != tu || br && Ve(new br()) != Xt || $r && Ve(new $r()) != Zr) && (Ve = function(e) {
          var t = tt(e), r = t == cn ? e.constructor : i, l = r ? Qn(r) : "";
          if (l)
            switch (l) {
              case pg:
                return dr;
              case mg:
                return Yt;
              case wg:
                return tu;
              case bg:
                return Xt;
              case yg:
                return Zr;
            }
          return t;
        });
        function Hv(e, t, r) {
          for (var l = -1, u = r.length; ++l < u; ) {
            var h = r[l], v = h.size;
            switch (h.type) {
              case "drop":
                e += v;
                break;
              case "dropRight":
                t -= v;
                break;
              case "take":
                t = Je(t, e + v);
                break;
              case "takeRight":
                e = Ge(e, t - v);
                break;
            }
          }
          return { start: e, end: t };
        }
        function Wv(e) {
          var t = e.match(Uh);
          return t ? t[1].split(Gh) : [];
        }
        function ka(e, t, r) {
          t = Dn(t, e);
          for (var l = -1, u = t.length, h = !1; ++l < u; ) {
            var v = nn(t[l]);
            if (!(h = e != null && r(e, v)))
              break;
            e = e[v];
          }
          return h || ++l != u ? h : (u = e == null ? 0 : e.length, !!u && _o(u) && pn(v, u) && (Q(e) || jn(e)));
        }
        function Nv(e) {
          var t = e.length, r = new e.constructor(t);
          return t && typeof e[0] == "string" && pe.call(e, "index") && (r.index = e.index, r.input = e.input), r;
        }
        function qa(e) {
          return typeof e.constructor == "function" && !ui(e) ? xr(zi(e)) : {};
        }
        function Bv(e, t, r) {
          var l = e.constructor;
          switch (t) {
            case Jr:
              return Pl(e);
            case Ur:
            case Gr:
              return new l(+e);
            case dr:
              return xv(e, r);
            case Wo:
            case No:
            case Bo:
            case ko:
            case qo:
            case zo:
            case Uo:
            case Go:
            case Ko:
              return Ca(e, r);
            case Yt:
              return new l();
            case Kr:
            case Xr:
              return new l(e);
            case Yr:
              return Cv(e);
            case Xt:
              return new l();
            case Ii:
              return Rv(e);
          }
        }
        function kv(e, t) {
          var r = t.length;
          if (!r)
            return e;
          var l = r - 1;
          return t[l] = (r > 1 ? "& " : "") + t[l], t = t.join(r > 2 ? ", " : " "), e.replace(zh, `{
/* [wrapped with ` + t + `] */
`);
        }
        function qv(e) {
          return Q(e) || jn(e) || !!(Yu && e && e[Yu]);
        }
        function pn(e, t) {
          var r = typeof e;
          return t = t ?? lt, !!t && (r == "number" || r != "symbol" && $h.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function nt(e, t, r) {
          if (!Oe(r))
            return !1;
          var l = typeof t;
          return (l == "number" ? ut(r) && pn(t, r.length) : l == "string" && t in r) ? Vt(r[t], e) : !1;
        }
        function Bl(e, t) {
          if (Q(e))
            return !1;
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || Rt(e) ? !0 : Nh.test(e) || !Wh.test(e) || t != null && e in xe(t);
        }
        function zv(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function kl(e) {
          var t = so(e), r = c[t];
          if (typeof r != "function" || !(t in ie.prototype))
            return !1;
          if (e === r)
            return !0;
          var l = Hl(r);
          return !!l && e === l[0];
        }
        function Uv(e) {
          return !!zu && zu in e;
        }
        var Gv = Wi ? mn : rs;
        function ui(e) {
          var t = e && e.constructor, r = typeof t == "function" && t.prototype || wr;
          return e === r;
        }
        function za(e) {
          return e === e && !Oe(e);
        }
        function Ua(e, t) {
          return function(r) {
            return r == null ? !1 : r[e] === t && (t !== i || e in xe(r));
          };
        }
        function Kv(e) {
          var t = go(e, function(l) {
            return r.size === p && r.clear(), l;
          }), r = t.cache;
          return t;
        }
        function Yv(e, t) {
          var r = e[1], l = t[1], u = r | l, h = u < (M | D | q), v = l == q && r == G || l == q && r == de && e[7].length <= t[8] || l == (q | de) && t[7].length <= t[8] && r == G;
          if (!(h || v))
            return e;
          l & M && (e[2] = t[2], u |= r & M ? 0 : H);
          var w = t[3];
          if (w) {
            var x = e[3];
            e[3] = x ? Sa(x, w, t[4]) : w, e[4] = x ? Pn(e[3], b) : t[4];
          }
          return w = t[5], w && (x = e[5], e[5] = x ? Ea(x, w, t[6]) : w, e[6] = x ? Pn(e[5], b) : t[6]), w = t[7], w && (e[7] = w), l & q && (e[8] = e[8] == null ? t[8] : Je(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = u, e;
        }
        function Xv(e) {
          var t = [];
          if (e != null)
            for (var r in xe(e))
              t.push(r);
          return t;
        }
        function Zv(e) {
          return Bi.call(e);
        }
        function Ga(e, t, r) {
          return t = Ge(t === i ? e.length - 1 : t, 0), function() {
            for (var l = arguments, u = -1, h = Ge(l.length - t, 0), v = R(h); ++u < h; )
              v[u] = l[t + u];
            u = -1;
            for (var w = R(t + 1); ++u < t; )
              w[u] = l[u];
            return w[t] = r(v), yt(e, this, w);
          };
        }
        function Ka(e, t) {
          return t.length < 2 ? e : Jn(e, Wt(t, 0, -1));
        }
        function Jv(e, t) {
          for (var r = e.length, l = Je(t.length, r), u = st(e); l--; ) {
            var h = t[l];
            e[l] = pn(h, r) ? u[h] : i;
          }
          return e;
        }
        function ql(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var Ya = Za(va), ai = fg || function(e, t) {
          return Ye.setTimeout(e, t);
        }, zl = Za(mv);
        function Xa(e, t, r) {
          var l = t + "";
          return zl(e, kv(l, Vv(Wv(l), r)));
        }
        function Za(e) {
          var t = 0, r = 0;
          return function() {
            var l = gg(), u = le - (l - r);
            if (r = l, u > 0) {
              if (++t >= be)
                return arguments[0];
            } else
              t = 0;
            return e.apply(i, arguments);
          };
        }
        function ao(e, t) {
          var r = -1, l = e.length, u = l - 1;
          for (t = t === i ? l : t; ++r < t; ) {
            var h = Rl(r, u), v = e[h];
            e[h] = e[r], e[r] = v;
          }
          return e.length = t, e;
        }
        var Ja = Kv(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(Bh, function(r, l, u, h) {
            t.push(u ? h.replace(Xh, "$1") : l || r);
          }), t;
        });
        function nn(e) {
          if (typeof e == "string" || Rt(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -Fe ? "-0" : t;
        }
        function Qn(e) {
          if (e != null) {
            try {
              return Ni.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function Vv(e, t) {
          return Ft(Ho, function(r) {
            var l = "_." + r[0];
            t & r[1] && !Fi(e, l) && e.push(l);
          }), e.sort();
        }
        function Va(e) {
          if (e instanceof ie)
            return e.clone();
          var t = new Dt(e.__wrapped__, e.__chain__);
          return t.__actions__ = st(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function Qv(e, t, r) {
          (r ? nt(e, t, r) : t === i) ? t = 1 : t = Ge(j(t), 0);
          var l = e == null ? 0 : e.length;
          if (!l || t < 1)
            return [];
          for (var u = 0, h = 0, v = R(Ki(l / t)); u < l; )
            v[h++] = Wt(e, u, u += t);
          return v;
        }
        function jv(e) {
          for (var t = -1, r = e == null ? 0 : e.length, l = 0, u = []; ++t < r; ) {
            var h = e[t];
            h && (u[l++] = h);
          }
          return u;
        }
        function $v() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = R(e - 1), r = arguments[0], l = e; l--; )
            t[l - 1] = arguments[l];
          return On(Q(r) ? st(r) : [r], Xe(t, 1));
        }
        var e_ = te(function(e, t) {
          return Ne(e) ? ri(e, Xe(t, 1, Ne, !0)) : [];
        }), t_ = te(function(e, t) {
          var r = Nt(t);
          return Ne(r) && (r = i), Ne(e) ? ri(e, Xe(t, 1, Ne, !0), Y(r, 2)) : [];
        }), n_ = te(function(e, t) {
          var r = Nt(t);
          return Ne(r) && (r = i), Ne(e) ? ri(e, Xe(t, 1, Ne, !0), i, r) : [];
        });
        function r_(e, t, r) {
          var l = e == null ? 0 : e.length;
          return l ? (t = r || t === i ? 1 : j(t), Wt(e, t < 0 ? 0 : t, l)) : [];
        }
        function i_(e, t, r) {
          var l = e == null ? 0 : e.length;
          return l ? (t = r || t === i ? 1 : j(t), t = l - t, Wt(e, 0, t < 0 ? 0 : t)) : [];
        }
        function o_(e, t) {
          return e && e.length ? to(e, Y(t, 3), !0, !0) : [];
        }
        function l_(e, t) {
          return e && e.length ? to(e, Y(t, 3), !0) : [];
        }
        function s_(e, t, r, l) {
          var u = e == null ? 0 : e.length;
          return u ? (r && typeof r != "number" && nt(e, t, r) && (r = 0, l = u), $g(e, t, r, l)) : [];
        }
        function Qa(e, t, r) {
          var l = e == null ? 0 : e.length;
          if (!l)
            return -1;
          var u = r == null ? 0 : j(r);
          return u < 0 && (u = Ge(l + u, 0)), Mi(e, Y(t, 3), u);
        }
        function ja(e, t, r) {
          var l = e == null ? 0 : e.length;
          if (!l)
            return -1;
          var u = l - 1;
          return r !== i && (u = j(r), u = r < 0 ? Ge(l + u, 0) : Je(u, l - 1)), Mi(e, Y(t, 3), u, !0);
        }
        function $a(e) {
          var t = e == null ? 0 : e.length;
          return t ? Xe(e, 1) : [];
        }
        function u_(e) {
          var t = e == null ? 0 : e.length;
          return t ? Xe(e, Fe) : [];
        }
        function a_(e, t) {
          var r = e == null ? 0 : e.length;
          return r ? (t = t === i ? 1 : j(t), Xe(e, t)) : [];
        }
        function f_(e) {
          for (var t = -1, r = e == null ? 0 : e.length, l = {}; ++t < r; ) {
            var u = e[t];
            l[u[0]] = u[1];
          }
          return l;
        }
        function ef(e) {
          return e && e.length ? e[0] : i;
        }
        function c_(e, t, r) {
          var l = e == null ? 0 : e.length;
          if (!l)
            return -1;
          var u = r == null ? 0 : j(r);
          return u < 0 && (u = Ge(l + u, 0)), vr(e, t, u);
        }
        function h_(e) {
          var t = e == null ? 0 : e.length;
          return t ? Wt(e, 0, -1) : [];
        }
        var d_ = te(function(e) {
          var t = Ie(e, Il);
          return t.length && t[0] === e[0] ? wl(t) : [];
        }), g_ = te(function(e) {
          var t = Nt(e), r = Ie(e, Il);
          return t === Nt(r) ? t = i : r.pop(), r.length && r[0] === e[0] ? wl(r, Y(t, 2)) : [];
        }), v_ = te(function(e) {
          var t = Nt(e), r = Ie(e, Il);
          return t = typeof t == "function" ? t : i, t && r.pop(), r.length && r[0] === e[0] ? wl(r, i, t) : [];
        });
        function __(e, t) {
          return e == null ? "" : hg.call(e, t);
        }
        function Nt(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : i;
        }
        function p_(e, t, r) {
          var l = e == null ? 0 : e.length;
          if (!l)
            return -1;
          var u = l;
          return r !== i && (u = j(r), u = u < 0 ? Ge(l + u, 0) : Je(u, l - 1)), t === t ? Vd(e, t, u) : Mi(e, Mu, u, !0);
        }
        function m_(e, t) {
          return e && e.length ? ca(e, j(t)) : i;
        }
        var w_ = te(tf);
        function tf(e, t) {
          return e && e.length && t && t.length ? Cl(e, t) : e;
        }
        function b_(e, t, r) {
          return e && e.length && t && t.length ? Cl(e, t, Y(r, 2)) : e;
        }
        function y_(e, t, r) {
          return e && e.length && t && t.length ? Cl(e, t, i, r) : e;
        }
        var x_ = _n(function(e, t) {
          var r = e == null ? 0 : e.length, l = vl(e, t);
          return ga(e, Ie(t, function(u) {
            return pn(u, r) ? +u : u;
          }).sort(Ra)), l;
        });
        function C_(e, t) {
          var r = [];
          if (!(e && e.length))
            return r;
          var l = -1, u = [], h = e.length;
          for (t = Y(t, 3); ++l < h; ) {
            var v = e[l];
            t(v, l, e) && (r.push(v), u.push(l));
          }
          return ga(e, u), r;
        }
        function Ul(e) {
          return e == null ? e : _g.call(e);
        }
        function R_(e, t, r) {
          var l = e == null ? 0 : e.length;
          return l ? (r && typeof r != "number" && nt(e, t, r) ? (t = 0, r = l) : (t = t == null ? 0 : j(t), r = r === i ? l : j(r)), Wt(e, t, r)) : [];
        }
        function S_(e, t) {
          return eo(e, t);
        }
        function E_(e, t, r) {
          return El(e, t, Y(r, 2));
        }
        function T_(e, t) {
          var r = e == null ? 0 : e.length;
          if (r) {
            var l = eo(e, t);
            if (l < r && Vt(e[l], t))
              return l;
          }
          return -1;
        }
        function A_(e, t) {
          return eo(e, t, !0);
        }
        function I_(e, t, r) {
          return El(e, t, Y(r, 2), !0);
        }
        function O_(e, t) {
          var r = e == null ? 0 : e.length;
          if (r) {
            var l = eo(e, t, !0) - 1;
            if (Vt(e[l], t))
              return l;
          }
          return -1;
        }
        function P_(e) {
          return e && e.length ? _a(e) : [];
        }
        function L_(e, t) {
          return e && e.length ? _a(e, Y(t, 2)) : [];
        }
        function F_(e) {
          var t = e == null ? 0 : e.length;
          return t ? Wt(e, 1, t) : [];
        }
        function M_(e, t, r) {
          return e && e.length ? (t = r || t === i ? 1 : j(t), Wt(e, 0, t < 0 ? 0 : t)) : [];
        }
        function D_(e, t, r) {
          var l = e == null ? 0 : e.length;
          return l ? (t = r || t === i ? 1 : j(t), t = l - t, Wt(e, t < 0 ? 0 : t, l)) : [];
        }
        function H_(e, t) {
          return e && e.length ? to(e, Y(t, 3), !1, !0) : [];
        }
        function W_(e, t) {
          return e && e.length ? to(e, Y(t, 3)) : [];
        }
        var N_ = te(function(e) {
          return Mn(Xe(e, 1, Ne, !0));
        }), B_ = te(function(e) {
          var t = Nt(e);
          return Ne(t) && (t = i), Mn(Xe(e, 1, Ne, !0), Y(t, 2));
        }), k_ = te(function(e) {
          var t = Nt(e);
          return t = typeof t == "function" ? t : i, Mn(Xe(e, 1, Ne, !0), i, t);
        });
        function q_(e) {
          return e && e.length ? Mn(e) : [];
        }
        function z_(e, t) {
          return e && e.length ? Mn(e, Y(t, 2)) : [];
        }
        function U_(e, t) {
          return t = typeof t == "function" ? t : i, e && e.length ? Mn(e, i, t) : [];
        }
        function Gl(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = In(e, function(r) {
            if (Ne(r))
              return t = Ge(r.length, t), !0;
          }), sl(t, function(r) {
            return Ie(e, il(r));
          });
        }
        function nf(e, t) {
          if (!(e && e.length))
            return [];
          var r = Gl(e);
          return t == null ? r : Ie(r, function(l) {
            return yt(t, i, l);
          });
        }
        var G_ = te(function(e, t) {
          return Ne(e) ? ri(e, t) : [];
        }), K_ = te(function(e) {
          return Al(In(e, Ne));
        }), Y_ = te(function(e) {
          var t = Nt(e);
          return Ne(t) && (t = i), Al(In(e, Ne), Y(t, 2));
        }), X_ = te(function(e) {
          var t = Nt(e);
          return t = typeof t == "function" ? t : i, Al(In(e, Ne), i, t);
        }), Z_ = te(Gl);
        function J_(e, t) {
          return ba(e || [], t || [], ni);
        }
        function V_(e, t) {
          return ba(e || [], t || [], li);
        }
        var Q_ = te(function(e) {
          var t = e.length, r = t > 1 ? e[t - 1] : i;
          return r = typeof r == "function" ? (e.pop(), r) : i, nf(e, r);
        });
        function rf(e) {
          var t = c(e);
          return t.__chain__ = !0, t;
        }
        function j_(e, t) {
          return t(e), e;
        }
        function fo(e, t) {
          return t(e);
        }
        var $_ = _n(function(e) {
          var t = e.length, r = t ? e[0] : 0, l = this.__wrapped__, u = function(h) {
            return vl(h, e);
          };
          return t > 1 || this.__actions__.length || !(l instanceof ie) || !pn(r) ? this.thru(u) : (l = l.slice(r, +r + (t ? 1 : 0)), l.__actions__.push({
            func: fo,
            args: [u],
            thisArg: i
          }), new Dt(l, this.__chain__).thru(function(h) {
            return t && !h.length && h.push(i), h;
          }));
        });
        function ep() {
          return rf(this);
        }
        function tp() {
          return new Dt(this.value(), this.__chain__);
        }
        function np() {
          this.__values__ === i && (this.__values__ = mf(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function rp() {
          return this;
        }
        function ip(e) {
          for (var t, r = this; r instanceof Ji; ) {
            var l = Va(r);
            l.__index__ = 0, l.__values__ = i, t ? u.__wrapped__ = l : t = l;
            var u = l;
            r = r.__wrapped__;
          }
          return u.__wrapped__ = e, t;
        }
        function op() {
          var e = this.__wrapped__;
          if (e instanceof ie) {
            var t = e;
            return this.__actions__.length && (t = new ie(this)), t = t.reverse(), t.__actions__.push({
              func: fo,
              args: [Ul],
              thisArg: i
            }), new Dt(t, this.__chain__);
          }
          return this.thru(Ul);
        }
        function lp() {
          return wa(this.__wrapped__, this.__actions__);
        }
        var sp = no(function(e, t, r) {
          pe.call(e, r) ? ++e[r] : gn(e, r, 1);
        });
        function up(e, t, r) {
          var l = Q(e) ? Lu : jg;
          return r && nt(e, t, r) && (t = i), l(e, Y(t, 3));
        }
        function ap(e, t) {
          var r = Q(e) ? In : na;
          return r(e, Y(t, 3));
        }
        var fp = Oa(Qa), cp = Oa(ja);
        function hp(e, t) {
          return Xe(co(e, t), 1);
        }
        function dp(e, t) {
          return Xe(co(e, t), Fe);
        }
        function gp(e, t, r) {
          return r = r === i ? 1 : j(r), Xe(co(e, t), r);
        }
        function of(e, t) {
          var r = Q(e) ? Ft : Fn;
          return r(e, Y(t, 3));
        }
        function lf(e, t) {
          var r = Q(e) ? Fd : ta;
          return r(e, Y(t, 3));
        }
        var vp = no(function(e, t, r) {
          pe.call(e, r) ? e[r].push(t) : gn(e, r, [t]);
        });
        function _p(e, t, r, l) {
          e = ut(e) ? e : Tr(e), r = r && !l ? j(r) : 0;
          var u = e.length;
          return r < 0 && (r = Ge(u + r, 0)), po(e) ? r <= u && e.indexOf(t, r) > -1 : !!u && vr(e, t, r) > -1;
        }
        var pp = te(function(e, t, r) {
          var l = -1, u = typeof t == "function", h = ut(e) ? R(e.length) : [];
          return Fn(e, function(v) {
            h[++l] = u ? yt(t, v, r) : ii(v, t, r);
          }), h;
        }), mp = no(function(e, t, r) {
          gn(e, r, t);
        });
        function co(e, t) {
          var r = Q(e) ? Ie : ua;
          return r(e, Y(t, 3));
        }
        function wp(e, t, r, l) {
          return e == null ? [] : (Q(t) || (t = t == null ? [] : [t]), r = l ? i : r, Q(r) || (r = r == null ? [] : [r]), ha(e, t, r));
        }
        var bp = no(function(e, t, r) {
          e[r ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function yp(e, t, r) {
          var l = Q(e) ? nl : Hu, u = arguments.length < 3;
          return l(e, Y(t, 4), r, u, Fn);
        }
        function xp(e, t, r) {
          var l = Q(e) ? Md : Hu, u = arguments.length < 3;
          return l(e, Y(t, 4), r, u, ta);
        }
        function Cp(e, t) {
          var r = Q(e) ? In : na;
          return r(e, vo(Y(t, 3)));
        }
        function Rp(e) {
          var t = Q(e) ? Qu : _v;
          return t(e);
        }
        function Sp(e, t, r) {
          (r ? nt(e, t, r) : t === i) ? t = 1 : t = j(t);
          var l = Q(e) ? Xg : pv;
          return l(e, t);
        }
        function Ep(e) {
          var t = Q(e) ? Zg : wv;
          return t(e);
        }
        function Tp(e) {
          if (e == null)
            return 0;
          if (ut(e))
            return po(e) ? pr(e) : e.length;
          var t = Ve(e);
          return t == Yt || t == Xt ? e.size : yl(e).length;
        }
        function Ap(e, t, r) {
          var l = Q(e) ? rl : bv;
          return r && nt(e, t, r) && (t = i), l(e, Y(t, 3));
        }
        var Ip = te(function(e, t) {
          if (e == null)
            return [];
          var r = t.length;
          return r > 1 && nt(e, t[0], t[1]) ? t = [] : r > 2 && nt(t[0], t[1], t[2]) && (t = [t[0]]), ha(e, Xe(t, 1), []);
        }), ho = ag || function() {
          return Ye.Date.now();
        };
        function Op(e, t) {
          if (typeof t != "function")
            throw new Mt(d);
          return e = j(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function sf(e, t, r) {
          return t = r ? i : t, t = e && t == null ? e.length : t, vn(e, q, i, i, i, i, t);
        }
        function uf(e, t) {
          var r;
          if (typeof t != "function")
            throw new Mt(d);
          return e = j(e), function() {
            return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = i), r;
          };
        }
        var Kl = te(function(e, t, r) {
          var l = M;
          if (r.length) {
            var u = Pn(r, Sr(Kl));
            l |= K;
          }
          return vn(e, l, t, r, u);
        }), af = te(function(e, t, r) {
          var l = M | D;
          if (r.length) {
            var u = Pn(r, Sr(af));
            l |= K;
          }
          return vn(t, l, e, r, u);
        });
        function ff(e, t, r) {
          t = r ? i : t;
          var l = vn(e, G, i, i, i, i, i, t);
          return l.placeholder = ff.placeholder, l;
        }
        function cf(e, t, r) {
          t = r ? i : t;
          var l = vn(e, J, i, i, i, i, i, t);
          return l.placeholder = cf.placeholder, l;
        }
        function hf(e, t, r) {
          var l, u, h, v, w, x, T = 0, A = !1, P = !1, N = !0;
          if (typeof e != "function")
            throw new Mt(d);
          t = Bt(t) || 0, Oe(r) && (A = !!r.leading, P = "maxWait" in r, h = P ? Ge(Bt(r.maxWait) || 0, t) : h, N = "trailing" in r ? !!r.trailing : N);
          function z(Be) {
            var Qt = l, bn = u;
            return l = u = i, T = Be, v = e.apply(bn, Qt), v;
          }
          function X(Be) {
            return T = Be, w = ai(re, t), A ? z(Be) : v;
          }
          function ee(Be) {
            var Qt = Be - x, bn = Be - T, Pf = t - Qt;
            return P ? Je(Pf, h - bn) : Pf;
          }
          function Z(Be) {
            var Qt = Be - x, bn = Be - T;
            return x === i || Qt >= t || Qt < 0 || P && bn >= h;
          }
          function re() {
            var Be = ho();
            if (Z(Be))
              return oe(Be);
            w = ai(re, ee(Be));
          }
          function oe(Be) {
            return w = i, N && l ? z(Be) : (l = u = i, v);
          }
          function St() {
            w !== i && ya(w), T = 0, l = x = u = w = i;
          }
          function rt() {
            return w === i ? v : oe(ho());
          }
          function Et() {
            var Be = ho(), Qt = Z(Be);
            if (l = arguments, u = this, x = Be, Qt) {
              if (w === i)
                return X(x);
              if (P)
                return ya(w), w = ai(re, t), z(x);
            }
            return w === i && (w = ai(re, t)), v;
          }
          return Et.cancel = St, Et.flush = rt, Et;
        }
        var Pp = te(function(e, t) {
          return ea(e, 1, t);
        }), Lp = te(function(e, t, r) {
          return ea(e, Bt(t) || 0, r);
        });
        function Fp(e) {
          return vn(e, $);
        }
        function go(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new Mt(d);
          var r = function() {
            var l = arguments, u = t ? t.apply(this, l) : l[0], h = r.cache;
            if (h.has(u))
              return h.get(u);
            var v = e.apply(this, l);
            return r.cache = h.set(u, v) || h, v;
          };
          return r.cache = new (go.Cache || dn)(), r;
        }
        go.Cache = dn;
        function vo(e) {
          if (typeof e != "function")
            throw new Mt(d);
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, t[0]);
              case 2:
                return !e.call(this, t[0], t[1]);
              case 3:
                return !e.call(this, t[0], t[1], t[2]);
            }
            return !e.apply(this, t);
          };
        }
        function Mp(e) {
          return uf(2, e);
        }
        var Dp = yv(function(e, t) {
          t = t.length == 1 && Q(t[0]) ? Ie(t[0], xt(Y())) : Ie(Xe(t, 1), xt(Y()));
          var r = t.length;
          return te(function(l) {
            for (var u = -1, h = Je(l.length, r); ++u < h; )
              l[u] = t[u].call(this, l[u]);
            return yt(e, this, l);
          });
        }), Yl = te(function(e, t) {
          var r = Pn(t, Sr(Yl));
          return vn(e, K, i, t, r);
        }), df = te(function(e, t) {
          var r = Pn(t, Sr(df));
          return vn(e, U, i, t, r);
        }), Hp = _n(function(e, t) {
          return vn(e, de, i, i, i, t);
        });
        function Wp(e, t) {
          if (typeof e != "function")
            throw new Mt(d);
          return t = t === i ? t : j(t), te(e, t);
        }
        function Np(e, t) {
          if (typeof e != "function")
            throw new Mt(d);
          return t = t == null ? 0 : Ge(j(t), 0), te(function(r) {
            var l = r[t], u = Hn(r, 0, t);
            return l && On(u, l), yt(e, this, u);
          });
        }
        function Bp(e, t, r) {
          var l = !0, u = !0;
          if (typeof e != "function")
            throw new Mt(d);
          return Oe(r) && (l = "leading" in r ? !!r.leading : l, u = "trailing" in r ? !!r.trailing : u), hf(e, t, {
            leading: l,
            maxWait: t,
            trailing: u
          });
        }
        function kp(e) {
          return sf(e, 1);
        }
        function qp(e, t) {
          return Yl(Ol(t), e);
        }
        function zp() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return Q(e) ? e : [e];
        }
        function Up(e) {
          return Ht(e, O);
        }
        function Gp(e, t) {
          return t = typeof t == "function" ? t : i, Ht(e, O, t);
        }
        function Kp(e) {
          return Ht(e, C | O);
        }
        function Yp(e, t) {
          return t = typeof t == "function" ? t : i, Ht(e, C | O, t);
        }
        function Xp(e, t) {
          return t == null || $u(e, t, Ke(t));
        }
        function Vt(e, t) {
          return e === t || e !== e && t !== t;
        }
        var Zp = lo(ml), Jp = lo(function(e, t) {
          return e >= t;
        }), jn = oa(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? oa : function(e) {
          return Me(e) && pe.call(e, "callee") && !Ku.call(e, "callee");
        }, Q = R.isArray, Vp = Eu ? xt(Eu) : iv;
        function ut(e) {
          return e != null && _o(e.length) && !mn(e);
        }
        function Ne(e) {
          return Me(e) && ut(e);
        }
        function Qp(e) {
          return e === !0 || e === !1 || Me(e) && tt(e) == Ur;
        }
        var Wn = cg || rs, jp = Tu ? xt(Tu) : ov;
        function $p(e) {
          return Me(e) && e.nodeType === 1 && !fi(e);
        }
        function e0(e) {
          if (e == null)
            return !0;
          if (ut(e) && (Q(e) || typeof e == "string" || typeof e.splice == "function" || Wn(e) || Er(e) || jn(e)))
            return !e.length;
          var t = Ve(e);
          if (t == Yt || t == Xt)
            return !e.size;
          if (ui(e))
            return !yl(e).length;
          for (var r in e)
            if (pe.call(e, r))
              return !1;
          return !0;
        }
        function t0(e, t) {
          return oi(e, t);
        }
        function n0(e, t, r) {
          r = typeof r == "function" ? r : i;
          var l = r ? r(e, t) : i;
          return l === i ? oi(e, t, i, r) : !!l;
        }
        function Xl(e) {
          if (!Me(e))
            return !1;
          var t = tt(e);
          return t == Ti || t == Sh || typeof e.message == "string" && typeof e.name == "string" && !fi(e);
        }
        function r0(e) {
          return typeof e == "number" && Xu(e);
        }
        function mn(e) {
          if (!Oe(e))
            return !1;
          var t = tt(e);
          return t == Ai || t == eu || t == Rh || t == Th;
        }
        function gf(e) {
          return typeof e == "number" && e == j(e);
        }
        function _o(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lt;
        }
        function Oe(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function Me(e) {
          return e != null && typeof e == "object";
        }
        var vf = Au ? xt(Au) : sv;
        function i0(e, t) {
          return e === t || bl(e, t, Wl(t));
        }
        function o0(e, t, r) {
          return r = typeof r == "function" ? r : i, bl(e, t, Wl(t), r);
        }
        function l0(e) {
          return _f(e) && e != +e;
        }
        function s0(e) {
          if (Gv(e))
            throw new V(f);
          return la(e);
        }
        function u0(e) {
          return e === null;
        }
        function a0(e) {
          return e == null;
        }
        function _f(e) {
          return typeof e == "number" || Me(e) && tt(e) == Kr;
        }
        function fi(e) {
          if (!Me(e) || tt(e) != cn)
            return !1;
          var t = zi(e);
          if (t === null)
            return !0;
          var r = pe.call(t, "constructor") && t.constructor;
          return typeof r == "function" && r instanceof r && Ni.call(r) == og;
        }
        var Zl = Iu ? xt(Iu) : uv;
        function f0(e) {
          return gf(e) && e >= -lt && e <= lt;
        }
        var pf = Ou ? xt(Ou) : av;
        function po(e) {
          return typeof e == "string" || !Q(e) && Me(e) && tt(e) == Xr;
        }
        function Rt(e) {
          return typeof e == "symbol" || Me(e) && tt(e) == Ii;
        }
        var Er = Pu ? xt(Pu) : fv;
        function c0(e) {
          return e === i;
        }
        function h0(e) {
          return Me(e) && Ve(e) == Zr;
        }
        function d0(e) {
          return Me(e) && tt(e) == Ih;
        }
        var g0 = lo(xl), v0 = lo(function(e, t) {
          return e <= t;
        });
        function mf(e) {
          if (!e)
            return [];
          if (ut(e))
            return po(e) ? Zt(e) : st(e);
          if (Qr && e[Qr])
            return Xd(e[Qr]());
          var t = Ve(e), r = t == Yt ? al : t == Xt ? Di : Tr;
          return r(e);
        }
        function wn(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Bt(e), e === Fe || e === -Fe) {
            var t = e < 0 ? -1 : 1;
            return t * bt;
          }
          return e === e ? e : 0;
        }
        function j(e) {
          var t = wn(e), r = t % 1;
          return t === t ? r ? t - r : t : 0;
        }
        function wf(e) {
          return e ? Zn(j(e), 0, ye) : 0;
        }
        function Bt(e) {
          if (typeof e == "number")
            return e;
          if (Rt(e))
            return Pt;
          if (Oe(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Oe(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Wu(e);
          var r = Vh.test(e);
          return r || jh.test(e) ? Od(e.slice(2), r ? 2 : 8) : Jh.test(e) ? Pt : +e;
        }
        function bf(e) {
          return tn(e, at(e));
        }
        function _0(e) {
          return e ? Zn(j(e), -lt, lt) : e === 0 ? e : 0;
        }
        function ge(e) {
          return e == null ? "" : Ct(e);
        }
        var p0 = Cr(function(e, t) {
          if (ui(t) || ut(t)) {
            tn(t, Ke(t), e);
            return;
          }
          for (var r in t)
            pe.call(t, r) && ni(e, r, t[r]);
        }), yf = Cr(function(e, t) {
          tn(t, at(t), e);
        }), mo = Cr(function(e, t, r, l) {
          tn(t, at(t), e, l);
        }), m0 = Cr(function(e, t, r, l) {
          tn(t, Ke(t), e, l);
        }), w0 = _n(vl);
        function b0(e, t) {
          var r = xr(e);
          return t == null ? r : ju(r, t);
        }
        var y0 = te(function(e, t) {
          e = xe(e);
          var r = -1, l = t.length, u = l > 2 ? t[2] : i;
          for (u && nt(t[0], t[1], u) && (l = 1); ++r < l; )
            for (var h = t[r], v = at(h), w = -1, x = v.length; ++w < x; ) {
              var T = v[w], A = e[T];
              (A === i || Vt(A, wr[T]) && !pe.call(e, T)) && (e[T] = h[T]);
            }
          return e;
        }), x0 = te(function(e) {
          return e.push(i, Wa), yt(xf, i, e);
        });
        function C0(e, t) {
          return Fu(e, Y(t, 3), en);
        }
        function R0(e, t) {
          return Fu(e, Y(t, 3), pl);
        }
        function S0(e, t) {
          return e == null ? e : _l(e, Y(t, 3), at);
        }
        function E0(e, t) {
          return e == null ? e : ra(e, Y(t, 3), at);
        }
        function T0(e, t) {
          return e && en(e, Y(t, 3));
        }
        function A0(e, t) {
          return e && pl(e, Y(t, 3));
        }
        function I0(e) {
          return e == null ? [] : ji(e, Ke(e));
        }
        function O0(e) {
          return e == null ? [] : ji(e, at(e));
        }
        function Jl(e, t, r) {
          var l = e == null ? i : Jn(e, t);
          return l === i ? r : l;
        }
        function P0(e, t) {
          return e != null && ka(e, t, ev);
        }
        function Vl(e, t) {
          return e != null && ka(e, t, tv);
        }
        var L0 = La(function(e, t, r) {
          t != null && typeof t.toString != "function" && (t = Bi.call(t)), e[t] = r;
        }, jl(ft)), F0 = La(function(e, t, r) {
          t != null && typeof t.toString != "function" && (t = Bi.call(t)), pe.call(e, t) ? e[t].push(r) : e[t] = [r];
        }, Y), M0 = te(ii);
        function Ke(e) {
          return ut(e) ? Vu(e) : yl(e);
        }
        function at(e) {
          return ut(e) ? Vu(e, !0) : cv(e);
        }
        function D0(e, t) {
          var r = {};
          return t = Y(t, 3), en(e, function(l, u, h) {
            gn(r, t(l, u, h), l);
          }), r;
        }
        function H0(e, t) {
          var r = {};
          return t = Y(t, 3), en(e, function(l, u, h) {
            gn(r, u, t(l, u, h));
          }), r;
        }
        var W0 = Cr(function(e, t, r) {
          $i(e, t, r);
        }), xf = Cr(function(e, t, r, l) {
          $i(e, t, r, l);
        }), N0 = _n(function(e, t) {
          var r = {};
          if (e == null)
            return r;
          var l = !1;
          t = Ie(t, function(h) {
            return h = Dn(h, e), l || (l = h.length > 1), h;
          }), tn(e, Dl(e), r), l && (r = Ht(r, C | S | O, Lv));
          for (var u = t.length; u--; )
            Tl(r, t[u]);
          return r;
        });
        function B0(e, t) {
          return Cf(e, vo(Y(t)));
        }
        var k0 = _n(function(e, t) {
          return e == null ? {} : dv(e, t);
        });
        function Cf(e, t) {
          if (e == null)
            return {};
          var r = Ie(Dl(e), function(l) {
            return [l];
          });
          return t = Y(t), da(e, r, function(l, u) {
            return t(l, u[0]);
          });
        }
        function q0(e, t, r) {
          t = Dn(t, e);
          var l = -1, u = t.length;
          for (u || (u = 1, e = i); ++l < u; ) {
            var h = e == null ? i : e[nn(t[l])];
            h === i && (l = u, h = r), e = mn(h) ? h.call(e) : h;
          }
          return e;
        }
        function z0(e, t, r) {
          return e == null ? e : li(e, t, r);
        }
        function U0(e, t, r, l) {
          return l = typeof l == "function" ? l : i, e == null ? e : li(e, t, r, l);
        }
        var Rf = Da(Ke), Sf = Da(at);
        function G0(e, t, r) {
          var l = Q(e), u = l || Wn(e) || Er(e);
          if (t = Y(t, 4), r == null) {
            var h = e && e.constructor;
            u ? r = l ? new h() : [] : Oe(e) ? r = mn(h) ? xr(zi(e)) : {} : r = {};
          }
          return (u ? Ft : en)(e, function(v, w, x) {
            return t(r, v, w, x);
          }), r;
        }
        function K0(e, t) {
          return e == null ? !0 : Tl(e, t);
        }
        function Y0(e, t, r) {
          return e == null ? e : ma(e, t, Ol(r));
        }
        function X0(e, t, r, l) {
          return l = typeof l == "function" ? l : i, e == null ? e : ma(e, t, Ol(r), l);
        }
        function Tr(e) {
          return e == null ? [] : ul(e, Ke(e));
        }
        function Z0(e) {
          return e == null ? [] : ul(e, at(e));
        }
        function J0(e, t, r) {
          return r === i && (r = t, t = i), r !== i && (r = Bt(r), r = r === r ? r : 0), t !== i && (t = Bt(t), t = t === t ? t : 0), Zn(Bt(e), t, r);
        }
        function V0(e, t, r) {
          return t = wn(t), r === i ? (r = t, t = 0) : r = wn(r), e = Bt(e), nv(e, t, r);
        }
        function Q0(e, t, r) {
          if (r && typeof r != "boolean" && nt(e, t, r) && (t = r = i), r === i && (typeof t == "boolean" ? (r = t, t = i) : typeof e == "boolean" && (r = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = wn(e), t === i ? (t = e, e = 0) : t = wn(t)), e > t) {
            var l = e;
            e = t, t = l;
          }
          if (r || e % 1 || t % 1) {
            var u = Zu();
            return Je(e + u * (t - e + Id("1e-" + ((u + "").length - 1))), t);
          }
          return Rl(e, t);
        }
        var j0 = Rr(function(e, t, r) {
          return t = t.toLowerCase(), e + (r ? Ef(t) : t);
        });
        function Ef(e) {
          return Ql(ge(e).toLowerCase());
        }
        function Tf(e) {
          return e = ge(e), e && e.replace(ed, zd).replace(wd, "");
        }
        function $0(e, t, r) {
          e = ge(e), t = Ct(t);
          var l = e.length;
          r = r === i ? l : Zn(j(r), 0, l);
          var u = r;
          return r -= t.length, r >= 0 && e.slice(r, u) == t;
        }
        function em(e) {
          return e = ge(e), e && Mh.test(e) ? e.replace(ru, Ud) : e;
        }
        function tm(e) {
          return e = ge(e), e && kh.test(e) ? e.replace(Yo, "\\$&") : e;
        }
        var nm = Rr(function(e, t, r) {
          return e + (r ? "-" : "") + t.toLowerCase();
        }), rm = Rr(function(e, t, r) {
          return e + (r ? " " : "") + t.toLowerCase();
        }), im = Ia("toLowerCase");
        function om(e, t, r) {
          e = ge(e), t = j(t);
          var l = t ? pr(e) : 0;
          if (!t || l >= t)
            return e;
          var u = (t - l) / 2;
          return oo(Yi(u), r) + e + oo(Ki(u), r);
        }
        function lm(e, t, r) {
          e = ge(e), t = j(t);
          var l = t ? pr(e) : 0;
          return t && l < t ? e + oo(t - l, r) : e;
        }
        function sm(e, t, r) {
          e = ge(e), t = j(t);
          var l = t ? pr(e) : 0;
          return t && l < t ? oo(t - l, r) + e : e;
        }
        function um(e, t, r) {
          return r || t == null ? t = 0 : t && (t = +t), vg(ge(e).replace(Xo, ""), t || 0);
        }
        function am(e, t, r) {
          return (r ? nt(e, t, r) : t === i) ? t = 1 : t = j(t), Sl(ge(e), t);
        }
        function fm() {
          var e = arguments, t = ge(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var cm = Rr(function(e, t, r) {
          return e + (r ? "_" : "") + t.toLowerCase();
        });
        function hm(e, t, r) {
          return r && typeof r != "number" && nt(e, t, r) && (t = r = i), r = r === i ? ye : r >>> 0, r ? (e = ge(e), e && (typeof t == "string" || t != null && !Zl(t)) && (t = Ct(t), !t && _r(e)) ? Hn(Zt(e), 0, r) : e.split(t, r)) : [];
        }
        var dm = Rr(function(e, t, r) {
          return e + (r ? " " : "") + Ql(t);
        });
        function gm(e, t, r) {
          return e = ge(e), r = r == null ? 0 : Zn(j(r), 0, e.length), t = Ct(t), e.slice(r, r + t.length) == t;
        }
        function vm(e, t, r) {
          var l = c.templateSettings;
          r && nt(e, t, r) && (t = i), e = ge(e), t = mo({}, t, l, Ha);
          var u = mo({}, t.imports, l.imports, Ha), h = Ke(u), v = ul(u, h), w, x, T = 0, A = t.interpolate || Oi, P = "__p += '", N = fl(
            (t.escape || Oi).source + "|" + A.source + "|" + (A === iu ? Zh : Oi).source + "|" + (t.evaluate || Oi).source + "|$",
            "g"
          ), z = "//# sourceURL=" + (pe.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Rd + "]") + `
`;
          e.replace(N, function(Z, re, oe, St, rt, Et) {
            return oe || (oe = St), P += e.slice(T, Et).replace(td, Gd), re && (w = !0, P += `' +
__e(` + re + `) +
'`), rt && (x = !0, P += `';
` + rt + `;
__p += '`), oe && (P += `' +
((__t = (` + oe + `)) == null ? '' : __t) +
'`), T = Et + Z.length, Z;
          }), P += `';
`;
          var X = pe.call(t, "variable") && t.variable;
          if (!X)
            P = `with (obj) {
` + P + `
}
`;
          else if (Yh.test(X))
            throw new V(_);
          P = (x ? P.replace(Oh, "") : P).replace(Ph, "$1").replace(Lh, "$1;"), P = "function(" + (X || "obj") + `) {
` + (X ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
          var ee = If(function() {
            return ce(h, z + "return " + P).apply(i, v);
          });
          if (ee.source = P, Xl(ee))
            throw ee;
          return ee;
        }
        function _m(e) {
          return ge(e).toLowerCase();
        }
        function pm(e) {
          return ge(e).toUpperCase();
        }
        function mm(e, t, r) {
          if (e = ge(e), e && (r || t === i))
            return Wu(e);
          if (!e || !(t = Ct(t)))
            return e;
          var l = Zt(e), u = Zt(t), h = Nu(l, u), v = Bu(l, u) + 1;
          return Hn(l, h, v).join("");
        }
        function wm(e, t, r) {
          if (e = ge(e), e && (r || t === i))
            return e.slice(0, qu(e) + 1);
          if (!e || !(t = Ct(t)))
            return e;
          var l = Zt(e), u = Bu(l, Zt(t)) + 1;
          return Hn(l, 0, u).join("");
        }
        function bm(e, t, r) {
          if (e = ge(e), e && (r || t === i))
            return e.replace(Xo, "");
          if (!e || !(t = Ct(t)))
            return e;
          var l = Zt(e), u = Nu(l, Zt(t));
          return Hn(l, u).join("");
        }
        function ym(e, t) {
          var r = Te, l = Ae;
          if (Oe(t)) {
            var u = "separator" in t ? t.separator : u;
            r = "length" in t ? j(t.length) : r, l = "omission" in t ? Ct(t.omission) : l;
          }
          e = ge(e);
          var h = e.length;
          if (_r(e)) {
            var v = Zt(e);
            h = v.length;
          }
          if (r >= h)
            return e;
          var w = r - pr(l);
          if (w < 1)
            return l;
          var x = v ? Hn(v, 0, w).join("") : e.slice(0, w);
          if (u === i)
            return x + l;
          if (v && (w += x.length - w), Zl(u)) {
            if (e.slice(w).search(u)) {
              var T, A = x;
              for (u.global || (u = fl(u.source, ge(ou.exec(u)) + "g")), u.lastIndex = 0; T = u.exec(A); )
                var P = T.index;
              x = x.slice(0, P === i ? w : P);
            }
          } else if (e.indexOf(Ct(u), w) != w) {
            var N = x.lastIndexOf(u);
            N > -1 && (x = x.slice(0, N));
          }
          return x + l;
        }
        function xm(e) {
          return e = ge(e), e && Fh.test(e) ? e.replace(nu, Qd) : e;
        }
        var Cm = Rr(function(e, t, r) {
          return e + (r ? " " : "") + t.toUpperCase();
        }), Ql = Ia("toUpperCase");
        function Af(e, t, r) {
          return e = ge(e), t = r ? i : t, t === i ? Yd(e) ? eg(e) : Wd(e) : e.match(t) || [];
        }
        var If = te(function(e, t) {
          try {
            return yt(e, i, t);
          } catch (r) {
            return Xl(r) ? r : new V(r);
          }
        }), Rm = _n(function(e, t) {
          return Ft(t, function(r) {
            r = nn(r), gn(e, r, Kl(e[r], e));
          }), e;
        });
        function Sm(e) {
          var t = e == null ? 0 : e.length, r = Y();
          return e = t ? Ie(e, function(l) {
            if (typeof l[1] != "function")
              throw new Mt(d);
            return [r(l[0]), l[1]];
          }) : [], te(function(l) {
            for (var u = -1; ++u < t; ) {
              var h = e[u];
              if (yt(h[0], this, l))
                return yt(h[1], this, l);
            }
          });
        }
        function Em(e) {
          return Qg(Ht(e, C));
        }
        function jl(e) {
          return function() {
            return e;
          };
        }
        function Tm(e, t) {
          return e == null || e !== e ? t : e;
        }
        var Am = Pa(), Im = Pa(!0);
        function ft(e) {
          return e;
        }
        function $l(e) {
          return sa(typeof e == "function" ? e : Ht(e, C));
        }
        function Om(e) {
          return aa(Ht(e, C));
        }
        function Pm(e, t) {
          return fa(e, Ht(t, C));
        }
        var Lm = te(function(e, t) {
          return function(r) {
            return ii(r, e, t);
          };
        }), Fm = te(function(e, t) {
          return function(r) {
            return ii(e, r, t);
          };
        });
        function es(e, t, r) {
          var l = Ke(t), u = ji(t, l);
          r == null && !(Oe(t) && (u.length || !l.length)) && (r = t, t = e, e = this, u = ji(t, Ke(t)));
          var h = !(Oe(r) && "chain" in r) || !!r.chain, v = mn(e);
          return Ft(u, function(w) {
            var x = t[w];
            e[w] = x, v && (e.prototype[w] = function() {
              var T = this.__chain__;
              if (h || T) {
                var A = e(this.__wrapped__), P = A.__actions__ = st(this.__actions__);
                return P.push({ func: x, args: arguments, thisArg: e }), A.__chain__ = T, A;
              }
              return x.apply(e, On([this.value()], arguments));
            });
          }), e;
        }
        function Mm() {
          return Ye._ === this && (Ye._ = lg), this;
        }
        function ts() {
        }
        function Dm(e) {
          return e = j(e), te(function(t) {
            return ca(t, e);
          });
        }
        var Hm = Ll(Ie), Wm = Ll(Lu), Nm = Ll(rl);
        function Of(e) {
          return Bl(e) ? il(nn(e)) : gv(e);
        }
        function Bm(e) {
          return function(t) {
            return e == null ? i : Jn(e, t);
          };
        }
        var km = Fa(), qm = Fa(!0);
        function ns() {
          return [];
        }
        function rs() {
          return !1;
        }
        function zm() {
          return {};
        }
        function Um() {
          return "";
        }
        function Gm() {
          return !0;
        }
        function Km(e, t) {
          if (e = j(e), e < 1 || e > lt)
            return [];
          var r = ye, l = Je(e, ye);
          t = Y(t), e -= ye;
          for (var u = sl(l, t); ++r < e; )
            t(r);
          return u;
        }
        function Ym(e) {
          return Q(e) ? Ie(e, nn) : Rt(e) ? [e] : st(Ja(ge(e)));
        }
        function Xm(e) {
          var t = ++ig;
          return ge(e) + t;
        }
        var Zm = io(function(e, t) {
          return e + t;
        }, 0), Jm = Fl("ceil"), Vm = io(function(e, t) {
          return e / t;
        }, 1), Qm = Fl("floor");
        function jm(e) {
          return e && e.length ? Qi(e, ft, ml) : i;
        }
        function $m(e, t) {
          return e && e.length ? Qi(e, Y(t, 2), ml) : i;
        }
        function ew(e) {
          return Du(e, ft);
        }
        function tw(e, t) {
          return Du(e, Y(t, 2));
        }
        function nw(e) {
          return e && e.length ? Qi(e, ft, xl) : i;
        }
        function rw(e, t) {
          return e && e.length ? Qi(e, Y(t, 2), xl) : i;
        }
        var iw = io(function(e, t) {
          return e * t;
        }, 1), ow = Fl("round"), lw = io(function(e, t) {
          return e - t;
        }, 0);
        function sw(e) {
          return e && e.length ? ll(e, ft) : 0;
        }
        function uw(e, t) {
          return e && e.length ? ll(e, Y(t, 2)) : 0;
        }
        return c.after = Op, c.ary = sf, c.assign = p0, c.assignIn = yf, c.assignInWith = mo, c.assignWith = m0, c.at = w0, c.before = uf, c.bind = Kl, c.bindAll = Rm, c.bindKey = af, c.castArray = zp, c.chain = rf, c.chunk = Qv, c.compact = jv, c.concat = $v, c.cond = Sm, c.conforms = Em, c.constant = jl, c.countBy = sp, c.create = b0, c.curry = ff, c.curryRight = cf, c.debounce = hf, c.defaults = y0, c.defaultsDeep = x0, c.defer = Pp, c.delay = Lp, c.difference = e_, c.differenceBy = t_, c.differenceWith = n_, c.drop = r_, c.dropRight = i_, c.dropRightWhile = o_, c.dropWhile = l_, c.fill = s_, c.filter = ap, c.flatMap = hp, c.flatMapDeep = dp, c.flatMapDepth = gp, c.flatten = $a, c.flattenDeep = u_, c.flattenDepth = a_, c.flip = Fp, c.flow = Am, c.flowRight = Im, c.fromPairs = f_, c.functions = I0, c.functionsIn = O0, c.groupBy = vp, c.initial = h_, c.intersection = d_, c.intersectionBy = g_, c.intersectionWith = v_, c.invert = L0, c.invertBy = F0, c.invokeMap = pp, c.iteratee = $l, c.keyBy = mp, c.keys = Ke, c.keysIn = at, c.map = co, c.mapKeys = D0, c.mapValues = H0, c.matches = Om, c.matchesProperty = Pm, c.memoize = go, c.merge = W0, c.mergeWith = xf, c.method = Lm, c.methodOf = Fm, c.mixin = es, c.negate = vo, c.nthArg = Dm, c.omit = N0, c.omitBy = B0, c.once = Mp, c.orderBy = wp, c.over = Hm, c.overArgs = Dp, c.overEvery = Wm, c.overSome = Nm, c.partial = Yl, c.partialRight = df, c.partition = bp, c.pick = k0, c.pickBy = Cf, c.property = Of, c.propertyOf = Bm, c.pull = w_, c.pullAll = tf, c.pullAllBy = b_, c.pullAllWith = y_, c.pullAt = x_, c.range = km, c.rangeRight = qm, c.rearg = Hp, c.reject = Cp, c.remove = C_, c.rest = Wp, c.reverse = Ul, c.sampleSize = Sp, c.set = z0, c.setWith = U0, c.shuffle = Ep, c.slice = R_, c.sortBy = Ip, c.sortedUniq = P_, c.sortedUniqBy = L_, c.split = hm, c.spread = Np, c.tail = F_, c.take = M_, c.takeRight = D_, c.takeRightWhile = H_, c.takeWhile = W_, c.tap = j_, c.throttle = Bp, c.thru = fo, c.toArray = mf, c.toPairs = Rf, c.toPairsIn = Sf, c.toPath = Ym, c.toPlainObject = bf, c.transform = G0, c.unary = kp, c.union = N_, c.unionBy = B_, c.unionWith = k_, c.uniq = q_, c.uniqBy = z_, c.uniqWith = U_, c.unset = K0, c.unzip = Gl, c.unzipWith = nf, c.update = Y0, c.updateWith = X0, c.values = Tr, c.valuesIn = Z0, c.without = G_, c.words = Af, c.wrap = qp, c.xor = K_, c.xorBy = Y_, c.xorWith = X_, c.zip = Z_, c.zipObject = J_, c.zipObjectDeep = V_, c.zipWith = Q_, c.entries = Rf, c.entriesIn = Sf, c.extend = yf, c.extendWith = mo, es(c, c), c.add = Zm, c.attempt = If, c.camelCase = j0, c.capitalize = Ef, c.ceil = Jm, c.clamp = J0, c.clone = Up, c.cloneDeep = Kp, c.cloneDeepWith = Yp, c.cloneWith = Gp, c.conformsTo = Xp, c.deburr = Tf, c.defaultTo = Tm, c.divide = Vm, c.endsWith = $0, c.eq = Vt, c.escape = em, c.escapeRegExp = tm, c.every = up, c.find = fp, c.findIndex = Qa, c.findKey = C0, c.findLast = cp, c.findLastIndex = ja, c.findLastKey = R0, c.floor = Qm, c.forEach = of, c.forEachRight = lf, c.forIn = S0, c.forInRight = E0, c.forOwn = T0, c.forOwnRight = A0, c.get = Jl, c.gt = Zp, c.gte = Jp, c.has = P0, c.hasIn = Vl, c.head = ef, c.identity = ft, c.includes = _p, c.indexOf = c_, c.inRange = V0, c.invoke = M0, c.isArguments = jn, c.isArray = Q, c.isArrayBuffer = Vp, c.isArrayLike = ut, c.isArrayLikeObject = Ne, c.isBoolean = Qp, c.isBuffer = Wn, c.isDate = jp, c.isElement = $p, c.isEmpty = e0, c.isEqual = t0, c.isEqualWith = n0, c.isError = Xl, c.isFinite = r0, c.isFunction = mn, c.isInteger = gf, c.isLength = _o, c.isMap = vf, c.isMatch = i0, c.isMatchWith = o0, c.isNaN = l0, c.isNative = s0, c.isNil = a0, c.isNull = u0, c.isNumber = _f, c.isObject = Oe, c.isObjectLike = Me, c.isPlainObject = fi, c.isRegExp = Zl, c.isSafeInteger = f0, c.isSet = pf, c.isString = po, c.isSymbol = Rt, c.isTypedArray = Er, c.isUndefined = c0, c.isWeakMap = h0, c.isWeakSet = d0, c.join = __, c.kebabCase = nm, c.last = Nt, c.lastIndexOf = p_, c.lowerCase = rm, c.lowerFirst = im, c.lt = g0, c.lte = v0, c.max = jm, c.maxBy = $m, c.mean = ew, c.meanBy = tw, c.min = nw, c.minBy = rw, c.stubArray = ns, c.stubFalse = rs, c.stubObject = zm, c.stubString = Um, c.stubTrue = Gm, c.multiply = iw, c.nth = m_, c.noConflict = Mm, c.noop = ts, c.now = ho, c.pad = om, c.padEnd = lm, c.padStart = sm, c.parseInt = um, c.random = Q0, c.reduce = yp, c.reduceRight = xp, c.repeat = am, c.replace = fm, c.result = q0, c.round = ow, c.runInContext = y, c.sample = Rp, c.size = Tp, c.snakeCase = cm, c.some = Ap, c.sortedIndex = S_, c.sortedIndexBy = E_, c.sortedIndexOf = T_, c.sortedLastIndex = A_, c.sortedLastIndexBy = I_, c.sortedLastIndexOf = O_, c.startCase = dm, c.startsWith = gm, c.subtract = lw, c.sum = sw, c.sumBy = uw, c.template = vm, c.times = Km, c.toFinite = wn, c.toInteger = j, c.toLength = wf, c.toLower = _m, c.toNumber = Bt, c.toSafeInteger = _0, c.toString = ge, c.toUpper = pm, c.trim = mm, c.trimEnd = wm, c.trimStart = bm, c.truncate = ym, c.unescape = xm, c.uniqueId = Xm, c.upperCase = Cm, c.upperFirst = Ql, c.each = of, c.eachRight = lf, c.first = ef, es(c, (function() {
          var e = {};
          return en(c, function(t, r) {
            pe.call(c.prototype, r) || (e[r] = t);
          }), e;
        })(), { chain: !1 }), c.VERSION = s, Ft(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          c[e].placeholder = c;
        }), Ft(["drop", "take"], function(e, t) {
          ie.prototype[e] = function(r) {
            r = r === i ? 1 : Ge(j(r), 0);
            var l = this.__filtered__ && !t ? new ie(this) : this.clone();
            return l.__filtered__ ? l.__takeCount__ = Je(r, l.__takeCount__) : l.__views__.push({
              size: Je(r, ye),
              type: e + (l.__dir__ < 0 ? "Right" : "")
            }), l;
          }, ie.prototype[e + "Right"] = function(r) {
            return this.reverse()[e](r).reverse();
          };
        }), Ft(["filter", "map", "takeWhile"], function(e, t) {
          var r = t + 1, l = r == Ce || r == Se;
          ie.prototype[e] = function(u) {
            var h = this.clone();
            return h.__iteratees__.push({
              iteratee: Y(u, 3),
              type: r
            }), h.__filtered__ = h.__filtered__ || l, h;
          };
        }), Ft(["head", "last"], function(e, t) {
          var r = "take" + (t ? "Right" : "");
          ie.prototype[e] = function() {
            return this[r](1).value()[0];
          };
        }), Ft(["initial", "tail"], function(e, t) {
          var r = "drop" + (t ? "" : "Right");
          ie.prototype[e] = function() {
            return this.__filtered__ ? new ie(this) : this[r](1);
          };
        }), ie.prototype.compact = function() {
          return this.filter(ft);
        }, ie.prototype.find = function(e) {
          return this.filter(e).head();
        }, ie.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, ie.prototype.invokeMap = te(function(e, t) {
          return typeof e == "function" ? new ie(this) : this.map(function(r) {
            return ii(r, e, t);
          });
        }), ie.prototype.reject = function(e) {
          return this.filter(vo(Y(e)));
        }, ie.prototype.slice = function(e, t) {
          e = j(e);
          var r = this;
          return r.__filtered__ && (e > 0 || t < 0) ? new ie(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== i && (t = j(t), r = t < 0 ? r.dropRight(-t) : r.take(t - e)), r);
        }, ie.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, ie.prototype.toArray = function() {
          return this.take(ye);
        }, en(ie.prototype, function(e, t) {
          var r = /^(?:filter|find|map|reject)|While$/.test(t), l = /^(?:head|last)$/.test(t), u = c[l ? "take" + (t == "last" ? "Right" : "") : t], h = l || /^find/.test(t);
          u && (c.prototype[t] = function() {
            var v = this.__wrapped__, w = l ? [1] : arguments, x = v instanceof ie, T = w[0], A = x || Q(v), P = function(re) {
              var oe = u.apply(c, On([re], w));
              return l && N ? oe[0] : oe;
            };
            A && r && typeof T == "function" && T.length != 1 && (x = A = !1);
            var N = this.__chain__, z = !!this.__actions__.length, X = h && !N, ee = x && !z;
            if (!h && A) {
              v = ee ? v : new ie(this);
              var Z = e.apply(v, w);
              return Z.__actions__.push({ func: fo, args: [P], thisArg: i }), new Dt(Z, N);
            }
            return X && ee ? e.apply(this, w) : (Z = this.thru(P), X ? l ? Z.value()[0] : Z.value() : Z);
          });
        }), Ft(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Hi[e], r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
          c.prototype[e] = function() {
            var u = arguments;
            if (l && !this.__chain__) {
              var h = this.value();
              return t.apply(Q(h) ? h : [], u);
            }
            return this[r](function(v) {
              return t.apply(Q(v) ? v : [], u);
            });
          };
        }), en(ie.prototype, function(e, t) {
          var r = c[t];
          if (r) {
            var l = r.name + "";
            pe.call(yr, l) || (yr[l] = []), yr[l].push({ name: t, func: r });
          }
        }), yr[ro(i, D).name] = [{
          name: "wrapper",
          func: i
        }], ie.prototype.clone = xg, ie.prototype.reverse = Cg, ie.prototype.value = Rg, c.prototype.at = $_, c.prototype.chain = ep, c.prototype.commit = tp, c.prototype.next = np, c.prototype.plant = ip, c.prototype.reverse = op, c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = lp, c.prototype.first = c.prototype.head, Qr && (c.prototype[Qr] = rp), c;
      }), mr = tg();
      Gn ? ((Gn.exports = mr)._ = mr, $o._ = mr) : Ye._ = mr;
    }).call(Hb);
  })(di, di.exports)), di.exports;
}
var Fs = Wb();
const bh = /* @__PURE__ */ js(Fs), Nb = {
  headerHeight: null,
  columnConfigs: {},
  onColumnConfigsChange: () => {
  },
  minColumnWidths: {},
  rowRenderBatchSize: 4,
  minFetchSize: 1,
  renderWindowOffset: 400,
  verticalScrollbarPillHeight: 4,
  verticalScrollbarWidth: 24,
  horizontalScrollbarHeight: 16,
  lineHeight: 20,
  textMaxLines: 3,
  betweenRowPadding: 8,
  betweenColPadding: 24,
  scrollOverflowValue: 1e6,
  // keep this below chrome's maximum translate value
  onRowClick: null,
  highlightedRows: null,
  firstColLeftPadding: 8,
  showRowNumber: !0,
  onShowRowNumberChange: () => {
  },
  highlightHoveredRow: !1,
  get rowHeight() {
    return this.textMaxLines * this.lineHeight + this.betweenRowPadding;
  },
  DEFAULT_TEXT_MAX_LINES: 3,
  DEFAULT_LINE_HEIGHT: 20,
  DEFAULT_ROW_NUMBER_COL_WIDTH: 60
};
class Bb {
  #e = /* @__PURE__ */ k($e(Nb));
  get config() {
    return g(this.#e);
  }
  set config(n) {
    I(this.#e, n, !0);
  }
}
const Kf = Symbol("config");
class me {
  static initialize() {
    qt(Kf, new Bb());
  }
  static get config() {
    const n = dt(Kf);
    if (n == null)
      throw new Error("config context not yet set");
    return n.config;
  }
}
class kb {
  tableModel;
  tableController;
  margin = 2;
  isDragging = !1;
  lastDragX = 0;
  #e = /* @__PURE__ */ k(0);
  get elementWidth() {
    return g(this.#e);
  }
  set elementWidth(n) {
    I(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ F(() => this.elementWidth - this.margin * 2);
  get scrollbarWidth() {
    return g(this.#t);
  }
  set scrollbarWidth(n) {
    I(this.#t, n);
  }
  #n = /* @__PURE__ */ F(() => this.tableController.viewWidth / this.tableModel.colsRightmostPosition * this.scrollbarWidth);
  get pillWidth() {
    return g(this.#n);
  }
  set pillWidth(n) {
    I(this.#n, n);
  }
  #r = /* @__PURE__ */ F(() => -this.tableController.xScroll / this.tableModel.colsRightmostPosition * this.scrollbarWidth);
  get pillLeft() {
    return g(this.#r);
  }
  set pillLeft(n) {
    I(this.#r, n);
  }
  constructor({ tableModel: n, tableController: i }) {
    this.tableModel = n, this.tableController = i;
  }
  handlePointerDown = (n) => {
    n.preventDefault(), n.target.setPointerCapture(n.pointerId), this.isDragging = !0, this.lastDragX = n.offsetX;
  };
  handlePointerMove = (n) => {
    this.isDragging && this.lastDragX !== null && this.tableController.scroll({ deltaX: n.offsetX - this.lastDragX, deltaY: 0 });
  };
  handlePointerUp = (n) => {
    n.target.releasePointerCapture(n.pointerId), this.isDragging = !1, this.lastDragX = null;
  };
}
const Yf = Symbol("mosaic-coordinator");
class Ms {
  static get coordinator() {
    return dt(Yf) ?? aw();
  }
  static set coordinator(n) {
    qt(Yf, n);
  }
}
const ct = "__oid", qb = 120;
class zb {
  schema;
  #e = /* @__PURE__ */ k($e({}));
  get data() {
    return g(this.#e);
  }
  set data(n) {
    I(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ k($e({}));
  get defaultColWidths() {
    return g(this.#t);
  }
  set defaultColWidths(n) {
    I(this.#t, n, !0);
  }
  #n = /* @__PURE__ */ k($e([]));
  get columns() {
    return g(this.#n);
  }
  set columns(n) {
    I(this.#n, n, !0);
  }
  #r = /* @__PURE__ */ k(0);
  get numRows() {
    return g(this.#r);
  }
  set numRows(n) {
    I(this.#r, n, !0);
  }
  #u = /* @__PURE__ */ k(0);
  get renderOffset() {
    return g(this.#u);
  }
  set renderOffset(n) {
    I(this.#u, n, !0);
  }
  #i = /* @__PURE__ */ k($e({}));
  get rowHeightAddition() {
    return g(this.#i);
  }
  set rowHeightAddition(n) {
    I(this.#i, n, !0);
  }
  #o = /* @__PURE__ */ F(() => this.columns.reduce(
    (n, i) => (me.config.columnConfigs[i]?.hidden && n.add(i), i === ct && me.config.showRowNumber === !1 && n.add(ct), n),
    /* @__PURE__ */ new Set()
  ));
  get hiddenColumns() {
    return g(this.#o);
  }
  set hiddenColumns(n) {
    I(this.#o, n);
  }
  rowKeyColumn = null;
  constructor(n) {
    this.schema = n;
  }
  #l = /* @__PURE__ */ F(() => Object.keys(this.data).sort((n, i) => this.data[n][ct] - this.data[i][ct]));
  get renderableRows() {
    return g(this.#l);
  }
  set renderableRows(n) {
    I(this.#l, n);
  }
  #s = /* @__PURE__ */ F(() => this.columns.filter((n) => !this.hiddenColumns.has(n)));
  get renderableCols() {
    return g(this.#s);
  }
  set renderableCols(n) {
    I(this.#s, n);
  }
  #a = /* @__PURE__ */ F(() => this.renderableRows.length === 0 ? this.zeroRowPosition : Math.min(...this.renderableRows.map((n) => this.rowPositions[n])));
  get minRowPosition() {
    return g(this.#a);
  }
  set minRowPosition(n) {
    I(this.#a, n);
  }
  #f = /* @__PURE__ */ F(() => this.renderableRows.length === 0 ? this.finalRowPosition : Math.max(...this.renderableRows.map((n) => this.rowPositions[n])));
  get maxRowPosition() {
    return g(this.#f);
  }
  set maxRowPosition(n) {
    I(this.#f, n);
  }
  #c = /* @__PURE__ */ F(() => {
    const n = Math.min(...this.renderableRows.map((i) => this.data[i][ct]));
    return Number.isSafeInteger(n) ? n : 0;
  });
  get minRowOID() {
    return g(this.#c);
  }
  set minRowOID(n) {
    I(this.#c, n);
  }
  #h = /* @__PURE__ */ F(() => {
    const n = Math.max(...this.renderableRows.map((i) => this.data[i][ct]));
    return Number.isSafeInteger(n) ? n : 0;
  });
  get maxRowOID() {
    return g(this.#h);
  }
  set maxRowOID(n) {
    I(this.#h, n);
  }
  #g = /* @__PURE__ */ F(() => 0);
  get zeroRowPosition() {
    return g(this.#g);
  }
  set zeroRowPosition(n) {
    I(this.#g, n);
  }
  #d = /* @__PURE__ */ F(() => (this.numRows - 1) * me.config.rowHeight + this.rowPositionOffsets.cumulative);
  get finalRowPosition() {
    return g(this.#d);
  }
  set finalRowPosition(n) {
    I(this.#d, n);
  }
  colsLeftmostPosition = 0;
  #v = /* @__PURE__ */ F(() => {
    const n = this.renderableCols[this.renderableCols.length - 1];
    return this.colPositions[n] + this.colWidths[n];
  });
  get colsRightmostPosition() {
    return g(this.#v);
  }
  set colsRightmostPosition(n) {
    I(this.#v, n);
  }
  #_ = /* @__PURE__ */ F(() => this.renderableRows.reduce(
    ({ offsets: n, cumulative: i }, s) => {
      n[s] = i;
      const a = this.rowHeightAddition[s] ?? 0;
      return { offsets: n, cumulative: i + a };
    },
    { offsets: {}, cumulative: 0 }
  ));
  get rowPositionOffsets() {
    return g(this.#_);
  }
  set rowPositionOffsets(n) {
    I(this.#_, n);
  }
  #p = /* @__PURE__ */ F(() => this.renderableRows.reduce(
    (n, i) => {
      const f = (this.data[i][ct] - 1) * me.config.rowHeight + this.rowPositionOffsets.offsets[i];
      return n[i] = f, n;
    },
    {}
  ));
  get rowPositions() {
    return g(this.#p);
  }
  set rowPositions(n) {
    I(this.#p, n);
  }
  #b = /* @__PURE__ */ F(() => {
    let n = 0;
    return this.columns.reduce(
      (i, s, a) => (this.hiddenColumns.has(s) || (i[s] = n, n += this.colWidths[s]), i),
      {}
    );
  });
  get colPositions() {
    return g(this.#b);
  }
  set colPositions(n) {
    I(this.#b, n);
  }
  #m = /* @__PURE__ */ F(() => this.renderableRows.reduce(
    (n, i) => (n[i] = me.config.rowHeight + (this.rowHeightAddition[i] ?? 0), n),
    {}
  ));
  get rowHeights() {
    return g(this.#m);
  }
  set rowHeights(n) {
    I(this.#m, n);
  }
  #w = /* @__PURE__ */ F(() => this.columns.reduce(
    (n, i, s) => (n[i] = Math.max(me.config.columnConfigs[i]?.width ?? this.defaultColWidths[i] ?? qb, me.config.minColumnWidths[i] ?? 0), this.isFirstCol(i) && (n[i] += me.config.firstColLeftPadding), this.isLastCol(i) && (n[i] += me.config.verticalScrollbarWidth), n),
    {}
  ));
  get colWidths() {
    return g(this.#w);
  }
  set colWidths(n) {
    I(this.#w, n);
  }
  getContent({ row: n, col: i }) {
    return this.data[n] ? this.data[n][i] : null;
  }
  getRowData(n) {
    return this.data[n] ? this.data[n] : null;
  }
  getPosition({ row: n, col: i }) {
    const s = this.colPositions[i], a = this.rowPositions[n];
    return { x: s, y: a };
  }
  getDimensions({ row: n, col: i }) {
    const s = this.colWidths[i], a = this.rowHeights[n];
    return { width: s, height: a };
  }
  getRowParity(n) {
    return this.data[n] && this.data[n][ct] % 2 === 0 ? "even" : "odd";
  }
  isFirstCol(n) {
    return this.renderableCols.indexOf(n) === 0;
  }
  isLastCol(n) {
    return this.renderableCols.indexOf(n) === this.renderableCols.length - 1;
  }
  // Deletes the given row and returns the offset necessary to remove from scroll position.
  deleteRow(n) {
    delete this.data[n];
    const i = this.rowHeightAddition[n] ?? 0;
    return delete this.rowHeightAddition[n], i;
  }
  collapseRow(n) {
    const i = this.rowHeightAddition[n] ?? 0;
    return delete this.rowHeightAddition[n], i;
  }
  reset() {
    this.data = {}, this.rowHeightAddition = {};
  }
  teardown() {
    this.reset();
  }
}
class Ub extends bc {
  tableName;
  onResult;
  constructor(n, i, s) {
    super(i ?? void 0), this.tableName = n, this.onResult = s;
  }
  queryResult(n) {
    const s = n.toArray()[0].count;
    return this.onResult(s), this;
  }
  query(n = []) {
    return Ro.from(this.tableName).select({ count: cw() }).where(n);
  }
}
const ht = "__oid";
class Gb extends bc {
  tableName;
  columns;
  onResult;
  onColumnInfo;
  limit = 20;
  offset = 0;
  sort = null;
  info = null;
  columnInfo = null;
  isReady = !1;
  constructor(n, i, s, a, f) {
    super(s ?? void 0), this.tableName = n, this.columns = i, this.onResult = a, this.onColumnInfo = f;
  }
  async prepare() {
    if (this.coordinator == null)
      return;
    const i = (await fw(this.coordinator, [{ table: this.tableName, column: "*" }])).reduce((s, a) => (s[a.column] = a, s), {});
    this.columnInfo = i, this.onColumnInfo(i), this.isReady = !0;
  }
  getSelect({ includeRowNumber: n } = { includeRowNumber: !0 }) {
    const i = this.columns.reduce((s, a) => (this.columnInfo?.[a]?.sqlType === "BIGINT" ? s[a] = Lf(ci(a), "TEXT") : s[a] = ci(a), s), {});
    return n || delete i[ht], i;
  }
  queryResult(n) {
    return this.onResult(n), this;
  }
  query(n = []) {
    if (!this.isReady)
      return null;
    const i = this.columns.reduce((a, f) => (this.columnInfo?.[f]?.sqlType === "BIGINT" ? a[f] = Lf(ci(f), "TEXT") : a[f] = ci(f), a), {});
    if (i[ht] = hw(), this.sort) {
      const a = this.sort.direction === "ascending" ? this.sort.column : dw(this.sort.column);
      i[ht] = i[ht].orderby(a);
    }
    return Ro.from(this.tableName).select(i).where(n).limit(this.limit).offset(this.offset);
  }
  fetchRows(n, i) {
    this.offset = n, this.limit = i, this.requestUpdate();
  }
}
class Kb {
  model;
  schema;
  config;
  #e = /* @__PURE__ */ F(() => Ms.coordinator);
  get coordinator() {
    return g(this.#e);
  }
  set coordinator(n) {
    I(this.#e, n);
  }
  filterBy = null;
  rowsClient = null;
  numRowsClient = null;
  rowKeyColumn = null;
  #t = /* @__PURE__ */ k(null);
  get element() {
    return g(this.#t);
  }
  set element(n) {
    I(this.#t, n, !0);
  }
  #n = /* @__PURE__ */ k(0);
  get viewHeight() {
    return g(this.#n);
  }
  set viewHeight(n) {
    I(this.#n, n, !0);
  }
  #r = /* @__PURE__ */ k(0);
  get viewWidth() {
    return g(this.#r);
  }
  set viewWidth(n) {
    I(this.#r, n, !0);
  }
  #u = /* @__PURE__ */ k(0);
  get yScroll() {
    return g(this.#u);
  }
  set yScroll(n) {
    I(this.#u, n, !0);
  }
  #i = /* @__PURE__ */ k(0);
  get xScroll() {
    return g(this.#i);
  }
  set xScroll(n) {
    I(this.#i, n, !0);
  }
  #o = /* @__PURE__ */ k(!1);
  get isFetching() {
    return g(this.#o);
  }
  set isFetching(n) {
    I(this.#o, n, !0);
  }
  #l = /* @__PURE__ */ k(!1);
  get isJumping() {
    return g(this.#l);
  }
  set isJumping(n) {
    I(this.#l, n, !0);
  }
  #s = /* @__PURE__ */ k(null);
  get sort() {
    return g(this.#s);
  }
  set sort(n) {
    I(this.#s, n, !0);
  }
  #a = /* @__PURE__ */ k(!1);
  get isReady() {
    return g(this.#a);
  }
  set isReady(n) {
    I(this.#a, n, !0);
  }
  #f = /* @__PURE__ */ k(0);
  get updateKey() {
    return g(this.#f);
  }
  set updateKey(n) {
    I(this.#f, n, !0);
  }
  #c = /* @__PURE__ */ k(!1);
  get isStale() {
    return g(this.#c);
  }
  set isStale(n) {
    I(this.#c, n, !0);
  }
  #h = /* @__PURE__ */ k(null);
  get flashedRowId() {
    return g(this.#h);
  }
  set flashedRowId(n) {
    I(this.#h, n, !0);
  }
  #g = /* @__PURE__ */ k(null);
  get hoveredRowId() {
    return g(this.#g);
  }
  set hoveredRowId(n) {
    I(this.#g, n, !0);
  }
  #d = /* @__PURE__ */ F(() => Math.ceil(this.viewHeight / me.config.rowHeight));
  get rowsOnScreen() {
    return g(this.#d);
  }
  set rowsOnScreen(n) {
    I(this.#d, n);
  }
  #v = /* @__PURE__ */ F(() => this.isJumping ? 0 : me.config.renderWindowOffset);
  get renderWindowOffset() {
    return g(this.#v);
  }
  set renderWindowOffset(n) {
    I(this.#v, n);
  }
  #_ = /* @__PURE__ */ F(() => {
    if (this.model.renderableRows.length === 0)
      return null;
    const n = this.model.renderableRows.filter((s) => {
      const a = this.model.rowPositions[s] + this.yScroll;
      return a + this.model.rowHeights[s] > 0 && a < this.viewHeight;
    });
    if (n.length === 0)
      return null;
    const i = n[0];
    return this.model.data[i][ht];
  });
  get firstVisibleRowOID() {
    return g(this.#_);
  }
  set firstVisibleRowOID(n) {
    I(this.#_, n);
  }
  #p = /* @__PURE__ */ F(() => Math.max(0, Math.floor(-this.yScroll / me.config.rowHeight)));
  get offset() {
    return g(this.#p);
  }
  set offset(n) {
    I(this.#p, n);
  }
  onFetchResolveBegin = null;
  onFetchResolveEnd = null;
  constructor(n, i) {
    this.model = n, this.schema = i, this.config = me.config;
  }
  handleFilterBy = () => {
    this.rowsClient && (this.rowsClient.offset = 0, this.rowsClient.limit = this.rowsOnScreen, this.isJumping = !0, this.markStale());
  };
  updateData = (n) => {
    if (!this.model || !this.rowKeyColumn)
      return;
    this.onFetchResolveBegin && (this.onFetchResolveBegin(), this.onFetchResolveBegin = null);
    const i = n.toArray(), s = {};
    for (const a of i) {
      const f = a[this.rowKeyColumn];
      s[f] = a;
    }
    this.model.data = { ...this.model.data, ...s }, this.onFetchResolveEnd && (this.onFetchResolveEnd(), this.onFetchResolveEnd = null), this.isFetching = !1;
  };
  initialize({ tableName: n, rowKey: i, columns: s, filterBy: a }) {
    if (this.model.columns = s, this.model.rowKeyColumn = i, this.rowKeyColumn = i, a && (this.filterBy = a, this.filterBy.addEventListener("value", this.handleFilterBy)), !this.rowKeyColumn)
      throw new Error("rowkey cannot be null");
    let f = s.includes(this.rowKeyColumn) ? s : [...s, this.rowKeyColumn];
    this.rowsClient = new Gb(
      n,
      f,
      a,
      (d) => {
        this.updateData(d);
      },
      (d) => {
        this.schema.columnInfo = d, this.computeColWidths(n, s), this.isReady = !0;
      }
    ), this.coordinator.connect(this.rowsClient), this.numRowsClient = new Ub(n, a, (d) => {
      this.model && (this.model.numRows = d);
    }), this.coordinator.connect(this.numRowsClient), Pe(() => {
      if (!this.rowsClient || this.isFetching || !this.isReady)
        return;
      const d = -this.renderWindowOffset, _ = this.viewHeight + this.renderWindowOffset, m = this.model.maxRowPosition + this.yScroll + this.config.rowHeight, p = this.model.minRowPosition + this.yScroll;
      if (p < 0 && m < 0 || p > this.viewHeight && m > this.viewHeight) {
        const W = this.rowsOnScreen;
        this.isFetching = !0, this.rowsClient.fetchRows(this.offset, W);
      } else {
        if (m < _) {
          const M = Fs.clamp(Math.ceil((_ - m) / this.config.rowHeight), this.config.minFetchSize, this.rowsOnScreen);
          M > 0 && this.model.maxRowOID !== this.model.numRows && (this.isFetching = !0, this.rowsClient.fetchRows(this.model.maxRowOID, M));
        }
        const W = this.model.minRowPosition + this.yScroll;
        if (W > d && this.model.minRowOID !== 1) {
          const M = Fs.clamp(Math.ceil((W - d) / this.config.rowHeight), this.config.minFetchSize, this.rowsOnScreen);
          M > 0 && (this.isFetching = !0, this.rowsClient.fetchRows(Math.max(0, this.model.minRowOID - 1 - M), M));
        }
      }
      const b = Hc(this.model.renderableRows);
      let C = 0;
      for (; this.model.rowPositions[b[C]] + this.yScroll + this.model.rowHeights[b[C]] < 0; )
        this.yScroll += this.model.collapseRow(b[C]), C += 1;
      let S = b.length - 1;
      for (; this.model.rowPositions[b[S]] + this.yScroll > this.viewHeight; )
        this.model.collapseRow(b[S]), S -= 1;
      let O = 0;
      for (; this.model.rowPositions[b[O]] + this.yScroll + this.model.rowHeights[b[O]] < d; )
        this.model.deleteRow(b[O]), O += 1;
      let L = b.length - 1;
      for (; this.model.rowPositions[b[L]] + this.yScroll > _; )
        this.model.deleteRow(b[L]), L -= 1;
    });
  }
  teardown() {
    this.filterBy && this.filterBy.removeEventListener("value", this.handleFilterBy);
  }
  cellIsVisible(n) {
    const { x: i, y: s } = this.model.getPosition(n), { width: a, height: f } = this.model.getDimensions(n), d = i + this.xScroll, _ = s + this.yScroll;
    return d + a >= 0 && d <= this.viewWidth && _ + f >= 0 && _ <= this.viewHeight;
  }
  rowIsVisible(n) {
    const i = this.model.rowPositions[n], s = this.model.rowHeights[n], a = i + this.yScroll;
    return a + s >= 0 && a <= this.viewHeight;
  }
  rowStillExists(n) {
    return this.model.data[n] != null;
  }
  colIsVisible(n) {
    const i = this.model.colPositions[n], s = this.model.colWidths[n], a = i + this.xScroll;
    return a + s >= 0 && a <= this.viewWidth;
  }
  scroll({ deltaX: n, deltaY: i }) {
    if (Math.abs(i) > Math.abs(n)) {
      const s = this.yScroll - i;
      this.model.zeroRowPosition + s > 0 ? this.yScroll = -this.model.zeroRowPosition : this.model.finalRowPosition + s < 0 ? this.yScroll = -this.model.finalRowPosition : this.yScroll = s;
    } else {
      const s = this.xScroll - n;
      -s < 0 ? this.xScroll = 0 : -s > Math.max(this.model.colsRightmostPosition, this.viewWidth) - this.viewWidth ? this.xScroll = -Math.max(this.model.colsRightmostPosition, this.viewWidth) + this.viewWidth : this.xScroll = s;
    }
  }
  handleWheel = (n) => {
    n.preventDefault(), this.isJumping = !1, this.scroll({ deltaX: n.deltaX, deltaY: n.deltaY });
  };
  jumpToOffset(n) {
    if (!this.rowsClient)
      return;
    this.isFetching = !0;
    const i = this.rowsOnScreen, s = this.onFetchResolveEnd;
    this.onFetchResolveEnd = () => {
      s && s(), this.yScroll = -(n * this.config.rowHeight);
    }, this.markStale(), this.rowsClient.fetchRows(n, i);
  }
  handleSort = (n) => {
    this.rowsClient && (this.sort = n, this.rowsClient.sort = n, this.resetRows());
  };
  resetRows() {
    this.model.reset(), this.yScroll = 0;
  }
  flashRow(n) {
    this.flashedRowId = n, setTimeout(
      () => {
        this.flashedRowId = null;
      },
      400
    );
  }
  async scrollToRow(n, i = !0) {
    if (!this.rowsClient)
      return;
    this.isFetching = !0;
    const s = Ro.with({
      original: this.rowsClient.query(this.rowsClient.filterBy?.predicate(this.rowsClient)).offset(0).limit(this.model.numRows)
    }).select([ht]).from("original").where(gw(ci(this.rowKeyColumn), vw(n))), f = (await this.coordinator.query(s)).toArray();
    if (f.length > 0) {
      const d = f[0][ht] - 1;
      this.onFetchResolveEnd = () => {
        i && this.flashRow(n);
      }, this.jumpToOffset(d);
    } else
      this.isFetching = !1, console.error("no row", n, "found");
  }
  addHeightToRow(n, i) {
    this.model.rowHeightAddition[n] = (this.model.rowHeightAddition[n] ?? 0) + i;
  }
  hideColumn(n) {
    n === ht ? this.config.onShowRowNumberChange ? this.config.onShowRowNumberChange(!1) : this.config.showRowNumber = !1 : (this.config.columnConfigs[n] || (this.config.columnConfigs[n] = {}), this.config.columnConfigs[n].hidden = !0);
  }
  showColumn(n) {
    n === ht ? this.config.onShowRowNumberChange ? this.config.onShowRowNumberChange(!0) : this.config.showRowNumber = !0 : (this.config.columnConfigs[n] || (this.config.columnConfigs[n] = {}), this.config.columnConfigs[n].hidden = !1);
  }
  // Marks the current state stale, telling the view to destroy any existing cells on next render.
  markStale() {
    this.isStale = !0;
    const n = this.onFetchResolveBegin;
    this.onFetchResolveBegin = () => {
      n && n(), this.resetRows();
    };
    const i = this.onFetchResolveEnd;
    this.onFetchResolveEnd = () => {
      i && i(), this.updateKey += 1, this.isStale = !1;
    };
  }
  async computeColWidths(n, i) {
    const s = i.filter((p) => p !== ht), a = this.rowsClient?.getSelect({ includeRowNumber: !1 }), f = s.reduce(
      (p, b) => (p[b] = 0, p),
      {}
    ), d = Ro.from(n).select(a).offset(0).limit(10), m = (await this.coordinator.query(d)).toArray();
    for (const p of m)
      for (const b of s)
        f[b] = Math.max(f[b], Yb(p[b]));
    i.includes(ht) && (f[ht] = this.config.DEFAULT_ROW_NUMBER_COL_WIDTH), this.model.defaultColWidths = f;
  }
}
function Yb(o) {
  const n = String(o).length;
  return n > 200 ? 600 : n > 100 ? 300 : n > 20 ? 200 : n > 10 ? 150 : 120;
}
class Xb {
  tableController;
  #e = /* @__PURE__ */ F(() => this.tableController.element);
  get tableElement() {
    return g(this.#e);
  }
  set tableElement(n) {
    I(this.#e, n);
  }
  constructor(n) {
    this.tableController = n;
  }
  mount(n, i, s, a, f) {
    if (!this.tableElement)
      return;
    const d = i.getBoundingClientRect(), _ = this.tableElement.getBoundingClientRect(), m = _.top, p = _.left;
    switch (s) {
      case "inside":
        switch (f) {
          case "top":
            n.style.top = d.top - m + "px";
            break;
          case "middle":
          case "bottom":
            throw new Error("not yet implemented" + s + f);
        }
        switch (a) {
          case "left":
            n.style.left = d.left - p + "px";
          case "center":
          case "right":
            throw new Error("not yet implemented" + s + a);
        }
        break;
      case "outside":
        switch (f) {
          case "top":
            n.style.top = d.bottom - m + "px";
            break;
          case "middle":
          case "bottom":
            throw new Error("not yet implemented" + s + f);
        }
        switch (a) {
          case "left":
            n.style.left = d.left - p + "px";
            break;
          case "center":
          case "right":
            throw new Error("not yet implemented" + s + a);
        }
        break;
    }
    this.tableElement.appendChild(n);
  }
  destroy(n) {
    this.tableElement && this.tableElement.contains(n) && this.tableElement.removeChild(n);
  }
}
var ls, Xf;
function Zb() {
  if (Xf) return ls;
  Xf = 1;
  function o(n, i, s) {
    return n === n && (s !== void 0 && (n = n <= s ? n : s), i !== void 0 && (n = n >= i ? n : i)), n;
  }
  return ls = o, ls;
}
var ss, Zf;
function Jb() {
  if (Zf) return ss;
  Zf = 1;
  var o = /\s/;
  function n(i) {
    for (var s = i.length; s-- && o.test(i.charAt(s)); )
      ;
    return s;
  }
  return ss = n, ss;
}
var us, Jf;
function Vb() {
  if (Jf) return us;
  Jf = 1;
  var o = Jb(), n = /^\s+/;
  function i(s) {
    return s && s.slice(0, o(s) + 1).replace(n, "");
  }
  return us = i, us;
}
var as, Vf;
function $s() {
  if (Vf) return as;
  Vf = 1;
  function o(n) {
    var i = typeof n;
    return n != null && (i == "object" || i == "function");
  }
  return as = o, as;
}
var fs, Qf;
function Qb() {
  if (Qf) return fs;
  Qf = 1;
  var o = typeof Nn == "object" && Nn && Nn.Object === Object && Nn;
  return fs = o, fs;
}
var cs, jf;
function yh() {
  if (jf) return cs;
  jf = 1;
  var o = Qb(), n = typeof self == "object" && self && self.Object === Object && self, i = o || n || Function("return this")();
  return cs = i, cs;
}
var hs, $f;
function xh() {
  if ($f) return hs;
  $f = 1;
  var o = yh(), n = o.Symbol;
  return hs = n, hs;
}
var ds, ec;
function jb() {
  if (ec) return ds;
  ec = 1;
  var o = xh(), n = Object.prototype, i = n.hasOwnProperty, s = n.toString, a = o ? o.toStringTag : void 0;
  function f(d) {
    var _ = i.call(d, a), m = d[a];
    try {
      d[a] = void 0;
      var p = !0;
    } catch {
    }
    var b = s.call(d);
    return p && (_ ? d[a] = m : delete d[a]), b;
  }
  return ds = f, ds;
}
var gs, tc;
function $b() {
  if (tc) return gs;
  tc = 1;
  var o = Object.prototype, n = o.toString;
  function i(s) {
    return n.call(s);
  }
  return gs = i, gs;
}
var vs, nc;
function e1() {
  if (nc) return vs;
  nc = 1;
  var o = xh(), n = jb(), i = $b(), s = "[object Null]", a = "[object Undefined]", f = o ? o.toStringTag : void 0;
  function d(_) {
    return _ == null ? _ === void 0 ? a : s : f && f in Object(_) ? n(_) : i(_);
  }
  return vs = d, vs;
}
var _s, rc;
function t1() {
  if (rc) return _s;
  rc = 1;
  function o(n) {
    return n != null && typeof n == "object";
  }
  return _s = o, _s;
}
var ps, ic;
function n1() {
  if (ic) return ps;
  ic = 1;
  var o = e1(), n = t1(), i = "[object Symbol]";
  function s(a) {
    return typeof a == "symbol" || n(a) && o(a) == i;
  }
  return ps = s, ps;
}
var ms, oc;
function Ch() {
  if (oc) return ms;
  oc = 1;
  var o = Vb(), n = $s(), i = n1(), s = NaN, a = /^[-+]0x[0-9a-f]+$/i, f = /^0b[01]+$/i, d = /^0o[0-7]+$/i, _ = parseInt;
  function m(p) {
    if (typeof p == "number")
      return p;
    if (i(p))
      return s;
    if (n(p)) {
      var b = typeof p.valueOf == "function" ? p.valueOf() : p;
      p = n(b) ? b + "" : b;
    }
    if (typeof p != "string")
      return p === 0 ? p : +p;
    p = o(p);
    var C = f.test(p);
    return C || d.test(p) ? _(p.slice(2), C ? 2 : 8) : a.test(p) ? s : +p;
  }
  return ms = m, ms;
}
var ws, lc;
function r1() {
  if (lc) return ws;
  lc = 1;
  var o = Zb(), n = Ch();
  function i(s, a, f) {
    return f === void 0 && (f = a, a = void 0), f !== void 0 && (f = n(f), f = f === f ? f : 0), a !== void 0 && (a = n(a), a = a === a ? a : 0), o(n(s), a, f);
  }
  return ws = i, ws;
}
var i1 = r1();
const o1 = /* @__PURE__ */ js(i1);
var bs, sc;
function l1() {
  if (sc) return bs;
  sc = 1;
  var o = yh(), n = function() {
    return o.Date.now();
  };
  return bs = n, bs;
}
var ys, uc;
function s1() {
  if (uc) return ys;
  uc = 1;
  var o = $s(), n = l1(), i = Ch(), s = "Expected a function", a = Math.max, f = Math.min;
  function d(_, m, p) {
    var b, C, S, O, L, W, M = 0, D = !1, H = !1, G = !0;
    if (typeof _ != "function")
      throw new TypeError(s);
    m = i(m) || 0, o(p) && (D = !!p.leading, H = "maxWait" in p, S = H ? a(i(p.maxWait) || 0, m) : S, G = "trailing" in p ? !!p.trailing : G);
    function J(le) {
      var Ce = b, ze = C;
      return b = C = void 0, M = le, O = _.apply(ze, Ce), O;
    }
    function K(le) {
      return M = le, L = setTimeout(de, m), D ? J(le) : O;
    }
    function U(le) {
      var Ce = le - W, ze = le - M, Se = m - Ce;
      return H ? f(Se, S - ze) : Se;
    }
    function q(le) {
      var Ce = le - W, ze = le - M;
      return W === void 0 || Ce >= m || Ce < 0 || H && ze >= S;
    }
    function de() {
      var le = n();
      if (q(le))
        return $(le);
      L = setTimeout(de, U(le));
    }
    function $(le) {
      return L = void 0, G && b ? J(le) : (b = C = void 0, O);
    }
    function Te() {
      L !== void 0 && clearTimeout(L), M = 0, b = W = C = L = void 0;
    }
    function Ae() {
      return L === void 0 ? O : $(n());
    }
    function be() {
      var le = n(), Ce = q(le);
      if (b = arguments, C = this, W = le, Ce) {
        if (L === void 0)
          return K(W);
        if (H)
          return clearTimeout(L), L = setTimeout(de, m), J(W);
      }
      return L === void 0 && (L = setTimeout(de, m)), O;
    }
    return be.cancel = Te, be.flush = Ae, be;
  }
  return ys = d, ys;
}
var xs, ac;
function u1() {
  if (ac) return xs;
  ac = 1;
  var o = s1(), n = $s(), i = "Expected a function";
  function s(a, f, d) {
    var _ = !0, m = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    return n(d) && (_ = "leading" in d ? !!d.leading : _, m = "trailing" in d ? !!d.trailing : m), o(a, f, {
      leading: _,
      maxWait: f,
      trailing: m
    });
  }
  return xs = s, xs;
}
var a1 = u1();
const fc = /* @__PURE__ */ js(a1);
class f1 {
  tableModel;
  tableController;
  isDragging = !1;
  #e = /* @__PURE__ */ k(0);
  get elementHeight() {
    return g(this.#e);
  }
  set elementHeight(n) {
    I(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ k(0);
  get labelHeight() {
    return g(this.#t);
  }
  set labelHeight(n) {
    I(this.#t, n, !0);
  }
  #n = /* @__PURE__ */ F(() => me.config.verticalScrollbarPillHeight);
  get pillHeight() {
    return g(this.#n);
  }
  set pillHeight(n) {
    I(this.#n, n);
  }
  #r = /* @__PURE__ */ F(() => this.elementHeight - this.pillHeight);
  get scrollbarHeight() {
    return g(this.#r);
  }
  set scrollbarHeight(n) {
    I(this.#r, n);
  }
  #u = /* @__PURE__ */ F(() => this.tableController.firstVisibleRowOID ? this.tableController.firstVisibleRowOID : this.tableController.offset + 1);
  get displayRow() {
    return g(this.#u);
  }
  set displayRow(n) {
    I(this.#u, n);
  }
  #i = /* @__PURE__ */ F(() => (this.displayRow - 1) / (this.tableModel.numRows - 1) * this.scrollbarHeight);
  get pillPosition() {
    return g(this.#i);
  }
  set pillPosition(n) {
    I(this.#i, n);
  }
  #o = /* @__PURE__ */ F(() => {
    if (this.pillPosition === null)
      return 0;
    const n = this.pillPosition + this.pillHeight / 2 - this.labelHeight / 2;
    if (n < 0)
      return n;
    const i = this.pillPosition + this.pillHeight / 2 + this.labelHeight / 2;
    return i > this.elementHeight ? i - this.elementHeight : 0;
  });
  get labelOffset() {
    return g(this.#o);
  }
  set labelOffset(n) {
    I(this.#o, n);
  }
  constructor({ tableModel: n, tableController: i }) {
    this.tableModel = n, this.tableController = i;
  }
  computeOffsetFromPointer = (n) => {
    this.isDragging = !0;
    let i = Math.round(n.offsetY / this.scrollbarHeight * (this.tableModel.numRows - 1));
    return o1(i, 0, this.tableModel.numRows - 1);
  };
  pointerDown = (n) => {
    n.preventDefault(), n.target.setPointerCapture(n.pointerId), this.isDragging = !0;
    const i = this.computeOffsetFromPointer(n);
    this.tableController.isJumping = !0, this.tableController.jumpToOffset(i);
  };
  handlePointerDown = fc(this.pointerDown, 50);
  pointerMove = (n) => {
    if (this.isDragging) {
      const i = this.computeOffsetFromPointer(n);
      this.tableController.jumpToOffset(i);
    }
  };
  handlePointerMove = fc(this.pointerMove, 50);
  handlePointerUp = (n) => {
    n.target.releasePointerCapture(n.pointerId), this.isDragging = !1, this.tableController.isJumping = !1;
  };
}
class c1 {
  #e = /* @__PURE__ */ k(null);
  get columnInfo() {
    return g(this.#e);
  }
  set columnInfo(n) {
    I(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ F(() => this.columnInfo ? Object.keys(this.columnInfo).reduce(
    (n, i) => (n[i] = this.columnInfo[i].type, n),
    {}
  ) : {});
  get dataType() {
    return g(this.#t);
  }
  set dataType(n) {
    I(this.#t, n);
  }
  #n = /* @__PURE__ */ F(() => this.columnInfo ? Object.keys(this.columnInfo).reduce(
    (n, i) => (n[i] = this.columnInfo[i].sqlType, n),
    {}
  ) : {});
  get sqlType() {
    return g(this.#n);
  }
  set sqlType(n) {
    I(this.#n, n);
  }
}
class h1 {
  tableController;
  #e = /* @__PURE__ */ F(() => Math.floor(-this.tableController.yScroll / me.config.scrollOverflowValue) * me.config.scrollOverflowValue);
  get offset() {
    return g(this.#e);
  }
  set offset(n) {
    I(this.#e, n);
  }
  constructor(n) {
    this.tableController = n;
  }
  y(n) {
    return n - this.offset;
  }
  yScroll(n) {
    return n + this.offset;
  }
}
const cc = Symbol("schema"), hc = Symbol("model"), dc = Symbol("controller"), gc = Symbol("vertical-scrollbar-controller"), vc = Symbol("horizontal-scrollbar-controller"), _c = Symbol("table-portal-controller"), pc = Symbol("overscroll-modifier");
class we {
  static initialize() {
    const n = new c1(), i = new zb(n), s = new Kb(i, n), a = new f1({ tableModel: i, tableController: s }), f = new kb({ tableModel: i, tableController: s }), d = new Xb(s), _ = new h1(s);
    qt(cc, n), qt(hc, i), qt(dc, s), qt(gc, a), qt(vc, f), qt(_c, d), qt(pc, _);
  }
  static get schema() {
    return dt(cc);
  }
  static get model() {
    return dt(hc);
  }
  static get controller() {
    return dt(dc);
  }
  static get verticalScrollbarController() {
    return dt(gc);
  }
  static get horizontalScrollbarController() {
    return dt(vc);
  }
  static get tablePortalController() {
    return dt(_c);
  }
  static get overscrollModifier() {
    return dt(pc);
  }
}
var d1 = /* @__PURE__ */ fe('<div class="horizontal-scrollbar svelte-csucem"><div class="pill svelte-csucem"></div></div>');
const g1 = {
  hash: "svelte-csucem",
  code: ".horizontal-scrollbar.svelte-csucem {position:absolute;bottom:0;left:0;width:100%;height:var(--height);transition:opacity 200ms linear;background-color:var(--scrollbar-bg);}.horizontal-scrollbar.svelte-csucem:hover {opacity:1 !important;}.pill.svelte-csucem {width:var(--width);height:calc(var(--height) - var(--margin) * 2);margin:var(--margin);border-radius:2px;background-color:var(--scrollbar-pill-bg);}"
};
function v1(o, n) {
  De(n, !0), We(o, g1);
  const i = we.horizontalScrollbarController, s = we.controller, a = me.config;
  let f = /* @__PURE__ */ k(0), d = /* @__PURE__ */ k(null), _ = /* @__PURE__ */ k(null), m = 0;
  qr(() => (m = requestAnimationFrame(C), () => {
    cancelAnimationFrame(m);
  }));
  function p() {
    g(d) && (g(d).style.opacity = "0");
  }
  const b = bh.debounce(p, 1e3);
  Pe(() => {
    g(d) && (s.xScroll, g(d).style.opacity = "1", b());
  });
  function C() {
    I(f, i.pillWidth, !0), g(_) && (g(_).style.transform = `translate(${i.pillLeft}px, 0)`), m = requestAnimationFrame(C);
  }
  var S = d1();
  let O;
  var L = ve(S);
  L.__pointerdown = function(...M) {
    i.handlePointerDown?.apply(this, M);
  }, L.__pointermove = function(...M) {
    i.handlePointerMove?.apply(this, M);
  }, L.__pointerup = function(...M) {
    i.handlePointerUp?.apply(this, M);
  };
  let W;
  ot(L, (M) => I(_, M), () => g(_)), he(S), ot(S, (M) => I(d, M), () => g(d)), qe(() => {
    O = wt(S, "", O, { "--height": a.horizontalScrollbarHeight + "px" }), W = wt(L, "", W, {
      "--width": g(f) + "px",
      "--margin": i.margin + "px"
    });
  }), $t(S, "clientWidth", (M) => i.elementWidth = M), ne(o, S), He();
}
An(["pointerdown", "pointermove", "pointerup"]);
var _1 = /* @__PURE__ */ fe('<div class="vertical-scrollbar svelte-d1fz7o"><div class="pill svelte-d1fz7o"><div class="label svelte-d1fz7o"> </div></div></div>');
const p1 = {
  hash: "svelte-d1fz7o",
  code: ".vertical-scrollbar.svelte-d1fz7o {position:absolute;right:0;top:0;width:var(--width);height:calc(100% - var(--offset-bottom));contain:layout;cursor:row-resize;transition:opacity 200ms linear;user-select:none;background-color:var(--scrollbar-bg);}.vertical-scrollbar.svelte-d1fz7o:hover {opacity:1 !important;}.pill.svelte-d1fz7o {--pill-height: 4px;position:relative;pointer-events:none; /* let the container respond to pointer events */top:0;left:0;width:calc(var(--width) - 2px);margin-left:1px;margin-right:1px;height:var(--pill-height);border-radius:2px;will-change:transform;background-color:var(--scrollbar-pill-bg);}.label.svelte-d1fz7o {--offset: 0;position:absolute;pointer-events:none;top:0;left:-4px;font-family:var(--font-family);font-size:14px;white-space:nowrap;padding:2px 4px;box-shadow:var(--shadow);transform:translate(-100%, calc(-50% + var(--pill-height) / 2 - var(--offset)));border-radius:2px;color:var(--secondary-text-color);background-color:var(--scrollbar-label-bg);border:var(--outline);}"
};
function m1(o, n) {
  De(n, !0), We(o, p1);
  const i = we.verticalScrollbarController, s = we.controller, a = me.config;
  let f = /* @__PURE__ */ k(0), d = /* @__PURE__ */ k(0), _ = /* @__PURE__ */ k(null), m = /* @__PURE__ */ k(null), p = /* @__PURE__ */ k(null), b = /* @__PURE__ */ F(() => new Intl.NumberFormat().format(g(d))), C = 0;
  qr(() => (C = requestAnimationFrame(L), () => {
    cancelAnimationFrame(C);
  }));
  function S() {
    g(_) && (g(_).style.opacity = "0");
  }
  const O = bh.debounce(S, 1e3);
  Pe(() => {
    g(_) && (s.yScroll, g(_).style.opacity = "1", O());
  });
  function L() {
    I(f, i.pillPosition ?? g(f), !0), I(d, i.displayRow ?? g(d), !0), g(m) && (g(m).style.transform = `translate3d(0, ${g(f)}px, 0)`), g(p) && g(p).style.setProperty("--offset", i.labelOffset - 1 + "px"), C = requestAnimationFrame(L);
  }
  var W = _1();
  W.__pointerdown = function(...K) {
    i.handlePointerDown?.apply(this, K);
  }, W.__pointermove = function(...K) {
    i.handlePointerMove?.apply(this, K);
  }, W.__pointerup = function(...K) {
    i.handlePointerUp?.apply(this, K);
  };
  let M;
  var D = ve(W);
  let H;
  var G = ve(D), J = ve(G, !0);
  he(G), ot(G, (K) => I(p, K), () => g(p)), he(D), ot(D, (K) => I(m, K), () => g(m)), he(W), ot(W, (K) => I(_, K), () => g(_)), qe(() => {
    M = wt(W, "", M, {
      "--offset-bottom": a.horizontalScrollbarHeight + "px",
      "--width": a.verticalScrollbarWidth + "px"
    }), H = wt(D, "", H, {
      "--pill-height": i.pillHeight + "px"
    }), fn(J, g(b));
  }), $t(G, "clientHeight", (K) => i.labelHeight = K), $t(W, "clientHeight", (K) => i.elementHeight = K), ne(o, W), He();
}
An(["pointerdown", "pointermove", "pointerup"]);
var w1 = /* @__PURE__ */ fe('<div class="bigint-content svelte-1x1osq0"> </div>');
const b1 = {
  hash: "svelte-1x1osq0",
  code: ".bigint-content.svelte-1x1osq0 {text-align:right;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}"
};
function y1(o, n) {
  De(n, !0), We(o, b1);
  let i = zr(n, "height");
  function s(d) {
    return d === null ? null : d.toLocaleString();
  }
  var a = w1(), f = ve(a, !0);
  he(a), qe((d) => fn(f, d), [() => s(n.bigint)]), $t(a, "clientHeight", i), ne(o, a), He();
}
var x1 = /* @__PURE__ */ fe("<div></div>");
const C1 = { hash: "svelte-ubqfz9", code: "" };
function R1(o, n) {
  De(n, !0), We(o, C1);
  let i = zr(n, "height");
  const s = we.model, a = (p) => typeof p == "function" ? (b, C) => {
    let S = new p(b, C);
    return {
      ...S.update ? { update: S.update.bind(S) } : {},
      ...S.destroy ? { destroy: S.destroy.bind(S) } : {}
    };
  } : (b, C) => {
    let S = new p.class(b, C);
    return {
      ...S.update ? { update: S.update.bind(S) } : {},
      ...S.destroy ? { destroy: S.destroy.bind(S) } : {}
    };
  };
  let f = /* @__PURE__ */ F(() => a(n.customCell)), d = /* @__PURE__ */ F(() => s.getContent({ row: n.row, col: n.col })), _ = /* @__PURE__ */ F(() => s.getRowData(n.row));
  var m = x1();
  Vs(m, (p, b) => g(f)?.(p, b), () => ({ value: g(d), rowData: g(_) })), Ri(() => $t(m, "clientHeight", i)), ne(o, m), He();
}
var S1 = /* @__PURE__ */ fe('<img alt=""/>');
function E1(o, n) {
  De(n, !0);
  let i = zr(n, "height");
  me.config;
  let s = /* @__PURE__ */ k(null);
  function a(b) {
    let C = "";
    for (let S = 0; S < b.length; S++)
      C += String.fromCharCode(b[S]);
    return btoa(C);
  }
  function f(b) {
    const C = atob(b);
    return new Uint8Array([...C].map((S) => S.charCodeAt(0)));
  }
  function d(b, C) {
    if (b.length < C.length)
      return !1;
    for (let S = 0; S < C.length; S++)
      if (b[S] != C[S])
        return !1;
    return !0;
  }
  function _(b) {
    return d(b, [137, 80, 78, 71, 13, 10, 26, 10]) ? "image/png" : d(b, [255, 216, 255]) ? "image/jpeg" : d(b, [73, 73, 42, 0]) ? "image/tiff" : d(b, [66, 77]) ? "image/bmp" : d(b, [71, 73, 70, 56, 55, 97]) || d(b, [71, 73, 70, 56, 55, 97]) ? "image/gif" : "application/octet-stream";
  }
  function m(b) {
    if (b == null)
      return null;
    if (typeof b == "string")
      return b.startsWith("data:") ? b : `data:${_(f(b))};base64,` + b;
    {
      let C = null;
      if (b.bytes && b.bytes instanceof Uint8Array && (C = b.bytes), b instanceof Uint8Array && (C = b), C != null)
        return `data:${_(C)};base64,` + a(C);
    }
    return null;
  }
  var p = S1();
  ot(p, (b) => I(s, b), () => g(s)), qe((b) => wi(p, "src", b), [() => m(n.image)]), Wr("load", p, () => {
    g(s) && i(g(s).scrollHeight);
  }), cb(p), ne(o, p), He();
}
var T1 = /* @__PURE__ */ fe('<a target="_blank"> </a>'), A1 = /* @__PURE__ */ fe('<div class="link-content"><!></div>');
const I1 = { hash: "svelte-1wimtwv", code: "" };
function O1(o, n) {
  De(n, !0), We(o, I1);
  let i = zr(n, "height");
  var s = A1(), a = ve(s);
  {
    var f = (d) => {
      var _ = T1(), m = ve(_, !0);
      he(_), qe(() => {
        wi(_, "href", n.url), fn(m, n.url);
      }), ne(d, _);
    };
    gt(a, (d) => {
      n.url && d(f);
    });
  }
  he(s), $t(s, "clientHeight", i), ne(o, s), He();
}
var P1 = /* @__PURE__ */ fe('<div class="number-content svelte-1xfvszy"> </div>');
const L1 = {
  hash: "svelte-1xfvszy",
  code: ".number-content.svelte-1xfvszy {text-align:right;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}"
};
function F1(o, n) {
  De(n, !0), We(o, L1);
  let i = zr(n, "height");
  function s(d) {
    return d === null ? null : Number.isInteger(d) ? d.toString() : d.toPrecision(4).toString();
  }
  var a = P1(), f = ve(a, !0);
  he(a), qe((d) => fn(f, d), [() => s(n.number)]), $t(a, "clientHeight", i), ne(o, a), He();
}
var M1 = /* @__PURE__ */ fe("<div> </div>");
const D1 = {
  hash: "svelte-1ngffx0",
  code: ".clamped.svelte-1ngffx0 {display:-webkit-box;-webkit-box-orient:vertical;line-clamp:var(--lines, var(--num-lines)); /* fallback to numlines from parent */-webkit-line-clamp:var(--lines, var(--num-lines));overflow:hidden;text-overflow:ellipsis;}"
};
function mc(o, n) {
  De(n, !0), We(o, D1);
  let i = zr(n, "height");
  const s = me.config;
  let a = /* @__PURE__ */ k(null), f = /* @__PURE__ */ k(null);
  Pe(() => {
    g(a) && (i(g(a).scrollHeight), I(f, Math.floor(n.parentHeight / s.lineHeight), !0));
  });
  var d = M1();
  let _;
  var m = ve(d, !0);
  he(d), ot(d, (p) => I(a, p), () => g(a)), qe(() => {
    zn(d, 1, `text-content ${(n.clamped ? "clamped" : null) ?? ""}`, "svelte-1ngffx0"), _ = wt(d, "", _, { "--lines": g(f) }), fn(m, n.text);
  }), ne(o, d), He();
}
class H1 {
  #e = /* @__PURE__ */ k($e({}));
  get config() {
    return g(this.#e);
  }
  set config(n) {
    I(this.#e, n, !0);
  }
}
const Cs = Symbol("custom-cells");
class xo {
  static initialize() {
    qt(Cs, new H1());
  }
  static set config(n) {
    const i = dt(Cs);
    i.config = n;
  }
  static get config() {
    return dt(Cs).config;
  }
}
var W1 = /* @__PURE__ */ fe("<button>↘</button>"), N1 = /* @__PURE__ */ fe('<div class="cell-content clamp svelte-8bpcsh"><!> <!></div>');
const B1 = {
  hash: "svelte-8bpcsh",
  code: ".cell-content.svelte-8bpcsh {position:relative;flex-grow:1;line-height:var(--lineHeight);overflow-wrap:anywhere;overflow:hidden;}.expand-button.svelte-8bpcsh {all:unset;visibility:hidden;position:absolute;bottom:0;right:0;cursor:pointer;font-size:12px;line-height:18px;padding-left:4px;padding-right:4px;border-radius:2px;color:var(--secondary-text-color);background-color:var(--background-color);border:var(--outline);}.expand-button.show.svelte-8bpcsh {visibility:visible;}"
};
function k1(o, n) {
  De(n, !0), We(o, B1);
  const i = we.model, s = we.controller, a = we.schema, f = me.config;
  let d = /* @__PURE__ */ F(() => xo.config), _ = /* @__PURE__ */ k(0), m = /* @__PURE__ */ k(0), p = /* @__PURE__ */ F(() => g(m) > g(_));
  const b = i.getContent({ row: n.row, col: n.col }), C = a.dataType[n.col] ?? "string", S = a.sqlType[n.col] ?? "TEXT";
  function O(U) {
    return typeof U == "string" && (U.startsWith("http://") || U.startsWith("https://"));
  }
  function L(U) {
    return U == null ? !1 : !!(typeof U == "string" && U.startsWith("data:image/") || U.bytes && U.bytes instanceof Uint8Array);
  }
  var W = N1();
  let M;
  var D = ve(W);
  {
    var H = (U) => {
      R1(U, {
        get row() {
          return n.row;
        },
        get col() {
          return n.col;
        },
        get customCell() {
          return g(d)[n.col];
        },
        get height() {
          return g(m);
        },
        set height(q) {
          I(m, q, !0);
        }
      });
    }, G = (U) => {
      var q = $n(), de = At(q);
      {
        var $ = (Ae) => {
          var be = $n(), le = At(be);
          {
            var Ce = (Se) => {
              O1(Se, {
                get url() {
                  return b;
                },
                get height() {
                  return g(m);
                },
                set height(Fe) {
                  I(m, Fe, !0);
                }
              });
            }, ze = (Se) => {
              mc(Se, {
                get text() {
                  return b;
                },
                get clamped() {
                  return g(p);
                },
                get parentHeight() {
                  return g(_);
                },
                get height() {
                  return g(m);
                },
                set height(Fe) {
                  I(m, Fe, !0);
                }
              });
            };
            gt(le, (Se) => {
              b && O(b) ? Se(Ce) : Se(ze, !1);
            });
          }
          ne(Ae, be);
        }, Te = (Ae) => {
          var be = $n(), le = At(be);
          {
            var Ce = (Se) => {
              var Fe = $n(), lt = At(Fe);
              {
                var bt = (ye) => {
                  {
                    let Kt = /* @__PURE__ */ F(() => BigInt(b ?? ""));
                    y1(ye, {
                      get bigint() {
                        return g(Kt);
                      },
                      get height() {
                        return g(m);
                      },
                      set height(Un) {
                        I(m, Un, !0);
                      }
                    });
                  }
                }, Pt = (ye) => {
                  F1(ye, {
                    get number() {
                      return b;
                    },
                    get height() {
                      return g(m);
                    },
                    set height(Kt) {
                      I(m, Kt, !0);
                    }
                  });
                };
                gt(lt, (ye) => {
                  S === "BIGINT" ? ye(bt) : ye(Pt, !1);
                });
              }
              ne(Se, Fe);
            }, ze = (Se) => {
              var Fe = $n(), lt = At(Fe);
              {
                var bt = (ye) => {
                  E1(ye, {
                    get image() {
                      return b;
                    },
                    get height() {
                      return g(m);
                    },
                    set height(Kt) {
                      I(m, Kt, !0);
                    }
                  });
                }, Pt = (ye) => {
                  mc(ye, {
                    get text() {
                      return b;
                    },
                    get clamped() {
                      return g(p);
                    },
                    get parentHeight() {
                      return g(_);
                    },
                    get height() {
                      return g(m);
                    },
                    set height(Kt) {
                      I(m, Kt, !0);
                    }
                  });
                };
                gt(
                  lt,
                  (ye) => {
                    L(b) ? ye(bt) : ye(Pt, !1);
                  },
                  !0
                );
              }
              ne(Se, Fe);
            };
            gt(
              le,
              (Se) => {
                C === "number" ? Se(Ce) : Se(ze, !1);
              },
              !0
            );
          }
          ne(Ae, be);
        };
        gt(
          de,
          (Ae) => {
            C === "string" ? Ae($) : Ae(Te, !1);
          },
          !0
        );
      }
      ne(U, q);
    };
    gt(D, (U) => {
      g(d)[n.col] ? U(H) : U(G, !1);
    });
  }
  var J = Ut(D, 2);
  {
    var K = (U) => {
      var q = W1();
      q.__click = () => {
        s.addHeightToRow(n.row, g(m) - g(_));
      }, qe(() => zn(q, 1, `expand-button ${n.hovered ? "show" : "hide"}`, "svelte-8bpcsh")), ne(U, q);
    };
    gt(J, (U) => {
      g(p) && U(K);
    });
  }
  he(W), qe(() => M = wt(W, "", M, {
    "--lineHeight": f.lineHeight + "px",
    "--num-lines": f.textMaxLines
  })), $t(W, "clientHeight", (U) => I(_, U)), ne(o, W), He();
}
An(["click"]);
var q1 = /* @__PURE__ */ fe('<div class="row-number svelte-1e2x749"> </div>');
const z1 = {
  hash: "svelte-1e2x749",
  code: ".row-number.svelte-1e2x749 {flex-grow:1;text-align:right;color:var(--secondary-text-color);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}"
};
function U1(o, n) {
  De(n, !0), We(o, z1);
  const s = we.model.getContent({ row: n.row, col: n.col }), a = /* @__PURE__ */ F(() => new Intl.NumberFormat().format(s ?? 0));
  var f = q1(), d = ve(f, !0);
  he(f), qe(() => fn(d, g(a))), ne(o, f), He();
}
var G1 = /* @__PURE__ */ fe('<div class="cell svelte-16dgxhm"><!></div>');
const K1 = {
  hash: "svelte-16dgxhm",
  code: ".cell.svelte-16dgxhm {--x: 0px;--y: 0px;--width: 0px;--height: 0px;display:flex;box-sizing:border-box;padding-top:calc(var(--padding-y) / 2);padding-bottom:calc(var(--padding-y) / 2);padding-right:calc(calc(var(--padding-x) / 2) + var(--extra-right-padding));padding-left:calc(calc(var(--padding-x) / 2) + var(--extra-left-padding));position:absolute;left:0;top:0;width:var(--width);height:var(--height);transform:translate(var(--x), var(--y));contain:layout paint;color:var(--primary-text-color);font-family:var(--cell-font-family);font-size:var(--cell-font-size);}"
};
function Y1(o, n) {
  De(n, !0), We(o, K1);
  const i = we.model, s = we.controller, a = we.overscrollModifier, f = me.config;
  let d = /* @__PURE__ */ F(() => i.getPosition({ row: n.row, col: n.col })), _ = /* @__PURE__ */ F(() => g(d).x), m = /* @__PURE__ */ F(() => g(d).y), p = /* @__PURE__ */ F(() => a.y(g(m))), b = /* @__PURE__ */ F(() => i.getDimensions({ row: n.row, col: n.col })), C = /* @__PURE__ */ F(() => g(b).width), S = /* @__PURE__ */ F(() => g(b).height), O = /* @__PURE__ */ F(() => i.isFirstCol(n.col)), L = /* @__PURE__ */ F(() => i.isLastCol(n.col)), W = /* @__PURE__ */ F(() => i.getRowParity(n.row) === "even" ? "var(--primary-bg)" : "var(--secondary-bg)"), M = () => {
    f.onRowClick && f.onRowClick(n.row);
  }, D = /* @__PURE__ */ k(!1);
  var H = G1();
  H.__click = M, H.__keydown = (q) => {
    q.key === "Enter" && M();
  };
  let G;
  var J = ve(H);
  {
    var K = (q) => {
      k1(q, {
        get row() {
          return n.row;
        },
        get col() {
          return n.col;
        },
        get hovered() {
          return g(D);
        }
      });
    }, U = (q) => {
      U1(q, {
        get row() {
          return n.row;
        },
        get col() {
          return n.col;
        }
      });
    };
    gt(J, (q) => {
      n.col !== ct ? q(K) : q(U, !1);
    });
  }
  he(H), qe(() => G = wt(H, "", G, {
    "--x": g(_) + "px",
    "--y": g(p) + "px",
    "--width": g(C) + "px",
    "--height": g(S) + "px",
    "--padding-x": f.betweenColPadding + "px",
    "--padding-y": f.betweenRowPadding + "px",
    "--extra-right-padding": (g(L) ? f.verticalScrollbarWidth : 0) + "px",
    "--extra-left-padding": (g(O) ? f.firstColLeftPadding : 0) + "px",
    "--background-color": g(W)
  })), Wr("pointerenter", H, () => {
    I(D, !0), s.hoveredRowId = n.row;
  }), Wr("pointerleave", H, () => {
    I(D, !1), s.hoveredRowId = null;
  }), ne(o, H), He();
}
An(["click", "keydown"]);
var X1 = /* @__PURE__ */ fe('<div class="header-title svelte-1si5830"> </div>');
const Z1 = {
  hash: "svelte-1si5830",
  code: ".header-title.svelte-1si5830 {flex-shrink:1;margin-right:2px;}"
};
function J1(o, n) {
  De(n, !0), We(o, Z1);
  const i = me.config;
  var s = X1(), a = ve(s, !0);
  he(s), qe(() => fn(a, i.columnConfigs[n.col]?.title ?? n.col)), ne(o, s), He();
}
Lw();
var V1 = /* @__PURE__ */ fe('<div class="row-number-header svelte-v1uha2">#</div>');
const Q1 = {
  hash: "svelte-v1uha2",
  code: ".row-number-header.svelte-v1uha2 {flex-grow:1;text-align:right;margin-right:4px;box-sizing:border-box;color:var(--secondary-text-color);}"
};
function j1(o) {
  We(o, Q1);
  var n = V1();
  ne(o, n);
}
var $1 = /* @__PURE__ */ fe('<button class="sort-buttons svelte-mgubjs"><div> </div></button>');
const ey = {
  hash: "svelte-mgubjs",
  code: ".sort-buttons.svelte-mgubjs {all:unset;flex-shrink:0;width:16px;cursor:pointer;display:flex;justify-content:center;flex-direction:row;margin-left:4px;border-radius:2px;padding-left:4px;padding-right:4px;color:var(--tertiary-text-color);}.sort-buttons.svelte-mgubjs:hover {--placeholder: 0;background-color:var(--hover-bg);}.sort-glyph.svelte-mgubjs {color:var(--tertiary-text-color);}.sort-buttons.svelte-mgubjs:hover .sort-glyph:where(.svelte-mgubjs) {color:var(--tertiary-text-color);}.selected.svelte-mgubjs {color:var(--primary-text-color) !important;}"
};
function ty(o, n) {
  De(n, !0), We(o, ey);
  const i = we.controller;
  let s = /* @__PURE__ */ F(() => i.sort ? i.sort.column === n.col : !1), a = /* @__PURE__ */ F(() => i.sort ? i.sort.direction : null), f = /* @__PURE__ */ F(() => g(s) ? g(a) === "ascending" ? "↑" : "↓" : "⇅");
  var d = $1();
  d.__click = () => {
    const p = g(s) ? g(a) === "ascending" ? "descending" : null : "ascending";
    p ? i.handleSort({ column: n.col, direction: p }) : i.handleSort(null);
  };
  var _ = ve(d), m = ve(_, !0);
  he(_), he(d), qe(() => {
    zn(_, 1, `sort-button ${(g(s) ? "selected" : null) ?? ""} sort-glyph`, "svelte-mgubjs"), fn(m, g(f));
  }), ne(o, d), He();
}
An(["click"]);
class ny {
  #e = /* @__PURE__ */ k($e({}));
  get config() {
    return g(this.#e);
  }
  set config(n) {
    I(this.#e, n, !0);
  }
}
const Rs = Symbol("custom-headers");
class Co {
  static initialize() {
    qt(Rs, new ny());
  }
  static set config(n) {
    const i = dt(Rs);
    i.config = n;
  }
  static get config() {
    return dt(Rs).config;
  }
}
var ry = /* @__PURE__ */ fe("<div></div>");
const iy = { hash: "svelte-v680az", code: "" };
function oy(o, n) {
  De(n, !0), We(o, iy), we.model;
  const i = (f) => typeof f == "function" ? (d, _) => {
    let m = new f(d, _);
    return {
      ...m.update ? { update: m.update.bind(m) } : {},
      ...m.destroy ? { destroy: m.destroy.bind(m) } : {}
    };
  } : (d, _) => {
    let m = new f.class(d, _);
    return {
      ...m.update ? { update: m.update.bind(m) } : {},
      ...m.destroy ? { destroy: m.destroy.bind(m) } : {}
    };
  };
  let s = /* @__PURE__ */ F(() => i(n.customHeader));
  var a = ry();
  Vs(a, (f, d) => g(s)?.(f, d), () => ({ column: n.col })), ne(o, a), He();
}
var ly = /* @__PURE__ */ fe("<!> <!>", 1), sy = /* @__PURE__ */ fe('<div><div class="header-content svelte-1vl6s3u"><!> <div class="header-title svelte-1vl6s3u"><!></div></div></div>');
const uy = {
  hash: "svelte-1vl6s3u",
  code: ".header-cell.svelte-1vl6s3u {position:relative;display:flex;flex-direction:row;align-items:end;width:var(--width);min-height:var(--height);flex-shrink:0;box-sizing:border-box;padding:0.25em;padding-right:calc(calc(var(--padding-x) / 2) + var(--extra-padding-right));padding-left:calc(calc(var(--padding-x) / 2) + var(--extra-padding-left));color:var(--secondary-text-color);font-family:var(--header-font-family);font-size:var(--header-font-size);}.header-cell.number.svelte-1vl6s3u {justify-content:end;}.header-content.svelte-1vl6s3u {display:flex;flex-direction:column;flex-shrink:0;}.header-title.svelte-1vl6s3u {height:1.5em;align-items:center;display:flex;flex-direction:row;flex-shrink:0;}"
};
function ay(o, n) {
  De(n, !0), We(o, uy);
  const i = we.model, s = we.schema, a = me.config;
  let f = /* @__PURE__ */ F(() => Co.config), d = /* @__PURE__ */ k(null), _ = /* @__PURE__ */ k(0);
  Pe(() => {
    a.minColumnWidths[n.col] = g(_) + a.betweenColPadding;
  });
  const m = /* @__PURE__ */ F(() => i.colWidths[n.col]), p = /* @__PURE__ */ F(() => (s.dataType[n.col] ?? "string") === "number"), b = /* @__PURE__ */ F(() => g(p) || n.col === ct ? "number" : ""), C = /* @__PURE__ */ F(() => i.isFirstCol(n.col)), S = /* @__PURE__ */ F(() => i.isLastCol(n.col));
  let O = /* @__PURE__ */ F(() => a.headerHeight ? a.headerHeight + "px" : "auto");
  var L = sy();
  let W;
  var M = ve(L), D = ve(M);
  {
    var H = (q) => {
      oy(q, {
        get col() {
          return n.col;
        },
        get customHeader() {
          return g(f)[n.col];
        }
      });
    };
    gt(D, (q) => {
      g(f)[n.col] && q(H);
    });
  }
  var G = Ut(D, 2), J = ve(G);
  {
    var K = (q) => {
      var de = ly(), $ = At(de);
      J1($, {
        get col() {
          return n.col;
        }
      });
      var Te = Ut($, 2);
      ty(Te, {
        get col() {
          return n.col;
        }
      }), ne(q, de);
    }, U = (q) => {
      j1(q);
    };
    gt(J, (q) => {
      n.col !== ct ? q(K) : q(U, !1);
    });
  }
  he(G), he(M), he(L), ot(L, (q) => I(d, q), () => g(d)), qe(() => {
    zn(L, 1, `header-cell ${g(b) ?? ""}`, "svelte-1vl6s3u"), W = wt(L, "", W, {
      "--width": g(m) + "px",
      "--height": g(O),
      "--padding-x": a.betweenColPadding + "px",
      "--extra-padding-right": (g(S) ? a.verticalScrollbarWidth : 0) + "px",
      "--extra-padding-left": (g(C) ? a.firstColLeftPadding : 0) + "px"
    });
  }), $t(M, "clientWidth", (q) => I(_, q)), ne(o, L), He();
}
class fy {
  tableModel;
  tableController;
  col;
  config;
  isDragging = !1;
  startDragX = 0;
  constructor({ tableModel: n, tableController: i, col: s }) {
    this.tableModel = n, this.tableController = i, this.col = s, this.config = me.config;
  }
  handlePointerDown = (n) => {
    n.preventDefault(), n.target.setPointerCapture(n.pointerId), this.isDragging = !0, this.startDragX = n.offsetX;
  };
  handlePointerMove = (n) => {
    if (this.isDragging && this.startDragX !== null) {
      const i = n.offsetX - this.startDragX, s = this.tableModel.colWidths[this.col], a = Math.max(0, Math.round(s + i));
      this.config.columnConfigs[this.col] || (this.config.columnConfigs[this.col] = {}), this.config.columnConfigs[this.col].width = a, this.config.onColumnConfigsChange(this.col, Hc(this.config.columnConfigs));
    }
  };
  handlePointerUp = (n) => {
    n.target.releasePointerCapture(n.pointerId), this.isDragging = !1, this.startDragX = null;
  };
}
var cy = /* @__PURE__ */ fe('<div class="header-resize-indicator svelte-1y4d3p9"><div class="pill svelte-1y4d3p9"></div></div>');
const hy = {
  hash: "svelte-1y4d3p9",
  code: ".header-resize-indicator.svelte-1y4d3p9 {position:absolute;z-index:2;box-sizing:border-box;width:12px;height:calc(100% - 0.25rem);margin:2px;cursor:col-resize;justify-content:center;display:flex;align-items:center;justify-content:center;transform:translateX(calc(var(--x) - 4px - 50%));}.pill.svelte-1y4d3p9 {width:2px;height:calc(100% - 4px);margin-top:2px;margin-bottom:2px;background-color:var(--secondary-text-color);opacity:0.2;border-radius:2px;}"
};
function dy(o, n) {
  De(n, !0), We(o, hy);
  const i = we.model;
  let s = new fy({
    tableModel: i,
    tableController: we.controller,
    col: n.col
  });
  const a = /* @__PURE__ */ F(() => i.colPositions[n.col] + i.colWidths[n.col]);
  var f = cy();
  f.__pointerdown = function(..._) {
    s.handlePointerDown?.apply(this, _);
  }, f.__pointermove = function(..._) {
    s.handlePointerMove?.apply(this, _);
  }, f.__pointerup = function(..._) {
    s.handlePointerUp?.apply(this, _);
  };
  let d;
  qe(() => d = wt(f, "", d, { "--x": g(a) + "px" })), ne(o, f), He();
}
An(["pointerdown", "pointermove", "pointerup"]);
var gy = /* @__PURE__ */ fe('<div class="table-portal svelte-i8g41o" tabindex="-1"><!></div>');
const vy = {
  hash: "svelte-i8g41o",
  code: ".table-portal.svelte-i8g41o {position:absolute;}"
};
function _y(o, n) {
  De(n, !0), We(o, vy);
  const i = we.controller, s = we.tablePortalController;
  let a = /* @__PURE__ */ k(null);
  const f = (b) => {
    Pe(() => (s.mount(b, n.relativeTo, n.anchor, n.horizontalAlign, n.verticalAlign), b.focus(), () => {
      s.destroy(b);
    }));
  };
  let d = 0;
  qr(() => {
    d = i.xScroll, requestAnimationFrame(_);
  });
  function _() {
    g(a) && n.stickyX && (g(a).style.transform = `translateX(${i.xScroll - d}px)`), requestAnimationFrame(_);
  }
  var m = gy();
  m.__click = (b) => {
    b.stopPropagation();
  };
  var p = ve(m);
  Js(p, () => n.children), he(m), ot(m, (b) => I(a, b), () => g(a)), Vs(m, (b) => f?.(b)), Wr("wheel", m, (b) => {
    b.stopPropagation();
  }), ne(o, m), He();
}
An(["click"]);
var py = /* @__PURE__ */ fe("<button> </button> <!>", 1);
const my = {
  hash: "svelte-3t0u29",
  code: '.dropdown.svelte-3t0u29 {all:unset;padding-left:8px;padding-right:8px;border-radius:2px;cursor:pointer;color:var(--secondary-text-color);position:relative;user-select:none;}.dropdown.svelte-3t0u29::before {content:"";position:absolute;top:0;left:0;height:100%;width:100%;background-color:var(--primary-bg);z-index:-1;}.dropdown.svelte-3t0u29:hover {background-color:var(--hover-bg);}.unclickable.svelte-3t0u29 {pointer-events:none;}'
};
function wy(o, n) {
  We(o, my);
  let i = /* @__PURE__ */ k(!1), s = /* @__PURE__ */ k(null), a = /* @__PURE__ */ k(null);
  var f = py();
  Wr("click", Es, (b) => {
    g(i) && b.target !== g(s) && I(i, !1);
  });
  var d = At(f);
  d.__click = (b) => {
    I(i, !0);
  };
  var _ = ve(d, !0);
  he(d), ot(d, (b) => I(s, b), () => g(s));
  var m = Ut(d, 2);
  {
    var p = (b) => {
      _y(b, {
        get relativeTo() {
          return n.relativeTo;
        },
        anchor: "outside",
        horizontalAlign: "left",
        verticalAlign: "top",
        stickyX: !1,
        get element() {
          return g(a);
        },
        set element(C) {
          I(a, C, !0);
        },
        children: (C, S) => {
          var O = $n(), L = At(O);
          Js(L, () => n.children), ne(C, O);
        },
        $$slots: { default: !0 }
      });
    };
    gt(m, (b) => {
      g(i) && b(p);
    });
  }
  qe(() => {
    zn(d, 1, `dropdown ${g(i) ? "unclickable" : "clickable"}`, "svelte-3t0u29"), fn(_, n.label);
  }), ne(o, f);
}
An(["click"]);
var by = /* @__PURE__ */ fe('<li class="column-entry svelte-bmvlb6"><label class="column-label svelte-bmvlb6"> <input type="checkbox"/></label></li>'), yy = /* @__PURE__ */ fe('<ul class="column-toggle svelte-bmvlb6"></ul>'), xy = /* @__PURE__ */ fe("<!> <!>", 1), Cy = /* @__PURE__ */ fe('<div class="header-row svelte-bmvlb6"><div class="scroll-container svelte-bmvlb6"><div class="dropdown-label-container svelte-bmvlb6"><div class="dropdown-label svelte-bmvlb6"><!></div></div> <!></div></div>');
const Ry = {
  hash: "svelte-bmvlb6",
  code: ".header-row.svelte-bmvlb6 {flex-shrink:0;border-bottom:1px solid var(--secondary-bg);background-color:var(--primary-bg);}.scroll-container.svelte-bmvlb6 {display:flex;flex-direction:row;}.dropdown-label-container.svelte-bmvlb6 {position:absolute;z-index:20;left:0px;box-sizing:border-box;height:100%;padding:0.25em;display:flex;flex-direction:row;align-items:end;}.dropdown-label.svelte-bmvlb6 {height:1.5em;align-items:center;display:flex;}.column-toggle.svelte-bmvlb6 {margin:0;margin-top:4px;margin-left:8px;padding:12px;background-color:var(--primary-bg);border-radius:4px;box-shadow:var(--shadow);border:var(--outline);max-height:var(--max-height);max-width:var(--max-width);overflow:scroll;}.column-entry.svelte-bmvlb6 {list-style-type:none;padding:4px;user-select:none;}.column-label.svelte-bmvlb6 {display:flex;align-items:center;justify-content:space-between;gap:16px;color:var(--secondary-text-color);}"
};
function Sy(o, n) {
  De(n, !0), We(o, Ry);
  const i = we.model, s = we.controller, a = me.config;
  let f = /* @__PURE__ */ k(null), d = /* @__PURE__ */ k(null), _ = /* @__PURE__ */ k(null), m = /* @__PURE__ */ F(() => i.renderableCols), p = 0;
  qr(() => (p = requestAnimationFrame(b), () => {
    cancelAnimationFrame(p);
  }));
  function b() {
    g(d) && (g(d).style.transform = `translate3d(${s.xScroll}px, 0, 0)`), g(_) && (g(_).style.transform = `translate3d(${-s.xScroll}px, 0, 0)`), p = requestAnimationFrame(b);
  }
  var C = Cy(), S = ve(C), O = ve(S), L = ve(O), W = ve(L);
  wy(W, {
    label: "⋮",
    get relativeTo() {
      return g(f);
    },
    children: (D, H) => {
      var G = yy();
      let J;
      _i(G, 21, () => i.columns, Cb, (K, U) => {
        var q = by(), de = ve(q), $ = ve(de), Te = Ut($);
        Pb(Te), Te.__change = (Ae) => {
          Ae.target.checked ? s.showColumn(g(U)) : s.hideColumn(g(U));
        }, wt(Te, "", {}, { float: "right" }), he(de), he(q), qe(() => {
          fn($, `${(g(U) === ct ? "row #" : a.columnConfigs[g(U)]?.title ?? g(U)) ?? ""} `), wi(Te, "id", `${g(U) ?? ""}-checkbox`), Lb(Te, g(U) === ct ? a.showRowNumber !== !1 : !a.columnConfigs[g(U)]?.hidden);
        }), ne(K, q);
      }), he(G), qe(() => J = wt(G, "", J, {
        "--max-height": s.viewHeight - 48 + "px",
        "--max-width": s.viewWidth - 48 + "px"
      })), ne(D, G);
    }
  }), he(L), ot(L, (D) => I(_, D), () => g(_)), he(O);
  var M = Ut(O, 2);
  _i(M, 16, () => g(m), (D) => D, (D, H) => {
    var G = xy(), J = At(G);
    ay(J, {
      get col() {
        return H;
      }
    });
    var K = Ut(J, 2);
    dy(K, {
      get col() {
        return H;
      }
    }), ne(D, G);
  }), he(S), ot(S, (D) => I(d, D), () => g(d)), he(C), ot(C, (D) => I(f, D), () => g(f)), ne(o, C), He();
}
An(["change"]);
class Ey {
  #e = /* @__PURE__ */ k(null);
  get colorScheme() {
    return g(this.#e);
  }
  set colorScheme(n) {
    I(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ k($e({}));
  get theme() {
    return g(this.#t);
  }
  set theme(n) {
    I(this.#t, n, !0);
  }
}
const wc = Symbol("style");
class Ds {
  static initialize() {
    qt(wc, new Ey());
  }
  static get style() {
    return dt(wc);
  }
}
function Ty(o, n) {
  return { ...o, ...o[n] != null ? o[n] : {} };
}
var Ay = /* @__PURE__ */ fe("<div><!></div>");
const Iy = {
  hash: "svelte-c7n1rn",
  code: ".table-defaults.light.svelte-c7n1rn {--default-primary-text-color: black;--default-secondary-text-color: gray;--default-tertiary-text-color: lightgray;--default-font-family: sans-serif;--default-font-size: 1rem;--default-primary-bg: white;--default-secondary-bg: rgb(246, 246, 247);--default-tertiary-bg: rgb(234, 234, 235);--default-hover-bg: rgba(0, 0, 0, 0.05);--default-scrollbar-bg: rgba(0, 0, 0, 0.05);--default-scrollbar-pill-bg: rgba(0, 0, 0, 0.5);--default-scrollbar-label-bg: rgba(255, 255, 255, 0.9);--default-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--default-outline-color: rgb(0 0 0 / 0.2);--default-dimmed-row-color: rgb(0 0 0 / 0.2);--default-row-scroll-to-color: rgb(202 225 255);--default-row-hover-color: rgb(220, 235, 255);}.table-defaults.dark.svelte-c7n1rn {--default-primary-text-color: lightgray;--default-secondary-text-color: gray;--default-tertiary-text-color: dimgray;--default-font-family: sans-serif;--default-font-size: 1rem;--default-primary-bg: #060607;--default-secondary-bg: #161617;--default-hover-bg: rgba(255, 255, 255, 0.05);--default-scrollbar-bg: rgba(255, 255, 255, 0.05);--default-scrollbar-pill-bg: rgba(255, 255, 255, 0.5);--default-scrollbar-label-bg: rgba(0, 0, 0, 0.9);--default-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--default-outline-color: rgb(255 255 255 / 0.2);--default-dimmed-row-color: rgb(0 0 0 / 0.6);--default-row-scroll-to-color: rgb(1, 24, 106);--default-row-hover-color: rgb(0, 6, 35);}.style-wrapper.svelte-c7n1rn {width:100%;height:100%;--primary-text-color: var(--user-primary-text-color, var(--default-primary-text-color));--secondary-text-color: var(--user-secondary-text-color, var(--default-secondary-text-color));--tertiary-text-color: var(--user-tertiary-text-color, var(--default-tertiary-text-color));--font-family: var(--user-font-family, var(--default-font-family));--font-size: var(--user-font-size, var(--default-font-size));--primary-bg: var(--user-primary-bg, var(--default-primary-bg));--secondary-bg: var(--user-secondary-bg, var(--default-secondary-bg));--tertiary-bg: var(--user-tertiarty-bg, var(--default-tertiary-bg));--hover-bg: var(--user-hover-bg, var(--default-hover-bg));--header-font-family: var(--user-header-font-family, var(--font-family));--header-font-size: var(--user-header-font-size, var(--font-size));--cell-font-family: var(--user-cell-font-family, var(--font-family));--cell-font-size: var(--user-cell-font-size, var(--font-size));--scrollbar-bg: var(--user-scrollbar-bg, var(--default-scrollbar-bg));--scrollbar-pill-bg: var(--user-scrollbar-pill-bg, var(--default-scrollbar-pill-bg));--scrollbar-label-bg: var(--user-scrollbar-label-bg, var(--default-scrollbar-label-bg));--shadow: var(--user-shadow, var(--default-shadow));--outline-color: var(--user-outline-color, var(--default-outline-color));--outline: 0.5px solid var(--outline-color);--dimmed-row-color: var(--user-dimmed-row-color, var(--default-dimmed-row-color));--row-scroll-to-color: var(--user-row-scroll-to-color, var(--default-row-scroll-to-color));--row-hover-color: var(--user-row-hover-color, var(--default-row-hover-color));}"
};
function Oy(o, n) {
  De(n, !0), We(o, Iy);
  const i = Ds.style;
  let s = /* @__PURE__ */ F(() => i.colorScheme), a = /* @__PURE__ */ F(() => i.theme), f = /* @__PURE__ */ k(null), d = /* @__PURE__ */ F(() => g(s) ?? g(f) ?? "light");
  const _ = (Fe) => {
    Fe.matches ? I(f, "dark") : I(f, "light");
  }, m = "(prefers-color-scheme: dark";
  qr(() => (I(f, window.matchMedia(m).matches ? "dark" : "light", !0), window.matchMedia(m).addEventListener("change", _), () => {
    window.matchMedia(m).removeEventListener("change", _);
  }));
  let p = /* @__PURE__ */ F(() => Ty(g(a), g(d))), b = /* @__PURE__ */ F(() => g(p).primaryTextColor), C = /* @__PURE__ */ F(() => g(p).secondaryTextColor), S = /* @__PURE__ */ F(() => g(p).tertiaryTextColor), O = /* @__PURE__ */ F(() => g(p).fontFamily), L = /* @__PURE__ */ F(() => g(p).fontSize), W = /* @__PURE__ */ F(() => g(p).primaryBackgroundColor), M = /* @__PURE__ */ F(() => g(p).secondaryBackgroundColor), D = /* @__PURE__ */ F(() => g(p).hoverBackgroundColor), H = /* @__PURE__ */ F(() => g(p).headerFontFamily), G = /* @__PURE__ */ F(() => g(p).headerFontSize), J = /* @__PURE__ */ F(() => g(p).cellFontFamily), K = /* @__PURE__ */ F(() => g(p).cellFontSize), U = /* @__PURE__ */ F(() => g(p).scrollbarBackgroundColor), q = /* @__PURE__ */ F(() => g(p).scrollbarPillColor), de = /* @__PURE__ */ F(() => g(p).scrollbarLabelBackgroundColor), $ = /* @__PURE__ */ F(() => g(p).shadow), Te = /* @__PURE__ */ F(() => g(p).outlineColor), Ae = /* @__PURE__ */ F(() => g(p).dimmedRowColor), be = /* @__PURE__ */ F(() => g(p).rowScrollToColor), le = /* @__PURE__ */ F(() => g(p).rowHoverColor);
  Pe(() => {
  });
  var Ce = Ay();
  let ze;
  var Se = ve(Ce);
  Js(Se, () => n.children), he(Ce), qe(() => {
    zn(Ce, 1, `style-wrapper table-defaults ${g(d) ?? ""}`, "svelte-c7n1rn"), ze = wt(Ce, "", ze, {
      "--user-primary-text-color": g(b),
      "--user-secondary-text-color": g(C),
      "--user-tertiary-text-color": g(S),
      "--user-font-family": g(O),
      "--user-font-size": g(L),
      "--user-primary-bg": g(W),
      "--user-secondary-bg": g(M),
      "--user-hover-bg": g(D),
      "--user-header-font-family": g(H),
      "--user-header-font-size": g(G),
      "--user-cell-font-family": g(J),
      "--user-cell-font-size": g(K),
      "--user-scrollbar-bg": g(U),
      "--user-scrollbar-pill-bg": g(q),
      "--user-scrollbar-label-bg": g(de),
      "--user-shadow": g($),
      "--user-outline-color": g(Te),
      "--user-dimmed-row-color": g(Ae),
      "--user-row-scroll-to-color": g(be),
      "--user-row-hover-color": g(le)
    });
  }), ne(o, Ce), He();
}
function Py() {
  return ct;
}
function Ly(o, n) {
  const i = new Set(o), s = new Set(n);
  return {
    left: o.filter((a) => !s.has(a)),
    right: n.filter((a) => !i.has(a))
  };
}
function Fy(o, n) {
  const i = new Set(n);
  return o.filter((s) => !i.has(s));
}
function My(o, n) {
  return o.concat(n);
}
var Dy = /* @__PURE__ */ fe("<div></div>"), Hy = /* @__PURE__ */ fe("<div></div> <!>", 1);
const Wy = {
  hash: "svelte-14dgpd0",
  code: ".row-background.svelte-14dgpd0 {position:absolute;width:var(--width);height:var(--height);box-sizing:border-box;z-index:-1;transform:translate3d(0, var(--y), 0);transition:background-color 100ms linear;}.odd.svelte-14dgpd0 {background-color:var(--secondary-bg);}.even.svelte-14dgpd0 {background-color:var(--primary-bg);}.dimmer.svelte-14dgpd0 {background-color:var(--dimmed-row-color);z-index:10;pointer-events:none;}.flashed.svelte-14dgpd0 {background-color:var(--row-scroll-to-color);}.hovered.svelte-14dgpd0 {background-color:var(--row-hover-color);}"
};
function Ny(o, n) {
  De(n, !0), We(o, Wy);
  const i = we.controller, s = we.model, a = we.overscrollModifier, f = me.config;
  let d = /* @__PURE__ */ F(() => s.rowHeights[n.row]), _ = /* @__PURE__ */ F(() => Math.max(s.colsRightmostPosition, i.viewWidth)), m = /* @__PURE__ */ F(() => a.y(s.rowPositions[n.row])), p = /* @__PURE__ */ F(() => s.getRowParity(n.row)), b = /* @__PURE__ */ F(() => i.flashedRowId === n.row), C = /* @__PURE__ */ F(() => i.hoveredRowId === n.row), S = /* @__PURE__ */ F(() => f.highlightedRows ? f.highlightedRows?.has(n.row) : null);
  var O = Hy(), L = At(O);
  let W;
  var M = Ut(L, 2);
  {
    var D = (H) => {
      var G = Dy();
      let J;
      qe(() => {
        zn(G, 1, `row-background ${g(p) ?? ""} dimmer`, "svelte-14dgpd0"), J = wt(G, "", J, {
          "--width": g(_) + "px",
          "--height": g(d) + "px",
          "--y": g(m) + "px"
        });
      }), ne(H, G);
    };
    gt(M, (H) => {
      g(S) !== null && !g(S) && H(D);
    });
  }
  qe(() => {
    zn(L, 1, `row-background ${g(p) ?? ""} ${(g(b) ? "flashed" : null) ?? ""} ${(g(C) && f.highlightHoveredRow ? "hovered" : null) ?? ""}`, "svelte-14dgpd0"), W = wt(L, "", W, {
      "--width": g(_) + "px",
      "--height": g(d) + "px",
      "--y": g(m) + "px"
    });
  }), ne(o, O), He();
}
var By = /* @__PURE__ */ fe("<!> <!>", 1), ky = /* @__PURE__ */ fe('<div class="scroll-container svelte-1v3p82v"><!></div> <!> <!>', 1), qy = /* @__PURE__ */ fe('<div class="table svelte-1v3p82v"><!> <div class="table-contents svelte-1v3p82v"><!></div></div>');
const zy = {
  hash: "svelte-1v3p82v",
  code: ".table.svelte-1v3p82v {width:100%;max-width:var(--max-width);height:100%;display:flex;flex-direction:column;position:relative;}.table-contents.svelte-1v3p82v {position:relative;overflow:hidden;flex-grow:1;}.scroll-container.svelte-1v3p82v {position:absolute;width:0;height:0;will-change:transform;contain:layout size;}"
};
function Uy(o, n) {
  De(n, !0), We(o, zy), me.initialize(), xo.initialize(), Co.initialize(), Ds.initialize(), we.initialize();
  const i = we.controller, s = we.model, a = we.overscrollModifier, f = me.config, d = Ds.style;
  Pe(() => {
    n.scrollTo != null && i.scrollToRow(String(n.scrollTo));
  }), Pe(() => {
    n.highlightedRows && n.highlightedRows.length > 0 ? f.highlightedRows = new Set(n.highlightedRows.map((H) => String(H))) : f.highlightedRows = null;
  }), Pe(() => {
    n.onRowClick != null ? f.onRowClick = n.onRowClick : f.onRowClick = null;
  }), Pe(() => {
    n.coordinator ? Ms.coordinator = n.coordinator : Ms.coordinator = null;
  }), Pe(() => {
    n.numLines != null ? f.textMaxLines = n.numLines : f.textMaxLines = f.DEFAULT_TEXT_MAX_LINES, n.lineHeight != null ? f.lineHeight = n.lineHeight : f.lineHeight = f.DEFAULT_LINE_HEIGHT;
  }), Pe(() => {
    n.colorScheme != null ? d.colorScheme = n.colorScheme : d.colorScheme = null;
  }), Pe(() => {
    n.theme != null ? d.theme = n.theme : d.theme = {}, n.colorScheme != null ? d.colorScheme = n.colorScheme : d.colorScheme = null;
  }), Pe(() => {
    n.columnConfigs != null ? f.columnConfigs = n.columnConfigs : f.columnConfigs = {}, n.onColumnConfigsChange != null ? f.onColumnConfigsChange = n.onColumnConfigsChange : f.onColumnConfigsChange = () => {
    };
  }), Pe(() => {
    f.showRowNumber = n.showRowNumber ?? null;
  }), Pe(() => {
    f.onShowRowNumberChange = n.onShowRowNumberChange ?? null;
  }), Pe(() => {
    i.initialize({
      tableName: n.table,
      rowKey: n.rowKey,
      columns: [Py(), ...n.columns],
      filterBy: n.filter ?? null
    });
  }), Pe(() => {
    n.customCells != null ? xo.config = n.customCells : xo.config = {};
  }), Pe(() => {
    n.additionalHeaderContents != null ? Co.config = n.additionalHeaderContents : Co.config = {};
  }), Pe(() => {
    n.headerHeight != null ? f.headerHeight = n.headerHeight : f.headerHeight = null;
  }), Pe(() => {
    n.highlightHoveredRow != null ? f.highlightHoveredRow = n.highlightHoveredRow : f.highlightHoveredRow = !1;
  });
  let _ = /* @__PURE__ */ k([]), m = /* @__PURE__ */ k(0), p = /* @__PURE__ */ k(null), b = /* @__PURE__ */ k($e([])), C = /* @__PURE__ */ k($e([])), S = /* @__PURE__ */ F(() => g(b).filter((H) => i.rowStillExists(H))), O = /* @__PURE__ */ F(() => g(C)), L = 0;
  qr(() => (L = requestAnimationFrame(D), () => {
    i.teardown(), s.teardown(), cancelAnimationFrame(L);
  }));
  function W(H, G) {
    if (G.length > 0) {
      const J = G[G.length - 1];
      return Math.abs(s.data[H][ht] - s.data[J][ht]);
    }
    return 0;
  }
  function M() {
    const { left: H, right: G } = Ly(g(_), s.renderableRows);
    H.length === 0 && G.length === 0 || (I(_, Fy(g(
      _
      // remove the rows that have been deleted from the model
    ), H)), I(_, My(g(
      _
      // add the rows that have been added by the model
    ), G.sort((J, K) => W(J, g(_)) - W(K, g(_))).slice(0, i.isJumping ? i.rowsOnScreen : f.rowRenderBatchSize))));
  }
  function D() {
    M(), I(b, g(_).filter((J) => i.rowIsVisible(J)), !0), I(C, s.renderableCols.filter((J) => i.colIsVisible(J)), !0);
    const H = i.xScroll, G = a.yScroll(i.yScroll);
    g(p) && (g(p).style.transform = `translate3d(${H}px, ${G}px, 0)`), I(m, i.updateKey, !0), L = requestAnimationFrame(D);
  }
  Oy(o, {
    children: (H, G) => {
      var J = qy(), K = ve(J);
      Sy(K, {});
      var U = Ut(K, 2), q = ve(U);
      {
        var de = ($) => {
          var Te = ky(), Ae = At(Te), be = ve(Ae);
          xb(be, () => g(m), (ze) => {
            var Se = By(), Fe = At(Se);
            _i(Fe, 16, () => g(S), (bt) => bt, (bt, Pt) => {
              var ye = $n(), Kt = At(ye);
              _i(Kt, 16, () => g(O), (Un) => Un, (Un, Ho) => {
                Y1(Un, {
                  get row() {
                    return Pt;
                  },
                  get col() {
                    return Ho;
                  }
                });
              }), ne(bt, ye);
            });
            var lt = Ut(Fe, 2);
            _i(lt, 16, () => s.renderableRows, (bt) => bt, (bt, Pt) => {
              Ny(bt, {
                get row() {
                  return Pt;
                }
              });
            }), ne(ze, Se);
          }), he(Ae), ot(Ae, (ze) => I(p, ze), () => g(p));
          var le = Ut(Ae, 2);
          m1(le, {});
          var Ce = Ut(le, 2);
          v1(Ce, {}), ne($, Te);
        };
        gt(q, ($) => {
          i.isReady && $(de);
        });
      }
      he(U), he(J), ot(J, ($) => i.element = $, () => i?.element), Wr("wheel", J, function(...$) {
        i.handleWheel?.apply(this, $);
      }), $t(U, "clientHeight", ($) => i.viewHeight = $), $t(U, "clientWidth", ($) => i.viewWidth = $), ne(H, J);
    },
    $$slots: { default: !0 }
  }), He();
}
class Xy {
  component;
  currentProps;
  constructor(n, i) {
    this.currentProps = { ...i }, this.component = mb({ component: Uy, target: n, props: i });
  }
  update(n) {
    let i = {};
    for (let s in n)
      n[s] !== this.currentProps[s] && (i[s] = n[s], this.currentProps[s] = n[s]);
    this.component.$set(i);
  }
  destroy() {
    this.component.$destroy();
  }
}
export {
  Xy as Table
};
