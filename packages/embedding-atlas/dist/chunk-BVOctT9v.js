import { i as je } from "./chunk-DgFtVqg1.js";
import { coordinator as _a, makeClient as ba, isSelection as Wn } from "@uwdata/mosaic-core";
import * as m from "@uwdata/mosaic-sql";
function Si() {
  return !(navigator.gpu == null || navigator.gpu.requestAdapter == null);
}
function wa(e) {
  return e == 0 && (e = 4), e % 4 != 0 && (e += 4 - e % 4), e;
}
function Zt(e, t, r, n) {
  return (e.buffer == null || e.byteSize != r || e.usage != n) && (e.buffer != null && e.buffer.destroy(), e.buffer = t.createBuffer({ size: wa(r), usage: n }), e.byteSize = r, e.destroy = () => {
    e.buffer?.destroy();
  }), e.buffer;
}
function tn(e, t, r, n) {
  if (e.buffer !== r || e.data !== n) {
    if (n != null)
      if (n.byteLength % 4 != 0) {
        let i = n.byteLength - n.byteLength % 4;
        if (t.queue.writeBuffer(r, 0, n, 0, i), n instanceof Uint8Array) {
          let a = new Uint8Array(4);
          for (let o = 0; o < 4; o++)
            i + o < n.length && (a[o] = n[i + o]);
          t.queue.writeBuffer(r, i, a);
        }
      } else
        t.queue.writeBuffer(r, 0, n, 0);
    else
      t.queue.writeBuffer(r, 0, new ArrayBuffer(r.size));
    e.buffer = r, e.data = n;
  }
  return r;
}
function Hn(e, t, r, n, i, a) {
  return (e.texture == null || e.width != r || e.height != n || e.format != i || e.usage != a) && (e.texture != null && e.texture.destroy(), e.texture = t.createTexture({ size: [r, n], format: i, usage: a }), e.destroy = () => {
    e.texture?.destroy();
  }), e.texture;
}
const be = 2, Or = 4, qr = 8, dt = 16, pt = 32, qt = 64, $r = 128, Ve = 512, xe = 1024, Ce = 2048, vt = 4096, Ie = 8192, wt = 16384, zr = 32768, tr = 65536, Qn = 1 << 17, Bi = 1 << 18, ar = 1 << 19, Ci = 1 << 20, xr = 32768, hn = 1 << 21, An = 1 << 22, At = 1 << 23, Ut = Symbol("$state"), Pi = Symbol("legacy props"), Aa = Symbol(""), Qt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Rn = 3, lr = 8, Ra = !1;
var Di = Array.isArray, Ea = Array.prototype.indexOf, En = Array.from, Ui = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, ki = Object.getOwnPropertyDescriptors, Ta = Object.prototype, Ma = Array.prototype, Tn = Object.getPrototypeOf, Zn = Object.isExtensible;
function Fa(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ni() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function Ii(e) {
  return e === this.v;
}
function Li(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Oi(e) {
  return !Li(e, this.v);
}
function qi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Sa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ba(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ca() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Da() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ua() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ka(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Na() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function La() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Oa() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let qa = !1;
const Mn = 1, Fn = 2, $i = 4, $a = 8, za = 16, Ga = 1, Va = 4, Xa = 8, Ya = 16, ja = 1, Wa = 2, zi = "[", Gr = "[!", Sn = "]", rr = {}, me = Symbol(), Ha = "http://www.w3.org/1999/xhtml";
let Pe = null;
function nr(e) {
  Pe = e;
}
function Tt(e, t = !1, r) {
  Pe = {
    p: Pe,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Mt(e) {
  var t = (
    /** @type {ComponentContext} */
    Pe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      yo(n);
  }
  return t.i = !0, Pe = t.p, /** @type {T} */
  {};
}
function Gi() {
  return !0;
}
let Ct = [];
function Vi() {
  var e = Ct;
  Ct = [], Fa(e);
}
function ur(e) {
  if (Ct.length === 0 && !vr) {
    var t = Ct;
    queueMicrotask(() => {
      t === Ct && Vi();
    });
  }
  Ct.push(e);
}
function Qa() {
  for (; Ct.length > 0; )
    Vi();
}
function Vr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Za() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let X = !1;
function ft(e) {
  X = e;
}
let G;
function Be(e) {
  if (e === null)
    throw Vr(), rr;
  return G = e;
}
function Rr() {
  return Be(
    /** @type {TemplateNode} */
    /* @__PURE__ */ nt(G)
  );
}
function fe(e) {
  if (X) {
    if (/* @__PURE__ */ nt(G) !== null)
      throw Vr(), rr;
    G = e;
  }
}
function Xi(e = 1) {
  if (X) {
    for (var t = e, r = G; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ nt(r);
    G = r;
  }
}
function Ur(e = !0) {
  for (var t = 0, r = G; ; ) {
    if (r.nodeType === lr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Sn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === zi || n === Gr) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nt(r)
    );
    e && r.remove(), r = i;
  }
}
function Yi(e) {
  if (!e || e.nodeType !== lr)
    throw Vr(), rr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Pt(e) {
  if (typeof e != "object" || e === null || Ut in e)
    return e;
  const t = Tn(e);
  if (t !== Ta && t !== Ma)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Di(e), i = /* @__PURE__ */ J(0), a = Nt, o = (l) => {
    if (Nt === a)
      return l();
    var u = z, s = Nt;
    Fe(null), ri(a);
    var f = l();
    return Fe(u), ri(s), f;
  };
  return n && r.set("length", /* @__PURE__ */ J(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && Na();
        var f = r.get(u);
        return f === void 0 ? f = o(() => {
          var d = /* @__PURE__ */ J(s.value);
          return r.set(u, d), d;
        }) : L(f, s.value, !0), !0;
      },
      deleteProperty(l, u) {
        var s = r.get(u);
        if (s === void 0) {
          if (u in l) {
            const f = o(() => /* @__PURE__ */ J(me));
            r.set(u, f), gr(i);
          }
        } else
          L(s, me), gr(i);
        return !0;
      },
      get(l, u, s) {
        if (u === Ut)
          return e;
        var f = r.get(u), d = u in l;
        if (f === void 0 && (!d || Jt(l, u)?.writable) && (f = o(() => {
          var h = Pt(d ? l[u] : me), v = /* @__PURE__ */ J(h);
          return v;
        }), r.set(u, f)), f !== void 0) {
          var p = c(f);
          return p === me ? void 0 : p;
        }
        return Reflect.get(l, u, s);
      },
      getOwnPropertyDescriptor(l, u) {
        var s = Reflect.getOwnPropertyDescriptor(l, u);
        if (s && "value" in s) {
          var f = r.get(u);
          f && (s.value = c(f));
        } else if (s === void 0) {
          var d = r.get(u), p = d?.v;
          if (d !== void 0 && p !== me)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return s;
      },
      has(l, u) {
        if (u === Ut)
          return !0;
        var s = r.get(u), f = s !== void 0 && s.v !== me || Reflect.has(l, u);
        if (s !== void 0 || Y !== null && (!f || Jt(l, u)?.writable)) {
          s === void 0 && (s = o(() => {
            var p = f ? Pt(l[u]) : me, h = /* @__PURE__ */ J(p);
            return h;
          }), r.set(u, s));
          var d = c(s);
          if (d === me)
            return !1;
        }
        return f;
      },
      set(l, u, s, f) {
        var d = r.get(u), p = u in l;
        if (n && u === "length")
          for (var h = s; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var v = r.get(h + "");
            v !== void 0 ? L(v, me) : h in l && (v = o(() => /* @__PURE__ */ J(me)), r.set(h + "", v));
          }
        if (d === void 0)
          (!p || Jt(l, u)?.writable) && (d = o(() => /* @__PURE__ */ J(void 0)), L(d, Pt(s)), r.set(u, d));
        else {
          p = d.v !== me;
          var g = o(() => Pt(s));
          L(d, g);
        }
        var y = Reflect.getOwnPropertyDescriptor(l, u);
        if (y?.set && y.set.call(f, s), !p) {
          if (n && typeof u == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), w = Number(u);
            Number.isInteger(w) && w >= b.v && L(b, w + 1);
          }
          gr(i);
        }
        return !0;
      },
      ownKeys(l) {
        c(i);
        var u = Reflect.ownKeys(l).filter((d) => {
          var p = r.get(d);
          return p === void 0 || p.v !== me;
        });
        for (var [s, f] of r)
          f.v !== me && !(s in l) && u.push(s);
        return u;
      },
      setPrototypeOf() {
        Ia();
      }
    }
  );
}
var Jn, ji, Wi, Hi;
function dn() {
  if (Jn === void 0) {
    Jn = window, ji = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Wi = Jt(t, "firstChild").get, Hi = Jt(t, "nextSibling").get, Zn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Zn(r) && (r.__t = void 0);
  }
}
function et(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return Wi.call(e);
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return Hi.call(e);
}
function pe(e, t) {
  if (!X)
    return /* @__PURE__ */ ht(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ht(G)
  );
  if (r === null)
    r = G.appendChild(et());
  else if (t && r.nodeType !== Rn) {
    var n = et();
    return r?.before(n), Be(n), n;
  }
  return Be(r), r;
}
function Ht(e, t = !1) {
  if (!X) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ht(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ nt(r) : r;
  }
  if (t && G?.nodeType !== Rn) {
    var n = et();
    return G?.before(n), Be(n), n;
  }
  return G;
}
function ne(e, t = 1, r = !1) {
  let n = X ? G : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ nt(n);
  if (!X)
    return n;
  if (r && n?.nodeType !== Rn) {
    var a = et();
    return n === null ? i?.after(a) : n.before(a), Be(a), a;
  }
  return Be(n), /** @type {TemplateNode} */
  n;
}
function Qi(e) {
  e.textContent = "";
}
function Ja() {
  return !1;
}
function Zi(e) {
  var t = Y;
  if (t === null)
    return z.f |= At, e;
  if ((t.f & zr) === 0) {
    if ((t.f & $r) === 0)
      throw e;
    t.b.error(e);
  } else
    ir(e, t);
}
function ir(e, t) {
  for (; t !== null; ) {
    if ((t.f & $r) !== 0)
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
const Sr = /* @__PURE__ */ new Set();
let he = null, ke = null, He = [], Xr = null, pn = !1, vr = !1;
class Qe {
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
  #u = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #a = [];
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
    He = [], this.apply();
    var r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const n of t)
      this.#i(n, r);
    this.is_fork || this.#s(), this.#n > 0 || this.is_fork ? (this.#o(r.effects), this.#o(r.render_effects), this.#o(r.block_effects)) : (he = null, Kn(r.render_effects), Kn(r.effects), this.#u?.resolve()), ke = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(t, r) {
    t.f ^= xe;
    for (var n = t.first; n !== null; ) {
      var i = n.f, a = (i & (pt | qt)) !== 0, o = a && (i & xe) !== 0, l = o || (i & Ie) !== 0 || this.skipped_effects.has(n);
      if ((n.f & $r) !== 0 && n.b?.is_pending() && (r = {
        parent: r,
        effect: n,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !l && n.fn !== null) {
        a ? n.f ^= xe : (i & Or) !== 0 ? r.effects.push(n) : Er(n) && ((n.f & dt) !== 0 && r.block_effects.push(n), br(n));
        var u = n.first;
        if (u !== null) {
          n = u;
          continue;
        }
      }
      var s = n.parent;
      for (n = n.next; n === null && s !== null; )
        s === r.effect && (this.#o(r.effects), this.#o(r.render_effects), this.#o(r.block_effects), r = /** @type {EffectTarget} */
        r.parent), n = s.next, s = s.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #o(t) {
    for (const r of t)
      ((r.f & Ce) !== 0 ? this.#l : this.#a).push(r), _e(r, xe);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    this.previous.has(t) || this.previous.set(t, r), (t.f & At) === 0 && (this.current.set(t, t.v), ke?.set(t, t.v));
  }
  activate() {
    he = this, this.apply();
  }
  deactivate() {
    he = null, ke = null;
  }
  flush() {
    if (this.activate(), He.length > 0) {
      if (Ji(), he !== null && he !== this)
        return;
    } else this.#r === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #s() {
    if (this.#n === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#r === 0 && this.#f();
  }
  #f() {
    if (Sr.size > 1) {
      this.previous.clear();
      var t = ke, r = !0, n = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of Sr) {
        if (i === this) {
          r = !1;
          continue;
        }
        const a = [];
        for (const [l, u] of this.current) {
          if (i.current.has(l))
            if (r && u !== i.current.get(l))
              i.current.set(l, u);
            else
              continue;
          a.push(l);
        }
        if (a.length === 0)
          continue;
        const o = [...i.current.keys()].filter((l) => !this.current.has(l));
        if (o.length > 0) {
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const s of a)
            Ki(s, o, l, u);
          if (He.length > 0) {
            he = i, i.apply();
            for (const s of He)
              i.#i(s, n);
            He = [], i.deactivate();
          }
        }
      }
      he = null, ke = t;
    }
    this.committed = !0, Sr.delete(this);
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
    for (const t of this.#l)
      _e(t, Ce), Lt(t);
    for (const t of this.#a)
      _e(t, vt), Lt(t);
    this.#l = [], this.#a = [], this.flush();
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
    return (this.#u ??= Ni()).promise;
  }
  static ensure() {
    if (he === null) {
      const t = he = new Qe();
      Sr.add(he), vr || Qe.enqueue(() => {
        he === t && t.flush();
      });
    }
    return he;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    ur(t);
  }
  apply() {
  }
}
function Ka(e) {
  var t = vr;
  vr = !0;
  try {
    for (var r; ; ) {
      if (Qa(), He.length === 0 && (he?.flush(), He.length === 0))
        return Xr = null, /** @type {T} */
        r;
      Ji();
    }
  } finally {
    vr = t;
  }
}
function Ji() {
  var e = kt;
  pn = !0;
  try {
    var t = 0;
    for (ei(!0); He.length > 0; ) {
      var r = Qe.ensure();
      if (t++ > 1e3) {
        var n, i;
        el();
      }
      r.process(He), Rt.clear();
    }
  } finally {
    pn = !1, ei(e), Xr = null;
  }
}
function el() {
  try {
    Da();
  } catch (e) {
    ir(e, Xr);
  }
}
let st = null;
function Kn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (wt | Ie)) === 0 && Er(n) && (st = /* @__PURE__ */ new Set(), br(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? bo(n) : n.fn = null), st?.size > 0)) {
        Rt.clear();
        for (const i of st) {
          if ((i.f & (wt | Ie)) !== 0) continue;
          const a = [i];
          let o = i.parent;
          for (; o !== null; )
            st.has(o) && (st.delete(o), a.push(o)), o = o.parent;
          for (let l = a.length - 1; l >= 0; l--) {
            const u = a[l];
            (u.f & (wt | Ie)) === 0 && br(u);
          }
        }
        st.clear();
      }
    }
    st = null;
  }
}
function Ki(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & be) !== 0 ? Ki(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (An | dt)) !== 0 && (a & Ce) === 0 && // we may have scheduled this one already
      eo(i, t, n) && (_e(i, Ce), Lt(
        /** @type {Effect} */
        i
      ));
    }
}
function eo(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & be) !== 0 && eo(
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
function Lt(e) {
  for (var t = Xr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (pn && t === Y && (r & dt) !== 0 && (r & Bi) === 0)
      return;
    if ((r & (qt | pt)) !== 0) {
      if ((r & xe) === 0) return;
      t.f ^= xe;
    }
  }
  He.push(t);
}
function tl(e) {
  let t = 0, r = Ot(0), n;
  return () => {
    jr() && (c(r), Pn(() => (t === 0 && (n = zt(() => e(() => gr(r)))), t += 1, () => {
      ur(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, gr(r));
      });
    })));
  };
}
var rl = tr | ar | $r;
function nl(e, t, r) {
  new il(e, t, r);
}
class il {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #r = X ? G : null;
  /** @type {BoundaryProps} */
  #n;
  /** @type {((anchor: Node) => void)} */
  #u;
  /** @type {Effect} */
  #l;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {DocumentFragment | null} */
  #s = null;
  /** @type {TemplateNode | null} */
  #f = null;
  #d = 0;
  #c = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #x = tl(() => (this.#h = Ot(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    this.#e = t, this.#n = r, this.#u = n, this.parent = /** @type {Effect} */
    Y.b, this.#t = !!this.#n.pending, this.#l = Wr(() => {
      if (Y.b = this, X) {
        const a = this.#r;
        Rr(), /** @type {Comment} */
        a.nodeType === lr && /** @type {Comment} */
        a.data === Gr ? this.#b() : this.#_();
      } else {
        var i = this.#y();
        try {
          this.#a = ze(() => n(i));
        } catch (a) {
          this.error(a);
        }
        this.#c > 0 ? this.#g() : this.#t = !1;
      }
      return () => {
        this.#f?.remove();
      };
    }, rl), X && (this.#e = G);
  }
  #_() {
    try {
      this.#a = ze(() => this.#u(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #b() {
    const t = this.#n.pending;
    t && (this.#i = ze(() => t(this.#e)), Qe.enqueue(() => {
      var r = this.#y();
      this.#a = this.#v(() => (Qe.ensure(), ze(() => this.#u(r)))), this.#c > 0 ? this.#g() : (Kt(
        /** @type {Effect} */
        this.#i,
        () => {
          this.#i = null;
        }
      ), this.#t = !1);
    }));
  }
  #y() {
    var t = this.#e;
    return this.#t && (this.#f = et(), this.#e.before(this.#f), t = this.#f), t;
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
  #v(t) {
    var r = Y, n = z, i = Pe;
    tt(this.#l), Fe(this.#l), nr(this.#l.ctx);
    try {
      return t();
    } catch (a) {
      return Zi(a), null;
    } finally {
      tt(r), Fe(n), nr(i);
    }
  }
  #g() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#n.pending
    );
    this.#a !== null && (this.#s = document.createDocumentFragment(), this.#s.append(
      /** @type {TemplateNode} */
      this.#f
    ), Ro(this.#a, this.#s)), this.#i === null && (this.#i = ze(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #m(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(t);
      return;
    }
    this.#c += t, this.#c === 0 && (this.#t = !1, this.#i && Kt(this.#i, () => {
      this.#i = null;
    }), this.#s && (this.#e.before(this.#s), this.#s = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#m(t), this.#d += t, this.#h && or(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#x(), c(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = this.#n.onerror;
    let n = this.#n.failed;
    if (this.#p || !r && !n)
      throw t;
    this.#a && (Ee(this.#a), this.#a = null), this.#i && (Ee(this.#i), this.#i = null), this.#o && (Ee(this.#o), this.#o = null), X && (Be(
      /** @type {TemplateNode} */
      this.#r
    ), Xi(), Be(Ur()));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        Za();
        return;
      }
      i = !0, a && Oa(), Qe.ensure(), this.#d = 0, this.#o !== null && Kt(this.#o, () => {
        this.#o = null;
      }), this.#t = this.has_pending_snippet(), this.#a = this.#v(() => (this.#p = !1, ze(() => this.#u(this.#e)))), this.#c > 0 ? this.#g() : this.#t = !1;
    };
    var l = z;
    try {
      Fe(null), a = !0, r?.(t, o), a = !1;
    } catch (u) {
      ir(u, this.#l && this.#l.parent);
    } finally {
      Fe(l);
    }
    n && ur(() => {
      this.#o = this.#v(() => {
        Qe.ensure(), this.#p = !0;
        try {
          return ze(() => {
            n(
              this.#e,
              () => t,
              () => o
            );
          });
        } catch (u) {
          return ir(
            u,
            /** @type {Effect} */
            this.#l.parent
          ), null;
        } finally {
          this.#p = !1;
        }
      });
    });
  }
}
function ol(e, t, r, n) {
  const i = Yr;
  if (r.length === 0 && e.length === 0) {
    n(t.map(i));
    return;
  }
  var a = he, o = (
    /** @type {Effect} */
    Y
  ), l = al();
  function u() {
    Promise.all(r.map((s) => /* @__PURE__ */ ll(s))).then((s) => {
      l();
      try {
        n([...t.map(i), ...s]);
      } catch (f) {
        (o.f & wt) === 0 && ir(f, o);
      }
      a?.deactivate(), kr();
    }).catch((s) => {
      ir(s, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    l();
    try {
      return u();
    } finally {
      a?.deactivate(), kr();
    }
  }) : u();
}
function al() {
  var e = Y, t = z, r = Pe, n = he;
  return function(i = !0) {
    tt(e), Fe(t), nr(r), i && n?.activate();
  };
}
function kr() {
  tt(null), Fe(null), nr(null);
}
// @__NO_SIDE_EFFECTS__
function Yr(e) {
  var t = be | Ce, r = z !== null && (z.f & be) !== 0 ? (
    /** @type {Derived} */
    z
  ) : null;
  return Y !== null && (Y.f |= ar), {
    ctx: Pe,
    deps: null,
    effects: null,
    equals: Ii,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      me
    ),
    wv: 0,
    parent: r ?? Y,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ll(e, t) {
  let r = (
    /** @type {Effect | null} */
    Y
  );
  r === null && Sa();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Ot(
    /** @type {V} */
    me
  ), o = !z, l = /* @__PURE__ */ new Map();
  return gl(() => {
    var u = Ni();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        s === he && s.committed && s.deactivate(), kr();
      });
    } catch (p) {
      u.reject(p), kr();
    }
    var s = (
      /** @type {Batch} */
      he
    );
    if (o) {
      var f = !n.is_pending();
      n.update_pending_count(1), s.increment(f), l.get(s)?.reject(Qt), l.delete(s), l.set(s, u);
    }
    const d = (p, h = void 0) => {
      if (s.activate(), h)
        h !== Qt && (a.f |= At, or(a, h));
      else {
        (a.f & At) !== 0 && (a.f ^= At), or(a, p);
        for (const [v, g] of l) {
          if (l.delete(v), v === s) break;
          g.reject(Qt);
        }
      }
      o && (n.update_pending_count(-1), s.decrement(f));
    };
    u.promise.then(d, (p) => d(null, p || "unknown"));
  }), go(() => {
    for (const u of l.values())
      u.reject(Qt);
  }), new Promise((u) => {
    function s(f) {
      function d() {
        f === i ? u(a) : s(i);
      }
      f.then(d, d);
    }
    s(i);
  });
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  const t = /* @__PURE__ */ Yr(e);
  return lo(t), t;
}
// @__NO_SIDE_EFFECTS__
function to(e) {
  const t = /* @__PURE__ */ Yr(e);
  return t.equals = Oi, t;
}
function ro(e) {
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
function Bn(e) {
  var t, r = Y;
  tt(ul(e));
  try {
    e.f &= ~xr, ro(e), t = co(e);
  } finally {
    tt(r);
  }
  return t;
}
function no(e) {
  var t = Bn(e);
  if (e.equals(t) || (e.v = t, e.wv = so()), !$t)
    if (ke !== null)
      jr() && ke.set(e, e.v);
    else {
      var r = (e.f & Ve) === 0 ? vt : xe;
      _e(e, r);
    }
}
let vn = /* @__PURE__ */ new Set();
const Rt = /* @__PURE__ */ new Map();
let io = !1;
function Ot(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ii,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  const r = Ot(e);
  return lo(r), r;
}
// @__NO_SIDE_EFFECTS__
function oo(e, t = !1, r = !0) {
  const n = Ot(e);
  return t || (n.equals = Oi), n;
}
function L(e, t, r = !1) {
  z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ze || (z.f & Qn) !== 0) && Gi() && (z.f & (be | dt | An | Qn)) !== 0 && !ct?.includes(e) && La();
  let n = r ? Pt(t) : t;
  return or(e, n);
}
function or(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    $t ? Rt.set(e, t) : Rt.set(e, r), e.v = t;
    var n = Qe.ensure();
    n.capture(e, r), (e.f & be) !== 0 && ((e.f & Ce) !== 0 && Bn(
      /** @type {Derived} */
      e
    ), _e(e, (e.f & Ve) !== 0 ? xe : vt)), e.wv = so(), ao(e, Ce), Y !== null && (Y.f & xe) !== 0 && (Y.f & (pt | qt)) === 0 && (Oe === null ? fl([e]) : Oe.push(e)), !n.is_fork && vn.size > 0 && !io && sl();
  }
  return t;
}
function sl() {
  io = !1;
  const e = Array.from(vn);
  for (const t of e)
    (t.f & xe) !== 0 && _e(t, vt), Er(t) && br(t);
  vn.clear();
}
function gr(e) {
  L(e, e.v + 1);
}
function ao(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], o = a.f, l = (o & Ce) === 0;
      if (l && _e(a, t), (o & be) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        ke?.delete(u), (o & xr) === 0 && (o & Ve && (a.f |= xr), ao(u, vt));
      } else l && ((o & dt) !== 0 && st !== null && st.add(
        /** @type {Effect} */
        a
      ), Lt(
        /** @type {Effect} */
        a
      ));
    }
}
function Cn(e) {
  var t = z, r = Y;
  Fe(null), tt(null);
  try {
    return e();
  } finally {
    Fe(t), tt(r);
  }
}
let kt = !1;
function ei(e) {
  kt = e;
}
let $t = !1;
function ti(e) {
  $t = e;
}
let z = null, Ze = !1;
function Fe(e) {
  z = e;
}
let Y = null;
function tt(e) {
  Y = e;
}
let ct = null;
function lo(e) {
  z !== null && (ct === null ? ct = [e] : ct.push(e));
}
let Re = null, Ue = 0, Oe = null;
function fl(e) {
  Oe = e;
}
let uo = 1, _r = 0, Nt = _r;
function ri(e) {
  Nt = e;
}
function so() {
  return ++uo;
}
function Er(e) {
  var t = e.f;
  if ((t & Ce) !== 0)
    return !0;
  if (t & be && (e.f &= ~xr), (t & vt) !== 0) {
    var r = e.deps;
    if (r !== null)
      for (var n = r.length, i = 0; i < n; i++) {
        var a = r[i];
        if (Er(
          /** @type {Derived} */
          a
        ) && no(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
      }
    (t & Ve) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ke === null && _e(e, xe);
  }
  return !1;
}
function fo(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !ct?.includes(e))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & be) !== 0 ? fo(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? _e(a, Ce) : (a.f & xe) !== 0 && _e(a, vt), Lt(
        /** @type {Effect} */
        a
      ));
    }
}
function co(e) {
  var t = Re, r = Ue, n = Oe, i = z, a = ct, o = Pe, l = Ze, u = Nt, s = e.f;
  Re = /** @type {null | Value[]} */
  null, Ue = 0, Oe = null, z = (s & (pt | qt)) === 0 ? e : null, ct = null, nr(e.ctx), Ze = !1, Nt = ++_r, e.ac !== null && (Cn(() => {
    e.ac.abort(Qt);
  }), e.ac = null);
  try {
    e.f |= hn;
    var f = (
      /** @type {Function} */
      e.fn
    ), d = f(), p = e.deps;
    if (Re !== null) {
      var h;
      if (Nr(e, Ue), p !== null && Ue > 0)
        for (p.length = Ue + Re.length, h = 0; h < Re.length; h++)
          p[Ue + h] = Re[h];
      else
        e.deps = p = Re;
      if (kt && jr() && (e.f & Ve) !== 0)
        for (h = Ue; h < p.length; h++)
          (p[h].reactions ??= []).push(e);
    } else p !== null && Ue < p.length && (Nr(e, Ue), p.length = Ue);
    if (Gi() && Oe !== null && !Ze && p !== null && (e.f & (be | vt | Ce)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Oe.length; h++)
        fo(
          Oe[h],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (_r++, Oe !== null && (n === null ? n = Oe : n.push(.../** @type {Source[]} */
    Oe))), (e.f & At) !== 0 && (e.f ^= At), d;
  } catch (v) {
    return Zi(v);
  } finally {
    e.f ^= hn, Re = t, Ue = r, Oe = n, z = i, ct = a, nr(o), Ze = l, Nt = u;
  }
}
function cl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ea.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Re === null || !Re.includes(t)) && (_e(t, vt), (t.f & Ve) !== 0 && (t.f ^= Ve, t.f &= ~xr), ro(
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
      cl(e, r[n]);
}
function br(e) {
  var t = e.f;
  if ((t & wt) === 0) {
    _e(e, xe);
    var r = Y, n = kt;
    Y = e, kt = !0;
    try {
      (t & dt) !== 0 ? yl(e) : _o(e), xo(e);
      var i = co(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = uo;
      var a;
      Ra && qa && (e.f & Ce) !== 0 && e.deps;
    } finally {
      kt = n, Y = r;
    }
  }
}
function c(e) {
  var t = e.f, r = (t & be) !== 0;
  if (z !== null && !Ze) {
    var n = Y !== null && (Y.f & wt) !== 0;
    if (!n && !ct?.includes(e)) {
      var i = z.deps;
      if ((z.f & hn) !== 0)
        e.rv < _r && (e.rv = _r, Re === null && i !== null && i[Ue] === e ? Ue++ : Re === null ? Re = [e] : Re.includes(e) || Re.push(e));
      else {
        (z.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [z] : a.includes(z) || a.push(z);
      }
    }
  }
  if ($t) {
    if (Rt.has(e))
      return Rt.get(e);
    if (r) {
      var o = (
        /** @type {Derived} */
        e
      ), l = o.v;
      return ((o.f & xe) === 0 && o.reactions !== null || po(o)) && (l = Bn(o)), Rt.set(o, l), l;
    }
  } else if (r) {
    if (o = /** @type {Derived} */
    e, ke?.has(o))
      return ke.get(o);
    Er(o) && no(o), kt && jr() && (o.f & Ve) === 0 && ho(o);
  } else if (ke?.has(e))
    return ke.get(e);
  if ((e.f & At) !== 0)
    throw e.v;
  return e.v;
}
function ho(e) {
  if (e.deps !== null) {
    e.f ^= Ve;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & be) !== 0 && (t.f & Ve) === 0 && ho(
        /** @type {Derived} */
        t
      );
  }
}
function po(e) {
  if (e.v === me) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Rt.has(t) || (t.f & be) !== 0 && po(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function zt(e) {
  var t = Ze;
  try {
    return Ze = !0, e();
  } finally {
    Ze = t;
  }
}
const hl = -7169;
function _e(e, t) {
  e.f = e.f & hl | t;
}
function dl(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ut in e)
      gn(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Ut in r && gn(r);
      }
  }
}
function gn(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        gn(e[n], t);
      } catch {
      }
    const r = Tn(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = ki(r);
      for (let i in n) {
        const a = n[i].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
function vo(e) {
  Y === null && (z === null && Pa(), Ca()), $t && Ba();
}
function pl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, n = !0) {
  var i = Y;
  i !== null && (i.f & Ie) !== 0 && (e |= Ie);
  var a = {
    ctx: Pe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ce | Ve,
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
      br(a), a.f |= zr;
    } catch (u) {
      throw Ee(a), u;
    }
  else t !== null && Lt(a);
  if (n) {
    var o = a;
    if (r && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    (o.f & ar) === 0 && (o = o.first, (e & dt) !== 0 && (e & tr) !== 0 && o !== null && (o.f |= tr)), o !== null && (o.parent = i, i !== null && pl(o, i), z !== null && (z.f & be) !== 0 && (e & qt) === 0)) {
      var l = (
        /** @type {Derived} */
        z
      );
      (l.effects ??= []).push(o);
    }
  }
  return a;
}
function jr() {
  return z !== null && !Ze;
}
function go(e) {
  const t = it(qr, null, !1);
  return _e(t, xe), t.teardown = e, t;
}
function ut(e) {
  vo();
  var t = (
    /** @type {Effect} */
    Y.f
  ), r = !z && (t & pt) !== 0 && (t & zr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Pe
    );
    (n.e ??= []).push(e);
  } else
    return yo(e);
}
function yo(e) {
  return it(Or | Ci, e, !1);
}
function yr(e) {
  return vo(), it(qr | Ci, e, !0);
}
function vl(e) {
  Qe.ensure();
  const t = it(qt | ar, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Kt(t, () => {
      Ee(t), n(void 0);
    }) : (Ee(t), n(void 0));
  });
}
function mo(e) {
  return it(Or, e, !1);
}
function gl(e) {
  return it(An | ar, e, !0);
}
function Pn(e, t = 0) {
  return it(qr | t, e, !0);
}
function Ne(e, t = [], r = [], n = [], i = !1) {
  ol(n, t, r, (a) => {
    it(i ? Or : qr, () => e(...a.map(c)), !0);
  });
}
function Wr(e, t = 0) {
  var r = it(dt | t, e, !0);
  return r;
}
function ze(e, t = !0) {
  return it(pt | ar, e, !0, t);
}
function xo(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = $t, n = z;
    ti(!0), Fe(null);
    try {
      t.call(null);
    } finally {
      ti(r), Fe(n);
    }
  }
}
function _o(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Cn(() => {
      i.abort(Qt);
    });
    var n = r.next;
    (r.f & qt) !== 0 ? r.parent = null : Ee(r, t), r = n;
  }
}
function yl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & pt) === 0 && Ee(t), t = r;
  }
}
function Ee(e, t = !0) {
  var r = !1;
  (t || (e.f & Bi) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (ml(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), _o(e, t && !r), Nr(e, 0), _e(e, wt);
  var n = e.transitions;
  if (n !== null)
    for (const a of n)
      a.stop();
  xo(e);
  var i = e.parent;
  i !== null && i.first !== null && bo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function ml(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nt(e)
    );
    e.remove(), e = r;
  }
}
function bo(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Kt(e, t, r = !0) {
  var n = [];
  Dn(e, n, !0), wo(n, () => {
    r && Ee(e), t && t();
  });
}
function wo(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Dn(e, t, r) {
  if ((e.f & Ie) === 0) {
    if (e.f ^= Ie, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, a = (n.f & tr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & pt) !== 0 && (e.f & dt) !== 0;
      Dn(n, t, a ? r : !1), n = i;
    }
  }
}
function Un(e) {
  Ao(e, !0);
}
function Ao(e, t) {
  if ((e.f & Ie) !== 0) {
    e.f ^= Ie, (e.f & xe) === 0 && (_e(e, Ce), Lt(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & tr) !== 0 || (r.f & pt) !== 0;
      Ao(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Ro(e, t) {
  for (var r = e.nodes_start, n = e.nodes_end; r !== null; ) {
    var i = r === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nt(r)
    );
    t.append(r), r = i;
  }
}
const Eo = /* @__PURE__ */ new Set(), yn = /* @__PURE__ */ new Set();
function xl(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || pr.call(t, a), !a.cancelBubble)
      return Cn(() => r?.call(this, a));
  }
  return ur(() => {
    t.addEventListener(e, i, n);
  }), i;
}
function _l(e, t, r, n, i) {
  var a = { capture: n, passive: i }, o = xl(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && go(() => {
    t.removeEventListener(e, o, a);
  });
}
function bl(e) {
  for (var t = 0; t < e.length; t++)
    Eo.add(e[t]);
  for (var r of yn)
    r(e);
}
let ni = null;
function pr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ni = e;
  var o = 0, l = ni === e && e.__root;
  if (l) {
    var u = i.indexOf(l);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var s = i.indexOf(t);
    if (s === -1)
      return;
    u <= s && (o = u);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    Ui(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = z, d = Y;
    Fe(null), tt(null);
    try {
      for (var p, h = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + n];
          g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && g.call(a, e);
        } catch (y) {
          p ? h.push(y) : p = y;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        a = v;
      }
      if (p) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Fe(f), tt(d);
    }
  }
}
function To(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Et(e, t) {
  var r = (
    /** @type {Effect} */
    Y
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ft(e, t) {
  var r = (t & ja) !== 0, n = (t & Wa) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (X)
      return Et(G, null), G;
    i === void 0 && (i = To(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ ht(i)));
    var o = (
      /** @type {TemplateNode} */
      n || ji ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ht(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Et(l, u);
    } else
      Et(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function wl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (X)
      return Et(G, null), G;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        To(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ ht(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ ht(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Et(u, u), u;
  };
}
// @__NO_SIDE_EFFECTS__
function gt(e, t) {
  return /* @__PURE__ */ wl(e, t, "svg");
}
function cr() {
  if (X)
    return Et(G, null), G;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = et();
  return e.append(t, r), Et(t, r), e;
}
function ue(e, t) {
  if (X) {
    var r = (
      /** @type {Effect} */
      Y
    );
    ((r.f & zr) === 0 || r.nodes_end === null) && (r.nodes_end = G), Rr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Al = ["touchstart", "touchmove"];
function Rl(e) {
  return Al.includes(e);
}
function mr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function Mo(e, t) {
  return Fo(e, t);
}
function El(e, t) {
  dn(), t.intro = t.intro ?? !1;
  const r = t.target, n = X, i = G;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ht(r)
    ); a && (a.nodeType !== lr || /** @type {Comment} */
    a.data !== zi); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ nt(a);
    if (!a)
      throw rr;
    ft(!0), Be(
      /** @type {Comment} */
      a
    );
    const o = Fo(e, { ...t, anchor: a });
    return ft(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== rr && console.warn("Failed to hydrate: ", o), t.recover === !1 && Ua(), dn(), Qi(r), ft(!1), Mo(e, t);
  } finally {
    ft(n), Be(i);
  }
}
const Wt = /* @__PURE__ */ new Map();
function Fo(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: o = !0 }) {
  dn();
  var l = /* @__PURE__ */ new Set(), u = (d) => {
    for (var p = 0; p < d.length; p++) {
      var h = d[p];
      if (!l.has(h)) {
        l.add(h);
        var v = Rl(h);
        t.addEventListener(h, pr, { passive: v });
        var g = Wt.get(h);
        g === void 0 ? (document.addEventListener(h, pr, { passive: v }), Wt.set(h, 1)) : Wt.set(h, g + 1);
      }
    }
  };
  u(En(Eo)), yn.add(u);
  var s = void 0, f = vl(() => {
    var d = r ?? t.appendChild(et());
    return nl(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (p) => {
        if (a) {
          Tt({});
          var h = (
            /** @type {ComponentContext} */
            Pe
          );
          h.c = a;
        }
        if (i && (n.$$events = i), X && Et(
          /** @type {TemplateNode} */
          p,
          null
        ), s = e(p, n) || {}, X && (Y.nodes_end = G, G === null || G.nodeType !== lr || /** @type {Comment} */
        G.data !== Sn))
          throw Vr(), rr;
        a && Mt();
      }
    ), () => {
      for (var p of l) {
        t.removeEventListener(p, pr);
        var h = (
          /** @type {number} */
          Wt.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, pr), Wt.delete(p)) : Wt.set(p, h);
      }
      yn.delete(u), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return mn.set(s, f), s;
}
let mn = /* @__PURE__ */ new WeakMap();
function Tl(e, t) {
  const r = mn.get(e);
  return r ? (mn.delete(e), r(t)) : Promise.resolve();
}
function So(e) {
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
    var r = /* @__PURE__ */ new Map(), n = (a, o) => {
      var l = /* @__PURE__ */ oo(o, !1, !1);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return c(r.get(o) ?? n(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Pi ? !0 : (c(r.get(o) ?? n(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return L(r.get(o) ?? n(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    this.#e = (t.hydrate ? El : Mo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && Ka(), this.#t = i.$$events;
    for (const a of Object.keys(this.#e))
      a === "$set" || a === "$destroy" || a === "$on" || Ui(this, a, {
        get() {
          return this.#e[a];
        },
        /** @param {any} value */
        set(o) {
          this.#e[a] = o;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, this.#e.$destroy = () => {
      Tl(this.#e);
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
const Fl = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Fl);
class Bo {
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
  #u = () => {
    var t = (
      /** @type {Batch} */
      he
    );
    if (this.#t.has(t)) {
      var r = (
        /** @type {Key} */
        this.#t.get(t)
      ), n = this.#e.get(r);
      if (n)
        Un(n);
      else {
        var i = this.#r.get(r);
        i && (this.#e.set(r, i.effect), this.#r.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [a, o] of this.#t) {
        if (this.#t.delete(a), a === t)
          break;
        const l = this.#r.get(o);
        l && (Ee(l.effect), this.#r.delete(o));
      }
      for (const [a, o] of this.#e) {
        if (a === r) continue;
        const l = () => {
          if (Array.from(this.#t.values()).includes(a)) {
            var u = document.createDocumentFragment();
            Ro(o, u), u.append(et()), this.#r.set(a, { effect: o, fragment: u });
          } else
            Ee(o);
          this.#e.delete(a);
        };
        this.#n || !n ? Kt(o, l, !1) : l();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #l = (t) => {
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
      he
    ), i = Ja();
    r && !this.#e.has(t) && !this.#r.has(t) && this.#e.set(
      t,
      ze(() => r(this.anchor))
    ), this.#t.set(n, t), i || (X && (this.anchor = G), this.#u());
  }
}
function kn(e) {
  Pe === null && qi(), ut(() => {
    const t = zt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Sl(e) {
  Pe === null && qi(), kn(() => () => zt(e));
}
function Me(e, t, r = !1) {
  X && Rr();
  var n = new Bo(e), i = r ? tr : 0;
  function a(o, l) {
    if (X) {
      const s = Yi(e) === Gr;
      if (o === s) {
        var u = Ur();
        Be(u), n.anchor = u, ft(!1), n.ensure(o, l), ft(!0);
        return;
      }
    }
    n.ensure(o, l);
  }
  Wr(() => {
    var o = !1;
    t((l, u = !0) => {
      o = !0, a(u, l);
    }), o || a(!1, null);
  }, i);
}
function Bl(e, t, r) {
  X && Rr();
  var n = new Bo(e);
  Wr(() => {
    var i = t();
    n.ensure(i, r);
  });
}
function rn(e, t) {
  return t;
}
function Cl(e, t, r) {
  for (var n = e.items, i = [], a = t.length, o = 0; o < a; o++)
    Dn(t[o].e, i, !0);
  var l = a > 0 && i.length === 0 && r !== null;
  if (l) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Qi(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), We(e, t[0].prev, t[a - 1].next);
  }
  wo(i, () => {
    for (var s = 0; s < a; s++) {
      var f = t[s];
      l || (n.delete(f.k), We(e, f.prev, f.next)), Ee(f.e, !l);
    }
  });
}
function nn(e, t, r, n, i, a = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, u = (t & $i) !== 0;
  if (u) {
    var s = (
      /** @type {Element} */
      e
    );
    o = X ? Be(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ht(s)
    ) : s.appendChild(et());
  }
  X && Rr();
  var f = null, d = !1, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ to(() => {
    var b = r();
    return Di(b) ? b : b == null ? [] : En(b);
  }), v, g;
  function y() {
    Pl(
      g,
      v,
      l,
      p,
      o,
      i,
      t,
      n,
      r
    ), a !== null && (v.length === 0 ? f ? Un(f) : f = ze(() => a(o)) : f !== null && Kt(f, () => {
      f = null;
    }));
  }
  Wr(() => {
    g ??= /** @type {Effect} */
    Y, v = /** @type {V[]} */
    c(h);
    var b = v.length;
    if (d && b === 0)
      return;
    d = b === 0;
    let w = !1;
    if (X) {
      var x = Yi(o) === Gr;
      x !== (b === 0) && (o = Ur(), Be(o), ft(!1), w = !0);
    }
    if (X) {
      for (var F = null, R, E = 0; E < b; E++) {
        if (G.nodeType === lr && /** @type {Comment} */
        G.data === Sn) {
          o = /** @type {Comment} */
          G, w = !0, ft(!1);
          break;
        }
        var B = v[E], N = n(B, E);
        R = Co(
          G,
          l,
          F,
          null,
          B,
          N,
          E,
          i,
          t,
          r
        ), l.items.set(N, R), F = R;
      }
      b > 0 && Be(Ur());
    }
    X ? b === 0 && a && (f = ze(() => a(o))) : y(), w && ft(!0), c(h);
  }), X && (o = G);
}
function Pl(e, t, r, n, i, a, o, l, u) {
  var s = (o & $a) !== 0, f = (o & (Mn | Fn)) !== 0, d = t.length, p = r.items, h = r.first, v = h, g, y = null, b, w = [], x = [], F, R, E, B;
  if (s)
    for (B = 0; B < d; B += 1)
      F = t[B], R = l(F, B), E = p.get(R), E !== void 0 && (E.a?.measure(), (b ??= /* @__PURE__ */ new Set()).add(E));
  for (B = 0; B < d; B += 1) {
    if (F = t[B], R = l(F, B), E = p.get(R), E === void 0) {
      var N = n.get(R);
      if (N !== void 0) {
        n.delete(R), p.set(R, N);
        var Z = y ? y.next : v;
        We(r, y, N), We(r, N, Z), on(N, Z, i), y = N;
      } else {
        var te = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        y = Co(
          te,
          r,
          y,
          y === null ? r.first : y.next,
          F,
          R,
          B,
          a,
          o,
          u
        );
      }
      p.set(R, y), w = [], x = [], v = y.next;
      continue;
    }
    if (f && Dl(E, F, B, o), (E.e.f & Ie) !== 0 && (Un(E.e), s && (E.a?.unfix(), (b ??= /* @__PURE__ */ new Set()).delete(E))), E !== v) {
      if (g !== void 0 && g.has(E)) {
        if (w.length < x.length) {
          var j = x[0], Q;
          y = j.prev;
          var we = w[0], K = w[w.length - 1];
          for (Q = 0; Q < w.length; Q += 1)
            on(w[Q], j, i);
          for (Q = 0; Q < x.length; Q += 1)
            g.delete(x[Q]);
          We(r, we.prev, K.next), We(r, y, we), We(r, K, j), v = j, y = K, B -= 1, w = [], x = [];
        } else
          g.delete(E), on(E, v, i), We(r, E.prev, E.next), We(r, E, y === null ? r.first : y.next), We(r, y, E), y = E;
        continue;
      }
      for (w = [], x = []; v !== null && v.k !== R; )
        (v.e.f & Ie) === 0 && (g ??= /* @__PURE__ */ new Set()).add(v), x.push(v), v = v.next;
      if (v === null)
        continue;
      E = v;
    }
    w.push(E), y = E, v = E.next;
  }
  if (v !== null || g !== void 0) {
    for (var ve = g === void 0 ? [] : En(g); v !== null; )
      (v.e.f & Ie) === 0 && ve.push(v), v = v.next;
    var ie = ve.length;
    if (ie > 0) {
      var q = (o & $i) !== 0 && d === 0 ? i : null;
      if (s) {
        for (B = 0; B < ie; B += 1)
          ve[B].a?.measure();
        for (B = 0; B < ie; B += 1)
          ve[B].a?.fix();
      }
      Cl(r, ve, q);
    }
  }
  s && ur(() => {
    if (b !== void 0)
      for (E of b)
        E.a?.apply();
  }), e.first = r.first && r.first.e, e.last = y && y.e;
  for (var oe of n.values())
    Ee(oe.e);
  n.clear();
}
function Dl(e, t, r, n) {
  (n & Mn) !== 0 && or(e.v, t), (n & Fn) !== 0 ? or(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Co(e, t, r, n, i, a, o, l, u, s, f) {
  var d = (u & Mn) !== 0, p = (u & za) === 0, h = d ? p ? /* @__PURE__ */ oo(i, !1, !1) : Ot(i) : i, v = (u & Fn) === 0 ? o : Ot(o), g = {
    i: v,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var y = document.createDocumentFragment();
      y.append(e = et());
    }
    return g.e = ze(() => l(
      /** @type {Node} */
      e,
      h,
      v,
      s
    ), X), g.e.prev = r && r.e, g.e.next = n && n.e, r === null ? f || (t.first = g) : (r.next = g, r.e.next = g.e), n !== null && (n.prev = g, n.e.prev = g.e), g;
  } finally {
  }
}
function on(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== null && a !== n; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nt(a)
    );
    i.before(a), a = o;
  }
}
function We(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function $e(e, t, r) {
  mo(() => {
    var n = zt(() => t(e, r?.()) || {});
    if (r && n?.update) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Pn(() => {
        var o = r();
        dl(o), i && Li(a, o) && (a = o, n.update(o));
      }), i = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function ii(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var a = e[i];
    a != null && a !== "" && (n += " " + i + ": " + a + r);
  }
  return n;
}
function Ul(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += ii(n)), i && (r += ii(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function an(e, t = {}, r, n) {
  for (var i in r) {
    var a = r[i];
    t[i] !== a && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, n));
  }
}
function $(e, t, r, n) {
  var i = e.__style;
  if (X || i !== t) {
    var a = Ul(t, n);
    (!X || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
  } else n && (Array.isArray(n) ? (an(e, r?.[0], n[0]), an(e, r?.[1], n[1], "important")) : an(e, r, n));
  return n;
}
const kl = Symbol("is custom element"), Nl = Symbol("is html");
function M(e, t, r, n) {
  var i = Il(e);
  X && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Aa] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ll(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Il(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [kl]: e.nodeName.includes("-"),
      [Nl]: e.namespaceURI === Ha
    }
  );
}
var oi = /* @__PURE__ */ new Map();
function Ll(e) {
  var t = e.getAttribute("is") || e.nodeName, r = oi.get(t);
  if (r) return r;
  oi.set(t, r = []);
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = ki(i);
    for (var o in n)
      n[o].set && r.push(o);
    i = Tn(i);
  }
  return r;
}
function ai(e, t) {
  return e === t || e?.[Ut] === t;
}
function xn(e = {}, t, r, n) {
  return mo(() => {
    var i, a;
    return Pn(() => {
      i = a, a = [], zt(() => {
        e !== r(...a) && (t(e, ...a), i && ai(r(...i), e) && t(null, ...i));
      });
    }), () => {
      ur(() => {
        a && ai(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
let Br = !1;
function Ol(e) {
  var t = Br;
  try {
    return Br = !1, [e(), Br];
  } finally {
    Br = t;
  }
}
function T(e, t, r, n) {
  var i = (r & Xa) !== 0, a = (r & Ya) !== 0, o = (
    /** @type {V} */
    n
  ), l = !0, u = () => (l && (l = !1, o = a ? zt(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), o), s;
  if (i) {
    var f = Ut in e || Pi in e;
    s = Jt(e, t)?.set ?? (f && t in e ? (w) => e[t] = w : void 0);
  }
  var d, p = !1;
  i ? [d, p] = Ol(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t], d === void 0 && n !== void 0 && (d = u(), s && (ka(), s(d)));
  var h;
  if (h = () => {
    var w = (
      /** @type {V} */
      e[t]
    );
    return w === void 0 ? u() : (l = !0, w);
  }, (r & Va) === 0)
    return h;
  if (s) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(w, x) {
        return arguments.length > 0 ? ((!x || v || p) && s(x ? h() : w), w) : h();
      })
    );
  }
  var g = !1, y = ((r & Ga) !== 0 ? Yr : to)(() => (g = !1, h()));
  i && c(y);
  var b = (
    /** @type {Effect} */
    Y
  );
  return (
    /** @type {() => V} */
    (function(w, x) {
      if (arguments.length > 0) {
        const F = x ? c(y) : i ? Pt(w) : w;
        return L(y, F), g = !0, o !== void 0 && (o = F), w;
      }
      return $t && g || (b.f & wt) !== 0 ? y.v : c(y);
    })
  );
}
var ql = /* @__PURE__ */ gt('<g><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect></g>');
function $l(e, t) {
  Tt(t, !0);
  let r = /* @__PURE__ */ U(() => t.pointLocation(t.value.xMin, t.value.yMin)), n = /* @__PURE__ */ U(() => t.pointLocation(t.value.xMax, t.value.yMax));
  const i = 8;
  function a(y) {
    return (b) => {
      t.preventHover(!0);
      let w = [c(r).x, c(r).y, c(n).x, c(n).y];
      return {
        move: (x) => {
          let F = x.pageX - b.pageX, R = x.pageY - b.pageY, E = [F, R, F, R].map((Z, te) => w[te] + Z * y[te]), B = t.coordinateAtPoint(E[0], E[1]), N = t.coordinateAtPoint(E[2], E[3]);
          t.onChange({
            xMin: Math.min(B.x, N.x),
            xMax: Math.max(B.x, N.x),
            yMin: Math.min(B.y, N.y),
            yMax: Math.max(B.y, N.y)
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
  var o = ql(), l = pe(o);
  $(l, "", {}, {
    stroke: "#fff",
    fill: "rgba(128,128,128,0.25)",
    cursor: "move"
  }), $e(l, (y, b) => je?.(y, b), () => ({ drag: a([1, 1, 1, 1]) }));
  var u = ne(l);
  M(u, "width", i), $(u, "", {}, {
    cursor: "ew-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), $e(u, (y, b) => je?.(y, b), () => ({ drag: a([1, 0, 0, 0]) }));
  var s = ne(u);
  M(s, "width", i), $(s, "", {}, {
    cursor: "ew-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), $e(s, (y, b) => je?.(y, b), () => ({ drag: a([0, 0, 1, 0]) }));
  var f = ne(s);
  M(f, "height", i), $(f, "", {}, {
    cursor: "ns-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), $e(f, (y, b) => je?.(y, b), () => ({ drag: a([0, 1, 0, 0]) }));
  var d = ne(f);
  M(d, "height", i), $(d, "", {}, {
    cursor: "ns-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), $e(d, (y, b) => je?.(y, b), () => ({ drag: a([0, 0, 0, 1]) }));
  var p = ne(d);
  M(p, "width", i), M(p, "height", i), $(p, "", {}, {
    cursor: "nesw-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), $e(p, (y, b) => je?.(y, b), () => ({ drag: a([1, 1, 0, 0]) }));
  var h = ne(p);
  M(h, "width", i), M(h, "height", i), $(h, "", {}, {
    cursor: "nwse-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), $e(h, (y, b) => je?.(y, b), () => ({ drag: a([1, 0, 0, 1]) }));
  var v = ne(h);
  M(v, "width", i), M(v, "height", i), $(v, "", {}, {
    cursor: "nwse-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), $e(v, (y, b) => je?.(y, b), () => ({ drag: a([0, 1, 1, 0]) }));
  var g = ne(v);
  M(g, "width", i), M(g, "height", i), $(g, "", {}, {
    cursor: "nesw-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), $e(g, (y, b) => je?.(y, b), () => ({ drag: a([0, 0, 1, 1]) })), fe(o), Ne(
    (y, b, w, x, F, R, E, B, N, Z, te, j) => {
      M(l, "x", y), M(l, "width", b), M(l, "y", w), M(l, "height", x), M(u, "x", c(r).x - i / 2), M(u, "y", F), M(u, "height", R), M(s, "x", c(n).x - i / 2), M(s, "y", E), M(s, "height", B), M(f, "x", N), M(f, "width", Z), M(f, "y", c(r).y - i / 2), M(d, "x", te), M(d, "width", j), M(d, "y", c(n).y - i / 2), M(p, "x", c(r).x - i / 2), M(p, "y", c(r).y - i / 2), M(h, "x", c(r).x - i / 2), M(h, "y", c(n).y - i / 2), M(v, "x", c(n).x - i / 2), M(v, "y", c(r).y - i / 2), M(g, "x", c(n).x - i / 2), M(g, "y", c(n).y - i / 2);
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
  ), ue(e, o), Mt();
}
function zl(e, t) {
  let r = !1, n, i, a, o = 300, l = 300, u = async (f) => {
    r = !0;
    try {
      await e(f);
    } catch (d) {
      console.error(d);
    }
    if (r = !1, n !== void 0) {
      let d = n;
      n = void 0, s(d);
    }
  }, s = async (f) => {
    if (r) {
      n = f;
      return;
    }
    let d = (/* @__PURE__ */ new Date()).getTime();
    t() && (i = d);
    let p = !0;
    (i == null || d - i < l) && (p = !1), p ? (a && clearTimeout(a), a = setTimeout(() => u(f), o)) : u(f);
  };
  return s;
}
function Gl(e, t) {
  let r = e.x - t.x, n = e.y - t.y;
  return Math.sqrt(r * r + n * n);
}
function Vl(e) {
  return "M " + e.map(({ x: t, y: r }) => `${t},${r}`).join(" L ") + " Z";
}
function Po(e) {
  let t = 1 / 0, r = -1 / 0, n = 1 / 0, i = -1 / 0;
  for (let { x: a, y: o } of e)
    t = Math.min(t, a), n = Math.min(n, o), r = Math.max(r, a), i = Math.max(i, o);
  return { xMin: t, yMin: n, xMax: r, yMax: i };
}
async function Xl(e) {
  let t = JSON.stringify(e);
  return jl(t);
}
function _t(e, t) {
  if (e === t)
    return !0;
  if (e === null || t === null || typeof e != "object" || typeof t != "object" || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (let r in e)
    if (t.hasOwnProperty(r)) {
      if (!_t(e[r], t[r]))
        return !1;
    } else
      return !1;
  return !0;
}
function Yl(e, t = 0) {
  let r = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    r = Math.imul(r ^ a, 2654435761), n = Math.imul(n ^ a, 1597334677);
  }
  return r = Math.imul(r ^ r >>> 16, 2246822507), r ^= Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(r ^ r >>> 13, 3266489909), [n >>> 0, r >>> 0];
}
function jl(e) {
  let t = new TextEncoder().encode(e), r = Yl(t);
  return r[0].toString(16).padStart(8, "0") + r[1].toString(16).padStart(8, "0");
}
var Wl = /* @__PURE__ */ gt("<path></path>");
function Hl(e, t) {
  Tt(t, !0);
  let r = /* @__PURE__ */ U(() => t.value.map(({ x: i, y: a }) => t.pointLocation(i, a)));
  var n = Wl();
  $(n, "", {}, { stroke: "#fff", fill: "rgba(128,128,128,0.25)" }), Ne((i) => M(n, "d", i), [() => Vl(c(r))]), ue(e, n), Mt();
}
const Ql = {
  marquee: "M7 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1-.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75M4.75 8a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5A.75.75 0 0 0 4.75 8m14.5 0a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75M8.75 20a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5zM5 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4M21 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4",
  lasso: "M9.703 2.265A10 10 0 0 1 12 2c.79 0 1.559.092 2.297.265a.75.75 0 1 1-.343 1.46A8.5 8.5 0 0 0 12 3.5a8.6 8.6 0 0 0-1.954.225a.75.75 0 1 1-.343-1.46m-1.93 1.47a.75.75 0 0 1-.242 1.033a8.55 8.55 0 0 0-2.763 2.763a.75.75 0 1 1-1.275-.79a10.05 10.05 0 0 1 3.248-3.248a.75.75 0 0 1 1.032.243m8.454 0a.75.75 0 0 1 1.032-.242a10.05 10.05 0 0 1 3.248 3.248a.75.75 0 1 1-1.275.79a8.55 8.55 0 0 0-2.763-2.763a.75.75 0 0 1-.242-1.032m-13.06 5.41a.75.75 0 0 1 .558.901A8.5 8.5 0 0 0 3.5 12c0 .673.078 1.327.225 1.954a.75.75 0 1 1-1.46.343A10 10 0 0 1 2 12c0-.79.092-1.559.265-2.297a.75.75 0 0 1 .902-.559m17.666 0a.75.75 0 0 1 .902.558a10.1 10.1 0 0 1 0 4.595a.75.75 0 1 1-1.46-.343a8.54 8.54 0 0 0-.001-3.908a.75.75 0 0 1 .559-.902M3.736 16.226a.75.75 0 0 1 1.032.242a8.55 8.55 0 0 0 2.763 2.763a.75.75 0 0 1-.79 1.275a10.05 10.05 0 0 1-3.248-3.248a.75.75 0 0 1 .243-1.032m16.685.858a.75.75 0 1 0-1.342-.67l-.002.004l-.015.029l-.069.123a8 8 0 0 1-.289.466a9.6 9.6 0 0 1-.965 1.219c-1.17-1.073-2.756-2.006-4.74-2.006c-2.347 0-3.99 1.203-3.99 2.875S10.653 22 13 22c1.942 0 3.495-.75 4.658-1.645a11.7 11.7 0 0 1 1.315 2.01q.05.099.073.149l.017.035l.004.009a.75.75 0 0 0 1.368-.615c-.087-.183 0-.001 0-.001v-.002l-.003-.004l-.007-.015l-.024-.052l-.091-.184a13.2 13.2 0 0 0-1.538-2.337a11 11 0 0 0 1.525-2.032l.09-.162l.024-.047l.007-.014l.002-.005zM13 17.75c1.433 0 2.644.652 3.616 1.512c-.95.7-2.155 1.238-3.616 1.238c-1.973 0-2.49-.922-2.49-1.375s.517-1.375 2.49-1.375"
};
var Zl = /* @__PURE__ */ gt('<svg width="24" height="24" viewBox="0 0 24 24"><path></path></svg>'), Jl = /* @__PURE__ */ Ft("<button><!></button>");
function li(e, t) {
  let r = T(t, "active", 3, !1);
  var n = Jl();
  n.__click = function(...l) {
    t.onClick?.apply(this, l);
  };
  let i;
  var a = pe(n);
  {
    var o = (l) => {
      var u = Zl();
      $(u, "", {}, { width: "14px", height: "14px" });
      var s = pe(u);
      $(s, "", {}, { fill: "currentColor" }), fe(u), Ne(() => M(s, "d", Ql[t.icon])), ue(l, u);
    };
    Me(a, (l) => {
      t.icon != null && l(o);
    });
  }
  fe(n), Ne(() => {
    M(n, "title", t.title), i = $(n, "", i, {
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
  }), ue(e, n);
}
bl(["click"]);
var Kl = /* @__PURE__ */ Ft('<div><div> </div> <svg height="6px"><line shape-rendering="crispEdges"></line><line shape-rendering="crispEdges"></line><line shape-rendering="crispEdges"></line></svg></div>');
function eu(e, t) {
  function r(p, h) {
    let v = Math.log10(h * p), g = Math.round(v), y = [0.1, 0.2, 0.5, 1, 2, 5, 10], b = 0, w = 1e10;
    for (let x of y) {
      let F = Math.abs(Math.log10(x) + g - v);
      F < w && (b = x, w = F);
    }
    return b * Math.pow(10, g);
  }
  let n = /* @__PURE__ */ U(() => r(t.distancePerPoint, 30)), i = /* @__PURE__ */ U(() => c(n) / t.distancePerPoint);
  var a = Kl();
  $(a, "", {}, { display: "flex", "align-items": "center" });
  var o = pe(a);
  $(o, "", {}, { "padding-right": "4px" });
  var l = pe(o, !0);
  fe(o);
  var u = ne(o, 2), s = pe(u);
  M(s, "x1", 1), M(s, "y1", 3), M(s, "y2", 3), $(s, "", {}, {
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-cap": "butt"
  });
  var f = ne(s);
  M(f, "x1", 1), M(f, "x2", 1), M(f, "y1", 0), M(f, "y2", 6), $(f, "", {}, { stroke: "currentColor" });
  var d = ne(f);
  M(d, "y1", 0), M(d, "y2", 6), $(d, "", {}, { stroke: "currentColor" }), fe(u), fe(a), Ne(
    (p) => {
      mr(l, p), M(u, "width", `${c(i) + 2}px`), M(s, "x2", c(i) + 1), M(d, "x1", c(i) + 1), M(d, "x2", c(i) + 1);
    },
    [() => c(n).toLocaleString()]
  ), ue(e, a);
}
var tu = /* @__PURE__ */ Ft("<div> </div>"), ru = /* @__PURE__ */ Ft('<a target="_blank"> </a> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div>', 1), nu = /* @__PURE__ */ Ft('<div><div><!></div> <div></div> <div><!> <!> <!> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div> <!> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div> <span> </span></div></div>');
function iu(e, t) {
  Tt(t, !0);
  let r = T(t, "statusMessage", 3, null);
  var n = nu();
  let i;
  var a = pe(n);
  let o;
  var l = pe(a);
  {
    var u = (x) => {
      var F = tu();
      $(F, "", {}, { display: "inline-block" });
      var R = pe(F, !0);
      fe(F), Ne(() => mr(R, r())), ue(x, F);
    };
    Me(l, (x) => {
      r() != null && x(u);
    });
  }
  fe(a);
  var s = ne(a, 2);
  $(s, "", {}, { flex: "1 1 0%" });
  var f = ne(s, 2);
  let d;
  var p = pe(f);
  {
    var h = (x) => {
      var F = ru(), R = Ht(F);
      $(R, "", {}, { color: "currentColor", "text-decoration": "underline" });
      var E = pe(R, !0);
      fe(R), Xi(2), Ne(() => {
        M(R, "href", t.resolvedTheme.brandingLink.href), mr(E, t.resolvedTheme.brandingLink.text);
      }), ue(x, F);
    };
    Me(p, (x) => {
      t.resolvedTheme.brandingLink != null && x(h);
    });
  }
  var v = ne(p, 2);
  {
    let x = /* @__PURE__ */ U(() => t.selectionMode == "marquee");
    li(v, {
      icon: "marquee",
      get active() {
        return c(x);
      },
      title: "Toggle rectangle selection mode. In normal mode, use shift + drag for rectangle selection.",
      onClick: () => t.onSelectionMode(t.selectionMode == "marquee" ? "none" : "marquee")
    });
  }
  var g = ne(v, 2);
  {
    let x = /* @__PURE__ */ U(() => t.selectionMode == "lasso");
    li(g, {
      icon: "lasso",
      get active() {
        return c(x);
      },
      title: "Toggle lasso selection mode. In normal mode, use shift + meta + drag for lasso selection.",
      onClick: () => t.onSelectionMode(t.selectionMode == "lasso" ? "none" : "lasso")
    });
  }
  var y = ne(g, 4);
  eu(y, {
    get distancePerPoint() {
      return t.distancePerPoint;
    }
  });
  var b = ne(y, 4), w = pe(b);
  fe(b), fe(f), fe(n), Ne(
    (x) => {
      i = $(n, "", i, {
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
      }), o = $(a, "", o, {
        flex: "none",
        display: "flex",
        "flex-direction": "row",
        gap: "4px",
        padding: "0px 4px",
        "border-radius": "2px",
        background: t.resolvedTheme.statusBarBackgroundColor
      }), d = $(f, "", d, {
        flex: "none",
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        gap: "4px",
        padding: "0px 4px",
        "border-radius": "2px",
        background: t.resolvedTheme.statusBarBackgroundColor
      }), mr(w, `${x ?? ""} points`);
    },
    [() => t.pointCount.toLocaleString()]
  ), ue(e, n), Mt();
}
function ou(e) {
  return (t, r) => {
    let n = new e(t, r);
    return {
      ...n.update ? { update: n.update.bind(n) } : {},
      ...n.destroy ? { destroy: n.destroy.bind(n) } : {}
    };
  };
}
let ln = /* @__PURE__ */ new WeakMap();
function Do(e) {
  let t = typeof e == "function" ? e : e.class;
  if (ln.has(t))
    return ln.get(t);
  {
    let r = ou(t);
    return ln.set(t, r), r;
  }
}
function Uo(e, t) {
  return typeof e == "function" ? t : { ...e.props ?? {}, ...t };
}
var au = /* @__PURE__ */ Ft("<div><div></div></div>");
function lu(e, t) {
  Tt(t, !0);
  let r = T(t, "margin", 3, 4), n, i, a = /* @__PURE__ */ U(() => Do(t.customTooltip)), o = /* @__PURE__ */ U(() => Uo(t.customTooltip, { tooltip: t.tooltip }));
  kn(() => {
    yr(() => {
      let s = c(a), f = null;
      return yr(() => {
        i.style.left = "0px", i.style.top = "0px", i.style.pointerEvents = t.allowInteraction ? "all" : "none", f == null ? f = s(i, c(o)) : f.update?.(c(o));
        function d(y, b, w, x) {
          let F = t.location.x, R = t.location.y, E = 2, B = y / 2, N = b + (t.targetHeight + r());
          F - B < w && (B = F - w), F - B > x - y && (B = F - x + y), R - N < E && (N = -(t.targetHeight + r())), i.style.left = F - B + "px", i.style.top = R - N + "px";
        }
        let p = n.getBoundingClientRect(), { width: h, height: v } = i.getBoundingClientRect();
        d(h, v, 2, p.width - 2);
        let g = requestAnimationFrame(() => {
          g = null;
          let y = i.getBoundingClientRect();
          (y.width != h || y.height != v) && d(y.width, y.height, 2, p.width - 2);
        });
        return () => {
          g != null && cancelAnimationFrame(g);
        };
      }), () => {
        f?.destroy?.(), i.replaceChildren();
      };
    });
  });
  var l = au();
  $(l, "", {}, { position: "absolute", width: "100%" });
  var u = pe(l);
  $(u, "", {}, {
    display: "flex",
    position: "absolute",
    width: "fit-content",
    height: "fit-content",
    "z-index": "100"
  }), xn(u, (s) => i = s, () => i), fe(l), xn(l, (s) => n = s, () => n), ue(e, l), Mt();
}
function Nn(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function ko(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Tr() {
}
var wr = 0.7, Ir = 1 / wr, er = "\\s*([+-]?\\d+)\\s*", Ar = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Je = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", uu = /^#([0-9a-f]{3,8})$/, su = new RegExp(`^rgb\\(${er},${er},${er}\\)$`), fu = new RegExp(`^rgb\\(${Je},${Je},${Je}\\)$`), cu = new RegExp(`^rgba\\(${er},${er},${er},${Ar}\\)$`), hu = new RegExp(`^rgba\\(${Je},${Je},${Je},${Ar}\\)$`), du = new RegExp(`^hsl\\(${Ar},${Je},${Je}\\)$`), pu = new RegExp(`^hsla\\(${Ar},${Je},${Je},${Ar}\\)$`), ui = {
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
Nn(Tr, In, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: si,
  // Deprecated! Use color.formatHex.
  formatHex: si,
  formatHex8: vu,
  formatHsl: gu,
  formatRgb: fi,
  toString: fi
});
function si() {
  return this.rgb().formatHex();
}
function vu() {
  return this.rgb().formatHex8();
}
function gu() {
  return Io(this).formatHsl();
}
function fi() {
  return this.rgb().formatRgb();
}
function In(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = uu.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? ci(t) : r === 3 ? new Se(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Cr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Cr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = su.exec(e)) ? new Se(t[1], t[2], t[3], 1) : (t = fu.exec(e)) ? new Se(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = cu.exec(e)) ? Cr(t[1], t[2], t[3], t[4]) : (t = hu.exec(e)) ? Cr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = du.exec(e)) ? pi(t[1], t[2] / 100, t[3] / 100, 1) : (t = pu.exec(e)) ? pi(t[1], t[2] / 100, t[3] / 100, t[4]) : ui.hasOwnProperty(e) ? ci(ui[e]) : e === "transparent" ? new Se(NaN, NaN, NaN, 0) : null;
}
function ci(e) {
  return new Se(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Cr(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Se(e, t, r, n);
}
function yu(e) {
  return e instanceof Tr || (e = In(e)), e ? (e = e.rgb(), new Se(e.r, e.g, e.b, e.opacity)) : new Se();
}
function No(e, t, r, n) {
  return arguments.length === 1 ? yu(e) : new Se(e, t, r, n ?? 1);
}
function Se(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Nn(Se, No, ko(Tr, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Se(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wr : Math.pow(wr, e), new Se(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Se(It(this.r), It(this.g), It(this.b), Lr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: hi,
  // Deprecated! Use color.formatHex.
  formatHex: hi,
  formatHex8: mu,
  formatRgb: di,
  toString: di
}));
function hi() {
  return `#${Dt(this.r)}${Dt(this.g)}${Dt(this.b)}`;
}
function mu() {
  return `#${Dt(this.r)}${Dt(this.g)}${Dt(this.b)}${Dt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function di() {
  const e = Lr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${It(this.r)}, ${It(this.g)}, ${It(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Lr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function It(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Dt(e) {
  return e = It(e), (e < 16 ? "0" : "") + e.toString(16);
}
function pi(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ge(e, t, r, n);
}
function Io(e) {
  if (e instanceof Ge) return new Ge(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tr || (e = In(e)), !e) return new Ge();
  if (e instanceof Ge) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, l = a - i, u = (a + i) / 2;
  return l ? (t === a ? o = (r - n) / l + (r < n) * 6 : r === a ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : l = u > 0 && u < 1 ? 0 : o, new Ge(o, l, u, e.opacity);
}
function xu(e, t, r, n) {
  return arguments.length === 1 ? Io(e) : new Ge(e, t, r, n ?? 1);
}
function Ge(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Nn(Ge, xu, ko(Tr, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Ge(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wr : Math.pow(wr, e), new Ge(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Se(
      un(e >= 240 ? e - 240 : e + 120, i, n),
      un(e, i, n),
      un(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Ge(vi(this.h), Pr(this.s), Pr(this.l), Lr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Lr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${vi(this.h)}, ${Pr(this.s) * 100}%, ${Pr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function vi(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function un(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const gi = [
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
], Dr = [
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
function Hr(e) {
  if (e < 1 && (e = 1), e <= gi.length)
    return gi.slice(0, e);
  if (e <= Dr.length)
    return Dr.slice(0, e);
  {
    let t = [];
    for (let r = 0; r < e; r++)
      t[r] = Dr[r % Dr.length];
    return t;
  }
}
function Ln(e) {
  let { r: t, g: r, b: n, opacity: i } = No(e);
  return { r: t / 255, g: r / 255, b: n / 255, a: i };
}
function Lo() {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1];
}
function On(e, t) {
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
function Oo(e, t) {
  return [
    t[0] * e[0] + t[3] * e[1] + t[6] * e[2],
    t[1] * e[0] + t[4] * e[1] + t[7] * e[2],
    t[2] * e[0] + t[5] * e[1] + t[8] * e[2]
  ];
}
function _u(e) {
  return e[0] * e[4] * e[8] - e[0] * e[5] * e[7] - e[1] * e[3] * e[8] + e[1] * e[5] * e[6] + e[2] * e[3] * e[7] - e[2] * e[4] * e[6];
}
function qo(e) {
  let t = _u(e);
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
class Qr {
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
    let { x: t, y: r, scale: n } = this.viewport, i = n, a = n;
    this.width < this.height ? i *= this.height / this.width : a *= this.width / this.height, this._matrix = [i, 0, 0, 0, a, 0, -t * i, -r * a, 1], this._pixel_kx = this._matrix[0] * this.width / 2, this._pixel_bx = (this._matrix[6] + 1) * this.width / 2, this._pixel_ky = -this._matrix[4] * this.height / 2, this._pixel_by = (-this._matrix[7] + 1) * this.height / 2;
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
    return (a, o) => ({ x: a * t + n, y: o * r + i });
  }
  coordinateAtPixelFunction() {
    let t = this._pixel_kx, r = this._pixel_ky, n = this._pixel_bx, i = this._pixel_by;
    return (a, o) => ({ x: (a - n) / t, y: (o - i) / r });
  }
}
class _n {
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
let sr = class extends _n {
  _value = null;
  setValue(e) {
    this._value !== e && (this._value = e, this.setNeedsRunDownstream());
  }
  get value() {
    return this.run(), this._value;
  }
};
class $o extends sr {
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
class bu extends sr {
  fn;
  constructor(t, r) {
    super(r), this.fn = t;
  }
  update() {
    this.setValue(this.fn());
  }
}
class wu extends sr {
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
class Au extends sr {
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
    (this.currentNode == null || this.currentCondition !== this.condition.value) && (this.currentNode && this.removeInput(this.currentNode), this.context?.destroy(), this.context = new Gt(this.parent), this.currentCondition = this.condition.value, this.currentCondition ? this.currentNode = this.buildTrue(this.context) : this.currentNode = this.buildFalse(this.context), this.addInput(this.currentNode)), this.setValue(this.currentNode.value);
  }
  destroy() {
    super.destroy(), this.context?.destroy();
  }
}
class Ru extends sr {
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
        let i = new Gt(this.parent), a = new $o(n), o = this.build(i, a);
        return this.cache.set(n, { context: i, input: a, output: o }), this.addInput(o), o.value;
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
class Eu extends sr {
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
    (this.currentNode == null || this.input.value !== this.currentCase) && (this.currentNode && this.removeInput(this.currentNode), this.currentContext?.destroy(), this.currentContext = new Gt(this.parent), this.currentCase = this.input.value, this.currentNode = this.cases[this.currentCase](this.currentContext), this.addInput(this.currentNode)), this.setValue(this.currentNode.value);
  }
  destroy() {
    super.destroy(), this.currentContext?.destroy();
  }
}
class Gt {
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
    let r = new $o(t);
    return this._nodes.add(r), r;
  }
  /** Creates a derived value. */
  derive(t, r) {
    let n = t.map((a) => a instanceof _n ? a : this.value(a)), i = new bu(() => r(...n.map((a) => a.value)), n);
    return this._nodes.add(i), i;
  }
  /** Creates a stateful derived value. */
  statefulDerive(t, r) {
    let n = t.map((a) => a instanceof _n ? a : this.value(a)), i = new wu((a) => r(a, ...n.map((o) => o.value)), n);
    return this._nodes.add(i), i;
  }
  /** Creates a true or false dataflow depending on the value of the condition. */
  if(t, r, n) {
    let i = new Au(this, t, r, n);
    return this._nodes.add(i), i;
  }
  switch(t, r) {
    let n = new Eu(this, t, r);
    return this._nodes.add(n), n;
  }
  map(t, r) {
    let n = new Ru(this, t, r);
    return this._nodes.add(n), n;
  }
  assertNotNull(t) {
    return t;
  }
  subgraph() {
    return new Gt(this);
  }
}
function rt(e, t, r, n) {
  if (e.program == null || e.vsSource != r || e.fsSource != n) {
    e.destroy && e.destroy();
    let a = yi(t, t.VERTEX_SHADER, r), o = yi(t, t.FRAGMENT_SHADER, n), l = t.createProgram();
    if (t.attachShader(l, a), t.attachShader(l, o), t.linkProgram(l), !t.getProgramParameter(l, t.LINK_STATUS)) {
      var i = t.getProgramInfoLog(l);
      throw new Error(`failed to link program: ${i}, vertex source: ${r}, fragment source: ${n}`);
    }
    e.program = l, e.vsSource = r, e.fsSource = n, e.destroy = () => {
      t.deleteProgram(l), t.deleteShader(a), t.deleteShader(o);
    }, e.uniforms = {};
    for (let u of (r + n).matchAll(/uniform +[0-9a-zA-Z_]+ +([0-9a-zA-Z_]+) *(;|\[)/g)) {
      let s = u[1];
      e.uniforms[s] = t.getUniformLocation(l, s);
    }
  }
  return { program: e.program, uniforms: e.uniforms ?? {} };
}
function yi(e, t, r) {
  let n = e.createShader(t);
  if (e.shaderSource(n, r), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) {
    var i = e.getShaderInfoLog(n);
    throw new Error(`failed to compile shader: ${i}, source: ${r}`);
  }
  return n;
}
function Ke(e, t, r, n) {
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
function Tu(e, t, r, n, i) {
  const a = {
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
  let [o, l, u] = a[i][n];
  e.texImage2D(e.TEXTURE_2D, 0, o, t, r, 0, l, u, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
}
function bt(e, t, r, n, i, a) {
  if (e.framebuffer == null || e.texture == null) {
    let l = t.createFramebuffer(), u = t.createTexture();
    t.bindFramebuffer(t.FRAMEBUFFER, l), t.bindTexture(t.TEXTURE_2D, u), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, u, 0), t.bindTexture(t.TEXTURE_2D, null), t.bindFramebuffer(t.FRAMEBUFFER, null), e.framebuffer = l, e.texture = u, e.destroy = () => {
      t.deleteFramebuffer(l), t.deleteTexture(u);
    };
  }
  let o = `${r},${n},${i},${a}`;
  return e.cacheKey != o && (e.cacheKey = o, t.bindTexture(t.TEXTURE_2D, e.texture), Tu(t, r, n, i, a), t.bindTexture(t.TEXTURE_2D, null)), {
    framebuffer: e.framebuffer,
    texture: e.texture,
    width: r,
    height: n
  };
}
function Mu(e) {
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
  `, a = `#version 300 es
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
        ${r.map(({ x: o, y: l, w: u }) => `color -= texture(image, uv + vec2(${o.toFixed(8)}, ${l.toFixed(8)}) / resolution) * (${u.toFixed(8)})`).join(";")};
      }
      outColor = color * scaler;
    }
  `;
  return { vertex: n, fragment1: i, fragment2: a };
}
function Fu(e, t, r) {
  let n = e.derive([r], Su), i = e.derive([n], Mu), a = e.statefulDerive(
    [t, e.derive([i], (u) => u.vertex), e.derive([i], (u) => u.fragment1)],
    rt
  ), o = e.statefulDerive(
    [t, e.derive([i], (u) => u.vertex), e.derive([i], (u) => u.fragment2)],
    rt
  ), l = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], Ke);
  return e.derive(
    [t, l, a, o, r, n],
    (u, s, f, d, p, h) => (v, g, y) => {
      let { width: b, height: w } = g;
      u.disable(u.BLEND), u.enableVertexAttribArray(0), u.bindBuffer(u.ARRAY_BUFFER, s), u.vertexAttribPointer(0, 2, u.FLOAT, !1, 0, 0), u.bindBuffer(u.ARRAY_BUFFER, null), u.useProgram(f.program), u.uniform2f(f.uniforms.resolution, b, w), u.uniform1i(f.uniforms.image, 0), u.bindFramebuffer(u.FRAMEBUFFER, g.framebuffer), u.bindTexture(u.TEXTURE_2D, v), u.uniform2f(f.uniforms.direction, 0, 1), u.drawArrays(u.TRIANGLE_STRIP, 0, 4), u.bindFramebuffer(u.FRAMEBUFFER, y.framebuffer), u.bindTexture(u.TEXTURE_2D, g.texture), u.uniform2f(f.uniforms.direction, 1, 0), u.drawArrays(u.TRIANGLE_STRIP, 0, 4), u.bindFramebuffer(u.FRAMEBUFFER, g.framebuffer), u.activeTexture(u.TEXTURE1), u.bindTexture(u.TEXTURE_2D, y.texture), u.activeTexture(u.TEXTURE0), u.bindTexture(u.TEXTURE_2D, v), u.useProgram(d.program), u.uniform2f(d.uniforms.resolution, b, w), u.uniform1i(d.uniforms.image, 0), u.uniform1i(d.uniforms.imageBox, 1);
      let x = 1 / h.totalWeight * p * p * Math.PI;
      u.uniform1f(d.uniforms.scaler, x), u.drawArrays(u.TRIANGLE_STRIP, 0, 4), u.bindFramebuffer(u.FRAMEBUFFER, null), u.useProgram(null), u.activeTexture(u.TEXTURE1), u.bindTexture(u.TEXTURE_2D, null), u.activeTexture(u.TEXTURE0), u.bindTexture(u.TEXTURE_2D, null), u.disableVertexAttribArray(0);
    }
  );
}
function mi(e, t, r) {
  let n = Math.sqrt(t * t + r * r);
  if (n < e - Math.sqrt(2) / 2)
    return 1;
  if (n > e + Math.sqrt(2) / 2)
    return 0;
  let i = 2, a = 0;
  for (let o = 0; o < i; o++)
    for (let l = 0; l < i; l++) {
      let u = t + (o + 0.5) / i - 0.5, s = r + (l + 0.5) / i - 0.5;
      Math.sqrt(u * u + s * s) < e && (a += 1);
    }
  return a / i / i;
}
function Su(e) {
  let t = Math.floor(e + 0.5), r = t, n = mi(e, 0, 0), i = [];
  for (let l = -t; l <= t; l++)
    for (let u = -t; u <= t; u++) {
      let s = n - mi(e, l, u);
      if (!(s <= 0))
        if (i.length > 0 && l == i[i.length - 1].x && u == i[i.length - 1].y + 1) {
          let f = i[i.length - 1].w, d = s;
          i[i.length - 1].y += 1 - f / (f + d), i[i.length - 1].w = f + d;
        } else
          i.push({ x: l, y: u, w: s });
    }
  i = i.sort((l, u) => l.y != u.y ? l.y - u.y : l.x - u.x);
  let a = [];
  for (let { x: l, y: u, w: s } of i)
    if (a.length > 0 && u == a[a.length - 1].y && l == a[a.length - 1].x + 1) {
      let f = a[a.length - 1].w, d = s;
      a[a.length - 1].x += 1 - f / (f + d), a[a.length - 1].w = f + d;
    } else
      a.push({ x: l, y: u, w: s });
  let o = -a.reduce((l, u) => l + u.w, 0);
  return o += n * (1 + r * 2) * (1 + r * 2), { squareMaxSize: r, squareWeight: n, samples: a, totalWeight: o };
}
function Bu(e) {
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
function bn(e, t, r, n, i, a) {
  let o = i != null, l = Bu(o), u = e.statefulDerive([t, l.vertex, l.fragment], rt);
  return e.derive([t, u, r, n, i, a], (s, f, d, p, h, v) => (g) => {
    s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE), s.useProgram(f.program), s.enableVertexAttribArray(0), s.bindBuffer(s.ARRAY_BUFFER, d), s.vertexAttribPointer(0, 1, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(1), s.bindBuffer(s.ARRAY_BUFFER, p), s.vertexAttribPointer(1, 1, s.FLOAT, !1, 0, 0), h != null && (s.enableVertexAttribArray(2), s.bindBuffer(s.ARRAY_BUFFER, h), s.vertexAttribIPointer(2, 1, s.BYTE, 0, 0)), s.bindBuffer(s.ARRAY_BUFFER, null), s.uniformMatrix3fv(f.uniforms.matrix, !1, g), s.drawArrays(s.POINTS, 0, v), s.disableVertexAttribArray(0), s.disableVertexAttribArray(1), h != null && s.disableVertexAttribArray(2), s.useProgram(null);
  });
}
function Cu() {
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
function zo(e, t) {
  let { vertex: r, fragment: n } = Cu(), i = e.statefulDerive([t, r, n], rt), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], Ke);
  return e.derive([t, i, a], (o, l, u) => (s, f, d, p) => {
    o.disable(o.BLEND), o.enableVertexAttribArray(0), o.bindBuffer(o.ARRAY_BUFFER, u), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, null), o.bindTexture(o.TEXTURE_2D, s), o.useProgram(l.program), o.uniform1i(l.uniforms.source, 0), o.uniform2f(l.uniforms.xyScaler, d ?? 1, p ?? 1), o.uniform1f(l.uniforms.gamma, f ?? 2.2), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.useProgram(null), o.bindTexture(o.TEXTURE_2D, null), o.disableVertexAttribArray(0);
  });
}
function Go(e) {
  return Math.ceil(e * 3);
}
function Pu(e) {
  let t = Go(e), r = [];
  for (let l = -t; l <= t; l++)
    r.push(Math.exp(-l * l / e / e / 2));
  let n = r.reduce((l, u) => l + u, 0);
  r = r.map((l) => l / n);
  let i = Uu(r).map(([l, u]) => [l - t, u]), a = `#version 300 es
    precision highp float;
    layout(location=0) in vec2 xy;
    out vec2 uv;
    void main() {
      gl_Position = vec4(xy, 0, 1);
      uv = (xy + 1.0) / 2.0;
    }
  `, o = `#version 300 es
    precision highp float;
    uniform sampler2D image;
    uniform vec2 resolution;
    uniform vec2 direction;
    in vec2 uv;
    out vec4 outColor;

    void main() {
      vec4 color = vec4(0.0);
      ${i.map(([l, u]) => `color += texture(image, uv + direction * vec2(${l.toFixed(10)}) / resolution) * ${u.toFixed(10)};`).join(`
`)}
      outColor = color;
    }
  `;
  return { vertex: a, fragment: o };
}
function Du(e, t, r) {
  let n = e.derive([r], Pu), i = e.statefulDerive(
    [t, e.derive([n], (o) => o.vertex), e.derive([n], (o) => o.fragment)],
    rt
  ), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], Ke);
  return e.derive([t, a, i, r], (o, l, u, s) => (f, d, p) => {
    let { width: h, height: v } = d;
    o.disable(o.BLEND), o.enableVertexAttribArray(0), o.bindBuffer(o.ARRAY_BUFFER, l), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, null), o.useProgram(u.program), o.uniform2f(u.uniforms.resolution, h, v), o.uniform1i(u.uniforms.image, 0), o.bindFramebuffer(o.FRAMEBUFFER, p.framebuffer), o.bindTexture(o.TEXTURE_2D, f), o.uniform2f(u.uniforms.direction, 0, 1), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.bindFramebuffer(o.FRAMEBUFFER, d.framebuffer), o.bindTexture(o.TEXTURE_2D, p.texture), o.uniform2f(u.uniforms.direction, 1, 0), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.bindFramebuffer(o.FRAMEBUFFER, null), o.useProgram(null), o.bindTexture(o.TEXTURE_2D, null), o.disableVertexAttribArray(0);
  });
}
function Uu(e) {
  let t = [];
  for (let r = 0; r < e.length; r += 2)
    if (r + 1 < e.length) {
      let n = e[r], i = e[r + 1], a = 1 - n / (n + i);
      if (a >= 0 && a <= 1) {
        let o = n + i;
        o != 0 && t.push([r + a, o]);
      } else
        t.push([r, e[r]]), t.push([r + 1, e[r + 1]]);
    } else
      t.push([r, e[r]]);
  return t;
}
function ku(e) {
  return Math.ceil(e * 3);
}
function Nu() {
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
function Iu(e, t, r) {
  let { vertex: n, fragment: i } = Nu(), a = e.statefulDerive([t, n, i], rt), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], Ke);
  return e.derive([t, o, a], (l, u, s) => (f, d, p) => {
    let { width: h, height: v } = d;
    l.disable(l.BLEND), l.enableVertexAttribArray(0), l.bindBuffer(l.ARRAY_BUFFER, u), l.vertexAttribPointer(0, 2, l.FLOAT, !1, 0, 0), l.bindBuffer(l.ARRAY_BUFFER, null), l.useProgram(s.program), l.uniform2f(s.uniforms.resolution, h, v), l.uniform1i(s.uniforms.image, 0);
    let g = f, y = p, b = d;
    for (let w = 0; w < 2; w++) {
      l.uniform2f(s.uniforms.direction, w, 1 - w);
      for (let [x, F, R] of Lu) {
        l.bindFramebuffer(l.FRAMEBUFFER, y.framebuffer), l.bindTexture(l.TEXTURE_2D, g), l.uniform1fv(s.uniforms.weight0, F), l.uniform3fv(s.uniforms.distances, x), l.uniform3fv(s.uniforms.weights, R), l.drawArrays(l.TRIANGLE_STRIP, 0, 4), g = y.texture;
        let E = y;
        y = b, b = E;
      }
    }
    l.bindFramebuffer(l.FRAMEBUFFER, null), l.useProgram(null), l.bindTexture(l.TEXTURE_2D, null), l.disableVertexAttribArray(0);
  });
}
const Lu = [
  [[1, 2, 3], [0.2288468365182578], [0.18230006506971572, 0.1356122230111784, 0.06766429365997693]],
  [[2, 6, 10], [0.09116254014100238], [0.23317759354726447, 0.18385867277788717, 0.03738246360434722]],
  [[3, 10, 20], [0.2950645715317288], [0.010918865853671198, 0.23773695670296047, 0.10381189167750389]],
  [[4, 16, 30], [0.20085957073474772], [0.14463019087130788, 0.17934533765938643, 0.07559468610193185]]
];
function Ou() {
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
function qu(e, t) {
  let { vertex: r, fragment: n } = Ou(), i = e.statefulDerive([t, r, n], rt), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], Ke);
  return e.derive(
    [t, i, a],
    (o, l, u) => (s, f, d, p, h, v) => {
      o.enable(o.BLEND), o.blendFunc(o.ONE, o.ONE_MINUS_SRC_ALPHA), o.enableVertexAttribArray(0), o.bindBuffer(o.ARRAY_BUFFER, u), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, null), o.bindTexture(o.TEXTURE_2D, s.texture), o.useProgram(l.program), o.uniform1i(l.uniforms.source, 0), o.uniform2f(l.uniforms.resolution, s.width, s.height), o.uniform1f(l.uniforms.densityScaler, f), o.uniform1f(l.uniforms.quantizationStep, d), o.uniform1f(l.uniforms.globalAlpha, p), o.uniform4fv(l.uniforms.channelMask, h), o.uniform4fv(l.uniforms.color, v), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.useProgram(null), o.bindTexture(o.TEXTURE_2D, null), o.disableVertexAttribArray(0);
    }
  );
}
function $u() {
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
function zu(e, t) {
  let { vertex: r, fragment: n } = $u(), i = e.statefulDerive([t, r, n], rt), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], Ke);
  return e.derive(
    [t, i, a],
    (o, l, u) => (s, f, d, p, h, v) => {
      o.enable(o.BLEND), o.blendFunc(o.ONE, o.ONE_MINUS_SRC_ALPHA), o.enableVertexAttribArray(0), o.bindBuffer(o.ARRAY_BUFFER, u), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, null), o.bindTexture(o.TEXTURE_2D, s.texture), o.useProgram(l.program), o.uniform1i(l.uniforms.source, 0), o.uniform2f(l.uniforms.resolution, s.width, s.height), o.uniform1f(l.uniforms.densityScaler, f), o.uniform1f(l.uniforms.quantizationStep, d), o.uniform1f(l.uniforms.globalAlpha, p), o.uniform1i(l.uniforms.isDarkMode, v == "dark" ? 1 : 0), o.uniformMatrix4fv(l.uniforms.colorMatrix, !1, h), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.useProgram(null), o.bindTexture(o.TEXTURE_2D, null), o.disableVertexAttribArray(0);
    }
  );
}
function Gu(e) {
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
function xi(e, t, r, n, i, a) {
  let o = i != null, l = Gu(o), u = e.statefulDerive([t, l.vertex, l.fragment], rt);
  return e.derive(
    [t, u, r, n, i, a],
    (s, f, d, p, h, v) => (g, y, b, w) => {
      s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA), s.useProgram(f.program), s.enableVertexAttribArray(0), s.bindBuffer(s.ARRAY_BUFFER, d), s.vertexAttribPointer(0, 1, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(1), s.bindBuffer(s.ARRAY_BUFFER, p), s.vertexAttribPointer(1, 1, s.FLOAT, !1, 0, 0), h != null && (s.enableVertexAttribArray(2), s.bindBuffer(s.ARRAY_BUFFER, h), s.vertexAttribIPointer(2, 1, s.BYTE, 0, 0)), s.bindBuffer(s.ARRAY_BUFFER, null), s.uniformMatrix3fv(f.uniforms.matrix, !1, g), s.uniform1f(f.uniforms.point_size, y * 2), s.uniform1f(f.uniforms.alpha, b), o ? s.uniform4fv(f.uniforms.colorScheme, w) : s.uniform4fv(f.uniforms.colorScheme, w.slice(0, 4)), s.drawArrays(s.POINTS, 0, v), s.disableVertexAttribArray(0), s.disableVertexAttribArray(1), h != null && s.disableVertexAttribArray(2), s.useProgram(null);
    }
  );
}
function Vu() {
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
function Xu(e, t) {
  let { vertex: r, fragment: n } = Vu(), i = e.statefulDerive([t, r, n], rt), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], Ke);
  return e.derive(
    [t, i, a],
    (o, l, u) => (s, f, d, p, h) => {
      o.enable(o.BLEND), o.blendFunc(o.ONE, o.ONE_MINUS_SRC_ALPHA), o.enableVertexAttribArray(0), o.bindBuffer(o.ARRAY_BUFFER, u), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, null), o.bindTexture(o.TEXTURE_2D, s.texture), o.useProgram(l.program), o.uniform1i(l.uniforms.source, 0), o.uniform2f(l.uniforms.resolution, s.width, s.height), o.uniform1f(l.uniforms.pointAlpha, f), o.uniform1f(l.uniforms.globalAlpha, d), o.uniform1i(l.uniforms.isDarkMode, h == "dark" ? 1 : 0), o.uniformMatrix4fv(l.uniforms.colorMatrix, !1, p), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.useProgram(null), o.bindTexture(o.TEXTURE_2D, null), o.disableVertexAttribArray(0);
    }
  );
}
class Yu {
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
    }, this.viewport = new Qr({ x: 0, y: 0, scale: 1 }, r, n);
    let i = new Gt(), a = i.value(t);
    this.df = i, this.gl = a, this.renderInputs = {
      mode: i.value(this.props.mode),
      colorScheme: i.value(this.props.colorScheme),
      xData: i.value(this.props.x),
      yData: i.value(this.props.y),
      categoryData: i.value(this.props.category),
      categoryCount: i.value(this.props.categoryCount),
      matrix: i.value(Lo()),
      width: i.value(r),
      height: i.value(n),
      pointSize: i.value(this.props.pointSize),
      densityBandwidth: i.value(this.props.densityBandwidth)
    }, this.dataBuffers = ju(i, a, this.renderInputs), this.renderer = Wu(i, a, this.renderInputs, this.dataBuffers);
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
    let a = this.df.subgraph(), o = Zu(a, this.gl, this.dataBuffers, a.value(t), a.value(r), a.value(n)), { x: l, y: u, scale: s } = i, f = [s, 0, 0, 0, s, 0, -l * s, -u * s, 1], d = o.value(f), p = qo(f);
    return a.destroy(), {
      data: d,
      width: t,
      height: r,
      coordinateAtPixel: (h, v) => {
        let g = h / t * 2 - 1, y = v / r * 2 - 1, b = Oo([g, y, 1], p);
        return { x: b[0], y: b[1] };
      }
    };
  }
}
function ju(e, t, r) {
  const n = e.statefulDerive([t, r.xData, "f32"], Ke), i = e.statefulDerive([t, r.yData, "f32"], Ke), a = e.if(
    e.derive([r.categoryData], (l) => l != null),
    (l) => l.statefulDerive([t, l.assertNotNull(r.categoryData), "u8"], Ke),
    (l) => l.value(null)
  ), o = e.derive([r.xData], (l) => l.length);
  return { x: n, y: i, category: a, count: o };
}
function Wu(e, t, r, n) {
  return e.switch(r.mode, {
    points: (i) => Hu(i, t, r, n),
    density: (i) => Qu(i, t, r, n)
  });
}
function Hu(e, t, r, n) {
  const i = e.derive([r.categoryCount], (u) => u > 1), a = e.statefulDerive([t, r.width, r.height, 4, "f32"], bt);
  let o = e.if(
    i,
    (u) => xi(u, t, n.x, n.y, u.assertNotNull(n.category), n.count),
    (u) => xi(u, t, n.x, n.y, null, n.count)
  ), l = zo(e, t);
  return e.derive(
    [t, a, o, l, r.colorScheme, r.matrix, r.categoryCount],
    (u, s, f, d, p, h, v) => (g) => {
      let y = [], b = g.categoryColors ?? Hr(g.categoryCount);
      for (let w = 0; w < v; w++)
        if (w < b.length) {
          let { r: x, g: F, b: R } = Ln(b[w]);
          x = Math.pow(x, g.gamma), F = Math.pow(F, g.gamma), R = Math.pow(R, g.gamma), y = y.concat([x, F, R, 1]);
        } else
          y = y.concat([0.5, 0.5, 0.5, 1]);
      u.bindFramebuffer(u.FRAMEBUFFER, s.framebuffer), u.viewport(0, 0, s.width, s.height), p == "light" ? u.clearColor(1, 1, 1, 1) : u.clearColor(0, 0, 0, 1), u.clear(u.COLOR_BUFFER_BIT), f(h, Math.max(3, g.pointSize), g.pointAlpha * g.pointsAlpha, y), u.bindFramebuffer(u.FRAMEBUFFER, null), u.viewport(0, 0, g.width, g.height), d(s.texture, g.gamma);
    }
  );
}
function Qu(e, t, r, n) {
  let i = e.derive([r.densityBandwidth], (x) => ku(x) + 1), a = e.derive([r.width, i], (x, F) => x + F * 2), o = e.derive([r.height, i], (x, F) => x + F * 2);
  const l = e.derive([r.categoryCount], (x) => x > 1), u = e.statefulDerive([t, a, o, 4, "f32"], bt), s = e.statefulDerive([t, a, o, 4, "f32"], bt), f = e.statefulDerive([t, a, o, 4, "f32"], bt), d = e.statefulDerive([t, a, o, 4, "f32"], bt);
  let p = e.if(
    l,
    (x) => bn(x, t, n.x, n.y, x.assertNotNull(n.category), n.count),
    (x) => bn(x, t, n.x, n.y, null, n.count)
  ), h = Fu(e, t, r.pointSize), v = Iu(e, t, r.densityBandwidth), g = Xu(e, t), y = zu(e, t), b = qu(e, t), w = zo(e, t);
  return e.derive(
    [
      t,
      u,
      s,
      f,
      d,
      r.colorScheme,
      r.matrix,
      p,
      h,
      v,
      g,
      y,
      b,
      w
    ],
    (x, F, R, E, B, N, Z, te, j, Q, we, K, ve, ie) => (q) => {
      let oe = q.categoryColors ?? Hr(q.categoryCount), ae = [];
      for (let le = 0; le < 4; le++)
        if (le < oe.length) {
          let { r: ge, g: Le, b: ye } = Ln(oe[le]);
          ge = Math.pow(ge, q.gamma), Le = Math.pow(Le, q.gamma), ye = Math.pow(ye, q.gamma), ae = ae.concat([ge, Le, ye, 1]);
        } else
          ae = ae.concat([0.5, 0.5, 0.5, 1]);
      let W = q.width / R.width, Ae = q.height / R.height, de = On([W, 0, 0, 0, Ae, 0, 0, 0, 1], Z);
      if (x.bindFramebuffer(x.FRAMEBUFFER, F.framebuffer), x.viewport(0, 0, F.width, F.height), x.clearColor(0, 0, 0, 0), x.clear(x.COLOR_BUFFER_BIT), te(de), x.bindFramebuffer(x.FRAMEBUFFER, R.framebuffer), x.viewport(0, 0, R.width, R.height), N == "light" ? x.clearColor(1, 1, 1, 1) : x.clearColor(0, 0, 0, 1), x.clear(x.COLOR_BUFFER_BIT), q.pointAlpha > 0 && q.pointsAlpha > 0 && (j(F.texture, E, B), x.bindFramebuffer(x.FRAMEBUFFER, R.framebuffer), we(E, q.pointAlpha, q.pointsAlpha, ae, N)), q.densityScaler > 0 && (q.densityAlpha > 0 || q.contoursAlpha > 0) && (Q(F.texture, E, B), x.bindFramebuffer(x.FRAMEBUFFER, R.framebuffer), q.densityAlpha > 0 && K(
        E,
        q.densityScaler,
        q.densityQuantizationStep,
        q.densityAlpha,
        ae,
        N
      ), q.contoursAlpha > 0))
        for (let le = 0; le < oe.length; le++) {
          let ge = [0, 0, 0, 0];
          ge[le] = 1, ve(
            E,
            q.densityScaler,
            q.densityQuantizationStep,
            q.contoursAlpha,
            ge,
            ae.slice(le * 4, le * 4 + 4)
          );
        }
      x.bindFramebuffer(x.FRAMEBUFFER, null), x.viewport(0, 0, q.width, q.height), ie(R.texture, q.gamma, 1 / W, 1 / Ae);
    }
  );
}
function Zu(e, t, r, n, i, a) {
  let o = e.derive([a], (v) => Go(v) + 1), l = e.derive([n, o], (v, g) => v + g * 2), u = e.derive([i, o], (v, g) => v + g * 2);
  const s = e.statefulDerive([t, l, u, 1, "f32"], bt), f = e.statefulDerive([t, l, u, 1, "f32"], bt), d = e.statefulDerive([t, l, u, 1, "f32"], bt);
  let p = bn(e, t, r.x, r.y, null, r.count), h = Du(e, t, a);
  return e.derive(
    [t, o, n, i, s, f, d, p, h],
    (v, g, y, b, w, x, F, R, E) => (B) => {
      let N = y / w.width, Z = b / w.height, te = On([N, 0, 0, 0, Z, 0, 0, 0, 1], B);
      v.bindFramebuffer(v.FRAMEBUFFER, w.framebuffer), v.viewport(0, 0, w.width, w.height), v.clearColor(0, 0, 0, 0), v.clear(v.COLOR_BUFFER_BIT), R(te), E(w.texture, x, F), v.bindFramebuffer(v.FRAMEBUFFER, x.framebuffer);
      let j = new Float32Array(y * b);
      return v.readPixels(g, g, y, b, v.RED, v.FLOAT, j), v.bindFramebuffer(v.FRAMEBUFFER, null), j;
    }
  );
}
class Ju {
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
function Ku(e, t) {
  let r = new ArrayBuffer(4288), n = e.statefulDerive(
    [t, 4288, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX],
    Zt
  );
  return {
    buffer: n,
    update: e.derive([t, n], (i, a) => (o) => {
      let l = new Ju(r);
      l.u32(o.count), l.u32(o.category_count), l.i32(o.framebuffer_width), l.i32(o.framebuffer_height), l.i32(o.density_width), l.i32(o.density_height), l.f32(o.gamma), l.f32(o.point_size), l.f32(o.point_alpha), l.f32(o.points_alpha), l.f32(o.density_scaler), l.f32(o.quantization_step), l.f32(o.density_alpha), l.f32(o.contours_alpha), l.mat3x3f(o.matrix), l.vec2f(...o.view_xy_scaler), l.vec4f(...o.kde_causal), l.vec4f(...o.kde_anticausal), l.vec4f(...o.kde_a), l.vec4f(...o.background_color);
      let u = o.gamma;
      for (let s = 0; s < Math.min(o.category_colors.length, 256); s++) {
        let { r: f, g: d, b: p, a: h } = o.category_colors[s];
        f = Math.pow(f, u), d = Math.pow(d, u), p = Math.pow(p, u), l.vec4f(f, d, p, h);
      }
      i.queue.writeBuffer(a, 0, r, 0, l.byteOffset());
    })
  };
}
const sn = 64, fn = 64;
function Vo(e, t, r, n, i, a) {
  let o = e.derive(
    [t, r, n.layouts],
    (l, u, s) => l.createComputePipeline({
      layout: l.createPipelineLayout({ bindGroupLayouts: [s.group0, s.group1, s.group2A] }),
      compute: { module: u, entryPoint: "accumulate" }
    })
  );
  return e.derive(
    [
      o,
      n.group0,
      n.group1,
      n.group2A,
      a.countBuffer,
      i.count
    ],
    (l, u, s, f, d, p) => (h) => {
      if (h.clearBuffer(d), p == 0)
        return;
      let v = h.beginComputePass();
      v.setPipeline(l), v.setBindGroup(0, u), v.setBindGroup(1, s), v.setBindGroup(2, f), p <= sn * fn ? v.dispatchWorkgroups(Math.ceil(p / sn)) : v.dispatchWorkgroups(fn, Math.ceil(p / (sn * fn))), v.end();
    }
  );
}
function es(e) {
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
function Xo(e, t, r, n, i) {
  let a = e.derive([t], (d) => es(d)), o = e.derive(
    [t, a, r],
    (d, p, h) => d.createBindGroup({
      layout: p.group0,
      entries: [{ binding: 0, resource: { buffer: h } }]
    })
  ), l = e.derive(
    [t, a, n.x, n.y, n.category],
    (d, p, h, v, g) => d.createBindGroup({
      layout: p.group1,
      entries: [
        { binding: 0, resource: { buffer: h } },
        { binding: 1, resource: { buffer: v } },
        { binding: 2, resource: { buffer: g ?? h } }
      ]
    })
  ), u = e.derive(
    [t, a, i.countBuffer, i.blurBuffer],
    (d, p, h, v) => d.createBindGroup({
      layout: p.group2A,
      entries: [{ binding: 0, resource: { buffer: h } }]
    })
  ), s = e.derive(
    [t, a, i.countBuffer, i.blurBuffer],
    (d, p, h, v) => d.createBindGroup({
      layout: p.group2B,
      entries: [
        { binding: 1, resource: { buffer: h } },
        { binding: 2, resource: { buffer: v } }
      ]
    })
  ), f = e.derive(
    [t, a, i.colorTexture, i.alphaTexture],
    (d, p, h, v) => d.createBindGroup({
      layout: p.group3,
      entries: [
        { binding: 0, resource: d.createSampler({}) },
        { binding: 1, resource: h.createView() },
        { binding: 2, resource: v.createView() }
      ]
    })
  );
  return {
    layouts: a,
    group0: o,
    group1: l,
    group2A: u,
    group2B: s,
    group3: f
  };
}
function ts(e, t, r, n, i) {
  const a = e.derive(
    [t, r, n.layouts],
    (o, l, u) => o.createRenderPipeline({
      layout: o.createPipelineLayout({
        bindGroupLayouts: [u.group0, u.group1, u.group2B]
      }),
      vertex: { entryPoint: "draw_density_map_vs", module: l },
      fragment: {
        entryPoint: "draw_density_map_fs",
        module: l,
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
      a,
      n.group0,
      n.group1,
      n.group2B,
      i.colorTexture,
      i.alphaTexture
    ],
    (o, l, u, s, f, d) => (p) => {
      let h = p.beginRenderPass({
        colorAttachments: [
          { loadOp: "load", storeOp: "store", view: f.createView() },
          { loadOp: "load", storeOp: "store", view: d.createView() }
        ]
      });
      h.setPipeline(o), h.setBindGroup(0, l), h.setBindGroup(1, u), h.setBindGroup(2, s), h.draw(4), h.end();
    }
  );
}
function rs(e, t, r, n, i, a) {
  const o = e.derive(
    [t, r, n.layouts],
    (l, u, s) => l.createRenderPipeline({
      layout: l.createPipelineLayout({ bindGroupLayouts: [s.group0, s.group1] }),
      vertex: { entryPoint: "points_vs", module: u },
      fragment: {
        entryPoint: "points_fs",
        module: u,
        targets: [
          {
            format: a.colorTextureFormat,
            blend: { color: { srcFactor: "one", dstFactor: "one" }, alpha: { srcFactor: "one", dstFactor: "one" } }
          },
          {
            format: a.alphaTextureFormat,
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
      i.count,
      a.colorTexture,
      a.alphaTexture
    ],
    (l, u, s, f, d, p) => (h) => {
      let v = h.beginRenderPass({
        colorAttachments: [
          { clearValue: [0, 0, 0, 0], loadOp: "clear", storeOp: "store", view: d.createView() },
          { clearValue: [0, 0, 0, 0], loadOp: "clear", storeOp: "store", view: p.createView() }
        ]
      });
      v.setPipeline(l), v.setBindGroup(0, u), v.setBindGroup(1, s), f > 0 && v.draw(4, f), v.end();
    }
  );
}
function ns(e, t, r, n, i) {
  const a = e.derive(
    [t, r, i.layouts],
    (o, l, u) => o.createRenderPipeline({
      layout: o.createPipelineLayout({
        bindGroupLayouts: [u.group0, u.group1, u.group2B, u.group3]
      }),
      vertex: { entryPoint: "gamma_correction_vs", module: l },
      fragment: { entryPoint: "gamma_correction_fs", module: l, targets: [{ format: n }] },
      primitive: { topology: "triangle-strip" }
    })
  );
  return e.derive(
    [a, i.group0, i.group1, i.group2B, i.group3],
    (o, l, u, s, f) => (d, p) => {
      let h = d.beginRenderPass({
        colorAttachments: [{ clearValue: [1, 1, 1, 1], loadOp: "clear", storeOp: "store", view: p }]
      });
      h.setPipeline(o), h.setBindGroup(0, l), h.setBindGroup(1, u), h.setBindGroup(2, s), h.setBindGroup(3, f), h.draw(4), h.end();
    }
  );
}
const _i = 64;
function Yo(e, t, r, n, i, a, o) {
  let l = e.derive(
    [t, r, n.layouts],
    (s, f, d) => s.createComputePipeline({
      layout: s.createPipelineLayout({
        bindGroupLayouts: [d.group0, d.group1, d.group2B, d.group3]
      }),
      compute: { module: f, entryPoint: "gaussian_blur_stage_1" }
    })
  ), u = e.derive(
    [t, r, n.layouts],
    (s, f, d) => s.createComputePipeline({
      layout: s.createPipelineLayout({
        bindGroupLayouts: [d.group0, d.group1, d.group2B, d.group3]
      }),
      compute: { module: f, entryPoint: "gaussian_blur_stage_2" }
    })
  );
  return e.derive(
    [
      l,
      u,
      n.group0,
      n.group1,
      n.group2B,
      n.group3,
      i,
      a,
      o
    ],
    (s, f, d, p, h, v, g, y, b) => (w) => {
      let x = w.beginComputePass();
      x.setBindGroup(0, d), x.setBindGroup(1, p), x.setBindGroup(2, h), x.setBindGroup(3, v), x.setPipeline(s), x.dispatchWorkgroups(Math.ceil(g / _i), b), x.setPipeline(f), x.dispatchWorkgroups(Math.ceil(y / _i), b), x.end();
    }
  );
}
function is(e, t = !1) {
  const r = new Float64Array(5), n = new Float64Array(4);
  os(r, n, e);
  const i = Float64Array.of(
    0,
    n[1] - r[1] * n[0],
    n[2] - r[2] * n[0],
    n[3] - r[3] * n[0],
    -r[4] * n[0]
  ), a = 1 + r[1] + r[2] + r[3] + r[4], o = (n[0] + n[1] + n[2] + n[3]) / a, l = (i[1] + i[2] + i[3] + i[4]) / a;
  return {
    sigma: e,
    negative: t,
    a: r,
    b_causal: n,
    b_anticausal: i,
    sum_causal: o,
    sum_anticausal: l
  };
}
function os(e, t, r) {
  const n = Float64Array.of(
    0.84,
    1.8675,
    0.84,
    -1.8675,
    -0.34015,
    -0.1299,
    -0.34015,
    0.1299
  ), i = Math.exp(-1.783 / r), a = Math.exp(-1.723 / r), o = 0.6318 / r, l = 1.997 / r, u = Float64Array.of(
    -i * Math.cos(o),
    i * Math.sin(o),
    -i * Math.cos(-o),
    i * Math.sin(-o),
    -a * Math.cos(l),
    a * Math.sin(l),
    -a * Math.cos(-l),
    a * Math.sin(-l)
  ), s = r * 2.5066282746310007, f = Float64Array.of(n[0], n[1], 0, 0, 0, 0, 0, 0), d = Float64Array.of(1, 0, u[0], u[1], 0, 0, 0, 0, 0, 0);
  let p, h;
  for (h = 2; h < 8; h += 2) {
    for (f[h] = u[h] * f[h - 2] - u[h + 1] * f[h - 1], f[h + 1] = u[h] * f[h - 1] + u[h + 1] * f[h - 2], p = h - 2; p > 0; p -= 2)
      f[p] += u[h] * f[p - 2] - u[h + 1] * f[p - 1], f[p + 1] += u[h] * f[p - 1] + u[h + 1] * f[p - 2];
    for (p = 0; p <= h; p += 2)
      f[p] += n[h] * d[p] - n[h + 1] * d[p + 1], f[p + 1] += n[h] * d[p + 1] + n[h + 1] * d[p];
    for (d[h + 2] = u[h] * d[h] - u[h + 1] * d[h + 1], d[h + 3] = u[h] * d[h + 1] + u[h + 1] * d[h], p = h; p > 0; p -= 2)
      d[p] += u[h] * d[p - 2] - u[h + 1] * d[p - 1], d[p + 1] += u[h] * d[p - 1] + u[h + 1] * d[p - 2];
  }
  for (h = 0; h < 4; ++h)
    p = h << 1, t[h] = f[p] / s, e[h + 1] = d[p + 2];
}
function jo(e) {
  let t = is(e);
  return {
    kde_causal: [t.b_causal[0], t.b_causal[1], t.b_causal[2], t.b_causal[3]],
    kde_anticausal: [t.b_anticausal[1], t.b_anticausal[2], t.b_anticausal[3], t.b_anticausal[4]],
    kde_a: [t.a[1], t.a[2], t.a[3], t.a[4]]
  };
}
const as = `// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

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
class ls {
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
  constructor(t, r, n, i, a) {
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
      height: a
    }, this.viewport = new Qr({ x: 0, y: 0, scale: 1 }, i, a), this.df = new Gt();
    let o = this.df;
    this.renderInputs = {
      mode: o.value(this.props.mode),
      colorScheme: o.value(this.props.colorScheme),
      xData: o.value(this.props.x),
      yData: o.value(this.props.y),
      categoryData: o.value(this.props.category),
      categoryCount: o.value(this.props.categoryCount),
      categoryColors: o.value(this.props.categoryColors),
      matrix: o.value(Lo()),
      width: o.value(i),
      height: o.value(a),
      pointSize: o.value(this.props.pointSize),
      densityBandwidth: o.value(this.props.densityBandwidth)
    }, this.device = o.value(r), this.dataBuffers = us(o, this.device, this.renderInputs), this.module = o.derive([this.device], (l) => l.createShaderModule({ code: as })), this.uniforms = Ku(o, this.device), this.renderer = ss(
      o,
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
    let a = this.df.subgraph(), { x: o, y: l, scale: u } = i, s = [u, 0, 0, 0, u, 0, -o * u, -l * u, 1], f = qo(s), d = await fs(
      a,
      this.device,
      this.module,
      this.uniforms,
      a.value(t),
      a.value(r),
      a.value(n),
      a.value(s),
      this.dataBuffers
    ).value();
    return a.destroy(), {
      data: d,
      width: t,
      height: r,
      coordinateAtPixel: (p, h) => {
        let v = p / t * 2 - 1, g = h / r * 2 - 1, y = Oo([v, g, 1], f);
        return { x: y[0], y: y[1] };
      }
    };
  }
}
function us(e, t, r) {
  let n = GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST;
  const i = e.derive([r.xData], (f) => f.length), a = e.derive([i], (f) => f * 4), o = i, l = e.statefulDerive(
    [t, e.statefulDerive([t, a, n], Zt), r.xData],
    tn
  ), u = e.statefulDerive(
    [t, e.statefulDerive([t, a, n], Zt), r.yData],
    tn
  ), s = e.statefulDerive(
    [t, e.statefulDerive([t, o, n], Zt), r.categoryData],
    tn
  );
  return { x: l, y: u, category: s, count: i };
}
function Wo(e, t, r, n, i, a, o) {
  let l = "rgba16float", u = "r16float", s = GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING, f = e.statefulDerive(
    [t, r, n, l, s],
    Hn
  ), d = e.statefulDerive(
    [t, r, n, u, s],
    Hn
  ), p = e.derive(
    [i, a, o],
    (y, b, w) => y * b * w * 4
    // w * h * categoryCount * sizeof(uint32)
  ), h = e.derive(
    [i, a, o],
    (y, b, w) => y * b * w * 2
    // w * h * categoryCount * sizeof(f16)
  ), v = e.statefulDerive(
    [t, p, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC],
    Zt
  ), g = e.statefulDerive([t, h, GPUBufferUsage.STORAGE], Zt);
  return {
    colorTexture: f,
    alphaTexture: d,
    colorTextureFormat: l,
    alphaTextureFormat: u,
    countBuffer: v,
    blurBuffer: g
  };
}
function ss(e, t, r, n, i, a, o) {
  let l = e.derive([a.densityBandwidth], (R) => Math.ceil(R * 3) + 1), u = e.derive([a.width, l], (R, E) => R + E * 2), s = e.derive([a.height, l], (R, E) => R + E * 2), f = e.derive([u], (R) => Math.ceil(R / 4)), d = e.derive([s], (R) => Math.ceil(R / 4)), p = Wo(
    e,
    t,
    u,
    s,
    f,
    d,
    a.categoryCount
  ), h = Xo(e, t, n.buffer, o, p), v = Vo(e, t, r, h, o, p), g = rs(e, t, r, h, o, p), y = ts(e, t, r, h, p), b = ns(e, t, r, i, h), w = Yo(e, t, r, h, u, s, a.categoryCount), x = e.derive(
    [a.densityBandwidth, u, f],
    (R, E, B) => jo(R / E * B)
  ), F = e.derive(
    [a.categoryColors, a.categoryCount],
    (R, E) => (R == null && (R = Hr(E)), R.map((B) => Ln(B)))
  );
  return e.derive(
    [
      t,
      u,
      s,
      f,
      d,
      n.update,
      o.count,
      a.matrix,
      F,
      g,
      b,
      v,
      w,
      y,
      x
    ],
    (R, E, B, N, Z, te, j, Q, we, K, ve, ie, q, oe, ae) => (W, Ae) => {
      let de = W.colorScheme == "light" ? [1, 1, 1, 1] : [0, 0, 0, 1], le = W.width / E, ge = W.height / B, Le = On([le, 0, 0, 0, ge, 0, 0, 0, 1], Q);
      te({
        count: j,
        category_count: W.categoryCount,
        framebuffer_width: E,
        framebuffer_height: B,
        density_width: N,
        density_height: Z,
        gamma: W.gamma,
        point_size: Math.max(W.mode == "points" ? 3 : 1, W.pointSize),
        point_alpha: W.pointAlpha,
        points_alpha: W.pointsAlpha,
        density_scaler: W.densityScaler / 16,
        quantization_step: W.densityQuantizationStep,
        density_alpha: W.densityAlpha,
        contours_alpha: W.contoursAlpha,
        matrix: Le,
        view_xy_scaler: [1 / le, 1 / ge],
        kde_causal: ae.kde_causal,
        kde_anticausal: ae.kde_anticausal,
        kde_a: ae.kde_a,
        background_color: de,
        category_colors: we
      });
      let ye = R.createCommandEncoder();
      K(ye), W.mode == "density" && (W.densityAlpha > 0 || W.contoursAlpha > 0) && (ie(ye), q(ye), oe(ye)), ve(ye, Ae), R.queue.submit([ye.finish()]);
    }
  );
}
function fs(e, t, r, n, i, a, o, l, u) {
  let s = Wo(e, t, i, a, i, a, e.value(1)), f = Xo(e, t, n.buffer, u, s), d = Vo(e, t, r, f, u, s), p = Yo(e, t, r, f, i, a, e.value(1));
  return e.derive(
    [
      t,
      i,
      a,
      u.count,
      n.update,
      o,
      l,
      d,
      p,
      s.countBuffer
    ],
    (h, v, g, y, b, w, x, F, R, E) => () => {
      let B = h.createCommandEncoder(), N = jo(w);
      b({
        count: y,
        category_count: 1,
        framebuffer_width: v,
        framebuffer_height: g,
        density_width: v,
        density_height: g,
        gamma: 1,
        point_size: 0,
        point_alpha: 0,
        points_alpha: 0,
        density_scaler: 0,
        quantization_step: 0,
        density_alpha: 0,
        contours_alpha: 0,
        matrix: x,
        view_xy_scaler: [1, 1],
        kde_causal: N.kde_causal,
        kde_anticausal: N.kde_anticausal,
        kde_a: N.kde_a,
        background_color: [0, 0, 0, 0],
        category_colors: []
      }), F(B), R(B);
      let Z = h.createBuffer({
        size: v * g * 2,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
      });
      return B.copyBufferToBuffer(E, 0, Z, 0, v * g * 2), h.queue.submit([B.finish()]), Z.mapAsync(GPUMapMode.READ, 0, v * g * 2).then(() => cs(Z.getMappedRange()));
    }
  );
}
function cs(e) {
  let t = new Uint16Array(e), r = new Uint32Array(t.length);
  for (let n = 0; n < t.length; n++) {
    let i = t[n] & 32767, a = t[n] & 32768, o = t[n] & 31744;
    i <<= 13, a <<= 16, i += 939524096, i = o == 0 ? 0 : i, i |= a, r[n] = i;
  }
  return new Float32Array(r.buffer);
}
let hr;
function hs() {
  return hr == null && (hr = document.createElement("canvas"), hr.width = 1, hr.height = 1), hr.getContext("2d");
}
function ds(e) {
  let t = hs();
  t.font = `${e.fontSize ?? 10}px ${e.fontFamily ?? "system-ui"}`;
  let r = e.text.split(`
`).map((i) => t.measureText(i).width), n = (e.fontSize ?? 10) * (e.lineSpacing ?? 1) * r.length;
  return {
    width: r.reduce((i, a) => Math.max(i, a)),
    height: n
  };
}
let cn = null, wn = /* @__PURE__ */ new Map();
function ps() {
  return cn == null && (cn = new Promise((e, t) => {
    let r = new Worker(new URL("./clustering.worker.js", import.meta.url), { type: "module" });
    r.onmessage = (n) => {
      if (n.data.ready) {
        e(r);
        return;
      }
      if (n.data.id != null) {
        let i = wn.get(n.data.id);
        i != null && (wn.delete(n.data.id), i(n.data));
      }
    };
  })), cn;
}
function fr(e, t, r = []) {
  return new Promise((n, i) => {
    ps().then((a) => {
      let o = (/* @__PURE__ */ new Date()).getTime().toString() + "-" + Math.random().toString();
      wn.set(o, (l) => {
        n(l.payload);
      }), a.postMessage({ id: o, name: e, payload: t }, r);
    });
  });
}
let vs = (e, t, r, n) => fr("findClusters", [e, t, r, n], [e.buffer]), gs = (...e) => fr("dynamicLabelPlacement", e), ys = (...e) => fr("textSummarizerCreate", e), ms = (...e) => fr("textSummarizerDestroy", e), xs = (...e) => fr("textSummarizerAdd", e), _s = (...e) => fr("textSummarizerSummarize", e);
async function bi(e, t, r, n, i) {
  let a = new Qr(r, e, t), o = n.reduce((v, g) => Math.min(v, g.level ?? 0), 0), l = n.reduce((v, g) => Math.max(v, g.level ?? 0), 0), u = r.scale, s = r.scale / 2, f = s * 4, d = u / f, p = n.map((v) => {
    let g = a.pixelLocation(v.x, v.y), y = v.level ?? 0, b = y == 0 ? 14 : 12, w = ds({
      text: v.text,
      fontSize: b,
      fontFamily: i
    });
    return w.width += 4, w.height += 4, {
      text: v.text,
      fontSize: b,
      bounds: {
        xMin: g.x - w.width / 2,
        xMax: g.x + w.width / 2,
        yMin: g.y - w.height / 2,
        yMax: g.y + w.height / 2
      },
      locationAtZero: g,
      priority: v.priority,
      minScale: v.level == l ? null : d * Math.pow(2, -y) / 1.2,
      maxScale: v.level == o ? null : d * Math.pow(2, -y + 1),
      coordinate: { x: v.x, y: v.y },
      placement: null
    };
  }), h = await gs(p, { globalMaxScale: u / s });
  for (let v = 0; v < h.length; v++) {
    let g = h[v];
    if (g != null) {
      let y = u / g.minScale, b = u / g.maxScale;
      p[v].placement = { minScale: b, maxScale: y };
    }
  }
  return p;
}
function bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wi = { exports: {} }, Ai;
function ws() {
  return Ai || (Ai = 1, (function(e) {
    (function() {
      function t(l, u) {
        var s = l.x - u.x, f = l.y - u.y;
        return s * s + f * f;
      }
      function r(l, u, s) {
        var f = u.x, d = u.y, p = s.x - f, h = s.y - d;
        if (p !== 0 || h !== 0) {
          var v = ((l.x - f) * p + (l.y - d) * h) / (p * p + h * h);
          v > 1 ? (f = s.x, d = s.y) : v > 0 && (f += p * v, d += h * v);
        }
        return p = l.x - f, h = l.y - d, p * p + h * h;
      }
      function n(l, u) {
        for (var s = l[0], f = [s], d, p = 1, h = l.length; p < h; p++)
          d = l[p], t(d, s) > u && (f.push(d), s = d);
        return s !== d && f.push(d), f;
      }
      function i(l, u, s, f, d) {
        for (var p = f, h, v = u + 1; v < s; v++) {
          var g = r(l[v], l[u], l[s]);
          g > p && (h = v, p = g);
        }
        p > f && (h - u > 1 && i(l, u, h, f, d), d.push(l[h]), s - h > 1 && i(l, h, s, f, d));
      }
      function a(l, u) {
        var s = l.length - 1, f = [l[0]];
        return i(l, 0, s, u, f), f.push(l[s]), f;
      }
      function o(l, u, s) {
        if (l.length <= 2) return l;
        var f = u !== void 0 ? u * u : 1;
        return l = s ? l : n(l, f), l = a(l, f), l;
      }
      e.exports = o, e.exports.default = o;
    })();
  })(wi)), wi.exports;
}
var As = ws();
const Ri = /* @__PURE__ */ bs(As);
function Rs(e, t) {
  let r = e.slice();
  for (let n = 0; n < t; n++) {
    const i = [], a = r.length;
    for (let o = 0; o < a; o++) {
      const l = r[o], u = r[(o + 1) % a], s = {
        x: 0.75 * l.x + 0.25 * u.x,
        y: 0.75 * l.y + 0.25 * u.y
      }, f = {
        x: 0.25 * l.x + 0.75 * u.x,
        y: 0.25 * l.y + 0.75 * u.y
      };
      i.push(s, f);
    }
    r = i;
  }
  return r;
}
function Es(e, t) {
  const r = Rs(e, 5), n = Po(r);
  let i = Math.max(n.xMax - n.xMin, n.yMax - n.yMin) / 100, a = Ri(r, i), o = 0;
  for (; a.length > t && o < 20; )
    i *= 1.1, o += 1, a = Ri(r, i);
  return a;
}
const Ei = {
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
function Ts(e, t) {
  return e == null ? Ei[t] : { ...Ei[t], ...e, ...e[t] != null ? e[t] : {} };
}
function Ms(e, t, r, n, i, a, o) {
  let l = Math.max(n, i) / a, u = e / (r * r) / (l * l), s = 1 / (u / (a * a)) * 0.2, f = Math.sqrt(e / t / (l * l)), d = Math.log(f), p = Math.log(r), h = (Math.min(Math.max((p - d) * 2, -1), 1) + 1) / 2, v;
  if (o != null)
    v = o * a;
  else {
    let b = 0.25 / Math.sqrt(u);
    v = Math.max(0.2, Math.min(5, b)) * a;
  }
  let g = 1 - h, y = 0.5 + h * 0.5;
  return {
    densityScaler: s,
    densityAlpha: g,
    contoursAlpha: g,
    pointSize: v,
    pointAlpha: 0.7,
    pointsAlpha: y,
    densityBandwidth: 20
  };
}
var Fs = /* @__PURE__ */ Ft("<div></div>"), Ss = /* @__PURE__ */ gt("<circle></circle>"), Bs = /* @__PURE__ */ gt("<circle></circle>"), Cs = /* @__PURE__ */ gt('<text dominant-baseline="middle"> </text>'), Ps = /* @__PURE__ */ gt("<g></g>"), Ds = /* @__PURE__ */ gt("<g><!></g>"), Us = /* @__PURE__ */ gt("<g></g>"), ks = /* @__PURE__ */ Ft('<div><canvas></canvas> <div><!></div> <svg role="none"><!><!><!><!></svg> <!> <!></div>');
function Ho(e, t) {
  Tt(t, !0);
  let r = T(t, "data", 19, () => ({ x: new Float32Array(), y: new Float32Array(), category: null })), n = T(t, "categoryCount", 3, 1), i = T(t, "categoryColors", 3, null), a = T(t, "width", 3, 800), o = T(t, "height", 3, 800), l = T(t, "pixelRatio", 3, 2), u = T(t, "theme", 3, null), s = T(t, "config", 3, null), f = T(t, "totalCount", 3, null), d = T(t, "maxDensity", 3, null), p = T(t, "labels", 3, null), h = T(t, "queryClusterLabels", 3, null), v = T(t, "tooltip", 7, null), g = T(t, "selection", 7, null), y = T(t, "querySelection", 3, null), b = T(t, "rangeSelection", 7, null), w = T(t, "defaultViewportState", 3, null), x = T(t, "viewportState", 7, null), F = T(t, "customTooltip", 3, null), R = T(t, "customOverlay", 3, null), E = T(t, "onViewportState", 3, null), B = T(t, "onTooltip", 3, null), N = T(t, "onSelection", 3, null), Z = T(t, "onRangeSelection", 3, null), te = T(t, "cache", 3, null), j = /* @__PURE__ */ U(() => s()?.colorScheme ?? "light"), Q = /* @__PURE__ */ U(() => Ts(u(), c(j))), we = /* @__PURE__ */ U(() => i() ?? Hr(n())), K = /* @__PURE__ */ U(() => x() ?? w() ?? { x: 0, y: 0, scale: 1 }), ve = /* @__PURE__ */ U(() => new Qr(c(K), a(), o())), ie = /* @__PURE__ */ U(() => c(ve).pixelLocationFunction()), q = /* @__PURE__ */ U(() => c(ve).coordinateAtPixelFunction()), oe = /* @__PURE__ */ J(!1);
  function ae(_, A) {
    return _.x == A.x && _.y == A.y && _.category == A.category && _.text == A.text;
  }
  let W = /* @__PURE__ */ U(() => g()?.length == 1 && v() != null && ae(g()[0], v()));
  function Ae(_) {
    _t(x(), _) || (x(_), E()?.(_));
  }
  function de(_) {
    _t(v(), _) || (v(_), B()?.(_));
  }
  function le(_) {
    _t(g(), _) || (g(_), N()?.(_));
  }
  function ge(_) {
    _t(b(), _) || (b(_), Z()?.(_));
  }
  let Le = /* @__PURE__ */ J(Pt([])), ye = /* @__PURE__ */ J(null), St = /* @__PURE__ */ J("none"), Vt = /* @__PURE__ */ U(() => a() * l()), C = /* @__PURE__ */ U(() => o() * l()), k = /* @__PURE__ */ J(null), I = /* @__PURE__ */ J(null), se = /* @__PURE__ */ J(null), re = /* @__PURE__ */ U(() => s()?.minimumDensity ?? 1 / 16), Xe = /* @__PURE__ */ U(() => s()?.pointSize ?? null), Te = /* @__PURE__ */ U(() => s()?.mode ?? "points"), ot = /* @__PURE__ */ U(() => s()?.autoLabelEnabled), yt = /* @__PURE__ */ U(() => Ms(d() ?? (f() ?? r().x.length) / 4, c(re), c(K).scale, c(Vt), c(C), l(), c(Xe))), at = /* @__PURE__ */ U(() => c(yt).pointSize), mt = !0;
  yr(() => {
    c(I)?.setProps({
      mode: c(Te),
      colorScheme: c(j),
      viewportX: c(K).x,
      viewportY: c(K).y,
      viewportScale: c(K).scale,
      width: c(Vt),
      height: c(C),
      x: r().x,
      y: r().y,
      category: r().category,
      categoryCount: n(),
      categoryColors: c(we),
      ...c(yt)
    }) && (Jo(), (c(ot) !== !1 || p() != null) && mt && c(I) != null && r().x != null && r().x.length > 0 && w() != null && (mt = !1, ua(w())));
  });
  function Zo() {
    Zr = null, !(!c(k) || !c(I)) && (c(k).width = c(I).props.width, c(k).height = c(I).props.height, c(k).style.width = `${c(I).props.width / l()}px`, c(k).style.height = `${c(I).props.height / l()}px`, c(I).render());
  }
  let Zr = null;
  function Jo() {
    Zr == null && (Zr = requestAnimationFrame(Zo));
  }
  function Ko(_) {
    let A;
    function S() {
      A = _.getContext("webgl2", { antialias: !1 }), A.getExtension("EXT_color_buffer_float"), A.getExtension("EXT_float_blend"), A.getExtension("OES_texture_float_linear"), L(I, new Yu(A, c(Vt), c(C)), !0);
    }
    S(), _.addEventListener("webglcontextlost", () => {
      c(I)?.destroy(), L(I, null), A = null;
    }), _.addEventListener("webglcontextrestored", () => {
      S();
    });
  }
  function ea(_) {
    async function A() {
      let S = _.getContext("webgpu");
      if (S == null) {
        console.error("Could not get WebGPU canvas context");
        return;
      }
      let P = await navigator.gpu.requestAdapter();
      if (!P) {
        console.error("Could not request WebGPU adapter");
        return;
      }
      let D = 512 * 1048576, O = 512 * 1048576;
      D = Math.min(D, P.limits.maxBufferSize), O = Math.min(O, P.limits.maxStorageBufferBindingSize);
      let V = {
        requiredLimits: { maxBufferSize: D, maxStorageBufferBindingSize: O },
        requiredFeatures: ["shader-f16"]
      }, H = await P.requestDevice(V);
      H.lost.then((ce) => {
        console.info(`WebGPU device was lost: ${ce.message}`), ce.reason != "destroyed" && (c(I)?.destroy(), L(I, null), A());
      });
      let ee = navigator.gpu.getPreferredCanvasFormat();
      S.configure({ device: H, format: ee, alphaMode: "premultiplied" }), L(I, new ls(S, H, ee, c(Vt), c(C)), !0);
    }
    A();
  }
  function ta(_) {
    _ != null && x() == null && Ae(_);
  }
  yr(() => ta(w())), kn(() => {
    c(k) != null && (Si() ? ea(c(k)) : (Ko(c(k)), L(se, "WebGPU is unavailable. If you are using Safari, please enable the WebGPU feature flag.")));
  }), Sl(() => {
    c(I)?.destroy(), L(I, null);
  });
  function Xt(_) {
    let A = c(k)?.getBoundingClientRect() ?? { left: 0, top: 0 };
    return { x: _.clientX - A.left, y: _.clientY - A.top };
  }
  function ra(_) {
    _.preventDefault();
    let { x: A, y: S } = Xt(_), P = Math.exp(-_.deltaY / 200);
    na(P, { x: A, y: S });
  }
  function na(_, A) {
    let { x: S, y: P, scale: D } = c(K);
    de(null);
    let O = Math.min(100, Math.max(0.01, D * _)), V = c(k).getBoundingClientRect(), H = Math.max(V.width, V.height), ee = (A.x - V.width / 2) / H * 2, ce = (V.height / 2 - A.y) / H * 2, Ye = S + ee / D - ee / O, De = P + ce / D - ce / O;
    Ae({ x: Ye, y: De, scale: O });
  }
  function ia(_) {
    de(null);
    let A = "pan";
    c(St) != "none" ? _.modifiers.shift || (A = c(St)) : _.modifiers.shift && (A = _.modifiers.meta ? "lasso" : "marquee");
    let S = Xt(_);
    switch (A) {
      case "marquee":
        return {
          move: (P) => {
            if (de(null), c(I) == null)
              return;
            let D = Xt(P), O = c(q)(S.x, S.y), V = c(q)(D.x, D.y);
            ge({
              xMin: Math.min(O.x, V.x),
              yMin: Math.min(O.y, V.y),
              xMax: Math.max(O.x, V.x),
              yMax: Math.max(O.y, V.y)
            });
          }
        };
      case "lasso": {
        let P = [c(q)(S.x, S.y)];
        return {
          move: (D) => {
            if (de(null), c(I) == null)
              return;
            let O = Xt(D);
            P = [...P, c(q)(O.x, O.y)], P.length >= 3 && ge(Es(P, 24));
          }
        };
      }
      case "pan": {
        let P = c(q)(0, 0), D = c(q)(1, 1), O = P.x - D.x, V = P.y - D.y, H = c(K).x, ee = c(K).y;
        return {
          move: (ce) => {
            Ae({
              x: H + (ce.clientX - _.clientX) * O,
              y: ee + (ce.clientY - _.clientY) * V,
              scale: c(K).scale
            });
          }
        };
      }
    }
  }
  async function oa(_) {
    if (b() != null)
      ge(null);
    else {
      const A = await qn(Xt(_));
      if (A == null)
        le([]), de(null);
      else if (_.modifiers.shift || _.modifiers.ctrl || _.modifiers.meta) {
        let S = g()?.findIndex((P) => P.x == A.x && P.y == A.y && P.category == A.category);
        g() == null || S == null || S < 0 ? (le([...g() ?? [], A]), de(A)) : (le([
          ...g().slice(0, S),
          ...g().slice(S + 1)
        ]), de(null));
      } else
        le([A]), de(A);
    }
  }
  let Jr = zl(
    async (_) => {
      let A = _ ? Xt(_) : null;
      if (g() != null && g().length == 1) {
        let S = c(ie)(g()[0].x, g()[0].y);
        A != null && Gl(A, S) < 10 && de(g()[0]);
      } else
        de(await qn(A));
    },
    () => v() != null
  );
  function aa(_) {
    _ != null ? c(oe) || Jr(_) : Jr(null);
  }
  yr(() => {
    c(oe) && Jr(null);
  });
  async function qn(_) {
    if (c(I) == null || _ == null || y() == null)
      return null;
    let { x: A, y: S } = c(q)(_.x, _.y), P = Math.abs(c(q)(_.x + 1, _.y).x - A);
    return await y()(A, S, P);
  }
  async function $n(_, A, S, P = 5e-3) {
    let D = await _.densityMap(1e3, 1e3, A, S), O = await vs(D.data, D.width, D.height), V = [];
    for (let ee = 0; ee < O.length; ee++) {
      let ce = O[ee], Ye = D.coordinateAtPixel(ce.meanX, ce.meanY), De = ce.boundaryRectApproximation.map(([qe, Yt, en, lt]) => {
        let Bt = D.coordinateAtPixel(qe, Yt), jt = D.coordinateAtPixel(en, lt);
        return {
          xMin: Math.min(Bt.x, jt.x),
          xMax: Math.max(Bt.x, jt.x),
          yMin: Math.min(Bt.y, jt.y),
          yMax: Math.max(Bt.y, jt.y)
        };
      });
      V.push({
        x: Ye.x,
        y: Ye.y,
        sumDensity: ce.sumDensity,
        rects: De,
        bandwidth: A
      });
    }
    let H = V.reduce((ee, ce) => Math.max(ee, ce.sumDensity), 0);
    return V.filter((ee) => ee.sumDensity / H > P);
  }
  async function la(_) {
    if (c(I) == null || h() == null)
      return [];
    let A = await Xl({
      autoLabel: {
        version: 1,
        viewport: _,
        stopWords: s()?.autoLabelStopWords,
        densityThreshold: s()?.autoLabelDensityThreshold
      }
    });
    if (te() != null) {
      let D = await te().get(A);
      if (D != null)
        return D;
    }
    let S = await $n(c(I), 10, _, s()?.autoLabelDensityThreshold ?? 5e-3);
    if (S = S.concat(await $n(c(I), 5, _)), h()) {
      let D = await h()(S.map((O) => O.rects));
      for (let O = 0; O < S.length; O++)
        S[O].label = D[O];
    }
    let P = S.filter((D) => D.label != null && D.label.length > 0).map((D) => ({
      x: D.x,
      y: D.y,
      text: D.label,
      priority: D.sumDensity,
      level: D.bandwidth == 10 ? 0 : 1
    }));
    return te() != null && await te().set(A, P), P;
  }
  async function ua(_) {
    if (c(I) != null)
      if (p() != null)
        L(Le, await bi(a(), o(), _, p(), c(Q).fontFamily), !0);
      else {
        L(ye, "Generating labels...");
        let A = await la(_);
        L(Le, await bi(a(), o(), _, A, c(Q).fontFamily), !0), L(ye, null);
      }
  }
  class sa {
    content;
    constructor(A, S) {
      let P = document.createElement("div");
      this.content = P, this.update(S), A.appendChild(P);
    }
    update(A) {
      let S = this.content;
      S.style.fontFamily = A.fontFamily, c(j) == "light" ? (S.style.color = "#000", S.style.background = "#fff", S.style.border = "1px solid #000") : (S.style.color = "#ccc", S.style.background = "#000", S.style.border = "1px solid #ccc"), S.style.borderRadius = "2px", S.style.padding = "5px", S.style.fontSize = "12px", S.style.maxWidth = "300px", S.innerText = A.tooltip.text ?? JSON.stringify(A.tooltip);
    }
  }
  var Mr = ks();
  let zn;
  var Kr = pe(Mr);
  $(Kr, "", {}, { position: "absolute", top: "0", left: "0" }), xn(Kr, (_) => L(k, _), () => c(k));
  var Fr = ne(Kr, 2);
  let Gn;
  var fa = pe(Fr);
  {
    var ca = (_) => {
      const A = /* @__PURE__ */ U(() => Do(R())), S = /* @__PURE__ */ U(() => ({
        location: c(ie),
        width: a(),
        height: o()
      }));
      var P = cr(), D = Ht(P);
      Bl(D, () => c(A), (O) => {
        var V = Fs();
        $e(V, (H, ee) => c(A)?.(H, ee), () => Uo(R(), { proxy: c(S) })), ue(O, V);
      }), ue(_, P);
    };
    Me(fa, (_) => {
      R() && _(ca);
    });
  }
  fe(Fr);
  var xt = ne(Fr, 2);
  $(xt, "", {}, { position: "absolute", left: "0", top: "0" });
  var Vn = pe(xt);
  {
    var ha = (_) => {
      const A = /* @__PURE__ */ U(() => {
        const { x: V, y: H } = c(ie)(v().x, v().y);
        return { x: V, y: H };
      }), S = /* @__PURE__ */ U(() => Math.max(3, c(at) / l()) + 1);
      var P = cr(), D = Ht(P);
      {
        var O = (V) => {
          var H = Ss();
          let ee;
          Ne(() => {
            M(H, "cx", c(A).x), M(H, "cy", c(A).y), M(H, "r", c(S)), ee = $(H, "", ee, {
              stroke: c(j) == "light" ? "#000" : "#fff",
              "stroke-width": 1,
              fill: "none"
            });
          }), ue(V, H);
        };
        Me(D, (V) => {
          isFinite(c(A).x) && isFinite(c(A).y) && isFinite(c(S)) && V(O);
        });
      }
      ue(_, P);
    };
    Me(Vn, (_) => {
      v() != null && c(I) != null && _(ha);
    });
  }
  var Xn = ne(Vn);
  {
    var da = (_) => {
      var A = cr(), S = Ht(A);
      nn(S, 17, g, rn, (P, D) => {
        const O = /* @__PURE__ */ U(() => {
          const { x: De, y: qe } = c(ie)(c(D).x, c(D).y);
          return { x: De, y: qe };
        }), V = /* @__PURE__ */ U(() => c(D).category != null ? c(we)[c(D).category] : c(we)[0]), H = /* @__PURE__ */ U(() => Math.max(3, c(at) / l()) + 1);
        var ee = cr(), ce = Ht(ee);
        {
          var Ye = (De) => {
            var qe = Bs();
            let Yt;
            Ne(() => {
              M(qe, "cx", c(O).x), M(qe, "cy", c(O).y), M(qe, "r", c(H)), Yt = $(qe, "", Yt, {
                stroke: c(j) == "light" ? "#000" : "#fff",
                "stroke-width": 2,
                fill: c(V)
              });
            }), ue(De, qe);
          };
          Me(ce, (De) => {
            isFinite(c(O).x) && isFinite(c(O).y) && isFinite(c(H)) && De(Ye);
          });
        }
        ue(P, ee);
      }), ue(_, A);
    };
    Me(Xn, (_) => {
      g() != null && c(I) != null && _(da);
    });
  }
  var Yn = ne(Xn);
  {
    var pa = (_) => {
      var A = Us();
      nn(A, 21, () => c(Le), rn, (S, P) => {
        const D = /* @__PURE__ */ U(() => c(P).text.split(`
`)), O = /* @__PURE__ */ U(() => c(ie)(c(P).coordinate.x, c(P).coordinate.y)), V = /* @__PURE__ */ U(() => c(P).placement != null && c(P).placement.minScale <= c(K).scale && c(K).scale <= c(P).placement.maxScale);
        var H = Ds(), ee = pe(H);
        {
          var ce = (Ye) => {
            var De = Ps();
            nn(De, 21, () => c(D), rn, (qe, Yt, en) => {
              var lt = Cs();
              M(lt, "x", 0);
              let Bt;
              var jt = pe(lt, !0);
              fe(lt), Ne(() => {
                M(lt, "y", (en - (c(D).length - 1) / 2) * c(P).fontSize), M(lt, "font-size", c(P).fontSize), Bt = $(lt, "", Bt, {
                  "paint-order": "stroke",
                  "stroke-width": "4",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round",
                  "text-anchor": "middle",
                  fill: c(Q).clusterLabelColor,
                  stroke: c(Q).clusterLabelOutlineColor,
                  opacity: c(Q).clusterLabelOpacity,
                  "user-select": "none",
                  "-webkit-user-select": "none",
                  "font-family": c(Q).fontFamily
                }), mr(jt, c(Yt));
              }), ue(qe, lt);
            }), fe(De), ue(Ye, De);
          };
          Me(ee, (Ye) => {
            c(V) && Ye(ce);
          });
        }
        fe(H), Ne(() => M(H, "transform", `translate(${c(O).x ?? ""},${c(O).y ?? ""})`)), ue(S, H);
      }), fe(A), ue(_, A);
    };
    Me(Yn, (_) => {
      _(pa);
    });
  }
  var va = ne(Yn);
  {
    var ga = (_) => {
      var A = cr(), S = Ht(A);
      {
        var P = (O) => {
          Hl(O, {
            get value() {
              return b();
            },
            get pointLocation() {
              return c(ie);
            }
          });
        }, D = (O) => {
          $l(O, {
            get value() {
              return b();
            },
            onChange: ge,
            get pointLocation() {
              return c(ie);
            },
            get coordinateAtPoint() {
              return c(q);
            },
            preventHover: (V) => {
              L(oe, V, !0);
            }
          });
        };
        Me(S, (O) => {
          b() instanceof Array ? O(P) : O(D, !1);
        });
      }
      ue(_, A);
    };
    Me(va, (_) => {
      b() != null && c(I) != null && _(ga);
    });
  }
  fe(xt), $e(xt, (_, A) => je?.(_, A), () => ({ click: oa, drag: ia, hover: aa }));
  var jn = ne(xt, 2);
  {
    var ya = (_) => {
      const A = /* @__PURE__ */ U(() => c(ie)(v().x, v().y));
      {
        let S = /* @__PURE__ */ U(() => Math.max(3, c(at) / l())), P = /* @__PURE__ */ U(() => F() ?? {
          class: sa,
          props: {
            colorScheme: c(j),
            fontFamily: c(Q).fontFamily
          }
        });
        lu(_, {
          get location() {
            return c(A);
          },
          get allowInteraction() {
            return c(W);
          },
          get targetHeight() {
            return c(S);
          },
          get customTooltip() {
            return c(P);
          },
          get tooltip() {
            return v();
          }
        });
      }
    };
    Me(jn, (_) => {
      v() != null && c(I) != null && _(ya);
    });
  }
  var ma = ne(jn, 2);
  {
    var xa = (_) => {
      {
        let A = /* @__PURE__ */ U(() => c(ye) ?? c(se)), S = /* @__PURE__ */ U(() => 1 / (c(ie)(1, 0).x - c(ie)(0, 0).x));
        iu(_, {
          get resolvedTheme() {
            return c(Q);
          },
          get statusMessage() {
            return c(A);
          },
          get distancePerPoint() {
            return c(S);
          },
          get pointCount() {
            return r().x.length;
          },
          get selectionMode() {
            return c(St);
          },
          onSelectionMode: (P) => L(St, P, !0)
        });
      }
    };
    Me(ma, (_) => {
      c(Q).statusBar && _(xa);
    });
  }
  fe(Mr), Ne(() => {
    zn = $(Mr, "", zn, {
      width: `${a() ?? ""}px`,
      height: `${o() ?? ""}px`,
      position: "relative"
    }), Gn = $(Fr, "", Gn, {
      width: `${a() ?? ""}px`,
      height: `${o() ?? ""}px`,
      position: "absolute",
      top: "0",
      left: "0"
    }), M(xt, "width", a()), M(xt, "height", o());
  }), _l("wheel", xt, ra), ue(e, Mr), Mt();
}
function Qo(e, t, r = 0, n = e.length - 1, i = Ns) {
  for (; n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, s = t - r + 1, f = Math.log(u), d = 0.5 * Math.exp(2 * f / 3), p = 0.5 * Math.sqrt(f * d * (u - d) / u) * (s - u / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - s * d / u + p)), v = Math.min(n, Math.floor(t + (u - s) * d / u + p));
      Qo(e, t, h, v, i);
    }
    const a = e[t];
    let o = r, l = n;
    for (dr(e, r, t), i(e[n], a) > 0 && dr(e, r, n); o < l; ) {
      for (dr(e, o, l), o++, l--; i(e[o], a) < 0; ) o++;
      for (; i(e[l], a) > 0; ) l--;
    }
    i(e[r], a) === 0 ? dr(e, r, l) : (l++, dr(e, l, n)), l <= t && (r = l + 1), t <= l && (n = l - 1);
  }
}
function dr(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function Ns(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Ti(e) {
  let t = new Float32Array(e), r = Math.floor(e.length / 2);
  return Qo(t, r), t[r];
}
function Is(e) {
  return e.length == 0 ? 0 : e.reduce((t, r) => t + r, 0) / e.length;
}
function Mi(e) {
  if (e.length == 0)
    return 0;
  let t = Is(e);
  return Math.sqrt(e.reduce((r, n) => r + (n - t) * (n - t)) / e.length);
}
function Ls(e, t, r, n = 0, i = 0) {
  let a = new ArrayBuffer(8), o = new Uint32Array(a), l = new BigUint64Array(a), u = /* @__PURE__ */ new Map();
  for (let f = 0; f < e.length; f++) {
    o[0] = Math.floor((e[f] - n) / r), o[1] = Math.floor((t[f] - i) / r);
    let d = l[0];
    u.set(d, (u.get(d) ?? 0) + 1);
  }
  let s = 0;
  for (let f of u.values())
    s = Math.max(f, s);
  return s / (r * r);
}
function Os(e, t) {
  Tt(t, !0);
  let r = T(t, "tooltip", 3, null), n = T(t, "selection", 3, null), i = T(t, "rangeSelection", 3, null), a = T(t, "categoryColors", 3, null), o = T(t, "width", 3, null), l = T(t, "height", 3, null), u = T(t, "pixelRatio", 3, null), s = T(t, "theme", 3, null), f = T(t, "config", 3, null), d = T(t, "viewportState", 3, null), p = T(t, "labels", 3, null), h = T(t, "customTooltip", 3, null), v = T(t, "customOverlay", 3, null), g = T(t, "querySelection", 3, null), y = T(t, "queryClusterLabels", 3, null), b = T(t, "onViewportState", 3, null), w = T(t, "onTooltip", 3, null), x = T(t, "onSelection", 3, null), F = T(t, "onRangeSelection", 3, null), R = T(t, "cache", 3, null), E = /* @__PURE__ */ U(() => B(t.data));
  function B(N) {
    let Z = 1;
    N.category != null && (Z = N.category.reduce((q, oe) => Math.max(q, oe), 0) + 1);
    let te = Ti(N.x), j = Ti(N.y), Q = Mi(N.x), we = Mi(N.y), K = 1 / (Math.max(Q, we, 1e-3) * 3), ve = 0.1 / K, ie = Ls(N.x, N.y, ve, te, j);
    return {
      count: N.x.length,
      categoryCount: Z,
      maxDensity: ie,
      defaultViewportState: { x: te, y: j, scale: K * 0.95 }
    };
  }
  {
    let N = /* @__PURE__ */ U(() => o() ?? 800), Z = /* @__PURE__ */ U(() => l() ?? 800), te = /* @__PURE__ */ U(() => u() ?? 2), j = /* @__PURE__ */ U(() => ({
      x: t.data.x,
      y: t.data.y,
      category: t.data.category ?? null
    }));
    Ho(e, {
      get width() {
        return c(N);
      },
      get height() {
        return c(Z);
      },
      get pixelRatio() {
        return c(te);
      },
      get theme() {
        return s();
      },
      get config() {
        return f();
      },
      get data() {
        return c(j);
      },
      get totalCount() {
        return c(E).count;
      },
      get maxDensity() {
        return c(E).maxDensity;
      },
      get categoryCount() {
        return c(E).categoryCount;
      },
      get categoryColors() {
        return a();
      },
      get defaultViewportState() {
        return c(E).defaultViewportState;
      },
      get querySelection() {
        return g();
      },
      get queryClusterLabels() {
        return y();
      },
      get labels() {
        return p();
      },
      get customTooltip() {
        return h();
      },
      get customOverlay() {
        return v();
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
        return x();
      },
      get viewportState() {
        return d();
      },
      get onViewportState() {
        return b();
      },
      get rangeSelection() {
        return i();
      },
      get onRangeSelection() {
        return F();
      },
      get cache() {
        return R();
      }
    });
  }
  Mt();
}
class js {
  component;
  currentProps;
  constructor(t, r) {
    this.currentProps = { ...r }, this.component = So({ component: Os, target: t, props: r });
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
function Fi(e, t) {
  if (t.length == 0)
    return m.literal(!1);
  if (e.identifier != null) {
    let r = e.identifier;
    return m.or(...t.map((n) => m.eq(m.column(r), m.literal(n.identifier))));
  } else {
    let r = e.x, n = e.y, i = e.category;
    return i != null ? m.or(
      ...t.map(
        (a) => m.and(
          m.eq(m.cast(m.column(r), "DOUBLE"), m.literal(a.x)),
          m.eq(m.cast(m.column(n), "DOUBLE"), m.literal(a.y)),
          m.eq(m.cast(m.column(i), "INTEGER"), m.literal(a.category))
        )
      )
    ) : m.or(
      ...t.map(
        (a) => m.and(
          m.eq(m.cast(m.column(r), "DOUBLE"), m.literal(a.x)),
          m.eq(m.cast(m.column(n), "DOUBLE"), m.literal(a.y))
        )
      )
    );
  }
}
function qs(e, t, r) {
  let n = [];
  for (let a = 0; a < r.length; a++) {
    let o = (a + 1) % r.length, { x: l, y: u } = r[a], { x: s, y: f } = r[o], d = u < f ? m.and(m.lte(m.literal(u), t), m.lt(t, m.literal(f))) : m.and(m.lte(m.literal(f), t), m.lt(t, m.literal(u))), p = (u < f ? m.lt : m.gt)(
      m.sub(m.mul(m.literal(s - l), t), m.mul(m.literal(f - u), e)),
      m.literal((s - l) * u - (f - u) * l)
    );
    n.push(m.cast(m.and(d, p), "INT"));
  }
  let i = n.reduce((a, o) => m.add(a, o));
  return m.eq(m.mod(i, m.literal(2)), m.literal(1));
}
function $s(e, t) {
  if (t instanceof Array) {
    if (t.length < 3)
      return m.literal(!1);
    let r = Po(t);
    return m.and(
      m.isBetween(m.column(e.x), [r.xMin, r.xMax]),
      m.isBetween(m.column(e.y), [r.yMin, r.yMax]),
      qs(m.column(e.x), m.column(e.y), t)
    );
  } else
    return m.and(
      m.isBetween(m.column(e.x), [t.xMin, t.xMax]),
      m.isBetween(m.column(e.y), [t.yMin, t.yMax])
    );
}
async function zs(e, t) {
  let { x: r, y: n, table: i } = t, a = await e.query(
    m.Query.from(i).select({
      centerX: m.sql`MEDIAN(${m.column(r)})`,
      centerY: m.sql`MEDIAN(${m.column(n)})`,
      stdX: m.sql`STDDEV(${m.column(r)})`,
      stdY: m.sql`STDDEV(${m.column(n)})`,
      ...t.category != null ? {
        maxCategory: m.sql`MAX(${m.column(t.category)}::UTINYINT)`
      } : {}
    })
  ), { centerX: o, centerY: l, stdX: u, stdY: s, maxCategory: f } = a.get(0), d = 1 / (Math.max(u, s, 1e-3) * 3), p = 0.1 / d, h = m.sql`FLOOR((${m.column(r)} - ${o}) / ${p})`, v = m.sql`FLOOR((${m.column(n)} - ${l}) / ${p})`, g = t.category != null ? m.column(t.category) : null, y = g != null ? [h, v, g] : [h, v], b = m.Query.from(
    m.Query.from(i).select({ count: m.sql`COUNT(*)` }).groupby(...y)
  ).select({
    totalCount: m.sql`SUM(count)::INT`,
    maxCount: m.sql`MAX(count)::INT`
  });
  a = await e.query(b);
  let { maxCount: w, totalCount: x } = a.get(0), F = w / (p * p);
  return {
    centerX: o,
    centerY: l,
    scaler: d,
    totalCount: x,
    categoryCount: (f ?? 0) + 1,
    maxDensity: F
  };
}
class Gs {
  coordinator;
  source;
  lastDistance;
  selectParams;
  constructor(t, r) {
    this.coordinator = t, this.source = r, this.lastDistance = 0;
    let { x: n, y: i, category: a, text: o, identifier: l } = this.source, u = {}, s = r.additionalFields ?? {};
    for (let f in s) {
      let d = s[f];
      typeof d == "string" ? u["field_" + f] = m.column(d) : u["field_" + f] = m.sql`${d.sql}`;
    }
    this.selectParams = {
      x: m.sql`${m.column(n)}::DOUBLE`,
      y: m.sql`${m.column(i)}::DOUBLE`,
      ...a != null ? { category: m.sql`${m.column(a)}::INT` } : {},
      ...o != null ? { text: m.sql`${m.column(o)}` } : {},
      ...l != null ? { identifier: m.sql`${m.column(l)}` } : {},
      ...u
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
    let a = i * 12, { x: o, y: l } = this.source;
    for (let u of [this.lastDistance, a]) {
      if (u == 0 || u > a)
        continue;
      let s = m.Query.from(this.source.table).select(this.selectParams);
      s = s.where(m.sql`${m.column(o)} BETWEEN ${r - u} AND ${r + u}`), s = s.where(m.sql`${m.column(l)} BETWEEN ${n - u} AND ${n + u}`), t && (s = s.where(t)), s = s.orderby(m.sql`(x - (${r}))**2 + (y - (${n}))**2`).limit(1);
      let f = (await this.coordinator.query(s)).get(0);
      if (f)
        return this.lastDistance = Math.max(Math.abs(f.x - r), Math.abs(f.y - n)) * 4, this._convertToDataPoint(f);
    }
    return null;
  }
  async queryPoints(t) {
    let { table: r, identifier: n } = this.source;
    if (n == null)
      return [];
    let i = m.Query.from(r).select(this.selectParams);
    return i = i.where(
      m.isIn(
        m.column(n),
        t.map((a) => m.literal(a))
      )
    ), Array.from(await this.coordinator.query(i)).map((a) => this._convertToDataPoint(a));
  }
}
function Vs(e, t) {
  Tt(t, !0);
  let r = T(t, "coordinator", 19, _a), n = T(t, "category", 3, null), i = T(t, "text", 3, null), a = T(t, "identifier", 3, null), o = T(t, "filter", 3, null), l = T(t, "categoryColors", 3, null), u = T(t, "tooltip", 3, null), s = T(t, "additionalFields", 3, null), f = T(t, "selection", 3, null), d = T(t, "rangeSelection", 3, null), p = T(t, "rangeSelectionValue", 3, null), h = T(t, "width", 3, null), v = T(t, "height", 3, null), g = T(t, "pixelRatio", 3, null), y = T(t, "config", 3, null), b = T(t, "theme", 3, null), w = T(t, "viewportState", 3, null), x = T(t, "labels", 3, null), F = T(t, "customTooltip", 3, null), R = T(t, "customOverlay", 3, null), E = T(t, "onViewportState", 3, null), B = T(t, "onTooltip", 3, null), N = T(t, "onSelection", 3, null), Z = T(t, "onRangeSelection", 3, null), te = T(t, "cache", 3, null), j = /* @__PURE__ */ J(new Float32Array()), Q = /* @__PURE__ */ J(new Float32Array()), we = /* @__PURE__ */ J(null), K = /* @__PURE__ */ J(1), ve = /* @__PURE__ */ J(1), ie = /* @__PURE__ */ J(1), q = /* @__PURE__ */ J(null), oe = /* @__PURE__ */ J(null), ae = /* @__PURE__ */ J(null), W = /* @__PURE__ */ J(null), Ae = /* @__PURE__ */ J(null);
  ut(() => {
    let C = {
      coordinator: r(),
      source: {
        table: t.table,
        x: t.x,
        y: t.y,
        category: n()
      }
    }, k = null, I = !1;
    async function se() {
      let re = C.source, Xe = await zs(C.coordinator, re);
      if (I)
        return;
      let Te = Xe.scaler * 0.95;
      L(q, {
        x: Xe.centerX,
        y: Xe.centerY,
        scale: Te
      }), L(ve, Xe.totalCount), L(ie, Xe.maxDensity), L(K, Xe.categoryCount), k = ba({
        coordinator: C.coordinator,
        selection: o() ?? void 0,
        query: (ot) => m.Query.from(re.table).select({
          x: m.sql`${m.column(re.x)}::FLOAT`,
          y: m.sql`${m.column(re.y)}::FLOAT`,
          ...re.category != null ? { c: m.sql`${m.column(re.category)}::UTINYINT` } : {}
        }).where(ot),
        queryResult: (ot) => {
          let yt = ot.getChild("x").toArray(), at = ot.getChild("y").toArray(), mt = ot.getChild("c")?.toArray() ?? null;
          yt != null && !(yt instanceof Float32Array) && (yt = new Float32Array(yt)), at != null && !(at instanceof Float32Array) && (at = new Float32Array(at)), mt != null && !(mt instanceof Uint8Array) && (mt = new Uint8Array(mt)), L(j, yt), L(Q, at), L(we, mt), de(null), le(null);
        }
      }), k.reset = () => {
        ge();
      }, L(Ae, k);
    }
    return se(), () => {
      L(Ae, null), I = !0, k?.destroy();
    };
  }), ut(() => {
    if (Wn(u())) {
      let C = c(Ae);
      if (C == null)
        return;
      let k = u();
      L(oe, k.valueFor(C) ?? null);
      let I = () => {
        L(oe, k.valueFor(C) ?? null);
      };
      return ut(() => {
        let se = c(oe), re = {
          x: t.x,
          y: t.y,
          category: n(),
          identifier: a()
        };
        k.update({
          source: C,
          clients: (/* @__PURE__ */ new Set()).add(C),
          predicate: se != null ? Fi(re, [se]) : null,
          value: se
        });
      }), k.addEventListener("value", I), () => {
        k.removeEventListener("value", I), k.update({
          source: C,
          clients: (/* @__PURE__ */ new Set()).add(C),
          value: null,
          predicate: null
        });
      };
    } else if (u() == null || typeof u() == "object")
      L(oe, u());
    else {
      if (c(oe)?.identifier == u())
        return;
      let C = !1;
      return St([u()]).then((k) => {
        C || (k.length > 0 ? L(oe, k[0]) : L(oe, null));
      }), () => {
        C = !0;
      };
    }
  });
  function de(C) {
    _t(u(), C) || (L(oe, C), B()?.(C));
  }
  ut(() => {
    if (Wn(f())) {
      let C = c(Ae);
      if (C == null)
        return;
      let k = f();
      L(ae, k.valueFor(C) ?? null);
      let I = () => {
        L(ae, k.valueFor(C) ?? null);
      };
      return ut(() => {
        let se = c(ae), re = {
          x: t.x,
          y: t.y,
          category: n(),
          identifier: a()
        };
        k.update({
          source: C,
          clients: (/* @__PURE__ */ new Set()).add(C),
          predicate: se != null ? Fi(re, se) : null,
          value: se
        });
      }), k.addEventListener("value", I), () => {
        k.removeEventListener("value", I), k.update({
          source: C,
          clients: (/* @__PURE__ */ new Set()).add(C),
          value: null,
          predicate: null
        });
      };
    } else if (f() == null)
      L(ae, null);
    else if (f().length == 0)
      L(ae, []);
    else if (f().every((C) => typeof C == "object"))
      L(ae, f());
    else {
      let C = !1;
      return St(f()).then((k) => {
        C || L(ae, k);
      }), () => {
        C = !0;
      };
    }
  });
  function le(C) {
    _t(f(), C) || (L(ae, C), N()?.(C));
  }
  ut(() => {
    let C = c(Ae);
    if (C == null)
      return;
    let k = d();
    if (k != null)
      return ut(() => {
        let I = c(W), se = { x: t.x, y: t.y }, re = {
          source: C,
          clients: (/* @__PURE__ */ new Set()).add(C),
          predicate: I != null ? $s(se, I) : null,
          value: I
        };
        k.update(re), k.activate(re);
      }), () => {
        k.update({
          source: C,
          clients: (/* @__PURE__ */ new Set()).add(C),
          value: null,
          predicate: null
        });
      };
  }), ut(() => {
    _t(zt(() => c(W)), p()) || L(W, p());
  });
  function ge() {
    le(null), de(null), Z()?.(null), L(W, null);
  }
  let Le = /* @__PURE__ */ U(() => new Gs(r(), {
    table: t.table,
    x: t.x,
    y: t.y,
    category: n(),
    text: i(),
    identifier: a(),
    additionalFields: s()
  }));
  async function ye(C, k, I) {
    return await c(Le).queryClosestPoint(o()?.predicate?.(c(Ae)), C, k, I);
  }
  async function St(C) {
    return await c(Le).queryPoints(C);
  }
  async function Vt(C) {
    if (i() == null)
      return C.map(() => null);
    let k = await ys({
      regions: C,
      stopWords: y()?.autoLabelStopWords ?? null
    }), I = 0, se = 1e4, re = null;
    for (; ; ) {
      let Te = await r().query(m.Query.from(t.table).select({
        x: m.column(t.x),
        y: m.column(t.y),
        text: m.column(i())
      }).offset(I).limit(se)), ot = {
        x: Te.getChild("x").toArray(),
        y: Te.getChild("y").toArray(),
        text: Te.getChild("text").toArray()
      };
      if (re != null && await re, re = xs(k, ot), Te.getChild("text").length < se)
        break;
      I += se;
    }
    re != null && await re;
    let Xe = await _s(k);
    return await ms(k), Xe.map((Te) => Te.length == 0 ? null : Te.length > 2 ? Te.slice(0, 2).join("-") + `-
` + Te.slice(2).join("-") : Te.join("-"));
  }
  {
    let C = /* @__PURE__ */ U(() => h() ?? 800), k = /* @__PURE__ */ U(() => v() ?? 800), I = /* @__PURE__ */ U(() => g() ?? 2), se = /* @__PURE__ */ U(() => ({
      x: c(j),
      y: c(Q),
      category: c(we)
    }));
    Ho(e, {
      get width() {
        return c(C);
      },
      get height() {
        return c(k);
      },
      get pixelRatio() {
        return c(I);
      },
      get theme() {
        return b();
      },
      get config() {
        return y();
      },
      get data() {
        return c(se);
      },
      get totalCount() {
        return c(ve);
      },
      get maxDensity() {
        return c(ie);
      },
      get categoryCount() {
        return c(K);
      },
      get categoryColors() {
        return l();
      },
      get defaultViewportState() {
        return c(q);
      },
      querySelection: ye,
      queryClusterLabels: Vt,
      get labels() {
        return x();
      },
      get customTooltip() {
        return F();
      },
      get customOverlay() {
        return R();
      },
      get tooltip() {
        return c(oe);
      },
      onTooltip: de,
      get selection() {
        return c(ae);
      },
      onSelection: le,
      get viewportState() {
        return w();
      },
      get onViewportState() {
        return E();
      },
      get rangeSelection() {
        return c(W);
      },
      onRangeSelection: (re) => {
        L(W, re), Z()?.(re);
      },
      get cache() {
        return te();
      }
    });
  }
  Mt();
}
class Ws {
  component;
  currentProps;
  constructor(t, r) {
    this.currentProps = { ...r }, this.component = So({ component: Vs, target: t, props: r });
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
function Hs() {
  return Si() ? 32 : 4;
}
export {
  js as K,
  Ws as Q,
  Hr as Z,
  Hs as a
};
