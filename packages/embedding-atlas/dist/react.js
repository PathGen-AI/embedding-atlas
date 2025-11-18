import { useRef as a, useEffect as n, createElement as m } from "react";
import { K as u, Q as d } from "./chunk-BVOctT9v.js";
import { Z, a as v } from "./chunk-BVOctT9v.js";
import { Z as l } from "./chunk-7mfApMgY.js";
import { f as N } from "./chunk-7mfApMgY.js";
import { g as p } from "./chunk-mP_woFtY.js";
import { O as R } from "./chunk-mP_woFtY.js";
import { createKNN as k, createUMAP as D } from "./umap.js";
function e(s, i = "div", c = { display: "flex" }) {
  return (t) => {
    const o = a(null), r = a(null);
    return n(() => {
      let f = new s(o.current, t);
      return r.current = f, () => {
        r.current?.destroy();
      };
    }, []), n(() => {
      r.current?.update(t);
    }, [t]), m(i, { ref: o, style: c });
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
  Z as defaultCategoryColors,
  R as defaultCharts,
  N as findClusters,
  v as maxDensityModeCategories
};
