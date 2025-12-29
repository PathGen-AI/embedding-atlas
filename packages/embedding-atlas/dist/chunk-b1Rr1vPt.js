import { i as We } from "./chunk-DgFtVqg1.js";
import { coordinator as _a, makeClient as ba, isSelection as Yn } from "@uwdata/mosaic-core";
import * as m from "@uwdata/mosaic-sql";
function Mi() {
  return !(navigator.gpu == null || navigator.gpu.requestAdapter == null);
}
function wa(e) {
  return e == 0 && (e = 4), e % 4 != 0 && (e += 4 - e % 4), e;
}
function Jt(e, t, r, n) {
  return (e.buffer == null || e.byteSize != r || e.usage != n) && (e.buffer != null && e.buffer.destroy(), e.buffer = t.createBuffer({ size: wa(r), usage: n }), e.byteSize = r, e.destroy = () => {
    e.buffer?.destroy();
  }), e.buffer;
}
function en(e, t, r, n) {
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
function jn(e, t, r, n, i, a) {
  return (e.texture == null || e.width != r || e.height != n || e.format != i || e.usage != a) && (e.texture != null && e.texture.destroy(), e.texture = t.createTexture({ size: [r, n], format: i, usage: a }), e.destroy = () => {
    e.texture?.destroy();
  }), e.texture;
}
const ve = 2, wn = 4, Or = 8, ht = 16, pt = 32, qt = 64, $r = 128, Ve = 512, xe = 1024, Be = 2048, vt = 4096, Ie = 8192, wt = 16384, qr = 32768, rr = 65536, Wn = 1 << 17, Fi = 1 << 18, lr = 1 << 19, Si = 1 << 20, Lt = 32768, cn = 1 << 21, An = 1 << 22, At = 1 << 23, Ut = Symbol("$state"), Bi = Symbol("legacy props"), Aa = Symbol(""), Zt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Tn = 3, ur = 8, Ta = !1;
var Di = Array.isArray, Ra = Array.prototype.indexOf, Rn = Array.from, Ci = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Pi = Object.getOwnPropertyDescriptors, Ea = Object.prototype, Ma = Array.prototype, En = Object.getPrototypeOf, Hn = Object.isExtensible;
function Fa(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ui() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
function ki(e) {
  return e === this.v;
}
function Ni(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ii(e) {
  return !Ni(e, this.v);
}
function Li(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Sa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ba(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Da() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ca(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pa() {
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
let $a = !1;
const Oi = 1, $i = 2, qi = 4, qa = 8, za = 16, Ga = 1, Va = 4, Xa = 8, Ya = 16, ja = 1, Wa = 2, zi = "[", zr = "[!", Mn = "]", nr = {}, me = Symbol(), Ha = "http://www.w3.org/1999/xhtml";
let De = null;
function ir(e) {
  De = e;
}
function Et(e, t = !1, r) {
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
function Mt(e) {
  var t = (
    /** @type {ComponentContext} */
    De
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      mo(n);
  }
  return t.i = !0, De = t.p, /** @type {T} */
  {};
}
function Gi() {
  return !0;
}
let Dt = [];
function Vi() {
  var e = Dt;
  Dt = [], Fa(e);
}
function sr(e) {
  if (Dt.length === 0 && !gr) {
    var t = Dt;
    queueMicrotask(() => {
      t === Dt && Vi();
    });
  }
  Dt.push(e);
}
function Qa() {
  for (; Dt.length > 0; )
    Vi();
}
function Gr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Za() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Y = !1;
function ft(e) {
  Y = e;
}
let X;
function Fe(e) {
  if (e === null)
    throw Gr(), nr;
  return X = e;
}
function Tr() {
  return Fe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ nt(X)
  );
}
function ce(e) {
  if (Y) {
    if (/* @__PURE__ */ nt(X) !== null)
      throw Gr(), nr;
    X = e;
  }
}
function Xi(e = 1) {
  if (Y) {
    for (var t = e, r = X; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ nt(r);
    X = r;
  }
}
function Ur(e = !0) {
  for (var t = 0, r = X; ; ) {
    if (r.nodeType === ur) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Mn) {
        if (t === 0) return r;
        t -= 1;
      } else (n === zi || n === zr) && (t += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nt(r)
    );
    e && r.remove(), r = i;
  }
}
function Yi(e) {
  if (!e || e.nodeType !== ur)
    throw Gr(), nr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Ct(e) {
  if (typeof e != "object" || e === null || Ut in e)
    return e;
  const t = En(e);
  if (t !== Ea && t !== Ma)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Di(e), i = /* @__PURE__ */ K(0), a = Nt, o = (l) => {
    if (Nt === a)
      return l();
    var u = G, s = Nt;
    Ee(null), ei(a);
    var f = l();
    return Ee(u), ei(s), f;
  };
  return n && r.set("length", /* @__PURE__ */ K(
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
          var d = /* @__PURE__ */ K(s.value);
          return r.set(u, d), d;
        }) : N(f, s.value, !0), !0;
      },
      deleteProperty(l, u) {
        var s = r.get(u);
        if (s === void 0) {
          if (u in l) {
            const f = o(() => /* @__PURE__ */ K(me));
            r.set(u, f), yr(i);
          }
        } else
          N(s, me), yr(i);
        return !0;
      },
      get(l, u, s) {
        if (u === Ut)
          return e;
        var f = r.get(u), d = u in l;
        if (f === void 0 && (!d || Kt(l, u)?.writable) && (f = o(() => {
          var h = Ct(d ? l[u] : me), v = /* @__PURE__ */ K(h);
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
        if (s !== void 0 || j !== null && (!f || Kt(l, u)?.writable)) {
          s === void 0 && (s = o(() => {
            var p = f ? Ct(l[u]) : me, h = /* @__PURE__ */ K(p);
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
            v !== void 0 ? N(v, me) : h in l && (v = o(() => /* @__PURE__ */ K(me)), r.set(h + "", v));
          }
        if (d === void 0)
          (!p || Kt(l, u)?.writable) && (d = o(() => /* @__PURE__ */ K(void 0)), N(d, Ct(s)), r.set(u, d));
        else {
          p = d.v !== me;
          var g = o(() => Ct(s));
          N(d, g);
        }
        var x = Reflect.getOwnPropertyDescriptor(l, u);
        if (x?.set && x.set.call(f, s), !p) {
          if (n && typeof u == "string") {
            var y = (
              /** @type {Source<number>} */
              r.get("length")
            ), _ = Number(u);
            Number.isInteger(_) && _ >= y.v && N(y, _ + 1);
          }
          yr(i);
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
var Qn, ji, Wi, Hi;
function dn() {
  if (Qn === void 0) {
    Qn = window, ji = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Wi = Kt(t, "firstChild").get, Hi = Kt(t, "nextSibling").get, Hn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Hn(r) && (r.__t = void 0);
  }
}
function Xe(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return Wi.call(e);
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return Hi.call(e);
}
function pe(e, t) {
  if (!Y)
    return /* @__PURE__ */ dt(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ dt(X)
  );
  if (r === null)
    r = X.appendChild(Xe());
  else if (t && r.nodeType !== Tn) {
    var n = Xe();
    return r?.before(n), Fe(n), n;
  }
  return Fe(r), r;
}
function Qt(e, t = !1) {
  if (!Y) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ dt(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ nt(r) : r;
  }
  if (t && X?.nodeType !== Tn) {
    var n = Xe();
    return X?.before(n), Fe(n), n;
  }
  return X;
}
function ne(e, t = 1, r = !1) {
  let n = Y ? X : e;
  for (var i; t--; )
    i = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ nt(n);
  if (!Y)
    return n;
  if (r && n?.nodeType !== Tn) {
    var a = Xe();
    return n === null ? i?.after(a) : n.before(a), Fe(a), a;
  }
  return Fe(n), /** @type {TemplateNode} */
  n;
}
function Qi(e) {
  e.textContent = "";
}
function Zi() {
  return !1;
}
function Ji(e) {
  var t = j;
  if (t === null)
    return G.f |= At, e;
  if ((t.f & qr) === 0) {
    if ((t.f & $r) === 0)
      throw e;
    t.b.error(e);
  } else
    or(e, t);
}
function or(e, t) {
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
let se = null, ke = null, Qe = [], Vr = null, hn = !1, gr = !1;
class Ze {
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
  is_deferred() {
    return this.is_fork || this.#n > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    Qe = [], this.apply();
    var r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const n of t)
      this.#i(n, r);
    this.is_fork || this.#f(), this.is_deferred() ? (this.#o(r.effects), this.#o(r.render_effects), this.#o(r.block_effects)) : (se = null, Zn(r.render_effects), Zn(r.effects), this.#u?.resolve()), ke = null;
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
        a ? n.f ^= xe : (i & wn) !== 0 ? r.effects.push(n) : Rr(n) && ((n.f & ht) !== 0 && r.block_effects.push(n), br(n));
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
      ((r.f & Be) !== 0 ? this.#l : this.#a).push(r), this.#s(r.deps), _e(r, xe);
  }
  /**
   * @param {Value[] | null} deps
   */
  #s(t) {
    if (t !== null)
      for (const r of t)
        (r.f & ve) === 0 || (r.f & Lt) === 0 || (r.f ^= Lt, this.#s(
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
    this.previous.has(t) || this.previous.set(t, r), (t.f & At) === 0 && (this.current.set(t, t.v), ke?.set(t, t.v));
  }
  activate() {
    se = this, this.apply();
  }
  deactivate() {
    se === this && (se = null, ke = null);
  }
  flush() {
    if (this.activate(), Qe.length > 0) {
      if (Ki(), se !== null && se !== this)
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
            eo(s, o, l, u);
          if (Qe.length > 0) {
            se = i, i.apply();
            for (const s of Qe)
              i.#i(s, n);
            Qe = [], i.deactivate();
          }
        }
      }
      se = null, ke = t;
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
      _e(t, Be), Ot(t);
    for (const t of this.#a)
      _e(t, vt), Ot(t);
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
    return (this.#u ??= Ui()).promise;
  }
  static ensure() {
    if (se === null) {
      const t = se = new Ze();
      Sr.add(se), gr || Ze.enqueue(() => {
        se === t && t.flush();
      });
    }
    return se;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    sr(t);
  }
  apply() {
  }
}
function Ja(e) {
  var t = gr;
  gr = !0;
  try {
    for (var r; ; ) {
      if (Qa(), Qe.length === 0 && (se?.flush(), Qe.length === 0))
        return Vr = null, /** @type {T} */
        r;
      Ki();
    }
  } finally {
    gr = t;
  }
}
function Ki() {
  var e = kt;
  hn = !0;
  try {
    var t = 0;
    for (Jn(!0); Qe.length > 0; ) {
      var r = Ze.ensure();
      if (t++ > 1e3) {
        var n, i;
        Ka();
      }
      r.process(Qe), Tt.clear();
    }
  } finally {
    hn = !1, Jn(e), Vr = null;
  }
}
function Ka() {
  try {
    Pa();
  } catch (e) {
    or(e, Vr);
  }
}
let st = null;
function Zn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (wt | Ie)) === 0 && Rr(n) && (st = /* @__PURE__ */ new Set(), br(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? wo(n) : n.fn = null), st?.size > 0)) {
        Tt.clear();
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
function eo(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & ve) !== 0 ? eo(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (An | ht)) !== 0 && (a & Be) === 0 && // we may have scheduled this one already
      to(i, t, n) && (_e(i, Be), Ot(
        /** @type {Effect} */
        i
      ));
    }
}
function to(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (t.includes(i))
        return !0;
      if ((i.f & ve) !== 0 && to(
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
  for (var t = Vr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (hn && t === j && (r & ht) !== 0 && (r & Fi) === 0)
      return;
    if ((r & (qt | pt)) !== 0) {
      if ((r & xe) === 0) return;
      t.f ^= xe;
    }
  }
  Qe.push(t);
}
function el(e) {
  let t = 0, r = $t(0), n;
  return () => {
    Yr() && (c(r), Bn(() => (t === 0 && (n = Gt(() => e(() => yr(r)))), t += 1, () => {
      sr(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, yr(r));
      });
    })));
  };
}
var tl = rr | lr | $r;
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
  #r = Y ? X : null;
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
  #c = 0;
  #d = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #x = el(() => (this.#h = $t(this.#c), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    this.#e = t, this.#n = r, this.#u = n, this.parent = /** @type {Effect} */
    j.b, this.#t = !!this.#n.pending, this.#l = jr(() => {
      if (j.b = this, Y) {
        const a = this.#r;
        Tr(), /** @type {Comment} */
        a.nodeType === ur && /** @type {Comment} */
        a.data === zr ? this.#b() : this.#_();
      } else {
        var i = this.#y();
        try {
          this.#a = ze(() => n(i));
        } catch (a) {
          this.error(a);
        }
        this.#d > 0 ? this.#g() : this.#t = !1;
      }
      return () => {
        this.#f?.remove();
      };
    }, tl), Y && (this.#e = X);
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
    t && (this.#i = ze(() => t(this.#e)), Ze.enqueue(() => {
      var r = this.#y();
      this.#a = this.#v(() => (Ze.ensure(), ze(() => this.#u(r)))), this.#d > 0 ? this.#g() : (er(
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
    return this.#t && (this.#f = Xe(), this.#e.before(this.#f), t = this.#f), t;
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
    var r = j, n = G, i = De;
    tt(this.#l), Ee(this.#l), ir(this.#l.ctx);
    try {
      return t();
    } catch (a) {
      return Ji(a), null;
    } finally {
      tt(r), Ee(n), ir(i);
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
    this.#d += t, this.#d === 0 && (this.#t = !1, this.#i && er(this.#i, () => {
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
    this.#m(t), this.#c += t, this.#h && ar(this.#h, this.#c);
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
    this.#a && (Se(this.#a), this.#a = null), this.#i && (Se(this.#i), this.#i = null), this.#o && (Se(this.#o), this.#o = null), Y && (Fe(
      /** @type {TemplateNode} */
      this.#r
    ), Xi(), Fe(Ur()));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        Za();
        return;
      }
      i = !0, a && Oa(), Ze.ensure(), this.#c = 0, this.#o !== null && er(this.#o, () => {
        this.#o = null;
      }), this.#t = this.has_pending_snippet(), this.#a = this.#v(() => (this.#p = !1, ze(() => this.#u(this.#e)))), this.#d > 0 ? this.#g() : this.#t = !1;
    };
    var l = G;
    try {
      Ee(null), a = !0, r?.(t, o), a = !1;
    } catch (u) {
      or(u, this.#l && this.#l.parent);
    } finally {
      Ee(l);
    }
    n && sr(() => {
      this.#o = this.#v(() => {
        Ze.ensure(), this.#p = !0;
        try {
          return ze(() => {
            n(
              this.#e,
              () => t,
              () => o
            );
          });
        } catch (u) {
          return or(
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
function il(e, t, r, n) {
  const i = Xr;
  if (r.length === 0 && e.length === 0) {
    n(t.map(i));
    return;
  }
  var a = se, o = (
    /** @type {Effect} */
    j
  ), l = ol();
  function u() {
    Promise.all(r.map((s) => /* @__PURE__ */ al(s))).then((s) => {
      l();
      try {
        n([...t.map(i), ...s]);
      } catch (f) {
        (o.f & wt) === 0 && or(f, o);
      }
      a?.deactivate(), kr();
    }).catch((s) => {
      or(s, o);
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
function ol() {
  var e = j, t = G, r = De, n = se;
  return function(i = !0) {
    tt(e), Ee(t), ir(r), i && n?.activate();
  };
}
function kr() {
  tt(null), Ee(null), ir(null);
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  var t = ve | Be, r = G !== null && (G.f & ve) !== 0 ? (
    /** @type {Derived} */
    G
  ) : null;
  return j !== null && (j.f |= lr), {
    ctx: De,
    deps: null,
    effects: null,
    equals: ki,
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
function al(e, t) {
  let r = (
    /** @type {Effect | null} */
    j
  );
  r === null && Sa();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = $t(
    /** @type {V} */
    me
  ), o = !G, l = /* @__PURE__ */ new Map();
  return vl(() => {
    var u = Ui();
    i = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        s === se && s.committed && s.deactivate(), kr();
      });
    } catch (p) {
      u.reject(p), kr();
    }
    var s = (
      /** @type {Batch} */
      se
    );
    if (o) {
      var f = !n.is_pending();
      n.update_pending_count(1), s.increment(f), l.get(s)?.reject(Zt), l.delete(s), l.set(s, u);
    }
    const d = (p, h = void 0) => {
      if (s.activate(), h)
        h !== Zt && (a.f |= At, ar(a, h));
      else {
        (a.f & At) !== 0 && (a.f ^= At), ar(a, p);
        for (const [v, g] of l) {
          if (l.delete(v), v === s) break;
          g.reject(Zt);
        }
      }
      o && (n.update_pending_count(-1), s.decrement(f));
    };
    u.promise.then(d, (p) => d(null, p || "unknown"));
  }), yo(() => {
    for (const u of l.values())
      u.reject(Zt);
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
function P(e) {
  const t = /* @__PURE__ */ Xr(e);
  return uo(t), t;
}
// @__NO_SIDE_EFFECTS__
function ro(e) {
  const t = /* @__PURE__ */ Xr(e);
  return t.equals = Ii, t;
}
function no(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Se(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ll(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ve) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Fn(e) {
  var t, r = j;
  tt(ll(e));
  try {
    e.f &= ~Lt, no(e), t = ho(e);
  } finally {
    tt(r);
  }
  return t;
}
function io(e) {
  var t = Fn(e);
  if (e.equals(t) || (e.v = t, e.wv = fo()), !zt)
    if (ke !== null)
      Yr() && ke.set(e, e.v);
    else {
      var r = (e.f & Ve) === 0 ? vt : xe;
      _e(e, r);
    }
}
let pn = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
let oo = !1;
function $t(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ki,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const r = $t(e);
  return uo(r), r;
}
// @__NO_SIDE_EFFECTS__
function ao(e, t = !1, r = !0) {
  const n = $t(e);
  return t || (n.equals = Ii), n;
}
function N(e, t, r = !1) {
  G !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Je || (G.f & Wn) !== 0) && Gi() && (G.f & (ve | ht | An | Wn)) !== 0 && !ct?.includes(e) && La();
  let n = r ? Ct(t) : t;
  return ar(e, n);
}
function ar(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    zt ? Tt.set(e, t) : Tt.set(e, r), e.v = t;
    var n = Ze.ensure();
    n.capture(e, r), (e.f & ve) !== 0 && ((e.f & Be) !== 0 && Fn(
      /** @type {Derived} */
      e
    ), _e(e, (e.f & Ve) !== 0 ? xe : vt)), e.wv = fo(), lo(e, Be), j !== null && (j.f & xe) !== 0 && (j.f & (pt | qt)) === 0 && (Oe === null ? sl([e]) : Oe.push(e)), !n.is_fork && pn.size > 0 && !oo && ul();
  }
  return t;
}
function ul() {
  oo = !1;
  const e = Array.from(pn);
  for (const t of e)
    (t.f & xe) !== 0 && _e(t, vt), Rr(t) && br(t);
  pn.clear();
}
function yr(e) {
  N(e, e.v + 1);
}
function lo(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], o = a.f, l = (o & Be) === 0;
      if (l && _e(a, t), (o & ve) !== 0) {
        var u = (
          /** @type {Derived} */
          a
        );
        ke?.delete(u), (o & Lt) === 0 && (o & Ve && (a.f |= Lt), lo(u, vt));
      } else l && ((o & ht) !== 0 && st !== null && st.add(
        /** @type {Effect} */
        a
      ), Ot(
        /** @type {Effect} */
        a
      ));
    }
}
function Sn(e) {
  var t = G, r = j;
  Ee(null), tt(null);
  try {
    return e();
  } finally {
    Ee(t), tt(r);
  }
}
let kt = !1;
function Jn(e) {
  kt = e;
}
let zt = !1;
function Kn(e) {
  zt = e;
}
let G = null, Je = !1;
function Ee(e) {
  G = e;
}
let j = null;
function tt(e) {
  j = e;
}
let ct = null;
function uo(e) {
  G !== null && (ct === null ? ct = [e] : ct.push(e));
}
let Ae = null, Ue = 0, Oe = null;
function sl(e) {
  Oe = e;
}
let so = 1, _r = 0, Nt = _r;
function ei(e) {
  Nt = e;
}
function fo() {
  return ++so;
}
function Rr(e) {
  var t = e.f;
  if ((t & Be) !== 0)
    return !0;
  if (t & ve && (e.f &= ~Lt), (t & vt) !== 0) {
    var r = e.deps;
    if (r !== null)
      for (var n = r.length, i = 0; i < n; i++) {
        var a = r[i];
        if (Rr(
          /** @type {Derived} */
          a
        ) && io(
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
function co(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !ct?.includes(e))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & ve) !== 0 ? co(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? _e(a, Be) : (a.f & xe) !== 0 && _e(a, vt), Ot(
        /** @type {Effect} */
        a
      ));
    }
}
function ho(e) {
  var t = Ae, r = Ue, n = Oe, i = G, a = ct, o = De, l = Je, u = Nt, s = e.f;
  Ae = /** @type {null | Value[]} */
  null, Ue = 0, Oe = null, G = (s & (pt | qt)) === 0 ? e : null, ct = null, ir(e.ctx), Je = !1, Nt = ++_r, e.ac !== null && (Sn(() => {
    e.ac.abort(Zt);
  }), e.ac = null);
  try {
    e.f |= cn;
    var f = (
      /** @type {Function} */
      e.fn
    ), d = f(), p = e.deps;
    if (Ae !== null) {
      var h;
      if (Nr(e, Ue), p !== null && Ue > 0)
        for (p.length = Ue + Ae.length, h = 0; h < Ae.length; h++)
          p[Ue + h] = Ae[h];
      else
        e.deps = p = Ae;
      if (kt && Yr() && (e.f & Ve) !== 0)
        for (h = Ue; h < p.length; h++)
          (p[h].reactions ??= []).push(e);
    } else p !== null && Ue < p.length && (Nr(e, Ue), p.length = Ue);
    if (Gi() && Oe !== null && !Je && p !== null && (e.f & (ve | vt | Be)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Oe.length; h++)
        co(
          Oe[h],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (_r++, Oe !== null && (n === null ? n = Oe : n.push(.../** @type {Source[]} */
    Oe))), (e.f & At) !== 0 && (e.f ^= At), d;
  } catch (v) {
    return Ji(v);
  } finally {
    e.f ^= cn, Ae = t, Ue = r, Oe = n, G = i, ct = a, ir(o), Je = l, Nt = u;
  }
}
function fl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ra.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && (t.f & ve) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ae === null || !Ae.includes(t)) && (_e(t, vt), (t.f & Ve) !== 0 && (t.f ^= Ve, t.f &= ~Lt), no(
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
  if ((t & wt) === 0) {
    _e(e, xe);
    var r = j, n = kt;
    j = e, kt = !0;
    try {
      (t & ht) !== 0 ? gl(e) : bo(e), _o(e);
      var i = ho(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = so;
      var a;
      Ta && $a && (e.f & Be) !== 0 && e.deps;
    } finally {
      kt = n, j = r;
    }
  }
}
function c(e) {
  var t = e.f, r = (t & ve) !== 0;
  if (G !== null && !Je) {
    var n = j !== null && (j.f & wt) !== 0;
    if (!n && !ct?.includes(e)) {
      var i = G.deps;
      if ((G.f & cn) !== 0)
        e.rv < _r && (e.rv = _r, Ae === null && i !== null && i[Ue] === e ? Ue++ : Ae === null ? Ae = [e] : Ae.includes(e) || Ae.push(e));
      else {
        (G.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [G] : a.includes(G) || a.push(G);
      }
    }
  }
  if (zt) {
    if (Tt.has(e))
      return Tt.get(e);
    if (r) {
      var o = (
        /** @type {Derived} */
        e
      ), l = o.v;
      return ((o.f & xe) === 0 && o.reactions !== null || vo(o)) && (l = Fn(o)), Tt.set(o, l), l;
    }
  } else if (r) {
    if (o = /** @type {Derived} */
    e, ke?.has(o))
      return ke.get(o);
    Rr(o) && io(o), kt && Yr() && (o.f & Ve) === 0 && po(o);
  } else if (ke?.has(e))
    return ke.get(e);
  if ((e.f & At) !== 0)
    throw e.v;
  return e.v;
}
function po(e) {
  if (e.deps !== null) {
    e.f ^= Ve;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ve) !== 0 && (t.f & Ve) === 0 && po(
        /** @type {Derived} */
        t
      );
  }
}
function vo(e) {
  if (e.v === me) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tt.has(t) || (t.f & ve) !== 0 && vo(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Gt(e) {
  var t = Je;
  try {
    return Je = !0, e();
  } finally {
    Je = t;
  }
}
const cl = -7169;
function _e(e, t) {
  e.f = e.f & cl | t;
}
function dl(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ut in e)
      vn(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Ut in r && vn(r);
      }
  }
}
function vn(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        vn(e[n], t);
      } catch {
      }
    const r = En(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = Pi(r);
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
function go(e) {
  j === null && (G === null && Ca(), Da()), zt && Ba();
}
function hl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r) {
  var n = j;
  n !== null && (n.f & Ie) !== 0 && (e |= Ie);
  var i = {
    ctx: De,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Be | Ve,
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
    } catch (l) {
      throw Se(i), l;
    }
  else t !== null && Ot(i);
  var a = i;
  if (r && a.deps === null && a.teardown === null && a.nodes_start === null && a.first === a.last && // either `null`, or a singular child
  (a.f & lr) === 0 && (a = a.first, (e & ht) !== 0 && (e & rr) !== 0 && a !== null && (a.f |= rr)), a !== null && (a.parent = n, n !== null && hl(a, n), G !== null && (G.f & ve) !== 0 && (e & qt) === 0)) {
    var o = (
      /** @type {Derived} */
      G
    );
    (o.effects ??= []).push(a);
  }
  return i;
}
function Yr() {
  return G !== null && !Je;
}
function yo(e) {
  const t = it(Or, null, !1);
  return _e(t, xe), t.teardown = e, t;
}
function ut(e) {
  go();
  var t = (
    /** @type {Effect} */
    j.f
  ), r = !G && (t & pt) !== 0 && (t & qr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      De
    );
    (n.e ??= []).push(e);
  } else
    return mo(e);
}
function mo(e) {
  return it(wn | Si, e, !1);
}
function mr(e) {
  return go(), it(Or | Si, e, !0);
}
function pl(e) {
  Ze.ensure();
  const t = it(qt | lr, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? er(t, () => {
      Se(t), n(void 0);
    }) : (Se(t), n(void 0));
  });
}
function xo(e) {
  return it(wn, e, !1);
}
function vl(e) {
  return it(An | lr, e, !0);
}
function Bn(e, t = 0) {
  return it(Or | t, e, !0);
}
function Ne(e, t = [], r = [], n = []) {
  il(n, t, r, (i) => {
    it(Or, () => e(...i.map(c)), !0);
  });
}
function jr(e, t = 0) {
  var r = it(ht | t, e, !0);
  return r;
}
function ze(e) {
  return it(pt | lr, e, !0);
}
function _o(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = zt, n = G;
    Kn(!0), Ee(null);
    try {
      t.call(null);
    } finally {
      Kn(r), Ee(n);
    }
  }
}
function bo(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Sn(() => {
      i.abort(Zt);
    });
    var n = r.next;
    (r.f & qt) !== 0 ? r.parent = null : Se(r, t), r = n;
  }
}
function gl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & pt) === 0 && Se(t), t = r;
  }
}
function Se(e, t = !0) {
  var r = !1;
  (t || (e.f & Fi) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (yl(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), bo(e, t && !r), Nr(e, 0), _e(e, wt);
  var n = e.transitions;
  if (n !== null)
    for (const a of n)
      a.stop();
  _o(e);
  var i = e.parent;
  i !== null && i.first !== null && wo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function yl(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ nt(e)
    );
    e.remove(), e = r;
  }
}
function wo(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function er(e, t, r = !0) {
  var n = [];
  Dn(e, n, !0), Ao(n, () => {
    r && Se(e), t && t();
  });
}
function Ao(e, t) {
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
      var i = n.next, a = (n.f & rr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (n.f & pt) !== 0 && (e.f & ht) !== 0;
      Dn(n, t, a ? r : !1), n = i;
    }
  }
}
function Cn(e) {
  To(e, !0);
}
function To(e, t) {
  if ((e.f & Ie) !== 0) {
    e.f ^= Ie, (e.f & xe) === 0 && (_e(e, Be), Ot(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & rr) !== 0 || (r.f & pt) !== 0;
      To(r, i ? t : !1), r = n;
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
const Eo = /* @__PURE__ */ new Set(), gn = /* @__PURE__ */ new Set();
function ml(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || vr.call(t, a), !a.cancelBubble)
      return Sn(() => r?.call(this, a));
  }
  return sr(() => {
    t.addEventListener(e, i, n);
  }), i;
}
function xl(e, t, r, n, i) {
  var a = { capture: n, passive: i }, o = ml(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && yo(() => {
    t.removeEventListener(e, o, a);
  });
}
function _l(e) {
  for (var t = 0; t < e.length; t++)
    Eo.add(e[t]);
  for (var r of gn)
    r(e);
}
let ti = null;
function vr(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ti = e;
  var o = 0, l = ti === e && e.__root;
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
    Ci(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = G, d = j;
    Ee(null), tt(null);
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
        } catch (x) {
          p ? h.push(x) : p = x;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        a = v;
      }
      if (p) {
        for (let x of h)
          queueMicrotask(() => {
            throw x;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ee(f), tt(d);
    }
  }
}
function Mo(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Rt(e, t) {
  var r = (
    /** @type {Effect} */
    j
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ft(e, t) {
  var r = (t & ja) !== 0, n = (t & Wa) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (Y)
      return Rt(X, null), X;
    i === void 0 && (i = Mo(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ dt(i)));
    var o = (
      /** @type {TemplateNode} */
      n || ji ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dt(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Rt(l, u);
    } else
      Rt(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function bl(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (Y)
      return Rt(X, null), X;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        Mo(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ dt(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ dt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Rt(u, u), u;
  };
}
// @__NO_SIDE_EFFECTS__
function gt(e, t) {
  return /* @__PURE__ */ bl(e, t, "svg");
}
function dr() {
  if (Y)
    return Rt(X, null), X;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Xe();
  return e.append(t, r), Rt(t, r), e;
}
function ae(e, t) {
  if (Y) {
    var r = (
      /** @type {Effect} */
      j
    );
    ((r.f & qr) === 0 || r.nodes_end === null) && (r.nodes_end = X), Tr();
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
function xr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function Fo(e, t) {
  return So(e, t);
}
function Tl(e, t) {
  dn(), t.intro = t.intro ?? !1;
  const r = t.target, n = Y, i = X;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ dt(r)
    ); a && (a.nodeType !== ur || /** @type {Comment} */
    a.data !== zi); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ nt(a);
    if (!a)
      throw nr;
    ft(!0), Fe(
      /** @type {Comment} */
      a
    );
    const o = So(e, { ...t, anchor: a });
    return ft(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== nr && console.warn("Failed to hydrate: ", o), t.recover === !1 && Ua(), dn(), Qi(r), ft(!1), Fo(e, t);
  } finally {
    ft(n), Fe(i);
  }
}
const Ht = /* @__PURE__ */ new Map();
function So(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: o = !0 }) {
  dn();
  var l = /* @__PURE__ */ new Set(), u = (d) => {
    for (var p = 0; p < d.length; p++) {
      var h = d[p];
      if (!l.has(h)) {
        l.add(h);
        var v = Al(h);
        t.addEventListener(h, vr, { passive: v });
        var g = Ht.get(h);
        g === void 0 ? (document.addEventListener(h, vr, { passive: v }), Ht.set(h, 1)) : Ht.set(h, g + 1);
      }
    }
  };
  u(Rn(Eo)), gn.add(u);
  var s = void 0, f = pl(() => {
    var d = r ?? t.appendChild(Xe());
    return rl(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (p) => {
        if (a) {
          Et({});
          var h = (
            /** @type {ComponentContext} */
            De
          );
          h.c = a;
        }
        if (i && (n.$$events = i), Y && Rt(
          /** @type {TemplateNode} */
          p,
          null
        ), s = e(p, n) || {}, Y && (j.nodes_end = X, X === null || X.nodeType !== ur || /** @type {Comment} */
        X.data !== Mn))
          throw Gr(), nr;
        a && Mt();
      }
    ), () => {
      for (var p of l) {
        t.removeEventListener(p, vr);
        var h = (
          /** @type {number} */
          Ht.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, vr), Ht.delete(p)) : Ht.set(p, h);
      }
      gn.delete(u), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return yn.set(s, f), s;
}
let yn = /* @__PURE__ */ new WeakMap();
function Rl(e, t) {
  const r = yn.get(e);
  return r ? (yn.delete(e), r(t)) : Promise.resolve();
}
function Bo(e) {
  return new El(e);
}
class El {
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
      var l = /* @__PURE__ */ ao(o, !1, !1);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return c(r.get(o) ?? n(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Bi ? !0 : (c(r.get(o) ?? n(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return N(r.get(o) ?? n(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    this.#e = (t.hydrate ? Tl : Fo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && Ja(), this.#t = i.$$events;
    for (const a of Object.keys(this.#e))
      a === "$set" || a === "$destroy" || a === "$on" || Ci(this, a, {
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
const Ml = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ml);
class Do {
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
      se
    );
    if (this.#t.has(t)) {
      var r = (
        /** @type {Key} */
        this.#t.get(t)
      ), n = this.#e.get(r);
      if (n)
        Cn(n);
      else {
        var i = this.#r.get(r);
        i && (this.#e.set(r, i.effect), this.#r.delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
      }
      for (const [a, o] of this.#t) {
        if (this.#t.delete(a), a === t)
          break;
        const l = this.#r.get(o);
        l && (Se(l.effect), this.#r.delete(o));
      }
      for (const [a, o] of this.#e) {
        if (a === r) continue;
        const l = () => {
          if (Array.from(this.#t.values()).includes(a)) {
            var u = document.createDocumentFragment();
            Ro(o, u), u.append(Xe()), this.#r.set(a, { effect: o, fragment: u });
          } else
            Se(o);
          this.#e.delete(a);
        };
        this.#n || !n ? er(o, l, !1) : l();
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
      r.includes(n) || (Se(i.effect), this.#r.delete(n));
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
    ), i = Zi();
    r && !this.#e.has(t) && !this.#r.has(t) && this.#e.set(
      t,
      ze(() => r(this.anchor))
    ), this.#t.set(n, t), i || (Y && (this.anchor = X), this.#u());
  }
}
function Pn(e) {
  De === null && Li(), ut(() => {
    const t = Gt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Fl(e) {
  De === null && Li(), Pn(() => () => Gt(e));
}
function Re(e, t, r = !1) {
  Y && Tr();
  var n = new Do(e), i = r ? rr : 0;
  function a(o, l) {
    if (Y) {
      const s = Yi(e) === zr;
      if (o === s) {
        var u = Ur();
        Fe(u), n.anchor = u, ft(!1), n.ensure(o, l), ft(!0);
        return;
      }
    }
    n.ensure(o, l);
  }
  jr(() => {
    var o = !1;
    t((l, u = !0) => {
      o = !0, a(u, l);
    }), o || a(!1, null);
  }, i);
}
function Sl(e, t, r) {
  Y && Tr();
  var n = new Do(e);
  jr(() => {
    var i = t();
    n.ensure(i, r);
  });
}
function tn(e, t) {
  return t;
}
function Bl(e, t, r) {
  for (var n = [], i = t.length, a = 0; a < i; a++)
    Dn(t[a].e, n, !0);
  Ao(n, () => {
    var o = n.length === 0 && r !== null;
    if (o) {
      var l = (
        /** @type {Element} */
        r
      ), u = (
        /** @type {Element} */
        l.parentNode
      );
      Qi(u), u.append(l), e.items.clear(), He(e, t[0].prev, t[i - 1].next);
    }
    for (var s = 0; s < i; s++) {
      var f = t[s];
      o || (e.items.delete(f.k), He(e, f.prev, f.next)), Se(f.e, !o);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function rn(e, t, r, n, i, a = null) {
  var o = e, l = { items: /* @__PURE__ */ new Map(), first: null }, u = (t & qi) !== 0, s = (t & Oi) !== 0, f = (t & $i) !== 0;
  if (u) {
    var d = (
      /** @type {Element} */
      e
    );
    o = Y ? Fe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ dt(d)
    ) : d.appendChild(Xe());
  }
  Y && Tr();
  var p = null, h = /* @__PURE__ */ ro(() => {
    var _ = r();
    return Di(_) ? _ : _ == null ? [] : Rn(_);
  }), v, g = !0;
  function x() {
    Dl(y, v, l, o, t, n), p !== null && (v.length === 0 ? (p.fragment ? (o.before(p.fragment), p.fragment = null) : Cn(p.effect), y.first = p.effect) : er(p.effect, () => {
      p = null;
    }));
  }
  var y = jr(() => {
    v = /** @type {V[]} */
    c(h);
    var _ = v.length;
    let b = !1;
    if (Y) {
      var F = Yi(o) === zr;
      F !== (_ === 0) && (o = Ur(), Fe(o), ft(!1), b = !0);
    }
    for (var R = /* @__PURE__ */ new Set(), D = (
      /** @type {Batch} */
      se
    ), O = null, I = Zi(), q = 0; q < _; q += 1) {
      Y && X.nodeType === ur && /** @type {Comment} */
      X.data === Mn && (o = /** @type {Comment} */
      X, b = !0, ft(!1));
      var H = v[q], Q = n(H, q), W = g ? null : l.items.get(Q);
      W ? (s && ar(W.v, H), f ? ar(
        /** @type {Value<number>} */
        W.i,
        q
      ) : W.i = q, D.skipped_effects.delete(W.e)) : (W = Cl(
        g ? o : null,
        O,
        H,
        Q,
        q,
        i,
        t,
        r
      ), g && (W.o = !0, O === null ? l.first = W : O.next = W, O = W), l.items.set(Q, W)), R.add(Q);
    }
    if (_ === 0 && a && !p)
      if (g)
        p = {
          fragment: null,
          effect: ze(() => a(o))
        };
      else {
        var be = document.createDocumentFragment(), te = Xe();
        be.append(te), p = {
          fragment: be,
          effect: ze(() => a(te))
        };
      }
    Y && _ > 0 && Fe(Ur());
    for (const [Ce, le] of l.items)
      R.has(Ce) || D.skipped_effects.add(le.e);
    g || (I ? (D.oncommit(x), D.ondiscard(() => {
    })) : x()), b && ft(!0), c(h);
  });
  g = !1, Y && (o = X);
}
function Dl(e, t, r, n, i, a) {
  var o = (i & qa) !== 0, l = t.length, u = r.items, s = r.first, f, d = null, p, h = [], v = [], g, x, y, _;
  if (o)
    for (_ = 0; _ < l; _ += 1)
      g = t[_], x = a(g, _), y = /** @type {EachItem} */
      u.get(x), y.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(y);
  for (_ = 0; _ < l; _ += 1) {
    if (g = t[_], x = a(g, _), y = /** @type {EachItem} */
    u.get(x), r.first ??= y, !y.o) {
      y.o = !0;
      var b = d ? d.next : s;
      He(r, d, y), He(r, y, b), nn(y, b, n), d = y, h = [], v = [], s = d.next;
      continue;
    }
    if ((y.e.f & Ie) !== 0 && (Cn(y.e), o && (y.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(y))), y !== s) {
      if (f !== void 0 && f.has(y)) {
        if (h.length < v.length) {
          var F = v[0], R;
          d = F.prev;
          var D = h[0], O = h[h.length - 1];
          for (R = 0; R < h.length; R += 1)
            nn(h[R], F, n);
          for (R = 0; R < v.length; R += 1)
            f.delete(v[R]);
          He(r, D.prev, O.next), He(r, d, D), He(r, O, F), s = F, d = O, _ -= 1, h = [], v = [];
        } else
          f.delete(y), nn(y, s, n), He(r, y.prev, y.next), He(r, y, d === null ? r.first : d.next), He(r, d, y), d = y;
        continue;
      }
      for (h = [], v = []; s !== null && s.k !== x; )
        (s.e.f & Ie) === 0 && (f ??= /* @__PURE__ */ new Set()).add(s), v.push(s), s = s.next;
      if (s === null)
        continue;
      y = s;
    }
    h.push(y), d = y, s = y.next;
  }
  if (s !== null || f !== void 0) {
    for (var I = f === void 0 ? [] : Rn(f); s !== null; )
      (s.e.f & Ie) === 0 && I.push(s), s = s.next;
    var q = I.length;
    if (q > 0) {
      var H = (i & qi) !== 0 && l === 0 ? n : null;
      if (o) {
        for (_ = 0; _ < q; _ += 1)
          I[_].a?.measure();
        for (_ = 0; _ < q; _ += 1)
          I[_].a?.fix();
      }
      Bl(r, I, H);
    }
  }
  o && sr(() => {
    if (p !== void 0)
      for (y of p)
        y.a?.apply();
  }), e.first = r.first && r.first.e, e.last = d && d.e, d && (d.e.next = null);
}
function Cl(e, t, r, n, i, a, o, l) {
  var u = (o & Oi) !== 0, s = (o & za) === 0, f = u ? s ? /* @__PURE__ */ ao(r, !1, !1) : $t(r) : r, d = (o & $i) === 0 ? i : $t(i), p = {
    i: d,
    v: f,
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
      var h = document.createDocumentFragment();
      h.append(e = Xe());
    }
    return p.e = ze(() => a(
      /** @type {Node} */
      e,
      f,
      d,
      l
    )), p.e.prev = t && t.e, t !== null && (t.next = p, t.e.next = p.e), p;
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
function He(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function qe(e, t, r) {
  xo(() => {
    var n = Gt(() => t(e, r?.()) || {});
    if (r && n?.update) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Bn(() => {
        var o = r();
        dl(o), i && Ni(a, o) && (a = o, n.update(o));
      }), i = !0;
    }
    if (n?.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function ri(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var a = e[i];
    a != null && a !== "" && (n += " " + i + ": " + a + r);
  }
  return n;
}
function Pl(e, t) {
  if (t) {
    var r = "", n, i;
    return Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, n && (r += ri(n)), i && (r += ri(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return String(e);
}
function on(e, t = {}, r, n) {
  for (var i in r) {
    var a = r[i];
    t[i] !== a && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, n));
  }
}
function z(e, t, r, n) {
  var i = e.__style;
  if (Y || i !== t) {
    var a = Pl(t, n);
    (!Y || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
  } else n && (Array.isArray(n) ? (on(e, r?.[0], n[0]), on(e, r?.[1], n[1], "important")) : on(e, r, n));
  return n;
}
const Ul = Symbol("is custom element"), kl = Symbol("is html");
function E(e, t, r, n) {
  var i = Nl(e);
  Y && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Aa] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Il(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Nl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ul]: e.nodeName.includes("-"),
      [kl]: e.namespaceURI === Ha
    }
  );
}
var ni = /* @__PURE__ */ new Map();
function Il(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ni.get(t);
  if (r) return r;
  ni.set(t, r = []);
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = Pi(i);
    for (var o in n)
      n[o].set && r.push(o);
    i = En(i);
  }
  return r;
}
function ii(e, t) {
  return e === t || e?.[Ut] === t;
}
function mn(e = {}, t, r, n) {
  return xo(() => {
    var i, a;
    return Bn(() => {
      i = a, a = [], Gt(() => {
        e !== r(...a) && (t(e, ...a), i && ii(r(...i), e) && t(null, ...i));
      });
    }), () => {
      sr(() => {
        a && ii(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
let Br = !1;
function Ll(e) {
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
  ), l = !0, u = () => (l && (l = !1, o = a ? Gt(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), o), s;
  if (i) {
    var f = Ut in e || Bi in e;
    s = Kt(e, t)?.set ?? (f && t in e ? (_) => e[t] = _ : void 0);
  }
  var d, p = !1;
  i ? [d, p] = Ll(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t], d === void 0 && n !== void 0 && (d = u(), s && (ka(), s(d)));
  var h;
  if (h = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? u() : (l = !0, _);
  }, (r & Va) === 0)
    return h;
  if (s) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(_, b) {
        return arguments.length > 0 ? ((!b || v || p) && s(b ? h() : _), _) : h();
      })
    );
  }
  var g = !1, x = ((r & Ga) !== 0 ? Xr : ro)(() => (g = !1, h()));
  i && c(x);
  var y = (
    /** @type {Effect} */
    j
  );
  return (
    /** @type {() => V} */
    (function(_, b) {
      if (arguments.length > 0) {
        const F = b ? c(x) : i ? Ct(_) : _;
        return N(x, F), g = !0, o !== void 0 && (o = F), _;
      }
      return zt && g || (y.f & wt) !== 0 ? x.v : c(x);
    })
  );
}
var Ol = /* @__PURE__ */ gt('<g><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect><rect role="none"></rect></g>');
function $l(e, t) {
  Et(t, !0);
  let r = /* @__PURE__ */ P(() => t.pointLocation(t.value.xMin, t.value.yMin)), n = /* @__PURE__ */ P(() => t.pointLocation(t.value.xMax, t.value.yMax));
  const i = 8;
  function a(x) {
    return (y) => {
      t.preventHover(!0);
      let _ = [c(r).x, c(r).y, c(n).x, c(n).y];
      return {
        move: (b) => {
          let F = b.pageX - y.pageX, R = b.pageY - y.pageY, D = [F, R, F, R].map((q, H) => _[H] + q * x[H]), O = t.coordinateAtPoint(D[0], D[1]), I = t.coordinateAtPoint(D[2], D[3]);
          t.onChange({
            xMin: Math.min(O.x, I.x),
            xMax: Math.max(O.x, I.x),
            yMin: Math.min(O.y, I.y),
            yMax: Math.max(O.y, I.y)
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
  var o = Ol(), l = pe(o);
  z(l, "", {}, {
    stroke: "#fff",
    fill: "rgba(128,128,128,0.25)",
    cursor: "move"
  }), qe(l, (x, y) => We?.(x, y), () => ({ drag: a([1, 1, 1, 1]) }));
  var u = ne(l);
  E(u, "width", i), z(u, "", {}, {
    cursor: "ew-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), qe(u, (x, y) => We?.(x, y), () => ({ drag: a([1, 0, 0, 0]) }));
  var s = ne(u);
  E(s, "width", i), z(s, "", {}, {
    cursor: "ew-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), qe(s, (x, y) => We?.(x, y), () => ({ drag: a([0, 0, 1, 0]) }));
  var f = ne(s);
  E(f, "height", i), z(f, "", {}, {
    cursor: "ns-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), qe(f, (x, y) => We?.(x, y), () => ({ drag: a([0, 1, 0, 0]) }));
  var d = ne(f);
  E(d, "height", i), z(d, "", {}, {
    cursor: "ns-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), qe(d, (x, y) => We?.(x, y), () => ({ drag: a([0, 0, 0, 1]) }));
  var p = ne(d);
  E(p, "width", i), E(p, "height", i), z(p, "", {}, {
    cursor: "nesw-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), qe(p, (x, y) => We?.(x, y), () => ({ drag: a([1, 1, 0, 0]) }));
  var h = ne(p);
  E(h, "width", i), E(h, "height", i), z(h, "", {}, {
    cursor: "nwse-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), qe(h, (x, y) => We?.(x, y), () => ({ drag: a([1, 0, 0, 1]) }));
  var v = ne(h);
  E(v, "width", i), E(v, "height", i), z(v, "", {}, {
    cursor: "nwse-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), qe(v, (x, y) => We?.(x, y), () => ({ drag: a([0, 1, 1, 0]) }));
  var g = ne(v);
  E(g, "width", i), E(g, "height", i), z(g, "", {}, {
    cursor: "nesw-resize",
    stroke: "none",
    fill: "none",
    "pointer-events": "all"
  }), qe(g, (x, y) => We?.(x, y), () => ({ drag: a([0, 0, 1, 1]) })), ce(o), Ne(
    (x, y, _, b, F, R, D, O, I, q, H, Q) => {
      E(l, "x", x), E(l, "width", y), E(l, "y", _), E(l, "height", b), E(u, "x", c(r).x - i / 2), E(u, "y", F), E(u, "height", R), E(s, "x", c(n).x - i / 2), E(s, "y", D), E(s, "height", O), E(f, "x", I), E(f, "width", q), E(f, "y", c(r).y - i / 2), E(d, "x", H), E(d, "width", Q), E(d, "y", c(n).y - i / 2), E(p, "x", c(r).x - i / 2), E(p, "y", c(r).y - i / 2), E(h, "x", c(r).x - i / 2), E(h, "y", c(n).y - i / 2), E(v, "x", c(n).x - i / 2), E(v, "y", c(r).y - i / 2), E(g, "x", c(n).x - i / 2), E(g, "y", c(n).y - i / 2);
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
  ), ae(e, o), Mt();
}
function ql(e, t) {
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
function zl(e, t) {
  let r = e.x - t.x, n = e.y - t.y;
  return Math.sqrt(r * r + n * n);
}
function Gl(e) {
  return "M " + e.map(({ x: t, y: r }) => `${t},${r}`).join(" L ") + " Z";
}
function Co(e) {
  let t = 1 / 0, r = -1 / 0, n = 1 / 0, i = -1 / 0;
  for (let { x: a, y: o } of e)
    t = Math.min(t, a), n = Math.min(n, o), r = Math.max(r, a), i = Math.max(i, o);
  return { xMin: t, yMin: n, xMax: r, yMax: i };
}
async function Vl(e) {
  let t = JSON.stringify(e);
  return Yl(t);
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
function Xl(e, t = 0) {
  let r = 3735928559 ^ t, n = 1103547991 ^ t;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    r = Math.imul(r ^ a, 2654435761), n = Math.imul(n ^ a, 1597334677);
  }
  return r = Math.imul(r ^ r >>> 16, 2246822507), r ^= Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(r ^ r >>> 13, 3266489909), [n >>> 0, r >>> 0];
}
function Yl(e) {
  let t = new TextEncoder().encode(e), r = Xl(t);
  return r[0].toString(16).padStart(8, "0") + r[1].toString(16).padStart(8, "0");
}
var jl = /* @__PURE__ */ gt("<path></path>");
function Wl(e, t) {
  Et(t, !0);
  let r = /* @__PURE__ */ P(() => t.value.map(({ x: i, y: a }) => t.pointLocation(i, a)));
  var n = jl();
  z(n, "", {}, { stroke: "#fff", fill: "rgba(128,128,128,0.25)" }), Ne((i) => E(n, "d", i), [() => Gl(c(r))]), ae(e, n), Mt();
}
const Hl = {
  marquee: "M7 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1-.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75M4.75 8a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5A.75.75 0 0 0 4.75 8m14.5 0a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75M8.75 20a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5zM5 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4M21 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4",
  lasso: "M9.703 2.265A10 10 0 0 1 12 2c.79 0 1.559.092 2.297.265a.75.75 0 1 1-.343 1.46A8.5 8.5 0 0 0 12 3.5a8.6 8.6 0 0 0-1.954.225a.75.75 0 1 1-.343-1.46m-1.93 1.47a.75.75 0 0 1-.242 1.033a8.55 8.55 0 0 0-2.763 2.763a.75.75 0 1 1-1.275-.79a10.05 10.05 0 0 1 3.248-3.248a.75.75 0 0 1 1.032.243m8.454 0a.75.75 0 0 1 1.032-.242a10.05 10.05 0 0 1 3.248 3.248a.75.75 0 1 1-1.275.79a8.55 8.55 0 0 0-2.763-2.763a.75.75 0 0 1-.242-1.032m-13.06 5.41a.75.75 0 0 1 .558.901A8.5 8.5 0 0 0 3.5 12c0 .673.078 1.327.225 1.954a.75.75 0 1 1-1.46.343A10 10 0 0 1 2 12c0-.79.092-1.559.265-2.297a.75.75 0 0 1 .902-.559m17.666 0a.75.75 0 0 1 .902.558a10.1 10.1 0 0 1 0 4.595a.75.75 0 1 1-1.46-.343a8.54 8.54 0 0 0-.001-3.908a.75.75 0 0 1 .559-.902M3.736 16.226a.75.75 0 0 1 1.032.242a8.55 8.55 0 0 0 2.763 2.763a.75.75 0 0 1-.79 1.275a10.05 10.05 0 0 1-3.248-3.248a.75.75 0 0 1 .243-1.032m16.685.858a.75.75 0 1 0-1.342-.67l-.002.004l-.015.029l-.069.123a8 8 0 0 1-.289.466a9.6 9.6 0 0 1-.965 1.219c-1.17-1.073-2.756-2.006-4.74-2.006c-2.347 0-3.99 1.203-3.99 2.875S10.653 22 13 22c1.942 0 3.495-.75 4.658-1.645a11.7 11.7 0 0 1 1.315 2.01q.05.099.073.149l.017.035l.004.009a.75.75 0 0 0 1.368-.615c-.087-.183 0-.001 0-.001v-.002l-.003-.004l-.007-.015l-.024-.052l-.091-.184a13.2 13.2 0 0 0-1.538-2.337a11 11 0 0 0 1.525-2.032l.09-.162l.024-.047l.007-.014l.002-.005zM13 17.75c1.433 0 2.644.652 3.616 1.512c-.95.7-2.155 1.238-3.616 1.238c-1.973 0-2.49-.922-2.49-1.375s.517-1.375 2.49-1.375"
};
var Ql = /* @__PURE__ */ gt('<svg width="24" height="24" viewBox="0 0 24 24"><path></path></svg>'), Zl = /* @__PURE__ */ Ft("<button><!></button>");
function oi(e, t) {
  let r = T(t, "active", 3, !1);
  var n = Zl();
  n.__click = function(...l) {
    t.onClick?.apply(this, l);
  };
  let i;
  var a = pe(n);
  {
    var o = (l) => {
      var u = Ql();
      z(u, "", {}, { width: "14px", height: "14px" });
      var s = pe(u);
      z(s, "", {}, { fill: "currentColor" }), ce(u), Ne(() => E(s, "d", Hl[t.icon])), ae(l, u);
    };
    Re(a, (l) => {
      t.icon != null && l(o);
    });
  }
  ce(n), Ne(() => {
    E(n, "title", t.title), i = z(n, "", i, {
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
  }), ae(e, n);
}
_l(["click"]);
var Jl = /* @__PURE__ */ Ft('<div><div> </div> <svg height="6px"><line shape-rendering="crispEdges"></line><line shape-rendering="crispEdges"></line><line shape-rendering="crispEdges"></line></svg></div>');
function Kl(e, t) {
  function r(p, h) {
    let v = Math.log10(h * p), g = Math.round(v), x = [0.1, 0.2, 0.5, 1, 2, 5, 10], y = 0, _ = 1e10;
    for (let b of x) {
      let F = Math.abs(Math.log10(b) + g - v);
      F < _ && (y = b, _ = F);
    }
    return y * Math.pow(10, g);
  }
  let n = /* @__PURE__ */ P(() => r(t.distancePerPoint, 30)), i = /* @__PURE__ */ P(() => c(n) / t.distancePerPoint);
  var a = Jl();
  z(a, "", {}, { display: "flex", "align-items": "center" });
  var o = pe(a);
  z(o, "", {}, { "padding-right": "4px" });
  var l = pe(o, !0);
  ce(o);
  var u = ne(o, 2), s = pe(u);
  E(s, "x1", 1), E(s, "y1", 3), E(s, "y2", 3), z(s, "", {}, {
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-cap": "butt"
  });
  var f = ne(s);
  E(f, "x1", 1), E(f, "x2", 1), E(f, "y1", 0), E(f, "y2", 6), z(f, "", {}, { stroke: "currentColor" });
  var d = ne(f);
  E(d, "y1", 0), E(d, "y2", 6), z(d, "", {}, { stroke: "currentColor" }), ce(u), ce(a), Ne(
    (p) => {
      xr(l, p), E(u, "width", `${c(i) + 2}px`), E(s, "x2", c(i) + 1), E(d, "x1", c(i) + 1), E(d, "x2", c(i) + 1);
    },
    [() => c(n).toLocaleString()]
  ), ae(e, a);
}
var eu = /* @__PURE__ */ Ft("<div> </div>"), tu = /* @__PURE__ */ Ft('<a target="_blank"> </a> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div>', 1), ru = /* @__PURE__ */ Ft('<div><div><!></div> <div></div> <div><!> <!> <!> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div> <!> <div style="border-right: 1px solid currentColor; margin: 4px 2px; opacity: 0.3; width: 0; height: 10px"></div> <span> </span></div></div>');
function nu(e, t) {
  Et(t, !0);
  let r = T(t, "statusMessage", 3, null);
  var n = ru();
  let i;
  var a = pe(n);
  let o;
  var l = pe(a);
  {
    var u = (b) => {
      var F = eu();
      z(F, "", {}, { display: "inline-block" });
      var R = pe(F, !0);
      ce(F), Ne(() => xr(R, r())), ae(b, F);
    };
    Re(l, (b) => {
      r() != null && b(u);
    });
  }
  ce(a);
  var s = ne(a, 2);
  z(s, "", {}, { flex: "1 1 0%" });
  var f = ne(s, 2);
  let d;
  var p = pe(f);
  {
    var h = (b) => {
      var F = tu(), R = Qt(F);
      z(R, "", {}, { color: "currentColor", "text-decoration": "underline" });
      var D = pe(R, !0);
      ce(R), Xi(2), Ne(() => {
        E(R, "href", t.resolvedTheme.brandingLink.href), xr(D, t.resolvedTheme.brandingLink.text);
      }), ae(b, F);
    };
    Re(p, (b) => {
      t.resolvedTheme.brandingLink != null && b(h);
    });
  }
  var v = ne(p, 2);
  {
    let b = /* @__PURE__ */ P(() => t.selectionMode == "marquee");
    oi(v, {
      icon: "marquee",
      get active() {
        return c(b);
      },
      title: "Toggle rectangle selection mode. In normal mode, use shift + drag for rectangle selection.",
      onClick: () => t.onSelectionMode(t.selectionMode == "marquee" ? "none" : "marquee")
    });
  }
  var g = ne(v, 2);
  {
    let b = /* @__PURE__ */ P(() => t.selectionMode == "lasso");
    oi(g, {
      icon: "lasso",
      get active() {
        return c(b);
      },
      title: "Toggle lasso selection mode. In normal mode, use shift + meta + drag for lasso selection.",
      onClick: () => t.onSelectionMode(t.selectionMode == "lasso" ? "none" : "lasso")
    });
  }
  var x = ne(g, 4);
  Kl(x, {
    get distancePerPoint() {
      return t.distancePerPoint;
    }
  });
  var y = ne(x, 4), _ = pe(y);
  ce(y), ce(f), ce(n), Ne(
    (b) => {
      i = z(n, "", i, {
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
      }), o = z(a, "", o, {
        flex: "none",
        display: "flex",
        "flex-direction": "row",
        gap: "4px",
        padding: "0px 4px",
        "border-radius": "2px",
        background: t.resolvedTheme.statusBarBackgroundColor
      }), d = z(f, "", d, {
        flex: "none",
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
        gap: "4px",
        padding: "0px 4px",
        "border-radius": "2px",
        background: t.resolvedTheme.statusBarBackgroundColor
      }), xr(_, `${b ?? ""} points`);
    },
    [() => t.pointCount.toLocaleString()]
  ), ae(e, n), Mt();
}
function iu(e) {
  return (t, r) => {
    let n = new e(t, r);
    return {
      ...n.update ? { update: n.update.bind(n) } : {},
      ...n.destroy ? { destroy: n.destroy.bind(n) } : {}
    };
  };
}
let an = /* @__PURE__ */ new WeakMap();
function Po(e) {
  let t = typeof e == "function" ? e : e.class;
  if (an.has(t))
    return an.get(t);
  {
    let r = iu(t);
    return an.set(t, r), r;
  }
}
function Uo(e, t) {
  return typeof e == "function" ? t : { ...e.props ?? {}, ...t };
}
var ou = /* @__PURE__ */ Ft("<div><div></div></div>");
function au(e, t) {
  Et(t, !0);
  let r = T(t, "margin", 3, 4), n, i, a = /* @__PURE__ */ P(() => Po(t.customTooltip)), o = /* @__PURE__ */ P(() => Uo(t.customTooltip, { tooltip: t.tooltip }));
  Pn(() => {
    mr(() => {
      let s = c(a), f = null;
      return mr(() => {
        i.style.left = "0px", i.style.top = "0px", i.style.pointerEvents = t.allowInteraction ? "all" : "none", f == null ? f = s(i, c(o)) : f.update?.(c(o));
        function d(x, y, _, b) {
          let F = t.location.x, R = t.location.y, D = 2, O = x / 2, I = y + (t.targetHeight + r());
          F - O < _ && (O = F - _), F - O > b - x && (O = F - b + x), R - I < D && (I = -(t.targetHeight + r())), i.style.left = F - O + "px", i.style.top = R - I + "px";
        }
        let p = n.getBoundingClientRect(), { width: h, height: v } = i.getBoundingClientRect();
        d(h, v, 2, p.width - 2);
        let g = requestAnimationFrame(() => {
          g = null;
          let x = i.getBoundingClientRect();
          (x.width != h || x.height != v) && d(x.width, x.height, 2, p.width - 2);
        });
        return () => {
          g != null && cancelAnimationFrame(g);
        };
      }), () => {
        f?.destroy?.(), i.replaceChildren();
      };
    });
  });
  var l = ou();
  z(l, "", {}, { position: "absolute", width: "100%" });
  var u = pe(l);
  z(u, "", {}, {
    display: "flex",
    position: "absolute",
    width: "fit-content",
    height: "fit-content",
    "z-index": "100"
  }), mn(u, (s) => i = s, () => i), ce(l), mn(l, (s) => n = s, () => n), ae(e, l), Mt();
}
function Un(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function ko(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Er() {
}
var wr = 0.7, Ir = 1 / wr, tr = "\\s*([+-]?\\d+)\\s*", Ar = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ke = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", lu = /^#([0-9a-f]{3,8})$/, uu = new RegExp(`^rgb\\(${tr},${tr},${tr}\\)$`), su = new RegExp(`^rgb\\(${Ke},${Ke},${Ke}\\)$`), fu = new RegExp(`^rgba\\(${tr},${tr},${tr},${Ar}\\)$`), cu = new RegExp(`^rgba\\(${Ke},${Ke},${Ke},${Ar}\\)$`), du = new RegExp(`^hsl\\(${Ar},${Ke},${Ke}\\)$`), hu = new RegExp(`^hsla\\(${Ar},${Ke},${Ke},${Ar}\\)$`), ai = {
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
Un(Er, kn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: li,
  // Deprecated! Use color.formatHex.
  formatHex: li,
  formatHex8: pu,
  formatHsl: vu,
  formatRgb: ui,
  toString: ui
});
function li() {
  return this.rgb().formatHex();
}
function pu() {
  return this.rgb().formatHex8();
}
function vu() {
  return Io(this).formatHsl();
}
function ui() {
  return this.rgb().formatRgb();
}
function kn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = lu.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? si(t) : r === 3 ? new Me(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Dr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Dr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = uu.exec(e)) ? new Me(t[1], t[2], t[3], 1) : (t = su.exec(e)) ? new Me(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fu.exec(e)) ? Dr(t[1], t[2], t[3], t[4]) : (t = cu.exec(e)) ? Dr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = du.exec(e)) ? di(t[1], t[2] / 100, t[3] / 100, 1) : (t = hu.exec(e)) ? di(t[1], t[2] / 100, t[3] / 100, t[4]) : ai.hasOwnProperty(e) ? si(ai[e]) : e === "transparent" ? new Me(NaN, NaN, NaN, 0) : null;
}
function si(e) {
  return new Me(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Dr(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Me(e, t, r, n);
}
function gu(e) {
  return e instanceof Er || (e = kn(e)), e ? (e = e.rgb(), new Me(e.r, e.g, e.b, e.opacity)) : new Me();
}
function No(e, t, r, n) {
  return arguments.length === 1 ? gu(e) : new Me(e, t, r, n ?? 1);
}
function Me(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Un(Me, No, ko(Er, {
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
    return new Me(It(this.r), It(this.g), It(this.b), Lr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: fi,
  // Deprecated! Use color.formatHex.
  formatHex: fi,
  formatHex8: yu,
  formatRgb: ci,
  toString: ci
}));
function fi() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}`;
}
function yu() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}${Pt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ci() {
  const e = Lr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${It(this.r)}, ${It(this.g)}, ${It(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Lr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function It(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Pt(e) {
  return e = It(e), (e < 16 ? "0" : "") + e.toString(16);
}
function di(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ge(e, t, r, n);
}
function Io(e) {
  if (e instanceof Ge) return new Ge(e.h, e.s, e.l, e.opacity);
  if (e instanceof Er || (e = kn(e)), !e) return new Ge();
  if (e instanceof Ge) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, l = a - i, u = (a + i) / 2;
  return l ? (t === a ? o = (r - n) / l + (r < n) * 6 : r === a ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : l = u > 0 && u < 1 ? 0 : o, new Ge(o, l, u, e.opacity);
}
function mu(e, t, r, n) {
  return arguments.length === 1 ? Io(e) : new Ge(e, t, r, n ?? 1);
}
function Ge(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Un(Ge, mu, ko(Er, {
  brighter(e) {
    return e = e == null ? Ir : Math.pow(Ir, e), new Ge(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wr : Math.pow(wr, e), new Ge(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Me(
      ln(e >= 240 ? e - 240 : e + 120, i, n),
      ln(e, i, n),
      ln(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Ge(hi(this.h), Cr(this.s), Cr(this.l), Lr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Lr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${hi(this.h)}, ${Cr(this.s) * 100}%, ${Cr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function hi(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Cr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ln(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const pi = [
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
], Pr = [
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
function Wr(e) {
  if (e < 1 && (e = 1), e <= pi.length)
    return pi.slice(0, e);
  if (e <= Pr.length)
    return Pr.slice(0, e);
  {
    let t = [];
    for (let r = 0; r < e; r++)
      t[r] = Pr[r % Pr.length];
    return t;
  }
}
function Nn(e) {
  let { r: t, g: r, b: n, opacity: i } = No(e);
  return { r: t / 255, g: r / 255, b: n / 255, a: i };
}
function Lo() {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1];
}
function In(e, t) {
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
function xu(e) {
  return e[0] * e[4] * e[8] - e[0] * e[5] * e[7] - e[1] * e[3] * e[8] + e[1] * e[5] * e[6] + e[2] * e[3] * e[7] - e[2] * e[4] * e[6];
}
function $o(e) {
  let t = xu(e);
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
class Hr {
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
class xn {
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
let fr = class extends xn {
  _value = null;
  setValue(e) {
    this._value !== e && (this._value = e, this.setNeedsRunDownstream());
  }
  get value() {
    return this.run(), this._value;
  }
};
class qo extends fr {
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
class _u extends fr {
  fn;
  constructor(t, r) {
    super(r), this.fn = t;
  }
  update() {
    this.setValue(this.fn());
  }
}
class bu extends fr {
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
class wu extends fr {
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
    (this.currentNode == null || this.currentCondition !== this.condition.value) && (this.currentNode && this.removeInput(this.currentNode), this.context?.destroy(), this.context = new Vt(this.parent), this.currentCondition = this.condition.value, this.currentCondition ? this.currentNode = this.buildTrue(this.context) : this.currentNode = this.buildFalse(this.context), this.addInput(this.currentNode)), this.setValue(this.currentNode.value);
  }
  destroy() {
    super.destroy(), this.context?.destroy();
  }
}
class Au extends fr {
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
        let i = new Vt(this.parent), a = new qo(n), o = this.build(i, a);
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
class Tu extends fr {
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
    (this.currentNode == null || this.input.value !== this.currentCase) && (this.currentNode && this.removeInput(this.currentNode), this.currentContext?.destroy(), this.currentContext = new Vt(this.parent), this.currentCase = this.input.value, this.currentNode = this.cases[this.currentCase](this.currentContext), this.addInput(this.currentNode)), this.setValue(this.currentNode.value);
  }
  destroy() {
    super.destroy(), this.currentContext?.destroy();
  }
}
class Vt {
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
    let r = new qo(t);
    return this._nodes.add(r), r;
  }
  /** Creates a derived value. */
  derive(t, r) {
    let n = t.map((a) => a instanceof xn ? a : this.value(a)), i = new _u(() => r(...n.map((a) => a.value)), n);
    return this._nodes.add(i), i;
  }
  /** Creates a stateful derived value. */
  statefulDerive(t, r) {
    let n = t.map((a) => a instanceof xn ? a : this.value(a)), i = new bu((a) => r(a, ...n.map((o) => o.value)), n);
    return this._nodes.add(i), i;
  }
  /** Creates a true or false dataflow depending on the value of the condition. */
  if(t, r, n) {
    let i = new wu(this, t, r, n);
    return this._nodes.add(i), i;
  }
  switch(t, r) {
    let n = new Tu(this, t, r);
    return this._nodes.add(n), n;
  }
  map(t, r) {
    let n = new Au(this, t, r);
    return this._nodes.add(n), n;
  }
  assertNotNull(t) {
    return t;
  }
  subgraph() {
    return new Vt(this);
  }
}
function rt(e, t, r, n) {
  if (e.program == null || e.vsSource != r || e.fsSource != n) {
    e.destroy && e.destroy();
    let a = vi(t, t.VERTEX_SHADER, r), o = vi(t, t.FRAGMENT_SHADER, n), l = t.createProgram();
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
function vi(e, t, r) {
  let n = e.createShader(t);
  if (e.shaderSource(n, r), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) {
    var i = e.getShaderInfoLog(n);
    throw new Error(`failed to compile shader: ${i}, source: ${r}`);
  }
  return n;
}
function et(e, t, r, n) {
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
function Ru(e, t, r, n, i) {
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
  return e.cacheKey != o && (e.cacheKey = o, t.bindTexture(t.TEXTURE_2D, e.texture), Ru(t, r, n, i, a), t.bindTexture(t.TEXTURE_2D, null)), {
    framebuffer: e.framebuffer,
    texture: e.texture,
    width: r,
    height: n
  };
}
function Eu(e) {
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
function Mu(e, t, r) {
  let n = e.derive([r], Fu), i = e.derive([n], Eu), a = e.statefulDerive(
    [t, e.derive([i], (u) => u.vertex), e.derive([i], (u) => u.fragment1)],
    rt
  ), o = e.statefulDerive(
    [t, e.derive([i], (u) => u.vertex), e.derive([i], (u) => u.fragment2)],
    rt
  ), l = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], et);
  return e.derive(
    [t, l, a, o, r, n],
    (u, s, f, d, p, h) => (v, g, x) => {
      let { width: y, height: _ } = g;
      u.disable(u.BLEND), u.enableVertexAttribArray(0), u.bindBuffer(u.ARRAY_BUFFER, s), u.vertexAttribPointer(0, 2, u.FLOAT, !1, 0, 0), u.bindBuffer(u.ARRAY_BUFFER, null), u.useProgram(f.program), u.uniform2f(f.uniforms.resolution, y, _), u.uniform1i(f.uniforms.image, 0), u.bindFramebuffer(u.FRAMEBUFFER, g.framebuffer), u.bindTexture(u.TEXTURE_2D, v), u.uniform2f(f.uniforms.direction, 0, 1), u.drawArrays(u.TRIANGLE_STRIP, 0, 4), u.bindFramebuffer(u.FRAMEBUFFER, x.framebuffer), u.bindTexture(u.TEXTURE_2D, g.texture), u.uniform2f(f.uniforms.direction, 1, 0), u.drawArrays(u.TRIANGLE_STRIP, 0, 4), u.bindFramebuffer(u.FRAMEBUFFER, g.framebuffer), u.activeTexture(u.TEXTURE1), u.bindTexture(u.TEXTURE_2D, x.texture), u.activeTexture(u.TEXTURE0), u.bindTexture(u.TEXTURE_2D, v), u.useProgram(d.program), u.uniform2f(d.uniforms.resolution, y, _), u.uniform1i(d.uniforms.image, 0), u.uniform1i(d.uniforms.imageBox, 1);
      let b = 1 / h.totalWeight * p * p * Math.PI;
      u.uniform1f(d.uniforms.scaler, b), u.drawArrays(u.TRIANGLE_STRIP, 0, 4), u.bindFramebuffer(u.FRAMEBUFFER, null), u.useProgram(null), u.activeTexture(u.TEXTURE1), u.bindTexture(u.TEXTURE_2D, null), u.activeTexture(u.TEXTURE0), u.bindTexture(u.TEXTURE_2D, null), u.disableVertexAttribArray(0);
    }
  );
}
function gi(e, t, r) {
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
function Fu(e) {
  let t = Math.floor(e + 0.5), r = t, n = gi(e, 0, 0), i = [];
  for (let l = -t; l <= t; l++)
    for (let u = -t; u <= t; u++) {
      let s = n - gi(e, l, u);
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
function Su(e) {
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
function _n(e, t, r, n, i, a) {
  let o = i != null, l = Su(o), u = e.statefulDerive([t, l.vertex, l.fragment], rt);
  return e.derive([t, u, r, n, i, a], (s, f, d, p, h, v) => (g) => {
    s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE), s.useProgram(f.program), s.enableVertexAttribArray(0), s.bindBuffer(s.ARRAY_BUFFER, d), s.vertexAttribPointer(0, 1, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(1), s.bindBuffer(s.ARRAY_BUFFER, p), s.vertexAttribPointer(1, 1, s.FLOAT, !1, 0, 0), h != null && (s.enableVertexAttribArray(2), s.bindBuffer(s.ARRAY_BUFFER, h), s.vertexAttribIPointer(2, 1, s.BYTE, 0, 0)), s.bindBuffer(s.ARRAY_BUFFER, null), s.uniformMatrix3fv(f.uniforms.matrix, !1, g), s.drawArrays(s.POINTS, 0, v), s.disableVertexAttribArray(0), s.disableVertexAttribArray(1), h != null && s.disableVertexAttribArray(2), s.useProgram(null);
  });
}
function Bu() {
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
  let { vertex: r, fragment: n } = Bu(), i = e.statefulDerive([t, r, n], rt), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], et);
  return e.derive([t, i, a], (o, l, u) => (s, f, d, p) => {
    o.disable(o.BLEND), o.enableVertexAttribArray(0), o.bindBuffer(o.ARRAY_BUFFER, u), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, null), o.bindTexture(o.TEXTURE_2D, s), o.useProgram(l.program), o.uniform1i(l.uniforms.source, 0), o.uniform2f(l.uniforms.xyScaler, d ?? 1, p ?? 1), o.uniform1f(l.uniforms.gamma, f ?? 2.2), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.useProgram(null), o.bindTexture(o.TEXTURE_2D, null), o.disableVertexAttribArray(0);
  });
}
function Go(e) {
  return Math.ceil(e * 3);
}
function Du(e) {
  let t = Go(e), r = [];
  for (let l = -t; l <= t; l++)
    r.push(Math.exp(-l * l / e / e / 2));
  let n = r.reduce((l, u) => l + u, 0);
  r = r.map((l) => l / n);
  let i = Pu(r).map(([l, u]) => [l - t, u]), a = `#version 300 es
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
function Cu(e, t, r) {
  let n = e.derive([r], Du), i = e.statefulDerive(
    [t, e.derive([n], (o) => o.vertex), e.derive([n], (o) => o.fragment)],
    rt
  ), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], et);
  return e.derive([t, a, i, r], (o, l, u, s) => (f, d, p) => {
    let { width: h, height: v } = d;
    o.disable(o.BLEND), o.enableVertexAttribArray(0), o.bindBuffer(o.ARRAY_BUFFER, l), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, null), o.useProgram(u.program), o.uniform2f(u.uniforms.resolution, h, v), o.uniform1i(u.uniforms.image, 0), o.bindFramebuffer(o.FRAMEBUFFER, p.framebuffer), o.bindTexture(o.TEXTURE_2D, f), o.uniform2f(u.uniforms.direction, 0, 1), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.bindFramebuffer(o.FRAMEBUFFER, d.framebuffer), o.bindTexture(o.TEXTURE_2D, p.texture), o.uniform2f(u.uniforms.direction, 1, 0), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.bindFramebuffer(o.FRAMEBUFFER, null), o.useProgram(null), o.bindTexture(o.TEXTURE_2D, null), o.disableVertexAttribArray(0);
  });
}
function Pu(e) {
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
function Uu(e) {
  return Math.ceil(e * 3);
}
function ku() {
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
function Nu(e, t, r) {
  let { vertex: n, fragment: i } = ku(), a = e.statefulDerive([t, n, i], rt), o = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], et);
  return e.derive([t, o, a], (l, u, s) => (f, d, p) => {
    let { width: h, height: v } = d;
    l.disable(l.BLEND), l.enableVertexAttribArray(0), l.bindBuffer(l.ARRAY_BUFFER, u), l.vertexAttribPointer(0, 2, l.FLOAT, !1, 0, 0), l.bindBuffer(l.ARRAY_BUFFER, null), l.useProgram(s.program), l.uniform2f(s.uniforms.resolution, h, v), l.uniform1i(s.uniforms.image, 0);
    let g = f, x = p, y = d;
    for (let _ = 0; _ < 2; _++) {
      l.uniform2f(s.uniforms.direction, _, 1 - _);
      for (let [b, F, R] of Iu) {
        l.bindFramebuffer(l.FRAMEBUFFER, x.framebuffer), l.bindTexture(l.TEXTURE_2D, g), l.uniform1fv(s.uniforms.weight0, F), l.uniform3fv(s.uniforms.distances, b), l.uniform3fv(s.uniforms.weights, R), l.drawArrays(l.TRIANGLE_STRIP, 0, 4), g = x.texture;
        let D = x;
        x = y, y = D;
      }
    }
    l.bindFramebuffer(l.FRAMEBUFFER, null), l.useProgram(null), l.bindTexture(l.TEXTURE_2D, null), l.disableVertexAttribArray(0);
  });
}
const Iu = [
  [[1, 2, 3], [0.2288468365182578], [0.18230006506971572, 0.1356122230111784, 0.06766429365997693]],
  [[2, 6, 10], [0.09116254014100238], [0.23317759354726447, 0.18385867277788717, 0.03738246360434722]],
  [[3, 10, 20], [0.2950645715317288], [0.010918865853671198, 0.23773695670296047, 0.10381189167750389]],
  [[4, 16, 30], [0.20085957073474772], [0.14463019087130788, 0.17934533765938643, 0.07559468610193185]]
];
function Lu() {
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
function Ou(e, t) {
  let { vertex: r, fragment: n } = Lu(), i = e.statefulDerive([t, r, n], rt), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], et);
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
function qu(e, t) {
  let { vertex: r, fragment: n } = $u(), i = e.statefulDerive([t, r, n], rt), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], et);
  return e.derive(
    [t, i, a],
    (o, l, u) => (s, f, d, p, h, v) => {
      o.enable(o.BLEND), o.blendFunc(o.ONE, o.ONE_MINUS_SRC_ALPHA), o.enableVertexAttribArray(0), o.bindBuffer(o.ARRAY_BUFFER, u), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, null), o.bindTexture(o.TEXTURE_2D, s.texture), o.useProgram(l.program), o.uniform1i(l.uniforms.source, 0), o.uniform2f(l.uniforms.resolution, s.width, s.height), o.uniform1f(l.uniforms.densityScaler, f), o.uniform1f(l.uniforms.quantizationStep, d), o.uniform1f(l.uniforms.globalAlpha, p), o.uniform1i(l.uniforms.isDarkMode, v == "dark" ? 1 : 0), o.uniformMatrix4fv(l.uniforms.colorMatrix, !1, h), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.useProgram(null), o.bindTexture(o.TEXTURE_2D, null), o.disableVertexAttribArray(0);
    }
  );
}
function zu(e) {
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
function yi(e, t, r, n, i, a) {
  let o = i != null, l = zu(o), u = e.statefulDerive([t, l.vertex, l.fragment], rt);
  return e.derive(
    [t, u, r, n, i, a],
    (s, f, d, p, h, v) => (g, x, y, _) => {
      s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA), s.useProgram(f.program), s.enableVertexAttribArray(0), s.bindBuffer(s.ARRAY_BUFFER, d), s.vertexAttribPointer(0, 1, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(1), s.bindBuffer(s.ARRAY_BUFFER, p), s.vertexAttribPointer(1, 1, s.FLOAT, !1, 0, 0), h != null && (s.enableVertexAttribArray(2), s.bindBuffer(s.ARRAY_BUFFER, h), s.vertexAttribIPointer(2, 1, s.BYTE, 0, 0)), s.bindBuffer(s.ARRAY_BUFFER, null), s.uniformMatrix3fv(f.uniforms.matrix, !1, g), s.uniform1f(f.uniforms.point_size, x * 2), s.uniform1f(f.uniforms.alpha, y), o ? s.uniform4fv(f.uniforms.colorScheme, _) : s.uniform4fv(f.uniforms.colorScheme, _.slice(0, 4)), s.drawArrays(s.POINTS, 0, v), s.disableVertexAttribArray(0), s.disableVertexAttribArray(1), h != null && s.disableVertexAttribArray(2), s.useProgram(null);
    }
  );
}
function Gu() {
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
function Vu(e, t) {
  let { vertex: r, fragment: n } = Gu(), i = e.statefulDerive([t, r, n], rt), a = e.statefulDerive([t, [-1, -1, -1, 1, 1, -1, 1, 1], "f32"], et);
  return e.derive(
    [t, i, a],
    (o, l, u) => (s, f, d, p, h) => {
      o.enable(o.BLEND), o.blendFunc(o.ONE, o.ONE_MINUS_SRC_ALPHA), o.enableVertexAttribArray(0), o.bindBuffer(o.ARRAY_BUFFER, u), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, null), o.bindTexture(o.TEXTURE_2D, s.texture), o.useProgram(l.program), o.uniform1i(l.uniforms.source, 0), o.uniform2f(l.uniforms.resolution, s.width, s.height), o.uniform1f(l.uniforms.pointAlpha, f), o.uniform1f(l.uniforms.globalAlpha, d), o.uniform1i(l.uniforms.isDarkMode, h == "dark" ? 1 : 0), o.uniformMatrix4fv(l.uniforms.colorMatrix, !1, p), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), o.useProgram(null), o.bindTexture(o.TEXTURE_2D, null), o.disableVertexAttribArray(0);
    }
  );
}
class Xu {
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
    }, this.viewport = new Hr({ x: 0, y: 0, scale: 1 }, r, n);
    let i = new Vt(), a = i.value(t);
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
    }, this.dataBuffers = Yu(i, a, this.renderInputs), this.renderer = ju(i, a, this.renderInputs, this.dataBuffers);
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
    let a = this.df.subgraph(), o = Qu(a, this.gl, this.dataBuffers, a.value(t), a.value(r), a.value(n)), { x: l, y: u, scale: s } = i, f = [s, 0, 0, 0, s, 0, -l * s, -u * s, 1], d = o.value(f), p = $o(f);
    return a.destroy(), {
      data: d,
      width: t,
      height: r,
      coordinateAtPixel: (h, v) => {
        let g = h / t * 2 - 1, x = v / r * 2 - 1, y = Oo([g, x, 1], p);
        return { x: y[0], y: y[1] };
      }
    };
  }
}
function Yu(e, t, r) {
  const n = e.statefulDerive([t, r.xData, "f32"], et), i = e.statefulDerive([t, r.yData, "f32"], et), a = e.if(
    e.derive([r.categoryData], (l) => l != null),
    (l) => l.statefulDerive([t, l.assertNotNull(r.categoryData), "u8"], et),
    (l) => l.value(null)
  ), o = e.derive([r.xData], (l) => l.length);
  return { x: n, y: i, category: a, count: o };
}
function ju(e, t, r, n) {
  return e.switch(r.mode, {
    points: (i) => Wu(i, t, r, n),
    density: (i) => Hu(i, t, r, n)
  });
}
function Wu(e, t, r, n) {
  const i = e.derive([r.categoryCount], (u) => u > 1), a = e.statefulDerive([t, r.width, r.height, 4, "f32"], bt);
  let o = e.if(
    i,
    (u) => yi(u, t, n.x, n.y, u.assertNotNull(n.category), n.count),
    (u) => yi(u, t, n.x, n.y, null, n.count)
  ), l = zo(e, t);
  return e.derive(
    [t, a, o, l, r.colorScheme, r.matrix, r.categoryCount],
    (u, s, f, d, p, h, v) => (g) => {
      let x = [], y = g.categoryColors ?? Wr(g.categoryCount);
      for (let _ = 0; _ < v; _++)
        if (_ < y.length) {
          let { r: b, g: F, b: R } = Nn(y[_]);
          b = Math.pow(b, g.gamma), F = Math.pow(F, g.gamma), R = Math.pow(R, g.gamma), x = x.concat([b, F, R, 1]);
        } else
          x = x.concat([0.5, 0.5, 0.5, 1]);
      u.bindFramebuffer(u.FRAMEBUFFER, s.framebuffer), u.viewport(0, 0, s.width, s.height), p == "light" ? u.clearColor(1, 1, 1, 1) : u.clearColor(0, 0, 0, 1), u.clear(u.COLOR_BUFFER_BIT), f(h, Math.max(3, g.pointSize), g.pointAlpha * g.pointsAlpha, x), u.bindFramebuffer(u.FRAMEBUFFER, null), u.viewport(0, 0, g.width, g.height), d(s.texture, g.gamma);
    }
  );
}
function Hu(e, t, r, n) {
  let i = e.derive([r.densityBandwidth], (b) => Uu(b) + 1), a = e.derive([r.width, i], (b, F) => b + F * 2), o = e.derive([r.height, i], (b, F) => b + F * 2);
  const l = e.derive([r.categoryCount], (b) => b > 1), u = e.statefulDerive([t, a, o, 4, "f32"], bt), s = e.statefulDerive([t, a, o, 4, "f32"], bt), f = e.statefulDerive([t, a, o, 4, "f32"], bt), d = e.statefulDerive([t, a, o, 4, "f32"], bt);
  let p = e.if(
    l,
    (b) => _n(b, t, n.x, n.y, b.assertNotNull(n.category), n.count),
    (b) => _n(b, t, n.x, n.y, null, n.count)
  ), h = Mu(e, t, r.pointSize), v = Nu(e, t, r.densityBandwidth), g = Vu(e, t), x = qu(e, t), y = Ou(e, t), _ = zo(e, t);
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
      x,
      y,
      _
    ],
    (b, F, R, D, O, I, q, H, Q, W, be, te, Ce, le) => ($) => {
      let ue = $.categoryColors ?? Wr($.categoryCount), ie = [];
      for (let oe = 0; oe < 4; oe++)
        if (oe < ue.length) {
          let { r: ge, g: Le, b: ye } = Nn(ue[oe]);
          ge = Math.pow(ge, $.gamma), Le = Math.pow(Le, $.gamma), ye = Math.pow(ye, $.gamma), ie = ie.concat([ge, Le, ye, 1]);
        } else
          ie = ie.concat([0.5, 0.5, 0.5, 1]);
      let Z = $.width / R.width, we = $.height / R.height, he = In([Z, 0, 0, 0, we, 0, 0, 0, 1], q);
      if (b.bindFramebuffer(b.FRAMEBUFFER, F.framebuffer), b.viewport(0, 0, F.width, F.height), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), H(he), b.bindFramebuffer(b.FRAMEBUFFER, R.framebuffer), b.viewport(0, 0, R.width, R.height), I == "light" ? b.clearColor(1, 1, 1, 1) : b.clearColor(0, 0, 0, 1), b.clear(b.COLOR_BUFFER_BIT), $.pointAlpha > 0 && $.pointsAlpha > 0 && (Q(F.texture, D, O), b.bindFramebuffer(b.FRAMEBUFFER, R.framebuffer), be(D, $.pointAlpha, $.pointsAlpha, ie, I)), $.densityScaler > 0 && ($.densityAlpha > 0 || $.contoursAlpha > 0) && (W(F.texture, D, O), b.bindFramebuffer(b.FRAMEBUFFER, R.framebuffer), $.densityAlpha > 0 && te(
        D,
        $.densityScaler,
        $.densityQuantizationStep,
        $.densityAlpha,
        ie,
        I
      ), $.contoursAlpha > 0))
        for (let oe = 0; oe < ue.length; oe++) {
          let ge = [0, 0, 0, 0];
          ge[oe] = 1, Ce(
            D,
            $.densityScaler,
            $.densityQuantizationStep,
            $.contoursAlpha,
            ge,
            ie.slice(oe * 4, oe * 4 + 4)
          );
        }
      b.bindFramebuffer(b.FRAMEBUFFER, null), b.viewport(0, 0, $.width, $.height), le(R.texture, $.gamma, 1 / Z, 1 / we);
    }
  );
}
function Qu(e, t, r, n, i, a) {
  let o = e.derive([a], (v) => Go(v) + 1), l = e.derive([n, o], (v, g) => v + g * 2), u = e.derive([i, o], (v, g) => v + g * 2);
  const s = e.statefulDerive([t, l, u, 1, "f32"], bt), f = e.statefulDerive([t, l, u, 1, "f32"], bt), d = e.statefulDerive([t, l, u, 1, "f32"], bt);
  let p = _n(e, t, r.x, r.y, null, r.count), h = Cu(e, t, a);
  return e.derive(
    [t, o, n, i, s, f, d, p, h],
    (v, g, x, y, _, b, F, R, D) => (O) => {
      let I = x / _.width, q = y / _.height, H = In([I, 0, 0, 0, q, 0, 0, 0, 1], O);
      v.bindFramebuffer(v.FRAMEBUFFER, _.framebuffer), v.viewport(0, 0, _.width, _.height), v.clearColor(0, 0, 0, 0), v.clear(v.COLOR_BUFFER_BIT), R(H), D(_.texture, b, F), v.bindFramebuffer(v.FRAMEBUFFER, b.framebuffer);
      let Q = new Float32Array(x * y);
      return v.readPixels(g, g, x, y, v.RED, v.FLOAT, Q), v.bindFramebuffer(v.FRAMEBUFFER, null), Q;
    }
  );
}
class Zu {
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
function Ju(e, t) {
  let r = new ArrayBuffer(4288), n = e.statefulDerive(
    [t, 4288, GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX],
    Jt
  );
  return {
    buffer: n,
    update: e.derive([t, n], (i, a) => (o) => {
      let l = new Zu(r);
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
const un = 64, sn = 64;
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
      v.setPipeline(l), v.setBindGroup(0, u), v.setBindGroup(1, s), v.setBindGroup(2, f), p <= un * sn ? v.dispatchWorkgroups(Math.ceil(p / un)) : v.dispatchWorkgroups(sn, Math.ceil(p / (un * sn))), v.end();
    }
  );
}
function Ku(e) {
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
  let a = e.derive([t], (d) => Ku(d)), o = e.derive(
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
function es(e, t, r, n, i) {
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
function ts(e, t, r, n, i, a) {
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
function rs(e, t, r, n, i) {
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
const mi = 64;
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
    (s, f, d, p, h, v, g, x, y) => (_) => {
      let b = _.beginComputePass();
      b.setBindGroup(0, d), b.setBindGroup(1, p), b.setBindGroup(2, h), b.setBindGroup(3, v), b.setPipeline(s), b.dispatchWorkgroups(Math.ceil(g / mi), y), b.setPipeline(f), b.dispatchWorkgroups(Math.ceil(x / mi), y), b.end();
    }
  );
}
function ns(e, t = !1) {
  const r = new Float64Array(5), n = new Float64Array(4);
  is(r, n, e);
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
function is(e, t, r) {
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
  let t = ns(e);
  return {
    kde_causal: [t.b_causal[0], t.b_causal[1], t.b_causal[2], t.b_causal[3]],
    kde_anticausal: [t.b_anticausal[1], t.b_anticausal[2], t.b_anticausal[3], t.b_anticausal[4]],
    kde_a: [t.a[1], t.a[2], t.a[3], t.a[4]]
  };
}
const os = `// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

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
class as {
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
    }, this.viewport = new Hr({ x: 0, y: 0, scale: 1 }, i, a), this.df = new Vt();
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
    }, this.device = o.value(r), this.dataBuffers = ls(o, this.device, this.renderInputs), this.module = o.derive([this.device], (l) => l.createShaderModule({ code: os })), this.uniforms = Ju(o, this.device), this.renderer = us(
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
    let a = this.df.subgraph(), { x: o, y: l, scale: u } = i, s = [u, 0, 0, 0, u, 0, -o * u, -l * u, 1], f = $o(s), d = await ss(
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
        let v = p / t * 2 - 1, g = h / r * 2 - 1, x = Oo([v, g, 1], f);
        return { x: x[0], y: x[1] };
      }
    };
  }
}
function ls(e, t, r) {
  let n = GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST;
  const i = e.derive([r.xData], (f) => f.length), a = e.derive([i], (f) => f * 4), o = i, l = e.statefulDerive(
    [t, e.statefulDerive([t, a, n], Jt), r.xData],
    en
  ), u = e.statefulDerive(
    [t, e.statefulDerive([t, a, n], Jt), r.yData],
    en
  ), s = e.statefulDerive(
    [t, e.statefulDerive([t, o, n], Jt), r.categoryData],
    en
  );
  return { x: l, y: u, category: s, count: i };
}
function Wo(e, t, r, n, i, a, o) {
  let l = "rgba16float", u = "r16float", s = GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING, f = e.statefulDerive(
    [t, r, n, l, s],
    jn
  ), d = e.statefulDerive(
    [t, r, n, u, s],
    jn
  ), p = e.derive(
    [i, a, o],
    (x, y, _) => x * y * _ * 4
    // w * h * categoryCount * sizeof(uint32)
  ), h = e.derive(
    [i, a, o],
    (x, y, _) => x * y * _ * 2
    // w * h * categoryCount * sizeof(f16)
  ), v = e.statefulDerive(
    [t, p, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC],
    Jt
  ), g = e.statefulDerive([t, h, GPUBufferUsage.STORAGE], Jt);
  return {
    colorTexture: f,
    alphaTexture: d,
    colorTextureFormat: l,
    alphaTextureFormat: u,
    countBuffer: v,
    blurBuffer: g
  };
}
function us(e, t, r, n, i, a, o) {
  let l = e.derive([a.densityBandwidth], (R) => Math.ceil(R * 3) + 1), u = e.derive([a.width, l], (R, D) => R + D * 2), s = e.derive([a.height, l], (R, D) => R + D * 2), f = e.derive([u], (R) => Math.ceil(R / 4)), d = e.derive([s], (R) => Math.ceil(R / 4)), p = Wo(
    e,
    t,
    u,
    s,
    f,
    d,
    a.categoryCount
  ), h = Xo(e, t, n.buffer, o, p), v = Vo(e, t, r, h, o, p), g = ts(e, t, r, h, o, p), x = es(e, t, r, h, p), y = rs(e, t, r, i, h), _ = Yo(e, t, r, h, u, s, a.categoryCount), b = e.derive(
    [a.densityBandwidth, u, f],
    (R, D, O) => jo(R / D * O)
  ), F = e.derive(
    [a.categoryColors, a.categoryCount],
    (R, D) => (R == null && (R = Wr(D)), R.map((O) => Nn(O)))
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
      y,
      v,
      _,
      x,
      b
    ],
    (R, D, O, I, q, H, Q, W, be, te, Ce, le, $, ue, ie) => (Z, we) => {
      let he = Z.colorScheme == "light" ? [1, 1, 1, 1] : [0, 0, 0, 1], oe = Z.width / D, ge = Z.height / O, Le = In([oe, 0, 0, 0, ge, 0, 0, 0, 1], W);
      H({
        count: Q,
        category_count: Z.categoryCount,
        framebuffer_width: D,
        framebuffer_height: O,
        density_width: I,
        density_height: q,
        gamma: Z.gamma,
        point_size: Math.max(Z.mode == "points" ? 3 : 1, Z.pointSize),
        point_alpha: Z.pointAlpha,
        points_alpha: Z.pointsAlpha,
        density_scaler: Z.densityScaler / 16,
        quantization_step: Z.densityQuantizationStep,
        density_alpha: Z.densityAlpha,
        contours_alpha: Z.contoursAlpha,
        matrix: Le,
        view_xy_scaler: [1 / oe, 1 / ge],
        kde_causal: ie.kde_causal,
        kde_anticausal: ie.kde_anticausal,
        kde_a: ie.kde_a,
        background_color: he,
        category_colors: be
      });
      let ye = R.createCommandEncoder();
      te(ye), Z.mode == "density" && (Z.densityAlpha > 0 || Z.contoursAlpha > 0) && (le(ye), $(ye), ue(ye)), Ce(ye, we), R.queue.submit([ye.finish()]);
    }
  );
}
function ss(e, t, r, n, i, a, o, l, u) {
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
    (h, v, g, x, y, _, b, F, R, D) => () => {
      let O = h.createCommandEncoder(), I = jo(_);
      y({
        count: x,
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
        matrix: b,
        view_xy_scaler: [1, 1],
        kde_causal: I.kde_causal,
        kde_anticausal: I.kde_anticausal,
        kde_a: I.kde_a,
        background_color: [0, 0, 0, 0],
        category_colors: []
      }), F(O), R(O);
      let q = h.createBuffer({
        size: v * g * 2,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ
      });
      return O.copyBufferToBuffer(D, 0, q, 0, v * g * 2), h.queue.submit([O.finish()]), q.mapAsync(GPUMapMode.READ, 0, v * g * 2).then(() => fs(q.getMappedRange()));
    }
  );
}
function fs(e) {
  let t = new Uint16Array(e), r = new Uint32Array(t.length);
  for (let n = 0; n < t.length; n++) {
    let i = t[n] & 32767, a = t[n] & 32768, o = t[n] & 31744;
    i <<= 13, a <<= 16, i += 939524096, i = o == 0 ? 0 : i, i |= a, r[n] = i;
  }
  return new Float32Array(r.buffer);
}
let hr;
function cs() {
  return hr == null && (hr = document.createElement("canvas"), hr.width = 1, hr.height = 1), hr.getContext("2d");
}
function ds(e) {
  let t = cs();
  t.font = `${e.fontSize ?? 10}px ${e.fontFamily ?? "system-ui"}`;
  let r = e.text.split(`
`).map((i) => t.measureText(i).width), n = (e.fontSize ?? 10) * (e.lineSpacing ?? 1) * r.length;
  return {
    width: r.reduce((i, a) => Math.max(i, a)),
    height: n
  };
}
let fn = null, bn = /* @__PURE__ */ new Map();
function hs() {
  return fn == null && (fn = new Promise((e, t) => {
    let r = new Worker(new URL("./clustering.worker.js", import.meta.url), { type: "module" });
    r.onmessage = (n) => {
      if (n.data.ready) {
        e(r);
        return;
      }
      if (n.data.id != null) {
        let i = bn.get(n.data.id);
        i != null && (bn.delete(n.data.id), i(n.data));
      }
    };
  })), fn;
}
function cr(e, t, r = []) {
  return new Promise((n, i) => {
    hs().then((a) => {
      let o = (/* @__PURE__ */ new Date()).getTime().toString() + "-" + Math.random().toString();
      bn.set(o, (l) => {
        n(l.payload);
      }), a.postMessage({ id: o, name: e, payload: t }, r);
    });
  });
}
let ps = (e, t, r, n) => cr("findClusters", [e, t, r, n], [e.buffer]), vs = (...e) => cr("dynamicLabelPlacement", e), gs = (...e) => cr("textSummarizerCreate", e), ys = (...e) => cr("textSummarizerDestroy", e), ms = (...e) => cr("textSummarizerAdd", e), xs = (...e) => cr("textSummarizerSummarize", e);
async function xi(e, t, r, n, i) {
  let a = new Hr(r, e, t), o = n.reduce((v, g) => Math.min(v, g.level ?? 0), 0), l = n.reduce((v, g) => Math.max(v, g.level ?? 0), 0), u = r.scale, s = r.scale / 2, f = s * 4, d = u / f, p = n.map((v) => {
    let g = a.pixelLocation(v.x, v.y), x = v.level ?? 0, y = x == 0 ? 14 : 12, _ = ds({
      text: v.text,
      fontSize: y,
      fontFamily: i
    });
    return _.width += 4, _.height += 4, {
      text: v.text,
      fontSize: y,
      bounds: {
        xMin: g.x - _.width / 2,
        xMax: g.x + _.width / 2,
        yMin: g.y - _.height / 2,
        yMax: g.y + _.height / 2
      },
      locationAtZero: g,
      priority: v.priority,
      minScale: v.level == l ? null : d * Math.pow(2, -x) / 1.2,
      maxScale: v.level == o ? null : d * Math.pow(2, -x + 1),
      coordinate: { x: v.x, y: v.y },
      placement: null
    };
  }), h = await vs(p, { globalMaxScale: u / s });
  for (let v = 0; v < h.length; v++) {
    let g = h[v];
    if (g != null) {
      let x = u / g.minScale, y = u / g.maxScale;
      p[v].placement = { minScale: y, maxScale: x };
    }
  }
  return p;
}
function _s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _i = { exports: {} }, bi;
function bs() {
  return bi || (bi = 1, (function(e) {
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
  })(_i)), _i.exports;
}
var ws = bs();
const wi = /* @__PURE__ */ _s(ws);
function As(e, t) {
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
function Ts(e, t) {
  const r = As(e, 5), n = Co(r);
  let i = Math.max(n.xMax - n.xMin, n.yMax - n.yMin) / 100, a = wi(r, i), o = 0;
  for (; a.length > t && o < 20; )
    i *= 1.1, o += 1, a = wi(r, i);
  return a;
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
function Rs(e, t) {
  return e == null ? Ai[t] : { ...Ai[t], ...e, ...e[t] != null ? e[t] : {} };
}
function Es(e, t, r, n, i, a, o) {
  let l = Math.max(n, i) / a, u = e / (r * r) / (l * l), s = 1 / (u / (a * a)) * 0.2, f = Math.sqrt(e / t / (l * l)), d = Math.log(f), p = Math.log(r), h = (Math.min(Math.max((p - d) * 2, -1), 1) + 1) / 2, v;
  if (o != null)
    v = o * a;
  else {
    let y = 0.25 / Math.sqrt(u);
    v = Math.max(0.2, Math.min(5, y)) * a;
  }
  let g = 1 - h, x = 0.5 + h * 0.5;
  return {
    densityScaler: s,
    densityAlpha: g,
    contoursAlpha: g,
    pointSize: v,
    pointAlpha: 0.7,
    pointsAlpha: x,
    densityBandwidth: 20
  };
}
var Ms = /* @__PURE__ */ Ft("<div></div>"), Fs = /* @__PURE__ */ gt("<circle></circle>"), Ss = /* @__PURE__ */ gt("<circle></circle>"), Bs = /* @__PURE__ */ gt('<text dominant-baseline="middle"> </text>'), Ds = /* @__PURE__ */ gt("<g></g>"), Cs = /* @__PURE__ */ gt("<g><!></g>"), Ps = /* @__PURE__ */ gt("<g></g>"), Us = /* @__PURE__ */ Ft('<div><canvas></canvas> <div><!></div> <svg role="none"><!><!><!><!></svg> <!> <!></div>');
function Ho(e, t) {
  Et(t, !0);
  let r = T(t, "data", 19, () => ({ x: new Float32Array(), y: new Float32Array(), category: null })), n = T(t, "categoryCount", 3, 1), i = T(t, "categoryColors", 3, null), a = T(t, "width", 3, 800), o = T(t, "height", 3, 800), l = T(t, "pixelRatio", 3, 2), u = T(t, "theme", 3, null), s = T(t, "config", 3, null), f = T(t, "totalCount", 3, null), d = T(t, "maxDensity", 3, null), p = T(t, "labels", 3, null), h = T(t, "queryClusterLabels", 3, null), v = T(t, "tooltip", 7, null), g = T(t, "selection", 7, null), x = T(t, "querySelection", 3, null), y = T(t, "rangeSelection", 7, null), _ = T(t, "defaultViewportState", 3, null), b = T(t, "viewportState", 7, null), F = T(t, "customTooltip", 3, null), R = T(t, "customOverlay", 3, null), D = T(t, "onViewportState", 3, null), O = T(t, "onTooltip", 3, null), I = T(t, "onSelection", 3, null), q = T(t, "onRangeSelection", 3, null), H = T(t, "cache", 3, null), Q = /* @__PURE__ */ P(() => s()?.colorScheme ?? "light"), W = /* @__PURE__ */ P(() => Rs(u(), c(Q))), be = /* @__PURE__ */ P(() => i() ?? Wr(n())), te = /* @__PURE__ */ P(() => b() ?? _() ?? { x: 0, y: 0, scale: 1 }), Ce = /* @__PURE__ */ P(() => new Hr(c(te), a(), o())), le = /* @__PURE__ */ P(() => c(Ce).pixelLocationFunction()), $ = /* @__PURE__ */ P(() => c(Ce).coordinateAtPixelFunction()), ue = /* @__PURE__ */ K(!1);
  function ie(w, A) {
    return w.x == A.x && w.y == A.y && w.category == A.category && w.text == A.text;
  }
  let Z = /* @__PURE__ */ P(() => g()?.length == 1 && v() != null && ie(g()[0], v()));
  function we(w) {
    _t(b(), w) || (b(w), D()?.(w));
  }
  function he(w) {
    _t(v(), w) || (v(w), O()?.(w));
  }
  function oe(w) {
    _t(g(), w) || (g(w), I()?.(w));
  }
  function ge(w) {
    _t(y(), w) || (y(w), q()?.(w));
  }
  let Le = /* @__PURE__ */ K(Ct([])), ye = /* @__PURE__ */ K(null), St = /* @__PURE__ */ K("none"), Xt = /* @__PURE__ */ P(() => a() * l()), S = /* @__PURE__ */ P(() => o() * l()), U = /* @__PURE__ */ K(null), k = /* @__PURE__ */ K(null), fe = /* @__PURE__ */ K(null), re = /* @__PURE__ */ P(() => s()?.minimumDensity ?? 1 / 16), Ye = /* @__PURE__ */ P(() => s()?.pointSize ?? null), Te = /* @__PURE__ */ P(() => s()?.mode ?? "points"), ot = /* @__PURE__ */ P(() => s()?.autoLabelEnabled), yt = /* @__PURE__ */ P(() => Es(d() ?? (f() ?? r().x.length) / 4, c(re), c(te).scale, c(Xt), c(S), l(), c(Ye))), at = /* @__PURE__ */ P(() => c(yt).pointSize), mt = !0;
  mr(() => {
    c(k)?.setProps({
      mode: c(Te),
      colorScheme: c(Q),
      viewportX: c(te).x,
      viewportY: c(te).y,
      viewportScale: c(te).scale,
      width: c(Xt),
      height: c(S),
      x: r().x,
      y: r().y,
      category: r().category,
      categoryCount: n(),
      categoryColors: c(be),
      ...c(yt)
    }) && (Jo(), (c(ot) !== !1 || p() != null) && mt && c(k) != null && r().x != null && r().x.length > 0 && _() != null && (mt = !1, ua(_())));
  });
  function Zo() {
    Qr = null, !(!c(U) || !c(k)) && (c(U).width = c(k).props.width, c(U).height = c(k).props.height, c(U).style.width = `${c(k).props.width / l()}px`, c(U).style.height = `${c(k).props.height / l()}px`, c(k).render());
  }
  let Qr = null;
  function Jo() {
    Qr == null && (Qr = requestAnimationFrame(Zo));
  }
  function Ko(w) {
    let A;
    function M() {
      A = w.getContext("webgl2", { antialias: !1 }), A.getExtension("EXT_color_buffer_float"), A.getExtension("EXT_float_blend"), A.getExtension("OES_texture_float_linear"), N(k, new Xu(A, c(Xt), c(S)), !0);
    }
    M(), w.addEventListener("webglcontextlost", () => {
      c(k)?.destroy(), N(k, null), A = null;
    }), w.addEventListener("webglcontextrestored", () => {
      M();
    });
  }
  function ea(w) {
    async function A() {
      let M = w.getContext("webgpu");
      if (M == null) {
        console.error("Could not get WebGPU canvas context");
        return;
      }
      let B = await navigator.gpu.requestAdapter();
      if (!B) {
        console.error("Could not request WebGPU adapter");
        return;
      }
      let C = 512 * 1048576, L = 512 * 1048576;
      C = Math.min(C, B.limits.maxBufferSize), L = Math.min(L, B.limits.maxStorageBufferBindingSize);
      let V = {
        requiredLimits: { maxBufferSize: C, maxStorageBufferBindingSize: L },
        requiredFeatures: ["shader-f16"]
      }, J = await B.requestDevice(V);
      J.lost.then((de) => {
        console.info(`WebGPU device was lost: ${de.message}`), de.reason != "destroyed" && (c(k)?.destroy(), N(k, null), A());
      });
      let ee = navigator.gpu.getPreferredCanvasFormat();
      M.configure({ device: J, format: ee, alphaMode: "premultiplied" }), N(k, new as(M, J, ee, c(Xt), c(S)), !0);
    }
    A();
  }
  function ta(w) {
    w != null && b() == null && we(w);
  }
  mr(() => ta(_())), Pn(() => {
    c(U) != null && (Mi() ? ea(c(U)) : (Ko(c(U)), N(fe, "WebGPU is unavailable. If you are using Safari, please enable the WebGPU feature flag.")));
  }), Fl(() => {
    c(k)?.destroy(), N(k, null);
  });
  function Yt(w) {
    let A = c(U)?.getBoundingClientRect() ?? { left: 0, top: 0 };
    return { x: w.clientX - A.left, y: w.clientY - A.top };
  }
  function ra(w) {
    w.preventDefault();
    let { x: A, y: M } = Yt(w), B = Math.exp(-w.deltaY / 200);
    na(B, { x: A, y: M });
  }
  function na(w, A) {
    let { x: M, y: B, scale: C } = c(te);
    he(null);
    let L = Math.min(100, Math.max(0.01, C * w)), V = c(U).getBoundingClientRect(), J = Math.max(V.width, V.height), ee = (A.x - V.width / 2) / J * 2, de = (V.height / 2 - A.y) / J * 2, je = M + ee / C - ee / L, Pe = B + de / C - de / L;
    we({ x: je, y: Pe, scale: L });
  }
  function ia(w) {
    he(null);
    let A = "pan";
    c(St) != "none" ? w.modifiers.shift || (A = c(St)) : w.modifiers.shift && (A = w.modifiers.meta ? "lasso" : "marquee");
    let M = Yt(w);
    switch (A) {
      case "marquee":
        return {
          move: (B) => {
            if (he(null), c(k) == null)
              return;
            let C = Yt(B), L = c($)(M.x, M.y), V = c($)(C.x, C.y);
            ge({
              xMin: Math.min(L.x, V.x),
              yMin: Math.min(L.y, V.y),
              xMax: Math.max(L.x, V.x),
              yMax: Math.max(L.y, V.y)
            });
          }
        };
      case "lasso": {
        let B = [c($)(M.x, M.y)];
        return {
          move: (C) => {
            if (he(null), c(k) == null)
              return;
            let L = Yt(C);
            B = [...B, c($)(L.x, L.y)], B.length >= 3 && ge(Ts(B, 24));
          }
        };
      }
      case "pan": {
        let B = c($)(0, 0), C = c($)(1, 1), L = B.x - C.x, V = B.y - C.y, J = c(te).x, ee = c(te).y;
        return {
          move: (de) => {
            we({
              x: J + (de.clientX - w.clientX) * L,
              y: ee + (de.clientY - w.clientY) * V,
              scale: c(te).scale
            });
          }
        };
      }
    }
  }
  async function oa(w) {
    if (y() != null)
      ge(null);
    else {
      const A = await Ln(Yt(w));
      if (A == null)
        oe([]), he(null);
      else if (w.modifiers.shift || w.modifiers.ctrl || w.modifiers.meta) {
        let M = g()?.findIndex((B) => B.x == A.x && B.y == A.y && B.category == A.category);
        g() == null || M == null || M < 0 ? (oe([...g() ?? [], A]), he(A)) : (oe([
          ...g().slice(0, M),
          ...g().slice(M + 1)
        ]), he(null));
      } else
        oe([A]), he(A);
    }
  }
  let Zr = ql(
    async (w) => {
      let A = w ? Yt(w) : null;
      if (g() != null && g().length == 1) {
        let M = c(le)(g()[0].x, g()[0].y);
        A != null && zl(A, M) < 10 && he(g()[0]);
      } else
        he(await Ln(A));
    },
    () => v() != null
  );
  function aa(w) {
    w != null ? c(ue) || Zr(w) : Zr(null);
  }
  mr(() => {
    c(ue) && Zr(null);
  });
  async function Ln(w) {
    if (c(k) == null || w == null || x() == null)
      return null;
    let { x: A, y: M } = c($)(w.x, w.y), B = Math.abs(c($)(w.x + 1, w.y).x - A);
    return await x()(A, M, B);
  }
  async function On(w, A, M, B = 5e-3) {
    let C = await w.densityMap(1e3, 1e3, A, M), L = await ps(C.data, C.width, C.height), V = [];
    for (let ee = 0; ee < L.length; ee++) {
      let de = L[ee], je = C.coordinateAtPixel(de.meanX, de.meanY), Pe = de.boundaryRectApproximation.map(([$e, jt, Kr, lt]) => {
        let Bt = C.coordinateAtPixel($e, jt), Wt = C.coordinateAtPixel(Kr, lt);
        return {
          xMin: Math.min(Bt.x, Wt.x),
          xMax: Math.max(Bt.x, Wt.x),
          yMin: Math.min(Bt.y, Wt.y),
          yMax: Math.max(Bt.y, Wt.y)
        };
      });
      V.push({
        x: je.x,
        y: je.y,
        sumDensity: de.sumDensity,
        rects: Pe,
        bandwidth: A
      });
    }
    let J = V.reduce((ee, de) => Math.max(ee, de.sumDensity), 0);
    return V.filter((ee) => ee.sumDensity / J > B);
  }
  async function la(w) {
    if (c(k) == null || h() == null)
      return [];
    let A = await Vl({
      autoLabel: {
        version: 1,
        viewport: w,
        stopWords: s()?.autoLabelStopWords,
        densityThreshold: s()?.autoLabelDensityThreshold
      }
    });
    if (H() != null) {
      let C = await H().get(A);
      if (C != null)
        return C;
    }
    let M = await On(c(k), 10, w, s()?.autoLabelDensityThreshold ?? 5e-3);
    if (M = M.concat(await On(c(k), 5, w)), h()) {
      let C = await h()(M.map((L) => L.rects));
      for (let L = 0; L < M.length; L++)
        M[L].label = C[L];
    }
    let B = M.filter((C) => C.label != null && C.label.length > 0).map((C) => ({
      x: C.x,
      y: C.y,
      text: C.label,
      priority: C.sumDensity,
      level: C.bandwidth == 10 ? 0 : 1
    }));
    return H() != null && await H().set(A, B), B;
  }
  async function ua(w) {
    if (c(k) != null)
      if (p() != null)
        N(Le, await xi(a(), o(), w, p(), c(W).fontFamily), !0);
      else {
        N(ye, "Generating labels...");
        let A = await la(w);
        N(Le, await xi(a(), o(), w, A, c(W).fontFamily), !0), N(ye, null);
      }
  }
  class sa {
    content;
    constructor(A, M) {
      let B = document.createElement("div");
      this.content = B, this.update(M), A.appendChild(B);
    }
    update(A) {
      let M = this.content;
      M.style.fontFamily = A.fontFamily, c(Q) == "light" ? (M.style.color = "#000", M.style.background = "#fff", M.style.border = "1px solid #000") : (M.style.color = "#ccc", M.style.background = "#000", M.style.border = "1px solid #ccc"), M.style.borderRadius = "2px", M.style.padding = "5px", M.style.fontSize = "12px", M.style.maxWidth = "300px", M.innerText = A.tooltip.text ?? JSON.stringify(A.tooltip);
    }
  }
  var Mr = Us();
  let $n;
  var Jr = pe(Mr);
  z(Jr, "", {}, { position: "absolute", top: "0", left: "0" }), mn(Jr, (w) => N(U, w), () => c(U));
  var Fr = ne(Jr, 2);
  let qn;
  var fa = pe(Fr);
  {
    var ca = (w) => {
      const A = /* @__PURE__ */ P(() => Po(R())), M = /* @__PURE__ */ P(() => ({
        location: c(le),
        width: a(),
        height: o()
      }));
      var B = dr(), C = Qt(B);
      Sl(C, () => c(A), (L) => {
        var V = Ms();
        qe(V, (J, ee) => c(A)?.(J, ee), () => Uo(R(), { proxy: c(M) })), ae(L, V);
      }), ae(w, B);
    };
    Re(fa, (w) => {
      R() && w(ca);
    });
  }
  ce(Fr);
  var xt = ne(Fr, 2);
  z(xt, "", {}, { position: "absolute", left: "0", top: "0" });
  var zn = pe(xt);
  {
    var da = (w) => {
      const A = /* @__PURE__ */ P(() => {
        const { x: V, y: J } = c(le)(v().x, v().y);
        return { x: V, y: J };
      }), M = /* @__PURE__ */ P(() => Math.max(3, c(at) / l()) + 1);
      var B = dr(), C = Qt(B);
      {
        var L = (V) => {
          var J = Fs();
          let ee;
          Ne(() => {
            E(J, "cx", c(A).x), E(J, "cy", c(A).y), E(J, "r", c(M)), ee = z(J, "", ee, {
              stroke: c(Q) == "light" ? "#000" : "#fff",
              "stroke-width": 1,
              fill: "none"
            });
          }), ae(V, J);
        };
        Re(C, (V) => {
          isFinite(c(A).x) && isFinite(c(A).y) && isFinite(c(M)) && V(L);
        });
      }
      ae(w, B);
    };
    Re(zn, (w) => {
      v() != null && c(k) != null && w(da);
    });
  }
  var Gn = ne(zn);
  {
    var ha = (w) => {
      var A = dr(), M = Qt(A);
      rn(M, 17, g, tn, (B, C) => {
        const L = /* @__PURE__ */ P(() => {
          const { x: Pe, y: $e } = c(le)(c(C).x, c(C).y);
          return { x: Pe, y: $e };
        }), V = /* @__PURE__ */ P(() => c(C).category != null ? c(be)[c(C).category] : c(be)[0]), J = /* @__PURE__ */ P(() => Math.max(3, c(at) / l()) + 1);
        var ee = dr(), de = Qt(ee);
        {
          var je = (Pe) => {
            var $e = Ss();
            let jt;
            Ne(() => {
              E($e, "cx", c(L).x), E($e, "cy", c(L).y), E($e, "r", c(J)), jt = z($e, "", jt, {
                stroke: c(Q) == "light" ? "#000" : "#fff",
                "stroke-width": 2,
                fill: c(V)
              });
            }), ae(Pe, $e);
          };
          Re(de, (Pe) => {
            isFinite(c(L).x) && isFinite(c(L).y) && isFinite(c(J)) && Pe(je);
          });
        }
        ae(B, ee);
      }), ae(w, A);
    };
    Re(Gn, (w) => {
      g() != null && c(k) != null && w(ha);
    });
  }
  var Vn = ne(Gn);
  {
    var pa = (w) => {
      var A = Ps();
      rn(A, 21, () => c(Le), tn, (M, B) => {
        const C = /* @__PURE__ */ P(() => c(B).text.split(`
`)), L = /* @__PURE__ */ P(() => c(le)(c(B).coordinate.x, c(B).coordinate.y)), V = /* @__PURE__ */ P(() => c(B).placement != null && c(B).placement.minScale <= c(te).scale && c(te).scale <= c(B).placement.maxScale);
        var J = Cs(), ee = pe(J);
        {
          var de = (je) => {
            var Pe = Ds();
            rn(Pe, 21, () => c(C), tn, ($e, jt, Kr) => {
              var lt = Bs();
              E(lt, "x", 0);
              let Bt;
              var Wt = pe(lt, !0);
              ce(lt), Ne(() => {
                E(lt, "y", (Kr - (c(C).length - 1) / 2) * c(B).fontSize), E(lt, "font-size", c(B).fontSize), Bt = z(lt, "", Bt, {
                  "paint-order": "stroke",
                  "stroke-width": "4",
                  "stroke-linejoin": "round",
                  "stroke-linecap": "round",
                  "text-anchor": "middle",
                  fill: c(W).clusterLabelColor,
                  stroke: c(W).clusterLabelOutlineColor,
                  opacity: c(W).clusterLabelOpacity,
                  "user-select": "none",
                  "-webkit-user-select": "none",
                  "font-family": c(W).fontFamily
                }), xr(Wt, c(jt));
              }), ae($e, lt);
            }), ce(Pe), ae(je, Pe);
          };
          Re(ee, (je) => {
            c(V) && je(de);
          });
        }
        ce(J), Ne(() => E(J, "transform", `translate(${c(L).x ?? ""},${c(L).y ?? ""})`)), ae(M, J);
      }), ce(A), ae(w, A);
    };
    Re(Vn, (w) => {
      w(pa);
    });
  }
  var va = ne(Vn);
  {
    var ga = (w) => {
      var A = dr(), M = Qt(A);
      {
        var B = (L) => {
          Wl(L, {
            get value() {
              return y();
            },
            get pointLocation() {
              return c(le);
            }
          });
        }, C = (L) => {
          $l(L, {
            get value() {
              return y();
            },
            onChange: ge,
            get pointLocation() {
              return c(le);
            },
            get coordinateAtPoint() {
              return c($);
            },
            preventHover: (V) => {
              N(ue, V, !0);
            }
          });
        };
        Re(M, (L) => {
          y() instanceof Array ? L(B) : L(C, !1);
        });
      }
      ae(w, A);
    };
    Re(va, (w) => {
      y() != null && c(k) != null && w(ga);
    });
  }
  ce(xt), qe(xt, (w, A) => We?.(w, A), () => ({ click: oa, drag: ia, hover: aa }));
  var Xn = ne(xt, 2);
  {
    var ya = (w) => {
      const A = /* @__PURE__ */ P(() => c(le)(v().x, v().y));
      {
        let M = /* @__PURE__ */ P(() => Math.max(3, c(at) / l())), B = /* @__PURE__ */ P(() => F() ?? {
          class: sa,
          props: {
            colorScheme: c(Q),
            fontFamily: c(W).fontFamily
          }
        });
        au(w, {
          get location() {
            return c(A);
          },
          get allowInteraction() {
            return c(Z);
          },
          get targetHeight() {
            return c(M);
          },
          get customTooltip() {
            return c(B);
          },
          get tooltip() {
            return v();
          }
        });
      }
    };
    Re(Xn, (w) => {
      v() != null && c(k) != null && w(ya);
    });
  }
  var ma = ne(Xn, 2);
  {
    var xa = (w) => {
      {
        let A = /* @__PURE__ */ P(() => c(ye) ?? c(fe)), M = /* @__PURE__ */ P(() => 1 / (c(le)(1, 0).x - c(le)(0, 0).x));
        nu(w, {
          get resolvedTheme() {
            return c(W);
          },
          get statusMessage() {
            return c(A);
          },
          get distancePerPoint() {
            return c(M);
          },
          get pointCount() {
            return r().x.length;
          },
          get selectionMode() {
            return c(St);
          },
          onSelectionMode: (B) => N(St, B, !0)
        });
      }
    };
    Re(ma, (w) => {
      c(W).statusBar && w(xa);
    });
  }
  ce(Mr), Ne(() => {
    $n = z(Mr, "", $n, {
      width: `${a() ?? ""}px`,
      height: `${o() ?? ""}px`,
      position: "relative"
    }), qn = z(Fr, "", qn, {
      width: `${a() ?? ""}px`,
      height: `${o() ?? ""}px`,
      position: "absolute",
      top: "0",
      left: "0"
    }), E(xt, "width", a()), E(xt, "height", o());
  }), xl("wheel", xt, ra), ae(e, Mr), Mt();
}
function Qo(e, t, r = 0, n = e.length - 1, i = ks) {
  for (; n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, s = t - r + 1, f = Math.log(u), d = 0.5 * Math.exp(2 * f / 3), p = 0.5 * Math.sqrt(f * d * (u - d) / u) * (s - u / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - s * d / u + p)), v = Math.min(n, Math.floor(t + (u - s) * d / u + p));
      Qo(e, t, h, v, i);
    }
    const a = e[t];
    let o = r, l = n;
    for (pr(e, r, t), i(e[n], a) > 0 && pr(e, r, n); o < l; ) {
      for (pr(e, o, l), o++, l--; i(e[o], a) < 0; ) o++;
      for (; i(e[l], a) > 0; ) l--;
    }
    i(e[r], a) === 0 ? pr(e, r, l) : (l++, pr(e, l, n)), l <= t && (r = l + 1), t <= l && (n = l - 1);
  }
}
function pr(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function ks(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Ti(e) {
  let t = new Float32Array(e), r = Math.floor(e.length / 2);
  return Qo(t, r), t[r];
}
function Ns(e) {
  return e.length == 0 ? 0 : e.reduce((t, r) => t + r, 0) / e.length;
}
function Ri(e) {
  if (e.length == 0)
    return 0;
  let t = Ns(e);
  return Math.sqrt(e.reduce((r, n) => r + (n - t) * (n - t)) / e.length);
}
function Is(e, t, r, n = 0, i = 0) {
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
function Ls(e, t) {
  Et(t, !0);
  let r = T(t, "tooltip", 3, null), n = T(t, "selection", 3, null), i = T(t, "rangeSelection", 3, null), a = T(t, "categoryColors", 3, null), o = T(t, "width", 3, null), l = T(t, "height", 3, null), u = T(t, "pixelRatio", 3, null), s = T(t, "theme", 3, null), f = T(t, "config", 3, null), d = T(t, "viewportState", 3, null), p = T(t, "labels", 3, null), h = T(t, "customTooltip", 3, null), v = T(t, "customOverlay", 3, null), g = T(t, "querySelection", 3, null), x = T(t, "queryClusterLabels", 3, null), y = T(t, "onViewportState", 3, null), _ = T(t, "onTooltip", 3, null), b = T(t, "onSelection", 3, null), F = T(t, "onRangeSelection", 3, null), R = T(t, "cache", 3, null), D = /* @__PURE__ */ P(() => O(t.data));
  function O(I) {
    let q = 1;
    I.category != null && (q = I.category.reduce(($, ue) => Math.max($, ue), 0) + 1);
    let H = Ti(I.x), Q = Ti(I.y), W = Ri(I.x), be = Ri(I.y), te = 1 / (Math.max(W, be, 1e-3) * 3), Ce = 0.1 / te, le = Is(I.x, I.y, Ce, H, Q);
    return {
      count: I.x.length,
      categoryCount: q,
      maxDensity: le,
      defaultViewportState: { x: H, y: Q, scale: te * 0.95 }
    };
  }
  {
    let I = /* @__PURE__ */ P(() => o() ?? 800), q = /* @__PURE__ */ P(() => l() ?? 800), H = /* @__PURE__ */ P(() => u() ?? 2), Q = /* @__PURE__ */ P(() => ({
      x: t.data.x,
      y: t.data.y,
      category: t.data.category ?? null
    }));
    Ho(e, {
      get width() {
        return c(I);
      },
      get height() {
        return c(q);
      },
      get pixelRatio() {
        return c(H);
      },
      get theme() {
        return s();
      },
      get config() {
        return f();
      },
      get data() {
        return c(Q);
      },
      get totalCount() {
        return c(D).count;
      },
      get maxDensity() {
        return c(D).maxDensity;
      },
      get categoryCount() {
        return c(D).categoryCount;
      },
      get categoryColors() {
        return a();
      },
      get defaultViewportState() {
        return c(D).defaultViewportState;
      },
      get querySelection() {
        return g();
      },
      get queryClusterLabels() {
        return x();
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
        return _();
      },
      get selection() {
        return n();
      },
      get onSelection() {
        return b();
      },
      get viewportState() {
        return d();
      },
      get onViewportState() {
        return y();
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
class Ys {
  component;
  currentProps;
  constructor(t, r) {
    this.currentProps = { ...r }, this.component = Bo({ component: Ls, target: t, props: r });
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
function Ei(e, t) {
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
function Os(e, t, r) {
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
    let r = Co(t);
    return m.and(
      m.isBetween(m.column(e.x), [r.xMin, r.xMax]),
      m.isBetween(m.column(e.y), [r.yMin, r.yMax]),
      Os(m.column(e.x), m.column(e.y), t)
    );
  } else
    return m.and(
      m.isBetween(m.column(e.x), [t.xMin, t.xMax]),
      m.isBetween(m.column(e.y), [t.yMin, t.yMax])
    );
}
async function qs(e, t) {
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
  ), { centerX: o, centerY: l, stdX: u, stdY: s, maxCategory: f } = a.get(0), d = 1 / (Math.max(u, s, 1e-3) * 3), p = 0.1 / d, h = m.sql`FLOOR((${m.column(r)} - ${o}) / ${p})`, v = m.sql`FLOOR((${m.column(n)} - ${l}) / ${p})`, g = t.category != null ? m.column(t.category) : null, x = g != null ? [h, v, g] : [h, v], y = m.Query.from(
    m.Query.from(i).select({ count: m.sql`COUNT(*)` }).groupby(...x)
  ).select({
    totalCount: m.sql`SUM(count)::INT`,
    maxCount: m.sql`MAX(count)::INT`
  });
  a = await e.query(y);
  let { maxCount: _, totalCount: b } = a.get(0), F = _ / (p * p);
  return {
    centerX: o,
    centerY: l,
    scaler: d,
    totalCount: b,
    categoryCount: (f ?? 0) + 1,
    maxDensity: F
  };
}
class zs {
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
function Gs(e, t) {
  Et(t, !0);
  let r = T(t, "coordinator", 19, _a), n = T(t, "category", 3, null), i = T(t, "text", 3, null), a = T(t, "identifier", 3, null), o = T(t, "filter", 3, null), l = T(t, "categoryColors", 3, null), u = T(t, "tooltip", 3, null), s = T(t, "additionalFields", 3, null), f = T(t, "selection", 3, null), d = T(t, "rangeSelection", 3, null), p = T(t, "rangeSelectionValue", 3, null), h = T(t, "width", 3, null), v = T(t, "height", 3, null), g = T(t, "pixelRatio", 3, null), x = T(t, "config", 3, null), y = T(t, "theme", 3, null), _ = T(t, "viewportState", 3, null), b = T(t, "labels", 3, null), F = T(t, "customTooltip", 3, null), R = T(t, "customOverlay", 3, null), D = T(t, "onViewportState", 3, null), O = T(t, "onTooltip", 3, null), I = T(t, "onSelection", 3, null), q = T(t, "onRangeSelection", 3, null), H = T(t, "cache", 3, null), Q = /* @__PURE__ */ K(new Float32Array()), W = /* @__PURE__ */ K(new Float32Array()), be = /* @__PURE__ */ K(null), te = /* @__PURE__ */ K(1), Ce = /* @__PURE__ */ K(1), le = /* @__PURE__ */ K(1), $ = /* @__PURE__ */ K(null), ue = /* @__PURE__ */ K(null), ie = /* @__PURE__ */ K(null), Z = /* @__PURE__ */ K(null), we = /* @__PURE__ */ K(null);
  ut(() => {
    let S = {
      coordinator: r(),
      source: {
        table: t.table,
        x: t.x,
        y: t.y,
        category: n()
      }
    }, U = null, k = !1;
    async function fe() {
      let re = S.source, Ye = await qs(S.coordinator, re);
      if (k)
        return;
      let Te = Ye.scaler * 0.95;
      N($, {
        x: Ye.centerX,
        y: Ye.centerY,
        scale: Te
      }), N(Ce, Ye.totalCount), N(le, Ye.maxDensity), N(te, Ye.categoryCount), U = ba({
        coordinator: S.coordinator,
        selection: o() ?? void 0,
        query: (ot) => m.Query.from(re.table).select({
          x: m.sql`${m.column(re.x)}::FLOAT`,
          y: m.sql`${m.column(re.y)}::FLOAT`,
          ...re.category != null ? { c: m.sql`${m.column(re.category)}::UTINYINT` } : {}
        }).where(ot),
        queryResult: (ot) => {
          let yt = ot.getChild("x").toArray(), at = ot.getChild("y").toArray(), mt = ot.getChild("c")?.toArray() ?? null;
          yt != null && !(yt instanceof Float32Array) && (yt = new Float32Array(yt)), at != null && !(at instanceof Float32Array) && (at = new Float32Array(at)), mt != null && !(mt instanceof Uint8Array) && (mt = new Uint8Array(mt)), N(Q, yt), N(W, at), N(be, mt), he(null), oe(null);
        }
      }), U.reset = () => {
        ge();
      }, N(we, U);
    }
    return fe(), () => {
      N(we, null), k = !0, U?.destroy();
    };
  }), ut(() => {
    if (Yn(u())) {
      let S = c(we);
      if (S == null)
        return;
      let U = u();
      N(ue, U.valueFor(S) ?? null);
      let k = () => {
        N(ue, U.valueFor(S) ?? null);
      };
      return ut(() => {
        let fe = c(ue), re = {
          x: t.x,
          y: t.y,
          category: n(),
          identifier: a()
        };
        U.update({
          source: S,
          clients: (/* @__PURE__ */ new Set()).add(S),
          predicate: fe != null ? Ei(re, [fe]) : null,
          value: fe
        });
      }), U.addEventListener("value", k), () => {
        U.removeEventListener("value", k), U.update({
          source: S,
          clients: (/* @__PURE__ */ new Set()).add(S),
          value: null,
          predicate: null
        });
      };
    } else if (u() == null || typeof u() == "object")
      N(ue, u());
    else {
      if (c(ue)?.identifier == u())
        return;
      let S = !1;
      return St([u()]).then((U) => {
        S || (U.length > 0 ? N(ue, U[0]) : N(ue, null));
      }), () => {
        S = !0;
      };
    }
  });
  function he(S) {
    _t(u(), S) || (N(ue, S), O()?.(S));
  }
  ut(() => {
    if (Yn(f())) {
      let S = c(we);
      if (S == null)
        return;
      let U = f();
      N(ie, U.valueFor(S) ?? null);
      let k = () => {
        N(ie, U.valueFor(S) ?? null);
      };
      return ut(() => {
        let fe = c(ie), re = {
          x: t.x,
          y: t.y,
          category: n(),
          identifier: a()
        };
        U.update({
          source: S,
          clients: (/* @__PURE__ */ new Set()).add(S),
          predicate: fe != null ? Ei(re, fe) : null,
          value: fe
        });
      }), U.addEventListener("value", k), () => {
        U.removeEventListener("value", k), U.update({
          source: S,
          clients: (/* @__PURE__ */ new Set()).add(S),
          value: null,
          predicate: null
        });
      };
    } else if (f() == null)
      N(ie, null);
    else if (f().length == 0)
      N(ie, []);
    else if (f().every((S) => typeof S == "object"))
      N(ie, f());
    else {
      let S = !1;
      return St(f()).then((U) => {
        S || N(ie, U);
      }), () => {
        S = !0;
      };
    }
  });
  function oe(S) {
    _t(f(), S) || (N(ie, S), I()?.(S));
  }
  ut(() => {
    let S = c(we);
    if (S == null)
      return;
    let U = d();
    if (U != null)
      return ut(() => {
        let k = c(Z), fe = { x: t.x, y: t.y }, re = {
          source: S,
          clients: (/* @__PURE__ */ new Set()).add(S),
          predicate: k != null ? $s(fe, k) : null,
          value: k
        };
        U.update(re), U.activate(re);
      }), () => {
        U.update({
          source: S,
          clients: (/* @__PURE__ */ new Set()).add(S),
          value: null,
          predicate: null
        });
      };
  }), ut(() => {
    _t(Gt(() => c(Z)), p()) || N(Z, p());
  });
  function ge() {
    oe(null), he(null), q()?.(null), N(Z, null);
  }
  let Le = /* @__PURE__ */ P(() => new zs(r(), {
    table: t.table,
    x: t.x,
    y: t.y,
    category: n(),
    text: i(),
    identifier: a(),
    additionalFields: s()
  }));
  async function ye(S, U, k) {
    return await c(Le).queryClosestPoint(o()?.predicate?.(c(we)), S, U, k);
  }
  async function St(S) {
    return await c(Le).queryPoints(S);
  }
  async function Xt(S) {
    if (i() == null)
      return S.map(() => null);
    let U = await gs({
      regions: S,
      stopWords: x()?.autoLabelStopWords ?? null
    }), k = 0, fe = 1e4, re = null;
    for (; ; ) {
      let Te = await r().query(m.Query.from(t.table).select({
        x: m.column(t.x),
        y: m.column(t.y),
        text: m.column(i())
      }).offset(k).limit(fe)), ot = {
        x: Te.getChild("x").toArray(),
        y: Te.getChild("y").toArray(),
        text: Te.getChild("text").toArray()
      };
      if (re != null && await re, re = ms(U, ot), Te.getChild("text").length < fe)
        break;
      k += fe;
    }
    re != null && await re;
    let Ye = await xs(U);
    return await ys(U), Ye.map((Te) => Te.length == 0 ? null : Te.length > 2 ? Te.slice(0, 2).join("-") + `-
` + Te.slice(2).join("-") : Te.join("-"));
  }
  {
    let S = /* @__PURE__ */ P(() => h() ?? 800), U = /* @__PURE__ */ P(() => v() ?? 800), k = /* @__PURE__ */ P(() => g() ?? 2), fe = /* @__PURE__ */ P(() => ({
      x: c(Q),
      y: c(W),
      category: c(be)
    }));
    Ho(e, {
      get width() {
        return c(S);
      },
      get height() {
        return c(U);
      },
      get pixelRatio() {
        return c(k);
      },
      get theme() {
        return y();
      },
      get config() {
        return x();
      },
      get data() {
        return c(fe);
      },
      get totalCount() {
        return c(Ce);
      },
      get maxDensity() {
        return c(le);
      },
      get categoryCount() {
        return c(te);
      },
      get categoryColors() {
        return l();
      },
      get defaultViewportState() {
        return c($);
      },
      querySelection: ye,
      queryClusterLabels: Xt,
      get labels() {
        return b();
      },
      get customTooltip() {
        return F();
      },
      get customOverlay() {
        return R();
      },
      get tooltip() {
        return c(ue);
      },
      onTooltip: he,
      get selection() {
        return c(ie);
      },
      onSelection: oe,
      get viewportState() {
        return _();
      },
      get onViewportState() {
        return D();
      },
      get rangeSelection() {
        return c(Z);
      },
      onRangeSelection: (re) => {
        N(Z, re), q()?.(re);
      },
      get cache() {
        return H();
      }
    });
  }
  Mt();
}
class js {
  component;
  currentProps;
  constructor(t, r) {
    this.currentProps = { ...r }, this.component = Bo({ component: Gs, target: t, props: r });
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
function Ws() {
  return Mi() ? 32 : 4;
}
export {
  js as K,
  Ws as Q,
  Wr as a,
  Ys as j
};
