import { useRef as a, useEffect as n, createElement as m } from "react";
import { j as u, K as d } from "./chunk-b1Rr1vPt.js";
import { a as M, Q as j } from "./chunk-b1Rr1vPt.js";
import { X as l } from "./chunk-QHxqa4vm.js";
import { f as N } from "./chunk-QHxqa4vm.js";
import { f as p } from "./chunk-Ocp2gizC.js";
import { A as V } from "./chunk-Ocp2gizC.js";
import { createKNN as k, createUMAP as D } from "./umap.js";
function e(s, f = "div", i = { display: "flex" }) {
  return (t) => {
    const o = a(null), r = a(null);
    return n(() => {
      let c = new s(o.current, t);
      return r.current = c, () => {
        r.current?.destroy();
      };
    }, []), n(() => {
      r.current?.update(t);
    }, [t]), m(f, { ref: o, style: i });
  };
}
const E = e(p, "div", {
  display: "flex",
  width: "100%",
  height: "100%"
}), b = e(u), h = e(d), w = e(l);
export {
  E as EmbeddingAtlas,
  b as EmbeddingView,
  h as EmbeddingViewMosaic,
  w as Table,
  k as createKNN,
  D as createUMAP,
  M as defaultCategoryColors,
  V as defaultCharts,
  N as findClusters,
  j as maxDensityModeCategories
};
