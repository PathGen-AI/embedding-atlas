import { interactionHandler as Qe } from "@embedding-atlas/utils";
import { coordinator as Ao, makeClient as Eo, isSelection as Qn } from "@uwdata/mosaic-core";
import * as x from "@uwdata/mosaic-sql";
function Fi() {
  return !(navigator.gpu == null || navigator.gpu.requestAdapter == null);
}
function Ro(e) {
  return e == 0 && (e = 4), e % 4 != 0 && (e += 4 - e % 4), e;
}
function Zt(e, t, r, n) {
  return (e.buffer == null || e.byteSize != r || e.usage != n) && (e.buffer != null && e.buffer.destroy(), e.buffer = t.createBuffer({ size: Ro(r), usage: n }), e.byteSize = r, e.destroy = () => {
    e.buffer?.destroy();
  }), e.buffer;
}
function nn(e, t, r, n) {
  if (e.buffer !== r || e.data !== n) {
    if (n != null)
      if (n.byteLength % 4 != 0) {
        let i = n.byteLength - n.byteLength % 4;
        if (t.queue.writeBuffer(r, 0, n, 0, i), n instanceof Uint8Array) {
          let o = new Uint8Array(4);
          for (let a = 0; a < 4; a++)
            i + a < n.length && (o[a] = n[i + a]);
          t.queue.writeBuffer(r, i, o);
        }
      } else
        t.queue.writeBuffer(r, 0, n, 0);
    else
      t.queue.writeBuffer(r, 0, new ArrayBuffer(r.size));
    e.buffer = r, e.data = n;
  }
  return r;
}
function Zn(e, t, r, n, i, o) {
  return (e.texture == null || e.width != r || e.height != n || e.format != i || e.usage != o) && (e.texture != null && e.texture.destroy(), e.texture = t.createTexture({ size: [r, n], format: i, usage: o }), e.destroy = () => {
    e.texture?.destroy();
  }), e.texture;
}
const be = 2, Or = 4, zr = 8, yt = 16, pt = 32, qt = 64, qr = 128, Xe = 512, _e = 1024, Fe = 2048, mt = 4096, Le = 8192, Et = 16384, Gr = 32768, tr = 65536, Jn = 1 << 17, Di = 1 << 18, or = 1 << 19, Pi = 1 << 20, _r = 32768, yn = 1 << 21, Sn = 1 << 22, Rt = 1 << 23, Ut = Symbol("$state"), Bi = Symbol("legacy props"), To = Symbol(""), Qt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Mn = 3, lr = 8, ki = !1;
var Ui = Array.isArray, So = Array.prototype.indexOf, Cn = Array.from, Ni = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, Ii = Object.getOwnPropertyDescriptors, Mo = Object.prototype, Co = Array.prototype, Fn = Object.getPrototypeOf, $n = Object.isExtensible;
function Fo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Li() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function Oi(e) {
  return e === this.v;
}
function zi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qi(e) {
  return !zi(e, this.v);
}
function Gi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Do() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Po(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bo() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ko(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Uo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function No() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Io(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Lo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Oo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function zo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function qo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let Go = !1;
const Vr = 1, Yr = 2, Vi = 4, Vo = 8, Yo = 16, Xo = 1, Ho = 4, Wo = 8, jo = 16, Ko = 1, Qo = 2, Yi = "[", Xr = "[!", Dn = "]", rr = {}, xe = Symbol(), Zo = "http://www.w3.org/1999/xhtml";
let De = null;
function nr(e) {
  De = e;
}
function Mt(e, t = !1, r) {
  De = {
    p: De,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Ct(e) {
  var t = (
    /** @type {ComponentContext} */
    De
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      _a(n);
  }
  return t.i = !0, De = t.p, /** @type {T} */
  {};
}
function Xi() {
  return !0;
}
let Pt = [];
function Hi() {
  var e = Pt;
  Pt = [], Fo(e);
}
function sr(e) {
  if (Pt.length === 0 && !yr) {
    var t = Pt;
    queueMicrotask(() => {
      t === Pt && Hi();
    });
  }
  Pt.push(e);
}
function Jo() {
  for (; Pt.length > 0; )
    Hi();
}
function Hr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function $o() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let H = !1;
function dt(e) {
  H = e;
}
let V;
function Ce(e) {
  if (e === null)
    throw Hr(), rr;
  return V = e;
}
function Er() {
  return Ce(
    /** @type {TemplateNode} */
    /* @__PURE__ */ at(V)
  );
}
function ce(e) {
  if (H) {
    if (/* @__PURE__ */ at(V) !== null)
      throw Hr(), rr;
    V = e;
  }
}
function Wi(e = 1) {
  if (H) {
    for (var t = e, r = V; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ at(r);
    V = r;
  }
}
function kr(e = !0) {
  for (var t = 0, r = V; ; ) {
    if (r.nodeType === lr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Dn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Yi || n === Xr) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(r)
    );
    e && r.remove(), r = i;
  }
}
function ji(e) {
  if (!e || e.nodeType !== lr)
    throw Hr(), rr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Bt(e) {
  if (typeof e != "object" || e === null || Ut in e)
    return e;
  const t = Fn(e);
  if (t !== Mo && t !== Co)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Ui(e), i = /* @__PURE__ */ $(0), o = It, a = (s) => {
    if (It === o)
      return s();
    var l = G, u = It;
    Se(null), ii(o);
    var d = s();
    return Se(l), ii(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ $(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Lo();
        var d = r.get(l);
        return d === void 0 ? d = a(() => {
          var h = /* @__PURE__ */ $(u.value);
          return r.set(l, h), h;
        }) : L(d, u.value, !0), !0;
      },
      deleteProperty(s, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in s) {
            const d = a(() => /* @__PURE__ */ $(xe));
            r.set(l, d), pr(i);
          }
        } else
          L(u, xe), pr(i);
        return !0;
      },
      get(s, l, u) {
        if (l === Ut)
          return e;
        var d = r.get(l), h = l in s;
        if (d === void 0 && (!h || Jt(s, l)?.writable) && (d = a(() => {
          var v = Bt(h ? s[l] : xe), f = /* @__PURE__ */ $(v);
          return f;
        }), r.set(l, d)), d !== void 0) {
          var y = c(d);
          return y === xe ? void 0 : y;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var d = r.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var h = r.get(l), y = h?.v;
          if (h !== void 0 && y !== xe)
            return {
              enumerable: !0,
              configurable: !0,
              value: y,
              writable: !0
            };
        }
        return u;
      },
      has(s, l) {
        if (l === Ut)
          return !0;
        var u = r.get(l), d = u !== void 0 && u.v !== xe || Reflect.has(s, l);
        if (u !== void 0 || W !== null && (!d || Jt(s, l)?.writable)) {
          u === void 0 && (u = a(() => {
            var y = d ? Bt(s[l]) : xe, v = /* @__PURE__ */ $(y);
            return v;
          }), r.set(l, u));
          var h = c(u);
          if (h === xe)
            return !1;
        }
        return d;
      },
      set(s, l, u, d) {
        var h = r.get(l), y = l in s;
        if (n && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var f = r.get(v + "");
            f !== void 0 ? L(f, xe) : v in s && (f = a(() => /* @__PURE__ */ $(xe)), r.set(v + "", f));
          }
        if (h === void 0)
          (!y || Jt(s, l)?.writable) && (h = a(() => /* @__PURE__ */ $(void 0)), L(h, Bt(u)), r.set(l, h));
        else {
          y = h.v !== xe;
          var p = a(() => Bt(u));
          L(h, p);
        }
        var m = Reflect.getOwnPropertyDescriptor(s, l);
        if (m?.set && m.set.call(d, u), !y) {
          if (n && typeof l == "string") {
            var g = (
              /** @type {Source<number>} */
              r.get("length")
            ), w = Number(l);
            Number.isInteger(w) && w >= g.v && L(g, w + 1);
          }
          pr(i);
        }
        return !0;
      },
      ownKeys(s) {
        c(i);
        var l = Reflect.ownKeys(s).filter((h) => {
          var y = r.get(h);
          return y === void 0 || y.v !== xe;
        });
        for (var [u, d] of r)
          d.v !== xe && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Oo();
      }
    }
  );
}
var ei, Ki, Qi, Zi;
function pn() {
  if (ei === void 0) {
    ei = window, Ki = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Qi = Jt(t, "firstChild").get, Zi = Jt(t, "nextSibling").get, $n(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), $n(r) && (r.__t = void 0);
  }
}
function He(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return Qi.call(e);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return Zi.call(e);
}
function he(e, t) {
  if (!H)
    return /* @__PURE__ */ vt(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ vt(V)
  );
  if (r === null)
    r = V.appendChild(He());
  else if (t && r.nodeType !== Mn) {
    var n = He();
    return r?.before(n), Ce(n), n;
  }
  return Ce(r), r;
}
function Kt(e, t = !1) {
  if (!H) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ vt(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ at(r) : r;
  }
  if (t && V?.nodeType !== Mn) {
    var n = He();
    return V?.before(n), Ce(n), n;
  }
  return V;
}
function ne(e, t = 1, r = !1) {
  let n = H ? V : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ at(n);
  if (!H)
    return n;
  if (r && n?.nodeType !== Mn) {
    var o = He();
    return n === null ? i?.after(o) : n.before(o), Ce(o), o;
  }
  return Ce(n), /** @type {TemplateNode} */
  n;
}
function Ji(e) {
  e.textContent = "";
}
function $i() {
  return !1;
}
function ea(e) {
  var t = W;
  if (t === null)
    return G.f |= Rt, e;
  if ((t.f & Gr) === 0) {
    if ((t.f & qr) === 0)
      throw e;
    t.b.error(e);
  } else
    ir(e, t);
}
function ir(e, t) {
  for (; t !== null; ) {
    if ((t.f & qr) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e;
}
const Cr = /* @__PURE__ */ new Set();
let fe = null, Ne = null, Je = [], Wr = null, mn = !1, yr = !1;
class $e {
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
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #r = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #s = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #l = [];
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
  process(t) {
    Je = [], this.apply();
    var r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const n of t)
      this.#i(n, r);
    this.is_fork || this.#u(), this.#n > 0 || this.is_fork ? (this.#a(r.effects), this.#a(r.render_effects), this.#a(r.block_effects)) : (fe = null, ti(r.render_effects), ti(r.effects), this.#s?.resolve()), Ne = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(t, r) {
    t.f ^= _e;
    for (var n = t.first; n !== null; ) {
      var i = n.f, o = (i & (pt | qt)) !== 0, a = o && (i & _e) !== 0, s = a || (i & Le) !== 0 || this.skipped_effects.has(n);
      if ((n.f & qr) !== 0 && n.b?.is_pending() && (r = {
        parent: r,
        effect: n,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !s && n.fn !== null) {
        o ? n.f ^= _e : (i & Or) !== 0 ? r.effects.push(n) : Rr(n) && ((n.f & yt) !== 0 && r.block_effects.push(n), br(n));
        var l = n.first;
        if (l !== null) {
          n = l;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; )
        u === r.effect && (this.#a(r.effects), this.#a(r.render_effects), this.#a(r.block_effects), r = /** @type {EffectTarget} */
        r.parent), n = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const r of t)
      ((r.f & Fe) !== 0 ? this.#o : this.#l).push(r), ge(r, _e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    this.previous.has(t) || this.previous.set(t, r), (t.f & Rt) === 0 && (this.current.set(t, t.v), Ne?.set(t, t.v));
  }
  activate() {
    fe = this, this.apply();
  }
  deactivate() {
    fe = null, Ne = null;
  }
  flush() {
    if (this.activate(), Je.length > 0) {
      if (ta(), fe !== null && fe !== this)
        return;
    } else this.#r === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #u() {
    if (this.#n === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#r === 0 && this.#f();
  }
  #f() {
    if (Cr.size > 1) {
      this.previous.clear();
      var t = Ne, r = !0, n = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Cr) {
        if (i === this) {
          r = !1;
          continue;
        }
        const o = [];
        for (const [s, l] of this.current) {
          if (i.current.has(s))
            if (r && l !== i.current.get(s))
              i.current.set(s, l);
            else
              continue;
          o.push(s);
        }
        if (o.length === 0)
          continue;
        const a = [...i.current.keys()].filter((s) => !this.current.has(s));
        if (a.length > 0) {
          const s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (const u of o)
            ra(u, a, s, l);
          if (Je.length > 0) {
            fe = i, i.apply();
            for (const u of Je)
              i.#i(u, n);
            Je = [], i.deactivate();
          }
        }
      }
      fe = null, Ne = t;
    }
    this.committed = !0, Cr.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#r += 1, t && (this.#n += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#r -= 1, t && (this.#n -= 1), this.revive();
  }
  revive() {
    for (const t of this.#o)
      ge(t, Fe), Ot(t);
    for (const t of this.#l)
      ge(t, mt), Ot(t);
    this.#o = [], this.#l = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#t.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#s ??= Li()).promise;
  }
  static ensure() {
    if (fe === null) {
      const t = fe = new $e();
      Cr.add(fe), yr || $e.enqueue(() => {
        fe === t && t.flush();
      });
    }
    return fe;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    sr(t);
  }
  apply() {
  }
}
function el(e) {
  var t = yr;
  yr = !0;
  try {
    for (var r; ; ) {
      if (Jo(), Je.length === 0 && (fe?.flush(), Je.length === 0))
        return Wr = null, /** @type {T} */
        r;
      ta();
    }
  } finally {
    yr = t;
  }
}
function ta() {
  var e = Nt;
  mn = !0;
  try {
    var t = 0;
    for (ri(!0); Je.length > 0; ) {
      var r = $e.ensure();
      if (t++ > 1e3) {
        var n, i;
        tl();
      }
      r.process(Je), Tt.clear();
    }
  } finally {
    mn = !1, ri(e), Wr = null;
  }
}
function tl() {
  try {
    Uo();
  } catch (e) {
    ir(e, Wr);
  }
}
let ct = null;
function ti(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Et | Le)) === 0 && Rr(n) && (ct = /* @__PURE__ */ new Set(), br(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? Aa(n) : n.fn = null), ct?.size > 0)) {
        Tt.clear();
        for (const i of ct) {
          if ((i.f & (Et | Le)) !== 0) continue;
          const o = [i];
          let a = i.parent;
          for (; a !== null; )
            ct.has(a) && (ct.delete(a), o.push(a)), a = a.parent;
          for (let s = o.length - 1; s >= 0; s--) {
            const l = o[s];
            (l.f & (Et | Le)) === 0 && br(l);
          }
        }
        ct.clear();
      }
    }
    ct = null;
  }
}
function ra(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      (o & be) !== 0 ? ra(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (o & (Sn | yt)) !== 0 && (o & Fe) === 0 && // we may have scheduled this one already
      na(i, t, n) && (ge(i, Fe), Ot(
        /** @type {Effect} */
        i
      ));
    }
}
function na(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & be) !== 0 && na(
        /** @type {Derived} */
        i,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Ot(e) {
  for (var t = Wr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (mn && t === W && (r & yt) !== 0 && (r & Di) === 0)
      return;
    if ((r & (qt | pt)) !== 0) {
      if ((r & _e) === 0) return;
      t.f ^= _e;
    }
  }
  Je.push(t);
}
function rl(e) {
  let t = 0, r = zt(0), n;
  return () => {
    Kr() && (c(r), kn(() => (t === 0 && (n = Vt(() => e(() => pr(r)))), t += 1, () => {
      sr(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, pr(r));
      });
    })));
  };
}
var nl = tr | or | qr;
function il(e, t, r) {
  new al(e, t, r);
}
class al {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #r = H ? V : null;
  /** @type {BoundaryProps} */
  #n;
  /** @type {((anchor: Node) => void)} */
  #s;
  /** @type {Effect} */
  #o;
  /** @type {Effect | null} */
  #l = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #a = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #f = null;
  #h = 0;
  #c = 0;
  #v = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #d = null;
  #_ = rl(() => (this.#d = zt(this.#h), () => {
    this.#d = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    this.#e = t, this.#n = r, this.#s = n, this.parent = /** @type {Effect} */
    W.b, this.#t = !!this.#n.pending, this.#o = Qr(() => {
      if (W.b = this, H) {
        const o = this.#r;
        Er(), /** @type {Comment} */
        o.nodeType === lr && /** @type {Comment} */
        o.data === Xr ? this.#b() : this.#g();
      } else {
        var i = this.#m();
        try {
          this.#l = qe(() => n(i));
        } catch (o) {
          this.error(o);
        }
        this.#c > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#f?.remove();
      };
    }, nl), H && (this.#e = V);
  }
  #g() {
    try {
      this.#l = qe(() => this.#s(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #b() {
    const t = this.#n.pending;
    t && (this.#i = qe(() => t(this.#e)), $e.enqueue(() => {
      var r = this.#m();
      this.#l = this.#y(() => ($e.ensure(), qe(() => this.#s(r)))), this.#c > 0 ? this.#p() : ($t(
        /** @type {Effect} */
        this.#i,
        () => {
          this.#i = null;
        }
      ), this.#t = !1);
    }));
  }
  #m() {
    var t = this.#e;
    return this.#t && (this.#f = He(), this.#e.before(this.#f), t = this.#f), t;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#n.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #y(t) {
    var r = W, n = G, i = De;
    nt(this.#o), Se(this.#o), nr(this.#o.ctx);
    try {
      return t();
    } catch (o) {
      return ea(o), null;
    } finally {
      nt(r), Se(n), nr(i);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#n.pending
    );
    this.#l !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#f
    ), Ta(this.#l, this.#u)), this.#i === null && (this.#i = qe(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #x(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t);
      return;
    }
    this.#c += t, this.#c === 0 && (this.#t = !1, this.#i && $t(this.#i, () => {
      this.#i = null;
    }), this.#u && (this.#e.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#x(t), this.#h += t, this.#d && ar(this.#d, this.#h);
  }
  get_effect_pending() {
    return this.#_(), c(
      /** @type {Source<number>} */
      this.#d
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = this.#n.onerror;
    let n = this.#n.failed;
    if (this.#v || !r && !n)
      throw t;
    this.#l && (Ee(this.#l), this.#l = null), this.#i && (Ee(this.#i), this.#i = null), this.#a && (Ee(this.#a), this.#a = null), H && (Ce(
      /** @type {TemplateNode} */
      this.#r
    ), Wi(), Ce(kr()));
    var i = !1, o = !1;
    const a = () => {
      if (i) {
        $o();
        return;
      }
      i = !0, o && qo(), $e.ensure(), this.#h = 0, this.#a !== null && $t(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#l = this.#y(() => (this.#v = !1, qe(() => this.#s(this.#e)))), this.#c > 0 ? this.#p() : this.#t = !1;
    };
    var s = G;
    try {
      Se(null), o = !0, r?.(t, a), o = !1;
    } catch (l) {
      ir(l, this.#o && this.#o.parent);
    } finally {
      Se(s);
    }
    n && sr(() => {
      this.#a = this.#y(() => {
        $e.ensure(), this.#v = !0;
        try {
          return qe(() => {
            n(
              this.#e,
              () => t,
              () => a
            );
          });
        } catch (l) {
          return ir(
            l,
            /** @type {Effect} */
            this.#o.parent
          ), null;
        } finally {
          this.#v = !1;
        }
      });
    });
  }
}
function ol(e, t, r, n) {
  const i = jr;
  if (r.length === 0 && e.length === 0) {
    n(t.map(i));
    return;
  }
  var o = fe, a = (
    /** @type {Effect} */
    W
  ), s = ll();
  function l() {
    Promise.all(r.map((u) => /* @__PURE__ */ sl(u))).then((u) => {
      s();
      try {
        n([...t.map(i), ...u]);
      } catch (d) {
        (a.f & Et) === 0 && ir(d, a);
      }
      o?.deactivate(), Ur();
    }).catch((u) => {
      ir(u, a);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    s();
    try {
      return l();
    } finally {
      o?.deactivate(), Ur();
    }
  }) : l();
}
function ll() {
  var e = W, t = G, r = De, n = fe;
  return function(o = !0) {
    nt(e), Se(t), nr(r), o && n?.activate();
  };
}
function Ur() {
  nt(null), Se(null), nr(null);
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  var t = be | Fe, r = G !== null && (G.f & be) !== 0 ? (
    /** @type {Derived} */
    G
  ) : null;
  return W !== null && (W.f |= or), {
    ctx: De,
    deps: null,
    effects: null,
    equals: Oi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xe
    ),
    wv: 0,
    parent: r ?? W,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function sl(e, t) {
  let r = (
    /** @type {Effect | null} */
    W
  );
  r === null && Do();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = zt(
    /** @type {V} */
    xe
  ), a = !G, s = /* @__PURE__ */ new Map();
  return ml(() => {
    var l = Li();
    i = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === fe && u.committed && u.deactivate(), Ur();
      });
    } catch (y) {
      l.reject(y), Ur();
    }
    var u = (
      /** @type {Batch} */
      fe
    );
    if (a) {
      var d = !n.is_pending();
      n.update_pending_count(1), u.increment(d), s.get(u)?.reject(Qt), s.delete(u), s.set(u, l);
    }
    const h = (y, v = void 0) => {
      if (u.activate(), v)
        v !== Qt && (o.f |= Rt, ar(o, v));
      else {
        (o.f & Rt) !== 0 && (o.f ^= Rt), ar(o, y);
        for (const [f, p] of s) {
          if (s.delete(f), f === u) break;
          p.reject(Qt);
        }
      }
      a && (n.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (y) => h(null, y || "unknown"));
  }), xa(() => {
    for (const l of s.values())
      l.reject(Qt);
  }), new Promise((l) => {
    function u(d) {
      function h() {
        d === i ? l(o) : u(i);
      }
      d.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  const t = /* @__PURE__ */ jr(e);
  return fa(t), t;
}
// @__NO_SIDE_EFFECTS__
function ia(e) {
  const t = /* @__PURE__ */ jr(e);
  return t.equals = qi, t;
}
function aa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ee(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ul(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & be) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Pn(e) {
  var t, r = W;
  nt(ul(e));
  try {
    e.f &= ~_r, aa(e), t = va(e);
  } finally {
    nt(r);
  }
  return t;
}
function oa(e) {
  var t = Pn(e);
  if (e.equals(t) || (e.v = t, e.wv = da()), !Gt)
    if (Ne !== null)
      Kr() && Ne.set(e, e.v);
    else {
      var r = (e.f & Xe) === 0 ? mt : _e;
      ge(e, r);
    }
}
let xn = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
let la = !1;
function zt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Oi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  const r = zt(e);
  return fa(r), r;
}
// @__NO_SIDE_EFFECTS__
function sa(e, t = !1, r = !0) {
  const n = zt(e);
  return t || (n.equals = qi), n;
}
function L(e, t, r = !1) {
  G !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!et || (G.f & Jn) !== 0) && Xi() && (G.f & (be | yt | Sn | Jn)) !== 0 && !ht?.includes(e) && zo();
  let n = r ? Bt(t) : t;
  return ar(e, n);
}
function ar(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Gt ? Tt.set(e, t) : Tt.set(e, r), e.v = t;
    var n = $e.ensure();
    n.capture(e, r), (e.f & be) !== 0 && ((e.f & Fe) !== 0 && Pn(
      /** @type {Derived} */
      e
    ), ge(e, (e.f & Xe) !== 0 ? _e : mt)), e.wv = da(), ua(e, Fe), W !== null && (W.f & _e) !== 0 && (W.f & (pt | qt)) === 0 && (ze === null ? cl([e]) : ze.push(e)), !n.is_fork && xn.size > 0 && !la && fl();
  }
  return t;
}
function fl() {
  la = !1;
  const e = Array.from(xn);
  for (const t of e)
    (t.f & _e) !== 0 && ge(t, mt), Rr(t) && br(t);
  xn.clear();
}
function pr(e) {
  L(e, e.v + 1);
}
function ua(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var o = r[i], a = o.f, s = (a & Fe) === 0;
      if (s && ge(o, t), (a & be) !== 0) {
        var l = (
          /** @type {Derived} */
          o
        );
        Ne?.delete(l), (a & _r) === 0 && (a & Xe && (o.f |= _r), ua(l, mt));
      } else s && ((a & yt) !== 0 && ct !== null && ct.add(
        /** @type {Effect} */
        o
      ), Ot(
        /** @type {Effect} */
        o
      ));
    }
}
function Bn(e) {
  var t = G, r = W;
  Se(null), nt(null);
  try {
    return e();
  } finally {
    Se(t), nt(r);
  }
}
let Nt = !1;
function ri(e) {
  Nt = e;
}
let Gt = !1;
function ni(e) {
  Gt = e;
}
let G = null, et = !1;
function Se(e) {
  G = e;
}
let W = null;
function nt(e) {
  W = e;
}
let ht = null;
function fa(e) {
  G !== null && (ht === null ? ht = [e] : ht.push(e));
}
let Ae = null, Ue = 0, ze = null;
function cl(e) {
  ze = e;
}
let ca = 1, gr = 0, It = gr;
function ii(e) {
  It = e;
}
function da() {
  return ++ca;
}
function Rr(e) {
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if (t & be && (e.f &= ~_r), (t & mt) !== 0) {
    var r = e.deps;
    if (r !== null)
      for (var n = r.length, i = 0; i < n; i++) {
        var o = r[i];
        if (Rr(
          /** @type {Derived} */
          o
        ) && oa(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
      }
    (t & Xe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ne === null && ge(e, _e);
  }
  return !1;
}
function ha(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !ht?.includes(e))
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      (o.f & be) !== 0 ? ha(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? ge(o, Fe) : (o.f & _e) !== 0 && ge(o, mt), Ot(
        /** @type {Effect} */
        o
      ));
    }
}
function va(e) {
  var t = Ae, r = Ue, n = ze, i = G, o = ht, a = De, s = et, l = It, u = e.f;
  Ae = /** @type {null | Value[]} */
  null, Ue = 0, ze = null, G = (u & (pt | qt)) === 0 ? e : null, ht = null, nr(e.ctx), et = !1, It = ++gr, e.ac !== null && (Bn(() => {
    e.ac.abort(Qt);
  }), e.ac = null);
  try {
    e.f |= yn;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), y = e.deps;
    if (Ae !== null) {
      var v;
      if (Nr(e, Ue), y !== null && Ue > 0)
        for (y.length = Ue + Ae.length, v = 0; v < Ae.length; v++)
          y[Ue + v] = Ae[v];
      else
        e.deps = y = Ae;
      if (Nt && Kr() && (e.f & Xe) !== 0)
        for (v = Ue; v < y.length; v++)
          (y[v].reactions ??= []).push(e);
    } else y !== null && Ue < y.length && (Nr(e, Ue), y.length = Ue);
    if (Xi() && ze !== null && !et && y !== null && (e.f & (be | mt | Fe)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      ze.length; v++)
        ha(
          ze[v],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (gr++, ze !== null && (n === null ? n = ze : n.push(.../** @type {Source[]} */
    ze))), (e.f & Rt) !== 0 && (e.f ^= Rt), h;
  } catch (f) {
    return ea(f);
  } finally {
    e.f ^= yn, Ae = t, Ue = r, ze = n, G = i, ht = o, nr(a), et = s, It = l;
  }
}
function dl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = So.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ae === null || !Ae.includes(t)) && (ge(t, mt), (t.f & Xe) !== 0 && (t.f ^= Xe, t.f &= ~_r), aa(
    /** @type {Derived} **/
    t
  ), Nr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Nr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      dl(e, r[n]);
}
function br(e) {
  var t = e.f;
  if ((t & Et) === 0) {
    ge(e, _e);
    var r = W, n = Nt;
    W = e, Nt = !0;
    try {
      (t & yt) !== 0 ? xl(e) : wa(e), ba(e);
      var i = va(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ca;
      var o;
      ki && Go && (e.f & Fe) !== 0 && e.deps;
    } finally {
      Nt = n, W = r;
    }
  }
}
function c(e) {
  var t = e.f, r = (t & be) !== 0;
  if (G !== null && !et) {
    var n = W !== null && (W.f & Et) !== 0;
    if (!n && !ht?.includes(e)) {
      var i = G.deps;
      if ((G.f & yn) !== 0)
        e.rv < gr && (e.rv = gr, Ae === null && i !== null && i[Ue] === e ? Ue++ : Ae === null ? Ae = [e] : Ae.includes(e) || Ae.push(e));
      else {
        (G.deps ??= []).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [G] : o.includes(G) || o.push(G);
      }
    }
  }
  if (Gt) {
    if (Tt.has(e))
      return Tt.get(e);
    if (r) {
      var a = (
        /** @type {Derived} */
        e
      ), s = a.v;
      return ((a.f & _e) === 0 && a.reactions !== null || pa(a)) && (s = Pn(a)), Tt.set(a, s), s;
    }
  } else if (r) {
    if (a = /** @type {Derived} */
    e, Ne?.has(a))
      return Ne.get(a);
    Rr(a) && oa(a), Nt && Kr() && (a.f & Xe) === 0 && ya(a);
  } else if (Ne?.has(e))
    return Ne.get(e);
  if ((e.f & Rt) !== 0)
    throw e.v;
  return e.v;
}
function ya(e) {
  if (e.deps !== null) {
    e.f ^= Xe;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & be) !== 0 && (t.f & Xe) === 0 && ya(
        /** @type {Derived} */
        t
      );
  }
}
function pa(e) {
  if (e.v === xe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tt.has(t) || (t.f & be) !== 0 && pa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Vt(e) {
  var t = et;
  try {
    return et = !0, e();
  } finally {
    et = t;
  }
}
const hl = -7169;
function ge(e, t) {
  e.f = e.f & hl | t;
}
function vl(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ut in e)
      _n(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Ut in r && _n(r);
      }
  }
}
function _n(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        _n(e[n], t);
      } catch {
      }
    const r = Fn(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = Ii(r);
      for (let i in n) {
        const o = n[i].get;
        if (o)
          try {
            o.call(e);
          } catch {
          }
      }
    }
  }
}
function ma(e) {
  W === null && (G === null && ko(), Bo()), Gt && Po();
}
function yl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ot(e, t, r, n = !0) {
  var i = W;
  i !== null && (i.f & Le) !== 0 && (e |= Le);
  var o = {
    ctx: De,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Fe | Xe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      br(o), o.f |= Gr;
    } catch (l) {
      throw Ee(o), l;
    }
  else t !== null && Ot(o);
  if (n) {
    var a = o;
    if (r && a.deps === null && a.teardown === null && a.nodes_start === null && a.first === a.last && // either `null`, or a singular child
    (a.f & or) === 0 && (a = a.first, (e & yt) !== 0 && (e & tr) !== 0 && a !== null && (a.f |= tr)), a !== null && (a.parent = i, i !== null && yl(a, i), G !== null && (G.f & be) !== 0 && (e & qt) === 0)) {
      var s = (
        /** @type {Derived} */
        G
      );
      (s.effects ??= []).push(a);
    }
  }
  return o;
}
function Kr() {
  return G !== null && !et;
}
function xa(e) {
  const t = ot(zr, null, !1);
  return ge(t, _e), t.teardown = e, t;
}
function ft(e) {
  ma();
  var t = (
    /** @type {Effect} */
    W.f
  ), r = !G && (t & pt) !== 0 && (t & Gr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      De
    );
    (n.e ??= []).push(e);
  } else
    return _a(e);
}
function _a(e) {
  return ot(Or | Pi, e, !1);
}
function mr(e) {
  return ma(), ot(zr | Pi, e, !0);
}
function pl(e) {
  $e.ensure();
  const t = ot(qt | or, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? $t(t, () => {
      Ee(t), n(void 0);
    }) : (Ee(t), n(void 0));
  });
}
function ga(e) {
  return ot(Or, e, !1);
}
function ml(e) {
  return ot(Sn | or, e, !0);
}
function kn(e, t = 0) {
  return ot(zr | t, e, !0);
}
function Ie(e, t = [], r = [], n = [], i = !1) {
  ol(n, t, r, (o) => {
    ot(i ? Or : zr, () => e(...o.map(c)), !0);
  });
}
function Qr(e, t = 0) {
  var r = ot(yt | t, e, !0);
  return r;
}
function qe(e, t = !0) {
  return ot(pt | or, e, !0, t);
}
function ba(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Gt, n = G;
    ni(!0), Se(null);
    try {
      t.call(null);
    } finally {
      ni(r), Se(n);
    }
  }
}
function wa(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Bn(() => {
      i.abort(Qt);
    });
    var n = r.next;
    (r.f & qt) !== 0 ? r.parent = null : Ee(r, t), r = n;
  }
}
function xl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & pt) === 0 && Ee(t), t = r;
  }
}
function Ee(e, t = !0) {
  var r = !1;
  (t || (e.f & Di) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (_l(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), wa(e, t && !r), Nr(e, 0), ge(e, Et);
  var n = e.transitions;
  if (n !== null)
    for (const o of n)
      o.stop();
  ba(e);
  var i = e.parent;
  i !== null && i.first !== null && Aa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function _l(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(e)
    );
    e.remove(), e = r;
  }
}
function Aa(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function $t(e, t, r = !0) {
  var n = [];
  Un(e, n, !0), Ea(n, () => {
    r && Ee(e), t && t();
  });
}
function Ea(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Un(e, t, r) {
  if ((e.f & Le) === 0) {
    if (e.f ^= Le, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var i = n.next, o = (n.f & tr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & pt) !== 0 && (e.f & yt) !== 0;
      Un(n, t, o ? r : !1), n = i;
    }
  }
}
function Nn(e) {
  Ra(e, !0);
}
function Ra(e, t) {
  if ((e.f & Le) !== 0) {
    e.f ^= Le, (e.f & _e) === 0 && (ge(e, Fe), Ot(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & tr) !== 0 || (r.f & pt) !== 0;
      Ra(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function Ta(e, t) {
  for (var r = e.nodes_start, n = e.nodes_end; r !== null; ) {
    var i = r === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(r)
    );
    t.append(r), r = i;
  }
}
const Sa = /* @__PURE__ */ new Set(), gn = /* @__PURE__ */ new Set();
function gl(e, t, r, n = {}) {
  function i(o) {
    if (n.capture || vr.call(t, o), !o.cancelBubble)
      return Bn(() => r?.call(this, o));
  }
  return sr(() => {
    t.addEventListener(e, i, n);
  }), i;
}
function bl(e, t, r, n, i) {
  var o = { capture: n, passive: i }, a = gl(e, t, r, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && xa(() => {
    t.removeEventListener(e, a, o);
  });
}
function wl(e) {
  for (var t = 0; t < e.length; t++)
    Sa.add(e[t]);
  for (var r of gn)
    r(e);
}
let ai = null;
function vr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ai = e;
  var a = 0, s = ai === e && e.__root;
  if (s) {
    var l = i.indexOf(s);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    l <= u && (a = l);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    Ni(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var d = G, h = W;
    Se(null), nt(null);
    try {
      for (var y, v = []; o !== null; ) {
        var f = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var p = o["__" + n];
          p != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && p.call(o, e);
        } catch (m) {
          y ? v.push(m) : y = m;
        }
        if (e.cancelBubble || f === t || f === null)
          break;
        o = f;
      }
      if (y) {
        for (let m of v)
          queueMicrotask(() => {
            throw m;
          });
        throw y;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Se(d), nt(h);
    }
  }
}
function Ma(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function St(e, t) {
  var r = (
    /** @type {Effect} */
    W
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ft(e, t) {
  var r = (t & Ko) !== 0, n = (t & Qo) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (H)
      return St(V, null), V;
    i === void 0 && (i = Ma(o ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ vt(i)));
    var a = (
      /** @type {TemplateNode} */
      n || Ki ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      St(s, l);
    } else
      St(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Al(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (H)
      return St(V, null), V;
    if (!o) {
      var a = (
        /** @type {DocumentFragment} */
        Ma(i)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ vt(a)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ vt(s);
    }
    var l = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return St(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function xt(e, t) {
  return /* @__PURE__ */ Al(e, t, "svg");
}
function cr() {
  if (H)
    return St(V, null), V;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = He();
  return e.append(t, r), St(t, r), e;
}
function oe(e, t) {
  if (H) {
    var r = (
      /** @type {Effect} */
      W
    );
    ((r.f & Gr) === 0 || r.nodes_end === null) && (r.nodes_end = V), Er();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const El = ["touchstart", "touchmove"];
function Rl(e) {
  return El.includes(e);
}
function xr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function Ca(e, t) {
  return Fa(e, t);
}
function Tl(e, t) {
  pn(), t.intro = t.intro ?? !1;
  const r = t.target, n = H, i = V;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vt(r)
    ); o && (o.nodeType !== lr || /** @type {Comment} */
    o.data !== Yi); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ at(o);
    if (!o)
      throw rr;
    dt(!0), Ce(
      /** @type {Comment} */
      o
    );
    const a = Fa(e, { ...t, anchor: o });
    return dt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((s) => s.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== rr && console.warn("Failed to hydrate: ", a), t.recover === !1 && No(), pn(), Ji(r), dt(!1), Ca(e, t);
  } finally {
    dt(n), Ce(i);
  }
}
const jt = /* @__PURE__ */ new Map();
function Fa(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0 }) {
  pn();
  var s = /* @__PURE__ */ new Set(), l = (h) => {
    for (var y = 0; y < h.length; y++) {
      var v = h[y];
      if (!s.has(v)) {
        s.add(v);
        var f = Rl(v);
        t.addEventListener(v, vr, { passive: f });
        var p = jt.get(v);
        p === void 0 ? (document.addEventListener(v, vr, { passive: f }), jt.set(v, 1)) : jt.set(v, p + 1);
      }
    }
  };
  l(Cn(Sa)), gn.add(l);
  var u = void 0, d = pl(() => {
    var h = r ?? t.appendChild(He());
    return il(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (y) => {
        if (o) {
          Mt({});
          var v = (
            /** @type {ComponentContext} */
            De
          );
          v.c = o;
        }
        if (i && (n.$$events = i), H && St(
          /** @type {TemplateNode} */
          y,
          null
        ), u = e(y, n) || {}, H && (W.nodes_end = V, V === null || V.nodeType !== lr || /** @type {Comment} */
        V.data !== Dn))
          throw Hr(), rr;
        o && Ct();
      }
    ), () => {
      for (var y of s) {
        t.removeEventListener(y, vr);
        var v = (
          /** @type {number} */
          jt.get(y)
        );
        --v === 0 ? (document.removeEventListener(y, vr), jt.delete(y)) : jt.set(y, v);
      }
      gn.delete(l), h !== r && h.parentNode?.removeChild(h);
    };
  });
  return bn.set(u, d), u;
}
let bn = /* @__PURE__ */ new WeakMap();
function Sl(e, t) {
  const r = bn.get(e);
  return r ? (bn.delete(e), r(t)) : Promise.resolve();
}
function Da(e) {
  return new Ml(e);
}
class Ml {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var r = /* @__PURE__ */ new Map(), n = (o, a) => {
      var s = /* @__PURE__ */ sa(a, !1, !1);
      return r.set(o, s), s;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, a) {
          return c(r.get(a) ?? n(a, Reflect.get(o, a)));
        },
        has(o, a) {
          return a === Bi ? !0 : (c(r.get(a) ?? n(a, Reflect.get(o, a))), Reflect.has(o, a));
        },
        set(o, a, s) {
          return L(r.get(a) ?? n(a, s), s), Reflect.set(o, a, s);
        }
      }
    );
    this.#e = (t.hydrate ? Tl : Ca)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && el(), this.#t = i.$$events;
    for (const o of Object.keys(this.#e))
      o === "$set" || o === "$destroy" || o === "$on" || Ni(this, o, {
        get() {
          return this.#e[o];
        },
        /** @param {any} value */
        set(a) {
          this.#e[o] = a;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, this.#e.$destroy = () => {
      Sl(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    this.#t[t] = this.#t[t] || [];
    const n = (...i) => r.call(this, ...i);
    return this.#t[t].push(n), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
const Cl = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Cl);
class Pa {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Effect>} */
  #e = /* @__PURE__ */ new Map();
  /** @type {Map<Key, Branch>} */
  #r = /* @__PURE__ */ new Map();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #n = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    this.anchor = t, this.#n = r;
  }
  #s = () => {
    var t = (
      /** @type {Batch} */
      fe
    );
    if (this.#t.has(t)) {
      var r = (
        /** @type {Key} */
        this.#t.get(t)
      ), n = this.#e.get(r);
      if (n)
        Nn(n);
      else {
        var i = this.#r.get(r);
        i && (this.#e.set(r, i.effect), this.#r.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [o, a] of this.#t) {
        if (this.#t.delete(o), o === t)
          break;
        const s = this.#r.get(a);
        s && (Ee(s.effect), this.#r.delete(a));
      }
      for (const [o, a] of this.#e) {
        if (o === r) continue;
        const s = () => {
          if (Array.from(this.#t.values()).includes(o)) {
            var u = document.createDocumentFragment();
            Ta(a, u), u.append(He()), this.#r.set(o, { effect: a, fragment: u });
          } else
            Ee(a);
          this.#e.delete(o);
        };
        this.#n || !n ? $t(a, s, !1) : s();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (t) => {
    this.#t.delete(t);
    const r = Array.from(this.#t.values());
    for (const [n, i] of this.#r)
      r.includes(n) || (Ee(i.effect), this.#r.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      fe
    ), i = $i();
    if (r && !this.#e.has(t) && !this.#r.has(t))
      if (i) {
        var o = document.createDocumentFragment(), a = He();
        o.append(a), this.#r.set(t, {
          effect: qe(() => r(a)),
          fragment: o
        });
      } else
        this.#e.set(
          t,
          qe(() => r(this.anchor))
        );
    if (this.#t.set(n, t), i) {
      for (const [s, l] of this.#e)
        s === t ? n.skipped_effects.delete(l) : n.skipped_effects.add(l);
      for (const [s, l] of this.#r)
        s === t ? n.skipped_effects.delete(l.effect) : n.skipped_effects.add(l.effect);
      n.oncommit(this.#s), n.ondiscard(this.#o);
    } else
      H && (this.anchor = V), this.#s();
  }
}
function In(e) {
  De === null && Gi(), ft(() => {
    const t = Vt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Fl(e) {
  De === null && Gi(), In(() => () => Vt(e));
}
function Te(e, t, r = !1) {
  H && Er();
  var n = new Pa(e), i = r ? tr : 0;
  function o(a, s) {
    if (H) {
      const u = ji(e) === Xr;
      if (a === u) {
        var l = kr();
        Ce(l), n.anchor = l, dt(!1), n.ensure(a, s), dt(!0);
        return;
      }
    }
    n.ensure(a, s);
  }
  Qr(() => {
    var a = !1;
    t((s, l = !0) => {
      a = !0, o(l, s);
    }), a || o(!1, null);
  }, i);
}
function Dl(e, t, r) {
  H && Er();
  var n = new Pa(e);
  Qr(() => {
    var i = t();
    n.ensure(i, r);
  });
}
function an(e, t) {
  return t;
}
function Pl(e, t, r) {
  for (var n = e.items, i = [], o = t.length, a = 0; a < o; a++)
    Un(t[a].e, i, !0);
  var s = o > 0 && i.length === 0 && r !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Ji(l), l.append(
      /** @type {Element} */
      r
    ), n.clear(), Ze(e, t[0].prev, t[o - 1].next);
  }
  Ea(i, () => {
    for (var u = 0; u < o; u++) {
      var d = t[u];
      s || (n.delete(d.k), Ze(e, d.prev, d.next)), Ee(d.e, !s);
    }
  });
}
function on(e, t, r, n, i, o = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Vi) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = H ? Ce(
      /** @type {Comment | Text} */
      /* @__PURE__ */ vt(u)
    ) : u.appendChild(He());
  }
  H && Er();
  var d = null, h = !1, y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ ia(() => {
    var g = r();
    return Ui(g) ? g : g == null ? [] : Cn(g);
  }), f, p;
  function m() {
    Bl(
      p,
      f,
      s,
      y,
      a,
      i,
      t,
      n,
      r
    ), o !== null && (f.length === 0 ? d ? Nn(d) : d = qe(() => o(a)) : d !== null && $t(d, () => {
      d = null;
    }));
  }
  Qr(() => {
    p ??= /** @type {Effect} */
    W, f = /** @type {V[]} */
    c(v);
    var g = f.length;
    if (h && g === 0)
      return;
    h = g === 0;
    let w = !1;
    if (H) {
      var _ = ji(a) === Xr;
      _ !== (g === 0) && (a = kr(), Ce(a), dt(!1), w = !0);
    }
    if (H) {
      for (var M = null, C, A = 0; A < g; A++) {
        if (V.nodeType === lr && /** @type {Comment} */
        V.data === Dn) {
          a = /** @type {Comment} */
          V, w = !0, dt(!1);
          break;
        }
        var T = f[A], D = n(T, A);
        C = wn(
          V,
          s,
          M,
          null,
          T,
          D,
          A,
          i,
          t,
          r
        ), s.items.set(D, C), M = C;
      }
      g > 0 && Ce(kr());
    }
    if (H)
      g === 0 && o && (d = qe(() => o(a)));
    else if ($i()) {
      var Q = /* @__PURE__ */ new Set(), J = (
        /** @type {Batch} */
        fe
      );
      for (A = 0; A < g; A += 1) {
        T = f[A], D = n(T, A);
        var j = s.items.get(D) ?? y.get(D);
        j ? (t & (Vr | Yr)) !== 0 && Ba(j, T, A, t) : (C = wn(
          null,
          s,
          null,
          null,
          T,
          D,
          A,
          i,
          t,
          r,
          !0
        ), y.set(D, C)), Q.add(D);
      }
      for (const [Y, ve] of s.items)
        Q.has(Y) || J.skipped_effects.add(ve.e);
      J.oncommit(m);
    } else
      m();
    w && dt(!0), c(v);
  }), H && (a = V);
}
function Bl(e, t, r, n, i, o, a, s, l) {
  var u = (a & Vo) !== 0, d = (a & (Vr | Yr)) !== 0, h = t.length, y = r.items, v = r.first, f = v, p, m = null, g, w = [], _ = [], M, C, A, T;
  if (u)
    for (T = 0; T < h; T += 1)
      M = t[T], C = s(M, T), A = y.get(C), A !== void 0 && (A.a?.measure(), (g ??= /* @__PURE__ */ new Set()).add(A));
  for (T = 0; T < h; T += 1) {
    if (M = t[T], C = s(M, T), A = y.get(C), A === void 0) {
      var D = n.get(C);
      if (D !== void 0) {
        n.delete(C), y.set(C, D);
        var Q = m ? m.next : f;
        Ze(r, m, D), Ze(r, D, Q), ln(D, Q, i), m = D;
      } else {
        var J = f ? (
          /** @type {TemplateNode} */
          f.e.nodes_start
        ) : i;
        m = wn(
          J,
          r,
          m,
          m === null ? r.first : m.next,
          M,
          C,
          T,
          o,
          a,
          l
        );
      }
      y.set(C, m), w = [], _ = [], f = m.next;
      continue;
    }
    if (d && Ba(A, M, T, a), (A.e.f & Le) !== 0 && (Nn(A.e), u && (A.a?.unfix(), (g ??= /* @__PURE__ */ new Set()).delete(A))), A !== f) {
      if (p !== void 0 && p.has(A)) {
        if (w.length < _.length) {
          var j = _[0], Y;
          m = j.prev;
          var ve = w[0], ee = w[w.length - 1];
          for (Y = 0; Y < w.length; Y += 1)
            ln(w[Y], j, i);
          for (Y = 0; Y < _.length; Y += 1)
            p.delete(_[Y]);
          Ze(r, ve.prev, ee.next), Ze(r, m, ve), Ze(r, ee, j), f = j, m = ee, T -= 1, w = [], _ = [];
        } else
          p.delete(A), ln(A, f, i), Ze(r, A.prev, A.next), Ze(r, A, m === null ? r.first : m.next), Ze(r, m, A), m = A;
        continue;
      }
      for (w = [], _ = []; f !== null && f.k !== C; )
        (f.e.f & Le) === 0 && (p ??= /* @__PURE__ */ new Set()).add(f), _.push(f), f = f.next;
      if (f === null)
        continue;
      A = f;
    }
    w.push(A), m = A, f = A.next;
  }
  if (f !== null || p !== void 0) {
    for (var ye = p === void 0 ? [] : Cn(p); f !== null; )
      (f.e.f & Le) === 0 && ye.push(f), f = f.next;
    var ie = ye.length;
    if (ie > 0) {
      var z = (a & Vi) !== 0 && h === 0 ? i : null;
      if (u) {
        for (T = 0; T < ie; T += 1)
          ye[T].a?.measure();
        for (T = 0; T < ie; T += 1)
          ye[T].a?.fix();
      }
      Pl(r, ye, z);
    }
  }
  u && sr(() => {
    if (g !== void 0)
      for (A of g)
        A.a?.apply();
  }), e.first = r.first && r.first.e, e.last = m && m.e;
  for (var ae of n.values())
    Ee(ae.e);
  n.clear();
}
function Ba(e, t, r, n) {
  (n & Vr) !== 0 && ar(e.v, t), (n & Yr) !== 0 ? ar(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function wn(e, t, r, n, i, o, a, s, l, u, d) {
  var h = (l & Vr) !== 0, y = (l & Yo) === 0, v = h ? y ? /* @__PURE__ */ sa(i, !1, !1) : zt(i) : i, f = (l & Yr) === 0 ? a : zt(a), p = {
    i: f,
    v,
    k: o,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var m = document.createDocumentFragment();
      m.append(e = He());
    }
    return p.e = qe(() => s(
      /** @type {Node} */
      e,
      v,
      f,
      u
    ), H), p.e.prev = r && r.e, p.e.next = n && n.e, r === null ? d || (t.first = p) : (r.next = p, r.e.next = p.e), n !== null && (n.prev = p, n.e.prev = p.e), p;
  } finally {
  }
}
function ln(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, o = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); o !== null && o !== n; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(o)
    );
    i.before(o), o = a;
  }
}
function Ze(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Ve(e, t, r) {
  ga(() => {
    var n = Vt(() => t(e, r?.()) || {});
    if (r && n?.update) {
      var i = !1, o = (
        /** @type {any} */
        {}
      );
      kn(() => {
        var a = r();
        vl(a), i && zi(o, a) && (o = a, n.update(a));
      }), i = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function oi(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var o = e[i];
    o != null && o !== "" && (n += " " + i + ": " + o + r);
  }
  return n;
}
function kl(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += oi(n)), i && (r += oi(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function sn(e, t = {}, r, n) {
  for (var i in r) {
    var o = r[i];
    t[i] !== o && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, n));
  }
}
function q(e, t, r, n) {
  var i = e.__style;
  if (H || i !== t) {
    var o = kl(t, n);
    (!H || o !== e.getAttribute("style")) && (o == null ? e.removeAttribute("style") : e.style.cssText = o), e.__style = t;
  } else n && (Array.isArray(n) ? (sn(e, r?.[0], n[0]), sn(e, r?.[1], n[1], "important")) : sn(e, r, n));
  return n;
}
const Ul = Symbol("is custom element"), Nl = Symbol("is html");
function S(e, t, r, n) {
  var i = Il(e);
  H && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[To] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ll(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Il(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ul]: e.nodeName.includes("-"),
      [Nl]: e.namespaceURI === Zo
    }
  );
}
var li = /* @__PURE__ */ new Map();
function Ll(e) {
  var t = e.getAttribute("is") || e.nodeName, r = li.get(t);
  if (r) return r;
  li.set(t, r = []);
  for (var n, i = e, o = Element.prototype; o !== i; ) {
    n = Ii(i);
    for (var a in n)
      n[a].set && r.push(a);
    i = Fn(i);
  }
  return r;
}
function si(e, t) {
  return e === t || e?.[Ut] === t;
}
function An(e = {}, t, r, n) {
  return ga(() => {
    var i, o;
    return kn(() => {
      i = o, o = [], Vt(() => {
        e !== r(...o) && (t(e, ...o), i && si(r(...i), e) && t(null, ...i));
      });
    }), () => {
      sr(() => {
        o && si(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
let Fr = !1;
function Ol(e) {
  var t = Fr;
  try {
    return Fr = !1, [e(), Fr];
  } finally {
    Fr = t;
  }
}
function R(e, t, r, n) {
  var i = (r & Wo) !== 0, o = (r & jo) !== 0, a = (
    /** @type {V} */
    n
  ), s = !0, l = () => (s && (s = !1, a = o ? Vt(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a), u;
  if (i) {
    var d = Ut in e || Bi in e;
    u = Jt(e, t)?.set ?? (d && t in e ? (w) => e[t] = w : void 0);
  }
  var h, y = !1;
  i ? [h, y] = Ol(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = l(), u && (Io(), u(h)));
  var v;
  if (v = () => {
    var w = (
      /** @type {V} */
      e[t]
    );
    return w === void 0 ? l() : (s = !0, w);
  }, (r & Ho) === 0)
    return v;
  if (u) {
    var f = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(w, _) {
        return arguments.length > 0 ? ((!_ || f || y) && u(_ ? v() : w), w) : v();
      })
    );
  }
  var p = !1, m = ((r & Xo) !== 0 ? jr : ia)(() => (p = !1, v()));
  i && c(m);
  var g = (
    /** @type {Effect} */
    W
  );
  return (
    /** @type {() => V} */
    (function(w, _) {
      if (arguments.length > 0) {
        const M = _ ? c(m) : i ? Bt(w) : w;
        return L(m, M), p = !0, a !== void 0 && (a = M), w;
      }
      return Gt && p || (g.f & Et) !== 0 ? m.v : c(m);
    })
  );
}
var zl = /* @__PURE__ */ xt('<g><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect></g>');
function ql(e, t) {
  Mt(t, !0);
  let r = /* @__PURE__ */ U(() => t.pointLocation(t.value.xMin, t.value.yMin)), n = /* @__PURE__ */ U(() => t.pointLocation(t.value.xMax, t.value.yMax));
  const i = 8;
  function o(m) {
    return (g) => {
      t.preventHover(!0);
      let w = [c(r).x, c(r).y, c(n).x, c(n).y];
      return {
        move: (_) => {
          let M = _.pageX - g.pageX, C = _.pageY - g.pageY, A = [M, C, M, C].map((Q, J) => w[J] + Q * m[J]), T = t.coordinateAtPoint(A[0], A[1]), D = t.coordinateAtPoint(A[2], A[3]);
          t.onChange({
            xMin: Math.min(T.x, D.x),
            xMax: Math.max(T.x, D.x),
            yMin: Math.min(T.y, D.y),
            yMax: Math.max(T.y, D.y)
          });
        },
        up: () => {
          t.preventHover(!1);
        },
        cancel: () => {
          t.preventHover(!1);
        }
      };
    };
  }
  var a = zl(), s = he(a);
  q(s, "", {}, {
    stroke: "#fff",
    fill: "rgba(128,128,128,0.25)",
    cursor: "move"
  }), Ve(s, (m, g) => Qe?.(m, g), () => ({ drag: o([1, 1, 1, 1]) }));
  var l = ne(s);
  S(l, "width", i), q(l, "", {}, {
    cursor: "ew-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ve(l, (m, g) => Qe?.(m, g), () => ({ drag: o([1, 0, 0, 0]) }));
  var u = ne(l);
  S(u, "width", i), q(u, "", {}, {
    cursor: "ew-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ve(u, (m, g) => Qe?.(m, g), () => ({ drag: o([0, 0, 1, 0]) }));
  var d = ne(u);
  S(d, "height", i), q(d, "", {}, {
    cursor: "ns-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ve(d, (m, g) => Qe?.(m, g), () => ({ drag: o([0, 1, 0, 0]) }));
  var h = ne(d);
  S(h, "height", i), q(h, "", {}, {
    cursor: "ns-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ve(h, (m, g) => Qe?.(m, g), () => ({ drag: o([0, 0, 0, 1]) }));
  var y = ne(h);
  S(y, "width", i), S(y, "height", i), q(y, "", {}, {
    cursor: "nesw-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ve(y, (m, g) => Qe?.(m, g), () => ({ drag: o([1, 1, 0, 0]) }));
  var v = ne(y);
  S(v, "width", i), S(v, "height", i), q(v, "", {}, {
    cursor: "nwse-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ve(v, (m, g) => Qe?.(m, g), () => ({ drag: o([1, 0, 0, 1]) }));
  var f = ne(v);
  S(f, "width", i), S(f, "height", i), q(f, "", {}, {
    cursor: "nwse-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ve(f, (m, g) => Qe?.(m, g), () => ({ drag: o([0, 1, 1, 0]) }));
  var p = ne(f);
  S(p, "width", i), S(p, "height", i), q(p, "", {}, {
    cursor: "nesw-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ve(p, (m, g) => Qe?.(m, g), () => ({ drag: o([0, 0, 1, 1]) })), ce(a), Ie(
    (m, g, w, _, M, C, A, T, D, Q, J, j) => {
      S(s, "x", m), S(s, "width", g), S(s, "y", w), S(s, "height", _), S(l, "x", c(r).x - i / 2), S(l, "y", M), S(l, "height", C), S(u, "x", c(n).x - i / 2), S(u, "y", A), S(u, "height", T), S(d, "x", D), S(d, "width", Q), S(d, "y", c(r).y - i / 2), S(h, "x", J), S(h, "width", j), S(h, "y", c(n).y - i / 2), S(y, "x", c(r).x - i / 2), S(y, "y", c(r).y - i / 2), S(v, "x", c(r).x - i / 2), S(v, "y", c(n).y - i / 2), S(f, "x", c(n).x - i / 2), S(f, "y", c(r).y - i / 2), S(p, "x", c(n).x - i / 2), S(p, "y", c(n).y - i / 2);
    },
    [
      () => Math.min(c(r).x, c(n).x),
      () => Math.abs(c(r).x - c(n).x),
      () => Math.min(c(r).y, c(n).y),
      () => Math.abs(c(r).y - c(n).y),
      () => Math.min(c(r).y, c(n).y),
      () => Math.abs(c(r).y - c(n).y),
      () => Math.min(c(r).y, c(n).y),
      () => Math.abs(c(r).y - c(n).y),
      () => Math.min(c(r).x, c(n).x),
      () => Math.abs(c(r).x - c(n).x),
      () => Math.min(c(r).x, c(n).x),
      () => Math.abs(c(r).x - c(n).x)
    ]
  ), oe(e, a), Ct();
}
function Gl(e, t) {
  let r = !1, n, i, o, a = 300, s = 300, l = async (d) => {
    r = !0;
    try {
      await e(d);
    } catch (h) {
      console.error(h);
    }
    if (r = !1, n !== void 0) {
      let h = n;
      n = void 0, u(h);
    }
  }, u = async (d) => {
    if (r) {
      n = d;
      return;
    }
    let h = (/* @__PURE__ */ new Date()).getTime();
    t() && (i = h);
    let y = !0;
    (i == null || h - i < s) && (y = !1), y ? (o && clearTimeout(o), o = setTimeout(() => l(d), a)) : l(d);
  };
  return u;
}
function Vl(e, t) {
  let r = e.x - t.x, n = e.y - t.y;
  return Math.sqrt(r * r + n * n);
}
function Yl(e) {
  return "M " + e.map(({ x: r, y: n }) => `${r},${n}`).join(" L ") + " Z";
}
function ka(e) {
  let t = 1 / 0, r = -1 / 0, n = 1 / 0, i = -1 / 0;
  for (let { x: o, y: a } of e)
    t = Math.min(t, o), n = Math.min(n, a), r = Math.max(r, o), i = Math.max(i, a);
  return { xMin: t, yMin: n, xMax: r, yMax: i };
}
async function Xl(e) {
  let t = JSON.stringify(e);
  return Wl(t);
}
function wt(e, t) {
  if (e === t)
    return !0;
  if (e === null || t === null || typeof e != "object" || typeof t != "object" || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (let r in e)
    if (t.hasOwnProperty(r)) {
      if (!wt(e[r], t[r]))
        return !1;
    } else
      return !1;
  return !0;
}
function Hl(e, t = 0) {
  let r = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    r = Math.imul(r ^ o, 2654435761), n = Math.imul(n ^ o, 1597334677);
  }
  return r = Math.imul(r ^ r >>> 16, 2246822507), r ^= Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(r ^ r >>> 13, 3266489909), [n >>> 0, r >>> 0];
}
function Wl(e) {
  let r = new TextEncoder().encode(e), n = Hl(r);
  return n[0].toString(16).padStart(8, "0") + n[1].toString(16).padStart(8, "0");
}
var jl = /* @__PURE__ */ xt("<path></path>");
function Kl(e, t) {
  Mt(t, !0);
  let r = /* @__PURE__ */ U(() => t.value.map(({ x: i, y: o }) => t.pointLocation(i, o)));
  var n = jl();
  q(n, "", {}, { stroke: "#fff", fill: "rgba(128,128,128,0.25)" }), Ie((i) => S(n, "d", i), [() => Yl(c(r))]), oe(e, n), Ct();
}
const Ql = {
  marquee: "M7 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1-.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75M4.75 8a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5A.75.75 0 0 0 4.75 8m14.5 0a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75M8.75 20a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5zM5 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4M21 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4",
  lasso: "M9.703 2.265A10 10 0 0 1 12 2c.79 0 1.559.092 2.297.265a.75.75 0 1 1-.343 1.46A8.5 8.5 0 0 0 12 3.5a8.6 8.6 0 0 0-1.954.225a.75.75 0 1 1-.343-1.46m-1.93 1.47a.75.75 0 0 1-.242 1.033a8.55 8.55 0 0 0-2.763 2.763a.75.75 0 1 1-1.275-.79a10.05 10.05 0 0 1 3.248-3.248a.75.75 0 0 1 1.032.243m8.454 0a.75.75 0 0 1 1.032-.242a10.05 10.05 0 0 1 3.248 3.248a.75.75 0 1 1-1.275.79a8.55 8.55 0 0 0-2.763-2.763a.75.75 0 0 1-.242-1.032m-13.06 5.41a.75.75 0 0 1 .558.901A8.5 8.5 0 0 0 3.5 12c0 .673.078 1.327.225 1.954a.75.75 0 1 1-1.46.343A10 10 0 0 1 2 12c0-.79.092-1.559.265-2.297a.75.75 0 0 1 .902-.559m17.666 0a.75.75 0 0 1 .902.558a10.1 10.1 0 0 1 0 4.595a.75.75 0 1 1-1.46-.343a8.54 8.54 0 0 0-.001-3.908a.75.75 0 0 1 .559-.902M3.736 16.226a.75.75 0 0 1 1.032.242a8.55 8.55 0 0 0 2.763 2.763a.75.75 0 0 1-.79 1.275a10.05 10.05 0 0 1-3.248-3.248a.75.75 0 0 1 .243-1.032m16.685.858a.75.75 0 1 0-1.342-.67l-.002.004l-.015.029l-.069.123a8 8 0 0 1-.289.466a9.6 9.6 0 0 1-.965 1.219c-1.17-1.073-2.756-2.006-4.74-2.006c-2.347 0-3.99 1.203-3.99 2.875S10.653 22 13 22c1.942 0 3.495-.75 4.658-1.645a11.7 11.7 0 0 1 1.315 2.01q.05.099.073.149l.017.035l.004.009a.75.75 0 0 0 1.368-.615c-.087-.183 0-.001 0-.001v-.002l-.003-.004l-.007-.015l-.024-.052l-.091-.184a13.2 13.2 0 0 0-1.538-2.337a11 11 0 0 0 1.525-2.032l.09-.162l.024-.047l.007-.014l.002-.005zM13 17.75c1.433 0 2.644.652 3.616 1.512c-.95.7-2.155 1.238-3.616 1.238c-1.973 0-2.49-.922-2.49-1.375s.517-1.375 2.49-1.375"
};
var Zl = /* @__PURE__ */ xt('<svg width="24" height="24" viewBox="0 0 24 24"><path></path></svg>'), Jl = /* @__PURE__ */ Ft("<button><!></button>");
function ui(e, t) {
  let r = R(t, "active", 3, !1);
  var n = Jl();
  n.__click = function(...s) {
    t.onClick?.apply(this, s);
  };
  let i;
  var o = he(n);
  {
    var a = (s) => {
      var l = Zl();
      q(l, "", {}, { width: "14px", height: "14px" });
      var u = he(l);
      q(u, "", {}, { fill: "currentColor" }), ce(l), Ie(() => S(u, "d", Ql[t.icon])), oe(s, l);
    };
    Te(o, (s) => {
      t.icon != null && s(a);
    });
  }
  ce(n), Ie(() => {
    S(n, "title", t.title), i = q(n, "", i, {
      border: "none",
      appearance: "none",
      background: r() ? "color-mix(in srgb, currentColor 20%, transparent)" : "none",
      "border-radius": "2px",
      height: "16px",
      width: "16px",
      padding: "0",
      margin: "0",
      "font-family": "inherit",
      "font-size": "1em",
      color: "currentColor",
      display: "flex",
      "flex-direction": "row",
      "align-items": "center",
      "justify-content": "center"
    });
  }), oe(e, n);
}
wl(["click"]);
var $l = /* @__PURE__ */ Ft('<div><div> </div> <svg height="6px"><line shape-rendering="crispEdges"></line><line shape-rendering="crispEdges"></line><line shape-rendering="crispEdges"></line></svg></div>');
function es(e, t) {
  function n(v, f) {
    let p = Math.log10(f * v), m = Math.round(p), g = [0.1, 0.2, 0.5, 1, 2, 5, 10], w = 0, _ = 1e10;
    for (let M of g) {
      let C = Math.abs(Math.log10(M) + m - p);
      C < _ && (w = M, _ = C);
    }
    return w * Math.pow(10, m);
  }
  let i = /* @__PURE__ */ U(() => n(t.distancePerPoint, 30)), o = /* @__PURE__ */ U(() => c(i) / t.distancePerPoint);
  var a = $l();
  q(a, "", {}, { display: "flex", "align-items": "center" });
  var s = he(a);
  q(s, "", {}, { "padding-right": "4px" });
  var l = he(s, !0);
  ce(s);
  var u = ne(s, 2), d = he(u);
  S(d, "x1", 1), S(d, "y1", 3), S(d, "y2", 3), q(d, "", {}, {
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-cap": "butt"
  });
  var h = ne(d);
  S(h, "x1", 1), S(h, "x2", 1), S(h, "y1", 0), S(h, "y2", 6), q(h, "", {}, { stroke: "currentColor" });
  var y = ne(h);
  S(y, "y1", 0), S(y, "y2", 6), q(y, "", {}, { stroke: "currentColor" }), ce(u), ce(a), Ie(
    (v) => {
      xr(l, v), S(u, "width", `${c(o) + 2}px`), S(d, "x2", c(o) + 1), S(y, "x1", c(o) + 1), S(y, "x2", c(o) + 1);
    },
    [() => c(i).toLocaleString()]
  ), oe(e, a);
}
var ts = /* @__PURE__ */ Ft("<div> </div>"), rs = /* @__PURE__ */ Ft('<a target="_blank"> </a> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div>', 1), ns = /* @__PURE__ */ Ft('<div><div><!></div> <div></div> <div><!> <!> <!> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div> <!> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div> <span> </span></div></div>');
function is(e, t) {
  Mt(t, !0);
  let r = R(t, "statusMessage", 3, null);
  var n = ns();
  let i;
  var o = he(n);
  let a;
  var s = he(o);
  {
    var l = (_) => {
      var M = ts();
      q(M, "", {}, { display: "inline-block" });
      var C = he(M, !0);
      ce(M), Ie(() => xr(C, r())), oe(_, M);
    };
    Te(s, (_) => {
      r() != null && _(l);
    });
  }
  ce(o);
  var u = ne(o, 2);
  q(u, "", {}, { flex: "1 1 0%" });
  var d = ne(u, 2);
  let h;
  var y = he(d);
  {
    var v = (_) => {
      var M = rs(), C = Kt(M);
      q(C, "", {}, { color: "currentColor", "text-decoration": "underline" });
      var A = he(C, !0);
      ce(C), Wi(2), Ie(() => {
        S(C, "href", t.resolvedTheme.brandingLink.href), xr(A, t.resolvedTheme.brandingLink.text);
      }), oe(_, M);
    };
    Te(y, (_) => {
      t.resolvedTheme.brandingLink != null && _(v);
    });
  }
  var f = ne(y, 2);
  {
    let _ = /* @__PURE__ */ U(() => t.selectionMode == "marquee");
    ui(f, {
      icon: "marquee",
      get active() {
        return c(_);
      },
      title: "Toggle rectangle selection mode. In normal mode, use shift + drag for rectangle selection.",
      onClick: () => t.onSelectionMode(t.selectionMode == "marquee" ? "none" : "marquee")
    });
  }
  var p = ne(f, 2);
  {
    let _ = /* @__PURE__ */ U(() => t.selectionMode == "lasso");
    ui(p, {
      icon: "lasso",
      get active() {
        return c(_);
      },
      title: "Toggle lasso selection mode. In normal mode, use shift + meta + drag for lasso selection.",
      onClick: () => t.onSelectionMode(t.selectionMode == "lasso" ? "none" : "lasso")
    });
  }
  var m = ne(p, 4);
  es(m, {
    get distancePerPoint() {
      return t.distancePerPoint;
    }
  });
  var g = ne(m, 4), w = he(g);
  ce(g), ce(d), ce(n), Ie(
    (_) => {
      i = q(n, "", i, {
        "font-size": "12px",
        "line-height": "20px",
        height: "20px",
        color: t.resolvedTheme.statusBarTextColor,
        position: "absolute",
        bottom: "0px",
        left: "0px",
        right: "0px",
        "user-select": "none",
        "font-family": t.resolvedTheme.fontFamily,
        display: "flex",
        "flex-direction": "row"
      }), a = q(o, "", a, {
        flex: "none",
        display: "flex",
        "flex-direction": "row",
        gap: "4px",
        padding: "0px 4px",
        "border-radius": "2px",
        background: t.resolvedTheme.statusBarBackgroundColor
      }), h = q(d, "", h, {
        flex: "none",
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        gap: "4px",
        padding: "0px 4px",
        "border-radius": "2px",
        background: t.resolvedTheme.statusBarBackgroundColor
      }), xr(w, `${_ ?? ""} points`);
    },
    [() => t.pointCount.toLocaleString()]
  ), oe(e, n), Ct();
}
function as(e) {
  return (t, r) => {
    let n = new e(t, r);
    return {
      ...n.update ? { update: n.update.bind(n) } : {},
      ...n.destroy ? { destroy: n.destroy.bind(n) } : {}
    };
  };
}
let un = /* @__PURE__ */ new WeakMap();
function Ua(e) {
  let t = typeof e == "function" ? e : e.class;
  if (un.has(t))
    return un.get(t);
  {
    let r = as(t);
    return un.set(t, r), r;
  }
}
function Na(e, t) {
  return typeof e == "function" ? t : { ...e.props ?? {}, ...t };
}
var os = /* @__PURE__ */ Ft("<div><div></div></div>");
function ls(e, t) {
  Mt(t, !0);
  let r = R(t, "margin", 3, 4), n, i, o = /* @__PURE__ */ U(() => Ua(t.customTooltip)), a = /* @__PURE__ */ U(() => Na(t.customTooltip, { tooltip: t.tooltip }));
  In(() => {
    mr(() => {
      let u = c(o), d = null;
      return mr(() => {
        i.style.left = "0px", i.style.top = "0px", i.style.pointerEvents = t.allowInteraction ? "all" : "none", d == null ? d = u(i, c(a)) : d.update?.(c(a));
        function h(m, g, w, _) {
          let M = t.location.x, C = t.location.y, A = 2, T = m / 2, D = g + (t.targetHeight + r());
          M - T < w && (T = M - w), M - T > _ - m && (T = M - _ + m), C - D < A && (D = -(t.targetHeight + r())), i.style.left = M - T + "px", i.style.top = C - D + "px";
        }
        let y = n.getBoundingClientRect(), { width: v, height: f } = i.getBoundingClientRect();
        h(v, f, 2, y.width - 2);
        let p = requestAnimationFrame(() => {
          p = null;
          let m = i.getBoundingClientRect();
          (m.width != v || m.height != f) && h(m.width, m.height, 2, y.width - 2);
        });
        return () => {
          p != null && cancelAnimationFrame(p);
        };
      }), () => {
        d?.destroy?.(), i.replaceChildren();
      };
    });
  });
  var s = os();
  q(s, "", {}, { position: "absolute", width: "100%" });
  var l = he(s);
  q(l, "", {}, {
    display: "flex",
    position: "absolute",
    width: "fit-content",
    height: "fit-content",
    "z-index": "100"
  }), An(l, (u) => i = u, () => i), ce(s), An(s, (u) => n = u, () => n), oe(e, s), Ct();
}
function Ln(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Ia(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Tr() {
}
var wr = 0.7, Ir = 1 / wr, er = "\\s*([+-]?\\d+)\\s*", Ar = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ss = /^#([0-9a-f]{3,8})$/, us = new RegExp(`^rgb\\(${er},${er},${er}\\)$`), fs = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`), cs = new RegExp(`^rgba\\(${er},${er},${er},${Ar}\\)$`), ds = new RegExp(`^rgba\\(${tt},${tt},${tt},${Ar}\\)$`), hs = new RegExp(`^hsl\\(${Ar},${tt},${tt}\\)$`), vs = new RegExp(`^hsla\\(${Ar},${tt},${tt},${Ar}\\)$`), fi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ln(Tr, On, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ci,
  // Deprecated! Use color.formatHex.
  formatHex: ci,
  formatHex8: ys,
  formatHsl: ps,
  formatRgb: di,
  toString: di
});
function ci() {
  return this.rgb().formatHex();
}
function ys() {
  return this.rgb().formatHex8();
}
function ps() {
  return Oa(this).formatHsl();
}
function di() {
  return this.rgb().formatRgb();
}
function On(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ss.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? hi(t) : r === 3 ? new Me(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Dr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Dr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = us.exec(e)) ? new Me(t[1], t[2], t[3], 1) : (t = fs.exec(e)) ? new Me(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = cs.exec(e)) ? Dr(t[1], t[2], t[3], t[4]) : (t = ds.exec(e)) ? Dr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hs.exec(e)) ? pi(t[1], t[2] / 100, t[3] / 100, 1) : (t = vs.exec(e)) ? pi(t[1], t[2] / 100, t[3] / 100, t[4]) : fi.hasOwnProperty(e) ? hi(fi[e]) : e === "transparent" ? new Me(NaN, NaN, NaN, 0) : null;
}
function hi(e) {
  return new Me(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Dr(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Me(e, t, r, n);
}
function ms(e) {
  return e instanceof Tr || (e = On(e)), e ? (e = e.rgb(), new Me(e.r, e.g, e.b, e.opacity)) : new Me();
}
function La(e, t, r, n) {
  return arguments.length === 1 ? ms(e) : new Me(e, t, r, n ?? 1);
}
function Me(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Ln(Me, La, Ia(Tr, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Me(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wr : Math.pow(wr, e), new Me(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Me(Lt(this.r), Lt(this.g), Lt(this.b), Lr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: vi,
  // Deprecated! Use color.formatHex.
  formatHex: vi,
  formatHex8: xs,
  formatRgb: yi,
  toString: yi
}));
function vi() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}`;
}
function xs() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}${kt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yi() {
  const e = Lr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Lt(this.r)}, ${Lt(this.g)}, ${Lt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Lr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Lt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function kt(e) {
  return e = Lt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function pi(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ye(e, t, r, n);
}
function Oa(e) {
  if (e instanceof Ye) return new Ye(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tr || (e = On(e)), !e) return new Ye();
  if (e instanceof Ye) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), o = Math.max(t, r, n), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (t === o ? a = (r - n) / s + (r < n) * 6 : r === o ? a = (n - t) / s + 2 : a = (t - r) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new Ye(a, s, l, e.opacity);
}
function _s(e, t, r, n) {
  return arguments.length === 1 ? Oa(e) : new Ye(e, t, r, n ?? 1);
}
function Ye(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Ln(Ye, _s, Ia(Tr, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Ye(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wr : Math.pow(wr, e), new Ye(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Me(
      fn(e >= 240 ? e - 240 : e + 120, i, n),
      fn(e, i, n),
      fn(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Ye(mi(this.h), Pr(this.s), Pr(this.l), Lr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Lr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${mi(this.h)}, ${Pr(this.s) * 100}%, ${Pr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function mi(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function fn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const xi = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf"
], Br = [
  "#1f77b4",
  "#aec7e8",
  "#ff7f0e",
  "#ffbb78",
  "#2ca02c",
  "#98df8a",
  "#d62728",
  "#ff9896",
  "#9467bd",
  "#c5b0d5",
  "#8c564b",
  "#c49c94",
  "#e377c2",
  "#f7b6d2",
  "#7f7f7f",
  "#c7c7c7",
  "#bcbd22",
  "#dbdb8d",
  "#17becf",
  "#9edae5"
];
function Zr(e) {
  if (e < 1 && (e = 1), e <= xi.length)
    return xi.slice(0, e);
  if (e <= Br.length)
    return Br.slice(0, e);
  {
    let t = [];
    for (let r = 0; r < e; r++)
      t[r] = Br[r % Br.length];
    return t;
  }
}
function zn(e) {
  let { r: t, g: r, b: n, opacity: i } = La(e);
  return { r: t / 255, g: r / 255, b: n / 255, a: i };
}
function za() {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1];
}
function qn(e, t) {
  return [
    e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
    e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
    e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
    e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
    e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
    e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
    e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
    e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
    e[2] * t[6] + e[5] * t[7] + e[8] * t[8]
  ];
}
function qa(e, t) {
  return [
    t[0] * e[0] + t[3] * e[1] + t[6] * e[2],
    t[1] * e[0] + t[4] * e[1] + t[7] * e[2],
    t[2] * e[0] + t[5] * e[1] + t[8] * e[2]
  ];
}
function gs(e) {
  return e[0] * e[4] * e[8] - e[0] * e[5] * e[7] - e[1] * e[3] * e[8] + e[1] * e[5] * e[6] + e[2] * e[3] * e[7] - e[2] * e[4] * e[6];
}
function Ga(e) {
  let t = gs(e);
  return [
    (e[4] * e[8] - e[5] * e[7]) / t,
    (e[2] * e[7] - e[1] * e[8]) / t,
    (e[1] * e[5] - e[2] * e[4]) / t,
    (e[5] * e[6] - e[3] * e[8]) / t,
    (e[0] * e[8] - e[2] * e[6]) / t,
    (e[2] * e[3] - e[0] * e[5]) / t,
    (e[3] * e[7] - e[4] * e[6]) / t,
    (e[1] * e[6] - e[0] * e[7]) / t,
    (e[0] * e[4] - e[1] * e[3]) / t
  ];
}
class Jr {
  viewport;
  width;
  height;
  _matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  _pixel_kx = 0;
  _pixel_bx = 0;
  _pixel_ky = 0;
  _pixel_by = 0;
  constructor(t, r, n) {
    this.viewport = t, this.width = r, this.height = n, this.updateCoefficients();
  }
  update(t, r, n) {
    this.viewport = t, this.width = r, this.height = n, this.updateCoefficients();
  }
  updateCoefficients() {
    let { x: t, y: r, scale: n } = this.viewport, i = n, o = n;
    this.width < this.height ? i *= this.height / this.width : o *= this.width / this.height, this._matrix = [i, 0, 0, 0, o, 0, -t * i, -r * o, 1], this._pixel_kx = this._matrix[0] * this.width / 2, this._pixel_bx = (this._matrix[6] + 1) * this.width / 2, this._pixel_ky = -this._matrix[4] * this.height / 2, this._pixel_by = (-this._matrix[7] + 1) * this.height / 2;
  }
  matrix() {
    return this._matrix;
  }
  pixelLocation(t, r) {
    return { x: t * this._pixel_kx + this._pixel_bx, y: r * this._pixel_ky + this._pixel_by };
  }
  coordinateAtPixel(t, r) {
    return { x: (t - this._pixel_bx) / this._pixel_kx, y: (r - this._pixel_by) / this._pixel_ky };
  }
  pixelLocationFunction() {
    let t = this._pixel_kx, r = this._pixel_ky, n = this._pixel_bx, i = this._pixel_by;
    return (o, a) => ({ x: o * t + n, y: a * r + i });
  }
  coordinateAtPixelFunction() {
    let t = this._pixel_kx, r = this._pixel_ky, n = this._pixel_bx, i = this._pixel_by;
    return (o, a) => ({ x: (o - n) / t, y: (a - i) / r });
  }
}
class En {
  _needsRun = !0;
  _inputs = /* @__PURE__ */ new Set();
  _targets = /* @__PURE__ */ new Set();
  constructor(t = []) {
    this._inputs = new Set(t);
    for (let r of this._inputs)
      r._targets.add(this);
  }
  addInput(t) {
    this._inputs.add(t), t._targets.add(this);
  }
  removeInput(t) {
    t._targets.delete(this), this._inputs.delete(t);
  }
  run() {
    if (this._needsRun) {
      for (let t of this._inputs)
        t.run();
      this.update(), this._needsRun = !1;
    }
  }
  setNeedsRunDownstream() {
    for (let t of this._targets)
      t._needsRun || (t._needsRun = !0, t.setNeedsRunDownstream());
  }
  update() {
  }
  destroy() {
    for (let t of this._inputs)
      t._targets.delete(this);
  }
}
let ur = class extends En {
  _value = null;
  setValue(t) {
    this._value !== t && (this._value = t, this.setNeedsRunDownstream());
  }
  get value() {
    return this.run(), this._value;
  }
};
class Va extends ur {
  constructor(t) {
    super([]), this.setValue(t);
  }
  get value() {
    return super.value;
  }
  set value(t) {
    this.setValue(t);
  }
}
class bs extends ur {
  fn;
  constructor(t, r) {
    super(r), this.fn = t;
  }
  update() {
    this.setValue(this.fn());
  }
}
class ws extends ur {
  fn;
  state;
  constructor(t, r) {
    super(r), this.fn = t, this.state = {};
  }
  update() {
    this.setValue(this.fn(this.state));
  }
  destroy() {
    super.destroy(), this.state.destroy && this.state.destroy(), this.state = {};
  }
}
class As extends ur {
  parent;
  condition;
  buildTrue;
  buildFalse;
  context = null;
  currentCondition = null;
  currentNode = null;
  constructor(t, r, n, i) {
    super([r]), this.parent = t, this.condition = r, this.buildTrue = n, this.buildFalse = i;
  }
  update() {
    (this.currentNode == null || this.currentCondition !== this.condition.value) && (this.currentNode && this.removeInput(this.currentNode), this.context?.destroy(), this.context = new Yt(this.parent), this.currentCondition = this.condition.value, this.currentCondition ? this.currentNode = this.buildTrue(this.context) : this.currentNode = this.buildFalse(this.context), this.addInput(this.currentNode)), this.setValue(this.currentNode.value);
  }
  destroy() {
    super.destroy(), this.context?.destroy();
  }
}
class Es extends ur {
  parent;
  input;
  build;
  cache;
  constructor(t, r, n) {
    super([r]), this.parent = t, this.input = r, this.build = n, this.cache = /* @__PURE__ */ new Map();
  }
  update() {
    let t = /* @__PURE__ */ new Set(), r = this.input.value.map((n) => {
      if (t.add(n), this.cache.has(n)) {
        let i = this.cache.get(n);
        return i.input.value = n, i.output.value;
      } else {
        let i = new Yt(this.parent), o = new Va(n), a = this.build(i, o);
        return this.cache.set(n, { context: i, input: o, output: a }), this.addInput(a), a.value;
      }
    });
    for (let [n, i] of this.cache)
      t.has(n) || (this.cache.delete(n), this.removeInput(i.output), i.context.destroy());
    this.setValue(r);
  }
  destroy() {
    super.destroy();
    for (let t of this.cache.values())
      t.context.destroy();
  }
}
class Rs extends ur {
  parent;
  input;
  cases;
  currentCase = null;
  currentNode = null;
  currentContext = null;
  constructor(t, r, n) {
    super([r]), this.parent = t, this.input = r, this.cases = n;
  }
  update() {
    (this.currentNode == null || this.input.value !== this.currentCase) && (this.currentNode && this.removeInput(this.currentNode), this.currentContext?.destroy(), this.currentContext = new Yt(this.parent), this.currentCase = this.input.value, this.currentNode = this.cases[this.currentCase](this.currentContext), this.addInput(this.currentNode)), this.setValue(this.currentNode.value);
  }
  destroy() {
    super.destroy(), this.currentContext?.destroy();
  }
}
class Yt {
  _children;
  _nodes;
  /** Creates a new dataflow context. */
  constructor(t = null) {
    this._children = /* @__PURE__ */ new Set(), this._nodes = /* @__PURE__ */ new Set(), t?._children.add(this);
  }
  /** Destroy the dataflow and all associated states. */
  destroy() {
    for (let t of this._children)
      t.destroy();
    for (let t of this._nodes)
      t.destroy();
    this._children.clear(), this._nodes.clear();
  }
  /** Creates a value node. */
  value(t) {
    let r = new Va(t);
    return this._nodes.add(r), r;
  }
  /** Creates a derived value. */
  derive(t, r) {
    let n = t.map((o) => o instanceof En ? o : this.value(o)), i = new bs(() => r(...n.map((o) => o.value)), n);
    return this._nodes.add(i), i;
  }
  /** Creates a stateful derived value. */
  statefulDerive(t, r) {
    let n = t.map((o) => o instanceof En ? o : this.value(o)), i = new ws((o) => r(o, ...n.map((a) => a.value)), n);
    return this._nodes.add(i), i;
  }
  /** Creates a true or false dataflow depending on the value of the condition. */
  if(t, r, n) {
    let i = new As(this, t, r, n);
    return this._nodes.add(i), i;
  }
  switch(t, r) {
    let n = new Rs(this, t, r);
    return this._nodes.add(n), n;
  }
  map(t, r) {
    let n = new Es(this, t, r);
    return this._nodes.add(n), n;
  }
  assertNotNull(t) {
    return t;
  }
  subgraph() {
    return new Yt(this);
  }
}
function it(e, t, r, n) {
  if (e.program == null || e.vsSource != r || e.fsSource != n) {
    e.destroy && e.destroy();
    let o = _i(t, t.VERTEX_SHADER, r), a = _i(t, t.FRAGMENT_SHADER, n), s = t.createProgram();
    if (t.attachShader(s, o), t.attachShader(s, a), t.linkProgram(s), !t.getProgramParameter(s, t.LINK_STATUS)) {
      var i = t.getProgramInfoLog(s);
      throw new Error(`failed to link program: ${i}, vertex source: ${r}, fragment source: ${n}`);
    }
    e.program = s, e.vsSource = r, e.fsSource = n, e.destroy = () => {
      t.deleteProgram(s), t.deleteShader(o), t.deleteShader(a);
    }, e.uniforms = {};
    for (let u of (r + n).matchAll(/uniform +[0-9a-zA-Z_]+ +([0-9a-zA-Z_]+) *(;|\[)/g)) {
      let d = u[1];
      e.uniforms[d] = t.getUniformLocation(s, d);
    }
  }
  return { program: e.program, uniforms: e.uniforms ?? {} };
}
function _i(e, t, r) {
  let n = e.createShader(t);
  if (e.shaderSource(n, r), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) {
    var o = e.getShaderInfoLog(n);
    throw new Error(`failed to compile shader: ${o}, source: ${r}`);
  }
  return n;
}
function rt(e, t, r, n) {
  if (e.buffer == null) {
    let i = t.createBuffer();
    e.buffer = i, e.destroy = () => {
      t.deleteBuffer(i);
    };
  }
  if (e.data !== r) {
    if (e.data = r, t.bindBuffer(t.ARRAY_BUFFER, e.buffer), r instanceof Array)
      switch (n ?? "f32") {
        case "f32":
          t.bufferData(t.ARRAY_BUFFER, new Float32Array(r), t.STATIC_DRAW);
          break;
        case "i32":
          t.bufferData(t.ARRAY_BUFFER, new Int32Array(r), t.STATIC_DRAW);
          break;
        case "u32":
          t.bufferData(t.ARRAY_BUFFER, new Uint32Array(r), t.STATIC_DRAW);
          break;
        case "i16":
          t.bufferData(t.ARRAY_BUFFER, new Int16Array(r), t.STATIC_DRAW);
          break;
        case "u16":
          t.bufferData(t.ARRAY_BUFFER, new Uint16Array(r), t.STATIC_DRAW);
          break;
        case "i8":
          t.bufferData(t.ARRAY_BUFFER, new Int8Array(r), t.STATIC_DRAW);
          break;
        case "u8":
          t.bufferData(t.ARRAY_BUFFER, new Uint8Array(r), t.STATIC_DRAW);
          break;
        default:
          throw new Error("invalid type");
      }
    else
      t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW);
    t.bindBuffer(t.ARRAY_BUFFER, null);
  }
  return e.buffer;
}
function Ts(e, t, r, n, i) {
  const o = {
    u8: {
      1: [e.R8, e.RED, e.UNSIGNED_BYTE],
      2: [e.RG8, e.RG, e.UNSIGNED_BYTE],
      3: [e.RGB8, e.RGB, e.UNSIGNED_BYTE],
      4: [e.RGBA8, e.RGBA, e.UNSIGNED_BYTE]
    },
    u16: {
      1: [e.R8, e.RED, e.UNSIGNED_SHORT],
      2: [e.RG8, e.RG, e.UNSIGNED_SHORT],
      3: [e.RGB8, e.RGB, e.UNSIGNED_SHORT],
      4: [e.RGBA8, e.RGBA, e.UNSIGNED_SHORT]
    },
    u32: {
      1: [e.R8, e.RED, e.UNSIGNED_INT],
      2: [e.RG8, e.RG, e.UNSIGNED_INT],
      3: [e.RGB8, e.RGB, e.UNSIGNED_INT],
      4: [e.RGBA8, e.RGBA, e.UNSIGNED_INT]
    },
    f32: {
      1: [e.R32F, e.RED, e.FLOAT],
      2: [e.RG32F, e.RG, e.FLOAT],
      3: [e.RGB32F, e.RGB, e.FLOAT],
      4: [e.RGBA32F, e.RGBA, e.FLOAT]
    }
  };
  let [a, s, l] = o[i][n];
  e.texImage2D(e.TEXTURE_2D, 0, a, t, r, 0, s, l, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
}
function At(e, t, r, n, i, o) {
  if (e.framebuffer == null || e.texture == null) {
    let s = t.createFramebuffer(), l = t.createTexture();
    t.bindFramebuffer(t.FRAMEBUFFER, s), t.bindTexture(t.TEXTURE_2D, l), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, l, 0), t.bindTexture(t.TEXTURE_2D, null), t.bindFramebuffer(t.FRAMEBUFFER, null), e.framebuffer = s, e.texture = l, e.destroy = () => {
      t.deleteFramebuffer(s), t.deleteTexture(l);
    };
  }
  let a = `${r},${n},${i},${o}`;
  return e.cacheKey != a && (e.cacheKey = a, t.bindTexture(t.TEXTURE_2D, e.texture), Ts(t, r, n, i, o), t.bindTexture(t.TEXTURE_2D, null)), {
    framebuffer: e.framebuffer,
    texture: e.texture,
    width: r,
    height: n
  };
}
function Ss(e) {
  let t = e.squareMaxSize, r = e.samples, n = `#version 300 es
    precision highp float;
    layout(location=0) in vec2 xy;
    out vec2 uv;
    void main() {
      gl_Position = vec4(xy, 0, 1);
      uv = (xy + 1.0) / 2.0;
    }
  `, i = `#version 300 es
    precision highp float;
    uniform sampler2D image;
    uniform vec2 resolution;
    uniform vec2 direction;
    in vec2 uv;
    out vec4 outColor;
    void main() {
      vec4 color = vec4(0.0);
      const int count = ${t};
      int i = -count;
      while(i + 1 <= count) {
        color += texture(image, uv + direction * (float(i) + 0.5) / resolution) * 2.0;
        i += 2;
      }
      if (i <= count) {
        color += texture(image, uv + direction * float(count) / resolution);
      }
      outColor = color;
    }
  `, o = `#version 300 es
    precision highp float;
    uniform sampler2D image;
    uniform sampler2D imageBox;
    uniform vec2 resolution;
    uniform float scaler;
    in vec2 uv;
    out vec4 outColor;

    void main() {
      vec4 color = texture(imageBox, uv);
      if (color != vec4(0.0)) {
        ${r.map(({ x: a, y: s, w: l }) => `color -= texture(image, uv + vec2(${a.toFixed(8)}, ${s.toFixed(8)}) / resolution) * (${l.toFixed(8)})`).join(";")};
      }
      outColor = color * scaler;
    }
  `;
  return { vertex: n, fragment1: i, fragment2: o };
}
function Ms(e, t, r) {
  let n = e.derive([r], Cs), i = e.derive([n], Ss), o = e.statefulDerive(
    [t, e.derive([i], (l) => l.vertex), e.derive([i], (l) => l.fragment1)],
    it
  ), a = e.statefulDerive(
    [t, e.derive([i], (l) => l.vertex), e.derive([i], (l) => l.fragment2)],
    it
  ), s = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive(
    [t, s, o, a, r, n],
    (l, u, d, h, y, v) => (f, p, m) => {
      let { width: g, height: w } = p;
      l.disable(l.BLEND), l.enableVertexAttribArray(0), l.bindBuffer(l.ARRAY_BUFFER, u), l.vertexAttribPointer(0, 2, l.FLOAT, !1, 0, 0), l.bindBuffer(l.ARRAY_BUFFER, null), l.useProgram(d.program), l.uniform2f(d.uniforms.resolution, g, w), l.uniform1i(d.uniforms.image, 0), l.bindFramebuffer(l.FRAMEBUFFER, p.framebuffer), l.bindTexture(l.TEXTURE_2D, f), l.uniform2f(d.uniforms.direction, 0, 1), l.drawArrays(l.TRIANGLE_STRIP, 0, 4), l.bindFramebuffer(l.FRAMEBUFFER, m.framebuffer), l.bindTexture(l.TEXTURE_2D, p.texture), l.uniform2f(d.uniforms.direction, 1, 0), l.drawArrays(l.TRIANGLE_STRIP, 0, 4), l.bindFramebuffer(l.FRAMEBUFFER, p.framebuffer), l.activeTexture(l.TEXTURE1), l.bindTexture(l.TEXTURE_2D, m.texture), l.activeTexture(l.TEXTURE0), l.bindTexture(l.TEXTURE_2D, f), l.useProgram(h.program), l.uniform2f(h.uniforms.resolution, g, w), l.uniform1i(h.uniforms.image, 0), l.uniform1i(h.uniforms.imageBox, 1);
      let _ = 1 / v.totalWeight * y * y * Math.PI;
      l.uniform1f(h.uniforms.scaler, _), l.drawArrays(l.TRIANGLE_STRIP, 0, 4), l.bindFramebuffer(l.FRAMEBUFFER, null), l.useProgram(null), l.activeTexture(l.TEXTURE1), l.bindTexture(l.TEXTURE_2D, null), l.activeTexture(l.TEXTURE0), l.bindTexture(l.TEXTURE_2D, null), l.disableVertexAttribArray(0);
    }
  );
}
function gi(e, t, r) {
  let n = Math.sqrt(t * t + r * r);
  if (n < e - Math.sqrt(2) / 2)
    return 1;
  if (n > e + Math.sqrt(2) / 2)
    return 0;
  let i = 2, o = 0;
  for (let a = 0; a < i; a++)
    for (let s = 0; s < i; s++) {
      let l = t + (a + 0.5) / i - 0.5, u = r + (s + 0.5) / i - 0.5;
      Math.sqrt(l * l + u * u) < e && (o += 1);
    }
  return o / i / i;
}
function Cs(e) {
  let t = Math.floor(e + 0.5), r = t, n = gi(e, 0, 0), i = [];
  for (let s = -t; s <= t; s++)
    for (let l = -t; l <= t; l++) {
      let u = n - gi(e, s, l);
      if (!(u <= 0))
        if (i.length > 0 && s == i[i.length - 1].x && l == i[i.length - 1].y + 1) {
          let d = i[i.length - 1].w, h = u;
          i[i.length - 1].y += 1 - d / (d + h), i[i.length - 1].w = d + h;
        } else
          i.push({ x: s, y: l, w: u });
    }
  i = i.sort((s, l) => s.y != l.y ? s.y - l.y : s.x - l.x);
  let o = [];
  for (let { x: s, y: l, w: u } of i)
    if (o.length > 0 && l == o[o.length - 1].y && s == o[o.length - 1].x + 1) {
      let d = o[o.length - 1].w, h = u;
      o[o.length - 1].x += 1 - d / (d + h), o[o.length - 1].w = d + h;
    } else
      o.push({ x: s, y: l, w: u });
  let a = -o.reduce((s, l) => s + l.w, 0);
  return a += n * (1 + r * 2) * (1 + r * 2), { squareMaxSize: r, squareWeight: n, samples: o, totalWeight: a };
}
function Fs(e) {
  let t;
  return e ? t = `#version 300 es
      precision highp float;
      uniform mat3 matrix;
      layout(location=0) in float x;
      layout(location=1) in float y;
      layout(location=2) in int category;
      out vec4 color;
      void main() {
        gl_Position = vec4(matrix * vec3(x, y, 1), 1);
        if (category == 0) {
          color = vec4(1, 0, 0, 0);
        } else if (category == 1) {
          color = vec4(0, 1, 0, 0);
        } else if (category == 2) {
          color = vec4(0, 0, 1, 0);
        } else if (category == 3) {
          color = vec4(0, 0, 0, 1);
        }
        gl_PointSize = 1.0;
      }
    ` : t = `#version 300 es
      precision highp float;
      uniform mat3 matrix;
      layout(location=0) in float x;
      layout(location=1) in float y;
      out vec4 color;
      void main() {
        gl_Position = vec4(matrix * vec3(x, y, 1), 1);
        color = vec4(1, 0, 0, 0);
        gl_PointSize = 1.0;
      }
    `, { vertex: t, fragment: `#version 300 es
    precision highp float;
    in vec4 color;
    out vec4 outColor;
    void main() {
      outColor = color;
    }
  ` };
}
function Rn(e, t, r, n, i, o) {
  let a = i != null, s = Fs(a), l = e.statefulDerive([t, s.vertex, s.fragment], it);
  return e.derive([t, l, r, n, i, o], (u, d, h, y, v, f) => (p) => {
    u.enable(u.BLEND), u.blendFunc(u.ONE, u.ONE), u.useProgram(d.program), u.enableVertexAttribArray(0), u.bindBuffer(u.ARRAY_BUFFER, h), u.vertexAttribPointer(0, 1, u.FLOAT, !1, 0, 0), u.enableVertexAttribArray(1), u.bindBuffer(u.ARRAY_BUFFER, y), u.vertexAttribPointer(1, 1, u.FLOAT, !1, 0, 0), v != null && (u.enableVertexAttribArray(2), u.bindBuffer(u.ARRAY_BUFFER, v), u.vertexAttribIPointer(2, 1, u.BYTE, 0, 0)), u.bindBuffer(u.ARRAY_BUFFER, null), u.uniformMatrix3fv(d.uniforms.matrix, !1, p), u.drawArrays(u.POINTS, 0, f), u.disableVertexAttribArray(0), u.disableVertexAttribArray(1), v != null && u.disableVertexAttribArray(2), u.useProgram(null);
  });
}
function Ds() {
  return { vertex: `#version 300 es
    precision highp float;
    uniform vec2 xyScaler;
    layout(location=0) in vec2 xy;
    out vec2 uv;
    void main() {
      gl_Position = vec4(xy * xyScaler, 0, 1);
      uv = (xy + 1.0) / 2.0;
    }
  `, fragment: `#version 300 es
    precision highp float;
    uniform sampler2D source;
    uniform float gamma;
    in vec2 uv;
    out vec4 outColor;
    void main() {
      vec4 color = texture(source, uv);
      color.rgb = pow(color.rgb, vec3(1.0 / gamma));
      outColor = color;
    }
  ` };
}
function Ya(e, t) {
  let { vertex: r, fragment: n } = Ds(), i = e.statefulDerive([t, r, n], it), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive([t, i, o], (a, s, l) => (u, d, h, y) => {
    a.disable(a.BLEND), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, l), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.bindTexture(a.TEXTURE_2D, u), a.useProgram(s.program), a.uniform1i(s.uniforms.source, 0), a.uniform2f(s.uniforms.xyScaler, h ?? 1, y ?? 1), a.uniform1f(s.uniforms.gamma, d ?? 2.2), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
  });
}
function Xa(e) {
  return Math.ceil(e * 3);
}
function Ps(e) {
  let t = Xa(e), r = [];
  for (let l = -t; l <= t; l++)
    r.push(Math.exp(-l * l / e / e / 2));
  let n = r.reduce((l, u) => l + u, 0);
  r = r.map((l) => l / n);
  let o = ks(r).map(([l, u]) => [l - t, u]), a = `#version 300 es
    precision highp float;
    layout(location=0) in vec2 xy;
    out vec2 uv;
    void main() {
      gl_Position = vec4(xy, 0, 1);
      uv = (xy + 1.0) / 2.0;
    }
  `, s = `#version 300 es
    precision highp float;
    uniform sampler2D image;
    uniform vec2 resolution;
    uniform vec2 direction;
    in vec2 uv;
    out vec4 outColor;

    void main() {
      vec4 color = vec4(0.0);
      ${o.map(([l, u]) => `color += texture(image, uv + direction * vec2(${l.toFixed(10)}) / resolution) * ${u.toFixed(10)};`).join(`
`)}
      outColor = color;
    }
  `;
  return { vertex: a, fragment: s };
}
function Bs(e, t, r) {
  let n = e.derive([r], Ps), i = e.statefulDerive(
    [t, e.derive([n], (a) => a.vertex), e.derive([n], (a) => a.fragment)],
    it
  ), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive([t, o, i, r], (a, s, l, u) => (d, h, y) => {
    let { width: v, height: f } = h;
    a.disable(a.BLEND), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, s), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.useProgram(l.program), a.uniform2f(l.uniforms.resolution, v, f), a.uniform1i(l.uniforms.image, 0), a.bindFramebuffer(a.FRAMEBUFFER, y.framebuffer), a.bindTexture(a.TEXTURE_2D, d), a.uniform2f(l.uniforms.direction, 0, 1), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.bindFramebuffer(a.FRAMEBUFFER, h.framebuffer), a.bindTexture(a.TEXTURE_2D, y.texture), a.uniform2f(l.uniforms.direction, 1, 0), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.bindFramebuffer(a.FRAMEBUFFER, null), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
  });
}
function ks(e) {
  let t = [];
  for (let r = 0; r < e.length; r += 2)
    if (r + 1 < e.length) {
      let n = e[r], i = e[r + 1], o = 1 - n / (n + i);
      if (o >= 0 && o <= 1) {
        let a = n + i;
        a != 0 && t.push([r + o, a]);
      } else
        t.push([r, e[r]]), t.push([r + 1, e[r + 1]]);
    } else
      t.push([r, e[r]]);
  return t;
}
function Us(e) {
  return Math.ceil(e * 3);
}
function Ns() {
  return { vertex: `#version 300 es
    precision highp float;
    layout(location=0) in vec2 xy;
    out vec2 uv;
    void main() {
      gl_Position = vec4(xy, 0, 1);
      uv = (xy + 1.0) / 2.0;
    }
  `, fragment: `#version 300 es
    precision highp float;
    uniform sampler2D image;
    uniform vec2 resolution;
    uniform vec2 direction;
    in vec2 uv;
    out vec4 outColor;

    uniform float weight0;
    uniform vec3 distances;
    uniform vec3 weights;

    void main() {
      vec4 color = texture(image, uv) * weight0;
      if (weights.x != 0.0) {
        color += texture(image, uv + direction * vec2(distances.x) / resolution) * weights.x;
        color += texture(image, uv - direction * vec2(distances.x) / resolution) * weights.x;
      }
      if (weights.y != 0.0) {
        color += texture(image, uv + direction * vec2(distances.y) / resolution) * weights.y;
        color += texture(image, uv - direction * vec2(distances.y) / resolution) * weights.y;
      }
      if (weights.z != 0.0) {
        color += texture(image, uv + direction * vec2(distances.z) / resolution) * weights.z;
        color += texture(image, uv - direction * vec2(distances.z) / resolution) * weights.z;
      }
      outColor = color;
    }
  ` };
}
function Is(e, t, r) {
  let { vertex: n, fragment: i } = Ns(), o = e.statefulDerive([t, n, i], it), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive([t, a, o], (s, l, u) => (d, h, y) => {
    let { width: v, height: f } = h;
    s.disable(s.BLEND), s.enableVertexAttribArray(0), s.bindBuffer(s.ARRAY_BUFFER, l), s.vertexAttribPointer(0, 2, s.FLOAT, !1, 0, 0), s.bindBuffer(s.ARRAY_BUFFER, null), s.useProgram(u.program), s.uniform2f(u.uniforms.resolution, v, f), s.uniform1i(u.uniforms.image, 0);
    let p = d, m = y, g = h;
    for (let w = 0; w < 2; w++) {
      s.uniform2f(u.uniforms.direction, w, 1 - w);
      for (let [_, M, C] of Ls) {
        s.bindFramebuffer(s.FRAMEBUFFER, m.framebuffer), s.bindTexture(s.TEXTURE_2D, p), s.uniform1fv(u.uniforms.weight0, M), s.uniform3fv(u.uniforms.distances, _), s.uniform3fv(u.uniforms.weights, C), s.drawArrays(s.TRIANGLE_STRIP, 0, 4), p = m.texture;
        let A = m;
        m = g, g = A;
      }
    }
    s.bindFramebuffer(s.FRAMEBUFFER, null), s.useProgram(null), s.bindTexture(s.TEXTURE_2D, null), s.disableVertexAttribArray(0);
  });
}
const Ls = [
  [[1, 2, 3], [0.2288468365182578], [0.18230006506971572, 0.1356122230111784, 0.06766429365997693]],
  [[2, 6, 10], [0.09116254014100238], [0.23317759354726447, 0.18385867277788717, 0.03738246360434722]],
  [[3, 10, 20], [0.2950645715317288], [0.010918865853671198, 0.23773695670296047, 0.10381189167750389]],
  [[4, 16, 30], [0.20085957073474772], [0.14463019087130788, 0.17934533765938643, 0.07559468610193185]]
];
function Os() {
  return { vertex: `#version 300 es
    precision highp float;
    layout(location=0) in vec2 xy;
    out vec2 uv;
    void main() {
      gl_Position = vec4(xy, 0, 1);
      uv = (xy + 1.0) / 2.0;
    }
  `, fragment: `#version 300 es
    precision highp float;
    uniform sampler2D source;
    uniform vec2 resolution;
    uniform float densityScaler;
    uniform float quantizationStep;
    uniform vec4 channelMask;
    uniform vec4 color;
    uniform float globalAlpha;

    in vec2 uv;
    out vec4 outColor;

    float sample_density(vec2 uv) {
      float d = dot(texture(source, uv), channelMask) * densityScaler;
      d = min(1.0, max(0.0, d));
      d = floor(d / quantizationStep);
      return d;
    }

    void main() {
      // Run the Sobel operator.
      float v = sample_density(uv);
      float v11 = sample_density(uv + vec2(-1, -1) / resolution);
      float v12 = sample_density(uv + vec2(-1,  0) / resolution);
      float v13 = sample_density(uv + vec2(-1, +1) / resolution);
      float v21 = sample_density(uv + vec2( 0, -1) / resolution);
      float v23 = sample_density(uv + vec2( 0, +1) / resolution);
      float v31 = sample_density(uv + vec2(+1, -1) / resolution);
      float v32 = sample_density(uv + vec2(+1,  0) / resolution);
      float v33 = sample_density(uv + vec2(+1, +1) / resolution);
      float gx = v11 + v12 * 2.0 + v13 - v31 - v32 * 2.0 - v33;
      float gy = v11 + v21 * 2.0 + v31 - v13 - v23 * 2.0 - v33;
      // Derive alpha value from the result.
      float alpha = length(vec2(gx, gy)) * 0.2;
      alpha = min(1.0, max(0.0, alpha));
      outColor = color * alpha * globalAlpha;
    }
  ` };
}
function zs(e, t) {
  let { vertex: r, fragment: n } = Os(), i = e.statefulDerive([t, r, n], it), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive(
    [t, i, o],
    (a, s, l) => (u, d, h, y, v, f) => {
      a.enable(a.BLEND), a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, l), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.bindTexture(a.TEXTURE_2D, u.texture), a.useProgram(s.program), a.uniform1i(s.uniforms.source, 0), a.uniform2f(s.uniforms.resolution, u.width, u.height), a.uniform1f(s.uniforms.densityScaler, d), a.uniform1f(s.uniforms.quantizationStep, h), a.uniform1f(s.uniforms.globalAlpha, y), a.uniform4fv(s.uniforms.channelMask, v), a.uniform4fv(s.uniforms.color, f), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
    }
  );
}
function qs() {
  return { vertex: `#version 300 es
    precision highp float;
    layout(location=0) in vec2 xy;
    out vec2 uv;
    void main() {
      gl_Position = vec4(xy, 0, 1);
      uv = (xy + 1.0) / 2.0;
    }
    `, fragment: `#version 300 es
    precision highp float;
    uniform sampler2D source;
    uniform vec2 resolution;
    uniform float densityScaler;
    uniform float quantizationStep;

    uniform mat4 colorMatrix;
    uniform int isDarkMode;
    uniform float globalAlpha;

    in vec2 uv;
    out vec4 outColor;

    /* Combine alphas with symmetric blending equation f(a, b) = a + b - ab. */
    float combine_alphas(vec4 alphas) {
      float r = alphas.x + alphas.y - alphas.x * alphas.y;
      r = r + alphas.z - r * alphas.z;
      r = r + alphas.w - r * alphas.w;
      return r;
    }

    void main() {
      vec4 density = texture(source, uv) * densityScaler;

      if (density.x > 1.0 || density.y > 1.0 || density.z > 1.0 || density.w > 1.0) {
        density = density / max(max(max(density.x, density.y), density.z), density.w);
      } else {
        density = floor(density / quantizationStep) * quantizationStep;
      }

      if (density.x + density.y + density.z + density.w == 0.0) {
        discard;
      }

      float alpha = combine_alphas(density);

      density *= alpha / (density.x + density.y + density.z + density.w);

      vec3 c1 = colorMatrix[0].rgb * density.x;
      vec3 c2 = colorMatrix[1].rgb * density.y;
      vec3 c3 = colorMatrix[2].rgb * density.z;
      vec3 c4 = colorMatrix[3].rgb * density.w;
      vec3 c;

      if (isDarkMode == 0) {
        c = vec3(1.0) - alpha + c1 + c2 + c3 + c4;
      } else {
        c = c1 + c2 + c3 + c4;
      }

      outColor = vec4(c, 1.0) * alpha * globalAlpha;
    }
  ` };
}
function Gs(e, t) {
  let { vertex: r, fragment: n } = qs(), i = e.statefulDerive([t, r, n], it), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive(
    [t, i, o],
    (a, s, l) => (u, d, h, y, v, f) => {
      a.enable(a.BLEND), a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, l), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.bindTexture(a.TEXTURE_2D, u.texture), a.useProgram(s.program), a.uniform1i(s.uniforms.source, 0), a.uniform2f(s.uniforms.resolution, u.width, u.height), a.uniform1f(s.uniforms.densityScaler, d), a.uniform1f(s.uniforms.quantizationStep, h), a.uniform1f(s.uniforms.globalAlpha, y), a.uniform1i(s.uniforms.isDarkMode, f == "dark" ? 1 : 0), a.uniformMatrix4fv(s.uniforms.colorMatrix, !1, v), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
    }
  );
}
function Vs(e) {
  let t;
  return e ? t = `#version 300 es
      precision highp float;
      uniform mat3 matrix;
      uniform float point_size;
      uniform float alpha;
      uniform vec4 colorScheme[64];

      layout(location=0) in float x;
      layout(location=1) in float y;
      layout(location=2) in int category;

      out vec4 color;

      void main() {
        gl_Position = vec4(matrix * vec3(x, y, 1), 1);
        if (category < 64) {
          color = colorScheme[category];
        } else {
          color = vec4(0.5, 0.5, 0.5, 1);
        }
        color *= alpha;
        gl_PointSize = point_size;
      }
    ` : t = `#version 300 es
      precision highp float;
      uniform mat3 matrix;
      uniform float point_size;
      uniform vec4 colorScheme;
      uniform float alpha;

      layout(location=0) in float x;
      layout(location=1) in float y;

      out vec4 color;

      void main() {
        gl_Position = vec4(matrix * vec3(x, y, 1), 1);
        color = colorScheme;
        color *= alpha;
        gl_PointSize = point_size;
      }
    `, { vertex: t, fragment: `#version 300 es
    precision highp float;
    uniform float point_size;
    in vec4 color;
    out vec4 outColor;
    void main() {
      float r = length(gl_PointCoord.xy - vec2(0.5, 0.5)) * point_size;
      float a = max(0.0, min(1.0, point_size / 2.0 - r));
      outColor = color * a;
    }
  ` };
}
function bi(e, t, r, n, i, o) {
  let a = i != null, s = Vs(a), l = e.statefulDerive([t, s.vertex, s.fragment], it);
  return e.derive(
    [t, l, r, n, i, o],
    (u, d, h, y, v, f) => (p, m, g, w) => {
      u.enable(u.BLEND), u.blendFunc(u.ONE, u.ONE_MINUS_SRC_ALPHA), u.useProgram(d.program), u.enableVertexAttribArray(0), u.bindBuffer(u.ARRAY_BUFFER, h), u.vertexAttribPointer(0, 1, u.FLOAT, !1, 0, 0), u.enableVertexAttribArray(1), u.bindBuffer(u.ARRAY_BUFFER, y), u.vertexAttribPointer(1, 1, u.FLOAT, !1, 0, 0), v != null && (u.enableVertexAttribArray(2), u.bindBuffer(u.ARRAY_BUFFER, v), u.vertexAttribIPointer(2, 1, u.BYTE, 0, 0)), u.bindBuffer(u.ARRAY_BUFFER, null), u.uniformMatrix3fv(d.uniforms.matrix, !1, p), u.uniform1f(d.uniforms.point_size, m * 2), u.uniform1f(d.uniforms.alpha, g), a ? u.uniform4fv(d.uniforms.colorScheme, w) : u.uniform4fv(d.uniforms.colorScheme, w.slice(0, 4)), u.drawArrays(u.POINTS, 0, f), u.disableVertexAttribArray(0), u.disableVertexAttribArray(1), v != null && u.disableVertexAttribArray(2), u.useProgram(null);
    }
  );
}
function Ys() {
  return { vertex: `#version 300 es
    precision highp float;
    layout(location=0) in vec2 xy;
    out vec2 uv;
    void main() {
      gl_Position = vec4(xy, 0, 1);
      uv = (xy + 1.0) / 2.0;
    }
  `, fragment: `#version 300 es
    precision highp float;
    uniform sampler2D source;
    uniform vec2 resolution;
    uniform mat4 colorMatrix;
    uniform float pointAlpha;
    uniform float globalAlpha;
    uniform int isDarkMode;
    in vec2 uv;
    out vec4 outColor;

    /* Combine alphas with symmetric blending equation f(a, b) = a + b - ab. */
    float combine_alphas(vec4 alphas) {
      float r = alphas.x + alphas.y - alphas.x * alphas.y;
      r = r + alphas.z - r * alphas.z;
      r = r + alphas.w - r * alphas.w;
      return r;
    }

    void main() {
      vec4 count = texture(source, uv);
      vec4 alphas = pointAlpha >= 0.999
        ? vec4(count.x > 0.0 ? 1.0 : 0.0, count.y > 0.0 ? 1.0 : 0.0, count.z > 0.0 ? 1.0 : 0.0, count.w > 0.0 ? 1.0 : 0.0)
        : vec4(1.0) - pow(vec4(1.0 - pointAlpha), count);
      float a = combine_alphas(alphas);
      if (a <= 0.0) { discard; }
      alphas *= a / (alphas.x + alphas.y + alphas.z + alphas.w);

      vec3 c1 = colorMatrix[0].rgb * alphas.x;
      vec3 c2 = colorMatrix[1].rgb * alphas.y;
      vec3 c3 = colorMatrix[2].rgb * alphas.z;
      vec3 c4 = colorMatrix[3].rgb * alphas.w;
      vec3 c;
      if (isDarkMode == 0) {
        c = vec3(1.0) - a + c1 + c2 + c3 + c4;
      } else {
        c = c1 + c2 + c3 + c4;
      }
      outColor = vec4(c, 1.0) * a * globalAlpha;
    }
  ` };
}
function Xs(e, t) {
  let { vertex: r, fragment: n } = Ys(), i = e.statefulDerive([t, r, n], it), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive(
    [t, i, o],
    (a, s, l) => (u, d, h, y, v) => {
      a.enable(a.BLEND), a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, l), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.bindTexture(a.TEXTURE_2D, u.texture), a.useProgram(s.program), a.uniform1i(s.uniforms.source, 0), a.uniform2f(s.uniforms.resolution, u.width, u.height), a.uniform1f(s.uniforms.pointAlpha, d), a.uniform1f(s.uniforms.globalAlpha, h), a.uniform1i(s.uniforms.isDarkMode, v == "dark" ? 1 : 0), a.uniformMatrix4fv(s.uniforms.colorMatrix, !1, y), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
    }
  );
}
class Hs {
  props;
  viewport;
  df;
  gl;
  renderInputs;
  dataBuffers;
  renderer;
  constructor(t, r, n) {
    this.props = {
      mode: "points",
      colorScheme: "light",
      x: new Float32Array(),
      y: new Float32Array(),
      category: null,
      categoryCount: 1,
      categoryColors: null,
      viewportX: 0,
      viewportY: 0,
      viewportScale: 1,
      pointSize: 1,
      pointAlpha: 1,
      pointsAlpha: 1,
      densityScaler: 1,
      densityBandwidth: 1,
      densityQuantizationStep: 0.1,
      contoursAlpha: 1,
      densityAlpha: 1,
      gamma: 2.2,
      width: r,
      height: n
    }, this.viewport = new Jr({ x: 0, y: 0, scale: 1 }, r, n);
    let i = new Yt(), o = i.value(t);
    this.df = i, this.gl = o, this.renderInputs = {
      mode: i.value(this.props.mode),
      colorScheme: i.value(this.props.colorScheme),
      xData: i.value(this.props.x),
      yData: i.value(this.props.y),
      categoryData: i.value(this.props.category),
      categoryCount: i.value(this.props.categoryCount),
      matrix: i.value(za()),
      width: i.value(r),
      height: i.value(n),
      pointSize: i.value(this.props.pointSize),
      densityBandwidth: i.value(this.props.densityBandwidth)
    }, this.dataBuffers = Ws(i, o, this.renderInputs), this.renderer = js(i, o, this.renderInputs, this.dataBuffers);
  }
  setProps(t) {
    let r = !1, n;
    for (n in t)
      t[n] !== this.props[n] && (this.props[n] = t[n], r = !0);
    return this.viewport.update(
      { x: this.props.viewportX, y: this.props.viewportY, scale: this.props.viewportScale },
      this.props.width,
      this.props.height
    ), this.renderInputs.mode.value = this.props.mode, this.renderInputs.colorScheme.value = this.props.colorScheme, this.renderInputs.xData.value = this.props.x, this.renderInputs.yData.value = this.props.y, this.renderInputs.categoryData.value = this.props.category, this.props.category != null ? this.renderInputs.categoryCount.value = this.props.categoryCount : this.renderInputs.categoryCount.value = 1, this.renderInputs.matrix.value = this.viewport.matrix(), this.renderInputs.width.value = this.props.width, this.renderInputs.height.value = this.props.height, this.renderInputs.pointSize.value = this.props.pointSize, this.renderInputs.densityBandwidth.value = this.props.densityBandwidth, r;
  }
  render() {
    this.renderer.value(this.props);
  }
  destroy() {
    this.df.destroy();
  }
  async densityMap(t, r, n, i) {
    let o = this.df.subgraph(), a = Zs(o, this.gl, this.dataBuffers, o.value(t), o.value(r), o.value(n)), { x: s, y: l, scale: u } = i, d = [u, 0, 0, 0, u, 0, -s * u, -l * u, 1], h = a.value(d), y = Ga(d);
    return o.destroy(), {
      data: h,
      width: t,
      height: r,
      coordinateAtPixel: (v, f) => {
        let p = v / t * 2 - 1, m = f / r * 2 - 1, g = qa([p, m, 1], y);
        return { x: g[0], y: g[1] };
      }
    };
  }
}
function Ws(e, t, r) {
  const n = e.statefulDerive([t, r.xData, "f32"], rt), i = e.statefulDerive([t, r.yData, "f32"], rt), o = e.if(
    e.derive([r.categoryData], (s) => s != null),
    (s) => s.statefulDerive([t, s.assertNotNull(r.categoryData), "u8"], rt),
    (s) => s.value(null)
  ), a = e.derive([r.xData], (s) => s.length);
  return { x: n, y: i, category: o, count: a };
}
function js(e, t, r, n) {
  return e.switch(r.mode, {
    points: (i) => Ks(i, t, r, n),
    density: (i) => Qs(i, t, r, n)
  });
}
function Ks(e, t, r, n) {
  const i = e.derive([r.categoryCount], (l) => l > 1), o = e.statefulDerive([t, r.width, r.height, 4, "f32"], At);
  let a = e.if(
    i,
    (l) => bi(l, t, n.x, n.y, l.assertNotNull(n.category), n.count),
    (l) => bi(l, t, n.x, n.y, null, n.count)
  ), s = Ya(e, t);
  return e.derive(
    [t, o, a, s, r.colorScheme, r.matrix, r.categoryCount],
    (l, u, d, h, y, v, f) => (p) => {
      let m = [], g = p.categoryColors ?? Zr(p.categoryCount);
      for (let w = 0; w < f; w++)
        if (w < g.length) {
          let { r: _, g: M, b: C } = zn(g[w]);
          _ = Math.pow(_, p.gamma), M = Math.pow(M, p.gamma), C = Math.pow(C, p.gamma), m = m.concat([_, M, C, 1]);
        } else
          m = m.concat([0.5, 0.5, 0.5, 1]);
      l.bindFramebuffer(l.FRAMEBUFFER, u.framebuffer), l.viewport(0, 0, u.width, u.height), y == "light" ? l.clearColor(1, 1, 1, 1) : l.clearColor(0, 0, 0, 1), l.clear(l.COLOR_BUFFER_BIT), d(v, Math.max(3, p.pointSize), p.pointAlpha * p.pointsAlpha, m), l.bindFramebuffer(l.FRAMEBUFFER, null), l.viewport(0, 0, p.width, p.height), h(u.texture, p.gamma);
    }
  );
}
function Qs(e, t, r, n) {
  let i = e.derive([r.densityBandwidth], (_) => Us(_) + 1), o = e.derive([r.width, i], (_, M) => _ + M * 2), a = e.derive([r.height, i], (_, M) => _ + M * 2);
  const s = e.derive([r.categoryCount], (_) => _ > 1), l = e.statefulDerive([t, o, a, 4, "f32"], At), u = e.statefulDerive([t, o, a, 4, "f32"], At), d = e.statefulDerive([t, o, a, 4, "f32"], At), h = e.statefulDerive([t, o, a, 4, "f32"], At);
  let y = e.if(
    s,
    (_) => Rn(_, t, n.x, n.y, _.assertNotNull(n.category), n.count),
    (_) => Rn(_, t, n.x, n.y, null, n.count)
  ), v = Ms(e, t, r.pointSize), f = Is(e, t, r.densityBandwidth), p = Xs(e, t), m = Gs(e, t), g = zs(e, t), w = Ya(e, t);
  return e.derive(
    [
      t,
      l,
      u,
      d,
      h,
      r.colorScheme,
      r.matrix,
      y,
      v,
      f,
      p,
      m,
      g,
      w
    ],
    (_, M, C, A, T, D, Q, J, j, Y, ve, ee, ye, ie) => (z) => {
      let ae = z.categoryColors ?? Zr(z.categoryCount), le = [];
      for (let se = 0; se < 4; se++)
        if (se < ae.length) {
          let { r: me, g: We, b: Pe } = zn(ae[se]);
          me = Math.pow(me, z.gamma), We = Math.pow(We, z.gamma), Pe = Math.pow(Pe, z.gamma), le = le.concat([me, We, Pe, 1]);
        } else
          le = le.concat([0.5, 0.5, 0.5, 1]);
      let we = z.width / C.width, K = z.height / C.height, Oe = qn([we, 0, 0, 0, K, 0, 0, 0, 1], Q);
      if (_.bindFramebuffer(_.FRAMEBUFFER, M.framebuffer), _.viewport(0, 0, M.width, M.height), _.clearColor(0, 0, 0, 0), _.clear(_.COLOR_BUFFER_BIT), J(Oe), _.bindFramebuffer(_.FRAMEBUFFER, C.framebuffer), _.viewport(0, 0, C.width, C.height), D == "light" ? _.clearColor(1, 1, 1, 1) : _.clearColor(0, 0, 0, 1), _.clear(_.COLOR_BUFFER_BIT), z.pointAlpha > 0 && z.pointsAlpha > 0 && (j(M.texture, A, T), _.bindFramebuffer(_.FRAMEBUFFER, C.framebuffer), ve(A, z.pointAlpha, z.pointsAlpha, le, D)), z.densityScaler > 0 && (z.densityAlpha > 0 || z.contoursAlpha > 0) && (Y(M.texture, A, T), _.bindFramebuffer(_.FRAMEBUFFER, C.framebuffer), z.densityAlpha > 0 && ee(
        A,
        z.densityScaler,
        z.densityQuantizationStep,
        z.densityAlpha,
        le,
        D
      ), z.contoursAlpha > 0))
        for (let se = 0; se < ae.length; se++) {
          let me = [0, 0, 0, 0];
          me[se] = 1, ye(
            A,
            z.densityScaler,
            z.densityQuantizationStep,
            z.contoursAlpha,
            me,
            le.slice(se * 4, se * 4 + 4)
          );
        }
      _.bindFramebuffer(_.FRAMEBUFFER, null), _.viewport(0, 0, z.width, z.height), ie(C.texture, z.gamma, 1 / we, 1 / K);
    }
  );
}
function Zs(e, t, r, n, i, o) {
  let a = e.derive([o], (f) => Xa(f) + 1), s = e.derive([n, a], (f, p) => f + p * 2), l = e.derive([i, a], (f, p) => f + p * 2);
  const u = e.statefulDerive([t, s, l, 1, "f32"], At), d = e.statefulDerive([t, s, l, 1, "f32"], At), h = e.statefulDerive([t, s, l, 1, "f32"], At);
  let y = Rn(e, t, r.x, r.y, null, r.count), v = Bs(e, t, o);
  return e.derive(
    [t, a, n, i, u, d, h, y, v],
    (f, p, m, g, w, _, M, C, A) => (T) => {
      let D = m / w.width, Q = g / w.height, j = qn([D, 0, 0, 0, Q, 0, 0, 0, 1], T);
      f.bindFramebuffer(f.FRAMEBUFFER, w.framebuffer), f.viewport(0, 0, w.width, w.height), f.clearColor(0, 0, 0, 0), f.clear(f.COLOR_BUFFER_BIT), C(j), A(w.texture, _, M), f.bindFramebuffer(f.FRAMEBUFFER, _.framebuffer);
      let Y = new Float32Array(m * g);
      return f.readPixels(p, p, m, g, f.RED, f.FLOAT, Y), f.bindFramebuffer(f.FRAMEBUFFER, null), Y;
    }
  );
}
class Js {
  i32View;
  u32View;
  f32View;
  offset;
  constructor(t) {
    this.i32View = new Int32Array(t), this.u32View = new Uint32Array(t), this.f32View = new Float32Array(t), this.offset = 0;
  }
  align2() {
    this.offset % 2 != 0 && (this.offset += 2 - this.offset % 2);
  }
  align4() {
    this.offset % 4 != 0 && (this.offset += 4 - this.offset % 4);
  }
  f32(t) {
    this.f32View[this.offset++] = t;
  }
  u32(t) {
    this.u32View[this.offset++] = t;
  }
  i32(t) {
    this.i32View[this.offset++] = t;
  }
  vec2f(t, r) {
    this.align2(), this.f32View[this.offset++] = t, this.f32View[this.offset++] = r;
  }
  vec3f(t, r, n) {
    this.align4(), this.f32View[this.offset++] = t, this.f32View[this.offset++] = r, this.f32View[this.offset++] = n;
  }
  vec4f(t, r, n, i) {
    this.align4(), this.f32View[this.offset++] = t, this.f32View[this.offset++] = r, this.f32View[this.offset++] = n, this.f32View[this.offset++] = i;
  }
  mat3x3f(t) {
    this.vec3f(t[0], t[1], t[2]), this.vec3f(t[3], t[4], t[5]), this.vec3f(t[6], t[7], t[8]);
  }
  byteOffset() {
    return this.offset * 4;
  }
}
function $s(e, t) {
  let n = new ArrayBuffer(4288), i = e.statefulDerive(
    [t, 4288, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX],
    Zt
  );
  return {
    buffer: i,
    update: e.derive([t, i], (o, a) => (s) => {
      let l = new Js(n);
      l.u32(s.count), l.u32(s.category_count), l.i32(s.framebuffer_width), l.i32(s.framebuffer_height), l.i32(s.density_width), l.i32(s.density_height), l.f32(s.gamma), l.f32(s.point_size), l.f32(s.point_alpha), l.f32(s.points_alpha), l.f32(s.density_scaler), l.f32(s.quantization_step), l.f32(s.density_alpha), l.f32(s.contours_alpha), l.mat3x3f(s.matrix), l.vec2f(...s.view_xy_scaler), l.vec4f(...s.kde_causal), l.vec4f(...s.kde_anticausal), l.vec4f(...s.kde_a), l.vec4f(...s.background_color);
      let u = s.gamma;
      for (let d = 0; d < Math.min(s.category_colors.length, 256); d++) {
        let { r: h, g: y, b: v, a: f } = s.category_colors[d];
        h = Math.pow(h, u), y = Math.pow(y, u), v = Math.pow(v, u), l.vec4f(h, y, v, f);
      }
      o.queue.writeBuffer(a, 0, n, 0, l.byteOffset());
    })
  };
}
const cn = 64, dn = 64;
function Ha(e, t, r, n, i, o) {
  let a = e.derive(
    [t, r, n.layouts],
    (s, l, u) => s.createComputePipeline({
      layout: s.createPipelineLayout({ bindGroupLayouts: [u.group0, u.group1, u.group2A] }),
      compute: { module: l, entryPoint: "accumulate" }
    })
  );
  return e.derive(
    [
      a,
      n.group0,
      n.group1,
      n.group2A,
      o.countBuffer,
      i.count
    ],
    (s, l, u, d, h, y) => (v) => {
      if (v.clearBuffer(h), y == 0)
        return;
      let f = v.beginComputePass();
      f.setPipeline(s), f.setBindGroup(0, l), f.setBindGroup(1, u), f.setBindGroup(2, d), y <= cn * dn ? f.dispatchWorkgroups(Math.ceil(y / cn)) : f.dispatchWorkgroups(dn, Math.ceil(y / (cn * dn))), f.end();
    }
  );
}
function eu(e) {
  const { COMPUTE: t, VERTEX: r, FRAGMENT: n } = GPUShaderStage;
  return {
    // Group 0
    group0: e.createBindGroupLayout({
      entries: [{ binding: 0, visibility: t | r | n, buffer: { type: "uniform" } }]
    }),
    // Group 1
    group1: e.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: t | r, buffer: { type: "read-only-storage" } },
        { binding: 1, visibility: t | r, buffer: { type: "read-only-storage" } },
        { binding: 2, visibility: t | r, buffer: { type: "read-only-storage" } }
      ]
    }),
    // Group 2
    group2A: e.createBindGroupLayout({
      entries: [{ binding: 0, visibility: t | n, buffer: { type: "storage" } }]
    }),
    group2B: e.createBindGroupLayout({
      entries: [
        { binding: 1, visibility: t | n, buffer: { type: "storage" } },
        { binding: 2, visibility: t | n, buffer: { type: "storage" } }
      ]
    }),
    // Group 3
    group3: e.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.FRAGMENT, sampler: { type: "non-filtering" } },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: "float" } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: "float" } }
      ]
    })
  };
}
function Wa(e, t, r, n, i) {
  let o = e.derive([t], (h) => eu(h)), a = e.derive(
    [t, o, r],
    (h, y, v) => h.createBindGroup({
      layout: y.group0,
      entries: [{ binding: 0, resource: { buffer: v } }]
    })
  ), s = e.derive(
    [t, o, n.x, n.y, n.category],
    (h, y, v, f, p) => h.createBindGroup({
      layout: y.group1,
      entries: [
        { binding: 0, resource: { buffer: v } },
        { binding: 1, resource: { buffer: f } },
        { binding: 2, resource: { buffer: p ?? v } }
      ]
    })
  ), l = e.derive(
    [t, o, i.countBuffer, i.blurBuffer],
    (h, y, v, f) => h.createBindGroup({
      layout: y.group2A,
      entries: [{ binding: 0, resource: { buffer: v } }]
    })
  ), u = e.derive(
    [t, o, i.countBuffer, i.blurBuffer],
    (h, y, v, f) => h.createBindGroup({
      layout: y.group2B,
      entries: [
        { binding: 1, resource: { buffer: v } },
        { binding: 2, resource: { buffer: f } }
      ]
    })
  ), d = e.derive(
    [t, o, i.colorTexture, i.alphaTexture],
    (h, y, v, f) => h.createBindGroup({
      layout: y.group3,
      entries: [
        { binding: 0, resource: h.createSampler({}) },
        { binding: 1, resource: v.createView() },
        { binding: 2, resource: f.createView() }
      ]
    })
  );
  return {
    layouts: o,
    group0: a,
    group1: s,
    group2A: l,
    group2B: u,
    group3: d
  };
}
function tu(e, t, r, n, i) {
  const o = e.derive(
    [t, r, n.layouts],
    (a, s, l) => a.createRenderPipeline({
      layout: a.createPipelineLayout({
        bindGroupLayouts: [l.group0, l.group1, l.group2B]
      }),
      vertex: { entryPoint: "draw_density_map_vs", module: s },
      fragment: {
        entryPoint: "draw_density_map_fs",
        module: s,
        targets: [
          {
            format: i.colorTextureFormat,
            blend: { color: { srcFactor: "one", dstFactor: "one" }, alpha: { srcFactor: "one", dstFactor: "one" } }
          },
          {
            format: i.alphaTextureFormat,
            blend: { color: { srcFactor: "one", dstFactor: "one" }, alpha: { srcFactor: "one", dstFactor: "one" } }
          }
        ]
      },
      primitive: { topology: "triangle-strip" }
    })
  );
  return e.derive(
    [
      o,
      n.group0,
      n.group1,
      n.group2B,
      i.colorTexture,
      i.alphaTexture
    ],
    (a, s, l, u, d, h) => (y) => {
      let v = y.beginRenderPass({
        colorAttachments: [
          { loadOp: "load", storeOp: "store", view: d.createView() },
          { loadOp: "load", storeOp: "store", view: h.createView() }
        ]
      });
      v.setPipeline(a), v.setBindGroup(0, s), v.setBindGroup(1, l), v.setBindGroup(2, u), v.draw(4), v.end();
    }
  );
}
function ru(e, t, r, n, i, o) {
  const a = e.derive(
    [t, r, n.layouts],
    (s, l, u) => s.createRenderPipeline({
      layout: s.createPipelineLayout({ bindGroupLayouts: [u.group0, u.group1] }),
      vertex: { entryPoint: "points_vs", module: l },
      fragment: {
        entryPoint: "points_fs",
        module: l,
        targets: [
          {
            format: o.colorTextureFormat,
            blend: { color: { srcFactor: "one", dstFactor: "one" }, alpha: { srcFactor: "one", dstFactor: "one" } }
          },
          {
            format: o.alphaTextureFormat,
            blend: { color: { srcFactor: "one", dstFactor: "one" }, alpha: { srcFactor: "one", dstFactor: "one" } }
          }
        ]
      },
      primitive: { topology: "triangle-strip" }
    })
  );
  return e.derive(
    [
      a,
      n.group0,
      n.group1,
      i.count,
      o.colorTexture,
      o.alphaTexture
    ],
    (s, l, u, d, h, y) => (v) => {
      let f = v.beginRenderPass({
        colorAttachments: [
          { clearValue: [0, 0, 0, 0], loadOp: "clear", storeOp: "store", view: h.createView() },
          { clearValue: [0, 0, 0, 0], loadOp: "clear", storeOp: "store", view: y.createView() }
        ]
      });
      f.setPipeline(s), f.setBindGroup(0, l), f.setBindGroup(1, u), d > 0 && f.draw(4, d), f.end();
    }
  );
}
function nu(e, t, r, n, i) {
  const o = e.derive(
    [t, r, i.layouts],
    (a, s, l) => a.createRenderPipeline({
      layout: a.createPipelineLayout({
        bindGroupLayouts: [l.group0, l.group1, l.group2B, l.group3]
      }),
      vertex: { entryPoint: "gamma_correction_vs", module: s },
      fragment: { entryPoint: "gamma_correction_fs", module: s, targets: [{ format: n }] },
      primitive: { topology: "triangle-strip" }
    })
  );
  return e.derive(
    [o, i.group0, i.group1, i.group2B, i.group3],
    (a, s, l, u, d) => (h, y) => {
      let v = h.beginRenderPass({
        colorAttachments: [{ clearValue: [1, 1, 1, 1], loadOp: "clear", storeOp: "store", view: y }]
      });
      v.setPipeline(a), v.setBindGroup(0, s), v.setBindGroup(1, l), v.setBindGroup(2, u), v.setBindGroup(3, d), v.draw(4), v.end();
    }
  );
}
const wi = 64;
function ja(e, t, r, n, i, o, a) {
  let s = e.derive(
    [t, r, n.layouts],
    (u, d, h) => u.createComputePipeline({
      layout: u.createPipelineLayout({
        bindGroupLayouts: [h.group0, h.group1, h.group2B, h.group3]
      }),
      compute: { module: d, entryPoint: "gaussian_blur_stage_1" }
    })
  ), l = e.derive(
    [t, r, n.layouts],
    (u, d, h) => u.createComputePipeline({
      layout: u.createPipelineLayout({
        bindGroupLayouts: [h.group0, h.group1, h.group2B, h.group3]
      }),
      compute: { module: d, entryPoint: "gaussian_blur_stage_2" }
    })
  );
  return e.derive(
    [
      s,
      l,
      n.group0,
      n.group1,
      n.group2B,
      n.group3,
      i,
      o,
      a
    ],
    (u, d, h, y, v, f, p, m, g) => (w) => {
      let _ = w.beginComputePass();
      _.setBindGroup(0, h), _.setBindGroup(1, y), _.setBindGroup(2, v), _.setBindGroup(3, f), _.setPipeline(u), _.dispatchWorkgroups(Math.ceil(p / wi), g), _.setPipeline(d), _.dispatchWorkgroups(Math.ceil(m / wi), g), _.end();
    }
  );
}
function iu(e, t = !1) {
  const r = new Float64Array(5), n = new Float64Array(4);
  au(r, n, e);
  const i = Float64Array.of(
    0,
    n[1] - r[1] * n[0],
    n[2] - r[2] * n[0],
    n[3] - r[3] * n[0],
    -r[4] * n[0]
  ), o = 1 + r[1] + r[2] + r[3] + r[4], a = (n[0] + n[1] + n[2] + n[3]) / o, s = (i[1] + i[2] + i[3] + i[4]) / o;
  return {
    sigma: e,
    negative: t,
    a: r,
    b_causal: n,
    b_anticausal: i,
    sum_causal: a,
    sum_anticausal: s
  };
}
function au(e, t, r) {
  const i = Float64Array.of(
    0.84,
    1.8675,
    0.84,
    -1.8675,
    -0.34015,
    -0.1299,
    -0.34015,
    0.1299
  ), o = Math.exp(-1.783 / r), a = Math.exp(-1.723 / r), s = 0.6318 / r, l = 1.997 / r, u = Float64Array.of(
    -o * Math.cos(s),
    o * Math.sin(s),
    -o * Math.cos(-s),
    o * Math.sin(-s),
    -a * Math.cos(l),
    a * Math.sin(l),
    -a * Math.cos(-l),
    a * Math.sin(-l)
  ), d = r * 2.5066282746310007, h = Float64Array.of(i[0], i[1], 0, 0, 0, 0, 0, 0), y = Float64Array.of(1, 0, u[0], u[1], 0, 0, 0, 0, 0, 0);
  let v, f;
  for (f = 2; f < 8; f += 2) {
    for (h[f] = u[f] * h[f - 2] - u[f + 1] * h[f - 1], h[f + 1] = u[f] * h[f - 1] + u[f + 1] * h[f - 2], v = f - 2; v > 0; v -= 2)
      h[v] += u[f] * h[v - 2] - u[f + 1] * h[v - 1], h[v + 1] += u[f] * h[v - 1] + u[f + 1] * h[v - 2];
    for (v = 0; v <= f; v += 2)
      h[v] += i[f] * y[v] - i[f + 1] * y[v + 1], h[v + 1] += i[f] * y[v + 1] + i[f + 1] * y[v];
    for (y[f + 2] = u[f] * y[f] - u[f + 1] * y[f + 1], y[f + 3] = u[f] * y[f + 1] + u[f + 1] * y[f], v = f; v > 0; v -= 2)
      y[v] += u[f] * y[v - 2] - u[f + 1] * y[v - 1], y[v + 1] += u[f] * y[v - 1] + u[f + 1] * y[v - 2];
  }
  for (f = 0; f < 4; ++f)
    v = f << 1, t[f] = h[v] / d, e[f + 1] = y[v + 2];
}
function Ka(e) {
  let t = iu(e);
  return {
    kde_causal: [t.b_causal[0], t.b_causal[1], t.b_causal[2], t.b_causal[3]],
    kde_anticausal: [t.b_anticausal[1], t.b_anticausal[2], t.b_anticausal[3], t.b_anticausal[4]],
    kde_a: [t.a[1], t.a[2], t.a[3], t.a[4]]
  };
}
const ou = `// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

enable f16;

struct Uniforms {
  count: u32,
  category_count: u32,
  framebuffer_width: i32,
  framebuffer_height: i32,
  density_width: i32,
  density_height: i32,
  gamma: f32,
  point_size: f32,
  point_alpha: f32,
  points_alpha: f32,
  density_scaler: f32,
  quantization_step: f32,
  density_alpha: f32,
  contours_alpha: f32,
  matrix: mat3x3<f32>,
  view_xy_scaler: vec2<f32>,
  kde_causal: vec4<f32>,
  kde_anticausal: vec4<f32>,
  kde_a: vec4<f32>,
  background_color: vec4<f32>,
  category_colors: array<vec4<f32>, 256>,
}

struct PointData {
  position: vec3<f32>,
  category: u32,
}

struct FragmentOutput {
  @location(0) color: vec4<f32>,
  @location(1) log1malpha: f32, // log(1 - alpha)
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

@group(1) @binding(0) var<storage, read> x_buffer: array<f32>;
@group(1) @binding(1) var<storage, read> y_buffer: array<f32>;
@group(1) @binding(2) var<storage, read> category_buffer: array<u32>;

@group(2) @binding(0) var<storage, read_write> count_buffer: array<atomic<u32>>;
@group(2) @binding(1) var<storage, read_write> blur_buffer: array<f16>;
@group(2) @binding(2) var<storage, read_write> blur_swap_buffer: array<f16>;

@group(3) @binding(0) var framebuffer_sampler: sampler;
@group(3) @binding(1) var color_texture: texture_2d<f32>;
@group(3) @binding(2) var log1malpha_texture: texture_2d<f32>;

fn get_point(index: u32) -> PointData {
  var result: PointData;
  result.position = vec3(x_buffer[index], y_buffer[index], 1.0);
  if (uniforms.category_count > 1) {
    result.category = (category_buffer[index >> 2] >> ((index & 3) << 3)) & 0xff;
  } else {
    result.category = 0;
  }
  return result;
}

const ACCUMULATE_UNIT: u32 = 4096;

fn increment_count(x: i32, y: i32, category: u32, value: u32) {
  let width = uniforms.density_width;
  let height = uniforms.density_height;
  if (x < 0 || x >= width || y < 0 || y >= height || category >= uniforms.category_count || value == 0) {
    return;
  }
  let offset = (y * width + x) + i32(category) * (width * height);
  atomicAdd(&count_buffer[offset], value);
}

@compute @workgroup_size(64, 1)
fn accumulate(@builtin(global_invocation_id) id: vec3<u32>) {
  let width = uniforms.density_width;
  let height = uniforms.density_height;
  let index = id.y * 4096 + id.x; // 4096 = 64 * 64
  if (index >= uniforms.count) { return; }
  let point = get_point(index);
  let pos = uniforms.matrix * point.position;
  let x = (pos.x + 1.0) / 2.0 * f32(width) - 0.5;
  let y = (pos.y + 1.0) / 2.0 * f32(height) - 0.5;
  let ix = i32(x);
  let iy = i32(y);
  let tx = x - f32(ix);
  let ty = y - f32(iy);
  let w1: u32 = u32((1 - tx) * (1 - ty) * f32(ACCUMULATE_UNIT));
  let w2: u32 = u32(tx * (1 - ty) * f32(ACCUMULATE_UNIT));
  let w3: u32 = u32((1 - tx) * ty * f32(ACCUMULATE_UNIT));
  let w123 = w1 + w2 + w3;
  var w4: u32 = select(0, ACCUMULATE_UNIT - w123, w123 < ACCUMULATE_UNIT);
  increment_count(ix, iy, point.category, w1);
  increment_count(ix + 1, iy, point.category, w2);
  increment_count(ix, iy + 1, point.category, w3);
  increment_count(ix + 1, iy + 1, point.category, w4);
}

// Draw Discrete Points

struct PointsVertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) dp: vec3<f32>,
  @location(1) color: vec4<f32>,
}

@vertex
fn points_vs(
  @builtin(instance_index) index: u32,
  @builtin(vertex_index) part: u32,
) -> PointsVertexOutput {
  let framebuffer_size = vec2(f32(uniforms.framebuffer_width), f32(uniforms.framebuffer_height));
  let alpha = uniforms.point_alpha * uniforms.points_alpha;
  let dp = vec2<f32>(f32(part % 2), f32(part / 2)) * 2.0 - 1.0;
  let point = get_point(index);
  let pos = uniforms.matrix * point.position;

  var out: PointsVertexOutput;
  out.position = vec4<f32>(pos.xy + dp * uniforms.point_size / framebuffer_size * 2.0, 0.0, 1.0);
  out.dp = vec3(dp, uniforms.point_size);
  out.color = uniforms.category_colors[point.category] * alpha;
  return out;
}

@fragment
fn points_fs(in: PointsVertexOutput) -> FragmentOutput {
  let r = length(in.dp.xy) * in.dp.z;
  let a = max(0.0, min(1.0, in.dp.z - r));
  var out: FragmentOutput;
  out.color = in.color * a;
  out.log1malpha = log(1 - out.color.a);
  return out;
}

// Draw Density Map

struct DrawDensityMapVertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) texture_coord: vec2<f32>,
}

@vertex
fn draw_density_map_vs(
  @builtin(vertex_index) part: u32,
) -> DrawDensityMapVertexOutput {
  let framebuffer_size = vec2(f32(uniforms.framebuffer_width), f32(uniforms.framebuffer_height));
  let dp = vec2<f32>(f32(part % 2), f32(part / 2)) * 2.0 - 1.0;
  var out: DrawDensityMapVertexOutput;
  out.position = vec4(dp, 0.0, 1.0);
  out.texture_coord = (vec2(dp.x, dp.y) + 1.0) / 2.0 * framebuffer_size;
  return out;
}

fn get_density_raw(x: i32, y: i32, category: u32) -> f32 {
  let width = uniforms.density_width;
  let height = uniforms.density_height;
  let density_scaler = uniforms.density_scaler;
  if (x < 0 || x >= width || y < 0 || y >= height) {
    return 0.0;
  }
  let offset = (y * width + x) + i32(category) * (width * height);
  return max(0.0, f32(blur_buffer[offset]) * density_scaler);
}

fn get_density(x: f32, y: f32, category: u32) -> f32 {
  let px = x / f32(uniforms.framebuffer_width) * f32(uniforms.density_width) - 0.5;
  let py = y / f32(uniforms.framebuffer_height) * f32(uniforms.density_height) - 0.5;
  let ix = i32(px);
  let iy = i32(py);
  let tx = px - f32(ix);
  let ty = py - f32(iy);
  let v00 = get_density_raw(ix, iy, category);
  let v10 = get_density_raw(ix + 1, iy, category);
  let v01 = get_density_raw(ix, iy + 1, category);
  let v11 = get_density_raw(ix + 1, iy + 1, category);
  return mix(mix(v00, v10, tx), mix(v01, v11, tx), ty);
}

fn get_density_quantized(x: f32, y: f32, category: u32) -> f32 {
  let v = get_density(x, y, category);
  return floor(clamp(v, 0, 1) / uniforms.quantization_step);
}

fn get_density_quantized_sobel(x: f32, y: f32, category: u32) -> vec2<f32> {
  let v11 = get_density_quantized(x - 1, y - 1, category);
  let v21 = get_density_quantized(x, y - 1, category);
  let v31 = get_density_quantized(x + 1, y - 1, category);
  let v12 = get_density_quantized(x - 1, y, category);
  let v22 = get_density_quantized(x, y, category);
  let v32 = get_density_quantized(x + 1, y, category);
  let v13 = get_density_quantized(x - 1, y + 1, category);
  let v23 = get_density_quantized(x, y + 1, category);
  let v33 = get_density_quantized(x + 1, y + 1, category);
  let gx = v11 + v12 * 2.0 + v13 - v31 - v32 * 2.0 - v33;
  let gy = v11 + v21 * 2.0 + v31 - v13 - v23 * 2.0 - v33;
  return vec2(gx, gy);
}

@fragment
fn draw_density_map_fs(in: DrawDensityMapVertexOutput) -> FragmentOutput {
  let px = in.texture_coord.x;
  let py = in.texture_coord.y;
  let quantization_step: f32 = uniforms.quantization_step;

  var sum_color: vec4<f32> = vec4(0);
  var sum_log1malpha: f32 = 0.0;

  for (var i: u32 = 0; i < uniforms.category_count; i++) {
    let density = get_density(px, py, i);
    var alpha = min(1.0, floor(density / quantization_step) * quantization_step);
    alpha *= uniforms.density_alpha;
    let color = uniforms.category_colors[i] * alpha;
    sum_color += color;
    sum_log1malpha += log(1 - color.a);
  }

  if (uniforms.contours_alpha > 0.0) {
    for (var i: u32 = 0; i < uniforms.category_count; i++) {
      let sobel = get_density_quantized_sobel(px, py, i);
      let alpha = clamp(length(sobel) * 0.2, 0.0, 1.0) * uniforms.contours_alpha;
      let color = uniforms.category_colors[i] * alpha;
      sum_color += color;
      sum_log1malpha += log(1 - color.a);
    }
  }

  var out: FragmentOutput;
  out.color = sum_color;
  out.log1malpha = sum_log1malpha;
  return out;
}

// Gamma Correction

struct GammaCorrectionVertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) texture_coord: vec2<f32>,
}

@vertex
fn gamma_correction_vs(
  @builtin(vertex_index) part: u32,
) -> GammaCorrectionVertexOutput {
  let dp = vec2<f32>(f32(part % 2), f32(part / 2)) * 2.0 - 1.0;
  var out: GammaCorrectionVertexOutput;
  out.position = vec4(dp * uniforms.view_xy_scaler, 0.0, 1.0);
  out.texture_coord = (vec2(dp.x, -dp.y) + 1.0) / 2.0;
  return out;
}

@fragment
fn gamma_correction_fs(in: GammaCorrectionVertexOutput) -> @location(0) vec4<f32> {
  let sum_color = textureSample(color_texture, framebuffer_sampler, in.texture_coord);
  let sum_log_one_minus_alpha = textureSample(log1malpha_texture, framebuffer_sampler, in.texture_coord).r;
  var color: vec4<f32>;
  if (sum_color.a > 0.0) {
    color = sum_color / sum_color.a * (1.0 - exp(sum_log_one_minus_alpha));
    color = color + uniforms.background_color * (1 - color.a);
  } else {
    color = uniforms.background_color;
  }
  let rgb = pow(color.rgb, vec3(1.0 / uniforms.gamma));
  return vec4(rgb, 1.0);
}

// Gaussian Blur

@compute @workgroup_size(64, 1)
fn gaussian_blur_stage_1(@builtin(global_invocation_id) id: vec3<u32>) {
  let width = uniforms.density_width;
  let height = uniforms.density_height;
  let x = id.x;
  if (x >= u32(width)) { return; }
  let start = x + id.y * u32(width * height);
  let count = u32(height);
  let stride = u32(width);

  deriche_conv_1d(
    &blur_buffer, &blur_swap_buffer, start, stride, count,
    uniforms.kde_causal, uniforms.kde_anticausal, uniforms.kde_a,
    true
  );
}

@compute @workgroup_size(64, 1)
fn gaussian_blur_stage_2(@builtin(global_invocation_id) id: vec3<u32>) {
  let width = uniforms.density_width;
  let height = uniforms.density_height;
  let y = id.x;
  if (y >= u32(height)) { return; }
  let start = y * u32(width) + id.y * u32(width * height);
  let count = u32(width);
  let stride = u32(1);

  deriche_conv_1d(
    &blur_swap_buffer, &blur_buffer, start, stride, count,
    uniforms.kde_causal, uniforms.kde_anticausal, uniforms.kde_a,
    false
  );
}

fn deriche_conv_1d(
    src: ptr<storage, array<f16>, read_write>,
    dst: ptr<storage, array<f16>, read_write>,
    start: u32, stride: u32, count: u32,
    kde_causal: vec4<f32>, kde_anticausal: vec4<f32>, kde_a: vec4<f32>,
    src_is_u32: bool
) {
  var s: vec4<f32> = vec4(0.0);
  var y0: f32 = 0.0;
  var y1234: vec4<f32> = vec4(0.0);

  var first_nonzero: u32 = count;
  var last_nonzero: u32 = 0;

  for (var i: u32 = 0; i < count; i++) {
    let offset = start + i * stride;
    var input: f32;
    if (src_is_u32) {
      input = f32(bitcast<u32>(vec2((*src)[offset * 2], (*src)[offset * 2 + 1]))) / f32(ACCUMULATE_UNIT);
    } else {
      input = f32((*src)[offset]);
    }
    if (input != 0.0) {
      first_nonzero = min(i, first_nonzero);
      last_nonzero = max(i, last_nonzero);
    }
    s = vec4(input, s.xyz);
    y1234 = vec4(y0, y1234.xyz);
    y0 = dot(kde_causal, s) - dot(kde_a, y1234);
    (*dst)[offset] = f16(y0);
  }

  if (first_nonzero > last_nonzero) {
    return;
  }

  s = vec4(0.0);
  y0 = 0.0;
  y1234 = vec4(0.0);

  for (var i: u32 = count - 1 - last_nonzero; i < count; i++) {
    let p = count - 1 - i;
    let offset = start + p * stride;
    var input: f32 = 0.0;
    if (p >= first_nonzero) {
      if (src_is_u32) {
        input = f32(bitcast<u32>(vec2((*src)[offset * 2], (*src)[offset * 2 + 1]))) / f32(ACCUMULATE_UNIT);
      } else {
        input = f32((*src)[offset]);
      }
    }
    y1234 = vec4(y0, y1234.xyz);
    y0 = dot(kde_anticausal, s) - dot(kde_a, y1234);
    s = vec4(input, s.xyz);
    if (y0 != 0.0) {
      (*dst)[offset] = f16(f32((*dst)[offset]) + y0);
    }
  }
}
`;
class lu {
  props;
  viewport;
  df;
  device;
  module;
  uniforms;
  context;
  renderInputs;
  dataBuffers;
  renderer;
  constructor(t, r, n, i, o) {
    this.context = t, this.props = {
      mode: "points",
      colorScheme: "light",
      x: new Float32Array(),
      y: new Float32Array(),
      category: null,
      categoryCount: 1,
      categoryColors: null,
      viewportX: 0,
      viewportY: 0,
      viewportScale: 1,
      pointSize: 1,
      pointAlpha: 1,
      pointsAlpha: 1,
      densityScaler: 1,
      densityBandwidth: 1,
      densityQuantizationStep: 0.1,
      contoursAlpha: 1,
      densityAlpha: 1,
      gamma: 2.2,
      width: i,
      height: o
    }, this.viewport = new Jr({ x: 0, y: 0, scale: 1 }, i, o), this.df = new Yt();
    let a = this.df;
    this.renderInputs = {
      mode: a.value(this.props.mode),
      colorScheme: a.value(this.props.colorScheme),
      xData: a.value(this.props.x),
      yData: a.value(this.props.y),
      categoryData: a.value(this.props.category),
      categoryCount: a.value(this.props.categoryCount),
      categoryColors: a.value(this.props.categoryColors),
      matrix: a.value(za()),
      width: a.value(i),
      height: a.value(o),
      pointSize: a.value(this.props.pointSize),
      densityBandwidth: a.value(this.props.densityBandwidth)
    }, this.device = a.value(r), this.dataBuffers = su(a, this.device, this.renderInputs), this.module = a.derive([this.device], (s) => s.createShaderModule({ code: ou })), this.uniforms = $s(a, this.device), this.renderer = uu(
      a,
      this.device,
      this.module,
      this.uniforms,
      n,
      this.renderInputs,
      this.dataBuffers
    );
  }
  setProps(t) {
    let r = !1, n;
    for (n in t)
      t[n] !== this.props[n] && (this.props[n] = t[n], r = !0);
    return this.viewport.update(
      { x: this.props.viewportX, y: this.props.viewportY, scale: this.props.viewportScale },
      this.props.width,
      this.props.height
    ), this.renderInputs.mode.value = this.props.mode, this.renderInputs.colorScheme.value = this.props.colorScheme, this.renderInputs.xData.value = this.props.x, this.renderInputs.yData.value = this.props.y, this.renderInputs.categoryData.value = this.props.category, this.renderInputs.categoryColors.value = this.props.categoryColors, this.props.category != null ? this.renderInputs.categoryCount.value = this.props.categoryCount : this.renderInputs.categoryCount.value = 1, this.renderInputs.matrix.value = this.viewport.matrix(), this.renderInputs.width.value = this.props.width, this.renderInputs.height.value = this.props.height, this.renderInputs.pointSize.value = this.props.pointSize, this.renderInputs.densityBandwidth.value = this.props.densityBandwidth, r;
  }
  render() {
    this.renderer.value(this.props, this.context.getCurrentTexture().createView());
  }
  destroy() {
    this.df.destroy();
  }
  async densityMap(t, r, n, i) {
    let o = this.df.subgraph(), { x: a, y: s, scale: l } = i, u = [l, 0, 0, 0, l, 0, -a * l, -s * l, 1], d = Ga(u), y = await fu(
      o,
      this.device,
      this.module,
      this.uniforms,
      o.value(t),
      o.value(r),
      o.value(n),
      o.value(u),
      this.dataBuffers
    ).value();
    return o.destroy(), {
      data: y,
      width: t,
      height: r,
      coordinateAtPixel: (v, f) => {
        let p = v / t * 2 - 1, m = f / r * 2 - 1, g = qa([p, m, 1], d);
        return { x: g[0], y: g[1] };
      }
    };
  }
}
function su(e, t, r) {
  let n = GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST;
  const i = e.derive([r.xData], (d) => d.length), o = e.derive([i], (d) => d * 4), a = i, s = e.statefulDerive(
    [t, e.statefulDerive([t, o, n], Zt), r.xData],
    nn
  ), l = e.statefulDerive(
    [t, e.statefulDerive([t, o, n], Zt), r.yData],
    nn
  ), u = e.statefulDerive(
    [t, e.statefulDerive([t, a, n], Zt), r.categoryData],
    nn
  );
  return { x: s, y: l, category: u, count: i };
}
function Qa(e, t, r, n, i, o, a) {
  let s = "rgba16float", l = "r16float", u = GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING, d = e.statefulDerive(
    [t, r, n, s, u],
    Zn
  ), h = e.statefulDerive(
    [t, r, n, l, u],
    Zn
  ), y = e.derive(
    [i, o, a],
    (m, g, w) => m * g * w * 4
    // w * h * categoryCount * sizeof(uint32)
  ), v = e.derive(
    [i, o, a],
    (m, g, w) => m * g * w * 2
    // w * h * categoryCount * sizeof(f16)
  ), f = e.statefulDerive(
    [t, y, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC],
    Zt
  ), p = e.statefulDerive([t, v, GPUBufferUsage.STORAGE], Zt);
  return {
    colorTexture: d,
    alphaTexture: h,
    colorTextureFormat: s,
    alphaTextureFormat: l,
    countBuffer: f,
    blurBuffer: p
  };
}
function uu(e, t, r, n, i, o, a) {
  let l = e.derive([o.densityBandwidth], (A) => Math.ceil(A * 3) + 1), u = e.derive([o.width, l], (A, T) => A + T * 2), d = e.derive([o.height, l], (A, T) => A + T * 2), h = e.derive([u], (A) => Math.ceil(A / 4)), y = e.derive([d], (A) => Math.ceil(A / 4)), v = Qa(
    e,
    t,
    u,
    d,
    h,
    y,
    o.categoryCount
  ), f = Wa(e, t, n.buffer, a, v), p = Ha(e, t, r, f, a, v), m = ru(e, t, r, f, a, v), g = tu(e, t, r, f, v), w = nu(e, t, r, i, f), _ = ja(e, t, r, f, u, d, o.categoryCount), M = e.derive(
    [o.densityBandwidth, u, h],
    (A, T, D) => Ka(A / T * D)
  ), C = e.derive(
    [o.categoryColors, o.categoryCount],
    (A, T) => (A == null && (A = Zr(T)), A.map((D) => zn(D)))
  );
  return e.derive(
    [
      t,
      u,
      d,
      h,
      y,
      n.update,
      a.count,
      o.matrix,
      C,
      m,
      w,
      p,
      _,
      g,
      M
    ],
    (A, T, D, Q, J, j, Y, ve, ee, ye, ie, z, ae, le, we) => (K, pe) => {
      let Oe = K.colorScheme == "light" ? [1, 1, 1, 1] : [0, 0, 0, 1], se = K.width / T, me = K.height / D, Pe = qn([se, 0, 0, 0, me, 0, 0, 0, 1], ve);
      j({
        count: Y,
        category_count: K.categoryCount,
        framebuffer_width: T,
        framebuffer_height: D,
        density_width: Q,
        density_height: J,
        gamma: K.gamma,
        point_size: Math.max(K.mode == "points" ? 3 : 1, K.pointSize),
        point_alpha: K.pointAlpha,
        points_alpha: K.pointsAlpha,
        density_scaler: K.densityScaler / 16,
        quantization_step: K.densityQuantizationStep,
        density_alpha: K.densityAlpha,
        contours_alpha: K.contoursAlpha,
        matrix: Pe,
        view_xy_scaler: [1 / se, 1 / me],
        kde_causal: we.kde_causal,
        kde_anticausal: we.kde_anticausal,
        kde_a: we.kde_a,
        background_color: Oe,
        category_colors: ee
      });
      let Be = A.createCommandEncoder();
      ye(Be), K.mode == "density" && (K.densityAlpha > 0 || K.contoursAlpha > 0) && (z(Be), ae(Be), le(Be)), ie(Be, pe), A.queue.submit([Be.finish()]);
    }
  );
}
function fu(e, t, r, n, i, o, a, s, l) {
  let u = Qa(e, t, i, o, i, o, e.value(1)), d = Wa(e, t, n.buffer, l, u), h = Ha(e, t, r, d, l, u), y = ja(e, t, r, d, i, o, e.value(1));
  return e.derive(
    [
      t,
      i,
      o,
      l.count,
      n.update,
      a,
      s,
      h,
      y,
      u.countBuffer
    ],
    (v, f, p, m, g, w, _, M, C, A) => () => {
      let T = v.createCommandEncoder(), D = Ka(w);
      g({
        count: m,
        category_count: 1,
        framebuffer_width: f,
        framebuffer_height: p,
        density_width: f,
        density_height: p,
        gamma: 1,
        point_size: 0,
        point_alpha: 0,
        points_alpha: 0,
        density_scaler: 0,
        quantization_step: 0,
        density_alpha: 0,
        contours_alpha: 0,
        matrix: _,
        view_xy_scaler: [1, 1],
        kde_causal: D.kde_causal,
        kde_anticausal: D.kde_anticausal,
        kde_a: D.kde_a,
        background_color: [0, 0, 0, 0],
        category_colors: []
      }), M(T), C(T);
      let Q = v.createBuffer({
        size: f * p * 2,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
      });
      return T.copyBufferToBuffer(A, 0, Q, 0, f * p * 2), v.queue.submit([T.finish()]), Q.mapAsync(GPUMapMode.READ, 0, f * p * 2).then(() => cu(Q.getMappedRange()));
    }
  );
}
function cu(e) {
  let t = new Uint16Array(e), r = new Uint32Array(t.length);
  for (let n = 0; n < t.length; n++) {
    let i = t[n] & 32767, o = t[n] & 32768, a = t[n] & 31744;
    i <<= 13, o <<= 16, i += 939524096, i = a == 0 ? 0 : i, i |= o, r[n] = i;
  }
  return new Float32Array(r.buffer);
}
let dr;
function du() {
  return dr == null && (dr = document.createElement("canvas"), dr.width = 1, dr.height = 1), dr.getContext("2d");
}
function hu(e) {
  let t = du();
  t.font = `${e.fontSize ?? 10}px ${e.fontFamily ?? "system-ui"}`;
  let r = e.text.split(`
`).map((a) => t.measureText(a).width), i = (e.fontSize ?? 10) * (e.lineSpacing ?? 1) * r.length;
  return {
    width: r.reduce((a, s) => Math.max(a, s)),
    height: i
  };
}
let hn = null, Tn = /* @__PURE__ */ new Map();
function vu() {
  return hn == null && (hn = new Promise((e, t) => {
    let r = new Worker(new URL("./clustering.worker.js", import.meta.url), { type: "module" });
    r.onmessage = (n) => {
      if (n.data.ready) {
        e(r);
        return;
      }
      if (n.data.id != null) {
        let i = Tn.get(n.data.id);
        i != null && (Tn.delete(n.data.id), i(n.data));
      }
    };
  })), hn;
}
function fr(e, t, r = []) {
  return new Promise((n, i) => {
    vu().then((o) => {
      let a = (/* @__PURE__ */ new Date()).getTime().toString() + "-" + Math.random().toString();
      Tn.set(a, (s) => {
        n(s.payload);
      }), o.postMessage({ id: a, name: e, payload: t }, r);
    });
  });
}
let yu = (e, t, r, n) => fr("findClusters", [e, t, r, n], [e.buffer]), pu = (...e) => fr("dynamicLabelPlacement", e), mu = (...e) => fr("textSummarizerCreate", e), xu = (...e) => fr("textSummarizerDestroy", e), _u = (...e) => fr("textSummarizerAdd", e), gu = (...e) => fr("textSummarizerSummarize", e);
async function Ai(e, t, r, n, i) {
  let o = new Jr(r, e, t), a = n.reduce((f, p) => Math.min(f, p.level ?? 0), 0), s = n.reduce((f, p) => Math.max(f, p.level ?? 0), 0), l = r.scale, u = r.scale / 2, d = u * 4, h = l / d, y = n.map((f) => {
    let p = o.pixelLocation(f.x, f.y), m = f.level ?? 0, g = m == 0 ? 14 : 12, w = hu({
      text: f.text,
      fontSize: g,
      fontFamily: i
    });
    return w.width += 4, w.height += 4, {
      text: f.text,
      fontSize: g,
      bounds: {
        xMin: p.x - w.width / 2,
        xMax: p.x + w.width / 2,
        yMin: p.y - w.height / 2,
        yMax: p.y + w.height / 2
      },
      locationAtZero: p,
      priority: f.priority,
      minScale: f.level == s ? null : h * Math.pow(2, -m) / 1.2,
      maxScale: f.level == a ? null : h * Math.pow(2, -m + 1),
      coordinate: { x: f.x, y: f.y },
      placement: null
    };
  }), v = await pu(y, { globalMaxScale: l / u });
  for (let f = 0; f < v.length; f++) {
    let p = v[f];
    if (p != null) {
      let m = l / p.minScale, g = l / p.maxScale;
      y[f].placement = { minScale: g, maxScale: m };
    }
  }
  return y;
}
function bu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vn = { exports: {} }, Ei;
function wu() {
  return Ei || (Ei = 1, (function(e) {
    (function() {
      function t(s, l) {
        var u = s.x - l.x, d = s.y - l.y;
        return u * u + d * d;
      }
      function r(s, l, u) {
        var d = l.x, h = l.y, y = u.x - d, v = u.y - h;
        if (y !== 0 || v !== 0) {
          var f = ((s.x - d) * y + (s.y - h) * v) / (y * y + v * v);
          f > 1 ? (d = u.x, h = u.y) : f > 0 && (d += y * f, h += v * f);
        }
        return y = s.x - d, v = s.y - h, y * y + v * v;
      }
      function n(s, l) {
        for (var u = s[0], d = [u], h, y = 1, v = s.length; y < v; y++)
          h = s[y], t(h, u) > l && (d.push(h), u = h);
        return u !== h && d.push(h), d;
      }
      function i(s, l, u, d, h) {
        for (var y = d, v, f = l + 1; f < u; f++) {
          var p = r(s[f], s[l], s[u]);
          p > y && (v = f, y = p);
        }
        y > d && (v - l > 1 && i(s, l, v, d, h), h.push(s[v]), u - v > 1 && i(s, v, u, d, h));
      }
      function o(s, l) {
        var u = s.length - 1, d = [s[0]];
        return i(s, 0, u, l, d), d.push(s[u]), d;
      }
      function a(s, l, u) {
        if (s.length <= 2) return s;
        var d = l !== void 0 ? l * l : 1;
        return s = u ? s : n(s, d), s = o(s, d), s;
      }
      e.exports = a, e.exports.default = a;
    })();
  })(vn)), vn.exports;
}
var Au = wu();
const Ri = /* @__PURE__ */ bu(Au);
function Eu(e, t) {
  let r = e.slice();
  for (let n = 0; n < t; n++) {
    const i = [], o = r.length;
    for (let a = 0; a < o; a++) {
      const s = r[a], l = r[(a + 1) % o], u = {
        x: 0.75 * s.x + 0.25 * l.x,
        y: 0.75 * s.y + 0.25 * l.y
      }, d = {
        x: 0.25 * s.x + 0.75 * l.x,
        y: 0.25 * s.y + 0.75 * l.y
      };
      i.push(u, d);
    }
    r = i;
  }
  return r;
}
function Ru(e, t) {
  const r = Eu(e, 5), n = ka(r);
  let i = Math.max(n.xMax - n.xMin, n.yMax - n.yMin) / 100, o = Ri(r, i), a = 0;
  for (; o.length > t && a < 20; )
    i *= 1.1, a += 1, o = Ri(r, i);
  return o;
}
const Ti = {
  light: {
    fontFamily: "system-ui,sans-serif",
    clusterLabelColor: "#000",
    clusterLabelOutlineColor: "rgba(255,255,255,0.8)",
    clusterLabelOpacity: 0.8,
    statusBar: !0,
    statusBarTextColor: "#525252",
    statusBarBackgroundColor: "rgba(255,255,255,0.9)",
    brandingLink: { text: "Embedding Atlas", href: "https://apple.github.io/embedding-atlas" }
  },
  dark: {
    fontFamily: "system-ui,sans-serif",
    clusterLabelColor: "#ccc",
    clusterLabelOutlineColor: "rgba(0,0,0,0.8)",
    clusterLabelOpacity: 0.8,
    statusBar: !0,
    statusBarTextColor: "#d9d9d9",
    statusBarBackgroundColor: "rgba(0,0,0,0.9)",
    brandingLink: { text: "Embedding Atlas", href: "https://apple.github.io/embedding-atlas" }
  }
};
function Tu(e, t) {
  return e == null ? Ti[t] : { ...Ti[t], ...e, ...e[t] != null ? e[t] : {} };
}
function Su(e, t, r, n, i, o, a) {
  let s = Math.max(n, i) / o, l = e / (r * r) / (s * s), d = 1 / (l / (o * o)) * 0.2, h = Math.sqrt(e / t / (s * s)), y = Math.log(h), v = Math.log(r), f = (Math.min(Math.max((v - y) * 2, -1), 1) + 1) / 2, p;
  if (a != null)
    p = a * o;
  else {
    let w = 0.25 / Math.sqrt(l);
    p = Math.max(0.2, Math.min(5, w)) * o;
  }
  let m = 1 - f, g = 0.5 + f * 0.5;
  return {
    densityScaler: d,
    densityAlpha: m,
    contoursAlpha: m,
    pointSize: p,
    pointAlpha: 0.7,
    pointsAlpha: g,
    densityBandwidth: 20
  };
}
var Mu = /* @__PURE__ */ Ft("<div></div>"), Cu = /* @__PURE__ */ xt("<circle></circle>"), Fu = /* @__PURE__ */ xt("<circle></circle>"), Du = /* @__PURE__ */ xt('<text dominant-baseline="middle"> </text>'), Pu = /* @__PURE__ */ xt("<g></g>"), Bu = /* @__PURE__ */ xt("<g><!></g>"), ku = /* @__PURE__ */ xt("<g></g>"), Uu = /* @__PURE__ */ Ft('<div><canvas></canvas> <div><!></div> <svg role="none"><!><!><!><!></svg> <!> <!></div>');
function Za(e, t) {
  Mt(t, !0);
  let r = R(t, "data", 19, () => ({ x: new Float32Array(), y: new Float32Array(), category: null })), n = R(t, "categoryCount", 3, 1), i = R(t, "categoryColors", 3, null), o = R(t, "width", 3, 800), a = R(t, "height", 3, 800), s = R(t, "pixelRatio", 3, 2), l = R(t, "theme", 3, null), u = R(t, "config", 3, null), d = R(t, "totalCount", 3, null), h = R(t, "maxDensity", 3, null), y = R(t, "labels", 3, null), v = R(t, "queryClusterLabels", 3, null), f = R(t, "tooltip", 7, null), p = R(t, "selection", 7, null), m = R(t, "querySelection", 3, null), g = R(t, "rangeSelection", 7, null), w = R(t, "defaultViewportState", 3, null), _ = R(t, "viewportState", 7, null), M = R(t, "customTooltip", 3, null), C = R(t, "customOverlay", 3, null), A = R(t, "onViewportState", 3, null), T = R(t, "onTooltip", 3, null), D = R(t, "onSelection", 3, null), Q = R(t, "onRangeSelection", 3, null), J = R(t, "cache", 3, null), j = /* @__PURE__ */ U(() => u()?.colorScheme ?? "light"), Y = /* @__PURE__ */ U(() => Tu(l(), c(j))), ve = /* @__PURE__ */ U(() => i() ?? Zr(n())), ee = /* @__PURE__ */ U(() => _() ?? w() ?? { x: 0, y: 0, scale: 1 }), ye = /* @__PURE__ */ U(() => new Jr(c(ee), o(), a())), ie = /* @__PURE__ */ U(() => c(ye).pixelLocationFunction()), z = /* @__PURE__ */ U(() => c(ye).coordinateAtPixelFunction()), ae = /* @__PURE__ */ $(!1);
  function le(b, E) {
    return b.x == E.x && b.y == E.y && b.category == E.category && b.text == E.text;
  }
  let we = /* @__PURE__ */ U(() => p()?.length == 1 && f() != null && le(p()[0], f()));
  function K(b) {
    wt(_(), b) || (_(b), A()?.(b));
  }
  function pe(b) {
    wt(f(), b) || (f(b), T()?.(b));
  }
  function Oe(b) {
    wt(p(), b) || (p(b), D()?.(b));
  }
  function se(b) {
    wt(g(), b) || (g(b), Q()?.(b));
  }
  let me = /* @__PURE__ */ $(Bt([])), We = /* @__PURE__ */ $(null), Pe = /* @__PURE__ */ $("none"), Be = /* @__PURE__ */ U(() => o() * s()), P = /* @__PURE__ */ U(() => a() * s()), N = /* @__PURE__ */ $(null), I = /* @__PURE__ */ $(null), ue = /* @__PURE__ */ $(null), re = /* @__PURE__ */ U(() => u()?.minimumDensity ?? 1 / 16), je = /* @__PURE__ */ U(() => u()?.pointSize ?? null), Re = /* @__PURE__ */ U(() => u()?.mode ?? "points"), lt = /* @__PURE__ */ U(() => u()?.autoLabelEnabled), _t = /* @__PURE__ */ U(() => Su(h() ?? (d() ?? r().x.length) / 4, c(re), c(ee).scale, c(Be), c(P), s(), c(je))), st = /* @__PURE__ */ U(() => c(_t).pointSize), gt = !0;
  mr(() => {
    c(I)?.setProps({
      mode: c(Re),
      colorScheme: c(j),
      viewportX: c(ee).x,
      viewportY: c(ee).y,
      viewportScale: c(ee).scale,
      width: c(Be),
      height: c(P),
      x: r().x,
      y: r().y,
      category: r().category,
      categoryCount: n(),
      categoryColors: c(ve),
      ...c(_t)
    }) && (eo(), (c(lt) !== !1 || y() != null) && gt && c(I) != null && r().x != null && r().x.length > 0 && w() != null && (gt = !1, fo(w())));
  });
  function $a() {
    $r = null, !(!c(N) || !c(I)) && (c(N).width = c(I).props.width, c(N).height = c(I).props.height, c(N).style.width = `${c(I).props.width / s()}px`, c(N).style.height = `${c(I).props.height / s()}px`, c(I).render());
  }
  let $r = null;
  function eo() {
    $r == null && ($r = requestAnimationFrame($a));
  }
  function to(b) {
    let E;
    function F() {
      E = b.getContext("webgl2", { antialias: !1 }), E.getExtension("EXT_color_buffer_float"), E.getExtension("EXT_float_blend"), E.getExtension("OES_texture_float_linear"), L(I, new Hs(E, c(Be), c(P)), !0);
    }
    F(), b.addEventListener("webglcontextlost", () => {
      c(I)?.destroy(), L(I, null), E = null;
    }), b.addEventListener("webglcontextrestored", () => {
      F();
    });
  }
  function ro(b) {
    async function E() {
      let F = b.getContext("webgpu");
      if (F == null) {
        console.error("Could not get WebGPU canvas context");
        return;
      }
      let B = await navigator.gpu.requestAdapter();
      if (!B) {
        console.error("Could not request WebGPU adapter");
        return;
      }
      let k = 512 * 1048576, O = 512 * 1048576;
      k = Math.min(k, B.limits.maxBufferSize), O = Math.min(O, B.limits.maxStorageBufferBindingSize);
      let X = {
        requiredLimits: { maxBufferSize: k, maxStorageBufferBindingSize: O },
        requiredFeatures: ["shader-f16"]
      }, Z = await B.requestDevice(X);
      Z.lost.then((de) => {
        console.info(`WebGPU device was lost: ${de.message}`), de.reason != "destroyed" && (c(I)?.destroy(), L(I, null), E());
      });
      let te = navigator.gpu.getPreferredCanvasFormat();
      F.configure({ device: Z, format: te, alphaMode: "premultiplied" }), L(I, new lu(F, Z, te, c(Be), c(P)), !0);
    }
    E();
  }
  function no(b) {
    b != null && _() == null && K(b);
  }
  mr(() => no(w())), In(() => {
    c(N) != null && (Fi() ? ro(c(N)) : (to(c(N)), L(ue, "WebGPU is unavailable. If you are using Safari, please enable the WebGPU feature flag.")));
  }), Fl(() => {
    c(I)?.destroy(), L(I, null);
  });
  function Xt(b) {
    let E = c(N)?.getBoundingClientRect() ?? { left: 0, top: 0 };
    return { x: b.clientX - E.left, y: b.clientY - E.top };
  }
  function io(b) {
    b.preventDefault();
    let { x: E, y: F } = Xt(b), B = Math.exp(-b.deltaY / 200);
    ao(B, { x: E, y: F });
  }
  function ao(b, E) {
    let { x: F, y: B, scale: k } = c(ee);
    pe(null);
    let O = Math.min(100, Math.max(0.01, k * b)), X = c(N).getBoundingClientRect(), Z = Math.max(X.width, X.height), te = (E.x - X.width / 2) / Z * 2, de = (X.height / 2 - E.y) / Z * 2, Ke = F + te / k - te / O, ke = B + de / k - de / O;
    K({ x: Ke, y: ke, scale: O });
  }
  function oo(b) {
    pe(null);
    let E = "pan";
    c(Pe) != "none" ? b.modifiers.shift || (E = c(Pe)) : b.modifiers.shift && (E = b.modifiers.meta ? "lasso" : "marquee");
    let F = Xt(b);
    switch (E) {
      case "marquee":
        return {
          move: (B) => {
            if (pe(null), c(I) == null)
              return;
            let k = Xt(B), O = c(z)(F.x, F.y), X = c(z)(k.x, k.y);
            se({
              xMin: Math.min(O.x, X.x),
              yMin: Math.min(O.y, X.y),
              xMax: Math.max(O.x, X.x),
              yMax: Math.max(O.y, X.y)
            });
          }
        };
      case "lasso": {
        let B = [c(z)(F.x, F.y)];
        return {
          move: (k) => {
            if (pe(null), c(I) == null)
              return;
            let O = Xt(k);
            B = [...B, c(z)(O.x, O.y)], B.length >= 3 && se(Ru(B, 24));
          }
        };
      }
      case "pan": {
        let B = c(z)(0, 0), k = c(z)(1, 1), O = B.x - k.x, X = B.y - k.y, Z = c(ee).x, te = c(ee).y;
        return {
          move: (de) => {
            K({
              x: Z + (de.clientX - b.clientX) * O,
              y: te + (de.clientY - b.clientY) * X,
              scale: c(ee).scale
            });
          }
        };
      }
    }
  }
  async function lo(b) {
    if (g() != null)
      se(null);
    else {
      const E = await Gn(Xt(b));
      if (E == null)
        Oe([]), pe(null);
      else if (b.modifiers.shift || b.modifiers.ctrl || b.modifiers.meta) {
        let F = p()?.findIndex((B) => B.x == E.x && B.y == E.y && B.category == E.category);
        p() == null || F == null || F < 0 ? (Oe([...p() ?? [], E]), pe(E)) : (Oe([
          ...p().slice(0, F),
          ...p().slice(F + 1)
        ]), pe(null));
      } else
        Oe([E]), pe(E);
    }
  }
  let en = Gl(
    async (b) => {
      let E = b ? Xt(b) : null;
      if (p() != null && p().length == 1) {
        let F = c(ie)(p()[0].x, p()[0].y);
        E != null && Vl(E, F) < 10 && pe(p()[0]);
      } else
        pe(await Gn(E));
    },
    () => f() != null
  );
  function so(b) {
    b != null ? c(ae) || en(b) : en(null);
  }
  mr(() => {
    c(ae) && en(null);
  });
  async function Gn(b) {
    if (c(I) == null || b == null || m() == null)
      return null;
    let { x: E, y: F } = c(z)(b.x, b.y), B = Math.abs(c(z)(b.x + 1, b.y).x - E);
    return await m()(E, F, B);
  }
  async function Vn(b, E, F, B = 5e-3) {
    let k = await b.densityMap(1e3, 1e3, E, F), O = await yu(k.data, k.width, k.height), X = [];
    for (let te = 0; te < O.length; te++) {
      let de = O[te], Ke = k.coordinateAtPixel(de.meanX, de.meanY), ke = de.boundaryRectApproximation.map(([Ge, Ht, rn, ut]) => {
        let Dt = k.coordinateAtPixel(Ge, Ht), Wt = k.coordinateAtPixel(rn, ut);
        return {
          xMin: Math.min(Dt.x, Wt.x),
          xMax: Math.max(Dt.x, Wt.x),
          yMin: Math.min(Dt.y, Wt.y),
          yMax: Math.max(Dt.y, Wt.y)
        };
      });
      X.push({
        x: Ke.x,
        y: Ke.y,
        sumDensity: de.sumDensity,
        rects: ke,
        bandwidth: E
      });
    }
    let Z = X.reduce((te, de) => Math.max(te, de.sumDensity), 0);
    return X.filter((te) => te.sumDensity / Z > B);
  }
  async function uo(b) {
    if (c(I) == null || v() == null)
      return [];
    let E = await Xl({
      autoLabel: {
        version: 1,
        viewport: b,
        stopWords: u()?.autoLabelStopWords,
        densityThreshold: u()?.autoLabelDensityThreshold
      }
    });
    if (J() != null) {
      let k = await J().get(E);
      if (k != null)
        return k;
    }
    let F = await Vn(c(I), 10, b, u()?.autoLabelDensityThreshold ?? 5e-3);
    if (F = F.concat(await Vn(c(I), 5, b)), v()) {
      let k = await v()(F.map((O) => O.rects));
      for (let O = 0; O < F.length; O++)
        F[O].label = k[O];
    }
    let B = F.filter((k) => k.label != null && k.label.length > 0).map((k) => ({
      x: k.x,
      y: k.y,
      text: k.label,
      priority: k.sumDensity,
      level: k.bandwidth == 10 ? 0 : 1
    }));
    return J() != null && await J().set(E, B), B;
  }
  async function fo(b) {
    if (c(I) != null)
      if (y() != null)
        L(me, await Ai(o(), a(), b, y(), c(Y).fontFamily), !0);
      else {
        L(We, "Generating labels...");
        let E = await uo(b);
        L(me, await Ai(o(), a(), b, E, c(Y).fontFamily), !0), L(We, null);
      }
  }
  class co {
    content;
    constructor(E, F) {
      let B = document.createElement("div");
      this.content = B, this.update(F), E.appendChild(B);
    }
    update(E) {
      let F = this.content;
      F.style.fontFamily = E.fontFamily, c(j) == "light" ? (F.style.color = "#000", F.style.background = "#fff", F.style.border = "1px solid #000") : (F.style.color = "#ccc", F.style.background = "#000", F.style.border = "1px solid #ccc"), F.style.borderRadius = "2px", F.style.padding = "5px", F.style.fontSize = "12px", F.style.maxWidth = "300px", F.innerText = E.tooltip.text ?? JSON.stringify(E.tooltip);
    }
  }
  var Sr = Uu();
  let Yn;
  var tn = he(Sr);
  q(tn, "", {}, { position: "absolute", top: "0", left: "0" }), An(tn, (b) => L(N, b), () => c(N));
  var Mr = ne(tn, 2);
  let Xn;
  var ho = he(Mr);
  {
    var vo = (b) => {
      const E = /* @__PURE__ */ U(() => Ua(C())), F = /* @__PURE__ */ U(() => ({
        location: c(ie),
        width: o(),
        height: a()
      }));
      var B = cr(), k = Kt(B);
      Dl(k, () => c(E), (O) => {
        var X = Mu();
        Ve(X, (Z, te) => c(E)?.(Z, te), () => Na(C(), { proxy: c(F) })), oe(O, X);
      }), oe(b, B);
    };
    Te(ho, (b) => {
      C() && b(vo);
    });
  }
  ce(Mr);
  var bt = ne(Mr, 2);
  q(bt, "", {}, { position: "absolute", left: "0", top: "0" });
  var Hn = he(bt);
  {
    var yo = (b) => {
      const E = /* @__PURE__ */ U(() => {
        const { x: X, y: Z } = c(ie)(f().x, f().y);
        return { x: X, y: Z };
      }), F = /* @__PURE__ */ U(() => Math.max(3, c(st) / s()) + 1);
      var B = cr(), k = Kt(B);
      {
        var O = (X) => {
          var Z = Cu();
          let te;
          Ie(() => {
            S(Z, "cx", c(E).x), S(Z, "cy", c(E).y), S(Z, "r", c(F)), te = q(Z, "", te, {
              stroke: c(j) == "light" ? "#000" : "#fff",
              "stroke-width": 1,
              fill: "none"
            });
          }), oe(X, Z);
        };
        Te(k, (X) => {
          isFinite(c(E).x) && isFinite(c(E).y) && isFinite(c(F)) && X(O);
        });
      }
      oe(b, B);
    };
    Te(Hn, (b) => {
      f() != null && c(I) != null && b(yo);
    });
  }
  var Wn = ne(Hn);
  {
    var po = (b) => {
      var E = cr(), F = Kt(E);
      on(F, 17, p, an, (B, k) => {
        const O = /* @__PURE__ */ U(() => {
          const { x: ke, y: Ge } = c(ie)(c(k).x, c(k).y);
          return { x: ke, y: Ge };
        }), X = /* @__PURE__ */ U(() => c(k).category != null ? c(ve)[c(k).category] : c(ve)[0]), Z = /* @__PURE__ */ U(() => Math.max(3, c(st) / s()) + 1);
        var te = cr(), de = Kt(te);
        {
          var Ke = (ke) => {
            var Ge = Fu();
            let Ht;
            Ie(() => {
              S(Ge, "cx", c(O).x), S(Ge, "cy", c(O).y), S(Ge, "r", c(Z)), Ht = q(Ge, "", Ht, {
                stroke: c(j) == "light" ? "#000" : "#fff",
                "stroke-width": 2,
                fill: c(X)
              });
            }), oe(ke, Ge);
          };
          Te(de, (ke) => {
            isFinite(c(O).x) && isFinite(c(O).y) && isFinite(c(Z)) && ke(Ke);
          });
        }
        oe(B, te);
      }), oe(b, E);
    };
    Te(Wn, (b) => {
      p() != null && c(I) != null && b(po);
    });
  }
  var jn = ne(Wn);
  {
    var mo = (b) => {
      var E = ku();
      on(E, 21, () => c(me), an, (F, B) => {
        const k = /* @__PURE__ */ U(() => c(B).text.split(`
`)), O = /* @__PURE__ */ U(() => c(ie)(c(B).coordinate.x, c(B).coordinate.y)), X = /* @__PURE__ */ U(() => c(B).placement != null && c(B).placement.minScale <= c(ee).scale && c(ee).scale <= c(B).placement.maxScale);
        var Z = Bu(), te = he(Z);
        {
          var de = (Ke) => {
            var ke = Pu();
            on(ke, 21, () => c(k), an, (Ge, Ht, rn) => {
              var ut = Du();
              S(ut, "x", 0);
              let Dt;
              var Wt = he(ut, !0);
              ce(ut), Ie(() => {
                S(ut, "y", (rn - (c(k).length - 1) / 2) * c(B).fontSize), S(ut, "font-size", c(B).fontSize), Dt = q(ut, "", Dt, {
                  "paint-order": "stroke",
                  "stroke-width": "4",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round",
                  "text-anchor": "middle",
                  fill: c(Y).clusterLabelColor,
                  stroke: c(Y).clusterLabelOutlineColor,
                  opacity: c(Y).clusterLabelOpacity,
                  "user-select": "none",
                  "-webkit-user-select": "none",
                  "font-family": c(Y).fontFamily
                }), xr(Wt, c(Ht));
              }), oe(Ge, ut);
            }), ce(ke), oe(Ke, ke);
          };
          Te(te, (Ke) => {
            c(X) && Ke(de);
          });
        }
        ce(Z), Ie(() => S(Z, "transform", `translate(${c(O).x ?? ""},${c(O).y ?? ""})`)), oe(F, Z);
      }), ce(E), oe(b, E);
    };
    Te(jn, (b) => {
      b(mo);
    });
  }
  var xo = ne(jn);
  {
    var _o = (b) => {
      var E = cr(), F = Kt(E);
      {
        var B = (O) => {
          Kl(O, {
            get value() {
              return g();
            },
            get pointLocation() {
              return c(ie);
            }
          });
        }, k = (O) => {
          ql(O, {
            get value() {
              return g();
            },
            onChange: se,
            get pointLocation() {
              return c(ie);
            },
            get coordinateAtPoint() {
              return c(z);
            },
            preventHover: (X) => {
              L(ae, X, !0);
            }
          });
        };
        Te(F, (O) => {
          g() instanceof Array ? O(B) : O(k, !1);
        });
      }
      oe(b, E);
    };
    Te(xo, (b) => {
      g() != null && c(I) != null && b(_o);
    });
  }
  ce(bt), Ve(bt, (b, E) => Qe?.(b, E), () => ({ click: lo, drag: oo, hover: so }));
  var Kn = ne(bt, 2);
  {
    var go = (b) => {
      const E = /* @__PURE__ */ U(() => c(ie)(f().x, f().y));
      {
        let F = /* @__PURE__ */ U(() => Math.max(3, c(st) / s())), B = /* @__PURE__ */ U(() => M() ?? {
          class: co,
          props: {
            colorScheme: c(j),
            fontFamily: c(Y).fontFamily
          }
        });
        ls(b, {
          get location() {
            return c(E);
          },
          get allowInteraction() {
            return c(we);
          },
          get targetHeight() {
            return c(F);
          },
          get customTooltip() {
            return c(B);
          },
          get tooltip() {
            return f();
          }
        });
      }
    };
    Te(Kn, (b) => {
      f() != null && c(I) != null && b(go);
    });
  }
  var bo = ne(Kn, 2);
  {
    var wo = (b) => {
      {
        let E = /* @__PURE__ */ U(() => c(We) ?? c(ue)), F = /* @__PURE__ */ U(() => 1 / (c(ie)(1, 0).x - c(ie)(0, 0).x));
        is(b, {
          get resolvedTheme() {
            return c(Y);
          },
          get statusMessage() {
            return c(E);
          },
          get distancePerPoint() {
            return c(F);
          },
          get pointCount() {
            return r().x.length;
          },
          get selectionMode() {
            return c(Pe);
          },
          onSelectionMode: (B) => L(Pe, B, !0)
        });
      }
    };
    Te(bo, (b) => {
      c(Y).statusBar && b(wo);
    });
  }
  ce(Sr), Ie(() => {
    Yn = q(Sr, "", Yn, {
      width: `${o() ?? ""}px`,
      height: `${a() ?? ""}px`,
      position: "relative"
    }), Xn = q(Mr, "", Xn, {
      width: `${o() ?? ""}px`,
      height: `${a() ?? ""}px`,
      position: "absolute",
      top: "0",
      left: "0"
    }), S(bt, "width", o()), S(bt, "height", a());
  }), bl("wheel", bt, io), oe(e, Sr), Ct();
}
function Ja(e, t, r = 0, n = e.length - 1, i = Nu) {
  for (; n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, u = t - r + 1, d = Math.log(l), h = 0.5 * Math.exp(2 * d / 3), y = 0.5 * Math.sqrt(d * h * (l - h) / l) * (u - l / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(t - u * h / l + y)), f = Math.min(n, Math.floor(t + (l - u) * h / l + y));
      Ja(e, t, v, f, i);
    }
    const o = e[t];
    let a = r, s = n;
    for (hr(e, r, t), i(e[n], o) > 0 && hr(e, r, n); a < s; ) {
      for (hr(e, a, s), a++, s--; i(e[a], o) < 0; ) a++;
      for (; i(e[s], o) > 0; ) s--;
    }
    i(e[r], o) === 0 ? hr(e, r, s) : (s++, hr(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
}
function hr(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function Nu(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Si(e) {
  let t = new Float32Array(e), r = Math.floor(e.length / 2);
  return Ja(t, r), t[r];
}
function Iu(e) {
  return e.length == 0 ? 0 : e.reduce((t, r) => t + r, 0) / e.length;
}
function Mi(e) {
  if (e.length == 0)
    return 0;
  let t = Iu(e);
  return Math.sqrt(e.reduce((r, n) => r + (n - t) * (n - t)) / e.length);
}
function Lu(e, t, r, n = 0, i = 0) {
  let o = new ArrayBuffer(8), a = new Uint32Array(o), s = new BigUint64Array(o), l = /* @__PURE__ */ new Map();
  for (let d = 0; d < e.length; d++) {
    a[0] = Math.floor((e[d] - n) / r), a[1] = Math.floor((t[d] - i) / r);
    let h = s[0];
    l.set(h, (l.get(h) ?? 0) + 1);
  }
  let u = 0;
  for (let d of l.values())
    u = Math.max(d, u);
  return u / (r * r);
}
function Ou(e, t) {
  Mt(t, !0);
  let r = R(t, "tooltip", 3, null), n = R(t, "selection", 3, null), i = R(t, "rangeSelection", 3, null), o = R(t, "categoryColors", 3, null), a = R(t, "width", 3, null), s = R(t, "height", 3, null), l = R(t, "pixelRatio", 3, null), u = R(t, "theme", 3, null), d = R(t, "config", 3, null), h = R(t, "viewportState", 3, null), y = R(t, "labels", 3, null), v = R(t, "customTooltip", 3, null), f = R(t, "customOverlay", 3, null), p = R(t, "querySelection", 3, null), m = R(t, "queryClusterLabels", 3, null), g = R(t, "onViewportState", 3, null), w = R(t, "onTooltip", 3, null), _ = R(t, "onSelection", 3, null), M = R(t, "onRangeSelection", 3, null), C = R(t, "cache", 3, null), A = /* @__PURE__ */ U(() => T(t.data));
  function T(D) {
    let Q = 1;
    D.category != null && (Q = D.category.reduce((z, ae) => Math.max(z, ae), 0) + 1);
    let J = Si(D.x), j = Si(D.y), Y = Mi(D.x), ve = Mi(D.y), ee = 1 / (Math.max(Y, ve, 1e-3) * 3), ye = 0.1 / ee, ie = Lu(D.x, D.y, ye, J, j);
    return {
      count: D.x.length,
      categoryCount: Q,
      maxDensity: ie,
      defaultViewportState: { x: J, y: j, scale: ee * 0.95 }
    };
  }
  {
    let D = /* @__PURE__ */ U(() => a() ?? 800), Q = /* @__PURE__ */ U(() => s() ?? 800), J = /* @__PURE__ */ U(() => l() ?? 2), j = /* @__PURE__ */ U(() => ({
      x: t.data.x,
      y: t.data.y,
      category: t.data.category ?? null
    }));
    Za(e, {
      get width() {
        return c(D);
      },
      get height() {
        return c(Q);
      },
      get pixelRatio() {
        return c(J);
      },
      get theme() {
        return u();
      },
      get config() {
        return d();
      },
      get data() {
        return c(j);
      },
      get totalCount() {
        return c(A).count;
      },
      get maxDensity() {
        return c(A).maxDensity;
      },
      get categoryCount() {
        return c(A).categoryCount;
      },
      get categoryColors() {
        return o();
      },
      get defaultViewportState() {
        return c(A).defaultViewportState;
      },
      get querySelection() {
        return p();
      },
      get queryClusterLabels() {
        return m();
      },
      get labels() {
        return y();
      },
      get customTooltip() {
        return v();
      },
      get customOverlay() {
        return f();
      },
      get tooltip() {
        return r();
      },
      get onTooltip() {
        return w();
      },
      get selection() {
        return n();
      },
      get onSelection() {
        return _();
      },
      get viewportState() {
        return h();
      },
      get onViewportState() {
        return g();
      },
      get rangeSelection() {
        return i();
      },
      get onRangeSelection() {
        return M();
      },
      get cache() {
        return C();
      }
    });
  }
  Ct();
}
class Ku {
  component;
  currentProps;
  constructor(t, r) {
    this.currentProps = { ...r }, this.component = Da({ component: Ou, target: t, props: r });
  }
  update(t) {
    let r = {};
    for (let n in t)
      t[n] !== this.currentProps[n] && (r[n] = t[n], this.currentProps[n] = t[n]);
    this.component.$set(r);
  }
  destroy() {
    this.component.$destroy();
  }
}
function Ci(e, t) {
  if (t.length == 0)
    return x.literal(!1);
  if (e.identifier != null) {
    let r = e.identifier;
    return x.or(...t.map((n) => x.eq(x.column(r), x.literal(n.identifier))));
  } else {
    let r = e.x, n = e.y, i = e.category;
    return i != null ? x.or(
      ...t.map(
        (o) => x.and(
          x.eq(x.cast(x.column(r), "DOUBLE"), x.literal(o.x)),
          x.eq(x.cast(x.column(n), "DOUBLE"), x.literal(o.y)),
          x.eq(x.cast(x.column(i), "INTEGER"), x.literal(o.category))
        )
      )
    ) : x.or(
      ...t.map(
        (o) => x.and(
          x.eq(x.cast(x.column(r), "DOUBLE"), x.literal(o.x)),
          x.eq(x.cast(x.column(n), "DOUBLE"), x.literal(o.y))
        )
      )
    );
  }
}
function zu(e, t, r) {
  let n = [];
  for (let o = 0; o < r.length; o++) {
    let a = (o + 1) % r.length, { x: s, y: l } = r[o], { x: u, y: d } = r[a], h = l < d ? x.and(x.lte(x.literal(l), t), x.lt(t, x.literal(d))) : x.and(x.lte(x.literal(d), t), x.lt(t, x.literal(l))), y = (l < d ? x.lt : x.gt)(
      x.sub(x.mul(x.literal(u - s), t), x.mul(x.literal(d - l), e)),
      x.literal((u - s) * l - (d - l) * s)
    );
    n.push(x.cast(x.and(h, y), "INT"));
  }
  let i = n.reduce((o, a) => x.add(o, a));
  return x.eq(x.mod(i, x.literal(2)), x.literal(1));
}
function qu(e, t) {
  if (t instanceof Array) {
    if (t.length < 3)
      return x.literal(!1);
    let r = ka(t);
    return x.and(
      x.isBetween(x.column(e.x), [r.xMin, r.xMax]),
      x.isBetween(x.column(e.y), [r.yMin, r.yMax]),
      zu(x.column(e.x), x.column(e.y), t)
    );
  } else
    return x.and(
      x.isBetween(x.column(e.x), [t.xMin, t.xMax]),
      x.isBetween(x.column(e.y), [t.yMin, t.yMax])
    );
}
async function Gu(e, t) {
  let { x: r, y: n, table: i } = t, o = await e.query(
    x.Query.from(i).select({
      centerX: x.sql`MEDIAN(${x.column(r)})`,
      centerY: x.sql`MEDIAN(${x.column(n)})`,
      stdX: x.sql`STDDEV(${x.column(r)})`,
      stdY: x.sql`STDDEV(${x.column(n)})`,
      ...t.category != null ? {
        maxCategory: x.sql`MAX(${x.column(t.category)}::UTINYINT)`
      } : {}
    })
  ), { centerX: a, centerY: s, stdX: l, stdY: u, maxCategory: d } = o.get(0), h = 1 / (Math.max(l, u, 1e-3) * 3), y = 0.1 / h, v = x.sql`FLOOR((${x.column(r)} - ${a}) / ${y})`, f = x.sql`FLOOR((${x.column(n)} - ${s}) / ${y})`, p = t.category != null ? x.column(t.category) : null, m = p != null ? [v, f, p] : [v, f], g = x.Query.from(
    x.Query.from(i).select({ count: x.sql`COUNT(*)` }).groupby(...m)
  ).select({
    totalCount: x.sql`SUM(count)::INT`,
    maxCount: x.sql`MAX(count)::INT`
  });
  o = await e.query(g);
  let { maxCount: w, totalCount: _ } = o.get(0), M = w / (y * y);
  return {
    centerX: a,
    centerY: s,
    scaler: h,
    totalCount: _,
    categoryCount: (d ?? 0) + 1,
    maxDensity: M
  };
}
class Vu {
  coordinator;
  source;
  lastDistance;
  selectParams;
  constructor(t, r) {
    this.coordinator = t, this.source = r, this.lastDistance = 0;
    let { x: n, y: i, category: o, text: a, identifier: s } = this.source, l = {}, u = r.additionalFields ?? {};
    for (let d in u) {
      let h = u[d];
      typeof h == "string" ? l["field_" + d] = x.column(h) : l["field_" + d] = x.sql`${h.sql}`;
    }
    this.selectParams = {
      x: x.sql`${x.column(n)}::DOUBLE`,
      y: x.sql`${x.column(i)}::DOUBLE`,
      ...o != null ? { category: x.sql`${x.column(o)}::INT` } : {},
      ...a != null ? { text: x.sql`${x.column(a)}` } : {},
      ...s != null ? { identifier: x.sql`${x.column(s)}` } : {},
      ...l
    };
  }
  _convertToDataPoint(t) {
    let r = {};
    for (let n in t)
      n.startsWith("field_") && (r[n.slice(6)] = t[n]);
    return {
      x: t.x,
      y: t.y,
      category: t.category,
      text: t.text,
      identifier: t.identifier,
      fields: r
    };
  }
  async queryClosestPoint(t, r, n, i) {
    let o = i * 12, { x: a, y: s } = this.source;
    for (let l of [this.lastDistance, o]) {
      if (l == 0 || l > o)
        continue;
      let u = x.Query.from(this.source.table).select(this.selectParams);
      u = u.where(x.sql`${x.column(a)} BETWEEN ${r - l} AND ${r + l}`), u = u.where(x.sql`${x.column(s)} BETWEEN ${n - l} AND ${n + l}`), t && (u = u.where(t)), u = u.orderby(x.sql`(x - (${r}))**2 + (y - (${n}))**2`).limit(1);
      let h = (await this.coordinator.query(u)).get(0);
      if (h)
        return this.lastDistance = Math.max(Math.abs(h.x - r), Math.abs(h.y - n)) * 4, this._convertToDataPoint(h);
    }
    return null;
  }
  async queryPoints(t) {
    let { table: r, identifier: n } = this.source;
    if (n == null)
      return [];
    let i = x.Query.from(r).select(this.selectParams);
    return i = i.where(
      x.isIn(
        x.column(n),
        t.map((a) => x.literal(a))
      )
    ), Array.from(await this.coordinator.query(i)).map((a) => this._convertToDataPoint(a));
  }
}
function Yu(e, t) {
  Mt(t, !0);
  let r = R(t, "coordinator", 19, Ao), n = R(t, "category", 3, null), i = R(t, "text", 3, null), o = R(t, "identifier", 3, null), a = R(t, "filter", 3, null), s = R(t, "categoryColors", 3, null), l = R(t, "tooltip", 3, null), u = R(t, "additionalFields", 3, null), d = R(t, "selection", 3, null), h = R(t, "rangeSelection", 3, null), y = R(t, "rangeSelectionValue", 3, null), v = R(t, "width", 3, null), f = R(t, "height", 3, null), p = R(t, "pixelRatio", 3, null), m = R(t, "config", 3, null), g = R(t, "theme", 3, null), w = R(t, "viewportState", 3, null), _ = R(t, "labels", 3, null), M = R(t, "customTooltip", 3, null), C = R(t, "customOverlay", 3, null), A = R(t, "onViewportState", 3, null), T = R(t, "onTooltip", 3, null), D = R(t, "onSelection", 3, null), Q = R(t, "onRangeSelection", 3, null), J = R(t, "cache", 3, null), j = /* @__PURE__ */ $(new Float32Array()), Y = /* @__PURE__ */ $(new Float32Array()), ve = /* @__PURE__ */ $(null), ee = /* @__PURE__ */ $(1), ye = /* @__PURE__ */ $(1), ie = /* @__PURE__ */ $(1), z = /* @__PURE__ */ $(null), ae = /* @__PURE__ */ $(null), le = /* @__PURE__ */ $(null), we = /* @__PURE__ */ $(null), K = /* @__PURE__ */ $(null);
  ft(() => {
    let P = {
      coordinator: r(),
      source: {
        table: t.table,
        x: t.x,
        y: t.y,
        category: n()
      }
    }, N = null, I = !1;
    async function ue() {
      let re = P.source, je = await Gu(P.coordinator, re);
      if (I)
        return;
      let Re = je.scaler * 0.95;
      L(z, {
        x: je.centerX,
        y: je.centerY,
        scale: Re
      }), L(ye, je.totalCount), L(ie, je.maxDensity), L(ee, je.categoryCount), N = Eo({
        coordinator: P.coordinator,
        selection: a() ?? void 0,
        query: (lt) => x.Query.from(re.table).select({
          x: x.sql`${x.column(re.x)}::FLOAT`,
          y: x.sql`${x.column(re.y)}::FLOAT`,
          ...re.category != null ? { c: x.sql`${x.column(re.category)}::UTINYINT` } : {}
        }).where(lt),
        queryResult: (lt) => {
          let _t = lt.getChild("x").toArray(), st = lt.getChild("y").toArray(), gt = lt.getChild("c")?.toArray() ?? null;
          _t != null && !(_t instanceof Float32Array) && (_t = new Float32Array(_t)), st != null && !(st instanceof Float32Array) && (st = new Float32Array(st)), gt != null && !(gt instanceof Uint8Array) && (gt = new Uint8Array(gt)), L(j, _t), L(Y, st), L(ve, gt), pe(null), Oe(null);
        }
      }), N.reset = () => {
        se();
      }, L(K, N);
    }
    return ue(), () => {
      L(K, null), I = !0, N?.destroy();
    };
  }), ft(() => {
    if (Qn(l())) {
      let P = c(K);
      if (P == null)
        return;
      let N = l();
      L(ae, N.valueFor(P) ?? null);
      let I = () => {
        L(ae, N.valueFor(P) ?? null);
      };
      return ft(() => {
        let ue = c(ae), re = {
          x: t.x,
          y: t.y,
          category: n(),
          identifier: o()
        };
        N.update({
          source: P,
          clients: (/* @__PURE__ */ new Set()).add(P),
          predicate: ue != null ? Ci(re, [ue]) : null,
          value: ue
        });
      }), N.addEventListener("value", I), () => {
        N.removeEventListener("value", I), N.update({
          source: P,
          clients: (/* @__PURE__ */ new Set()).add(P),
          value: null,
          predicate: null
        });
      };
    } else if (l() == null || typeof l() == "object")
      L(ae, l());
    else {
      if (c(ae)?.identifier == l())
        return;
      let P = !1;
      return Pe([l()]).then((N) => {
        P || (N.length > 0 ? L(ae, N[0]) : L(ae, null));
      }), () => {
        P = !0;
      };
    }
  });
  function pe(P) {
    wt(l(), P) || (L(ae, P), T()?.(P));
  }
  ft(() => {
    if (Qn(d())) {
      let P = c(K);
      if (P == null)
        return;
      let N = d();
      L(le, N.valueFor(P) ?? null);
      let I = () => {
        L(le, N.valueFor(P) ?? null);
      };
      return ft(() => {
        let ue = c(le), re = {
          x: t.x,
          y: t.y,
          category: n(),
          identifier: o()
        };
        N.update({
          source: P,
          clients: (/* @__PURE__ */ new Set()).add(P),
          predicate: ue != null ? Ci(re, ue) : null,
          value: ue
        });
      }), N.addEventListener("value", I), () => {
        N.removeEventListener("value", I), N.update({
          source: P,
          clients: (/* @__PURE__ */ new Set()).add(P),
          value: null,
          predicate: null
        });
      };
    } else if (d() == null)
      L(le, null);
    else if (d().length == 0)
      L(le, []);
    else if (d().every((P) => typeof P == "object"))
      L(le, d());
    else {
      let P = !1;
      return Pe(d()).then((N) => {
        P || L(le, N);
      }), () => {
        P = !0;
      };
    }
  });
  function Oe(P) {
    wt(d(), P) || (L(le, P), D()?.(P));
  }
  ft(() => {
    let P = c(K);
    if (P == null)
      return;
    let N = h();
    if (N != null)
      return ft(() => {
        let I = c(we), ue = { x: t.x, y: t.y }, re = {
          source: P,
          clients: (/* @__PURE__ */ new Set()).add(P),
          predicate: I != null ? qu(ue, I) : null,
          value: I
        };
        N.update(re), N.activate(re);
      }), () => {
        N.update({
          source: P,
          clients: (/* @__PURE__ */ new Set()).add(P),
          value: null,
          predicate: null
        });
      };
  }), ft(() => {
    wt(Vt(() => c(we)), y()) || L(we, y());
  });
  function se() {
    Oe(null), pe(null), Q()?.(null), L(we, null);
  }
  let me = /* @__PURE__ */ U(() => new Vu(r(), {
    table: t.table,
    x: t.x,
    y: t.y,
    category: n(),
    text: i(),
    identifier: o(),
    additionalFields: u()
  }));
  async function We(P, N, I) {
    return await c(me).queryClosestPoint(a()?.predicate?.(c(K)), P, N, I);
  }
  async function Pe(P) {
    return await c(me).queryPoints(P);
  }
  async function Be(P) {
    if (i() == null)
      return P.map(() => null);
    let N = await mu({
      regions: P,
      stopWords: m()?.autoLabelStopWords ?? null
    }), I = 0, ue = 1e4, re = null;
    for (; ; ) {
      let Re = await r().query(x.Query.from(t.table).select({
        x: x.column(t.x),
        y: x.column(t.y),
        text: x.column(i())
      }).offset(I).limit(ue)), lt = {
        x: Re.getChild("x").toArray(),
        y: Re.getChild("y").toArray(),
        text: Re.getChild("text").toArray()
      };
      if (re != null && await re, re = _u(N, lt), Re.getChild("text").length < ue)
        break;
      I += ue;
    }
    re != null && await re;
    let je = await gu(N);
    return await xu(N), je.map((Re) => Re.length == 0 ? null : Re.length > 2 ? Re.slice(0, 2).join("-") + `-
` + Re.slice(2).join("-") : Re.join("-"));
  }
  {
    let P = /* @__PURE__ */ U(() => v() ?? 800), N = /* @__PURE__ */ U(() => f() ?? 800), I = /* @__PURE__ */ U(() => p() ?? 2), ue = /* @__PURE__ */ U(() => ({
      x: c(j),
      y: c(Y),
      category: c(ve)
    }));
    Za(e, {
      get width() {
        return c(P);
      },
      get height() {
        return c(N);
      },
      get pixelRatio() {
        return c(I);
      },
      get theme() {
        return g();
      },
      get config() {
        return m();
      },
      get data() {
        return c(ue);
      },
      get totalCount() {
        return c(ye);
      },
      get maxDensity() {
        return c(ie);
      },
      get categoryCount() {
        return c(ee);
      },
      get categoryColors() {
        return s();
      },
      get defaultViewportState() {
        return c(z);
      },
      querySelection: We,
      queryClusterLabels: Be,
      get labels() {
        return _();
      },
      get customTooltip() {
        return M();
      },
      get customOverlay() {
        return C();
      },
      get tooltip() {
        return c(ae);
      },
      onTooltip: pe,
      get selection() {
        return c(le);
      },
      onSelection: Oe,
      get viewportState() {
        return w();
      },
      get onViewportState() {
        return A();
      },
      get rangeSelection() {
        return c(we);
      },
      onRangeSelection: (re) => {
        L(we, re), Q()?.(re);
      },
      get cache() {
        return J();
      }
    });
  }
  Ct();
}
class Qu {
  component;
  currentProps;
  constructor(t, r) {
    this.currentProps = { ...r }, this.component = Da({ component: Yu, target: t, props: r });
  }
  update(t) {
    let r = {};
    for (let n in t)
      t[n] !== this.currentProps[n] && (r[n] = t[n], this.currentProps[n] = t[n]);
    this.component.$set(r);
  }
  destroy() {
    this.component.$destroy();
  }
}
function Zu() {
  return Fi() ? 32 : 4;
}
export {
  Ku as EmbeddingView,
  Qu as EmbeddingViewMosaic,
  Zr as defaultCategoryColors,
  Zu as maxDensityModeCategories
};
