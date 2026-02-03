import { interactionHandler as Qe } from "@embedding-atlas/utils";
import { coordinator as bo, makeClient as wo, isSelection as Wn } from "@uwdata/mosaic-core";
import * as x from "@uwdata/mosaic-sql";
function Si() {
  return !(navigator.gpu == null || navigator.gpu.requestAdapter == null);
}
function Ao(e) {
  return e == 0 && (e = 4), e % 4 != 0 && (e += 4 - e % 4), e;
}
function Jt(e, t, r, n) {
  return (e.buffer == null || e.byteSize != r || e.usage != n) && (e.buffer != null && e.buffer.destroy(), e.buffer = t.createBuffer({ size: Ao(r), usage: n }), e.byteSize = r, e.destroy = () => {
    e.buffer?.destroy();
  }), e.buffer;
}
function en(e, t, r, n) {
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
function jn(e, t, r, n, i, o) {
  return (e.texture == null || e.width != r || e.height != n || e.format != i || e.usage != o) && (e.texture != null && e.texture.destroy(), e.texture = t.createTexture({ size: [r, n], format: i, usage: o }), e.destroy = () => {
    e.texture?.destroy();
  }), e.texture;
}
const ye = 2, An = 4, Or = 8, yt = 16, pt = 32, Gt = 64, zr = 128, He = 512, xe = 1024, Ce = 2048, mt = 4096, Le = 8192, Et = 16384, qr = 32768, rr = 65536, Kn = 1 << 17, Mi = 1 << 18, lr = 1 << 19, Ci = 1 << 20, Ot = 32768, dn = 1 << 21, En = 1 << 22, Rt = 1 << 23, Ut = Symbol("$state"), Fi = Symbol("legacy props"), Eo = Symbol(""), Zt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Rn = 3, sr = 8, Di = !1;
var Pi = Array.isArray, Ro = Array.prototype.indexOf, Tn = Array.from, Bi = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, ki = Object.getOwnPropertyDescriptors, To = Object.prototype, So = Array.prototype, Sn = Object.getPrototypeOf, Qn = Object.isExtensible;
function Mo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ui() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function Ni(e) {
  return e === this.v;
}
function Ii(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Li(e) {
  return !Ii(e, this.v);
}
function Oi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Co() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Fo(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Do() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Po(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ko() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Uo(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function No() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Io() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Lo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Oo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let zo = !1;
const zi = 1, qi = 2, Gi = 4, qo = 8, Go = 16, Vo = 1, Yo = 4, Xo = 8, Ho = 16, Wo = 1, jo = 2, Vi = "[", Gr = "[!", Mn = "]", nr = {}, me = Symbol(), Ko = "http://www.w3.org/1999/xhtml";
let Fe = null;
function ir(e) {
  Fe = e;
}
function Mt(e, t = !1, r) {
  Fe = {
    p: Fe,
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
    Fe
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      xa(n);
  }
  return t.i = !0, Fe = t.p, /** @type {T} */
  {};
}
function Yi() {
  return !0;
}
let Pt = [];
function Xi() {
  var e = Pt;
  Pt = [], Mo(e);
}
function ur(e) {
  if (Pt.length === 0 && !pr) {
    var t = Pt;
    queueMicrotask(() => {
      t === Pt && Xi();
    });
  }
  Pt.push(e);
}
function Qo() {
  for (; Pt.length > 0; )
    Xi();
}
function Vr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Zo() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let W = !1;
function dt(e) {
  W = e;
}
let H;
function Se(e) {
  if (e === null)
    throw Vr(), nr;
  return H = e;
}
function Er() {
  return Se(
    /** @type {TemplateNode} */
    /* @__PURE__ */ at(H)
  );
}
function ce(e) {
  if (W) {
    if (/* @__PURE__ */ at(H) !== null)
      throw Vr(), nr;
    H = e;
  }
}
function Hi(e = 1) {
  if (W) {
    for (var t = e, r = H; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ at(r);
    H = r;
  }
}
function kr(e = !0) {
  for (var t = 0, r = H; ; ) {
    if (r.nodeType === sr) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Mn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Vi || n === Gr) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(r)
    );
    e && r.remove(), r = i;
  }
}
function Wi(e) {
  if (!e || e.nodeType !== sr)
    throw Vr(), nr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Bt(e) {
  if (typeof e != "object" || e === null || Ut in e)
    return e;
  const t = Sn(e);
  if (t !== To && t !== So)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Pi(e), i = /* @__PURE__ */ $(0), o = It, a = (s) => {
    if (It === o)
      return s();
    var l = Y, u = It;
    Re(null), ti(o);
    var d = s();
    return Re(l), ti(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ $(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && No();
        var d = r.get(l);
        return d === void 0 ? d = a(() => {
          var c = /* @__PURE__ */ $(u.value);
          return r.set(l, c), c;
        }) : L(d, u.value, !0), !0;
      },
      deleteProperty(s, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in s) {
            const d = a(() => /* @__PURE__ */ $(me));
            r.set(l, d), mr(i);
          }
        } else
          L(u, me), mr(i);
        return !0;
      },
      get(s, l, u) {
        if (l === Ut)
          return e;
        var d = r.get(l), c = l in s;
        if (d === void 0 && (!c || $t(s, l)?.writable) && (d = a(() => {
          var v = Bt(c ? s[l] : me), h = /* @__PURE__ */ $(v);
          return h;
        }), r.set(l, d)), d !== void 0) {
          var y = f(d);
          return y === me ? void 0 : y;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var d = r.get(l);
          d && (u.value = f(d));
        } else if (u === void 0) {
          var c = r.get(l), y = c?.v;
          if (c !== void 0 && y !== me)
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
        var u = r.get(l), d = u !== void 0 && u.v !== me || Reflect.has(s, l);
        if (u !== void 0 || j !== null && (!d || $t(s, l)?.writable)) {
          u === void 0 && (u = a(() => {
            var y = d ? Bt(s[l]) : me, v = /* @__PURE__ */ $(y);
            return v;
          }), r.set(l, u));
          var c = f(u);
          if (c === me)
            return !1;
        }
        return d;
      },
      set(s, l, u, d) {
        var c = r.get(l), y = l in s;
        if (n && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          c.v; v += 1) {
            var h = r.get(v + "");
            h !== void 0 ? L(h, me) : v in s && (h = a(() => /* @__PURE__ */ $(me)), r.set(v + "", h));
          }
        if (c === void 0)
          (!y || $t(s, l)?.writable) && (c = a(() => /* @__PURE__ */ $(void 0)), L(c, Bt(u)), r.set(l, c));
        else {
          y = c.v !== me;
          var p = a(() => Bt(u));
          L(c, p);
        }
        var _ = Reflect.getOwnPropertyDescriptor(s, l);
        if (_?.set && _.set.call(d, u), !y) {
          if (n && typeof l == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= m.v && L(m, g + 1);
          }
          mr(i);
        }
        return !0;
      },
      ownKeys(s) {
        f(i);
        var l = Reflect.ownKeys(s).filter((c) => {
          var y = r.get(c);
          return y === void 0 || y.v !== me;
        });
        for (var [u, d] of r)
          d.v !== me && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Io();
      }
    }
  );
}
var Zn, ji, Ki, Qi;
function hn() {
  if (Zn === void 0) {
    Zn = window, ji = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ki = $t(t, "firstChild").get, Qi = $t(t, "nextSibling").get, Qn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Qn(r) && (r.__t = void 0);
  }
}
function Ge(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  return Ki.call(e);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return Qi.call(e);
}
function he(e, t) {
  if (!W)
    return /* @__PURE__ */ vt(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ vt(H)
  );
  if (r === null)
    r = H.appendChild(Ge());
  else if (t && r.nodeType !== Rn) {
    var n = Ge();
    return r?.before(n), Se(n), n;
  }
  return Se(r), r;
}
function Qt(e, t = !1) {
  if (!W) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ vt(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ at(r) : r;
  }
  if (t && H?.nodeType !== Rn) {
    var n = Ge();
    return H?.before(n), Se(n), n;
  }
  return H;
}
function ne(e, t = 1, r = !1) {
  let n = W ? H : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ at(n);
  if (!W)
    return n;
  if (r && n?.nodeType !== Rn) {
    var o = Ge();
    return n === null ? i?.after(o) : n.before(o), Se(o), o;
  }
  return Se(n), /** @type {TemplateNode} */
  n;
}
function Zi(e) {
  e.textContent = "";
}
function Ji() {
  return !1;
}
function $i(e) {
  var t = j;
  if (t === null)
    return Y.f |= Rt, e;
  if ((t.f & qr) === 0) {
    if ((t.f & zr) === 0)
      throw e;
    t.b.error(e);
  } else
    ar(e, t);
}
function ar(e, t) {
  for (; t !== null; ) {
    if ((t.f & zr) !== 0)
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
let se = null, Ne = null, Je = [], Yr = null, vn = !1, pr = !1;
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
  is_deferred() {
    return this.is_fork || this.#n > 0;
  }
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
    this.is_fork || this.#f(), this.is_deferred() ? (this.#a(r.effects), this.#a(r.render_effects), this.#a(r.block_effects)) : (se = null, Jn(r.render_effects), Jn(r.effects), this.#s?.resolve()), Ne = null;
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
      var i = n.f, o = (i & (pt | Gt)) !== 0, a = o && (i & xe) !== 0, s = a || (i & Le) !== 0 || this.skipped_effects.has(n);
      if ((n.f & zr) !== 0 && n.b?.is_pending() && (r = {
        parent: r,
        effect: n,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !s && n.fn !== null) {
        o ? n.f ^= xe : (i & An) !== 0 ? r.effects.push(n) : Rr(n) && ((n.f & yt) !== 0 && r.block_effects.push(n), br(n));
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
      ((r.f & Ce) !== 0 ? this.#o : this.#l).push(r), this.#u(r.deps), _e(r, xe);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const r of t)
        (r.f & ye) === 0 || (r.f & Ot) === 0 || (r.f ^= Ot, this.#u(
          /** @type {Derived} */
          r.deps
        ));
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
    se = this, this.apply();
  }
  deactivate() {
    se === this && (se = null, Ne = null);
  }
  flush() {
    if (this.activate(), Je.length > 0) {
      if (ea(), se !== null && se !== this)
        return;
    } else this.#r === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  #f() {
    if (this.#n === 0) {
      for (const t of this.#t) t();
      this.#t.clear();
    }
    this.#r === 0 && this.#c();
  }
  #c() {
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
            ta(u, a, s, l);
          if (Je.length > 0) {
            se = i, i.apply();
            for (const u of Je)
              i.#i(u, n);
            Je = [], i.deactivate();
          }
        }
      }
      se = null, Ne = t;
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
      _e(t, Ce), zt(t);
    for (const t of this.#l)
      _e(t, mt), zt(t);
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
    return (this.#s ??= Ui()).promise;
  }
  static ensure() {
    if (se === null) {
      const t = se = new $e();
      Cr.add(se), pr || $e.enqueue(() => {
        se === t && t.flush();
      });
    }
    return se;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    ur(t);
  }
  apply() {
  }
}
function Jo(e) {
  var t = pr;
  pr = !0;
  try {
    for (var r; ; ) {
      if (Qo(), Je.length === 0 && (se?.flush(), Je.length === 0))
        return Yr = null, /** @type {T} */
        r;
      ea();
    }
  } finally {
    pr = t;
  }
}
function ea() {
  var e = Nt;
  vn = !0;
  try {
    var t = 0;
    for ($n(!0); Je.length > 0; ) {
      var r = $e.ensure();
      if (t++ > 1e3) {
        var n, i;
        $o();
      }
      r.process(Je), Tt.clear();
    }
  } finally {
    vn = !1, $n(e), Yr = null;
  }
}
function $o() {
  try {
    Bo();
  } catch (e) {
    ar(e, Yr);
  }
}
let ct = null;
function Jn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Et | Le)) === 0 && Rr(n) && (ct = /* @__PURE__ */ new Set(), br(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? wa(n) : n.fn = null), ct?.size > 0)) {
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
function ta(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const o = i.f;
      (o & ye) !== 0 ? ta(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (o & (En | yt)) !== 0 && (o & Ce) === 0 && // we may have scheduled this one already
      ra(i, t, n) && (_e(i, Ce), zt(
        /** @type {Effect} */
        i
      ));
    }
}
function ra(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & ye) !== 0 && ra(
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
function zt(e) {
  for (var t = Yr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (vn && t === j && (r & yt) !== 0 && (r & Mi) === 0)
      return;
    if ((r & (Gt | pt)) !== 0) {
      if ((r & xe) === 0) return;
      t.f ^= xe;
    }
  }
  Je.push(t);
}
function el(e) {
  let t = 0, r = qt(0), n;
  return () => {
    Hr() && (f(r), Dn(() => (t === 0 && (n = Yt(() => e(() => mr(r)))), t += 1, () => {
      ur(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, mr(r));
      });
    })));
  };
}
var tl = rr | lr | zr;
function rl(e, t, r) {
  new nl(e, t, r);
}
class nl {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #r = W ? H : null;
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
  #c = 0;
  #d = 0;
  #v = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #_ = el(() => (this.#h = qt(this.#c), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    this.#e = t, this.#n = r, this.#s = n, this.parent = /** @type {Effect} */
    j.b, this.#t = !!this.#n.pending, this.#o = Wr(() => {
      if (j.b = this, W) {
        const o = this.#r;
        Er(), /** @type {Comment} */
        o.nodeType === sr && /** @type {Comment} */
        o.data === Gr ? this.#b() : this.#g();
      } else {
        var i = this.#m();
        try {
          this.#l = qe(() => n(i));
        } catch (o) {
          this.error(o);
        }
        this.#d > 0 ? this.#p() : this.#t = !1;
      }
      return () => {
        this.#f?.remove();
      };
    }, tl), W && (this.#e = H);
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
      this.#l = this.#y(() => ($e.ensure(), qe(() => this.#s(r)))), this.#d > 0 ? this.#p() : (er(
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
    return this.#t && (this.#f = Ge(), this.#e.before(this.#f), t = this.#f), t;
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
    var r = j, n = Y, i = Fe;
    nt(this.#o), Re(this.#o), ir(this.#o.ctx);
    try {
      return t();
    } catch (o) {
      return $i(o), null;
    } finally {
      nt(r), Re(n), ir(i);
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
    ), Ra(this.#l, this.#u)), this.#i === null && (this.#i = qe(() => t(this.#e)));
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
    this.#d += t, this.#d === 0 && (this.#t = !1, this.#i && er(this.#i, () => {
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
    this.#x(t), this.#c += t, this.#h && or(this.#h, this.#c);
  }
  get_effect_pending() {
    return this.#_(), f(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = this.#n.onerror;
    let n = this.#n.failed;
    if (this.#v || !r && !n)
      throw t;
    this.#l && (Me(this.#l), this.#l = null), this.#i && (Me(this.#i), this.#i = null), this.#a && (Me(this.#a), this.#a = null), W && (Se(
      /** @type {TemplateNode} */
      this.#r
    ), Hi(), Se(kr()));
    var i = !1, o = !1;
    const a = () => {
      if (i) {
        Zo();
        return;
      }
      i = !0, o && Oo(), $e.ensure(), this.#c = 0, this.#a !== null && er(this.#a, () => {
        this.#a = null;
      }), this.#t = this.has_pending_snippet(), this.#l = this.#y(() => (this.#v = !1, qe(() => this.#s(this.#e)))), this.#d > 0 ? this.#p() : this.#t = !1;
    };
    var s = Y;
    try {
      Re(null), o = !0, r?.(t, a), o = !1;
    } catch (l) {
      ar(l, this.#o && this.#o.parent);
    } finally {
      Re(s);
    }
    n && ur(() => {
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
          return ar(
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
function il(e, t, r, n) {
  const i = Xr;
  if (r.length === 0 && e.length === 0) {
    n(t.map(i));
    return;
  }
  var o = se, a = (
    /** @type {Effect} */
    j
  ), s = al();
  function l() {
    Promise.all(r.map((u) => /* @__PURE__ */ ol(u))).then((u) => {
      s();
      try {
        n([...t.map(i), ...u]);
      } catch (d) {
        (a.f & Et) === 0 && ar(d, a);
      }
      o?.deactivate(), Ur();
    }).catch((u) => {
      ar(u, a);
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
function al() {
  var e = j, t = Y, r = Fe, n = se;
  return function(o = !0) {
    nt(e), Re(t), ir(r), o && n?.activate();
  };
}
function Ur() {
  nt(null), Re(null), ir(null);
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  var t = ye | Ce, r = Y !== null && (Y.f & ye) !== 0 ? (
    /** @type {Derived} */
    Y
  ) : null;
  return j !== null && (j.f |= lr), {
    ctx: Fe,
    deps: null,
    effects: null,
    equals: Ni,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      me
    ),
    wv: 0,
    parent: r ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ol(e, t) {
  let r = (
    /** @type {Effect | null} */
    j
  );
  r === null && Co();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), o = qt(
    /** @type {V} */
    me
  ), a = !Y, s = /* @__PURE__ */ new Map();
  return yl(() => {
    var l = Ui();
    i = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === se && u.committed && u.deactivate(), Ur();
      });
    } catch (y) {
      l.reject(y), Ur();
    }
    var u = (
      /** @type {Batch} */
      se
    );
    if (a) {
      var d = !n.is_pending();
      n.update_pending_count(1), u.increment(d), s.get(u)?.reject(Zt), s.delete(u), s.set(u, l);
    }
    const c = (y, v = void 0) => {
      if (u.activate(), v)
        v !== Zt && (o.f |= Rt, or(o, v));
      else {
        (o.f & Rt) !== 0 && (o.f ^= Rt), or(o, y);
        for (const [h, p] of s) {
          if (s.delete(h), h === u) break;
          p.reject(Zt);
        }
      }
      a && (n.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(c, (y) => c(null, y || "unknown"));
  }), ma(() => {
    for (const l of s.values())
      l.reject(Zt);
  }), new Promise((l) => {
    function u(d) {
      function c() {
        d === i ? l(o) : u(i);
      }
      d.then(c, c);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function k(e) {
  const t = /* @__PURE__ */ Xr(e);
  return ua(t), t;
}
// @__NO_SIDE_EFFECTS__
function na(e) {
  const t = /* @__PURE__ */ Xr(e);
  return t.equals = Li, t;
}
function ia(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Me(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ll(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ye) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Cn(e) {
  var t, r = j;
  nt(ll(e));
  try {
    e.f &= ~Ot, ia(e), t = ha(e);
  } finally {
    nt(r);
  }
  return t;
}
function aa(e) {
  var t = Cn(e);
  if (e.equals(t) || (e.v = t, e.wv = ca()), !Vt)
    if (Ne !== null)
      Hr() && Ne.set(e, e.v);
    else {
      var r = (e.f & He) === 0 ? mt : xe;
      _e(e, r);
    }
}
let yn = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
let oa = !1;
function qt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ni,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  const r = qt(e);
  return ua(r), r;
}
// @__NO_SIDE_EFFECTS__
function la(e, t = !1, r = !0) {
  const n = qt(e);
  return t || (n.equals = Li), n;
}
function L(e, t, r = !1) {
  Y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!et || (Y.f & Kn) !== 0) && Yi() && (Y.f & (ye | yt | En | Kn)) !== 0 && !ht?.includes(e) && Lo();
  let n = r ? Bt(t) : t;
  return or(e, n);
}
function or(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Vt ? Tt.set(e, t) : Tt.set(e, r), e.v = t;
    var n = $e.ensure();
    n.capture(e, r), (e.f & ye) !== 0 && ((e.f & Ce) !== 0 && Cn(
      /** @type {Derived} */
      e
    ), _e(e, (e.f & He) !== 0 ? xe : mt)), e.wv = ca(), sa(e, Ce), j !== null && (j.f & xe) !== 0 && (j.f & (pt | Gt)) === 0 && (ze === null ? ul([e]) : ze.push(e)), !n.is_fork && yn.size > 0 && !oa && sl();
  }
  return t;
}
function sl() {
  oa = !1;
  const e = Array.from(yn);
  for (const t of e)
    (t.f & xe) !== 0 && _e(t, mt), Rr(t) && br(t);
  yn.clear();
}
function mr(e) {
  L(e, e.v + 1);
}
function sa(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var o = r[i], a = o.f, s = (a & Ce) === 0;
      if (s && _e(o, t), (a & ye) !== 0) {
        var l = (
          /** @type {Derived} */
          o
        );
        Ne?.delete(l), (a & Ot) === 0 && (a & He && (o.f |= Ot), sa(l, mt));
      } else s && ((a & yt) !== 0 && ct !== null && ct.add(
        /** @type {Effect} */
        o
      ), zt(
        /** @type {Effect} */
        o
      ));
    }
}
function Fn(e) {
  var t = Y, r = j;
  Re(null), nt(null);
  try {
    return e();
  } finally {
    Re(t), nt(r);
  }
}
let Nt = !1;
function $n(e) {
  Nt = e;
}
let Vt = !1;
function ei(e) {
  Vt = e;
}
let Y = null, et = !1;
function Re(e) {
  Y = e;
}
let j = null;
function nt(e) {
  j = e;
}
let ht = null;
function ua(e) {
  Y !== null && (ht === null ? ht = [e] : ht.push(e));
}
let we = null, Ue = 0, ze = null;
function ul(e) {
  ze = e;
}
let fa = 1, gr = 0, It = gr;
function ti(e) {
  It = e;
}
function ca() {
  return ++fa;
}
function Rr(e) {
  var t = e.f;
  if ((t & Ce) !== 0)
    return !0;
  if (t & ye && (e.f &= ~Ot), (t & mt) !== 0) {
    var r = e.deps;
    if (r !== null)
      for (var n = r.length, i = 0; i < n; i++) {
        var o = r[i];
        if (Rr(
          /** @type {Derived} */
          o
        ) && aa(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
      }
    (t & He) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ne === null && _e(e, xe);
  }
  return !1;
}
function da(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !ht?.includes(e))
    for (var i = 0; i < n.length; i++) {
      var o = n[i];
      (o.f & ye) !== 0 ? da(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? _e(o, Ce) : (o.f & xe) !== 0 && _e(o, mt), zt(
        /** @type {Effect} */
        o
      ));
    }
}
function ha(e) {
  var t = we, r = Ue, n = ze, i = Y, o = ht, a = Fe, s = et, l = It, u = e.f;
  we = /** @type {null | Value[]} */
  null, Ue = 0, ze = null, Y = (u & (pt | Gt)) === 0 ? e : null, ht = null, ir(e.ctx), et = !1, It = ++gr, e.ac !== null && (Fn(() => {
    e.ac.abort(Zt);
  }), e.ac = null);
  try {
    e.f |= dn;
    var d = (
      /** @type {Function} */
      e.fn
    ), c = d(), y = e.deps;
    if (we !== null) {
      var v;
      if (Nr(e, Ue), y !== null && Ue > 0)
        for (y.length = Ue + we.length, v = 0; v < we.length; v++)
          y[Ue + v] = we[v];
      else
        e.deps = y = we;
      if (Nt && Hr() && (e.f & He) !== 0)
        for (v = Ue; v < y.length; v++)
          (y[v].reactions ??= []).push(e);
    } else y !== null && Ue < y.length && (Nr(e, Ue), y.length = Ue);
    if (Yi() && ze !== null && !et && y !== null && (e.f & (ye | mt | Ce)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      ze.length; v++)
        da(
          ze[v],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (gr++, ze !== null && (n === null ? n = ze : n.push(.../** @type {Source[]} */
    ze))), (e.f & Rt) !== 0 && (e.f ^= Rt), c;
  } catch (h) {
    return $i(h);
  } finally {
    e.f ^= dn, we = t, Ue = r, ze = n, Y = i, ht = o, ir(a), et = s, It = l;
  }
}
function fl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ro.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && (t.f & ye) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (we === null || !we.includes(t)) && (_e(t, mt), (t.f & He) !== 0 && (t.f ^= He, t.f &= ~Ot), ia(
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
      fl(e, r[n]);
}
function br(e) {
  var t = e.f;
  if ((t & Et) === 0) {
    _e(e, xe);
    var r = j, n = Nt;
    j = e, Nt = !0;
    try {
      (t & yt) !== 0 ? pl(e) : ba(e), ga(e);
      var i = ha(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = fa;
      var o;
      Di && zo && (e.f & Ce) !== 0 && e.deps;
    } finally {
      Nt = n, j = r;
    }
  }
}
function f(e) {
  var t = e.f, r = (t & ye) !== 0;
  if (Y !== null && !et) {
    var n = j !== null && (j.f & Et) !== 0;
    if (!n && !ht?.includes(e)) {
      var i = Y.deps;
      if ((Y.f & dn) !== 0)
        e.rv < gr && (e.rv = gr, we === null && i !== null && i[Ue] === e ? Ue++ : we === null ? we = [e] : we.includes(e) || we.push(e));
      else {
        (Y.deps ??= []).push(e);
        var o = e.reactions;
        o === null ? e.reactions = [Y] : o.includes(Y) || o.push(Y);
      }
    }
  }
  if (Vt) {
    if (Tt.has(e))
      return Tt.get(e);
    if (r) {
      var a = (
        /** @type {Derived} */
        e
      ), s = a.v;
      return ((a.f & xe) === 0 && a.reactions !== null || ya(a)) && (s = Cn(a)), Tt.set(a, s), s;
    }
  } else if (r) {
    if (a = /** @type {Derived} */
    e, Ne?.has(a))
      return Ne.get(a);
    Rr(a) && aa(a), Nt && Hr() && (a.f & He) === 0 && va(a);
  } else if (Ne?.has(e))
    return Ne.get(e);
  if ((e.f & Rt) !== 0)
    throw e.v;
  return e.v;
}
function va(e) {
  if (e.deps !== null) {
    e.f ^= He;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ye) !== 0 && (t.f & He) === 0 && va(
        /** @type {Derived} */
        t
      );
  }
}
function ya(e) {
  if (e.v === me) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tt.has(t) || (t.f & ye) !== 0 && ya(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Yt(e) {
  var t = et;
  try {
    return et = !0, e();
  } finally {
    et = t;
  }
}
const cl = -7169;
function _e(e, t) {
  e.f = e.f & cl | t;
}
function dl(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ut in e)
      pn(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Ut in r && pn(r);
      }
  }
}
function pn(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        pn(e[n], t);
      } catch {
      }
    const r = Sn(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = ki(r);
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
function pa(e) {
  j === null && (Y === null && Po(), Do()), Vt && Fo();
}
function hl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ot(e, t, r) {
  var n = j;
  n !== null && (n.f & Le) !== 0 && (e |= Le);
  var i = {
    ctx: Fe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ce | He,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      br(i), i.f |= qr;
    } catch (s) {
      throw Me(i), s;
    }
  else t !== null && zt(i);
  var o = i;
  if (r && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
  (o.f & lr) === 0 && (o = o.first, (e & yt) !== 0 && (e & rr) !== 0 && o !== null && (o.f |= rr)), o !== null && (o.parent = n, n !== null && hl(o, n), Y !== null && (Y.f & ye) !== 0 && (e & Gt) === 0)) {
    var a = (
      /** @type {Derived} */
      Y
    );
    (a.effects ??= []).push(o);
  }
  return i;
}
function Hr() {
  return Y !== null && !et;
}
function ma(e) {
  const t = ot(Or, null, !1);
  return _e(t, xe), t.teardown = e, t;
}
function ft(e) {
  pa();
  var t = (
    /** @type {Effect} */
    j.f
  ), r = !Y && (t & pt) !== 0 && (t & qr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Fe
    );
    (n.e ??= []).push(e);
  } else
    return xa(e);
}
function xa(e) {
  return ot(An | Ci, e, !1);
}
function xr(e) {
  return pa(), ot(Or | Ci, e, !0);
}
function vl(e) {
  $e.ensure();
  const t = ot(Gt | lr, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? er(t, () => {
      Me(t), n(void 0);
    }) : (Me(t), n(void 0));
  });
}
function _a(e) {
  return ot(An, e, !1);
}
function yl(e) {
  return ot(En | lr, e, !0);
}
function Dn(e, t = 0) {
  return ot(Or | t, e, !0);
}
function Ie(e, t = [], r = [], n = []) {
  il(n, t, r, (i) => {
    ot(Or, () => e(...i.map(f)), !0);
  });
}
function Wr(e, t = 0) {
  var r = ot(yt | t, e, !0);
  return r;
}
function qe(e) {
  return ot(pt | lr, e, !0);
}
function ga(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Vt, n = Y;
    ei(!0), Re(null);
    try {
      t.call(null);
    } finally {
      ei(r), Re(n);
    }
  }
}
function ba(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Fn(() => {
      i.abort(Zt);
    });
    var n = r.next;
    (r.f & Gt) !== 0 ? r.parent = null : Me(r, t), r = n;
  }
}
function pl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & pt) === 0 && Me(t), t = r;
  }
}
function Me(e, t = !0) {
  var r = !1;
  (t || (e.f & Mi) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (ml(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), ba(e, t && !r), Nr(e, 0), _e(e, Et);
  var n = e.transitions;
  if (n !== null)
    for (const o of n)
      o.stop();
  ga(e);
  var i = e.parent;
  i !== null && i.first !== null && wa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function ml(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(e)
    );
    e.remove(), e = r;
  }
}
function wa(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function er(e, t, r = !0) {
  var n = [];
  Pn(e, n, !0), Aa(n, () => {
    r && Me(e), t && t();
  });
}
function Aa(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Pn(e, t, r) {
  if ((e.f & Le) === 0) {
    if (e.f ^= Le, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var i = n.next, o = (n.f & rr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & pt) !== 0 && (e.f & yt) !== 0;
      Pn(n, t, o ? r : !1), n = i;
    }
  }
}
function Bn(e) {
  Ea(e, !0);
}
function Ea(e, t) {
  if ((e.f & Le) !== 0) {
    e.f ^= Le, (e.f & xe) === 0 && (_e(e, Ce), zt(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & rr) !== 0 || (r.f & pt) !== 0;
      Ea(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function Ra(e, t) {
  for (var r = e.nodes_start, n = e.nodes_end; r !== null; ) {
    var i = r === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ at(r)
    );
    t.append(r), r = i;
  }
}
const Ta = /* @__PURE__ */ new Set(), mn = /* @__PURE__ */ new Set();
function xl(e, t, r, n = {}) {
  function i(o) {
    if (n.capture || yr.call(t, o), !o.cancelBubble)
      return Fn(() => r?.call(this, o));
  }
  return ur(() => {
    t.addEventListener(e, i, n);
  }), i;
}
function _l(e, t, r, n, i) {
  var o = { capture: n, passive: i }, a = xl(e, t, r, o);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ma(() => {
    t.removeEventListener(e, a, o);
  });
}
function gl(e) {
  for (var t = 0; t < e.length; t++)
    Ta.add(e[t]);
  for (var r of mn)
    r(e);
}
let ri = null;
function yr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ri = e;
  var a = 0, s = ri === e && e.__root;
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
    Bi(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var d = Y, c = j;
    Re(null), nt(null);
    try {
      for (var y, v = []; o !== null; ) {
        var h = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var p = o["__" + n];
          p != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o) && p.call(o, e);
        } catch (_) {
          y ? v.push(_) : y = _;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        o = h;
      }
      if (y) {
        for (let _ of v)
          queueMicrotask(() => {
            throw _;
          });
        throw y;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(d), nt(c);
    }
  }
}
function Sa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function St(e, t) {
  var r = (
    /** @type {Effect} */
    j
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ft(e, t) {
  var r = (t & Wo) !== 0, n = (t & jo) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (W)
      return St(H, null), H;
    i === void 0 && (i = Sa(o ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ vt(i)));
    var a = (
      /** @type {TemplateNode} */
      n || ji ? document.importNode(i, !0) : i.cloneNode(!0)
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
function bl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (W)
      return St(H, null), H;
    if (!o) {
      var a = (
        /** @type {DocumentFragment} */
        Sa(i)
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
  return /* @__PURE__ */ bl(e, t, "svg");
}
function dr() {
  if (W)
    return St(H, null), H;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Ge();
  return e.append(t, r), St(t, r), e;
}
function ie(e, t) {
  if (W) {
    var r = (
      /** @type {Effect} */
      j
    );
    ((r.f & qr) === 0 || r.nodes_end === null) && (r.nodes_end = H), Er();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const wl = ["touchstart", "touchmove"];
function Al(e) {
  return wl.includes(e);
}
function _r(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function Ma(e, t) {
  return Ca(e, t);
}
function El(e, t) {
  hn(), t.intro = t.intro ?? !1;
  const r = t.target, n = W, i = H;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vt(r)
    ); o && (o.nodeType !== sr || /** @type {Comment} */
    o.data !== Vi); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ at(o);
    if (!o)
      throw nr;
    dt(!0), Se(
      /** @type {Comment} */
      o
    );
    const a = Ca(e, { ...t, anchor: o });
    return dt(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((s) => s.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== nr && console.warn("Failed to hydrate: ", a), t.recover === !1 && ko(), hn(), Zi(r), dt(!1), Ma(e, t);
  } finally {
    dt(n), Se(i);
  }
}
const Kt = /* @__PURE__ */ new Map();
function Ca(e, { target: t, anchor: r, props: n = {}, events: i, context: o, intro: a = !0 }) {
  hn();
  var s = /* @__PURE__ */ new Set(), l = (c) => {
    for (var y = 0; y < c.length; y++) {
      var v = c[y];
      if (!s.has(v)) {
        s.add(v);
        var h = Al(v);
        t.addEventListener(v, yr, { passive: h });
        var p = Kt.get(v);
        p === void 0 ? (document.addEventListener(v, yr, { passive: h }), Kt.set(v, 1)) : Kt.set(v, p + 1);
      }
    }
  };
  l(Tn(Ta)), mn.add(l);
  var u = void 0, d = vl(() => {
    var c = r ?? t.appendChild(Ge());
    return rl(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (y) => {
        if (o) {
          Mt({});
          var v = (
            /** @type {ComponentContext} */
            Fe
          );
          v.c = o;
        }
        if (i && (n.$$events = i), W && St(
          /** @type {TemplateNode} */
          y,
          null
        ), u = e(y, n) || {}, W && (j.nodes_end = H, H === null || H.nodeType !== sr || /** @type {Comment} */
        H.data !== Mn))
          throw Vr(), nr;
        o && Ct();
      }
    ), () => {
      for (var y of s) {
        t.removeEventListener(y, yr);
        var v = (
          /** @type {number} */
          Kt.get(y)
        );
        --v === 0 ? (document.removeEventListener(y, yr), Kt.delete(y)) : Kt.set(y, v);
      }
      mn.delete(l), c !== r && c.parentNode?.removeChild(c);
    };
  });
  return xn.set(u, d), u;
}
let xn = /* @__PURE__ */ new WeakMap();
function Rl(e, t) {
  const r = xn.get(e);
  return r ? (xn.delete(e), r(t)) : Promise.resolve();
}
function Fa(e) {
  return new Tl(e);
}
class Tl {
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
      var s = /* @__PURE__ */ la(a, !1, !1);
      return r.set(o, s), s;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, a) {
          return f(r.get(a) ?? n(a, Reflect.get(o, a)));
        },
        has(o, a) {
          return a === Fi ? !0 : (f(r.get(a) ?? n(a, Reflect.get(o, a))), Reflect.has(o, a));
        },
        set(o, a, s) {
          return L(r.get(a) ?? n(a, s), s), Reflect.set(o, a, s);
        }
      }
    );
    this.#e = (t.hydrate ? El : Ma)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && Jo(), this.#t = i.$$events;
    for (const o of Object.keys(this.#e))
      o === "$set" || o === "$destroy" || o === "$on" || Bi(this, o, {
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
      Rl(this.#e);
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
const Sl = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Sl);
class Da {
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
      se
    );
    if (this.#t.has(t)) {
      var r = (
        /** @type {Key} */
        this.#t.get(t)
      ), n = this.#e.get(r);
      if (n)
        Bn(n);
      else {
        var i = this.#r.get(r);
        i && (this.#e.set(r, i.effect), this.#r.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [o, a] of this.#t) {
        if (this.#t.delete(o), o === t)
          break;
        const s = this.#r.get(a);
        s && (Me(s.effect), this.#r.delete(a));
      }
      for (const [o, a] of this.#e) {
        if (o === r) continue;
        const s = () => {
          if (Array.from(this.#t.values()).includes(o)) {
            var u = document.createDocumentFragment();
            Ra(a, u), u.append(Ge()), this.#r.set(o, { effect: a, fragment: u });
          } else
            Me(a);
          this.#e.delete(o);
        };
        this.#n || !n ? er(a, s, !1) : s();
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
      r.includes(n) || (Me(i.effect), this.#r.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      se
    ), i = Ji();
    if (r && !this.#e.has(t) && !this.#r.has(t))
      if (i) {
        var o = document.createDocumentFragment(), a = Ge();
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
      W && (this.anchor = H), this.#s();
  }
}
function kn(e) {
  Fe === null && Oi(), ft(() => {
    const t = Yt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ml(e) {
  Fe === null && Oi(), kn(() => () => Yt(e));
}
function Ee(e, t, r = !1) {
  W && Er();
  var n = new Da(e), i = r ? rr : 0;
  function o(a, s) {
    if (W) {
      const u = Wi(e) === Gr;
      if (a === u) {
        var l = kr();
        Se(l), n.anchor = l, dt(!1), n.ensure(a, s), dt(!0);
        return;
      }
    }
    n.ensure(a, s);
  }
  Wr(() => {
    var a = !1;
    t((s, l = !0) => {
      a = !0, o(l, s);
    }), a || o(!1, null);
  }, i);
}
function Cl(e, t, r) {
  W && Er();
  var n = new Da(e);
  Wr(() => {
    var i = t();
    n.ensure(i, r);
  });
}
function tn(e, t) {
  return t;
}
function Fl(e, t, r) {
  for (var n = [], i = t.length, o = 0; o < i; o++)
    Pn(t[o].e, n, !0);
  Aa(n, () => {
    var a = n.length === 0 && r !== null;
    if (a) {
      var s = (
        /** @type {Element} */
        r
      ), l = (
        /** @type {Element} */
        s.parentNode
      );
      Zi(l), l.append(s), e.items.clear(), Ze(e, t[0].prev, t[i - 1].next);
    }
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (e.items.delete(d.k), Ze(e, d.prev, d.next)), Me(d.e, !a);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function rn(e, t, r, n, i, o = null) {
  var a = e, s = { items: /* @__PURE__ */ new Map(), first: null }, l = (t & Gi) !== 0, u = (t & zi) !== 0, d = (t & qi) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    a = W ? Se(
      /** @type {Comment | Text} */
      /* @__PURE__ */ vt(c)
    ) : c.appendChild(Ge());
  }
  W && Er();
  var y = null, v = /* @__PURE__ */ na(() => {
    var g = r();
    return Pi(g) ? g : g == null ? [] : Tn(g);
  }), h, p = !0;
  function _() {
    Dl(m, h, s, a, t, n), y !== null && (h.length === 0 ? (y.fragment ? (a.before(y.fragment), y.fragment = null) : Bn(y.effect), m.first = y.effect) : er(y.effect, () => {
      y = null;
    }));
  }
  var m = Wr(() => {
    h = /** @type {V[]} */
    f(v);
    var g = h.length;
    let b = !1;
    if (W) {
      var S = Wi(a) === Gr;
      S !== (g === 0) && (a = kr(), Se(a), dt(!1), b = !0);
    }
    for (var M = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      se
    ), N = null, P = Ji(), q = 0; q < g; q += 1) {
      W && H.nodeType === sr && /** @type {Comment} */
      H.data === Mn && (a = /** @type {Comment} */
      H, b = !0, dt(!1));
      var Z = h[q], J = n(Z, q), G = p ? null : s.items.get(J);
      G ? (u && or(G.v, Z), d ? or(
        /** @type {Value<number>} */
        G.i,
        q
      ) : G.i = q, C.skipped_effects.delete(G.e)) : (G = Pl(
        p ? a : null,
        N,
        Z,
        J,
        q,
        i,
        t,
        r
      ), p && (G.o = !0, N === null ? s.first = G : N.next = G, N = G), s.items.set(J, G)), M.add(J);
    }
    if (g === 0 && o && !y)
      if (p)
        y = {
          fragment: null,
          effect: qe(() => o(a))
        };
      else {
        var ge = document.createDocumentFragment(), te = Ge();
        ge.append(te), y = {
          fragment: ge,
          effect: qe(() => o(te))
        };
      }
    W && g > 0 && Se(kr());
    for (const [De, ae] of s.items)
      M.has(De) || C.skipped_effects.add(ae.e);
    p || (P ? (C.oncommit(_), C.ondiscard(() => {
    })) : _()), b && dt(!0), f(v);
  });
  p = !1, W && (a = H);
}
function Dl(e, t, r, n, i, o) {
  var a = (i & qo) !== 0, s = t.length, l = r.items, u = r.first, d, c = null, y, v = [], h = [], p, _, m, g;
  if (a)
    for (g = 0; g < s; g += 1)
      p = t[g], _ = o(p, g), m = /** @type {EachItem} */
      l.get(_), m.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add(m);
  for (g = 0; g < s; g += 1) {
    if (p = t[g], _ = o(p, g), m = /** @type {EachItem} */
    l.get(_), r.first ??= m, !m.o) {
      m.o = !0;
      var b = c ? c.next : u;
      Ze(r, c, m), Ze(r, m, b), nn(m, b, n), c = m, v = [], h = [], u = c.next;
      continue;
    }
    if ((m.e.f & Le) !== 0 && (Bn(m.e), a && (m.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete(m))), m !== u) {
      if (d !== void 0 && d.has(m)) {
        if (v.length < h.length) {
          var S = h[0], M;
          c = S.prev;
          var C = v[0], N = v[v.length - 1];
          for (M = 0; M < v.length; M += 1)
            nn(v[M], S, n);
          for (M = 0; M < h.length; M += 1)
            d.delete(h[M]);
          Ze(r, C.prev, N.next), Ze(r, c, C), Ze(r, N, S), u = S, c = N, g -= 1, v = [], h = [];
        } else
          d.delete(m), nn(m, u, n), Ze(r, m.prev, m.next), Ze(r, m, c === null ? r.first : c.next), Ze(r, c, m), c = m;
        continue;
      }
      for (v = [], h = []; u !== null && u.k !== _; )
        (u.e.f & Le) === 0 && (d ??= /* @__PURE__ */ new Set()).add(u), h.push(u), u = u.next;
      if (u === null)
        continue;
      m = u;
    }
    v.push(m), c = m, u = m.next;
  }
  if (u !== null || d !== void 0) {
    for (var P = d === void 0 ? [] : Tn(d); u !== null; )
      (u.e.f & Le) === 0 && P.push(u), u = u.next;
    var q = P.length;
    if (q > 0) {
      var Z = (i & Gi) !== 0 && s === 0 ? n : null;
      if (a) {
        for (g = 0; g < q; g += 1)
          P[g].a?.measure();
        for (g = 0; g < q; g += 1)
          P[g].a?.fix();
      }
      Fl(r, P, Z);
    }
  }
  a && ur(() => {
    if (y !== void 0)
      for (m of y)
        m.a?.apply();
  }), e.first = r.first && r.first.e, e.last = c && c.e, c && (c.e.next = null);
}
function Pl(e, t, r, n, i, o, a, s) {
  var l = (a & zi) !== 0, u = (a & Go) === 0, d = l ? u ? /* @__PURE__ */ la(r, !1, !1) : qt(r) : r, c = (a & qi) === 0 ? i : qt(i), y = {
    i: c,
    v: d,
    k: n,
    a: null,
    // @ts-expect-error
    e: null,
    o: !1,
    prev: t,
    next: null
  };
  try {
    if (e === null) {
      var v = document.createDocumentFragment();
      v.append(e = Ge());
    }
    return y.e = qe(() => o(
      /** @type {Node} */
      e,
      d,
      c,
      s
    )), y.e.prev = t && t.e, t !== null && (t.next = y, t.e.next = y.e), y;
  } finally {
  }
}
function nn(e, t, r) {
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
function Ye(e, t, r) {
  _a(() => {
    var n = Yt(() => t(e, r?.()) || {});
    if (r && n?.update) {
      var i = !1, o = (
        /** @type {any} */
        {}
      );
      Dn(() => {
        var a = r();
        dl(a), i && Ii(o, a) && (o = a, n.update(a));
      }), i = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function ni(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var o = e[i];
    o != null && o !== "" && (n += " " + i + ": " + o + r);
  }
  return n;
}
function Bl(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += ni(n)), i && (r += ni(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function an(e, t = {}, r, n) {
  for (var i in r) {
    var o = r[i];
    t[i] !== o && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, o, n));
  }
}
function V(e, t, r, n) {
  var i = e.__style;
  if (W || i !== t) {
    var o = Bl(t, n);
    (!W || o !== e.getAttribute("style")) && (o == null ? e.removeAttribute("style") : e.style.cssText = o), e.__style = t;
  } else n && (Array.isArray(n) ? (an(e, r?.[0], n[0]), an(e, r?.[1], n[1], "important")) : an(e, r, n));
  return n;
}
const kl = Symbol("is custom element"), Ul = Symbol("is html");
function R(e, t, r, n) {
  var i = Nl(e);
  W && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Eo] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Il(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Nl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [kl]: e.nodeName.includes("-"),
      [Ul]: e.namespaceURI === Ko
    }
  );
}
var ii = /* @__PURE__ */ new Map();
function Il(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ii.get(t);
  if (r) return r;
  ii.set(t, r = []);
  for (var n, i = e, o = Element.prototype; o !== i; ) {
    n = ki(i);
    for (var a in n)
      n[a].set && r.push(a);
    i = Sn(i);
  }
  return r;
}
function ai(e, t) {
  return e === t || e?.[Ut] === t;
}
function _n(e = {}, t, r, n) {
  return _a(() => {
    var i, o;
    return Dn(() => {
      i = o, o = [], Yt(() => {
        e !== r(...o) && (t(e, ...o), i && ai(r(...i), e) && t(null, ...i));
      });
    }), () => {
      ur(() => {
        o && ai(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
let Fr = !1;
function Ll(e) {
  var t = Fr;
  try {
    return Fr = !1, [e(), Fr];
  } finally {
    Fr = t;
  }
}
function E(e, t, r, n) {
  var i = (r & Xo) !== 0, o = (r & Ho) !== 0, a = (
    /** @type {V} */
    n
  ), s = !0, l = () => (s && (s = !1, a = o ? Yt(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a), u;
  if (i) {
    var d = Ut in e || Fi in e;
    u = $t(e, t)?.set ?? (d && t in e ? (g) => e[t] = g : void 0);
  }
  var c, y = !1;
  i ? [c, y] = Ll(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t], c === void 0 && n !== void 0 && (c = l(), u && (Uo(), u(c)));
  var v;
  if (v = () => {
    var g = (
      /** @type {V} */
      e[t]
    );
    return g === void 0 ? l() : (s = !0, g);
  }, (r & Yo) === 0)
    return v;
  if (u) {
    var h = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(g, b) {
        return arguments.length > 0 ? ((!b || h || y) && u(b ? v() : g), g) : v();
      })
    );
  }
  var p = !1, _ = ((r & Vo) !== 0 ? Xr : na)(() => (p = !1, v()));
  i && f(_);
  var m = (
    /** @type {Effect} */
    j
  );
  return (
    /** @type {() => V} */
    (function(g, b) {
      if (arguments.length > 0) {
        const S = b ? f(_) : i ? Bt(g) : g;
        return L(_, S), p = !0, a !== void 0 && (a = S), g;
      }
      return Vt && p || (m.f & Et) !== 0 ? _.v : f(_);
    })
  );
}
var Ol = /* @__PURE__ */ xt('<g><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect></g>');
function zl(e, t) {
  Mt(t, !0);
  let r = /* @__PURE__ */ k(() => t.pointLocation(t.value.xMin, t.value.yMin)), n = /* @__PURE__ */ k(() => t.pointLocation(t.value.xMax, t.value.yMax));
  const i = 8;
  function o(_) {
    return (m) => {
      t.preventHover(!0);
      let g = [f(r).x, f(r).y, f(n).x, f(n).y];
      return {
        move: (b) => {
          let S = b.pageX - m.pageX, M = b.pageY - m.pageY, C = [S, M, S, M].map((q, Z) => g[Z] + q * _[Z]), N = t.coordinateAtPoint(C[0], C[1]), P = t.coordinateAtPoint(C[2], C[3]);
          t.onChange({
            xMin: Math.min(N.x, P.x),
            xMax: Math.max(N.x, P.x),
            yMin: Math.min(N.y, P.y),
            yMax: Math.max(N.y, P.y)
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
  var a = Ol(), s = he(a);
  V(s, "", {}, {
    stroke: "#fff",
    fill: "rgba(128,128,128,0.25)",
    cursor: "move"
  }), Ye(s, (_, m) => Qe?.(_, m), () => ({ drag: o([1, 1, 1, 1]) }));
  var l = ne(s);
  R(l, "width", i), V(l, "", {}, {
    cursor: "ew-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ye(l, (_, m) => Qe?.(_, m), () => ({ drag: o([1, 0, 0, 0]) }));
  var u = ne(l);
  R(u, "width", i), V(u, "", {}, {
    cursor: "ew-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ye(u, (_, m) => Qe?.(_, m), () => ({ drag: o([0, 0, 1, 0]) }));
  var d = ne(u);
  R(d, "height", i), V(d, "", {}, {
    cursor: "ns-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ye(d, (_, m) => Qe?.(_, m), () => ({ drag: o([0, 1, 0, 0]) }));
  var c = ne(d);
  R(c, "height", i), V(c, "", {}, {
    cursor: "ns-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ye(c, (_, m) => Qe?.(_, m), () => ({ drag: o([0, 0, 0, 1]) }));
  var y = ne(c);
  R(y, "width", i), R(y, "height", i), V(y, "", {}, {
    cursor: "nesw-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ye(y, (_, m) => Qe?.(_, m), () => ({ drag: o([1, 1, 0, 0]) }));
  var v = ne(y);
  R(v, "width", i), R(v, "height", i), V(v, "", {}, {
    cursor: "nwse-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ye(v, (_, m) => Qe?.(_, m), () => ({ drag: o([1, 0, 0, 1]) }));
  var h = ne(v);
  R(h, "width", i), R(h, "height", i), V(h, "", {}, {
    cursor: "nwse-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ye(h, (_, m) => Qe?.(_, m), () => ({ drag: o([0, 1, 1, 0]) }));
  var p = ne(h);
  R(p, "width", i), R(p, "height", i), V(p, "", {}, {
    cursor: "nesw-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), Ye(p, (_, m) => Qe?.(_, m), () => ({ drag: o([0, 0, 1, 1]) })), ce(a), Ie(
    (_, m, g, b, S, M, C, N, P, q, Z, J) => {
      R(s, "x", _), R(s, "width", m), R(s, "y", g), R(s, "height", b), R(l, "x", f(r).x - i / 2), R(l, "y", S), R(l, "height", M), R(u, "x", f(n).x - i / 2), R(u, "y", C), R(u, "height", N), R(d, "x", P), R(d, "width", q), R(d, "y", f(r).y - i / 2), R(c, "x", Z), R(c, "width", J), R(c, "y", f(n).y - i / 2), R(y, "x", f(r).x - i / 2), R(y, "y", f(r).y - i / 2), R(v, "x", f(r).x - i / 2), R(v, "y", f(n).y - i / 2), R(h, "x", f(n).x - i / 2), R(h, "y", f(r).y - i / 2), R(p, "x", f(n).x - i / 2), R(p, "y", f(n).y - i / 2);
    },
    [
      () => Math.min(f(r).x, f(n).x),
      () => Math.abs(f(r).x - f(n).x),
      () => Math.min(f(r).y, f(n).y),
      () => Math.abs(f(r).y - f(n).y),
      () => Math.min(f(r).y, f(n).y),
      () => Math.abs(f(r).y - f(n).y),
      () => Math.min(f(r).y, f(n).y),
      () => Math.abs(f(r).y - f(n).y),
      () => Math.min(f(r).x, f(n).x),
      () => Math.abs(f(r).x - f(n).x),
      () => Math.min(f(r).x, f(n).x),
      () => Math.abs(f(r).x - f(n).x)
    ]
  ), ie(e, a), Ct();
}
function ql(e, t) {
  let r = !1, n, i, o, a = 300, s = 300, l = async (d) => {
    r = !0;
    try {
      await e(d);
    } catch (c) {
      console.error(c);
    }
    if (r = !1, n !== void 0) {
      let c = n;
      n = void 0, u(c);
    }
  }, u = async (d) => {
    if (r) {
      n = d;
      return;
    }
    let c = (/* @__PURE__ */ new Date()).getTime();
    t() && (i = c);
    let y = !0;
    (i == null || c - i < s) && (y = !1), y ? (o && clearTimeout(o), o = setTimeout(() => l(d), a)) : l(d);
  };
  return u;
}
function Gl(e, t) {
  let r = e.x - t.x, n = e.y - t.y;
  return Math.sqrt(r * r + n * n);
}
function Vl(e) {
  return "M " + e.map(({ x: r, y: n }) => `${r},${n}`).join(" L ") + " Z";
}
function Pa(e) {
  let t = 1 / 0, r = -1 / 0, n = 1 / 0, i = -1 / 0;
  for (let { x: o, y: a } of e)
    t = Math.min(t, o), n = Math.min(n, a), r = Math.max(r, o), i = Math.max(i, a);
  return { xMin: t, yMin: n, xMax: r, yMax: i };
}
async function Yl(e) {
  let t = JSON.stringify(e);
  return Hl(t);
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
function Xl(e, t = 0) {
  let r = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    r = Math.imul(r ^ o, 2654435761), n = Math.imul(n ^ o, 1597334677);
  }
  return r = Math.imul(r ^ r >>> 16, 2246822507), r ^= Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(r ^ r >>> 13, 3266489909), [n >>> 0, r >>> 0];
}
function Hl(e) {
  let r = new TextEncoder().encode(e), n = Xl(r);
  return n[0].toString(16).padStart(8, "0") + n[1].toString(16).padStart(8, "0");
}
var Wl = /* @__PURE__ */ xt("<path></path>");
function jl(e, t) {
  Mt(t, !0);
  let r = /* @__PURE__ */ k(() => t.value.map(({ x: i, y: o }) => t.pointLocation(i, o)));
  var n = Wl();
  V(n, "", {}, { stroke: "#fff", fill: "rgba(128,128,128,0.25)" }), Ie((i) => R(n, "d", i), [() => Vl(f(r))]), ie(e, n), Ct();
}
const Kl = {
  marquee: "M7 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1-.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75M4.75 8a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5A.75.75 0 0 0 4.75 8m14.5 0a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75M8.75 20a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5zM5 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4M21 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4",
  lasso: "M9.703 2.265A10 10 0 0 1 12 2c.79 0 1.559.092 2.297.265a.75.75 0 1 1-.343 1.46A8.5 8.5 0 0 0 12 3.5a8.6 8.6 0 0 0-1.954.225a.75.75 0 1 1-.343-1.46m-1.93 1.47a.75.75 0 0 1-.242 1.033a8.55 8.55 0 0 0-2.763 2.763a.75.75 0 1 1-1.275-.79a10.05 10.05 0 0 1 3.248-3.248a.75.75 0 0 1 1.032.243m8.454 0a.75.75 0 0 1 1.032-.242a10.05 10.05 0 0 1 3.248 3.248a.75.75 0 1 1-1.275.79a8.55 8.55 0 0 0-2.763-2.763a.75.75 0 0 1-.242-1.032m-13.06 5.41a.75.75 0 0 1 .558.901A8.5 8.5 0 0 0 3.5 12c0 .673.078 1.327.225 1.954a.75.75 0 1 1-1.46.343A10 10 0 0 1 2 12c0-.79.092-1.559.265-2.297a.75.75 0 0 1 .902-.559m17.666 0a.75.75 0 0 1 .902.558a10.1 10.1 0 0 1 0 4.595a.75.75 0 1 1-1.46-.343a8.54 8.54 0 0 0-.001-3.908a.75.75 0 0 1 .559-.902M3.736 16.226a.75.75 0 0 1 1.032.242a8.55 8.55 0 0 0 2.763 2.763a.75.75 0 0 1-.79 1.275a10.05 10.05 0 0 1-3.248-3.248a.75.75 0 0 1 .243-1.032m16.685.858a.75.75 0 1 0-1.342-.67l-.002.004l-.015.029l-.069.123a8 8 0 0 1-.289.466a9.6 9.6 0 0 1-.965 1.219c-1.17-1.073-2.756-2.006-4.74-2.006c-2.347 0-3.99 1.203-3.99 2.875S10.653 22 13 22c1.942 0 3.495-.75 4.658-1.645a11.7 11.7 0 0 1 1.315 2.01q.05.099.073.149l.017.035l.004.009a.75.75 0 0 0 1.368-.615c-.087-.183 0-.001 0-.001v-.002l-.003-.004l-.007-.015l-.024-.052l-.091-.184a13.2 13.2 0 0 0-1.538-2.337a11 11 0 0 0 1.525-2.032l.09-.162l.024-.047l.007-.014l.002-.005zM13 17.75c1.433 0 2.644.652 3.616 1.512c-.95.7-2.155 1.238-3.616 1.238c-1.973 0-2.49-.922-2.49-1.375s.517-1.375 2.49-1.375"
};
var Ql = /* @__PURE__ */ xt('<svg width="24" height="24" viewBox="0 0 24 24"><path></path></svg>'), Zl = /* @__PURE__ */ Ft("<button><!></button>");
function oi(e, t) {
  let r = E(t, "active", 3, !1);
  var n = Zl();
  n.__click = function(...s) {
    t.onClick?.apply(this, s);
  };
  let i;
  var o = he(n);
  {
    var a = (s) => {
      var l = Ql();
      V(l, "", {}, { width: "14px", height: "14px" });
      var u = he(l);
      V(u, "", {}, { fill: "currentColor" }), ce(l), Ie(() => R(u, "d", Kl[t.icon])), ie(s, l);
    };
    Ee(o, (s) => {
      t.icon != null && s(a);
    });
  }
  ce(n), Ie(() => {
    R(n, "title", t.title), i = V(n, "", i, {
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
  }), ie(e, n);
}
gl(["click"]);
var Jl = /* @__PURE__ */ Ft('<div><div> </div> <svg height="6px"><line shape-rendering="crispEdges"></line><line shape-rendering="crispEdges"></line><line shape-rendering="crispEdges"></line></svg></div>');
function $l(e, t) {
  function n(v, h) {
    let p = Math.log10(h * v), _ = Math.round(p), m = [0.1, 0.2, 0.5, 1, 2, 5, 10], g = 0, b = 1e10;
    for (let S of m) {
      let M = Math.abs(Math.log10(S) + _ - p);
      M < b && (g = S, b = M);
    }
    return g * Math.pow(10, _);
  }
  let i = /* @__PURE__ */ k(() => n(t.distancePerPoint, 30)), o = /* @__PURE__ */ k(() => f(i) / t.distancePerPoint);
  var a = Jl();
  V(a, "", {}, { display: "flex", "align-items": "center" });
  var s = he(a);
  V(s, "", {}, { "padding-right": "4px" });
  var l = he(s, !0);
  ce(s);
  var u = ne(s, 2), d = he(u);
  R(d, "x1", 1), R(d, "y1", 3), R(d, "y2", 3), V(d, "", {}, {
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-cap": "butt"
  });
  var c = ne(d);
  R(c, "x1", 1), R(c, "x2", 1), R(c, "y1", 0), R(c, "y2", 6), V(c, "", {}, { stroke: "currentColor" });
  var y = ne(c);
  R(y, "y1", 0), R(y, "y2", 6), V(y, "", {}, { stroke: "currentColor" }), ce(u), ce(a), Ie(
    (v) => {
      _r(l, v), R(u, "width", `${f(o) + 2}px`), R(d, "x2", f(o) + 1), R(y, "x1", f(o) + 1), R(y, "x2", f(o) + 1);
    },
    [() => f(i).toLocaleString()]
  ), ie(e, a);
}
var es = /* @__PURE__ */ Ft("<div> </div>"), ts = /* @__PURE__ */ Ft('<a target="_blank"> </a> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div>', 1), rs = /* @__PURE__ */ Ft('<div><div><!></div> <div></div> <div><!> <!> <!> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div> <!> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div> <span> </span></div></div>');
function ns(e, t) {
  Mt(t, !0);
  let r = E(t, "statusMessage", 3, null);
  var n = rs();
  let i;
  var o = he(n);
  let a;
  var s = he(o);
  {
    var l = (b) => {
      var S = es();
      V(S, "", {}, { display: "inline-block" });
      var M = he(S, !0);
      ce(S), Ie(() => _r(M, r())), ie(b, S);
    };
    Ee(s, (b) => {
      r() != null && b(l);
    });
  }
  ce(o);
  var u = ne(o, 2);
  V(u, "", {}, { flex: "1 1 0%" });
  var d = ne(u, 2);
  let c;
  var y = he(d);
  {
    var v = (b) => {
      var S = ts(), M = Qt(S);
      V(M, "", {}, { color: "currentColor", "text-decoration": "underline" });
      var C = he(M, !0);
      ce(M), Hi(2), Ie(() => {
        R(M, "href", t.resolvedTheme.brandingLink.href), _r(C, t.resolvedTheme.brandingLink.text);
      }), ie(b, S);
    };
    Ee(y, (b) => {
      t.resolvedTheme.brandingLink != null && b(v);
    });
  }
  var h = ne(y, 2);
  {
    let b = /* @__PURE__ */ k(() => t.selectionMode == "marquee");
    oi(h, {
      icon: "marquee",
      get active() {
        return f(b);
      },
      title: "Toggle rectangle selection mode. In normal mode, use shift + drag for rectangle selection.",
      onClick: () => t.onSelectionMode(t.selectionMode == "marquee" ? "none" : "marquee")
    });
  }
  var p = ne(h, 2);
  {
    let b = /* @__PURE__ */ k(() => t.selectionMode == "lasso");
    oi(p, {
      icon: "lasso",
      get active() {
        return f(b);
      },
      title: "Toggle lasso selection mode. In normal mode, use shift + meta + drag for lasso selection.",
      onClick: () => t.onSelectionMode(t.selectionMode == "lasso" ? "none" : "lasso")
    });
  }
  var _ = ne(p, 4);
  $l(_, {
    get distancePerPoint() {
      return t.distancePerPoint;
    }
  });
  var m = ne(_, 4), g = he(m);
  ce(m), ce(d), ce(n), Ie(
    (b) => {
      i = V(n, "", i, {
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
      }), a = V(o, "", a, {
        flex: "none",
        display: "flex",
        "flex-direction": "row",
        gap: "4px",
        padding: "0px 4px",
        "border-radius": "2px",
        background: t.resolvedTheme.statusBarBackgroundColor
      }), c = V(d, "", c, {
        flex: "none",
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        gap: "4px",
        padding: "0px 4px",
        "border-radius": "2px",
        background: t.resolvedTheme.statusBarBackgroundColor
      }), _r(g, `${b ?? ""} points`);
    },
    [() => t.pointCount.toLocaleString()]
  ), ie(e, n), Ct();
}
function is(e) {
  return (t, r) => {
    let n = new e(t, r);
    return {
      ...n.update ? { update: n.update.bind(n) } : {},
      ...n.destroy ? { destroy: n.destroy.bind(n) } : {}
    };
  };
}
let on = /* @__PURE__ */ new WeakMap();
function Ba(e) {
  let t = typeof e == "function" ? e : e.class;
  if (on.has(t))
    return on.get(t);
  {
    let r = is(t);
    return on.set(t, r), r;
  }
}
function ka(e, t) {
  return typeof e == "function" ? t : { ...e.props ?? {}, ...t };
}
var as = /* @__PURE__ */ Ft("<div><div></div></div>");
function os(e, t) {
  Mt(t, !0);
  let r = E(t, "margin", 3, 4), n, i, o = /* @__PURE__ */ k(() => Ba(t.customTooltip)), a = /* @__PURE__ */ k(() => ka(t.customTooltip, { tooltip: t.tooltip }));
  kn(() => {
    xr(() => {
      let u = f(o), d = null;
      return xr(() => {
        i.style.left = "0px", i.style.top = "0px", i.style.pointerEvents = t.allowInteraction ? "all" : "none", d == null ? d = u(i, f(a)) : d.update?.(f(a));
        function c(_, m, g, b) {
          let S = t.location.x, M = t.location.y, C = 2, N = _ / 2, P = m + (t.targetHeight + r());
          S - N < g && (N = S - g), S - N > b - _ && (N = S - b + _), M - P < C && (P = -(t.targetHeight + r())), i.style.left = S - N + "px", i.style.top = M - P + "px";
        }
        let y = n.getBoundingClientRect(), { width: v, height: h } = i.getBoundingClientRect();
        c(v, h, 2, y.width - 2);
        let p = requestAnimationFrame(() => {
          p = null;
          let _ = i.getBoundingClientRect();
          (_.width != v || _.height != h) && c(_.width, _.height, 2, y.width - 2);
        });
        return () => {
          p != null && cancelAnimationFrame(p);
        };
      }), () => {
        d?.destroy?.(), i.replaceChildren();
      };
    });
  });
  var s = as();
  V(s, "", {}, { position: "absolute", width: "100%" });
  var l = he(s);
  V(l, "", {}, {
    display: "flex",
    position: "absolute",
    width: "fit-content",
    height: "fit-content",
    "z-index": "100"
  }), _n(l, (u) => i = u, () => i), ce(s), _n(s, (u) => n = u, () => n), ie(e, s), Ct();
}
function Un(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Ua(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Tr() {
}
var wr = 0.7, Ir = 1 / wr, tr = "\\s*([+-]?\\d+)\\s*", Ar = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ls = /^#([0-9a-f]{3,8})$/, ss = new RegExp(`^rgb\\(${tr},${tr},${tr}\\)$`), us = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`), fs = new RegExp(`^rgba\\(${tr},${tr},${tr},${Ar}\\)$`), cs = new RegExp(`^rgba\\(${tt},${tt},${tt},${Ar}\\)$`), ds = new RegExp(`^hsl\\(${Ar},${tt},${tt}\\)$`), hs = new RegExp(`^hsla\\(${Ar},${tt},${tt},${Ar}\\)$`), li = {
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
Un(Tr, Nn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: si,
  // Deprecated! Use color.formatHex.
  formatHex: si,
  formatHex8: vs,
  formatHsl: ys,
  formatRgb: ui,
  toString: ui
});
function si() {
  return this.rgb().formatHex();
}
function vs() {
  return this.rgb().formatHex8();
}
function ys() {
  return Ia(this).formatHsl();
}
function ui() {
  return this.rgb().formatRgb();
}
function Nn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ls.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? fi(t) : r === 3 ? new Te(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Dr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Dr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ss.exec(e)) ? new Te(t[1], t[2], t[3], 1) : (t = us.exec(e)) ? new Te(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fs.exec(e)) ? Dr(t[1], t[2], t[3], t[4]) : (t = cs.exec(e)) ? Dr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ds.exec(e)) ? hi(t[1], t[2] / 100, t[3] / 100, 1) : (t = hs.exec(e)) ? hi(t[1], t[2] / 100, t[3] / 100, t[4]) : li.hasOwnProperty(e) ? fi(li[e]) : e === "transparent" ? new Te(NaN, NaN, NaN, 0) : null;
}
function fi(e) {
  return new Te(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Dr(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Te(e, t, r, n);
}
function ps(e) {
  return e instanceof Tr || (e = Nn(e)), e ? (e = e.rgb(), new Te(e.r, e.g, e.b, e.opacity)) : new Te();
}
function Na(e, t, r, n) {
  return arguments.length === 1 ? ps(e) : new Te(e, t, r, n ?? 1);
}
function Te(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Un(Te, Na, Ua(Tr, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wr : Math.pow(wr, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Te(Lt(this.r), Lt(this.g), Lt(this.b), Lr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ci,
  // Deprecated! Use color.formatHex.
  formatHex: ci,
  formatHex8: ms,
  formatRgb: di,
  toString: di
}));
function ci() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}`;
}
function ms() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}${kt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function di() {
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
function hi(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xe(e, t, r, n);
}
function Ia(e) {
  if (e instanceof Xe) return new Xe(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tr || (e = Nn(e)), !e) return new Xe();
  if (e instanceof Xe) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), o = Math.max(t, r, n), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (t === o ? a = (r - n) / s + (r < n) * 6 : r === o ? a = (n - t) / s + 2 : a = (t - r) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new Xe(a, s, l, e.opacity);
}
function xs(e, t, r, n) {
  return arguments.length === 1 ? Ia(e) : new Xe(e, t, r, n ?? 1);
}
function Xe(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Un(Xe, xs, Ua(Tr, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Xe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wr : Math.pow(wr, e), new Xe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Te(
      ln(e >= 240 ? e - 240 : e + 120, i, n),
      ln(e, i, n),
      ln(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Xe(vi(this.h), Pr(this.s), Pr(this.l), Lr(this.opacity));
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
function ln(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const yi = [
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
function jr(e) {
  if (e < 1 && (e = 1), e <= yi.length)
    return yi.slice(0, e);
  if (e <= Br.length)
    return Br.slice(0, e);
  {
    let t = [];
    for (let r = 0; r < e; r++)
      t[r] = Br[r % Br.length];
    return t;
  }
}
function In(e) {
  let { r: t, g: r, b: n, opacity: i } = Na(e);
  return { r: t / 255, g: r / 255, b: n / 255, a: i };
}
function La() {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1];
}
function Ln(e, t) {
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
function Oa(e, t) {
  return [
    t[0] * e[0] + t[3] * e[1] + t[6] * e[2],
    t[1] * e[0] + t[4] * e[1] + t[7] * e[2],
    t[2] * e[0] + t[5] * e[1] + t[8] * e[2]
  ];
}
function _s(e) {
  return e[0] * e[4] * e[8] - e[0] * e[5] * e[7] - e[1] * e[3] * e[8] + e[1] * e[5] * e[6] + e[2] * e[3] * e[7] - e[2] * e[4] * e[6];
}
function za(e) {
  let t = _s(e);
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
class Kr {
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
class gn {
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
let fr = class extends gn {
  _value = null;
  setValue(t) {
    this._value !== t && (this._value = t, this.setNeedsRunDownstream());
  }
  get value() {
    return this.run(), this._value;
  }
};
class qa extends fr {
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
class gs extends fr {
  fn;
  constructor(t, r) {
    super(r), this.fn = t;
  }
  update() {
    this.setValue(this.fn());
  }
}
class bs extends fr {
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
class ws extends fr {
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
    (this.currentNode == null || this.currentCondition !== this.condition.value) && (this.currentNode && this.removeInput(this.currentNode), this.context?.destroy(), this.context = new Xt(this.parent), this.currentCondition = this.condition.value, this.currentCondition ? this.currentNode = this.buildTrue(this.context) : this.currentNode = this.buildFalse(this.context), this.addInput(this.currentNode)), this.setValue(this.currentNode.value);
  }
  destroy() {
    super.destroy(), this.context?.destroy();
  }
}
class As extends fr {
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
        let i = new Xt(this.parent), o = new qa(n), a = this.build(i, o);
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
class Es extends fr {
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
    (this.currentNode == null || this.input.value !== this.currentCase) && (this.currentNode && this.removeInput(this.currentNode), this.currentContext?.destroy(), this.currentContext = new Xt(this.parent), this.currentCase = this.input.value, this.currentNode = this.cases[this.currentCase](this.currentContext), this.addInput(this.currentNode)), this.setValue(this.currentNode.value);
  }
  destroy() {
    super.destroy(), this.currentContext?.destroy();
  }
}
class Xt {
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
    let r = new qa(t);
    return this._nodes.add(r), r;
  }
  /** Creates a derived value. */
  derive(t, r) {
    let n = t.map((o) => o instanceof gn ? o : this.value(o)), i = new gs(() => r(...n.map((o) => o.value)), n);
    return this._nodes.add(i), i;
  }
  /** Creates a stateful derived value. */
  statefulDerive(t, r) {
    let n = t.map((o) => o instanceof gn ? o : this.value(o)), i = new bs((o) => r(o, ...n.map((a) => a.value)), n);
    return this._nodes.add(i), i;
  }
  /** Creates a true or false dataflow depending on the value of the condition. */
  if(t, r, n) {
    let i = new ws(this, t, r, n);
    return this._nodes.add(i), i;
  }
  switch(t, r) {
    let n = new Es(this, t, r);
    return this._nodes.add(n), n;
  }
  map(t, r) {
    let n = new As(this, t, r);
    return this._nodes.add(n), n;
  }
  assertNotNull(t) {
    return t;
  }
  subgraph() {
    return new Xt(this);
  }
}
function it(e, t, r, n) {
  if (e.program == null || e.vsSource != r || e.fsSource != n) {
    e.destroy && e.destroy();
    let o = pi(t, t.VERTEX_SHADER, r), a = pi(t, t.FRAGMENT_SHADER, n), s = t.createProgram();
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
function pi(e, t, r) {
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
function Rs(e, t, r, n, i) {
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
  return e.cacheKey != a && (e.cacheKey = a, t.bindTexture(t.TEXTURE_2D, e.texture), Rs(t, r, n, i, o), t.bindTexture(t.TEXTURE_2D, null)), {
    framebuffer: e.framebuffer,
    texture: e.texture,
    width: r,
    height: n
  };
}
function Ts(e) {
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
function Ss(e, t, r) {
  let n = e.derive([r], Ms), i = e.derive([n], Ts), o = e.statefulDerive(
    [t, e.derive([i], (l) => l.vertex), e.derive([i], (l) => l.fragment1)],
    it
  ), a = e.statefulDerive(
    [t, e.derive([i], (l) => l.vertex), e.derive([i], (l) => l.fragment2)],
    it
  ), s = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive(
    [t, s, o, a, r, n],
    (l, u, d, c, y, v) => (h, p, _) => {
      let { width: m, height: g } = p;
      l.disable(l.BLEND), l.enableVertexAttribArray(0), l.bindBuffer(l.ARRAY_BUFFER, u), l.vertexAttribPointer(0, 2, l.FLOAT, !1, 0, 0), l.bindBuffer(l.ARRAY_BUFFER, null), l.useProgram(d.program), l.uniform2f(d.uniforms.resolution, m, g), l.uniform1i(d.uniforms.image, 0), l.bindFramebuffer(l.FRAMEBUFFER, p.framebuffer), l.bindTexture(l.TEXTURE_2D, h), l.uniform2f(d.uniforms.direction, 0, 1), l.drawArrays(l.TRIANGLE_STRIP, 0, 4), l.bindFramebuffer(l.FRAMEBUFFER, _.framebuffer), l.bindTexture(l.TEXTURE_2D, p.texture), l.uniform2f(d.uniforms.direction, 1, 0), l.drawArrays(l.TRIANGLE_STRIP, 0, 4), l.bindFramebuffer(l.FRAMEBUFFER, p.framebuffer), l.activeTexture(l.TEXTURE1), l.bindTexture(l.TEXTURE_2D, _.texture), l.activeTexture(l.TEXTURE0), l.bindTexture(l.TEXTURE_2D, h), l.useProgram(c.program), l.uniform2f(c.uniforms.resolution, m, g), l.uniform1i(c.uniforms.image, 0), l.uniform1i(c.uniforms.imageBox, 1);
      let b = 1 / v.totalWeight * y * y * Math.PI;
      l.uniform1f(c.uniforms.scaler, b), l.drawArrays(l.TRIANGLE_STRIP, 0, 4), l.bindFramebuffer(l.FRAMEBUFFER, null), l.useProgram(null), l.activeTexture(l.TEXTURE1), l.bindTexture(l.TEXTURE_2D, null), l.activeTexture(l.TEXTURE0), l.bindTexture(l.TEXTURE_2D, null), l.disableVertexAttribArray(0);
    }
  );
}
function mi(e, t, r) {
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
function Ms(e) {
  let t = Math.floor(e + 0.5), r = t, n = mi(e, 0, 0), i = [];
  for (let s = -t; s <= t; s++)
    for (let l = -t; l <= t; l++) {
      let u = n - mi(e, s, l);
      if (!(u <= 0))
        if (i.length > 0 && s == i[i.length - 1].x && l == i[i.length - 1].y + 1) {
          let d = i[i.length - 1].w, c = u;
          i[i.length - 1].y += 1 - d / (d + c), i[i.length - 1].w = d + c;
        } else
          i.push({ x: s, y: l, w: u });
    }
  i = i.sort((s, l) => s.y != l.y ? s.y - l.y : s.x - l.x);
  let o = [];
  for (let { x: s, y: l, w: u } of i)
    if (o.length > 0 && l == o[o.length - 1].y && s == o[o.length - 1].x + 1) {
      let d = o[o.length - 1].w, c = u;
      o[o.length - 1].x += 1 - d / (d + c), o[o.length - 1].w = d + c;
    } else
      o.push({ x: s, y: l, w: u });
  let a = -o.reduce((s, l) => s + l.w, 0);
  return a += n * (1 + r * 2) * (1 + r * 2), { squareMaxSize: r, squareWeight: n, samples: o, totalWeight: a };
}
function Cs(e) {
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
function bn(e, t, r, n, i, o) {
  let a = i != null, s = Cs(a), l = e.statefulDerive([t, s.vertex, s.fragment], it);
  return e.derive([t, l, r, n, i, o], (u, d, c, y, v, h) => (p) => {
    u.enable(u.BLEND), u.blendFunc(u.ONE, u.ONE), u.useProgram(d.program), u.enableVertexAttribArray(0), u.bindBuffer(u.ARRAY_BUFFER, c), u.vertexAttribPointer(0, 1, u.FLOAT, !1, 0, 0), u.enableVertexAttribArray(1), u.bindBuffer(u.ARRAY_BUFFER, y), u.vertexAttribPointer(1, 1, u.FLOAT, !1, 0, 0), v != null && (u.enableVertexAttribArray(2), u.bindBuffer(u.ARRAY_BUFFER, v), u.vertexAttribIPointer(2, 1, u.BYTE, 0, 0)), u.bindBuffer(u.ARRAY_BUFFER, null), u.uniformMatrix3fv(d.uniforms.matrix, !1, p), u.drawArrays(u.POINTS, 0, h), u.disableVertexAttribArray(0), u.disableVertexAttribArray(1), v != null && u.disableVertexAttribArray(2), u.useProgram(null);
  });
}
function Fs() {
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
function Ga(e, t) {
  let { vertex: r, fragment: n } = Fs(), i = e.statefulDerive([t, r, n], it), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive([t, i, o], (a, s, l) => (u, d, c, y) => {
    a.disable(a.BLEND), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, l), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.bindTexture(a.TEXTURE_2D, u), a.useProgram(s.program), a.uniform1i(s.uniforms.source, 0), a.uniform2f(s.uniforms.xyScaler, c ?? 1, y ?? 1), a.uniform1f(s.uniforms.gamma, d ?? 2.2), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
  });
}
function Va(e) {
  return Math.ceil(e * 3);
}
function Ds(e) {
  let t = Va(e), r = [];
  for (let l = -t; l <= t; l++)
    r.push(Math.exp(-l * l / e / e / 2));
  let n = r.reduce((l, u) => l + u, 0);
  r = r.map((l) => l / n);
  let o = Bs(r).map(([l, u]) => [l - t, u]), a = `#version 300 es
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
function Ps(e, t, r) {
  let n = e.derive([r], Ds), i = e.statefulDerive(
    [t, e.derive([n], (a) => a.vertex), e.derive([n], (a) => a.fragment)],
    it
  ), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive([t, o, i, r], (a, s, l, u) => (d, c, y) => {
    let { width: v, height: h } = c;
    a.disable(a.BLEND), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, s), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.useProgram(l.program), a.uniform2f(l.uniforms.resolution, v, h), a.uniform1i(l.uniforms.image, 0), a.bindFramebuffer(a.FRAMEBUFFER, y.framebuffer), a.bindTexture(a.TEXTURE_2D, d), a.uniform2f(l.uniforms.direction, 0, 1), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.bindFramebuffer(a.FRAMEBUFFER, c.framebuffer), a.bindTexture(a.TEXTURE_2D, y.texture), a.uniform2f(l.uniforms.direction, 1, 0), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.bindFramebuffer(a.FRAMEBUFFER, null), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
  });
}
function Bs(e) {
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
function ks(e) {
  return Math.ceil(e * 3);
}
function Us() {
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
function Ns(e, t, r) {
  let { vertex: n, fragment: i } = Us(), o = e.statefulDerive([t, n, i], it), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive([t, a, o], (s, l, u) => (d, c, y) => {
    let { width: v, height: h } = c;
    s.disable(s.BLEND), s.enableVertexAttribArray(0), s.bindBuffer(s.ARRAY_BUFFER, l), s.vertexAttribPointer(0, 2, s.FLOAT, !1, 0, 0), s.bindBuffer(s.ARRAY_BUFFER, null), s.useProgram(u.program), s.uniform2f(u.uniforms.resolution, v, h), s.uniform1i(u.uniforms.image, 0);
    let p = d, _ = y, m = c;
    for (let g = 0; g < 2; g++) {
      s.uniform2f(u.uniforms.direction, g, 1 - g);
      for (let [b, S, M] of Is) {
        s.bindFramebuffer(s.FRAMEBUFFER, _.framebuffer), s.bindTexture(s.TEXTURE_2D, p), s.uniform1fv(u.uniforms.weight0, S), s.uniform3fv(u.uniforms.distances, b), s.uniform3fv(u.uniforms.weights, M), s.drawArrays(s.TRIANGLE_STRIP, 0, 4), p = _.texture;
        let C = _;
        _ = m, m = C;
      }
    }
    s.bindFramebuffer(s.FRAMEBUFFER, null), s.useProgram(null), s.bindTexture(s.TEXTURE_2D, null), s.disableVertexAttribArray(0);
  });
}
const Is = [
  [[1, 2, 3], [0.2288468365182578], [0.18230006506971572, 0.1356122230111784, 0.06766429365997693]],
  [[2, 6, 10], [0.09116254014100238], [0.23317759354726447, 0.18385867277788717, 0.03738246360434722]],
  [[3, 10, 20], [0.2950645715317288], [0.010918865853671198, 0.23773695670296047, 0.10381189167750389]],
  [[4, 16, 30], [0.20085957073474772], [0.14463019087130788, 0.17934533765938643, 0.07559468610193185]]
];
function Ls() {
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
function Os(e, t) {
  let { vertex: r, fragment: n } = Ls(), i = e.statefulDerive([t, r, n], it), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive(
    [t, i, o],
    (a, s, l) => (u, d, c, y, v, h) => {
      a.enable(a.BLEND), a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, l), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.bindTexture(a.TEXTURE_2D, u.texture), a.useProgram(s.program), a.uniform1i(s.uniforms.source, 0), a.uniform2f(s.uniforms.resolution, u.width, u.height), a.uniform1f(s.uniforms.densityScaler, d), a.uniform1f(s.uniforms.quantizationStep, c), a.uniform1f(s.uniforms.globalAlpha, y), a.uniform4fv(s.uniforms.channelMask, v), a.uniform4fv(s.uniforms.color, h), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
    }
  );
}
function zs() {
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
function qs(e, t) {
  let { vertex: r, fragment: n } = zs(), i = e.statefulDerive([t, r, n], it), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive(
    [t, i, o],
    (a, s, l) => (u, d, c, y, v, h) => {
      a.enable(a.BLEND), a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, l), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.bindTexture(a.TEXTURE_2D, u.texture), a.useProgram(s.program), a.uniform1i(s.uniforms.source, 0), a.uniform2f(s.uniforms.resolution, u.width, u.height), a.uniform1f(s.uniforms.densityScaler, d), a.uniform1f(s.uniforms.quantizationStep, c), a.uniform1f(s.uniforms.globalAlpha, y), a.uniform1i(s.uniforms.isDarkMode, h == "dark" ? 1 : 0), a.uniformMatrix4fv(s.uniforms.colorMatrix, !1, v), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
    }
  );
}
function Gs(e) {
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
function xi(e, t, r, n, i, o) {
  let a = i != null, s = Gs(a), l = e.statefulDerive([t, s.vertex, s.fragment], it);
  return e.derive(
    [t, l, r, n, i, o],
    (u, d, c, y, v, h) => (p, _, m, g) => {
      u.enable(u.BLEND), u.blendFunc(u.ONE, u.ONE_MINUS_SRC_ALPHA), u.useProgram(d.program), u.enableVertexAttribArray(0), u.bindBuffer(u.ARRAY_BUFFER, c), u.vertexAttribPointer(0, 1, u.FLOAT, !1, 0, 0), u.enableVertexAttribArray(1), u.bindBuffer(u.ARRAY_BUFFER, y), u.vertexAttribPointer(1, 1, u.FLOAT, !1, 0, 0), v != null && (u.enableVertexAttribArray(2), u.bindBuffer(u.ARRAY_BUFFER, v), u.vertexAttribIPointer(2, 1, u.BYTE, 0, 0)), u.bindBuffer(u.ARRAY_BUFFER, null), u.uniformMatrix3fv(d.uniforms.matrix, !1, p), u.uniform1f(d.uniforms.point_size, _ * 2), u.uniform1f(d.uniforms.alpha, m), a ? u.uniform4fv(d.uniforms.colorScheme, g) : u.uniform4fv(d.uniforms.colorScheme, g.slice(0, 4)), u.drawArrays(u.POINTS, 0, h), u.disableVertexAttribArray(0), u.disableVertexAttribArray(1), v != null && u.disableVertexAttribArray(2), u.useProgram(null);
    }
  );
}
function Vs() {
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
function Ys(e, t) {
  let { vertex: r, fragment: n } = Vs(), i = e.statefulDerive([t, r, n], it), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], rt);
  return e.derive(
    [t, i, o],
    (a, s, l) => (u, d, c, y, v) => {
      a.enable(a.BLEND), a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), a.enableVertexAttribArray(0), a.bindBuffer(a.ARRAY_BUFFER, l), a.vertexAttribPointer(0, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, null), a.bindTexture(a.TEXTURE_2D, u.texture), a.useProgram(s.program), a.uniform1i(s.uniforms.source, 0), a.uniform2f(s.uniforms.resolution, u.width, u.height), a.uniform1f(s.uniforms.pointAlpha, d), a.uniform1f(s.uniforms.globalAlpha, c), a.uniform1i(s.uniforms.isDarkMode, v == "dark" ? 1 : 0), a.uniformMatrix4fv(s.uniforms.colorMatrix, !1, y), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), a.useProgram(null), a.bindTexture(a.TEXTURE_2D, null), a.disableVertexAttribArray(0);
    }
  );
}
class Xs {
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
    }, this.viewport = new Kr({ x: 0, y: 0, scale: 1 }, r, n);
    let i = new Xt(), o = i.value(t);
    this.df = i, this.gl = o, this.renderInputs = {
      mode: i.value(this.props.mode),
      colorScheme: i.value(this.props.colorScheme),
      xData: i.value(this.props.x),
      yData: i.value(this.props.y),
      categoryData: i.value(this.props.category),
      categoryCount: i.value(this.props.categoryCount),
      matrix: i.value(La()),
      width: i.value(r),
      height: i.value(n),
      pointSize: i.value(this.props.pointSize),
      densityBandwidth: i.value(this.props.densityBandwidth)
    }, this.dataBuffers = Hs(i, o, this.renderInputs), this.renderer = Ws(i, o, this.renderInputs, this.dataBuffers);
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
    let o = this.df.subgraph(), a = Qs(o, this.gl, this.dataBuffers, o.value(t), o.value(r), o.value(n)), { x: s, y: l, scale: u } = i, d = [u, 0, 0, 0, u, 0, -s * u, -l * u, 1], c = a.value(d), y = za(d);
    return o.destroy(), {
      data: c,
      width: t,
      height: r,
      coordinateAtPixel: (v, h) => {
        let p = v / t * 2 - 1, _ = h / r * 2 - 1, m = Oa([p, _, 1], y);
        return { x: m[0], y: m[1] };
      }
    };
  }
}
function Hs(e, t, r) {
  const n = e.statefulDerive([t, r.xData, "f32"], rt), i = e.statefulDerive([t, r.yData, "f32"], rt), o = e.if(
    e.derive([r.categoryData], (s) => s != null),
    (s) => s.statefulDerive([t, s.assertNotNull(r.categoryData), "u8"], rt),
    (s) => s.value(null)
  ), a = e.derive([r.xData], (s) => s.length);
  return { x: n, y: i, category: o, count: a };
}
function Ws(e, t, r, n) {
  return e.switch(r.mode, {
    points: (i) => js(i, t, r, n),
    density: (i) => Ks(i, t, r, n)
  });
}
function js(e, t, r, n) {
  const i = e.derive([r.categoryCount], (l) => l > 1), o = e.statefulDerive([t, r.width, r.height, 4, "f32"], At);
  let a = e.if(
    i,
    (l) => xi(l, t, n.x, n.y, l.assertNotNull(n.category), n.count),
    (l) => xi(l, t, n.x, n.y, null, n.count)
  ), s = Ga(e, t);
  return e.derive(
    [t, o, a, s, r.colorScheme, r.matrix, r.categoryCount],
    (l, u, d, c, y, v, h) => (p) => {
      let _ = [], m = p.categoryColors ?? jr(p.categoryCount);
      for (let g = 0; g < h; g++)
        if (g < m.length) {
          let { r: b, g: S, b: M } = In(m[g]);
          b = Math.pow(b, p.gamma), S = Math.pow(S, p.gamma), M = Math.pow(M, p.gamma), _ = _.concat([b, S, M, 1]);
        } else
          _ = _.concat([0.5, 0.5, 0.5, 1]);
      l.bindFramebuffer(l.FRAMEBUFFER, u.framebuffer), l.viewport(0, 0, u.width, u.height), y == "light" ? l.clearColor(1, 1, 1, 1) : l.clearColor(0, 0, 0, 1), l.clear(l.COLOR_BUFFER_BIT), d(v, Math.max(3, p.pointSize), p.pointAlpha * p.pointsAlpha, _), l.bindFramebuffer(l.FRAMEBUFFER, null), l.viewport(0, 0, p.width, p.height), c(u.texture, p.gamma);
    }
  );
}
function Ks(e, t, r, n) {
  let i = e.derive([r.densityBandwidth], (b) => ks(b) + 1), o = e.derive([r.width, i], (b, S) => b + S * 2), a = e.derive([r.height, i], (b, S) => b + S * 2);
  const s = e.derive([r.categoryCount], (b) => b > 1), l = e.statefulDerive([t, o, a, 4, "f32"], At), u = e.statefulDerive([t, o, a, 4, "f32"], At), d = e.statefulDerive([t, o, a, 4, "f32"], At), c = e.statefulDerive([t, o, a, 4, "f32"], At);
  let y = e.if(
    s,
    (b) => bn(b, t, n.x, n.y, b.assertNotNull(n.category), n.count),
    (b) => bn(b, t, n.x, n.y, null, n.count)
  ), v = Ss(e, t, r.pointSize), h = Ns(e, t, r.densityBandwidth), p = Ys(e, t), _ = qs(e, t), m = Os(e, t), g = Ga(e, t);
  return e.derive(
    [
      t,
      l,
      u,
      d,
      c,
      r.colorScheme,
      r.matrix,
      y,
      v,
      h,
      p,
      _,
      m,
      g
    ],
    (b, S, M, C, N, P, q, Z, J, G, ge, te, De, ae) => (z) => {
      let oe = z.categoryColors ?? jr(z.categoryCount), le = [];
      for (let ue = 0; ue < 4; ue++)
        if (ue < oe.length) {
          let { r: pe, g: We, b: Pe } = In(oe[ue]);
          pe = Math.pow(pe, z.gamma), We = Math.pow(We, z.gamma), Pe = Math.pow(Pe, z.gamma), le = le.concat([pe, We, Pe, 1]);
        } else
          le = le.concat([0.5, 0.5, 0.5, 1]);
      let be = z.width / M.width, K = z.height / M.height, Oe = Ln([be, 0, 0, 0, K, 0, 0, 0, 1], q);
      if (b.bindFramebuffer(b.FRAMEBUFFER, S.framebuffer), b.viewport(0, 0, S.width, S.height), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), Z(Oe), b.bindFramebuffer(b.FRAMEBUFFER, M.framebuffer), b.viewport(0, 0, M.width, M.height), P == "light" ? b.clearColor(1, 1, 1, 1) : b.clearColor(0, 0, 0, 1), b.clear(b.COLOR_BUFFER_BIT), z.pointAlpha > 0 && z.pointsAlpha > 0 && (J(S.texture, C, N), b.bindFramebuffer(b.FRAMEBUFFER, M.framebuffer), ge(C, z.pointAlpha, z.pointsAlpha, le, P)), z.densityScaler > 0 && (z.densityAlpha > 0 || z.contoursAlpha > 0) && (G(S.texture, C, N), b.bindFramebuffer(b.FRAMEBUFFER, M.framebuffer), z.densityAlpha > 0 && te(
        C,
        z.densityScaler,
        z.densityQuantizationStep,
        z.densityAlpha,
        le,
        P
      ), z.contoursAlpha > 0))
        for (let ue = 0; ue < oe.length; ue++) {
          let pe = [0, 0, 0, 0];
          pe[ue] = 1, De(
            C,
            z.densityScaler,
            z.densityQuantizationStep,
            z.contoursAlpha,
            pe,
            le.slice(ue * 4, ue * 4 + 4)
          );
        }
      b.bindFramebuffer(b.FRAMEBUFFER, null), b.viewport(0, 0, z.width, z.height), ae(M.texture, z.gamma, 1 / be, 1 / K);
    }
  );
}
function Qs(e, t, r, n, i, o) {
  let a = e.derive([o], (h) => Va(h) + 1), s = e.derive([n, a], (h, p) => h + p * 2), l = e.derive([i, a], (h, p) => h + p * 2);
  const u = e.statefulDerive([t, s, l, 1, "f32"], At), d = e.statefulDerive([t, s, l, 1, "f32"], At), c = e.statefulDerive([t, s, l, 1, "f32"], At);
  let y = bn(e, t, r.x, r.y, null, r.count), v = Ps(e, t, o);
  return e.derive(
    [t, a, n, i, u, d, c, y, v],
    (h, p, _, m, g, b, S, M, C) => (N) => {
      let P = _ / g.width, q = m / g.height, J = Ln([P, 0, 0, 0, q, 0, 0, 0, 1], N);
      h.bindFramebuffer(h.FRAMEBUFFER, g.framebuffer), h.viewport(0, 0, g.width, g.height), h.clearColor(0, 0, 0, 0), h.clear(h.COLOR_BUFFER_BIT), M(J), C(g.texture, b, S), h.bindFramebuffer(h.FRAMEBUFFER, b.framebuffer);
      let G = new Float32Array(_ * m);
      return h.readPixels(p, p, _, m, h.RED, h.FLOAT, G), h.bindFramebuffer(h.FRAMEBUFFER, null), G;
    }
  );
}
class Zs {
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
function Js(e, t) {
  let n = new ArrayBuffer(4288), i = e.statefulDerive(
    [t, 4288, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX],
    Jt
  );
  return {
    buffer: i,
    update: e.derive([t, i], (o, a) => (s) => {
      let l = new Zs(n);
      l.u32(s.count), l.u32(s.category_count), l.i32(s.framebuffer_width), l.i32(s.framebuffer_height), l.i32(s.density_width), l.i32(s.density_height), l.f32(s.gamma), l.f32(s.point_size), l.f32(s.point_alpha), l.f32(s.points_alpha), l.f32(s.density_scaler), l.f32(s.quantization_step), l.f32(s.density_alpha), l.f32(s.contours_alpha), l.mat3x3f(s.matrix), l.vec2f(...s.view_xy_scaler), l.vec4f(...s.kde_causal), l.vec4f(...s.kde_anticausal), l.vec4f(...s.kde_a), l.vec4f(...s.background_color);
      let u = s.gamma;
      for (let d = 0; d < Math.min(s.category_colors.length, 256); d++) {
        let { r: c, g: y, b: v, a: h } = s.category_colors[d];
        c = Math.pow(c, u), y = Math.pow(y, u), v = Math.pow(v, u), l.vec4f(c, y, v, h);
      }
      o.queue.writeBuffer(a, 0, n, 0, l.byteOffset());
    })
  };
}
const sn = 64, un = 64;
function Ya(e, t, r, n, i, o) {
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
    (s, l, u, d, c, y) => (v) => {
      if (v.clearBuffer(c), y == 0)
        return;
      let h = v.beginComputePass();
      h.setPipeline(s), h.setBindGroup(0, l), h.setBindGroup(1, u), h.setBindGroup(2, d), y <= sn * un ? h.dispatchWorkgroups(Math.ceil(y / sn)) : h.dispatchWorkgroups(un, Math.ceil(y / (sn * un))), h.end();
    }
  );
}
function $s(e) {
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
function Xa(e, t, r, n, i) {
  let o = e.derive([t], (c) => $s(c)), a = e.derive(
    [t, o, r],
    (c, y, v) => c.createBindGroup({
      layout: y.group0,
      entries: [{ binding: 0, resource: { buffer: v } }]
    })
  ), s = e.derive(
    [t, o, n.x, n.y, n.category],
    (c, y, v, h, p) => c.createBindGroup({
      layout: y.group1,
      entries: [
        { binding: 0, resource: { buffer: v } },
        { binding: 1, resource: { buffer: h } },
        { binding: 2, resource: { buffer: p ?? v } }
      ]
    })
  ), l = e.derive(
    [t, o, i.countBuffer, i.blurBuffer],
    (c, y, v, h) => c.createBindGroup({
      layout: y.group2A,
      entries: [{ binding: 0, resource: { buffer: v } }]
    })
  ), u = e.derive(
    [t, o, i.countBuffer, i.blurBuffer],
    (c, y, v, h) => c.createBindGroup({
      layout: y.group2B,
      entries: [
        { binding: 1, resource: { buffer: v } },
        { binding: 2, resource: { buffer: h } }
      ]
    })
  ), d = e.derive(
    [t, o, i.colorTexture, i.alphaTexture],
    (c, y, v, h) => c.createBindGroup({
      layout: y.group3,
      entries: [
        { binding: 0, resource: c.createSampler({}) },
        { binding: 1, resource: v.createView() },
        { binding: 2, resource: h.createView() }
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
function eu(e, t, r, n, i) {
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
    (a, s, l, u, d, c) => (y) => {
      let v = y.beginRenderPass({
        colorAttachments: [
          { loadOp: "load", storeOp: "store", view: d.createView() },
          { loadOp: "load", storeOp: "store", view: c.createView() }
        ]
      });
      v.setPipeline(a), v.setBindGroup(0, s), v.setBindGroup(1, l), v.setBindGroup(2, u), v.draw(4), v.end();
    }
  );
}
function tu(e, t, r, n, i, o) {
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
    (s, l, u, d, c, y) => (v) => {
      let h = v.beginRenderPass({
        colorAttachments: [
          { clearValue: [0, 0, 0, 0], loadOp: "clear", storeOp: "store", view: c.createView() },
          { clearValue: [0, 0, 0, 0], loadOp: "clear", storeOp: "store", view: y.createView() }
        ]
      });
      h.setPipeline(s), h.setBindGroup(0, l), h.setBindGroup(1, u), d > 0 && h.draw(4, d), h.end();
    }
  );
}
function ru(e, t, r, n, i) {
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
    (a, s, l, u, d) => (c, y) => {
      let v = c.beginRenderPass({
        colorAttachments: [{ clearValue: [1, 1, 1, 1], loadOp: "clear", storeOp: "store", view: y }]
      });
      v.setPipeline(a), v.setBindGroup(0, s), v.setBindGroup(1, l), v.setBindGroup(2, u), v.setBindGroup(3, d), v.draw(4), v.end();
    }
  );
}
const _i = 64;
function Ha(e, t, r, n, i, o, a) {
  let s = e.derive(
    [t, r, n.layouts],
    (u, d, c) => u.createComputePipeline({
      layout: u.createPipelineLayout({
        bindGroupLayouts: [c.group0, c.group1, c.group2B, c.group3]
      }),
      compute: { module: d, entryPoint: "gaussian_blur_stage_1" }
    })
  ), l = e.derive(
    [t, r, n.layouts],
    (u, d, c) => u.createComputePipeline({
      layout: u.createPipelineLayout({
        bindGroupLayouts: [c.group0, c.group1, c.group2B, c.group3]
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
    (u, d, c, y, v, h, p, _, m) => (g) => {
      let b = g.beginComputePass();
      b.setBindGroup(0, c), b.setBindGroup(1, y), b.setBindGroup(2, v), b.setBindGroup(3, h), b.setPipeline(u), b.dispatchWorkgroups(Math.ceil(p / _i), m), b.setPipeline(d), b.dispatchWorkgroups(Math.ceil(_ / _i), m), b.end();
    }
  );
}
function nu(e, t = !1) {
  const r = new Float64Array(5), n = new Float64Array(4);
  iu(r, n, e);
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
function iu(e, t, r) {
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
  ), d = r * 2.5066282746310007, c = Float64Array.of(i[0], i[1], 0, 0, 0, 0, 0, 0), y = Float64Array.of(1, 0, u[0], u[1], 0, 0, 0, 0, 0, 0);
  let v, h;
  for (h = 2; h < 8; h += 2) {
    for (c[h] = u[h] * c[h - 2] - u[h + 1] * c[h - 1], c[h + 1] = u[h] * c[h - 1] + u[h + 1] * c[h - 2], v = h - 2; v > 0; v -= 2)
      c[v] += u[h] * c[v - 2] - u[h + 1] * c[v - 1], c[v + 1] += u[h] * c[v - 1] + u[h + 1] * c[v - 2];
    for (v = 0; v <= h; v += 2)
      c[v] += i[h] * y[v] - i[h + 1] * y[v + 1], c[v + 1] += i[h] * y[v + 1] + i[h + 1] * y[v];
    for (y[h + 2] = u[h] * y[h] - u[h + 1] * y[h + 1], y[h + 3] = u[h] * y[h + 1] + u[h + 1] * y[h], v = h; v > 0; v -= 2)
      y[v] += u[h] * y[v - 2] - u[h + 1] * y[v - 1], y[v + 1] += u[h] * y[v - 1] + u[h + 1] * y[v - 2];
  }
  for (h = 0; h < 4; ++h)
    v = h << 1, t[h] = c[v] / d, e[h + 1] = y[v + 2];
}
function Wa(e) {
  let t = nu(e);
  return {
    kde_causal: [t.b_causal[0], t.b_causal[1], t.b_causal[2], t.b_causal[3]],
    kde_anticausal: [t.b_anticausal[1], t.b_anticausal[2], t.b_anticausal[3], t.b_anticausal[4]],
    kde_a: [t.a[1], t.a[2], t.a[3], t.a[4]]
  };
}
const au = `// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

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
class ou {
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
    }, this.viewport = new Kr({ x: 0, y: 0, scale: 1 }, i, o), this.df = new Xt();
    let a = this.df;
    this.renderInputs = {
      mode: a.value(this.props.mode),
      colorScheme: a.value(this.props.colorScheme),
      xData: a.value(this.props.x),
      yData: a.value(this.props.y),
      categoryData: a.value(this.props.category),
      categoryCount: a.value(this.props.categoryCount),
      categoryColors: a.value(this.props.categoryColors),
      matrix: a.value(La()),
      width: a.value(i),
      height: a.value(o),
      pointSize: a.value(this.props.pointSize),
      densityBandwidth: a.value(this.props.densityBandwidth)
    }, this.device = a.value(r), this.dataBuffers = lu(a, this.device, this.renderInputs), this.module = a.derive([this.device], (s) => s.createShaderModule({ code: au })), this.uniforms = Js(a, this.device), this.renderer = su(
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
    let o = this.df.subgraph(), { x: a, y: s, scale: l } = i, u = [l, 0, 0, 0, l, 0, -a * l, -s * l, 1], d = za(u), y = await uu(
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
      coordinateAtPixel: (v, h) => {
        let p = v / t * 2 - 1, _ = h / r * 2 - 1, m = Oa([p, _, 1], d);
        return { x: m[0], y: m[1] };
      }
    };
  }
}
function lu(e, t, r) {
  let n = GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST;
  const i = e.derive([r.xData], (d) => d.length), o = e.derive([i], (d) => d * 4), a = i, s = e.statefulDerive(
    [t, e.statefulDerive([t, o, n], Jt), r.xData],
    en
  ), l = e.statefulDerive(
    [t, e.statefulDerive([t, o, n], Jt), r.yData],
    en
  ), u = e.statefulDerive(
    [t, e.statefulDerive([t, a, n], Jt), r.categoryData],
    en
  );
  return { x: s, y: l, category: u, count: i };
}
function ja(e, t, r, n, i, o, a) {
  let s = "rgba16float", l = "r16float", u = GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING, d = e.statefulDerive(
    [t, r, n, s, u],
    jn
  ), c = e.statefulDerive(
    [t, r, n, l, u],
    jn
  ), y = e.derive(
    [i, o, a],
    (_, m, g) => _ * m * g * 4
    // w * h * categoryCount * sizeof(uint32)
  ), v = e.derive(
    [i, o, a],
    (_, m, g) => _ * m * g * 2
    // w * h * categoryCount * sizeof(f16)
  ), h = e.statefulDerive(
    [t, y, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC],
    Jt
  ), p = e.statefulDerive([t, v, GPUBufferUsage.STORAGE], Jt);
  return {
    colorTexture: d,
    alphaTexture: c,
    colorTextureFormat: s,
    alphaTextureFormat: l,
    countBuffer: h,
    blurBuffer: p
  };
}
function su(e, t, r, n, i, o, a) {
  let l = e.derive([o.densityBandwidth], (C) => Math.ceil(C * 3) + 1), u = e.derive([o.width, l], (C, N) => C + N * 2), d = e.derive([o.height, l], (C, N) => C + N * 2), c = e.derive([u], (C) => Math.ceil(C / 4)), y = e.derive([d], (C) => Math.ceil(C / 4)), v = ja(
    e,
    t,
    u,
    d,
    c,
    y,
    o.categoryCount
  ), h = Xa(e, t, n.buffer, a, v), p = Ya(e, t, r, h, a, v), _ = tu(e, t, r, h, a, v), m = eu(e, t, r, h, v), g = ru(e, t, r, i, h), b = Ha(e, t, r, h, u, d, o.categoryCount), S = e.derive(
    [o.densityBandwidth, u, c],
    (C, N, P) => Wa(C / N * P)
  ), M = e.derive(
    [o.categoryColors, o.categoryCount],
    (C, N) => (C == null && (C = jr(N)), C.map((P) => In(P)))
  );
  return e.derive(
    [
      t,
      u,
      d,
      c,
      y,
      n.update,
      a.count,
      o.matrix,
      M,
      _,
      g,
      p,
      b,
      m,
      S
    ],
    (C, N, P, q, Z, J, G, ge, te, De, ae, z, oe, le, be) => (K, ve) => {
      let Oe = K.colorScheme == "light" ? [1, 1, 1, 1] : [0, 0, 0, 1], ue = K.width / N, pe = K.height / P, Pe = Ln([ue, 0, 0, 0, pe, 0, 0, 0, 1], ge);
      J({
        count: G,
        category_count: K.categoryCount,
        framebuffer_width: N,
        framebuffer_height: P,
        density_width: q,
        density_height: Z,
        gamma: K.gamma,
        point_size: Math.max(K.mode == "points" ? 3 : 1, K.pointSize),
        point_alpha: K.pointAlpha,
        points_alpha: K.pointsAlpha,
        density_scaler: K.densityScaler / 16,
        quantization_step: K.densityQuantizationStep,
        density_alpha: K.densityAlpha,
        contours_alpha: K.contoursAlpha,
        matrix: Pe,
        view_xy_scaler: [1 / ue, 1 / pe],
        kde_causal: be.kde_causal,
        kde_anticausal: be.kde_anticausal,
        kde_a: be.kde_a,
        background_color: Oe,
        category_colors: te
      });
      let Be = C.createCommandEncoder();
      De(Be), K.mode == "density" && (K.densityAlpha > 0 || K.contoursAlpha > 0) && (z(Be), oe(Be), le(Be)), ae(Be, ve), C.queue.submit([Be.finish()]);
    }
  );
}
function uu(e, t, r, n, i, o, a, s, l) {
  let u = ja(e, t, i, o, i, o, e.value(1)), d = Xa(e, t, n.buffer, l, u), c = Ya(e, t, r, d, l, u), y = Ha(e, t, r, d, i, o, e.value(1));
  return e.derive(
    [
      t,
      i,
      o,
      l.count,
      n.update,
      a,
      s,
      c,
      y,
      u.countBuffer
    ],
    (v, h, p, _, m, g, b, S, M, C) => () => {
      let N = v.createCommandEncoder(), P = Wa(g);
      m({
        count: _,
        category_count: 1,
        framebuffer_width: h,
        framebuffer_height: p,
        density_width: h,
        density_height: p,
        gamma: 1,
        point_size: 0,
        point_alpha: 0,
        points_alpha: 0,
        density_scaler: 0,
        quantization_step: 0,
        density_alpha: 0,
        contours_alpha: 0,
        matrix: b,
        view_xy_scaler: [1, 1],
        kde_causal: P.kde_causal,
        kde_anticausal: P.kde_anticausal,
        kde_a: P.kde_a,
        background_color: [0, 0, 0, 0],
        category_colors: []
      }), S(N), M(N);
      let q = v.createBuffer({
        size: h * p * 2,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
      });
      return N.copyBufferToBuffer(C, 0, q, 0, h * p * 2), v.queue.submit([N.finish()]), q.mapAsync(GPUMapMode.READ, 0, h * p * 2).then(() => fu(q.getMappedRange()));
    }
  );
}
function fu(e) {
  let t = new Uint16Array(e), r = new Uint32Array(t.length);
  for (let n = 0; n < t.length; n++) {
    let i = t[n] & 32767, o = t[n] & 32768, a = t[n] & 31744;
    i <<= 13, o <<= 16, i += 939524096, i = a == 0 ? 0 : i, i |= o, r[n] = i;
  }
  return new Float32Array(r.buffer);
}
let hr;
function cu() {
  return hr == null && (hr = document.createElement("canvas"), hr.width = 1, hr.height = 1), hr.getContext("2d");
}
function du(e) {
  let t = cu();
  t.font = `${e.fontSize ?? 10}px ${e.fontFamily ?? "system-ui"}`;
  let r = e.text.split(`
`).map((a) => t.measureText(a).width), i = (e.fontSize ?? 10) * (e.lineSpacing ?? 1) * r.length;
  return {
    width: r.reduce((a, s) => Math.max(a, s)),
    height: i
  };
}
let fn = null, wn = /* @__PURE__ */ new Map();
function hu() {
  return fn == null && (fn = new Promise((e, t) => {
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
  })), fn;
}
function cr(e, t, r = []) {
  return new Promise((n, i) => {
    hu().then((o) => {
      let a = (/* @__PURE__ */ new Date()).getTime().toString() + "-" + Math.random().toString();
      wn.set(a, (s) => {
        n(s.payload);
      }), o.postMessage({ id: a, name: e, payload: t }, r);
    });
  });
}
let vu = (e, t, r, n) => cr("findClusters", [e, t, r, n], [e.buffer]), yu = (...e) => cr("dynamicLabelPlacement", e), pu = (...e) => cr("textSummarizerCreate", e), mu = (...e) => cr("textSummarizerDestroy", e), xu = (...e) => cr("textSummarizerAdd", e), _u = (...e) => cr("textSummarizerSummarize", e);
async function gi(e, t, r, n, i) {
  let o = new Kr(r, e, t), a = n.reduce((h, p) => Math.min(h, p.level ?? 0), 0), s = n.reduce((h, p) => Math.max(h, p.level ?? 0), 0), l = r.scale, u = r.scale / 2, d = u * 4, c = l / d, y = n.map((h) => {
    let p = o.pixelLocation(h.x, h.y), _ = h.level ?? 0, m = _ == 0 ? 14 : 12, g = du({
      text: h.text,
      fontSize: m,
      fontFamily: i
    });
    return g.width += 4, g.height += 4, {
      text: h.text,
      fontSize: m,
      bounds: {
        xMin: p.x - g.width / 2,
        xMax: p.x + g.width / 2,
        yMin: p.y - g.height / 2,
        yMax: p.y + g.height / 2
      },
      locationAtZero: p,
      priority: h.priority,
      minScale: h.level == s ? null : c * Math.pow(2, -_) / 1.2,
      maxScale: h.level == a ? null : c * Math.pow(2, -_ + 1),
      coordinate: { x: h.x, y: h.y },
      placement: null
    };
  }), v = await yu(y, { globalMaxScale: l / u });
  for (let h = 0; h < v.length; h++) {
    let p = v[h];
    if (p != null) {
      let _ = l / p.minScale, m = l / p.maxScale;
      y[h].placement = { minScale: m, maxScale: _ };
    }
  }
  return y;
}
function gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cn = { exports: {} }, bi;
function bu() {
  return bi || (bi = 1, (function(e) {
    (function() {
      function t(s, l) {
        var u = s.x - l.x, d = s.y - l.y;
        return u * u + d * d;
      }
      function r(s, l, u) {
        var d = l.x, c = l.y, y = u.x - d, v = u.y - c;
        if (y !== 0 || v !== 0) {
          var h = ((s.x - d) * y + (s.y - c) * v) / (y * y + v * v);
          h > 1 ? (d = u.x, c = u.y) : h > 0 && (d += y * h, c += v * h);
        }
        return y = s.x - d, v = s.y - c, y * y + v * v;
      }
      function n(s, l) {
        for (var u = s[0], d = [u], c, y = 1, v = s.length; y < v; y++)
          c = s[y], t(c, u) > l && (d.push(c), u = c);
        return u !== c && d.push(c), d;
      }
      function i(s, l, u, d, c) {
        for (var y = d, v, h = l + 1; h < u; h++) {
          var p = r(s[h], s[l], s[u]);
          p > y && (v = h, y = p);
        }
        y > d && (v - l > 1 && i(s, l, v, d, c), c.push(s[v]), u - v > 1 && i(s, v, u, d, c));
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
  })(cn)), cn.exports;
}
var wu = bu();
const wi = /* @__PURE__ */ gu(wu);
function Au(e, t) {
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
function Eu(e, t) {
  const r = Au(e, 5), n = Pa(r);
  let i = Math.max(n.xMax - n.xMin, n.yMax - n.yMin) / 100, o = wi(r, i), a = 0;
  for (; o.length > t && a < 20; )
    i *= 1.1, a += 1, o = wi(r, i);
  return o;
}
const Ai = {
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
function Ru(e, t) {
  return e == null ? Ai[t] : { ...Ai[t], ...e, ...e[t] != null ? e[t] : {} };
}
function Tu(e, t, r, n, i, o, a) {
  let s = Math.max(n, i) / o, l = e / (r * r) / (s * s), d = 1 / (l / (o * o)) * 0.2, c = Math.sqrt(e / t / (s * s)), y = Math.log(c), v = Math.log(r), h = (Math.min(Math.max((v - y) * 2, -1), 1) + 1) / 2, p;
  if (a != null)
    p = a * o;
  else {
    let g = 0.25 / Math.sqrt(l);
    p = Math.max(0.2, Math.min(5, g)) * o;
  }
  let _ = 1 - h, m = 0.5 + h * 0.5;
  return {
    densityScaler: d,
    densityAlpha: _,
    contoursAlpha: _,
    pointSize: p,
    pointAlpha: 0.7,
    pointsAlpha: m,
    densityBandwidth: 20
  };
}
var Su = /* @__PURE__ */ Ft("<div></div>"), Mu = /* @__PURE__ */ xt("<circle></circle>"), Cu = /* @__PURE__ */ xt("<circle></circle>"), Fu = /* @__PURE__ */ xt('<text dominant-baseline="middle"> </text>'), Du = /* @__PURE__ */ xt("<g></g>"), Pu = /* @__PURE__ */ xt("<g><!></g>"), Bu = /* @__PURE__ */ xt("<g></g>"), ku = /* @__PURE__ */ Ft('<div><canvas></canvas> <div><!></div> <svg role="none"><!><!><!><!></svg> <!> <!></div>');
function Ka(e, t) {
  Mt(t, !0);
  let r = E(t, "data", 19, () => ({ x: new Float32Array(), y: new Float32Array(), category: null })), n = E(t, "categoryCount", 3, 1), i = E(t, "categoryColors", 3, null), o = E(t, "width", 3, 800), a = E(t, "height", 3, 800), s = E(t, "pixelRatio", 3, 2), l = E(t, "theme", 3, null), u = E(t, "config", 3, null), d = E(t, "totalCount", 3, null), c = E(t, "maxDensity", 3, null), y = E(t, "labels", 3, null), v = E(t, "queryClusterLabels", 3, null), h = E(t, "tooltip", 7, null), p = E(t, "selection", 7, null), _ = E(t, "querySelection", 3, null), m = E(t, "rangeSelection", 7, null), g = E(t, "defaultViewportState", 3, null), b = E(t, "viewportState", 7, null), S = E(t, "customTooltip", 3, null), M = E(t, "customOverlay", 3, null), C = E(t, "onViewportState", 3, null), N = E(t, "onTooltip", 3, null), P = E(t, "onSelection", 3, null), q = E(t, "onRangeSelection", 3, null), Z = E(t, "cache", 3, null), J = /* @__PURE__ */ k(() => u()?.colorScheme ?? "light"), G = /* @__PURE__ */ k(() => Ru(l(), f(J))), ge = /* @__PURE__ */ k(() => i() ?? jr(n())), te = /* @__PURE__ */ k(() => b() ?? g() ?? { x: 0, y: 0, scale: 1 }), De = /* @__PURE__ */ k(() => new Kr(f(te), o(), a())), ae = /* @__PURE__ */ k(() => f(De).pixelLocationFunction()), z = /* @__PURE__ */ k(() => f(De).coordinateAtPixelFunction()), oe = /* @__PURE__ */ $(!1);
  function le(w, A) {
    return w.x == A.x && w.y == A.y && w.category == A.category && w.text == A.text;
  }
  let be = /* @__PURE__ */ k(() => p()?.length == 1 && h() != null && le(p()[0], h()));
  function K(w) {
    wt(b(), w) || (b(w), C()?.(w));
  }
  function ve(w) {
    wt(h(), w) || (h(w), N()?.(w));
  }
  function Oe(w) {
    wt(p(), w) || (p(w), P()?.(w));
  }
  function ue(w) {
    wt(m(), w) || (m(w), q()?.(w));
  }
  let pe = /* @__PURE__ */ $(Bt([])), We = /* @__PURE__ */ $(null), Pe = /* @__PURE__ */ $("none"), Be = /* @__PURE__ */ k(() => o() * s()), F = /* @__PURE__ */ k(() => a() * s()), U = /* @__PURE__ */ $(null), I = /* @__PURE__ */ $(null), fe = /* @__PURE__ */ $(null), re = /* @__PURE__ */ k(() => u()?.minimumDensity ?? 1 / 16), je = /* @__PURE__ */ k(() => u()?.pointSize ?? null), Ae = /* @__PURE__ */ k(() => u()?.mode ?? "points"), lt = /* @__PURE__ */ k(() => u()?.autoLabelEnabled), _t = /* @__PURE__ */ k(() => Tu(c() ?? (d() ?? r().x.length) / 4, f(re), f(te).scale, f(Be), f(F), s(), f(je))), st = /* @__PURE__ */ k(() => f(_t).pointSize), gt = !0;
  xr(() => {
    f(I)?.setProps({
      mode: f(Ae),
      colorScheme: f(J),
      viewportX: f(te).x,
      viewportY: f(te).y,
      viewportScale: f(te).scale,
      width: f(Be),
      height: f(F),
      x: r().x,
      y: r().y,
      category: r().category,
      categoryCount: n(),
      categoryColors: f(ge),
      ...f(_t)
    }) && (Ja(), (f(lt) !== !1 || y() != null) && gt && f(I) != null && r().x != null && r().x.length > 0 && g() != null && (gt = !1, so(g())));
  });
  function Za() {
    Qr = null, !(!f(U) || !f(I)) && (f(U).width = f(I).props.width, f(U).height = f(I).props.height, f(U).style.width = `${f(I).props.width / s()}px`, f(U).style.height = `${f(I).props.height / s()}px`, f(I).render());
  }
  let Qr = null;
  function Ja() {
    Qr == null && (Qr = requestAnimationFrame(Za));
  }
  function $a(w) {
    let A;
    function T() {
      A = w.getContext("webgl2", { antialias: !1 }), A.getExtension("EXT_color_buffer_float"), A.getExtension("EXT_float_blend"), A.getExtension("OES_texture_float_linear"), L(I, new Xs(A, f(Be), f(F)), !0);
    }
    T(), w.addEventListener("webglcontextlost", () => {
      f(I)?.destroy(), L(I, null), A = null;
    }), w.addEventListener("webglcontextrestored", () => {
      T();
    });
  }
  function eo(w) {
    async function A() {
      let T = w.getContext("webgpu");
      if (T == null) {
        console.error("Could not get WebGPU canvas context");
        return;
      }
      let D = await navigator.gpu.requestAdapter();
      if (!D) {
        console.error("Could not request WebGPU adapter");
        return;
      }
      let B = 512 * 1048576, O = 512 * 1048576;
      B = Math.min(B, D.limits.maxBufferSize), O = Math.min(O, D.limits.maxStorageBufferBindingSize);
      let X = {
        requiredLimits: { maxBufferSize: B, maxStorageBufferBindingSize: O },
        requiredFeatures: ["shader-f16"]
      }, Q = await D.requestDevice(X);
      Q.lost.then((de) => {
        console.info(`WebGPU device was lost: ${de.message}`), de.reason != "destroyed" && (f(I)?.destroy(), L(I, null), A());
      });
      let ee = navigator.gpu.getPreferredCanvasFormat();
      T.configure({ device: Q, format: ee, alphaMode: "premultiplied" }), L(I, new ou(T, Q, ee, f(Be), f(F)), !0);
    }
    A();
  }
  function to(w) {
    w != null && b() == null && K(w);
  }
  xr(() => to(g())), kn(() => {
    f(U) != null && (Si() ? eo(f(U)) : ($a(f(U)), L(fe, "WebGPU is unavailable. If you are using Safari, please enable the WebGPU feature flag.")));
  }), Ml(() => {
    f(I)?.destroy(), L(I, null);
  });
  function Ht(w) {
    let A = f(U)?.getBoundingClientRect() ?? { left: 0, top: 0 };
    return { x: w.clientX - A.left, y: w.clientY - A.top };
  }
  function ro(w) {
    w.preventDefault();
    let { x: A, y: T } = Ht(w), D = Math.exp(-w.deltaY / 200);
    no(D, { x: A, y: T });
  }
  function no(w, A) {
    let { x: T, y: D, scale: B } = f(te);
    ve(null);
    let O = Math.min(100, Math.max(0.01, B * w)), X = f(U).getBoundingClientRect(), Q = Math.max(X.width, X.height), ee = (A.x - X.width / 2) / Q * 2, de = (X.height / 2 - A.y) / Q * 2, Ke = T + ee / B - ee / O, ke = D + de / B - de / O;
    K({ x: Ke, y: ke, scale: O });
  }
  function io(w) {
    ve(null);
    let A = "pan";
    f(Pe) != "none" ? w.modifiers.shift || (A = f(Pe)) : w.modifiers.shift && (A = w.modifiers.meta ? "lasso" : "marquee");
    let T = Ht(w);
    switch (A) {
      case "marquee":
        return {
          move: (D) => {
            if (ve(null), f(I) == null)
              return;
            let B = Ht(D), O = f(z)(T.x, T.y), X = f(z)(B.x, B.y);
            ue({
              xMin: Math.min(O.x, X.x),
              yMin: Math.min(O.y, X.y),
              xMax: Math.max(O.x, X.x),
              yMax: Math.max(O.y, X.y)
            });
          }
        };
      case "lasso": {
        let D = [f(z)(T.x, T.y)];
        return {
          move: (B) => {
            if (ve(null), f(I) == null)
              return;
            let O = Ht(B);
            D = [...D, f(z)(O.x, O.y)], D.length >= 3 && ue(Eu(D, 24));
          }
        };
      }
      case "pan": {
        let D = f(z)(0, 0), B = f(z)(1, 1), O = D.x - B.x, X = D.y - B.y, Q = f(te).x, ee = f(te).y;
        return {
          move: (de) => {
            K({
              x: Q + (de.clientX - w.clientX) * O,
              y: ee + (de.clientY - w.clientY) * X,
              scale: f(te).scale
            });
          }
        };
      }
    }
  }
  async function ao(w) {
    if (m() != null)
      ue(null);
    else {
      const A = await On(Ht(w));
      if (A == null)
        Oe([]), ve(null);
      else if (w.modifiers.shift || w.modifiers.ctrl || w.modifiers.meta) {
        let T = p()?.findIndex((D) => D.x == A.x && D.y == A.y && D.category == A.category);
        p() == null || T == null || T < 0 ? (Oe([...p() ?? [], A]), ve(A)) : (Oe([
          ...p().slice(0, T),
          ...p().slice(T + 1)
        ]), ve(null));
      } else
        Oe([A]), ve(A);
    }
  }
  let Zr = ql(
    async (w) => {
      let A = w ? Ht(w) : null;
      if (p() != null && p().length == 1) {
        let T = f(ae)(p()[0].x, p()[0].y);
        A != null && Gl(A, T) < 10 && ve(p()[0]);
      } else
        ve(await On(A));
    },
    () => h() != null
  );
  function oo(w) {
    w != null ? f(oe) || Zr(w) : Zr(null);
  }
  xr(() => {
    f(oe) && Zr(null);
  });
  async function On(w) {
    if (f(I) == null || w == null || _() == null)
      return null;
    let { x: A, y: T } = f(z)(w.x, w.y), D = Math.abs(f(z)(w.x + 1, w.y).x - A);
    return await _()(A, T, D);
  }
  async function zn(w, A, T, D = 5e-3) {
    let B = await w.densityMap(1e3, 1e3, A, T), O = await vu(B.data, B.width, B.height), X = [];
    for (let ee = 0; ee < O.length; ee++) {
      let de = O[ee], Ke = B.coordinateAtPixel(de.meanX, de.meanY), ke = de.boundaryRectApproximation.map(([Ve, Wt, $r, ut]) => {
        let Dt = B.coordinateAtPixel(Ve, Wt), jt = B.coordinateAtPixel($r, ut);
        return {
          xMin: Math.min(Dt.x, jt.x),
          xMax: Math.max(Dt.x, jt.x),
          yMin: Math.min(Dt.y, jt.y),
          yMax: Math.max(Dt.y, jt.y)
        };
      });
      X.push({
        x: Ke.x,
        y: Ke.y,
        sumDensity: de.sumDensity,
        rects: ke,
        bandwidth: A
      });
    }
    let Q = X.reduce((ee, de) => Math.max(ee, de.sumDensity), 0);
    return X.filter((ee) => ee.sumDensity / Q > D);
  }
  async function lo(w) {
    if (f(I) == null || v() == null)
      return [];
    let A = await Yl({
      autoLabel: {
        version: 1,
        viewport: w,
        stopWords: u()?.autoLabelStopWords,
        densityThreshold: u()?.autoLabelDensityThreshold
      }
    });
    if (Z() != null) {
      let B = await Z().get(A);
      if (B != null)
        return B;
    }
    let T = await zn(f(I), 10, w, u()?.autoLabelDensityThreshold ?? 5e-3);
    if (T = T.concat(await zn(f(I), 5, w)), v()) {
      let B = await v()(T.map((O) => O.rects));
      for (let O = 0; O < T.length; O++)
        T[O].label = B[O];
    }
    let D = T.filter((B) => B.label != null && B.label.length > 0).map((B) => ({
      x: B.x,
      y: B.y,
      text: B.label,
      priority: B.sumDensity,
      level: B.bandwidth == 10 ? 0 : 1
    }));
    return Z() != null && await Z().set(A, D), D;
  }
  async function so(w) {
    if (f(I) != null)
      if (y() != null)
        L(pe, await gi(o(), a(), w, y(), f(G).fontFamily), !0);
      else {
        L(We, "Generating labels...");
        let A = await lo(w);
        L(pe, await gi(o(), a(), w, A, f(G).fontFamily), !0), L(We, null);
      }
  }
  class uo {
    content;
    constructor(A, T) {
      let D = document.createElement("div");
      this.content = D, this.update(T), A.appendChild(D);
    }
    update(A) {
      let T = this.content;
      T.style.fontFamily = A.fontFamily, f(J) == "light" ? (T.style.color = "#000", T.style.background = "#fff", T.style.border = "1px solid #000") : (T.style.color = "#ccc", T.style.background = "#000", T.style.border = "1px solid #ccc"), T.style.borderRadius = "2px", T.style.padding = "5px", T.style.fontSize = "12px", T.style.maxWidth = "300px", T.innerText = A.tooltip.text ?? JSON.stringify(A.tooltip);
    }
  }
  var Sr = ku();
  let qn;
  var Jr = he(Sr);
  V(Jr, "", {}, { position: "absolute", top: "0", left: "0" }), _n(Jr, (w) => L(U, w), () => f(U));
  var Mr = ne(Jr, 2);
  let Gn;
  var fo = he(Mr);
  {
    var co = (w) => {
      const A = /* @__PURE__ */ k(() => Ba(M())), T = /* @__PURE__ */ k(() => ({
        location: f(ae),
        width: o(),
        height: a()
      }));
      var D = dr(), B = Qt(D);
      Cl(B, () => f(A), (O) => {
        var X = Su();
        Ye(X, (Q, ee) => f(A)?.(Q, ee), () => ka(M(), { proxy: f(T) })), ie(O, X);
      }), ie(w, D);
    };
    Ee(fo, (w) => {
      M() && w(co);
    });
  }
  ce(Mr);
  var bt = ne(Mr, 2);
  V(bt, "", {}, { position: "absolute", left: "0", top: "0" });
  var Vn = he(bt);
  {
    var ho = (w) => {
      const A = /* @__PURE__ */ k(() => {
        const { x: X, y: Q } = f(ae)(h().x, h().y);
        return { x: X, y: Q };
      }), T = /* @__PURE__ */ k(() => Math.max(3, f(st) / s()) + 1);
      var D = dr(), B = Qt(D);
      {
        var O = (X) => {
          var Q = Mu();
          let ee;
          Ie(() => {
            R(Q, "cx", f(A).x), R(Q, "cy", f(A).y), R(Q, "r", f(T)), ee = V(Q, "", ee, {
              stroke: f(J) == "light" ? "#000" : "#fff",
              "stroke-width": 1,
              fill: "none"
            });
          }), ie(X, Q);
        };
        Ee(B, (X) => {
          isFinite(f(A).x) && isFinite(f(A).y) && isFinite(f(T)) && X(O);
        });
      }
      ie(w, D);
    };
    Ee(Vn, (w) => {
      h() != null && f(I) != null && w(ho);
    });
  }
  var Yn = ne(Vn);
  {
    var vo = (w) => {
      var A = dr(), T = Qt(A);
      rn(T, 17, p, tn, (D, B) => {
        const O = /* @__PURE__ */ k(() => {
          const { x: ke, y: Ve } = f(ae)(f(B).x, f(B).y);
          return { x: ke, y: Ve };
        }), X = /* @__PURE__ */ k(() => f(B).category != null ? f(ge)[f(B).category] : f(ge)[0]), Q = /* @__PURE__ */ k(() => Math.max(3, f(st) / s()) + 1);
        var ee = dr(), de = Qt(ee);
        {
          var Ke = (ke) => {
            var Ve = Cu();
            let Wt;
            Ie(() => {
              R(Ve, "cx", f(O).x), R(Ve, "cy", f(O).y), R(Ve, "r", f(Q)), Wt = V(Ve, "", Wt, {
                stroke: f(J) == "light" ? "#000" : "#fff",
                "stroke-width": 2,
                fill: f(X)
              });
            }), ie(ke, Ve);
          };
          Ee(de, (ke) => {
            isFinite(f(O).x) && isFinite(f(O).y) && isFinite(f(Q)) && ke(Ke);
          });
        }
        ie(D, ee);
      }), ie(w, A);
    };
    Ee(Yn, (w) => {
      p() != null && f(I) != null && w(vo);
    });
  }
  var Xn = ne(Yn);
  {
    var yo = (w) => {
      var A = Bu();
      rn(A, 21, () => f(pe), tn, (T, D) => {
        const B = /* @__PURE__ */ k(() => f(D).text.split(`
`)), O = /* @__PURE__ */ k(() => f(ae)(f(D).coordinate.x, f(D).coordinate.y)), X = /* @__PURE__ */ k(() => f(D).placement != null && f(D).placement.minScale <= f(te).scale && f(te).scale <= f(D).placement.maxScale);
        var Q = Pu(), ee = he(Q);
        {
          var de = (Ke) => {
            var ke = Du();
            rn(ke, 21, () => f(B), tn, (Ve, Wt, $r) => {
              var ut = Fu();
              R(ut, "x", 0);
              let Dt;
              var jt = he(ut, !0);
              ce(ut), Ie(() => {
                R(ut, "y", ($r - (f(B).length - 1) / 2) * f(D).fontSize), R(ut, "font-size", f(D).fontSize), Dt = V(ut, "", Dt, {
                  "paint-order": "stroke",
                  "stroke-width": "4",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round",
                  "text-anchor": "middle",
                  fill: f(G).clusterLabelColor,
                  stroke: f(G).clusterLabelOutlineColor,
                  opacity: f(G).clusterLabelOpacity,
                  "user-select": "none",
                  "-webkit-user-select": "none",
                  "font-family": f(G).fontFamily
                }), _r(jt, f(Wt));
              }), ie(Ve, ut);
            }), ce(ke), ie(Ke, ke);
          };
          Ee(ee, (Ke) => {
            f(X) && Ke(de);
          });
        }
        ce(Q), Ie(() => R(Q, "transform", `translate(${f(O).x ?? ""},${f(O).y ?? ""})`)), ie(T, Q);
      }), ce(A), ie(w, A);
    };
    Ee(Xn, (w) => {
      w(yo);
    });
  }
  var po = ne(Xn);
  {
    var mo = (w) => {
      var A = dr(), T = Qt(A);
      {
        var D = (O) => {
          jl(O, {
            get value() {
              return m();
            },
            get pointLocation() {
              return f(ae);
            }
          });
        }, B = (O) => {
          zl(O, {
            get value() {
              return m();
            },
            onChange: ue,
            get pointLocation() {
              return f(ae);
            },
            get coordinateAtPoint() {
              return f(z);
            },
            preventHover: (X) => {
              L(oe, X, !0);
            }
          });
        };
        Ee(T, (O) => {
          m() instanceof Array ? O(D) : O(B, !1);
        });
      }
      ie(w, A);
    };
    Ee(po, (w) => {
      m() != null && f(I) != null && w(mo);
    });
  }
  ce(bt), Ye(bt, (w, A) => Qe?.(w, A), () => ({ click: ao, drag: io, hover: oo }));
  var Hn = ne(bt, 2);
  {
    var xo = (w) => {
      const A = /* @__PURE__ */ k(() => f(ae)(h().x, h().y));
      {
        let T = /* @__PURE__ */ k(() => Math.max(3, f(st) / s())), D = /* @__PURE__ */ k(() => S() ?? {
          class: uo,
          props: {
            colorScheme: f(J),
            fontFamily: f(G).fontFamily
          }
        });
        os(w, {
          get location() {
            return f(A);
          },
          get allowInteraction() {
            return f(be);
          },
          get targetHeight() {
            return f(T);
          },
          get customTooltip() {
            return f(D);
          },
          get tooltip() {
            return h();
          }
        });
      }
    };
    Ee(Hn, (w) => {
      h() != null && f(I) != null && w(xo);
    });
  }
  var _o = ne(Hn, 2);
  {
    var go = (w) => {
      {
        let A = /* @__PURE__ */ k(() => f(We) ?? f(fe)), T = /* @__PURE__ */ k(() => 1 / (f(ae)(1, 0).x - f(ae)(0, 0).x));
        ns(w, {
          get resolvedTheme() {
            return f(G);
          },
          get statusMessage() {
            return f(A);
          },
          get distancePerPoint() {
            return f(T);
          },
          get pointCount() {
            return r().x.length;
          },
          get selectionMode() {
            return f(Pe);
          },
          onSelectionMode: (D) => L(Pe, D, !0)
        });
      }
    };
    Ee(_o, (w) => {
      f(G).statusBar && w(go);
    });
  }
  ce(Sr), Ie(() => {
    qn = V(Sr, "", qn, {
      width: `${o() ?? ""}px`,
      height: `${a() ?? ""}px`,
      position: "relative"
    }), Gn = V(Mr, "", Gn, {
      width: `${o() ?? ""}px`,
      height: `${a() ?? ""}px`,
      position: "absolute",
      top: "0",
      left: "0"
    }), R(bt, "width", o()), R(bt, "height", a());
  }), _l("wheel", bt, ro), ie(e, Sr), Ct();
}
function Qa(e, t, r = 0, n = e.length - 1, i = Uu) {
  for (; n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, u = t - r + 1, d = Math.log(l), c = 0.5 * Math.exp(2 * d / 3), y = 0.5 * Math.sqrt(d * c * (l - c) / l) * (u - l / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(t - u * c / l + y)), h = Math.min(n, Math.floor(t + (l - u) * c / l + y));
      Qa(e, t, v, h, i);
    }
    const o = e[t];
    let a = r, s = n;
    for (vr(e, r, t), i(e[n], o) > 0 && vr(e, r, n); a < s; ) {
      for (vr(e, a, s), a++, s--; i(e[a], o) < 0; ) a++;
      for (; i(e[s], o) > 0; ) s--;
    }
    i(e[r], o) === 0 ? vr(e, r, s) : (s++, vr(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
}
function vr(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function Uu(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Ei(e) {
  let t = new Float32Array(e), r = Math.floor(e.length / 2);
  return Qa(t, r), t[r];
}
function Nu(e) {
  return e.length == 0 ? 0 : e.reduce((t, r) => t + r, 0) / e.length;
}
function Ri(e) {
  if (e.length == 0)
    return 0;
  let t = Nu(e);
  return Math.sqrt(e.reduce((r, n) => r + (n - t) * (n - t)) / e.length);
}
function Iu(e, t, r, n = 0, i = 0) {
  let o = new ArrayBuffer(8), a = new Uint32Array(o), s = new BigUint64Array(o), l = /* @__PURE__ */ new Map();
  for (let d = 0; d < e.length; d++) {
    a[0] = Math.floor((e[d] - n) / r), a[1] = Math.floor((t[d] - i) / r);
    let c = s[0];
    l.set(c, (l.get(c) ?? 0) + 1);
  }
  let u = 0;
  for (let d of l.values())
    u = Math.max(d, u);
  return u / (r * r);
}
function Lu(e, t) {
  Mt(t, !0);
  let r = E(t, "tooltip", 3, null), n = E(t, "selection", 3, null), i = E(t, "rangeSelection", 3, null), o = E(t, "categoryColors", 3, null), a = E(t, "width", 3, null), s = E(t, "height", 3, null), l = E(t, "pixelRatio", 3, null), u = E(t, "theme", 3, null), d = E(t, "config", 3, null), c = E(t, "viewportState", 3, null), y = E(t, "labels", 3, null), v = E(t, "customTooltip", 3, null), h = E(t, "customOverlay", 3, null), p = E(t, "querySelection", 3, null), _ = E(t, "queryClusterLabels", 3, null), m = E(t, "onViewportState", 3, null), g = E(t, "onTooltip", 3, null), b = E(t, "onSelection", 3, null), S = E(t, "onRangeSelection", 3, null), M = E(t, "cache", 3, null), C = /* @__PURE__ */ k(() => N(t.data));
  function N(P) {
    let q = 1;
    P.category != null && (q = P.category.reduce((z, oe) => Math.max(z, oe), 0) + 1);
    let Z = Ei(P.x), J = Ei(P.y), G = Ri(P.x), ge = Ri(P.y), te = 1 / (Math.max(G, ge, 1e-3) * 3), De = 0.1 / te, ae = Iu(P.x, P.y, De, Z, J);
    return {
      count: P.x.length,
      categoryCount: q,
      maxDensity: ae,
      defaultViewportState: { x: Z, y: J, scale: te * 0.95 }
    };
  }
  {
    let P = /* @__PURE__ */ k(() => a() ?? 800), q = /* @__PURE__ */ k(() => s() ?? 800), Z = /* @__PURE__ */ k(() => l() ?? 2), J = /* @__PURE__ */ k(() => ({
      x: t.data.x,
      y: t.data.y,
      category: t.data.category ?? null
    }));
    Ka(e, {
      get width() {
        return f(P);
      },
      get height() {
        return f(q);
      },
      get pixelRatio() {
        return f(Z);
      },
      get theme() {
        return u();
      },
      get config() {
        return d();
      },
      get data() {
        return f(J);
      },
      get totalCount() {
        return f(C).count;
      },
      get maxDensity() {
        return f(C).maxDensity;
      },
      get categoryCount() {
        return f(C).categoryCount;
      },
      get categoryColors() {
        return o();
      },
      get defaultViewportState() {
        return f(C).defaultViewportState;
      },
      get querySelection() {
        return p();
      },
      get queryClusterLabels() {
        return _();
      },
      get labels() {
        return y();
      },
      get customTooltip() {
        return v();
      },
      get customOverlay() {
        return h();
      },
      get tooltip() {
        return r();
      },
      get onTooltip() {
        return g();
      },
      get selection() {
        return n();
      },
      get onSelection() {
        return b();
      },
      get viewportState() {
        return c();
      },
      get onViewportState() {
        return m();
      },
      get rangeSelection() {
        return i();
      },
      get onRangeSelection() {
        return S();
      },
      get cache() {
        return M();
      }
    });
  }
  Ct();
}
class ju {
  component;
  currentProps;
  constructor(t, r) {
    this.currentProps = { ...r }, this.component = Fa({ component: Lu, target: t, props: r });
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
function Ti(e, t) {
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
function Ou(e, t, r) {
  let n = [];
  for (let o = 0; o < r.length; o++) {
    let a = (o + 1) % r.length, { x: s, y: l } = r[o], { x: u, y: d } = r[a], c = l < d ? x.and(x.lte(x.literal(l), t), x.lt(t, x.literal(d))) : x.and(x.lte(x.literal(d), t), x.lt(t, x.literal(l))), y = (l < d ? x.lt : x.gt)(
      x.sub(x.mul(x.literal(u - s), t), x.mul(x.literal(d - l), e)),
      x.literal((u - s) * l - (d - l) * s)
    );
    n.push(x.cast(x.and(c, y), "INT"));
  }
  let i = n.reduce((o, a) => x.add(o, a));
  return x.eq(x.mod(i, x.literal(2)), x.literal(1));
}
function zu(e, t) {
  if (t instanceof Array) {
    if (t.length < 3)
      return x.literal(!1);
    let r = Pa(t);
    return x.and(
      x.isBetween(x.column(e.x), [r.xMin, r.xMax]),
      x.isBetween(x.column(e.y), [r.yMin, r.yMax]),
      Ou(x.column(e.x), x.column(e.y), t)
    );
  } else
    return x.and(
      x.isBetween(x.column(e.x), [t.xMin, t.xMax]),
      x.isBetween(x.column(e.y), [t.yMin, t.yMax])
    );
}
async function qu(e, t) {
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
  ), { centerX: a, centerY: s, stdX: l, stdY: u, maxCategory: d } = o.get(0), c = 1 / (Math.max(l, u, 1e-3) * 3), y = 0.1 / c, v = x.sql`FLOOR((${x.column(r)} - ${a}) / ${y})`, h = x.sql`FLOOR((${x.column(n)} - ${s}) / ${y})`, p = t.category != null ? x.column(t.category) : null, _ = p != null ? [v, h, p] : [v, h], m = x.Query.from(
    x.Query.from(i).select({ count: x.sql`COUNT(*)` }).groupby(..._)
  ).select({
    totalCount: x.sql`SUM(count)::INT`,
    maxCount: x.sql`MAX(count)::INT`
  });
  o = await e.query(m);
  let { maxCount: g, totalCount: b } = o.get(0), S = g / (y * y);
  return {
    centerX: a,
    centerY: s,
    scaler: c,
    totalCount: b,
    categoryCount: (d ?? 0) + 1,
    maxDensity: S
  };
}
class Gu {
  coordinator;
  source;
  lastDistance;
  selectParams;
  constructor(t, r) {
    this.coordinator = t, this.source = r, this.lastDistance = 0;
    let { x: n, y: i, category: o, text: a, identifier: s } = this.source, l = {}, u = r.additionalFields ?? {};
    for (let d in u) {
      let c = u[d];
      typeof c == "string" ? l["field_" + d] = x.column(c) : l["field_" + d] = x.sql`${c.sql}`;
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
      let c = (await this.coordinator.query(u)).get(0);
      if (c)
        return this.lastDistance = Math.max(Math.abs(c.x - r), Math.abs(c.y - n)) * 4, this._convertToDataPoint(c);
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
function Vu(e, t) {
  Mt(t, !0);
  let r = E(t, "coordinator", 19, bo), n = E(t, "category", 3, null), i = E(t, "text", 3, null), o = E(t, "identifier", 3, null), a = E(t, "filter", 3, null), s = E(t, "categoryColors", 3, null), l = E(t, "tooltip", 3, null), u = E(t, "additionalFields", 3, null), d = E(t, "selection", 3, null), c = E(t, "rangeSelection", 3, null), y = E(t, "rangeSelectionValue", 3, null), v = E(t, "width", 3, null), h = E(t, "height", 3, null), p = E(t, "pixelRatio", 3, null), _ = E(t, "config", 3, null), m = E(t, "theme", 3, null), g = E(t, "viewportState", 3, null), b = E(t, "labels", 3, null), S = E(t, "customTooltip", 3, null), M = E(t, "customOverlay", 3, null), C = E(t, "onViewportState", 3, null), N = E(t, "onTooltip", 3, null), P = E(t, "onSelection", 3, null), q = E(t, "onRangeSelection", 3, null), Z = E(t, "cache", 3, null), J = /* @__PURE__ */ $(new Float32Array()), G = /* @__PURE__ */ $(new Float32Array()), ge = /* @__PURE__ */ $(null), te = /* @__PURE__ */ $(1), De = /* @__PURE__ */ $(1), ae = /* @__PURE__ */ $(1), z = /* @__PURE__ */ $(null), oe = /* @__PURE__ */ $(null), le = /* @__PURE__ */ $(null), be = /* @__PURE__ */ $(null), K = /* @__PURE__ */ $(null);
  ft(() => {
    let F = {
      coordinator: r(),
      source: {
        table: t.table,
        x: t.x,
        y: t.y,
        category: n()
      }
    }, U = null, I = !1;
    async function fe() {
      let re = F.source, je = await qu(F.coordinator, re);
      if (I)
        return;
      let Ae = je.scaler * 0.95;
      L(z, {
        x: je.centerX,
        y: je.centerY,
        scale: Ae
      }), L(De, je.totalCount), L(ae, je.maxDensity), L(te, je.categoryCount), U = wo({
        coordinator: F.coordinator,
        selection: a() ?? void 0,
        query: (lt) => x.Query.from(re.table).select({
          x: x.sql`${x.column(re.x)}::FLOAT`,
          y: x.sql`${x.column(re.y)}::FLOAT`,
          ...re.category != null ? { c: x.sql`${x.column(re.category)}::UTINYINT` } : {}
        }).where(lt),
        queryResult: (lt) => {
          let _t = lt.getChild("x").toArray(), st = lt.getChild("y").toArray(), gt = lt.getChild("c")?.toArray() ?? null;
          _t != null && !(_t instanceof Float32Array) && (_t = new Float32Array(_t)), st != null && !(st instanceof Float32Array) && (st = new Float32Array(st)), gt != null && !(gt instanceof Uint8Array) && (gt = new Uint8Array(gt)), L(J, _t), L(G, st), L(ge, gt), ve(null), Oe(null);
        }
      }), U.reset = () => {
        ue();
      }, L(K, U);
    }
    return fe(), () => {
      L(K, null), I = !0, U?.destroy();
    };
  }), ft(() => {
    if (Wn(l())) {
      let F = f(K);
      if (F == null)
        return;
      let U = l();
      L(oe, U.valueFor(F) ?? null);
      let I = () => {
        L(oe, U.valueFor(F) ?? null);
      };
      return ft(() => {
        let fe = f(oe), re = {
          x: t.x,
          y: t.y,
          category: n(),
          identifier: o()
        };
        U.update({
          source: F,
          clients: (/* @__PURE__ */ new Set()).add(F),
          predicate: fe != null ? Ti(re, [fe]) : null,
          value: fe
        });
      }), U.addEventListener("value", I), () => {
        U.removeEventListener("value", I), U.update({
          source: F,
          clients: (/* @__PURE__ */ new Set()).add(F),
          value: null,
          predicate: null
        });
      };
    } else if (l() == null || typeof l() == "object")
      L(oe, l());
    else {
      if (f(oe)?.identifier == l())
        return;
      let F = !1;
      return Pe([l()]).then((U) => {
        F || (U.length > 0 ? L(oe, U[0]) : L(oe, null));
      }), () => {
        F = !0;
      };
    }
  });
  function ve(F) {
    wt(l(), F) || (L(oe, F), N()?.(F));
  }
  ft(() => {
    if (Wn(d())) {
      let F = f(K);
      if (F == null)
        return;
      let U = d();
      L(le, U.valueFor(F) ?? null);
      let I = () => {
        L(le, U.valueFor(F) ?? null);
      };
      return ft(() => {
        let fe = f(le), re = {
          x: t.x,
          y: t.y,
          category: n(),
          identifier: o()
        };
        U.update({
          source: F,
          clients: (/* @__PURE__ */ new Set()).add(F),
          predicate: fe != null ? Ti(re, fe) : null,
          value: fe
        });
      }), U.addEventListener("value", I), () => {
        U.removeEventListener("value", I), U.update({
          source: F,
          clients: (/* @__PURE__ */ new Set()).add(F),
          value: null,
          predicate: null
        });
      };
    } else if (d() == null)
      L(le, null);
    else if (d().length == 0)
      L(le, []);
    else if (d().every((F) => typeof F == "object"))
      L(le, d());
    else {
      let F = !1;
      return Pe(d()).then((U) => {
        F || L(le, U);
      }), () => {
        F = !0;
      };
    }
  });
  function Oe(F) {
    wt(d(), F) || (L(le, F), P()?.(F));
  }
  ft(() => {
    let F = f(K);
    if (F == null)
      return;
    let U = c();
    if (U != null)
      return ft(() => {
        let I = f(be), fe = { x: t.x, y: t.y }, re = {
          source: F,
          clients: (/* @__PURE__ */ new Set()).add(F),
          predicate: I != null ? zu(fe, I) : null,
          value: I
        };
        U.update(re), U.activate(re);
      }), () => {
        U.update({
          source: F,
          clients: (/* @__PURE__ */ new Set()).add(F),
          value: null,
          predicate: null
        });
      };
  }), ft(() => {
    wt(Yt(() => f(be)), y()) || L(be, y());
  });
  function ue() {
    Oe(null), ve(null), q()?.(null), L(be, null);
  }
  let pe = /* @__PURE__ */ k(() => new Gu(r(), {
    table: t.table,
    x: t.x,
    y: t.y,
    category: n(),
    text: i(),
    identifier: o(),
    additionalFields: u()
  }));
  async function We(F, U, I) {
    return await f(pe).queryClosestPoint(a()?.predicate?.(f(K)), F, U, I);
  }
  async function Pe(F) {
    return await f(pe).queryPoints(F);
  }
  async function Be(F) {
    if (i() == null)
      return F.map(() => null);
    let U = await pu({
      regions: F,
      stopWords: _()?.autoLabelStopWords ?? null
    }), I = 0, fe = 1e4, re = null;
    for (; ; ) {
      let Ae = await r().query(x.Query.from(t.table).select({
        x: x.column(t.x),
        y: x.column(t.y),
        text: x.column(i())
      }).offset(I).limit(fe)), lt = {
        x: Ae.getChild("x").toArray(),
        y: Ae.getChild("y").toArray(),
        text: Ae.getChild("text").toArray()
      };
      if (re != null && await re, re = xu(U, lt), Ae.getChild("text").length < fe)
        break;
      I += fe;
    }
    re != null && await re;
    let je = await _u(U);
    return await mu(U), je.map((Ae) => Ae.length == 0 ? null : Ae.length > 2 ? Ae.slice(0, 2).join("-") + `-
` + Ae.slice(2).join("-") : Ae.join("-"));
  }
  {
    let F = /* @__PURE__ */ k(() => v() ?? 800), U = /* @__PURE__ */ k(() => h() ?? 800), I = /* @__PURE__ */ k(() => p() ?? 2), fe = /* @__PURE__ */ k(() => ({
      x: f(J),
      y: f(G),
      category: f(ge)
    }));
    Ka(e, {
      get width() {
        return f(F);
      },
      get height() {
        return f(U);
      },
      get pixelRatio() {
        return f(I);
      },
      get theme() {
        return m();
      },
      get config() {
        return _();
      },
      get data() {
        return f(fe);
      },
      get totalCount() {
        return f(De);
      },
      get maxDensity() {
        return f(ae);
      },
      get categoryCount() {
        return f(te);
      },
      get categoryColors() {
        return s();
      },
      get defaultViewportState() {
        return f(z);
      },
      querySelection: We,
      queryClusterLabels: Be,
      get labels() {
        return b();
      },
      get customTooltip() {
        return S();
      },
      get customOverlay() {
        return M();
      },
      get tooltip() {
        return f(oe);
      },
      onTooltip: ve,
      get selection() {
        return f(le);
      },
      onSelection: Oe,
      get viewportState() {
        return g();
      },
      get onViewportState() {
        return C();
      },
      get rangeSelection() {
        return f(be);
      },
      onRangeSelection: (re) => {
        L(be, re), q()?.(re);
      },
      get cache() {
        return Z();
      }
    });
  }
  Ct();
}
class Ku {
  component;
  currentProps;
  constructor(t, r) {
    this.currentProps = { ...r }, this.component = Fa({ component: Vu, target: t, props: r });
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
function Qu() {
  return Si() ? 32 : 4;
}
export {
  ju as EmbeddingView,
  Ku as EmbeddingViewMosaic,
  jr as defaultCategoryColors,
  Qu as maxDensityModeCategories
};
