import { coordinator as cw, MosaicClient as Cc, queryFieldInfo as hw } from "@uwdata/mosaic-core";
import { Query as Ro, count as dw, cast as Df, column as fi, row_number as gw, desc as vw, eq as _w, literal as pw } from "@uwdata/mosaic-sql";
const tt = 2, Ao = 4, ks = 8, Rn = 16, Sn = 32, ur = 64, Io = 128, Qt = 512, je = 1024, mt = 2048, En = 4096, Ot = 8192, Bn = 16384, Oo = 32768, ir = 65536, Hf = 1 << 17, Rc = 1 << 18, Wr = 1 << 19, mw = 1 << 20, _i = 32768, As = 1 << 21, qs = 1 << 22, kn = 1 << 23, tr = Symbol("$state"), Sc = Symbol("legacy props"), ww = Symbol(""), Ar = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), zs = 3, Nr = 8, Ec = !1;
var Us = Array.isArray, bw = Array.prototype.indexOf, Gs = Array.from, Tc = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, Ac = Object.getOwnPropertyDescriptors, Ic = Object.prototype, yw = Array.prototype, Po = Object.getPrototypeOf, Wf = Object.isExtensible;
function xw(o) {
  for (var n = 0; n < o.length; n++)
    o[n]();
}
function Oc() {
  var o, n, i = new Promise((s, a) => {
    o = s, n = a;
  });
  return { promise: i, resolve: o, reject: n };
}
function Pc(o) {
  return o === this.v;
}
function Lc(o, n) {
  return o != o ? n == n : o !== n || o !== null && typeof o == "object" || typeof o == "function";
}
function Fc(o) {
  return !Lc(o, this.v);
}
function Mc(o) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Cw() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Rw(o) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sw() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ew(o) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Tw() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Aw() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Iw() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ow() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pw() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Lw() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let bi = !1, Fw = !1;
function Mw() {
  bi = !0;
}
const Lo = 1, Fo = 2, Dc = 4, Dw = 8, Hw = 16, Ww = 1, Nw = 2, Hc = "[", Mo = "[!", Ks = "]", Lr = {}, Qe = Symbol(), Bw = "http://www.w3.org/1999/xhtml", kw = [];
function Wc(o, n = !1, i = !1) {
  return yo(o, /* @__PURE__ */ new Map(), "", kw, null, i);
}
function yo(o, n, i, s, a = null, f = !1) {
  if (typeof o == "object" && o !== null) {
    var h = n.get(o);
    if (h !== void 0) return h;
    if (o instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(o)
    );
    if (o instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(o)
    );
    if (Us(o)) {
      var _ = (
        /** @type {Snapshot<any>} */
        Array(o.length)
      );
      n.set(o, _), a !== null && n.set(a, _);
      for (var p = 0; p < o.length; p += 1) {
        var m = o[p];
        p in o && (_[p] = yo(m, n, i, s, null, f));
      }
      return _;
    }
    if (Po(o) === Ic) {
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
let Me = null;
function Fr(o) {
  Me = o;
}
function gt(o) {
  return (
    /** @type {T} */
    Nc().get(o)
  );
}
function qt(o, n) {
  return Nc().set(o, n), n;
}
function He(o, n = !1, i) {
  Me = {
    p: Me,
    i: !1,
    c: null,
    e: null,
    s: o,
    x: null,
    l: bi && !n ? { s: null, u: null, $: [] } : null
  };
}
function We(o) {
  var n = (
    /** @type {ComponentContext} */
    Me
  ), i = n.e;
  if (i !== null) {
    n.e = null;
    for (var s of i)
      fh(s);
  }
  return n.i = !0, Me = n.p, /** @type {T} */
  {};
}
function Br() {
  return !bi || Me !== null && Me.l === null;
}
function Nc(o) {
  return Me === null && Mc(), Me.c ??= new Map(qw(Me) || void 0);
}
function qw(o) {
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
function Bc() {
  var o = er;
  er = [], xw(o);
}
function ar(o) {
  if (er.length === 0 && !di) {
    var n = er;
    queueMicrotask(() => {
      n === er && Bc();
    });
  }
  er.push(o);
}
function zw() {
  for (; er.length > 0; )
    Bc();
}
function Do(o) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Uw() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let se = !1;
function xn(o) {
  se = o;
}
let ge;
function pt(o) {
  if (o === null)
    throw Do(), Lr;
  return ge = o;
}
function yi() {
  return pt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ an(ge)
  );
}
function de(o) {
  if (se) {
    if (/* @__PURE__ */ an(ge) !== null)
      throw Do(), Lr;
    ge = o;
  }
}
function Gw(o = 1) {
  if (se) {
    for (var n = o, i = ge; n--; )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ an(i);
    ge = i;
  }
}
function So(o = !0) {
  for (var n = 0, i = ge; ; ) {
    if (i.nodeType === Nr) {
      var s = (
        /** @type {Comment} */
        i.data
      );
      if (s === Ks) {
        if (n === 0) return i;
        n -= 1;
      } else (s === Hc || s === Mo) && (n += 1);
    }
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ an(i)
    );
    o && i.remove(), i = a;
  }
}
function kc(o) {
  if (!o || o.nodeType !== Nr)
    throw Do(), Lr;
  return (
    /** @type {Comment} */
    o.data
  );
}
function $e(o) {
  if (typeof o != "object" || o === null || tr in o)
    return o;
  const n = Po(o);
  if (n !== Ic && n !== yw)
    return o;
  var i = /* @__PURE__ */ new Map(), s = Us(o), a = /* @__PURE__ */ z(0), f = rr, h = (_) => {
    if (rr === f)
      return _();
    var p = ae, m = rr;
    _t(null), zf(f);
    var b = _();
    return _t(p), zf(m), b;
  };
  return s && i.set("length", /* @__PURE__ */ z(
    /** @type {any[]} */
    o.length
  )), new Proxy(
    /** @type {any} */
    o,
    {
      defineProperty(_, p, m) {
        (!("value" in m) || m.configurable === !1 || m.enumerable === !1 || m.writable === !1) && Iw();
        var b = i.get(p);
        return b === void 0 ? b = h(() => {
          var R = /* @__PURE__ */ z(m.value);
          return i.set(p, R), R;
        }) : O(b, m.value, !0), !0;
      },
      deleteProperty(_, p) {
        var m = i.get(p);
        if (m === void 0) {
          if (p in _) {
            const b = h(() => /* @__PURE__ */ z(Qe));
            i.set(p, b), gi(a);
          }
        } else
          O(m, Qe), gi(a);
        return !0;
      },
      get(_, p, m) {
        if (p === tr)
          return o;
        var b = i.get(p), R = p in _;
        if (b === void 0 && (!R || Ir(_, p)?.writable) && (b = h(() => {
          var F = $e(R ? _[p] : Qe), T = /* @__PURE__ */ z(F);
          return T;
        }), i.set(p, b)), b !== void 0) {
          var S = g(b);
          return S === Qe ? void 0 : S;
        }
        return Reflect.get(_, p, m);
      },
      getOwnPropertyDescriptor(_, p) {
        var m = Reflect.getOwnPropertyDescriptor(_, p);
        if (m && "value" in m) {
          var b = i.get(p);
          b && (m.value = g(b));
        } else if (m === void 0) {
          var R = i.get(p), S = R?.v;
          if (R !== void 0 && S !== Qe)
            return {
              enumerable: !0,
              configurable: !0,
              value: S,
              writable: !0
            };
        }
        return m;
      },
      has(_, p) {
        if (p === tr)
          return !0;
        var m = i.get(p), b = m !== void 0 && m.v !== Qe || Reflect.has(_, p);
        if (m !== void 0 || fe !== null && (!b || Ir(_, p)?.writable)) {
          m === void 0 && (m = h(() => {
            var S = b ? $e(_[p]) : Qe, F = /* @__PURE__ */ z(S);
            return F;
          }), i.set(p, m));
          var R = g(m);
          if (R === Qe)
            return !1;
        }
        return b;
      },
      set(_, p, m, b) {
        var R = i.get(p), S = p in _;
        if (s && p === "length")
          for (var F = m; F < /** @type {Source<number>} */
          R.v; F += 1) {
            var T = i.get(F + "");
            T !== void 0 ? O(T, Qe) : F in _ && (T = h(() => /* @__PURE__ */ z(Qe)), i.set(F + "", T));
          }
        if (R === void 0)
          (!S || Ir(_, p)?.writable) && (R = h(() => /* @__PURE__ */ z(void 0)), O(R, $e(m)), i.set(p, R));
        else {
          S = R.v !== Qe;
          var H = h(() => $e(m));
          O(R, H);
        }
        var L = Reflect.getOwnPropertyDescriptor(_, p);
        if (L?.set && L.set.call(b, m), !S) {
          if (s && typeof p == "string") {
            var B = (
              /** @type {Source<number>} */
              i.get("length")
            ), k = Number(p);
            Number.isInteger(k) && k >= B.v && O(B, k + 1);
          }
          gi(a);
        }
        return !0;
      },
      ownKeys(_) {
        g(a);
        var p = Reflect.ownKeys(_).filter((R) => {
          var S = i.get(R);
          return S === void 0 || S.v !== Qe;
        });
        for (var [m, b] of i)
          b.v !== Qe && !(m in _) && p.push(m);
        return p;
      },
      setPrototypeOf() {
        Ow();
      }
    }
  );
}
var Is, qc, zc, Uc;
function Os() {
  if (Is === void 0) {
    Is = window, qc = /Firefox/.test(navigator.userAgent);
    var o = Element.prototype, n = Node.prototype, i = Text.prototype;
    zc = Ir(n, "firstChild").get, Uc = Ir(n, "nextSibling").get, Wf(o) && (o.__click = void 0, o.__className = void 0, o.__attributes = null, o.__style = void 0, o.__e = void 0), Wf(i) && (i.__t = void 0);
  }
}
function jt(o = "") {
  return document.createTextNode(o);
}
// @__NO_SIDE_EFFECTS__
function or(o) {
  return zc.call(o);
}
// @__NO_SIDE_EFFECTS__
function an(o) {
  return Uc.call(o);
}
function _e(o, n) {
  if (!se)
    return /* @__PURE__ */ or(o);
  var i = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ or(ge)
  );
  if (i === null)
    i = ge.appendChild(jt());
  else if (n && i.nodeType !== zs) {
    var s = jt();
    return i?.before(s), pt(s), s;
  }
  return pt(i), i;
}
function At(o, n = !1) {
  if (!se) {
    var i = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ or(
        /** @type {Node} */
        o
      )
    );
    return i instanceof Comment && i.data === "" ? /* @__PURE__ */ an(i) : i;
  }
  if (n && ge?.nodeType !== zs) {
    var s = jt();
    return ge?.before(s), pt(s), s;
  }
  return ge;
}
function Ut(o, n = 1, i = !1) {
  let s = se ? ge : o;
  for (var a; n--; )
    a = s, s = /** @type {TemplateNode} */
    /* @__PURE__ */ an(s);
  if (!se)
    return s;
  if (i && s?.nodeType !== zs) {
    var f = jt();
    return s === null ? a?.after(f) : s.before(f), pt(f), f;
  }
  return pt(s), /** @type {TemplateNode} */
  s;
}
function Gc(o) {
  o.textContent = "";
}
function Kc() {
  return !1;
}
function Yc(o) {
  var n = fe;
  if (n === null)
    return ae.f |= kn, o;
  if ((n.f & Oo) === 0) {
    if ((n.f & Io) === 0)
      throw o;
    n.b.error(o);
  } else
    Mr(o, n);
}
function Mr(o, n) {
  for (; n !== null; ) {
    if ((n.f & Io) !== 0)
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
let ze = null, It = null, on = [], Ho = null, Ps = !1, di = !1;
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
    this.is_fork || this.#a(), this.#r > 0 || this.is_fork ? (this.#s(i.effects), this.#s(i.render_effects), this.#s(i.block_effects)) : (ze = null, Nf(i.render_effects), Nf(i.effects), this.#u?.resolve()), It = null;
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
      var a = s.f, f = (a & (Sn | ur)) !== 0, h = f && (a & je) !== 0, _ = h || (a & Ot) !== 0 || this.skipped_effects.has(s);
      if ((s.f & Io) !== 0 && s.b?.is_pending() && (i = {
        parent: i,
        effect: s,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !_ && s.fn !== null) {
        f ? s.f ^= je : (a & Ao) !== 0 ? i.effects.push(s) : xi(s) && ((s.f & Rn) !== 0 && i.block_effects.push(s), mi(s));
        var p = s.first;
        if (p !== null) {
          s = p;
          continue;
        }
      }
      var m = s.parent;
      for (s = s.next; s === null && m !== null; )
        m === i.effect && (this.#s(i.effects), this.#s(i.render_effects), this.#s(i.block_effects), i = /** @type {EffectTarget} */
        i.parent), s = m.next, m = m.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(n) {
    for (const i of n)
      ((i.f & mt) !== 0 ? this.#i : this.#o).push(i), et(i, je);
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
    ze = this, this.apply();
  }
  deactivate() {
    ze = null, It = null;
  }
  flush() {
    if (this.activate(), on.length > 0) {
      if (Xc(), ze !== null && ze !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const n of this.#t) n(this);
    this.#t.clear();
  }
  #a() {
    if (this.#r === 0) {
      for (const n of this.#e) n();
      this.#e.clear();
    }
    this.#n === 0 && this.#f();
  }
  #f() {
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
        for (const [_, p] of this.current) {
          if (a.current.has(_))
            if (i && p !== a.current.get(_))
              a.current.set(_, p);
            else
              continue;
          f.push(_);
        }
        if (f.length === 0)
          continue;
        const h = [...a.current.keys()].filter((_) => !this.current.has(_));
        if (h.length > 0) {
          const _ = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
          for (const m of f)
            Zc(m, h, _, p);
          if (on.length > 0) {
            ze = a, a.apply();
            for (const m of on)
              a.#l(m, s);
            on = [], a.deactivate();
          }
        }
      }
      ze = null, It = n;
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
      et(n, mt), lr(n);
    for (const n of this.#o)
      et(n, En), lr(n);
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
    return (this.#u ??= Oc()).promise;
  }
  static ensure() {
    if (ze === null) {
      const n = ze = new ln();
      wo.add(ze), di || ln.enqueue(() => {
        ze === n && n.flush();
      });
    }
    return ze;
  }
  /** @param {() => void} task */
  static enqueue(n) {
    ar(n);
  }
  apply() {
  }
}
function Kw(o) {
  var n = di;
  di = !0;
  try {
    for (var i; ; ) {
      if (zw(), on.length === 0 && (ze?.flush(), on.length === 0))
        return Ho = null, /** @type {T} */
        i;
      Xc();
    }
  } finally {
    di = n;
  }
}
function Xc() {
  var o = nr;
  Ps = !0;
  try {
    var n = 0;
    for (kf(!0); on.length > 0; ) {
      var i = ln.ensure();
      if (n++ > 1e3) {
        var s, a;
        Yw();
      }
      i.process(on), qn.clear();
    }
  } finally {
    Ps = !1, kf(o), Ho = null;
  }
}
function Yw() {
  try {
    Tw();
  } catch (o) {
    Mr(o, Ho);
  }
}
let yn = null;
function Nf(o) {
  var n = o.length;
  if (n !== 0) {
    for (var i = 0; i < n; ) {
      var s = o[i++];
      if ((s.f & (Bn | Ot)) === 0 && xi(s) && (yn = /* @__PURE__ */ new Set(), mi(s), s.deps === null && s.first === null && s.nodes_start === null && (s.teardown === null && s.ac === null ? dh(s) : s.fn = null), yn?.size > 0)) {
        qn.clear();
        for (const a of yn) {
          if ((a.f & (Bn | Ot)) !== 0) continue;
          const f = [a];
          let h = a.parent;
          for (; h !== null; )
            yn.has(h) && (yn.delete(h), f.push(h)), h = h.parent;
          for (let _ = f.length - 1; _ >= 0; _--) {
            const p = f[_];
            (p.f & (Bn | Ot)) === 0 && mi(p);
          }
        }
        yn.clear();
      }
    }
    yn = null;
  }
}
function Zc(o, n, i, s) {
  if (!i.has(o) && (i.add(o), o.reactions !== null))
    for (const a of o.reactions) {
      const f = a.f;
      (f & tt) !== 0 ? Zc(
        /** @type {Derived} */
        a,
        n,
        i,
        s
      ) : (f & (qs | Rn)) !== 0 && (f & mt) === 0 && // we may have scheduled this one already
      Jc(a, n, s) && (et(a, mt), lr(
        /** @type {Effect} */
        a
      ));
    }
}
function Jc(o, n, i) {
  const s = i.get(o);
  if (s !== void 0) return s;
  if (o.deps !== null)
    for (const a of o.deps) {
      if (n.includes(a))
        return !0;
      if ((a.f & tt) !== 0 && Jc(
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
function lr(o) {
  for (var n = Ho = o; n.parent !== null; ) {
    n = n.parent;
    var i = n.f;
    if (Ps && n === fe && (i & Rn) !== 0 && (i & Rc) === 0)
      return;
    if ((i & (ur | Sn)) !== 0) {
      if ((i & je) === 0) return;
      n.f ^= je;
    }
  }
  on.push(n);
}
function Xw(o) {
  let n = 0, i = sr(0), s;
  return () => {
    No() && (g(i), Zs(() => (n === 0 && (s = Ci(() => o(() => gi(i)))), n += 1, () => {
      ar(() => {
        n -= 1, n === 0 && (s?.(), s = void 0, gi(i));
      });
    })));
  };
}
var Zw = ir | Wr | Io;
function Jw(o, n, i) {
  new Vw(o, n, i);
}
class Vw {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = se ? ge : null;
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
  #d = 0;
  #c = 0;
  #g = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #v = Xw(() => (this.#h = sr(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(n, i, s) {
    this.#t = n, this.#r = i, this.#u = s, this.parent = /** @type {Effect} */
    fe.b, this.#e = !!this.#r.pending, this.#i = Si(() => {
      if (fe.b = this, se) {
        const f = this.#n;
        yi(), /** @type {Comment} */
        f.nodeType === Nr && /** @type {Comment} */
        f.data === Mo ? this.#p() : this.#_();
      } else {
        var a = this.#b();
        try {
          this.#o = zt(() => s(a));
        } catch (f) {
          this.error(f);
        }
        this.#c > 0 ? this.#w() : this.#e = !1;
      }
      return () => {
        this.#f?.remove();
      };
    }, Zw), se && (this.#t = ge);
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
      this.#o = this.#m(() => (ln.ensure(), zt(() => this.#u(i)))), this.#c > 0 ? this.#w() : (Or(
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
    return this.#e && (this.#f = jt(), this.#t.before(this.#f), n = this.#f), n;
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
    var i = fe, s = ae, a = Me;
    un(this.#i), _t(this.#i), Fr(this.#i.ctx);
    try {
      return n();
    } catch (f) {
      return Yc(f), null;
    } finally {
      un(i), _t(s), Fr(a);
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
    ), _h(this.#o, this.#a)), this.#l === null && (this.#l = zt(() => n(this.#t)));
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
    this.#c += n, this.#c === 0 && (this.#e = !1, this.#l && Or(this.#l, () => {
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
    this.#y(n), this.#d += n, this.#h && Dr(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#v(), g(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(n) {
    var i = this.#r.onerror;
    let s = this.#r.failed;
    if (this.#g || !i && !s)
      throw n;
    this.#o && (lt(this.#o), this.#o = null), this.#l && (lt(this.#l), this.#l = null), this.#s && (lt(this.#s), this.#s = null), se && (pt(
      /** @type {TemplateNode} */
      this.#n
    ), Gw(), pt(So()));
    var a = !1, f = !1;
    const h = () => {
      if (a) {
        Uw();
        return;
      }
      a = !0, f && Lw(), ln.ensure(), this.#d = 0, this.#s !== null && Or(this.#s, () => {
        this.#s = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#m(() => (this.#g = !1, zt(() => this.#u(this.#t)))), this.#c > 0 ? this.#w() : this.#e = !1;
    };
    var _ = ae;
    try {
      _t(null), f = !0, i?.(n, h), f = !1;
    } catch (p) {
      Mr(p, this.#i && this.#i.parent);
    } finally {
      _t(_);
    }
    s && ar(() => {
      this.#s = this.#m(() => {
        ln.ensure(), this.#g = !0;
        try {
          return zt(() => {
            s(
              this.#t,
              () => n,
              () => h
            );
          });
        } catch (p) {
          return Mr(
            p,
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
function Qw(o, n, i, s) {
  const a = Br() ? Wo : Vc;
  if (i.length === 0 && o.length === 0) {
    s(n.map(a));
    return;
  }
  var f = ze, h = (
    /** @type {Effect} */
    fe
  ), _ = jw();
  function p() {
    Promise.all(i.map((m) => /* @__PURE__ */ $w(m))).then((m) => {
      _();
      try {
        s([...n.map(a), ...m]);
      } catch (b) {
        (h.f & Bn) === 0 && Mr(b, h);
      }
      f?.deactivate(), Eo();
    }).catch((m) => {
      Mr(m, h);
    });
  }
  o.length > 0 ? Promise.all(o).then(() => {
    _();
    try {
      return p();
    } finally {
      f?.deactivate(), Eo();
    }
  }) : p();
}
function jw() {
  var o = fe, n = ae, i = Me, s = ze;
  return function(f = !0) {
    un(o), _t(n), Fr(i), f && s?.activate();
  };
}
function Eo() {
  un(null), _t(null), Fr(null);
}
// @__NO_SIDE_EFFECTS__
function Wo(o) {
  var n = tt | mt, i = ae !== null && (ae.f & tt) !== 0 ? (
    /** @type {Derived} */
    ae
  ) : null;
  return fe !== null && (fe.f |= Wr), {
    ctx: Me,
    deps: null,
    effects: null,
    equals: Pc,
    f: n,
    fn: o,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Qe
    ),
    wv: 0,
    parent: i ?? fe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function $w(o, n) {
  let i = (
    /** @type {Effect | null} */
    fe
  );
  i === null && Cw();
  var s = (
    /** @type {Boundary} */
    i.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), f = sr(
    /** @type {V} */
    Qe
  ), h = !ae, _ = /* @__PURE__ */ new Map();
  return fb(() => {
    var p = Oc();
    a = p.promise;
    try {
      Promise.resolve(o()).then(p.resolve, p.reject).then(() => {
        m === ze && m.committed && m.deactivate(), Eo();
      });
    } catch (S) {
      p.reject(S), Eo();
    }
    var m = (
      /** @type {Batch} */
      ze
    );
    if (h) {
      var b = !s.is_pending();
      s.update_pending_count(1), m.increment(b), _.get(m)?.reject(Ar), _.delete(m), _.set(m, p);
    }
    const R = (S, F = void 0) => {
      if (m.activate(), F)
        F !== Ar && (f.f |= kn, Dr(f, F));
      else {
        (f.f & kn) !== 0 && (f.f ^= kn), Dr(f, S);
        for (const [T, H] of _) {
          if (_.delete(T), T === m) break;
          H.reject(Ar);
        }
      }
      h && (s.update_pending_count(-1), m.decrement(b));
    };
    p.promise.then(R, (S) => R(null, S || "unknown"));
  }), ah(() => {
    for (const p of _.values())
      p.reject(Ar);
  }), new Promise((p) => {
    function m(b) {
      function R() {
        b === a ? p(f) : m(a);
      }
      b.then(R, R);
    }
    m(a);
  });
}
// @__NO_SIDE_EFFECTS__
function M(o) {
  const n = /* @__PURE__ */ Wo(o);
  return nh(n), n;
}
// @__NO_SIDE_EFFECTS__
function Vc(o) {
  const n = /* @__PURE__ */ Wo(o);
  return n.equals = Fc, n;
}
function Qc(o) {
  var n = o.effects;
  if (n !== null) {
    o.effects = null;
    for (var i = 0; i < n.length; i += 1)
      lt(
        /** @type {Effect} */
        n[i]
      );
  }
}
function eb(o) {
  for (var n = o.parent; n !== null; ) {
    if ((n.f & tt) === 0)
      return (
        /** @type {Effect} */
        n
      );
    n = n.parent;
  }
  return null;
}
function Ys(o) {
  var n, i = fe;
  un(eb(o));
  try {
    o.f &= ~_i, Qc(o), n = lh(o);
  } finally {
    un(i);
  }
  return n;
}
function jc(o) {
  var n = Ys(o);
  if (o.equals(n) || (o.v = n, o.wv = ih()), !fr)
    if (It !== null)
      No() && It.set(o, o.v);
    else {
      var i = (o.f & Qt) === 0 ? En : je;
      et(o, i);
    }
}
let Ls = /* @__PURE__ */ new Set();
const qn = /* @__PURE__ */ new Map();
let $c = !1;
function sr(o, n) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: o,
    reactions: null,
    equals: Pc,
    rv: 0,
    wv: 0
  };
  return i;
}
// @__NO_SIDE_EFFECTS__
function z(o, n) {
  const i = sr(o);
  return nh(i), i;
}
// @__NO_SIDE_EFFECTS__
function eh(o, n = !1, i = !0) {
  const s = sr(o);
  return n || (s.equals = Fc), bi && i && Me !== null && Me.l !== null && (Me.l.s ??= []).push(s), s;
}
function O(o, n, i = !1) {
  ae !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!sn || (ae.f & Hf) !== 0) && Br() && (ae.f & (tt | Rn | qs | Hf)) !== 0 && !Cn?.includes(o) && Pw();
  let s = i ? $e(n) : n;
  return Dr(o, s);
}
function Dr(o, n) {
  if (!o.equals(n)) {
    var i = o.v;
    fr ? qn.set(o, n) : qn.set(o, i), o.v = n;
    var s = ln.ensure();
    s.capture(o, i), (o.f & tt) !== 0 && ((o.f & mt) !== 0 && Ys(
      /** @type {Derived} */
      o
    ), et(o, (o.f & Qt) !== 0 ? je : En)), o.wv = ih(), th(o, mt), Br() && fe !== null && (fe.f & je) !== 0 && (fe.f & (Sn | ur)) === 0 && (kt === null ? rb([o]) : kt.push(o)), !s.is_fork && Ls.size > 0 && !$c && tb();
  }
  return n;
}
function tb() {
  $c = !1;
  const o = Array.from(Ls);
  for (const n of o)
    (n.f & je) !== 0 && et(n, En), xi(n) && mi(n);
  Ls.clear();
}
function gi(o) {
  O(o, o.v + 1);
}
function th(o, n) {
  var i = o.reactions;
  if (i !== null)
    for (var s = Br(), a = i.length, f = 0; f < a; f++) {
      var h = i[f], _ = h.f;
      if (!(!s && h === fe)) {
        var p = (_ & mt) === 0;
        if (p && et(h, n), (_ & tt) !== 0) {
          var m = (
            /** @type {Derived} */
            h
          );
          It?.delete(m), (_ & _i) === 0 && (_ & Qt && (h.f |= _i), th(m, En));
        } else p && ((_ & Rn) !== 0 && yn !== null && yn.add(
          /** @type {Effect} */
          h
        ), lr(
          /** @type {Effect} */
          h
        ));
      }
    }
}
let Bf = !1;
function nb() {
  Bf || (Bf = !0, document.addEventListener(
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
function Xs(o) {
  var n = ae, i = fe;
  _t(null), un(null);
  try {
    return o();
  } finally {
    _t(n), un(i);
  }
}
let nr = !1;
function kf(o) {
  nr = o;
}
let fr = !1;
function qf(o) {
  fr = o;
}
let ae = null, sn = !1;
function _t(o) {
  ae = o;
}
let fe = null;
function un(o) {
  fe = o;
}
let Cn = null;
function nh(o) {
  ae !== null && (Cn === null ? Cn = [o] : Cn.push(o));
}
let ot = null, Tt = 0, kt = null;
function rb(o) {
  kt = o;
}
let rh = 1, pi = 0, rr = pi;
function zf(o) {
  rr = o;
}
function ih() {
  return ++rh;
}
function xi(o) {
  var n = o.f;
  if ((n & mt) !== 0)
    return !0;
  if (n & tt && (o.f &= ~_i), (n & En) !== 0) {
    var i = o.deps;
    if (i !== null)
      for (var s = i.length, a = 0; a < s; a++) {
        var f = i[a];
        if (xi(
          /** @type {Derived} */
          f
        ) && jc(
          /** @type {Derived} */
          f
        ), f.wv > o.wv)
          return !0;
      }
    (n & Qt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    It === null && et(o, je);
  }
  return !1;
}
function oh(o, n, i = !0) {
  var s = o.reactions;
  if (s !== null && !Cn?.includes(o))
    for (var a = 0; a < s.length; a++) {
      var f = s[a];
      (f.f & tt) !== 0 ? oh(
        /** @type {Derived} */
        f,
        n,
        !1
      ) : n === f && (i ? et(f, mt) : (f.f & je) !== 0 && et(f, En), lr(
        /** @type {Effect} */
        f
      ));
    }
}
function lh(o) {
  var n = ot, i = Tt, s = kt, a = ae, f = Cn, h = Me, _ = sn, p = rr, m = o.f;
  ot = /** @type {null | Value[]} */
  null, Tt = 0, kt = null, ae = (m & (Sn | ur)) === 0 ? o : null, Cn = null, Fr(o.ctx), sn = !1, rr = ++pi, o.ac !== null && (Xs(() => {
    o.ac.abort(Ar);
  }), o.ac = null);
  try {
    o.f |= As;
    var b = (
      /** @type {Function} */
      o.fn
    ), R = b(), S = o.deps;
    if (ot !== null) {
      var F;
      if (To(o, Tt), S !== null && Tt > 0)
        for (S.length = Tt + ot.length, F = 0; F < ot.length; F++)
          S[Tt + F] = ot[F];
      else
        o.deps = S = ot;
      if (nr && No() && (o.f & Qt) !== 0)
        for (F = Tt; F < S.length; F++)
          (S[F].reactions ??= []).push(o);
    } else S !== null && Tt < S.length && (To(o, Tt), S.length = Tt);
    if (Br() && kt !== null && !sn && S !== null && (o.f & (tt | En | mt)) === 0)
      for (F = 0; F < /** @type {Source[]} */
      kt.length; F++)
        oh(
          kt[F],
          /** @type {Effect} */
          o
        );
    return a !== null && a !== o && (pi++, kt !== null && (s === null ? s = kt : s.push(.../** @type {Source[]} */
    kt))), (o.f & kn) !== 0 && (o.f ^= kn), R;
  } catch (T) {
    return Yc(T);
  } finally {
    o.f ^= As, ot = n, Tt = i, kt = s, ae = a, Cn = f, Fr(h), sn = _, rr = p;
  }
}
function ib(o, n) {
  let i = n.reactions;
  if (i !== null) {
    var s = bw.call(i, o);
    if (s !== -1) {
      var a = i.length - 1;
      a === 0 ? i = n.reactions = null : (i[s] = i[a], i.pop());
    }
  }
  i === null && (n.f & tt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ot === null || !ot.includes(n)) && (et(n, En), (n.f & Qt) !== 0 && (n.f ^= Qt, n.f &= ~_i), Qc(
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
      ib(o, i[s]);
}
function mi(o) {
  var n = o.f;
  if ((n & Bn) === 0) {
    et(o, je);
    var i = fe, s = nr;
    fe = o, nr = !0;
    try {
      (n & Rn) !== 0 ? cb(o) : hh(o), ch(o);
      var a = lh(o);
      o.teardown = typeof a == "function" ? a : null, o.wv = rh;
      var f;
      Ec && Fw && (o.f & mt) !== 0 && o.deps;
    } finally {
      nr = s, fe = i;
    }
  }
}
function g(o) {
  var n = o.f, i = (n & tt) !== 0;
  if (ae !== null && !sn) {
    var s = fe !== null && (fe.f & Bn) !== 0;
    if (!s && !Cn?.includes(o)) {
      var a = ae.deps;
      if ((ae.f & As) !== 0)
        o.rv < pi && (o.rv = pi, ot === null && a !== null && a[Tt] === o ? Tt++ : ot === null ? ot = [o] : ot.includes(o) || ot.push(o));
      else {
        (ae.deps ??= []).push(o);
        var f = o.reactions;
        f === null ? o.reactions = [ae] : f.includes(ae) || f.push(ae);
      }
    }
  }
  if (fr) {
    if (qn.has(o))
      return qn.get(o);
    if (i) {
      var h = (
        /** @type {Derived} */
        o
      ), _ = h.v;
      return ((h.f & je) === 0 && h.reactions !== null || uh(h)) && (_ = Ys(h)), qn.set(h, _), _;
    }
  } else if (i) {
    if (h = /** @type {Derived} */
    o, It?.has(h))
      return It.get(h);
    xi(h) && jc(h), nr && No() && (h.f & Qt) === 0 && sh(h);
  } else if (It?.has(o))
    return It.get(o);
  if ((o.f & kn) !== 0)
    throw o.v;
  return o.v;
}
function sh(o) {
  if (o.deps !== null) {
    o.f ^= Qt;
    for (const n of o.deps)
      (n.reactions ??= []).push(o), (n.f & tt) !== 0 && (n.f & Qt) === 0 && sh(
        /** @type {Derived} */
        n
      );
  }
}
function uh(o) {
  if (o.v === Qe) return !0;
  if (o.deps === null) return !1;
  for (const n of o.deps)
    if (qn.has(n) || (n.f & tt) !== 0 && uh(
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
const ob = -7169;
function et(o, n) {
  o.f = o.f & ob | n;
}
function lb(o) {
  if (!(typeof o != "object" || !o || o instanceof EventTarget)) {
    if (tr in o)
      Fs(o);
    else if (!Array.isArray(o))
      for (let n in o) {
        const i = o[n];
        typeof i == "object" && i && tr in i && Fs(i);
      }
  }
}
function Fs(o, n = /* @__PURE__ */ new Set()) {
  if (typeof o == "object" && o !== null && // We don't want to traverse DOM elements
  !(o instanceof EventTarget) && !n.has(o)) {
    n.add(o), o instanceof Date && o.getTime();
    for (let s in o)
      try {
        Fs(o[s], n);
      } catch {
      }
    const i = Po(o);
    if (i !== Object.prototype && i !== Array.prototype && i !== Map.prototype && i !== Set.prototype && i !== Date.prototype) {
      const s = Ac(i);
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
function sb(o) {
  fe === null && (ae === null && Ew(), Sw()), fr && Rw();
}
function ub(o, n) {
  var i = n.last;
  i === null ? n.last = n.first = o : (i.next = o, o.prev = i, n.last = o);
}
function Tn(o, n, i, s = !0) {
  var a = fe;
  a !== null && (a.f & Ot) !== 0 && (o |= Ot);
  var f = {
    ctx: Me,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: o | mt | Qt,
    first: null,
    fn: n,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (i)
    try {
      mi(f), f.f |= Oo;
    } catch (p) {
      throw lt(f), p;
    }
  else n !== null && lr(f);
  if (s) {
    var h = f;
    if (i && h.deps === null && h.teardown === null && h.nodes_start === null && h.first === h.last && // either `null`, or a singular child
    (h.f & Wr) === 0 && (h = h.first, (o & Rn) !== 0 && (o & ir) !== 0 && h !== null && (h.f |= ir)), h !== null && (h.parent = a, a !== null && ub(h, a), ae !== null && (ae.f & tt) !== 0 && (o & ur) === 0)) {
      var _ = (
        /** @type {Derived} */
        ae
      );
      (_.effects ??= []).push(h);
    }
  }
  return f;
}
function No() {
  return ae !== null && !sn;
}
function ah(o) {
  const n = Tn(ks, null, !1);
  return et(n, je), n.teardown = o, n;
}
function Fe(o) {
  sb();
  var n = (
    /** @type {Effect} */
    fe.f
  ), i = !ae && (n & Sn) !== 0 && (n & Oo) === 0;
  if (i) {
    var s = (
      /** @type {ComponentContext} */
      Me
    );
    (s.e ??= []).push(o);
  } else
    return fh(o);
}
function fh(o) {
  return Tn(Ao | mw, o, !1);
}
function ab(o) {
  ln.ensure();
  const n = Tn(ur | Wr, o, !0);
  return (i = {}) => new Promise((s) => {
    i.outro ? Or(n, () => {
      lt(n), s(void 0);
    }) : (lt(n), s(void 0));
  });
}
function Ri(o) {
  return Tn(Ao, o, !1);
}
function fb(o) {
  return Tn(qs | Wr, o, !0);
}
function Zs(o, n = 0) {
  return Tn(ks | n, o, !0);
}
function qe(o, n = [], i = [], s = [], a = !1) {
  Qw(s, n, i, (f) => {
    Tn(a ? Ao : ks, () => o(...f.map(g)), !0);
  });
}
function Si(o, n = 0) {
  var i = Tn(Rn | n, o, !0);
  return i;
}
function zt(o, n = !0) {
  return Tn(Sn | Wr, o, !0, n);
}
function ch(o) {
  var n = o.teardown;
  if (n !== null) {
    const i = fr, s = ae;
    qf(!0), _t(null);
    try {
      n.call(null);
    } finally {
      qf(i), _t(s);
    }
  }
}
function hh(o, n = !1) {
  var i = o.first;
  for (o.first = o.last = null; i !== null; ) {
    const a = i.ac;
    a !== null && Xs(() => {
      a.abort(Ar);
    });
    var s = i.next;
    (i.f & ur) !== 0 ? i.parent = null : lt(i, n), i = s;
  }
}
function cb(o) {
  for (var n = o.first; n !== null; ) {
    var i = n.next;
    (n.f & Sn) === 0 && lt(n), n = i;
  }
}
function lt(o, n = !0) {
  var i = !1;
  (n || (o.f & Rc) !== 0) && o.nodes_start !== null && o.nodes_end !== null && (hb(
    o.nodes_start,
    /** @type {TemplateNode} */
    o.nodes_end
  ), i = !0), hh(o, n && !i), To(o, 0), et(o, Bn);
  var s = o.transitions;
  if (s !== null)
    for (const f of s)
      f.stop();
  ch(o);
  var a = o.parent;
  a !== null && a.first !== null && dh(o), o.next = o.prev = o.teardown = o.ctx = o.deps = o.fn = o.nodes_start = o.nodes_end = o.ac = null;
}
function hb(o, n) {
  for (; o !== null; ) {
    var i = o === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ an(o)
    );
    o.remove(), o = i;
  }
}
function dh(o) {
  var n = o.parent, i = o.prev, s = o.next;
  i !== null && (i.next = s), s !== null && (s.prev = i), n !== null && (n.first === o && (n.first = s), n.last === o && (n.last = i));
}
function Or(o, n, i = !0) {
  var s = [];
  Js(o, s, !0), gh(s, () => {
    i && lt(o), n && n();
  });
}
function gh(o, n) {
  var i = o.length;
  if (i > 0) {
    var s = () => --i || n();
    for (var a of o)
      a.out(s);
  } else
    n();
}
function Js(o, n, i) {
  if ((o.f & Ot) === 0) {
    if (o.f ^= Ot, o.transitions !== null)
      for (const h of o.transitions)
        (h.is_global || i) && n.push(h);
    for (var s = o.first; s !== null; ) {
      var a = s.next, f = (s.f & ir) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Sn) !== 0 && (o.f & Rn) !== 0;
      Js(s, n, f ? i : !1), s = a;
    }
  }
}
function Vs(o) {
  vh(o, !0);
}
function vh(o, n) {
  if ((o.f & Ot) !== 0) {
    o.f ^= Ot, (o.f & je) === 0 && (et(o, mt), lr(o));
    for (var i = o.first; i !== null; ) {
      var s = i.next, a = (i.f & ir) !== 0 || (i.f & Sn) !== 0;
      vh(i, a ? n : !1), i = s;
    }
    if (o.transitions !== null)
      for (const f of o.transitions)
        (f.is_global || n) && f.in();
  }
}
function _h(o, n) {
  for (var i = o.nodes_start, s = o.nodes_end; i !== null; ) {
    var a = i === s ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ an(i)
    );
    n.append(i), i = a;
  }
}
const ph = /* @__PURE__ */ new Set(), Ms = /* @__PURE__ */ new Set();
function db(o) {
  if (!se) return;
  o.removeAttribute("onload"), o.removeAttribute("onerror");
  const n = o.__e;
  n !== void 0 && (o.__e = void 0, queueMicrotask(() => {
    o.isConnected && o.dispatchEvent(n);
  }));
}
function gb(o, n, i, s = {}) {
  function a(f) {
    if (s.capture || ci.call(n, f), !f.cancelBubble)
      return Xs(() => i?.call(this, f));
  }
  return o.startsWith("pointer") || o.startsWith("touch") || o === "wheel" ? ar(() => {
    n.addEventListener(o, a, s);
  }) : n.addEventListener(o, a, s), a;
}
function Hr(o, n, i, s, a) {
  var f = { capture: s, passive: a }, h = gb(o, n, i, f);
  (n === document.body || // @ts-ignore
  n === window || // @ts-ignore
  n === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  n instanceof HTMLMediaElement) && ah(() => {
    n.removeEventListener(o, h, f);
  });
}
function An(o) {
  for (var n = 0; n < o.length; n++)
    ph.add(o[n]);
  for (var i of Ms)
    i(o);
}
let Uf = null;
function ci(o) {
  var n = this, i = (
    /** @type {Node} */
    n.ownerDocument
  ), s = o.type, a = o.composedPath?.() || [], f = (
    /** @type {null | Element} */
    a[0] || o.target
  );
  Uf = o;
  var h = 0, _ = Uf === o && o.__root;
  if (_) {
    var p = a.indexOf(_);
    if (p !== -1 && (n === document || n === /** @type {any} */
    window)) {
      o.__root = n;
      return;
    }
    var m = a.indexOf(n);
    if (m === -1)
      return;
    p <= m && (h = p);
  }
  if (f = /** @type {Element} */
  a[h] || o.target, f !== n) {
    Tc(o, "currentTarget", {
      configurable: !0,
      get() {
        return f || i;
      }
    });
    var b = ae, R = fe;
    _t(null), un(null);
    try {
      for (var S, F = []; f !== null; ) {
        var T = f.assignedSlot || f.parentNode || /** @type {any} */
        f.host || null;
        try {
          var H = f["__" + s];
          H != null && (!/** @type {any} */
          f.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          o.target === f) && H.call(f, o);
        } catch (L) {
          S ? F.push(L) : S = L;
        }
        if (o.cancelBubble || T === n || T === null)
          break;
        f = T;
      }
      if (S) {
        for (let L of F)
          queueMicrotask(() => {
            throw L;
          });
        throw S;
      }
    } finally {
      o.__root = n, delete o.currentTarget, _t(b), un(R);
    }
  }
}
function vb(o) {
  var n = document.createElement("template");
  return n.innerHTML = o.replaceAll("<!>", "<!---->"), n.content;
}
function Pr(o, n) {
  var i = (
    /** @type {Effect} */
    fe
  );
  i.nodes_start === null && (i.nodes_start = o, i.nodes_end = n);
}
// @__NO_SIDE_EFFECTS__
function ce(o, n) {
  var i = (n & Ww) !== 0, s = (n & Nw) !== 0, a, f = !o.startsWith("<!>");
  return () => {
    if (se)
      return Pr(ge, null), ge;
    a === void 0 && (a = vb(f ? o : "<!>" + o), i || (a = /** @type {Node} */
    /* @__PURE__ */ or(a)));
    var h = (
      /** @type {TemplateNode} */
      s || qc ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (i) {
      var _ = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ or(h)
      ), p = (
        /** @type {TemplateNode} */
        h.lastChild
      );
      Pr(_, p);
    } else
      Pr(h, h);
    return h;
  };
}
function $n() {
  if (se)
    return Pr(ge, null), ge;
  var o = document.createDocumentFragment(), n = document.createComment(""), i = jt();
  return o.append(n, i), Pr(n, i), o;
}
function te(o, n) {
  if (se) {
    var i = (
      /** @type {Effect} */
      fe
    );
    ((i.f & Oo) === 0 || i.nodes_end === null) && (i.nodes_end = ge), yi();
    return;
  }
  o !== null && o.before(
    /** @type {Node} */
    n
  );
}
const _b = ["touchstart", "touchmove"];
function pb(o) {
  return _b.includes(o);
}
function fn(o, n) {
  var i = n == null ? "" : typeof n == "object" ? n + "" : n;
  i !== (o.__t ??= o.nodeValue) && (o.__t = i, o.nodeValue = i + "");
}
function mh(o, n) {
  return wh(o, n);
}
function mb(o, n) {
  Os(), n.intro = n.intro ?? !1;
  const i = n.target, s = se, a = ge;
  try {
    for (var f = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ or(i)
    ); f && (f.nodeType !== Nr || /** @type {Comment} */
    f.data !== Hc); )
      f = /** @type {TemplateNode} */
      /* @__PURE__ */ an(f);
    if (!f)
      throw Lr;
    xn(!0), pt(
      /** @type {Comment} */
      f
    );
    const h = wh(o, { ...n, anchor: f });
    return xn(!1), /**  @type {Exports} */
    h;
  } catch (h) {
    if (h instanceof Error && h.message.split(`
`).some((_) => _.startsWith("https://svelte.dev/e/")))
      throw h;
    return h !== Lr && console.warn("Failed to hydrate: ", h), n.recover === !1 && Aw(), Os(), Gc(i), xn(!1), mh(o, n);
  } finally {
    xn(s), pt(a);
  }
}
const Tr = /* @__PURE__ */ new Map();
function wh(o, { target: n, anchor: i, props: s = {}, events: a, context: f, intro: h = !0 }) {
  Os();
  var _ = /* @__PURE__ */ new Set(), p = (R) => {
    for (var S = 0; S < R.length; S++) {
      var F = R[S];
      if (!_.has(F)) {
        _.add(F);
        var T = pb(F);
        n.addEventListener(F, ci, { passive: T });
        var H = Tr.get(F);
        H === void 0 ? (document.addEventListener(F, ci, { passive: T }), Tr.set(F, 1)) : Tr.set(F, H + 1);
      }
    }
  };
  p(Gs(ph)), Ms.add(p);
  var m = void 0, b = ab(() => {
    var R = i ?? n.appendChild(jt());
    return Jw(
      /** @type {TemplateNode} */
      R,
      {
        pending: () => {
        }
      },
      (S) => {
        if (f) {
          He({});
          var F = (
            /** @type {ComponentContext} */
            Me
          );
          F.c = f;
        }
        if (a && (s.$$events = a), se && Pr(
          /** @type {TemplateNode} */
          S,
          null
        ), m = o(S, s) || {}, se && (fe.nodes_end = ge, ge === null || ge.nodeType !== Nr || /** @type {Comment} */
        ge.data !== Ks))
          throw Do(), Lr;
        f && We();
      }
    ), () => {
      for (var S of _) {
        n.removeEventListener(S, ci);
        var F = (
          /** @type {number} */
          Tr.get(S)
        );
        --F === 0 ? (document.removeEventListener(S, ci), Tr.delete(S)) : Tr.set(S, F);
      }
      Ms.delete(p), R !== i && R.parentNode?.removeChild(R);
    };
  });
  return Ds.set(m, b), m;
}
let Ds = /* @__PURE__ */ new WeakMap();
function wb(o, n) {
  const i = Ds.get(o);
  return i ? (Ds.delete(o), i(n)) : Promise.resolve();
}
function bb(o) {
  return new yb(o);
}
class yb {
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
    var i = /* @__PURE__ */ new Map(), s = (f, h) => {
      var _ = /* @__PURE__ */ eh(h, !1, !1);
      return i.set(f, _), _;
    };
    const a = new Proxy(
      { ...n.props || {}, $$events: {} },
      {
        get(f, h) {
          return g(i.get(h) ?? s(h, Reflect.get(f, h)));
        },
        has(f, h) {
          return h === Sc ? !0 : (g(i.get(h) ?? s(h, Reflect.get(f, h))), Reflect.has(f, h));
        },
        set(f, h, _) {
          return O(i.get(h) ?? s(h, _), _), Reflect.set(f, h, _);
        }
      }
    );
    this.#t = (n.hydrate ? mb : mh)(n.component, {
      target: n.target,
      anchor: n.anchor,
      props: a,
      context: n.context,
      intro: n.intro ?? !1,
      recover: n.recover
    }), (!n?.props?.$$host || n.sync === !1) && Kw(), this.#e = a.$$events;
    for (const f of Object.keys(this.#t))
      f === "$set" || f === "$destroy" || f === "$on" || Tc(this, f, {
        get() {
          return this.#t[f];
        },
        /** @param {any} value */
        set(h) {
          this.#t[f] = h;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (f) => {
      Object.assign(a, f);
    }, this.#t.$destroy = () => {
      wb(this.#t);
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
const xb = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(xb);
class Qs {
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
      ze
    );
    if (this.#e.has(n)) {
      var i = (
        /** @type {Key} */
        this.#e.get(n)
      ), s = this.#t.get(i);
      if (s)
        Vs(s);
      else {
        var a = this.#n.get(i);
        a && (this.#t.set(i, a.effect), this.#n.delete(i), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), s = a.effect);
      }
      for (const [f, h] of this.#e) {
        if (this.#e.delete(f), f === n)
          break;
        const _ = this.#n.get(h);
        _ && (lt(_.effect), this.#n.delete(h));
      }
      for (const [f, h] of this.#t) {
        if (f === i) continue;
        const _ = () => {
          if (Array.from(this.#e.values()).includes(f)) {
            var m = document.createDocumentFragment();
            _h(h, m), m.append(jt()), this.#n.set(f, { effect: h, fragment: m });
          } else
            lt(h);
          this.#t.delete(f);
        };
        this.#r || !s ? Or(h, _, !1) : _();
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
      i.includes(s) || (lt(a.effect), this.#n.delete(s));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(n, i) {
    var s = (
      /** @type {Batch} */
      ze
    ), a = Kc();
    if (i && !this.#t.has(n) && !this.#n.has(n))
      if (a) {
        var f = document.createDocumentFragment(), h = jt();
        f.append(h), this.#n.set(n, {
          effect: zt(() => i(h)),
          fragment: f
        });
      } else
        this.#t.set(
          n,
          zt(() => i(this.anchor))
        );
    if (this.#e.set(s, n), a) {
      for (const [_, p] of this.#t)
        _ === n ? s.skipped_effects.delete(p) : s.skipped_effects.add(p);
      for (const [_, p] of this.#n)
        _ === n ? s.skipped_effects.delete(p.effect) : s.skipped_effects.add(p.effect);
      s.oncommit(this.#u), s.ondiscard(this.#i);
    } else
      se && (this.anchor = ge), this.#u();
  }
}
function js(o, n, ...i) {
  var s = new Qs(o);
  Si(() => {
    const a = n() ?? null;
    s.ensure(a, a && ((f) => a(f, ...i)));
  }, ir);
}
function kr(o) {
  Me === null && Mc(), bi && Me.l !== null ? Cb(Me).m.push(o) : Fe(() => {
    const n = Ci(o);
    if (typeof n == "function") return (
      /** @type {() => void} */
      n
    );
  });
}
function Cb(o) {
  var n = (
    /** @type {ComponentContextLegacy} */
    o.l
  );
  return n.u ??= { a: [], b: [], m: [] };
}
function vt(o, n, i = !1) {
  se && yi();
  var s = new Qs(o), a = i ? ir : 0;
  function f(h, _) {
    if (se) {
      const m = kc(o) === Mo;
      if (h === m) {
        var p = So();
        pt(p), s.anchor = p, xn(!1), s.ensure(h, _), xn(!0);
        return;
      }
    }
    s.ensure(h, _);
  }
  Si(() => {
    var h = !1;
    n((_, p = !0) => {
      h = !0, f(p, _);
    }), h || f(!1, null);
  }, a);
}
function Rb(o, n, i) {
  se && yi();
  var s = new Qs(o), a = !Br();
  Si(() => {
    var f = n();
    a && f !== null && typeof f == "object" && (f = /** @type {V} */
    {}), s.ensure(f, i);
  });
}
function Sb(o, n) {
  return n;
}
function Eb(o, n, i) {
  for (var s = o.items, a = [], f = n.length, h = 0; h < f; h++)
    Js(n[h].e, a, !0);
  var _ = f > 0 && a.length === 0 && i !== null;
  if (_) {
    var p = (
      /** @type {Element} */
      /** @type {Element} */
      i.parentNode
    );
    Gc(p), p.append(
      /** @type {Element} */
      i
    ), s.clear(), rn(o, n[0].prev, n[f - 1].next);
  }
  gh(a, () => {
    for (var m = 0; m < f; m++) {
      var b = n[m];
      _ || (s.delete(b.k), rn(o, b.prev, b.next)), lt(b.e, !_);
    }
  });
}
function vi(o, n, i, s, a, f = null) {
  var h = o, _ = { flags: n, items: /* @__PURE__ */ new Map(), first: null }, p = (n & Dc) !== 0;
  if (p) {
    var m = (
      /** @type {Element} */
      o
    );
    h = se ? pt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ or(m)
    ) : m.appendChild(jt());
  }
  se && yi();
  var b = null, R = !1, S = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ Vc(() => {
    var B = i();
    return Us(B) ? B : B == null ? [] : Gs(B);
  }), T, H;
  function L() {
    Tb(
      H,
      T,
      _,
      S,
      h,
      a,
      n,
      s,
      i
    ), f !== null && (T.length === 0 ? b ? Vs(b) : b = zt(() => f(h)) : b !== null && Or(b, () => {
      b = null;
    }));
  }
  Si(() => {
    H ??= /** @type {Effect} */
    fe, T = /** @type {V[]} */
    g(F);
    var B = T.length;
    if (R && B === 0)
      return;
    R = B === 0;
    let k = !1;
    if (se) {
      var U = kc(h) === Mo;
      U !== (B === 0) && (h = So(), pt(h), xn(!1), k = !0);
    }
    if (se) {
      for (var Y = null, G, D = 0; D < B; D++) {
        if (ge.nodeType === Nr && /** @type {Comment} */
        ge.data === Ks) {
          h = /** @type {Comment} */
          ge, k = !0, xn(!1);
          break;
        }
        var W = T[D], ne = s(W, D);
        G = Hs(
          ge,
          _,
          Y,
          null,
          W,
          ne,
          D,
          a,
          n,
          i
        ), _.items.set(ne, G), Y = G;
      }
      B > 0 && pt(So());
    }
    if (se)
      B === 0 && f && (b = zt(() => f(h)));
    else if (Kc()) {
      var ue = /* @__PURE__ */ new Set(), Pe = (
        /** @type {Batch} */
        ze
      );
      for (D = 0; D < B; D += 1) {
        W = T[D], ne = s(W, D);
        var be = _.items.get(ne) ?? S.get(ne);
        be ? (n & (Lo | Fo)) !== 0 && bh(be, W, D, n) : (G = Hs(
          null,
          _,
          null,
          null,
          W,
          ne,
          D,
          a,
          n,
          i,
          !0
        ), S.set(ne, G)), ue.add(ne);
      }
      for (const [ye, ie] of _.items)
        ue.has(ye) || Pe.skipped_effects.add(ie.e);
      Pe.oncommit(L);
    } else
      L();
    k && xn(!0), g(F);
  }), se && (h = ge);
}
function Tb(o, n, i, s, a, f, h, _, p) {
  var m = (h & Dw) !== 0, b = (h & (Lo | Fo)) !== 0, R = n.length, S = i.items, F = i.first, T = F, H, L = null, B, k = [], U = [], Y, G, D, W;
  if (m)
    for (W = 0; W < R; W += 1)
      Y = n[W], G = _(Y, W), D = S.get(G), D !== void 0 && (D.a?.measure(), (B ??= /* @__PURE__ */ new Set()).add(D));
  for (W = 0; W < R; W += 1) {
    if (Y = n[W], G = _(Y, W), D = S.get(G), D === void 0) {
      var ne = s.get(G);
      if (ne !== void 0) {
        s.delete(G), S.set(G, ne);
        var ue = L ? L.next : T;
        rn(i, L, ne), rn(i, ne, ue), ss(ne, ue, a), L = ne;
      } else {
        var Pe = T ? (
          /** @type {TemplateNode} */
          T.e.nodes_start
        ) : a;
        L = Hs(
          Pe,
          i,
          L,
          L === null ? i.first : L.next,
          Y,
          G,
          W,
          f,
          h,
          p
        );
      }
      S.set(G, L), k = [], U = [], T = L.next;
      continue;
    }
    if (b && bh(D, Y, W, h), (D.e.f & Ot) !== 0 && (Vs(D.e), m && (D.a?.unfix(), (B ??= /* @__PURE__ */ new Set()).delete(D))), D !== T) {
      if (H !== void 0 && H.has(D)) {
        if (k.length < U.length) {
          var be = U[0], ye;
          L = be.prev;
          var ie = k[0], xe = k[k.length - 1];
          for (ye = 0; ye < k.length; ye += 1)
            ss(k[ye], be, a);
          for (ye = 0; ye < U.length; ye += 1)
            H.delete(U[ye]);
          rn(i, ie.prev, xe.next), rn(i, L, ie), rn(i, xe, be), T = be, L = xe, W -= 1, k = [], U = [];
        } else
          H.delete(D), ss(D, T, a), rn(i, D.prev, D.next), rn(i, D, L === null ? i.first : L.next), rn(i, L, D), L = D;
        continue;
      }
      for (k = [], U = []; T !== null && T.k !== G; )
        (T.e.f & Ot) === 0 && (H ??= /* @__PURE__ */ new Set()).add(T), U.push(T), T = T.next;
      if (T === null)
        continue;
      D = T;
    }
    k.push(D), L = D, T = D.next;
  }
  if (T !== null || H !== void 0) {
    for (var Ae = H === void 0 ? [] : Gs(H); T !== null; )
      (T.e.f & Ot) === 0 && Ae.push(T), T = T.next;
    var Ce = Ae.length;
    if (Ce > 0) {
      var Ie = (h & Dc) !== 0 && R === 0 ? a : null;
      if (m) {
        for (W = 0; W < Ce; W += 1)
          Ae[W].a?.measure();
        for (W = 0; W < Ce; W += 1)
          Ae[W].a?.fix();
      }
      Eb(i, Ae, Ie);
    }
  }
  m && ar(() => {
    if (B !== void 0)
      for (D of B)
        D.a?.apply();
  }), o.first = i.first && i.first.e, o.last = L && L.e;
  for (var Ze of s.values())
    lt(Ze.e);
  s.clear();
}
function bh(o, n, i, s) {
  (s & Lo) !== 0 && Dr(o.v, n), (s & Fo) !== 0 ? Dr(
    /** @type {Value<number>} */
    o.i,
    i
  ) : o.i = i;
}
function Hs(o, n, i, s, a, f, h, _, p, m, b) {
  var R = (p & Lo) !== 0, S = (p & Hw) === 0, F = R ? S ? /* @__PURE__ */ eh(a, !1, !1) : sr(a) : a, T = (p & Fo) === 0 ? h : sr(h), H = {
    i: T,
    v: F,
    k: f,
    a: null,
    // @ts-expect-error
    e: null,
    prev: i,
    next: s
  };
  try {
    if (o === null) {
      var L = document.createDocumentFragment();
      L.append(o = jt());
    }
    return H.e = zt(() => _(
      /** @type {Node} */
      o,
      F,
      T,
      m
    ), se), H.e.prev = i && i.e, H.e.next = s && s.e, i === null ? b || (n.first = H) : (i.next = H, i.e.next = H.e), s !== null && (s.prev = H, s.e.prev = H.e), H;
  } finally {
  }
}
function ss(o, n, i) {
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
    var h = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ an(f)
    );
    a.before(f), f = h;
  }
}
function rn(o, n, i) {
  n === null ? o.first = i : (n.next = i, n.e.next = i && i.e), i !== null && (i.prev = n, i.e.prev = n && n.e);
}
function Ne(o, n) {
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
function $s(o, n, i) {
  Ri(() => {
    var s = Ci(() => n(o, i?.()) || {});
    if (i && s?.update) {
      var a = !1, f = (
        /** @type {any} */
        {}
      );
      Zs(() => {
        var h = i();
        lb(h), a && Lc(f, h) && (f = h, s.update(h));
      }), a = !0;
    }
    if (s?.destroy)
      return () => (
        /** @type {Function} */
        s.destroy()
      );
  });
}
function Ab(o, n, i) {
  var s = o == null ? "" : "" + o;
  return n && (s = s ? s + " " + n : n), s === "" ? null : s;
}
function Gf(o, n = !1) {
  var i = n ? " !important;" : ";", s = "";
  for (var a in o) {
    var f = o[a];
    f != null && f !== "" && (s += " " + a + ": " + f + i);
  }
  return s;
}
function Ib(o, n) {
  if (n) {
    var i = "", s, a;
    return Array.isArray(n) ? (s = n[0], a = n[1]) : s = n, s && (i += Gf(s)), a && (i += Gf(a, !0)), i = i.trim(), i === "" ? null : i;
  }
  return String(o);
}
function zn(o, n, i, s, a, f) {
  var h = o.__className;
  if (se || h !== i || h === void 0) {
    var _ = Ab(i, s);
    (!se || _ !== o.getAttribute("class")) && (_ == null ? o.removeAttribute("class") : o.className = _), o.__className = i;
  }
  return f;
}
function us(o, n = {}, i, s) {
  for (var a in i) {
    var f = i[a];
    n[a] !== f && (i[a] == null ? o.style.removeProperty(a) : o.style.setProperty(a, f, s));
  }
}
function wt(o, n, i, s) {
  var a = o.__style;
  if (se || a !== n) {
    var f = Ib(n, s);
    (!se || f !== o.getAttribute("style")) && (f == null ? o.removeAttribute("style") : o.style.cssText = f), o.__style = n;
  } else s && (Array.isArray(s) ? (us(o, i?.[0], s[0]), us(o, i?.[1], s[1], "important")) : us(o, i, s));
  return s;
}
const Ob = Symbol("is custom element"), Pb = Symbol("is html");
function Lb(o) {
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
    o.__on_r = i, ar(i), nb();
  }
}
function Fb(o, n) {
  var i = yh(o);
  i.checked !== (i.checked = // treat null and undefined the same for the initial value
  n ?? void 0) && (o.checked = n);
}
function wi(o, n, i, s) {
  var a = yh(o);
  se && (a[n] = o.getAttribute(n), n === "src" || n === "srcset" || n === "href" && o.nodeName === "LINK") || a[n] !== (a[n] = i) && (n === "loading" && (o[ww] = i), i == null ? o.removeAttribute(n) : typeof i != "string" && Mb(o).includes(n) ? o[n] = i : o.setAttribute(n, i));
}
function yh(o) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    o.__attributes ??= {
      [Ob]: o.nodeName.includes("-"),
      [Pb]: o.namespaceURI === Bw
    }
  );
}
var Kf = /* @__PURE__ */ new Map();
function Mb(o) {
  var n = o.getAttribute("is") || o.nodeName, i = Kf.get(n);
  if (i) return i;
  Kf.set(n, i = []);
  for (var s, a = o, f = Element.prototype; f !== a; ) {
    s = Ac(a);
    for (var h in s)
      s[h].set && i.push(h);
    a = Po(a);
  }
  return i;
}
class eu {
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
          eu.entries.set(i.target, i);
          for (var s of this.#e.get(i.target) || [])
            s(i);
        }
      }
    ));
  }
}
var Db = /* @__PURE__ */ new eu({
  box: "border-box"
});
function $t(o, n, i) {
  var s = Db.observe(o, () => i(o[n]));
  Ri(() => (Ci(() => i(o[n])), s));
}
function Yf(o, n) {
  return o === n || o?.[tr] === n;
}
function st(o = {}, n, i, s) {
  return Ri(() => {
    var a, f;
    return Zs(() => {
      a = f, f = [], Ci(() => {
        o !== i(...f) && (n(o, ...f), a && Yf(i(...a), o) && n(null, ...a));
      });
    }), () => {
      ar(() => {
        f && Yf(i(...f), o) && n(null, ...f);
      });
    };
  }), o;
}
let bo = !1;
function Hb(o) {
  var n = bo;
  try {
    return bo = !1, [o(), bo];
  } finally {
    bo = n;
  }
}
function qr(o, n, i, s) {
  var a = (
    /** @type {V} */
    s
  ), f = !0, h = () => (f && (f = !1, a = /** @type {V} */
  s), a), _;
  {
    var p = tr in o || Sc in o;
    _ = Ir(o, n)?.set ?? (p && n in o ? (L) => o[n] = L : void 0);
  }
  var m, b = !1;
  [m, b] = Hb(() => (
    /** @type {V} */
    o[n]
  ));
  var R;
  if (R = () => {
    var L = (
      /** @type {V} */
      o[n]
    );
    return L === void 0 ? h() : (f = !0, L);
  }, _) {
    var S = o.$$legacy;
    return (
      /** @type {() => V} */
      (function(L, B) {
        return arguments.length > 0 ? ((!B || S || b) && _(B ? R() : L), L) : R();
      })
    );
  }
  var F = !1, T = /* @__PURE__ */ Wo(() => (F = !1, R()));
  g(T);
  var H = (
    /** @type {Effect} */
    fe
  );
  return (
    /** @type {() => V} */
    (function(L, B) {
      if (arguments.length > 0) {
        const k = B ? g(T) : $e(L);
        return O(T, k), F = !0, a !== void 0 && (a = k), L;
      }
      return fr && F || (H.f & Bn) !== 0 ? T.v : g(T);
    })
  );
}
var Nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tu(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var hi = { exports: {} };
var Wb = hi.exports, Xf;
function Nb() {
  return Xf || (Xf = 1, (function(o, n) {
    (function() {
      var i, s = "4.17.21", a = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", _ = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", m = 500, b = "__lodash_placeholder__", R = 1, S = 2, F = 4, T = 1, H = 2, L = 1, B = 2, k = 4, U = 8, Y = 16, G = 32, D = 64, W = 128, ne = 256, ue = 512, Pe = 30, be = "...", ye = 800, ie = 16, xe = 1, Ae = 2, Ce = 3, Ie = 1 / 0, Ze = 9007199254740991, bt = 17976931348623157e292, Pt = NaN, Re = 4294967295, Gt = Re - 1, Un = Re >>> 1, Bo = [
        ["ary", W],
        ["bind", L],
        ["bindKey", B],
        ["curry", U],
        ["curryRight", Y],
        ["flip", ue],
        ["partial", G],
        ["partialRight", D],
        ["rearg", ne]
      ], cr = "[object Arguments]", Ei = "[object Array]", Eh = "[object AsyncFunction]", zr = "[object Boolean]", Ur = "[object Date]", Th = "[object DOMException]", Ti = "[object Error]", Ai = "[object Function]", ru = "[object GeneratorFunction]", Kt = "[object Map]", Gr = "[object Number]", Ah = "[object Null]", cn = "[object Object]", iu = "[object Promise]", Ih = "[object Proxy]", Kr = "[object RegExp]", Yt = "[object Set]", Yr = "[object String]", Ii = "[object Symbol]", Oh = "[object Undefined]", Xr = "[object WeakMap]", Ph = "[object WeakSet]", Zr = "[object ArrayBuffer]", hr = "[object DataView]", ko = "[object Float32Array]", qo = "[object Float64Array]", zo = "[object Int8Array]", Uo = "[object Int16Array]", Go = "[object Int32Array]", Ko = "[object Uint8Array]", Yo = "[object Uint8ClampedArray]", Xo = "[object Uint16Array]", Zo = "[object Uint32Array]", Lh = /\b__p \+= '';/g, Fh = /\b(__p \+=) '' \+/g, Mh = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ou = /&(?:amp|lt|gt|quot|#39);/g, lu = /[&<>"']/g, Dh = RegExp(ou.source), Hh = RegExp(lu.source), Wh = /<%-([\s\S]+?)%>/g, Nh = /<%([\s\S]+?)%>/g, su = /<%=([\s\S]+?)%>/g, Bh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kh = /^\w*$/, qh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jo = /[\\^$.*+?()[\]{}|]/g, zh = RegExp(Jo.source), Vo = /^\s+/, Uh = /\s/, Gh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Kh = /\{\n\/\* \[wrapped with (.+)\] \*/, Yh = /,? & /, Xh = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Zh = /[()=,{}\[\]\/\s]/, Jh = /\\(\\)?/g, Vh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, uu = /\w*$/, Qh = /^[-+]0x[0-9a-f]+$/i, jh = /^0b[01]+$/i, $h = /^\[object .+?Constructor\]$/, ed = /^0o[0-7]+$/i, td = /^(?:0|[1-9]\d*)$/, nd = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Oi = /($^)/, rd = /['\n\r\u2028\u2029\\]/g, Pi = "\\ud800-\\udfff", id = "\\u0300-\\u036f", od = "\\ufe20-\\ufe2f", ld = "\\u20d0-\\u20ff", au = id + od + ld, fu = "\\u2700-\\u27bf", cu = "a-z\\xdf-\\xf6\\xf8-\\xff", sd = "\\xac\\xb1\\xd7\\xf7", ud = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ad = "\\u2000-\\u206f", fd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", hu = "A-Z\\xc0-\\xd6\\xd8-\\xde", du = "\\ufe0e\\ufe0f", gu = sd + ud + ad + fd, Qo = "['’]", cd = "[" + Pi + "]", vu = "[" + gu + "]", Li = "[" + au + "]", _u = "\\d+", hd = "[" + fu + "]", pu = "[" + cu + "]", mu = "[^" + Pi + gu + _u + fu + cu + hu + "]", jo = "\\ud83c[\\udffb-\\udfff]", dd = "(?:" + Li + "|" + jo + ")", wu = "[^" + Pi + "]", $o = "(?:\\ud83c[\\udde6-\\uddff]){2}", el = "[\\ud800-\\udbff][\\udc00-\\udfff]", dr = "[" + hu + "]", bu = "\\u200d", yu = "(?:" + pu + "|" + mu + ")", gd = "(?:" + dr + "|" + mu + ")", xu = "(?:" + Qo + "(?:d|ll|m|re|s|t|ve))?", Cu = "(?:" + Qo + "(?:D|LL|M|RE|S|T|VE))?", Ru = dd + "?", Su = "[" + du + "]?", vd = "(?:" + bu + "(?:" + [wu, $o, el].join("|") + ")" + Su + Ru + ")*", _d = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", pd = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Eu = Su + Ru + vd, md = "(?:" + [hd, $o, el].join("|") + ")" + Eu, wd = "(?:" + [wu + Li + "?", Li, $o, el, cd].join("|") + ")", bd = RegExp(Qo, "g"), yd = RegExp(Li, "g"), tl = RegExp(jo + "(?=" + jo + ")|" + wd + Eu, "g"), xd = RegExp([
        dr + "?" + pu + "+" + xu + "(?=" + [vu, dr, "$"].join("|") + ")",
        gd + "+" + Cu + "(?=" + [vu, dr + yu, "$"].join("|") + ")",
        dr + "?" + yu + "+" + xu,
        dr + "+" + Cu,
        pd,
        _d,
        _u,
        md
      ].join("|"), "g"), Cd = RegExp("[" + bu + Pi + au + du + "]"), Rd = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Sd = [
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
      ], Ed = -1, Te = {};
      Te[ko] = Te[qo] = Te[zo] = Te[Uo] = Te[Go] = Te[Ko] = Te[Yo] = Te[Xo] = Te[Zo] = !0, Te[cr] = Te[Ei] = Te[Zr] = Te[zr] = Te[hr] = Te[Ur] = Te[Ti] = Te[Ai] = Te[Kt] = Te[Gr] = Te[cn] = Te[Kr] = Te[Yt] = Te[Yr] = Te[Xr] = !1;
      var Ee = {};
      Ee[cr] = Ee[Ei] = Ee[Zr] = Ee[hr] = Ee[zr] = Ee[Ur] = Ee[ko] = Ee[qo] = Ee[zo] = Ee[Uo] = Ee[Go] = Ee[Kt] = Ee[Gr] = Ee[cn] = Ee[Kr] = Ee[Yt] = Ee[Yr] = Ee[Ii] = Ee[Ko] = Ee[Yo] = Ee[Xo] = Ee[Zo] = !0, Ee[Ti] = Ee[Ai] = Ee[Xr] = !1;
      var Td = {
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
      }, Ad = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Id = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Od = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Pd = parseFloat, Ld = parseInt, Tu = typeof Nn == "object" && Nn && Nn.Object === Object && Nn, Fd = typeof self == "object" && self && self.Object === Object && self, Ye = Tu || Fd || Function("return this")(), nl = n && !n.nodeType && n, Gn = nl && !0 && o && !o.nodeType && o, Au = Gn && Gn.exports === nl, rl = Au && Tu.process, Lt = (function() {
        try {
          var y = Gn && Gn.require && Gn.require("util").types;
          return y || rl && rl.binding && rl.binding("util");
        } catch {
        }
      })(), Iu = Lt && Lt.isArrayBuffer, Ou = Lt && Lt.isDate, Pu = Lt && Lt.isMap, Lu = Lt && Lt.isRegExp, Fu = Lt && Lt.isSet, Mu = Lt && Lt.isTypedArray;
      function yt(y, E, C) {
        switch (C.length) {
          case 0:
            return y.call(E);
          case 1:
            return y.call(E, C[0]);
          case 2:
            return y.call(E, C[0], C[1]);
          case 3:
            return y.call(E, C[0], C[1], C[2]);
        }
        return y.apply(E, C);
      }
      function Md(y, E, C, q) {
        for (var V = -1, he = y == null ? 0 : y.length; ++V < he; ) {
          var Ue = y[V];
          E(q, Ue, C(Ue), y);
        }
        return q;
      }
      function Ft(y, E) {
        for (var C = -1, q = y == null ? 0 : y.length; ++C < q && E(y[C], C, y) !== !1; )
          ;
        return y;
      }
      function Dd(y, E) {
        for (var C = y == null ? 0 : y.length; C-- && E(y[C], C, y) !== !1; )
          ;
        return y;
      }
      function Du(y, E) {
        for (var C = -1, q = y == null ? 0 : y.length; ++C < q; )
          if (!E(y[C], C, y))
            return !1;
        return !0;
      }
      function In(y, E) {
        for (var C = -1, q = y == null ? 0 : y.length, V = 0, he = []; ++C < q; ) {
          var Ue = y[C];
          E(Ue, C, y) && (he[V++] = Ue);
        }
        return he;
      }
      function Fi(y, E) {
        var C = y == null ? 0 : y.length;
        return !!C && gr(y, E, 0) > -1;
      }
      function il(y, E, C) {
        for (var q = -1, V = y == null ? 0 : y.length; ++q < V; )
          if (C(E, y[q]))
            return !0;
        return !1;
      }
      function Oe(y, E) {
        for (var C = -1, q = y == null ? 0 : y.length, V = Array(q); ++C < q; )
          V[C] = E(y[C], C, y);
        return V;
      }
      function On(y, E) {
        for (var C = -1, q = E.length, V = y.length; ++C < q; )
          y[V + C] = E[C];
        return y;
      }
      function ol(y, E, C, q) {
        var V = -1, he = y == null ? 0 : y.length;
        for (q && he && (C = y[++V]); ++V < he; )
          C = E(C, y[V], V, y);
        return C;
      }
      function Hd(y, E, C, q) {
        var V = y == null ? 0 : y.length;
        for (q && V && (C = y[--V]); V--; )
          C = E(C, y[V], V, y);
        return C;
      }
      function ll(y, E) {
        for (var C = -1, q = y == null ? 0 : y.length; ++C < q; )
          if (E(y[C], C, y))
            return !0;
        return !1;
      }
      var Wd = sl("length");
      function Nd(y) {
        return y.split("");
      }
      function Bd(y) {
        return y.match(Xh) || [];
      }
      function Hu(y, E, C) {
        var q;
        return C(y, function(V, he, Ue) {
          if (E(V, he, Ue))
            return q = he, !1;
        }), q;
      }
      function Mi(y, E, C, q) {
        for (var V = y.length, he = C + (q ? 1 : -1); q ? he-- : ++he < V; )
          if (E(y[he], he, y))
            return he;
        return -1;
      }
      function gr(y, E, C) {
        return E === E ? Qd(y, E, C) : Mi(y, Wu, C);
      }
      function kd(y, E, C, q) {
        for (var V = C - 1, he = y.length; ++V < he; )
          if (q(y[V], E))
            return V;
        return -1;
      }
      function Wu(y) {
        return y !== y;
      }
      function Nu(y, E) {
        var C = y == null ? 0 : y.length;
        return C ? al(y, E) / C : Pt;
      }
      function sl(y) {
        return function(E) {
          return E == null ? i : E[y];
        };
      }
      function ul(y) {
        return function(E) {
          return y == null ? i : y[E];
        };
      }
      function Bu(y, E, C, q, V) {
        return V(y, function(he, Ue, Se) {
          C = q ? (q = !1, he) : E(C, he, Ue, Se);
        }), C;
      }
      function qd(y, E) {
        var C = y.length;
        for (y.sort(E); C--; )
          y[C] = y[C].value;
        return y;
      }
      function al(y, E) {
        for (var C, q = -1, V = y.length; ++q < V; ) {
          var he = E(y[q]);
          he !== i && (C = C === i ? he : C + he);
        }
        return C;
      }
      function fl(y, E) {
        for (var C = -1, q = Array(y); ++C < y; )
          q[C] = E(C);
        return q;
      }
      function zd(y, E) {
        return Oe(E, function(C) {
          return [C, y[C]];
        });
      }
      function ku(y) {
        return y && y.slice(0, Gu(y) + 1).replace(Vo, "");
      }
      function xt(y) {
        return function(E) {
          return y(E);
        };
      }
      function cl(y, E) {
        return Oe(E, function(C) {
          return y[C];
        });
      }
      function Jr(y, E) {
        return y.has(E);
      }
      function qu(y, E) {
        for (var C = -1, q = y.length; ++C < q && gr(E, y[C], 0) > -1; )
          ;
        return C;
      }
      function zu(y, E) {
        for (var C = y.length; C-- && gr(E, y[C], 0) > -1; )
          ;
        return C;
      }
      function Ud(y, E) {
        for (var C = y.length, q = 0; C--; )
          y[C] === E && ++q;
        return q;
      }
      var Gd = ul(Td), Kd = ul(Ad);
      function Yd(y) {
        return "\\" + Od[y];
      }
      function Xd(y, E) {
        return y == null ? i : y[E];
      }
      function vr(y) {
        return Cd.test(y);
      }
      function Zd(y) {
        return Rd.test(y);
      }
      function Jd(y) {
        for (var E, C = []; !(E = y.next()).done; )
          C.push(E.value);
        return C;
      }
      function hl(y) {
        var E = -1, C = Array(y.size);
        return y.forEach(function(q, V) {
          C[++E] = [V, q];
        }), C;
      }
      function Uu(y, E) {
        return function(C) {
          return y(E(C));
        };
      }
      function Pn(y, E) {
        for (var C = -1, q = y.length, V = 0, he = []; ++C < q; ) {
          var Ue = y[C];
          (Ue === E || Ue === b) && (y[C] = b, he[V++] = C);
        }
        return he;
      }
      function Di(y) {
        var E = -1, C = Array(y.size);
        return y.forEach(function(q) {
          C[++E] = q;
        }), C;
      }
      function Vd(y) {
        var E = -1, C = Array(y.size);
        return y.forEach(function(q) {
          C[++E] = [q, q];
        }), C;
      }
      function Qd(y, E, C) {
        for (var q = C - 1, V = y.length; ++q < V; )
          if (y[q] === E)
            return q;
        return -1;
      }
      function jd(y, E, C) {
        for (var q = C + 1; q--; )
          if (y[q] === E)
            return q;
        return q;
      }
      function _r(y) {
        return vr(y) ? eg(y) : Wd(y);
      }
      function Xt(y) {
        return vr(y) ? tg(y) : Nd(y);
      }
      function Gu(y) {
        for (var E = y.length; E-- && Uh.test(y.charAt(E)); )
          ;
        return E;
      }
      var $d = ul(Id);
      function eg(y) {
        for (var E = tl.lastIndex = 0; tl.test(y); )
          ++E;
        return E;
      }
      function tg(y) {
        return y.match(tl) || [];
      }
      function ng(y) {
        return y.match(xd) || [];
      }
      var rg = (function y(E) {
        E = E == null ? Ye : pr.defaults(Ye.Object(), E, pr.pick(Ye, Sd));
        var C = E.Array, q = E.Date, V = E.Error, he = E.Function, Ue = E.Math, Se = E.Object, dl = E.RegExp, ig = E.String, Mt = E.TypeError, Hi = C.prototype, og = he.prototype, mr = Se.prototype, Wi = E["__core-js_shared__"], Ni = og.toString, pe = mr.hasOwnProperty, lg = 0, Ku = (function() {
          var e = /[^.]+$/.exec(Wi && Wi.keys && Wi.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Bi = mr.toString, sg = Ni.call(Se), ug = Ye._, ag = dl(
          "^" + Ni.call(pe).replace(Jo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), ki = Au ? E.Buffer : i, Ln = E.Symbol, qi = E.Uint8Array, Yu = ki ? ki.allocUnsafe : i, zi = Uu(Se.getPrototypeOf, Se), Xu = Se.create, Zu = mr.propertyIsEnumerable, Ui = Hi.splice, Ju = Ln ? Ln.isConcatSpreadable : i, Vr = Ln ? Ln.iterator : i, Kn = Ln ? Ln.toStringTag : i, Gi = (function() {
          try {
            var e = Vn(Se, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), fg = E.clearTimeout !== Ye.clearTimeout && E.clearTimeout, cg = q && q.now !== Ye.Date.now && q.now, hg = E.setTimeout !== Ye.setTimeout && E.setTimeout, Ki = Ue.ceil, Yi = Ue.floor, gl = Se.getOwnPropertySymbols, dg = ki ? ki.isBuffer : i, Vu = E.isFinite, gg = Hi.join, vg = Uu(Se.keys, Se), Ge = Ue.max, Je = Ue.min, _g = q.now, pg = E.parseInt, Qu = Ue.random, mg = Hi.reverse, vl = Vn(E, "DataView"), Qr = Vn(E, "Map"), _l = Vn(E, "Promise"), wr = Vn(E, "Set"), jr = Vn(E, "WeakMap"), $r = Vn(Se, "create"), Xi = jr && new jr(), br = {}, wg = Qn(vl), bg = Qn(Qr), yg = Qn(_l), xg = Qn(wr), Cg = Qn(jr), Zi = Ln ? Ln.prototype : i, ei = Zi ? Zi.valueOf : i, ju = Zi ? Zi.toString : i;
        function c(e) {
          if (De(e) && !Q(e) && !(e instanceof oe)) {
            if (e instanceof Dt)
              return e;
            if (pe.call(e, "__wrapped__"))
              return $a(e);
          }
          return new Dt(e);
        }
        var yr = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!Le(t))
              return {};
            if (Xu)
              return Xu(t);
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
          escape: Wh,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Nh,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: su,
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
        }, c.prototype = Ji.prototype, c.prototype.constructor = c, Dt.prototype = yr(Ji.prototype), Dt.prototype.constructor = Dt;
        function oe(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Re, this.__views__ = [];
        }
        function Rg() {
          var e = new oe(this.__wrapped__);
          return e.__actions__ = ut(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ut(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ut(this.__views__), e;
        }
        function Sg() {
          if (this.__filtered__) {
            var e = new oe(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function Eg() {
          var e = this.__wrapped__.value(), t = this.__dir__, r = Q(e), l = t < 0, u = r ? e.length : 0, d = Nv(0, u, this.__views__), v = d.start, w = d.end, x = w - v, A = l ? w : v - 1, I = this.__iteratees__, P = I.length, N = 0, K = Je(x, this.__takeCount__);
          if (!r || !l && u == x && K == x)
            return xa(e, this.__actions__);
          var Z = [];
          e:
            for (; x-- && N < K; ) {
              A += t;
              for (var $ = -1, J = e[A]; ++$ < P; ) {
                var re = I[$], le = re.iteratee, St = re.type, it = le(J);
                if (St == Ae)
                  J = it;
                else if (!it) {
                  if (St == xe)
                    continue e;
                  break e;
                }
              }
              Z[N++] = J;
            }
          return Z;
        }
        oe.prototype = yr(Ji.prototype), oe.prototype.constructor = oe;
        function Yn(e) {
          var t = -1, r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
            var l = e[t];
            this.set(l[0], l[1]);
          }
        }
        function Tg() {
          this.__data__ = $r ? $r(null) : {}, this.size = 0;
        }
        function Ag(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function Ig(e) {
          var t = this.__data__;
          if ($r) {
            var r = t[e];
            return r === p ? i : r;
          }
          return pe.call(t, e) ? t[e] : i;
        }
        function Og(e) {
          var t = this.__data__;
          return $r ? t[e] !== i : pe.call(t, e);
        }
        function Pg(e, t) {
          var r = this.__data__;
          return this.size += this.has(e) ? 0 : 1, r[e] = $r && t === i ? p : t, this;
        }
        Yn.prototype.clear = Tg, Yn.prototype.delete = Ag, Yn.prototype.get = Ig, Yn.prototype.has = Og, Yn.prototype.set = Pg;
        function hn(e) {
          var t = -1, r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
            var l = e[t];
            this.set(l[0], l[1]);
          }
        }
        function Lg() {
          this.__data__ = [], this.size = 0;
        }
        function Fg(e) {
          var t = this.__data__, r = Vi(t, e);
          if (r < 0)
            return !1;
          var l = t.length - 1;
          return r == l ? t.pop() : Ui.call(t, r, 1), --this.size, !0;
        }
        function Mg(e) {
          var t = this.__data__, r = Vi(t, e);
          return r < 0 ? i : t[r][1];
        }
        function Dg(e) {
          return Vi(this.__data__, e) > -1;
        }
        function Hg(e, t) {
          var r = this.__data__, l = Vi(r, e);
          return l < 0 ? (++this.size, r.push([e, t])) : r[l][1] = t, this;
        }
        hn.prototype.clear = Lg, hn.prototype.delete = Fg, hn.prototype.get = Mg, hn.prototype.has = Dg, hn.prototype.set = Hg;
        function dn(e) {
          var t = -1, r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
            var l = e[t];
            this.set(l[0], l[1]);
          }
        }
        function Wg() {
          this.size = 0, this.__data__ = {
            hash: new Yn(),
            map: new (Qr || hn)(),
            string: new Yn()
          };
        }
        function Ng(e) {
          var t = uo(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function Bg(e) {
          return uo(this, e).get(e);
        }
        function kg(e) {
          return uo(this, e).has(e);
        }
        function qg(e, t) {
          var r = uo(this, e), l = r.size;
          return r.set(e, t), this.size += r.size == l ? 0 : 1, this;
        }
        dn.prototype.clear = Wg, dn.prototype.delete = Ng, dn.prototype.get = Bg, dn.prototype.has = kg, dn.prototype.set = qg;
        function Xn(e) {
          var t = -1, r = e == null ? 0 : e.length;
          for (this.__data__ = new dn(); ++t < r; )
            this.add(e[t]);
        }
        function zg(e) {
          return this.__data__.set(e, p), this;
        }
        function Ug(e) {
          return this.__data__.has(e);
        }
        Xn.prototype.add = Xn.prototype.push = zg, Xn.prototype.has = Ug;
        function Zt(e) {
          var t = this.__data__ = new hn(e);
          this.size = t.size;
        }
        function Gg() {
          this.__data__ = new hn(), this.size = 0;
        }
        function Kg(e) {
          var t = this.__data__, r = t.delete(e);
          return this.size = t.size, r;
        }
        function Yg(e) {
          return this.__data__.get(e);
        }
        function Xg(e) {
          return this.__data__.has(e);
        }
        function Zg(e, t) {
          var r = this.__data__;
          if (r instanceof hn) {
            var l = r.__data__;
            if (!Qr || l.length < a - 1)
              return l.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new dn(l);
          }
          return r.set(e, t), this.size = r.size, this;
        }
        Zt.prototype.clear = Gg, Zt.prototype.delete = Kg, Zt.prototype.get = Yg, Zt.prototype.has = Xg, Zt.prototype.set = Zg;
        function $u(e, t) {
          var r = Q(e), l = !r && jn(e), u = !r && !l && Wn(e), d = !r && !l && !u && Sr(e), v = r || l || u || d, w = v ? fl(e.length, ig) : [], x = w.length;
          for (var A in e)
            (t || pe.call(e, A)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
            (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            u && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            d && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
            pn(A, x))) && w.push(A);
          return w;
        }
        function ea(e) {
          var t = e.length;
          return t ? e[Tl(0, t - 1)] : i;
        }
        function Jg(e, t) {
          return ao(ut(e), Zn(t, 0, e.length));
        }
        function Vg(e) {
          return ao(ut(e));
        }
        function pl(e, t, r) {
          (r !== i && !Jt(e[t], r) || r === i && !(t in e)) && gn(e, t, r);
        }
        function ti(e, t, r) {
          var l = e[t];
          (!(pe.call(e, t) && Jt(l, r)) || r === i && !(t in e)) && gn(e, t, r);
        }
        function Vi(e, t) {
          for (var r = e.length; r--; )
            if (Jt(e[r][0], t))
              return r;
          return -1;
        }
        function Qg(e, t, r, l) {
          return Fn(e, function(u, d, v) {
            t(l, u, r(u), v);
          }), l;
        }
        function ta(e, t) {
          return e && tn(t, Ke(t), e);
        }
        function jg(e, t) {
          return e && tn(t, ft(t), e);
        }
        function gn(e, t, r) {
          t == "__proto__" && Gi ? Gi(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
          }) : e[t] = r;
        }
        function ml(e, t) {
          for (var r = -1, l = t.length, u = C(l), d = e == null; ++r < l; )
            u[r] = d ? i : jl(e, t[r]);
          return u;
        }
        function Zn(e, t, r) {
          return e === e && (r !== i && (e = e <= r ? e : r), t !== i && (e = e >= t ? e : t)), e;
        }
        function Ht(e, t, r, l, u, d) {
          var v, w = t & R, x = t & S, A = t & F;
          if (r && (v = u ? r(e, l, u, d) : r(e)), v !== i)
            return v;
          if (!Le(e))
            return e;
          var I = Q(e);
          if (I) {
            if (v = kv(e), !w)
              return ut(e, v);
          } else {
            var P = Ve(e), N = P == Ai || P == ru;
            if (Wn(e))
              return Sa(e, w);
            if (P == cn || P == cr || N && !u) {
              if (v = x || N ? {} : Ga(e), !w)
                return x ? Iv(e, jg(v, e)) : Av(e, ta(v, e));
            } else {
              if (!Ee[P])
                return u ? e : {};
              v = qv(e, P, w);
            }
          }
          d || (d = new Zt());
          var K = d.get(e);
          if (K)
            return K;
          d.set(e, v), bf(e) ? e.forEach(function(J) {
            v.add(Ht(J, t, r, J, e, d));
          }) : mf(e) && e.forEach(function(J, re) {
            v.set(re, Ht(J, t, r, re, e, d));
          });
          var Z = A ? x ? Nl : Wl : x ? ft : Ke, $ = I ? i : Z(e);
          return Ft($ || e, function(J, re) {
            $ && (re = J, J = e[re]), ti(v, re, Ht(J, t, r, re, e, d));
          }), v;
        }
        function $g(e) {
          var t = Ke(e);
          return function(r) {
            return na(r, e, t);
          };
        }
        function na(e, t, r) {
          var l = r.length;
          if (e == null)
            return !l;
          for (e = Se(e); l--; ) {
            var u = r[l], d = t[u], v = e[u];
            if (v === i && !(u in e) || !d(v))
              return !1;
          }
          return !0;
        }
        function ra(e, t, r) {
          if (typeof e != "function")
            throw new Mt(h);
          return ui(function() {
            e.apply(i, r);
          }, t);
        }
        function ni(e, t, r, l) {
          var u = -1, d = Fi, v = !0, w = e.length, x = [], A = t.length;
          if (!w)
            return x;
          r && (t = Oe(t, xt(r))), l ? (d = il, v = !1) : t.length >= a && (d = Jr, v = !1, t = new Xn(t));
          e:
            for (; ++u < w; ) {
              var I = e[u], P = r == null ? I : r(I);
              if (I = l || I !== 0 ? I : 0, v && P === P) {
                for (var N = A; N--; )
                  if (t[N] === P)
                    continue e;
                x.push(I);
              } else d(t, P, l) || x.push(I);
            }
          return x;
        }
        var Fn = Oa(en), ia = Oa(bl, !0);
        function ev(e, t) {
          var r = !0;
          return Fn(e, function(l, u, d) {
            return r = !!t(l, u, d), r;
          }), r;
        }
        function Qi(e, t, r) {
          for (var l = -1, u = e.length; ++l < u; ) {
            var d = e[l], v = t(d);
            if (v != null && (w === i ? v === v && !Rt(v) : r(v, w)))
              var w = v, x = d;
          }
          return x;
        }
        function tv(e, t, r, l) {
          var u = e.length;
          for (r = j(r), r < 0 && (r = -r > u ? 0 : u + r), l = l === i || l > u ? u : j(l), l < 0 && (l += u), l = r > l ? 0 : xf(l); r < l; )
            e[r++] = t;
          return e;
        }
        function oa(e, t) {
          var r = [];
          return Fn(e, function(l, u, d) {
            t(l, u, d) && r.push(l);
          }), r;
        }
        function Xe(e, t, r, l, u) {
          var d = -1, v = e.length;
          for (r || (r = Uv), u || (u = []); ++d < v; ) {
            var w = e[d];
            t > 0 && r(w) ? t > 1 ? Xe(w, t - 1, r, l, u) : On(u, w) : l || (u[u.length] = w);
          }
          return u;
        }
        var wl = Pa(), la = Pa(!0);
        function en(e, t) {
          return e && wl(e, t, Ke);
        }
        function bl(e, t) {
          return e && la(e, t, Ke);
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
        function sa(e, t, r) {
          var l = t(e);
          return Q(e) ? l : On(l, r(e));
        }
        function nt(e) {
          return e == null ? e === i ? Oh : Ah : Kn && Kn in Se(e) ? Wv(e) : Vv(e);
        }
        function yl(e, t) {
          return e > t;
        }
        function nv(e, t) {
          return e != null && pe.call(e, t);
        }
        function rv(e, t) {
          return e != null && t in Se(e);
        }
        function iv(e, t, r) {
          return e >= Je(t, r) && e < Ge(t, r);
        }
        function xl(e, t, r) {
          for (var l = r ? il : Fi, u = e[0].length, d = e.length, v = d, w = C(d), x = 1 / 0, A = []; v--; ) {
            var I = e[v];
            v && t && (I = Oe(I, xt(t))), x = Je(I.length, x), w[v] = !r && (t || u >= 120 && I.length >= 120) ? new Xn(v && I) : i;
          }
          I = e[0];
          var P = -1, N = w[0];
          e:
            for (; ++P < u && A.length < x; ) {
              var K = I[P], Z = t ? t(K) : K;
              if (K = r || K !== 0 ? K : 0, !(N ? Jr(N, Z) : l(A, Z, r))) {
                for (v = d; --v; ) {
                  var $ = w[v];
                  if (!($ ? Jr($, Z) : l(e[v], Z, r)))
                    continue e;
                }
                N && N.push(Z), A.push(K);
              }
            }
          return A;
        }
        function ov(e, t, r, l) {
          return en(e, function(u, d, v) {
            t(l, r(u), d, v);
          }), l;
        }
        function ri(e, t, r) {
          t = Dn(t, e), e = Za(e, t);
          var l = e == null ? e : e[nn(Nt(t))];
          return l == null ? i : yt(l, e, r);
        }
        function ua(e) {
          return De(e) && nt(e) == cr;
        }
        function lv(e) {
          return De(e) && nt(e) == Zr;
        }
        function sv(e) {
          return De(e) && nt(e) == Ur;
        }
        function ii(e, t, r, l, u) {
          return e === t ? !0 : e == null || t == null || !De(e) && !De(t) ? e !== e && t !== t : uv(e, t, r, l, ii, u);
        }
        function uv(e, t, r, l, u, d) {
          var v = Q(e), w = Q(t), x = v ? Ei : Ve(e), A = w ? Ei : Ve(t);
          x = x == cr ? cn : x, A = A == cr ? cn : A;
          var I = x == cn, P = A == cn, N = x == A;
          if (N && Wn(e)) {
            if (!Wn(t))
              return !1;
            v = !0, I = !1;
          }
          if (N && !I)
            return d || (d = new Zt()), v || Sr(e) ? qa(e, t, r, l, u, d) : Dv(e, t, x, r, l, u, d);
          if (!(r & T)) {
            var K = I && pe.call(e, "__wrapped__"), Z = P && pe.call(t, "__wrapped__");
            if (K || Z) {
              var $ = K ? e.value() : e, J = Z ? t.value() : t;
              return d || (d = new Zt()), u($, J, r, l, d);
            }
          }
          return N ? (d || (d = new Zt()), Hv(e, t, r, l, u, d)) : !1;
        }
        function av(e) {
          return De(e) && Ve(e) == Kt;
        }
        function Cl(e, t, r, l) {
          var u = r.length, d = u, v = !l;
          if (e == null)
            return !d;
          for (e = Se(e); u--; ) {
            var w = r[u];
            if (v && w[2] ? w[1] !== e[w[0]] : !(w[0] in e))
              return !1;
          }
          for (; ++u < d; ) {
            w = r[u];
            var x = w[0], A = e[x], I = w[1];
            if (v && w[2]) {
              if (A === i && !(x in e))
                return !1;
            } else {
              var P = new Zt();
              if (l)
                var N = l(A, I, x, e, t, P);
              if (!(N === i ? ii(I, A, T | H, l, P) : N))
                return !1;
            }
          }
          return !0;
        }
        function aa(e) {
          if (!Le(e) || Kv(e))
            return !1;
          var t = mn(e) ? ag : $h;
          return t.test(Qn(e));
        }
        function fv(e) {
          return De(e) && nt(e) == Kr;
        }
        function cv(e) {
          return De(e) && Ve(e) == Yt;
        }
        function hv(e) {
          return De(e) && _o(e.length) && !!Te[nt(e)];
        }
        function fa(e) {
          return typeof e == "function" ? e : e == null ? ct : typeof e == "object" ? Q(e) ? da(e[0], e[1]) : ha(e) : Ff(e);
        }
        function Rl(e) {
          if (!si(e))
            return vg(e);
          var t = [];
          for (var r in Se(e))
            pe.call(e, r) && r != "constructor" && t.push(r);
          return t;
        }
        function dv(e) {
          if (!Le(e))
            return Jv(e);
          var t = si(e), r = [];
          for (var l in e)
            l == "constructor" && (t || !pe.call(e, l)) || r.push(l);
          return r;
        }
        function Sl(e, t) {
          return e < t;
        }
        function ca(e, t) {
          var r = -1, l = at(e) ? C(e.length) : [];
          return Fn(e, function(u, d, v) {
            l[++r] = t(u, d, v);
          }), l;
        }
        function ha(e) {
          var t = kl(e);
          return t.length == 1 && t[0][2] ? Ya(t[0][0], t[0][1]) : function(r) {
            return r === e || Cl(r, e, t);
          };
        }
        function da(e, t) {
          return zl(e) && Ka(t) ? Ya(nn(e), t) : function(r) {
            var l = jl(r, e);
            return l === i && l === t ? $l(r, e) : ii(t, l, T | H);
          };
        }
        function $i(e, t, r, l, u) {
          e !== t && wl(t, function(d, v) {
            if (u || (u = new Zt()), Le(d))
              gv(e, t, v, r, $i, l, u);
            else {
              var w = l ? l(Gl(e, v), d, v + "", e, t, u) : i;
              w === i && (w = d), pl(e, v, w);
            }
          }, ft);
        }
        function gv(e, t, r, l, u, d, v) {
          var w = Gl(e, r), x = Gl(t, r), A = v.get(x);
          if (A) {
            pl(e, r, A);
            return;
          }
          var I = d ? d(w, x, r + "", e, t, v) : i, P = I === i;
          if (P) {
            var N = Q(x), K = !N && Wn(x), Z = !N && !K && Sr(x);
            I = x, N || K || Z ? Q(w) ? I = w : Be(w) ? I = ut(w) : K ? (P = !1, I = Sa(x, !0)) : Z ? (P = !1, I = Ea(x, !0)) : I = [] : ai(x) || jn(x) ? (I = w, jn(w) ? I = Cf(w) : (!Le(w) || mn(w)) && (I = Ga(x))) : P = !1;
          }
          P && (v.set(x, I), u(I, x, l, d, v), v.delete(x)), pl(e, r, I);
        }
        function ga(e, t) {
          var r = e.length;
          if (r)
            return t += t < 0 ? r : 0, pn(t, r) ? e[t] : i;
        }
        function va(e, t, r) {
          t.length ? t = Oe(t, function(d) {
            return Q(d) ? function(v) {
              return Jn(v, d.length === 1 ? d[0] : d);
            } : d;
          }) : t = [ct];
          var l = -1;
          t = Oe(t, xt(X()));
          var u = ca(e, function(d, v, w) {
            var x = Oe(t, function(A) {
              return A(d);
            });
            return { criteria: x, index: ++l, value: d };
          });
          return qd(u, function(d, v) {
            return Tv(d, v, r);
          });
        }
        function vv(e, t) {
          return _a(e, t, function(r, l) {
            return $l(e, l);
          });
        }
        function _a(e, t, r) {
          for (var l = -1, u = t.length, d = {}; ++l < u; ) {
            var v = t[l], w = Jn(e, v);
            r(w, v) && oi(d, Dn(v, e), w);
          }
          return d;
        }
        function _v(e) {
          return function(t) {
            return Jn(t, e);
          };
        }
        function El(e, t, r, l) {
          var u = l ? kd : gr, d = -1, v = t.length, w = e;
          for (e === t && (t = ut(t)), r && (w = Oe(e, xt(r))); ++d < v; )
            for (var x = 0, A = t[d], I = r ? r(A) : A; (x = u(w, I, x, l)) > -1; )
              w !== e && Ui.call(w, x, 1), Ui.call(e, x, 1);
          return e;
        }
        function pa(e, t) {
          for (var r = e ? t.length : 0, l = r - 1; r--; ) {
            var u = t[r];
            if (r == l || u !== d) {
              var d = u;
              pn(u) ? Ui.call(e, u, 1) : Ol(e, u);
            }
          }
          return e;
        }
        function Tl(e, t) {
          return e + Yi(Qu() * (t - e + 1));
        }
        function pv(e, t, r, l) {
          for (var u = -1, d = Ge(Ki((t - e) / (r || 1)), 0), v = C(d); d--; )
            v[l ? d : ++u] = e, e += r;
          return v;
        }
        function Al(e, t) {
          var r = "";
          if (!e || t < 1 || t > Ze)
            return r;
          do
            t % 2 && (r += e), t = Yi(t / 2), t && (e += e);
          while (t);
          return r;
        }
        function ee(e, t) {
          return Kl(Xa(e, t, ct), e + "");
        }
        function mv(e) {
          return ea(Er(e));
        }
        function wv(e, t) {
          var r = Er(e);
          return ao(r, Zn(t, 0, r.length));
        }
        function oi(e, t, r, l) {
          if (!Le(e))
            return e;
          t = Dn(t, e);
          for (var u = -1, d = t.length, v = d - 1, w = e; w != null && ++u < d; ) {
            var x = nn(t[u]), A = r;
            if (x === "__proto__" || x === "constructor" || x === "prototype")
              return e;
            if (u != v) {
              var I = w[x];
              A = l ? l(I, x, w) : i, A === i && (A = Le(I) ? I : pn(t[u + 1]) ? [] : {});
            }
            ti(w, x, A), w = w[x];
          }
          return e;
        }
        var ma = Xi ? function(e, t) {
          return Xi.set(e, t), e;
        } : ct, bv = Gi ? function(e, t) {
          return Gi(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ts(t),
            writable: !0
          });
        } : ct;
        function yv(e) {
          return ao(Er(e));
        }
        function Wt(e, t, r) {
          var l = -1, u = e.length;
          t < 0 && (t = -t > u ? 0 : u + t), r = r > u ? u : r, r < 0 && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0;
          for (var d = C(u); ++l < u; )
            d[l] = e[l + t];
          return d;
        }
        function xv(e, t) {
          var r;
          return Fn(e, function(l, u, d) {
            return r = t(l, u, d), !r;
          }), !!r;
        }
        function eo(e, t, r) {
          var l = 0, u = e == null ? l : e.length;
          if (typeof t == "number" && t === t && u <= Un) {
            for (; l < u; ) {
              var d = l + u >>> 1, v = e[d];
              v !== null && !Rt(v) && (r ? v <= t : v < t) ? l = d + 1 : u = d;
            }
            return u;
          }
          return Il(e, t, ct, r);
        }
        function Il(e, t, r, l) {
          var u = 0, d = e == null ? 0 : e.length;
          if (d === 0)
            return 0;
          t = r(t);
          for (var v = t !== t, w = t === null, x = Rt(t), A = t === i; u < d; ) {
            var I = Yi((u + d) / 2), P = r(e[I]), N = P !== i, K = P === null, Z = P === P, $ = Rt(P);
            if (v)
              var J = l || Z;
            else A ? J = Z && (l || N) : w ? J = Z && N && (l || !K) : x ? J = Z && N && !K && (l || !$) : K || $ ? J = !1 : J = l ? P <= t : P < t;
            J ? u = I + 1 : d = I;
          }
          return Je(d, Gt);
        }
        function wa(e, t) {
          for (var r = -1, l = e.length, u = 0, d = []; ++r < l; ) {
            var v = e[r], w = t ? t(v) : v;
            if (!r || !Jt(w, x)) {
              var x = w;
              d[u++] = v === 0 ? 0 : v;
            }
          }
          return d;
        }
        function ba(e) {
          return typeof e == "number" ? e : Rt(e) ? Pt : +e;
        }
        function Ct(e) {
          if (typeof e == "string")
            return e;
          if (Q(e))
            return Oe(e, Ct) + "";
          if (Rt(e))
            return ju ? ju.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -Ie ? "-0" : t;
        }
        function Mn(e, t, r) {
          var l = -1, u = Fi, d = e.length, v = !0, w = [], x = w;
          if (r)
            v = !1, u = il;
          else if (d >= a) {
            var A = t ? null : Fv(e);
            if (A)
              return Di(A);
            v = !1, u = Jr, x = new Xn();
          } else
            x = t ? [] : w;
          e:
            for (; ++l < d; ) {
              var I = e[l], P = t ? t(I) : I;
              if (I = r || I !== 0 ? I : 0, v && P === P) {
                for (var N = x.length; N--; )
                  if (x[N] === P)
                    continue e;
                t && x.push(P), w.push(I);
              } else u(x, P, r) || (x !== w && x.push(P), w.push(I));
            }
          return w;
        }
        function Ol(e, t) {
          return t = Dn(t, e), e = Za(e, t), e == null || delete e[nn(Nt(t))];
        }
        function ya(e, t, r, l) {
          return oi(e, t, r(Jn(e, t)), l);
        }
        function to(e, t, r, l) {
          for (var u = e.length, d = l ? u : -1; (l ? d-- : ++d < u) && t(e[d], d, e); )
            ;
          return r ? Wt(e, l ? 0 : d, l ? d + 1 : u) : Wt(e, l ? d + 1 : 0, l ? u : d);
        }
        function xa(e, t) {
          var r = e;
          return r instanceof oe && (r = r.value()), ol(t, function(l, u) {
            return u.func.apply(u.thisArg, On([l], u.args));
          }, r);
        }
        function Pl(e, t, r) {
          var l = e.length;
          if (l < 2)
            return l ? Mn(e[0]) : [];
          for (var u = -1, d = C(l); ++u < l; )
            for (var v = e[u], w = -1; ++w < l; )
              w != u && (d[u] = ni(d[u] || v, e[w], t, r));
          return Mn(Xe(d, 1), t, r);
        }
        function Ca(e, t, r) {
          for (var l = -1, u = e.length, d = t.length, v = {}; ++l < u; ) {
            var w = l < d ? t[l] : i;
            r(v, e[l], w);
          }
          return v;
        }
        function Ll(e) {
          return Be(e) ? e : [];
        }
        function Fl(e) {
          return typeof e == "function" ? e : ct;
        }
        function Dn(e, t) {
          return Q(e) ? e : zl(e, t) ? [e] : ja(ve(e));
        }
        var Cv = ee;
        function Hn(e, t, r) {
          var l = e.length;
          return r = r === i ? l : r, !t && r >= l ? e : Wt(e, t, r);
        }
        var Ra = fg || function(e) {
          return Ye.clearTimeout(e);
        };
        function Sa(e, t) {
          if (t)
            return e.slice();
          var r = e.length, l = Yu ? Yu(r) : new e.constructor(r);
          return e.copy(l), l;
        }
        function Ml(e) {
          var t = new e.constructor(e.byteLength);
          return new qi(t).set(new qi(e)), t;
        }
        function Rv(e, t) {
          var r = t ? Ml(e.buffer) : e.buffer;
          return new e.constructor(r, e.byteOffset, e.byteLength);
        }
        function Sv(e) {
          var t = new e.constructor(e.source, uu.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function Ev(e) {
          return ei ? Se(ei.call(e)) : {};
        }
        function Ea(e, t) {
          var r = t ? Ml(e.buffer) : e.buffer;
          return new e.constructor(r, e.byteOffset, e.length);
        }
        function Ta(e, t) {
          if (e !== t) {
            var r = e !== i, l = e === null, u = e === e, d = Rt(e), v = t !== i, w = t === null, x = t === t, A = Rt(t);
            if (!w && !A && !d && e > t || d && v && x && !w && !A || l && v && x || !r && x || !u)
              return 1;
            if (!l && !d && !A && e < t || A && r && u && !l && !d || w && r && u || !v && u || !x)
              return -1;
          }
          return 0;
        }
        function Tv(e, t, r) {
          for (var l = -1, u = e.criteria, d = t.criteria, v = u.length, w = r.length; ++l < v; ) {
            var x = Ta(u[l], d[l]);
            if (x) {
              if (l >= w)
                return x;
              var A = r[l];
              return x * (A == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function Aa(e, t, r, l) {
          for (var u = -1, d = e.length, v = r.length, w = -1, x = t.length, A = Ge(d - v, 0), I = C(x + A), P = !l; ++w < x; )
            I[w] = t[w];
          for (; ++u < v; )
            (P || u < d) && (I[r[u]] = e[u]);
          for (; A--; )
            I[w++] = e[u++];
          return I;
        }
        function Ia(e, t, r, l) {
          for (var u = -1, d = e.length, v = -1, w = r.length, x = -1, A = t.length, I = Ge(d - w, 0), P = C(I + A), N = !l; ++u < I; )
            P[u] = e[u];
          for (var K = u; ++x < A; )
            P[K + x] = t[x];
          for (; ++v < w; )
            (N || u < d) && (P[K + r[v]] = e[u++]);
          return P;
        }
        function ut(e, t) {
          var r = -1, l = e.length;
          for (t || (t = C(l)); ++r < l; )
            t[r] = e[r];
          return t;
        }
        function tn(e, t, r, l) {
          var u = !r;
          r || (r = {});
          for (var d = -1, v = t.length; ++d < v; ) {
            var w = t[d], x = l ? l(r[w], e[w], w, r, e) : i;
            x === i && (x = e[w]), u ? gn(r, w, x) : ti(r, w, x);
          }
          return r;
        }
        function Av(e, t) {
          return tn(e, ql(e), t);
        }
        function Iv(e, t) {
          return tn(e, za(e), t);
        }
        function no(e, t) {
          return function(r, l) {
            var u = Q(r) ? Md : Qg, d = t ? t() : {};
            return u(r, e, X(l, 2), d);
          };
        }
        function xr(e) {
          return ee(function(t, r) {
            var l = -1, u = r.length, d = u > 1 ? r[u - 1] : i, v = u > 2 ? r[2] : i;
            for (d = e.length > 3 && typeof d == "function" ? (u--, d) : i, v && rt(r[0], r[1], v) && (d = u < 3 ? i : d, u = 1), t = Se(t); ++l < u; ) {
              var w = r[l];
              w && e(t, w, l, d);
            }
            return t;
          });
        }
        function Oa(e, t) {
          return function(r, l) {
            if (r == null)
              return r;
            if (!at(r))
              return e(r, l);
            for (var u = r.length, d = t ? u : -1, v = Se(r); (t ? d-- : ++d < u) && l(v[d], d, v) !== !1; )
              ;
            return r;
          };
        }
        function Pa(e) {
          return function(t, r, l) {
            for (var u = -1, d = Se(t), v = l(t), w = v.length; w--; ) {
              var x = v[e ? w : ++u];
              if (r(d[x], x, d) === !1)
                break;
            }
            return t;
          };
        }
        function Ov(e, t, r) {
          var l = t & L, u = li(e);
          function d() {
            var v = this && this !== Ye && this instanceof d ? u : e;
            return v.apply(l ? r : this, arguments);
          }
          return d;
        }
        function La(e) {
          return function(t) {
            t = ve(t);
            var r = vr(t) ? Xt(t) : i, l = r ? r[0] : t.charAt(0), u = r ? Hn(r, 1).join("") : t.slice(1);
            return l[e]() + u;
          };
        }
        function Cr(e) {
          return function(t) {
            return ol(Pf(Of(t).replace(bd, "")), e, "");
          };
        }
        function li(e) {
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
            var r = yr(e.prototype), l = e.apply(r, t);
            return Le(l) ? l : r;
          };
        }
        function Pv(e, t, r) {
          var l = li(e);
          function u() {
            for (var d = arguments.length, v = C(d), w = d, x = Rr(u); w--; )
              v[w] = arguments[w];
            var A = d < 3 && v[0] !== x && v[d - 1] !== x ? [] : Pn(v, x);
            if (d -= A.length, d < r)
              return Wa(
                e,
                t,
                ro,
                u.placeholder,
                i,
                v,
                A,
                i,
                i,
                r - d
              );
            var I = this && this !== Ye && this instanceof u ? l : e;
            return yt(I, this, v);
          }
          return u;
        }
        function Fa(e) {
          return function(t, r, l) {
            var u = Se(t);
            if (!at(t)) {
              var d = X(r, 3);
              t = Ke(t), r = function(w) {
                return d(u[w], w, u);
              };
            }
            var v = e(t, r, l);
            return v > -1 ? u[d ? t[v] : v] : i;
          };
        }
        function Ma(e) {
          return _n(function(t) {
            var r = t.length, l = r, u = Dt.prototype.thru;
            for (e && t.reverse(); l--; ) {
              var d = t[l];
              if (typeof d != "function")
                throw new Mt(h);
              if (u && !v && so(d) == "wrapper")
                var v = new Dt([], !0);
            }
            for (l = v ? l : r; ++l < r; ) {
              d = t[l];
              var w = so(d), x = w == "wrapper" ? Bl(d) : i;
              x && Ul(x[0]) && x[1] == (W | U | G | ne) && !x[4].length && x[9] == 1 ? v = v[so(x[0])].apply(v, x[3]) : v = d.length == 1 && Ul(d) ? v[w]() : v.thru(d);
            }
            return function() {
              var A = arguments, I = A[0];
              if (v && A.length == 1 && Q(I))
                return v.plant(I).value();
              for (var P = 0, N = r ? t[P].apply(this, A) : I; ++P < r; )
                N = t[P].call(this, N);
              return N;
            };
          });
        }
        function ro(e, t, r, l, u, d, v, w, x, A) {
          var I = t & W, P = t & L, N = t & B, K = t & (U | Y), Z = t & ue, $ = N ? i : li(e);
          function J() {
            for (var re = arguments.length, le = C(re), St = re; St--; )
              le[St] = arguments[St];
            if (K)
              var it = Rr(J), Et = Ud(le, it);
            if (l && (le = Aa(le, l, u, K)), d && (le = Ia(le, d, v, K)), re -= Et, K && re < A) {
              var ke = Pn(le, it);
              return Wa(
                e,
                t,
                ro,
                J.placeholder,
                r,
                le,
                ke,
                w,
                x,
                A - re
              );
            }
            var Vt = P ? r : this, bn = N ? Vt[e] : e;
            return re = le.length, w ? le = Qv(le, w) : Z && re > 1 && le.reverse(), I && x < re && (le.length = x), this && this !== Ye && this instanceof J && (bn = $ || li(bn)), bn.apply(Vt, le);
          }
          return J;
        }
        function Da(e, t) {
          return function(r, l) {
            return ov(r, e, t(l), {});
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
              typeof r == "string" || typeof l == "string" ? (r = Ct(r), l = Ct(l)) : (r = ba(r), l = ba(l)), u = e(r, l);
            }
            return u;
          };
        }
        function Dl(e) {
          return _n(function(t) {
            return t = Oe(t, xt(X())), ee(function(r) {
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
            return r ? Al(t, e) : t;
          var l = Al(t, Ki(e / _r(t)));
          return vr(t) ? Hn(Xt(l), 0, e).join("") : l.slice(0, e);
        }
        function Lv(e, t, r, l) {
          var u = t & L, d = li(e);
          function v() {
            for (var w = -1, x = arguments.length, A = -1, I = l.length, P = C(I + x), N = this && this !== Ye && this instanceof v ? d : e; ++A < I; )
              P[A] = l[A];
            for (; x--; )
              P[A++] = arguments[++w];
            return yt(N, u ? r : this, P);
          }
          return v;
        }
        function Ha(e) {
          return function(t, r, l) {
            return l && typeof l != "number" && rt(t, r, l) && (r = l = i), t = wn(t), r === i ? (r = t, t = 0) : r = wn(r), l = l === i ? t < r ? 1 : -1 : wn(l), pv(t, r, l, e);
          };
        }
        function lo(e) {
          return function(t, r) {
            return typeof t == "string" && typeof r == "string" || (t = Bt(t), r = Bt(r)), e(t, r);
          };
        }
        function Wa(e, t, r, l, u, d, v, w, x, A) {
          var I = t & U, P = I ? v : i, N = I ? i : v, K = I ? d : i, Z = I ? i : d;
          t |= I ? G : D, t &= ~(I ? D : G), t & k || (t &= -4);
          var $ = [
            e,
            t,
            u,
            K,
            P,
            Z,
            N,
            w,
            x,
            A
          ], J = r.apply(i, $);
          return Ul(e) && Ja(J, $), J.placeholder = l, Va(J, e, t);
        }
        function Hl(e) {
          var t = Ue[e];
          return function(r, l) {
            if (r = Bt(r), l = l == null ? 0 : Je(j(l), 292), l && Vu(r)) {
              var u = (ve(r) + "e").split("e"), d = t(u[0] + "e" + (+u[1] + l));
              return u = (ve(d) + "e").split("e"), +(u[0] + "e" + (+u[1] - l));
            }
            return t(r);
          };
        }
        var Fv = wr && 1 / Di(new wr([, -0]))[1] == Ie ? function(e) {
          return new wr(e);
        } : is;
        function Na(e) {
          return function(t) {
            var r = Ve(t);
            return r == Kt ? hl(t) : r == Yt ? Vd(t) : zd(t, e(t));
          };
        }
        function vn(e, t, r, l, u, d, v, w) {
          var x = t & B;
          if (!x && typeof e != "function")
            throw new Mt(h);
          var A = l ? l.length : 0;
          if (A || (t &= -97, l = u = i), v = v === i ? v : Ge(j(v), 0), w = w === i ? w : j(w), A -= u ? u.length : 0, t & D) {
            var I = l, P = u;
            l = u = i;
          }
          var N = x ? i : Bl(e), K = [
            e,
            t,
            r,
            l,
            u,
            I,
            P,
            d,
            v,
            w
          ];
          if (N && Zv(K, N), e = K[0], t = K[1], r = K[2], l = K[3], u = K[4], w = K[9] = K[9] === i ? x ? 0 : e.length : Ge(K[9] - A, 0), !w && t & (U | Y) && (t &= -25), !t || t == L)
            var Z = Ov(e, t, r);
          else t == U || t == Y ? Z = Pv(e, t, w) : (t == G || t == (L | G)) && !u.length ? Z = Lv(e, t, r, l) : Z = ro.apply(i, K);
          var $ = N ? ma : Ja;
          return Va($(Z, K), e, t);
        }
        function Ba(e, t, r, l) {
          return e === i || Jt(e, mr[r]) && !pe.call(l, r) ? t : e;
        }
        function ka(e, t, r, l, u, d) {
          return Le(e) && Le(t) && (d.set(t, e), $i(e, t, i, ka, d), d.delete(t)), e;
        }
        function Mv(e) {
          return ai(e) ? i : e;
        }
        function qa(e, t, r, l, u, d) {
          var v = r & T, w = e.length, x = t.length;
          if (w != x && !(v && x > w))
            return !1;
          var A = d.get(e), I = d.get(t);
          if (A && I)
            return A == t && I == e;
          var P = -1, N = !0, K = r & H ? new Xn() : i;
          for (d.set(e, t), d.set(t, e); ++P < w; ) {
            var Z = e[P], $ = t[P];
            if (l)
              var J = v ? l($, Z, P, t, e, d) : l(Z, $, P, e, t, d);
            if (J !== i) {
              if (J)
                continue;
              N = !1;
              break;
            }
            if (K) {
              if (!ll(t, function(re, le) {
                if (!Jr(K, le) && (Z === re || u(Z, re, r, l, d)))
                  return K.push(le);
              })) {
                N = !1;
                break;
              }
            } else if (!(Z === $ || u(Z, $, r, l, d))) {
              N = !1;
              break;
            }
          }
          return d.delete(e), d.delete(t), N;
        }
        function Dv(e, t, r, l, u, d, v) {
          switch (r) {
            case hr:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case Zr:
              return !(e.byteLength != t.byteLength || !d(new qi(e), new qi(t)));
            case zr:
            case Ur:
            case Gr:
              return Jt(+e, +t);
            case Ti:
              return e.name == t.name && e.message == t.message;
            case Kr:
            case Yr:
              return e == t + "";
            case Kt:
              var w = hl;
            case Yt:
              var x = l & T;
              if (w || (w = Di), e.size != t.size && !x)
                return !1;
              var A = v.get(e);
              if (A)
                return A == t;
              l |= H, v.set(e, t);
              var I = qa(w(e), w(t), l, u, d, v);
              return v.delete(e), I;
            case Ii:
              if (ei)
                return ei.call(e) == ei.call(t);
          }
          return !1;
        }
        function Hv(e, t, r, l, u, d) {
          var v = r & T, w = Wl(e), x = w.length, A = Wl(t), I = A.length;
          if (x != I && !v)
            return !1;
          for (var P = x; P--; ) {
            var N = w[P];
            if (!(v ? N in t : pe.call(t, N)))
              return !1;
          }
          var K = d.get(e), Z = d.get(t);
          if (K && Z)
            return K == t && Z == e;
          var $ = !0;
          d.set(e, t), d.set(t, e);
          for (var J = v; ++P < x; ) {
            N = w[P];
            var re = e[N], le = t[N];
            if (l)
              var St = v ? l(le, re, N, t, e, d) : l(re, le, N, e, t, d);
            if (!(St === i ? re === le || u(re, le, r, l, d) : St)) {
              $ = !1;
              break;
            }
            J || (J = N == "constructor");
          }
          if ($ && !J) {
            var it = e.constructor, Et = t.constructor;
            it != Et && "constructor" in e && "constructor" in t && !(typeof it == "function" && it instanceof it && typeof Et == "function" && Et instanceof Et) && ($ = !1);
          }
          return d.delete(e), d.delete(t), $;
        }
        function _n(e) {
          return Kl(Xa(e, i, nf), e + "");
        }
        function Wl(e) {
          return sa(e, Ke, ql);
        }
        function Nl(e) {
          return sa(e, ft, za);
        }
        var Bl = Xi ? function(e) {
          return Xi.get(e);
        } : is;
        function so(e) {
          for (var t = e.name + "", r = br[t], l = pe.call(br, t) ? r.length : 0; l--; ) {
            var u = r[l], d = u.func;
            if (d == null || d == e)
              return u.name;
          }
          return t;
        }
        function Rr(e) {
          var t = pe.call(c, "placeholder") ? c : e;
          return t.placeholder;
        }
        function X() {
          var e = c.iteratee || ns;
          return e = e === ns ? fa : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function uo(e, t) {
          var r = e.__data__;
          return Gv(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
        }
        function kl(e) {
          for (var t = Ke(e), r = t.length; r--; ) {
            var l = t[r], u = e[l];
            t[r] = [l, u, Ka(u)];
          }
          return t;
        }
        function Vn(e, t) {
          var r = Xd(e, t);
          return aa(r) ? r : i;
        }
        function Wv(e) {
          var t = pe.call(e, Kn), r = e[Kn];
          try {
            e[Kn] = i;
            var l = !0;
          } catch {
          }
          var u = Bi.call(e);
          return l && (t ? e[Kn] = r : delete e[Kn]), u;
        }
        var ql = gl ? function(e) {
          return e == null ? [] : (e = Se(e), In(gl(e), function(t) {
            return Zu.call(e, t);
          }));
        } : os, za = gl ? function(e) {
          for (var t = []; e; )
            On(t, ql(e)), e = zi(e);
          return t;
        } : os, Ve = nt;
        (vl && Ve(new vl(new ArrayBuffer(1))) != hr || Qr && Ve(new Qr()) != Kt || _l && Ve(_l.resolve()) != iu || wr && Ve(new wr()) != Yt || jr && Ve(new jr()) != Xr) && (Ve = function(e) {
          var t = nt(e), r = t == cn ? e.constructor : i, l = r ? Qn(r) : "";
          if (l)
            switch (l) {
              case wg:
                return hr;
              case bg:
                return Kt;
              case yg:
                return iu;
              case xg:
                return Yt;
              case Cg:
                return Xr;
            }
          return t;
        });
        function Nv(e, t, r) {
          for (var l = -1, u = r.length; ++l < u; ) {
            var d = r[l], v = d.size;
            switch (d.type) {
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
        function Bv(e) {
          var t = e.match(Kh);
          return t ? t[1].split(Yh) : [];
        }
        function Ua(e, t, r) {
          t = Dn(t, e);
          for (var l = -1, u = t.length, d = !1; ++l < u; ) {
            var v = nn(t[l]);
            if (!(d = e != null && r(e, v)))
              break;
            e = e[v];
          }
          return d || ++l != u ? d : (u = e == null ? 0 : e.length, !!u && _o(u) && pn(v, u) && (Q(e) || jn(e)));
        }
        function kv(e) {
          var t = e.length, r = new e.constructor(t);
          return t && typeof e[0] == "string" && pe.call(e, "index") && (r.index = e.index, r.input = e.input), r;
        }
        function Ga(e) {
          return typeof e.constructor == "function" && !si(e) ? yr(zi(e)) : {};
        }
        function qv(e, t, r) {
          var l = e.constructor;
          switch (t) {
            case Zr:
              return Ml(e);
            case zr:
            case Ur:
              return new l(+e);
            case hr:
              return Rv(e, r);
            case ko:
            case qo:
            case zo:
            case Uo:
            case Go:
            case Ko:
            case Yo:
            case Xo:
            case Zo:
              return Ea(e, r);
            case Kt:
              return new l();
            case Gr:
            case Yr:
              return new l(e);
            case Kr:
              return Sv(e);
            case Yt:
              return new l();
            case Ii:
              return Ev(e);
          }
        }
        function zv(e, t) {
          var r = t.length;
          if (!r)
            return e;
          var l = r - 1;
          return t[l] = (r > 1 ? "& " : "") + t[l], t = t.join(r > 2 ? ", " : " "), e.replace(Gh, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Uv(e) {
          return Q(e) || jn(e) || !!(Ju && e && e[Ju]);
        }
        function pn(e, t) {
          var r = typeof e;
          return t = t ?? Ze, !!t && (r == "number" || r != "symbol" && td.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function rt(e, t, r) {
          if (!Le(r))
            return !1;
          var l = typeof t;
          return (l == "number" ? at(r) && pn(t, r.length) : l == "string" && t in r) ? Jt(r[t], e) : !1;
        }
        function zl(e, t) {
          if (Q(e))
            return !1;
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || Rt(e) ? !0 : kh.test(e) || !Bh.test(e) || t != null && e in Se(t);
        }
        function Gv(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function Ul(e) {
          var t = so(e), r = c[t];
          if (typeof r != "function" || !(t in oe.prototype))
            return !1;
          if (e === r)
            return !0;
          var l = Bl(r);
          return !!l && e === l[0];
        }
        function Kv(e) {
          return !!Ku && Ku in e;
        }
        var Yv = Wi ? mn : ls;
        function si(e) {
          var t = e && e.constructor, r = typeof t == "function" && t.prototype || mr;
          return e === r;
        }
        function Ka(e) {
          return e === e && !Le(e);
        }
        function Ya(e, t) {
          return function(r) {
            return r == null ? !1 : r[e] === t && (t !== i || e in Se(r));
          };
        }
        function Xv(e) {
          var t = go(e, function(l) {
            return r.size === m && r.clear(), l;
          }), r = t.cache;
          return t;
        }
        function Zv(e, t) {
          var r = e[1], l = t[1], u = r | l, d = u < (L | B | W), v = l == W && r == U || l == W && r == ne && e[7].length <= t[8] || l == (W | ne) && t[7].length <= t[8] && r == U;
          if (!(d || v))
            return e;
          l & L && (e[2] = t[2], u |= r & L ? 0 : k);
          var w = t[3];
          if (w) {
            var x = e[3];
            e[3] = x ? Aa(x, w, t[4]) : w, e[4] = x ? Pn(e[3], b) : t[4];
          }
          return w = t[5], w && (x = e[5], e[5] = x ? Ia(x, w, t[6]) : w, e[6] = x ? Pn(e[5], b) : t[6]), w = t[7], w && (e[7] = w), l & W && (e[8] = e[8] == null ? t[8] : Je(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = u, e;
        }
        function Jv(e) {
          var t = [];
          if (e != null)
            for (var r in Se(e))
              t.push(r);
          return t;
        }
        function Vv(e) {
          return Bi.call(e);
        }
        function Xa(e, t, r) {
          return t = Ge(t === i ? e.length - 1 : t, 0), function() {
            for (var l = arguments, u = -1, d = Ge(l.length - t, 0), v = C(d); ++u < d; )
              v[u] = l[t + u];
            u = -1;
            for (var w = C(t + 1); ++u < t; )
              w[u] = l[u];
            return w[t] = r(v), yt(e, this, w);
          };
        }
        function Za(e, t) {
          return t.length < 2 ? e : Jn(e, Wt(t, 0, -1));
        }
        function Qv(e, t) {
          for (var r = e.length, l = Je(t.length, r), u = ut(e); l--; ) {
            var d = t[l];
            e[l] = pn(d, r) ? u[d] : i;
          }
          return e;
        }
        function Gl(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var Ja = Qa(ma), ui = hg || function(e, t) {
          return Ye.setTimeout(e, t);
        }, Kl = Qa(bv);
        function Va(e, t, r) {
          var l = t + "";
          return Kl(e, zv(l, jv(Bv(l), r)));
        }
        function Qa(e) {
          var t = 0, r = 0;
          return function() {
            var l = _g(), u = ie - (l - r);
            if (r = l, u > 0) {
              if (++t >= ye)
                return arguments[0];
            } else
              t = 0;
            return e.apply(i, arguments);
          };
        }
        function ao(e, t) {
          var r = -1, l = e.length, u = l - 1;
          for (t = t === i ? l : t; ++r < t; ) {
            var d = Tl(r, u), v = e[d];
            e[d] = e[r], e[r] = v;
          }
          return e.length = t, e;
        }
        var ja = Xv(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(qh, function(r, l, u, d) {
            t.push(u ? d.replace(Jh, "$1") : l || r);
          }), t;
        });
        function nn(e) {
          if (typeof e == "string" || Rt(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -Ie ? "-0" : t;
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
        function jv(e, t) {
          return Ft(Bo, function(r) {
            var l = "_." + r[0];
            t & r[1] && !Fi(e, l) && e.push(l);
          }), e.sort();
        }
        function $a(e) {
          if (e instanceof oe)
            return e.clone();
          var t = new Dt(e.__wrapped__, e.__chain__);
          return t.__actions__ = ut(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function $v(e, t, r) {
          (r ? rt(e, t, r) : t === i) ? t = 1 : t = Ge(j(t), 0);
          var l = e == null ? 0 : e.length;
          if (!l || t < 1)
            return [];
          for (var u = 0, d = 0, v = C(Ki(l / t)); u < l; )
            v[d++] = Wt(e, u, u += t);
          return v;
        }
        function e_(e) {
          for (var t = -1, r = e == null ? 0 : e.length, l = 0, u = []; ++t < r; ) {
            var d = e[t];
            d && (u[l++] = d);
          }
          return u;
        }
        function t_() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = C(e - 1), r = arguments[0], l = e; l--; )
            t[l - 1] = arguments[l];
          return On(Q(r) ? ut(r) : [r], Xe(t, 1));
        }
        var n_ = ee(function(e, t) {
          return Be(e) ? ni(e, Xe(t, 1, Be, !0)) : [];
        }), r_ = ee(function(e, t) {
          var r = Nt(t);
          return Be(r) && (r = i), Be(e) ? ni(e, Xe(t, 1, Be, !0), X(r, 2)) : [];
        }), i_ = ee(function(e, t) {
          var r = Nt(t);
          return Be(r) && (r = i), Be(e) ? ni(e, Xe(t, 1, Be, !0), i, r) : [];
        });
        function o_(e, t, r) {
          var l = e == null ? 0 : e.length;
          return l ? (t = r || t === i ? 1 : j(t), Wt(e, t < 0 ? 0 : t, l)) : [];
        }
        function l_(e, t, r) {
          var l = e == null ? 0 : e.length;
          return l ? (t = r || t === i ? 1 : j(t), t = l - t, Wt(e, 0, t < 0 ? 0 : t)) : [];
        }
        function s_(e, t) {
          return e && e.length ? to(e, X(t, 3), !0, !0) : [];
        }
        function u_(e, t) {
          return e && e.length ? to(e, X(t, 3), !0) : [];
        }
        function a_(e, t, r, l) {
          var u = e == null ? 0 : e.length;
          return u ? (r && typeof r != "number" && rt(e, t, r) && (r = 0, l = u), tv(e, t, r, l)) : [];
        }
        function ef(e, t, r) {
          var l = e == null ? 0 : e.length;
          if (!l)
            return -1;
          var u = r == null ? 0 : j(r);
          return u < 0 && (u = Ge(l + u, 0)), Mi(e, X(t, 3), u);
        }
        function tf(e, t, r) {
          var l = e == null ? 0 : e.length;
          if (!l)
            return -1;
          var u = l - 1;
          return r !== i && (u = j(r), u = r < 0 ? Ge(l + u, 0) : Je(u, l - 1)), Mi(e, X(t, 3), u, !0);
        }
        function nf(e) {
          var t = e == null ? 0 : e.length;
          return t ? Xe(e, 1) : [];
        }
        function f_(e) {
          var t = e == null ? 0 : e.length;
          return t ? Xe(e, Ie) : [];
        }
        function c_(e, t) {
          var r = e == null ? 0 : e.length;
          return r ? (t = t === i ? 1 : j(t), Xe(e, t)) : [];
        }
        function h_(e) {
          for (var t = -1, r = e == null ? 0 : e.length, l = {}; ++t < r; ) {
            var u = e[t];
            l[u[0]] = u[1];
          }
          return l;
        }
        function rf(e) {
          return e && e.length ? e[0] : i;
        }
        function d_(e, t, r) {
          var l = e == null ? 0 : e.length;
          if (!l)
            return -1;
          var u = r == null ? 0 : j(r);
          return u < 0 && (u = Ge(l + u, 0)), gr(e, t, u);
        }
        function g_(e) {
          var t = e == null ? 0 : e.length;
          return t ? Wt(e, 0, -1) : [];
        }
        var v_ = ee(function(e) {
          var t = Oe(e, Ll);
          return t.length && t[0] === e[0] ? xl(t) : [];
        }), __ = ee(function(e) {
          var t = Nt(e), r = Oe(e, Ll);
          return t === Nt(r) ? t = i : r.pop(), r.length && r[0] === e[0] ? xl(r, X(t, 2)) : [];
        }), p_ = ee(function(e) {
          var t = Nt(e), r = Oe(e, Ll);
          return t = typeof t == "function" ? t : i, t && r.pop(), r.length && r[0] === e[0] ? xl(r, i, t) : [];
        });
        function m_(e, t) {
          return e == null ? "" : gg.call(e, t);
        }
        function Nt(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : i;
        }
        function w_(e, t, r) {
          var l = e == null ? 0 : e.length;
          if (!l)
            return -1;
          var u = l;
          return r !== i && (u = j(r), u = u < 0 ? Ge(l + u, 0) : Je(u, l - 1)), t === t ? jd(e, t, u) : Mi(e, Wu, u, !0);
        }
        function b_(e, t) {
          return e && e.length ? ga(e, j(t)) : i;
        }
        var y_ = ee(of);
        function of(e, t) {
          return e && e.length && t && t.length ? El(e, t) : e;
        }
        function x_(e, t, r) {
          return e && e.length && t && t.length ? El(e, t, X(r, 2)) : e;
        }
        function C_(e, t, r) {
          return e && e.length && t && t.length ? El(e, t, i, r) : e;
        }
        var R_ = _n(function(e, t) {
          var r = e == null ? 0 : e.length, l = ml(e, t);
          return pa(e, Oe(t, function(u) {
            return pn(u, r) ? +u : u;
          }).sort(Ta)), l;
        });
        function S_(e, t) {
          var r = [];
          if (!(e && e.length))
            return r;
          var l = -1, u = [], d = e.length;
          for (t = X(t, 3); ++l < d; ) {
            var v = e[l];
            t(v, l, e) && (r.push(v), u.push(l));
          }
          return pa(e, u), r;
        }
        function Yl(e) {
          return e == null ? e : mg.call(e);
        }
        function E_(e, t, r) {
          var l = e == null ? 0 : e.length;
          return l ? (r && typeof r != "number" && rt(e, t, r) ? (t = 0, r = l) : (t = t == null ? 0 : j(t), r = r === i ? l : j(r)), Wt(e, t, r)) : [];
        }
        function T_(e, t) {
          return eo(e, t);
        }
        function A_(e, t, r) {
          return Il(e, t, X(r, 2));
        }
        function I_(e, t) {
          var r = e == null ? 0 : e.length;
          if (r) {
            var l = eo(e, t);
            if (l < r && Jt(e[l], t))
              return l;
          }
          return -1;
        }
        function O_(e, t) {
          return eo(e, t, !0);
        }
        function P_(e, t, r) {
          return Il(e, t, X(r, 2), !0);
        }
        function L_(e, t) {
          var r = e == null ? 0 : e.length;
          if (r) {
            var l = eo(e, t, !0) - 1;
            if (Jt(e[l], t))
              return l;
          }
          return -1;
        }
        function F_(e) {
          return e && e.length ? wa(e) : [];
        }
        function M_(e, t) {
          return e && e.length ? wa(e, X(t, 2)) : [];
        }
        function D_(e) {
          var t = e == null ? 0 : e.length;
          return t ? Wt(e, 1, t) : [];
        }
        function H_(e, t, r) {
          return e && e.length ? (t = r || t === i ? 1 : j(t), Wt(e, 0, t < 0 ? 0 : t)) : [];
        }
        function W_(e, t, r) {
          var l = e == null ? 0 : e.length;
          return l ? (t = r || t === i ? 1 : j(t), t = l - t, Wt(e, t < 0 ? 0 : t, l)) : [];
        }
        function N_(e, t) {
          return e && e.length ? to(e, X(t, 3), !1, !0) : [];
        }
        function B_(e, t) {
          return e && e.length ? to(e, X(t, 3)) : [];
        }
        var k_ = ee(function(e) {
          return Mn(Xe(e, 1, Be, !0));
        }), q_ = ee(function(e) {
          var t = Nt(e);
          return Be(t) && (t = i), Mn(Xe(e, 1, Be, !0), X(t, 2));
        }), z_ = ee(function(e) {
          var t = Nt(e);
          return t = typeof t == "function" ? t : i, Mn(Xe(e, 1, Be, !0), i, t);
        });
        function U_(e) {
          return e && e.length ? Mn(e) : [];
        }
        function G_(e, t) {
          return e && e.length ? Mn(e, X(t, 2)) : [];
        }
        function K_(e, t) {
          return t = typeof t == "function" ? t : i, e && e.length ? Mn(e, i, t) : [];
        }
        function Xl(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = In(e, function(r) {
            if (Be(r))
              return t = Ge(r.length, t), !0;
          }), fl(t, function(r) {
            return Oe(e, sl(r));
          });
        }
        function lf(e, t) {
          if (!(e && e.length))
            return [];
          var r = Xl(e);
          return t == null ? r : Oe(r, function(l) {
            return yt(t, i, l);
          });
        }
        var Y_ = ee(function(e, t) {
          return Be(e) ? ni(e, t) : [];
        }), X_ = ee(function(e) {
          return Pl(In(e, Be));
        }), Z_ = ee(function(e) {
          var t = Nt(e);
          return Be(t) && (t = i), Pl(In(e, Be), X(t, 2));
        }), J_ = ee(function(e) {
          var t = Nt(e);
          return t = typeof t == "function" ? t : i, Pl(In(e, Be), i, t);
        }), V_ = ee(Xl);
        function Q_(e, t) {
          return Ca(e || [], t || [], ti);
        }
        function j_(e, t) {
          return Ca(e || [], t || [], oi);
        }
        var $_ = ee(function(e) {
          var t = e.length, r = t > 1 ? e[t - 1] : i;
          return r = typeof r == "function" ? (e.pop(), r) : i, lf(e, r);
        });
        function sf(e) {
          var t = c(e);
          return t.__chain__ = !0, t;
        }
        function ep(e, t) {
          return t(e), e;
        }
        function fo(e, t) {
          return t(e);
        }
        var tp = _n(function(e) {
          var t = e.length, r = t ? e[0] : 0, l = this.__wrapped__, u = function(d) {
            return ml(d, e);
          };
          return t > 1 || this.__actions__.length || !(l instanceof oe) || !pn(r) ? this.thru(u) : (l = l.slice(r, +r + (t ? 1 : 0)), l.__actions__.push({
            func: fo,
            args: [u],
            thisArg: i
          }), new Dt(l, this.__chain__).thru(function(d) {
            return t && !d.length && d.push(i), d;
          }));
        });
        function np() {
          return sf(this);
        }
        function rp() {
          return new Dt(this.value(), this.__chain__);
        }
        function ip() {
          this.__values__ === i && (this.__values__ = yf(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function op() {
          return this;
        }
        function lp(e) {
          for (var t, r = this; r instanceof Ji; ) {
            var l = $a(r);
            l.__index__ = 0, l.__values__ = i, t ? u.__wrapped__ = l : t = l;
            var u = l;
            r = r.__wrapped__;
          }
          return u.__wrapped__ = e, t;
        }
        function sp() {
          var e = this.__wrapped__;
          if (e instanceof oe) {
            var t = e;
            return this.__actions__.length && (t = new oe(this)), t = t.reverse(), t.__actions__.push({
              func: fo,
              args: [Yl],
              thisArg: i
            }), new Dt(t, this.__chain__);
          }
          return this.thru(Yl);
        }
        function up() {
          return xa(this.__wrapped__, this.__actions__);
        }
        var ap = no(function(e, t, r) {
          pe.call(e, r) ? ++e[r] : gn(e, r, 1);
        });
        function fp(e, t, r) {
          var l = Q(e) ? Du : ev;
          return r && rt(e, t, r) && (t = i), l(e, X(t, 3));
        }
        function cp(e, t) {
          var r = Q(e) ? In : oa;
          return r(e, X(t, 3));
        }
        var hp = Fa(ef), dp = Fa(tf);
        function gp(e, t) {
          return Xe(co(e, t), 1);
        }
        function vp(e, t) {
          return Xe(co(e, t), Ie);
        }
        function _p(e, t, r) {
          return r = r === i ? 1 : j(r), Xe(co(e, t), r);
        }
        function uf(e, t) {
          var r = Q(e) ? Ft : Fn;
          return r(e, X(t, 3));
        }
        function af(e, t) {
          var r = Q(e) ? Dd : ia;
          return r(e, X(t, 3));
        }
        var pp = no(function(e, t, r) {
          pe.call(e, r) ? e[r].push(t) : gn(e, r, [t]);
        });
        function mp(e, t, r, l) {
          e = at(e) ? e : Er(e), r = r && !l ? j(r) : 0;
          var u = e.length;
          return r < 0 && (r = Ge(u + r, 0)), po(e) ? r <= u && e.indexOf(t, r) > -1 : !!u && gr(e, t, r) > -1;
        }
        var wp = ee(function(e, t, r) {
          var l = -1, u = typeof t == "function", d = at(e) ? C(e.length) : [];
          return Fn(e, function(v) {
            d[++l] = u ? yt(t, v, r) : ri(v, t, r);
          }), d;
        }), bp = no(function(e, t, r) {
          gn(e, r, t);
        });
        function co(e, t) {
          var r = Q(e) ? Oe : ca;
          return r(e, X(t, 3));
        }
        function yp(e, t, r, l) {
          return e == null ? [] : (Q(t) || (t = t == null ? [] : [t]), r = l ? i : r, Q(r) || (r = r == null ? [] : [r]), va(e, t, r));
        }
        var xp = no(function(e, t, r) {
          e[r ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function Cp(e, t, r) {
          var l = Q(e) ? ol : Bu, u = arguments.length < 3;
          return l(e, X(t, 4), r, u, Fn);
        }
        function Rp(e, t, r) {
          var l = Q(e) ? Hd : Bu, u = arguments.length < 3;
          return l(e, X(t, 4), r, u, ia);
        }
        function Sp(e, t) {
          var r = Q(e) ? In : oa;
          return r(e, vo(X(t, 3)));
        }
        function Ep(e) {
          var t = Q(e) ? ea : mv;
          return t(e);
        }
        function Tp(e, t, r) {
          (r ? rt(e, t, r) : t === i) ? t = 1 : t = j(t);
          var l = Q(e) ? Jg : wv;
          return l(e, t);
        }
        function Ap(e) {
          var t = Q(e) ? Vg : yv;
          return t(e);
        }
        function Ip(e) {
          if (e == null)
            return 0;
          if (at(e))
            return po(e) ? _r(e) : e.length;
          var t = Ve(e);
          return t == Kt || t == Yt ? e.size : Rl(e).length;
        }
        function Op(e, t, r) {
          var l = Q(e) ? ll : xv;
          return r && rt(e, t, r) && (t = i), l(e, X(t, 3));
        }
        var Pp = ee(function(e, t) {
          if (e == null)
            return [];
          var r = t.length;
          return r > 1 && rt(e, t[0], t[1]) ? t = [] : r > 2 && rt(t[0], t[1], t[2]) && (t = [t[0]]), va(e, Xe(t, 1), []);
        }), ho = cg || function() {
          return Ye.Date.now();
        };
        function Lp(e, t) {
          if (typeof t != "function")
            throw new Mt(h);
          return e = j(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function ff(e, t, r) {
          return t = r ? i : t, t = e && t == null ? e.length : t, vn(e, W, i, i, i, i, t);
        }
        function cf(e, t) {
          var r;
          if (typeof t != "function")
            throw new Mt(h);
          return e = j(e), function() {
            return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = i), r;
          };
        }
        var Zl = ee(function(e, t, r) {
          var l = L;
          if (r.length) {
            var u = Pn(r, Rr(Zl));
            l |= G;
          }
          return vn(e, l, t, r, u);
        }), hf = ee(function(e, t, r) {
          var l = L | B;
          if (r.length) {
            var u = Pn(r, Rr(hf));
            l |= G;
          }
          return vn(t, l, e, r, u);
        });
        function df(e, t, r) {
          t = r ? i : t;
          var l = vn(e, U, i, i, i, i, i, t);
          return l.placeholder = df.placeholder, l;
        }
        function gf(e, t, r) {
          t = r ? i : t;
          var l = vn(e, Y, i, i, i, i, i, t);
          return l.placeholder = gf.placeholder, l;
        }
        function vf(e, t, r) {
          var l, u, d, v, w, x, A = 0, I = !1, P = !1, N = !0;
          if (typeof e != "function")
            throw new Mt(h);
          t = Bt(t) || 0, Le(r) && (I = !!r.leading, P = "maxWait" in r, d = P ? Ge(Bt(r.maxWait) || 0, t) : d, N = "trailing" in r ? !!r.trailing : N);
          function K(ke) {
            var Vt = l, bn = u;
            return l = u = i, A = ke, v = e.apply(bn, Vt), v;
          }
          function Z(ke) {
            return A = ke, w = ui(re, t), I ? K(ke) : v;
          }
          function $(ke) {
            var Vt = ke - x, bn = ke - A, Mf = t - Vt;
            return P ? Je(Mf, d - bn) : Mf;
          }
          function J(ke) {
            var Vt = ke - x, bn = ke - A;
            return x === i || Vt >= t || Vt < 0 || P && bn >= d;
          }
          function re() {
            var ke = ho();
            if (J(ke))
              return le(ke);
            w = ui(re, $(ke));
          }
          function le(ke) {
            return w = i, N && l ? K(ke) : (l = u = i, v);
          }
          function St() {
            w !== i && Ra(w), A = 0, l = x = u = w = i;
          }
          function it() {
            return w === i ? v : le(ho());
          }
          function Et() {
            var ke = ho(), Vt = J(ke);
            if (l = arguments, u = this, x = ke, Vt) {
              if (w === i)
                return Z(x);
              if (P)
                return Ra(w), w = ui(re, t), K(x);
            }
            return w === i && (w = ui(re, t)), v;
          }
          return Et.cancel = St, Et.flush = it, Et;
        }
        var Fp = ee(function(e, t) {
          return ra(e, 1, t);
        }), Mp = ee(function(e, t, r) {
          return ra(e, Bt(t) || 0, r);
        });
        function Dp(e) {
          return vn(e, ue);
        }
        function go(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new Mt(h);
          var r = function() {
            var l = arguments, u = t ? t.apply(this, l) : l[0], d = r.cache;
            if (d.has(u))
              return d.get(u);
            var v = e.apply(this, l);
            return r.cache = d.set(u, v) || d, v;
          };
          return r.cache = new (go.Cache || dn)(), r;
        }
        go.Cache = dn;
        function vo(e) {
          if (typeof e != "function")
            throw new Mt(h);
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
        function Hp(e) {
          return cf(2, e);
        }
        var Wp = Cv(function(e, t) {
          t = t.length == 1 && Q(t[0]) ? Oe(t[0], xt(X())) : Oe(Xe(t, 1), xt(X()));
          var r = t.length;
          return ee(function(l) {
            for (var u = -1, d = Je(l.length, r); ++u < d; )
              l[u] = t[u].call(this, l[u]);
            return yt(e, this, l);
          });
        }), Jl = ee(function(e, t) {
          var r = Pn(t, Rr(Jl));
          return vn(e, G, i, t, r);
        }), _f = ee(function(e, t) {
          var r = Pn(t, Rr(_f));
          return vn(e, D, i, t, r);
        }), Np = _n(function(e, t) {
          return vn(e, ne, i, i, i, t);
        });
        function Bp(e, t) {
          if (typeof e != "function")
            throw new Mt(h);
          return t = t === i ? t : j(t), ee(e, t);
        }
        function kp(e, t) {
          if (typeof e != "function")
            throw new Mt(h);
          return t = t == null ? 0 : Ge(j(t), 0), ee(function(r) {
            var l = r[t], u = Hn(r, 0, t);
            return l && On(u, l), yt(e, this, u);
          });
        }
        function qp(e, t, r) {
          var l = !0, u = !0;
          if (typeof e != "function")
            throw new Mt(h);
          return Le(r) && (l = "leading" in r ? !!r.leading : l, u = "trailing" in r ? !!r.trailing : u), vf(e, t, {
            leading: l,
            maxWait: t,
            trailing: u
          });
        }
        function zp(e) {
          return ff(e, 1);
        }
        function Up(e, t) {
          return Jl(Fl(t), e);
        }
        function Gp() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return Q(e) ? e : [e];
        }
        function Kp(e) {
          return Ht(e, F);
        }
        function Yp(e, t) {
          return t = typeof t == "function" ? t : i, Ht(e, F, t);
        }
        function Xp(e) {
          return Ht(e, R | F);
        }
        function Zp(e, t) {
          return t = typeof t == "function" ? t : i, Ht(e, R | F, t);
        }
        function Jp(e, t) {
          return t == null || na(e, t, Ke(t));
        }
        function Jt(e, t) {
          return e === t || e !== e && t !== t;
        }
        var Vp = lo(yl), Qp = lo(function(e, t) {
          return e >= t;
        }), jn = ua(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? ua : function(e) {
          return De(e) && pe.call(e, "callee") && !Zu.call(e, "callee");
        }, Q = C.isArray, jp = Iu ? xt(Iu) : lv;
        function at(e) {
          return e != null && _o(e.length) && !mn(e);
        }
        function Be(e) {
          return De(e) && at(e);
        }
        function $p(e) {
          return e === !0 || e === !1 || De(e) && nt(e) == zr;
        }
        var Wn = dg || ls, e0 = Ou ? xt(Ou) : sv;
        function t0(e) {
          return De(e) && e.nodeType === 1 && !ai(e);
        }
        function n0(e) {
          if (e == null)
            return !0;
          if (at(e) && (Q(e) || typeof e == "string" || typeof e.splice == "function" || Wn(e) || Sr(e) || jn(e)))
            return !e.length;
          var t = Ve(e);
          if (t == Kt || t == Yt)
            return !e.size;
          if (si(e))
            return !Rl(e).length;
          for (var r in e)
            if (pe.call(e, r))
              return !1;
          return !0;
        }
        function r0(e, t) {
          return ii(e, t);
        }
        function i0(e, t, r) {
          r = typeof r == "function" ? r : i;
          var l = r ? r(e, t) : i;
          return l === i ? ii(e, t, i, r) : !!l;
        }
        function Vl(e) {
          if (!De(e))
            return !1;
          var t = nt(e);
          return t == Ti || t == Th || typeof e.message == "string" && typeof e.name == "string" && !ai(e);
        }
        function o0(e) {
          return typeof e == "number" && Vu(e);
        }
        function mn(e) {
          if (!Le(e))
            return !1;
          var t = nt(e);
          return t == Ai || t == ru || t == Eh || t == Ih;
        }
        function pf(e) {
          return typeof e == "number" && e == j(e);
        }
        function _o(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ze;
        }
        function Le(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function De(e) {
          return e != null && typeof e == "object";
        }
        var mf = Pu ? xt(Pu) : av;
        function l0(e, t) {
          return e === t || Cl(e, t, kl(t));
        }
        function s0(e, t, r) {
          return r = typeof r == "function" ? r : i, Cl(e, t, kl(t), r);
        }
        function u0(e) {
          return wf(e) && e != +e;
        }
        function a0(e) {
          if (Yv(e))
            throw new V(f);
          return aa(e);
        }
        function f0(e) {
          return e === null;
        }
        function c0(e) {
          return e == null;
        }
        function wf(e) {
          return typeof e == "number" || De(e) && nt(e) == Gr;
        }
        function ai(e) {
          if (!De(e) || nt(e) != cn)
            return !1;
          var t = zi(e);
          if (t === null)
            return !0;
          var r = pe.call(t, "constructor") && t.constructor;
          return typeof r == "function" && r instanceof r && Ni.call(r) == sg;
        }
        var Ql = Lu ? xt(Lu) : fv;
        function h0(e) {
          return pf(e) && e >= -Ze && e <= Ze;
        }
        var bf = Fu ? xt(Fu) : cv;
        function po(e) {
          return typeof e == "string" || !Q(e) && De(e) && nt(e) == Yr;
        }
        function Rt(e) {
          return typeof e == "symbol" || De(e) && nt(e) == Ii;
        }
        var Sr = Mu ? xt(Mu) : hv;
        function d0(e) {
          return e === i;
        }
        function g0(e) {
          return De(e) && Ve(e) == Xr;
        }
        function v0(e) {
          return De(e) && nt(e) == Ph;
        }
        var _0 = lo(Sl), p0 = lo(function(e, t) {
          return e <= t;
        });
        function yf(e) {
          if (!e)
            return [];
          if (at(e))
            return po(e) ? Xt(e) : ut(e);
          if (Vr && e[Vr])
            return Jd(e[Vr]());
          var t = Ve(e), r = t == Kt ? hl : t == Yt ? Di : Er;
          return r(e);
        }
        function wn(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Bt(e), e === Ie || e === -Ie) {
            var t = e < 0 ? -1 : 1;
            return t * bt;
          }
          return e === e ? e : 0;
        }
        function j(e) {
          var t = wn(e), r = t % 1;
          return t === t ? r ? t - r : t : 0;
        }
        function xf(e) {
          return e ? Zn(j(e), 0, Re) : 0;
        }
        function Bt(e) {
          if (typeof e == "number")
            return e;
          if (Rt(e))
            return Pt;
          if (Le(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Le(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = ku(e);
          var r = jh.test(e);
          return r || ed.test(e) ? Ld(e.slice(2), r ? 2 : 8) : Qh.test(e) ? Pt : +e;
        }
        function Cf(e) {
          return tn(e, ft(e));
        }
        function m0(e) {
          return e ? Zn(j(e), -Ze, Ze) : e === 0 ? e : 0;
        }
        function ve(e) {
          return e == null ? "" : Ct(e);
        }
        var w0 = xr(function(e, t) {
          if (si(t) || at(t)) {
            tn(t, Ke(t), e);
            return;
          }
          for (var r in t)
            pe.call(t, r) && ti(e, r, t[r]);
        }), Rf = xr(function(e, t) {
          tn(t, ft(t), e);
        }), mo = xr(function(e, t, r, l) {
          tn(t, ft(t), e, l);
        }), b0 = xr(function(e, t, r, l) {
          tn(t, Ke(t), e, l);
        }), y0 = _n(ml);
        function x0(e, t) {
          var r = yr(e);
          return t == null ? r : ta(r, t);
        }
        var C0 = ee(function(e, t) {
          e = Se(e);
          var r = -1, l = t.length, u = l > 2 ? t[2] : i;
          for (u && rt(t[0], t[1], u) && (l = 1); ++r < l; )
            for (var d = t[r], v = ft(d), w = -1, x = v.length; ++w < x; ) {
              var A = v[w], I = e[A];
              (I === i || Jt(I, mr[A]) && !pe.call(e, A)) && (e[A] = d[A]);
            }
          return e;
        }), R0 = ee(function(e) {
          return e.push(i, ka), yt(Sf, i, e);
        });
        function S0(e, t) {
          return Hu(e, X(t, 3), en);
        }
        function E0(e, t) {
          return Hu(e, X(t, 3), bl);
        }
        function T0(e, t) {
          return e == null ? e : wl(e, X(t, 3), ft);
        }
        function A0(e, t) {
          return e == null ? e : la(e, X(t, 3), ft);
        }
        function I0(e, t) {
          return e && en(e, X(t, 3));
        }
        function O0(e, t) {
          return e && bl(e, X(t, 3));
        }
        function P0(e) {
          return e == null ? [] : ji(e, Ke(e));
        }
        function L0(e) {
          return e == null ? [] : ji(e, ft(e));
        }
        function jl(e, t, r) {
          var l = e == null ? i : Jn(e, t);
          return l === i ? r : l;
        }
        function F0(e, t) {
          return e != null && Ua(e, t, nv);
        }
        function $l(e, t) {
          return e != null && Ua(e, t, rv);
        }
        var M0 = Da(function(e, t, r) {
          t != null && typeof t.toString != "function" && (t = Bi.call(t)), e[t] = r;
        }, ts(ct)), D0 = Da(function(e, t, r) {
          t != null && typeof t.toString != "function" && (t = Bi.call(t)), pe.call(e, t) ? e[t].push(r) : e[t] = [r];
        }, X), H0 = ee(ri);
        function Ke(e) {
          return at(e) ? $u(e) : Rl(e);
        }
        function ft(e) {
          return at(e) ? $u(e, !0) : dv(e);
        }
        function W0(e, t) {
          var r = {};
          return t = X(t, 3), en(e, function(l, u, d) {
            gn(r, t(l, u, d), l);
          }), r;
        }
        function N0(e, t) {
          var r = {};
          return t = X(t, 3), en(e, function(l, u, d) {
            gn(r, u, t(l, u, d));
          }), r;
        }
        var B0 = xr(function(e, t, r) {
          $i(e, t, r);
        }), Sf = xr(function(e, t, r, l) {
          $i(e, t, r, l);
        }), k0 = _n(function(e, t) {
          var r = {};
          if (e == null)
            return r;
          var l = !1;
          t = Oe(t, function(d) {
            return d = Dn(d, e), l || (l = d.length > 1), d;
          }), tn(e, Nl(e), r), l && (r = Ht(r, R | S | F, Mv));
          for (var u = t.length; u--; )
            Ol(r, t[u]);
          return r;
        });
        function q0(e, t) {
          return Ef(e, vo(X(t)));
        }
        var z0 = _n(function(e, t) {
          return e == null ? {} : vv(e, t);
        });
        function Ef(e, t) {
          if (e == null)
            return {};
          var r = Oe(Nl(e), function(l) {
            return [l];
          });
          return t = X(t), _a(e, r, function(l, u) {
            return t(l, u[0]);
          });
        }
        function U0(e, t, r) {
          t = Dn(t, e);
          var l = -1, u = t.length;
          for (u || (u = 1, e = i); ++l < u; ) {
            var d = e == null ? i : e[nn(t[l])];
            d === i && (l = u, d = r), e = mn(d) ? d.call(e) : d;
          }
          return e;
        }
        function G0(e, t, r) {
          return e == null ? e : oi(e, t, r);
        }
        function K0(e, t, r, l) {
          return l = typeof l == "function" ? l : i, e == null ? e : oi(e, t, r, l);
        }
        var Tf = Na(Ke), Af = Na(ft);
        function Y0(e, t, r) {
          var l = Q(e), u = l || Wn(e) || Sr(e);
          if (t = X(t, 4), r == null) {
            var d = e && e.constructor;
            u ? r = l ? new d() : [] : Le(e) ? r = mn(d) ? yr(zi(e)) : {} : r = {};
          }
          return (u ? Ft : en)(e, function(v, w, x) {
            return t(r, v, w, x);
          }), r;
        }
        function X0(e, t) {
          return e == null ? !0 : Ol(e, t);
        }
        function Z0(e, t, r) {
          return e == null ? e : ya(e, t, Fl(r));
        }
        function J0(e, t, r, l) {
          return l = typeof l == "function" ? l : i, e == null ? e : ya(e, t, Fl(r), l);
        }
        function Er(e) {
          return e == null ? [] : cl(e, Ke(e));
        }
        function V0(e) {
          return e == null ? [] : cl(e, ft(e));
        }
        function Q0(e, t, r) {
          return r === i && (r = t, t = i), r !== i && (r = Bt(r), r = r === r ? r : 0), t !== i && (t = Bt(t), t = t === t ? t : 0), Zn(Bt(e), t, r);
        }
        function j0(e, t, r) {
          return t = wn(t), r === i ? (r = t, t = 0) : r = wn(r), e = Bt(e), iv(e, t, r);
        }
        function $0(e, t, r) {
          if (r && typeof r != "boolean" && rt(e, t, r) && (t = r = i), r === i && (typeof t == "boolean" ? (r = t, t = i) : typeof e == "boolean" && (r = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = wn(e), t === i ? (t = e, e = 0) : t = wn(t)), e > t) {
            var l = e;
            e = t, t = l;
          }
          if (r || e % 1 || t % 1) {
            var u = Qu();
            return Je(e + u * (t - e + Pd("1e-" + ((u + "").length - 1))), t);
          }
          return Tl(e, t);
        }
        var em = Cr(function(e, t, r) {
          return t = t.toLowerCase(), e + (r ? If(t) : t);
        });
        function If(e) {
          return es(ve(e).toLowerCase());
        }
        function Of(e) {
          return e = ve(e), e && e.replace(nd, Gd).replace(yd, "");
        }
        function tm(e, t, r) {
          e = ve(e), t = Ct(t);
          var l = e.length;
          r = r === i ? l : Zn(j(r), 0, l);
          var u = r;
          return r -= t.length, r >= 0 && e.slice(r, u) == t;
        }
        function nm(e) {
          return e = ve(e), e && Hh.test(e) ? e.replace(lu, Kd) : e;
        }
        function rm(e) {
          return e = ve(e), e && zh.test(e) ? e.replace(Jo, "\\$&") : e;
        }
        var im = Cr(function(e, t, r) {
          return e + (r ? "-" : "") + t.toLowerCase();
        }), om = Cr(function(e, t, r) {
          return e + (r ? " " : "") + t.toLowerCase();
        }), lm = La("toLowerCase");
        function sm(e, t, r) {
          e = ve(e), t = j(t);
          var l = t ? _r(e) : 0;
          if (!t || l >= t)
            return e;
          var u = (t - l) / 2;
          return oo(Yi(u), r) + e + oo(Ki(u), r);
        }
        function um(e, t, r) {
          e = ve(e), t = j(t);
          var l = t ? _r(e) : 0;
          return t && l < t ? e + oo(t - l, r) : e;
        }
        function am(e, t, r) {
          e = ve(e), t = j(t);
          var l = t ? _r(e) : 0;
          return t && l < t ? oo(t - l, r) + e : e;
        }
        function fm(e, t, r) {
          return r || t == null ? t = 0 : t && (t = +t), pg(ve(e).replace(Vo, ""), t || 0);
        }
        function cm(e, t, r) {
          return (r ? rt(e, t, r) : t === i) ? t = 1 : t = j(t), Al(ve(e), t);
        }
        function hm() {
          var e = arguments, t = ve(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var dm = Cr(function(e, t, r) {
          return e + (r ? "_" : "") + t.toLowerCase();
        });
        function gm(e, t, r) {
          return r && typeof r != "number" && rt(e, t, r) && (t = r = i), r = r === i ? Re : r >>> 0, r ? (e = ve(e), e && (typeof t == "string" || t != null && !Ql(t)) && (t = Ct(t), !t && vr(e)) ? Hn(Xt(e), 0, r) : e.split(t, r)) : [];
        }
        var vm = Cr(function(e, t, r) {
          return e + (r ? " " : "") + es(t);
        });
        function _m(e, t, r) {
          return e = ve(e), r = r == null ? 0 : Zn(j(r), 0, e.length), t = Ct(t), e.slice(r, r + t.length) == t;
        }
        function pm(e, t, r) {
          var l = c.templateSettings;
          r && rt(e, t, r) && (t = i), e = ve(e), t = mo({}, t, l, Ba);
          var u = mo({}, t.imports, l.imports, Ba), d = Ke(u), v = cl(u, d), w, x, A = 0, I = t.interpolate || Oi, P = "__p += '", N = dl(
            (t.escape || Oi).source + "|" + I.source + "|" + (I === su ? Vh : Oi).source + "|" + (t.evaluate || Oi).source + "|$",
            "g"
          ), K = "//# sourceURL=" + (pe.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ed + "]") + `
`;
          e.replace(N, function(J, re, le, St, it, Et) {
            return le || (le = St), P += e.slice(A, Et).replace(rd, Yd), re && (w = !0, P += `' +
__e(` + re + `) +
'`), it && (x = !0, P += `';
` + it + `;
__p += '`), le && (P += `' +
((__t = (` + le + `)) == null ? '' : __t) +
'`), A = Et + J.length, J;
          }), P += `';
`;
          var Z = pe.call(t, "variable") && t.variable;
          if (!Z)
            P = `with (obj) {
` + P + `
}
`;
          else if (Zh.test(Z))
            throw new V(_);
          P = (x ? P.replace(Lh, "") : P).replace(Fh, "$1").replace(Mh, "$1;"), P = "function(" + (Z || "obj") + `) {
` + (Z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
          var $ = Lf(function() {
            return he(d, K + "return " + P).apply(i, v);
          });
          if ($.source = P, Vl($))
            throw $;
          return $;
        }
        function mm(e) {
          return ve(e).toLowerCase();
        }
        function wm(e) {
          return ve(e).toUpperCase();
        }
        function bm(e, t, r) {
          if (e = ve(e), e && (r || t === i))
            return ku(e);
          if (!e || !(t = Ct(t)))
            return e;
          var l = Xt(e), u = Xt(t), d = qu(l, u), v = zu(l, u) + 1;
          return Hn(l, d, v).join("");
        }
        function ym(e, t, r) {
          if (e = ve(e), e && (r || t === i))
            return e.slice(0, Gu(e) + 1);
          if (!e || !(t = Ct(t)))
            return e;
          var l = Xt(e), u = zu(l, Xt(t)) + 1;
          return Hn(l, 0, u).join("");
        }
        function xm(e, t, r) {
          if (e = ve(e), e && (r || t === i))
            return e.replace(Vo, "");
          if (!e || !(t = Ct(t)))
            return e;
          var l = Xt(e), u = qu(l, Xt(t));
          return Hn(l, u).join("");
        }
        function Cm(e, t) {
          var r = Pe, l = be;
          if (Le(t)) {
            var u = "separator" in t ? t.separator : u;
            r = "length" in t ? j(t.length) : r, l = "omission" in t ? Ct(t.omission) : l;
          }
          e = ve(e);
          var d = e.length;
          if (vr(e)) {
            var v = Xt(e);
            d = v.length;
          }
          if (r >= d)
            return e;
          var w = r - _r(l);
          if (w < 1)
            return l;
          var x = v ? Hn(v, 0, w).join("") : e.slice(0, w);
          if (u === i)
            return x + l;
          if (v && (w += x.length - w), Ql(u)) {
            if (e.slice(w).search(u)) {
              var A, I = x;
              for (u.global || (u = dl(u.source, ve(uu.exec(u)) + "g")), u.lastIndex = 0; A = u.exec(I); )
                var P = A.index;
              x = x.slice(0, P === i ? w : P);
            }
          } else if (e.indexOf(Ct(u), w) != w) {
            var N = x.lastIndexOf(u);
            N > -1 && (x = x.slice(0, N));
          }
          return x + l;
        }
        function Rm(e) {
          return e = ve(e), e && Dh.test(e) ? e.replace(ou, $d) : e;
        }
        var Sm = Cr(function(e, t, r) {
          return e + (r ? " " : "") + t.toUpperCase();
        }), es = La("toUpperCase");
        function Pf(e, t, r) {
          return e = ve(e), t = r ? i : t, t === i ? Zd(e) ? ng(e) : Bd(e) : e.match(t) || [];
        }
        var Lf = ee(function(e, t) {
          try {
            return yt(e, i, t);
          } catch (r) {
            return Vl(r) ? r : new V(r);
          }
        }), Em = _n(function(e, t) {
          return Ft(t, function(r) {
            r = nn(r), gn(e, r, Zl(e[r], e));
          }), e;
        });
        function Tm(e) {
          var t = e == null ? 0 : e.length, r = X();
          return e = t ? Oe(e, function(l) {
            if (typeof l[1] != "function")
              throw new Mt(h);
            return [r(l[0]), l[1]];
          }) : [], ee(function(l) {
            for (var u = -1; ++u < t; ) {
              var d = e[u];
              if (yt(d[0], this, l))
                return yt(d[1], this, l);
            }
          });
        }
        function Am(e) {
          return $g(Ht(e, R));
        }
        function ts(e) {
          return function() {
            return e;
          };
        }
        function Im(e, t) {
          return e == null || e !== e ? t : e;
        }
        var Om = Ma(), Pm = Ma(!0);
        function ct(e) {
          return e;
        }
        function ns(e) {
          return fa(typeof e == "function" ? e : Ht(e, R));
        }
        function Lm(e) {
          return ha(Ht(e, R));
        }
        function Fm(e, t) {
          return da(e, Ht(t, R));
        }
        var Mm = ee(function(e, t) {
          return function(r) {
            return ri(r, e, t);
          };
        }), Dm = ee(function(e, t) {
          return function(r) {
            return ri(e, r, t);
          };
        });
        function rs(e, t, r) {
          var l = Ke(t), u = ji(t, l);
          r == null && !(Le(t) && (u.length || !l.length)) && (r = t, t = e, e = this, u = ji(t, Ke(t)));
          var d = !(Le(r) && "chain" in r) || !!r.chain, v = mn(e);
          return Ft(u, function(w) {
            var x = t[w];
            e[w] = x, v && (e.prototype[w] = function() {
              var A = this.__chain__;
              if (d || A) {
                var I = e(this.__wrapped__), P = I.__actions__ = ut(this.__actions__);
                return P.push({ func: x, args: arguments, thisArg: e }), I.__chain__ = A, I;
              }
              return x.apply(e, On([this.value()], arguments));
            });
          }), e;
        }
        function Hm() {
          return Ye._ === this && (Ye._ = ug), this;
        }
        function is() {
        }
        function Wm(e) {
          return e = j(e), ee(function(t) {
            return ga(t, e);
          });
        }
        var Nm = Dl(Oe), Bm = Dl(Du), km = Dl(ll);
        function Ff(e) {
          return zl(e) ? sl(nn(e)) : _v(e);
        }
        function qm(e) {
          return function(t) {
            return e == null ? i : Jn(e, t);
          };
        }
        var zm = Ha(), Um = Ha(!0);
        function os() {
          return [];
        }
        function ls() {
          return !1;
        }
        function Gm() {
          return {};
        }
        function Km() {
          return "";
        }
        function Ym() {
          return !0;
        }
        function Xm(e, t) {
          if (e = j(e), e < 1 || e > Ze)
            return [];
          var r = Re, l = Je(e, Re);
          t = X(t), e -= Re;
          for (var u = fl(l, t); ++r < e; )
            t(r);
          return u;
        }
        function Zm(e) {
          return Q(e) ? Oe(e, nn) : Rt(e) ? [e] : ut(ja(ve(e)));
        }
        function Jm(e) {
          var t = ++lg;
          return ve(e) + t;
        }
        var Vm = io(function(e, t) {
          return e + t;
        }, 0), Qm = Hl("ceil"), jm = io(function(e, t) {
          return e / t;
        }, 1), $m = Hl("floor");
        function ew(e) {
          return e && e.length ? Qi(e, ct, yl) : i;
        }
        function tw(e, t) {
          return e && e.length ? Qi(e, X(t, 2), yl) : i;
        }
        function nw(e) {
          return Nu(e, ct);
        }
        function rw(e, t) {
          return Nu(e, X(t, 2));
        }
        function iw(e) {
          return e && e.length ? Qi(e, ct, Sl) : i;
        }
        function ow(e, t) {
          return e && e.length ? Qi(e, X(t, 2), Sl) : i;
        }
        var lw = io(function(e, t) {
          return e * t;
        }, 1), sw = Hl("round"), uw = io(function(e, t) {
          return e - t;
        }, 0);
        function aw(e) {
          return e && e.length ? al(e, ct) : 0;
        }
        function fw(e, t) {
          return e && e.length ? al(e, X(t, 2)) : 0;
        }
        return c.after = Lp, c.ary = ff, c.assign = w0, c.assignIn = Rf, c.assignInWith = mo, c.assignWith = b0, c.at = y0, c.before = cf, c.bind = Zl, c.bindAll = Em, c.bindKey = hf, c.castArray = Gp, c.chain = sf, c.chunk = $v, c.compact = e_, c.concat = t_, c.cond = Tm, c.conforms = Am, c.constant = ts, c.countBy = ap, c.create = x0, c.curry = df, c.curryRight = gf, c.debounce = vf, c.defaults = C0, c.defaultsDeep = R0, c.defer = Fp, c.delay = Mp, c.difference = n_, c.differenceBy = r_, c.differenceWith = i_, c.drop = o_, c.dropRight = l_, c.dropRightWhile = s_, c.dropWhile = u_, c.fill = a_, c.filter = cp, c.flatMap = gp, c.flatMapDeep = vp, c.flatMapDepth = _p, c.flatten = nf, c.flattenDeep = f_, c.flattenDepth = c_, c.flip = Dp, c.flow = Om, c.flowRight = Pm, c.fromPairs = h_, c.functions = P0, c.functionsIn = L0, c.groupBy = pp, c.initial = g_, c.intersection = v_, c.intersectionBy = __, c.intersectionWith = p_, c.invert = M0, c.invertBy = D0, c.invokeMap = wp, c.iteratee = ns, c.keyBy = bp, c.keys = Ke, c.keysIn = ft, c.map = co, c.mapKeys = W0, c.mapValues = N0, c.matches = Lm, c.matchesProperty = Fm, c.memoize = go, c.merge = B0, c.mergeWith = Sf, c.method = Mm, c.methodOf = Dm, c.mixin = rs, c.negate = vo, c.nthArg = Wm, c.omit = k0, c.omitBy = q0, c.once = Hp, c.orderBy = yp, c.over = Nm, c.overArgs = Wp, c.overEvery = Bm, c.overSome = km, c.partial = Jl, c.partialRight = _f, c.partition = xp, c.pick = z0, c.pickBy = Ef, c.property = Ff, c.propertyOf = qm, c.pull = y_, c.pullAll = of, c.pullAllBy = x_, c.pullAllWith = C_, c.pullAt = R_, c.range = zm, c.rangeRight = Um, c.rearg = Np, c.reject = Sp, c.remove = S_, c.rest = Bp, c.reverse = Yl, c.sampleSize = Tp, c.set = G0, c.setWith = K0, c.shuffle = Ap, c.slice = E_, c.sortBy = Pp, c.sortedUniq = F_, c.sortedUniqBy = M_, c.split = gm, c.spread = kp, c.tail = D_, c.take = H_, c.takeRight = W_, c.takeRightWhile = N_, c.takeWhile = B_, c.tap = ep, c.throttle = qp, c.thru = fo, c.toArray = yf, c.toPairs = Tf, c.toPairsIn = Af, c.toPath = Zm, c.toPlainObject = Cf, c.transform = Y0, c.unary = zp, c.union = k_, c.unionBy = q_, c.unionWith = z_, c.uniq = U_, c.uniqBy = G_, c.uniqWith = K_, c.unset = X0, c.unzip = Xl, c.unzipWith = lf, c.update = Z0, c.updateWith = J0, c.values = Er, c.valuesIn = V0, c.without = Y_, c.words = Pf, c.wrap = Up, c.xor = X_, c.xorBy = Z_, c.xorWith = J_, c.zip = V_, c.zipObject = Q_, c.zipObjectDeep = j_, c.zipWith = $_, c.entries = Tf, c.entriesIn = Af, c.extend = Rf, c.extendWith = mo, rs(c, c), c.add = Vm, c.attempt = Lf, c.camelCase = em, c.capitalize = If, c.ceil = Qm, c.clamp = Q0, c.clone = Kp, c.cloneDeep = Xp, c.cloneDeepWith = Zp, c.cloneWith = Yp, c.conformsTo = Jp, c.deburr = Of, c.defaultTo = Im, c.divide = jm, c.endsWith = tm, c.eq = Jt, c.escape = nm, c.escapeRegExp = rm, c.every = fp, c.find = hp, c.findIndex = ef, c.findKey = S0, c.findLast = dp, c.findLastIndex = tf, c.findLastKey = E0, c.floor = $m, c.forEach = uf, c.forEachRight = af, c.forIn = T0, c.forInRight = A0, c.forOwn = I0, c.forOwnRight = O0, c.get = jl, c.gt = Vp, c.gte = Qp, c.has = F0, c.hasIn = $l, c.head = rf, c.identity = ct, c.includes = mp, c.indexOf = d_, c.inRange = j0, c.invoke = H0, c.isArguments = jn, c.isArray = Q, c.isArrayBuffer = jp, c.isArrayLike = at, c.isArrayLikeObject = Be, c.isBoolean = $p, c.isBuffer = Wn, c.isDate = e0, c.isElement = t0, c.isEmpty = n0, c.isEqual = r0, c.isEqualWith = i0, c.isError = Vl, c.isFinite = o0, c.isFunction = mn, c.isInteger = pf, c.isLength = _o, c.isMap = mf, c.isMatch = l0, c.isMatchWith = s0, c.isNaN = u0, c.isNative = a0, c.isNil = c0, c.isNull = f0, c.isNumber = wf, c.isObject = Le, c.isObjectLike = De, c.isPlainObject = ai, c.isRegExp = Ql, c.isSafeInteger = h0, c.isSet = bf, c.isString = po, c.isSymbol = Rt, c.isTypedArray = Sr, c.isUndefined = d0, c.isWeakMap = g0, c.isWeakSet = v0, c.join = m_, c.kebabCase = im, c.last = Nt, c.lastIndexOf = w_, c.lowerCase = om, c.lowerFirst = lm, c.lt = _0, c.lte = p0, c.max = ew, c.maxBy = tw, c.mean = nw, c.meanBy = rw, c.min = iw, c.minBy = ow, c.stubArray = os, c.stubFalse = ls, c.stubObject = Gm, c.stubString = Km, c.stubTrue = Ym, c.multiply = lw, c.nth = b_, c.noConflict = Hm, c.noop = is, c.now = ho, c.pad = sm, c.padEnd = um, c.padStart = am, c.parseInt = fm, c.random = $0, c.reduce = Cp, c.reduceRight = Rp, c.repeat = cm, c.replace = hm, c.result = U0, c.round = sw, c.runInContext = y, c.sample = Ep, c.size = Ip, c.snakeCase = dm, c.some = Op, c.sortedIndex = T_, c.sortedIndexBy = A_, c.sortedIndexOf = I_, c.sortedLastIndex = O_, c.sortedLastIndexBy = P_, c.sortedLastIndexOf = L_, c.startCase = vm, c.startsWith = _m, c.subtract = uw, c.sum = aw, c.sumBy = fw, c.template = pm, c.times = Xm, c.toFinite = wn, c.toInteger = j, c.toLength = xf, c.toLower = mm, c.toNumber = Bt, c.toSafeInteger = m0, c.toString = ve, c.toUpper = wm, c.trim = bm, c.trimEnd = ym, c.trimStart = xm, c.truncate = Cm, c.unescape = Rm, c.uniqueId = Jm, c.upperCase = Sm, c.upperFirst = es, c.each = uf, c.eachRight = af, c.first = rf, rs(c, (function() {
          var e = {};
          return en(c, function(t, r) {
            pe.call(c.prototype, r) || (e[r] = t);
          }), e;
        })(), { chain: !1 }), c.VERSION = s, Ft(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          c[e].placeholder = c;
        }), Ft(["drop", "take"], function(e, t) {
          oe.prototype[e] = function(r) {
            r = r === i ? 1 : Ge(j(r), 0);
            var l = this.__filtered__ && !t ? new oe(this) : this.clone();
            return l.__filtered__ ? l.__takeCount__ = Je(r, l.__takeCount__) : l.__views__.push({
              size: Je(r, Re),
              type: e + (l.__dir__ < 0 ? "Right" : "")
            }), l;
          }, oe.prototype[e + "Right"] = function(r) {
            return this.reverse()[e](r).reverse();
          };
        }), Ft(["filter", "map", "takeWhile"], function(e, t) {
          var r = t + 1, l = r == xe || r == Ce;
          oe.prototype[e] = function(u) {
            var d = this.clone();
            return d.__iteratees__.push({
              iteratee: X(u, 3),
              type: r
            }), d.__filtered__ = d.__filtered__ || l, d;
          };
        }), Ft(["head", "last"], function(e, t) {
          var r = "take" + (t ? "Right" : "");
          oe.prototype[e] = function() {
            return this[r](1).value()[0];
          };
        }), Ft(["initial", "tail"], function(e, t) {
          var r = "drop" + (t ? "" : "Right");
          oe.prototype[e] = function() {
            return this.__filtered__ ? new oe(this) : this[r](1);
          };
        }), oe.prototype.compact = function() {
          return this.filter(ct);
        }, oe.prototype.find = function(e) {
          return this.filter(e).head();
        }, oe.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, oe.prototype.invokeMap = ee(function(e, t) {
          return typeof e == "function" ? new oe(this) : this.map(function(r) {
            return ri(r, e, t);
          });
        }), oe.prototype.reject = function(e) {
          return this.filter(vo(X(e)));
        }, oe.prototype.slice = function(e, t) {
          e = j(e);
          var r = this;
          return r.__filtered__ && (e > 0 || t < 0) ? new oe(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== i && (t = j(t), r = t < 0 ? r.dropRight(-t) : r.take(t - e)), r);
        }, oe.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, oe.prototype.toArray = function() {
          return this.take(Re);
        }, en(oe.prototype, function(e, t) {
          var r = /^(?:filter|find|map|reject)|While$/.test(t), l = /^(?:head|last)$/.test(t), u = c[l ? "take" + (t == "last" ? "Right" : "") : t], d = l || /^find/.test(t);
          u && (c.prototype[t] = function() {
            var v = this.__wrapped__, w = l ? [1] : arguments, x = v instanceof oe, A = w[0], I = x || Q(v), P = function(re) {
              var le = u.apply(c, On([re], w));
              return l && N ? le[0] : le;
            };
            I && r && typeof A == "function" && A.length != 1 && (x = I = !1);
            var N = this.__chain__, K = !!this.__actions__.length, Z = d && !N, $ = x && !K;
            if (!d && I) {
              v = $ ? v : new oe(this);
              var J = e.apply(v, w);
              return J.__actions__.push({ func: fo, args: [P], thisArg: i }), new Dt(J, N);
            }
            return Z && $ ? e.apply(this, w) : (J = this.thru(P), Z ? l ? J.value()[0] : J.value() : J);
          });
        }), Ft(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Hi[e], r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
          c.prototype[e] = function() {
            var u = arguments;
            if (l && !this.__chain__) {
              var d = this.value();
              return t.apply(Q(d) ? d : [], u);
            }
            return this[r](function(v) {
              return t.apply(Q(v) ? v : [], u);
            });
          };
        }), en(oe.prototype, function(e, t) {
          var r = c[t];
          if (r) {
            var l = r.name + "";
            pe.call(br, l) || (br[l] = []), br[l].push({ name: t, func: r });
          }
        }), br[ro(i, B).name] = [{
          name: "wrapper",
          func: i
        }], oe.prototype.clone = Rg, oe.prototype.reverse = Sg, oe.prototype.value = Eg, c.prototype.at = tp, c.prototype.chain = np, c.prototype.commit = rp, c.prototype.next = ip, c.prototype.plant = lp, c.prototype.reverse = sp, c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = up, c.prototype.first = c.prototype.head, Vr && (c.prototype[Vr] = op), c;
      }), pr = rg();
      Gn ? ((Gn.exports = pr)._ = pr, nl._ = pr) : Ye._ = pr;
    }).call(Wb);
  })(hi, hi.exports)), hi.exports;
}
var Ws = Nb();
const xh = /* @__PURE__ */ tu(Ws), Bb = {
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
class kb {
  #e = /* @__PURE__ */ z($e(Bb));
  get config() {
    return g(this.#e);
  }
  set config(n) {
    O(this.#e, n, !0);
  }
}
const Zf = Symbol("config");
class me {
  static initialize() {
    qt(Zf, new kb());
  }
  static get config() {
    const n = gt(Zf);
    if (n == null)
      throw new Error("config context not yet set");
    return n.config;
  }
}
class qb {
  tableModel;
  tableController;
  margin = 2;
  isDragging = !1;
  lastDragX = 0;
  #e = /* @__PURE__ */ z(0);
  get elementWidth() {
    return g(this.#e);
  }
  set elementWidth(n) {
    O(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ M(() => this.elementWidth - this.margin * 2);
  get scrollbarWidth() {
    return g(this.#t);
  }
  set scrollbarWidth(n) {
    O(this.#t, n);
  }
  #n = /* @__PURE__ */ M(() => this.tableController.viewWidth / this.tableModel.colsRightmostPosition * this.scrollbarWidth);
  get pillWidth() {
    return g(this.#n);
  }
  set pillWidth(n) {
    O(this.#n, n);
  }
  #r = /* @__PURE__ */ M(() => -this.tableController.xScroll / this.tableModel.colsRightmostPosition * this.scrollbarWidth);
  get pillLeft() {
    return g(this.#r);
  }
  set pillLeft(n) {
    O(this.#r, n);
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
const Jf = Symbol("mosaic-coordinator");
class Ns {
  static get coordinator() {
    return gt(Jf) ?? cw();
  }
  static set coordinator(n) {
    qt(Jf, n);
  }
}
const ht = "__oid", zb = 120;
class Ub {
  schema;
  #e = /* @__PURE__ */ z($e({}));
  get data() {
    return g(this.#e);
  }
  set data(n) {
    O(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ z($e({}));
  get defaultColWidths() {
    return g(this.#t);
  }
  set defaultColWidths(n) {
    O(this.#t, n, !0);
  }
  #n = /* @__PURE__ */ z($e([]));
  get columns() {
    return g(this.#n);
  }
  set columns(n) {
    O(this.#n, n, !0);
  }
  #r = /* @__PURE__ */ z(0);
  get numRows() {
    return g(this.#r);
  }
  set numRows(n) {
    O(this.#r, n, !0);
  }
  #u = /* @__PURE__ */ z(0);
  get renderOffset() {
    return g(this.#u);
  }
  set renderOffset(n) {
    O(this.#u, n, !0);
  }
  #i = /* @__PURE__ */ z($e({}));
  get rowHeightAddition() {
    return g(this.#i);
  }
  set rowHeightAddition(n) {
    O(this.#i, n, !0);
  }
  #o = /* @__PURE__ */ M(() => this.columns.reduce(
    (n, i) => (me.config.columnConfigs[i]?.hidden && n.add(i), i === ht && me.config.showRowNumber === !1 && n.add(ht), n),
    /* @__PURE__ */ new Set()
  ));
  get hiddenColumns() {
    return g(this.#o);
  }
  set hiddenColumns(n) {
    O(this.#o, n);
  }
  rowKeyColumn = null;
  constructor(n) {
    this.schema = n;
  }
  #l = /* @__PURE__ */ M(() => Object.keys(this.data).sort((n, i) => this.data[n][ht] - this.data[i][ht]));
  get renderableRows() {
    return g(this.#l);
  }
  set renderableRows(n) {
    O(this.#l, n);
  }
  #s = /* @__PURE__ */ M(() => this.columns.filter((n) => !this.hiddenColumns.has(n)));
  get renderableCols() {
    return g(this.#s);
  }
  set renderableCols(n) {
    O(this.#s, n);
  }
  #a = /* @__PURE__ */ M(() => this.renderableRows.length === 0 ? this.zeroRowPosition : Math.min(...this.renderableRows.map((n) => this.rowPositions[n])));
  get minRowPosition() {
    return g(this.#a);
  }
  set minRowPosition(n) {
    O(this.#a, n);
  }
  #f = /* @__PURE__ */ M(() => this.renderableRows.length === 0 ? this.finalRowPosition : Math.max(...this.renderableRows.map((n) => this.rowPositions[n])));
  get maxRowPosition() {
    return g(this.#f);
  }
  set maxRowPosition(n) {
    O(this.#f, n);
  }
  #d = /* @__PURE__ */ M(() => {
    const n = Math.min(...this.renderableRows.map((i) => this.data[i][ht]));
    return Number.isSafeInteger(n) ? n : 0;
  });
  get minRowOID() {
    return g(this.#d);
  }
  set minRowOID(n) {
    O(this.#d, n);
  }
  #c = /* @__PURE__ */ M(() => {
    const n = Math.max(...this.renderableRows.map((i) => this.data[i][ht]));
    return Number.isSafeInteger(n) ? n : 0;
  });
  get maxRowOID() {
    return g(this.#c);
  }
  set maxRowOID(n) {
    O(this.#c, n);
  }
  #g = /* @__PURE__ */ M(() => 0);
  get zeroRowPosition() {
    return g(this.#g);
  }
  set zeroRowPosition(n) {
    O(this.#g, n);
  }
  #h = /* @__PURE__ */ M(() => (this.numRows - 1) * me.config.rowHeight + this.rowPositionOffsets.cumulative);
  get finalRowPosition() {
    return g(this.#h);
  }
  set finalRowPosition(n) {
    O(this.#h, n);
  }
  colsLeftmostPosition = 0;
  #v = /* @__PURE__ */ M(() => {
    const n = this.renderableCols[this.renderableCols.length - 1];
    return this.colPositions[n] + this.colWidths[n];
  });
  get colsRightmostPosition() {
    return g(this.#v);
  }
  set colsRightmostPosition(n) {
    O(this.#v, n);
  }
  #_ = /* @__PURE__ */ M(() => this.renderableRows.reduce(
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
    O(this.#_, n);
  }
  #p = /* @__PURE__ */ M(() => this.renderableRows.reduce(
    (n, i) => {
      const f = (this.data[i][ht] - 1) * me.config.rowHeight + this.rowPositionOffsets.offsets[i];
      return n[i] = f, n;
    },
    {}
  ));
  get rowPositions() {
    return g(this.#p);
  }
  set rowPositions(n) {
    O(this.#p, n);
  }
  #b = /* @__PURE__ */ M(() => {
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
    O(this.#b, n);
  }
  #m = /* @__PURE__ */ M(() => this.renderableRows.reduce(
    (n, i) => (n[i] = me.config.rowHeight + (this.rowHeightAddition[i] ?? 0), n),
    {}
  ));
  get rowHeights() {
    return g(this.#m);
  }
  set rowHeights(n) {
    O(this.#m, n);
  }
  #w = /* @__PURE__ */ M(() => this.columns.reduce(
    (n, i, s) => (n[i] = Math.max(me.config.columnConfigs[i]?.width ?? this.defaultColWidths[i] ?? zb, me.config.minColumnWidths[i] ?? 0), this.isFirstCol(i) && (n[i] += me.config.firstColLeftPadding), this.isLastCol(i) && (n[i] += me.config.verticalScrollbarWidth), n),
    {}
  ));
  get colWidths() {
    return g(this.#w);
  }
  set colWidths(n) {
    O(this.#w, n);
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
    return this.data[n] && this.data[n][ht] % 2 === 0 ? "even" : "odd";
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
class Gb extends Cc {
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
    return Ro.from(this.tableName).select({ count: dw() }).where(n);
  }
}
const dt = "__oid";
class Kb extends Cc {
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
    const i = (await hw(this.coordinator, [{ table: this.tableName, column: "*" }])).reduce((s, a) => (s[a.column] = a, s), {});
    this.columnInfo = i, this.onColumnInfo(i), this.isReady = !0;
  }
  getSelect({ includeRowNumber: n } = { includeRowNumber: !0 }) {
    const i = this.columns.reduce((s, a) => (this.columnInfo?.[a]?.sqlType === "BIGINT" ? s[a] = Df(fi(a), "TEXT") : s[a] = fi(a), s), {});
    return n || delete i[dt], i;
  }
  queryResult(n) {
    return this.onResult(n), this;
  }
  query(n = []) {
    if (!this.isReady)
      return null;
    const i = this.columns.reduce((a, f) => (this.columnInfo?.[f]?.sqlType === "BIGINT" ? a[f] = Df(fi(f), "TEXT") : a[f] = fi(f), a), {});
    if (i[dt] = gw(), this.sort) {
      const a = this.sort.direction === "ascending" ? this.sort.column : vw(this.sort.column);
      i[dt] = i[dt].orderby(a);
    }
    return Ro.from(this.tableName).select(i).where(n).limit(this.limit).offset(this.offset);
  }
  fetchRows(n, i) {
    this.offset = n, this.limit = i, this.requestUpdate();
  }
}
class Yb {
  model;
  schema;
  config;
  #e = /* @__PURE__ */ M(() => Ns.coordinator);
  get coordinator() {
    return g(this.#e);
  }
  set coordinator(n) {
    O(this.#e, n);
  }
  filterBy = null;
  rowsClient = null;
  numRowsClient = null;
  rowKeyColumn = null;
  #t = /* @__PURE__ */ z(null);
  get element() {
    return g(this.#t);
  }
  set element(n) {
    O(this.#t, n, !0);
  }
  #n = /* @__PURE__ */ z(0);
  get viewHeight() {
    return g(this.#n);
  }
  set viewHeight(n) {
    O(this.#n, n, !0);
  }
  #r = /* @__PURE__ */ z(0);
  get viewWidth() {
    return g(this.#r);
  }
  set viewWidth(n) {
    O(this.#r, n, !0);
  }
  #u = /* @__PURE__ */ z(0);
  get yScroll() {
    return g(this.#u);
  }
  set yScroll(n) {
    O(this.#u, n, !0);
  }
  #i = /* @__PURE__ */ z(0);
  get xScroll() {
    return g(this.#i);
  }
  set xScroll(n) {
    O(this.#i, n, !0);
  }
  #o = /* @__PURE__ */ z(!1);
  get isFetching() {
    return g(this.#o);
  }
  set isFetching(n) {
    O(this.#o, n, !0);
  }
  #l = /* @__PURE__ */ z(!1);
  get isJumping() {
    return g(this.#l);
  }
  set isJumping(n) {
    O(this.#l, n, !0);
  }
  #s = /* @__PURE__ */ z(null);
  get sort() {
    return g(this.#s);
  }
  set sort(n) {
    O(this.#s, n, !0);
  }
  #a = /* @__PURE__ */ z(!1);
  get isReady() {
    return g(this.#a);
  }
  set isReady(n) {
    O(this.#a, n, !0);
  }
  #f = /* @__PURE__ */ z(0);
  get updateKey() {
    return g(this.#f);
  }
  set updateKey(n) {
    O(this.#f, n, !0);
  }
  #d = /* @__PURE__ */ z(!1);
  get isStale() {
    return g(this.#d);
  }
  set isStale(n) {
    O(this.#d, n, !0);
  }
  #c = /* @__PURE__ */ z(null);
  get flashedRowId() {
    return g(this.#c);
  }
  set flashedRowId(n) {
    O(this.#c, n, !0);
  }
  #g = /* @__PURE__ */ z(null);
  get hoveredRowId() {
    return g(this.#g);
  }
  set hoveredRowId(n) {
    O(this.#g, n, !0);
  }
  #h = /* @__PURE__ */ M(() => Math.ceil(this.viewHeight / me.config.rowHeight));
  get rowsOnScreen() {
    return g(this.#h);
  }
  set rowsOnScreen(n) {
    O(this.#h, n);
  }
  #v = /* @__PURE__ */ M(() => this.isJumping ? 0 : me.config.renderWindowOffset);
  get renderWindowOffset() {
    return g(this.#v);
  }
  set renderWindowOffset(n) {
    O(this.#v, n);
  }
  #_ = /* @__PURE__ */ M(() => {
    if (this.model.renderableRows.length === 0)
      return null;
    const n = this.model.renderableRows.filter((s) => {
      const a = this.model.rowPositions[s] + this.yScroll;
      return a + this.model.rowHeights[s] > 0 && a < this.viewHeight;
    });
    if (n.length === 0)
      return null;
    const i = n[0];
    return this.model.data[i][dt];
  });
  get firstVisibleRowOID() {
    return g(this.#_);
  }
  set firstVisibleRowOID(n) {
    O(this.#_, n);
  }
  #p = /* @__PURE__ */ M(() => Math.max(0, Math.floor(-this.yScroll / me.config.rowHeight)));
  get offset() {
    return g(this.#p);
  }
  set offset(n) {
    O(this.#p, n);
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
    this.rowsClient = new Kb(
      n,
      f,
      a,
      (h) => {
        this.updateData(h);
      },
      (h) => {
        this.schema.columnInfo = h, this.computeColWidths(n, s), this.isReady = !0;
      }
    ), this.coordinator.connect(this.rowsClient), this.numRowsClient = new Gb(n, a, (h) => {
      this.model && (this.model.numRows = h);
    }), this.coordinator.connect(this.numRowsClient), Fe(() => {
      if (!this.rowsClient || this.isFetching || !this.isReady)
        return;
      const h = -this.renderWindowOffset, _ = this.viewHeight + this.renderWindowOffset, p = this.model.maxRowPosition + this.yScroll + this.config.rowHeight, m = this.model.minRowPosition + this.yScroll;
      if (m < 0 && p < 0 || m > this.viewHeight && p > this.viewHeight) {
        const H = this.rowsOnScreen;
        this.isFetching = !0, this.rowsClient.fetchRows(this.offset, H);
      } else {
        if (p < _) {
          const L = Ws.clamp(Math.ceil((_ - p) / this.config.rowHeight), this.config.minFetchSize, this.rowsOnScreen);
          L > 0 && this.model.maxRowOID !== this.model.numRows && (this.isFetching = !0, this.rowsClient.fetchRows(this.model.maxRowOID, L));
        }
        const H = this.model.minRowPosition + this.yScroll;
        if (H > h && this.model.minRowOID !== 1) {
          const L = Ws.clamp(Math.ceil((H - h) / this.config.rowHeight), this.config.minFetchSize, this.rowsOnScreen);
          L > 0 && (this.isFetching = !0, this.rowsClient.fetchRows(Math.max(0, this.model.minRowOID - 1 - L), L));
        }
      }
      const b = Wc(this.model.renderableRows);
      let R = 0;
      for (; this.model.rowPositions[b[R]] + this.yScroll + this.model.rowHeights[b[R]] < 0; )
        this.yScroll += this.model.collapseRow(b[R]), R += 1;
      let S = b.length - 1;
      for (; this.model.rowPositions[b[S]] + this.yScroll > this.viewHeight; )
        this.model.collapseRow(b[S]), S -= 1;
      let F = 0;
      for (; this.model.rowPositions[b[F]] + this.yScroll + this.model.rowHeights[b[F]] < h; )
        this.model.deleteRow(b[F]), F += 1;
      let T = b.length - 1;
      for (; this.model.rowPositions[b[T]] + this.yScroll > _; )
        this.model.deleteRow(b[T]), T -= 1;
    });
  }
  teardown() {
    this.filterBy && this.filterBy.removeEventListener("value", this.handleFilterBy);
  }
  cellIsVisible(n) {
    const { x: i, y: s } = this.model.getPosition(n), { width: a, height: f } = this.model.getDimensions(n), h = i + this.xScroll, _ = s + this.yScroll;
    return h + a >= 0 && h <= this.viewWidth && _ + f >= 0 && _ <= this.viewHeight;
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
    }).select([dt]).from("original").where(_w(fi(this.rowKeyColumn), pw(n))), f = (await this.coordinator.query(s)).toArray();
    if (f.length > 0) {
      const h = f[0][dt] - 1;
      this.onFetchResolveEnd = () => {
        i && this.flashRow(n);
      }, this.jumpToOffset(h);
    } else
      this.isFetching = !1, console.error("no row", n, "found");
  }
  addHeightToRow(n, i) {
    this.model.rowHeightAddition[n] = (this.model.rowHeightAddition[n] ?? 0) + i;
  }
  hideColumn(n) {
    n === dt ? this.config.onShowRowNumberChange ? this.config.onShowRowNumberChange(!1) : this.config.showRowNumber = !1 : (this.config.columnConfigs[n] || (this.config.columnConfigs[n] = {}), this.config.columnConfigs[n].hidden = !0);
  }
  showColumn(n) {
    n === dt ? this.config.onShowRowNumberChange ? this.config.onShowRowNumberChange(!0) : this.config.showRowNumber = !0 : (this.config.columnConfigs[n] || (this.config.columnConfigs[n] = {}), this.config.columnConfigs[n].hidden = !1);
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
    const s = i.filter((m) => m !== dt), a = this.rowsClient?.getSelect({ includeRowNumber: !1 }), f = s.reduce(
      (m, b) => (m[b] = 0, m),
      {}
    ), h = Ro.from(n).select(a).offset(0).limit(10), p = (await this.coordinator.query(h)).toArray();
    for (const m of p)
      for (const b of s)
        f[b] = Math.max(f[b], Xb(m[b]));
    i.includes(dt) && (f[dt] = this.config.DEFAULT_ROW_NUMBER_COL_WIDTH), this.model.defaultColWidths = f;
  }
}
function Xb(o) {
  const n = String(o).length;
  return n > 200 ? 600 : n > 100 ? 300 : n > 20 ? 200 : n > 10 ? 150 : 120;
}
class Zb {
  tableController;
  #e = /* @__PURE__ */ M(() => this.tableController.element);
  get tableElement() {
    return g(this.#e);
  }
  set tableElement(n) {
    O(this.#e, n);
  }
  constructor(n) {
    this.tableController = n;
  }
  mount(n, i, s, a, f) {
    if (!this.tableElement)
      return;
    const h = i.getBoundingClientRect(), _ = this.tableElement.getBoundingClientRect(), p = _.top, m = _.left;
    switch (s) {
      case "inside":
        switch (f) {
          case "top":
            n.style.top = h.top - p + "px";
            break;
          case "middle":
          case "bottom":
            throw new Error("not yet implemented" + s + f);
        }
        switch (a) {
          case "left":
            n.style.left = h.left - m + "px";
          case "center":
          case "right":
            throw new Error("not yet implemented" + s + a);
        }
        break;
      case "outside":
        switch (f) {
          case "top":
            n.style.top = h.bottom - p + "px";
            break;
          case "middle":
          case "bottom":
            throw new Error("not yet implemented" + s + f);
        }
        switch (a) {
          case "left":
            n.style.left = h.left - m + "px";
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
var as, Vf;
function Jb() {
  if (Vf) return as;
  Vf = 1;
  function o(n, i, s) {
    return n === n && (s !== void 0 && (n = n <= s ? n : s), i !== void 0 && (n = n >= i ? n : i)), n;
  }
  return as = o, as;
}
var fs, Qf;
function Vb() {
  if (Qf) return fs;
  Qf = 1;
  var o = /\s/;
  function n(i) {
    for (var s = i.length; s-- && o.test(i.charAt(s)); )
      ;
    return s;
  }
  return fs = n, fs;
}
var cs, jf;
function Qb() {
  if (jf) return cs;
  jf = 1;
  var o = Vb(), n = /^\s+/;
  function i(s) {
    return s && s.slice(0, o(s) + 1).replace(n, "");
  }
  return cs = i, cs;
}
var hs, $f;
function nu() {
  if ($f) return hs;
  $f = 1;
  function o(n) {
    var i = typeof n;
    return n != null && (i == "object" || i == "function");
  }
  return hs = o, hs;
}
var ds, ec;
function jb() {
  if (ec) return ds;
  ec = 1;
  var o = typeof Nn == "object" && Nn && Nn.Object === Object && Nn;
  return ds = o, ds;
}
var gs, tc;
function Ch() {
  if (tc) return gs;
  tc = 1;
  var o = jb(), n = typeof self == "object" && self && self.Object === Object && self, i = o || n || Function("return this")();
  return gs = i, gs;
}
var vs, nc;
function Rh() {
  if (nc) return vs;
  nc = 1;
  var o = Ch(), n = o.Symbol;
  return vs = n, vs;
}
var _s, rc;
function $b() {
  if (rc) return _s;
  rc = 1;
  var o = Rh(), n = Object.prototype, i = n.hasOwnProperty, s = n.toString, a = o ? o.toStringTag : void 0;
  function f(h) {
    var _ = i.call(h, a), p = h[a];
    try {
      h[a] = void 0;
      var m = !0;
    } catch {
    }
    var b = s.call(h);
    return m && (_ ? h[a] = p : delete h[a]), b;
  }
  return _s = f, _s;
}
var ps, ic;
function e1() {
  if (ic) return ps;
  ic = 1;
  var o = Object.prototype, n = o.toString;
  function i(s) {
    return n.call(s);
  }
  return ps = i, ps;
}
var ms, oc;
function t1() {
  if (oc) return ms;
  oc = 1;
  var o = Rh(), n = $b(), i = e1(), s = "[object Null]", a = "[object Undefined]", f = o ? o.toStringTag : void 0;
  function h(_) {
    return _ == null ? _ === void 0 ? a : s : f && f in Object(_) ? n(_) : i(_);
  }
  return ms = h, ms;
}
var ws, lc;
function n1() {
  if (lc) return ws;
  lc = 1;
  function o(n) {
    return n != null && typeof n == "object";
  }
  return ws = o, ws;
}
var bs, sc;
function r1() {
  if (sc) return bs;
  sc = 1;
  var o = t1(), n = n1(), i = "[object Symbol]";
  function s(a) {
    return typeof a == "symbol" || n(a) && o(a) == i;
  }
  return bs = s, bs;
}
var ys, uc;
function Sh() {
  if (uc) return ys;
  uc = 1;
  var o = Qb(), n = nu(), i = r1(), s = NaN, a = /^[-+]0x[0-9a-f]+$/i, f = /^0b[01]+$/i, h = /^0o[0-7]+$/i, _ = parseInt;
  function p(m) {
    if (typeof m == "number")
      return m;
    if (i(m))
      return s;
    if (n(m)) {
      var b = typeof m.valueOf == "function" ? m.valueOf() : m;
      m = n(b) ? b + "" : b;
    }
    if (typeof m != "string")
      return m === 0 ? m : +m;
    m = o(m);
    var R = f.test(m);
    return R || h.test(m) ? _(m.slice(2), R ? 2 : 8) : a.test(m) ? s : +m;
  }
  return ys = p, ys;
}
var xs, ac;
function i1() {
  if (ac) return xs;
  ac = 1;
  var o = Jb(), n = Sh();
  function i(s, a, f) {
    return f === void 0 && (f = a, a = void 0), f !== void 0 && (f = n(f), f = f === f ? f : 0), a !== void 0 && (a = n(a), a = a === a ? a : 0), o(n(s), a, f);
  }
  return xs = i, xs;
}
var o1 = i1();
const l1 = /* @__PURE__ */ tu(o1);
var Cs, fc;
function s1() {
  if (fc) return Cs;
  fc = 1;
  var o = Ch(), n = function() {
    return o.Date.now();
  };
  return Cs = n, Cs;
}
var Rs, cc;
function u1() {
  if (cc) return Rs;
  cc = 1;
  var o = nu(), n = s1(), i = Sh(), s = "Expected a function", a = Math.max, f = Math.min;
  function h(_, p, m) {
    var b, R, S, F, T, H, L = 0, B = !1, k = !1, U = !0;
    if (typeof _ != "function")
      throw new TypeError(s);
    p = i(p) || 0, o(m) && (B = !!m.leading, k = "maxWait" in m, S = k ? a(i(m.maxWait) || 0, p) : S, U = "trailing" in m ? !!m.trailing : U);
    function Y(ie) {
      var xe = b, Ae = R;
      return b = R = void 0, L = ie, F = _.apply(Ae, xe), F;
    }
    function G(ie) {
      return L = ie, T = setTimeout(ne, p), B ? Y(ie) : F;
    }
    function D(ie) {
      var xe = ie - H, Ae = ie - L, Ce = p - xe;
      return k ? f(Ce, S - Ae) : Ce;
    }
    function W(ie) {
      var xe = ie - H, Ae = ie - L;
      return H === void 0 || xe >= p || xe < 0 || k && Ae >= S;
    }
    function ne() {
      var ie = n();
      if (W(ie))
        return ue(ie);
      T = setTimeout(ne, D(ie));
    }
    function ue(ie) {
      return T = void 0, U && b ? Y(ie) : (b = R = void 0, F);
    }
    function Pe() {
      T !== void 0 && clearTimeout(T), L = 0, b = H = R = T = void 0;
    }
    function be() {
      return T === void 0 ? F : ue(n());
    }
    function ye() {
      var ie = n(), xe = W(ie);
      if (b = arguments, R = this, H = ie, xe) {
        if (T === void 0)
          return G(H);
        if (k)
          return clearTimeout(T), T = setTimeout(ne, p), Y(H);
      }
      return T === void 0 && (T = setTimeout(ne, p)), F;
    }
    return ye.cancel = Pe, ye.flush = be, ye;
  }
  return Rs = h, Rs;
}
var Ss, hc;
function a1() {
  if (hc) return Ss;
  hc = 1;
  var o = u1(), n = nu(), i = "Expected a function";
  function s(a, f, h) {
    var _ = !0, p = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    return n(h) && (_ = "leading" in h ? !!h.leading : _, p = "trailing" in h ? !!h.trailing : p), o(a, f, {
      leading: _,
      maxWait: f,
      trailing: p
    });
  }
  return Ss = s, Ss;
}
var f1 = a1();
const dc = /* @__PURE__ */ tu(f1);
class c1 {
  tableModel;
  tableController;
  isDragging = !1;
  #e = /* @__PURE__ */ z(0);
  get elementHeight() {
    return g(this.#e);
  }
  set elementHeight(n) {
    O(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ z(0);
  get labelHeight() {
    return g(this.#t);
  }
  set labelHeight(n) {
    O(this.#t, n, !0);
  }
  #n = /* @__PURE__ */ M(() => me.config.verticalScrollbarPillHeight);
  get pillHeight() {
    return g(this.#n);
  }
  set pillHeight(n) {
    O(this.#n, n);
  }
  #r = /* @__PURE__ */ M(() => this.elementHeight - this.pillHeight);
  get scrollbarHeight() {
    return g(this.#r);
  }
  set scrollbarHeight(n) {
    O(this.#r, n);
  }
  #u = /* @__PURE__ */ M(() => this.tableController.firstVisibleRowOID ? this.tableController.firstVisibleRowOID : this.tableController.offset + 1);
  get displayRow() {
    return g(this.#u);
  }
  set displayRow(n) {
    O(this.#u, n);
  }
  #i = /* @__PURE__ */ M(() => (this.displayRow - 1) / (this.tableModel.numRows - 1) * this.scrollbarHeight);
  get pillPosition() {
    return g(this.#i);
  }
  set pillPosition(n) {
    O(this.#i, n);
  }
  #o = /* @__PURE__ */ M(() => {
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
    O(this.#o, n);
  }
  constructor({ tableModel: n, tableController: i }) {
    this.tableModel = n, this.tableController = i;
  }
  computeOffsetFromPointer = (n) => {
    this.isDragging = !0;
    let i = Math.round(n.offsetY / this.scrollbarHeight * (this.tableModel.numRows - 1));
    return l1(i, 0, this.tableModel.numRows - 1);
  };
  pointerDown = (n) => {
    n.preventDefault(), n.target.setPointerCapture(n.pointerId), this.isDragging = !0;
    const i = this.computeOffsetFromPointer(n);
    this.tableController.isJumping = !0, this.tableController.jumpToOffset(i);
  };
  handlePointerDown = dc(this.pointerDown, 50);
  pointerMove = (n) => {
    if (this.isDragging) {
      const i = this.computeOffsetFromPointer(n);
      this.tableController.jumpToOffset(i);
    }
  };
  handlePointerMove = dc(this.pointerMove, 50);
  handlePointerUp = (n) => {
    n.target.releasePointerCapture(n.pointerId), this.isDragging = !1, this.tableController.isJumping = !1;
  };
}
class h1 {
  #e = /* @__PURE__ */ z(null);
  get columnInfo() {
    return g(this.#e);
  }
  set columnInfo(n) {
    O(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ M(() => this.columnInfo ? Object.keys(this.columnInfo).reduce(
    (n, i) => (n[i] = this.columnInfo[i].type, n),
    {}
  ) : {});
  get dataType() {
    return g(this.#t);
  }
  set dataType(n) {
    O(this.#t, n);
  }
  #n = /* @__PURE__ */ M(() => this.columnInfo ? Object.keys(this.columnInfo).reduce(
    (n, i) => (n[i] = this.columnInfo[i].sqlType, n),
    {}
  ) : {});
  get sqlType() {
    return g(this.#n);
  }
  set sqlType(n) {
    O(this.#n, n);
  }
}
class d1 {
  tableController;
  #e = /* @__PURE__ */ M(() => Math.floor(-this.tableController.yScroll / me.config.scrollOverflowValue) * me.config.scrollOverflowValue);
  get offset() {
    return g(this.#e);
  }
  set offset(n) {
    O(this.#e, n);
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
const gc = Symbol("schema"), vc = Symbol("model"), _c = Symbol("controller"), pc = Symbol("vertical-scrollbar-controller"), mc = Symbol("horizontal-scrollbar-controller"), wc = Symbol("table-portal-controller"), bc = Symbol("overscroll-modifier");
class we {
  static initialize() {
    const n = new h1(), i = new Ub(n), s = new Yb(i, n), a = new c1({ tableModel: i, tableController: s }), f = new qb({ tableModel: i, tableController: s }), h = new Zb(s), _ = new d1(s);
    qt(gc, n), qt(vc, i), qt(_c, s), qt(pc, a), qt(mc, f), qt(wc, h), qt(bc, _);
  }
  static get schema() {
    return gt(gc);
  }
  static get model() {
    return gt(vc);
  }
  static get controller() {
    return gt(_c);
  }
  static get verticalScrollbarController() {
    return gt(pc);
  }
  static get horizontalScrollbarController() {
    return gt(mc);
  }
  static get tablePortalController() {
    return gt(wc);
  }
  static get overscrollModifier() {
    return gt(bc);
  }
}
var g1 = /* @__PURE__ */ ce('<div class="horizontal-scrollbar svelte-csucem"><div class="pill svelte-csucem"></div></div>');
const v1 = {
  hash: "svelte-csucem",
  code: ".horizontal-scrollbar.svelte-csucem {position:absolute;bottom:0;left:0;width:100%;height:var(--height);transition:opacity 200ms linear;background-color:var(--scrollbar-bg);}.horizontal-scrollbar.svelte-csucem:hover {opacity:1 !important;}.pill.svelte-csucem {width:var(--width);height:calc(var(--height) - var(--margin) * 2);margin:var(--margin);border-radius:2px;background-color:var(--scrollbar-pill-bg);}"
};
function _1(o, n) {
  He(n, !0), Ne(o, v1);
  const i = we.horizontalScrollbarController, s = we.controller, a = me.config;
  let f = /* @__PURE__ */ z(0), h = /* @__PURE__ */ z(null), _ = /* @__PURE__ */ z(null), p = 0;
  kr(() => (p = requestAnimationFrame(R), () => {
    cancelAnimationFrame(p);
  }));
  function m() {
    g(h) && (g(h).style.opacity = "0");
  }
  const b = xh.debounce(m, 1e3);
  Fe(() => {
    g(h) && (s.xScroll, g(h).style.opacity = "1", b());
  });
  function R() {
    O(f, i.pillWidth, !0), g(_) && (g(_).style.transform = `translate(${i.pillLeft}px, 0)`), p = requestAnimationFrame(R);
  }
  var S = g1();
  let F;
  var T = _e(S);
  T.__pointerdown = function(...L) {
    i.handlePointerDown?.apply(this, L);
  }, T.__pointermove = function(...L) {
    i.handlePointerMove?.apply(this, L);
  }, T.__pointerup = function(...L) {
    i.handlePointerUp?.apply(this, L);
  };
  let H;
  st(T, (L) => O(_, L), () => g(_)), de(S), st(S, (L) => O(h, L), () => g(h)), qe(() => {
    F = wt(S, "", F, { "--height": a.horizontalScrollbarHeight + "px" }), H = wt(T, "", H, {
      "--width": g(f) + "px",
      "--margin": i.margin + "px"
    });
  }), $t(S, "clientWidth", (L) => i.elementWidth = L), te(o, S), We();
}
An(["pointerdown", "pointermove", "pointerup"]);
var p1 = /* @__PURE__ */ ce('<div class="vertical-scrollbar svelte-d1fz7o"><div class="pill svelte-d1fz7o"><div class="label svelte-d1fz7o"> </div></div></div>');
const m1 = {
  hash: "svelte-d1fz7o",
  code: ".vertical-scrollbar.svelte-d1fz7o {position:absolute;right:0;top:0;width:var(--width);height:calc(100% - var(--offset-bottom));contain:layout;cursor:row-resize;transition:opacity 200ms linear;user-select:none;background-color:var(--scrollbar-bg);}.vertical-scrollbar.svelte-d1fz7o:hover {opacity:1 !important;}.pill.svelte-d1fz7o {--pill-height: 4px;position:relative;pointer-events:none; /* let the container respond to pointer events */top:0;left:0;width:calc(var(--width) - 2px);margin-left:1px;margin-right:1px;height:var(--pill-height);border-radius:2px;will-change:transform;background-color:var(--scrollbar-pill-bg);}.label.svelte-d1fz7o {--offset: 0;position:absolute;pointer-events:none;top:0;left:-4px;font-family:var(--font-family);font-size:14px;white-space:nowrap;padding:2px 4px;box-shadow:var(--shadow);transform:translate(-100%, calc(-50% + var(--pill-height) / 2 - var(--offset)));border-radius:2px;color:var(--secondary-text-color);background-color:var(--scrollbar-label-bg);border:var(--outline);}"
};
function w1(o, n) {
  He(n, !0), Ne(o, m1);
  const i = we.verticalScrollbarController, s = we.controller, a = me.config;
  let f = /* @__PURE__ */ z(0), h = /* @__PURE__ */ z(0), _ = /* @__PURE__ */ z(null), p = /* @__PURE__ */ z(null), m = /* @__PURE__ */ z(null), b = /* @__PURE__ */ M(() => new Intl.NumberFormat().format(g(h))), R = 0;
  kr(() => (R = requestAnimationFrame(T), () => {
    cancelAnimationFrame(R);
  }));
  function S() {
    g(_) && (g(_).style.opacity = "0");
  }
  const F = xh.debounce(S, 1e3);
  Fe(() => {
    g(_) && (s.yScroll, g(_).style.opacity = "1", F());
  });
  function T() {
    O(f, i.pillPosition ?? g(f), !0), O(h, i.displayRow ?? g(h), !0), g(p) && (g(p).style.transform = `translate3d(0, ${g(f)}px, 0)`), g(m) && g(m).style.setProperty("--offset", i.labelOffset - 1 + "px"), R = requestAnimationFrame(T);
  }
  var H = p1();
  H.__pointerdown = function(...G) {
    i.handlePointerDown?.apply(this, G);
  }, H.__pointermove = function(...G) {
    i.handlePointerMove?.apply(this, G);
  }, H.__pointerup = function(...G) {
    i.handlePointerUp?.apply(this, G);
  };
  let L;
  var B = _e(H);
  let k;
  var U = _e(B), Y = _e(U, !0);
  de(U), st(U, (G) => O(m, G), () => g(m)), de(B), st(B, (G) => O(p, G), () => g(p)), de(H), st(H, (G) => O(_, G), () => g(_)), qe(() => {
    L = wt(H, "", L, {
      "--offset-bottom": a.horizontalScrollbarHeight + "px",
      "--width": a.verticalScrollbarWidth + "px"
    }), k = wt(B, "", k, {
      "--pill-height": i.pillHeight + "px"
    }), fn(Y, g(b));
  }), $t(U, "clientHeight", (G) => i.labelHeight = G), $t(H, "clientHeight", (G) => i.elementHeight = G), te(o, H), We();
}
An(["pointerdown", "pointermove", "pointerup"]);
var b1 = /* @__PURE__ */ ce('<div class="bigint-content svelte-1x1osq0"> </div>');
const y1 = {
  hash: "svelte-1x1osq0",
  code: ".bigint-content.svelte-1x1osq0 {text-align:right;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}"
};
function x1(o, n) {
  He(n, !0), Ne(o, y1);
  let i = qr(n, "height");
  function s(h) {
    return h === null ? null : h.toLocaleString();
  }
  var a = b1(), f = _e(a, !0);
  de(a), qe((h) => fn(f, h), [() => s(n.bigint)]), $t(a, "clientHeight", i), te(o, a), We();
}
var C1 = /* @__PURE__ */ ce("<div></div>");
const R1 = { hash: "svelte-ubqfz9", code: "" };
function S1(o, n) {
  He(n, !0), Ne(o, R1);
  let i = qr(n, "height");
  const s = we.model, a = (m) => typeof m == "function" ? (b, R) => {
    let S = new m(b, R);
    return {
      ...S.update ? { update: S.update.bind(S) } : {},
      ...S.destroy ? { destroy: S.destroy.bind(S) } : {}
    };
  } : (b, R) => {
    let S = new m.class(b, R);
    return {
      ...S.update ? { update: S.update.bind(S) } : {},
      ...S.destroy ? { destroy: S.destroy.bind(S) } : {}
    };
  };
  let f = /* @__PURE__ */ M(() => a(n.customCell)), h = /* @__PURE__ */ M(() => s.getContent({ row: n.row, col: n.col })), _ = /* @__PURE__ */ M(() => s.getRowData(n.row));
  var p = C1();
  $s(p, (m, b) => g(f)?.(m, b), () => ({ value: g(h), rowData: g(_) })), Ri(() => $t(p, "clientHeight", i)), te(o, p), We();
}
var E1 = /* @__PURE__ */ ce('<img alt=""/>');
function T1(o, n) {
  He(n, !0);
  let i = qr(n, "height");
  me.config;
  let s = /* @__PURE__ */ z(null);
  function a(b) {
    let R = "";
    for (let S = 0; S < b.length; S++)
      R += String.fromCharCode(b[S]);
    return btoa(R);
  }
  function f(b) {
    const R = atob(b);
    return new Uint8Array([...R].map((S) => S.charCodeAt(0)));
  }
  function h(b, R) {
    if (b.length < R.length)
      return !1;
    for (let S = 0; S < R.length; S++)
      if (b[S] != R[S])
        return !1;
    return !0;
  }
  function _(b) {
    return h(b, [137, 80, 78, 71, 13, 10, 26, 10]) ? "image/png" : h(b, [255, 216, 255]) ? "image/jpeg" : h(b, [73, 73, 42, 0]) ? "image/tiff" : h(b, [66, 77]) ? "image/bmp" : h(b, [71, 73, 70, 56, 55, 97]) || h(b, [71, 73, 70, 56, 55, 97]) ? "image/gif" : "application/octet-stream";
  }
  function p(b) {
    if (b == null)
      return null;
    if (typeof b == "string")
      return b.startsWith("data:") ? b : `data:${_(f(b))};base64,` + b;
    {
      let R = null;
      if (b.bytes && b.bytes instanceof Uint8Array && (R = b.bytes), b instanceof Uint8Array && (R = b), R != null)
        return `data:${_(R)};base64,` + a(R);
    }
    return null;
  }
  var m = E1();
  st(m, (b) => O(s, b), () => g(s)), qe((b) => wi(m, "src", b), [() => p(n.image)]), Hr("load", m, () => {
    g(s) && i(g(s).scrollHeight);
  }), db(m), te(o, m), We();
}
var A1 = /* @__PURE__ */ ce('<a target="_blank"> </a>'), I1 = /* @__PURE__ */ ce('<div class="link-content"><!></div>');
const O1 = { hash: "svelte-1wimtwv", code: "" };
function P1(o, n) {
  He(n, !0), Ne(o, O1);
  let i = qr(n, "height");
  var s = I1(), a = _e(s);
  {
    var f = (h) => {
      var _ = A1(), p = _e(_, !0);
      de(_), qe(() => {
        wi(_, "href", n.url), fn(p, n.url);
      }), te(h, _);
    };
    vt(a, (h) => {
      n.url && h(f);
    });
  }
  de(s), $t(s, "clientHeight", i), te(o, s), We();
}
var L1 = /* @__PURE__ */ ce('<div class="number-content svelte-1xfvszy"> </div>');
const F1 = {
  hash: "svelte-1xfvszy",
  code: ".number-content.svelte-1xfvszy {text-align:right;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}"
};
function M1(o, n) {
  He(n, !0), Ne(o, F1);
  let i = qr(n, "height");
  function s(h) {
    return h === null ? null : Number.isInteger(h) ? h.toString() : h.toPrecision(4).toString();
  }
  var a = L1(), f = _e(a, !0);
  de(a), qe((h) => fn(f, h), [() => s(n.number)]), $t(a, "clientHeight", i), te(o, a), We();
}
var D1 = /* @__PURE__ */ ce("<div> </div>");
const H1 = {
  hash: "svelte-1ngffx0",
  code: ".clamped.svelte-1ngffx0 {display:-webkit-box;-webkit-box-orient:vertical;line-clamp:var(--lines, var(--num-lines)); /* fallback to numlines from parent */-webkit-line-clamp:var(--lines, var(--num-lines));overflow:hidden;text-overflow:ellipsis;}"
};
function yc(o, n) {
  He(n, !0), Ne(o, H1);
  let i = qr(n, "height");
  const s = me.config;
  let a = /* @__PURE__ */ z(null), f = /* @__PURE__ */ z(null);
  Fe(() => {
    g(a) && (i(g(a).scrollHeight), O(f, Math.floor(n.parentHeight / s.lineHeight), !0));
  });
  var h = D1();
  let _;
  var p = _e(h, !0);
  de(h), st(h, (m) => O(a, m), () => g(a)), qe(() => {
    zn(h, 1, `text-content ${(n.clamped ? "clamped" : null) ?? ""}`, "svelte-1ngffx0"), _ = wt(h, "", _, { "--lines": g(f) }), fn(p, n.text);
  }), te(o, h), We();
}
class W1 {
  #e = /* @__PURE__ */ z($e({}));
  get config() {
    return g(this.#e);
  }
  set config(n) {
    O(this.#e, n, !0);
  }
}
const Es = Symbol("custom-cells");
class xo {
  static initialize() {
    qt(Es, new W1());
  }
  static set config(n) {
    const i = gt(Es);
    i.config = n;
  }
  static get config() {
    return gt(Es).config;
  }
}
var N1 = /* @__PURE__ */ ce("<button>↘</button>"), B1 = /* @__PURE__ */ ce('<div class="cell-content clamp svelte-8bpcsh"><!> <!></div>');
const k1 = {
  hash: "svelte-8bpcsh",
  code: ".cell-content.svelte-8bpcsh {position:relative;flex-grow:1;line-height:var(--lineHeight);overflow-wrap:anywhere;overflow:hidden;}.expand-button.svelte-8bpcsh {all:unset;visibility:hidden;position:absolute;bottom:0;right:0;cursor:pointer;font-size:12px;line-height:18px;padding-left:4px;padding-right:4px;border-radius:2px;color:var(--secondary-text-color);background-color:var(--background-color);border:var(--outline);}.expand-button.show.svelte-8bpcsh {visibility:visible;}"
};
function q1(o, n) {
  He(n, !0), Ne(o, k1);
  const i = we.model, s = we.controller, a = we.schema, f = me.config;
  let h = /* @__PURE__ */ M(() => xo.config), _ = /* @__PURE__ */ z(0), p = /* @__PURE__ */ z(0), m = /* @__PURE__ */ M(() => g(p) > g(_));
  const b = i.getContent({ row: n.row, col: n.col }), R = a.dataType[n.col] ?? "string", S = a.sqlType[n.col] ?? "TEXT";
  function F(D) {
    return typeof D == "string" && (D.startsWith("http://") || D.startsWith("https://"));
  }
  function T(D) {
    return D == null ? !1 : !!(typeof D == "string" && D.startsWith("data:image/") || D.bytes && D.bytes instanceof Uint8Array);
  }
  var H = B1();
  let L;
  var B = _e(H);
  {
    var k = (D) => {
      S1(D, {
        get row() {
          return n.row;
        },
        get col() {
          return n.col;
        },
        get customCell() {
          return g(h)[n.col];
        },
        get height() {
          return g(p);
        },
        set height(W) {
          O(p, W, !0);
        }
      });
    }, U = (D) => {
      var W = $n(), ne = At(W);
      {
        var ue = (be) => {
          var ye = $n(), ie = At(ye);
          {
            var xe = (Ce) => {
              P1(Ce, {
                get url() {
                  return b;
                },
                get height() {
                  return g(p);
                },
                set height(Ie) {
                  O(p, Ie, !0);
                }
              });
            }, Ae = (Ce) => {
              yc(Ce, {
                get text() {
                  return b;
                },
                get clamped() {
                  return g(m);
                },
                get parentHeight() {
                  return g(_);
                },
                get height() {
                  return g(p);
                },
                set height(Ie) {
                  O(p, Ie, !0);
                }
              });
            };
            vt(ie, (Ce) => {
              b && F(b) ? Ce(xe) : Ce(Ae, !1);
            });
          }
          te(be, ye);
        }, Pe = (be) => {
          var ye = $n(), ie = At(ye);
          {
            var xe = (Ce) => {
              var Ie = $n(), Ze = At(Ie);
              {
                var bt = (Re) => {
                  {
                    let Gt = /* @__PURE__ */ M(() => BigInt(b ?? ""));
                    x1(Re, {
                      get bigint() {
                        return g(Gt);
                      },
                      get height() {
                        return g(p);
                      },
                      set height(Un) {
                        O(p, Un, !0);
                      }
                    });
                  }
                }, Pt = (Re) => {
                  M1(Re, {
                    get number() {
                      return b;
                    },
                    get height() {
                      return g(p);
                    },
                    set height(Gt) {
                      O(p, Gt, !0);
                    }
                  });
                };
                vt(Ze, (Re) => {
                  S === "BIGINT" ? Re(bt) : Re(Pt, !1);
                });
              }
              te(Ce, Ie);
            }, Ae = (Ce) => {
              var Ie = $n(), Ze = At(Ie);
              {
                var bt = (Re) => {
                  T1(Re, {
                    get image() {
                      return b;
                    },
                    get height() {
                      return g(p);
                    },
                    set height(Gt) {
                      O(p, Gt, !0);
                    }
                  });
                }, Pt = (Re) => {
                  yc(Re, {
                    get text() {
                      return b;
                    },
                    get clamped() {
                      return g(m);
                    },
                    get parentHeight() {
                      return g(_);
                    },
                    get height() {
                      return g(p);
                    },
                    set height(Gt) {
                      O(p, Gt, !0);
                    }
                  });
                };
                vt(
                  Ze,
                  (Re) => {
                    T(b) ? Re(bt) : Re(Pt, !1);
                  },
                  !0
                );
              }
              te(Ce, Ie);
            };
            vt(
              ie,
              (Ce) => {
                R === "number" ? Ce(xe) : Ce(Ae, !1);
              },
              !0
            );
          }
          te(be, ye);
        };
        vt(
          ne,
          (be) => {
            R === "string" ? be(ue) : be(Pe, !1);
          },
          !0
        );
      }
      te(D, W);
    };
    vt(B, (D) => {
      g(h)[n.col] ? D(k) : D(U, !1);
    });
  }
  var Y = Ut(B, 2);
  {
    var G = (D) => {
      var W = N1();
      W.__click = () => {
        s.addHeightToRow(n.row, g(p) - g(_));
      }, qe(() => zn(W, 1, `expand-button ${n.hovered ? "show" : "hide"}`, "svelte-8bpcsh")), te(D, W);
    };
    vt(Y, (D) => {
      g(m) && D(G);
    });
  }
  de(H), qe(() => L = wt(H, "", L, {
    "--lineHeight": f.lineHeight + "px",
    "--num-lines": f.textMaxLines
  })), $t(H, "clientHeight", (D) => O(_, D)), te(o, H), We();
}
An(["click"]);
var z1 = /* @__PURE__ */ ce('<div class="row-number svelte-1e2x749"> </div>');
const U1 = {
  hash: "svelte-1e2x749",
  code: ".row-number.svelte-1e2x749 {flex-grow:1;text-align:right;color:var(--secondary-text-color);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}"
};
function G1(o, n) {
  He(n, !0), Ne(o, U1);
  const s = we.model.getContent({ row: n.row, col: n.col }), a = /* @__PURE__ */ M(() => new Intl.NumberFormat().format(s ?? 0));
  var f = z1(), h = _e(f, !0);
  de(f), qe(() => fn(h, g(a))), te(o, f), We();
}
var K1 = /* @__PURE__ */ ce('<div class="cell svelte-16dgxhm"><!></div>');
const Y1 = {
  hash: "svelte-16dgxhm",
  code: ".cell.svelte-16dgxhm {--x: 0px;--y: 0px;--width: 0px;--height: 0px;display:flex;box-sizing:border-box;padding-top:calc(var(--padding-y) / 2);padding-bottom:calc(var(--padding-y) / 2);padding-right:calc(calc(var(--padding-x) / 2) + var(--extra-right-padding));padding-left:calc(calc(var(--padding-x) / 2) + var(--extra-left-padding));position:absolute;left:0;top:0;width:var(--width);height:var(--height);transform:translate(var(--x), var(--y));contain:layout paint;color:var(--primary-text-color);font-family:var(--cell-font-family);font-size:var(--cell-font-size);}"
};
function X1(o, n) {
  He(n, !0), Ne(o, Y1);
  const i = we.model, s = we.controller, a = we.overscrollModifier, f = me.config;
  let h = /* @__PURE__ */ M(() => i.getPosition({ row: n.row, col: n.col })), _ = /* @__PURE__ */ M(() => g(h).x), p = /* @__PURE__ */ M(() => g(h).y), m = /* @__PURE__ */ M(() => a.y(g(p))), b = /* @__PURE__ */ M(() => i.getDimensions({ row: n.row, col: n.col })), R = /* @__PURE__ */ M(() => g(b).width), S = /* @__PURE__ */ M(() => g(b).height), F = /* @__PURE__ */ M(() => i.isFirstCol(n.col)), T = /* @__PURE__ */ M(() => i.isLastCol(n.col)), H = /* @__PURE__ */ M(() => i.getRowParity(n.row) === "even" ? "var(--primary-bg)" : "var(--secondary-bg)"), L = () => {
    f.onRowClick && f.onRowClick(n.row);
  }, B = /* @__PURE__ */ z(!1);
  var k = K1();
  k.__click = L, k.__keydown = (W) => {
    W.key === "Enter" && L();
  };
  let U;
  var Y = _e(k);
  {
    var G = (W) => {
      q1(W, {
        get row() {
          return n.row;
        },
        get col() {
          return n.col;
        },
        get hovered() {
          return g(B);
        }
      });
    }, D = (W) => {
      G1(W, {
        get row() {
          return n.row;
        },
        get col() {
          return n.col;
        }
      });
    };
    vt(Y, (W) => {
      n.col !== ht ? W(G) : W(D, !1);
    });
  }
  de(k), qe(() => U = wt(k, "", U, {
    "--x": g(_) + "px",
    "--y": g(m) + "px",
    "--width": g(R) + "px",
    "--height": g(S) + "px",
    "--padding-x": f.betweenColPadding + "px",
    "--padding-y": f.betweenRowPadding + "px",
    "--extra-right-padding": (g(T) ? f.verticalScrollbarWidth : 0) + "px",
    "--extra-left-padding": (g(F) ? f.firstColLeftPadding : 0) + "px",
    "--background-color": g(H)
  })), Hr("pointerenter", k, () => {
    O(B, !0), s.hoveredRowId = n.row;
  }), Hr("pointerleave", k, () => {
    O(B, !1), s.hoveredRowId = null;
  }), te(o, k), We();
}
An(["click", "keydown"]);
var Z1 = /* @__PURE__ */ ce('<div class="header-title svelte-1si5830"> </div>');
const J1 = {
  hash: "svelte-1si5830",
  code: ".header-title.svelte-1si5830 {flex-shrink:1;margin-right:2px;}"
};
function V1(o, n) {
  He(n, !0), Ne(o, J1);
  const i = me.config;
  var s = Z1(), a = _e(s, !0);
  de(s), qe(() => fn(a, i.columnConfigs[n.col]?.title ?? n.col)), te(o, s), We();
}
Mw();
var Q1 = /* @__PURE__ */ ce('<div class="row-number-header svelte-v1uha2">#</div>');
const j1 = {
  hash: "svelte-v1uha2",
  code: ".row-number-header.svelte-v1uha2 {flex-grow:1;text-align:right;margin-right:4px;box-sizing:border-box;color:var(--secondary-text-color);}"
};
function $1(o) {
  Ne(o, j1);
  var n = Q1();
  te(o, n);
}
var ey = /* @__PURE__ */ ce('<button class="sort-buttons svelte-mgubjs"><div> </div></button>');
const ty = {
  hash: "svelte-mgubjs",
  code: ".sort-buttons.svelte-mgubjs {all:unset;flex-shrink:0;width:16px;cursor:pointer;display:flex;justify-content:center;flex-direction:row;margin-left:4px;border-radius:2px;padding-left:4px;padding-right:4px;color:var(--tertiary-text-color);}.sort-buttons.svelte-mgubjs:hover {--placeholder: 0;background-color:var(--hover-bg);}.sort-glyph.svelte-mgubjs {color:var(--tertiary-text-color);}.sort-buttons.svelte-mgubjs:hover .sort-glyph:where(.svelte-mgubjs) {color:var(--tertiary-text-color);}.selected.svelte-mgubjs {color:var(--primary-text-color) !important;}"
};
function ny(o, n) {
  He(n, !0), Ne(o, ty);
  const i = we.controller;
  let s = /* @__PURE__ */ M(() => i.sort ? i.sort.column === n.col : !1), a = /* @__PURE__ */ M(() => i.sort ? i.sort.direction : null), f = /* @__PURE__ */ M(() => g(s) ? g(a) === "ascending" ? "↑" : "↓" : "⇅");
  var h = ey();
  h.__click = () => {
    const m = g(s) ? g(a) === "ascending" ? "descending" : null : "ascending";
    m ? i.handleSort({ column: n.col, direction: m }) : i.handleSort(null);
  };
  var _ = _e(h), p = _e(_, !0);
  de(_), de(h), qe(() => {
    zn(_, 1, `sort-button ${(g(s) ? "selected" : null) ?? ""} sort-glyph`, "svelte-mgubjs"), fn(p, g(f));
  }), te(o, h), We();
}
An(["click"]);
class ry {
  #e = /* @__PURE__ */ z($e({}));
  get config() {
    return g(this.#e);
  }
  set config(n) {
    O(this.#e, n, !0);
  }
}
const Ts = Symbol("custom-headers");
class Co {
  static initialize() {
    qt(Ts, new ry());
  }
  static set config(n) {
    const i = gt(Ts);
    i.config = n;
  }
  static get config() {
    return gt(Ts).config;
  }
}
var iy = /* @__PURE__ */ ce("<div></div>");
const oy = { hash: "svelte-v680az", code: "" };
function ly(o, n) {
  He(n, !0), Ne(o, oy), we.model;
  const i = (f) => typeof f == "function" ? (h, _) => {
    let p = new f(h, _);
    return {
      ...p.update ? { update: p.update.bind(p) } : {},
      ...p.destroy ? { destroy: p.destroy.bind(p) } : {}
    };
  } : (h, _) => {
    let p = new f.class(h, _);
    return {
      ...p.update ? { update: p.update.bind(p) } : {},
      ...p.destroy ? { destroy: p.destroy.bind(p) } : {}
    };
  };
  let s = /* @__PURE__ */ M(() => i(n.customHeader));
  var a = iy();
  $s(a, (f, h) => g(s)?.(f, h), () => ({ column: n.col })), te(o, a), We();
}
var sy = /* @__PURE__ */ ce("<!> <!>", 1), uy = /* @__PURE__ */ ce('<div><div class="header-content svelte-1vl6s3u"><!> <div class="header-title svelte-1vl6s3u"><!></div></div></div>');
const ay = {
  hash: "svelte-1vl6s3u",
  code: ".header-cell.svelte-1vl6s3u {position:relative;display:flex;flex-direction:row;align-items:end;width:var(--width);min-height:var(--height);flex-shrink:0;box-sizing:border-box;padding:0.25em;padding-right:calc(calc(var(--padding-x) / 2) + var(--extra-padding-right));padding-left:calc(calc(var(--padding-x) / 2) + var(--extra-padding-left));color:var(--secondary-text-color);font-family:var(--header-font-family);font-size:var(--header-font-size);}.header-cell.number.svelte-1vl6s3u {justify-content:end;}.header-content.svelte-1vl6s3u {display:flex;flex-direction:column;flex-shrink:0;}.header-title.svelte-1vl6s3u {height:1.5em;align-items:center;display:flex;flex-direction:row;flex-shrink:0;}"
};
function fy(o, n) {
  He(n, !0), Ne(o, ay);
  const i = we.model, s = we.schema, a = me.config;
  let f = /* @__PURE__ */ M(() => Co.config), h = /* @__PURE__ */ z(null), _ = /* @__PURE__ */ z(0);
  Fe(() => {
    a.minColumnWidths[n.col] = g(_) + a.betweenColPadding;
  });
  const p = /* @__PURE__ */ M(() => i.colWidths[n.col]), m = /* @__PURE__ */ M(() => (s.dataType[n.col] ?? "string") === "number"), b = /* @__PURE__ */ M(() => g(m) || n.col === ht ? "number" : ""), R = /* @__PURE__ */ M(() => i.isFirstCol(n.col)), S = /* @__PURE__ */ M(() => i.isLastCol(n.col));
  let F = /* @__PURE__ */ M(() => a.headerHeight ? a.headerHeight + "px" : "auto");
  var T = uy();
  let H;
  var L = _e(T), B = _e(L);
  {
    var k = (W) => {
      ly(W, {
        get col() {
          return n.col;
        },
        get customHeader() {
          return g(f)[n.col];
        }
      });
    };
    vt(B, (W) => {
      g(f)[n.col] && W(k);
    });
  }
  var U = Ut(B, 2), Y = _e(U);
  {
    var G = (W) => {
      var ne = sy(), ue = At(ne);
      V1(ue, {
        get col() {
          return n.col;
        }
      });
      var Pe = Ut(ue, 2);
      ny(Pe, {
        get col() {
          return n.col;
        }
      }), te(W, ne);
    }, D = (W) => {
      $1(W);
    };
    vt(Y, (W) => {
      n.col !== ht ? W(G) : W(D, !1);
    });
  }
  de(U), de(L), de(T), st(T, (W) => O(h, W), () => g(h)), qe(() => {
    zn(T, 1, `header-cell ${g(b) ?? ""}`, "svelte-1vl6s3u"), H = wt(T, "", H, {
      "--width": g(p) + "px",
      "--height": g(F),
      "--padding-x": a.betweenColPadding + "px",
      "--extra-padding-right": (g(S) ? a.verticalScrollbarWidth : 0) + "px",
      "--extra-padding-left": (g(R) ? a.firstColLeftPadding : 0) + "px"
    });
  }), $t(L, "clientWidth", (W) => O(_, W)), te(o, T), We();
}
class cy {
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
      this.config.columnConfigs[this.col] || (this.config.columnConfigs[this.col] = {}), this.config.columnConfigs[this.col].width = a, this.config.onColumnConfigsChange(this.col, Wc(this.config.columnConfigs));
    }
  };
  handlePointerUp = (n) => {
    n.target.releasePointerCapture(n.pointerId), this.isDragging = !1, this.startDragX = null;
  };
}
var hy = /* @__PURE__ */ ce('<div class="header-resize-indicator svelte-1y4d3p9"><div class="pill svelte-1y4d3p9"></div></div>');
const dy = {
  hash: "svelte-1y4d3p9",
  code: ".header-resize-indicator.svelte-1y4d3p9 {position:absolute;z-index:2;box-sizing:border-box;width:12px;height:calc(100% - 0.25rem);margin:2px;cursor:col-resize;justify-content:center;display:flex;align-items:center;justify-content:center;transform:translateX(calc(var(--x) - 4px - 50%));}.pill.svelte-1y4d3p9 {width:2px;height:calc(100% - 4px);margin-top:2px;margin-bottom:2px;background-color:var(--secondary-text-color);opacity:0.2;border-radius:2px;}"
};
function gy(o, n) {
  He(n, !0), Ne(o, dy);
  const i = we.model;
  let s = new cy({
    tableModel: i,
    tableController: we.controller,
    col: n.col
  });
  const a = /* @__PURE__ */ M(() => i.colPositions[n.col] + i.colWidths[n.col]);
  var f = hy();
  f.__pointerdown = function(..._) {
    s.handlePointerDown?.apply(this, _);
  }, f.__pointermove = function(..._) {
    s.handlePointerMove?.apply(this, _);
  }, f.__pointerup = function(..._) {
    s.handlePointerUp?.apply(this, _);
  };
  let h;
  qe(() => h = wt(f, "", h, { "--x": g(a) + "px" })), te(o, f), We();
}
An(["pointerdown", "pointermove", "pointerup"]);
var vy = /* @__PURE__ */ ce('<div class="table-portal svelte-i8g41o" tabindex="-1"><!></div>');
const _y = {
  hash: "svelte-i8g41o",
  code: ".table-portal.svelte-i8g41o {position:absolute;}"
};
function py(o, n) {
  He(n, !0), Ne(o, _y);
  const i = we.controller, s = we.tablePortalController;
  let a = /* @__PURE__ */ z(null);
  const f = (b) => {
    Fe(() => (s.mount(b, n.relativeTo, n.anchor, n.horizontalAlign, n.verticalAlign), b.focus(), () => {
      s.destroy(b);
    }));
  };
  let h = 0;
  kr(() => {
    h = i.xScroll, requestAnimationFrame(_);
  });
  function _() {
    g(a) && n.stickyX && (g(a).style.transform = `translateX(${i.xScroll - h}px)`), requestAnimationFrame(_);
  }
  var p = vy();
  p.__click = (b) => {
    b.stopPropagation();
  };
  var m = _e(p);
  js(m, () => n.children), de(p), st(p, (b) => O(a, b), () => g(a)), $s(p, (b) => f?.(b)), Hr("wheel", p, (b) => {
    b.stopPropagation();
  }), te(o, p), We();
}
An(["click"]);
var my = /* @__PURE__ */ ce("<button> </button> <!>", 1);
const wy = {
  hash: "svelte-3t0u29",
  code: '.dropdown.svelte-3t0u29 {all:unset;padding-left:8px;padding-right:8px;border-radius:2px;cursor:pointer;color:var(--secondary-text-color);position:relative;user-select:none;}.dropdown.svelte-3t0u29::before {content:"";position:absolute;top:0;left:0;height:100%;width:100%;background-color:var(--primary-bg);z-index:-1;}.dropdown.svelte-3t0u29:hover {background-color:var(--hover-bg);}.unclickable.svelte-3t0u29 {pointer-events:none;}'
};
function by(o, n) {
  Ne(o, wy);
  let i = /* @__PURE__ */ z(!1), s = /* @__PURE__ */ z(null), a = /* @__PURE__ */ z(null);
  var f = my();
  Hr("click", Is, (b) => {
    g(i) && b.target !== g(s) && O(i, !1);
  });
  var h = At(f);
  h.__click = (b) => {
    O(i, !0);
  };
  var _ = _e(h, !0);
  de(h), st(h, (b) => O(s, b), () => g(s));
  var p = Ut(h, 2);
  {
    var m = (b) => {
      py(b, {
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
        set element(R) {
          O(a, R, !0);
        },
        children: (R, S) => {
          var F = $n(), T = At(F);
          js(T, () => n.children), te(R, F);
        },
        $$slots: { default: !0 }
      });
    };
    vt(p, (b) => {
      g(i) && b(m);
    });
  }
  qe(() => {
    zn(h, 1, `dropdown ${g(i) ? "unclickable" : "clickable"}`, "svelte-3t0u29"), fn(_, n.label);
  }), te(o, f);
}
An(["click"]);
var yy = /* @__PURE__ */ ce('<li class="column-entry svelte-bmvlb6"><label class="column-label svelte-bmvlb6"> <input type="checkbox"/></label></li>'), xy = /* @__PURE__ */ ce('<ul class="column-toggle svelte-bmvlb6"></ul>'), Cy = /* @__PURE__ */ ce("<!> <!>", 1), Ry = /* @__PURE__ */ ce('<div class="header-row svelte-bmvlb6"><div class="scroll-container svelte-bmvlb6"><div class="dropdown-label-container svelte-bmvlb6"><div class="dropdown-label svelte-bmvlb6"><!></div></div> <!></div></div>');
const Sy = {
  hash: "svelte-bmvlb6",
  code: ".header-row.svelte-bmvlb6 {flex-shrink:0;border-bottom:1px solid var(--secondary-bg);background-color:var(--primary-bg);}.scroll-container.svelte-bmvlb6 {display:flex;flex-direction:row;}.dropdown-label-container.svelte-bmvlb6 {position:absolute;z-index:20;left:0px;box-sizing:border-box;height:100%;padding:0.25em;display:flex;flex-direction:row;align-items:end;}.dropdown-label.svelte-bmvlb6 {height:1.5em;align-items:center;display:flex;}.column-toggle.svelte-bmvlb6 {margin:0;margin-top:4px;margin-left:8px;padding:12px;background-color:var(--primary-bg);border-radius:4px;box-shadow:var(--shadow);border:var(--outline);max-height:var(--max-height);max-width:var(--max-width);overflow:scroll;}.column-entry.svelte-bmvlb6 {list-style-type:none;padding:4px;user-select:none;}.column-label.svelte-bmvlb6 {display:flex;align-items:center;justify-content:space-between;gap:16px;color:var(--secondary-text-color);}"
};
function Ey(o, n) {
  He(n, !0), Ne(o, Sy);
  const i = we.model, s = we.controller, a = me.config;
  let f = /* @__PURE__ */ z(null), h = /* @__PURE__ */ z(null), _ = /* @__PURE__ */ z(null), p = /* @__PURE__ */ M(() => i.renderableCols), m = 0;
  kr(() => (m = requestAnimationFrame(b), () => {
    cancelAnimationFrame(m);
  }));
  function b() {
    g(h) && (g(h).style.transform = `translate3d(${s.xScroll}px, 0, 0)`), g(_) && (g(_).style.transform = `translate3d(${-s.xScroll}px, 0, 0)`), m = requestAnimationFrame(b);
  }
  var R = Ry(), S = _e(R), F = _e(S), T = _e(F), H = _e(T);
  by(H, {
    label: "⋮",
    get relativeTo() {
      return g(f);
    },
    children: (B, k) => {
      var U = xy();
      let Y;
      vi(U, 21, () => i.columns, Sb, (G, D) => {
        var W = yy(), ne = _e(W), ue = _e(ne), Pe = Ut(ue);
        Lb(Pe), Pe.__change = (be) => {
          be.target.checked ? s.showColumn(g(D)) : s.hideColumn(g(D));
        }, wt(Pe, "", {}, { float: "right" }), de(ne), de(W), qe(() => {
          fn(ue, `${(g(D) === ht ? "row #" : a.columnConfigs[g(D)]?.title ?? g(D)) ?? ""} `), wi(Pe, "id", `${g(D) ?? ""}-checkbox`), Fb(Pe, g(D) === ht ? a.showRowNumber !== !1 : !a.columnConfigs[g(D)]?.hidden);
        }), te(G, W);
      }), de(U), qe(() => Y = wt(U, "", Y, {
        "--max-height": s.viewHeight - 48 + "px",
        "--max-width": s.viewWidth - 48 + "px"
      })), te(B, U);
    }
  }), de(T), st(T, (B) => O(_, B), () => g(_)), de(F);
  var L = Ut(F, 2);
  vi(L, 16, () => g(p), (B) => B, (B, k) => {
    var U = Cy(), Y = At(U);
    fy(Y, {
      get col() {
        return k;
      }
    });
    var G = Ut(Y, 2);
    gy(G, {
      get col() {
        return k;
      }
    }), te(B, U);
  }), de(S), st(S, (B) => O(h, B), () => g(h)), de(R), st(R, (B) => O(f, B), () => g(f)), te(o, R), We();
}
An(["change"]);
class Ty {
  #e = /* @__PURE__ */ z(null);
  get colorScheme() {
    return g(this.#e);
  }
  set colorScheme(n) {
    O(this.#e, n, !0);
  }
  #t = /* @__PURE__ */ z($e({}));
  get theme() {
    return g(this.#t);
  }
  set theme(n) {
    O(this.#t, n, !0);
  }
}
const xc = Symbol("style");
class Bs {
  static initialize() {
    qt(xc, new Ty());
  }
  static get style() {
    return gt(xc);
  }
}
function Ay(o, n) {
  return { ...o, ...o[n] != null ? o[n] : {} };
}
var Iy = /* @__PURE__ */ ce("<div><!></div>");
const Oy = {
  hash: "svelte-c7n1rn",
  code: ".table-defaults.light.svelte-c7n1rn {--default-primary-text-color: black;--default-secondary-text-color: gray;--default-tertiary-text-color: lightgray;--default-font-family: sans-serif;--default-font-size: 1rem;--default-primary-bg: white;--default-secondary-bg: rgb(246, 246, 247);--default-tertiary-bg: rgb(234, 234, 235);--default-hover-bg: rgba(0, 0, 0, 0.05);--default-scrollbar-bg: rgba(0, 0, 0, 0.05);--default-scrollbar-pill-bg: rgba(0, 0, 0, 0.5);--default-scrollbar-label-bg: rgba(255, 255, 255, 0.9);--default-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--default-outline-color: rgb(0 0 0 / 0.2);--default-dimmed-row-color: rgb(0 0 0 / 0.2);--default-row-scroll-to-color: rgb(202 225 255);--default-row-hover-color: rgb(220, 235, 255);}.table-defaults.dark.svelte-c7n1rn {--default-primary-text-color: lightgray;--default-secondary-text-color: gray;--default-tertiary-text-color: dimgray;--default-font-family: sans-serif;--default-font-size: 1rem;--default-primary-bg: #060607;--default-secondary-bg: #161617;--default-hover-bg: rgba(255, 255, 255, 0.05);--default-scrollbar-bg: rgba(255, 255, 255, 0.05);--default-scrollbar-pill-bg: rgba(255, 255, 255, 0.5);--default-scrollbar-label-bg: rgba(0, 0, 0, 0.9);--default-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--default-outline-color: rgb(255 255 255 / 0.2);--default-dimmed-row-color: rgb(0 0 0 / 0.6);--default-row-scroll-to-color: rgb(1, 24, 106);--default-row-hover-color: rgb(0, 6, 35);}.style-wrapper.svelte-c7n1rn {width:100%;height:100%;--primary-text-color: var(--user-primary-text-color, var(--default-primary-text-color));--secondary-text-color: var(--user-secondary-text-color, var(--default-secondary-text-color));--tertiary-text-color: var(--user-tertiary-text-color, var(--default-tertiary-text-color));--font-family: var(--user-font-family, var(--default-font-family));--font-size: var(--user-font-size, var(--default-font-size));--primary-bg: var(--user-primary-bg, var(--default-primary-bg));--secondary-bg: var(--user-secondary-bg, var(--default-secondary-bg));--tertiary-bg: var(--user-tertiarty-bg, var(--default-tertiary-bg));--hover-bg: var(--user-hover-bg, var(--default-hover-bg));--header-font-family: var(--user-header-font-family, var(--font-family));--header-font-size: var(--user-header-font-size, var(--font-size));--cell-font-family: var(--user-cell-font-family, var(--font-family));--cell-font-size: var(--user-cell-font-size, var(--font-size));--scrollbar-bg: var(--user-scrollbar-bg, var(--default-scrollbar-bg));--scrollbar-pill-bg: var(--user-scrollbar-pill-bg, var(--default-scrollbar-pill-bg));--scrollbar-label-bg: var(--user-scrollbar-label-bg, var(--default-scrollbar-label-bg));--shadow: var(--user-shadow, var(--default-shadow));--outline-color: var(--user-outline-color, var(--default-outline-color));--outline: 0.5px solid var(--outline-color);--dimmed-row-color: var(--user-dimmed-row-color, var(--default-dimmed-row-color));--row-scroll-to-color: var(--user-row-scroll-to-color, var(--default-row-scroll-to-color));--row-hover-color: var(--user-row-hover-color, var(--default-row-hover-color));}"
};
function Py(o, n) {
  He(n, !0), Ne(o, Oy);
  const i = Bs.style;
  let s = /* @__PURE__ */ M(() => i.colorScheme), a = /* @__PURE__ */ M(() => i.theme), f = /* @__PURE__ */ z(null), h = /* @__PURE__ */ M(() => g(s) ?? g(f) ?? "light");
  const _ = (Ie) => {
    Ie.matches ? O(f, "dark") : O(f, "light");
  }, p = "(prefers-color-scheme: dark";
  kr(() => (O(f, window.matchMedia(p).matches ? "dark" : "light", !0), window.matchMedia(p).addEventListener("change", _), () => {
    window.matchMedia(p).removeEventListener("change", _);
  }));
  let m = /* @__PURE__ */ M(() => Ay(g(a), g(h))), b = /* @__PURE__ */ M(() => g(m).primaryTextColor), R = /* @__PURE__ */ M(() => g(m).secondaryTextColor), S = /* @__PURE__ */ M(() => g(m).tertiaryTextColor), F = /* @__PURE__ */ M(() => g(m).fontFamily), T = /* @__PURE__ */ M(() => g(m).fontSize), H = /* @__PURE__ */ M(() => g(m).primaryBackgroundColor), L = /* @__PURE__ */ M(() => g(m).secondaryBackgroundColor), B = /* @__PURE__ */ M(() => g(m).hoverBackgroundColor), k = /* @__PURE__ */ M(() => g(m).headerFontFamily), U = /* @__PURE__ */ M(() => g(m).headerFontSize), Y = /* @__PURE__ */ M(() => g(m).cellFontFamily), G = /* @__PURE__ */ M(() => g(m).cellFontSize), D = /* @__PURE__ */ M(() => g(m).scrollbarBackgroundColor), W = /* @__PURE__ */ M(() => g(m).scrollbarPillColor), ne = /* @__PURE__ */ M(() => g(m).scrollbarLabelBackgroundColor), ue = /* @__PURE__ */ M(() => g(m).shadow), Pe = /* @__PURE__ */ M(() => g(m).outlineColor), be = /* @__PURE__ */ M(() => g(m).dimmedRowColor), ye = /* @__PURE__ */ M(() => g(m).rowScrollToColor), ie = /* @__PURE__ */ M(() => g(m).rowHoverColor);
  Fe(() => {
  });
  var xe = Iy();
  let Ae;
  var Ce = _e(xe);
  js(Ce, () => n.children), de(xe), qe(() => {
    zn(xe, 1, `style-wrapper table-defaults ${g(h) ?? ""}`, "svelte-c7n1rn"), Ae = wt(xe, "", Ae, {
      "--user-primary-text-color": g(b),
      "--user-secondary-text-color": g(R),
      "--user-tertiary-text-color": g(S),
      "--user-font-family": g(F),
      "--user-font-size": g(T),
      "--user-primary-bg": g(H),
      "--user-secondary-bg": g(L),
      "--user-hover-bg": g(B),
      "--user-header-font-family": g(k),
      "--user-header-font-size": g(U),
      "--user-cell-font-family": g(Y),
      "--user-cell-font-size": g(G),
      "--user-scrollbar-bg": g(D),
      "--user-scrollbar-pill-bg": g(W),
      "--user-scrollbar-label-bg": g(ne),
      "--user-shadow": g(ue),
      "--user-outline-color": g(Pe),
      "--user-dimmed-row-color": g(be),
      "--user-row-scroll-to-color": g(ye),
      "--user-row-hover-color": g(ie)
    });
  }), te(o, xe), We();
}
function Ly() {
  return ht;
}
function Fy(o, n) {
  const i = new Set(o), s = new Set(n);
  return {
    left: o.filter((a) => !s.has(a)),
    right: n.filter((a) => !i.has(a))
  };
}
function My(o, n) {
  const i = new Set(n);
  return o.filter((s) => !i.has(s));
}
function Dy(o, n) {
  return o.concat(n);
}
var Hy = /* @__PURE__ */ ce("<div></div>"), Wy = /* @__PURE__ */ ce("<div></div> <!>", 1);
const Ny = {
  hash: "svelte-14dgpd0",
  code: ".row-background.svelte-14dgpd0 {position:absolute;width:var(--width);height:var(--height);box-sizing:border-box;z-index:-1;transform:translate3d(0, var(--y), 0);transition:background-color 100ms linear;}.odd.svelte-14dgpd0 {background-color:var(--secondary-bg);}.even.svelte-14dgpd0 {background-color:var(--primary-bg);}.dimmer.svelte-14dgpd0 {background-color:var(--dimmed-row-color);z-index:10;pointer-events:none;}.flashed.svelte-14dgpd0 {background-color:var(--row-scroll-to-color);}.hovered.svelte-14dgpd0 {background-color:var(--row-hover-color);}"
};
function By(o, n) {
  He(n, !0), Ne(o, Ny);
  const i = we.controller, s = we.model, a = we.overscrollModifier, f = me.config;
  let h = /* @__PURE__ */ M(() => s.rowHeights[n.row]), _ = /* @__PURE__ */ M(() => Math.max(s.colsRightmostPosition, i.viewWidth)), p = /* @__PURE__ */ M(() => a.y(s.rowPositions[n.row])), m = /* @__PURE__ */ M(() => s.getRowParity(n.row)), b = /* @__PURE__ */ M(() => i.flashedRowId === n.row), R = /* @__PURE__ */ M(() => i.hoveredRowId === n.row), S = /* @__PURE__ */ M(() => f.highlightedRows ? f.highlightedRows?.has(n.row) : null);
  var F = Wy(), T = At(F);
  let H;
  var L = Ut(T, 2);
  {
    var B = (k) => {
      var U = Hy();
      let Y;
      qe(() => {
        zn(U, 1, `row-background ${g(m) ?? ""} dimmer`, "svelte-14dgpd0"), Y = wt(U, "", Y, {
          "--width": g(_) + "px",
          "--height": g(h) + "px",
          "--y": g(p) + "px"
        });
      }), te(k, U);
    };
    vt(L, (k) => {
      g(S) !== null && !g(S) && k(B);
    });
  }
  qe(() => {
    zn(T, 1, `row-background ${g(m) ?? ""} ${(g(b) ? "flashed" : null) ?? ""} ${(g(R) && f.highlightHoveredRow ? "hovered" : null) ?? ""}`, "svelte-14dgpd0"), H = wt(T, "", H, {
      "--width": g(_) + "px",
      "--height": g(h) + "px",
      "--y": g(p) + "px"
    });
  }), te(o, F), We();
}
var ky = /* @__PURE__ */ ce("<!> <!>", 1), qy = /* @__PURE__ */ ce('<div class="scroll-container svelte-1v3p82v"><!></div> <!> <!>', 1), zy = /* @__PURE__ */ ce('<div class="table svelte-1v3p82v"><!> <div class="table-contents svelte-1v3p82v"><!></div></div>');
const Uy = {
  hash: "svelte-1v3p82v",
  code: ".table.svelte-1v3p82v {width:100%;max-width:var(--max-width);height:100%;display:flex;flex-direction:column;position:relative;}.table-contents.svelte-1v3p82v {position:relative;overflow:hidden;flex-grow:1;}.scroll-container.svelte-1v3p82v {position:absolute;width:0;height:0;will-change:transform;contain:layout size;}"
};
function Gy(o, n) {
  He(n, !0), Ne(o, Uy), me.initialize(), xo.initialize(), Co.initialize(), Bs.initialize(), we.initialize();
  const i = we.controller, s = we.model, a = we.overscrollModifier, f = me.config, h = Bs.style;
  Fe(() => {
    n.scrollTo != null && i.scrollToRow(String(n.scrollTo));
  }), Fe(() => {
    n.highlightedRows && n.highlightedRows.length > 0 ? f.highlightedRows = new Set(n.highlightedRows.map((k) => String(k))) : f.highlightedRows = null;
  }), Fe(() => {
    n.onRowClick != null ? f.onRowClick = n.onRowClick : f.onRowClick = null;
  }), Fe(() => {
    n.coordinator ? Ns.coordinator = n.coordinator : Ns.coordinator = null;
  }), Fe(() => {
    n.numLines != null ? f.textMaxLines = n.numLines : f.textMaxLines = f.DEFAULT_TEXT_MAX_LINES, n.lineHeight != null ? f.lineHeight = n.lineHeight : f.lineHeight = f.DEFAULT_LINE_HEIGHT;
  }), Fe(() => {
    n.colorScheme != null ? h.colorScheme = n.colorScheme : h.colorScheme = null;
  }), Fe(() => {
    n.theme != null ? h.theme = n.theme : h.theme = {}, n.colorScheme != null ? h.colorScheme = n.colorScheme : h.colorScheme = null;
  }), Fe(() => {
    n.columnConfigs != null ? f.columnConfigs = n.columnConfigs : f.columnConfigs = {}, n.onColumnConfigsChange != null ? f.onColumnConfigsChange = n.onColumnConfigsChange : f.onColumnConfigsChange = () => {
    };
  }), Fe(() => {
    f.showRowNumber = n.showRowNumber ?? null;
  }), Fe(() => {
    f.onShowRowNumberChange = n.onShowRowNumberChange ?? null;
  }), Fe(() => {
    i.initialize({
      tableName: n.table,
      rowKey: n.rowKey,
      columns: [Ly(), ...n.columns],
      filterBy: n.filter ?? null
    });
  }), Fe(() => {
    n.customCells != null ? xo.config = n.customCells : xo.config = {};
  }), Fe(() => {
    n.additionalHeaderContents != null ? Co.config = n.additionalHeaderContents : Co.config = {};
  }), Fe(() => {
    n.headerHeight != null ? f.headerHeight = n.headerHeight : f.headerHeight = null;
  }), Fe(() => {
    n.highlightHoveredRow != null ? f.highlightHoveredRow = n.highlightHoveredRow : f.highlightHoveredRow = !1;
  });
  let _ = /* @__PURE__ */ z([]), p = /* @__PURE__ */ z(0), m = /* @__PURE__ */ z(null), b = /* @__PURE__ */ z($e([])), R = /* @__PURE__ */ z($e([])), S = /* @__PURE__ */ M(() => g(b).filter((k) => i.rowStillExists(k))), F = /* @__PURE__ */ M(() => g(R)), T = 0;
  kr(() => (T = requestAnimationFrame(B), () => {
    i.teardown(), s.teardown(), cancelAnimationFrame(T);
  }));
  function H(k, U) {
    if (U.length > 0) {
      const Y = U[U.length - 1];
      return Math.abs(s.data[k][dt] - s.data[Y][dt]);
    }
    return 0;
  }
  function L() {
    const { left: k, right: U } = Fy(g(_), s.renderableRows);
    k.length === 0 && U.length === 0 || (O(_, My(g(
      _
      // remove the rows that have been deleted from the model
    ), k)), O(_, Dy(g(
      _
      // add the rows that have been added by the model
    ), U.sort((Y, G) => H(Y, g(_)) - H(G, g(_))).slice(0, i.isJumping ? i.rowsOnScreen : f.rowRenderBatchSize))));
  }
  function B() {
    L(), O(b, g(_).filter((Y) => i.rowIsVisible(Y)), !0), O(R, s.renderableCols.filter((Y) => i.colIsVisible(Y)), !0);
    const k = i.xScroll, U = a.yScroll(i.yScroll);
    g(m) && (g(m).style.transform = `translate3d(${k}px, ${U}px, 0)`), O(p, i.updateKey, !0), T = requestAnimationFrame(B);
  }
  Py(o, {
    children: (k, U) => {
      var Y = zy(), G = _e(Y);
      Ey(G, {});
      var D = Ut(G, 2), W = _e(D);
      {
        var ne = (ue) => {
          var Pe = qy(), be = At(Pe), ye = _e(be);
          Rb(ye, () => g(p), (Ae) => {
            var Ce = ky(), Ie = At(Ce);
            vi(Ie, 16, () => g(S), (bt) => bt, (bt, Pt) => {
              var Re = $n(), Gt = At(Re);
              vi(Gt, 16, () => g(F), (Un) => Un, (Un, Bo) => {
                X1(Un, {
                  get row() {
                    return Pt;
                  },
                  get col() {
                    return Bo;
                  }
                });
              }), te(bt, Re);
            });
            var Ze = Ut(Ie, 2);
            vi(Ze, 16, () => s.renderableRows, (bt) => bt, (bt, Pt) => {
              By(bt, {
                get row() {
                  return Pt;
                }
              });
            }), te(Ae, Ce);
          }), de(be), st(be, (Ae) => O(m, Ae), () => g(m));
          var ie = Ut(be, 2);
          w1(ie, {});
          var xe = Ut(ie, 2);
          _1(xe, {}), te(ue, Pe);
        };
        vt(W, (ue) => {
          i.isReady && ue(ne);
        });
      }
      de(D), de(Y), st(Y, (ue) => i.element = ue, () => i?.element), Hr("wheel", Y, function(...ue) {
        i.handleWheel?.apply(this, ue);
      }), $t(D, "clientHeight", (ue) => i.viewHeight = ue), $t(D, "clientWidth", (ue) => i.viewWidth = ue), te(k, Y);
    },
    $$slots: { default: !0 }
  }), We();
}
class Zy {
  component;
  currentProps;
  constructor(n, i) {
    this.currentProps = { ...i }, this.component = bb({ component: Gy, target: n, props: i });
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
  Zy as Table
};
