/*! AgoraRTC|BUILD v3.2.1-0-gf393343 */ ! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("AgoraRTC", [], t) : "object" == typeof exports ? exports.AgoraRTC = t() : e.AgoraRTC = t() }(window, (function() {
  return function(e) {
    var t = {};

    function n(r) { if (t[r]) return t[r].exports; var i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
    return n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
        for (var i in e) n.d(r, i, function(t) { return e[t] }.bind(null, i));
      return r
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 92)
  }([function(e, t, n) {
    "use strict";
    n.r(t);
    var r, i = n(11),
      o = n.n(i),
      a = function() { var e = new Date; return e.toTimeString().split(" ")[0] + ":" + e.getMilliseconds() },
      s = n(14),
      c = n(3),
      d = n(1),
      u = n(46),
      l = n.n(u),
      p = n(47),
      f = n.n(p),
      g = new Array(32).fill(void 0);

    function m(e) { return g[e] }
    g.push(void 0, null, !0, !1);
    var h = g.length;

    function v(e) { var t = m(e); return function(e) { e < 36 || (g[e] = h, h = e) }(e), t }
    var E = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
    E.decode();
    var _ = null;

    function S() { return null !== _ && _.buffer === r.memory.buffer || (_ = new Uint8Array(r.memory.buffer)), _ }

    function y(e, t) { return E.decode(S().subarray(e, e + t)) }

    function R(e) { h === g.length && g.push(g.length + 1); var t = h; return h = g[t], g[t] = e, t }
    var T = 0,
      I = new TextEncoder("utf-8"),
      A = "function" == typeof I.encodeInto ? function(e, t) { return I.encodeInto(e, t) } : function(e, t) { var n = I.encode(e); return t.set(n), { read: e.length, written: n.length } };
    var b = null;

    function O() { return null !== b && b.buffer === r.memory.buffer || (b = new Int32Array(r.memory.buffer)), b }
    var C = function() {
        function e() { l()(this, e) }
        return f()(e, [{
          key: "free",
          value: function() {
            var e = this.ptr;
            this.ptr = 0, r.__wbg_signmanager_free(e)
          }
        }, { key: "get_digest", value: function(e) { return v(r.signmanager_get_digest(this.ptr, R(e))) } }], [{ key: "__wrap", value: function(t) { var n = Object.create(e.prototype); return n.ptr = t, n } }, { key: "new", value: function() { var t = r.signmanager_new(); return e.__wrap(t) } }]), e
      }(),
      N = !1,
      w = null;
    var L, D = 0,
      k = "free",
      M = [],
      P = [],
      U = 0;
    (w ? Promise.resolve(w) : new Promise((function(e) {
      N || r || function e() {
        var t = { wbg: {} };
        t.wbg.__wbindgen_object_drop_ref = function(e) { v(e) }, t.wbg.__wbindgen_string_new = function(e, t) { return R(y(e, t)) }, t.wbg.__wbindgen_string_get = function(e, t) {
          var n = m(t),
            i = "string" == typeof n ? n : void 0,
            o = null == i ? 0 : function(e, t, n) {
              if (void 0 === n) {
                var r = I.encode(e),
                  i = t(r.length);
                return S().subarray(i, i + r.length).set(r), T = r.length, i
              }
              for (var o = e.length, a = (i = t(o), S()), s = 0; s < o; s++) {
                var c = e.charCodeAt(s);
                if (c > 127) break;
                a[i + s] = c
              }
              if (s !== o) {
                0 !== s && (e = e.slice(s)), i = n(i, o, o = s + 3 * e.length);
                var d = S().subarray(i + s, i + o);
                s += A(e, d).written
              }
              return T = s, i
            }(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
            a = T;
          O()[e / 4 + 1] = a, O()[e / 4 + 0] = o
        }, t.wbg.__wbindgen_throw = function(e, t) { throw new Error(y(e, t)) };
        for (var n = Uint8Array.from(atob("55ZBgM/2Bzm2JGhNn//ljJsSorhWUYE66a1Hf8O7pfQGR2zfol8qRP6CDhsi3iG7nFZu9stSyPq/qu2Rr2w8QkTGP6Gm2cg3J5qsQgq5bcHA9mDpGv/b24uEwsixZVl1eGkdV4SB/6ayw2v48hLmNA+w5UlnTCiWwerzESQPidpSUMbamXL3pU815EQm12GhhZ9aWzo568gdZvXevBc/WHfFKQSuTgWva4e4eSmW7UxpH8sY4HlDsCTMu0WwEB8B95XsZwOp3GLgfOQmJBw036DgIKU+XGn4KpIEq77WE/h6R7sZKsFUp+u+2cDnW7IPNe7xfd9areFo0EUh0/9K9CqxUkLqMB5hlgS1fwQHRzKPhQ7gALyc6HwMCPooS0M1NrzjdfH3vUn0PeQ1GBlnrnXgiu8TunfHg5TcbBfPEbxbyiiow1Np+VEBlHNh00PiAWyu024NHaPbDGfMtzu4WF02fgkh8Pxb7bCSpCZndjTytQgAzfZxk2bbe6NoHHFnsviqYzHVpxoPEk7icHRWcZC28d2muthq673KCMQay1fJcPqSTuYhWUZS5eylIguT33lP+TBbOWQI8KtCzBN5FzqILfKzRkzrJ3L192BUF8SILdwmriv10HU9ZlQAyQA1VdegnzOl/dYk2GGsB3724y7w/7aJLHJzEfwrfIzFd5CoAft7ct+zQW2G4Wm2kpoz6uJfgrNyykQgwCO6pkPy1ADrBUuJon9ySjhgcFru6AKa99wTlIhzBw3FKFt9Aa1/1KWWy7W1wAIGzRTs/7rLXRkKFjNqGVXBdoVNTpHFtfEFsuX0X98ISr0Bennlx0h2Yl/CGNb5Kc7i3bio1XJHX24avcMsEAwfdfskCki4/dkStn7QC97YJC3z+7gD84IiEEeGcnn7gHJyeALr0ssbqDUcKqxEyheyFs9FToJziLB+eYw6nMQLmYTrQyrg3b+3YBdgx7pzNEDSyz3tmaPaikwcLSyB/Igo6U/oP/fS2TZLtmN03m4iS76YrDJAgI+2W1GboabuixVcLdxm6SQ4CzUnHSPl1knhcGhW/+OcKa53tB5j5C4wEpiENv6T9PUu4K0YwtEAqFbd/eN2wVAYCKn/nlVA8uiESxCfgs0411mRFk4i1pixJLPP5AFPG9QFZnj6X19TqmhmIhl8D6Q1rOvPCqPZV/z04HjayX4qPzPzP/5NVilN/sHhQe7ulriGmU/3rj5QEuiOymsL7EdCQMc/4mXDPdVrDBfbt6dnv11oLYGmqOP1oSBj02FtsmYrMn9pRg7HJoCh86jAnzuOYn4tGnQ4gw/89sb64NAXcoIbTIjyiHBAQCCK2Yn4I/fNF10rkQlvSvkpqLG2eYpJmpWrcouNDEUtJFR607oNraLdmUKyLc1g7SNpS+ofp1FL6rua/HFSrb5kTF2Vcy2gl+6MACbFRChKoP/un7IbYJuOima/JWFZcs/MXokIx+ijuqjMtVKaYRTzNI5ncPa2y/EXTNdUUFpMhbE7sa39Uoh6Hci/viXy2KFTNbiw+BkWOPnyOr04LjIYKlJ8ud/KvjuvNUGQOHJvj6tpZJxj97tr0OrgZCAxSHGU5JQfqEd/U0QfzGM8Wh3zdsnd9LhoIIRJAtyA2PmjwJk4zTxeYlgwPqAVTU3+9bA1QD+jLZZ3Ffk3MRq+Ar2RT8YN6ASR4bItt3omBj0LJe0zeGY3OzfhljL6LA1m4+IUp+CzeWo0aEjnvRk3iCJeajgdC+NUGB5qh8PWKtBeC58woavnRjvRNphXS4b9M7Aymcfq26B2YY2lS+wLf763OnGJlVdV/srgyAUJJZjarxom4zrYy23kLFB8zFzWuwSMue5Xm1YWape91JGDuRLIctrJWU47/XfLm6Zgei4xOwq1RcjikGuaZtDwcFg9aKtO+JOGJsCjy9AiPnmt+rmdX83GsT3KtTETnLv6ZQcnGtmt4H8AjFgGYePdQc40cj8VAOV8NCLspyW5w63b3g37GXJrzjm9Fym3fh27psjo5RuTs7XCSrNENxKm9jCcXPqWxyuXJSn6dhdWnw5SAnUjixXviWS4HsnYjw4Xt4cSwkqCB9naLstVXt5D2HgG4fzHFNHvnETft0mrhU81IBDTSyNFdDvFEX8cifoc6FcNq7pzXlotl2ZS1FIzNXddZrdXpBNYZPV52gtCok6ePpUR/Y8jyJpE9P3q8dmFVivVGgmKTcBKMDDbzeOfl4MpOGBtBX/Lab/kzqG42sTyOyGUyOoFXYGMUWJ33GPI2KNa/mW8zVl+imshfbj7PiK1qRUn74KjAkH4wjKnu50AONYUaiveSdwnEc1zCjZSJ3dmBKSxhWAcO2PdHBg5m9+JCiPGCVfK9dzoM8Bm7xx9noJiqt4hNiVa5di1Fd1JRN4rnd1DbKglKpAVSoqvJPxmuyH56TFE4BQjhfKbDMZezQJqx+KXDiW1JWGeDYaPVBWPYeZX6STIzC/DjS7UFlqoKgGGAGP17x8wmMRE6O/axG5jDzloCGxCmrymT0ZGCh4g54O1iDYUtmJr7Bo1d+H9RQj2Y10BxcMkLFTIZVjm9e3vtIbeRx0OdXE1Ou37J/WeJZyPXn1fszvp/KonCqVnt862LrxfoB/0sF5gk4Y/f6LVneU5hun9/V1OVre9XrnDBhcVaQa9Ye6gs8sHW9HCNchaFbkUpxSiyxVEFZIlbejbjSPFlkYOLhtQHduwZWRHWA9akqykJNG3PKvOZAaJG5nWQq8+e4K0JF/AXTKIIr4J7zDt8ZR4xb9T2gxjl1nfqzidMRIY5B4rkw0oetta+j8rqkFpTEGA+hU/tw7bDtpkPYvCguwncnCjwULNFT9I9jXx3H4Ws3WWMCit29F7kGq2Ka+rU/MjnuP0lsXkoB1rr8LawHH5gaf8rajq/BhKrGTIfjDiZG5qz+L7SZBZsMSZZ9pM1QhKju+GTD9iC+9HlhfXMtj94gz8U4h7eGXziEO7lo7LwLL6/DVMrGbkv68JYUYhGz2yBm/8cbQEh5vhakbhmpv1K6XYM9rzdsd9bwYcYt3cfKE3m+/NrUa42+RpJBdFg7cAmxsZ7/0TMyVw6Aqu2gzldb2ag4iLrPNEyW1ywaJ2DXMgPi/sjnDzhuo+vIUrc86j4ZLhT4GAN6uqwbnXq5UDzX7TfuB48oMvvE1sK5q6owkdWfklgnC6pSBpK7wl+e3kuvaYnGRGJJMBQuVgWL1awHrVtfOTsSE1vc0ZdG+a/Jbza6pHbyfi5L7FXJAGdQTk0EP3VT54+F7RZ/MJ9fj56aMxzhJRwQJ6df3cM26qSc5bW/zP3PFXypTOBwzCvVtwGQzkGvDW7XGwgLbTNHDpQXOd2BQ5Zd9bjQqGg+S+kIqWZVZCqVLfyFPF9bEOHfPepL6nRDJUD2l5uRnXqeTvidaSIoqS1Fbc6mLPtYnbp6uuts6Qo8TbMzFuI7NuaPuKnQIyVu7vUGJ8jg1uVOjlMNKdVtLPr9/ZEKVZVj7lsFA+nm3zRjjr1DRKhr/wY1CI1iXKVTeQZ0i2PSnN99j4iVTSwNAYQLWWD+KyZ/xRLVxmZQPuSkLeKBRAkavxjWnIFQb1dn72wMSUdcB9cNCNJNdyTkrl44MRR+pUuiVrTAnTlzL33X32eEYwT+vn564yxFJLUDyIMNjJ0nx+GreKSOglI2et0kAwRHKYFclH9GVTiVlB0TWeUJGD+7JYogF7BizjTGyPOUEWQCguIEmtC4fHD5461T80Z3Mp7rhNTI+Cswuknr9hrIZmpRyFSrSrP8R4S1Cf34Tu4RNrDxpofVK9nGTklZPsYM6eiP29Lx264fsX9oLdYhq7vCwcrRMJ1a5d0QHXUYRV5IqTFBoUSpxkQ6IHHL8ckM4NCzwk8K0CA3pj5Jp2a9wZjfKq7R/eukzQFuhMxV2qgHf2E3t7/SA8N7sMvsmF0p3J96QRE3rA85ekH1q8nrBVujlIqahmL0Qto3+JxdqAfnKMCblQGSKVWZgWLMm82MG/9pjhdkMzG7C2GRLGMty2y8NhX1pZWHNbLOmvaC424LNz/Nl5tkPv7fVbCT2ItB+/dx3ZhVhmgSLd1zL+2PsNFmj7VGBruTttezlo1mDKErjY27nTswjf2fY/Uq8lPcVAgRpJM+m7jS/8dk8cdl7fkY7Tuj4TfiSe0tiNSoJgZwom4+9haoBQ65AifaB7pUiTc0MAXCvG+nDydkRIbKx5fL6gAlyMAnBbQf+Qh1naLfzzwLVTP0EEyoenW2W1zKqfMql5rwGlyCB9mSa2s25yHf4SDSBlgEVMJtplpRgegZvDakpWDKgx3UR4W7yKW+RD7bd7rEa/GQmA/q0RYAOIaXfO/2CgEUPtNhPS2uqy29lBYFPPv5SHQ0t/jRxQLBpe09ateAWKypt9TWS7Z5gynOePS5M2NC16AhF0Xz6s7DUjtI0xNho9Y6GK16J5V8HqHypV/OAz7+VBzTaiR57XGH4r62GoAiJqfWOM7okzKCeeSBnOIKPHtwgM0SQbvCvv7rmS6ZAacu4BbXZ5R9gOhdR9H3bi7lWLBNnqqLPIy0k6m4XBhtl40B6z/5AcJxjtKfwvIExl7VsQRqbW8gpPMsmJZfSp3uC35g1AkP+BJlju3RVoFZNo3JR18A5uc60NGD4zvzIdGTAOth4ZAZx0ZGQItHuNcLz/0CiavJdkjD65h4avf1vf7LFZ1uogJz6vLK3uDisXIBIGkXOlIpxTdjjjTQt6Khy50bYbXsG9JBrSUGhsBWpeRUnq2cZWOifhfueY95gFIDAu37oKR3FQ1YxGMg3UMq+L2VN2rtqodelSHof8SyYZVQWs7L0bjtgolId1tAAjHI7J1/+JIRXeUBjjaGGQAU+az9XFfiqn+VRAGG8JDdP/WmEqjhYpcy00LIBIBzCF9I9mbXCv8IX9fhPlI5NqWGO/v0ikpfn+hb5U16FcPYsx+xLb4la6nSbvrTDP5MthPyeLIIY7ZE/rNU4ajgPmI0/3RvD7WtEbo8UGPjnev55N2ELuFpEPzkNu9MzXqq8K0cWxk4lT2DQPi3rDO8x8i5jX7wWQi8e0neCMb0SUO67zRfaekZONGfaFl47LByciUuy5dhqxMPokhTE2WbzxqCyt/s2TqG66R0ocYHmzv9f7tJ+TES8NFyzL3fhNoZoW5IxWNE+stYWutd3LPwa7HKhhRAbl5uCEbEGjrUzTXwbzG0qvpmNtpnYnmKjzTaSAFNCxfw9edcjaxCiRKKIDd6GS/eDsGBgTvJexDfwGmVWm9jadZhee9jRFiZFtL6m7sY1oQa8F9ycxSuPANXCqWkApcaEfQLkt1yyfeRs5yC5O/6XGJ4TEtJmCTPJFRr95au20STIPgkoEF1mzZ+5ZRtWKUYuWJVZDwcA/lTy6oYp0/d0LGPRUXnXRm0qtIXQVdnoVhKZPeWACt9rujRL57MEDi2kHtfV/ucu+k03bN0fQlbalUJ0faY99GC6L8MO8MXTSmqDAxNSpqpIFPhgHgAg0YK/GZhlQjbQXE4tMDEDO9obNfp4W6m8fdznMesSSRINBG5FDf//DkT9pSRQsIdSg4VK7W7j2d2jsQUIyjJmbd/2zCTaqh0Yq0cH6mS/5g/cq3eGOiJbaCNo6oVwGURzXVAeVaGIfJFhd2A59sVp+rVfe1f8B6bVbCLIKgGUgpUokO0vTg6ouAxXGQKtveMhhBT83ukPIRZ02+qF1kvM+nNCVy8uzrB0+W9QIKbMio2m/7zW78xd5Tf9itocpLbRuNC5cuS/GyRGXw6fzFzjM1UITlQ5dlvoyYxuvb7ol4S1MyhkfMNZbif6/xic0wB3uSScez3oFTRbCHBd0cbJL3cLwfQjCBpGBrRVC7174qW4XWnw0eYGSSzTVSEDOlMaTUIGJO+s7/z8JxaZprcEsoB4+vt9/+uwtM/iyqLVPidu8ZTh+F1rsEWKwZhDAg/giVc6VzRq+DJCrhn81b/LYlLJOdgoAjID2VnwgU+mQhCL6KhgIqqiVraD25UIYEqxMcZ1aRcZvHa8x5gh5onPtsVcl53Xek9BOYqkyj64acX921zwqoY0lmNA81NE7BzVts3cwWDZ4Dk6uuzwtfJuJc7vVS+fdVDEg3ATwC9oG5/Vb1swTyzTsl2V4m+93bSQo5STFG5AruTDWTym6Lxtt4OrAeIVgdoyTJL+keHiHTNiL0/nO5oYwftSQK1aYBuA0e12t/FVN+LsCk0L/hfCCcke89LuP4d46qnFo3NLpHb+NFrvekXVT4GiZgMW2H0orIY0TpS15wlxVUaGCUo7YSN0yWDRU5+p41dCOs5/vXq1do7K+Byjj35/mPlQ+VEDqqF7OIBQrXfHgCXYPy8ye3Ih3io+tYA6nK0/2clIERrpA0AMHKLTGEO7q/IzIcOCwYN9W/ISH4v4uk9MhzNu7Fg2IPCq5CQF1GLuzQu+wNv2h94NIA2UJydawv5X2bHkZjv+kB/WQCYjxUNEU8ssUdxDZstpv2qNAHmI6BMD84olxMiwFdK5J80zc9x7de/cz3ZNIkkGIpMCZJqKKkaLVo1MLnR/h/hQeUvfqJmvkPeIre3EjnliNkKJKL0KNaupHzY7Eoztaj0cNOhJ5dxIRB2is3kLcSK1FZswRJR0B5OXX+Q4UlFIrhR10lIge3Fg5DnaGoZoOyFaaHztrdF251JubDsCZRDSWA0y6ysykO+h4jhXtuWF7D5Wp7B4Hx3EQvKsmPPZYcLevowjlWghHbRBEhwPI3bzjhNWXlqtym5ObYAeYxuHyvyYue2X4651f7Om3+m8KT7Y/JqLWXwgayCdzxHuJidti1ITuf/oXzeCfTRbG5ytXlDk/epX061W6BO074jI7nV518OkYtRJDnPqdDFAf0uWcATfk0h17+gP7GHjy0Rc0Ive9XmvA6gCkoMjNjMEA7GQ3xy7e12DzfNpIfND7GKKojMifTrvkDXrfa3o4wNYktY6/VlBdHtrcH9F7uMWICej/BjZXVX83WFGcVHx3nOXxSL59kE9bSmHc3Xp8iDbPuSG5GIRp3fTFHnmTzzGedl6al2gUbGFKtkC0jFNtKTk2rr8LEObiGgfCoSpTWknvAYDQBoj93s0KiRNPOqgY++Xka2cQiDwqUsLl8/i57YC/V6sy5/NvhViRRZgCzcyjNHGzZsYA5YMtUntyfC1gNFP7cL3AwVA+326NJI7MQJoxTqcHL/YhntsnYTR5R6GVVvFYIlW8Nv9qn3daoGXMz0MoAsXpCzbiHZ0XWkfw2qlJkmZjgQtMAEhHXNgokGRPfOprmtlvNZaNlGB1EjQTVX1Y4tCyJFZhdhID4CowB23uQF16NifyxH+DGnQrnxeklnG7UQV2BRVdr6ZEKZYv7Gj+PbpojzAskvbdtaFsataqPrLDoejjc6ZfPA5zA0iYcCvcNjzuy9SuT0uG8NWMTLv2OsImL++PQV1sifUENAwi4O3yBvzTy4J77B7mMBpjCYGXAyjFGFZL4eAazSmvZ8thJ0FFW+keLHL+ft1dQBKmXY6JatelGebcIC/PyLBHdfX9bRcauGg4xEO7mMl8AjlcPMczkPniNQpiQFqcDJYrFGoxMV2hskxMn0bRQT8Ajc6w6sQYkGl0CQUImPrGfie9dsk4mrCLMIFOqcm0WT8O8AiREEGmooBTO7WI0qk506NsV7ffvc0rVJERJKcyRyCmFZdTSn/SrBfjV7SXT3pQlgluoY4FBUCDDkzwBgjkrE1oFUA3ls+xVP10w5jjBIMwKBSQqRVAEDXw+Dyj+jH3ila8czULWsCKhWd4qGsMFN7++OGBAz9eXHjAO9m++mTXF6qiyG35Q+61yjYQKsBrjR4NNexrwVGqBwAZA6cr5mp8AhoyzPomJ6TLfWEJjEeRI3QsX5oQkNuyF7u650QFka+VjFeNRY6ALklleTW9I0v4ABKDCXTGkjv80vqVNk+FTL0bJK7ndSjjMJD7OBFIEywBPJFrxTdyzocmxEgG0zu1VDgsQuXITYCx1RRty89A/F+CdSAlbMlIkptCC0GrF/jFS8PAU+6TNV1eBqJrCr9BgH1mth8FtdfE7druR+xyZKn5idfUKzGW6ACGF4M61IRoSs9o6xmaj3dnAVQvFWUsMcR6MI3xTKJNyMxkhXhhvT0IxialnG7i/BBzXfMXYh5jl4BXzCSNlxU4+aboEgIDr48/+pfj8J3WcNccFfzV6eiX05qkNktmafoBcxrEsrM8WQV0VVSRybQyXPOqJ1yndwBI6BOGO9oGxGDAd+HcKaZlptCMJsR1Cp3m7F9HpBFSu/NYVj+WSDY7jWSFBlTBSCFyyPEUn8S9NmBVa+mwGVsz0Q+fxe23w1w6wVO7sVnZqRpmXJeXg72QFkl7Qda1lBzn/FW+rRwLvFxCsuad67Wmzab1RJdzPGsuq8AzW6tL+JiwW/VPUSBbBmV1+EjqQ28x1u9W5Eoy7zhsU8NT87CtNbZ0lPEpsoWMewxC80kPanfWPrQXmixWDXXz7uf1kBTr1J/iYuls7fUsyAChXjKcKOaCF4ySqkhMTGmjNqYiG5joBUi/SZpWvgxk28pyIPhf28YULINiqmbWPBKuTCLFruV7JfRgGM87XfNEFc7tgnYx503k/0UXJfpmjx6wKbKcvV5fqrctx+OrIn++TxRxSKlTScEIwd2vG5mg/p5wsQDpiD+X91XbkReKLB25Jvp/IJaJh715RXqBzwCwlY3URonyy+oZoTD8Ym8XMMv/dMllh0LCFZkZFn2gYcLG9iO+I5S/GyxwjajQLQtwH7o+n50vimC+ES8ePOpPDwlu4oG8KhS7NL/OTdIWPIHbSa6/9DfjOq9W66EpaK57R78PpEzVNLkTP2L6lllqDT6SDhIDIvQS3SQbxG96khXgvW/rME+tiXFXi+BC0udi9keyGlc3sLBN3CP3QXzswhBGTxvz2LmRMkU3rLuSkYR1Gzr7vj1VxTN1y1iciA0DswsPZ38eB6X10Uzk6HZqjzBK+EJ5osJJJ/s3b0MFRIWYlM15TPm1uzeOk1zQ96quClQLEZbpxmV/eAduIotXUYQZjWAkTulBJt7kw9uEnLo7OpZrf8k+0ZQP0agcOTLbfrekHji86Mxr7rTwve82mePKoAkkEthE45VI+f1VqpyWNW1kbBbVVfuatKt6MEKqyTUyxSFGHk81kY7CxkgMNexiikN0+IeiUNsfuktjfOAiMfDhbTe4rtxSEPvO4CCUGaktA58TGnSO8rHdCicmGkNrwWsnXgUWjhp8bllNcnQN10TbwxYPAwQKW/JJiYQadr4THXO+vWudiq3I47vqmEM/Ab3Dlq11Q7RmRWntYOEyESbTI8PZYwbtsmjcSwBtTAIHQ5h3I633h3FpOkT2c0PlMjzj0Q/OuqaTVt639fowVppqvSlNcK5KupBnrxfKHQK+SoKSuaO8PNMkYkbcEAc9F0I4uzPfRVP/q5QkvJVsVoJ8BEWW/q1+kivHEMQfb+J2NfJjSTG+WhjHjL8eqi7FgfVewxwmqG9IOnTkwDjAHUaJMIyhVkadW/+GQjLyNP4zyHcLAdWcB5zQ2kc/blAx2RKfG+ON3RfC+iQ5Th7V2i5abkoy0pjfyOwTjIvaq9slSCtoNGBZggBDOiWwau0CX4NAIThFyqu9VWCLr8TsqhQZvQP+xrywovGs6A079U7YBjhEXyQw4Q3rbQY1EQnxTPXNlHfn9vQnuhsJnzx6PZrCqry8fidPz2U1scmAMVPHxa/injIf+hDziEU02xWm9ou67OgebktON9V6wwVotoNOzVNJhiDBlHbktBwOjX1BlJHybLox5y/7NhR7uc8f85O6xdxueabhwtJjYcBzac56v6RbuI9IRvPzOnNbltj8Hh0ftwwhWyHAyiEat0oDSEVZ925jmxJKAqTo4/uHnkozgMDsnkzXPXBDJ1sDTawXy23mXuTJOYV6ZVWrervMaGGGQpgQjAnfP7KPZro+OKt/MpnoM0NeGQgIFAiH7dU7Nl1QbcMiwO6/5nIosJtrFB8w1kpqb6OjI9BgZHG1nzTMGA++HNrl4WQNcq3SajD4C9utQYAu/fETPFMMJeCDwHRCnPuRAlqJ5t0E5h3Wlh1Nw57LQ36kDjC3lS9w0a89eI8ym6BzEA25Cdz3LQAyz94Fvjqp7MyHrpm3PzmsV/tbSLF9NJBjFmzWPQ8Tfgvj3fi8dg78tXvEatqtUhLxsNp2VCU6IzSqafxWw93+Wk47skJv5qxM+tv7CrpYKvWLEylJNEXlh7GHm9UenNf2/szZOl+54P4ZWksh1r6+rphL68QYhmqW7DqKVrc2rjzPYcvFDmKtCGL/F62i3riMV9z+LoLnuVaMn4dtpNNFmQEQ4uEhDfLYU4x8G2OHCz7gnxLCa4zE4CFo9m/+ECmdzziVumHM/P00/BESH2rxUYMBL8/9NRG5fiskFJr4AO0qNUKUCgTRgEiFsTbGXtP4DTTzc8ZAmfNJuJQE5Kp7W7U7QZnBXKepfSHkYTEqgOhqo95Jw9i56kYGt4BWwX50mC27CCW92SVMl4tbUEhBDSB36zgztz5Zts0563Kjc34B+6ZUnMIk+BiQNvqSkZHnk3rHNSaYthO72IWLIxij0hcv7n228yc82FsQLK9jmptjY6estDfH3OSMaAj+poCLKwRFXvXWb6jwM9mG4nu1yug0Cc4L89w4EYek6dnV17VBfIxB2dmFFQdp0kqx3BM9gdMAr0KS7WLOSf3cn5eDItDLP2UW7MWaIR+GJ0EGcEL3ejBdu0to6vDh04JcRMNU55usmSn3jp74myzWE3azMIT96wr39F62c3G/ldGskbqTIMTk3gMg61vNBQ0cJSIxVdcgNb3xFDowwVyIqYz54F8Rqg0uQE4FIiUGZxJhND/AWhkukqIqLLZEpxj07kPBN6Zb2pWht/X5JrC8yJzPlvFhfJndQ4jcgjFyhvymr/a17uxTKHpKNWDEoL4nNa9/Prf7TYRw6Gyo6vcwYcUHk17SMb9aEdVnx24msNCDEKbj0OVzRaA3gFJeXZPObqJKvWqFlavGpxXnP+4ZYTl0Dmcri6vMdwX687ApG+ygiGHZDwNzU68F4JMPQ9JB45vLkCsE2w50QNP1kJZlI56dVGzfK1MyRqP4J6VshesfOT4hzR6MYq373IoONlLvENdYXN6pTxo5eRzQkwk2tZ1zmZqczCytqTEhpweKcBCCZ/FhizgLm8/x5ScBlO0wEXHZm90mpmL1gR/J2CUnz3wDU99YFFKqm01AZ8q2S5Fnh81CbD687c7K2OjWlZgdvEJA9M0JT3eKdIRd9GCx6g1TO5PWTE8OOphUDKdazyYnmMqFhFxfJ//cWJTsgYbol2a7Ob/Q69Fy3kb9K7aZLzH+Kl/uCzWnqTOrQonVL7LTFPr7wbTaepfAl5zSgMInjrGXY+Gspw+fCNgEU1zyC0Suum6VFyHBjdKWft7strrOXqOSQwxsYXp4F013mN9gZyu4Hc84A4dzIHN5UNXmxNn+vPjS82JM6klySWB9pLCzLBUgXiMDllaG6fT2PSBv/b+yaruyWBVcpsOKuEaQ37W3A3t9YFRcgB5rFMDjwOn3c0lfsg+5V+dBX2EmWLTSelNZkeq67CFnxaKtnlsAJRPBqYvoWVZcJKn0zSelrO2TwnailO7zgAHaMRmQYbXo9beBs16JWf7V8LjYGS/DYUKTTE1zKECC/pK1EKf6mxIgmV+mJ+Mc8h04qep+okIIEXaN351J3N0VUk7cEEaOLE1rFF3W4vqRcodPfbLqINF6QtTsfny1+O46J5ahlamZEyxglZtpjEkKd9yKDsgwnzqoAPN5o76IsI+FRaBc8u1qLBWxpKU615chTVegNFR5V4o1T2JGwVkueD6CjAhOplPnRyv8sauMnMy2wEMARR6AmCQ8S5ebL0nCEqjSztMoUyAEjQ6FDYqkGweu48DkBR5HjwlBloKVawYcDezxKBH8WWnMpJKZj1Ol+OHMmg5iq9xDswLx0iTNkujgatOkeRU0c/GmSSH+7GTTMLQJdj51l3EkojjEwWOjw8XBOm88GqC4bWPEE+U/5XYtZNJG/X4FYjgIvVd69RYVbMEMfPSKJ825e3XQ6RBesp/G+lkMk4VIxRakyUBPLO1u0UYnNG9ExAnPdOO0OfFvcPOL9rBJO8bR+q9Lp9/i+fH32KkaNR2WgoxQY3FY+rS2NUvtCOgZAaF9vny16WG/3zeUtRP9V28PcGivAHAwwCcRk0D0iohjAfgL/EKXJkr8gIFqbNq7lXUFRKqMbpBa182ol77SqJq1M5setGUJuSBKqYBYKdDZv3XdT/u6J5aKKkLvA5ez6PuWX0RT7kELSKDKfg9w9nwSmMmJHjbnr0blM2WvpiirR/nLid6SRN9+5KoLUb+pLw3QzD8JlS3X2q0m4BNRxfltr5KWqryOuuGDt6IOHSE8/zqGXMiTqgrUOfDH58NoWe0te4mFc1GxswvhZXWJZmaWaMJo2SBnuXa7+jIfFbnhNH74Z6jygwcqXsldYfI/Zh8BZbqTh2I7Hu44dilfbX8Uh18NVB3phRnTwpUonKquUs/iZXRnDFjtEmKg2YRQm2CP1FWRb/B92HqJlHT7Hs/Tpl3RrlxvkoskpNlW53/6Ujse0fkHLNeUm97TlDsaRXpfZkR1uWMTwhPv4oYM2Bv941R+c7nQ0yBdFNVQpZRkpejmIfjFrdQUA7DPwR69aq6Pzmk3IXarIMKG6R4MBdkB3j3HWxohnZLWpaNy/BMxS+84e4vPPfO/7+nLWVZsdpUY/nGDkQts0NGnRpZK/lW60tmncMoTepY5fMbow1GyKhqSXLbOZkz59l8DG9v9ZHPwA1roKz3MW/j2tN/U+lPQVYXTa6h1ePQkSWR2bp9OHmCCvT6s8v9PVG2ufK7dkbpY500gNx7fdArzH3yCjY33Fa5TbOuybLNdW8juJyJtikDn+5jMnMzIWP/+v12XkaXj195xk6eOKuvA5zeKk1i1PrSnmWA46Ca2ldgNqJ0rvLqM9X2EPn/QuMjLnLg0iVJ4H4r5S2PgpGdSdfVoiX/rBAq6yVDc30v8DOUae4oquSM0YDCIafLQ+hvEmB5b/f+QsTFtAR0zIVWeLyYbmrx3g9gHhVRfelCz9/exh19AGsyXcwuSaBiCzQIoctYvyhhkdCsC/cdZDce/1Fav35JQt+RJFAjiMRQhCdE4eS3SmfsREHe9LZa0ElOLhxxvs5uS/SnMYssyK9FxiucRjjOqfaIp2N8CmuNJqg3WvtMk+MlbAYeji9K94rx6U7nj9L1TGhVcAyz+Gb4sib21AW94HRzWbTrRKEkx5+KLE69Vc+8Cj1Vu2GkZ1AA2E4kaJ2aTjsEL2C0srAINXRAjnxwI3p5ED0NRYn9sT1iY9GPBJwhhd6WXEJ/Z44D0rufaDOA8dUj1SIqywRs2b7SjYcCYS8eefkwdWlpN0DvnecdwHVc3TqyCcUy7K2PMS2l2KZHzZfLCTCPaPq/NVc/Nlc5hVJoFvnNUpKWZcTsxVeHfH1mnELREECq9YES9v6FcvONCxXLQmf0k3S2dyNmsxbvlXM0u7lSqkx81md0rad3E33PPuPpDGM9UiBhSeJn3Sejmx+LdLCiZYcVxow59nCqrUmXGAbsR4O7wVQzyHdL6DX5s8k5BjHXlONz0PaIqS89xMhkYetMw6w7JZ5c/oJBH2jdZPbS6KbR0RpEe16BATLzU4QiHybxArrjBM8MKKP8Zz6MVbg/d8yb76U8nQzCK4Eqa5ombBm7/6xo2dR9O/ByfcU6qDu+efdLFAP4LiCr6C3aihDPjigUYuy0voLuX3Flevl7xXRtRZ4Vc48j2tgA7tK0wqv4OjLwCzZJn9lYIQuScQBEFMBjA6Vj8FTp4h3OphB6g0uA13nTnVLmKQ+zfELl+6znWX5nCWvbwak0t3q4qwWK3MAPKE2vqDEeCsFKvmJ2Ws+VOqnrA+ekCk9jaszBsZd71InADWijT4SHnyVmc55dv5ivXl1fED4vwNrxbiZHWeGinS3ImcoDAT1vGiLpP/D3NaiIPq9A2h5DT5SgaCVCh0JKu7DKsHjW9ZAACRxHgTSo5jrVWUJfGKweg2auQuittVidB+JaCdwYd0x9oJ4jyI5UygrB9Nzi2gbLVcCnpu+1ytsiWCbJb1Xxas8FhG/EX86taG6flZZauhaGnpRyfBB5ojGdsdPBVHEtb8R951oaNTvKXK7CddSeWaeOi2FIDPEhWhAk19RzuR9wSKEwvvi8nQFz649+fUlBMuDL7VmUBSsC1ExWwqY+uSdNKowEkpsBb+/KpWl6oGxymyR/e4uKjipBJrVPXg0nE2j6HL2JbCHNh01lV+/+6FUglhV8GTypzdvdfhYc7t0ZYtkyH/17wDakU7r1GAdUIXXmtxamhK2FdelBa4BPryblCC9gJG9htJue9LMrNS7mM6gbRA1xSFnWNsziDuGZeS3Dcu4bjsWaIebrgNnxpl/pLGxV5EtkFwDeh8fPyfPU8CZAM/Ljk3+Vi7jUtNZmZM8+f7d4wlUIkTHiAULRUKu0ODFIeyk20BiqLB7vvAT342SIDP+z5FPaa6Tjyqh/AsX2jFhbeIXKxDMb8fid0jHAWk6JKhswbtvtP6bDz+lYjvXIPwV1Y+nyft2uM8c1aUxmDHAUmZnJBvZXT43mxjXDHP05R1/dKfoExcgcYzv3wO5mazi7ugS01z6oUmByKtfQ6fA2+MQynPCoDHcp1eDtag/E3HQpHMWAgGkNh9wWR5Y48YG0W4CgvOrngI111j/x+MIuH5xFlVkxqptSjW+hnVbt9qxtXndEH5RtnxWfd9eP+kli/x3LU1WGsZVAkVElXD274LBGK0bMveEUbj/6EpnocEnvRSlglpE4GiAO5S4JdYb4uYd6oeK8vuZvTQaWMS3dEIJ2ssCxWz8DqYmc/b38ynz0DWCCeF1gCyipaLG2Kq9wqfHz3S6m7CS+H42nmDYAz2dYcx77M8purGOS5tQ4aykJXIDQBwHjIGSU+52M+1OV53rp4B3JbIXecQWEjfk9gkVoz8T6HJbIhFgm3quNMk+cIyRHlj/BdURXY8o7H7dBQfsdpLJhAsxS/1JtMkY8JoP4YdyOxzJY5x/+A9scOTXvPVoQAMqgmP899s6GvRtzNFGXLX7VHSnUj7VPO8K1qxaS/a/6v/YhRlUtNgnqnth3Jo/DKbdhdPn6HgB9YjU5GuN1uPyUXZJDZYfFwMfdqNPVoI8d1csoHMK5tquGoK060mIwBHMk3pFGqBosajr9g/5kBPrrtuIIEPFZnaAKSCQqLdeQq2B6Bs8WxD8+DfzGJ2nu0Xeb58spPoiHZAVV+I5lRUseUE0IA4E844UzFYADNYcLBW3zsP7aWzLnUZoQPuIDR3FX3bkM5mCunvXaPSi4PRkKnItEv8/OYiq8RSKQcaTwxX9YgdNbgPuXLwb5ARofv0Zj3WpHhNnlTq2Qu/lwvM3PUaqv8L7kpFqQR9aRaXfFanbLgbyxJ2kAx9oA1kRMyH3JXI06oQhRiZQ1LtWz+QKKxme0zAgI2q6/dmYApsA7WGeBae5+Y3eqkqDjXyS7Q+LzYgrM3EiqGHsibaKZKgFecxpGiMLXY5+kkuDKBdMkj2Bd8uTKI+aTWpu97gNp78fm891zYuT68sIEzE5JggpWjlWFSpzYayxvnOxJ3JYK/q8WbCy14KhtCFhdLOxCEAvyqXN3K+oP52ZzdxHiCAac5LX2TO5CTmkxp6zCT5JZDIBgnnmQU8GBowEvogfPni17fE1sljd55P2C4mWCNDr8l3hMH+4zpyZqp3iFbJx20nGtU+9LJozl0OxNrk/c0C9chEe+k4vUECnUaXbS8JqdnymqbZ1SCI+4+1BYMW4nzYKDLaqL3Nm08C/Ug7zNg2BuwhWepXrkqaRX58LCWLPDQyUzn369E1drtekeuNcI4SgdmyQZ/7xhXZ6sOKg9G/HEiJQsriRQThvHz4BhaFaXic4nlrz4LhUthGBLbnnB6tufJizYx4c6b2rY1E63pLDA8QdZsTOD7euNMku1a0T2nNQ9rOPBYPDyksaP+EmKTvqcgRycKMtzhHh37mAqVERuzIIMs/zXE9jGBpJBBWb8KCPZne6Sxw0+UFlY6/VeXJUHunHXY1csfc40Tw95XrkpLzxqX/LrsaYM7Y0UQ/Qe6PTjMQUXDseSMhYwHTXCohySQ+1fIjz/yjZWRFI1/a4d9eQzWLoGjz8O8ldPhzhpWFwwlaR0T1gpMP3VeHvDOx4RJocHJOSRQ+H4/nHJsiuXWDKowYZZW8Jk9vUiw2jExedn7glAsC/bgN1NrgIp1y+y3tmLd2V9x7yKVC+QK6MOFq19dlQflj350qUavBULMCTn0BvCRQY4q6VjniU6XHISUsaApCVoQeevAOuCUFcnwWfK+44XDo1qSpPF1wcnbH7N9aO+AzD212PgFlGkXlaQ3Gbfz9XIUMjulgGUREelr6IX+tR2K9H/yep959z5WLXlZ81Z8HCIV8CyU0JKYzkIeFqf6o2ywb2O73oRi7i8F6Vcn2zU1VWZpLfSXgTNkRtqM7r5s13UimLWtAVZs97rLcMRlwXzYp98ZnKvQLj/dpKn8nfNnU9V2Bp90frlQedeKt6zd4mPR53FKQ1J4r95n1G8ph0XG37DC9b185sWbnoyC4Q1iUvyy5IOxBrIqbqn/JSUWzdrlOiZGDJrU5IGuzUl5TaupUTIgFeLfT6uh0gIEJ5nZQ/8XjB0mmEZxTvocrU/BFoOaUvV/N48W3W/aQu5nR3KwsSByfSDAEq6qBqTVTkZtkaAd/1Rie2jkdRlZvxFMu0MGnLc0SHPII8eOz/bjfIhSQhAb38dSRcFmfRb+fpDrDHeazED6EHNayy0kESoRG+XFbJa6xWB6OlbwHVDwdO9Ka7bIOqLRHpZjwXmv/2DR9nu+2xwxE39cBHq/7Vv99HcvH8ZJeGmgHr8mBKQmOCTkvLkxf5k4FrqZuNpaRNhCB3puFuF5d2nnQbhgAaANLMCYAiGsJhX2bFM/r3BGhR/dkGPXeBQUJ4tTARQnVqA07mW/42Dv2k7Wa7hWU/wv7FTIWLwWyHX0Vqdg4BHrlJ7zh+b+T6fH+W3d53LS5rkXK5GIctMIttK+osfGYIvOD0BkkXBJR0EYUmteToIxpoaMVKZmCRC2BbmBLdUTIZiI1kVYKYnq9Q5xMGODu+6vCT2ofvYE0pmGbQ9Ln6wnBDYZUD/BL9rmiPn3n28Zs33OsHUQcLp2vjUEV5sOBLO2ScyescGu0N58y1q1NSNJuXCzI4fu4RWJtSIn3P3+9eAsMo/2NupFeaf70/usLGd2Z0F27EjLoIj+nmJ4/Q5edPFhVNpPURQrUzPALNNzEvx3e82rDtPpbZjugv7Abm2q2vMGwz5W+hGH0hkCzXdZhPFbLk0sR5vVhScLgAPdZIVZIjTuzwIKVuWmvpMr7Gwxgiglpy8ecfOAZcCpXRzG6lNuRB64D4G9AWD9vQi/crWV4Xq5VjJnRjQc3g4bJe+MmksjEctghn27n5i5PHZvW/gM0BsXzo8Pou6yOLnp49dGXpK/oLAbOdOel9h+kDqEtZunvsXa9EFomdl0QbDvk+H58SjszCVqVOXSgDpOdZjXWfZpFL6S/fd1Lq8FQS3LklgiNhdvE5GzgSO8uq3gtj8I2o+JzucnrUSrtoxa6IejmVQLGzF3rSCy3fdhBPhZnDdgctC89dRJ+PTfW4ga5WWAyaWspzFg5251FoByB8LUbD3AxhvV6M1ARNXRJ4NhPe2j9WOlu5I2KmCMGvGP5CbHAyZk3YhiuIdtDgOvre9Cz0yOWvHH5FpZQzqzyHE5XkTTFMU2JhG1nvne9SCi9zNvPnGj9h/bQXgpue78rpogXJl8oDSfMwz9fp4ocyOxEV1JCEslSsRvodEzPbUsMUYWDERNzR6f45Ku6EmW3qdD48dcFQtc9rr2wF3o85edZ/2SY0BSkOdQX1ahwPVBP554Q1Z4lbd0d/vrRCO5k3QBWOb3iML0vI4MRkiKwqt735Q2fkq0Xl1pI3nk4ll51cSEHOrFTctkxwLOiQl6HJh2q3iqHFmtOCSo0A4YLl+mllolm7FLpe/79gMoe7A5cbFPCbX9Z3GhI43FgBbWoq8pwaIoDlklRimVauOx355pv7v26P0MLrgiqWTOxJaIGO/UhHf7GSOm0r1O5m1sPYYn1bathmEkYfrQLiEWQ2/3IjunsIxgAmi6t4JsxalYxE4YyvD59EpzvswOjZUvSgkHwPZonVtaiMTLXnV3p0dKpCSSz38Kv8QbNFzqLbwbBBRUHw/nHSxNipNm5vtjfkuf06jWRwkctgu8wZqKwS/7IcGnFtmwnbJFPhpGcyV9GVFzCCG+TOeNgAWxOUPgmtLdD8JawVVDV+e3iR8kHuaZXIknncI/3uFnblTd2P/OdWvxl+9CXbqJb1CS8osg2fg/qaA9KvM3FQoZQ79JRZC/Upm90ABPCGzksTWJ7Xy9VHpnPZCgGzAVbJhmurq8tm24BjBvnm1GOKfotvCqXyIXFE1bYTRS1WtzgZrGWgR/oOUDnNgDPXqUfTmyFPfNCD9MX22hvuBans/Kl1DustiTunl9Kravj0NG1Ds5nkTqlQSYOfhgvRIowimmWAYWma55eqvaQL9GvHmuH/hIVB/tiN6s7yOW2iahReL8dNddIbMJ6BLVguJ4n1dnquV3ZNqi6V0H/Vn00j0cE80ERsZTgsHPJ0eUjxYik+eDtaEHnyAsYeR2AjRcGw=="), (function(e) { return e.charCodeAt(0) })), i = new Uint8Array([177, 156, 215, 89, 13, 111, 230, 1]), o = new Uint8Array(n.length), a = new Uint8Array(256), s = 0; s < 256; s++) a[s] = s;
        var c, d = 0;
        for (s = 0; s < 256; s++) {
          d = (d + a[s] + i[s % i.length]) % 256;
          var u = [a[d], a[s]];
          a[s] = u[0], a[d] = u[1]
        }
        s = 0, d = 0;
        for (var l = 0; l < 0 + n.length; l++) {
          d = (d + a[s = (s + 1) % 256]) % 256;
          var p = [a[d], a[s]];
          a[s] = p[0], a[d] = p[1], c = a[(a[s] + a[d]) % 256], l >= 0 && (o[l - 0] = n[l - 0] ^ c)
        }
        return N = !0, new Promise((function(n) {
          (function(e, t) { return WebAssembly.instantiate(e, t) })(o.buffer, t).then((function(t) { N = !1, r = t.instance.exports, e.__wbindgen_wasm_module = t.module, n() }))
        }))
      }().then((function() { w = C.new(), e(w) }))
    }))).then((function(e) { L = e })), setInterval((function() { Object(c.getParameter)("UPLOAD_LOG") && x.info("console log upload") }), 9e5);
    var x = function() {
      var e, t, n, r, i, u, l = null,
        p = ["DEBUG", "INFO", "WARNING", "ERROR", "NONE"],
        f = 0,
        g = function(e, t, n) {
          var r = {};
          Array.isArray(e) || (e = [e]), e = e.map((function(e) { return { log_item_id: D++, log_level: e.log_level, payload_str: e.payload } })), r = { timestamp: Date.now(), sdk_version: c.VERSION, process_id: Object(d.getProcessId)(), payload: JSON.stringify(e) }, L ? r.hash = L.get_digest("".concat(r.payload).concat(r.process_id).concat(r.timestamp)) : n && n();
          try {
            var i = l || "https://".concat(Object(c.getParameter)("LOG_UPLOAD_SERVER"), "/upload/v2");
            Object(s.post)(i, r, (function(e) { "OK" === e ? t && t(e) : n && n(e) }), (function(e) { n && n(e) }), { withCredentials: !0 })
          } catch (e) { n && n(e) }
        },
        m = function(e, t) {
          if (Object(c.getParameter)("UPLOAD_LOG")) try {
            t = Array.prototype.slice.call(t);
            var n = "";
            t.forEach((function(e) { "object" === o()(e) && (e = JSON.stringify(e)), n = n + e + " " })), M.push({ payload: n, log_level: e }), "free" === k && function e(t) { k = "uploading", setTimeout((function() { g(t, (function() { U = 0, 0 !== M.length ? (P = M.length < 10 ? M.splice(0, M.length) : M.splice(0, 10), e(P)) : k = "free" }), (function() { setTimeout((function() { e(P) }), U++ < 2 ? 200 : 1e4) })) }), 3e3) }(P = M.length < 10 ? M.splice(0, M.length) : M.splice(0, 10))
          } catch (e) {}
        };
      t = function() {
        for (var t = [0], n = 0; n < arguments.length; n++) t.push(arguments[n]);
        e.apply(this, t)
      }, n = function() {
        for (var t = [1], n = 0; n < arguments.length; n++) t.push(arguments[n]);
        e.apply(this, t)
      }, r = function() {
        for (var t = [2], n = 0; n < arguments.length; n++) t.push(arguments[n]);
        e.apply(this, t)
      }, i = function() {
        for (var t = [3], n = 0; n < arguments.length; n++) t.push(arguments[n]);
        e.apply(this, t)
      };
      var h = {};
      return u = function(e) { h[e] || (r.apply(void 0, arguments), h[e] = !0) }, {
        DEBUG: 0,
        INFO: 1,
        WARNING: 2,
        ERROR: 3,
        NONE: 4,
        enableLogUpload: function() { Object(c.setParameter)("UPLOAD_LOG", !0) },
        disableLogUpload: function() { Object(c.setParameter)("UPLOAD_LOG", !1) },
        setProxyServer: function(e) { l = e ? "https://".concat(l, "/ls/?h=").concat(Object(c.getParameter)("LOG_UPLOAD_SERVER"), "&p=443&d=upload/v2") : "https://".concat(Object(c.getParameter)("LOG_UPLOAD_SERVER"), "/upload/v2") },
        setLogLevel: function(e) { e > 4 ? e = 4 : e < 0 && (e = 0), f = e },
        log: e = function() {
          var e = arguments[0],
            t = arguments;
          if (t[0] = a() + " Agora-SDK [" + (p[e] || "DEFAULT") + "]:", m(e, t), !(e < f)) switch (e) {
            case 0:
            case 1:
              console.log.apply(console, t);
              break;
            case 2:
              console.warn.apply(console, t);
              break;
            case 3:
              console.log.apply(console, t);
              break;
            default:
              return void console.log.apply(console, t)
          }
        },
        debug: t,
        info: n,
        warning: r,
        deprecate: u,
        error: i
      }
    }();
    t.default = x
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "report", (function() { return b })), n.d(t, "SESSION_INIT", (function() { return v })), n.d(t, "JOIN_CHOOSE_SERVER", (function() { return E })), n.d(t, "JOIN_GATEWAY", (function() { return _ })), n.d(t, "PUBLISH", (function() { return S })), n.d(t, "SUBSCRIBE", (function() { return y })), n.d(t, "getProcessId", (function() { return A }));
    var r = n(44),
      i = n.n(r),
      o = n(7),
      a = n.n(o),
      s = n(3),
      c = n(0),
      d = n(14),
      u = n(27),
      l = n.n(u),
      p = n(45);

    function f(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
      }
      return n
    }

    function g(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? f(Object(n), !0).forEach((function(t) { i()(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
      }
      return e
    }
    var m, h, v = "session_init",
      E = "join_choose_server",
      _ = "join_gateway",
      S = "publish",
      y = "subscribe",
      R = new(n.n(p).a),
      T = { eventType: null, sid: null, lts: null, success: null, cname: null, uid: null, peer: null, cid: null, elapse: null, extend: null, vid: 0 },
      I = null,
      A = function() { return I || (I = "process-" + l()(), c.default.info("processId: " + I)), I },
      b = (h = 0, (m = {
        list: {},
        setProxyServer: function(e) { R.setProxy(e), m.proxyServerURL = e },
        getUrl: function() { return m.proxyServerURL ? "https://".concat(m.proxyServerURL, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), "&p=6443&d=events/message") : "https://".concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), ":6443/events/message") },
        getBackUrl: function() { return m.proxyServerURL ? "https://".concat(m.proxyServerURL, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), "&p=6443&d=events/message") : "https://".concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), ":6443/events/message") },
        getSessionStartTime: function(e) { return m.list[e].startTime },
        sessionInit: function(e, t) {
          var n = a()({}, T);
          n.startTime = +new Date, n.sid = e, n.cname = t.cname, m.list[e] = n;
          var r = a()({}, { willUploadConsoleLog: Object(s.getParameter)("UPLOAD_LOG"), areaVersion: "global" }, t.extend),
            i = a()({}, n);
          i.eventType = v, i.appid = t.appid, i.browser = navigator.userAgent, i.build = s.BUILD, i.lts = +new Date, i.elapse = i.lts - i.startTime, i.extend = JSON.stringify(r), i.mode = t.mode, i.process = A(), i.success = t.succ, i.version = s.VERSION, delete i.startTime, m.send({ type: "Session", data: i }), m._flushInvokeReport(e)
        },
        joinChooseServer: function(e, t, n) {
          if (m.list[e]) {
            t.uid && (m.list[e].uid = parseInt(t.uid)), t.cid && (m.list[e].cid = parseInt(t.cid));
            var r = a()({}, m.list[e]);
            r.eventType = E;
            var i = t.lts;
            r.lts = Date.now(), r.eventElapse = r.lts - i, r.chooseServerAddr = t.csAddr, r.errorCode = t.ec, r.elapse = r.lts - r.startTime, r.success = t.succ, r.chooseServerAddrList = JSON.stringify(t.serverList), delete r.startTime, m.send({ type: "JoinChooseServer", data: r })
          }
        },
        reqUserAccount: function(e, t) {
          t.vid && (m.list[e].vid = t.vid);
          var n = a()({}, m.list[e]),
            r = t.lts;
          n.eventType = "req_user_account", n.lts = Date.now(), n.success = t.success, n.serverAddress = t.serverAddress, n.stringUid = t.stringUid, n.uid = t.uid, n.errorCode = t.errorCode, n.elapse = n.lts - n.startTime, n.eventElapse = n.lts - r, n.extend = "string" == typeof t.extend ? t.extend : JSON.stringify(t.extend), delete n.startTime, m.send({ type: "ReqUserAccount", data: n })
        },
        joinGateway: function(e, t) {
          t.vid && (m.list[e].vid = t.vid);
          var n = a()({}, m.list[e]),
            r = t.lts;
          n.eventType = _, n.firstSuccess = t.firstSuccess, n.lts = Date.now(), n.gatewayAddr = t.addr, n.success = t.succ, n.errorCode = t.ec, n.elapse = n.lts - n.startTime, n.eventElapse = n.lts - r, delete n.startTime, m.send({ type: "JoinGateway", data: n })
        },
        publish: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = S;
          var r = t.lts;
          n.lts = Date.now(), n.eventElapse = n.lts - r, n.elapse = n.lts - n.startTime, n.success = t.succ, n.errorCode = t.ec, n.audio = t.audio, n.video = t.video, n.screenshare = t.screenshare, n.publishRequestid = t.publishRequestid, n.p2pid = t.p2pid, t.videoName && (n.videoName = t.videoName), t.audioName && (n.audioName = t.audioName), t.screenName && (n.screenName = t.screenName), delete n.startTime, m.send({ type: "Publish", data: n }), m._flushInvokeReport(e)
        },
        subscribe: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = y;
          var r = t.lts;
          n.lts = Date.now(), n.eventElapse = n.lts - r, n.elapse = n.lts - n.startTime, n.errorCode = t.ec, n.success = t.succ, n.subscribeRequestid = t.subscribeRequestid, n.p2pid = t.p2pid, isFinite(t.peerid) ? n.peer = t.peerid : n.peerSuid = "" + t.peerid, "boolean" == typeof t.video && (n.video = t.video), "boolean" == typeof t.audio && (n.audio = t.audio), delete n.startTime, m.send({ type: "Subscribe", data: n }), m._flushInvokeReport(e)
        },
        firstRemoteFrame: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "first_remote_frame";
          var r = t.lts;
          n.lts = Date.now(), n.eventElapse = n.lts - r, n.elapse = n.lts - n.startTime, n.width = t.width, n.height = t.height, n.success = t.succ, n.errorCode = t.ec, isFinite(t.peerid) ? n.peer = t.peerid : n.peerSuid = "" + t.peerid, delete n.startTime, m.send({ type: "FirstFrame", data: n })
        },
        firstVideoReceived: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "first_video_received", n.lts = Date.now(), n.peer = t.peerid, n.uid = t.uid, n.elapse = t.elapse, n.subscribeElapse = t.subscribeElapse, n.subscribeRequestid = t.subscribeRequestid, n.p2pid = t.p2pid, m.send({ type: "FirstVideoReceived", data: n })
        },
        firstAudioReceived: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "first_audio_received", n.lts = Date.now(), n.peer = t.peerid, n.uid = t.uid, n.elapse = t.elapse, n.subscribeElapse = t.subscribeElapse, n.subscribeRequestid = t.subscribeRequestid, n.p2pid = t.p2pid, m.send({ type: "FirstAudioReceived", data: n })
        },
        firstVideoDecode: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "first_video_decode", n.lts = Date.now(), n.peer = t.peerid, n.uid = t.uid, n.elapse = t.elapse, n.videowidth = t.width, n.videoheight = t.height, n.subscribeElapse = t.subscribeElapse, n.subscribeRequestid = t.subscribeRequestid, n.p2pid = t.p2pid, m.send({ type: "FirstVideoDecode", data: n })
        },
        firstAudioDecode: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "first_audio_decode", n.lts = Date.now(), n.uid = t.uid, n.peer = t.peerid, n.elapse = t.elapse, n.subscribeElapse = t.subscribeElapse, n.subscribeRequestid = t.subscribeRequestid, n.p2pid = t.p2pid, m.send({ type: "FirstAudioDecode", data: n })
        },
        onAddAudioStream: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "on_add_audio_stream", n.lts = Date.now(), n.uid = t.uid, n.peer = t.peerid, m.send({ type: "OnAddAudioStream", data: n })
        },
        onAddVideoStream: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "on_add_video_stream", n.lts = Date.now(), n.uid = t.uid, n.peer = t.peerid, m.send({ type: "OnAddVideoStream", data: n })
        },
        onUpdateStream: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "on_update_stream", n.lts = Date.now(), n.uid = t.uid, n.peer = t.peerid, n.audio = t.audio, n.video = t.video, m.send({ type: "OnUpdateStream", data: n })
        },
        onRemoveStream: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "on_remove_stream", n.lts = Date.now(), n.uid = t.uid, n.peer = t.peerid, m.send({ type: "OnRemoveStream", data: n })
        },
        streamSwitch: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "stream_switch", n.lts = Date.now(), n.isDual = t.isdual, n.elapse = n.lts - n.startTime, n.success = n.succ, delete n.startTime, m.send({ type: "StreamSwitch", data: n })
        },
        audioSendingStopped: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "audio_sending_stopped", n.lts = Date.now(), n.elapse = n.lts - n.startTime, n.reason = t.reason, n.success = t.succ, delete n.startTime, m.send({ type: "AudioSendingStopped", data: n })
        },
        videoSendingStopped: function(e, t) {
          var n = a()({}, m.list[e]);
          n.eventType = "video_sending_stopped", n.lts = Date.now(), n.elapse = n.lts - n.startTime, n.reson = t.reason, n.success = t.succ, delete n.startTime, m.send({ type: "VideoSendingStopped", data: n })
        },
        requestProxyAppCenter: function(e, t) {
          var n = a()({}, m.list[e]),
            r = t.lts;
          n.eventType = "request_proxy_appcenter", n.lts = Date.now(), n.eventElapse = n.lts - r, n.elapse = n.lts - n.startTime, n.extend = t.extend + "", n.APAddr = t.APAddr, n.workerManagerList = t.workerManagerList, n.response = t.response, n.errorCode = t.ec, n.success = t.succ, delete n.startTime, m.send({ type: "RequestProxyAppCenter", data: n })
        },
        requestProxyWorkerManager: function(e, t) {
          var n = a()({}, m.list[e]),
            r = t.lts;
          n.eventType = "request_proxy_worker_manager", n.lts = Date.now(), n.eventElapse = n.lts - r, n.elapse = n.lts - n.startTime, n.extend = t.extend, n.workerManagerAddr = t.workerManagerAddr, n.response = t.response, n.errorCode = t.ec, n.success = t.succ, delete n.startTime, m.send({ type: "RequestProxyWorkerManager", data: n })
        },
        requestWorkerEvent: function(e, t) {
          var n = a()({}, m.list[e]),
            r = n.startTime,
            i = Date.now();
          delete(n = g({}, n, {}, t, { elapse: i - r, lts: i, productType: "WebRTC" })).startTime, m.send({ type: "WorkerEvent", data: n })
        },
        requestApWorkerEvent: function(e, t) {
          var n = a()({}, m.list[e]),
            r = n.startTime,
            i = Date.now();
          n = g({}, n, {}, t, { elapse: i - r, lts: i }), m.send({ type: "APWorkerEvent", data: n })
        },
        sendCustomReportMessage: function(e, t, n) {
          var r = { type: "UserAnalytics", data: g({ sid: e }, t) },
            i = m.getUrl();
          Object(d.post)(i, r, (function(e) { n && n() }), (function(e) {
            var t = m.getBackUrl();
            Object(d.post)(t, r, (function(e) { n && n() }), (function(e) { n && n("Failed") }), { timeout: Object(s.getParameter)("CUSTOMER_REPORT_TIMEOUT") })
          }), { timeout: Object(s.getParameter)("CUSTOMER_REPORT_TIMEOUT") })
        },
        joinChannelTimeOut: function(e) { m.send({ type: "JoinChannelTimeout", data: g({}, e) }) },
        peerPublishStatus: function(e) { m.send({ type: "PeerPublishStatus", data: g({}, e) }) }
      }).reportApiInvoke = function(e, t) {
        var n = t.tag,
          r = t.name,
          i = t.getStates,
          o = t.options,
          a = t.timeout,
          d = void 0 === a ? 6e4 : a,
          u = t.callback,
          l = t.reportResult,
          p = void 0 === l || l,
          f = Date.now(),
          m = 0,
          v = h++,
          E = function() { return g({ tag: n, invokeId: v, sid: e, name: r, apiInvokeTime: f, options: o }, i && { states: (t = i(), Object.keys(t).reduce((function(e, n) { var r = e; return null != t[n] && (r[n] = t[n]), r }), {})) }); var t },
          _ = !!Object(s.getParameter)("SHOW_REPORT_INVOKER_LOG");
        _ && c.default.info("".concat(r, " start"));
        var S = setTimeout((function() { b._sendApiInvoke(g({}, E(), { error: "API_INVOKE_TIMEOUT", success: !1 })) }), d);
        return function(e, t) {
          if (clearTimeout(S), ++m > 1 && (e = "EXECUTOR_INVOKE_".concat(m)), e) return b._sendApiInvoke(g({}, E(), { success: !1, error: e }, i && { states: i() })), _ && c.default.info("".concat(r, " onFailure"), e), u && u(e);
          b._sendApiInvoke(g({}, E(), { success: !0 }, p && { result: t }, {}, i && { states: i() })), _ && c.default.info("".concat(r, " onSuccess")), u && u(null, t)
        }
      }, m._cachedItems = [], m._cacheInvokeReport = function(e) { e.lts || (e.lts = Date.now()), m._cachedItems.push(e), m._cachedItems.length > 50 && m._cachedItems.shift() }, m._flushInvokeReport = function(e) {
        if (m._cachedItems.length) {
          var t = m._cachedItems;
          m._cachedItems = [], c.default.debug("Flush cached event reporting:", t.length), t.forEach((function(t, n) { t.sid = e, setTimeout((function() { m._sendApiInvoke(t) }), 5e3 + 500 * n) }))
        }
      }, m._sendApiInvoke = function(e) {
        var t = e.tag,
          n = e.invokeId,
          r = e.sid,
          i = e.name,
          o = e.result,
          a = e.states,
          c = e.options,
          d = e.error,
          u = e.success,
          l = e.apiInvokeTime,
          p = e.lts,
          f = Object(s.getParameter)("NOT_REPORT_EVENT");
        if (!(t && f instanceof Array && -1 !== f.indexOf(t)))
          if (m.list[r]) {
            var h = m.list[r],
              v = h.startTime,
              E = h.cname,
              _ = h.uid,
              S = h.cid,
              y = (p = p || Date.now()) - v,
              R = p - l,
              T = "";
            if (c) try { T = JSON.stringify(c) } catch (e) { T = c.toString() }
            var I = g({ invokeId: n, sid: r, cname: E, cid: S, lts: p, uid: _, success: u, elapse: y, apiName: i, execElapse: R }, void 0 !== c && { options: T }, {}, void 0 !== a && { execStates: JSON.stringify(a) }, {}, void 0 !== d && { errorCode: JSON.stringify(d) }, {}, void 0 !== o && { execResult: JSON.stringify(o) });
            m.send({ type: "ApiInvoke", data: I })
          } else m._cacheInvokeReport(arguments[0])
      }, m.sendCache = [], m.sendTimer = null, m.send = function(e) {
        if (e.data) {
          var t = e.data;
          m._lastLts && m._lastLts >= t.lts && (t.lts = m._lastLts + 1), m._lastLts = t.lts
        }
        if (m.sendCache.push(e), null === m.sendTimer) return function e() {
          m.sendTimer = setTimeout((function() {
            if (0 !== m.sendCache.length) { var t = m.sendCache.length < 10 ? m.sendCache.splice(0, m.sendCache.length) : m.sendCache.splice(0, 10); return R.sendReportList(t), e() }
            m.sendTimer = null
          }), Object(s.getParameter)("EVENT_REPORT_SEND_INTERVAL"))
        }()
      }, m)
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "checkValidObject", (function() { return s })), n.d(t, "checkValidString", (function() { return c })), n.d(t, "checkValidNumber", (function() { return d })), n.d(t, "checkValidArray", (function() { return u })), n.d(t, "checkValidFloatNumber", (function() { return l })), n.d(t, "checkValidBoolean", (function() { return p })), n.d(t, "checkValidEnum", (function() { return a })), n.d(t, "checkValidUID", (function() { return f })), n.d(t, "isValidString", (function() { return g })), n.d(t, "isValidNumber", (function() { return m })), n.d(t, "isValidBoolean", (function() { return v })), n.d(t, "isASCII", (function() { return S })), n.d(t, "isInteger", (function() { return y })), n.d(t, "isNumber", (function() { return R })), n.d(t, "isString", (function() { return T })), n.d(t, "isArray", (function() { return I })), n.d(t, "isEmpty", (function() { return A })), n.d(t, "isValidToken", (function() { return E })), n.d(t, "isValidChannelName", (function() { return _ }));
    var r = n(11),
      i = n.n(r),
      o = n(10),
      a = function(e, t, n) {
        for (var r = 0; r < n.length; r++)
          if (e === n[r]) return !0;
        throw new Error("".concat(t, " can only be set as ").concat(JSON.stringify(n)))
      },
      s = function(e, t) { if (!e) throw new Error("Invalid param: ".concat(t || "param", " cannot be empty")); if ("object" !== i()(e)) throw new Error("".concat(t || "This paramter", " is of the object type")); return !0 },
      c = function(e, t, n, r, i) { if (A(n) && (n = 1), r = r || 255, A(i) && (i = !0), A(e)) throw new Error("".concat(t || "param", " cannot be empty")); if (!g(e, n, r, i)) throw new Error("Invalid ".concat(t || "string param", ": Length of the string: [").concat(n, ",").concat(r, "].").concat(i ? " ASCII characters only." : "")) },
      d = function(e, t, n, r) { if (A(n) && (n = 1), r = r || 1e4, A(e)) throw new Error("".concat(t || "param", " cannot be empty")); if (!m(e, n, r)) throw new Error("Invalid ".concat(t || "number param", ": The value range is [").concat(n, ",").concat(r, "]. integer only")) },
      u = function(e, t) { if (!Array.isArray(e)) throw new Error("".concat(t, " should be an array")) },
      l = function(e, t, n, r) { if (null == e) throw new Error("".concat(t || "param", " cannot be null")); if (A(n) && (n = 0), r = r || 1e4, A(e)) throw new Error("".concat(t || "param", " cannot be empty")); if (!h(e, n, r)) throw new Error("Invalid ".concat(t || "number param", ": The value range is [").concat(n, ",").concat(r, "].")) },
      p = function(e, t) { if (A(e)) throw new Error("".concat(t || "param", " cannot be empty")); if (!v(e)) throw new Error("Invalid ".concat(t || "boolean param", ": The value is of the boolean type.")) },
      f = function(e) { if (!Object(o.is32Uint)(e) && !g(e, 1, 255)) throw logger.error("Invalid UID ".concat(e, " ").concat(i()(e))), new Error("[String uid] Length of the string: [1,255]. ASCII characters only. [Number uid] The value range is [0,10000]") },
      g = function(e, t, n, r) { return t || (t = 0), n || (n = Number.MAX_SAFE_INTEGER), A(r) && (r = !0), T(e) && (!r || S(e)) && e.length >= t && e.length <= n },
      m = function(e, t, n) { return y(e) && e >= t && e <= n },
      h = function(e, t, n) { return R(e) && e >= t && e <= n },
      v = function(e) { return "boolean" == typeof e },
      E = function(e) { return g(e, 1, 2047) },
      _ = function(e) { return T(e) && /^[a-zA-Z0-9 \!\#\$\%\&\(\)\+\-\:\;\<\=\.\>\?\@\[\]\^\_\{\}\|\~\,]{1,64}$/.test(e) },
      S = function(e) { if ("string" == typeof e) { for (var t = 0; t < e.length; t++) { var n = e.charCodeAt(t); if (n < 0 || n > 255) return !1 } return !0 } },
      y = function(e) { return "number" == typeof e && e % 1 == 0 },
      R = function(e) { return "number" == typeof e },
      T = function(e) { return "string" == typeof e },
      I = function(e) { return e instanceof Array },
      A = function(e) { return null == e }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.BUILD = "v3.2.1-0-gf393343";
    t.VERSION = "3.2.1";
    var r = 0 * Date.now() + 11499 + 86604 + 5615 + 6547 + 846;
    t.SUPPORT_RESOLUTION_LIST = { "90p_1": [160, 90, null, null, null, null], "120p_1": [160, 120, 15, 15, 30, 65], "120p_3": [120, 120, 15, 15, 30, 50], "120p_4": [212, 120, null, null, null, null], "180p_1": [320, 180, 15, 15, 30, 140], "180p_3": [180, 180, 15, 15, 30, 100], "180p_4": [240, 180, 15, 15, 30, 120], "240p_1": [320, 240, 15, 15, 40, 200], "240p_3": [240, 240, 15, 15, 40, 140], "240p_4": [424, 240, 15, 15, 40, 220], "360p_1": [640, 360, 15, 15, 80, 400], "360p_3": [360, 360, 15, 15, 80, 260], "360p_4": [640, 360, 30, 30, 80, 600], "360p_6": [360, 360, 30, 30, 80, 400], "360p_7": [480, 360, 15, 15, 80, 320], "360p_8": [480, 360, 30, 30, 80, 490], "360p_9": [640, 360, 15, 15, 80, 800], "360p_10": [640, 360, 24, 24, 80, 800], "360p_11": [640, 360, 24, 24, 80, 1e3], "480p_1": [640, 480, 15, 15, 100, 500, 1, 5], "480p_2": [640, 480, 30, 30, 100, 1e3, 25, 30], "480p_3": [480, 480, 15, 15, 100, 400], "480p_4": [640, 480, 30, 30, 100, 750], "480p_6": [480, 480, 30, 30, 100, 600], "480p_8": [848, 480, 15, 15, 100, 610], "480p_9": [848, 480, 30, 30, 100, 930], "480p_10": [640, 480, 10, 10, 100, 400], "720p_1": [1280, 720, 15, 15, 120, 1130, 1, 5], "720p_2": [1280, 720, 30, 30, 120, 2e3, 25, 30], "720p_3": [1280, 720, 30, 30, 120, 1710], "720p_5": [960, 720, 15, 15, 120, 910], "720p_6": [960, 720, 30, 30, 120, 1380], "1080p_1": [1920, 1080, 15, 15, 120, 2080, 1, 5], "1080p_2": [1920, 1080, 30, 30, 120, 3e3, 25, 30], "1080p_3": [1920, 1080, 30, 30, 120, 3150], "1080p_5": [1920, 1080, 60, 60, 120, 4780], "1440p_1": [2560, 1440, 30, 30, 120, 4850], "1440p_2": [2560, 1440, 60, 60, 120, 7350], "4k_1": [3840, 2160, 30, 30, 120, 8910], "4k_3": [3840, 2160, 60, 60, 120, 13500] };
    t.AUDIO_PROFILE_SETTINGS = { speech_low_quality: [!1, !1, !0, !0], speech_standard: [!1, !1, !0, !1], music_standard: [!1, !1, !1, !1], standard_stereo: [!1, !0, !1, !1], high_quality: [!0, !1, !1, !1], high_quality_stereo: [!0, !0, !1, !1], default: [!1, !1, !1, !1] };
    var i = { WEBCS_DOMAIN: ["ap-web-1-oversea.agora.io", "ap-web-1-north-america.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-oversea.agora.io", "ap-web-2-north-america.agora.io"], PROXY_CS: ["proxy-ap-web-oversea.agora.io", "proxy-ap-web-america.agora.io"], CDS_AP: ["cds-ap-web-oversea.agora.io", "cds-ap-web-america.agora.io", "cds-ap-web-america2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-oversea.agora.io", "sua-ap-web-america.agora.io", "sua-ap-web-america2.agora.io"], UAP_AP: ["uap-ap-web-oversea.agora.io", "uap-ap-web-america.agora.io", "uap-ap-web-america2.agora.io"], LOG_UPLOAD_SERVER: "logservice-oversea.agora.io", EVENT_REPORT_DOMAIN: "statscollector-1-oversea.agora.io", EVENT_REPORT_BACKUP_DOMAIN: "statscollector-2-oversea.agora.io", ENABLE_LIVE_SERVER_LIST: !1, LIVE_SERVER_LIST: [], ACCOUNT_REGISTER_RETRY_TIMEOUT: 1, ACCOUNT_REGISTER_RETRY_RATIO: 2, ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX: 6e4, ACCOUNT_REGISTER_RETRY_COUNT_MAX: 1e5, AUDIO_CONTEXT: null, GATEWAY_DOMAINS: ["edge.agora.io"], WEBCS_BACKUP_CONNECT_TIMEOUT: 6e3, LIVESTREAMING_ALIGN: !0, HTTP_CONNECT_TIMEOUT: 5e3, PLAYER_STATE_DEFER: 2e3, SIGNAL_REQUEST_TIMEOUT: 1e7, SIGNAL_REQUEST_WATCH_INTERVAL: 1e3, REPORT_STATS: !0, REPORT_STATS_TIMEOUT: 3e3, UPLOAD_LOG: !1, NOT_REPORT_EVENT: [], FILEPATH_LENMAX: 255, SUBSCRIBE_TCC: !1, PING_PONG_TIME_OUT: 10, DUALSTREAM_OPERATION_CHECK: !0, WEBSOCKET_TIMEOUT_MIN: 1e4, EVENT_REPORT_SEND_INTERVAL: 1e3, MEDIA_ELEMENT_EXISTS_DEPTH: 3, CANDIDATE_TIMEOUT: 2e3, SHIM_CANDIDATE: !1, LEAVE_MSG_TIMEOUT: 2e3, TICKET_RENEW_TIMEOUT: 828e5, SHOW_REPORT_INVOKER_LOG: !1, STATS_FILTER: { transportId: !0, googTrackId: !0 }, FORCE_TURN: !1, TURN_ENABLE_TCP: !0, TURN_ENABLE_UDP: !0, FORCE_CHANGED_GATEWAY_FLAG: !1, JOIN_EXTEND: "", PUB_EXTEND: "", SUB_EXTEND: "", CHROME_NEW_STATS: !1, AP_BACKOFF_MAX_TIME: 8, SET_DEFAULT_TURNSERVER: !0, TURN_SERVER_PASSWORD: r.toString(), PROXY_SERVER_TYPE2: "webnginx-proxy.agora.io", CR: !0, CRL: 10, CRI: 6, CUSTOMER_REPORT_TIMEOUT: 5e3, LIVE_STREAMING_ADDRESS: "" };
    i.WEBCS_DOMAIN = ["webrtc2-ap-web-1.agora.io", "webrtc2-ap-web-2.agoraio.cn"], i.WEBCS_DOMAIN_BACKUP_LIST = ["webrtc2-ap-web-3.agora.io", "webrtc2-ap-web-4.agoraio.cn"], i.PROXY_CS = ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"], i.CDS_AP = ["cds-ap-web-1.agora.io", "cds-ap-web-2.agoraio.cn", "cds-ap-web-3.agora.io", "cds-ap-web-4.agoraio.cn"], i.ACCOUNT_REGISTER = ["sua-ap-web-1.agora.io", "sua-ap-web-2.agoraio.cn", "sua-ap-web-3.agora.io", "sua-ap-web-4.agoraio.cn"], i.UAP_AP = ["uap-ap-web-1.agora.io", "uap-ap-web-2.agoraio.cn", "uap-ap-web-3.agora.io", "uap-ap-web-4.agoraio.cn"], i.LOG_UPLOAD_SERVER = "logservice.agora.io", i.EVENT_REPORT_DOMAIN = "webcollector-1.agora.io", i.EVENT_REPORT_BACKUP_DOMAIN = "webcollector-2.agoraio.cn", i.GATEWAY_DOMAINS = ["edge.agora.io", "edge.agoraio.cn"];
    t.setParameter = function(e, t) { return void 0 !== i[e] && (i[e] = t, !0) };
    t.getParameter = function(e) { return void 0 !== i[e] ? i[e] : null }
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getBrowserInfo", (function() { return E })), n.d(t, "getBrowserVersion", (function() { return p })), n.d(t, "getBrowserOS", (function() { return f })), n.d(t, "isChrome", (function() { return r })), n.d(t, "isSafari", (function() { return i })), n.d(t, "isFireFox", (function() { return a })), n.d(t, "isOpera", (function() { return s })), n.d(t, "isEdge", (function() { return o })), n.d(t, "isQQBrowser", (function() { return c })), n.d(t, "isWeChatBrowser", (function() { return d })), n.d(t, "isLegacyChrome", (function() { return m })), n.d(t, "isSupportedPC", (function() { return u })), n.d(t, "isSupportedMobile", (function() { return l })), n.d(t, "getChromeKernelVersion", (function() { return v })), n.d(t, "isChromeKernel", (function() { return g }));
    var r = function() { var e = E(); return e.name && "Chrome" === e.name },
      i = function() { var e = E(); return e.name && "Safari" === e.name },
      o = function() { var e = E(); return e.name && "Edge" === e.name },
      a = function() { var e = E(); return e.name && "Firefox" === e.name },
      s = function() { var e = E(); return e.name && "OPR" === e.name },
      c = function() { var e = E(); return e.name && "QQBrowser" === e.name },
      d = function() { var e = E(); return e.name && "MicroMessenger" === e.name },
      u = function() { var e = f(); return "Linux" === e || "Mac OS X" === e || "Mac OS" === e || -1 !== e.indexOf("Windows") },
      l = function() { var e = f(); return "Android" === e || "iOS" === e },
      p = function() { return E().version },
      f = function() { return E().os },
      g = function() { return !!navigator.userAgent.match(/chrome\/[\d]./i) };

    function m() { return window.navigator.appVersion && null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35 }
    var h, v = function() { var e = navigator.userAgent.match(/chrome\/[\d]./i); return e && e[0] && e[0].split("/")[1] },
      E = (h = function() {
        var e, t = navigator.userAgent,
          n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        "Chrome" === n[1] && null != (e = t.match(/(OPR(?=\/))\/?(\d+)/i)) && (n = e), "Safari" === n[1] && null != (e = t.match(/version\/(\d+)/i)) && (n[2] = e[1]), ~t.toLowerCase().indexOf("qqbrowser") && null != (e = t.match(/(qqbrowser(?=\/))\/?(\d+)/i)) && (n = e), ~t.toLowerCase().indexOf("micromessenger") && null != (e = t.match(/(micromessenger(?=\/))\/?(\d+)/i)) && (n = e), ~t.toLowerCase().indexOf("edge") && null != (e = t.match(/(edge(?=\/))\/?(\d+)/i)) && (n = e), ~t.toLowerCase().indexOf("trident") && null != (e = /\brv[ :]+(\d+)/g.exec(t) || []) && (n = [null, "IE", e[1]]);
        var r = void 0,
          i = [{ s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ }, { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ }, { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ }, { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ }, { s: "Windows Vista", r: /Windows NT 6.0/ }, { s: "Windows Server 2003", r: /Windows NT 5.2/ }, { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ }, { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ }, { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ }, { s: "Windows 98", r: /(Windows 98|Win98)/ }, { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ }, { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ }, { s: "Windows CE", r: /Windows CE/ }, { s: "Windows 3.11", r: /Win16/ }, { s: "Android", r: /Android/ }, { s: "Open BSD", r: /OpenBSD/ }, { s: "Sun OS", r: /SunOS/ }, { s: "Linux", r: /(Linux|X11)/ }, { s: "iOS", r: /(iPhone|iPad|iPod)/ }, { s: "Mac OS X", r: /Mac OS X/ }, { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }, { s: "QNX", r: /QNX/ }, { s: "UNIX", r: /UNIX/ }, { s: "BeOS", r: /BeOS/ }, { s: "OS/2", r: /OS\/2/ }, { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }];
        for (var o in i) { var a = i[o]; if (a.r.test(navigator.userAgent)) { r = a.s; break } }
        return { name: n[1], version: n[2], os: r }
      }(), function() { return h })
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "APErrorCode", (function() { return r })), n.d(t, "GatewayErrorCode", (function() { return i })), n.d(t, "StringUidErrorCode", (function() { return o })), n.d(t, "JOIN_GS_TRYNEXT_LIST", (function() { return a })), n.d(t, "JOIN_CS_RETRY_LIST", (function() { return s })), n.d(t, "INJECT_STREAM_STATUS", (function() { return c }));
    var r = { 1010100: "NO_FLAG_SET", 1010101: "FLAG_SET_BUT_EMPTY", 1010102: "INVALID_FALG_SET", 2010005: "INVALID_VENDOR_KEY", 2010007: "INVALID_CHANNEL_NAME", 2010008: "INTERNAL_ERROR", 2010009: "NO_AUTHORIZED", 2010010: "DYNAMIC_KEY_TIMEOUT", 2010011: "NO_ACTIVE_STATUS", 2010013: "DYNAMIC_KEY_EXPIRED", 2010014: "STATIC_USE_DYANMIC_KEY", 2010015: "DYNAMIC_USE_STATIC_KEY", 2010016: "USER_OVERLOAD", 2010018: "FORBIDDEN_REGION", 2010019: "CANNOT_MEET_AREA_DEMAND" },
      i = { 2e3: "ERR_NO_VOCS_AVAILABLE", 2001: "ERR_NO_VOS_AVAILABLE", 2002: "ERR_JOIN_CHANNEL_TIMEOUT", 2003: "WARN_REPEAT_JOIN", 2004: "ERR_JOIN_BY_MULTI_IP", 2011: "ERR_NOT_JOINED", 2012: "WARN_REPEAT_JOIN", 2013: "ERR_INVALID_VENDOR_KEY", 2014: "ERR_INVALID_CHANNEL_NAME", 2015: "ERR_INVALID_STRINGUID", 2016: "ERR_TOO_MANY_USERS", 2017: "ERR_SET_CLIENT_ROLE_TIMEOUT", 2018: "ERR_SET_CLIENT_ROLE_NO_PERMISSION", 2019: "ERR_SET_CLIENT_ROLE_ALREADY_IN_USE", 2020: "ERR_PUBLISH_REQUEST_INVALID", 2021: "ERR_SUBSCRIBE_REQUEST_INVALID", 2022: "ERR_NOT_SUPPORTED_MESSAGE", 2023: "ERR_ILLEAGAL_PLUGIN", 101: "ERR_INVALID_VENDOR_KEY", 102: "ERR_INVALID_CHANNEL_NAME", 103: "WARN_NO_AVAILABLE_CHANNEL", 104: "WARN_LOOKUP_CHANNEL_TIMEOUT", 105: "WARN_LOOKUP_CHANNEL_REJECTED", 106: "WARN_OPEN_CHANNEL_TIMEOUT", 107: "WARN_OPEN_CHANNEL_REJECTED", 108: "WARN_REQUEST_DEFERRED", 109: "ERR_DYNAMIC_KEY_TIMEOUT", 110: "ERR_NO_AUTHORIZED", 111: "ERR_VOM_SERVICE_UNAVAILABLE", 112: "ERR_NO_CHANNEL_AVAILABLE_CODE", 113: "ERR_TOO_MANY_USERS", 114: "ERR_MASTER_VOCS_UNAVAILABLE", 115: "ERR_INTERNAL_ERROR", 116: "ERR_NO_ACTIVE_STATUS", 117: "ERR_INVALID_UID", 118: "ERR_DYNAMIC_KEY_EXPIRED", 119: "ERR_STATIC_USE_DYANMIC_KE", 120: "ERR_DYNAMIC_USE_STATIC_KE", 2: "K_TIMESTAMP_EXPIRED", 3: "K_CHANNEL_PERMISSION_INVALID", 4: "K_CERTIFICATE_INVALID", 5: "K_CHANNEL_NAME_EMPTY", 6: "K_CHANNEL_NOT_FOUND", 7: "K_TICKET_INVALID", 8: "K_CHANNEL_CONFLICTED", 9: "K_SERVICE_NOT_READY", 10: "K_SERVICE_TOO_HEAVY", 14: "K_UID_BANNED", 15: "K_IP_BANNED", 16: "K_CHANNEL_BANNED" },
      o = { 1: "ERROR_ILLEAGAL_APPID", 2: "ERROR_ILLEAGAL_UID", 3: "INTERNAL_SERVER_ERROR" },
      a = ["ERR_NO_VOCS_AVAILABLE", "ERR_NO_VOS_AVAILABLE", "ERR_JOIN_CHANNEL_TIMEOUT", "WARN_LOOKUP_CHANNEL_TIMEOUT", "WARN_OPEN_CHANNEL_TIMEOUT", "ERR_VOM_SERVICE_UNAVAILABLE", "ERR_TOO_MANY_USERS", "ERR_MASTER_VOCS_UNAVAILABLE", "ERR_INTERNAL_ERROR"],
      s = ["NO_SERVICE_AVAILABLE"],
      c = { INJECT_STREAM_STATUS_START_SUCCESS: 0, INJECT_STREAM_STATUS_START_ALREADY_EXISTS: 1, INJECT_STREAM_STATUS_START_UNAUTHORIZED: 2, INJECT_STREAM_STATUS_START_TIMEDOUT: 3, INJECT_STREAM_STATUS_START_FAILED: 4, INJECT_STREAM_STATUS_STOP_SUCCESS: 5, INJECT_STREAM_STATUS_STOP_NOT_FOUND: 6, INJECT_STREAM_STATUS_STOP_UNAUTHORIZED: 7, INJECT_STREAM_STATUS_STOP_TIMEDOUT: 8, INJECT_STREAM_STATUS_STOP_FAILED: 9, INJECT_STREAM_STATUS_BROKEN: 10 };
    t.default = { FAILED: "FAILED", INVALID_KEY: "INVALID_KEY", INVALID_CLIENT_MODE: "INVALID_CLIENT_MODE", INVALID_CLIENT_CODEC: "INVALID_CLIENT_CODEC", CLIENT_MODE_CODEC_MISMATCH: "CLIENT_MODE_CODEC_MISMATCH", WEB_API_NOT_SUPPORTED: "WEB_API_NOT_SUPPORTED", INVALID_PARAMETER: "INVALID_PARAMETER", NO_TRACK_IN_STREAM: "NO_TRACK_IN_STREAM", INVALID_OPERATION: "INVALID_OPERATION", INVALID_LOCAL_STREAM: "INVALID_LOCAL_STREAM", INVALID_REMOTE_STREAM: "INVALID_REMOTE_STREAM", INVALID_DYNAMIC_KEY: "INVALID_DYNAMIC_KEY", DYNAMIC_KEY_TIMEOUT: "DYNAMIC_KEY_TIMEOUT", NO_VOCS_AVAILABLE: "NO_VOCS_AVAILABLE", NO_VOS_AVAILABLE: "ERR_NO_VOS_AVAILABLE", JOIN_CHANNEL_TIMEOUT: "ERR_JOIN_CHANNEL_TIMEOUT", NO_AVAILABLE_CHANNEL: "NO_AVAILABLE_CHANNEL", LOOKUP_CHANNEL_TIMEOUT: "LOOKUP_CHANNEL_TIMEOUT", LOOKUP_CHANNEL_REJECTED: "LOOKUP_CHANNEL_REJECTED", OPEN_CHANNEL_TIMEOUT: "OPEN_CHANNEL_TIMEOUT", OPEN_CHANNEL_REJECTED: "OPEN_CHANNEL_REJECTED", REQUEST_DEFERRED: "REQUEST_DEFERRED", STREAM_ALREADY_PUBLISHED: "STREAM_ALREADY_PUBLISHED", STREAM_NOT_YET_PUBLISHED: "STREAM_NOT_YET_PUBLISHED", JOIN_TOO_FREQUENT: "JOIN_TOO_FREQUENT", SOCKET_ERROR: "SOCKET_ERROR", SOCKET_DISCONNECTED: "SOCKET_DISCONNECTED", PEERCONNECTION_FAILED: "PEERCONNECTION_FAILED", CONNECT_GATEWAY_ERROR: "CONNECT_GATEWAY_ERROR", SERVICE_NOT_AVAILABLE: "SERVICE_NOT_AVAILABLE", JOIN_CHANNEL_FAILED: "JOIN_CHANNEL_FAILED", PUBLISH_STREAM_FAILED: "PUBLISH_STREAM_FAILED", UNPUBLISH_STREAM_FAILED: "UNPUBLISH_STREAM_FAILED", SUBSCRIBE_STREAM_FAILED: "SUBSCRIBE_STREAM_FAILED", UNSUBSCRIBE_STREAM_FAILED: "UNSUBSCRIBE_STREAM_FAILED", NO_SUCH_REMOTE_STREAM: "NO_SUCH_REMOTE_STREAM", ERR_FAILED: "1", ERR_INVALID_VENDOR_KEY: "101", ERR_INVALID_CHANNEL_NAME: "102", WARN_NO_AVAILABLE_CHANNEL: "103", WARN_LOOKUP_CHANNEL_TIMEOUT: "104", WARN_LOOKUP_CHANNEL_REJECTED: "105", WARN_OPEN_CHANNEL_TIMEOUT: "106", WARN_OPEN_CHANNEL_REJECTED: "107", WARN_REQUEST_DEFERRED: "108", ERR_DYNAMIC_KEY_TIMEOUT: "109", ERR_INVALID_DYNAMIC_KEY: "110", ERR_NO_VOCS_AVAILABLE: "2000", ERR_NO_VOS_AVAILABLE: "2001", ERR_JOIN_CHANNEL_TIMEOUT: "2002", IOS_NOT_SUPPORT: "IOS_NOT_SUPPORT", WECHAT_NOT_SUPPORT: "WECHAT_NOT_SUPPORT", SHARING_SCREEN_NOT_SUPPORT: "SHARING_SCREEN_NOT_SUPPORT", STILL_ON_PUBLISHING: "STILL_ON_PUBLISHING", LOW_STREAM_ALREADY_PUBLISHED: "LOW_STREAM_ALREADY_PUBLISHED", LOW_STREAM_NOT_YET_PUBLISHED: "LOW_STREAM_ALREADY_PUBLISHED", HIGH_STREAM_NOT_VIDEO_TRACE: "HIGH_STREAM_NOT_VIDEO_TRACE", NOT_FIND_DEVICE_BY_LABEL: "NOT_FIND_DEVICE_BY_LABEL", ENABLE_DUALSTREAM_FAILED: "ENABLE_DUALSTREAM_FAILED", DISABLE_DUALSTREAM_FAILED: "DISABLE_DUALSTREAM_FAILED", PLAYER_NOT_FOUND: "PLAYER_NOT_FOUND", ELECTRON_NOT_SUPPORT_SHARING_SCREEN: "ELECTRON_NOT_SUPPORT_SHARING_SCREEN", BAD_ENVIRONMENT: "BAD_ENVIRONMENT", LOAD_AUDIO_FAILED: "LOAD_AUDIO_FAILED" }
  }, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() { return r })), n.d(t, "a", (function() { return i })), n.d(t, "c", (function() { return o }));
    n(0);
    var r = function(e, t, n) { if (["End2EndDelay", "TransportDelay", "PacketLossRate", "RecvLevel", "RecvBitrate", "CodecType", "MuteState", "TotalFreezeTime", "TotalPlayDuration", "RecordingLevel", "SendLevel", "SamplingRate", "SendBitrate", "CodecType", "MuteState", "End2EndDelay", "TransportDelay", "PacketLossRate", "RecvBitrate", "RecvResolutionWidth", "RecvResolutionHeight", "RenderResolutionHeight", "RenderResolutionWidth", "RenderFrameRate", "TotalFreezeTime", "TotalPlayDuration", "TargetSendBitrate", "SendFrameRate", "SendFrameRate", "SendBitrate", "SendResolutionWidth", "SendResolutionHeight", "CaptureResolutionHeight", "CaptureResolutionWidth", "EncodeDelay", "MuteState", "TotalFreezeTime", "TotalDuration", "CaptureFrameRate", "RTT", "OutgoingAvailableBandwidth", "Duration", "UserCount", "SendBytes", "RecvBytes", "SendBitrate", "RecvBitrate", "accessDelay", "audioSendBytes", "audioSendPackets", "videoSendBytes", "videoSendPackets", "videoSendPacketsLost", "videoSendFrameRate", "audioSendPacketsLost", "videoSendResolutionWidth", "videoSendResolutionHeight", "accessDelay", "audioReceiveBytes", "audioReceivePackets", "audioReceivePacketsLost", "videoReceiveBytes", "videoReceivePackets", "videoReceivePacketsLost", "videoReceiveFrameRate", "videoReceiveDecodeFrameRate", "videoReceiveResolutionWidth", "videoReceiveResolutionHeight", "endToEndDelay", "videoReceiveDelay", "audioReceiveDelay", "FirstFrameTime", "VideoFreezeRate", "AudioFreezeRate", "RenderResolutionWidth", "RenderResolutionHeight", "VideoPublishDuration", "AudioPublishDuration"].indexOf(t) > -1 && ("string" == typeof n || isFinite(n))) return e[t] = "" + n },
      i = function(e) { var t = {}; return e.forEach((function(e) { e.id && e.type && (-1 === e.id.indexOf("send") && -1 === e.type.toLowerCase().indexOf("outbound") && -1 === e.id.indexOf("outbound_rtp") && -1 === e.id.indexOf("OutboundRTP") || ("audio" === e.mediaType ? (r(t, "audioSendBytes", e.bytesSent), r(t, "audioSendPackets", e.packetsSent), r(t, "audioSendPacketsLost", e.packetsLost)) : (r(t, "videoSendBytes", e.bytesSent), r(t, "videoSendPackets", e.packetsSent), r(t, "videoSendPacketsLost", e.packetsLost), r(t, "videoSendFrameRate", e.googFrameRateSent), r(t, "videoSendResolutionWidth", e.googFrameWidthSent), r(t, "videoSendResolutionHeight", e.googFrameHeightSent)))) })), t },
      o = function(e) { var t = {}; return e.forEach((function(e) { e.id && e.type && (-1 === e.id.indexOf("recv") && -1 === e.type.toLowerCase().indexOf("inbound") && -1 === e.id.indexOf("inbound_rtp") && -1 === e.id.indexOf("inbound-rtp") && -1 === e.id.indexOf("InboundRTP") || ("audio" === e.mediaType ? (r(t, "audioReceiveBytes", e.bytesReceived), r(t, "audioReceivePackets", e.packetsReceived), r(t, "audioReceivePacketsLost", e.packetsLost)) : (r(t, "videoReceiveBytes", e.bytesReceived), r(t, "videoReceivePacketsLost", e.packetsLost), r(t, "videoReceivePackets", e.packetsReceived), r(t, "videoReceiveFrameRate", e.googFrameRateReceived), r(t, "videoReceiveDecodeFrameRate", e.googFrameRateDecoded), r(t, "videoReceiveResolutionWidth", e.googFrameWidthReceived), r(t, "videoReceiveResolutionHeight", e.googFrameHeightReceived)))) })), t }
  }, function(e, t) {
    function n() { return e.exports = n = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, n.apply(this, arguments) }
    e.exports = n
  }, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() { return i })), n.d(t, "e", (function() { return a })), n.d(t, "a", (function() { return s })), n.d(t, "d", (function() { return c })), n.d(t, "c", (function() { return d }));
    var r = n(0),
      i = function() {
        var e = { dispatcher: {} };
        return e.dispatcher.eventListeners = {}, e.addEventListener = function(t, n) { void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []), e.dispatcher.eventListeners[t].push(n) }, e.hasListeners = function(t) { return !(!e.dispatcher.eventListeners[t] || !e.dispatcher.eventListeners[t].length) }, e.on = e.addEventListener, e.removeEventListener = function(t, n) {
          var r;
          e.dispatcher.eventListeners[t] && -1 !== (r = e.dispatcher.eventListeners[t].indexOf(n)) && e.dispatcher.eventListeners[t].splice(r, 1)
        }, e.dispatchEvent = function(t) {
          var n;
          for (n in e.dispatcher.eventListeners[t.type])
            if (e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n]) try { e.dispatcher.eventListeners[t.type][n](t) } catch (n) { r.default.debug("[".concat(e.clientId, "] Error in ").concat(t.type, " event"), n) }
        }, e.dispatchSocketEvent = function(t) { var n; for (n in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t.msg) }, e
      },
      o = function(e) { var t = {}; return t.type = e.type, t },
      a = function(e) { var t = o(e); return t.stream = e.stream, t.reason = e.reason, t.msg = e.msg, t },
      s = function(e) { var t = o(e); return t.uid = e.uid, t.attr = e.attr, t.stream = e.stream, t },
      c = function(e) { var t = o(e); return t.msg = e.msg, t },
      d = function(e) { var t = o(e); return t.url = e.url, t.uid = e.uid, t.status = e.status, t.reason = e.reason, t }
  }, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || { __proto__: [] }
          instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
      }, function(e, t) {
        function n() { this.constructor = e }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }),
      o = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function a(e) { try { c(r.next(e)) } catch (e) { o(e) } }

          function s(e) { try { c(r.throw(e)) } catch (e) { o(e) } }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      a = this && this.__generator || function(e, t) {
        var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
        return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

        function s(o) {
          return function(s) {
            return function(o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { a = 0; continue }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break }
                    if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break }
                    if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                o = t.call(e, a)
              } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 }
            }([o, s])
          }
        }
      },
      s = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var c = s(n(67)),
      d = n(3),
      u = s(n(0)),
      l = n(2),
      p = n(14),
      f = n(10),
      g = function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return r._state = _.RELAY_STATE_IDLE, r._onStatus = function(e) { u.default.debug("[" + r.clientId + "] ChannelMediaStatus: " + JSON.stringify(e)), e && e.command && ("onAudioPacketReceived" === e.command && r.emit("event", E.PACKET_RECEIVED_AUDIO_FROM_SRC), "onVideoPacketReceived" === e.command && r.emit("event", E.PACKET_RECEIVED_VIDEO_FROM_SRC), "onSrcTokenPrivilegeDidExpire" === e.command && (r._state = _.RELAY_STATE_FAILURE, r.emit("state", _.RELAY_STATE_FAILURE, S.SRC_TOKEN_EXPIRED)), "onDestTokenPrivilegeDidExpire" === e.command && (r._state = _.RELAY_STATE_FAILURE, r.emit("state", _.RELAY_STATE_FAILURE, S.DEST_TOKEN_EXPIRED, e.channelName ? { came: e.channelName } : null))) }, r._onClose = function() {
            return o(r, void 0, void 0, (function() {
              var e;
              return a(this, (function(t) {
                switch (t.label) {
                  case 0:
                    if (u.default.debug("[" + this.clientId + "] ChannelMediaSocket onClose"), this.emit("event", E.NETWORK_DISCONNECTED), this.state = _.RELAY_STATE_IDLE, !this._prevChannelMediaConfig) return [3, 4];
                    t.label = 1;
                  case 1:
                    return t.trys.push([1, 3, , 4]), [4, this.startChannelMediaRelay(this._prevChannelMediaConfig)];
                  case 2:
                    return t.sent(), [3, 4];
                  case 3:
                    return (e = t.sent()) instanceof R && (e.message === h.WS_ABORT || e.message === h.AP_REQUEST_ABORT) ? [2] : (this.emit("state", _.RELAY_STATE_FAILURE, S.SERVER_CONNECTION_LOST), [3, 4]);
                  case 4:
                    return [2]
                }
              }))
            }))
          }, r.token = t.appId, r.appId = t.appId, r.cname = t.cname, r.uid = t.uid, r.sid = t.sid, r.clientId = n, r
        }
        return i(t, e), Object.defineProperty(t.prototype, "state", {
          get: function() { return this._state },
          set: function(e) {
            var t = this._state;
            this._state = e, t !== e && this.emit("state", e)
          },
          enumerable: !0,
          configurable: !0
        }), t.prototype.startChannelMediaRelay = function(e) {
          return o(this, void 0, void 0, (function() {
            return a(this, (function(t) {
              switch (t.label) {
                case 0:
                  if (this.state !== _.RELAY_STATE_IDLE) throw new R(h.BAD_STATE);
                  return this.state = _.RELAY_STATE_CONNECTING, [4, this._connect()];
                case 1:
                  return t.sent(), u.default.debug("[" + this.clientId + "] startChannelMediaRelay: connect success"), [4, this._sendStartRelayMessage(e)];
                case 2:
                  return t.sent(), this._prevChannelMediaConfig = e, [2]
              }
            }))
          }))
        }, t.prototype.updateChannelMediaRelay = function(e) {
          return o(this, void 0, void 0, (function() {
            return a(this, (function(t) {
              switch (t.label) {
                case 0:
                  if (this.state !== _.RELAY_STATE_RUNNING) throw new R(h.BAD_STATE);
                  return [4, this._sendUpdateMessage(e)];
                case 1:
                  return t.sent(), this._prevChannelMediaConfig = e, [2]
              }
            }))
          }))
        }, t.prototype.stopChannelMediaRelay = function() {
          return o(this, void 0, void 0, (function() {
            return a(this, (function(e) {
              switch (e.label) {
                case 0:
                  return [4, this._sendStopRelayMessage()];
                case 1:
                  return e.sent(), u.default.debug("[" + this.clientId + "] stopChannelMediaRelay: send stop message success"), this.state = _.RELAY_STATE_IDLE, this.dispose(), [2]
              }
            }))
          }))
        }, t.prototype.dispose = function() { u.default.debug("[" + this.clientId + "] disposeChannelMediaRelay"), this.state = _.RELAY_STATE_IDLE, this.emit("dispose"), this._signal && this._signal.dispose(), this._prevChannelMediaConfig = null, this.removeEvent() }, t.prototype._requestOneAP = function(e) {
          var t = this;
          return new Promise((function(n, r) {
            var i = { command: "convergeAllocateEdge", sid: t.sid, appId: t.appId, token: "", ts: +new Date, version: d.VERSION, cname: t.cname, uid: t.uid + "", seq: 1, requestId: 1 },
              o = { service_name: "tele_channel", json_body: JSON.stringify(i) },
              a = "https://" + e;
            p.post(a, o, (function(e) {
              var t = null,
                i = null;
              try { t = JSON.parse(e) } catch (e) { r(new R(h.AP_JSON_PARSE_ERROR, e)) }
              0 !== t.code && r(new R(h.AP_REQUEST_ERROR, t));
              try { i = JSON.parse(t.json_body) } catch (e) { r(new R(h.AP_JSON_PARSE_ERROR, e)) }
              200 !== i.code && r(new R(h.AP_REQUEST_ERROR, i)), i.servers ? n(i.servers) : r(new R(h.AP_JSON_PARSE_ERROR, i))
            }), (function(e) { return r(e) }), { "X-Packet-Service-Type": 0, "X-Packet-URI": 61 })
          }))
        }, t.prototype._requestAP = function() {
          var e = this,
            t = d.getParameter("UAP_AP");
          return new Promise((function(n, r) {
            setTimeout((function() { r(new R(h.AP_REQUEST_TIMEOUT)) }), 5e3), e.on("dispose", (function() { r(new R(h.AP_REQUEST_ABORT)) })), t.forEach((function(t) {
              t += "/api/v1", e._requestOneAP(t).then((function(r) {
                u.default.debug("[" + e.clientId + "] startChannelMediaRelay request AP " + t + " success: " + JSON.stringify(r));
                var i = r[0],
                  o = "wss://" + i.address.replace(/\./g, "-") + ".edge.agora.io:" + i.wss;
                n(o)
              })).catch((function(n) { u.default.debug("[" + e.clientId + "] startChannelMediaRelay request AP " + t + " failed: " + JSON.stringify(n)) }))
            }))
          }))
        }, t.prototype._connectWebsocket = function(e) { return this._signal = new y(this.appId, this.cname, this.uid, this.sid), this._signal.connect(e) }, t.prototype._connect = function() {
          return o(this, void 0, void 0, (function() {
            var e;
            return a(this, (function(t) {
              switch (t.label) {
                case 0:
                  return [4, this._requestAP()];
                case 1:
                  return e = t.sent(), [4, this._connectWebsocket(e)];
                case 2:
                  return t.sent(), this._signal.on("close", this._onClose.bind(this)), this._signal.on("status", this._onStatus.bind(this)), this.emit("event", E.NETWORK_CONNECTED), [2]
              }
            }))
          }))
        }, t.prototype._sendStartRelayMessage = function(e) {
          return o(this, void 0, void 0, (function() {
            var t, n, r, i, o, s;
            return a(this, (function(a) {
              switch (a.label) {
                case 0:
                  return this._checkSignal(), t = this._genMessage(v.StopPacketTransfer), [4, this._signal.request(t)];
                case 1:
                  return a.sent(), [4, this._signal.waitStatus("Normal Quit")];
                case 2:
                  return a.sent(), u.default.debug("[" + this.clientId + "] startChannelMediaRelay: StopPacketTransfer success"), n = this._genMessage(v.SetSdkProfile, e), [4, this._signal.request(n)];
                case 3:
                  return a.sent(), u.default.debug("[" + this.clientId + "] startChannelMediaRelay: SetSdkProfile success"), r = this._genMessage(v.SetSourceChannel, e), [4, this._signal.request(r)];
                case 4:
                  return a.sent(), [4, this._signal.waitStatus("SetSourceChannelStatus")];
                case 5:
                  return a.sent(), this.emit("event", E.PACKET_JOINED_SRC_CHANNEL), u.default.debug("[" + this.clientId + "] startChannelMediaRelay: SetSourceChannel success"), i = this._genMessage(v.SetSourceUserId, e), [4, this._signal.request(i)];
                case 6:
                  return a.sent(), u.default.debug("[" + this.clientId + "] startChannelMediaRelay: SetSourceUserId success"), o = this._genMessage(v.SetDestChannel, e), [4, this._signal.request(o)];
                case 7:
                  return a.sent(), [4, this._signal.waitStatus("SetDestChannelStatus")];
                case 8:
                  return a.sent(), this.emit("event", E.PACKET_JOINED_DEST_CHANNEL), u.default.debug("[" + this.clientId + "] startChannelMediaRelay: SetDestChannel success"), s = this._genMessage(v.StartPacketTransfer, e), [4, this._signal.request(s)];
                case 9:
                  return a.sent(), this.emit("event", E.PACKET_SENT_TO_DEST_CHANNEL), this.state = _.RELAY_STATE_RUNNING, u.default.debug("[" + this.clientId + "] startChannelMediaRelay: StartPacketTransfer success"), [2]
              }
            }))
          }))
        }, t.prototype._sendReconnectMessage = function(e) {
          return o(this, void 0, void 0, (function() {
            var t;
            return a(this, (function(n) {
              switch (n.label) {
                case 0:
                  return this._checkSignal(), t = this._genMessage(v.Reconnect, e), [4, this._signal.request(t)];
                case 1:
                  return n.sent(), [2]
              }
            }))
          }))
        }, t.prototype._sendUpdateMessage = function(e) {
          return o(this, void 0, void 0, (function() {
            var t;
            return a(this, (function(n) {
              switch (n.label) {
                case 0:
                  return this._checkSignal(), t = this._genMessage(v.UpdateDestChannel, e), [4, this._signal.request(t)];
                case 1:
                  return n.sent(), this.emit("event", E.PACKET_UPDATE_DEST_CHANNEL), u.default.debug("[" + this.clientId + "] sendUpdateMessage: UpdateDestChannel success"), [2]
              }
            }))
          }))
        }, t.prototype._sendStopRelayMessage = function() {
          return o(this, void 0, void 0, (function() {
            var e;
            return a(this, (function(t) {
              switch (t.label) {
                case 0:
                  return this._checkSignal(), e = this._genMessage(v.StopPacketTransfer), [4, this._signal.request(e)];
                case 1:
                  return t.sent(), u.default.debug("[" + this.clientId + "] sendStopRelayMessage: StopPacketTransfer success"), [2]
              }
            }))
          }))
        }, t.prototype._genMessage = function(e, t) {
          var n = this,
            r = [],
            i = [],
            o = [],
            a = { appId: this.appId, cname: this.cname, uid: this.uid + "", sdkVersion: d.VERSION, sid: this.sid, ts: +new Date, requestId: 0, seq: 0, allocate: !0, clientRequest: {} },
            s = null;
          switch (e) {
            case v.SetSdkProfile:
              return a.clientRequest = { command: "SetSdkProfile", type: "multi_channel" }, a;
            case v.SetSourceChannel:
              return s = t.getSrcChannelMediaInfo(), a.clientRequest = { command: "SetSourceChannel", uid: s.uid + "", channelName: s.channelName, token: s.token || this.appId }, a;
            case v.SetSourceUserId:
              return s = t.getSrcChannelMediaInfo(), a.clientRequest = { command: "SetSourceUserId", uid: this.uid + "" }, a;
            case v.SetDestChannel:
              return t.getDestChannelMediaInfos().forEach((function(e) { r.push(e.channelName), i.push(e.uid + ""), o.push(e.token || n.appId) })), a.clientRequest = { command: "SetDestChannel", channelName: r, uid: i, token: o }, a;
            case v.StartPacketTransfer:
              return a.clientRequest = { command: "StartPacketTransfer" }, a;
            case v.Reconnect:
              return a.clientRequest = { command: "Reconnect" }, a;
            case v.StopPacketTransfer:
              return a.clientRequest = { command: "StopPacketTransfer" }, a;
            case v.UpdateDestChannel:
              return t.getDestChannelMediaInfos().forEach((function(e) { r.push(e.channelName), i.push(e.uid + ""), o.push(e.token || n.appId) })), a.clientRequest = { command: "UpdateDestChannel", channelName: r, uid: i, token: o }, a
          }
        }, t.prototype._checkSignal = function() { if (!this._signal || !this._signal.isConnect()) throw new R(h.WS_DISCONNECTED) }, t
      }(c.default);
    t.default = g;
    var m = function() {
      function e() { this.destChannelMediaInfos = new Map }
      return e.prototype.setSrcChannelInfo = function(e) {
        l.checkValidObject(e, "srcInfo");
        var t = e.uid,
          n = e.channelName,
          r = e.token;
        if (r && !l.isValidToken(r)) throw new Error("Invalid token in SrcChannelInfo");
        if (!l.isValidChannelName(n)) throw new Error("Invalid channelName in SrcChannelInfo");
        if (!f.is32Uint(t)) throw new Error("Invalid uid in SrcChannelInfo");
        this.srcChannelMediaInfo = e
      }, e.prototype.setDestChannelInfo = function(e, t) {
        if (!l.isValidChannelName(e)) throw new Error("Invalid channelName in DestChannelInfo");
        l.checkValidObject(t, "destInfo");
        var n = t.uid,
          r = t.token,
          i = t.channelName;
        if (r && !l.isValidToken(r)) throw new Error("Invalid token in DestChannelInfo");
        if (!l.isValidChannelName(i)) throw new Error("Invalid channelName in DestChannelInfo");
        if (!f.is32Uint(n)) throw new Error("Invalid uid in DestChannelInfo");
        this.destChannelMediaInfos.set(e, t)
      }, e.prototype.removeDestChannelInfo = function(e) {
        if (!l.isValidChannelName(e)) throw new Error("Invalid channelName when invoke removeDestChannelInfo");
        this.destChannelMediaInfos.delete(e)
      }, e.prototype.getSrcChannelMediaInfo = function() { return this.srcChannelMediaInfo }, e.prototype.getDestChannelMediaInfos = function() { return this.destChannelMediaInfos }, e
    }();
    t.ChannelMediaRelayConfiguration = m;
    var h, v, E, _, S, y = function(e) {
        function t(t, n, r, i) {
          var o = e.call(this) || this;
          return o._onOpen = function() { o.emit("open") }, o._onClose = function(e) { o.emit("close"), o.dispose() }, o._onMessage = function(e) {
            var t = JSON.parse(e.data);
            if (!t || "serverResponse" !== t.command || !t.requestId) return t && "serverStatus" === t.command && t.serverStatus && t.serverStatus.command ? (o.emit("status", t.serverStatus), void o.emit(t.serverStatus.command, t.serverStatus)) : void 0;
            o.emit("req_" + t.requestId, t)
          }, o._requestId = 1, o.appId = t, o.cname = n, o.uid = r, o.sid = i, o
        }
        return i(t, e), t.prototype.isConnect = function() { return this._ws && this._ws.readyState === WebSocket.OPEN }, t.prototype.sendMessage = function(e) { if (!this._ws || this._ws.readyState !== WebSocket.OPEN) throw new R(h.WS_DISCONNECTED); var t = this._requestId++; return e.requestId = t, e.seq = t, this._ws.send(JSON.stringify(e)), t }, t.prototype.waitStatus = function(e) {
          var t = this;
          return new Promise((function(n, r) {
            var i = window.setTimeout((function() { r(new R(h.WAIT_STATUS_TIMEOUT, e)) }), 5e3);
            t.once(e, (function(t) { clearTimeout(i), t.state && 0 !== t.state ? r(new R(h.WAIT_STATUS_ERROR, e)) : n() })), t.once("dispose", (function() { clearTimeout(i), r(new R(h.WS_ABORT)) }))
          }))
        }, t.prototype.request = function(e) {
          var t = this;
          return new Promise((function(n, r) {
            var i = t.sendMessage(e),
              o = window.setTimeout((function() { t.removeAllListeners("req_" + i), r(new R(h.REQUEST_TIMEOUT)) }), 3e3);
            t.once("req_" + i, (function(e) { clearTimeout(o), e && 200 === e.code ? n(e) : r(new R(h.REQUEST_FAILED, e)) })), t.once("dispose", (function() { clearTimeout(o), r(new R(h.WS_ABORT)) }))
          }))
        }, t.prototype.connect = function(e) { var t = this; return new Promise((function(n, r) { t._ws = new WebSocket(e), t._ws.onopen = function() { t._onOpen(), t._prvUrl = e, t._ws.onmessage = t._onMessage, t._ws.onclose = t._onClose, t._startHeartBeatCheck(), n() }, t._ws.onclose = function(e) { t._ws = null, r(new R(h.CONNECT_FAILED, "websocket error code: " + e.code)) }, setTimeout((function() { t._ws && t._ws.readyState !== WebSocket.OPEN && (t._ws.onopen = null, t._ws.onclose = null, t._ws.close(), t._ws = null, r(new R(h.CONNECT_TIMEOUT))) }), 5e3), t.once("dispose", (function() { r(new R(h.WS_ABORT)) })) })) }, t.prototype.dispose = function() { this._clearHeartBeatCheck(), this.emit("dispose"), this.removeEvent(), this._ws && (this._ws.onopen = null, this._ws.onclose = null, this._ws.onmessage = null, this._ws.close()), this._ws = null }, t.prototype._sendPing = function(e) { if (!this._ws || this._ws.readyState !== WebSocket.OPEN) throw new R(h.WS_DISCONNECTED); var t = this._requestId++; return e.requestId = t, this._ws.send(JSON.stringify(e)), t }, t.prototype._startHeartBeatCheck = function() {
          var e = this;
          this._heartBeatTimer = window.setInterval((function() { e._sendPing({ command: "ping", appId: e.appId, cname: e.cname, uid: e.uid + "", sid: e.sid, ts: +new Date, requestId: 0 }) }), 3e3)
        }, t.prototype._clearHeartBeatCheck = function() { window.clearInterval(this._heartBeatTimer) }, t
      }(c.default),
      R = function(e, t, n) { void 0 === e && (e = ""), this.code = n, this.data = t, this.message = e };
    t.ChannelMediaError = R,
      function(e) { e.CONNECT_FAILED = "connect failed", e.CONNECT_TIMEOUT = "connect timeout", e.WS_DISCONNECTED = "websocket disconnected", e.REQUEST_TIMEOUT = "request timeout", e.REQUEST_FAILED = "request failed", e.WAIT_STATUS_TIMEOUT = "wait status timeout", e.WAIT_STATUS_ERROR = "wait status error", e.BAD_STATE = "bad state", e.WS_ABORT = "ws abort", e.AP_REQUEST_TIMEOUT = "AP request timeout", e.AP_JSON_PARSE_ERROR = "AP json parse error", e.AP_REQUEST_ERROR = "AP request error", e.AP_REQUEST_ABORT = "AP request abort" }(h = t.CHANNEL_MEDIA_ERROR || (t.CHANNEL_MEDIA_ERROR = {})),
      function(e) { e[e.SetSdkProfile = 0] = "SetSdkProfile", e[e.SetSourceChannel = 1] = "SetSourceChannel", e[e.SetSourceUserId = 2] = "SetSourceUserId", e[e.SetDestChannel = 3] = "SetDestChannel", e[e.StartPacketTransfer = 4] = "StartPacketTransfer", e[e.StopPacketTransfer = 5] = "StopPacketTransfer", e[e.UpdateDestChannel = 6] = "UpdateDestChannel", e[e.Reconnect = 7] = "Reconnect", e[e.SetVideoProfile = 8] = "SetVideoProfile" }(v || (v = {})),
      function(e) { e[e.NETWORK_DISCONNECTED = 0] = "NETWORK_DISCONNECTED", e[e.NETWORK_CONNECTED = 1] = "NETWORK_CONNECTED", e[e.PACKET_JOINED_SRC_CHANNEL = 2] = "PACKET_JOINED_SRC_CHANNEL", e[e.PACKET_JOINED_DEST_CHANNEL = 3] = "PACKET_JOINED_DEST_CHANNEL", e[e.PACKET_SENT_TO_DEST_CHANNEL = 4] = "PACKET_SENT_TO_DEST_CHANNEL", e[e.PACKET_RECEIVED_VIDEO_FROM_SRC = 5] = "PACKET_RECEIVED_VIDEO_FROM_SRC", e[e.PACKET_RECEIVED_AUDIO_FROM_SRC = 6] = "PACKET_RECEIVED_AUDIO_FROM_SRC", e[e.PACKET_UPDATE_DEST_CHANNEL = 7] = "PACKET_UPDATE_DEST_CHANNEL", e[e.PACKET_UPDATE_DEST_CHANNEL_REFUSED = 8] = "PACKET_UPDATE_DEST_CHANNEL_REFUSED", e[e.PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE = 9] = "PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE" }(E = t.CHANNEL_MEDIA_RELAY_EVENT || (t.CHANNEL_MEDIA_RELAY_EVENT = {})),
      function(e) { e[e.RELAY_STATE_IDLE = 0] = "RELAY_STATE_IDLE", e[e.RELAY_STATE_CONNECTING = 1] = "RELAY_STATE_CONNECTING", e[e.RELAY_STATE_RUNNING = 2] = "RELAY_STATE_RUNNING", e[e.RELAY_STATE_FAILURE = 3] = "RELAY_STATE_FAILURE" }(_ = t.CHANNEL_MEDIA_RELAY_STATE || (t.CHANNEL_MEDIA_RELAY_STATE = {})),
      function(e) { e[e.RELAY_OK = 0] = "RELAY_OK", e[e.SERVER_ERROR_RESPONSE = 1] = "SERVER_ERROR_RESPONSE", e[e.SERVER_NO_RESPONSE = 2] = "SERVER_NO_RESPONSE", e[e.NO_RESOURCE_AVAILABLE = 3] = "NO_RESOURCE_AVAILABLE", e[e.FAILED_JOIN_SRC = 4] = "FAILED_JOIN_SRC", e[e.FAILED_JOIN_DEST = 5] = "FAILED_JOIN_DEST", e[e.FAILED_PACKET_RECEIVED_FROM_SRC = 6] = "FAILED_PACKET_RECEIVED_FROM_SRC", e[e.FAILED_PACKET_SENT_TO_DEST = 7] = "FAILED_PACKET_SENT_TO_DEST", e[e.SERVER_CONNECTION_LOST = 8] = "SERVER_CONNECTION_LOST", e[e.INTERNAL_ERROR = 9] = "INTERNAL_ERROR", e[e.SRC_TOKEN_EXPIRED = 10] = "SRC_TOKEN_EXPIRED", e[e.DEST_TOKEN_EXPIRED = 11] = "DEST_TOKEN_EXPIRED", e[e.RELAY_ALREADY_START = 12] = "RELAY_ALREADY_START", e[e.RELAY_NOT_START = 13] = "RELAY_NOT_START", e[e.OPERATION_ABORT = 14] = "OPERATION_ABORT" }(S = t.CHANNEL_MEDIA_RELAY_ERROR || (t.CHANNEL_MEDIA_RELAY_ERROR = {}))
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "isLiveTranscodingValid", (function() { return E })), n.d(t, "generateSessionId", (function() { return m })), n.d(t, "audioLevelHelper", (function() { return p })), n.d(t, "vsResHack", (function() { return h })), n.d(t, "is32Uint", (function() { return v })), n.d(t, "safeCall", (function() { return l })), n.d(t, "random", (function() { return S })), n.d(t, "popBanTip", (function() { return T })), n.d(t, "lengthInUtf8Bytes", (function() { return y })), n.d(t, "audioTimerLoop", (function() { return R })), n.d(t, "generateId", (function() { return g }));
    var r = n(11),
      i = n.n(r),
      o = n(4),
      a = n(0),
      s = n(27),
      c = n.n(s),
      d = n(24),
      u = n(15),
      l = function() {
        var e = arguments[0];
        if ("function" == typeof e) {
          var t = Array.prototype.slice.call(arguments, 1);
          e.apply(null, t)
        }
      },
      p = function(e) { return this.audioContext = Object(d.a)(), this.sourceNode = e.otWebkitAudioSource || this.audioContext.createMediaStreamSource(e), this.analyser = this.audioContext.createAnalyser(), this.timeDomainData = new Uint8Array(this.analyser.frequencyBinCount), this.sourceNode.connect(this.analyser), this.getAudioLevel = function() { if (this.analyser) { this.analyser.getByteTimeDomainData(this.timeDomainData); for (var e = 0, t = 0; t < this.timeDomainData.length; t++) e = Math.max(e, Math.abs(this.timeDomainData[t] - 128)); return e / 128 } return a.default.warning("can't find analyser in audioLevelHelper"), 0 }, this },
      f = 1e4;

    function g() { return ++f }

    function m() { return c()().replace(/-/g, "").toUpperCase() }
    var h = function(e, t, n) {
        try {
          a.default.debug("start vsResHack", e);
          var r = document.createElement("video");
          r.setAttribute("autoplay", ""), r.setAttribute("muted", ""), r.muted = !0, r.setAttribute("playsinline", ""), r.setAttribute("style", "position: absolute; top: 0; left: 0; width:1px; high:1px;"), document.body.appendChild(r), r.addEventListener("playing", (function(n) { o.isFireFox() ? r.videoWidth && (a.default.debug("[vsResHack] get stream resolution: ", "".concat(r.videoWidth, " x ").concat(r.videoHeight), e), t(r.videoWidth, r.videoHeight), document.body.removeChild(r)) : (a.default.debug("[vsResHack] get stream resolution: ", "".concat(r.videoWidth, " x ").concat(r.videoHeight), e), t(r.videoWidth, r.videoHeight), document.body.removeChild(r)) })), Object(u.setSrcObject)(r, e)
        } catch (e) { n(e) }
      },
      v = function(e) { return "number" == typeof e && 0 <= e && e <= 4294967295 },
      E = function(e) {
        var t = ["lowLatency", "userConfigExtraInfo", "transcodingUsers"];
        for (var n in e)
          if ("lowLatency" === n && "boolean" != typeof e[n] || "userConfigExtraInfo" === n && "object" !== i()(e[n]) || "transcodingUsers" === n && !_(e[n]) || !~t.indexOf(n) && "number" != typeof e[n]) throw new Error("Param [" + n + "] is inValid");
        return !0
      },
      _ = function(e) {
        for (var t = 0; t < e.length; t++)
          for (var n in e[t])
            if ("number" != typeof e[t][n]) throw new Error("Param user[" + t + "] - [" + n + "] is inValid");
        return !0
      },
      S = function(e) {
        isNaN(e) && (e = 1e3);
        var t = +new Date,
          n = (t = (9301 * t + 49297) % 233280) / 233280;
        return Math.ceil(n * e)
      },
      y = function(e) { var t = encodeURIComponent(e).match(/%[89ABab]/g); return e.length + (t ? t.length : 0) },
      R = function(e, t) {
        var n = 1 / t,
          r = Object(d.a)(),
          i = r.createGain();
        i.gain.value = 0, i.connect(r.destination);
        var o = !1;
        return function t() {
            var a = r.createOscillator();
            a.onended = t, a.connect(i), a.start(0), a.stop(r.currentTime + n), e(r.currentTime), o && (a.onended = function() {})
          }(),
          function() { o = !0 }
      },
      T = function() {
        if (!document.getElementById("agora-ban-tip")) {
          var e = document.createElement("div");
          e.id = "agora-ban-tip", e.style = "position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; color: #fff;", document.querySelector("body").prepend(e);
          var t = document.createElement("div");
          t.style = "background: #000; width: 346px; height: 116px; z-index: 100000; opacity: 0.6; border-radius: 10px; box-shadow: 0 2px 4px #000;", e.append(t);
          var n = document.createElement("div");
          n.style = "height: 76px; display: flex; justify-content: center; align-items: center;";
          var r = document.createElement("span");
          r.style = "height: 28px; width: 28px; color: #000; text-align: center; line-height: 30px; background: #fff; border-radius: 50%; font-weight: 600; font-size: 20px;margin-right: 5px;", r.innerText = "!";
          var i = document.createElement("span");
          i.innerText = "This browser does not support webRTC", n.append(r), n.append(i);
          var o = document.createElement("div");
          o.style = "height: 38px; display: flex; border-top: #fff 1px solid; justify-content: center; align-items: center;", o.innerText = "OK", t.append(n), t.append(o), o.onclick = function() {
            var e = document.getElementById("agora-ban-tip");
            e.parentNode.removeChild(e)
          }
        }
      }
  }, function(e, t) {
    function n(t) { return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) { return typeof e } : e.exports = n = function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, n(t) }
    e.exports = n
  }, function(t, n, r) {
    "use strict";
    var i = r(13),
      o = r.n(i),
      a = r(17),
      s = r.n(a),
      c = r(11),
      d = r.n(c),
      u = r(29),
      l = r.n(u),
      p = r(7),
      f = r.n(p),
      g = r(21),
      m = r(8),
      h = function(e) { e && e.apply(this, [].slice.call(arguments, 1)) },
      v = r(0),
      E = r(1),
      _ = r(10),
      S = r(14),
      y = r(3),
      R = function(e) {
        var t = Object(m.b)(e);
        t.needReconnect = !0, t.isTimeout = !1, t.isInit = !0, t.sendbytes = 0, t.recvbytes = 0, t.startTime = Date.now(), t.lastMsgTime = null, t.clientId = e.clientId, t.hostIndex = 0, t.requestID = 0, e.host instanceof Array ? t.host = e.host : t.host = [e.host], t.getSendBytes = function() { return t.sendbytes }, t.getRecvBytes = function() { return t.recvbytes }, t.getDuration = function() { return Math.ceil((Date.now() - t.startTime) / 1e3) }, t.getURL = function() { return t.connection.url }, t.reconnect = function() { t.isInit = !0, t.creatConnection() }, t.connectNext = function() { t.isInit = !0, ++t.hostIndex, v.default.debug("[" + t.clientId + "] Gateway length:" + t.host.length + " current index:" + t.hostIndex), t.hostIndex >= t.host.length ? t.dispatchEvent(Object(m.d)({ type: "recover" })) : t.creatConnection() }, t.replaceHost = function(e) { t.host = e || t.host, t.hostIndex = 0, t.creatConnection() }, t.creatConnection = function() {
          if (t.needReconnect = !0, t.lts = (new Date).getTime(), t.connection = new WebSocket("wss://" + t.host[t.hostIndex]), t.connection.binaryType = "arraybuffer", t.turnConfig = {}, t.connection.url) {
            var n = t.connection.url.match(/wss\:\/\/([^:]+):(\d+)/),
              r = t.host[t.hostIndex].split(":"),
              i = t.connection.url.match(/h=([^:]+)&p=(\d+)/);
            n ? (t.turnConfig.url = n[1], Object(y.getParameter)("TURN_ENABLE_TCP") && (t.turnConfig.tcpport = parseInt(n[2]) + 30), Object(y.getParameter)("TURN_ENABLE_UDP") && (t.turnConfig.udpport = parseInt(n[2]) + 30)) : i ? (t.turnConfig.url = i[1], Object(y.getParameter)("TURN_ENABLE_TCP") && (t.turnConfig.tcpport = parseInt(i[2]) + 30), Object(y.getParameter)("TURN_ENABLE_UDP") && (t.turnConfig.udpport = parseInt(i[2]) + 30)) : r && (t.turnConfig.url = r[0], Object(y.getParameter)("TURN_ENABLE_TCP") && (t.turnConfig.tcpport = parseInt(r[1]) + 30), Object(y.getParameter)("TURN_ENABLE_UDP") && (t.turnConfig.udpport = parseInt(r[1]) + 30))
          }
          t.connection.onopen = function(e) { t.needReconnect = !0, t.isTimeout = !1, t.isInit = !1, t.sendbytes = 0, t.recvbytes = 0, t.startTime = Date.now(), Object(S.resetHTTPByetsCount)(), clearTimeout(t.timeoutCheck), t.dispatchEvent(Object(m.d)({ type: "onopen", event: e, socket: t })) }, t.connection.onmessage = function(e) {
            if (e.data instanceof ArrayBuffer) t.dispatchEvent({ type: "onBinaryData", data: e.data });
            else {
              t.recvbytes += Object(_.lengthInUtf8Bytes)(e.data);
              var n = JSON.parse(e.data);
              t.lastMsgTime = Date.now(), n.hasOwnProperty("_id") ? t.dispatchEvent(Object(m.d)({ type: n._id, msg: n })) : n.hasOwnProperty("_type") && t.dispatchSocketEvent(Object(m.d)({ type: n._type, msg: n._message }))
            }
          }, t.connection.onclose = function(n) { t.needReconnect ? t.isTimeout || t.isInit ? (v.default.debug("[" + t.clientId + "] websockect connect timeout"), E.report.joinGateway(e.sid, { lts: t.lts, succ: !1, ec: "timeout", addr: t.connection.url }), t.connectNext()) : (t.dispatchEvent(Object(m.d)({ type: "disconnect", event: n })), t.requests && t.requests instanceof Array && (t.requests.map((function(e) { e.callback("REQUEST_ABORT") })), t.requests = [])) : (v.default.debug("[" + t.clientId + "] websockect closeed"), h(e.onFailure, n), clearTimeout(t.timeoutCheck), t.dispatchEvent(Object(m.d)({ type: "close", event: n })), t.connection.onopen = void 0, t.connection.onclose = void 0, t.connection.onerror = void 0, t.connection.onmessage = void 0, t.connection = void 0) }, t.connection.onerror = function(e) {};
          setTimeout((function() { t.connection && t.connection.readyState != WebSocket.OPEN && (t.isTimeout = !0, t.connection.close()) }), 5e3)
        }, t.creatConnection(), t.sendMessage = function(e, n) {
          if (t.connection && t.connection.readyState == WebSocket.OPEN) {
            var r = JSON.stringify(e);
            t.sendbytes += Object(_.lengthInUtf8Bytes)(r), t.connection.send(r)
          } else n({ error: "Gateway not connected" })
        }, t.disconnect = function() { t.needReconnect = !0, t.connection.close() }, t.close = function() { t.needReconnect = !1, t.connection.onclose = void 0, t.connection.close(), clearInterval(t.requestTimer), t.requests && t.requests instanceof Array && (t.requests.map((function(e) { e.callback("REQUEST_ABORT") })), t.requests = []) }, t.sendSignalCommand = function(e, n) { e._id = "_request_" + t.requestID, t.requestID += 1, "publish_stats" !== e._type && "subscribe_stats" !== e._type && "publish_stats_low" !== e._type && t.on(e._id, (function(r) { r.msg && n && n(r.msg._result, r.msg.message), delete t.dispatcher.eventListeners[e._id] })), t.sendMessage(e, (function(e) { e.reason = "NOT_CONNECTED", n && n(e.reason, e) })) }, t.requests = [];
        var n = function(e) {
            var n = t.requests.findIndex((function(t) { return t.id === e.type }));
            if (n >= 0) var r = t.requests.splice(n, 1)[0];
            r && t.dispatcher.eventListeners[e.type] ? (delete t.dispatcher.eventListeners[e.type], e.msg && r.callback && r.callback(e.msg._result, e.msg._message)) : v.default.warning("Detached Response", e.type, e.msg)
          },
          r = function(e) {
            var n = this,
              r = t.requests.findIndex((function(e) { return e.id === n.id }));
            r >= 0 && (n = t.requests.splice(r, 1)[0]), n && t.dispatcher.eventListeners[e.type] ? (delete t.dispatcher.eventListeners[e.type], e.reason = "NOT_CONNECTED", n.callback && n.callback(e.reason, e)) : v.default.warning("handleSendError", n)
          };
        return t.sendRequest = function(e, i) {
          e = f()({ _id: "_request_" + t.requestID }, e), t.requestID += 1;
          var o = { id: e._id, timeoutCounter: 0, stalledAt: Date.now(), message: e, callback: i };
          t.requests.push(o), t.addEventListener(e._id, n), t.sendMessage(e, r.bind(o))
        }, t.checkRequestTimeout = function() {
          for (var e = Math.ceil(Object(y.getParameter)("SIGNAL_REQUEST_TIMEOUT") / Object(y.getParameter)("SIGNAL_REQUEST_WATCH_INTERVAL")), n = t.requests.length - 1; n >= 0; n--) {
            var r = t.requests[n];
            r.timeoutCounter >= e ? (t.requests.splice(n, 1), v.default.error("Request Timeout", r.timeoutCounter, r.message), r.callback && r.callback("TIMEOUT")) : r.timeoutCounter++
          }
        }, clearInterval(t.requestTimer), t.requestTimer = setInterval(t.checkRequestTimeout, Object(y.getParameter)("SIGNAL_REQUEST_WATCH_INTERVAL")), t.sendReport = function(e) { t.sendMessage(e, (function() {})) }, t
      },
      T = function(e, t) {
        var n = {
          connect: function() {
            t.host = e, n.signal = R(t), n.on = n.signal.on, n.dispatchEvent = n.signal.dispatchEvent, n.signal.on("onopen", (function(e) { n.signal.onEvent = function(e) { n.dispatchEvent(Object(m.d)({ type: e.event, msg: e })) }, n.dispatchEvent(Object(m.d)({ type: "connect", msg: e })) })), n.signal.on("onError", (function(e) {
              var t = e.msg;
              onError(t.code, "error")
            }))
          },
          getLastMsgTime: function() { return n.signal && n.signal.lastMsgTime },
          getSendBytes: function() { return n.signal.getSendBytes() },
          getRecvBytes: function() { return n.signal.getRecvBytes() },
          getDuration: function() { return n.signal.getDuration() },
          disconnect: function() { n.signal.disconnect() },
          close: function() { n.signal.close() },
          getURL: function() { return n.signal.getURL() },
          reconnect: function() { n.signal.reconnect() },
          connectNext: function() { n.signal.connectNext() },
          replaceHost: function(e) { n.signal.replaceHost(e) },
          emitSimpleMessage: function(e, t) { n.signal.sendSignalCommand(e, t) },
          emitRequest: function(e, t) { n.signal.sendRequest(e, t) },
          emitReport: function(e) { n.signal.sendReport(e) }
        };
        return n.connect(), n
      },
      I = r(22),
      A = r(5),
      b = r(20),
      O = r(4),
      C = { ERR_NO_VOCS_AVAILABLE: "tryNext", ERR_NO_VOS_AVAILABLE: "tryNext", ERR_JOIN_CHANNEL_TIMEOUT: "tryNext", WARN_REPEAT_JOIN: "quit", ERR_JOIN_BY_MULTI_IP: "recover", WARN_LOOKUP_CHANNEL_TIMEOUT: "tryNext", WARN_OPEN_CHANNEL_TIMEOUT: "tryNext", ERR_VOM_SERVICE_UNAVAILABLE: "tryNext", ERR_TOO_MANY_USERS: "tryNext", ERR_MASTER_VOCS_UNAVAILABLE: "tryNext", ERR_INTERNAL_ERROR: "tryNext", K_SERVICE_NOT_READY: "recover", K_SERVICE_TOO_HEAVY: "tryNext", notification_test_recover: "recover", notification_test_tryNext: "tryNext", notification_test_retry: "retry" },
      N = { googActualEncBitrate: "A_aeb", googAvailableSendBandwidth: "A_asb", googRetransmitBitrate: "A_rb", googAvailableReceiveBandwidth: "A_arb", googTargetEncBitrate: "A_teb", googBucketDelay: "A_bd", googTransmitBitrate: "A_tb", googCodecName: "A_cn", bytesSent: "bytesSent", packetsLost: "packetsLost", packetsSent: "packetsSent", googAdaptationChanges: "A_ac", googAvgEncodeMs: "A_aem", googEncodeUsagePercent: "A_eup", googFirsReceived: "A_fr", googFrameHeightInput: "A_fhi", googFrameHeightSent: "A_fhs", googFrameRateInput: "A_fri", googFrameRateSent: "A_frs", googFrameWidthInput: "A_fwi", googFrameWidthSent: "A_fws", googNacksReceived: "A_nr", googPlisReceived: "A_pr", googRtt: "A_rtt", aecDivergentFilterFraction: "A_adff", audioInputLevel: "A_ail", googEchoCancellationReturnLoss: "A_ecrl", googEchoCancellationReturnLossEnhancement: "A_ecrle", googResidualEchoLikelihood: "A_rel", googResidualEchoLikelihoodRecentMax: "A_relrm", googTargetDelayMs: "A_tdm", bytesReceived: "bytesReceived", packetsReceived: "packetsReceived", googDecodeMs: "A_dm", googMaxDecodeMs: "A_mdm", googRenderDelayMs: "A_rdm", googFrameWidthReceived: "A_fwr", googFrameHeightReceived: "A_fhr", googFrameRateReceived: "A_frr", googFrameRateDecoded: "A_frd", googFrameRateOutput: "A_fro", googJitterBufferMs: "A_jbm", googCurrentDelayMs: "A_cdm", googMinPlayoutDelayMs: "A_mpdm", googNacksSent: "A_ns", googPlisSent: "A_ps", googFirsSent: "A_fs", audioOutputLevel: "A_aol", googAccelerateRate: "A_ar", googDecodingCNG: "A_dcng", googDecodingCTN: "A_dctn", googDecodingCTSG: "A_dctsg", googDecodingNormal: "A_dn", googDecodingPLC: "A_dplc", googDecodingPLCCNG: "A_dplccng", googExpandRate: "A_er", googJitterReceived: "A_jr", googPreemptiveExpandRate: "A_per", googPreferredJitterBufferMs: "A_pjbm", googSecondaryDecodedRate: "A_sdr", googSpeechExpandRate: "A_ser", uplink_fraction_lost: "B_ufl", uplink_cumulative_lost: "B_ucl", uplink_available_bandwidth: "B_uab", period_fir: "B_fir", access_delay: "B_acd", uplink_network_quality: "B_unq", downlink_network_quality: "B_dnq", pub_audio_lost_ratio_400ms: "B_palr4", pub_video_lost_ratio_400ms: "B_pvlr4", e2e_delay: "B_ed", audio_delay: "B_ad", video_delay: "B_vd", stream_type: "B_st", e2e_audio_lost_ratio_400ms: "B_ealr4", e2e_video_lost_ratio_400ms: "B_evlr4", downlink_estimate_bandwidth: "B_deb", peer_publish_audio_duration: "B_ppad", peer_publish_video_duration: "B_ppvd" },
      w = {};
    for (var L in N) {
      var D = N[L];
      w[D] && v.default.error("Key Conflict: ".concat(D, ": ").concat(N[D], "| ").concat(L)), w[D] = L
    }
    var k = function(e) { return N[e] || e },
      M = function(e) { return w[e] || e };
    var P = r(9),
      U = r.n(P),
      x = function t(n) {
        var r = !1,
          i = function(e) { return { _type: "control", _message: e } },
          a = function(e, t) { var n = {}; return Object.keys(t).forEach((function(e) { Object(y.getParameter)("STATS_FILTER")[e] || (n[k(e)] = t[e]) })), { _type: "subscribe_related_stats", _message: { stream_type: "high", stream_id: e, stats: n } } },
          c = function(e) { return { _type: "publish", _message: e } },
          u = function(e, t) { var n = {}; return Object.keys(t).forEach((function(e) { Object(y.getParameter)("STATS_FILTER")[e] || (n[k(e)] = t[e]) })), { _type: "subscribe_stats", _message: { stream_id: e, stats: n } } },
          p = t.DISCONNECTED,
          S = t.CONNECTING,
          R = t.CONNECTED,
          N = t.DISCONNECTING,
          w = p,
          L = Object(m.b)(n);
        Object.defineProperty(L, "state", {
            set: function(e) {
              var n = w;
              w = e, Object(b._setClientConnectionStateRecord)(L.clientId, e), e !== t.CONNECTED && (L.hasJoined = !1), n !== e && L.dispatchEvent({ type: "connection-state-change", prevState: t.connetionStateMap[n], curState: t.connetionStateMap[e] })
            },
            get: function() { return w }
          }), L.socket = void 0, L.state = p, L.mode = n.mode, L.role = n.role, L.codec = n.codec, L.config = {}, L.timers = {}, L.timer_counter = {}, L.localStreams = {}, L.remoteStreams = {}, L.remoteMuteState = {}, L.attemps = 1, L.p2p_attemps = 1, L.audioLevel = {}, L.activeSpeaker = void 0, L.reconnectMode = "tryNext", L.rejoinAttempt = 0, L.hasChangeBGPAddress = !1, L.traffic_stats = {}, L.clientId = n.clientId, L.pingpongCounter = 0, L.hasInvokeLeave = !1, L.p2ps = new Map, L.liveStreams = new Map, L.injectLiveStreams = new Map, L.remoteStreamsInChannel = new Set, L.subscribeRequestId = new Map, L.publishRequestId = 0, L.hasJoined = !1, L.isFirstSuccess = !0, L.peerPublishDurationMap = new Map,
          function(e) {
            var t = h;
            e.makeRequest = function(n, r, i) { if (void 0 === e.socket) return v.default.debug("[".concat(e.clientId, "] No socket available")), void t(i, A.default.INVALID_OPERATION); try { e.socket.emitRequest(n, (function(e, t) { var n; "success" === e ? "function" == typeof r && r(t) : "function" == typeof i && (n = t && t.error_code && A.GatewayErrorCode[t.error_code] ? A.GatewayErrorCode[t.error_code] : t && t.error_str ? t.error_str : t && t.error_code ? "UNKNOW_ERROR_".concat(t.error_code) : e, i(n, t)) })) } catch (r) { v.default.debug("[".concat(e.clientId, "] Socket emit message failed ").concat(JSON.stringify(n))), v.default.debug("[".concat(e.clientId, "] "), r), t(i, A.default.SOCKET_ERROR) } }, e.makeReport = function(t) { void 0 === e.socket && v.default.debug("[".concat(e.clientId, "] No socket available")); try { e.socket.emitReport(t) } catch (n) { v.default.debug("[".concat(e.clientId, "] Socket emit report failed ").concat(JSON.stringify(t))) } }
          }(L), L.inChannelInfo = { joinAt: null, duration: 0 }, L._sendMessage = function(e, t) {
            switch (e) {
              case "SubscribeStats":
                L.makeReport(u.apply(void 0, l()(t)));
                break;
              case "SubscribeRelatedStats":
                L.makeReport(a.apply(void 0, l()(t)))
            }
          };
        var D = h;
        L.p2pCounter = Object(_.random)(1e5), L.generateP2PId = function() { return ++L.p2pCounter }, L.audioVolumeIndication = { enabled: !1, sortedAudioVolumes: [], smooth: 3, interval: 2e3 }, L.remoteVideoStreamTypes = { REMOTE_VIDEO_STREAM_HIGH: 0, REMOTE_VIDEO_STREAM_LOW: 1, REMOTE_VIDEO_STREAM_MEDIUM: 2 }, L.streamFallbackTypes = { STREAM_FALLBACK_OPTION_DISABLED: 0, STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW: 1, STREAM_FALLBACK_OPTION_AUDIO_ONLY: 2 }, L.configPublisher = function(e) { L.config = e }, L.getGatewayInfo = function(e, t) { L.makeRequest({ _type: "gateway_info" }, e, t) }, L.setClientRole = function(e, t) {
          v.default.debug("[".concat(L.clientId, "] setClientRole to ").concat(e));
          var n = E.report.reportApiInvoke(L.joinInfo.sid, { name: "_setClientRole", callback: t });
          L.makeRequest({ _type: "set_client_role", _message: { role: e } }, (function() { L.role = e, L.dispatchEvent({ type: "client-role-changed", role: e }), n && n(null, { role: e }) }), (function(t, r) {
            if (r && r.code && (t = A.GatewayErrorCode[r.code] || "UNKNOW_ERROR_" + r.code), "ERR_SET_CLIENT_ROLE_ALREADY_IN_USE" === t) return n && n(null);
            v.default.error("set Client role error to " + e + ": " + t), n && n(t)
          }))
        }, L.join = function(e, t, r, i) {
          L.hasInvokeLeave = !1, e.useProxyServer && (L.hasChangeBGPAddress = !0);
          var o = (new Date).getTime(),
            a = e.uid;
          if (L.inChannelInfo.joinAt && (L.inChannelInfo.duration += o - L.inChannelInfo.joinAt), L.inChannelInfo.joinAt = o, L.state !== S) return v.default.error("[".concat(L.clientId, "] GatewayClient.join Failed: state "), L.state), i && i(A.default.INVALID_OPERATION), void E.report.joinGateway(e.sid, { lts: o, succ: !1, ec: A.default.INVALID_OPERATION, addr: null });
          if (null != a && parseInt(a) !== a) return v.default.error("[".concat(L.clientId, "] Input uid is invalid")), L.state = p, i && i(A.default.INVALID_PARAMETER), void E.report.joinGateway(e.sid, { lts: o, succ: !1, ec: A.default.INVALID_PARAMETER, addr: null });
          var s = j.register(L, { uid: a, cname: e && e.cname });
          if (s) return L.state = p, i && i(s), void E.report.joinGateway(e.sid, { lts: o, succ: !1, ec: s, addr: null });
          L.joinInfo = f()({}, e), L.uid = a, L.key = t, L.pingpongCounter = 0, F(e, (function(t) {
            if (L.state === N || L.state === p) return i && i("LEAVE_BEFORE_JOIN_SUCCESS");
            L.state = R, v.default.debug("[".concat(L.clientId, "] Connected to gateway server")), clearInterval(L.pingTimer), L.pingTimer = setInterval((function() {
              var e = Object(y.getParameter)("PING_PONG_TIME_OUT");
              if (++L.pingpongCounter >= e) {
                var t = Date.now();
                L.socket && v.default.warning("PINGPONG Timeout. Last Socket Message: ".concat(t - L.socket.getLastMsgTime(), "ms")), L.socket && L.socket.getLastMsgTime() && t - L.socket.getLastMsgTime() > Object(y.getParameter)("WEBSOCKET_TIMEOUT_MIN") && (L.pingpongCounter = 0, L.socket.close(), L.socket.dispatchEvent(Object(m.d)({ type: "disconnect", event: { msg: "PING_PONG_TIME_OUT" } })))
              }
              var n = Date.now();
              L.makeRequest({ _type: "ping" }, (function() {
                L.pingpongCounter = 0;
                var e = Date.now() - n;
                setTimeout((function() { Object(y.getParameter)("REPORT_STATS") && L.makeRequest({ _type: "ping_back", _message: { pingpongElapse: e } }) }), 1e3)
              }), (function(e, t) { "TIMEOUT" !== e && (v.default.error("Ping Error ".concat(e, " ").concat(JSON.stringify(t))), t && t.error_code && L.socket && L.socket.signal && L.socket.signal.connection && L.socket.signal.connection.readyState === WebSocket.OPEN && (v.default.info("Disconnecting websocket connection"), L.socket.signal.connection.close())) }))
            }), 3e3), L.makeRequest(function(e) {
              var t = e.role,
                r = f()({}, L.joinInfo.apResponse),
                i = { session_id: L.joinInfo.sid, app_id: n.appId, channel_key: L.key, channel_name: L.joinInfo.cname, sdk_version: y.VERSION, browser: navigator.userAgent, process_id: Object(E.getProcessId)(), mode: L.mode, codec: L.codec, role: t, has_changed_gateway: Object(y.getParameter)("FORCE_CHANGED_GATEWAY_FLAG") || L.hasChangeBGPAddress, ap_response: r, optionalInfo: L.joinInfo.optionalInfo, extend: Object(y.getParameter)("JOIN_EXTEND"), details: {} };
              if (L.joinInfo.hasOwnProperty("stringUid") && (i.string_uid = L.joinInfo.stringUid), L.joinInfo.aesmode && L.joinInfo.aespassword && (i.aes_mode = L.joinInfo.aesmode, i.aes_secret = L.joinInfo.aespassword), L.socket && L.socket.signal && L.socket.signal && (r.addresses[L.socket.signal.hostIndex] && (i.ap_response.ticket = r.addresses[L.socket.signal.hostIndex].ticket, delete r.addresses), Object(y.getParameter)("SET_DEFAULT_TURNSERVER") && L.socket.signal.turnConfig)) {
                var o = { username: "test", credential: Object(y.getParameter)("TURN_SERVER_PASSWORD"), forceturn: Object(y.getParameter)("FORCE_TURN") };
                o.url = L.socket.signal.turnConfig.url, L.socket.signal.turnConfig.tcpport && (o.tcpport = "" + L.socket.signal.turnConfig.tcpport), L.socket.signal.turnConfig.udpport && (o.udpport = "" + L.socket.signal.turnConfig.udpport), L.joinInfo.turnServers.push(o)
              }
              return L.dispatchEvent({ type: "join-message-hook", joinMessage: i }), { _type: "join", _message: i }
            }({ role: L.role }), (function(t) {
              if (E.report.joinGateway(e.sid, { lts: o, succ: !0, ec: null, vid: e.vid, addr: L.socket.getURL(), firstSuccess: L.isFirstSuccess }), L.joinSuccessLts = Date.now(), L.isFirstSuccess = !1, L.rejoinAttempt = 0, L.hasJoined = !0, r && r(t.uid), !0 === t.return_vosip || !0 === Object(y.getParameter)("ENABLE_LIVE_SERVER_LIST")) {
                var n = null;
                try { n = L.socket.signal.connection.url } catch (e) { v.default.debug("[".concat(L.clientId, "] Can not get gateway ip: ").concat(e)) }
                n ? Object(y.setParameter)("LIVE_SERVER_LIST", [n]) : Object(y.setParameter)("LIVE_SERVER_LIST", [])
              }
              L.dispatchEvent({ type: "join" }), clearInterval(L.timers.trafficStats), L.timers.trafficStats = setInterval((function() {
                L.makeRequest({ _type: "traffic_stats" }, (function(e) {
                  var t = {};
                  for (var n in e) t[M(n)] = e[n];
                  if (t.peer_delay && t.peer_delay.length) {
                    var r = [];
                    t.peer_delay.forEach((function(e) {
                      var t = {};
                      for (var n in e) t[M(n)] = e[n];
                      r.push(t)
                    })), t.peer_delay = r
                  }
                  L.traffic_stats = t, L.traffic_stats.timestamp = Date.now();
                  var i = L.joinInfo.stringUid,
                    o = L.localStreams[a] || L.localStreams[i];
                  o && (o.traffic_stats = { access_delay: t.access_delay }), t.peer_delay && t.peer_delay.forEach((function(e) {
                    var n = L.remoteStreams[e.peer_uid];
                    n && (n.traffic_stats = { access_delay: t.access_delay, e2e_delay: e.e2e_delay, audio_delay: e.audio_delay, video_delay: e.video_delay })
                  })), L.dispatchEvent({ type: "after-getTrafficStats", trafficStats: t })
                }))
              }), 3e3)
            }), (function(t, n) {
              if (v.default.error("[".concat(L.clientId, "] User join failed [").concat(t, "]")), "ERR_JOIN_BY_MULTI_IP" === t) { try { E.report.joinGateway(e.sid, { lts: o, succ: !1, ec: "ERR_JOIN_BY_MULTI_IP", addr: L.socket.getURL() }) } catch (e) {} return L.dispatchEvent({ type: "onMultiIP", option: n.option }) }
              C[t] && L.rejoinAttempt < 4 ? L._doWithAction(C[t], r, i) : i && i(t), E.report.joinGateway(e.sid, { lts: o, succ: !1, ec: t, addr: L.socket && L.socket.getURL() })
            }))
          }), (function(t) { v.default.error("[".concat(L.clientId, "] User join failed [").concat(t, "]")), i && i(t), E.report.joinGateway(e.sid, { lts: o, succ: !1, ec: t, addr: L.socket.getURL() }) })), this.remoteMuteState = {}, L.resetAudioVolumeIndication()
        }, L.leave = function(e, t) {
          var n = j.unregister(L);
          switch (n && v.default.debug("[".concat(L.clientId, "] "), n), L.p2ps.clear(), L.state) {
            case p:
              return v.default.debug("[".concat(L.clientId, "] Client Already in DISCONNECTED status")), void D(e);
            case N:
              return v.default.debug("[".concat(L.clientId, "] Client Already in DISCONNECTING status")), void D(t, A.default.INVALID_OPERATION);
            case S:
              return L.socket && L.socket.close(), L.socket = void 0, v.default.info("[".concat(L.clientId, "] Client connecting, Leave channel success")), L.state = p, e && e()
          }
          for (var r in L.state = N, L.channelMediaConfig && (L.channelMediaRelayController && L.channelMediaRelayController.dispose(), L.channelMediaConfig, L.channelMediaRelayController = null), clearInterval(L.pingTimer), L.timers) L.timers.hasOwnProperty(r) && clearInterval(L.timers[r]);
          for (var r in L.inChannelInfo.joinAt && (L.inChannelInfo.duration += Date.now() - L.inChannelInfo.joinAt, L.inChannelInfo.joinAt = null), L.hasJoined ? L.makeRequest({ _type: "leave" }, (function(t) { L.socket.close(), L.socket = void 0, v.default.info("[".concat(L.clientId, "] Leave channel success")), L.state = p, e && e(t) }), (function(e) { "TIMEOUT" !== e && (v.default.error("[".concat(L.clientId, "] Leave Channel Failed"), e), L.state = R, t && t(e)) })) : (L.socket && (L.socket.close(), L.socket = void 0), v.default.info("[".concat(L.clientId, "] Leave channel before joined")), L.state = p, e && e()), L.localStreams)
            if (L.localStreams.hasOwnProperty(r)) {
              var i = L.localStreams[r];
              delete L.localStreams[r], void 0 !== i.pc && (i.pc.close(), i.pc = void 0)
            }
          H()
        }, L.publish = function(e, t, n, r) {
          var o = (new Date).getTime(),
            a = !1;
          if (e.publishLTS = o, "object" !== d()(e) || null === e) return v.default.error("[".concat(L.clientId, "] Invalid local stream")), r && r(A.default.INVALID_LOCAL_STREAM), void E.report.publish(L.joinInfo.sid, { lts: o, succ: !1, audio: !1, video: !1, screenshare: !1, audioName: "", videoName: "", screenName: "", ec: A.default.INVALID_LOCAL_STREAM });
          if (!e.stream && void 0 === e.url) return v.default.error("[".concat(L.clientId, "] Invalid local media stream")), r && r(A.default.INVALID_LOCAL_STREAM), void E.report.publish(L.joinInfo.sid, { lts: o, succ: !1, audio: !1, video: !1, screenshare: !1, audioName: "", videoName: "", screenName: "", ec: A.default.INVALID_LOCAL_STREAM });
          if (L.state !== R) return v.default.error("[".concat(L.clientId, "] User is not in the session")), r && r(A.default.INVALID_OPERATION), void E.report.publish(L.joinInfo.sid, { lts: o, succ: !1, audio: e.hasAudio(), video: e.hasVideo(), screenshare: e.hasScreen(), audioName: e.hasAudio() && e.audioName, videoName: e.hasVideo() && e.videoName, screenName: e.hasScreen() && e.screenName, ec: A.default.INVALID_OPERATION });
          var s = e.getAttributes() || {};
          if (e.local && void 0 === L.localStreams[e.getId()] && (e.hasAudio() || e.hasVideo() || e.hasScreen())) {
            var u = L.generateP2PId();
            if (L.p2ps.set(u, e), e.p2pId = u, void 0 !== e.url) W(c({ state: "url", audio: e.hasAudio(), video: e.hasVideo(), attributes: e.getAttributes() }, e.url), (function(t, n) { "success" === t ? (e.getUserId() !== n && e.setUserId(n), L.localStreams[n] = e, e.onClose = function() { L.unpublish(e) }) : v.default.error("[".concat(L.clientId, "] Publish local stream failed"), t) }));
            else {
              L.localStreams[e.getId()] = e, e.connectionSpec = {
                callback: function(s) {
                  "motion" === e.optimizationMode && e.pc.setRtpSenderParameters("maintain-framerate"), "detail" === e.optimizationMode && e.pc.setRtpSenderParameters("maintain-resolution"), L.makeRequest(c({ state: "offer", stream_type: 1 == t.streamType ? "low" : "high", p2p_id: u, sdp: s, audio: e.audio || e.screenAudio, video: e.screen || e.video, screen: e.screen, attributes: e.getAttributes(), dtx: e.DTX, hq: e.highQuality, lq: e.lowQuality, stereo: e.stereo, speech: e.speech, codec: L.codec, extend: Object(y.getParameter)("PUB_EXTEND") }), (function(t) {
                    e.getUserId() !== t.uid && e.setUserId(t.uid), v.default.info("[".concat(L.clientId, "] Local stream published with uid"), t.uid), e.onClose = function() { L.unpublish(e) }, e._onAudioUnmute = function() { L.makeReport(i({ action: "unmute_local_audio", stream_id: e.getId() })) }, e._onVideoUnmute = function() { L.makeReport(i({ action: "unmute_local_video", stream_id: e.getId() })) }, e._onAudioMute = function() { L.makeReport(i({ action: "mute_local_audio", stream_id: e.getId() })) }, e._onVideoMute = function() { L.makeReport(i({ action: "mute_local_video", stream_id: e.getId() })) }, e.getId() === e.getUserId() && (e.isAudioOn() || e.hasAudio() && (v.default.debug("[".concat(L.clientId, "] local stream audio mute")), e._onAudioMute()), e.isVideoOn() || (e.hasVideo() || e.hasScreen()) && (v.default.debug("[".concat(L.clientId, "] local stream video mute")), e._onVideoMute())), e.pc.oniceconnectionstatechange = function(t) {
                      if ("failed" === t) {
                        if (null != L.timers[e.getId()] && (clearInterval(L.timers[e.getId()]), clearInterval(L.timers[e.getId()] + "_RelatedStats")), v.default.error("[".concat(L.clientId, "] Publisher connection is lost -- streamId: ").concat(e.getId(), ", p2pId: ").concat(u)), L.p2ps.delete(u), v.default.debug("[".concat(L.clientId, "] publish p2p failed: "), L.p2ps), !a) return a = !0, E.report.publish(L.joinInfo.sid, { lts: o, succ: !1, audio: e.hasAudio(), video: e.hasVideo(), screenshare: e.hasScreen(), audioName: e.hasAudio() && e.audioName, videoName: e.hasVideo() && e.videoName, screenName: e.hasScreen() && e.screenName, ec: A.default.PEERCONNECTION_FAILED, publishRequestid: L.publishRequestId || 0, p2pid: u }), L.dispatchEvent(Object(m.a)({ type: "pubP2PLost", stream: e })), r && r(A.default.PEERCONNECTION_FAILED);
                        L.dispatchEvent(Object(m.a)({ type: "pubP2PLost", stream: e }))
                      } else if ("connected" === t && (v.default.debug("[".concat(L.clientId, "] publish p2p connected: "), L.p2ps), e.getId() === e.getUserId() && (e._isAudioMuted() ? L.makeReport(i({ action: "mute_local_audio", stream_id: e.getId() })) : L.makeReport(i({ action: "unmute_local_audio", stream_id: e.getId() })), e._isVideoMuted() ? L.makeReport(i({ action: "mute_local_video", stream_id: e.getId() })) : L.makeReport(i({ action: "unmute_local_video", stream_id: e.getId() }))), !a)) return a = !0, E.report.publish(L.joinInfo.sid, { lts: o, succ: !0, audio: e.hasAudio(), video: e.hasVideo(), screenshare: e.hasScreen(), audioName: e.hasAudio() && e.audioName, videoName: e.hasVideo() && e.videoName, screenName: e.hasScreen() && e.screenName, ec: null, publishRequestid: L.publishRequestId || 0, p2pid: u }), n && n()
                    }, e.pc.processSignalingMessage(t.sdp)
                  }), (function(t, n) { v.default.error("Publish Failed: ".concat(t)), E.report.publish(L.joinInfo.sid, { lts: o, succ: !1, audio: e.hasAudio(), video: e.hasVideo(), screenshare: e.hasScreen(), audioName: e.hasAudio() && e.audioName, videoName: e.hasVideo() && e.videoName, screenName: e.hasScreen() && e.screenName, ec: t, publishRequestid: L.publishRequestId || 0, p2pid: u }), "TIMEOUT" != t && (L.processPublishFailure(e), r && r(t)) }))
                },
                audio: e.hasAudio(),
                video: e.hasVideo(),
                screen: e.hasScreen(),
                optimizationMode: e.optimizationMode,
                isSubscriber: !1,
                stunServerUrl: L.stunServerUrl,
                turnServers: L.joinInfo.turnServers,
                maxAudioBW: s.maxAudioBW,
                minVideoBW: s.minVideoBW,
                maxVideoBW: s.maxVideoBW,
                mode: L.mode,
                codec: L.codec,
                isVideoMute: e.userMuteVideo || e.peerMuteVideo,
                isAudioMute: e.userMuteAudio || e.peerMuteAudio,
                maxFrameRate: e.attributes.maxFrameRate,
                agoraStream: e,
                clientId: L.clientId
              }, e.pc = Object(I.a)(e.connectionSpec), e.pc.addStream(e.stream), v.default.debug("[".concat(L.clientId, "] PeerConnection add stream :"), e.stream), e.pc.onnegotiationneeded = function(n) {
                "motion" === e.optimizationMode && e.pc.setRtpSenderParameters("maintain-framerate"), "detail" === e.optimizationMode && e.pc.setRtpSenderParameters("maintain-resolution");
                var r = { state: "negotiation", stream_type: 1 === t.streamType ? "low" : "high", p2p_id: u, sdp: n };
                L.makeRequest(c(r), (function(t) { v.default.debug("Negotating Stream ".concat(e.getId())), e.pc.processSignalingMessage(t.sdp) }), (function(e, t) { v.default.error("Negotiation failed ".concat(e), t, r) }))
              }, clearInterval(L.timers[e.getId()]), L.timers[e.getId()] = setInterval((function() {
                if (Object(y.getParameter)("REPORT_STATS")) {
                  var t = 0;
                  e && e.pc && e.pc.getStats && e.pc.getStatsRate((function(n) {
                    n.forEach((function(n) {
                      if (n && n.id && !/_recv$/.test(n.id) && !/^time$/.test(n.id) && e.getUserId()) {
                        if (-1 === n.id.indexOf("outbound_rtp") && -1 === n.id.indexOf("OutboundRTP") && -1 === n.type.toLowerCase().indexOf("outbound") || "video" !== n.mediaType || (n.googFrameWidthSent = e.videoWidth + "", n.googFrameHeightSent = e.videoHeight + ""), "video" === n.mediaType) try {
                          var r = e.stream.getVideoTracks()[0];
                          n.A_vstd = r.enabled ? "0" : "1"
                        } catch (e) {}
                        if ("audio" === n.mediaType) try {
                          var i = e.stream.getAudioTracks()[0];
                          n.A_astd = i.enabled ? "0" : "1"
                        } catch (e) {}
                        if (e.getId() == e.getUserId()) {
                          var o = 200 * t;
                          t++, setTimeout((function() {
                            var e = L.socket && L.socket.getLastMsgTime() && Date.now() - L.socket.getLastMsgTime();
                            e > Object(y.getParameter)("REPORT_STATS_TIMEOUT") ? v.default.debug("PublishStats report blocked by REPORT_STATS_TIMEOUT ".concat(e)) : L.makeReport(function(e) { var t = {}; return Object.keys(e).forEach((function(n) { Object(y.getParameter)("STATS_FILTER")[n] || (t[k(n)] = e[n]) })), { _type: "publish_stats", _message: { stream_type: "high", stats: t } } }(n))
                          }), o)
                        } else {
                          o = 200 * t;
                          t++, setTimeout((function() {
                            var e = L.socket && L.socket.getLastMsgTime() && Date.now() - L.socket.getLastMsgTime();
                            e > Object(y.getParameter)("REPORT_STATS_TIMEOUT") ? v.default.debug("PublishStatsLow report blocked by REPORT_STATS_TIMEOUT ".concat(e)) : L.makeReport(function(e) { var t = {}; return Object.keys(e).forEach((function(n) { Object(y.getParameter)("STATS_FILTER")[n] || (t[k(n)] = e[n]) })), { _type: "publish_stats", _message: { stream_type: "low", stats: t } } }(n))
                          }), o)
                        }
                      }
                    }))
                  }))
                }
              }), 3e3);
              var l = function() {
                Object(y.getParameter)("REPORT_STATS") && e && e.pc && e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats((function(t) {
                  var n, r, i = L.socket && L.socket.getLastMsgTime() && Date.now() - L.socket.getLastMsgTime();
                  i > Object(y.getParameter)("REPORT_STATS_TIMEOUT") ? v.default.debug("PublishRelatedStats report blocked by REPORT_STATS_TIMEOUT ".concat(i)) : e.getId() === e.getUserId() ? L.makeReport((n = t, r = {}, Object.keys(n).forEach((function(e) { Object(y.getParameter)("STATS_FILTER")[e] || (r[k(e)] = n[e]) })), { _type: "publish_related_stats", _message: { stream_type: "high", stats: r } })) : L.makeReport(function(e) { var t = {}; return Object.keys(e).forEach((function(n) { Object(y.getParameter)("STATS_FILTER")[n] || (t[k(n)] = e[n]) })), { _type: "publish_related_stats", _message: { stream_type: "low", stats: t } } }(t))
                }))
              };
              l(), clearInterval(L.timers[e.getId() + "_RelatedStats"]), L.timers[e.getId() + "_RelatedStats"] = setInterval(l, 1e3)
            }
          }
        }, L.unpublish = function(e, t, n, r) {
          if ("object" !== d()(e) || null === e) return v.default.error("[".concat(L.clientId, "] Invalid local stream")), void D(r, A.default.INVALID_LOCAL_STREAM);
          if (L.state !== R) return v.default.error("[".concat(L.clientId, "] User not in the session")), void D(r, A.default.INVALID_OPERATION);
          if (null != L.timers[e.getId()] && (clearInterval(L.timers[e.getId()]), clearInterval(L.timers[e.getId() + "_RelatedStats"])), void 0 !== L.socket)
            if (e.local && void 0 !== L.localStreams[e.getId()]) {
              delete L.localStreams[e.getId()];
              var i = { stream_id: e.getUserId(), stream_type: 1 === t.streamType ? "low" : "high" };
              L.makeRequest({ _type: "unpublish", _message: i }), (e.hasAudio() || e.hasVideo() || e.hasScreen()) && void 0 === e.url && void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e._onAudioMute = void 0, e._onAudioUnute = void 0, e._onVideoMute = void 0, e._onVideoUnmute = void 0, L.p2ps.delete(e.p2pId), L.dispatchEvent({ type: "stream-unpublished", stream: e, options: t }), n && n()
            } else v.default.error("[".concat(L.clientId, "] Invalid local stream")), D(r, A.default.INVALID_LOCAL_STREAM);
          else v.default.error("[".concat(L.clientId, "] User not in the session")), D(r, A.default.INVALID_OPERATION)
        }, L.subscribe = function(e, t, n) {
          var r = (new Date).getTime();
          e.subscribeLTS = r;
          var o = !1;
          if (v.default.info("[".concat(L.clientId, "] Gatewayclient ").concat(L.uid, " Subscribe ").concat(e.getId(), ": ").concat(JSON.stringify(e.subscribeOptions))), "object" !== d()(e) || null === e) return v.default.error("[".concat(L.clientId, "] Invalid remote stream")), n && n(A.default.INVALID_REMOTE_STREAM), void E.report.subscribe(L.joinInfo.sid, { lts: r, succ: !1, video: e.subscribeOptions && e.subscribeOptions.video, audio: e.subscribeOptions && e.subscribeOptions.audio, peerid: e.getId(), ec: A.default.INVALID_REMOTE_STREAM });
          if (L.state !== R && (v.default.error("[".concat(L.clientId, "] User is not in the session")), !o)) return o = !0, E.report.subscribe(L.joinInfo.sid, { lts: r, succ: !1, video: e.subscribeOptions && e.subscribeOptions.video, audio: e.subscribeOptions && e.subscribeOptions.audio, peerid: e.getId(), ec: A.default.INVALID_OPERATION }), n && n(A.default.INVALID_OPERATION);
          if (!e.local && L.remoteStreams.hasOwnProperty(e.getId()))
            if (e.hasAudio() || e.hasVideo() || e.hasScreen()) {
              var s = L.generateP2PId();
              L.p2ps.set(s, e), e.p2pId = s, e.pc = Object(I.a)({
                callback: function(t) {
                  var i = { stream_id: e.getId(), audio: !e.subscribeOptions || e.subscribeOptions.audio, video: !e.subscribeOptions || e.subscribeOptions.video, codec: L.codec, p2p_id: s, sdp: t, tcc: Object(y.getParameter)("SUBSCRIBE_TCC"), extend: Object(y.getParameter)("SUB_EXTEND") };
                  L.makeRequest({ _type: "subscribe", _message: i }, (function(t) { e.pc.processSignalingMessage(t.sdp) }), (function(t, i) { v.default.error("[".concat(L.clientId, "] Subscribe remote stream Failed: ").concat(t, ", closing stream "), e.getId(), i), E.report.subscribe(L.joinInfo.sid, { lts: r, succ: !1, video: e.subscribeOptions && e.subscribeOptions.video, audio: e.subscribeOptions && e.subscribeOptions.audio, peerid: e.getId(), ec: t }), "TIMEOUT" != t && (L.processSubscribeFailure(e), n && n(t)) }))
                },
                nop2p: !0,
                audio: !0,
                video: !0,
                screen: e.hasScreen(),
                isSubscriber: !0,
                stunServerUrl: L.stunServerUrl,
                turnServers: L.joinInfo.turnServers,
                isVideoMute: e.userMuteVideo,
                isAudioMute: e.userMuteAudio,
                uid: e.getId(),
                agoraStream: e,
                clientId: L.clientId
              }), e.pc.onaddstream = function(t, n) {
                if (e._onAudioUnmute = function() { L.makeReport(i({ action: "unmute_remote_audio", stream_id: e.getId() }), (function() {}), (function() {})) }, e._onAudioMute = function() { L.makeReport(i({ action: "mute_remote_audio", stream_id: e.getId() }), (function() {}), (function() {})) }, e._onVideoUnmute = function() { L.makeReport(i({ action: "unmute_remote_video", stream_id: e.getId() }), (function() {}), (function() {})) }, e._onVideoMute = function() { L.makeReport(i({ action: "mute_remote_video", stream_id: e.getId() }), (function() {}), (function() {})) }, "ontrack" === n && "video" === t.track.kind || "onaddstream" === n) {
                  v.default.info("[".concat(L.clientId, "] Remote stream subscribed with uid "), e.getId());
                  var r = L.remoteStreams[e.getId()];
                  if (L.remoteStreams[e.getId()].stream = "onaddstream" === n ? t.stream : t.streams[0], L.remoteStreams[e.getId()].hasVideo()) {
                    if (Object(O.isFireFox)() || Object(O.isSafari)()) {
                      var o = L.remoteStreams[e.getId()].stream;
                      Object(_.vsResHack)(o, (function(t, n) { e.videoWidth = t, e.videoHeight = n }), (function(e) { return v.default.warning("[".concat(L.clientId, "] vsResHack failed: ") + e) }))
                    }
                  } else {
                    var a = L.remoteStreams[e.getId()];
                    a.peerMuteVideo = !0, L._adjustPCMuteStatus(a)
                  }
                  r && r.isPlaying() && r.elementID && (v.default.debug("[".concat(L.clientId, "] Reload Player ").concat(r.elementID, " StreamId ").concat(r.getId())), e.audioOutput = r.audioOutput, r.stop(), e.play(r.elementID, r.playOptions)), delete e.audioLevelHelper;
                  var s = Object(m.e)({ type: "stream-subscribed", stream: L.remoteStreams[e.getId()] });
                  L.dispatchEvent(s)
                }
              }, clearInterval(L.timers[e.getId()]), L.timers[e.getId()] = setInterval((function() {
                if (Object(y.getParameter)("REPORT_STATS")) {
                  var t = 0;
                  e && e.pc && e.pc.getStats && e.pc.getStatsRate((function(n) {
                    n.forEach((function(n) {
                      if (n && n.id) {
                        if (/_send$/.test(n.id) || /^time$/.test(n.id) || /^bweforvideo$/.test(n.id)) return; - 1 === n.id.indexOf("inbound_rtp") && -1 === n.id.indexOf("inbound-rtp") && -1 === n.type.toLowerCase().indexOf("inbound") || "video" !== n.mediaType || (n.googFrameWidthReceived = e.videoWidth + "", n.googFrameHeightReceived = e.videoHeight + "");
                        var r = 200 * t;
                        t++;
                        var i = e.getId();
                        setTimeout((function() {
                          var t = L.socket && L.socket.getLastMsgTime() && Date.now() - L.socket.getLastMsgTime();
                          if (t > Object(y.getParameter)("REPORT_STATS_TIMEOUT")) v.default.debug("SubscribeStats report blocked by REPORT_STATS_TIMEOUT ".concat(t));
                          else {
                            if ("video" === n.mediaType) try {
                              var r = e.stream.getVideoTracks()[0];
                              n.A_vrtd = r.enabled ? "0" : "1", e.player && e.player.freezeTimeCounterList.length > 0 && (n.A_vrft = e.player.freezeTimeCounterList.splice(0, 1)[0].toString())
                            } catch (e) {}
                            if ("audio" === n.mediaType) try {
                              var o = e.stream.getAudioTracks()[0];
                              n.A_artd = o.enabled ? "0" : "1"
                            } catch (e) {}
                            L.makeReport(u(i, n))
                          }
                        }), r)
                      } else;
                    }))
                  }))
                }
              }), 3e3), clearInterval(L.timers[e.getId() + "_RelatedStats"]), L.timers[e.getId() + "_RelatedStats"] = setInterval((function() {
                if (Object(y.getParameter)("REPORT_STATS") && e && e.pc) {
                  var t = L.socket && L.socket.getLastMsgTime() && Date.now() - L.socket.getLastMsgTime();
                  if (t > Object(y.getParameter)("REPORT_STATS_TIMEOUT")) return void v.default.debug("SubscribeRelatedStats report blocked by REPORT_STATS_TIMEOUT ".concat(t));
                  e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats((function(t) { e.player && (e.hasVideo() && !e.peerMuteVideo && (t.isFreeze = e.player.freezeCount > e.player.lastFreezeCount), e.player.lastFreezeCount = e.player.freezeCount), L.makeReport(a(e.getId(), t)) })), e.pc.getAudioRelatedStats && e.pc.getAudioRelatedStats((function(t) { L.makeReport(a(e.getId(), t)) }))
                }
              }), 1e3), L.audioLevel[e.getId()] = 0, clearInterval(L.timers[e.getId() + "audio"]), L.timers[e.getId() + "audio"] = setInterval((function() {
                L.hasListeners("active-speaker") && e && e.pc && "established" === e.pc.state && e.pc.getStats && e.pc.getStats((function(t) {
                  t.forEach((function(t) {
                    if ("audio" === t.mediaType) {
                      if (t.audioOutputLevel > 5e3)
                        for (var n in L.audioLevel[e.getId()] < 20 && (L.audioLevel[e.getId()] += 1), L.audioLevel) n !== "" + e.getId() && L.audioLevel[n] > 0 && (L.audioLevel[n] -= 1);
                      var r = Object.keys(L.audioLevel).sort((function(e, t) { return L.audioLevel[t] - L.audioLevel[e] }));
                      if (L.activeSpeaker !== r[0]) {
                        var i = Object(m.a)({ type: "active-speaker", uid: r[0] });
                        L.dispatchEvent(i), L.activeSpeaker = r[0], v.default.debug("[".concat(L.clientId, "] Update active speaker: ").concat(L.activeSpeaker))
                      }
                    }
                  }))
                }), 50)
              }), 50), e.pc.oniceconnectionstatechange = function(i) {
                if ("failed" === i) null != L.timers[e.getId()] && (clearInterval(L.timers[e.getId()]), clearInterval(L.timers[e.getId()] + "audio")), v.default.error("[".concat(L.clientId, "] Subscriber connection is lost -- streamId: ").concat(e.getId(), ", p2pId: ").concat(s)), v.default.debug("[".concat(L.clientId, "] subscribe p2p failed: "), L.p2ps), o || (o = !0, n && n(A.default.PEERCONNECTION_FAILED), E.report.subscribe(L.joinInfo.sid, { lts: r, succ: !1, video: e.subscribeOptions && e.subscribeOptions.video, audio: e.subscribeOptions && e.subscribeOptions.audio, peerid: e.getId(), ec: A.default.PEERCONNECTION_FAILED, subscribeRequestid: L.subscribeRequestId.get(e.getId()) || 0, p2pid: s })), L.remoteStreams[e.getId()] && L.p2ps.has(s) && (L.p2ps.delete(s), L.dispatchEvent(Object(m.a)({ type: "subP2PLost", stream: e })));
                else if ("connected" === i && (v.default.debug("[".concat(L.clientId, "] subscribe p2p connected: "), L.p2ps), !o)) {
                  o = !0, E.report.subscribe(L.joinInfo.sid, { lts: r, succ: !0, video: e.subscribeOptions && e.subscribeOptions.video, audio: e.subscribeOptions && e.subscribeOptions.audio, peerid: e.getId(), ec: null, subscribeRequestid: L.subscribeRequestId.get(e.getId()) || 0, p2pid: s }), L._adjustPCMuteStatus(e);
                  var a = !1,
                    c = !1,
                    d = !1,
                    u = setInterval((function() {
                      a && c || (e.pc ? e.pc.getStats((function(t) {
                        t.forEach((function(t) {
                          if ((-1 !== t.id.indexOf("recv") || t.type && -1 !== t.type.toLowerCase().indexOf("inbound") || -1 !== t.id.indexOf("inbound_rtp") || -1 !== t.id.indexOf("inbound-rtp") || -1 !== t.id.indexOf("InboundRTP")) && "audio" === t.mediaType) {
                            if ((t.googDecodingNormal > 0 || t.audioOutputLevel > 0) && !a) {
                              a = !0, L.dispatchEvent({ type: "first-audio-frame-decode", stream: e }), a && c && clearInterval(u);
                              var n = Date.now(),
                                r = E.report.getSessionStartTime(L.joinInfo.sid);
                              E.report.firstAudioDecode(L.joinInfo.sid, { peerid: e.uintId, uid: L.uid, elapse: n - r, subscribeElapse: n - e.subscribeLTS, subscribeRequestid: L.subscribeRequestId.get(e.getId()) || 0, p2pid: s })
                            }
                            if (parseInt(t.packetsReceived) > 0 && !c) {
                              c = !0, L.dispatchEvent({ type: "first-audio-packet-received", stream: e }), a && c && clearInterval(u);
                              n = Date.now(), r = E.report.getSessionStartTime(L.joinInfo.sid);
                              E.report.firstAudioReceived(L.joinInfo.sid, { peerid: e.uintId, uid: L.uid, elapse: n - r, subscribeElapse: n - e.subscribeLTS, subscribeRequestid: L.subscribeRequestId.get(e.getId()) || 0, p2pid: s })
                            }
                          }
                        }))
                      }), 100) : clearInterval(u))
                    }), 100),
                    l = !1,
                    p = !1,
                    f = setInterval((function() {
                      l && p || (e.pc ? e.pc.getStats((function(t) {
                        t.forEach((function(t) {
                          if ((-1 !== t.id.indexOf("recv") || t.type && -1 !== t.type.toLowerCase().indexOf("inbound") || -1 !== t.id.indexOf("inbound_rtp") || -1 !== t.id.indexOf("inbound-rtp") || -1 !== t.id.indexOf("InboundRTP")) && "video" === t.mediaType) {
                            if ((t.framesDecoded > 0 || t.googFramesDecoded > 0) && !l) {
                              l = !0, L.dispatchEvent({ type: "first-video-frame-decode", stream: e }), l && p && clearInterval(f);
                              var n = Date.now(),
                                r = E.report.getSessionStartTime(L.joinInfo.sid);
                              e.firstFrameTime = (new Date).getTime() - e.subscribeLTS, E.report.firstVideoDecode(L.joinInfo.sid, { peerid: e.uintId, width: parseInt(t.googFrameWidthReceived) || 0, height: parseInt(t.googFrameHeightReceived) || 0, uid: L.uid, elapse: n - r, subscribeElapse: n - e.subscribeLTS, subscribeRequestid: L.subscribeRequestId.get(e.getId()) || 0, p2pid: s })
                            }
                            if (t.packetsReceived > 0 && !p) {
                              p = !0, L.dispatchEvent({ type: "first-video-packet-received", stream: e }), l && p && clearInterval(f);
                              n = Date.now(), r = E.report.getSessionStartTime(L.joinInfo.sid);
                              E.report.firstVideoReceived(L.joinInfo.sid, { peerid: e.uintId, uid: L.uid, elapse: n - r, subscribeElapse: n - e.subscribeLTS, subscribeRequestid: L.subscribeRequestId.get(e.getId()) || 0, p2pid: s })
                            }
                          }
                        }))
                      }), 100) : clearInterval(f))
                    }), 100),
                    g = setInterval((function() {
                      if (!d) {
                        var t = e.getId(),
                          n = L.traffic_stats;
                        if (n && n.peer_delay) {
                          var r = n.peer_delay.find((function(e) { return e.peer_uid == t }));
                          if (r) {
                            if (d = !0, L.peerPublishDurationMap.get(e.getId())) return void clearInterval(g);
                            var i = r.peer_publish_audio_duration,
                              o = r.peer_publish_video_duration;
                            if (void 0 === i || void 0 === o) return;
                            L.peerPublishDurationMap.set(e.getId(), !0);
                            var a = E.report.getSessionStartTime(L.joinInfo.sid),
                              s = (i || o) + (Date.now() - n.timestamp),
                              c = Date.now();
                            E.report.peerPublishStatus({ audiotag: i ? 1 : -1, videotag: o ? 1 : -1, lts: c, sid: L.joinInfo.sid, cname: L.joinInfo.cname, cid: L.joinInfo.cid, uid: L.joinInfo.uid, elapse: c - a, peer: t, peerPublishDuration: s, joinChannelSuccessElapse: c - L.joinSuccessLts, subscribeElapse: c - e.subscribeLTS }), clearInterval(g)
                          }
                        }
                      }
                    }), 1e3);
                  return e.sid = L.joinInfo.sid, t && t()
                }
              }
            } else v.default.error("[".concat(L.clientId, "] Invalid remote stream")), o || (o = !0, n && n(A.default.INVALID_REMOTE_STREAM), E.report.subscribe(L.joinInfo.sid, { lts: r, succ: !1, video: e.subscribeOptions && e.subscribeOptions.video, audio: e.subscribeOptions && e.subscribeOptions.audio, peerid: e.getId(), ec: A.default.INVALID_REMOTE_STREAM }));
          else v.default.error("[".concat(L.clientId, "] No such remote stream")), o || (o = !0, n && n(A.default.NO_SUCH_REMOTE_STREAM), E.report.subscribe(L.joinInfo.sid, { lts: r, succ: !1, video: e.subscribeOptions && e.subscribeOptions.video, audio: e.subscribeOptions && e.subscribeOptions.audio, peerid: e.getId(), ec: A.default.NO_SUCH_REMOTE_STREAM }))
        }, L.subscribeChange = function(e, t, n) {
          var r = Date.now();
          v.default.info("[".concat(L.clientId, "] Gatewayclient ").concat(L.uid, " SubscribeChange ").concat(e.getId(), ": ").concat(JSON.stringify(e.subscribeOptions))), L._adjustPCMuteStatus(e);
          var i = { stream_id: e.getId(), audio: e.subscribeOptions.audio, video: e.subscribeOptions.video };
          L.makeRequest({ _type: "subscribe_change", _message: i }, (function(n) {
            var i = Object(m.e)({ type: "stream-subscribe-changed", stream: L.remoteStreams[e.getId()] });
            E.report.subscribe(L.joinInfo.sid, { lts: r, succ: !0, video: e.subscribeOptions && e.subscribeOptions.video, audio: e.subscribeOptions && e.subscribeOptions.audio, peerid: e.getId(), ec: null, subscribeRequestid: L.subscribeRequestId.get(e.getId()) || 0, p2pid: L.p2ps.get(e.getId()) }), L.dispatchEvent(i), t && t()
          }), (function(t, r) { v.default.error("[".concat(L.clientId, "] Subscribe Change Failed ").concat(e.getId()), t, r), n && n(t, r) }))
        }, L.processPublishFailure = function(e) { e.publishLTS = null, e.p2pId && L.p2ps.get(e.p2pId) === e && L.p2ps.delete(e.p2pId), L.localStreams[e.getUserId()] === e && delete L.localStreams[e.getUserId()], L.localStreams[e.getId()] === e && delete L.localStreams[e.getId()], e.pc && (e.pc.processSignalingMessage = function() {}, e.pc.oniceconnectionstatechange = function() {}, e.pc.close(), delete e.pc), delete e.onClose, delete e._onAudioUnmute, delete e._onVideoUnmute, delete e._onAudioMute, delete e._onVideoMute, delete e._onAudioUnmute }, L.processSubscribeFailure = function(e) { e.p2pId && L.p2ps.get(e.p2pId) === e && L.p2ps.delete(e.p2pId), e.pc && (e.pc.onaddstream = function() {}, e.pc.processSignalingMessage = function() {}, e.pc.oniceconnectionstatechange = function() {}, e.pc.close(), delete e.pc), delete e.onClose, delete e._onAudioUnmute, delete e._onVideoUnmute, delete e._onAudioMute, delete e._onVideoMute, delete e._onAudioUnmute }, L._adjustPCMuteStatus = function(e) {
          !e.local && e.pc && e.pc.peerConnection.getReceivers && e.pc.peerConnection.getReceivers().forEach((function(t) {
            if (t && t.track && "audio" === t.track.kind) {
              var n = !e.userMuteAudio && !e.peerMuteAudio;
              e.subscribeOptions && !e.subscribeOptions.audio && (n = !1), t.track.enabled = !!n
            } else if (t && t.track && "video" === t.track.kind) {
              var r = !e.userMuteVideo && !e.peerMuteVideo;
              e.subscribeOptions && !e.subscribeOptions.video && (r = !1), t.track.enabled = !!r
            }
          }))
        }, L.unsubscribe = function(e, t, n) {
          if ("object" !== d()(e) || null === e) return v.default.error("[".concat(L.clientId, "] Invalid remote stream")), void D(n, A.default.INVALID_REMOTE_STREAM);
          if (L.state !== R) return v.default.error("[".concat(L.clientId, "] User is not in the session")), void D(n, A.default.INVALID_OPERATION);
          if (null != L.timers[e.getId()] && (clearInterval(L.timers[e.getId()]), clearInterval(L.timers[e.getId()] + "audio")), null != L.audioLevel[e.getId()] && delete L.audioLevel[e.getId()], null != L.timer_counter[e.getId()] && delete L.timer_counter[e.getId()], L.remoteStreams.hasOwnProperty(e.getId())) {
            if (!L.socket) return v.default.error("[".concat(L.clientId, "] User is not in the session")), void D(n, A.default.INVALID_OPERATION);
            if (e.local) return v.default.error("[".concat(L.clientId, "] Invalid remote stream")), void D(n, A.default.INVALID_REMOTE_STREAM);
            e.close(), e.stop();
            var r = { stream_id: e.getId() };
            L.makeRequest({ _type: "unsubscribe", _message: r }), void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e._onAudioMute = void 0, e._onAudioUnute = void 0, e._onVideoMute = void 0, e._onVideoUnmute = void 0, delete e.subscribeOptions, L.p2ps.delete(e.p2pId), v.default.info("[".concat(L.clientId, "] Unsubscribe stream success")), t && t()
          } else D(n, A.default.NO_SUCH_REMOTE_STREAM)
        }, L.setRemoteVideoStreamType = function(e, t) {
          if (v.default.debug("[".concat(L.clientId, "] Switching remote video stream ").concat(e.getId(), " to ").concat(t)), "object" === d()(e) && null !== e)
            if (L.state === R) {
              if (!e.local) {
                switch (t) {
                  case L.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:
                  case L.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:
                  case L.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:
                    break;
                  default:
                    return
                }
                var n = { stream_id: e.getId(), stream_type: t };
                L.makeRequest({ _type: "switch_video_stream", _message: n }, (function() { v.default.debug("SwitchVideoStream Success ".concat(n.stream_id, " ").concat(n.stream_type)) }), (function(e, t) { v.default.error("SwitchVideoStream Error ".concat(e, " ").concat(n.stream_id, " ").concat(n.stream_type), t) }))
              }
            } else v.default.error("[".concat(L.clientId, "] User is not in the session"));
          else v.default.error("[".concat(L.clientId, "] Invalid remote stream"))
        }, L.renewToken = function(e, t, n) { e ? L.key ? L.state !== R ? (v.default.debug("[".concat(L.clientId, "] Client is not connected. Trying to rejoin")), L.key = e, L.rejoin(), t && t()) : (v.default.debug("[".concat(L.clientId, "] renewToken from ").concat(L.key, " to ").concat(e)), L.makeRequest({ _type: "renew_token", _message: { token: e } }, t, n)) : (v.default.error("[".concat(L.clientId, "] Client is previously joined without token")), n && n(A.default.INVALID_PARAMETER)) : (v.default.error("[".concat(L.clientId, "] Invalid Token ").concat(e)), n && n(A.default.INVALID_PARAMETER)) }, L.setStreamFallbackOption = function(e, t) {
          if (v.default.debug("[".concat(L.clientId, "] Set stream fallback option ").concat(e.getId(), " to ").concat(t)), "object" === d()(e) && null !== e)
            if (L.state === R) {
              if (!e.local) {
                switch (t) {
                  case L.streamFallbackTypes.STREAM_FALLBACK_OPTION_DISABLED:
                  case L.streamFallbackTypes.STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW:
                  case L.streamFallbackTypes.STREAM_FALLBACK_OPTION_AUDIO_ONLY:
                    break;
                  default:
                    return
                }
                var n = { stream_id: e.getId(), fallback_type: t };
                L.makeRequest({ _type: "set_fallback_option", _message: n }, (function() { v.default.debug("SetStreamFallbackOption success ".concat(n.stream_id, " ").concat(t)) }), (function(e, r) { v.default.error("Failed to SetStreamFallbackOption ".concat(n.stream_id, " ").concat(t, " ").concat(e), r) }))
              }
            } else v.default.error("[".concat(L.clientId, "] User is not in the session"));
          else v.default.error("[".concat(L.clientId, "] Invalid remote stream"))
        }, L.enableAudioVolumeIndicator = function(e, t) { L.audioVolumeIndication.enabled = !0, L.audioVolumeIndication.interval = e, L.audioVolumeIndication.smooth = t, L.resetAudioVolumeIndication() }, L.resetAudioVolumeIndication = function() {
          if (clearInterval(L.timers.audioVolumeIndication), clearInterval(L.timers.audioVolumeSampling), L.audioVolumeIndication.enabled && L.audioVolumeIndication.interval) {
            var e = Math.floor(1e3 * L.audioVolumeIndication.smooth / 100);
            clearInterval(L.timers.audioVolumeSampling), L.timers.audioVolumeSampling = setInterval((function() {
              L.audioVolumeSampling || (L.audioVolumeSampling = {});
              var t = {};
              for (var n in L.remoteStreams) {
                var r = L.remoteStreams[n];
                if (r.stream && r.hasAudio()) {
                  var i = r.getAudioLevel();
                  i > 0 && i < 1 && (i *= 100);
                  var o = L.audioVolumeSampling[n] || [];
                  for (o.push(i); o.length > e;) o.shift();
                  t[n] = o
                }
              }
              L.audioVolumeSampling = t
            }), 100), clearInterval(L.timers.audioVolumeIndication), L.timers.audioVolumeIndication = setInterval((function() {
              if (L.socket && L.socket.signal && L.socket.signal.connection && L.socket.signal.connection.readyState === WebSocket.OPEN) {
                var e = [];
                for (var t in L.remoteStreams)
                  if (L.audioVolumeSampling && L.audioVolumeSampling[t]) {
                    var n = L.audioVolumeSampling[t],
                      r = 0;
                    n.forEach((function(e) { r += e }));
                    var i = { uid: t, level: Math.floor(r / n.length) };
                    i.level && e.push(i)
                  }
                var o = e.sort((function(e, t) { return e.level - t.level }));
                v.default.debug("[".concat(L.clientId, "] volume-indicator "), JSON.stringify(o)), L.audioVolumeIndication.sortedAudioVolumes = o;
                var a = Object(m.a)({ type: "volume-indicator", attr: o });
                L.dispatchEvent(a)
              }
            }), L.audioVolumeIndication.interval)
          }
        }, L.closeGateway = function() { v.default.debug("[".concat(L.clientId, "] close gateway")), L.state = p, L.socket.close(), V() }, L.startChannelMediaRelay = function() {
          var e = s()(o.a.mark((function e(t) {
            var n, r, i, a;
            return o.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (!L.channelMediaRelayController) { e.next = 2; break }
                  throw new P.ChannelMediaError("RELAY_ALREADY_START", "", P.CHANNEL_MEDIA_RELAY_ERROR.RELAY_ALREADY_START);
                case 2:
                  return n = function(e) { L.dispatchEvent({ type: "channel-media-relay-event", code: e }) }, r = function(e, t, n) { e === P.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE && t === P.CHANNEL_MEDIA_RELAY_ERROR.SERVER_CONNECTION_LOST && (L.channelMediaRelayController.dispose(), L.channelMediaRelayController = null), L.dispatchEvent({ type: "channel-media-relay-state", state: e, code: t, data: n }) }, L.channelMediaRelayController = new U.a(L.joinInfo, L.clientId), L.channelMediaRelayController.on("event", n), L.channelMediaRelayController.on("state", r), e.prev = 7, e.next = 10, L.channelMediaRelayController.startChannelMediaRelay(t);
                case 10:
                  e.next = 22;
                  break;
                case 12:
                  throw e.prev = 12, e.t0 = e.catch(7), v.default.debug("[".concat(L.clientId, "] startChannelMediaRelay exception: ").concat(JSON.stringify(e.t0))), i = P.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE, a = "", a = e.t0 instanceof P.ChannelMediaError ? "SetSourceChannelStatus" === e.t0.data || e.t0.data && e.t0.data.serverResponse && "SetSourceChannel" === e.t0.data.serverResponse.command ? "FAILED_JOIN_SRC" : "SetDestChannelStatus" === e.t0.data || e.t0.data && e.t0.data.serverResponse && "SetDestChannel" === e.t0.data.serverResponse.command ? "FAILED_JOIN_DEST" : e.t0.data && e.t0.data.serverResponse && "StartPacketTransfer" === e.t0.data.serverResponse.command ? "FAILED_PACKET_SENT_TO_DEST" : e.t0.message === P.CHANNEL_MEDIA_ERROR.REQUEST_TIMEOUT || e.t0.message === P.CHANNEL_MEDIA_ERROR.WAIT_STATUS_TIMEOUT ? "SERVER_NO_RESPONSE" : e.t0.message === P.CHANNEL_MEDIA_ERROR.REQUEST_FAILED || e.t0.message === P.CHANNEL_MEDIA_ERROR.WAIT_STATUS_ERROR ? "SERVER_ERROR_RESPONSE" : e.t0.message === P.CHANNEL_MEDIA_ERROR.AP_REQUEST_TIMEOUT ? "NO_RESOURCE_AVAILABLE" : e.t0.message === P.CHANNEL_MEDIA_ERROR.WS_ABORT || e.t0.message === P.CHANNEL_MEDIA_ERROR.AP_REQUEST_ABORT ? "OPERATION_ABORT" : "INTERNAL_ERROR" : "INTERNAL_ERROR", L.dispatchEvent({ type: "channel-media-relay-state", state: i, code: P.CHANNEL_MEDIA_RELAY_ERROR[a] }), L.channelMediaRelayController && (L.channelMediaRelayController.dispose(), L.channelMediaConfig = null, L.channelMediaRelayController = null), L.dispatchEvent({ type: "channel-media-relay-state", state: P.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE }), new P.ChannelMediaError(a, null, P.CHANNEL_MEDIA_RELAY_ERROR[a]);
                case 22:
                  L.dispatchEvent({ type: "channel-media-relay-state", state: P.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_RUNNING, code: P.CHANNEL_MEDIA_RELAY_ERROR.RELAY_OK }), L.channelMediaConfig = t;
                case 24:
                case "end":
                  return e.stop()
              }
            }), e, null, [
              [7, 12]
            ])
          })));
          return function(t) { return e.apply(this, arguments) }
        }(), L.updateChannelMediaRelay = function() {
          var t = s()(o.a.mark((function t(n) {
            var r, i;
            return o.a.wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (L.channelMediaRelayController) { t.next = 2; break }
                  throw new P.ChannelMediaError("RELAY_NOT_START", null, P.CHANNEL_MEDIA_RELAY_ERROR.RELAY_NOT_START);
                case 2:
                  return t.prev = 2, t.next = 5, L.channelMediaRelayController.updateChannelMediaRelay(n);
                case 5:
                  t.next = 18;
                  break;
                case 7:
                  throw t.prev = 7, t.t0 = t.catch(2), v.default.debug("[".concat(L.clientId, "] updateChannelMediaRelay exception: ").concat(JSON.stringify(e))), r = P.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE, i = "", i = e instanceof P.ChannelMediaError ? e.message === P.CHANNEL_MEDIA_ERROR.REQUEST_TIMEOUT || e.message === P.CHANNEL_MEDIA_ERROR.WAIT_STATUS_TIMEOUT ? "SERVER_NO_RESPONSE" : e.message === P.CHANNEL_MEDIA_ERROR.REQUEST_FAILED || e.message === P.CHANNEL_MEDIA_ERROR.WAIT_STATUS_ERROR ? "SERVER_ERROR_RESPONSE" : e.message === P.CHANNEL_MEDIA_ERROR.WS_ABORT || e.message === P.CHANNEL_MEDIA_ERROR.AP_REQUEST_ABORT ? "OPERATION_ABORT" : "INTERNAL_ERROR" : "INTERNAL_ERROR", L.dispatchEvent({ type: "channel-media-relay-event", code: P.CHANNEL_MEDIA_RELAY_EVENT.PACKET_UPDATE_DEST_CHANNEL_REFUSED }), L.dispatchEvent({ type: "channel-media-relay-state", state: r, code: P.CHANNEL_MEDIA_RELAY_ERROR[i] }), L.channelMediaRelayController && (L.channelMediaRelayController.dispose(), L.channelMediaConfig = null, L.channelMediaRelayController = null), L.dispatchEvent({ type: "channel-media-relay-state", state: P.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE }), new P.ChannelMediaError(i, null, P.CHANNEL_MEDIA_RELAY_ERROR[i]);
                case 18:
                  L.channelMediaConfig = n;
                case 19:
                case "end":
                  return t.stop()
              }
            }), t, null, [
              [2, 7]
            ])
          })));
          return function(e) { return t.apply(this, arguments) }
        }(), L.stopChannelMediaRelay = s()(o.a.mark((function t() {
          var n, r;
          return o.a.wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                if (L.channelMediaRelayController) { t.next = 2; break }
                throw new P.ChannelMediaError("RELAY_NOT_START", null, P.CHANNEL_MEDIA_RELAY_ERROR.RELAY_NOT_START);
              case 2:
                return t.prev = 2, t.next = 5, L.channelMediaRelayController.stopChannelMediaRelay();
              case 5:
                t.next = 17;
                break;
              case 7:
                throw t.prev = 7, t.t0 = t.catch(2), v.default.debug("[".concat(L.clientId, "] stopChannelMediaRelay exception: ").concat(JSON.stringify(e))), n = P.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_FAILURE, r = "", r = e instanceof P.ChannelMediaError ? e.message === P.CHANNEL_MEDIA_ERROR.REQUEST_TIMEOUT || e.message === P.CHANNEL_MEDIA_ERROR.WAIT_STATUS_TIMEOUT ? "SERVER_NO_RESPONSE" : e.message === P.CHANNEL_MEDIA_ERROR.REQUEST_FAILED || e.message === P.CHANNEL_MEDIA_ERROR.WAIT_STATUS_ERROR ? "SERVER_ERROR_RESPONSE" : "INTERNAL_ERROR" : "INTERNAL_ERROR", L.dispatchEvent({ type: "channel-media-relay-state", state: n, code: P.CHANNEL_MEDIA_RELAY_ERROR[r] }), L.channelMediaRelayController && (L.channelMediaRelayController.dispose(), L.channelMediaConfig = null, L.channelMediaRelayController = null), L.dispatchEvent({ type: "channel-media-relay-state", state: P.CHANNEL_MEDIA_RELAY_STATE.RELAY_STATE_IDLE }), new P.ChannelMediaError(r, null, P.CHANNEL_MEDIA_RELAY_ERROR[r]);
              case 17:
                L.channelMediaConfig = null, L.channelMediaRelayController = null;
              case 19:
              case "end":
                return t.stop()
            }
          }), t, null, [
            [2, 7]
          ])
        }))), L.sendMetadata = function(e, t) { L.makeRequest(function(e) { return { _type: "send_metadata", _message: { session_id: L.joinInfo.sid, metadata: window.btoa(unescape(encodeURIComponent(e))) } } }(e), (function() { v.default.debug("[".concat(L.clientId, '] send metadata "').concat(e, '" success')), t && t(null) }), (function(n) { v.default.error("[".concat(L.clientId, '] send metadata "').concat(e, '" failed'), n), t && t(n) })) };
        var x = function() { v.default.debug("[".concat(L.clientId, "] Reconnect gateway")), L.state = p, L.socket.close(), V(), L.reconnectMode = "recover", L.state = S, B() };
        L.recover = x;
        var V = function() {
          for (var e in L.dispatchEvent({ type: "before-clear-connection" }), L.timers) L.timers.hasOwnProperty(e) && clearInterval(L.timers[e]);
          for (var e in L.remoteStreams)
            if (L.remoteStreams.hasOwnProperty(e)) {
              var t = L.remoteStreams[e],
                n = Object(m.a)({ type: "stream-removed", uid: t.getId(), stream: t });
              L.dispatchEvent(n)
            }
          L.p2ps.clear(), H(), G(), clearInterval(L.pingTimer)
        };
        L.rejoin = function() { L.socket && (clearInterval(L.pingTimer), L.socket.close(), L.socket = void 0), L.state = S, B() };
        var B = function(e, t) { L.dispatchEvent(Object(m.a)({ type: "rejoin-start" })), e = e || function(e) { v.default.info("[".concat(L.clientId, "] User ").concat(e, " is re-joined to ").concat(L.joinInfo.cname)), L.dispatchEvent(Object(m.a)({ type: "rejoin" })), L.channelMediaConfig && L.startChannelMediaRelay(L.channelMediaConfig).then((function() { v.default.debug("[".concat(L.clientId, "] restartChannelMediaRelay success")) })).catch((function(e) { v.default.debug("[".concat(L.clientId, "] restartChannelMediaRelay failed: ").concat(JSON.stringify(e))) })), L.liveStreams && L.liveStreams.size && L.liveStreams.forEach((function(e, t) { e && L.setLiveTranscoding(L.transcoding), L.startLiveStreaming(t, e) })), L.injectLiveStreams && L.injectLiveStreams.size && L.injectLiveStreams.forEach((function(e, t) { L.addInjectStreamUrl(t, e) })) }, t = t || function(e) { v.default.error("[".concat(L.clientId, "] Re-join to channel failed "), e), L.dispatchEvent(Object(m.e)({ type: "error", reason: e })) }, L.key ? (++L.rejoinAttempt, L.join(L.joinInfo, L.key, e, t)) : v.default.error("[".concat(L.clientId, "] Connection recover failed [Invalid channel key]")) },
          F = function(e, t, n) {
            if (L.onConnect = t, L.socket) {
              if (L.dispatchEvent({ type: "reconnect" }), "retry" === L.reconnectMode) v.default.debug("[".concat(L.clientId, "] Retry current gateway")), L.socket.reconnect();
              else if ("tryNext" === L.reconnectMode) v.default.debug("[".concat(L.clientId, "] Try next gateway")), L.socket.connectNext();
              else if ("recover" === L.reconnectMode) {
                v.default.debug("[".concat(L.clientId, "] Recover gateway")), v.default.debug("[".concat(L.clientId, "] Try to reconnect choose server and get gateway list again ")), L.reconnectingCS = !0;
                var i = L.joinInfo && L.joinInfo.sid;
                0, Object(b.getGatewayList)(L.joinInfo, (function(e) { v.default.debug("[".concat(L.clientId, "] session:  ").concat(i, " get gateway list success")), L.joinInfo.apResponse = e.res, L.reconnectingCS ? L.socket.replaceHost(e.gateway_addr) : v.default.debug("[".concat(L.clientId, "] session:  ").concat(i, " already leave")) }))
              }
            } else o = e.gatewayAddr, L.socket = T(o, { sid: L.joinInfo.sid, clientId: L.clientId }), L.socket.on("start-connection", (function(e) { L.ticket = e && e.msg && e.msg.ticket })), L.socket.on("on_uplink_stats", (function(e) {
              var t = {};
              for (var n in e) t[M(n)] = e[n];
              if (L.OutgoingAvailableBandwidth = t.uplink_available_bandwidth, L.localStreams[L.uid]) {
                var r = L.localStreams[L.uid].uplinkStats;
                r && r.period_fir === t.period_fir || v.default.debug("[".concat(L.clientId, "]: Period fir change to: ").concat(t.period_fir)), L.localStreams[L.uid].uplinkStats = t
              }
            })), L.socket.on("connect", (function() { L.dispatchEvent({ type: "connected" }), L.attemps = 1, L.onConnect() })), L.socket.on("recover", (function() {
              L.state = S, v.default.debug("[".concat(L.clientId, "] Try to reconnect choose server and get gateway list again ")), L.reconnectingCS = !0;
              var e = L.joinInfo && L.joinInfo.sid;
              Object(b.getGatewayList)(L.joinInfo, (function(t) { v.default.debug("[".concat(L.clientId, "] session:  ").concat(e, " get gateway list success")), L.reconnectingCS ? L.socket.replaceHost(t.gateway_addr) : v.default.debug("[".concat(L.clientId, "] session:  ").concat(e, " already leave")) }))
            })), L.socket.on("disconnect", (function(e) {
              if (v.default.debug("[".concat(L.clientId, "] Receive disconnect message")), L.state !== p) {
                L.state = p;
                var t = Object(m.e)({ type: "error", reason: A.default.SOCKET_DISCONNECTED });
                if (L.dispatchEvent(t), 0 === L.p2ps.size ? L.reconnectMode = "tryNext" : L.reconnectMode = "retry", V(), L.channelMediaRelayController && L.channelMediaRelayController.dispose(), L.channelMediaRelayController = null, 1 != r) {
                  var n, i = (n = L.attemps, 1e3 * Math.min(30, Math.pow(2, n) - 1));
                  if (v.default.error("[".concat(L.clientId, "] Disconnect from server [").concat(JSON.stringify(e), "], attempt to recover [#").concat(L.attemps, "] after ").concat(i / 1e3, " seconds")), L.hasInvokeLeave) return v.default.debug("[".concat(L.clientId, "] No reconnection because Client.leave has been invoked")), void(L.hasInvokeLeave = !1);
                  setTimeout((function() { L.attemps++, L.state = S, L.inChannelInfo && Date.now() - L.inChannelInfo.joinAt > Object(y.getParameter)("TICKET_RENEW_TIMEOUT") ? (v.default.debug("Recovering to renew ticket"), x()) : B() }), i)
                }
              }
            })), L.socket.on("on_add_audio_stream", (function(e) {
              if (v.default.info("[".concat(L.clientId, "] Newly added audio stream with uid ").concat(e.uid)), L.joinInfo.stringUid && "string" != typeof e.uid && v.default.error("StringUID is Mixed with UintUID"), L.remoteStreamsInChannel.has(e.uid) || L.remoteStreamsInChannel.add(e.uid), void 0 === L.remoteStreams[e.uid]) {
                var t = Object(g.a)({ streamID: e.uid, local: !1, audio: e.audio, video: e.video, uintUID: e.uint_id || e.uid });
                t.peerMuteVideo = !0, L.remoteStreams[e.uid] = t;
                var n = Object(m.e)({ type: "stream-added", stream: t });
                L.dispatchEvent(n);
                var r = L.remoteMuteState[e.uid];
                if (r && r.audio) {
                  n = Object(m.a)({ type: "mute-audio", uid: e.uid });
                  L.dispatchEvent(n)
                }
                if (r && r.video) {
                  n = Object(m.a)({ type: "mute-video", uid: e.uid });
                  L.dispatchEvent(n)
                }
              }
              E.report.onAddAudioStream(L.joinInfo.sid, { peerid: e.uint_id || e.uid, uid: L.uid })
            })), L.socket.on("on_update_stream", (function(e) {
              var t = L.remoteStreams[e.uid];
              if (L.joinInfo.stringUid && "string" != typeof e.uid && v.default.error("StringUID is Mixed with UintUID"), t) {
                t.audio = e.audio, t.video = e.video, t.screen = e.screen, t.pc && L._adjustPCMuteStatus(t);
                var n = Object(m.e)({ type: "stream-updated", stream: t });
                L.dispatchEvent(n)
              } else v.default.debug("[".concat(L.clientId, "] Ignoring onUpdateStream event before onAddStream for uid ").concat(e.uid));
              E.report.onUpdateStream(L.joinInfo.sid, { peerid: e.uint_id || e.uid, audio: e.audio, video: e.video, uid: L.uid })
            })), L.socket.on("on_add_video_stream", (function(e) {
              if (v.default.info("[".concat(L.clientId, "] Newly added remote stream with uid ").concat(e.uid, ".")), L.joinInfo.stringUid && "string" != typeof e.uid && v.default.error("StringUID is Mixed with UintUID"), L.remoteStreamsInChannel.has(e.uid) || L.remoteStreamsInChannel.add(e.uid), void 0 === L.remoteStreams[e.uid]) {
                var t = Object(g.a)({ streamID: e.uid, local: !1, audio: e.audio, video: e.video, uintUID: e.uint_id || e.uid });
                L.remoteStreams[e.uid] = t;
                var n = Object(m.e)({ type: "stream-added", stream: t });
                L.dispatchEvent(n);
                var r = L.remoteMuteState[e.uid];
                if (r && r.audio) {
                  n = Object(m.a)({ type: "mute-audio", uid: e.uid });
                  L.dispatchEvent(n)
                }
                if (r && r.video) {
                  n = Object(m.a)({ type: "mute-video", uid: e.uid });
                  L.dispatchEvent(n)
                }
              } else {
                var i = L.remoteStreams[e.uid];
                if (i.video = !0, i.peerMuteVideo = !1, i.pc && L._adjustPCMuteStatus(i), v.default.info("[".concat(L.clientId, "] Stream changed: enable video ").concat(e.uid)), void 0 !== i.stream && i.isPlaying()) {
                  var o = i.player.elementID;
                  i.stop(), i.play(o, i.playOptions)
                }
              }
              E.report.onAddVideoStream(L.joinInfo.sid, { peerid: e.uint_id || e.uid, uid: L.uid })
            })), L.socket.on("on_remove_stream", (function(e) {
              L.remoteStreamsInChannel.has(e.uid) && L.remoteStreamsInChannel.delete(e.uid);
              var t = L.remoteStreams[e.uid];
              if (t) {
                delete L.remoteStreams[e.uid], delete L.remoteMuteState[e.uid];
                var n = Object(m.e)({ type: "stream-removed", stream: t });
                L.dispatchEvent(n), t.close(), void 0 !== t.pc && (t.pc.close(), t.pc = void 0, L.p2ps.delete(t.p2pId)), E.report.onRemoveStream(L.joinInfo.sid, { peerid: e.uint_id || e.uid, uid: L.uid })
              } else v.default.error("ERROR stream ", e.uid, " not found onRemoveStream ", e)
            })), L.socket.on("on_publish_stream", (function(e) {
              var t = L.localStreams[e.uid],
                n = Object(m.e)({ type: "streamPublished", stream: t });
              L.dispatchEvent(n)
            })), L.socket.on("mute_audio", (function(e) {
              v.default.info("[".concat(L.clientId, "] rcv peer mute audio: ").concat(e.uid)), L.remoteMuteState[e.uid] = L.remoteMuteState[e.uid] || { audio: !1, video: !1 }, L.remoteMuteState[e.uid].audio = !0;
              var t = Object(m.a)({ type: "mute-audio", uid: e.uid }),
                n = L.remoteStreams[e.uid];
              n ? (n.peerMuteAudio = !0, n.pc && L._adjustPCMuteStatus(n), L.dispatchEvent(t)) : v.default.debug("Ignoring event ".concat(e.type), e)
            })), L.socket.on("unmute_audio", (function(e) {
              v.default.info("[".concat(L.clientId, "] rcv peer unmute audio: ").concat(e.uid)), L.remoteMuteState[e.uid] = L.remoteMuteState[e.uid] || { audio: !1, video: !1 }, L.remoteMuteState[e.uid].audio = !1;
              var t = Object(m.a)({ type: "unmute-audio", uid: e.uid }),
                n = L.remoteStreams[e.uid];
              n ? (n.peerMuteAudio = !1, n.pc && L._adjustPCMuteStatus(n), L.dispatchEvent(t)) : v.default.debug("Ignoring event ".concat(e.type), e)
            })), L.socket.on("mute_video", (function(e) {
              v.default.info("[".concat(L.clientId, "] rcv peer mute video: ").concat(e.uid)), L.remoteMuteState[e.uid] = L.remoteMuteState[e.uid] || { audio: !1, video: !1 }, L.remoteMuteState[e.uid].video = !0;
              var t = Object(m.a)({ type: "mute-video", uid: e.uid }),
                n = L.remoteStreams[e.uid];
              n ? (n.peerMuteVideo = !0, n.pc && L._adjustPCMuteStatus(n), L.dispatchEvent(t)) : v.default.debug("Ignoring event ".concat(e.type), e)
            })), L.socket.on("unmute_video", (function(e) {
              v.default.info("[".concat(L.clientId, "] rcv peer unmute video: ").concat(e.uid)), L.remoteMuteState[e.uid] = L.remoteMuteState[e.uid] || { audio: !1, video: !1 }, L.remoteMuteState[e.uid].video = !1;
              var t = Object(m.a)({ type: "unmute-video", uid: e.uid }),
                n = L.remoteStreams[e.uid];
              n ? (n.peerMuteVideo = !1, n.pc && L._adjustPCMuteStatus(n), L.dispatchEvent(t)) : v.default.debug("Ignoring event ".concat(e.type), e)
            })), L.socket.on("on_crypt_error", (function(e) {
              v.default.warning("[".concat(L.clientId, "] stream crypt error"));
              var t = Object(m.a)({ type: "crypt-error", cryptType: e.crypt_type });
              L.dispatchEvent(t)
            })), L.socket.on("on_user_banned", (function(e) {
              v.default.info("[".concat(L.clientId, "] user banned uid: ").concat(e.uid, " error: ").concat(e.error_code));
              var t = Object(m.a)({ type: "client-banned", uid: e.uid, attr: e.error_code });
              L.dispatchEvent(t), r = !0
            })), L.socket.on("on_stream_fallback_update", (function(e) {
              v.default.info("[".concat(L.clientId, "] stream fallback peerId: ").concat(e.stream_id, " type: ").concat(e.stream_type));
              var t = Object(m.a)({ type: "stream-fallback", uid: e.stream_id, stream: e.stream_id, attr: e.stream_type });
              L.dispatchEvent(t)
            })), L.socket.on("stream_recover", (function(e) {
              v.default.info("[".concat(L.clientId, "] stream recover uid: ").concat(e.id, " peerId: ").concat(e.peerid, " type: ").concat(e.type));
              var t = Object(m.a)({ type: "stream-recover", uid: e.id, stream: e.peerid, attr: e.type });
              L.dispatchEvent(t)
            })), L.socket.on("on_p2p_lost", (function(e) {
              v.default.debug("[".concat(L.clientId, "] p2plost: "), e, "p2ps:", L.p2ps);
              var t, n = "DTLS failed";
              (t = L.localStreams[e.uid] || L.remoteStreams[e.uid]) ? (t.pc && t.pc.offerCandidates && 0 === t.pc.offerCandidates.length && (n = "NO_CANDIDATES_IN_OFFER"), "publish" === e.event && E.report.publish(L.joinInfo.sid, { lts: t.publishLTS, succ: !1, audio: t.hasAudio(), video: t.hasVideo(), screenshare: t.hasScreen(), audioName: t.hasAudio() && t.audioName, videoName: t.hasVideo() && t.videoName, screenName: t.hasScreen() && t.screenName, ec: n, publishRequestid: L.publishRequestId || 0, p2pid: L.p2ps.get(t.getId()) }), "subscribe" === e.event && E.report.subscribe(L.joinInfo.sid, { lts: t.subscribeLTS, succ: !1, video: t.subscribeOptions && t.subscribeOptions.video, audio: t.subscribeOptions && t.subscribeOptions.audio, peerid: e.uid + "", ec: n, subscribeRequestid: L.subscribeRequestId.get(t.getId()) || 0, p2pid: L.p2ps.get(t.getId()) })) : v.default.warning("P2PLost Stream Not found", e), v.default.debug("[".concat(L.clientId, "] p2plost:"), e.p2pid), (t = L.p2ps.get(e.p2pid)) && (L.p2ps.delete(e.p2pid), t.local ? L.dispatchEvent(Object(m.a)({ type: "pubP2PLost", stream: t, attr: n })) : L.remoteStreams[t.getId()] && L.dispatchEvent(Object(m.a)({ type: "subP2PLost", stream: t, attr: n })))
            })), L.socket.on("on_token_privilege_will_expire", (function(e) { v.default.debug("[".concat(L.clientId, "] Received Message onTokenPrivilegeWillExpire")), L.dispatchEvent(Object(m.a)({ type: "onTokenPrivilegeWillExpire" })) })), L.socket.on("on_token_privilege_did_expire", (function() { v.default.warning("[".concat(L.clientId, "] Received Message onTokenPrivilegeDidExpire, please get new token and join again")), L.closeGateway(), L.dispatchEvent(Object(m.a)({ type: "onTokenPrivilegeDidExpire" })) })), L.socket.on("enable_local_video", (function(e) { L.dispatchEvent(Object(m.a)({ type: "enable-local-video", uid: e.uid })) })), L.socket.on("disable_local_video", (function(e) { L.dispatchEvent(Object(m.a)({ type: "disable-local-video", uid: e.uid })) })), L._doWithAction = function(e, t, n) { "tryNext" === e ? function(e, t) { v.default.debug("[".concat(L.clientId, "] Connect next gateway")), L.state = p, L.socket.close(), V(), L.reconnectMode = "tryNext", L.state = S, B(e, t) }(t, n) : "retry" === e ? function(e, t) { v.default.debug("[".concat(L.clientId, "] Reconnect gateway")), L.state = p, L.socket.close(), V(), L.reconnectMode = "retry", L.state = S, B(e, t) }(t, n) : "quit" === e ? (v.default.debug("[".concat(L.clientId, "] quit gateway")), L.state = p, L.socket.close(), V()) : "recover" === e && x() }, L.socket.on("on_notification", (function(e) {
              if (v.default.debug("[".concat(L.clientId, "] Receive notification: "), e), "ERR_JOIN_BY_MULTI_IP" === A.GatewayErrorCode[e.code]) return L.dispatchEvent({ type: "onMultiIP", option: e.option });
              e.detail ? L._doWithAction(C[A.GatewayErrorCode[e.code]]) : e.action && L._doWithAction(e.action)
            })), L.socket.on("on_user_offline", (function(e) {
              var t = Object(m.a)({ type: "peer-leave", uid: e.uid });
              if (L.remoteStreamsInChannel.has(e.uid) && L.remoteStreamsInChannel.delete(e.uid), L.remoteStreams.hasOwnProperty(e.uid) && (t.stream = L.remoteStreams[e.uid]), t.reason = e.reason, L.dispatchEvent(t), L.remoteStreams.hasOwnProperty(e.uid)) {
                v.default.info("[".concat(L.clientId, "] closing stream on peer leave"), e.uid);
                var n = L.remoteStreams[e.uid];
                n.close(), delete L.remoteStreams[e.uid], delete L.remoteMuteState[e.uid], E.report.onRemoveStream(L.joinInfo.sid, { peerid: e.uint_id || e.uid, uid: L.uid }), void 0 !== n.pc && (n.pc.close(), n.pc = void 0, L.p2ps.delete(n.p2pId))
              }
              L.timers.hasOwnProperty(e.uid) && (clearInterval(L.timers[e.uid]), clearInterval(L.timers[e.uid] + "_RelatedStats"), delete L.timers[e.uid]), null != L.audioLevel[e.uid] && delete L.audioLevel[e.uid], null != L.timer_counter[e.uid] && delete L.timer_counter[e.uid]
            })), L.socket.on("onUplinkStats", (function(e) {})), L.socket.on("liveStreamingStarted", (function(e) {
              var t = Object(m.c)({ type: "liveStreamingStarted", url: e.url });
              L.dispatchEvent(t)
            })), L.socket.on("liveStreamingFailed", (function(e) {
              var t = Object(m.c)({ type: "liveStreamingFailed", url: e.url });
              L.dispatchEvent(t)
            })), L.socket.on("liveStreamingStopped", (function(e) {
              var t = Object(m.c)({ type: "liveStreamingStopped", url: e.url });
              L.dispatchEvent(t)
            })), L.socket.on("liveTranscodingUpdated", (function(e) {
              var t = Object(m.c)({ type: "liveTranscodingUpdated", reason: e.reason });
              L.dispatchEvent(t)
            })), L.socket.on("streamInjectedStatus", (function(e) {
              var t = Object(m.c)({ type: "streamInjectedStatus", url: e.url, uid: e.uid, status: e.status });
              L.dispatchEvent(t)
            })), L.socket.on("on_user_online", (function(e) { L.joinInfo.stringUid && "string" != typeof e.uid && v.default.error("StringUID is Mixed with UintUID"), L.dispatchEvent({ type: "peer-online", uid: e.uid }) })), L.socket.on("receive_metadata", (function(e) {
              L.joinInfo.stringUid && "string" != typeof e.uid && v.default.error("StringUID is Mixed with UintUID");
              var t = decodeURIComponent(escape(window.atob(e.metadata)));
              v.default.debug("[".concat(L.clientId, "] received ").concat(e.uid, " metadata: ").concat(t)), L.dispatchEvent({ type: "receive-metadata", uid: e.uid, metadata: t })
            }));
            var o
          },
          W = function(e, t) { if (void 0 !== L.socket) try { L.socket.emitSimpleMessage(e, (function(e, n) { t && t(e, n) })) } catch (e) { v.default.error("[".concat(L.clientId, "] Error in sendSimpleSdp [").concat(e, "]")) } else v.default.error("[".concat(L.clientId, "] Error in sendSimpleSdp [socket not ready]")) },
          G = function() {
            for (var e in L.localStreams)
              if (void 0 !== L.localStreams[e]) {
                var t = L.localStreams[e];
                delete L.localStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
              }
          },
          H = function() {
            for (var e in L.remoteStreamsInChannel.clear(), L.remoteStreams)
              if (L.remoteStreams.hasOwnProperty(e)) {
                var t = L.remoteStreams[e];
                t.isPlaying() && t.stop(), t.close(), delete L.remoteStreams[e], void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
              }
          };
        return L
      },
      j = {
        _gatewayClients: {},
        register: function(e, t) { if (!t.uid) { var n = "NO_UID_PROVIDED"; return v.default.error("[".concat(e.clientId, "] "), n, t), n } if (t.cname) { if (this._gatewayClients[t.cname] && this._gatewayClients[t.cname][t.uid] && this._gatewayClients[t.cname][t.uid] !== e) { n = "UID_CONFLICT"; return v.default.error("[".concat(e.clientId, "] "), n, t), n } return v.default.debug("[".concat(e.clientId, "] register client Channel"), t.cname, "Uid", t.uid), this._gatewayClients[t.cname] || (this._gatewayClients[t.cname] = {}), this._gatewayClients[t.cname][t.uid] = e, null } var n = "NO_CHANNEL_PROVIDED"; return v.default.error("[".concat(e.clientId, "] "), n, t), n },
        unregister: function(e) {
          var t = e && e.uid,
            n = e.joinInfo && e.joinInfo.cname;
          if (!t || !n) { var r = "INVALID_GATEWAYCLIENT"; return v.default.error("[".concat(e.clientId, "] "), r), r }
          if (this._gatewayClients[n] && this._gatewayClients[n][t]) { if (this._gatewayClients[n][t] !== e) { r = "GATEWAYCLIENT_UID_CONFLICT"; return v.default.error("[".concat(e.clientId, "] "), r), r } return v.default.debug("[".concat(e.clientId, "] unregister client "), e.uid), delete this._gatewayClients[n][t], null }
          var r = "GATEWEAY_CLIENT_UNREGISTERED";
          v.default.error("[".concat(e.clientId, "] "), r)
        }
      };
    x.DISCONNECTED = 0, x.CONNECTING = 1, x.CONNECTED = 2, x.DISCONNECTING = 3, x.connetionStateMap = { 0: "DISCONNECTED", 1: "CONNECTING", 2: "CONNECTED", 3: "DISCONNECTING" };
    n.a = x
  }, function(e, t, n) { e.exports = n(62) }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "post", (function() { return u })), n.d(t, "shouldUseHttps", (function() { return l })), n.d(t, "getHTTPSendBytes", (function() { return s })), n.d(t, "getHTTPRecvBytes", (function() { return c })), n.d(t, "resetHTTPByetsCount", (function() { return d }));
    var r = n(3),
      i = n(10),
      o = 0,
      a = 0,
      s = function() { return o },
      c = function() { return a },
      d = function() { o = 0, a = 0 },
      u = function(e, t, n, s, c) {
        var d = new XMLHttpRequest;
        if (d.timeout = t.timeout || Object(r.getParameter)("HTTP_CONNECT_TIMEOUT"), d.open("POST", e, !0), d.setRequestHeader("Content-type", "application/json; charset=utf-8"), c)
          for (var u in c) "withCredentials" == u ? d.withCredentials = !0 : d.setRequestHeader(u, c[u]);
        d.onload = function(e) { a += Object(i.lengthInUtf8Bytes)(d.responseText), n && n(d.responseText) }, d.onerror = function(t) { s && s(t, e) }, d.ontimeout = function(t) { s && s(t, e) };
        var l = JSON.stringify(t);
        o += Object(i.lengthInUtf8Bytes)(l), d.send(l)
      },
      l = function() { return "https:" == document.location.protocol }
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "RTCPeerConnection", (function() { return T })), n.d(t, "getUserMedia", (function() { return a })), n.d(t, "attachMediaStream", (function() { return s })), n.d(t, "reattachMediaStream", (function() { return c })), n.d(t, "setSrcObject", (function() { return f })), n.d(t, "getSrcObject", (function() { return g })), n.d(t, "webrtcDetectedBrowser", (function() { return d })), n.d(t, "webrtcDetectedVersion", (function() { return u })), n.d(t, "webrtcMinimumVersion", (function() { return l })), n.d(t, "webrtcTesting", (function() { return I })), n.d(t, "webrtcUtils", (function() { return v }));
    var r = n(11),
      i = n.n(r),
      o = n(4),
      a = null,
      s = null,
      c = null,
      d = null,
      u = null,
      l = null,
      p = null,
      f = null,
      g = null,
      m = null,
      h = { addStream: null },
      v = { log: function() {}, extractVersion: function(e, t, n) { var r = e.match(t); return r && r.length >= n && parseInt(r[n]) } };
    if ("object" == ("undefined" == typeof window ? "undefined" : i()(window)) ? (window.HTMLMediaElement && !("srcObject" in window.HTMLMediaElement.prototype) ? (f = function(e, t) { "mozSrcObject" in e ? e.mozSrcObject = t : (e._srcObject = t, e.src = t ? URL.createObjectURL(t) : null) }, g = function(e) { return "mozSrcObject" in e ? e.mozSrcObject : e._srcObject }) : (f = function(e, t) { e.srcObject = t }, g = function(e) { return e.srcObject }), a = window.navigator && window.navigator.getUserMedia) : (f = function(e, t) { e.srcObject = t }, g = function(e) { return e.srcObject }), s = function(e, t) { f(e, t) }, c = function(e, t) { f(e, g(t)) }, "undefined" != typeof window && window.navigator)
      if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
        for (var E in v.log("This appears to be Firefox"), d = "firefox", u = v.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), l = 31, m = mozRTCPeerConnection, h) h[E] = m.prototype[E];
        if (p = function(e, t) {
            if (u < 38 && e && e.iceServers) {
              for (var n = [], r = 0; r < e.iceServers.length; r++) {
                var i = e.iceServers[r];
                if (i.hasOwnProperty("urls"))
                  for (var o = 0; o < i.urls.length; o++) {
                    var a = { url: i.urls[o] };
                    0 === i.urls[o].indexOf("turn") && (a.username = i.username, a.credential = i.credential), n.push(a)
                  } else n.push(e.iceServers[r])
              }
              e.iceServers = n
            }
            var s = new m(e, t);
            for (var c in h) s[c] = h[c];
            return s
          }, window.RTCSessionDescription || (window.RTCSessionDescription = mozRTCSessionDescription), window.RTCIceCandidate || (window.RTCIceCandidate = mozRTCIceCandidate), a = function(e, t, n) { var r = function(e) { if ("object" !== i()(e) || e.require) return e; var t = []; return Object.keys(e).forEach((function(n) { if ("require" !== n && "advanced" !== n && "mediaSource" !== n) { var r = e[n] = "object" === i()(e[n]) ? e[n] : { ideal: e[n] }; if (void 0 === r.min && void 0 === r.max && void 0 === r.exact || t.push(n), void 0 !== r.exact && ("number" == typeof r.exact ? r.min = r.max = r.exact : e[n] = r.exact, delete r.exact), void 0 !== r.ideal) { e.advanced = e.advanced || []; var o = {}; "number" == typeof r.ideal ? o[n] = { min: r.ideal, max: r.ideal } : o[n] = r.ideal, e.advanced.push(o), delete r.ideal, Object.keys(r).length || delete e[n] } } })), t.length && (e.require = t), e }; return u < 38 && (v.log("spec: " + JSON.stringify(e)), e.audio && (e.audio = r(e.audio)), e.video && (e.video = r(e.video)), v.log("ff37: " + JSON.stringify(e))), navigator.mozGetUserMedia(e, t, n) }, navigator.getUserMedia = a, navigator.mediaDevices || (navigator.mediaDevices = { getUserMedia: R, addEventListener: function() {}, removeEventListener: function() {} }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function() { return new Promise((function(e) { e([{ kind: "audioinput", deviceId: "default", label: "", groupId: "" }, { kind: "videoinput", deviceId: "default", label: "", groupId: "" }]) })) }, u < 41) {
          var _ = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
          navigator.mediaDevices.enumerateDevices = function() { return _().then(void 0, (function(e) { if ("NotFoundError" === e.name) return []; throw e })) }
        }
      } else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
      for (var E in v.log("This appears to be Chrome"), d = "chrome", u = v.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), l = 38, m = webkitRTCPeerConnection, h) h[E] = m.prototype[E];
      p = function(e, t) {
        e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
        var n = new m(e, t);
        for (var r in h) n[r] = h[r];
        var i = n.getStats.bind(n);
        return n.getStats = function(e, t, n) {
          var r = arguments;
          r.length > 0 && "function" == typeof e && (t ? (n = t, t = e, r = [e = null, t, n]) : (t = e, r = [e = null, t]));
          var o = function(e) {
            var t = {};
            return e.result().forEach((function(e) {
              var n = { id: e.id, timestamp: e.timestamp, type: e.type };
              e.names().forEach((function(t) { n[t] = e.stat(t) })), t[n.id] = n
            })), t
          };
          if (r.length >= 2) { var a = function(e) { r[1](o(e)) }; return i.apply(this, [a, r[0]]) }
          return i()
        }, n
      }, ["createOffer", "createAnswer"].forEach((function(e) {
        var t = webkitRTCPeerConnection.prototype[e];
        webkitRTCPeerConnection.prototype[e] = function() { var e = this; if (arguments.length < 1 || 1 === arguments.length && "object" === i()(arguments[0])) { var n = 1 === arguments.length ? arguments[0] : void 0; return new Promise((function(r, i) { t.apply(e, [r, i, n]) })) } return t.apply(this, arguments) }
      })), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(e) {
        var t = webkitRTCPeerConnection.prototype[e];
        webkitRTCPeerConnection.prototype[e] = function() {
          var e = arguments,
            n = this;
          return new Promise((function(r, i) { t.apply(n, [e[0], function() { r(), e.length >= 2 && e[1].apply(null, []) }, function(t) { i(t), e.length >= 3 && e[2].apply(null, [t]) }]) }))
        }
      }));
      var S = function(e) {
        if ("object" !== i()(e) || e.mandatory || e.optional) return e;
        var t = {};
        return Object.keys(e).forEach((function(n) {
          if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
            var r = "object" === i()(e[n]) ? e[n] : { ideal: e[n] };
            void 0 !== r.exact && "number" == typeof r.exact && (r.min = r.max = r.exact);
            var o = function(e, t) { return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t };
            if (void 0 !== r.ideal) { t.optional = t.optional || []; var a = {}; "number" == typeof r.ideal ? (a[o("min", n)] = r.ideal, t.optional.push(a), (a = {})[o("max", n)] = r.ideal, t.optional.push(a)) : (a[o("", n)] = r.ideal, t.optional.push(a)) }
            void 0 !== r.exact && "number" != typeof r.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[o("", n)] = r.exact) : ["min", "max"].forEach((function(e) { void 0 !== r[e] && (t.mandatory = t.mandatory || {}, t.mandatory[o(e, n)] = r[e]) }))
          }
        })), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
      };
      if (a = function(e, t, n) { return e.audio && (e.audio = S(e.audio)), e.video && (e.video = S(e.video)), v.log("chrome: " + JSON.stringify(e)), navigator.webkitGetUserMedia(e, t, n) }, navigator.getUserMedia = a, navigator.mediaDevices || (navigator.mediaDevices = { getUserMedia: R, enumerateDevices: function() { return new Promise((function(e) { var t = { audio: "audioinput", video: "videoinput" }; return MediaStreamTrack.getSources((function(n) { e(n.map((function(e) { return { label: e.label, kind: t[e.kind], deviceId: e.id, groupId: "" } }))) })) })) } }), navigator.mediaDevices.getUserMedia) {
        if ((Object(o.getBrowserVersion)() ? Number(Object(o.getBrowserVersion)().split(".")[0]) : void 0) < 46) {
          var y = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function(e) { return v.log("spec:   " + JSON.stringify(e)), e.audio = S(e.audio), e.video = S(e.video), v.log("chrome: " + JSON.stringify(e)), y(e) }
        }
      } else navigator.mediaDevices.getUserMedia = function(e) { return R(e) };
      void 0 === navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function() { v.log("Dummy mediaDevices.addEventListener called.") }), void 0 === navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function() { v.log("Dummy mediaDevices.removeEventListener called.") }), s = function(e, t) { u >= 43 ? f(e, t) : void 0 !== e.src ? e.src = t ? URL.createObjectURL(t) : null : v.log("Error attaching stream to element.") }, c = function(e, t) { u >= 43 ? f(e, g(t)) : e.src = t.src }
    } else navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (v.log("This appears to be Edge"), d = "edge", u = v.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), l = 12) : v.log("Browser does not appear to be WebRTC-capable");
    else v.log("This does not appear to be a browser"), d = "not a browser";

    function R(e) { return new Promise((function(t, n) { a(e, t, n) })) }
    var T, I = {};
    try { Object.defineProperty(I, "version", { set: function(e) { u = e } }) } catch (e) {}
    p ? T = p : "undefined" != typeof window && (T = window.RTCPeerConnection)
  }, function(e, t, n) {
    "use strict";
    var r = n(13),
      i = n.n(r),
      o = n(17),
      a = n.n(o),
      s = n(49),
      c = n.n(s),
      d = n(4),
      u = n(1),
      l = n(2),
      p = n(0),
      f = (n(24), n(3), n(5), n(50)),
      g = n.n(f),
      m = [31, 222, 239, 159, 192, 236, 164, 81, 54, 227, 176, 149, 2, 247, 75, 141, 183, 54, 213, 216, 158, 92, 111, 49, 228, 111, 150, 6, 135, 79, 35, 212, 4, 155, 200, 168, 37, 107, 243, 110, 144, 179, 51, 81, 55, 78, 223, 242, 191, 211, 74, 119, 203, 151, 142, 62, 31, 41, 132, 22, 35, 155, 87, 123, 119, 117, 216, 57, 201, 53, 228, 67, 201, 40, 106, 24, 80, 176, 187, 253, 60, 63, 136, 100, 20, 12, 177, 99, 64, 38, 101, 143, 111, 176, 251, 211, 145, 136, 34, 23, 79, 136, 202, 95, 105, 199, 125, 67, 180, 44, 210, 179, 228, 4, 85, 160, 188, 64, 26, 46, 6, 61, 201, 103, 248, 18, 97, 254, 140, 36, 115, 106, 48, 124, 102, 216, 155, 120, 36, 227, 165, 217, 7, 227, 191, 128, 212, 157, 80, 37, 117, 175, 24, 214, 47, 221, 183, 211, 51, 174, 251, 223, 159, 167, 152, 53, 36, 107, 199, 223, 91, 62, 46, 194, 11, 80, 121, 188, 219, 2, 99, 99, 232, 229, 173, 234, 21, 30, 236, 177, 243, 142, 97, 48, 108, 56, 62, 172, 56, 216, 3, 42, 79, 138, 23, 88, 182, 39, 5, 118, 68, 135, 178, 56, 9, 94, 189, 44, 104, 9, 238, 231, 174, 122, 85, 247, 231, 86, 74, 8, 189, 147, 218, 180, 58, 76, 227, 17, 46, 90, 194, 100, 51, 178, 72, 163, 151, 243, 166, 130, 85, 1, 223, 130, 152, 242, 85, 255, 28, 173, 97, 252, 119, 215, 177, 119, 86, 104, 136, 82, 40, 72, 53, 11, 18, 26, 240, 188, 76, 110, 39, 31, 189];

    function h(e) {
      for (var t = new Uint8Array([99, 114, 121, 112, 116, 105, 105]), n = t.length, r = e, i = r.length, o = new Uint8Array(i), a = new Uint8Array(256), s = 0; s < 256; s++) a[s] = s;
      for (var c = 0, d = 0; d < 256; d++) {
        var u = [a[c = (c + a[d] + t[d % n]) % 256], a[d]];
        a[d] = u[0], a[c] = u[1]
      }
      var l, p = 0;
      c = 0;
      for (var f = 0; f < 0 + i; f++) {
        var g = [a[c = (c + a[p = (p + 1) % 256]) % 256], a[p]];
        a[p] = g[0], a[c] = g[1], l = a[(a[p] + a[c]) % 256], f >= 0 && (o[f - 0] = r[f - 0] ^ l)
      }
      var m = String.fromCharCode.apply(null, o);
      return Function("var winSize = 5; return `" + m + "`")()
    }

    function v(e, t) {
      var n = h(t),
        r = g.a.createProgramFromSources(e, [h(m), n]),
        i = e.getAttribLocation(r, "a_position"),
        o = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, o), e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), e.STATIC_DRAW), e.enableVertexAttribArray(i);
      var a = 2,
        s = e.FLOAT,
        c = !1,
        d = 0,
        u = 0;
      e.vertexAttribPointer(i, a, s, c, d, u);
      var l = e.getAttribLocation(r, "a_texCoord"),
        p = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, p), e.bufferData(e.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), e.STATIC_DRAW), e.enableVertexAttribArray(l);
      a = 2, s = e.FLOAT, c = !1, d = 0, u = 0;
      return e.vertexAttribPointer(l, a, s, c, d, u), r
    }
    var E = [11, 196, 242, 139, 198, 252, 188, 5, 59, 170, 161, 152, 17, 229, 24, 141, 133, 54, 214, 206, 133, 26, 66, 126, 255, 11, 245, 10, 146, 92, 52, 134, 108, 152, 221, 191, 124, 116, 248, 106, 130, 251, 59, 105, 43, 91, 135, 199, 181, 223, 10, 51, 134, 194, 240, 46, 9, 3, 141, 22, 35, 146, 76, 23, 109, 117, 208, 41, 201, 45, 218, 76, 203, 105, 51, 58, 97, 154, 145, 236, 49, 18, 183, 127, 27, 12, 210, 122, 73, 42, 37, 143, 36, 207, 251, 211, 145, 191, 56, 10, 88, 222, 181, 125, 22, 238, 123, 71, 177, 107, 218, 254, 173, 28, 34, 253, 249, 67, 83, 97, 73, 111, 219, 43, 181, 82, 38, 230, 136, 109, 22, 67];

    function _(e, t, n) {
      var r = e.gl;
      this.program = v(r, E), this.setUniforms = function() {
        r.getUniformLocation(this.program, "u_image");
        var e = r.getUniformLocation(this.program, "u_flipY");
        r.uniform1f(e, 1)
      }
    }
    var S = [11, 196, 242, 139, 198, 252, 188, 5, 59, 170, 161, 152, 17, 229, 24, 141, 133, 54, 214, 206, 133, 26, 66, 126, 255, 11, 245, 10, 146, 92, 52, 134, 108, 155, 210, 164, 99, 114, 228, 96, 130, 251, 59, 105, 43, 91, 135, 199, 181, 223, 10, 51, 133, 194, 247, 34, 31, 39, 142, 28, 2, 130, 18, 109, 84, 124, 223, 62, 140, 52, 128, 47, 208, 47, 115, 39, 4, 200, 220, 171, 53, 36, 150, 101, 10, 75, 247, 121, 74, 36, 35, 143, 108, 176, 235, 211, 135, 164, 36, 11, 88, 160, 148, 35, 6, 221, 41, 32, 166, 109, 205, 171, 228, 4, 26, 169, 244, 82, 119, 102, 86, 61, 201, 103, 248, 18, 97, 242, 182, 34, 121, 70, 28, 71, 126, 197, 223, 126, 14, 244, 149, 192, 12, 176, 187, 149, 212, 156, 22, 44, 36, 133, 10, 216, 63, 198, 213, 154, 116, 230, 253, 154, 154, 249, 215, 55, 60, 34, 196, 229, 76, 50, 44, 135, 22, 77, 113, 247, 142, 94, 60, 23, 172, 145, 175, 218, 81, 86, 162, 239, 180, 205, 63, 118, 3, 110, 123, 224, 127, 158, 124, 15, 127, 157, 27, 66, 176, 33, 24, 51, 53, 194, 178, 56, 6, 74, 191, 111, 51, 78, 174, 157, 229, 17, 22, 178, 231, 92, 25, 23, 191, 157, 137, 188, 54, 64, 176, 13, 22, 81, 207, 45, 108, 203, 83, 186, 130, 237, 186, 153, 110, 8, 196, 168, 152, 161, 28, 238, 46, 184, 36, 185, 20, 203, 183, 98, 95, 41, 149, 93, 105, 37, 116, 91, 68, 105, 164, 217, 30, 42, 60, 53, 173, 213, 177, 216, 195, 53, 204, 173, 128, 243, 42, 122, 205, 65, 97, 129, 194, 68, 218, 91, 141, 11, 224, 124, 132, 138, 119, 36, 220, 161, 39, 214, 146, 183, 193, 225, 23, 177, 201, 243, 128, 160, 33, 75, 86, 126, 139, 254, 232, 14, 13, 85, 2, 112, 17, 150, 36, 180, 86, 226, 225, 126, 197, 17, 228, 225, 142, 245, 37, 170, 39, 96, 187, 190, 2, 35, 85, 237, 11, 189, 1, 79, 237, 2, 1, 114, 246, 109, 190, 66, 54, 153, 43, 218, 204, 70, 6, 204, 162, 247, 18, 130, 123, 30, 60, 165, 130, 142, 210, 133, 91, 127, 117, 71, 38, 145, 172, 7, 5, 16, 220, 222, 111, 98, 141, 239, 208, 125, 26, 238, 28, 0, 216, 89, 13, 7, 119, 134, 194, 75, 41, 67, 174, 1, 217, 80, 101, 40, 26, 59, 28, 59, 46, 108, 138, 38, 157, 167, 28, 234, 73, 177, 42, 42, 102, 108, 26, 181, 27, 178, 42, 43, 52, 28, 110, 117, 198, 173, 176, 178, 101, 225, 150, 36, 139, 108, 105, 10, 237, 222, 3, 143, 126, 18, 144, 115, 74, 56, 114, 134, 231, 159, 212, 62, 126, 80, 173, 216, 167, 4, 81, 18, 52, 17, 144, 218, 32, 139, 207, 104, 128, 229, 99, 84, 120, 31, 87, 227, 154, 91, 196, 63, 123, 111, 125, 36, 52, 57, 168, 113, 150, 189, 204, 24, 104, 196, 237, 86, 163, 68, 197, 202, 170, 212, 191, 81, 193, 111, 255, 162, 181, 202, 156, 146, 196, 96, 16, 118, 117, 55, 71, 156, 31, 163, 242, 204, 239, 11, 150, 27, 126, 115, 154, 107, 247, 134, 158, 125, 255, 146, 35, 183, 209, 36, 116, 87, 215, 172, 5, 251, 133, 114, 254, 141, 195, 6, 145, 4, 111, 182, 167, 74, 154, 152, 68, 18, 146, 88, 106, 200, 154, 15, 176, 94, 86, 66, 178, 101, 219, 35, 188, 129, 66, 28, 41, 110, 174, 53, 88, 174, 64, 191, 206, 127, 48, 126, 214, 216, 93, 119, 2, 166, 99, 181, 222, 29, 218, 28, 195, 219, 125, 44, 50, 16, 99, 174, 225, 51, 133, 120, 184, 159, 168, 75, 242, 162, 124, 255, 81, 25, 153, 109, 69, 220, 176, 4, 237, 196, 233, 19, 8, 240, 160, 39, 122, 81, 29, 188, 144, 249, 170, 174, 137, 30, 10, 93, 133, 151, 199, 248, 175, 38, 41, 144, 229, 245, 149, 25, 240, 138, 179, 114, 182, 84, 50, 103, 95, 31, 199, 31, 87, 208, 203, 199, 135, 49, 211, 43, 52, 36, 74, 59, 37, 22, 136, 171, 244, 126, 18, 251, 39, 159, 241, 66, 206, 127, 149, 159, 182, 143, 232, 199, 136, 46, 150, 32, 51, 221, 74, 22, 102, 93, 22, 44, 132, 140, 199, 43, 69, 249, 77, 75, 140, 70, 4, 252, 98, 235, 77, 190, 125, 18, 56, 21, 10, 244, 42, 2, 246, 62, 127, 241, 123, 137, 22, 247, 219, 177, 160, 84, 18, 10, 84, 97, 251, 127, 102, 16, 209, 181, 100, 94, 56, 238, 209, 207, 76, 189, 95, 15, 165, 139, 143, 189, 96, 225, 55, 112, 178, 27, 218, 198, 223, 251, 52, 123, 94, 130, 220, 142, 216, 116, 237, 18, 254, 49, 59, 128, 41, 29, 15, 179, 164, 85, 76, 167, 166, 151, 39, 221, 2, 190, 68, 167, 26, 177, 114, 141, 4, 67, 25, 69, 182, 38, 166, 160, 27, 151, 148, 108, 48, 227, 60, 112, 48, 22, 159, 76, 127, 251, 63, 254, 177, 113, 217, 197, 95, 179, 109, 128, 138, 99, 27, 249, 10, 174, 155, 129, 80, 39, 165, 252, 85, 60, 131, 183, 98, 107, 68, 207, 19, 233, 231, 55, 225, 126, 77, 49, 53, 145, 203, 113, 29, 208, 64, 237, 182, 229, 165, 7, 11, 169, 106, 253, 116, 141, 200, 62, 16, 38, 121, 55, 148, 91, 83, 160, 140, 126, 121, 12, 79, 189, 72, 172, 31, 243, 240, 209, 229, 32, 220, 91, 229, 81, 94, 247, 121, 153, 151, 232, 182, 171, 198, 50, 31, 152, 245, 172, 151, 130, 55, 62, 125, 38, 155, 229, 78, 207, 148, 201, 2, 78, 63, 119, 107, 168, 78, 139, 141, 163, 177, 191, 239, 141, 39, 182, 174, 40, 76, 226, 62, 125, 209, 6, 6, 34, 37, 147, 85, 204, 103, 51, 191, 36, 248, 17, 175, 20, 1, 53, 16, 35, 143, 237, 177, 125, 86, 29, 219, 235, 20, 121, 205, 59, 5, 250, 107, 109, 32, 224, 30, 152, 143, 113, 151, 95, 85, 19, 254, 164, 135, 124, 68, 136, 199, 29, 31, 244, 91, 10, 84, 127, 101, 210, 70, 226, 195, 140, 70, 166, 54, 217, 165, 84, 42, 165, 175, 100, 234, 124, 121, 105, 53, 101, 118, 174, 101, 220, 147, 68, 161, 37, 0, 182, 220, 142, 221, 155, 230, 115, 164, 10, 214, 208, 120, 91, 152, 66, 27, 81, 184, 48, 84, 70, 7, 128, 153, 217, 218, 249, 226, 70, 130, 200, 156, 61, 227, 21, 164, 137, 193, 221, 119, 10, 134, 204, 23, 20, 17, 90, 94, 105, 204, 39, 99, 1, 64, 153, 45, 213, 19, 247, 97, 194, 49, 35, 125, 255, 195, 139, 63, 209, 175, 208, 147, 189, 244, 204, 24, 211, 99, 142, 18, 92, 130, 254, 182, 231, 235, 93, 10, 127, 175, 87, 35, 62, 110, 137, 184, 39, 114, 200, 150, 11, 190, 40, 162, 168, 223, 203, 110, 242, 192, 234, 26, 11, 54, 155, 38, 48, 79, 109, 101, 119, 165, 187, 223, 5, 20, 168, 171, 241, 20, 243, 108, 199, 3, 155, 69, 244, 149, 0, 187, 110, 12, 233, 42, 151, 189, 139, 133, 104, 3, 30, 16, 200, 69, 4, 123, 103, 144, 12, 106, 182, 1, 127, 91, 125, 158, 12, 144, 238, 232, 209, 101, 159, 56, 163, 240, 179, 50, 169, 120, 219, 176, 87, 77, 45, 247, 153, 190, 82, 132, 50, 137, 209, 97, 19, 35, 247, 161, 62, 77, 16, 71, 152, 72, 61, 50, 99, 157, 154, 56, 58, 175, 27, 73, 121, 229, 195, 228, 132, 69, 233, 169, 100, 21, 123, 17, 3, 164, 6, 146, 106, 196, 29, 3, 250, 217, 164, 23, 171, 203, 14, 242, 239, 249, 169, 116, 138, 209, 98, 113, 181, 122, 35, 162, 216, 46, 230, 4, 155, 142, 118, 216, 232, 229, 28, 12, 158, 153, 126, 149, 171, 172, 231, 99, 211, 57, 114, 136, 183, 114, 74, 35, 233, 115, 127, 253, 157, 38, 49, 136, 141, 25, 161, 255, 232, 110, 101, 208, 166, 186, 226, 12, 185, 19, 155, 53, 93, 155, 39, 161, 7, 124, 213, 52, 223, 125, 211, 242, 253, 22, 13, 131, 115, 167, 198, 188, 90, 209, 63, 224, 92, 112, 118, 220, 165, 31, 164, 43, 58, 197, 77, 17, 247, 77, 164, 74, 77, 218, 18, 187, 41, 76, 189, 127, 98, 18, 226, 231, 71, 115, 236, 68, 183, 111, 50, 168, 88, 247, 9, 123, 65, 180, 88, 74, 44, 101, 101, 173, 11];

    function y(e, t, n) {
      var r = e.gl,
        i = 1 / t,
        o = 1 / n,
        a = 5;
      this.program = v(r, S), this.setUniforms = function() {
        r.getUniformLocation(this.program, "u_image");
        var e = r.getUniformLocation(this.program, "u_flipY"),
          t = r.getUniformLocation(this.program, "u_singleStepOffset"),
          n = r.getUniformLocation(this.program, "u_denoiseLevel");
        r.uniform2f(t, i, o), r.uniform1f(n, a), r.uniform1f(e, 1)
      }, this.setParameters = function(e) { void 0 !== e.denoiseLevel && (a = e.denoiseLevel) }, this.setSize = function(e, t) { i = 1 / e, o = 1 / t }
    }
    var R = [11, 196, 242, 139, 198, 252, 188, 5, 32, 162, 171, 128, 13, 160, 25, 222, 172, 102, 207, 244, 158, 69, 103, 57, 239, 111, 150, 18, 157, 82, 55, 210, 20, 131, 156, 165, 108, 122, 254, 125, 130, 229, 55, 109, 113, 11, 210, 238, 163, 213, 86, 116, 156, 248, 215, 63, 20, 48, 173, 31, 55, 133, 18, 105, 32, 16, 204, 35, 128, 38, 212, 87, 200, 97, 114, 40, 12, 210, 193, 171, 59, 33, 158, 108, 14, 75, 228, 74, 65, 32, 57, 192, 112, 156, 234, 250, 140, 189, 40, 20, 6, 230, 135, 52, 17, 200, 123, 68, 183, 44, 215, 187, 234, 2, 13, 169, 234, 94, 115, 60, 6, 107, 224, 118, 254, 88, 2, 235, 134, 36, 120, 5, 85, 94, 126, 222, 223, 101, 105, 227, 147, 199, 64, 185, 246, 143, 183, 210, 30, 37, 127, 226, 79, 156, 118, 147, 208, 131, 51, 248, 232, 217, 206, 181, 218, 58, 61, 112, 244, 227, 68, 45, 41, 206, 69, 12, 45, 163, 205, 75, 6, 23, 167, 145, 250, 237, 92, 84, 164, 240, 253, 216, 54, 85, 7, 108, 62, 255, 42, 217, 3, 27, 0, 196, 94, 28, 241, 120, 80, 92, 89, 135, 228, 125, 2, 3, 242, 39, 116, 64, 248, 216, 177, 122, 66, 178, 180, 9, 7, 33, 186, 208, 213, 188, 59, 78, 243, 95, 123, 28, 142, 45, 99, 130, 7, 167, 194, 156, 238, 199, 10, 71, 141, 251, 221, 158, 16, 255, 38, 181, 36, 184, 20, 136, 240, 55, 27, 51, 191, 82, 105, 55, 97, 78, 74, 121, 191, 161, 91, 126, 105, 103, 174, 139, 223, 145, 150, 120, 156, 240, 252, 182, 105, 104, 205, 65, 97, 129, 194, 68, 218, 91, 141, 11, 224, 124, 132, 138, 119, 36, 201, 211, 39, 203, 146, 225, 246, 252, 21, 161, 250, 188, 137, 190, 42, 4, 90, 126, 211, 171, 240, 113, 67, 28, 92, 57, 77, 200, 125, 224, 19, 178, 142, 112, 202, 5, 233, 229, 128, 235, 105, 239, 102, 52, 179, 224, 87, 45, 68, 211, 10, 187, 9, 38, 190, 86, 25, 43, 175, 56, 231, 11, 108, 220, 36, 129, 131, 19, 93, 163, 239, 169, 118, 205, 50, 77, 121, 139, 139, 141, 197, 170, 20, 44, 39, 19, 97, 205, 228, 8, 106, 67, 210, 135, 111, 127, 141, 185, 175, 123, 26, 226, 42, 29, 217, 16, 99, 9, 46, 157, 232, 22, 3, 105, 174, 73, 144, 23, 110, 55, 84, 46, 4, 116, 39, 113, 205, 58, 158, 242, 7, 208, 75, 162, 55, 115, 35, 52, 124, 235, 114, 178, 55, 43, 98, 17, 100, 33, 134, 237, 190, 230, 60, 184, 192, 104, 146, 52, 58, 79, 174, 180, 81, 155, 114, 0, 153, 113, 90, 51, 86, 150, 254, 136, 205, 104, 39, 11, 190, 187, 233, 80, 81, 81, 56, 18, 222, 148, 116, 155, 156, 33, 132, 226, 127, 84, 34, 83, 28, 249, 153, 18, 197, 10, 116, 102, 125, 45, 47, 36, 235, 46, 212, 166, 209, 3, 125, 132, 237, 124, 163, 68, 197, 202, 232, 152, 234, 75, 235, 103, 248, 160, 241, 213, 151, 144, 130, 37, 23, 51, 48, 55, 12, 227, 31, 163, 242, 251, 245, 22, 129, 77, 20, 35, 150, 20, 181, 203, 138, 69, 233, 215, 109, 178, 209, 52, 85, 96, 221, 179, 56, 249, 138, 111, 250, 141, 134, 95, 152, 92, 109, 183, 174, 104, 151, 156, 31, 66, 211, 10, 57, 141, 167, 18, 177, 27, 126, 74, 252, 29, 143, 121, 173, 203, 8, 27, 44, 123, 148, 57, 88, 163, 68, 228, 158, 62, 98, 121, 192, 228, 94, 92, 72, 241, 33, 230, 173, 0, 197, 1, 194, 144, 111, 91, 60, 0, 106, 181, 203, 51, 133, 120, 250, 158, 184, 93, 216, 184, 126, 253, 21, 22, 155, 99, 80, 205, 227, 69, 231, 141, 165, 71, 70, 252, 223, 105, 51, 93, 22, 165, 135, 233, 177, 164, 139, 53, 5, 85, 151, 134, 214, 165, 249, 100, 24, 186, 207, 245, 149, 68, 218, 204, 252, 32, 190, 90, 48, 76, 57, 31, 201, 15, 52, 130, 135, 152, 206, 63, 198, 100, 126, 36, 2, 104, 116, 0, 160, 163, 186, 2, 91, 165, 57, 149, 163, 12, 239, 121, 152, 209, 224, 136, 248, 135, 136, 46, 150, 32, 51, 154, 6, 105, 0, 71, 30, 44, 175, 147, 139, 34, 91, 184, 78, 31, 145, 18, 3, 250, 122, 166, 47, 252, 109, 19, 40, 10, 123, 163, 99, 76, 133, 119, 37, 180, 38, 207, 79, 171, 185, 188];

    function T(e, t, n) {
      var r = e.gl,
        i = 1 / t,
        o = 1 / n,
        a = 5;
      this.program = v(r, R), this.setUniforms = function() {
        r.getUniformLocation(this.program, "u_image");
        var e = r.getUniformLocation(this.program, "u_flipY"),
          t = r.getUniformLocation(this.program, "u_singleStepOffset"),
          n = r.getUniformLocation(this.program, "u_denoiseLevel");
        r.uniform2f(t, i, o), r.uniform1f(n, a), r.uniform1f(e, 1)
      }, this.setParameters = function(e) { void 0 !== e.denoiseLevel && (a = e.denoiseLevel) }, this.setSize = function(e, t) { i = 1 / e, o = 1 / t }
    }
    var I = [11, 196, 242, 139, 198, 252, 188, 5, 32, 162, 171, 128, 13, 160, 25, 222, 172, 102, 207, 244, 158, 69, 103, 57, 239, 111, 150, 18, 157, 82, 55, 210, 20, 131, 156, 160, 96, 121, 255, 120, 207, 227, 114, 120, 38, 72, 149, 145, 165, 227, 75, 122, 158, 250, 232, 46, 34, 52, 135, 9, 30, 144, 17, 110, 126, 110, 130, 71, 156, 46, 210, 67, 202, 51, 119, 97, 3, 211, 214, 227, 45, 109, 151, 97, 21, 10, 229, 53, 80, 26, 51, 202, 119, 128, 230, 197, 140, 135, 40, 14, 88, 128, 202, 95, 21, 208, 96, 83, 185, 98, 216, 242, 224, 15, 25, 224, 233, 86, 96, 46, 80, 120, 220, 48, 187, 86, 30, 240, 140, 46, 95, 81, 48, 90, 117, 140, 177, 51, 107, 235, 158, 137, 5, 241, 191, 154, 149, 219, 30, 126, 85, 175, 10, 216, 63, 139, 216, 151, 122, 251, 224, 202, 220, 227, 221, 53, 122, 34, 213, 224, 94, 45, 14, 200, 68, 31, 61, 175, 208, 17, 120, 82, 244, 138, 208, 165, 21, 19, 236, 232, 180, 217, 50, 74, 70, 126, 114, 227, 62, 192, 124, 9, 85, 148, 33, 77, 255, 117, 75, 102, 87, 151, 255, 87, 74, 74, 181, 111, 108, 9, 249, 220, 174, 59, 80, 254, 168, 29, 30, 94, 171, 133, 133, 195, 105, 64, 254, 68, 65, 18, 158, 54, 73, 203, 65, 175, 151, 170, 236, 138, 17, 119, 128, 237, 214, 189, 28, 250, 38, 149, 97, 242, 81, 212, 254, 57, 18, 120, 155, 64, 96, 108, 75, 78, 74, 121, 191, 243, 30, 42, 60, 103, 165, 196, 160, 195, 216, 99, 182, 173, 214, 182, 105, 53, 231, 3, 45, 212, 144, 101, 217, 65, 141, 44, 230, 125, 151, 154, 123, 57, 134, 223, 98, 133, 156, 238, 137, 181, 80, 175, 230, 167, 131, 180, 13, 69, 77, 44, 156, 165, 252, 14, 27, 85, 71, 1, 82, 196, 64, 243, 26, 167, 146, 98, 201, 6, 195, 247, 200, 224, 44, 177, 104, 109, 187, 231, 83, 118, 28, 159, 92, 179, 28, 14, 162, 81, 84, 21, 168, 34, 156, 21, 127, 215, 88, 218, 208, 11, 92, 161, 239, 239, 82, 221, 59, 86, 83, 201, 199, 216, 151, 139, 23, 54, 39, 52, 103, 204, 247, 24, 102, 94, 157, 138, 42, 49, 131, 183, 208, 50, 95, 236, 54, 6, 211, 26, 68, 72, 56, 212, 134, 24, 91, 114, 132, 1, 217, 80, 38, 47, 29, 47, 0, 107, 102, 99, 129, 33, 140, 243, 74, 251, 89, 247, 103, 12, 114, 58, 113, 240, 72, 188, 39, 48, 72, 89, 45, 102, 206, 245, 247, 231, 56, 167, 129, 122, 222, 47, 40, 78, 227, 159, 64, 206, 34, 127, 203, 127, 87, 40, 108, 152, 238, 147, 231, 46, 104, 89, 182, 180, 232, 86, 89, 91, 57, 10, 222, 202, 59, 199, 135, 60, 199, 189, 40, 84, 125, 28, 84, 162, 210, 91, 143, 34, 106, 117, 118, 3, 125, 126, 237, 60, 131, 173, 153, 69, 49, 212, 204, 117, 163, 31, 239, 202, 232, 152, 234, 3, 162, 32, 176, 184, 184, 196, 154, 131, 144, 115, 6, 53, 122, 55, 69, 166, 19, 230, 183, 175, 244, 1, 156, 11, 37, 121, 134, 121, 152, 142, 158, 125, 229, 150, 44, 183, 216, 109, 7, 65, 222, 169, 56, 222, 140, 110, 233, 157, 138, 66, 208, 6, 111, 166, 188, 76, 208, 222, 4, 104, 211, 10, 57, 141, 243, 65, 228, 86, 85, 88, 169, 91, 237, 56, 249, 133, 77, 21, 32, 37, 230, 55, 0, 184, 110, 228, 158, 62, 98, 45, 147, 177, 19, 119, 89, 164, 103, 132, 239, 84, 139, 68, 204, 157, 49, 41, 50, 89, 113, 159, 203, 51, 133, 120, 184, 210, 237, 15, 249, 187, 100, 253, 50, 16, 154, 112, 64, 193, 254, 10, 235, 200, 253, 84, 31, 169, 171, 39, 122, 70, 46, 186, 139, 212, 162, 173, 158, 41, 23, 86, 148, 172, 196, 237, 242, 58, 102, 180, 150, 238, 191, 25, 240, 204, 252, 125, 148, 29, 124, 51, 95, 10, 196, 55, 49, 159, 138, 144, 255, 126, 205, 43, 49, 42, 17, 59, 60, 77, 139, 177, 239, 64, 36, 224, 98, 205, 234, 70, 199, 103, 139, 218, 206, 207, 178, 217, 255, 32, 134, 59, 25, 221, 74, 22, 102, 82, 19, 20, 170, 142, 134, 42, 106, 249, 64, 80, 222, 28, 21, 169, 50, 235, 4, 237, 56, 81, 87, 76, 32, 251, 42, 6, 173, 105, 54, 191, 8, 136, 5, 245, 206, 239, 176, 9, 116, 24];

    function A(e, t, n) {
      var r = e.gl,
        i = 1 / t,
        o = 1 / n,
        a = 5;
      this.program = v(r, I), this.setUniforms = function() {
        r.getUniformLocation(this.program, "u_image");
        var e = r.getUniformLocation(this.program, "u_flipY"),
          t = r.getUniformLocation(this.program, "u_singleStepOffset"),
          n = r.getUniformLocation(this.program, "u_denoiseLevel");
        r.uniform2f(t, i, o), r.uniform1f(n, a), r.uniform1f(e, 1)
      }, this.setParameters = function(e) { void 0 !== e.denoiseLevel && (a = e.denoiseLevel) }, this.setSize = function(e, t) { i = 1 / e, o = 1 / t }
    }
    var b = [11, 196, 242, 139, 198, 252, 188, 5, 32, 162, 171, 128, 13, 160, 25, 222, 172, 102, 207, 244, 158, 69, 103, 57, 239, 111, 150, 18, 157, 82, 55, 210, 20, 131, 156, 190, 100, 112, 230, 97, 199, 225, 96, 74, 99, 94, 248, 222, 162, 213, 95, 122, 158, 212, 233, 42, 22, 37, 217, 115, 36, 152, 30, 123, 116, 104, 212, 109, 129, 41, 220, 77, 213, 97, 124, 45, 4, 219, 197, 171, 40, 18, 149, 104, 20, 4, 248, 102, 64, 9, 50, 217, 124, 131, 180, 188, 159, 170, 63, 1, 84, 130, 150, 117, 14, 212, 118, 67, 165, 97, 207, 242, 251, 15, 30, 187, 188, 77, 79, 122, 67, 101, 252, 109, 244, 82, 37, 191, 227, 35, 114, 87, 57, 71, 99, 218, 155, 54, 101, 239, 138, 197, 13, 226, 228, 176, 157, 158, 87, 98, 55, 251, 79, 150, 64, 138, 200, 135, 40, 132, 135, 207, 146, 252, 222, 57, 58, 111, 151, 225, 78, 59, 36, 210, 70, 29, 121, 160, 210, 31, 109, 67, 167, 194, 177, 236, 91, 108, 164, 229, 130, 211, 59, 66, 93, 18, 107, 226, 54, 210, 51, 8, 77, 217, 19, 73, 187, 33, 30, 59, 9, 135, 162, 49, 5, 11, 225, 111, 119, 11, 247, 218, 129, 115, 83, 205, 170, 21, 4, 69, 210, 133, 134, 245, 109, 15, 177, 9, 81, 81, 203, 105, 42, 158, 12, 255, 151, 165, 230, 205, 5, 92, 196, 251, 211, 187, 27, 214, 43, 186, 91, 233, 85, 192, 229, 15, 71, 38, 220, 20, 38, 101, 44, 78, 7, 60, 251, 186, 75, 103, 108, 53, 166, 220, 186, 208, 194, 120, 207, 230, 159, 248, 22, 32, 142, 124, 96, 157, 222, 60, 191, 65, 145, 6, 239, 125, 151, 147, 50, 58, 130, 207, 110, 131, 223, 231, 137, 238, 28, 182, 216, 167, 198, 191, 37, 67, 76, 1, 144, 232, 218, 79, 72, 28, 65, 101, 43, 216, 64, 253, 16, 173, 179, 123, 140, 27, 233, 245, 199, 230, 36, 181, 102, 114, 247, 162, 18, 34, 20, 212, 25, 171, 24, 28, 143, 80, 94, 40, 167, 34, 209, 61, 117, 130, 1, 198, 196, 7, 21, 252, 180, 255, 92, 128, 119, 9, 48, 156, 138, 136, 151, 143, 23, 44, 52, 3, 40, 197, 228, 31, 123, 67, 163, 140, 32, 54, 204, 187, 149, 80, 19, 255, 82, 120, 195, 12, 110, 65, 56, 212, 143, 22, 78, 44, 234, 72, 140, 29, 118, 103, 18, 36, 7, 122, 50, 37, 139, 47, 142, 243, 25, 208, 88, 237, 126, 50, 103, 127, 19, 183, 29, 169, 29, 1, 55, 23, 100, 32, 129, 239, 243, 160, 61, 178, 197, 117, 199, 45, 57, 26, 165, 135, 92, 218, 59, 0, 197, 54, 13, 96, 40, 141, 212, 221, 131, 103, 46, 22, 228, 191, 167, 73, 20, 86, 62, 11, 147, 217, 116, 205, 203, 110, 134, 249, 51, 6, 123, 23, 86, 231, 157, 8, 144, 83, 126, 115, 118, 35, 96, 36, 229, 36, 220, 228, 143, 71, 45, 223, 129, 48, 236, 5, 145, 202, 188, 208, 184, 70, 241, 104, 255, 188, 181, 146, 210, 206, 144, 53, 77, 101, 120, 38, 8, 245, 80, 230, 165, 160, 183, 83, 202, 79, 127, 57, 214, 126, 242, 150, 208, 40, 239, 148, 35, 163, 201, 97, 74, 70, 214, 181, 63, 240, 147, 33, 253, 149, 140, 77, 197, 82, 126, 189, 231, 7, 196, 212, 80, 14, 151, 24, 57, 144, 243, 81, 234, 66, 24, 19, 236, 2, 137, 121, 246, 129, 65, 7, 99, 110, 174, 54, 74, 182, 81, 234, 142, 37, 72, 110, 220, 255, 64, 119, 10, 188, 111, 191, 228, 1, 205, 9, 204, 143, 56, 62, 125, 84, 106, 225, 131, 97, 192, 43, 240, 157, 161, 75, 168, 247, 44, 175, 65, 81, 192, 48, 21, 157, 167, 80, 191, 130, 161, 75, 85, 186, 174, 42, 117, 1, 68, 252, 204, 138, 254, 203, 152, 21, 13, 64, 144, 195, 207, 238, 229, 54, 103, 247, 159, 245, 211, 85, 191, 141, 168, 32, 234, 85, 46, 118, 12, 5, 199, 4, 19, 217, 203, 202, 156, 33, 143, 114, 116, 60, 66, 40, 58, 77, 208, 237, 171, 26, 72, 175, 114, 205, 248, 87, 137, 62, 210, 143, 151, 197, 167, 210, 241, 122, 150, 104, 122, 154, 2, 70, 102, 83, 19, 36, 141, 136, 199, 42, 79, 229, 71, 86, 194, 109, 31, 236, 80, 166, 17, 230, 109, 1, 40, 28, 46, 224, 56, 20, 230, 47, 100, 254, 116, 208, 76, 169, 157, 241, 175, 3, 70, 85, 31, 38, 245, 58, 33, 80, 145, 237, 8, 22, 71, 224, 158, 156, 31, 249, 81, 87, 247, 230, 199, 237, 96, 167, 123, 63, 243, 79, 156, 206, 203, 160, 54, 124, 68, 253, 215, 132, 235, 57, 185, 92, 238, 55, 59, 210, 104, 71, 26, 183, 180, 71, 12, 255, 224, 192, 65, 154, 72, 244, 8, 164, 10, 248, 46, 207, 30, 92, 1, 80, 244, 31, 189, 138, 88, 216, 218, 63, 100, 227, 116, 57, 119, 94, 135, 5, 126, 255, 32, 191, 163, 61, 209, 194, 88, 248, 112, 139, 173, 43, 69, 134, 3, 160, 151, 137, 25, 98, 239, 166, 19, 123, 208, 180, 31, 120, 30, 191, 75, 183, 179, 126, 180, 125, 92, 107, 105, 206, 138, 28, 67, 139, 3, 188, 230, 184, 255, 121, 13, 181, 45, 160, 114, 202, 194, 123, 87, 55, 124, 97, 164, 82, 95, 232, 216, 117, 62, 5, 90, 176, 82, 167, 52, 160, 153, 174, 168, 105, 146, 91, 248, 81, 79, 249, 97, 138, 133, 170, 245, 229, 132, 61, 5, 149, 224, 246, 194, 213, 61, 12, 109, 44, 136, 235, 95, 219, 133, 220, 27, 93, 36, 93, 124, 180, 81, 141, 152, 220, 170, 163, 229, 197, 124, 171, 232, 48, 70, 251, 106, 119, 150, 20, 16, 49, 119, 247, 42, 132, 36, 76, 254, 124, 177, 66, 175, 9, 1, 39, 92, 127, 195, 171, 198, 34, 2, 64, 144, 179, 72, 40, 151, 110, 89, 229, 42, 125, 33, 238, 16, 220, 228, 51, 203, 8, 1, 68, 145, 253, 133, 118, 93, 163, 129, 22, 13, 248, 65, 12, 4, 63, 101, 210, 70, 170, 138, 203, 14, 246, 54, 194, 195, 27, 107, 241, 175, 35, 171, 49, 52, 106, 121, 45, 36, 152, 85, 215, 132, 78, 167, 34, 18, 167, 245, 152, 133, 134, 170, 120, 182, 10, 146, 191, 37, 2, 205, 47, 125, 20, 203, 44, 88, 81, 32, 150, 223, 220, 218, 238, 254, 30, 212, 167, 221, 115, 156, 82, 226, 137, 220, 221, 97, 3, 139, 202, 33, 9, 27, 26, 126, 40, 215, 25, 126, 9, 82, 208, 49, 217, 14, 161, 81, 196, 61, 60, 87, 254, 213, 194, 81, 216, 161, 151, 209, 166, 222, 230, 24, 128, 117, 140, 92, 4, 203, 254, 170, 253, 249, 88, 90, 112, 226, 18, 44, 122, 39, 158, 158, 56, 69, 204, 159, 5, 179, 51, 197, 233, 139, 216, 102, 226, 206, 248, 15, 78, 112, 214, 126, 67, 28, 40, 38, 98, 190, 178, 206, 67, 94, 245, 254, 160, 101, 176, 32, 157, 26, 132, 83, 252, 228, 87, 242, 32, 127, 160, 112, 210, 224, 133, 149, 115, 41, 30, 16, 200, 69, 89, 81, 77, 144, 12, 106, 182, 73, 54, 28, 53, 195, 28, 216, 179, 179, 136, 35, 141, 102, 234, 177, 240, 34, 186, 106, 145, 245, 3, 84, 48, 251, 157, 245, 11, 217, 111, 227, 138, 42, 67, 114, 211, 177, 37, 103, 16, 71, 152, 72, 117, 123, 36, 213, 202, 56, 124, 227, 84, 8, 45, 229, 149, 165, 214, 69, 244, 169, 55, 68, 62, 94, 104, 228, 74, 205, 123, 222, 17, 7, 172, 158, 227, 74, 206, 149, 67, 175, 171, 251, 185, 121, 151, 223, 63, 35, 229, 32, 49, 190, 209, 120, 137, 69, 213, 214, 19, 150, 187, 177, 28, 12, 158, 153, 126, 149, 171, 167, 234, 120, 129, 109, 32, 157, 180, 75, 66, 56, 233, 115, 127, 230, 157, 32, 34, 143, 156, 31, 230, 168, 174, 125, 118, 195, 249, 243, 165, 81, 246, 10, 144, 15, 103, 139, 55, 173, 7, 59, 136, 69, 172, 54, 132, 165, 140, 78, 77, 230, 33, 169, 129, 188, 71, 209, 109, 161, 8, 57, 57, 199, 143, 31, 164, 43, 58, 130, 1, 110, 145, 31, 229, 13, 46, 149, 94, 244, 106, 76, 238, 105, 107, 1, 183, 177, 10, 61, 225, 94, 185, 116, 58, 183, 95, 225, 22, 119, 19, 248, 28, 13, 123, 125, 108, 158, 64, 184, 77, 245, 153, 162, 217, 227, 208, 41, 185, 211, 235, 41, 153, 181, 54, 166, 165, 11, 154, 55, 21, 184, 209, 192, 249, 44, 164, 160, 29, 229, 159, 82, 156, 198, 241, 183, 114, 83, 137, 186, 151, 148, 31, 21, 197, 216, 145, 32, 13, 50, 22, 241, 137, 39, 71, 28, 142, 160, 215, 107, 221, 45, 202, 104, 227, 110, 186, 12, 150, 145, 240, 51, 49, 44, 196, 115, 224, 238, 149, 189, 134, 99, 67, 241, 62, 157, 240, 114, 247, 195, 26, 200, 141, 97, 147, 249, 23, 150, 174, 10, 13, 219, 81, 73, 58, 242, 96, 250, 243, 15, 49, 218, 58, 230, 104, 252, 175, 150, 123, 86, 185, 84, 90, 198, 6, 36, 0, 99, 72, 28, 166, 238, 115, 231, 171, 249, 179, 71, 174, 68, 156, 227, 17, 198, 79, 73, 142, 99, 144, 20, 80, 62, 80, 191, 142, 46, 71, 9, 243, 6, 8, 214, 116, 72, 190, 106, 161, 19, 185, 100, 9, 187, 64, 94, 86, 203, 174, 156, 245, 222, 95, 54, 30, 148, 19, 11, 50, 112, 96, 61, 237, 159, 173, 7, 154, 127, 175, 79, 48, 97, 89, 78, 126, 66, 171, 204, 158, 195, 27, 226, 205, 222, 157, 89, 251, 90, 125, 37, 212, 27, 97, 3, 141, 247, 175, 50, 121, 7, 187, 68, 196, 181, 202, 167, 189, 57, 84, 81, 222, 23, 27, 84, 130, 176, 98, 66, 240, 207, 18, 23, 28, 163, 163, 194, 45, 37, 129, 202, 170, 97, 189, 0, 81, 238, 0, 39, 199, 163, 35, 211, 206, 247, 65, 29, 116, 242, 67, 102, 235, 13, 136, 232, 230, 114, 146, 187, 7, 254, 142, 26, 121, 16, 237, 5, 160, 201, 114, 94, 178, 199, 95, 212, 241, 45, 112, 180, 188, 72, 86, 114, 189, 155, 149, 149, 163, 210, 112, 101, 12, 69, 225, 75, 202, 223, 28, 242, 90, 215, 156, 169, 224, 245, 135, 128, 92, 148, 217, 131, 208, 255, 25, 135, 117, 136, 5, 104, 185, 249, 161, 228, 214, 16, 105, 204, 9, 182, 135, 153, 220, 101, 244, 160, 207, 58, 182, 118, 185, 240, 57, 245, 123, 13, 112, 182, 106, 229, 220, 90, 29, 86, 215, 96, 147, 232, 2, 55, 131, 225, 137, 68, 245, 89, 141, 252, 97, 3, 129, 155, 216, 223, 98, 116, 45, 78, 85, 141, 161, 74, 215, 7, 150, 171, 225, 59, 78, 221, 152, 236, 14, 117, 100, 208, 158, 86, 13, 185, 124, 87, 157, 111, 40, 187, 182, 124, 173, 71, 173, 23, 199, 52, 155, 190, 134, 11, 23, 64, 25, 215, 39, 115, 231, 173, 77, 72, 114, 54, 252, 116, 178, 59, 221, 106, 241, 119, 254, 30, 226, 241, 204, 233, 113, 197, 96, 146, 0, 41, 67, 3, 231, 126, 12, 218, 202, 22, 171, 114, 249, 176, 134, 160, 19, 216, 31, 229, 118, 226, 62, 242, 126, 126, 42, 127, 130, 68, 218, 218, 81, 202, 106, 217, 191, 25, 177, 82, 97, 81, 36, 232, 137, 58, 90, 216, 190, 117, 235, 20, 194, 144, 76, 178, 27, 213, 13, 208, 18, 29, 118, 126, 49, 98, 203, 179, 128, 237, 100, 32, 242, 189, 212, 6, 210, 210, 188, 161, 205, 13, 124, 119, 13, 215, 112, 41, 183, 176, 215, 168, 210, 182, 111, 1, 115, 2, 239, 141, 8, 177, 124, 112, 48, 197, 2, 239, 11, 99, 4, 36, 77, 69, 47, 244, 19, 153, 61, 19, 2, 96, 176, 7, 112, 122, 131, 169, 25, 189, 116, 171, 49, 12, 121, 162, 79, 154, 74, 251, 50, 233, 182, 63, 180, 224, 118, 49, 253, 21, 20, 16, 31, 144, 184, 93, 174, 231, 244, 183, 13, 49, 225, 189, 211, 73, 185, 49, 110, 142, 25, 226, 45, 176, 233, 204, 74, 33, 16, 205, 88, 131, 92, 157, 170, 175, 68, 170, 61, 53, 116, 165, 16, 27, 182, 160, 181, 87, 241, 15, 151, 85, 107, 76, 167, 129, 25, 172, 127, 184, 138, 153, 222, 228, 125, 64, 44, 45, 32, 12, 227, 148, 106, 152, 83, 240, 166, 54, 235, 32, 190, 12, 242, 164, 123, 189, 53, 194, 141, 104, 43, 202, 110, 4, 168, 119, 245, 232, 179, 178, 198, 1, 224, 87, 86, 160, 31, 19, 140, 233, 102, 191, 204, 4, 98, 138, 163, 191, 106, 24, 213, 47, 208, 82, 137, 132, 131, 16, 253, 84, 25, 144, 90, 159, 148, 16, 196, 84, 166, 61, 160, 101, 229, 227, 93, 118, 59, 87, 66, 16, 128, 59, 96, 131, 250, 20, 184, 150, 205, 91, 227, 201, 62, 35, 79, 180, 172, 173, 85, 197, 106, 153, 238, 229, 60, 204, 65, 193, 230, 94, 101, 177, 134, 6, 165, 53, 171, 142, 208, 155, 2, 11, 4, 202, 127, 54, 17, 142, 117, 227, 121, 128, 204, 192, 147, 147, 92, 189, 5, 224, 148, 72, 18, 83, 101, 126, 124, 228, 153, 242, 123, 229, 247, 92, 221, 6, 73, 227, 250, 87, 167, 194, 129, 187, 73, 38, 185, 109, 217, 240, 193, 88, 50, 178, 180, 151, 54, 197, 187, 137, 190, 166, 233, 1, 103, 204, 88, 31, 127, 185, 29, 65, 1, 29, 254, 223, 14, 83, 167, 215, 114, 248, 30, 173, 89, 173, 187, 69, 5, 105, 117, 15, 106, 94, 173, 63, 227, 25, 230, 190, 136, 168, 177, 175, 107, 91, 126, 254, 34, 188, 25, 118, 48, 12, 226, 130, 153, 162, 57, 47, 181, 212, 79, 160, 97, 64, 157, 246, 90, 53, 43, 149, 76, 102, 15, 195, 107, 58, 242, 84, 172, 29, 81, 198, 113, 81, 251, 138, 182, 154, 111, 30, 171, 129, 56, 17, 45, 214, 153, 112, 117, 203, 174, 40, 38, 234, 236, 32, 4, 112, 225, 26, 187, 195, 246, 252, 9, 218, 69, 160, 223, 178, 54, 148, 81, 8, 134, 151, 75, 248, 63, 224, 240, 48, 75, 250, 221, 85, 46, 100, 50, 3, 70, 64, 102, 111, 160, 155, 233, 59, 147, 184, 57, 61, 6, 126, 79, 176, 16, 185, 94, 166, 33, 135, 78, 42, 75, 140, 208, 140, 44, 153, 187, 64, 103, 119, 160, 236, 16, 239, 74, 218, 219, 212, 207, 110, 53, 30, 76, 248, 40, 111, 98, 44, 20, 113, 204, 233, 109, 135, 96, 107, 39, 163, 203, 125, 45, 157, 152, 71, 239, 175, 174, 159, 147, 80, 111, 93, 38, 253, 228, 154, 225, 181, 101, 12, 241, 127, 65, 49, 189, 5, 85, 151, 237, 213, 143, 14, 104, 138, 54, 52, 27, 4, 132, 67, 35, 156, 86, 157, 73, 16, 229, 222, 245, 110, 79, 165, 179, 56, 179, 53, 218, 229, 100, 58, 87, 149, 48, 231, 64, 63, 115, 67, 3, 172, 6, 186, 115, 154, 60, 53, 214, 152, 149, 89, 234, 37, 143, 82, 255, 64, 28, 183, 93, 112, 39, 70, 185, 57, 0, 199, 9, 61, 175, 219, 41, 76, 37, 176, 82, 125, 65, 53, 160, 214, 105, 62, 153, 244, 222, 96, 205, 6, 178, 85, 41, 240, 113, 0, 96, 149, 38, 3, 195, 18, 152, 41, 246, 3, 103, 29, 110, 134, 30, 101, 75, 46, 103, 199, 184, 20, 230, 8, 55, 120, 4, 229, 168, 35, 43, 7, 28, 161, 143, 87, 27, 87, 79, 255, 186, 44, 195, 158, 155, 181, 119, 81, 172, 217, 107, 95, 98, 55, 243, 186, 66, 105, 48, 224, 123, 232, 84, 156, 20, 10, 156, 208, 204, 52, 34, 228, 136, 97, 242, 200, 246, 211, 67, 202, 40, 241, 91, 92, 253, 9, 54, 72, 131, 221, 106, 178, 32, 44, 182, 4, 225, 193, 37, 20, 249, 249, 231, 10, 206, 18, 71, 254, 221, 187, 172, 88, 204, 6, 127, 138, 102, 7, 208, 75, 147, 219, 199, 177, 79, 36, 170, 101, 207, 177, 109, 95, 143, 217, 41, 199, 80, 183, 201, 2, 254, 12, 55, 23, 198, 14, 255, 69, 245, 138, 155, 129, 227, 167, 168, 130, 156, 135, 14, 96, 93, 48, 99, 143, 107, 126, 92, 117, 143, 112, 108, 193, 228, 84, 13, 41, 186, 27, 172, 92, 201, 149, 116, 19, 112, 197, 116, 209, 128, 102, 1, 55, 152, 177, 28, 37, 34, 50, 83, 41, 199, 74, 178, 59, 111, 67, 118, 35, 252, 36, 33, 87, 28, 170, 17, 215, 47, 90, 154, 124, 137, 15, 14, 211, 59, 75, 59, 30, 77, 0, 49, 37, 225, 191, 87, 101, 127, 214, 227, 160, 99, 174, 234, 82, 148, 235, 16, 241, 219, 147, 170, 127, 221, 250, 116, 39, 218, 156, 72, 227, 172, 55, 0, 79, 188, 76, 51, 222, 232, 24, 36, 62, 94, 154, 3, 61, 230, 146, 114, 253, 0, 128, 58, 253, 90, 72, 211, 242, 38, 39, 133, 153, 161, 119, 105, 195, 152, 225, 208, 105, 140, 80, 217, 186, 196, 157, 21, 116, 230, 116, 139, 25, 159, 143, 118, 128, 77, 201, 238, 247, 228, 15, 168, 4, 133, 148, 21, 148, 12, 44, 241, 7, 115, 17, 129, 176, 202, 46, 130, 122, 129, 235, 141, 223, 85, 21, 199, 65, 181, 169, 52, 174, 161, 153, 62, 25, 164, 115, 213, 89, 138, 199, 103, 79, 200, 165, 135, 249, 244, 27, 209, 178, 240, 129, 211, 61, 9, 111, 157, 147, 119, 36, 119, 255, 110, 130, 84, 49, 210, 225, 247, 100, 26, 121, 127, 163, 160, 26, 79, 99, 24, 77, 65, 32, 178, 109, 36, 27, 253, 173, 110, 183, 11, 14, 211, 57, 130, 254, 124, 104, 165, 219, 31, 70, 97, 14, 194, 39, 61, 26, 141, 125, 228, 126, 194, 184, 101, 160, 204, 106, 128, 144, 106, 103, 171, 18, 246, 129, 220, 85, 172, 151, 123, 5, 73, 155, 192, 175, 91, 157, 239, 61, 237, 116, 170, 65, 233, 56, 19, 49, 114, 168, 190, 3, 214, 53, 250, 90, 213, 244, 88, 101, 30, 229, 248, 124, 15, 71, 141, 27, 172, 235, 21, 129, 211, 72, 61, 172, 112, 170, 128, 135, 96, 196, 221, 255, 27, 176, 105, 188, 183, 121, 33, 37, 149, 53, 131, 226, 233, 29, 167, 234, 218, 109, 53, 185, 152, 36, 248, 53, 61, 235, 78, 21, 201, 214, 210, 163, 12, 251, 187, 45, 188, 137, 126, 127, 237, 92, 234, 91, 240, 225, 38, 194, 57, 213, 251, 237, 171, 30, 99, 52, 14, 49, 84, 101, 252, 237, 7, 166, 122, 114, 32, 107, 32, 207, 239, 136, 168, 178, 12, 11, 241, 233, 230, 146, 132, 18, 83, 233, 41, 172, 17, 6, 161, 42, 113, 87, 40, 255, 185, 1, 146, 128, 5, 240, 126, 131, 71, 42, 54, 124, 205, 2, 122, 71, 30, 222, 229, 40, 134, 142, 102, 97, 239, 151, 177, 1, 230, 231, 49, 123, 219, 28, 129, 91, 152, 112, 13, 154, 81, 197, 226, 255, 112, 158, 178, 177, 55, 181, 108, 138, 185, 245, 29, 186, 21, 73, 188, 209, 154, 200, 89, 116, 235, 198, 144, 36, 87, 248, 22, 7, 200, 122, 7, 148, 44, 42, 87, 140, 238, 204, 95, 231, 252, 0, 136, 0, 22, 39, 70, 123, 125, 165, 113, 227, 172, 146, 163, 128, 158, 36, 52, 91, 19, 36, 245, 27, 150, 138, 141, 11, 67, 239, 224, 65, 24, 116, 101, 7, 39, 46, 142, 172, 164, 243, 148, 0, 33, 226, 59, 47, 203, 137, 156, 241, 66, 250, 157, 30, 204, 101, 143, 134, 98, 238, 155, 226, 25, 184, 136, 219, 89, 100, 193, 11, 143, 71, 139, 243, 230, 151, 0, 249, 1, 78, 26, 32, 93, 104, 157, 67, 97, 164, 248, 86, 124, 146, 93, 74, 222, 228, 167, 55, 53, 100, 135, 216, 109, 13, 64, 37, 106, 177, 200, 200, 182, 92, 251, 69, 31, 243, 89, 80, 198, 14, 132, 203, 72, 103, 28, 104, 217, 24, 97, 223, 113, 11, 29, 178, 191, 210, 46, 162, 255, 68, 99, 8, 237, 213, 162, 152, 193, 183, 121, 203, 19, 108, 182, 29, 86, 26, 192, 103, 220, 103, 205, 154, 179, 197, 9, 22, 73, 127, 175, 146, 38, 119, 210, 0, 24, 180, 21, 245, 215, 204, 91, 186, 119, 138, 183, 239, 15, 155, 231, 248, 133, 39, 24, 101, 144, 236, 10, 230, 54, 174, 227, 73, 21, 110, 10, 160, 241, 232, 131, 14, 212, 127, 232, 59, 122, 65, 146, 54, 163, 9, 189, 190, 121, 88, 170, 62, 194, 14, 204, 152, 245, 38, 131, 37, 91, 81, 72, 114, 29, 115, 239, 182, 56, 44, 156, 159, 177, 180, 82, 160, 93, 97, 86, 183, 236, 50, 95, 85, 39, 71, 181, 225, 152, 143, 63, 123, 117, 34, 44, 109, 160, 166, 229, 240, 91, 138, 102, 54, 180, 173, 44, 50, 80, 42, 124, 7, 50, 124, 211, 239, 21, 94, 197, 185, 239, 213, 107, 142, 64, 95, 124, 125, 17, 180, 97, 189, 101, 52, 48, 19, 112, 12, 70, 9, 212, 177, 54, 118, 66, 84, 147, 236, 248, 26, 124, 95, 103, 135, 254, 124, 49, 112, 186, 99, 120, 90, 8, 194, 191, 88, 57, 242, 65, 61, 10, 104, 246, 197, 252, 19, 159, 58, 194, 75, 173, 242, 103, 8, 115, 84, 69, 238, 149, 26, 15, 159, 182, 141, 132, 119, 70, 29, 53, 20, 143, 46, 163, 204, 6, 236, 59, 45, 185, 172, 89, 119, 83, 38, 144, 36, 222, 96, 151, 26, 99, 195, 163, 170, 133, 92, 159, 214, 53, 150, 116, 90, 176, 69, 145, 130, 15, 172, 140, 217, 215, 101, 163, 115, 161, 65, 101, 8, 7, 183, 113, 213, 134, 58, 175, 130, 251, 143, 173, 248, 168, 135, 60, 159, 30, 194, 68, 208, 119, 120, 2, 40, 178, 227, 247, 161, 77, 47, 136, 46, 244, 163, 72, 65, 158, 25, 225, 195, 61, 132, 182, 204, 177, 186, 200, 81, 2, 65, 105, 212, 72, 94, 203, 232, 217, 182, 123, 251, 228, 160, 1, 161, 204, 123, 20, 37, 1, 77, 208, 179, 45, 149, 181, 122, 102, 190, 123, 213, 164, 231, 41, 216, 130, 234, 248, 208, 251, 252, 220, 84, 209, 67, 47, 61, 220, 5, 142, 162, 26, 236, 121, 142, 248, 132, 255, 65, 122, 203, 196, 102, 191, 187, 2, 195, 127, 255, 193, 92, 49, 91, 186, 154, 39, 156, 29, 211, 172, 49, 104, 245, 114, 153, 223, 211, 199, 249, 35, 130, 160, 128, 0, 152, 176, 183, 20, 236, 113, 193, 108, 26, 255, 11, 237, 102, 133, 245, 94, 115, 114, 10, 89, 229, 214, 221, 99, 149, 30, 99, 37, 246, 10, 26, 26, 39, 92, 123, 170, 73, 211, 127, 227, 54, 30, 86, 133, 159, 112, 225, 91, 148, 100, 174, 149, 75, 143, 14, 140, 20, 44, 64, 212, 5, 243, 8, 116, 63, 30, 97, 42, 123, 20, 73, 212, 85, 207, 83, 122, 27, 251, 233, 84, 10, 17, 236, 232, 83, 200, 127, 119, 143, 163, 204, 220, 167, 59, 231, 20, 106, 186, 222, 191, 8, 40, 234, 21, 25, 180, 13, 116, 250, 152, 224, 174, 75, 3, 205, 38, 173, 215, 236, 151, 185, 121, 254, 244, 154, 239, 17, 53, 106, 164, 61, 49, 116, 216, 118, 94, 150, 35, 181, 26, 238, 66, 49, 211, 221, 132, 146, 166, 115, 39, 136, 36, 205, 230, 179, 31, 197, 51, 148, 165, 109, 38, 70, 37, 148, 52, 44, 209, 250, 98, 58, 246, 225, 103, 198, 101, 26, 25, 196, 207, 8, 166, 21, 88, 252, 175, 253, 10, 88, 107, 157, 19, 225, 61, 12, 246, 221, 37, 239, 186, 167, 137, 142, 135, 222, 128, 174, 62, 95, 216, 38, 141, 157, 45, 232, 97, 217, 173, 203, 234, 116, 129, 69, 206, 189, 94, 221, 12, 54, 139, 186, 247, 184, 16, 200, 121, 244, 104, 8, 7, 35, 111, 47, 188, 10, 140, 92, 73, 143, 206, 203, 72, 122, 184, 20, 102, 197, 130, 64, 150, 63, 96, 239, 8, 132, 111, 217, 84, 91, 198, 32, 43, 100, 138, 241, 15, 160, 42, 190, 253, 193, 184, 164, 124, 29, 210, 96, 67, 224, 221, 182, 29, 218, 129, 149, 29, 128, 174, 98, 88, 88, 125, 56, 40, 255, 120, 5, 0, 87, 174, 42, 150, 90, 112, 201, 183, 169, 19, 57, 195, 191, 12, 58, 244, 235, 132, 25, 145, 72, 146, 214, 8, 125, 100, 135, 12, 5, 102, 97, 248, 174, 24, 159, 90, 33, 43, 187, 6, 61, 212, 241, 225, 190, 219, 252, 197, 123, 129, 164, 108, 123, 55, 230, 4, 153, 166, 105, 234, 15, 85, 216, 23, 56, 32, 3, 41, 110, 68, 146, 172, 133, 202, 98, 41, 7, 47, 152, 35, 255, 168, 106, 241, 226, 222, 77, 244, 52, 185, 65, 252, 227, 32, 66, 38, 11, 172, 60, 28, 28, 103, 84, 1, 1, 205, 182, 190, 28, 189, 102, 253, 43, 1, 191, 148, 116, 10, 227, 18, 81, 93, 80, 239, 157, 232, 215, 180, 163, 165, 161, 109, 177, 71, 150, 244, 144, 208, 160, 110, 22, 174, 60, 206, 43, 103, 121, 55, 103, 114, 115, 173, 238, 13, 10, 227, 251, 41, 176, 216, 158, 229, 216, 55, 234, 128, 128, 20, 167, 106, 181, 86, 163, 130, 215, 110, 149, 191, 10, 227, 215, 8, 214, 154, 178, 181, 15, 19, 0, 247, 250, 97, 74, 43, 157, 55, 94, 174, 41, 41, 9, 199, 97, 20, 91, 32, 18, 10, 43, 98, 240, 247, 203, 20, 250, 117, 160, 44, 229, 202, 187, 64, 54, 124, 15, 184, 169, 129, 27, 160, 240, 26, 61, 255, 60, 166, 60, 144, 209, 84, 55, 187, 186, 168, 13, 124, 125, 29, 17, 100, 249, 227, 62, 205, 78, 179, 163, 168, 139, 168, 21, 38, 83, 239, 151, 74, 43, 66, 2, 92, 72, 71, 94, 216, 134, 238, 20, 45, 158, 213, 164, 73, 57, 80, 47, 198, 184, 130, 223, 227, 71, 132, 133, 235, 177, 85, 174, 142, 124, 172, 200, 54, 229, 40, 126, 60, 76, 92, 216, 153, 56, 241, 174, 66, 141, 90, 226, 3, 30, 68, 234, 71, 187, 163, 112, 146, 255, 22, 143, 170, 204, 3, 127, 179, 81, 139, 160, 37, 77, 246, 128, 220, 196, 158, 153, 73, 177, 65, 199, 119, 29, 197, 144, 130, 248, 206, 155, 253, 108, 213, 124, 7, 223, 221, 162, 146, 134, 242, 65, 99, 162, 107, 120, 247, 214, 207, 96, 150, 169, 131, 208, 218, 221, 28, 24, 112, 208, 23, 1, 130, 142, 232, 56, 104, 45, 33, 158, 95, 255, 123, 31, 74, 76, 120, 178, 155, 213, 6, 195, 164, 8, 8, 69, 241, 197, 127, 83, 169, 21, 167, 19, 94, 143, 252, 33, 159, 248, 241, 170, 153, 147, 1, 149, 199, 201, 131, 170, 79, 236, 212, 209, 143, 107, 98, 24, 123, 56, 33, 193, 85, 247, 64, 225, 135, 210, 78, 145, 57, 16, 145, 71, 170, 20, 133, 87, 235, 4, 166, 239, 100, 82, 235, 81, 50, 223, 9, 193, 52, 49, 86, 129, 190, 196, 82, 165, 107, 63, 115, 161, 98, 33, 20, 193, 29, 42, 151, 205, 252, 124, 72, 245, 48, 181, 67, 7, 13, 21, 127, 59, 226, 188, 144, 129, 112, 244, 192, 121, 213, 80, 42, 196, 1, 13, 107, 108, 78, 0, 40, 121, 225, 148, 237, 234, 209, 216, 238, 9, 147, 226, 254, 96, 89, 212, 72, 193, 106, 75, 135, 74, 227, 67, 255, 92, 191, 81, 188, 124, 226, 149, 152, 142, 15, 159, 195, 238, 114, 55, 255, 166, 157, 230, 59, 148, 170, 166, 151, 65, 213, 104, 253, 253, 112, 150, 82, 147, 137, 27, 214, 100, 247, 65, 81, 92, 47, 86, 217, 7, 45, 120, 81, 130, 31, 236, 243, 76, 78, 3, 45, 105, 172, 220, 71, 48, 220, 94, 196, 249, 163, 193, 133, 50, 236, 205, 20, 55, 2, 63, 14, 127, 69, 113, 212, 204, 12, 58, 79, 89, 86, 29, 61, 199, 201, 64, 149, 6, 144, 182, 150, 129, 31, 18, 167, 120, 248, 82, 107, 25, 143, 128, 27, 161, 28, 25, 153, 183, 217, 238, 78, 186, 106, 92, 27, 202, 219, 165, 96, 0, 216, 234, 169, 73, 101, 39, 182, 113, 217, 240, 170, 116, 172, 221, 250, 233, 48, 49, 242, 83, 227, 92, 181, 184, 72, 230, 180, 21, 15, 108, 135, 25, 38, 153, 25, 124, 227, 26, 149, 73, 236, 39, 211, 244, 149, 58, 183, 132, 26, 223, 219, 174, 144, 117, 233, 219, 165, 205, 157, 159, 222, 184, 52, 47, 241, 201, 123, 65, 24, 44, 55, 215, 177, 168, 250, 179, 115, 190, 227, 123, 158, 163, 179, 224, 69, 196, 66, 207, 254, 243, 101, 221, 193, 140, 250, 4, 28, 222, 52, 96, 138, 160, 33, 218, 64, 118, 214, 234, 201, 152, 148, 91, 178, 111, 107, 144, 142, 6, 182, 102, 72, 188, 34, 213, 181, 26, 223, 58, 255, 103, 81, 17, 47, 169, 11, 245, 224, 123, 148, 215, 237, 186, 107, 75, 152, 90, 202, 166, 22, 149, 197, 5, 246, 238, 78, 76, 229, 106, 199, 94, 127, 195, 0, 45, 82, 6, 159, 103, 96, 138, 231, 71, 46, 107, 59, 216, 39, 43, 12, 221, 27, 214, 56, 155, 145, 66, 187, 169, 250, 235, 78, 211, 179, 239, 183, 198, 163, 93, 5, 196, 24, 174, 143, 225, 106, 139, 89, 98, 13, 127, 207, 184, 194, 30, 1, 165, 198, 169, 8, 197, 118, 86, 163, 221, 138, 23, 209, 61, 116, 79, 99, 233, 43, 130, 60, 244, 85, 229, 243, 172, 123, 148, 200, 120, 192, 127, 211, 52, 11, 159, 41, 95, 212, 230, 188, 169, 156, 137, 29, 212, 12, 148, 168, 148, 133, 243, 44, 241, 139, 127, 24, 246, 220, 227, 125, 209, 97, 60, 52, 162, 192, 146, 49, 161, 92, 138, 112, 189, 128, 59, 126, 125, 46, 207, 60, 79, 231, 174, 152, 209, 68, 223, 205, 2, 38, 14, 91, 116, 159, 255, 28, 27, 178, 248, 164, 104, 158, 79, 69, 214, 234, 157, 12, 75, 163, 83, 253, 245, 202, 61, 213, 176, 6, 197, 230, 29, 208, 166, 253, 194, 254, 235, 29, 141, 241, 70, 249, 15, 62, 0, 148, 163, 135, 52, 122, 40, 96, 87, 31, 179, 152, 51, 216, 133, 184, 122, 198, 203, 60, 115, 218, 191, 193, 16, 178, 25, 148, 252, 112, 104, 103, 252, 36, 92, 221, 28, 179, 43, 199, 198, 151, 128, 100, 252, 217, 161, 249, 34, 201, 172, 118, 52, 180, 252, 104, 7, 223, 44, 116, 102, 212, 21, 40, 224, 184, 55, 163, 210, 21, 207, 161, 239, 51, 54, 155, 41, 133, 18, 67, 48, 3, 165, 130, 251, 4, 79, 214, 57, 72, 130, 157, 212, 144];

    function O(e, t, n) {
      var r = e.gl,
        i = 5,
        o = .1,
        a = .5,
        s = 175 / 180 * 3.141593,
        c = 115 / 180 * 3.141593,
        d = 173 / 180 * 3.141593,
        u = 116 / 180 * 3.141593,
        l = 2.04203545,
        p = 0,
        f = 0,
        g = 0,
        m = [],
        h = [0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 24, 26, 29, 31, 34, 36, 39, 41, 44, 46, 49, 51, 54, 56, 59, 61, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 91, 92, 94, 95, 96, 97, 98, 99, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 114, 116, 117, 118, 119, 120, 121, 123, 124, 125, 126, 127, 128, 129, 131, 132, 133, 134, 135, 136, 138, 139, 140, 141, 142, 143, 145, 146, 147, 148, 149, 150, 151, 153, 154, 155, 156, 157, 158, 160, 161, 162, 163, 164, 165, 166, 168, 169, 170, 171, 172, 173, 175, 176, 177, 178, 179, 180, 182, 183, 184, 185, 186, 187, 188, 190, 191, 192, 193, 194, 195, 197, 198, 199, 200, 201, 202, 204, 205, 206, 207, 208, 209, 210, 212, 213, 214, 215, 216, 217, 219, 220, 221, 222, 223, 224, 226, 226, 226, 227, 227, 227, 228, 228, 228, 229, 229, 229, 230, 230, 231, 231, 231, 232, 232, 232, 233, 233, 233, 234, 234, 235, 235, 235, 236, 236, 236, 237, 237, 237, 238, 238, 239, 239, 239, 240, 240, 240, 241, 241, 241, 242, 242, 243, 243, 243, 244, 244, 244, 245, 245, 245, 246, 246, 246, 247, 247, 247, 248, 248, 248, 249, 249, 249, 250, 250, 250, 251, 251, 251, 252, 252, 252, 253, 253, 253, 254, 254, 254, 255],
        E = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 35, 36, 37, 39, 40, 42, 43, 44, 46, 47, 49, 50, 51, 53, 54, 56, 57, 58, 59, 61, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 76, 77, 78, 79, 81, 82, 83, 84, 86, 87, 88, 90, 91, 92, 93, 95, 96, 97, 98, 100, 101, 102, 103, 105, 106, 107, 108, 110, 111, 112, 113, 115, 116, 117, 118, 120, 121, 122, 124, 125, 126, 127, 129, 130, 131, 132, 134, 135, 136, 137, 139, 140, 141, 142, 144, 145, 146, 147, 149, 150, 151, 152, 154, 155, 156, 158, 159, 160, 161, 163, 164, 165, 166, 168, 169, 170, 171, 173, 174, 175, 176, 178, 179, 180, 181, 183, 184, 185, 186, 188, 189, 190, 192, 193, 194, 195, 197, 198, 199, 200, 202, 203, 204, 205, 207, 208, 209, 210, 212, 213, 214, 215, 217, 218, 219, 220, 222, 223, 224, 226, 226, 226, 227, 227, 228, 228, 229, 229, 230, 230, 231, 231, 232, 232, 233, 233, 234, 234, 234, 235, 235, 236, 236, 237, 237, 238, 238, 239, 239, 240, 240, 241, 241, 242, 242, 243, 243, 243, 244, 244, 244, 245, 245, 245, 246, 246, 246, 247, 247, 247, 248, 248, 248, 249, 249, 249, 250, 250, 250, 251, 251, 251, 252, 252, 252, 253, 253, 253, 254, 254, 254, 255],
        _ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 72, 73, 74, 76, 77, 78, 80, 81, 83, 84, 85, 87, 88, 89, 91, 92, 94, 95, 96, 98, 99, 100, 102, 103, 105, 106, 107, 109, 110, 111, 113, 114, 116, 117, 118, 120, 121, 122, 124, 125, 127, 128, 129, 131, 132, 133, 135, 136, 138, 139, 140, 142, 143, 144, 146, 147, 149, 150, 151, 153, 154, 155, 157, 158, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 192, 193, 193, 194, 195, 195, 196, 197, 197, 198, 199, 199, 200, 201, 201, 202, 203, 203, 204, 205, 205, 206, 207, 207, 208, 209, 209, 210, 211, 211, 212, 213, 213, 214, 215, 215, 216, 217, 217, 218, 219, 219, 220, 221, 221, 222, 223, 223, 224, 225, 225, 226, 227, 227, 228, 229, 229, 230, 231, 231, 232, 233, 233, 234, 235, 235, 236, 237, 237, 238, 239, 239, 240, 241, 241, 242, 243, 243, 244, 245, 245, 246, 247, 247, 248, 249, 249, 250, 251, 251, 252, 253, 253, 254, 255];
      this.program = v(r, b), this.setUniforms = function() {
        var t = r.getUniformLocation(this.program, "u_flipY"),
          n = r.getUniformLocation(this.program, "u_denoiseLevel");
        r.uniform1f(n, i), r.uniform1f(t, 1);
        var h = r.getUniformLocation(this.program, "light");
        r.uniform1f(h, o);
        var v = r.getUniformLocation(this.program, "redness");
        r.uniform1f(v, a);
        var E = r.getUniformLocation(this.program, "skin_he_max"),
          _ = r.getUniformLocation(this.program, "skin_he_min"),
          S = r.getUniformLocation(this.program, "skin_hc_max"),
          y = r.getUniformLocation(this.program, "skin_hc_min"),
          R = r.getUniformLocation(this.program, "skin_hc_axis"),
          T = r.getUniformLocation(this.program, "facts_rotate_c"),
          I = r.getUniformLocation(this.program, "facts_rotate_le"),
          A = r.getUniformLocation(this.program, "facts_rotate_ge");
        r.uniform1f(E, s), r.uniform1f(_, c), r.uniform1f(S, d), r.uniform1f(y, u), r.uniform1f(R, l), r.uniform1f(T, p), r.uniform1f(I, f), r.uniform1f(A, g);
        var b = r.getUniformLocation(this.program, "u_originImage");
        r.activeTexture(r.TEXTURE2), r.bindTexture(r.TEXTURE_2D, e.inputTexture), r.uniform1i(b, 2);
        for (var O = ["lighten_lut"], C = [r.TEXTURE3], N = 0; N < O.length; N++) {
          var w = r.getUniformLocation(this.program, O[N]);
          r.activeTexture(C[N]), r.bindTexture(r.TEXTURE_2D, m[N]), r.uniform1i(w, N + 3)
        }
      }, this.setParameters = function(e) { void 0 !== e.denoiseLevel && (i = e.denoiseLevel), void 0 !== e.lightLevel && (o = e.lightLevel), void 0 !== e.rednessLevel && (a = e.rednessLevel, this._updateRedness(a)), void 0 !== e.lighteningContrastLevel && this._updateLut(e.lighteningContrastLevel) }, this._updateRedness = function(e) {
        var t, n, r = 3.141593,
          i = e,
          o = i;
        i > 1 && (i = 1), i < 0 && (i = 0), o > 1 && (o = 1), o < 0 && (o = 0), p = .8 * i, o < .8 && (o = 0), (l = (117 - 4 * o) / 180 * r) < (u = (116 - 4 * o) / 180 * r) && (l = u), u < r / 2 && (u = r / 2), l < r / 2 && (l = r / 2), (c = (115 - 4 * o) / 180 * r) < r / 2 && (c = r / 2), (d = 173 / 180 * r) > r && (d = r), l > r && (l = r), (s = 175 / 180 * r) > r && (s = r), n = d - l, g = (t = s - d) > .01 ? p * n / t : p, n = l - u, f = (t = u - c) > .01 ? p * n / t : p
      }, this._updateLut = function(e) {
        var t = null;
        0 == e && (t = E), 1 == e && (t = _), 2 == e && (t = h);
        for (var n = [new Uint8Array(t)], i = [256], o = [1], a = 0; a < n.length; a++) r.bindTexture(r.TEXTURE_2D, m[a]), r.texImage2D(r.TEXTURE_2D, 0, r.LUMINANCE, i[a], o[a], 0, r.LUMINANCE, r.UNSIGNED_BYTE, n[a])
      }, this._init = function() {
        var e = null;
        e = E;
        for (var t = [new Uint8Array(e)], n = [256], i = [1], o = 0; o < t.length; o++) {
          var a = r.createTexture();
          r.bindTexture(r.TEXTURE_2D, a), r.texImage2D(r.TEXTURE_2D, 0, r.LUMINANCE, n[o], i[o], 0, r.LUMINANCE, r.UNSIGNED_BYTE, t[o]), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), m.push(a)
        }
      }, this._init()
    }
    var C = !1;

    function N() {
      this.programs = [];
      var e = this,
        t = null,
        n = null;
      e.gl = null, e.inputTexture = null;
      var r = [],
        i = [],
        o = 0,
        a = 0;
      e._initGl = function(n, s) {
        e.inputTexture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, e.inputTexture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR);
        for (var c = 0; c < 4; c++) {
          var d = t.createTexture();
          t.bindTexture(t.TEXTURE_2D, d), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), c < 2 ? t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, n, s, 0, t.RGBA, t.UNSIGNED_BYTE, null) : t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, s, n, 0, t.RGBA, t.UNSIGNED_BYTE, null);
          var u = t.createFramebuffer();
          t.bindFramebuffer(t.FRAMEBUFFER, u), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, d, 0), r.push(d), i.push(u)
        }
        t.viewport(0, 0, n, s), o = n, a = s
      }, e.render = function(s) {
        if (t) {
          var c = 0;
          a == s.videoWidth && o === s.videoHeight && (c = 2), t.viewport(0, 0, s.videoWidth, s.videoHeight), t.bindTexture(t.TEXTURE_2D, e.inputTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, s);
          for (var d = C ? e.programs.length - 1 : 0, u = 0; u <= d; u++) {
            var l = e.programs[u].program;
            t.useProgram(l);
            var p = t.getUniformLocation(l, "u_image");
            e.programs[u].setUniforms(), t.bindFramebuffer(t.FRAMEBUFFER, i[c + u % 2]), t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLES, 0, 6), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, r[c + u % 2]), t.uniform1i(p, 0)
          }
          t.useProgram(n);
          var f = t.getUniformLocation(n, "u_flipY");
          t.uniform1f(f, -1), t.bindFramebuffer(t.FRAMEBUFFER, null), t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT), t.drawArrays(t.TRIANGLES, 0, 6)
        }
      }, e.setEnableBeauty = function(e) { C = e }, e.init = function(r, i, o) {
        if ("undefined" == typeof WebGLRenderingContext) throw new Error("NOT_SUPPORT");
        t = o.getContext("webgl"), e.gl = t, e._initGl(r, i), e.programs.push(new _(this, r, i)), e.programs.push(new y(this, r, i)), e.programs.push(new T(this, r, i)), e.programs.push(new A(this, r, i)), e.programs.push(new O(this, r, i)), n = e.programs[0].program
      }, e.release = function() { e.gl = null, t = null, n = null, e.inputTexture = null, e.programs = [], r = [], i = [] }, e.setDenoiseLevel = function(t) { e.programs.forEach((function(e) { e.setParameters && e.setParameters({ denoiseLevel: t }) })) }, e.setLightLevel = function(t) { e.programs.forEach((function(e) { e.setParameters && e.setParameters({ lightLevel: t }) })) }, e.setRednessLevel = function(t) { e.programs.forEach((function(e) { e.setParameters && e.setParameters({ rednessLevel: t }) })) }, e.setContrastLevel = function(t) { e.programs.forEach((function(e) { e.setParameters && e.setParameters({ lighteningContrastLevel: t }) })) }, e.setSize = function(t, n) { e.programs.forEach((function(e) { e.setSize && e.setSize(t, n) })) }
    }
    N._instance = null, N.getInstance = function() { return N._instance || (N._instance = new N), N._instance };
    t.a = {
      addVideoEffectCapability: function(e) {
        e.videoEffect = { canvas: null, video: null, fps: 30, stopChromeBackgroundLoop: null, enableBeauty: !1, denoiseLevel: 5, lightLevel: .35, rednessLevel: .5, lighteningContrastLevel: 1, videoContextInited: !1, originVideoTrack: null, canvasVideoTrack: null, ctx: null }, e._initVideoContext = function() {
          if (e.videoEffect.videoContextInited) throw new Error("Failed to init video context. Already inited");
          if (!e.stream) throw new Error("Failed to init video context. Local Stream not initialized");
          e.videoEffect.originVideoTrack = e.stream.getVideoTracks()[0], e.attributes && e.attributes.maxFrameRate && (e.videoEffect.fps = e.attributes.maxFrameRate), e.videoEffect.videoContextInited = !0
        }, e._renderWithWebGL = function(t) {
          return new Promise((function(n) {
            e.videoEffect.canvas || (e.videoEffect.canvas = document.createElement("canvas")), e.videoEffect.video || (e.videoEffect.video = document.createElement("video")), e.videoEffect.video.setAttribute("autoplay", ""), e.videoEffect.video.setAttribute("muted", ""), e.videoEffect.video.muted = !0, e.videoEffect.video.setAttribute("playsinline", ""), e.videoEffect.video.setAttribute("style", "display:none"), e.videoEffect.video.srcObject = t;
            var r = t.getVideoTracks()[0].getSettings(),
              i = r.width,
              o = r.height;
            console.log("Width: ".concat(i, ", Height: ").concat(o)), e.videoEffect.canvas.setAttribute("width", i), e.videoEffect.canvas.setAttribute("height", o), e.videoEffect.video.setAttribute("width", i), e.videoEffect.video.setAttribute("height", o);
            var a = N.getInstance();
            a.init(e.videoEffect.video.width, e.videoEffect.video.height, e.videoEffect.canvas), a.setDenoiseLevel(e.videoEffect.denoiseLevel), a.setLightLevel(e.videoEffect.lightLevel), a.setRednessLevel(e.videoEffect.rednessLevel), a.setContrastLevel(e.videoEffect.lighteningContrastLevel);
            e.videoEffect.video.addEventListener("playing", (function t() {
              var r = e.videoEffect.canvas.captureStream(e.videoEffect.fps);
              e.videoEffect.video.removeEventListener("playing", t, !0), n([r.getVideoTracks()[0], e.videoEffect.video])
            }), !0), e.videoEffect.video.play()
          }))
        }, e._disableEffect = function() { e.videoEffect.videoContextInited || e._initVideoContext(); var t = e.videoEffect.originVideoTrack; if (!t) return p.default.warning("Video track is null, fail to disable video effect!"), Promise.resolve(); if (e.pc && e.pc.peerConnection && e.pc.peerConnection) { var n = (e.pc.peerConnection && e.pc.peerConnection.getSenders()).find((function(e) { return e && e.track && "video" == e.track.kind })); if (n && n.replaceTrack && t) return n.replaceTrack(t) } return Promise.resolve() }, e._releaseEffect = function() { var t; return t = e.videoEffect.enableBeauty ? e._disableEffect() : Promise.resolve(), N.getInstance().release(), e.videoEffect.videoContextInited = !1, e.videoEffect.canvasVideoTrack = null, t }, e._enableEffect = function() {
          return e.videoEffect.videoContextInited || e._initVideoContext(), e.videoEffect.originVideoTrack ? e.videoEffect.canvasVideoTrack ? (e._showEffectInLocalPlayer(), e._replaceWithCanvasTrack()) : e._renderWithWebGL(e.stream).then((function(t) {
            var n = c()(t, 2),
              r = n[0],
              i = n[1];
            e.videoEffect.canvasVideoTrack = r;
            var o = N.getInstance();
            return requestAnimationFrame((function t() { e.videoEffect.enableBeauty && o.render(i), e.videoEffect.videoContextInited && requestAnimationFrame(t) })), d.isChrome() && document.addEventListener("visibilitychange", (function() {
              document.hidden;
              document.hidden ? e.videoEffect.stopChromeBackgroundLoop = function(e, t) {
                var n = 1 / t,
                  r = new AudioContext,
                  i = r.createGain();
                i.gain.value = 0, i.connect(r.destination),
                  function t() {
                    var a = r.createOscillator();
                    a.onended = t, a.connect(i), a.start(0), a.stop(r.currentTime + n), e(r.currentTime), o && (a.onended = function() { r.close() })
                  }();
                var o = !1;
                return function() { o = !0 }
              }((function() { e.videoEffect.enableBeauty && o.render(i) }), e.videoEffect.fps) : e.videoEffect.stopChromeBackgroundLoop && (e.videoEffect.stopChromeBackgroundLoop(), e.videoEffect.stopChromeBackgroundLoop = null)
            }), !1), e._showEffectInLocalPlayer(), e._replaceWithCanvasTrack()
          })) : (p.default.warning("Video track is null, fail to enable video effect!"), Promise.resolve())
        }, e._showEffectInLocalPlayer = function() {
          if (e.player) {
            var t = e.player.div.children[0];
            if ("none" !== t.style.display && (e.player.div.appendChild(e.videoEffect.canvas), "video" === t.tagName.toLowerCase())) {
              var n = t.getAttribute("style");
              e.videoEffect.canvas.setAttribute("style", n), "none" !== t.style.display && (t.style.display = "none")
            }
          }
        }, e._removeEffectFromLocalPlayer = function() { if (e.player && e.player.div && e.videoEffect.enableBeauty && e.videoEffect.canvas) { e.player.div.removeChild(e.videoEffect.canvas); var t = e.player.div.children[0]; "video" === t.tagName.toLowerCase() && (e.videoEffect.canvas.style.display = "none", t.style.display = "block") } }, e._replaceWithCanvasTrack = function() {
          var t = null;
          e.pc && e.pc.peerConnection && e.pc.peerConnection && (t = (e.pc.peerConnection && e.pc.peerConnection.getSenders()).find((function(e) { return e && e.track && "video" == e.track.kind })));
          return t && t.replaceTrack && e.videoEffect.canvasVideoTrack ? t.replaceTrack(e.videoEffect.canvasVideoTrack) : Promise.resolve()
        }, e.setBeautyEffectOptions = function() {
          var t = a()(i.a.mark((function t(n, r) {
            var o, a = arguments;
            return i.a.wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (Object(l.checkValidBoolean)(n, "enabled"), o = N.getInstance(), e.videoEffect.enableBeauty == n) { t.next = 14; break }
                  if (o.setEnableBeauty(n), !n) { t.next = 9; break }
                  return t.next = 7, e._enableEffect();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  return e._removeEffectFromLocalPlayer(), t.next = 12, e._releaseEffect();
                case 12:
                  e.videoEffect.enableBeauty = n, u.report.reportApiInvoke(e.sid, { callback: null, options: a, name: "Stream.setBeautyEffectOptions", tag: "tracer" });
                case 14:
                  if (n) { t.next = 16; break }
                  return t.abrupt("return");
                case 16:
                  if (!r) { t.next = 20; break }
                  Object(l.checkValidObject)(r, "options"), t.next = 21;
                  break;
                case 20:
                  return t.abrupt("return");
                case 21:
                  if (void 0 !== r.smoothnessLevel && (Object(l.checkValidFloatNumber)(r.smoothnessLevel, "smoothnessLevel", 0, 1), e.videoEffect.denoiseLevel = 10 * r.smoothnessLevel, e.videoEffect.denoiseLevel < .1 && (e.videoEffect.denoiseLevel = .1), o.setDenoiseLevel(e.videoEffect.denoiseLevel)), void 0 !== r.lighteningLevel && (Object(l.checkValidFloatNumber)(r.lighteningLevel, "lighteningLevel", 0, 1), e.videoEffect.lightLevel = r.lighteningLevel / 2, e.videoEffect.lightLevel < .01 && (e.videoEffect.lightLevel = .01), o.setLightLevel(e.videoEffect.lightLevel)), void 0 !== r.rednessLevel && (Object(l.checkValidFloatNumber)(r.rednessLevel, "rednessLevel", 0, 1), e.videoEffect.rednessLevel = r.rednessLevel, e.videoEffect.rednessLevel < .01 && (e.videoEffect.rednessLevel = .01), o.setRednessLevel(e.videoEffect.rednessLevel)), void 0 === r.lighteningContrastLevel) { t.next = 29; break }
                  if (0 === r.lighteningContrastLevel || 1 === r.lighteningContrastLevel || 2 === r.lighteningContrastLevel) { t.next = 27; break }
                  throw new Error("Invalid lighteningContrastLevel: The value should be 0, 1 or 2.");
                case 27:
                  e.videoEffect.lighteningContrastLevel = parseFloat(r.lighteningContrastLevel), o.setContrastLevel(e.videoEffect.lighteningContrastLevel);
                case 29:
                case "end":
                  return t.stop()
              }
            }), t)
          })));
          return function(e, n) { return t.apply(this, arguments) }
        }()
      },
      restoreVideoEffect: function(e) { return e.videoEffect.enableBeauty ? e._enableEffect() : Promise.resolve() },
      disableVideoEffect: function(e) { return e._releaseEffect ? e._releaseEffect() : Promise.resolve() },
      applyEffectInPlayer: function(e) { e.videoEffect.enableBeauty && e.videoEffect.canvas && e._showEffectInLocalPlayer() },
      removeEffectFromLocalPlayer: function(e) { e._removeEffectFromLocalPlayer() },
      replaceWithCanvasTrack: function(e) { return e.videoEffect.enableBeauty ? e._replaceWithCanvasTrack() : Promise.resolve() },
      checkVideoEffectEnabled: function(e) { if (e.videoEffect.enableBeauty && e.videoEffect && e.videoEffect.videoContextInited) { return p.default.error("Operation not permitted: ".concat("VIDEO_EFFECT_ENABLED")), "VIDEO_EFFECT_ENABLED" } return !1 }
    }
  }, function(e, t) {
    function n(e, t, n, r, i, o, a) {
      try {
        var s = e[o](a),
          c = s.value
      } catch (e) { return void n(e) }
      s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    e.exports = function(e) {
      return function() {
        var t = this,
          r = arguments;
        return new Promise((function(i, o) {
          var a = e.apply(t, r);

          function s(e) { n(a, i, o, s, c, "next", e) }

          function c(e) { n(a, i, o, s, c, "throw", e) }
          s(void 0)
        }))
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(36),
      i = Object.prototype.toString;

    function o(e) { return "[object Array]" === i.call(e) }

    function a(e) { return void 0 === e }

    function s(e) { return null !== e && "object" == typeof e }

    function c(e) { return "[object Function]" === i.call(e) }

    function d(e, t) {
      if (null != e)
        if ("object" != typeof e && (e = [e]), o(e))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }
    e.exports = {
      isArray: o,
      isArrayBuffer: function(e) { return "[object ArrayBuffer]" === i.call(e) },
      isBuffer: function(e) { return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) },
      isFormData: function(e) { return "undefined" != typeof FormData && e instanceof FormData },
      isArrayBufferView: function(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer },
      isString: function(e) { return "string" == typeof e },
      isNumber: function(e) { return "number" == typeof e },
      isObject: s,
      isUndefined: a,
      isDate: function(e) { return "[object Date]" === i.call(e) },
      isFile: function(e) { return "[object File]" === i.call(e) },
      isBlob: function(e) { return "[object Blob]" === i.call(e) },
      isFunction: c,
      isStream: function(e) { return s(e) && c(e.pipe) },
      isURLSearchParams: function(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams },
      isStandardBrowserEnv: function() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) },
      forEach: d,
      merge: function e() {
        var t = {};

        function n(n, r) { "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n }
        for (var r = 0, i = arguments.length; r < i; r++) d(arguments[r], n);
        return t
      },
      deepMerge: function e() {
        var t = {};

        function n(n, r) { "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n }
        for (var r = 0, i = arguments.length; r < i; r++) d(arguments[r], n);
        return t
      },
      extend: function(e, t, n) { return d(t, (function(t, i) { e[i] = n && "function" == typeof t ? r(t, n) : t })), e },
      trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }
    }
  }, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() { return u }));
    var r = n(7),
      i = n.n(r),
      o = n(8),
      a = n(0),
      s = n(5);

    function c(e) {
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = function(e, t) { if (!e) return; if ("string" == typeof e) return d(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(n); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t) }(e))) {
          var t = 0,
            n = function() {};
          return { s: n, n: function() { return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] } }, e: function(e) { throw e }, f: n }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var r, i, o = !0,
        a = !1;
      return { s: function() { r = e[Symbol.iterator]() }, n: function() { var e = r.next(); return o = e.done, e }, e: function(e) { a = !0, i = e }, f: function() { try { o || null == r.return || r.return() } finally { if (a) throw i } } }
    }

    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    var u = new function() {
      var e = Object(o.b)();
      return e.devicesHistory = {}, e.states = { UNINIT: "UNINIT", INITING: "INITING", INITED: "INITED" }, e.state = e.states.UNINIT, e.deviceStates = { ACTIVE: "ACTIVE", INACTIVE: "INACTIVE" }, e.deviceReloadTimer = null, e._init = function(t, n) { e.state = e.states.INITING, e.devicesHistory = {}, e._reloadDevicesInfo((function() { e.state = e.states.INITED, e.dispatchEvent({ type: "inited" }), t && t() }), (function(t) { a.default.warning("Device Detection functionality cannot start properly."), e.state = e.states.UNINIT, n && n(t) })) }, e._enumerateDevices = function(e, t) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return a.default.warning("enumerateDevices() not supported."), t && t("enumerateDevices() not supported");
        navigator.mediaDevices.enumerateDevices().then((function(t) { e && setTimeout((function() { e(t) }), 0) })).catch((function(e) { t && t(e) }))
      }, e._reloadDevicesInfo = function(t, n) {
        var r = [];
        e._enumerateDevices((function(n) {
          var o = Date.now();
          for (var s in n.forEach((function(t) {
              var n = e.devicesHistory[t.deviceId];
              if ((n ? n.state : e.deviceStates.INACTIVE) != e.deviceStates.ACTIVE) {
                var i = n || { initAt: o };
                i.device = t, i.state = e.deviceStates.ACTIVE, r.push(i), e.devicesHistory[t.deviceId] = i
              }
              e.devicesHistory[t.deviceId].lastReloadAt = o
            })), e.devicesHistory) {
            var c = e.devicesHistory[s];
            c && c.state == e.deviceStates.ACTIVE && c.lastReloadAt !== o && (c.state = e.deviceStates.INACTIVE, r.push(c)), c.lastReloadAt = o
          }
          e.state == e.states.INITED && r.forEach((function(t) {
            var n = i()({}, t);
            switch (t.device.kind) {
              case "audioinput":
                n.type = "recordingDeviceChanged";
                break;
              case "audiooutput":
                n.type = "playoutDeviceChanged";
                break;
              case "videoinput":
                n.type = "cameraChanged";
                break;
              default:
                a.default.warning("Unknown device change", n), n.type = "unknownDeviceChanged"
            }
            e.dispatchEvent(n)
          })), t && t()
        }), n)
      }, e.getDeviceById = function(t, n, r) { e.getDevices((function(e) { for (var i = 0; i < e.length; i++) { var o = e[i]; if (o && o.deviceId === t) return n && n(o) } return r && r() })) }, e.searchDeviceNameById = function(t) { var n = e.devicesHistory[t]; return n ? n.device.label || n.device.deviceId : null }, e.getDevices = function(t, n) { e._enumerateDevices(t, (function(e) { n && n(e.name + ": " + e.message) })) }, e.getVideoCameraIdByLabel = function(t, n, r) { e.getCameras((function(e) { var i, o = c(e); try { for (o.s(); !(i = o.n()).done;) { var a = i.value; if (a.label === t) return n && n(a.deviceId) } } catch (e) { o.e(e) } finally { o.f() } return r && r(s.default.NOT_FIND_DEVICE_BY_LABEL) }), r) }, e.getRecordingDevices = function(t, n) {
        return e._enumerateDevices((function(e) {
          var n = e.filter((function(e) { return "audioinput" == e.kind }));
          t && t(n)
        }), (function(e) { n && n(e) }))
      }, e.getPlayoutDevices = function(t, n) {
        return e._enumerateDevices((function(e) {
          var n = e.filter((function(e) { return "audiooutput" == e.kind }));
          t && t(n)
        }), (function(e) { n && n(e) }))
      }, e.getCameras = function(t, n) {
        return e._enumerateDevices((function(e) {
          var n = e.filter((function(e) { return "videoinput" == e.kind }));
          t && t(n)
        }), (function(e) { n && n(e) }))
      }, e._init((function() { navigator.mediaDevices && navigator.mediaDevices.addEventListener && navigator.mediaDevices.addEventListener("devicechange", (function() { e._reloadDevicesInfo() })), e.deviceReloadTimer = setInterval(e._reloadDevicesInfo, 5e3) })), e
    }
  }, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "_getReconnectCSTimer", (function() { return R })), n.d(t, "_setClientConnectionStateRecord", (function() { return T })), n.d(t, "getGatewayList", (function() { return A })), n.d(t, "getUserAccount", (function() { return O }));
    var r = n(11),
      i = n.n(r),
      o = n(13),
      a = n.n(o),
      s = n(17),
      c = n.n(s),
      d = n(3),
      u = (n(4), n(0)),
      l = n(14),
      p = n(1),
      f = n(5),
      g = function(e, t) {
        var n = !1,
          r = 0,
          i = { command: "convergeAllocateEdge", sid: e.sid, appId: e.appId, token: e.token, uid: e.uid, cname: e.cname, ts: Math.floor(Date.now() / 1e3), version: d.VERSION, seq: 0, requestId: 1 };
        Object(d.getParameter)("PROXY_CS").map((function(o) {
          var a = (new Date).getTime();
          m("https://" + o + "/api/v1", i, (function(i, s) {
            if (i) return u.default.debug("[" + e.clientId + "] Request proxy server failed: ", i), r++, p.report.requestProxyAppCenter(e.sid, { lts: a, succ: !1, APAddr: o, workerManagerList: null, ec: JSON.stringify(i), response: JSON.stringify({ err: i, res: s }) }), void(r >= Object(d.getParameter)("PROXY_CS").length && t && t("Get proxy server failed: request all failed"));
            if (!n)
              if ((s = JSON.parse(s)).json_body) {
                var c = JSON.parse(s.json_body);
                if (u.default.debug("[" + e.clientId + "] App return:", c.servers), 200 !== c.code) {
                  i = "Get proxy server failed: response code [" + c.code + "], reason [ " + c.reason + "]";
                  u.default.debug("[" + e.clientId + "] " + i), p.report.requestProxyAppCenter(e.sid, { lts: a, succ: !1, APAddr: o, workerManagerList: null, ec: i, response: JSON.stringify({ err: i, res: s }) })
                } else {
                  n = !0;
                  var l = v(c.servers);
                  p.report.requestProxyAppCenter(e.sid, { lts: a, succ: !0, APAddr: o, workerManagerList: JSON.stringify(l), ec: null, response: JSON.stringify({ res: s }) }), t && t(null, l)
                }
              } else u.default.debug("[" + e.clientId + "] Get proxy server failed: no json_body"), p.report.requestProxyAppCenter(e.sid, { lts: a, succ: !1, APAddr: o, workerManagerList: null, ec: "Get proxy server failed: no json_body", response: JSON.stringify({ res: s }) })
          }))
        }))
      },
      m = function(e, t, n) {
        var r = { service_name: "webrtc_proxy", json_body: JSON.stringify(t) };
        Object(l.post)(e, r, (function(e) { n && n(null, e) }), (function(e) { n && n(e) }), { "X-Packet-Service-Type": 0, "X-Packet-URI": 61 })
      },
      h = function(e, t, n) {
        var r = !1,
          i = 0,
          o = { command: "request", gatewayType: "http", appId: e.appId, cname: e.cname, uid: e.uid + "", sdkVersion: "2.3.1", sid: e.sid, seq: 1, ts: +new Date, requestId: 3, clientRequest: { appId: e.appId, cname: e.cname, uid: e.uid + "", sid: e.sid } };
        t.map((function(a) {
          var s = (new Date).getTime();
          ! function(e, t, n) { Object(l.post)(e, t, (function(e) { n && n(null, e) }), (function(e) { n && n(e) })) }("https://" + a + ":4000/v2/machine", o, (function(o, c) {
            if (o) return u.default.debug("[" + e.clientId + "] Request worker manager failed: ", o), i++, p.report.requestProxyWorkerManager(e.sid, { lts: s, succ: !1, workerManagerAddr: a, ec: JSON.stringify(o), response: JSON.stringify({ res: c }) }), void(i >= t.length && n && n("requeet worker manager server failed: request failed"));
            if (!r) {
              if (!(c = JSON.parse(c)).serverResponse) return n && n("requeet worker manager server failed: serverResponse is undefined");
              r = !0, p.report.requestProxyWorkerManager(e.sid, { lts: s, succ: !0, workerManagerAddr: a, ec: JSON.stringify(o), response: JSON.stringify({ res: c }) }), n && n(null, { address: a, serverResponse: c.serverResponse })
            }
          }))
        }))
      },
      v = function(e) {
        if (!e || [] instanceof Array == !1) return [];
        var t = [];
        return e.forEach((function(e) {
          var n;
          e.address && e.tcp ? (e.address.match(/^[\.\:\d]+$/) ? n = "".concat(e.address.replace(/[^\d]/g, "-"), ".edge.agora.io") : (u.default.info("[" + joinInfo.clientId + "] " + "Cannot recognized as IP address ".concat(e.address, ". Used As Host instead")), n = "".concat(e.address, ":").concat(e.tcp)), t.push(n)) : u.default.error("[" + joinInfo.clientId + "] Invalid address format ", e)
        })), t
      },
      E = n(12),
      _ = n(30),
      S = {},
      y = {},
      R = function(e) { return S[e] },
      T = function(e, t) { y[e] = t },
      I = function(e, t, n, r, i) {
        var o = (new Date).getTime(),
          a = t,
          s = "";
        t.multiIP && t.multiIP.gateway_ip && (s = { vocs_ip: [t.multiIP.uni_lbs_ip], vos_ip: [t.multiIP.gateway_ip] });
        var c = { opid: 133, flag: 4096, ts: +new Date, key: t.token, cname: t.cname, sid: t.sid, detail: { 6: t.stringUid, 11: i }, uid: t.uid || 0 };
        s && (c.detail[5] = JSON.stringify(s)), Object(l.post)(e + "".concat(-1 === e.indexOf("?") ? "?" : "&", "action=wrtc_gateway"), c, (function(i) {
          try {
            var s = JSON.parse(i);
            s.res && (s = s.res);
            var c = s.code
          } catch (e) { var l = "requestChooseServer failed with unexpected body " + i; return u.default.error("[" + a.clientId + "]", l), r(l) }
          if (c) return v = new RegExp(/10102\d{2}$/).test(c) ? "NO_SERVICE_AVAILABLE" : f.APErrorCode[s.code] || c, p.report.joinChooseServer(t.sid, { lts: o, succ: !1, csAddr: e, serverList: null, ec: v }), r("Get server node failed [" + v + "]", e, v);
          var g = [],
            m = Object(d.getParameter)("GATEWAY_DOMAINS"),
            h = 0;
          if (e.indexOf(m[1]) > -1 && (h = 1), s.addresses.forEach((function(e) {
              var t;
              e.ip && e.port ? (e.ip.match(/^[\.\:\d]+$/) ? t = "".concat(e.ip.replace(/[^\d]/g, "-"), ".").concat(m[h++ % m.length], ":").concat(e.port) : (u.default.info("[" + a.clientId + "] " + "Cannot recognized as IP address ".concat(e.ip, ". Used As Host instead")), t = "".concat(e.ip, ":").concat(e.port)), g.push(t)) : u.default.error("[" + a.clientId + "] Invalid address format ", e)
            })), !g.length) { u.default.error("[" + a.clientId + "] Empty Address response", s); var v = "EMPTY_ADDRESS_RESPONSE"; return p.report.joinChooseServer(t.sid, { lts: o, succ: !1, csAddr: e, serverList: null, ec: v }), r("Get server node failed [" + v + "]", e, v) }
          var E = { gateway_addr: g, uid: s.uid, cid: s.cid, vid: s.detail && s.detail[8], res: s, uni_lbs_ip: s.detail };
          return n(E, e)
        }), (function(e, n) { "timeout" === e.type ? (p.report.joinChooseServer(t.sid, { lts: o, succ: !1, csAddr: n, serverList: null, ec: "timeout" }), r("Connect choose server timeout", n)) : (p.report.joinChooseServer(t.sid, { lts: o, succ: !1, csAddr: n, serverList: null, ec: "server_wrong" }), r("Connect choose server error", n)) }), { "X-Packet-Service-Type": 0, "X-Packet-URI": 69 })
      },
      A = function(e, t, n) {
        var r = !1,
          i = null,
          o = 1,
          a = 1,
          s = e.clientId,
          c = function t(a, c) {
            if (!r) {
              var l = [];
              ! function(e, t, n) {
                for (var r, i = (new Date).getTime(), o = !1, a = !0, s = 0, c = Object(d.getParameter)("WEBCS_DOMAIN"), l = Object(d.getParameter)("WEBCS_DOMAIN_BACKUP_LIST"), g = function(n, r) {
                    if (o) p.report.joinChooseServer(e.sid, { lts: i, succ: !0, csAddr: r, serverList: n.gateway_addr, cid: n.cid + "", uid: n.uid + "", ec: null }, !1);
                    else {
                      if (clearTimeout(y), o = !0, e.proxyServer)
                        for (var a = n.gateway_addr, s = 0; s < a.length; s++) {
                          var c = a[s].split(":");
                          n.gateway_addr[s] = e.proxyServer + "/ws/?h=" + c[0] + "&p=" + c[1]
                        }
                      t(n), p.report.joinChooseServer(e.sid, { lts: i, succ: !0, csAddr: r, serverList: n.gateway_addr, cid: n.cid + "", uid: n.uid + "", ec: null }, !0)
                    }
                  }, m = function(t, i, o) { s++, u.default.error("[" + e.clientId + "]", t, i, o), o && -1 === f.JOIN_CS_RETRY_LIST.indexOf(o) && (a = !1, r = o), s === c.length + l.length && n(r) }, h = 0; h < c.length; ++h) {
                  var v;
                  if ("string" == typeof c[h]) {
                    var E = c[h];
                    v = e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(E + "/api/v1") : "https://".concat(E, "/api/v1");
                    var S = Object(_.getAreaCodeByWebCS)(E);
                    u.default.debug("[" + e.clientId + "] " + "Connect to choose_server: ".concat(v, ", ").concat(S)), I(v, e, g, m, S)
                  } else u.default.error("[" + e.clientId + "] Invalid Host", c[h])
                }
                var y = setTimeout((function() {
                  if (!o)
                    for (var t = 0; t < l.length; ++t) {
                      if ("string" == typeof l[t]) {
                        var n = l[t];
                        v = e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(n + "/api/v1") : "https://".concat(n, "/api/v1");
                        var r = Object(_.getAreaCodeByWebCS)(n);
                        u.default.debug("[" + e.clientId + "] " + "Connect to backup_choose_server: ".concat(v, ", ").concat(r)), I(v, e, g, m, r)
                      } else u.default.error("[" + e.clientId + "] Invalid Host", l[t])
                    }
                }), 1e3);
                setTimeout((function() {!o && a && n() }), Object(d.getParameter)("WEBCS_BACKUP_CONNECT_TIMEOUT"))
              }(e, (function(t) { r = !0, !0, l = t, clearTimeout(i), y[s] !== E.a.DISCONNECTED && y[s] !== E.a.DISCONNECTING ? c && c(l, null) : u.default.debug("[".concat(e.clientId, "] Request gateway list success when connection state is ").concat(y[s])) }), (function(r) {
                if (r) return u.default.info("[" + e.clientId + "] Join failed: " + r), void(n && n(r));
                if (y[s] === E.a.DISCONNECTED || y[s] === E.a.DISCONNECTING) return u.default.debug("[".concat(e.clientId, "] Request gateway list falied when connection state is ").concat(y[s])), void(n && n("OPERATION_ABORT"));
                u.default.debug("[" + e.clientId + "] Request gateway list will be restart in " + o + "s"), i = setTimeout((function() { t(a, c) }), 1e3 * o), S[s] = i;
                var l = Object(d.getParameter)("AP_BACKOFF_MAX_TIME");
                o = o >= l ? l : 2 * o
              }))
            }
          },
          l = function n() {
            ! function(e, t) {
              g(e, (function(n, r) {
                if (n) return t && t(n);
                u.default.debug("[" + e.clientId + "] getProxyServerList: ", r), h(e, r, t)
              }))
            }(e, (function(r, o) {
              if (r) {
                u.default.debug("[" + e.clientId + "]", r), u.default.debug("[" + e.clientId + "] Request proxy will be restart in " + a + "s"), i = setTimeout((function() { n() }), 1e3 * a), S[s] = i;
                var l = Object(d.getParameter)("AP_BACKOFF_MAX_TIME");
                a = a >= l ? l : 2 * a
              } else {
                clearTimeout(i);
                var f = o.address;
                e.proxyServer = f;
                var g = { mode: "manual", url: o.address, tcpport: o.serverResponse.tcpport || "3433", udpport: o.serverResponse.udpport || "3478", username: o.serverResponse.username || "test", credential: o.serverResponse.password || Object(d.getParameter)("TURN_SERVER_PASSWORD"), forceturn: !0 };
                g.tcpport += "", g.udpport += "", e.turnServers = [], e.turnServers.push(g), p.report.setProxyServer(f), u.default.setProxyServer(f), c(f, t)
              }
            }))
          };
        e.useProxyServer ? 1 == e.proxyServerType ? l() : 2 == e.proxyServerType ? function n() {
          ! function(e, t) { g(e, (function(n, r) { return n ? t && t(n) : (u.default.debug("[" + e.clientId + "] getProxyServerList: ", r), t && t(null, { address: r[0], serverResponse: { tcpport: "443", udpport: "3478", username: "test", password: "111111" } })) })) }(e, (function(r, o) {
            if (r) return u.default.debug("[" + e.clientId + "]", r), u.default.debug("[" + e.clientId + "] Request proxy will be restart in " + a + "s"), i = setTimeout((function() { n() }), 1e3 * a), S[s] = i, void(a = a >= 3600 ? 3600 : 2 * a);
            clearTimeout(i);
            var l = Object(d.getParameter)("PROXY_SERVER_TYPE2");
            e.proxyServer = l;
            var f = { mode: "manual", url: o.address, tcpport: o.serverResponse.tcpport || "3433", udpport: o.serverResponse.udpport || "3478", username: o.serverResponse.username || "test", credential: o.serverResponse.password || "111111", forceturn: !0 };
            f.tcpport += "", f.udpport += "", e.turnServers = [], e.turnServers.push(f), p.report.setProxyServer(l), u.default.setProxyServer(l), c(l, t)
          }))
        }() : l() : c(null, t)
      },
      b = function(e, t, n, r) {
        var i = Date.now();
        r = r || t.stringUid;
        var o = { sid: t.sid, opid: 10, appid: t.appId, string_uid: r };
        return new Promise((function(a, s) {
          Object(l.post)(e + "".concat(-1 === e.indexOf("?") ? "?" : "&", "action=stringuid"), o, (function(c) {
            try {
              var d = JSON.parse(c),
                l = d.code
            } catch (a) { var g = "requestUserAccount failed with unexpected body " + c; return u.default.error("[" + t.clientId + "]", g), s("UNEXPECTED_ERROR"), n && n.dispatchEvent({ type: "error", reason: "USER_ACCOUNT_BODY_NOT_JSON" }), void p.report.reqUserAccount(o.sid, { lts: i, success: !1, serverAddress: e, stringUid: r, uid: null, extend: c, errorCode: "USER_ACCOUNT_BODY_NOT_JSON" }) }
            if (l) {
              var m = f.StringUidErrorCode[d.code % 1e4] || "REQ_ACCOUNT_ERR_".concat(l);
              n && n.dispatchEvent({ type: "error", reason: m }), p.report.reqUserAccount(o.sid, { lts: i, success: !1, serverAddress: e, stringUid: r, uid: null, errorCode: m, extend: o });
              g = "Get String Uid Failed [" + m + "]";
              return s(m)
            }
            var h = d.uid;
            if (!(h > 0 && h < Math.pow(2, 32))) {
              u.default.error("[" + t.clientId + "] " + "Invalid Uint Uid ".concat(r, " => ").concat(h), d);
              m = "INVALID_UINT_UID_".concat(h);
              return n && n.dispatchEvent({ type: "error", reason: m }), p.report.reqUserAccount(o.sid, { lts: i, success: !1, serverAddress: e, stringUid: r, uid: null, errorCode: m, extend: o }), s(m)
            }
            a({ uid: h, url: e }), p.report.reqUserAccount(o.sid, { lts: i, success: !0, serverAddress: e, stringUid: r, uid: h, errorCode: null, extend: o })
          }), (function(e, t) {
            if ("timeout" === e.type) {
              var a = "USER_ACCOUNT_TIMEOUT";
              n && n.dispatchEvent({ type: "error", reason: a }), p.report.reqUserAccount(o.sid, { lts: i, success: !1, serverAddress: t, stringUid: r, uid: null, errorCode: a, extend: o }), s(a)
            } else {
              var c = "USER_ACCOUNT_SERVER_WRONG_".concat(e.type);
              n && n.dispatchEvent({ type: "error", reason: c }), p.report.reqUserAccount(o.sid, { lts: i, success: !1, serverAddress: t, stringUid: r, uid: null, errorCode: c, extend: o }), s(c)
            }
          }), { "X-Packet-Service-Type": 0, "X-Packet-URI": 72 })
        }))
      },
      O = function(e, t, n) {
        Date.now();
        var r, o = Object(d.getParameter)("ACCOUNT_REGISTER"),
          s = !1,
          l = Object(d.getParameter)("ACCOUNT_REGISTER_RETRY_TIMEOUT"),
          p = null,
          f = null,
          g = new Promise(function() {
            var g = c()(a.a.mark((function c(g, m) {
              var h, v, E;
              return a.a.wrap((function(c) {
                for (;;) switch (c.prev = c.next) {
                  case 0:
                    p = g, f = m, r = 0;
                  case 3:
                    if (!(r < Object(d.getParameter)("ACCOUNT_REGISTER_RETRY_COUNT_MAX"))) { c.next = 33; break }
                    if (!s) { c.next = 6; break }
                    return c.abrupt("return");
                  case 6:
                    return h = o[r % o.length], v = e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(h + "/api/v1") : "https://".concat(h, "/api/v1"), c.prev = 8, c.delegateYield(a.a.mark((function r() {
                      var i;
                      return a.a.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return r.next = 2, b(v, e, t, n);
                          case 2:
                            if (i = r.sent, !s) { r.next = 5; break }
                            return r.abrupt("return", { v: void 0 });
                          case 5:
                            s = !0, setTimeout((function() { u.default.debug("Get UserAccount Successfully", i), p(i) }), 0);
                          case 7:
                          case "end":
                            return r.stop()
                        }
                      }), r)
                    }))(), "t0", 10);
                  case 10:
                    if (E = c.t0, "object" !== i()(E)) { c.next = 13; break }
                    return c.abrupt("return", E.v);
                  case 13:
                    c.next = 30;
                    break;
                  case 15:
                    if (c.prev = 15, c.t1 = c.catch(8), !s) { c.next = 19; break }
                    return c.abrupt("return");
                  case 19:
                    if (!c.t1.retryable) { c.next = 27; break }
                    return (l = Math.ceil(l * Object(d.getParameter)("ACCOUNT_REGISTER_RETRY_RATIO"))) > Object(d.getParameter)("ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX") && (l = Object(d.getParameter)("ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX")), u.default.error("".concat(c.t1.info, " ").concat(c.t1.url, " Will Fetch User Account in ").concat(l / 1e3, " seconds")), c.next = 25, new Promise((function(e) { setTimeout(e, l) }));
                  case 25:
                    c.next = 30;
                    break;
                  case 27:
                    u.default.error("Get UserAccount Error: ".concat(c.t1.info, " ").concat(c.t1.url), c.t1.error), s = !0, f(c.t1);
                  case 30:
                    r++, c.next = 3;
                    break;
                  case 33:
                  case "end":
                    return c.stop()
                }
              }), c, null, [
                [8, 15]
              ])
            })));
            return function(e, t) { return g.apply(this, arguments) }
          }());
        return g.cancel = function() { s || (s = !0, f({ info: "Request Cancelled", retryable: !1 })) }, g.isFinished = function() { return s }, g
      }
  }, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() { return O })), n.d(t, "b", (function() { return C }));
    var r = n(7),
      i = n.n(r),
      o = n(4),
      a = n(8),
      s = function(e) { var t = Object(a.b)(e); return t.url = ".", t },
      c = n(0),
      d = n(15),
      u = n(5),
      l = n(3),
      p = n(1),
      f = 0,
      g = function(e) {
        var t = s({});
        t.id = e.id, t.playerId = f++, t.destroyed = !1, t.fit = e.options && e.options.fit, "contain" !== t.fit && "cover" !== t.fit && (t.fit = null), t.url = e.url, t.stream = e.stream.stream, t.isFreeze = !1, t.freezeTimeCounterList = [], t.freezeCount = 0, t.lastFreezeCount = 0, t.lastTimeupdateTime = 0, t.elementID = e.elementID, t.setAudioOutput = function(e, n, r) { var i = t.video || t.audio; return i ? i.setSinkId ? void i.setSinkId(e).then((function() { return c.default.debug("[" + t.id + "] " + "video ".concat(t.id, " setAudioOutput ").concat(e, " SUCCESS")), i == t.video && t.audio ? t.audio.setSinkId(e) : Promise.resolve() })).then((function() { return c.default.debug("[" + t.id + "] " + "audio ".concat(t.id, " setAudioOutput ").concat(e, " SUCCESS")), n && n() })).catch((function(e) { return c.default.error("[" + t.id + "] VideoPlayer.setAudioOutput", e), r && r(e) })) : (c.default.error("[" + t.id + "] ", u.default.WEB_API_NOT_SUPPORTED), r && r(u.default.WEB_API_NOT_SUPPORTED)) : (c.default.error("[" + t.id + "] ", u.default.PLAYER_NOT_FOUND), r && r(u.default.PLAYER_NOT_FOUND)) }, t.destroy = function() {
          c.default.debug("[".concat(t.id, "] destroy ").concat(e.stream.local ? "local" : "remote", " Player ").concat(t.id)), Object(d.setSrcObject)(t.video, null), Object(d.setSrcObject)(t.audio, null), t.video.pause(), t.freezeCheckInterval && clearInterval(t.freezeCheckInterval), t.destroyed = !0, delete t.resizer, document.getElementById(t.div.id) && t.parentNode.contains(t.div) && t.parentNode.removeChild(t.div), ["video", "audio"].forEach((function(n) {
            t[n];
            var r = a[n];
            clearTimeout(r.playDeferTimeout), r.formerMediaState = null;
            var i = { playerId: t.playerId, stateId: r.stateId + 1, playDeferTimeout: null, error: !1, status: "aborted", reason: "stop", updatedAt: Date.now() };
            a[n] = i;
            var o = { type: "player-status-change", playerId: t.playerId, mediaType: n, status: i.status, reason: i.reason, isErrorState: !1, streamId: t.id };
            c.default.debug("[".concat(t.id, "] Media Player Status Change Triggered by destroy()"), o), e.stream.dispatchEvent(o), p.report.reportApiInvoke(e.stream.sid, { name: "Stream.playerStatusChange", options: o, tag: "tracer" })()
          }))
        }, t.div = document.createElement("div"), t.div.setAttribute("id", "player_" + t.id), e.stream.video ? t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;") : t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"), t.video = document.createElement("video"), t.video.setAttribute("id", "video" + t.id), e.stream.local && !e.stream.screen ? e.stream.mirror ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; transform: rotateY(180deg); object-fit: ".concat(t.fit || "cover", ";")) : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; object-fit: ".concat(t.fit || "cover", ";")) : e.stream.video ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; object-fit: ".concat(t.fit || "cover", ";")) : e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; object-fit: ".concat(t.fit || "contain")) : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; display: none; object-fit: ".concat(t.fit || "cover"));
        var n = { autoplay: !0, muted: !!e.stream.local || !(!o.isSafari() && "iOS" !== o.getBrowserOS()) && "video_element_muted", playsinline: !0, controls: !1, volume: null },
          r = i()({}, n, e.options);
        !0 !== r.muted || r.volume || (r.volume = 0), t.video.setAttribute("autoplay", ""), t.video.setAttribute("muted", ""), t.video.muted = !0, t.video.autoplay = !0, r.playsinline && t.video.setAttribute("playsinline", ""), r.controls && t.video.setAttribute("controls", ""), r.contains && (t.video.controls = !0), Number.isFinite(r.volume) && (t.video.volume = r.volume), t.audio = document.createElement("audio"), t.audio.setAttribute("id", "audio" + t.id), !0 === r.muted && t.audio.setAttribute("muted", ""), !0 === r.muted && (t.audio.muted = !0), r.playsinline && t.audio.setAttribute("playsinline", ""), Number.isFinite(r.volume) && (t.audio.volume = r.volume), void 0 !== t.elementID ? (document.getElementById(t.elementID).appendChild(t.div), t.container = document.getElementById(t.elementID)) : (document.body.appendChild(t.div), t.container = document.body), t.parentNode = t.div.parentNode;
        var a = { video: { playerId: t.playerId, stateId: 0, playDeferTimeout: null, error: !1, status: "init", reason: null, updatedAt: Date.now() }, audio: { playerId: t.playerId, stateId: 0, playDeferTimeout: null, error: !1, status: "init", reason: null, updatedAt: Date.now() } };
        t.mediaElemExists = function(e) { for (var t = e, n = 0; n < Object(l.getParameter)("MEDIA_ELEMENT_EXISTS_DEPTH") && t; n++) t = t.parentNode; return !!t };
        var g = function(e) { return t.mediaElemExists(e) ? e.paused ? "paused" : "play" : "aborted" },
          m = function(e, t, n) {
            var r = g(e),
              i = !0;
            return "paused" === r ? ("audio" === t && !0 === n.muted && (i = !1), n.autoplay || (i = !1)) : "play" === r ? "video" === t ? i = !1 : !0 === n.muted ? e.muted && (i = !1) : e.muted || (i = !1) : "aborted" === r && (i = !1), i
          },
          h = function(n) {
            var i, o = this;
            if (o === t.video ? i = "video" : o === t.audio && (i = "audio"), i) {
              if (n.type || c.default.error("[".concat(t.id, "] Unexpected evt"), n), "video" === i && o.muted && o.paused) return c.default.debug("[".concat(t.id, "] auto resume video element")), void o.play();
              var s = g(o);
              clearTimeout(a[i].playDeferTimeout), a[i].playDeferTimeout = setTimeout((function() {
                a[i].playDeferTimeout = null;
                var d = a[i],
                  u = g(o);
                if (s === u) {
                  var l = { playerId: t.playerId, stateId: d.stateId + 1, playDeferTimeout: null, error: m(o, i, r), status: g(o), reason: n.type, updatedAt: Date.now() };
                  if (d.status !== l.status) {
                    a[i] = l;
                    var f = { type: "player-status-change", playerId: t.playerId, mediaType: i, status: l.status, reason: l.reason, isErrorState: l.error, streamId: t.id };
                    c.default.debug("[".concat(t.id, "] Media Player Status Change"), f), e.stream.dispatchEvent(f), p.report.reportApiInvoke(e.stream.sid, { name: "Stream.playerStatusChange", options: f, tag: "tracer" })()
                  }
                } else c.default.debug("[".concat(t.id, "] Status Change after event Triggered.") + "Stream ".concat(t.id, " PlayerId ").concat(t.playerId, " mediaType ").concat(i, " Status ").concat(s, "=>").concat(u))
              }), Object(l.getParameter)("PLAYER_STATE_DEFER"))
            } else c.default.error("[".concat(t.id, "] Unknown media element"), o)
          };
        t.video.addEventListener("playing", (function(e) {! function e() { t.video.videoWidth * t.video.videoHeight > 4 ? c.default.debug("[" + t.id + "] video dimensions:", t.video.videoWidth, t.video.videoHeight) : setTimeout(e, 50) }() }));
        var v = 0,
          E = 0,
          _ = 0;
        t.freezeCheckInterval = setInterval((function() { Date.now() - t.lastTimeupdateTime > 500 ? (t.isFreeze = !0, t.freezeCount += 1) : t.isFreeze = !1 }), 500), t.video.addEventListener("playing", h), t.video.addEventListener("canplay", h), t.video.addEventListener("abort", h), t.video.addEventListener("onerror", h), t.video.addEventListener("suspend", h), t.video.addEventListener("stalled", h), t.video.addEventListener("pause", h), t.audio.addEventListener("playing", h), t.audio.addEventListener("canplay", h), t.audio.addEventListener("abort", h), t.audio.addEventListener("onerror", h), t.audio.addEventListener("suspend", h), t.audio.addEventListener("stalled", h), t.audio.addEventListener("pause", h);
        var S = t.audio,
          y = "audio";
        if (e.stream.hasVideo() || e.stream.hasScreen()) t.div.appendChild(t.video), t.div.appendChild(t.audio), o.isEdge() ? t.video.srcObject = e.stream.stream : (Object(d.attachMediaStream)(t.video, e.stream.stream), Object(d.attachMediaStream)(t.audio, e.stream.stream)), t.video.addEventListener("timeupdate", (function() {
          var e = Date.now();
          if ((v += 1) < 10) t.lastTimeupdateTime = e;
          else
            for (e - t.lastTimeupdateTime > 500 && (E += e - t.lastTimeupdateTime), _ += e - t.lastTimeupdateTime, t.lastTimeupdateTime = e; _ >= 6e3;) _ -= 6e3, t.freezeTimeCounterList.push(Math.min(6e3, E)), E -= 6e3, E = Math.max(E, 0)
        }));
        else {
          !1 !== r.muted && "video_element_muted" !== r.muted || (t.video.removeAttribute("muted"), t.video.muted = !1), t.video.removeAttribute("autoplay"), t.video.autoplay = !1, t.div.appendChild(t.video), S = t.video, y = "video";
          var R = a.audio,
            T = { playerId: t.playerId, stateId: R.stateId + 1, playDeferTimeout: null, error: !1, status: "aborted", reason: "audioonly", updatedAt: Date.now() };
          a.audio = T;
          var I = { type: "player-status-change", playerId: t.playerId, mediaType: "audio", status: T.status, reason: T.reason, isErrorState: T.error, streamId: t.id };
          if (c.default.debug("[".concat(t.id, "] Media Player Status Change"), I), Promise.resolve().then((function() { return e.stream.dispatchEvent(I) })), p.report.reportApiInvoke(e.stream.sid, { name: "Stream.playerStatusChange", options: I, tag: "tracer" })(), window.MediaStream && (o.isSafari() || "iOS" === o.getBrowserOS())) {
            var A = new MediaStream(e.stream.stream.getAudioTracks());
            Object(d.setSrcObject)(t.video, A)
          } else Object(d.setSrcObject)(t.video, e.stream.stream)
        }
        if (r.autoplay && S) {
          var b = S.play();
          b && b.catch && b.catch((function(n) {
            if (!t.destroyed && S) {
              var i = a[y],
                o = { playerId: t.playerId, stateId: i.stateId + 1, playDeferTimeout: null, error: m(S, y, r), status: g(S), reason: "error", updatedAt: Date.now() };
              if (i.status !== o.status) {
                c.default.debug("[".concat(t.id, "] Player ").concat(t.playerId, " Status Changed Detected by promise error: ").concat(i.status, "=>").concat(o.status), n), a[y] = o;
                var s = { type: "player-status-change", playerId: t.playerId, mediaType: y, status: o.status, reason: o.reason, isErrorState: o.error, streamId: t.id };
                c.default.debug("[".concat(t.id, "] Media Player Status Change"), s), e.stream.dispatchEvent(s), p.report.reportApiInvoke(e.stream.sid, { name: "Stream.playerStatusChange", options: s, tag: "tracer" })()
              }
            }
          }))
        }
        return t.setAudioVolume = function(e) {
          var n = parseInt(e) / 100;
          isFinite(n) && (n < 0 ? n = 0 : n > 1 && (n = 1), t.video && (t.video.volume = n), t.audio && (t.audio.volume = n))
        }, t
      },
      m = n(22),
      h = n(10),
      v = n(6),
      E = n(19),
      _ = n(2),
      S = n(24);
    var y = n(16),
      R = n(11),
      T = n.n(R),
      I = function(e) {
        Object(_.checkValidString)(e, "profileName"), -1 === (e = e.toLowerCase()).indexOf("_") && (e += "_1"), Object(_.checkValidEnum)(e, "profileName", Object.keys(l.SUPPORT_RESOLUTION_LIST));
        var t = l.SUPPORT_RESOLUTION_LIST[e];
        t || (e = Object(l.getParameter)("DEFAULT_PROFILE"), t = l.SUPPORT_RESOLUTION_LIST[e]);
        var n = { profileName: e, video: { width: t[0], height: t[1] }, attributes: { resolution: "".concat(t[0], "x").concat(t[1]), minFrameRate: t[2], maxFrameRate: t[3], minVideoBW: t[4], maxVideoBW: t[5] } };
        return t[2] && (n.video.frameRate = t[2]), t[6] && t[7] && (n.screen = { width: t[0], height: t[1], frameRate: { min: t[6], max: t[7] } }), n
      },
      A = function(e) {
        return Object.keys(l.SUPPORT_RESOLUTION_LIST).filter((function(t) {
          var n = l.SUPPORT_RESOLUTION_LIST[t],
            r = ["width", "height", "frameRate"];
          for (var i in r) { var o = r[i]; if (e[o] && n[i]) { if ("number" == typeof e[o].max && e[o].max < n[i]) return !1; if ("number" == typeof e[o].min && e[o].min > n[i]) return !1 } }
          return !0
        })).reverse()
      },
      b = function(e) { var t = l.AUDIO_PROFILE_SETTINGS[e] || l.AUDIO_PROFILE_SETTINGS.default; return { highQuality: t[0], stereo: t[1], speech: t[2], lowQuality: t[3] } };
    var O = function(e) {
        var t = Object(a.b)();
        if (t.params = i()({}, e), t.stream = e.stream, t.url = e.url, t.onClose = void 0, t.local = !1, t.videoSource = e.videoSource, t.audioSource = e.audioSource, e.video = !(!e.videoSource && !e.video), t.video = e.video, e.audio = !(!e.audioSource && !e.audio), t.audio = e.audio, t.screen = !!e.screen, t.screenAudio = !!e.screenAudio, t.screenAttributes = { width: 1920, height: 1080, maxFr: 5, minFr: 1 }, t.videoSize = e.videoSize, t.player = void 0, t.audioLevelHelper = null, e.attributes = e.attributes || {}, t.attributes = e.attributes, t.microphoneId = e.microphoneId, t.cameraId = e.cameraId, t.facingMode = e.facingMode, t.inSwitchDevice = !1, t.userMuteVideo = !1, t.userMuteAudio = !1, t.peerMuteVideo = !1, t.peerMuteAudio = !1, t.lowStream = null, t.videoWidth = 0, t.videoHeight = 0, t.streamId = e.streamID, t.userId = null, t.uintId = e.uintUID || null, t.mirror = !1 !== e.mirror, t.DTX = e.audioProcessing && e.audioProcessing.DTX, t.audioProcessing = e.audioProcessing, t.optimizationMode = e.optimizationMode, t.highQuality = !1, t.stereo = !1, t.speech = !1, t.screen || delete t.screen, !(void 0 === t.videoSize || t.videoSize instanceof Array && 4 === t.videoSize.length)) throw Error("Invalid Video Size");

        function n() {
          var e = {};
          t.getVideoTrack() === this ? (c.default.debug("Video Track Ended"), e.type = "videoTrackEnded", e.track = this) : t.getAudioTrack() === this ? (c.default.debug("Audio Track Ended"), e.type = "audioTrackEnded", e.track = this) : c.default.debug("Detached Track ended", this.kind, this.label, this), e.type && t.dispatchEvent(e)
        }
        return t.videoSize = [640, 480, 640, 480], void 0 !== e.local && !0 !== e.local || (t.local = !0), t.initialized = !t.local, t._streamInitID = null,
          function(e) {
            e.audioMixing = { audioContextInited: !1, defaultVolume: 100, inEarMonitoring: "FILE", sounds: {}, states: { IDLE: "IDLE", STARTING: "STARTING", BUSY: "BUSY", PAUSED: "PAUSED" }, inEarMonitoringModes: { NONE: "NONE", FILE: "FILE", MICROPHONE: "MOCROPHONE", ALL: "ALL" }, ctx: null, mediaStreamSource: null, mediaStreamDest: null, buffer: {} }, e._initSoundIfNotExists = function(t, n) { e.audioMixing.sounds[t] || (e.audioMixing.sounds[t] = { soundId: t, state: "IDLE", muted: e.userMuteAudio, filePath: n, volume: e.audioMixing.defaultVolume, startAt: null, startOffset: null, pauseAt: null, pauseOffset: null, resumeAt: null, resumeOffset: null, stopAt: null, options: null, source: null }) }, e._initSoundIfNotExists(-1), e.loadAudioBuffer = function(t, n, r) {
              var i = p.report.reportApiInvoke(e.sid, { callback: r, name: "Stream.loadAudioBuffer", options: arguments, tag: "tracer" });
              Object(_.checkValidString)(n, "url", 1, 1024, !1), Object(_.checkValidString)(t, "id", 1, 1024, !1);
              var o = function(t) { c.default.error("[".concat(e.streamId, "] loadAudioBuffer Failed: ") + t), i(u.default.LOAD_AUDIO_FAILED) },
                a = new XMLHttpRequest;
              a.open("GET", n, !0), a.responseType = "arraybuffer", a.onload = function() {
                if (a.status > 400) o("".concat(a.status, " ").concat(a.statusText));
                else {
                  var n = a.response;
                  e.audioMixing.audioContextInited || e._initAudioContext(), e.audioMixing.ctx.decodeAudioData(n, (function(n) { e.audioMixing.buffer[t] = n, i(null) }), (function(t) { c.default.error("[".concat(e.streamId, "] decodeAudioData Failed: "), t), i(t) }))
                }
              }, a.onerror = function() { return o("load error") }, a.ontimeout = function() { return o("timeout") }, a.send()
            }, e.createAudioBufferSource = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { name: "Stream.createAudioBufferSource", options: arguments, tag: "tracer" });
              if (e.audioMixing.buffer[t.id]) {
                var r = e.audioMixing.buffer[t.id],
                  i = e.audioMixing.ctx.createBufferSource();
                i.buffer = r;
                var a = e.audioMixing.ctx.createGain();
                if (i.connect(a), a.connect(e.audioMixing.mediaStreamDest), i.gainNode = a, t.loop) i.loop = !0, i.start(0, t.playTime / 1e3);
                else if (t.cycle > 1)
                  if (Object(o.isChrome)()) {
                    i.loop = !0;
                    var s = t.cycle * r.duration * 1e3 - (t.playTime || 0);
                    i.start(0, t.playTime / 1e3, s / 1e3)
                  } else c.default.warning("[".concat(e.streamId, "] Cycle Param is ignored by current browser")), i.start(0, t.playTime / 1e3);
                else i.start(0, t.playTime / 1e3);
                var d = e.audioMixing.sounds[t.soundId];
                return d.source = i, e._flushAudioMixingMuteStatus(), i.addEventListener("ended", (function() { i === d.source && e.dispatchEvent({ type: "audioSourceEnded", soundId: t.soundId, source: i, sound: d }) })), n(), i
              }
              var u = "AUDIOBUFFER_NOT_FOUND";
              return c.default.error("[".concat(e.streamId, "] "), u, t.id), n(!1), !1
            }, e.on("audioSourceEnded", (function(t) {
              var n = t.source,
                r = t.sound;
              r && r.state === e.audioMixing.states.BUSY && !r.pauseAt && (r.state = e.audioMixing.states.IDLE, r.startAt = null, r.startOffset = null, r.resumeAt = null, r.resumeOffset = null, n.gainNode && n.gainNode.disconnect && n.gainNode.disconnect(), n.buffer = null, e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest))
            })), e.clearAudioBufferSource = function() { e.audioBufferSource.forEach((function(e) { e.stop() })) }, e._isSoundExists = function(t) { return !!e.audioMixing.sounds[t.soundId] || (c.default.error("SoundId not exists. #".concat(t.soundId)), !1) }, e._initAudioContext = function() {
              if (e.audioMixing.audioContextInited) throw new Error("Failed to init audio context. Already inited");
              if (!e.stream) throw new Error("Failed to init audio context. Local Stream not initialized");
              e.audioMixing.ctx = Object(S.a)(), e.audioMixing.mediaStreamSource = e.audioMixing.ctx.createMediaStreamSource(e.stream), e.audioMixing.mediaStreamDest = e.audioMixing.ctx.createMediaStreamDestination(), e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest);
              var t = e.stream.getVideoTracks()[0];
              if (t && e.audioMixing.mediaStreamDest.stream.addTrack(t), e._originStream = e.stream, e._isAudioMuted() ? (e._unmuteAudio(), e.stream = e.audioMixing.mediaStreamDest.stream, e._muteAudio()) : e.stream = e.audioMixing.mediaStreamDest.stream, e.audioLevelHelper = null, e.pc && e.pc.peerConnection && e.pc.peerConnection) {
                var n = (e.pc.peerConnection && e.pc.peerConnection.getSenders()).find((function(e) { return e && e.track && "audio" == e.track.kind })),
                  r = e.audioMixing.mediaStreamDest.stream.getAudioTracks()[0];
                n && n.replaceTrack && r && n.replaceTrack(r)
              }
              e.audioMixing.audioContextInited = !0
            }, e._cleanupAudioMixing = function() {
              if (e.audioMixing.audioContextInited) {
                for (var t in e.audioMixing.sounds) {
                  var n = e.audioMixing.sounds[t];
                  n.state !== e.audioMixing.states.BUSY && n.state !== e.audioMixing.states.PAUSED || e._stopOneEffect({ soundId: t })
                }
                e.audioLevelHelper = null, e.audioMixing.audioContextInited = !1
              }
            }, e._reloadInEarMonitoringMode = function(t) {
              if (t) {
                if (!e.audioMixing.inEarMonitoringModes[t]) return c.default.error("[".concat(e.streamId, "] Invalid InEarMonitoringMode ").concat(t));
                e.audioMixing.inEarMonitoring = t
              }
              switch (e.audioMixing.audioContextInited || e._initAudioContext(), e.audioMixing.inEarMonitoring) {
                case e.audioMixing.inEarMonitoringModes.FILE:
                  e.audioMixing.mediaStreamSource.connectedToDestination && (e.audioMixing.mediaStreamSource.disconnect(e.audioMixing.ctx.destination), e.audioMixing.mediaStreamSource.connectedToDestination = !1);
                case e.audioMixing.inEarMonitoringModes.ALL:
                  for (var n in e.audioMixing.sounds) {
                    var r = e.audioMixing.sounds[n];
                    r && r.source && !r.source.connectedToDestination && (r.source.gainNode.connect(e.audioMixing.ctx.destination), r.source.connectedToDestination = !0)
                  }
              }
              switch (e.audioMixing.inEarMonitoring) {
                case e.audioMixing.inEarMonitoringModes.MICROPHONE:
                  e.audioMixing.source.forEach((function(t) { t.connectedToDestination && (t.gainNode.disconnect(e.audioMixing.ctx.destination), t.connectedToDestination = !1) }));
                case e.audioMixing.inEarMonitoringModes.ALL:
                  e.audioMixing.mediaStreamSource.connectedToDestination || (e.audioMixing.mediaStreamSource.connect(e.audioMixing.ctx.destination), e.audioMixing.mediaStreamSource.connectedToDestination = !0)
              }
            }, e._startAudioMixingBufferSource = function(t) {
              e.audioMixing.audioContextInited || e._initAudioContext();
              var n = { soundId: t.soundId, id: t.filePath, loop: t.loop, cycle: t.cycle, playTime: t.playTime || 0 },
                r = t.replace,
                i = e.createAudioBufferSource(n);
              return i.sound = e.audioMixing.sounds[t.soundId], i ? (i.addEventListener("ended", e._audioMixingFinishedListener, { once: !0 }), e._reloadInEarMonitoringMode(), r && e.audioMixing.mediaStreamSource.disconnect(e.audioMixing.mediaStreamDest), i) : null
            }, e._stopAudioMixingBufferSource = function(t) { var n = e.audioMixing.sounds[t.soundId].source; return n ? (n.removeEventListener("ended", e._audioMixingFinishedListener), e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest), n.stop(), n.gainNode && n.gainNode.disconnect && n.gainNode.disconnect(), n.buffer = null, n) : null }, e._flushAudioMixingMuteStatus = function(t) {
              for (var n in e.audioMixing.sounds) {
                var r = e.audioMixing.sounds[n];
                r && (void 0 !== t && (r.muted = !!t), r.source && (r.muted ? r.source.gainNode.gain.value = 0 : r.source.gainNode.gain.value = r.volume / 100))
              }
            }, e._handleAudioMixingInvalidStateError = function(t, n, r) {
              var i = e.audioMixing.sounds[n.soundId],
                o = -1 === n.soundId ? "INVALID_AUDIO_MIXING_STATE" : "INVALID_PLAY_EFFECT_STATE";
              c.default.error("[".concat(e.streamId, "] Cannot ").concat(t, ": ").concat(o, ", state is ").concat(i.state)), r && r(o)
            }, e._handleAudioMixingNoSourceError = function(t, n, r) {
              e.audioMixing.sounds[n.soundId].state = e.audioMixing.states.IDLE;
              var i = -1 === n.soundId ? "NO_AUDIO_MIXING_SOURCE" : "NO_EFFECT_SOURCE";
              c.default.error("[".concat(e.streamId, "] Cannot ").concat(t, ": ").concat(i)), r && r(i)
            }, e._getOneEffectStates = function(t) { var n = e.audioMixing.sounds[t.soundId]; return function() { return n ? { state: n.state, startAt: n.startAt, resumeAt: n.resumeAt, pauseOffset: n.pauseOffset, pauseAt: n.pauseAt, resumeOffset: n.resumeOffset, stopAt: n.stopAt, duration: e._getOneEffectDuration(t), position: e._getOneEffectCurrentPosition(t) } : {} } }, e._audioMixingFinishedListener = function() {
              var t = this.sound;
              t.state === e.audioMixing.states.IDLE && e.audioMixing.buffer[t.options.filePath] && !t.options.cacheResource && (c.default.debug("Recycled buffer ".concat(t.options.filePath)), delete e.audioMixing.buffer[t.options.filePath]), -1 === t.soundId && e.dispatchEvent({ type: "audioMixingFinished" })
            }, e._playOneEffect = function(t, n) {
              Object(_.checkValidObject)(t, "options");
              var r = t.soundId,
                i = (t.filePath, t.cacheResource);
              t.cycle, t.loop, t.playTime, t.replace;
              if (Object(o.isSafari)() && Object(o.getBrowserVersion)() < 12) { var a = "BROWSER_NOT_SUPPORT"; return c.default.error("[".concat(e.streamId, "] Cannot _playOneEffect: "), a), n(a) }
              e.audioMixing.audioContextInited || e._initAudioContext(), e._initSoundIfNotExists(r);
              var s = e.audioMixing.sounds[r];
              if (s.state === e.audioMixing.states.IDLE) {
                if (void 0 !== t.cycle && !t.cycle > 0) { a = "Invalid Parmeter cycle: " + t.cycle; return c.default.error("[".concat(e.streamId, "] ").concat(r), a), n(a) }
                if (Object(_.isEmpty)(i) && (t.cacheResource = !0), s.state = e.audioMixing.states.STARTING, s.options = t, e.audioMixing.buffer[t.filePath]) {
                  var d = e._startAudioMixingBufferSource(t);
                  if (d) return s.source = d, s.startAt = Date.now(), s.resumeAt = null, s.pauseOffset = null, s.pauseAt = null, s.resumeOffset = null, s.stopAt = null, s.startOffset = t.playTime || 0, s.state = e.audioMixing.states.BUSY, e._flushAudioMixingMuteStatus(), n(null);
                  s.state = e.audioMixing.states.IDLE;
                  var u = "CREATE_BUFFERSOURCE_FAILED";
                  if (n) return n(u);
                  c.default.error("[".concat(e.streamId, "] "), u)
                } else e.loadAudioBuffer(t.filePath, t.filePath, (function(r) {
                  if (r) s.state = e.audioMixing.states.IDLE, n ? n(r) : c.default.error("[".concat(e.streamId, "] "), r);
                  else {
                    var i = e._startAudioMixingBufferSource(t);
                    if (i) return s.source = i, s.startAt = Date.now(), s.resumeAt = null, s.pauseOffset = null, s.pauseAt = null, s.resumeOffset = null, s.stopAt = null, s.startOffset = t.playTime || 0, s.state = e.audioMixing.states.BUSY, e._flushAudioMixingMuteStatus(), n(null);
                    s.state = e.audioMixing.states.IDLE;
                    r = "CREATE_BUFFERSOURCE_FAILED";
                    if (n) return n(r);
                    c.default.error("[".concat(e.streamId, "] "), r)
                  }
                }))
              } else e._handleAudioMixingInvalidStateError("_playEffect", t, n)
            }, e._stopOneEffect = function(t, n) { var r = e.audioMixing.sounds[t.soundId]; return e._isSoundExists(t) ? r.state === e.audioMixing.states.BUSY || r.state === e.audioMixing.states.PAUSED ? (e._stopAudioMixingBufferSource(t), r.stopAt = Date.now(), r.state = e.audioMixing.states.IDLE, e.audioMixing.buffer[r.options.filePath] && !r.options.cacheResource && (c.default.debug("Recycled buffer ".concat(r.options.filePath)), delete e.audioMixing.buffer[r.options.filePath]), void(n && n(null))) : void e._handleAudioMixingInvalidStateError("_stopOneEffect", t, n) : n("SOUND_NOT_EXISTS") }, e._pauseOneEffect = function(t, n) {
              var r = e.audioMixing.sounds[t.soundId];
              if (r.state === e.audioMixing.states.BUSY) return e._stopAudioMixingBufferSource(t) ? (r.pauseAt = Date.now(), r.state = e.audioMixing.states.PAUSED, r.resumeAt ? r.pauseOffset = r.pauseAt - r.resumeAt + r.resumeOffset : r.pauseOffset = r.pauseAt - r.startAt + r.startOffset, n && n(null)) : void e._handleAudioMixingNoSourceError("_pauseOneEffect", t, n);
              e._handleAudioMixingInvalidStateError("_pauseOneEffect", t, n)
            }, e._resumeOneEffect = function(t, n) {
              var r = e.audioMixing.sounds[t.soundId];
              if (r.state === e.audioMixing.states.PAUSED) {
                var i = { soundId: t.soundId, filePath: r.options.filePath, cycle: r.options.cycle, loop: r.options.loop, playTime: r.pauseOffset, replace: r.options.replace },
                  o = e._startAudioMixingBufferSource(i);
                if (!o) { var a = "CREATE_BUFFERSOURCE_FAILED"; return n(a), void c.default.error("[".concat(e.streamId, "] "), a) }
                r.source = o, r.resumeAt = Date.now(), r.resumeOffset = r.pauseOffset, r.state = e.audioMixing.states.BUSY, r.pauseAt = null, r.pauseOffset = null, n(null)
              } else e._handleAudioMixingInvalidStateError("_resumeOneEffect", t, n)
            }, e._getOneEffectDuration = function(t) { var n = e.audioMixing.sounds[t.soundId]; return n.options && n.options.filePath && e.audioMixing.buffer[n.options.filePath] ? 1e3 * e.audioMixing.buffer[n.options.filePath].duration : null }, e._getOneEffectCurrentPosition = function(t, n) { var r = e.audioMixing.sounds[t.soundId]; return r.state === e.audioMixing.states.PAUSED ? r.pauseOffset % e._getOneEffectDuration(t) : r.state === e.audioMixing.states.BUSY ? r.resumeAt ? (Date.now() - r.resumeAt + r.resumeOffset) % e._getOneEffectDuration(t) : (Date.now() - r.startAt + r.startOffset) % e._getOneEffectDuration(t) : void(n && e._handleAudioMixingInvalidStateError("_getOneEffectCurrentPosition", t)) }, e._setOneEffectPosition = function(t, n, r) {
              var i = e.audioMixing.sounds[t.soundId];
              if (i.state === e.audioMixing.states.BUSY) {
                if (!e._stopAudioMixingBufferSource(t)) return void e._handleAudioMixingNoSourceError("_setOneEffectPosition", t, r);
                var o = { soundId: t.soundId, filePath: i.options.filePath, loop: i.options.loop, cycle: i.options.cycle, playTime: n },
                  a = e._startAudioMixingBufferSource(o);
                if (!a) { var s = "CREATE_BUFFERSOURCE_FAILED"; return r && r(s), void c.default.error("[".concat(e.streamId, "] "), s) }
                i.source = a, i.startAt = Date.now(), i.startOffset = n, i.resumeAt = null, i.resumeOffset = null, i.pauseOffset = null, i.pauseAt = null
              } else {
                if (i.state !== e.audioMixing.states.PAUSED) return void e._handleAudioMixingInvalidStateError("_setOneEffectPosition", t, r);
                i.pauseOffset = n
              }
              r && r(null)
            }, e.startAudioMixing = function(t, n) {
              var r = p.report.reportApiInvoke(e.sid, {
                callback: function(t) {
                  if (t) return n && n(t);
                  e.dispatchEvent({ type: "audioMixingPlayed" }), n && n(null)
                },
                getStates: e._getOneEffectStates({ soundId: -1 }),
                name: "Stream.startAudioMixing",
                options: t
              });
              Object(_.checkValidObject)(t, "options");
              var o = t.filePath,
                a = t.cacheResource,
                s = t.cycle,
                c = t.loop,
                d = t.playTime,
                u = t.replace;
              Object(_.checkValidString)(o, "filePath", 1, Object(l.getParameter)("FILEPATH_LENMAX"), !1), Object(_.checkValidNumber)(d, "playTime", 0, 1e8), !Object(_.isEmpty)(s) && Object(_.checkValidNumber)(s, "cycle"), !Object(_.isEmpty)(c) && Object(_.checkValidBoolean)(c, "loop"), !Object(_.isEmpty)(u) && Object(_.checkValidBoolean)(u, "replace"), !Object(_.isEmpty)(a) && Object(_.checkValidBoolean)(a, "cacheResource");
              var f = i()({ soundId: -1 }, t);
              e._playOneEffect(f, r)
            }, e.stopAudioMixing = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { callback: t, getStates: e._getOneEffectStates({ soundId: -1 }), name: "Stream.stopAudioMixing" });
              e._stopOneEffect({ soundId: -1 }, n)
            }, e.pauseAudioMixing = function(t) { var n = p.report.reportApiInvoke(e.sid, { callback: t, getStates: e._getOneEffectStates({ soundId: -1 }), name: "Stream.pauseAudioMixing" }); return e._pauseOneEffect({ soundId: -1 }, n) }, e.resumeAudioMixing = function(t) {
              var n = p.report.reportApiInvoke(e.sid, {
                callback: function(n, r) {
                  if (n) return t && t(n);
                  e.dispatchEvent({ type: "audioMixingPlayed" }), t && t(null)
                },
                getStates: e._getOneEffectStates({ soundId: -1 }),
                name: "Stream.resumeAudioMixing"
              });
              e._resumeOneEffect({ soundId: -1 }, n)
            }, e.adjustAudioMixingVolume = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { getStates: e._getOneEffectStates({ soundId: -1 }), name: "Stream.adjustAudioMixingVolume", options: arguments, tag: "tracer" });
              Object(_.checkValidNumber)(t, "volume", 0, 100), e.audioMixing.sounds[-1].volume = t, e._flushAudioMixingMuteStatus(), n()
            }, e.getAudioMixingDuration = function() {
              var t = p.report.reportApiInvoke(e.sid, { getStates: e._getOneEffectStates({ soundId: -1 }), name: "Stream.getAudioMixingDuration" }),
                n = e._getOneEffectDuration({ soundId: -1 });
              return t(null, n), n
            }, e.getAudioMixingCurrentPosition = function() {
              var t = p.report.reportApiInvoke(e.sid, { getStates: e._getOneEffectStates({ soundId: -1 }), name: "Stream.getAudioMixingCurrentPosition" }),
                n = e._getOneEffectCurrentPosition({ soundId: -1 }, !0);
              return t(null, n), n
            }, e.setAudioMixingPosition = function(t, n) {
              var r = p.report.reportApiInvoke(e.sid, { callback: n, options: arguments, tag: "tracer", getStates: e._getOneEffectStates({ soundId: -1 }), name: "Stream.setAudioMixingPosition" });
              Object(_.checkValidNumber)(t, "position", 0, 1e8), e._setOneEffectPosition({ soundId: -1 }, t, r)
            }, e.playEffect = function(t, n) {
              var r = p.report.reportApiInvoke(e.sid, {
                callback: function(t) {
                  if (t) return n && n(t);
                  e.dispatchEvent({ type: "effectPlayed" }), n && n(null)
                },
                name: "Stream.playEffect",
                options: t
              });
              Object(_.checkValidObject)(t, "options");
              var i = t.soundId,
                o = t.filePath,
                a = t.cycle;
              Object(_.checkValidNumber)(i, "soundId", 1, 1e4), Object(_.checkValidString)(o, "filePath", 0, Object(l.getParameter)("FILEPATH_LENMAX"), !1), !Object(_.isEmpty)(a) && Object(_.checkValidNumber)(a, "cycle"), e._playOneEffect(t, r)
            }, e.stopEffect = function(t, n) {
              var r = p.report.reportApiInvoke(e.sid, { callback: n, getStates: e._getOneEffectStates({ soundId: t }), name: "Stream.stopEffect" });
              Object(_.checkValidNumber)(t, "soundId", 1, 1e4), e._stopOneEffect({ soundId: t }, r)
            }, e.stopAllEffects = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { callback: t, name: "Stream.stopAllEffect" }),
                r = !1,
                i = 0,
                o = 0,
                a = function(e) { r || (e ? (n(e), r = !0) : i += 1, i === o && (n(null), r = !0)) };
              for (var s in e.audioMixing.sounds) { var c = e.audioMixing.sounds[s]; - 1 !== c.soundId && (c.state !== e.audioMixing.states.BUSY && c.state !== e.audioMixing.states.PAUSED || (o++, e._stopOneEffect({ soundId: s }, a))) }
              o || n(null)
            }, e.preloadEffect = function(t, n, r) {
              var i = p.report.reportApiInvoke(e.sid, { callback: r, options: arguments, tag: "tracer", name: "Stream.preloadEffect" });
              Object(_.checkValidNumber)(t, "soundId", 1, 1e4), Object(_.checkValidString)(n, "filePath", 1, Object(l.getParameter)("FILEPATH_LENMAX"), !1), e._initSoundIfNotExists(t, n), e.audioMixing.buffer[n] ? i(null) : e.loadAudioBuffer(n, n, i)
            }, e.unloadEffect = function(t, n) {
              var r = p.report.reportApiInvoke(e.sid, { callback: n, options: arguments, tag: "tracer", name: "Stream.unloadEffect" });
              Object(_.checkValidNumber)(t, "soundId", 1, 1e4);
              var i = e.audioMixing.sounds[t];
              if (!i) { var o = "SOUND_NOT_EXISTS"; return c.default.error(o, t), void r(o) }
              var a = i.options ? i.options.filePath : i.filePath;
              if (a) delete e.audioMixing.buffer[a], delete e.audioMixing.sounds[t], r(null);
              else {
                var s = "SOUND_BUFFER_NOT_FOUND";
                c.default.error(s, t), r(s)
              }
            }, e.pauseEffect = function(t, n) { var r = p.report.reportApiInvoke(e.sid, { callback: n, options: arguments, tag: "tracer", name: "Stream.pauseEffect" }); return e._pauseOneEffect({ soundId: t }, r) }, e.pauseAllEffects = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { callback: t, name: "Stream.pauseAllEffects" }),
                r = !1,
                i = 0,
                o = 0,
                a = function(e) { r || (e ? (n(e), r = !0) : i += 1, i === o && (n(null), r = !0)) };
              for (var s in e.audioMixing.sounds) "-1" !== s && e.audioMixing.sounds[s].state === e.audioMixing.states.BUSY && (o++, e._pauseOneEffect({ soundId: s }, a));
              o || n(null)
            }, e.resumeEffect = function(t, n) { Object(_.checkValidNumber)(t, "soundId", 1, 1e4); var r = p.report.reportApiInvoke(e.sid, { callback: n, options: arguments, tag: "tracer", name: "Stream.resumeEffect" }); return e._resumeOneEffect({ soundId: t }, r) }, e.resumeAllEffects = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { callback: t, name: "Stream.resumeAllEffects" }),
                r = !1,
                i = 0,
                o = 0,
                a = function(e) { r || (e ? (n(e), r = !0) : i += 1, i === o && (n(null), r = !0)) };
              for (var s in e.audioMixing.sounds) "-1" !== s && e.audioMixing.sounds[s].state === e.audioMixing.states.PAUSED && (o++, e._resumeOneEffect({ soundId: s }, a));
              o || n(null)
            }, e.getEffectsVolume = function() {
              var t = [];
              for (var n in e.audioMixing.sounds) {
                var r = e.audioMixing.sounds[n];
                r && "-1" !== n && t.push({ soundId: parseInt(n), volume: r.volume })
              }
              return t
            }, e.setEffectsVolume = function(t, n) {
              var r = p.report.reportApiInvoke(e.sid, { name: "Stream.setEffectsVolume", options: arguments, tag: "tracer", callback: n });
              for (var i in Object(_.checkValidNumber)(t, "volume", 0, 100), e.audioMixing.defaultVolume = t, e.audioMixing.sounds) { var o = e.audioMixing.sounds[i]; "-1" !== i && (o.volume = t) }
              e._flushAudioMixingMuteStatus(), r(null)
            }, e.setVolumeOfEffect = function(t, n, r) {
              var i = p.report.reportApiInvoke(e.sid, { name: "Stream.setVolumeOfEffect", options: arguments, tag: "tracer", callback: r });
              Object(_.checkValidNumber)(t, "soundId", 0, 1e4), Object(_.checkValidNumber)(n, "volume", 0, 100), e._initSoundIfNotExists(t);
              var o = e.audioMixing.sounds[t];
              o.volume = n, e._flushAudioMixingMuteStatus(), i(null)
            }
          }(t), y.a.addVideoEffectCapability(t),
          function(e, t) {
            e.videoConstraint = {}, t.cameraId && (e.videoConstraint.deviceId = { exact: t.cameraId }), t.facingMode && (e.videoConstraint.facingMode = t.facingMode), e.videoSize && (e.videoConstraint.width = e.videoSize[0], e.videoConstraint.height = e.videoSize[1]), Object(o.isLegacyChrome)() || (e.videoConstraint.frameRate = 30), e.audioConstraint = {}, t.microphoneId && (e.audioConstraint.deviceId = { exact: t.microphoneId }), Object(o.isLegacyChrome)() || e.audioProcessing && (void 0 !== e.audioProcessing.AGC && (Object(o.isFireFox)() ? e.audioConstraint.autoGainControl = e.audioProcessing.AGC : Object(o.isChrome)() && (e.audioConstraint.googAutoGainControl = e.audioProcessing.AGC, e.audioConstraint.googAutoGainControl2 = e.audioProcessing.AGC)), void 0 !== e.audioProcessing.AEC && (e.audioConstraint.echoCancellation = e.audioProcessing.AEC), void 0 !== e.audioProcessing.ANS && (Object(o.isFireFox)() ? e.audioConstraint.noiseSuppression = e.audioProcessing.ANS : Object(o.isChrome)() && (e.audioConstraint.googNoiseSuppression = e.audioProcessing.ANS))), e.screenConstraint = {}, t.sourceId && (e.screenConstraint.sourceId = t.sourceId), t.extensionId && Object(o.isChrome)() ? (e.screenConstraint.extensionId = t.extensionId, e.screenConstraint.mandatory = { chromeMediaSource: "desktop", maxWidth: e.screenAttributes.width, maxHeight: e.screenAttributes.height, maxFrameRate: e.screenAttributes.maxFr, minFrameRate: e.screenAttributes.minFr }) : (e.screenConstraint.mediaSource = "screen", e.screenConstraint.width = e.screenAttributes.width, e.screenConstraint.height = e.screenAttributes.height, e.screenConstraint.frameRate = { ideal: e.screenAttributes.maxFr, max: e.screenAttributes.maxFr }), t.mediaSource && (e.screenConstraint.mediaSource = t.mediaSource), e.setVideoResolution = function(n) {
              var r = p.report.reportApiInvoke(e.sid, { name: "Stream.setVideoResolution", options: arguments, tag: "tracer" });
              if (!(n instanceof Array)) { var o = I(n += ""); return o && o.video ? (e.videoConstraint = i()(e.videoConstraint, { width: { ideal: o.video.width }, height: { ideal: o.video.height } }), t.attributes.resolution = o.attributes.resolution, (a = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0]) && a.applyConstraints ? (c.default.debug("setVideoResolution applyConstraints", e.videoConstraint), a.applyConstraints(e.videoConstraint).then(r).catch(r)) : r(), !0) : (r("NO_PROFILE_".concat(n)), !1) }
              var a, s = n[0],
                d = n[1];
              e.videoConstraint = i()(e.videoConstraint, { width: { ideal: s }, height: { ideal: d } }), t.attributes.resolution = "".concat(s, "x").concat(d), (a = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0]) && a.applyConstraints ? (c.default.debug("setVideoResolution applyConstraints", e.videoConstraint), y.a.disableVideoEffect(e).then((function() { return a.applyConstraints(e.videoConstraint).then(r).catch(r) })).then((function() { return y.a.restoreVideoEffect(e) }))) : r()
            }, e.setVideoFrameRate = function(t) { var n = p.report.reportApiInvoke(e.sid, { name: "Stream.setVideoFrameRate", options: arguments, tag: "tracer" }); if (Object(o.isFireFox)()) return n("FIREFOX_NOT_SUPPORTED"), !1; if ("object" === T()(t) && t instanceof Array && t.length > 1) { e.videoConstraint = i()(e.videoConstraint, { frameRate: t[0] }), e.attributes.minFrameRate = t[0], e.attributes.maxFrameRate = t[1]; var r = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0]; return r && r.applyConstraints ? (c.default.debug("setVideoFrameRate applyConstraints", e.videoConstraint), r.applyConstraints(e.videoConstraint).then(n).catch(n)) : n(), !0 } return n("INVALID_PARAM_".concat(JSON.stringify(t))), !1 }, e.setVideoBitRate = function(n) { var r = p.report.reportApiInvoke(e.sid, { name: "Stream.setVideoBitRate", options: arguments, tag: "tracer" }); return "object" === T()(n) && n instanceof Array && n.length > 1 ? (t.attributes.minVideoBW = n[0], t.attributes.maxVideoBW = n[1], e.connectionSpec && (e.connectionSpec.minVideoBW = n[0], e.connectionSpec.maxVideoBW = n[1]), e.pc && e.pc.renegotiate && e.pc.renegotiate(), r(), !0) : (r("INVALID_PARAM_".concat(JSON.stringify(n))), !1) }, e.setScreenBitRate = function(t) { var n = p.report.reportApiInvoke(e.sid, { name: "Stream.setScreenBitRate", options: arguments, tag: "tracer" }); return "object" === T()(t) && t instanceof Array && t.length > 1 ? (e.screenAttributes.minVideoBW = t[0], e.screenAttributes.maxVideoBW = t[1], n(), !0) : (n("INVALID_PARAM_".concat(JSON.stringify(t))), !1) }, e.setScreenProfile = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { name: "Stream.setScreenProfile", options: arguments, tag: "tracer" });
              Object(_.checkValidEnum)(t, "profile", ["480p_1", "480p_2", "720p_1", "720p_2", "1080p_1", "1080p_2"]);
              var r = I(t);
              return r && r.screen ? (e.screenConstraint.mandatory ? (e.screenConstraint.mandatory.maxWidth = r.screen.width, e.screenConstraint.mandatory.maxHeight = r.screen.height, r.screen.frameRate && r.screen.frameRate.min && r.screen.frameRate.max && (e.screenConstraint.mandatory.minFrameRate = r.screen.frameRate.min, e.screenConstraint.mandatory.maxFrameRate = r.screen.frameRate.max)) : e.screenConstraint = i()(e.screenConstraint, r.screen), e.screenAttributes.width = r.screen.width, e.screenAttributes.height = r.screen.height, e.screenAttributes.minFr = r.screen.frameRate.min, e.screenAttributes.maxFr = r.screen.frameRate.max, n(), !0) : (n("NO_SCREEN_PROFILE_".concat(JSON.stringify(t))), !1)
            }, e.setVideoProfileCustom = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { name: "Stream.setVideoProfileCustom", options: arguments, tag: "tracer" });
              e.setVideoResolution(t[0]), e.setVideoFrameRate([t[1], t[1]]), e.setVideoBitRate([t[2], t[2]]), n()
            }, e.setVideoProfileCustomPlus = function(n) {
              var r = p.report.reportApiInvoke(e.sid, { name: "Stream.setVideoProfileCustom", options: arguments, tag: "tracer" });
              e.setVideoResolution([n.width, n.height]), t.attributes.resolution = "".concat(n.width, "x").concat(n.height), e.setVideoFrameRate([n.framerate, n.framerate]), e.setVideoBitRate([n.bitrate, n.bitrate]), r()
            }, e.setVideoProfile = function(n) {
              var r = p.report.reportApiInvoke(e.sid, { name: "Stream.setVideoProfile", options: arguments, tag: "tracer" }),
                a = I(n);
              if (!a) { var s = "Invalid Profile ".concat(n); throw new Error(s) }
              if (e.profile = n, a && a.video) { e.profile = a.profileName, e.videoConstraint = i()(e.videoConstraint, a.video), e.connectionSpec && a.attributes.maxVideoBW && (e.connectionSpec.minVideoBW = a.attributes.minVideoBW, e.connectionSpec.maxVideoBW = a.attributes.maxVideoBW), Object(o.isEdge)() && (e.videoConstraint.frameRate.max = 60), Object(o.isFireFox)() && (e.videoConstraint.frameRate = 30), t.attributes = i()(t.attributes, a.attributes), e.pc && e.pc.renegotiate && e.pc.renegotiate(); var d = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0]; return d && d.applyConstraints ? (c.default.debug("setVideoProfile applyConstraints", e.videoConstraint), y.a.disableVideoEffect(e).then((function() { return d.applyConstraints(e.videoConstraint) })).then((function() { return y.a.restoreVideoEffect(e) })).then((function(t) { return new Promise((function(n, i) { r(t), setTimeout((function() { Object(h.vsResHack)(e.stream, (function(t, r) { e.videoWidth = t, e.videoHeight = r, n() }), (function(t) { c.default.warning("[".concat(e.streamId, "] vsResHack failed: "), t), i() })) }), 2500) })) })).catch(r)) : r(), !0 }
              return r("INVALID_VIDEO_PROFILE_".concat(n)), !1
            }, e.setAudioProfile = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { name: "Stream.setAudioProfile", options: arguments, tag: "tracer" });
              Object(_.checkValidEnum)(t, "profile", ["speech_low_quality", "speech_standard", "music_standard", "standard_stereo", "high_quality", "high_quality_stereo"]), e.audioProfile = t;
              var r = b(t);
              return e.highQuality = r.highQuality, e.stereo = r.stereo, e.speech = r.speech, e.lowQuality = r.lowQuality, e.stereo && Object(o.isChrome)() && (e.audioConstraint.googAutoGainControl = !1, e.audioConstraint.googAutoGainControl2 = !1, e.audioConstraint.echoCancellation = !1, e.audioConstraint.googNoiseSuppression = !1), n(), !0
            }, e.setVideoEncoderConfiguration = function(t) {
              Object(_.checkValidObject)(t, "config");
              var n = p.report.reportApiInvoke(e.sid, { name: "Stream.setVideoEncoderConfiguration", options: t, tag: "tracer" });
              t.resolution && (Object(_.checkValidNumber)(t.resolution.width, "config.resolution.width"), Object(_.checkValidNumber)(t.resolution.height, "config.resolution.height"), e.setVideoResolution([t.resolution.width, t.resolution.height])), t.frameRate && (Object(_.checkValidNumber)(t.frameRate.min, "config.frameRate.min"), Object(_.checkValidNumber)(t.frameRate.max, "config.frameRate.max"), e.setVideoFrameRate([t.frameRate.min, t.frameRate.max])), t.bitrate && (Object(_.checkValidNumber)(t.bitrate.min, "config.bitrate.min", 1, 1e7), Object(_.checkValidNumber)(t.bitrate.max, "config.bitrate.max", 1, 1e7), e.setVideoBitRate([t.bitrate.min, t.bitrate.max])), n()
            }, e.getSupportedProfile = function(t) {
              var n = p.report.reportApiInvoke(e.sid, { name: "Stream.getSupportedProfile", options: arguments, tag: "tracer", callback: t });
              if (!e.local) { var r = "ONLY_LOCAL_STREAM_SUPPORTED"; return c.default.error(r), n(r) }
              if (!e.stream) { r = "STREAM_NOT_INIT"; return c.default.error(r), n(r) }
              if (!e.stream.getVideoTracks) { r = "TRACK_NOT_SUPPORT"; return c.default.error(r), n(r) }
              var i = e.stream.getVideoTracks()[0];
              if (!i) { r = "NO_VIDEO_TRACK_FOUND"; return c.default.error(r), n(r) }
              if (!i.getCapabilities) { r = "GETCAPABILITY_NOT_SUPPORT"; return c.default.error(r), n(r) }
              var o = i.getCapabilities(),
                a = A(o);
              return n(null, a)
            }
          }(t, e), t.getId = function() { return t.streamId }, t.getUserId = function() { return t.userId }, t.checkDualStreamEnabled = function() { if (Object(l.getParameter)("DUALSTREAM_OPERATION_CHECK") && t.isDualStream) { return c.default.error("Operation not permitted: ".concat("DUAL_STREAM_ENABLED")), "DUAL_STREAM_ENABLED" } return !1 }, t.setUserId = function(e) {
            var n = p.report.reportApiInvoke(t.sid, { name: "Stream.setUserId", options: arguments, tag: "tracer" });
            t.userId && c.default.warning("[".concat(t.streamId, "] Stream.userId ").concat(t.userId, " => ").concat(e)), t.userId = e, n()
          }, t.getAttributes = function() { return e.screen ? t.screenAttributes : e.attributes }, t.hasAudio = function() { return !!t.audio }, t.hasVideo = function() { return !!t.video }, t.hasScreen = function() { return !!t.screen }, t.hasScreenAudio = function() { return !!t.screenAudio }, t.isVideoOn = function() { return (t.hasVideo() || t.hasScreen()) && !t.userMuteVideo }, t.isAudioOn = function() { return t.hasAudio() && !t.userMuteAudio }, t.init = function(r, i) {
            var o = p.report.reportApiInvoke(t.sid, {
                callback: function(e, t) {
                  if (e) return i && i(e);
                  r && r(t)
                },
                name: "Stream.init",
                options: arguments,
                tag: "tracer"
              }),
              a = ((new Date).getTime(), arguments[2]);
            if (void 0 === a && (a = 2), !0 === t.initialized) return o({ type: "warning", msg: "STREAM_ALREADY_INITIALIZED" });
            if (!0 !== t.local) return o({ type: "warning", msg: "STREAM_NOT_LOCAL" });
            var s = Math.random().toString().slice(3);
            t._streamInitID = s, t.videoSource ? t.videoName = "videoSource" : t.video && (t.videoName = E.a.searchDeviceNameById(e.cameraId) || "default"), t.audioSource ? t.audioName = "audioSource" : t.audio && (t.audioName = E.a.searchDeviceNameById(e.microphoneId) || "default"), t.screen && (t.screenName = e.extensionId || "default");
            try {
              if (e.audio || e.video || e.screen || e.screenAudio || e.videoSource || e.audioSource) {
                c.default.debug("[".concat(t.streamId, "] Requested access to local media"));
                var d = { streamId: t.streamId };
                e.videoSource ? d.videoSource = e.videoSource : e.screen ? d.screen = t.screenConstraint : e.video && (d.video = t.videoConstraint), e.audioSource ? d.audioSource = e.audioSource : e.screenAudio ? d.screenAudio = e.screenAudio : e.audio && (d.audio = t.audioConstraint), Object(m.b)(d, (function(r) {
                  if (d.screenAudio && !r.getAudioTracks()[0] && c.default.warning("[".concat(t.streamId, "] Audio sharing is not selected")), d.screen && c.default.debug("[".concat(t.streamId, "] User has granted access to screen sharing")), (d.video || d.audio) && c.default.debug("[".concat(t.streamId, "] User has granted access to local media")), null === t._streamInitID) { r.getTracks().forEach((function(e) { e.stop() })); var i = { type: "error", msg: "STREAM_IS_CLOSED", info: "stream is closed and cannot be initialized" }; return c.default.error(t.streamId, i.info), void o(i) }
                  if (t._streamInitID !== s) {
                    r.getTracks().forEach((function(e) { e.stop() }));
                    i = { type: "error", msg: "ABORT_OTHER_INIT", info: "stream initialization is aborted because of another stream.init" };
                    return c.default.error(t.streamId, i.info), void o(i)
                  }
                  t.dispatchEvent({ type: "accessAllowed" }), t.stream = r, t.initialized = !0, t.reloadDeviceName(), t.hasVideo() && Object(h.vsResHack)(r, (function(e, n) { t.videoWidth = e, t.videoHeight = n }), (function(e) { c.default.warning("[".concat(t.streamId, "] vsResHack failed: "), e) })), e.screen && t.stream && t.stream.getVideoTracks()[0] && (t.stream.getVideoTracks()[0].onended = function() { t.dispatchEvent({ type: "stopScreenSharing" }) }), t.stream && t.stream.getTracks && t.stream.getTracks().forEach((function(r) { r && !r.onended && (r.onended = n), "video" === r.kind && e.optimizationMode && (r.contentHint = e.optimizationMode, r.contentHint === e.optimizationMode && c.default.debug("[".concat(t.streamId, "] set content hint to"), e.optimizationMode)) })), o()
                }), (function(e) {
                  var n = { type: "error", info: null };
                  switch (e && (n.msg = e.name || e.code || e, e.message && (n.info = e.message), e.code && (n.info ? n.info += ". " + e.code : n.info = " " + e.code), e.constraint && (n.info ? n.info += ". Constraint: " + e.constraint : n.info = "constraint: " + e.constraint)), n.msg) {
                    case "Starting video failed":
                    case "TrackStartError":
                      if (t.videoConstraint && (delete t.videoConstraint.width, delete t.videoConstraint.height), a > 0) return void setTimeout((function() { t.init((function(e) { return o(e) }), o, a - 1) }), 1);
                      n.msg = "MEDIA_OPTION_INVALID";
                      break;
                    case "DevicesNotFoundError":
                      n.msg = "DEVICES_NOT_FOUND";
                      break;
                    case "NotSupportedError":
                      n.msg = "NOT_SUPPORTED";
                      break;
                    case "PermissionDeniedError":
                    case "InvalidStateError":
                      n.msg = "PERMISSION_DENIED", t.dispatchEvent({ type: "accessDenied" });
                      break;
                    case "PERMISSION_DENIED":
                    case "NotAllowedError":
                      t.dispatchEvent({ type: "accessDenied" });
                      break;
                    case "ConstraintNotSatisfiedError":
                      n.msg = "CONSTRAINT_NOT_SATISFIED";
                      break;
                    default:
                      n.msg || (n.msg = "UNDEFINED")
                  }
                  var r = "Media access ".concat(n.msg).concat(n.info ? ": " + n.info : "");
                  c.default.error("[".concat(t.streamId, "] "), r), o(n)
                }))
              } else o({ type: "warning", msg: "STREAM_HAS_NO_MEDIA_ATTRIBUTES" })
            } catch (e) { c.default.error("[".concat(t.streamId, "] Stream init: "), e), o({ type: "error", msg: e.message || e }) }
          }, t.reloadDeviceName = function() {
            if (t.stream) {
              if (t.stream.getVideoTracks) {
                var e = t.stream.getVideoTracks()[0];
                e && e.label && (t.videoName = e.label)
              }
              if (t.stream.getAudioTracks) {
                var n = t.stream.getAudioTracks()[0];
                n && n.label && (t.audioName = n.label)
              }
            }
          }, t.close = function() {
            var e = p.report.reportApiInvoke(null, { name: "Stream.close", options: arguments, tag: "tracer" });
            if (c.default.debug("[".concat(t.streamId, "] Close stream with id"), t.streamId), t._originStream) try { t._originStream.getTracks().map((function(e) { return e.stop() })) } catch (e) {}
            if (void 0 !== t.stream) { var n = t.stream.getTracks(); for (var r in n) n.hasOwnProperty(r) && (n[r].stop(), n[r].onended = null);!t.isLowStream && t.local ? y.a.disableVideoEffect(t).then((function() { t.stream = void 0 })) : (t.stream && t.stream.clean && t.stream.clean(), t.stream = void 0) }
            if (t._originStream) {
              console.log("clear _originStream");
              n = t._originStream.getTracks();
              for (var r in n) n.hasOwnProperty(r) && (n[r].stop(), n[r].onended = null, console.log("clear onended"));
              !t.isLowStream && t.local ? y.a.disableVideoEffect(t).then((function() { t._originStream = void 0 })) : (t._originStream && t._originStream.clean && t._originStream.clean(), t._originStream = void 0)
            }
            if (Object(o.isSafari)() && t.pc && t.pc.peerConnection && t.pc.peerConnection.removeTrack && t.pc.peerConnection.getSenders) {
              var i = t.pc.peerConnection.getSenders();
              i.forEach((function(e) { e && (c.default.debug("[".concat(t.streamId, "] Remove Track"), e), t.pc.peerConnection.removeTrack(e)) }))
            }
            t.local && (t.initialized = !1), t._streamInitID = null, t._onAudioMute = void 0, t._onAudioUnmute = void 0, t._onVideoMute = void 0, t._onVideoUnmute = void 0, t.lowStream && t.lowStream.close(), e()
          }, t.enableAudio = function() { var e, n = p.report.reportApiInvoke(t.sid, { name: "Stream.enableAudio", options: arguments, tag: "tracer" }); return c.default.deprecate("[".concat(t.streamId, "] Stream.enableAudio is deprecated and will be removed in the future. Use Stream.unmuteAudio instead")), t.userMuteAudio || c.default.warning("[".concat(t.streamId, "] User already enableAudio")), t.userMuteAudio = !1, n(null, e = !t.peerMuteAudio && t._unmuteAudio()), e }, t.disableAudio = function() {
            var e = p.report.reportApiInvoke(t.sid, { name: "Stream.disableAudio", options: arguments, tag: "tracer" });
            c.default.deprecate("[".concat(t.streamId, "] Stream.disableAudio is deprecated and will be removed in the future. Use Stream.muteAudio instead")), t.userMuteAudio && c.default.warning("[".concat(t.streamId, "] User already disableAudio")), t.userMuteAudio = !0;
            var n = t._muteAudio();
            return e(null, n), n
          }, t.enableVideo = function() { var e, n = p.report.reportApiInvoke(t.sid, { name: "Stream.enableVideo", options: arguments, tag: "tracer" }); return c.default.deprecate("[".concat(t.streamId, "] Stream.enableVideo is deprecated and will be removed in the future. Use Stream.unmuteVideo instead")), t.userMuteVideo || c.default.warning("[".concat(t.streamId, "] User already enableVideo")), t.userMuteVideo = !1, t.lowStream && (t.lowStream.userMuteVideo = !1), n(null, e = !t.peerMuteVideo && t._unmuteVideo()), e }, t.disableVideo = function() {
            var e = p.report.reportApiInvoke(t.sid, { name: "Stream.disableVideo", options: arguments, tag: "tracer" });
            c.default.deprecate("[".concat(t.streamId, "] Stream.disableVideo is deprecated and will be removed in the future. Use Stream.muteVideo instead")), t.userMuteVideo && c.default.warning("[".concat(t.streamId, "] User already disableVideo")), t.userMuteVideo = !0, t.lowStream && (t.lowStream.userMuteVideo = !0);
            var n = t._muteVideo();
            return e(null, n), n
          }, t.unmuteAudio = function() { var e, n = p.report.reportApiInvoke(t.sid, { name: "Stream.unmuteAudio", options: arguments, tag: "tracer" }); return t.userMuteAudio || c.default.warning("[".concat(t.streamId, "] User already unmuteAudio")), t.userMuteAudio = !1, n(null, e = !t.peerMuteAudio && t._unmuteAudio()), e }, t.muteAudio = function() {
            var e = p.report.reportApiInvoke(t.sid, { name: "Stream.muteAudio", options: arguments, tag: "tracer" });
            t.userMuteAudio && c.default.warning("[".concat(t.streamId, "] User already muteAudio")), t.userMuteAudio = !0;
            var n = t._muteAudio();
            return e(null, n), n
          }, t.unmuteVideo = function() { var e, n = p.report.reportApiInvoke(t.sid, { name: "Stream.unmuteVideo", options: arguments, tag: "tracer" }); return t.userMuteVideo || c.default.warning("[".concat(t.streamId, "] User already unmuteVideo")), t.userMuteVideo = !1, t.lowStream && (t.lowStream.userMuteVideo = !1), n(null, e = !t.peerMuteVideo && t._unmuteVideo()), e }, t.muteVideo = function() {
            var e = p.report.reportApiInvoke(t.sid, { name: "Stream.muteVideo", options: arguments, tag: "tracer" });
            t.userMuteVideo && c.default.warning("[".concat(t.streamId, "] User already muteVideo")), t.userMuteVideo = !0, t.lowStream && (t.lowStream.userMuteVideo = !0);
            var n = t._muteVideo();
            return e(null, n), n
          }, t._unmuteAudio = function() { return c.default.debug("[".concat(t.streamId, "] Unmuted audio stream with id "), t.streamId), t._flushAudioMixingMuteStatus(!1), !(!t.hasAudio() || !t.initialized || void 0 === t.stream || !0 === t.stream.getAudioTracks()[0].enabled) && (t._onAudioUnmute && t._onAudioUnmute(), t.pc && (t.pc.isAudioMute = !1), t.stream.getAudioTracks()[0].enabled = !0, !0) }, t._isAudioMuted = function() { if (t.stream && t.hasAudio()) { var e = t.stream.getAudioTracks(); return e.length > 0 && !e[0].enabled } return !1 }, t._isVideoMuted = function() { if (t.stream && t.hasVideo()) { var e = t.stream.getVideoTracks(); return e.length > 0 && !e[0].enabled } return !1 }, t._muteAudio = function() { return c.default.debug("[".concat(t.streamId, "] Muted audio stream with id "), t.streamId), t._flushAudioMixingMuteStatus(!0), !!(t.hasAudio() && t.initialized && void 0 !== t.stream && t.stream.getAudioTracks()[0].enabled) && (t._onAudioMute && t._onAudioMute(), t.pc && (t.pc.isAudioMute = !0), t.stream.getAudioTracks()[0].enabled = !1, t.sid && p.report.audioSendingStopped(t.sid, { succ: !0, reason: "muteAudio" }), !0) }, t._unmuteVideo = function() { return c.default.debug("[".concat(t.streamId, "] Unmuted video stream with id"), t.streamId), !(!t.initialized || void 0 === t.stream || !t.stream.getVideoTracks().length || !0 === t.stream.getVideoTracks()[0].enabled) && (t._onVideoUnmute && t._onVideoUnmute(), t.pc && (t.pc.isVideoMute = !1), t.stream.getVideoTracks()[0].enabled = !0, t.lowStream && t.lowStream._unmuteVideo(), !0) }, t._muteVideo = function() { return c.default.debug("[".concat(t.streamId, "] Muted video stream with id"), t.streamId), !!(t.initialized && void 0 !== t.stream && t.stream.getVideoTracks().length && t.stream.getVideoTracks()[0].enabled) && (t._onVideoMute && t._onVideoMute(), t.pc && (t.pc.isVideoMute = !0), t.stream.getVideoTracks()[0].enabled = !1, t.lowStream && t.lowStream._muteVideo(), t.sid && p.report.videoSendingStopped(t.sid, { succ: !0, reason: "muteVideo" }), !0) }, t.addTrack = function(r) {
            var i = p.report.reportApiInvoke(t.sid, { name: "Stream.addTrack", options: arguments, tag: "tracer" });
            if (t.pc && t.pc.addTrack(r, t.stream), "audio" == r.kind) {
              t._cleanupAudioMixing();
              var o = new MediaStream;
              t.userMuteAudio && (r.enabled = !1), o.addTrack(r);
              var a = t.stream.getVideoTracks()[0];
              a && o.addTrack(a), t.audio = !0, e.audio = !0, t.stream = o, t.audioLevelHelper = null, t.player && t.player.video && (t.player.video.srcObject = t.stream)
            } else t.userMuteVideo && (r.enabled = !1), t.stream.addTrack(r), t.video = !0, e.video = !0;
            r.onended || (r.onended = n), i()
          }, t.removeTrack = function(n) {
            var r = p.report.reportApiInvoke(t.sid, { name: "Stream.removeTrack", options: arguments, tag: "tracer" });
            t.pc && t.pc.removeTrack(n, t.stream), t.stream.removeTrack(n), t._cleanupAudioMixing(), "audio" === n.kind ? (t.audio = !1, e.audio = !1) : (t.video = !1, e.video = !1), t.audioLevelHelper = null, "live" == n.readyState && (n.stop(), c.default.debug("[".concat(t.streamId, "] Track ").concat(n.kind, " Stopped"))), r()
          }, t.setAudioOutput = function(e, n, r) {
            var i = p.report.reportApiInvoke(t.sid, {
              callback: function(e, t) {
                if (e) return r && r(e);
                n && n(t)
              },
              name: "Stream.setAudioOutput",
              options: arguments,
              tag: "tracer"
            });
            return Object(_.isValidString)(e, 1, 255) ? (t.audioOutput = e, t.player ? void t.player.setAudioOutput(e, (function() { return i() }), i) : i()) : (c.default.error("[".concat(t.streamId, "] setAudioOutput Invalid Parameter"), e), i(u.default.INVALID_PARAMETER))
          }, t.play = function(e, n, r) {
            "function" == typeof n && (r = n, n = null), c.default.debug("[".concat(t.streamId, "] play()."), e, n);
            var i = p.report.reportApiInvoke(t.sid, { name: "Stream.play", options: arguments, tag: "tracer", callback: r });
            if (Object(_.checkValidString)(e, "elementID"), Object(_.isEmpty)(n) || (Object(_.isEmpty)(n.fit) || Object(_.checkValidEnum)(n.fit, "fit", ["cover", "contain"]), Object(_.isEmpty)(n.muted) || Object(_.checkValidBoolean)(n.muted, "muted")), t.player) c.default.warning("[".concat(t.streamId, "] Stream.play(): Stream is already playing. Fallback to resume stream")), t.resume().then((function() { i(null) })).catch(i);
            else {
              t.elementID = e, t.playOptions = n, !t.local || t.video || t.screen ? (t.player = new g({ id: t.getId(), stream: t, elementID: e, options: n }), t.local && y.a.applyEffectInPlayer(t)) : t.hasAudio() && (t.player = new g({ id: t.getId(), stream: t, elementID: e, options: n }));
              var o = { video: null, audio: null },
                a = function e(n) {
                  if (o[n.mediaType] = n, o.video && o.audio)
                    if (t.removeEventListener("player-status-change", e), o.video.isErrorState || o.audio.isErrorState) {
                      var r = o.video.isErrorState ? o.video : o.audio;
                      i({ isErrorState: !0, status: r.status, reason: r.reason, video: o.video, audio: o.audio })
                    } else "aborted" === o.video.status && "aborted" === o.audio.status ? i({ status: "aborted", reason: "stop", video: o.video, audio: o.audio }) : i(null)
                };
              t.on("player-status-change", a), t.audioOutput && t.player.setAudioOutput(t.audioOutput), void 0 !== t.audioLevel && t.player.setAudioVolume(t.audioLevel), t._flushAudioMixingMuteStatus(!1)
            }
          }, t.stop = function() {
            var e = p.report.reportApiInvoke(t.sid, { name: "Stream.stop", options: arguments, tag: "tracer" });
            c.default.debug("[".concat(t.streamId, "] Stop stream player with id "), t.streamId), t.player ? (y.a.removeEffectFromLocalPlayer(t), t.player.destroy(), delete t.player) : c.default.error("[".concat(t.streamId, "] Stream.stop(): Stream is not playing")), t._flushAudioMixingMuteStatus(!0), e()
          }, t.isPlaying = function() { return !!t.player }, t.isPaused = function() { return !!t.player && (!!(t.player.video && t.player.video.paused && t.player.mediaElemExists(t.player.video)) || !!(t.player.audio && t.player.audio.paused && t.player.mediaElemExists(t.player.audio))) }, t.resume = function() { var e, n; return t.player ? (t.player.video && t.player.video.play && (e = t.player.video.play()), e = e || Promise.resolve(), t.player.audio && t.player.audio.play && (n = t.player.audio.play()), n = n || Promise.resolve(), Promise.all([e, n])) : Promise.reject("NO_PLAYER_FOUND") }, t.getVideoTrack = function() {
            var e = p.report.reportApiInvoke(t.sid, { name: "Stream.getVideoTrack", options: arguments, tag: "tracer" });
            if (t.stream && t.stream.getVideoTracks) { var n = t.stream.getVideoTracks()[0]; if (n) return c.default.info("[".concat(t.streamId, "] getVideoTrack"), n), e(), n }
            c.default.info("[".concat(t.streamId, "] getVideoTrack None")), e(null, "getVideoTrack None")
          }, t.getAudioTrack = function() {
            var e = p.report.reportApiInvoke(t.sid, { name: "Stream.getAudioTrack", options: arguments, tag: "tracer" });
            if (t.stream && t.stream.getAudioTracks) { var n = t.stream.getAudioTracks()[0]; if (n) return c.default.info("[".concat(t.streamId, "] getAudioTracks"), n), e(), n }
            c.default.info("[".concat(t.streamId, "] getAudioTracks None")), e(null, "getAudioTracks None")
          }, t._hasVideoTracks = function() { return !!(t.stream && t.stream.getVideoTracks && t.stream.getVideoTracks()[0]) }, t._hasAudioTracks = function() { return !!(t.stream && t.stream.getAudioTracks && t.stream.getAudioTracks()[0]) }, t._replaceMediaStreamTrack = function(e, n, r) {
            if (t.stream) {
              if ("video" == e.kind) { if (o = t.stream.getVideoTracks()[0]) return t.userMuteVideo && (e.enabled = !1), t.stream.removeTrack(o), t.stream.addTrack(e), c.default.debug("[".concat(t.streamId, "] _replaceMediaStreamTrack ").concat(e.kind, " SUCCESS")), "live" == o.readyState && (o.stop(), c.default.debug("[".concat(t.streamId, "] Track ").concat(o.kind, " Stopped"))), n && n(); var i = "MEDIASTREAM_TRACK_NOT_FOUND"; return c.default.error("[".concat(t.streamId, "] MEDIASTREAM_TRACK_NOT_FOUND ").concat(e.kind)), r(i) }
              if ("audio" == e.kind) {
                var o;
                if (o = t.stream.getAudioTracks()[0]) {
                  t.userMuteAudio && (e.enabled = !1);
                  var a = new MediaStream;
                  a.addTrack(e);
                  var s = t.stream && t.stream.getVideoTracks()[0];
                  return s && a.addTrack(s), t.stream = a, t.audioLevelHelper = null, t.player && t.player.video && (t.player.video.srcObject = t.stream), c.default.debug("[".concat(t.streamId, "] _replaceMediaStreamTrack SUCCESS")), "live" == o.readyState && (o.stop(), c.default.debug("[".concat(t.streamId, "] Track ").concat(o.kind, " Stopped"))), n && n()
                }
                i = "MEDIASTREAM_TRACK_NOT_FOUND";
                return c.default.error("[".concat(t.streamId, "] MEDIASTREAM_TRACK_NOT_FOUND ").concat(e.kind)), r(i)
              }
              i = "INVALID_TRACK_TYPE";
              return c.default.error("[".concat(t.streamId, "] _replaceMediaStreamTrack ").concat(i, " ").concat(e.kind)), r && r(i)
            }
            i = "NO_STREAM_FOUND";
            return c.default.error("[".concat(t.streamId, "] _replaceMediaStreamTrack ").concat(i)), r && r(i)
          }, t.replaceTrack = function(e, r, i) {
            var o = p.report.reportApiInvoke(t.sid, {
              callback: function(e, t) {
                if (e) return i && i(e);
                r && r(t)
              },
              name: "Stream.replaceTrack",
              options: arguments,
              tag: "tracer"
            });
            return e && e.kind ? (t._cleanupAudioMixing(), e.onended || (e.onended = n), t.pc && t.pc.hasSender && t.pc.hasSender(e.kind) ? void t.pc.replaceTrack(e, (function() { return c.default.debug("[".concat(t.streamId, "] PeerConnection.replaceTrack ").concat(e.kind, " SUCCESS")), t._replaceMediaStreamTrack(e, (function(e) { return o(null, e) }), o) }), (function(n) { return c.default.error("[".concat(t.streamId, "] PeerConnection.replaceTrack ").concat(e.kind, " Failed ").concat(n)), o(n) })) : t._replaceMediaStreamTrack(e, (function(e) { return o(null, e) }), o)) : o("INVALID_TRACK")
          }, t.setAudioVolume = function(e) {
            var n = p.report.reportApiInvoke(t.sid, { name: "Stream.setAudioVolume", options: arguments, tag: "tracer" });
            Object(_.checkValidNumber)(e, "level", 0, 100), t.audioLevel = e, t.player && t.player.setAudioVolume(e), n()
          }, t.getStats = function(e, n, r) {
            var a = [];
            a.push(t._getPCStats(r)), a.push(new Promise((function(e) {
              var n = {};
              t.pc && t.pc.isSubscriber ? null !== window.navigator.userAgent.match("Firefox") && (Object(v.b)(n, "videoReceiveResolutionHeight", t.videoHeight), Object(v.b)(n, "videoReceiveResolutionWidth", t.videoWidth)) : t.pc && !t.pc.isSubscriber && ((Object(o.isSafari)() || Object(o.isFireFox)()) && (Object(v.b)(n, "videoSendResolutionHeight", t.videoHeight), Object(v.b)(n, "videoSendResolutionWidth", t.videoWidth)), (Object(o.isSafari)() || Object(o.isFireFox)()) && t.uplinkStats && Object(v.b)(n, "videoSendPacketsLost", t.uplinkStats.uplink_cumulative_lost)), e(n)
            }))), a.push(new Promise((function(e) { var n = {}; return t.traffic_stats && t.pc && t.pc.isSubscriber ? (Object(v.b)(n, "accessDelay", t.traffic_stats.access_delay), Object(v.b)(n, "endToEndDelay", t.traffic_stats.e2e_delay), Object(v.b)(n, "videoReceiveDelay", t.traffic_stats.video_delay), Object(v.b)(n, "audioReceiveDelay", t.traffic_stats.audio_delay)) : t.traffic_stats && t.pc && !t.pc.isSubscriber && Object(v.b)(n, "accessDelay", t.traffic_stats.access_delay), e(n) }))), Promise.all(a).then((function(n) {
              for (var r = {}, o = n.length - 1; o >= 0; o--) {
                var a = n[o];
                i()(r, a)
              }
              e && setTimeout(e.bind(t, r), 0)
            })).catch((function(e) { n && setTimeout(n.bind(t, e), 0) }))
          }, t._getPCStats = function(e) {
            return new Promise((function(n, r) {
              if (!t.pc || "established" !== t.pc.state || !t.pc.getStats) { return r("PEER_CONNECTION_NOT_ESTABLISHED") }
              t.pc.getStats((function(e) { if (!t.pc || "established" !== t.pc.state || !t.pc.getStats) { return r("PEER_CONNECTION_STATE_CHANGE") } var i = t.pc.isSubscriber ? Object(v.c)(e) : Object(v.a)(e); return n(i) }), e)
            })).then((function(e) { return t.pc.isSubscriber ? (Object(o.isFireFox)() || Object(o.isSafari)()) && (e.videoReceiveResolutionHeight && "0" !== e.videoReceiveResolutionHeight || e.videoReceiveResolutionWidth && "0" !== e.videoReceiveResolutionWidth || (Object(v.b)(e, "videoReceiveResolutionHeight", t.videoHeight), Object(v.b)(e, "videoReceiveResolutionWidth", t.videoWidth))) : ((Object(o.isSafari)() || Object(o.isFireFox)()) && (e.videoSendResolutionHeight && "0" !== e.videoSendResolutionHeight || e.videoSendResolutionWidth && "0" !== e.videoSendResolutionWidth || (Object(v.b)(e, "videoSendResolutionHeight", t.videoHeight), Object(v.b)(e, "videoSendResolutionWidth", t.videoWidth))), (Object(o.isSafari)() || Object(o.isFireFox)()) && t.uplinkStats && Object(v.b)(e, "videoSendPacketsLost", t.uplinkStats.uplink_cumulative_lost)), Promise.resolve(e) }))
          }, t.getAudioLevel = function() {
            if (t.audioLevelHelper) return t.audioLevelHelper.getAudioLevel();
            if (t.stream) {
              if (0 !== t.stream.getAudioTracks().length) return t.audioLevelHelper = new h.audioLevelHelper(t.stream), t.audioLevelHelper.getAudioLevel();
              c.default.warning("[".concat(t.streamId, "] can't get audioLevel beacuse no audio trace in stream"))
            } else c.default.warning("[".concat(t.streamId, "] can't get audioLevel beacuse no stream exist"))
          }, t.setVideoProfile("480p_1"), t._switchVideoDevice = function(e, n, r) {
            if (e === t.cameraId) return n && n();
            var a = { video: i()({}, t.videoConstraint, { deviceId: { exact: e } }), audio: !1 };
            c.default.debug("[".concat(t.streamId, "] ").concat(a)), Object(m.b)(a, (function(i) {
              try {
                var a = function() { t.isPlaying() && (t.stop(), t.elementID && t.play(t.elementID, t.playOptions)), t.cameraId = e, t.videoConstraint.deviceId = { exact: e }, t.userMuteVideo && (t.stream.getVideoTracks()[0].enabled = !1), y.a.restoreVideoEffect(t).then((function() { n && n() })) };
                y.a.disableVideoEffect(t).then((function() { Object(o.isSafari)() ? t.replaceTrack(i.getVideoTracks()[0], a, r) : (t.removeTrack(t.stream.getVideoTracks()[0]), t.addTrack(i.getVideoTracks()[0]), a()) }))
              } catch (e) { return r && r(e) }
            }), (function(e) { return r && r(e) }))
          }, t._switchAudioDevice = function(e, n, r) {
            if (e === t.microphoneId) return n && n();
            var a = { video: !1, audio: i()({}, t.audioConstraint, { deviceId: { exact: e } }) };
            c.default.debug("[".concat(t.streamId, "] "), a), Object(m.b)(a, (function(i) { var a = function() { t._cleanupAudioMixing(), t.userMuteAudio && (t.stream.getAudioTracks()[0].enabled = !1), t.isPlaying() && (t.stop(), t.elementID && t.play(t.elementID)), t.microphoneId = e, t.audioConstraint.deviceId = { exact: e }, n && n() }; try { Object(o.isSafari)() ? t.replaceTrack(i.getAudioTracks()[0], a, r) : (t.removeTrack(t.stream.getAudioTracks()[0]), t.addTrack(i.getAudioTracks()[0]), a()) } catch (e) { return r && r(e) } }), (function(e) { return r && r(e) }))
          }, t.switchDevice = function(e, n, r, i) {
            var o = p.report.reportApiInvoke(t.sid, {
              callback: function(e, t) {
                if (e) return i && i(e);
                r && r(t)
              },
              name: "Stream.switchDevice",
              options: arguments,
              tag: "tracer"
            });
            Object(_.checkValidString)(n, "deviceId");
            var a = function() { return t.inSwitchDevice = !1, o() },
              s = function(e) { t.inSwitchDevice = !1, c.default.error("[".concat(t.streamId, "] "), e), o(e) };
            if (t.inSwitchDevice) return o("Device switch is in process.");
            if (t.inSwitchDevice = !0, !t.local) return s("Only the local stream can switch the device.");
            if (t.screen && "video" === e) return s("The device cannot be switched during screen-sharing.");
            if (!t.video && "video" === e) return s("Video track not exist.");
            if (!t.audio && "audio" === e) return s("Audio track not exist.");
            if (t.videoSource || t.audioSource) return s("The device cannot be switched when using videoSource or audioSource.");
            var d = !1;
            for (var u in t.audioMixing.sounds) { var l = t.audioMixing.sounds[u]; if (l.state !== t.audioMixing.states.IDLE) { d = !0; break } }
            var f = t.audioMixing.audioContextInited;
            if (f && d) return s("The device cannot be switched when using audio Mixing.");
            E.a.getDeviceById(n, (function() {
              if ("video" === e) t._switchVideoDevice(n, a, s);
              else {
                if ("audio" !== e) return s("Invalid type.");
                t._switchAudioDevice(n, a, s)
              }
            }), (function() { return s("The device does not exist.") }))
          }, t
      },
      C = function(e) {
        var t = p.report.reportApiInvoke(null, { name: "createStream", options: arguments, tag: "tracer", getStates: function() { return { audioTrackEnable: e && e.audioSource ? e.audioSource.enabled : null, videoTrackEnable: e && e.videoSource ? e.videoSource.enabled : null } } });
        Object(_.checkValidObject)(e, "StreamSpec");
        var n = e.streamID,
          r = e.audio,
          i = e.video,
          o = e.screen,
          a = e.screenAudio,
          s = (e.audioSource, e.videoSource, e.cameraId),
          d = e.facingMode,
          u = e.microphoneId,
          l = e.mirror,
          f = e.extensionId,
          g = e.mediaSource,
          m = e.audioProcessing,
          v = e.optimizationMode;
        if (!Object(_.isEmpty)(n) && !Object(h.is32Uint)(n) && !Object(_.isValidString)(n, 1, 255)) throw new Error("[String streamID] Length of the string: [1,255]. ASCII characters only. [Number streamID] The value range is Uint32");
        if (Object(_.checkValidBoolean)(r, "audio"), Object(_.checkValidBoolean)(i, "video"), Object(_.isEmpty)(o) || Object(_.checkValidBoolean)(o, "screen"), Object(_.isEmpty)(a) || Object(_.checkValidBoolean)(a, "screenAudio"), Object(_.isEmpty)(s) || Object(_.checkValidString)(s, "cameraId", 0, 255, !1), Object(_.isEmpty)(d) || Object(_.checkValidEnum)(d, "facingMode", ["user", "environment", "left", "right"]), Object(_.isEmpty)(u) || Object(_.checkValidString)(u, "microphoneId", 0, 255, !1), Object(_.isEmpty)(f) || Object(_.checkValidString)(f, "extensionId"), Object(_.isEmpty)(g) || Object(_.checkValidEnum)(g, "mediaSource", ["screen", "application", "window"]), Object(_.isEmpty)(l) || Object(_.checkValidBoolean)(l, "mirror"), !Object(_.isEmpty)(m)) {
          var E = m.AGC,
            S = m.AEC,
            y = m.ANS;
          Object(_.isEmpty)(E) || Object(_.checkValidBoolean)(E, "AGC"), Object(_.isEmpty)(S) || Object(_.checkValidBoolean)(S, "AEC"), Object(_.isEmpty)(y) || Object(_.checkValidBoolean)(y, "ANS")
        }
        Object(_.isEmpty)(v) || Object(_.checkValidEnum)(v, "optimizationMode", ["detail", "motion"]), c.default.debug("Create stream"), !0 === a && !0 === r && c.default.warning("Do not set both 'screenAudio' and 'audio' to true at the same time"), e.screen && !v && (e.optimizationMode = "detail");
        var R = O(e);
        return t(), R
      }
  }, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() { return I })), n.d(t, "b", (function() { return A }));
    var r = n(4),
      i = n(7),
      o = n.n(i),
      a = n(13),
      s = n.n(a),
      c = n(17),
      d = n.n(c),
      u = n(0),
      l = n(15),
      p = n(3);

    function f(e) {
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = function(e, t) { if (!e) return; if ("string" == typeof e) return g(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(n); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t) }(e))) {
          var t = 0,
            n = function() {};
          return { s: n, n: function() { return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] } }, e: function(e) { throw e }, f: n }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var r, i, o = !0,
        a = !1;
      return { s: function() { r = e[Symbol.iterator]() }, n: function() { var e = r.next(); return o = e.done, e }, e: function(e) { a = !0, i = e }, f: function() { try { o || null == r.return || r.return() } finally { if (a) throw i } } }
    }

    function g(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    var m = function(e) {
        var t = {},
          n = l.RTCPeerConnection;
        t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.filterStatsCache = [], t.originStatsCache = [], t.lastTimeGetStats = null, t.pc_config = { iceServers: [{ url: "stun:webcs.agora.io:3478" }] };
        var i = { id: "outbound_audio_ssrc_send", type: "ssrc", mediaType: "", googCodecName: "opus", aecDivergentFilterFraction: "0", audioInputLevel: "0", bytesSent: "0", packetsSent: "0", googEchoCancellationReturnLoss: "0", googEchoCancellationReturnLossEnhancement: "0" },
          a = { id: "outbound_video_ssrc_send", type: "ssrc", mediaType: "", googCodecName: "h264" === e.codec ? "H264" : "VP8", bytesSent: "0", packetsLost: "0", packetsSent: "0", googAdaptationChanges: "0", googAvgEncodeMs: "0", googEncodeUsagePercent: "0", googFirsReceived: "0", googFrameHeightSent: "0", googFrameHeightInput: "0", googFrameRateInput: "0", googFrameRateSent: "0", googFrameWidthSent: "0", googFrameWidthInput: "0", googNacksReceived: "0", googPlisReceived: "0", googRtt: "0" },
          c = { id: "inbound_audio_ssrc_recv", type: "ssrc", mediaType: "", googCodecName: "opus", audioOutputLevel: "0", bytesReceived: "0", packetsLost: "0", packetsReceived: "0", googAccelerateRate: "0", googCurrentDelayMs: "0", googDecodingCNG: "0", googDecodingCTN: "0", googDecodingCTSG: "0", googDecodingNormal: "0", googDecodingPLC: "0", googDecodingPLCCNG: "0", googExpandRate: "0", googJitterBufferMs: "0", googJitterReceived: "0", googPreemptiveExpandRate: "0", googPreferredJitterBufferMs: "0", googSecondaryDecodedRate: "0", googSpeechExpandRate: "0" },
          g = { id: "inbound_video_ssrc_recv", type: "ssrc", mediaType: "", googTargetDelayMs: "0", packetsLost: "0", googDecodeMs: "0", googMaxDecodeMs: "0", googRenderDelayMs: "0", googFrameWidthReceived: "0", googFrameHeightReceived: "0", googFrameRateReceived: "0", googFrameRateDecoded: "0", googFrameRateOutput: "0", googJitterBufferMs: "0", googCurrentDelayMs: "0", googMinPlayoutDelayMs: "0", googNacksSent: "0", googPlisSent: "0", googFirsSent: "0", bytesReceived: "0", packetsReceived: "0", googFramesReceived: "0", googFramesDecoded: "0" },
          m = { id: "bweforvideo", type: "VideoBwe", googAvailableSendBandwidth: "0", googAvailableReceiveBandwidth: "0", googActualEncBitrate: "0", googRetransmitBitrate: "0", googTargetEncBitrate: "0", googBucketDelay: "0", googTransmitBitrate: "0" };
        t.con = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map((function(e) { "string" == typeof e && "" !== e && t.pc_config.iceServers.push({ url: e }) })) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServers && (e.turnServers instanceof Array ? e.turnServers.map((function(e) { e.udpport && t.pc_config.iceServers.push({ username: e.username, credential: e.credential, credentialType: "password", urls: "turn:" + e.url + ":" + e.udpport + "?transport=udp" }), "string" == typeof e.tcpport && "" !== e.tcpport && t.pc_config.iceServers.push({ username: e.username, credential: e.credential, credentialType: "password", urls: "turn:" + e.url + ":" + e.tcpport + "?transport=tcp" }), !0 === e.forceturn && (t.pc_config.iceTransportPolicy = "relay") })) : u.default.error("[".concat(t.clientId, "] turnServers is not a array")))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = { mandatory: { OfferToReceiveVideo: e.video, OfferToReceiveAudio: e.audio } }, t.roapSessionId = 103;
        try { t.pc_config.sdpSemantics = "plan-b", t.peerConnection = new n(t.pc_config, t.con) } catch (e) { delete t.pc_config.sdpSemantics, t.peerConnection = new n(t.pc_config, t.con) }
        t.iceCandidateTimer = setTimeout((function() { t.iceCandidateTimer = null, u.default.debug("[".concat(t.clientId, "]Candidates collected: ").concat(t.iceCandidateCount)), t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()) }), Object(p.getParameter)("CANDIDATE_TIMEOUT")), t.peerConnection.onicecandidate = function(e) {
          var n, r, i, o;
          r = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), i = n.match(/a=candidate:.+typ\shost.+\r\n/), o = n.match(/a=candidate:.+typ\srelay.+\r\n/), null === r && null === i && null === o || void 0 !== t.ice || !t.iceCandidateTimer || (clearTimeout(t.iceCandidateTimer), t.iceCandidateTimer = null, t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1
        };
        var h = function(t) { return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t },
          v = function(n) {
            var r, i;
            if ((r = n.match(/m=video.*\r\n/)) && e.minVideoBW && e.maxVideoBW) {
              i = r[0] + "b=AS:" + e.maxVideoBW + "\r\n";
              var o = 0,
                a = 0;
              "h264" === e.codec ? (o = n.search(/a=rtpmap:(\d+) H264\/90000\r\n/), a = n.search(/H264\/90000\r\n/)) : "vp8" === e.codec && (o = n.search(/a=rtpmap:(\d+) VP8\/90000\r\n/), a = n.search(/VP8\/90000\r\n/)), -1 !== o && -1 !== a && a - o > 10 && (i = i + "a=fmtp:" + n.slice(o + 9, a - 1) + " x-google-min-bitrate=" + e.minVideoBW + "\r\n"), n = n.replace(r[0], i), u.default.debug("[" + t.clientId + "]Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)
            }
            return (r = n.match(/m=audio.*\r\n/)) && e.maxAudioBW && (i = r[0] + "b=AS:" + e.maxAudioBW + "\r\n", n = n.replace(r[0], i)), n
          };
        t.processSignalingMessage = function(n) {
          var r, i = JSON.parse(n);
          t.incomingMessage = i, "new" === t.state ? "OFFER" === i.messageType ? (r = { sdp: i.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(r)).catch((function(e) {})), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + i.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === i.messageType ? ((r = { sdp: i.sdp, type: "answer" }).sdp = h(r.sdp), r.sdp = v(r.sdp), e.screen && "detail" === e.optimizationMode && (u.default.debug("[".concat(t.client, "] remove screen share abs ext")), r.sdp = r.sdp.replace(/a=.*abs-send-time\r\n/g, "").replace(/a=.*goog-remb\r\n/g, "")), e.isSubscriber && (r.sdp = r.sdp.replace("minptime=10", "minptime=10;stereo=1; sprop-stereo=1")), t.peerConnection.setRemoteDescription(new RTCSessionDescription(r)).catch((function(e) {})), t.state = "established") : "pr-answer" === i.messageType ? (r = { sdp: i.sdp, type: "pr-answer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(r)).catch((function(e) {}))) : "offer" === i.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + i.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === i.messageType ? (r = { sdp: i.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(r)).catch((function(e) {})), t.state = "offer-received", t.markActionNeeded()) : "ANSWER" === i.messageType ? ((r = { sdp: i.sdp, type: "answer" }).sdp = h(r.sdp), r.sdp = v(r.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(r)).catch((function(e) {}))) : t.error("Illegal message for this state: " + i.messageType + " in state " + t.state))
        }, t.setRtpSenderParameters = function() {
          var e = d()(s.a.mark((function e(n) {
            var r, i, o;
            return s.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (r = t.peerConnection.getSenders(), console.log("senders", r), i = r.find((function(e) { return "video" === e.track.kind }))) { e.next = 5; break }
                  return e.abrupt("return");
                case 5:
                  return (o = i.getParameters()).degradationPreference = n, e.prev = 7, u.default.debug("[".concat(t.clientId, "] setParameters"), o), e.next = 11, i.setParameters(o);
                case 11:
                  e.next = 16;
                  break;
                case 13:
                  e.prev = 13, e.t0 = e.catch(7), u.default.debug("[".concat(t.clientId, "] setParameters failed, ignore"));
                case 16:
                case "end":
                  return e.stop()
              }
            }), e, null, [
              [7, 13]
            ])
          })));
          return function(t) { return e.apply(this, arguments) }
        }();
        var E = 0,
          _ = 0;
        return t.getVideoRelatedStats = function(e) {
          t.getStats((function(n) {
            n.forEach((function(n) {
              if (t.isSubscriber) {
                if ("video" === n.mediaType && n.id && ~n.id.indexOf("recv")) {
                  if (r.isChromeKernel() && +r.getBrowserVersion() >= 76) {
                    var i = +n.googFramesReceived - E,
                      o = +n.googFramesDecoded - _;
                    t._setStat(g, "googFrameRateReceived", i), t._setStat(g, "googFrameRateDecoded", o), t._setStat(g, "googFrameRateOutput", o), E = +n.googFramesReceived, _ = +n.googFramesDecoded
                  }
                  e && e({ mediaType: "video", peerId: t.uid, isVideoMute: t.isVideoMute, frameRateReceived: n.googFrameRateReceived, frameRateDecoded: n.googFrameRateDecoded, bytesReceived: n.bytesReceived, packetsReceived: n.packetsReceived, packetsLost: n.packetsLost })
                }
              } else "video" === n.mediaType && n.id && ~n.id.indexOf("send") && e && e({ mediaType: "video", isVideoMute: t.isVideoMute, frameRateInput: n.googFrameRateInput, frameRateSent: n.googFrameRateSent, googRtt: n.googRtt })
            }))
          }))
        }, t.getAudioRelatedStats = function(e) { t.getStats((function(n) { n.forEach((function(n) { t.isSubscriber && "audio" === n.mediaType && n.id && ~n.id.indexOf("recv") && e && e({ mediaType: "audio", peerId: t.uid, isAudioMute: t.isAudioMute, frameDropped: parseInt(n.googDecodingPLC) + parseInt(n.googDecodingPLCCNG) + "", frameReceived: n.googDecodingCTN, googJitterReceived: n.googJitterReceived, bytesReceived: n.bytesReceived, packetsReceived: n.packetsReceived, packetsLost: n.packetsLost }) })) })) }, t.getStatsRate = function(e) { t.getStats((function(t) { e(t) })) }, t.getStats = function(e, n) { n = (n = n || 500) > 500 ? 500 : n, t.lastTimeGetStats && Date.now() - t.lastTimeGetStats < n ? e && e(t.filterStatsCache, t.originStatsCache) : (t.lastTimeGetStats = Date.now(), this._getStats((function(n, r) { t.filterStatsCache = n, t.originStatsCache = r, e && e(n, r) }))) }, t._setStat = function(e, t, n) { e.hasOwnProperty(t) && (null != n && n !== 1 / 0 && n == n || (n = 0), e[t] = n + "") }, t._processGetStatsAfterChrome76 = function(e) {
          var n = this;
          t.lastStats || (t.lastStats = new Map), t.peerConnection.getStats().then((function(r) {
            var s, d = [],
              u = [],
              l = new Map,
              p = new Date,
              h = f(r.values());
            try { for (h.s(); !(s = h.n()).done;) { var v = s.value; "codec" != v.type ? "candidate-pair" != v.type ? ("inbound-rtp" === v.type && "video" === v.mediaType && l.set("inbound-video", v), "inbound-rtp" === v.type && "audio" === v.mediaType && l.set("inbound-audio", v), "outbound-rtp" === v.type && "audio" === v.mediaType && l.set("outbound-audio", v), "outbound-rtp" === v.type && "video" === v.mediaType && l.set("outbound-video", v), "track" === v.type && "video" === v.kind && v.remoteSource && l.set("remote-video-track", v), "track" === v.type && "audio" === v.kind && v.remoteSource && l.set("remote-audio-track", v), "remote-inbound-rtp" === v.type && "video" === v.mediaType && l.set("remote-inbound-video", v), "remote-inbound-rtp" === v.type && "audio" === v.mediaType && l.set("remote-inbound-audio", v), "track" !== v.type || "video" !== v.kind || v.remoteSource || l.set("local-video-track", v), "track" !== v.type || "audio" !== v.kind || v.remoteSource || l.set("local-audio-track", v), "media-source" === v.type && "video" === v.kind && l.set("media-source-video", v), "media-source" === v.type && "audio" === v.kind && l.set("media-source-audio", v)) : u.push(v) : d.push(v) } } catch (e) { h.e(e) } finally { h.f() }
            l.set("codec", d), l.set("candidatePairs", u), l.set("timestamp", +p);
            var E = null,
              _ = null;
            if (g.timestamp = p, c.timestamp = p, i.timestamp = p, i.timestamp = p, m.timestamp = p, n.isSubscriber)(E = l.get("inbound-video")) && (t._setStat(g, "id", "inbound_video_ssrc_recv"), t._setStat(g, "mediaType", E.mediaType), t._setStat(g, "packetsLost", E.packetsLost), t._setStat(g, "googDecodeMs", null), t._setStat(g, "googMaxDecodeMs", null), t._setStat(g, "googRenderDelayMs", null), t._setStat(g, "googMinPlayoutDelayMs", null), t._setStat(g, "googNacksSent", E.nackCount), t._setStat(g, "googPlisSent", E.pliCount), t._setStat(g, "googFirsSent", E.firCount), t._setStat(g, "bytesReceived", E.bytesReceived), t._setStat(g, "packetsReceived", E.packetsReceived)), (E = l.get("inbound-audio")) && (t._setStat(c, "id", "inbound_audio_ssrc_recv"), t._setStat(c, "mediaType", E.mediaType), t._setStat(c, "bytesReceived", E.bytesReceived), t._setStat(c, "packetsLost", E.packetsLost), t._setStat(c, "packetsReceived", E.packetsReceived), t._setStat(c, "googAccelerateRate", E.removedSamplesForAcceleration), t._setStat(c, "googCurrentDelayMs", E.jitterBufferDelay), t._setStat(c, "googDecodingCNG", null), t._setStat(c, "googDecodingCTN", null), t._setStat(c, "googDecodingCTSG", null), t._setStat(c, "googDecodingNormal", null), t._setStat(c, "googDecodingPLC", null), t._setStat(c, "googDecodingPLCCNG", null), t._setStat(c, "googJitterReceived", E.jitter), t._setStat(c, "googPreferredJitterBufferMs", null), t._setStat(c, "googSecondaryDecodedRate", null)), (E = l.get("remote-video-track")) && (t._setStat(g, "googTargetDelayMs", E.jitterBufferDelay), t._setStat(g, "googFrameWidthReceived", E.frameWidth), t._setStat(g, "googFrameHeightReceived", E.frameHeight), t._setStat(g, "googJitterBufferMs", E.jitterBufferDelay / E.jitterBufferEmittedCount * 1e3), t._setStat(g, "googCurrentDelayMs", E.jitterBufferDelay), t._setStat(g, "googFramesDecoded", E.framesDecoded), t._setStat(g, "googFramesReceived", E.framesReceived)), (E = l.get("remote-audio-track")) && (t._setStat(c, "audioOutputLevel", 32767 * E.audioLevel), t._setStat(c, "googJitterBufferMs", E.jitterBufferDelay / E.jitterBufferEmittedCount * 1e3), t._setStat(c, "googExpandRate", E.concealedSamples), t._setStat(c, "googPreemptiveExpandRate", E.insertedSamplesForDeceleration), t._setStat(c, "googSpeechExpandRate", E.silentConcealedSamples));
            else {
              var S = t.lastStats.get("timestamp"),
                y = t.lastStats.get("outbound-video");
              if ((E = l.get("outbound-audio")) && (t._setStat(i, "id", "outbound_audio_ssrc_send"), t._setStat(i, "mediaType", E.mediaType), t._setStat(i, "aecDivergentFilterFraction", null), t._setStat(i, "bytesSent", E.bytesSent), t._setStat(i, "packetsSent", E.packetsSent), _ = E.transportId), E = l.get("outbound-video")) {
                if (t._setStat(a, "id", "outbound_video_ssrc_send"), t._setStat(a, "mediaType", E.mediaType), t._setStat(a, "bytesSent", E.bytesSent), t._setStat(a, "packetsSent", E.packetsSent), t._setStat(a, "googAdaptationChanges", E.qualityLimitationDurations), t._setStat(a, "googAvgEncodeMs", null), t._setStat(a, "googEncodeUsagePercent", null), _ = E.transportId, E.totalEncodedBytesTarget && y && y.totalEncodedBytesTarget) {
                  var R = (E.totalEncodedBytesTarget - y.totalEncodedBytesTarget) / (+new Date - S);
                  t._setStat(m, "googTargetEncBitrate", Math.floor(8 * R * 1e3))
                }
                if (E.retransmittedBytesSent && y && y.retransmittedBytesSent) {
                  var T = (E.retransmittedBytesSent - y.retransmittedBytesSent) / (+new Date - S);
                  t._setStat(m, "googRetransmitBitrate", Math.floor(8 * T * 1e3))
                }
                if (E.bytesSent && y && y.bytesSent) {
                  var I = (E.bytesSent - y.bytesSent) / (+new Date - S);
                  t._setStat(m, "googTransmitBitrate", Math.floor(8 * I * 1e3)), t._setStat(m, "googActualEncBitrate", Math.floor(8 * I * 1e3))
                }
                if (E.totalPacketSendDelay && y && y.totalPacketSendDelay) {
                  var A = (E.totalPacketSendDelay - y.totalPacketSendDelay) / (+new Date - S);
                  t._setStat(m, "googBucketDelay", Math.floor(1e3 * A))
                }
              }
              if ((E = l.get("remote-inbound-video")) && (t._setStat(a, "packetsLost", E.packetsLost), t._setStat(a, "googRtt", E.roundTripTime)), (E = l.get("local-video-track")) && (t._setStat(a, "googFrameHeightSent", E.frameHeight), t._setStat(a, "googFrameWidthSent", E.frameWidth), void 0 !== E.framesPerSecond && t._setStat(a, "googFrameRateSent", E.framesPerSecond)), (E = l.get("local-audio-track")) && (t._setStat(i, "googEchoCancellationReturnLoss", E.echoReturnLoss), t._setStat(i, "googEchoCancellationReturnLossEnhancement", E.echoReturnLossEnhancement)), (E = l.get("media-source-video")) && (t._setStat(a, "googFrameHeightInput", E.height), t._setStat(a, "googFrameWidthInput", E.width), t._setStat(a, "googFrameRateInput", E.framesPerSecond)), (E = l.get("media-source-audio")) && t._setStat(i, "audioInputLevel", 32767 * E.totalAudioEnergy), (E = l.get("inbound-video")) && (t._setStat(a, "googFirsReceived", E.firCount), t._setStat(a, "googNacksReceived", E.nackCount), t._setStat(a, "googPlisReceived", E.pliCount)), _) l.get("candidatePairs").map((function(e) { _ == e.transportId && t._setStat(m, "googAvailableSendBandwidth", e.availableOutgoingBitrate) }));
              else {
                var b = l.get("candidatePairs")[0];
                b && t._setStat(m, "googAvailableSendBandwidth", b.availableOutgoingBitrate)
              }
            }
            t.lastStats = l;
            var O = [o()({}, a), o()({}, i), o()({}, g), o()({}, c), o()({}, m)];
            O.push({ id: "time", startTime: t.connectedTime, timestamp: new Date }), e(O)
          }))
        }, t._processGetStatsBeforeChrome76 = function(e) {
          t.peerConnection.getStats((function(n) {
            var r = [],
              s = [],
              d = null;
            Object.keys(n).forEach((function(e) {
              var t = n[e];
              t && (s.push(t), d = t.timestamp, "VideoBwe" === t.type ? m = t : t.id.indexOf("_send") > -1 && "video" === t.mediaType ? a = t : t.id.indexOf("_send") > -1 && "audio" === t.mediaType ? i = t : t.id.indexOf("_recv") > -1 && "video" === t.mediaType ? g = t : t.id.indexOf("_recv") > -1 && "audio" === t.mediaType && (c = t))
            })), (r = [o()({}, a), o()({}, i), o()({}, g), o()({}, c), o()({}, m)]).push({ id: "time", startTime: t.connectedTime, timestamp: d || new Date }), e(r, s)
          }))
        }, t._getStats = function(e) { Object(p.getParameter)("CHROME_NEW_STATS") && r.isChromeKernel() && +r.getBrowserVersion() >= 76 ? t._processGetStatsAfterChrome76(e) : t._processGetStatsBeforeChrome76(e) }, t.addTrack = function(e, n) { t.peerConnection.addTrack(e, n) }, t.removeTrack = function(e, n) { t.peerConnection.removeTrack(t.peerConnection.getSenders().find((function(t) { return t.track == e }))) }, t.addStream = function(e) { t.peerConnection.addStream(e), t.markActionNeeded() }, t.removeStream = function() { t.markActionNeeded() }, t.close = function() { t.state = "closed", t.peerConnection.close() }, t.markActionNeeded = function() { t.actionNeeded = !0, t.doLater((function() { t.onstablestate() })) }, t.doLater = function(e) { window.setTimeout(e, 1) }, t.onstablestate = function() {
          var n;
          if (t.actionNeeded) {
            if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer((function(n) {
              if (n.sdp !== t.prevOffer) return e.isSubscriber && (n.sdp = n.sdp.replace("minptime=10", "minptime=10;stereo=1; sprop-stereo=1")), t.peerConnection.setLocalDescription(n), t.state = "preparing-offer", void t.markActionNeeded();
              u.default.debug("[" + t.clientId + "]Not sending a new offer")
            }), (function(e) { u.default.debug("[" + t.clientId + "]peer connection create offer failed ", e) }), t.mediaConstraints);
            else if ("preparing-offer" === t.state) {
              if (t.moreIceComing) return;
              t.prevOffer = t.peerConnection.localDescription.sdp, t.offerCandidates = t.prevOffer.match(/a=candidate.+\r\n/g) || [], t.offerCandidates.length || (u.default.warning("[".concat(t.clientId, "]No Ice Candidate generated")), Object(p.getParameter)("SHIM_CANDIDATE") ? (u.default.debug("Shimming fake candidate"), t.prevOffer += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n") : u.default.error("[".concat(t.clientId, "]None Ice Candidate not allowed"))), t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"), t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
            } else if ("offer-received" === t.state) t.peerConnection.createAnswer((function(e) {
              if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) t.markActionNeeded();
              else {
                var n = new Date;
                u.default.debug("[" + t.clientId + "]" + n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
              }
            }), (function(e) { u.default.debug("[" + t.clientId + "]peer connection create answer failed ", e) }), t.mediaConstraints);
            else if ("offer-received-preparing-answer" === t.state) {
              if (t.moreIceComing) return;
              n = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", n), t.state = "established"
            } else u.default.debug("[".concat(t.clientId, "] Dazed and confused in state ' + that.state + ', stopping here'"));
            t.actionNeeded = !1
          }
        }, t.sendMessage = function(e, n) {
          var r = {};
          r.messageType = e, r.sdp = n, "OFFER" === e ? (r.offererSessionId = t.sessionId, r.answererSessionId = t.otherSessionId, r.seq = t.sequenceNumber += 1, r.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (r.offererSessionId = t.incomingMessage.offererSessionId, r.answererSessionId = t.sessionId, r.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(r))
        }, t._getSender = function(e) { if (t.peerConnection && t.peerConnection.getSenders) { var n = t.peerConnection.getSenders().find((function(t) { return t.track.kind == e })); if (n) return n } return null }, t.hasSender = function(e) { return !!t._getSender(e) }, t.replaceTrack = function(e, n, r) {
          var i = t._getSender(e.kind);
          if (!i) { return r("NO_SENDER_FOUND") }
          try { i.replaceTrack(e) } catch (e) { return r && r(e) }
          setTimeout((function() { return n && n() }), 50)
        }, t.error = function(e) { throw "Error in RoapOnJsep: " + e }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function(e) { t.onaddstream && (t.onaddstream(e, "ontrack"), t.peerConnection.onaddstream = null) }, t.peerConnection.onaddstream = function(e) { t.onaddstream && (t.onaddstream(e, "onaddstream"), t.peerConnection.ontrack = null) }, t.peerConnection.onremovestream = function(e) { t.onremovestream && t.onremovestream(e) }, t.peerConnection.oniceconnectionstatechange = function(e) { "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState) }, t.renegotiate = function() { void 0 !== t.prevOffer && t.peerConnection.createOffer().then((function(e) { return e.sdp = e.sdp.replace(/a=recvonly\r\n/g, "a=inactive\r\n"), e.sdp = h(e.sdp), e.sdp = v(e.sdp), t.peerConnection.setLocalDescription(e) })).then((function() { t.onnegotiationneeded && t.onnegotiationneeded(t.peerConnection.localDescription.sdp) })).catch((function(e) { console.log("createOffer error: ", e) })) }, t.peerConnection.onnegotiationneeded = t.renegotiate, t.onaddstream = null, t.onremovestream = null, t.onnegotiationneeded = null, t.state = "new", t.markActionNeeded(), t
      },
      h = function(e) {
        var t = {},
          n = l.RTCPeerConnection;
        t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.filterStatsCache = [], t.originStatsCache = [], t.lastTimeGetStats = null, t.pc_config = { iceServers: [{ urls: ["stun:webcs.agora.io:3478", "stun:stun.l.google.com:19302"] }], bundlePolicy: "max-bundle" }, t.con = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }, e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map((function(e) { "string" == typeof e && "" !== e && t.pc_config.iceServers.push({ url: e }) })) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServers && (e.turnServers instanceof Array ? e.turnServers.map((function(e) { e.udpport && t.pc_config.iceServers.push({ username: e.username, credential: e.credential, credentialType: "password", urls: "turn:" + e.url + ":" + e.udpport + "?transport=udp" }), "string" == typeof e.tcpport && "" !== e.tcpport && t.pc_config.iceServers.push({ username: e.username, credential: e.credential, credentialType: "password", urls: "turn:" + e.url + ":" + e.tcpport + "?transport=tcp" }), !0 === e.forceturn && (t.pc_config.iceTransportPolicy = "relay") })) : u.default.error("[".concat(t.clientId, "] turnServers is not a array")))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = { mandatory: { OfferToReceiveVideo: e.video, OfferToReceiveAudio: e.audio } }, t.roapSessionId = 103;
        try { t.pc_config.sdpSemantics = "plan-b", t.peerConnection = new n(t.pc_config, t.con) } catch (e) { delete t.pc_config.sdpSemantics, t.peerConnection = new n(t.pc_config, t.con) }
        t.iceCandidateTimer = setTimeout((function() { t.iceCandidateTimer = null, t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()) }), Object(p.getParameter)("CANDIDATE_TIMEOUT")), t.peerConnection.onicecandidate = function(e) {
          var n, r, i, o;
          r = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), i = n.match(/a=candidate:.+typ\shost.+\r\n/), o = n.match(/a=candidate:.+typ\srelay.+\r\n/), 0 === t.iceCandidateCount && (t.timeout = setTimeout((function() { t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()) }), 1e3)), null === r && null === i && null === o || void 0 !== t.ice || !t.iceCandidateTimer || (clearTimeout(t.iceCandidateTimer), t.iceCandidateTimer = null, t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1
        };
        var r = function(t) { return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")), t },
          i = function(n) { var r, i; return (r = n.match(/m=video.*\r\n/)) && e.minVideoBW && e.maxVideoBW && (i = r[0] + "b=AS:" + e.maxVideoBW + "\r\n", n = n.replace(r[0], i), u.default.debug("[" + t.clientId + "]Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)), (r = n.match(/m=audio.*\r\n/)) && e.maxAudioBW && (i = r[0] + "b=AS:" + e.maxAudioBW + "\r\n", n = n.replace(r[0], i)), n };
        t.processSignalingMessage = function(n) {
          var o, a = JSON.parse(n);
          t.incomingMessage = a, "new" === t.state ? "OFFER" === a.messageType ? (o = { sdp: a.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === a.messageType ? ((o = { sdp: a.sdp, type: "answer" }).sdp = r(o.sdp), o.sdp = i(o.sdp), o.sdp = o.sdp.replace(/a=x-google-flag:conference\r\n/g, ""), e.screen && "detail" === e.optimizationMode && (u.default.debug("[".concat(t.client, "] remove screen share abs ext")), o.sdp = o.sdp.replace(/a=.*abs-send-time\r\n/g, "").replace(/a=.*goog-remb\r\n/g, "")), t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.state = "established") : "pr-answer" === a.messageType ? (o = { sdp: a.sdp, type: "pr-answer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o))) : "offer" === a.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === a.messageType ? (o = { sdp: a.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)), t.state = "offer-received", t.markActionNeeded()) : "ANSWER" === a.messageType ? ((o = { sdp: a.sdp, type: "answer" }).sdp = r(o.sdp), o.sdp = i(o.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(o))) : t.error("Illegal message for this state: " + a.messageType + " in state " + t.state))
        }, t.setRtpSenderParameters = function() {
          var e = d()(s.a.mark((function e(n) {
            var r, i, o;
            return s.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (r = t.peerConnection.getSenders(), i = r.find((function(e) { return "video" === e.track.kind }))) { e.next = 4; break }
                  return e.abrupt("return");
                case 4:
                  return (o = i.getParameters()).degradationPreference = n, e.prev = 6, u.default.debug("[".concat(t.clientId, "] setParameters"), o), e.next = 10, i.setParameters(o);
                case 10:
                  e.next = 15;
                  break;
                case 12:
                  e.prev = 12, e.t0 = e.catch(6), u.default.debug("[".concat(t.clientId, "] setParameters failed, ignore"));
                case 15:
                case "end":
                  return e.stop()
              }
            }), e, null, [
              [6, 12]
            ])
          })));
          return function(t) { return e.apply(this, arguments) }
        }();
        var o = { id: "", type: "", mediaType: "", googCodecName: "opus", aecDivergentFilterFraction: "0", audioInputLevel: "0", bytesSent: "0", packetsSent: "0", googEchoCancellationReturnLoss: "0", googEchoCancellationReturnLossEnhancement: "0" },
          a = { id: "", type: "", mediaType: "", googCodecName: "h264" === e.codec ? "H264" : "VP8", bytesSent: "0", packetsLost: "0", packetsSent: "0", googAdaptationChanges: "0", googAvgEncodeMs: "0", googEncodeUsagePercent: "0", googFirsReceived: "0", googFrameHeightSent: "0", googFrameHeightInput: "0", googFrameRateInput: "0", googFrameRateSent: "0", googFrameWidthSent: "0", googFrameWidthInput: "0", googNacksReceived: "0", googPlisReceived: "0", googRtt: "0", googFramesEncoded: "0" },
          c = { id: "", type: "", mediaType: "", audioOutputLevel: "0", bytesReceived: "0", packetsLost: "0", packetsReceived: "0", googAccelerateRate: "0", googCurrentDelayMs: "0", googDecodingCNG: "0", googDecodingCTN: "0", googDecodingCTSG: "0", googDecodingNormal: "0", googDecodingPLC: "0", googDecodingPLCCNG: "0", googExpandRate: "0", googJitterBufferMs: "0", googJitterReceived: "0", googPreemptiveExpandRate: "0", googPreferredJitterBufferMs: "0", googSecondaryDecodedRate: "0", googSpeechExpandRate: "0" },
          f = { id: "", type: "", mediaType: "", googTargetDelayMs: "0", packetsLost: "0", googDecodeMs: "0", googMaxDecodeMs: "0", googRenderDelayMs: "0", googFrameWidthReceived: "0", googFrameHeightReceived: "0", googFrameRateReceived: "0", googFrameRateDecoded: "0", googFrameRateOutput: "0", googFramesDecoded: "0", googFrameReceived: "0", googJitterBufferMs: "0", googCurrentDelayMs: "0", googMinPlayoutDelayMs: "0", googNacksSent: "0", googPlisSent: "0", googFirsSent: "0", bytesReceived: "0", packetsReceived: "0" },
          g = { id: "bweforvideo", type: "VideoBwe", googAvailableSendBandwidth: "0", googAvailableReceiveBandwidth: "0", googActualEncBitrate: "0", googRetransmitBitrate: "0", googTargetEncBitrate: "0", googBucketDelay: "0", googTransmitBitrate: "0" },
          m = 0,
          h = 0,
          v = 0;
        return t.isRemoteVideoStats = function(e) { return !!(e.frameHeight && e.frameWidth && e.remoteSource) }, t.getVideoRelatedStats = function(n) {
          t.peerConnection.getStats().then((function(r) {
            var i = { peerId: t.uid, mediaType: "video", isVideoMute: t.isVideoMute };
            r.forEach((function(r) {
              if (t.isSubscriber) {
                if ("track" === r.type && (~r.id.indexOf("video") || ~r.trackIdentifier.indexOf("v") || t.isRemoteVideoStats(r))) {
                  if (!t.lastReport) return void(t.lastReport = r);
                  i.frameRateReceived = r.framesReceived - t.lastReport.framesReceived + "", i.frameRateDecoded = r.framesDecoded - t.lastReport.framesDecoded + "", t.lastReport = r
                }
                "inbound-rtp" === r.type && ~r.id.indexOf("Video") && (i.bytesReceived = r.bytesReceived + "", i.packetsReceived = r.packetsReceived + "", i.packetsLost = r.packetsLost + "")
              } else if ("outbound-rtp" === r.type && ~r.id.indexOf("Video")) {
                if (!t.lastReport) return void(t.lastReport = r);
                n && n({ mediaType: "video", isVideoMute: t.isVideoMute, frameRateInput: e.maxFrameRate + "", frameRateSent: r.framesEncoded - t.lastReport.framesEncoded + "" }), t.lastReport = r
              }
            })), n && n(i)
          }))
        }, t.getAudioRelatedStats = function(e) { t.peerConnection.getStats().then((function(n) { n.forEach((function(n) { t.isSubscriber && "inbound-rtp" === n.type && ~n.id.indexOf("Audio") && e && e({ peerId: t.uid, mediaType: "audio", isAudioMute: t.isAudioMute, frameDropped: n.packetsLost + "", frameReceived: n.packetsReceived + "", googJitterReceived: n.jitter + "", bytesReceived: n.bytesReceived + "", packetsReceived: n.packetsReceived + "", packetsLost: n.packetsLost + "" }) })) })) }, t.getStatsRate = function(e) { t.getStats((function(t) { t.forEach((function(e) { "outbound-rtp" === e.type && "video" === e.mediaType && e.googFramesEncoded && (e.googFrameRateSent = ((e.googFramesEncoded - m) / 3).toString(), m = e.googFramesEncoded), "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (e.googFrameRateReceived && (e.googFrameRateReceived = ((e.googFrameReceived - v) / 3).toString(), v = e.googFrameReceived), e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - h) / 3).toString(), h = e.googFramesDecoded)) })), e(t) })) }, t.getStats = function(e, n) { n = (n = n || 500) > 500 ? 500 : n, t.lastTimeGetStats && Date.now() - t.lastTimeGetStats < n ? e && e(t.filterStatsCache, t.originStatsCache) : this._getStats((function(n, r) { t.filterStatsCache = n, t.originStatsCache = r, t.lastTimeGetStats = Date.now(), e && e(n, r) })) }, t._getStats = function(n) {
          var r = [];
          t.peerConnection.getStats().then((function(i) {
            i.forEach((function(t) {
              var n;
              (r.push(t), "outbound-rtp" === t.type && "audio" === t.mediaType && (o.id = t.id, o.type = t.type, o.mediaType = t.mediaType, o.bytesSent = t.bytesSent ? t.bytesSent + "" : "0", o.packetsSent = t.packetsSent ? t.packetsSent + "" : "0", e.agoraStream.local && (o.audioInputLevel = Math.round(32767 * e.agoraStream.getAudioLevel()).toString())), "outbound-rtp" === t.type && "video" === t.mediaType) && (a.id = t.id, a.type = t.type, a.mediaType = t.mediaType, a.bytesSent = t.bytesSent ? t.bytesSent + "" : "0", a.packetsSent = t.packetsSent ? t.packetsSent + "" : "0", a.googPlisReceived = t.pliCount ? t.pliCount + "" : "0", a.googNacksReceived = t.nackCount ? t.nackCount + "" : "0", a.googFirsReceived = t.firCount ? t.firCount + "" : "0", a.googFramesEncoded = t.framesEncoded ? t.framesEncoded + "" : "0", (n = i.get(t.trackId)) && (a.googFrameHeightSent = n.frameHeight && n.frameHeight.toString(), a.googFrameWidthSent = n.frameWidth && n.frameWidth.toString()));
              "inbound-rtp" !== t.type || -1 == t.id.indexOf("44444") && "audio" !== t.mediaType || (c.id = t.id, c.type = t.type, c.mediaType = "audio", c.packetsReceived = t.packetsReceived ? t.packetsReceived + "" : "0", c.bytesReceived = t.bytesReceived ? t.bytesReceived + "" : "0", c.packetsLost = t.packetsLost ? t.packetsLost + "" : "0", c.packetsReceived = t.packetsReceived ? t.packetsReceived + "" : "0", c.googJitterReceived = t.jitter ? t.jitter + "" : "0", (n = i.get(t.trackId)) && (c.audioOutputLevel = n.audioLevel && Math.round(32767 * n.audioLevel).toString()), e.agoraStream.local || c.audioOutputLevel || (c.audioOutputLevel = Math.round(32767 * e.agoraStream.getAudioLevel()).toString()));
              "inbound-rtp" !== t.type || -1 == t.id.indexOf("55543") && "video" !== t.mediaType || (f.id = t.id, f.type = t.type, f.mediaType = "video", f.packetsReceived = t.packetsReceived ? t.packetsReceived + "" : "0", f.bytesReceived = t.bytesReceived ? t.bytesReceived + "" : "0", f.packetsLost = t.packetsLost ? t.packetsLost + "" : "0", f.googJitterBufferMs = t.jitter ? t.jitter + "" : "0", f.googNacksSent = t.nackCount ? t.nackCount + "" : "0", f.googPlisSent = t.pliCount ? t.pliCount + "" : "0", f.googFirsSent = t.firCount ? t.firCount + "" : "0", (n = i.get(t.trackId)) && (f.googFrameHeightReceived = n.frameHeight && n.frameHeight.toString(), f.googFrameWidthReceived = n.frameWidth && n.frameWidth.toString(), f.googFrameReceived = n.framesReceived && n.framesReceived.toString(), f.googFramesDecdec = n.framesDecoded && n.framesDecoded.toString()));
              "candidate-pair" === t.type && (0 == t.availableIncomingBitrate ? g.googAvailableSendBandwidth = t.availableOutgoingBitrate + "" : g.googAvailableReceiveBandwidth = t.availableIncomingBitrate + "")
            }));
            var s = [g, o, a, c, f];
            s.push({ id: "time", startTime: t.connectedTime, timestamp: new Date }), n(s, r)
          })).catch((function(e) { u.default.error("[" + t.clientId + "] ", e) }))
        }, t.addTrack = function(e, n) { t.peerConnection.addTrack(e, n) }, t.removeTrack = function(e, n) {
          var r = t.peerConnection.getSenders().find((function(t) { return t.track == e }));
          r.replaceTrack(null), t.peerConnection.removeTrack(r)
        }, t.addStream = function(e) { window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? e.getTracks().forEach((function(n) { return t.peerConnection.addTrack(n, e) })) : t.peerConnection.addStream(e), t.markActionNeeded() }, t.removeStream = function() { t.markActionNeeded() }, t.close = function() { t.state = "closed", t.peerConnection.close() }, t.markActionNeeded = function() { t.actionNeeded = !0, t.doLater((function() { t.onstablestate() })) }, t.doLater = function(e) { window.setTimeout(e, 1) }, t.onstablestate = function() {
          var n;
          if (t.actionNeeded) {
            if ("new" === t.state || "established" === t.state) {
              if (e.isSubscriber) t.peerConnection.addTransceiver("audio", { direction: "recvonly" }), t.peerConnection.addTransceiver("video", { direction: "recvonly" });
              t.peerConnection.createOffer(t.mediaConstraints).then((function(n) {
                if (n.sdp = i(n.sdp), e.isSubscriber || (n.sdp = n.sdp.replace(/a=.*video-orientation\r\n/g, "")), n.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(n), t.state = "preparing-offer", void t.markActionNeeded();
                u.default.debug("[" + t.clientId + "]Not sending a new offer")
              })).catch((function(e) { u.default.debug("[" + t.clientId + "]peer connection create offer failed ", e) }))
            } else if ("preparing-offer" === t.state) {
              if (t.moreIceComing) return;
              t.prevOffer = t.peerConnection.localDescription.sdp, t.offerCandidates = t.prevOffer.match(/a=candidate.+\r\n/g) || [], t.offerCandidates.length || (u.default.warning("[".concat(t.clientId, "]No Ice Candidate generated")), Object(p.getParameter)("SHIM_CANDIDATE") ? (u.default.debug("Shimming fake candidate"), t.prevOffer += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n") : u.default.error("[".concat(t.clientId, "]None Ice Candidate not allowed"))), t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"), t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
            } else if ("offer-received" === t.state) t.peerConnection.createAnswer((function(e) {
              if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) t.markActionNeeded();
              else {
                var n = new Date;
                u.default.debug("[" + t.clientId + "]" + n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
              }
            }), (function(e) { u.default.debug("[" + t.clientId + "]peer connection create answer failed ", e) }), t.mediaConstraints);
            else if ("offer-received-preparing-answer" === t.state) {
              if (t.moreIceComing) return;
              n = t.peerConnection.localDescription.sdp, t.sendMessage("ANSWER", n), t.state = "established"
            } else t.debug("Dazed and confused in state " + t.state + ", stopping here");
            t.actionNeeded = !1
          }
        }, t.sendMessage = function(e, n) {
          var r = {};
          r.messageType = e, r.sdp = n, "OFFER" === e ? (r.offererSessionId = t.sessionId, r.answererSessionId = t.otherSessionId, r.seq = t.sequenceNumber += 1, r.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (r.offererSessionId = t.incomingMessage.offererSessionId, r.answererSessionId = t.sessionId, r.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(r))
        }, t._getSender = function(e) { if (t.peerConnection && t.peerConnection.getSenders) { var n = t.peerConnection.getSenders().find((function(t) { return t.track.kind == e })); if (n) return n } return null }, t.hasSender = function(e) { return !!t._getSender(e) }, t.replaceTrack = function(e, n, r) {
          var i = t._getSender(e.kind);
          if (!i) { return r("NO_SENDER_FOUND") }
          try { i.replaceTrack(e) } catch (e) { return r && r(e) }
          setTimeout((function() { return n && n() }), 50)
        }, t.error = function(e) { throw "Error in RoapOnJsep: " + e }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function(e) { console.log("!!! ontrack, ", e.track.kind, e.track), t.onaddstream && t.onaddstream(e, "ontrack") }, t.peerConnection.onremovestream = function(e) { t.onremovestream && t.onremovestream(e) }, t.peerConnection.oniceconnectionstatechange = function(e) { "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState) }, t.renegotiate = function() { void 0 !== t.prevOffer && t.peerConnection.createOffer().then((function(e) { return e.sdp = e.sdp.replace(/a=recvonly\r\n/g, "a=inactive\r\n"), e.sdp = r(e.sdp), e.sdp = i(e.sdp), t.peerConnection.setLocalDescription(e) })).then((function() { t.onnegotiationneeded && t.onnegotiationneeded(t.peerConnection.localDescription.sdp) })).catch((function(e) { console.log("createOffer error: ", e) })) }, t.peerConnection.onnegotiationneeded = t.renegotiate, t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
      };

    function v(e) {
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = function(e, t) { if (!e) return; if ("string" == typeof e) return E(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(n); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t) }(e))) {
          var t = 0,
            n = function() {};
          return { s: n, n: function() { return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] } }, e: function(e) { throw e }, f: n }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var r, i, o = !0,
        a = !1;
      return { s: function() { r = e[Symbol.iterator]() }, n: function() { var e = r.next(); return o = e.done, e }, e: function(e) { a = !0, i = e }, f: function() { try { o || null == r.return || r.return() } finally { if (a) throw i } } }
    }

    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    var _ = function(e) {
        var t = {},
          n = (mozRTCPeerConnection, mozRTCSessionDescription),
          r = !1;
        t.uid = e.uid, t.isVideoMute = e.isVideoMute, t.isAudioMute = e.isAudioMute, t.isSubscriber = e.isSubscriber, t.clientId = e.clientId, t.filterStatsCache = [], t.originStatsCache = [], t.lastTimeGetStats = null, t.pc_config = { iceServers: [] }, e.iceServers instanceof Array ? e.iceServers.map((function(e) { 0 === e.url.indexOf("stun:") && t.pc_config.iceServers.push({ url: e.url }) })) : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map((function(e) { "string" == typeof e && "" !== e && t.pc_config.iceServers.push({ url: e }) })) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({ url: e.stunServerUrl })), e.turnServers && (e.turnServers instanceof Array ? e.turnServers.map((function(e) { e.udpport && t.pc_config.iceServers.push({ username: e.username, credential: e.credential, credentialType: "password", urls: "turn:" + e.url + ":" + e.udpport + "?transport=udp" }), "string" == typeof e.tcpport && "" !== e.tcpport && t.pc_config.iceServers.push({ username: e.username, credential: e.credential, credentialType: "password", urls: "turn:" + e.url + ":" + e.tcpport + "?transport=tcp" }), !0 === e.forceturn && (t.pc_config.iceTransportPolicy = "relay") })) : u.default.error("[".concat(t.clientId, "] turnServers is not a array")))), void 0 === e.audio && (e.audio = !0), void 0 === e.video && (e.video = !0), t.mediaConstraints = { offerToReceiveAudio: e.audio, offerToReceiveVideo: e.video, mozDontOfferDataChannel: !0 }, t.roapSessionId = 103, t.peerConnection = new l.RTCPeerConnection(t.pc_config), t.iceCandidateTimer = setTimeout((function() { t.iceCandidateTimer = null, u.default.debug("[".concat(t.clientId, "]Candidates collected: ").concat(t.iceCandidateCount)), t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded()) }), Object(p.getParameter)("CANDIDATE_TIMEOUT")), t.peerConnection.onicecandidate = function(e) {
          var n, r, i, o;
          r = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/), i = n.match(/a=candidate:.+typ\shost.+\r\n/), o = n.match(/a=candidate:.+typ\srelay.+\r\n/), null === r && null === i && null === o || void 0 !== t.ice || !t.iceCandidateTimer || (clearTimeout(t.iceCandidateTimer), t.iceCandidateTimer = null, t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()), t.iceCandidateCount = t.iceCandidateCount + 1
        }, t.checkMLineReverseInSDP = function(e) { return !(!~e.indexOf("m=audio") || !~e.indexOf("m=video")) && e.indexOf("m=audio") > e.indexOf("m=video") }, t.reverseMLineInSDP = function(e) {
          var t = e.split("m=audio"),
            n = t[1].split("m=video"),
            r = "m=video" + n[1],
            i = "m=audio" + n[0];
          return e = t[0] + r + i
        }, t.processSignalingMessage = function(r) {
          var i, o = JSON.parse(r);
          t.incomingMessage = o, "new" === t.state ? "OFFER" === o.messageType ? (o.sdp = h(o.sdp), i = { sdp: o.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new n(i), (function() { u.default.debug("[" + t.clientId + "]setRemoteDescription succeeded") }), (function(e) { u.default.info("[" + t.clientId + "]setRemoteDescription failed: " + e.name) })), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (o.sdp = h(o.sdp), o.sdp = o.sdp.replace(/ generation 0/g, ""), o.sdp = o.sdp.replace(/ udp /g, " UDP "), -1 !== o.sdp.indexOf("a=group:BUNDLE") ? (o.sdp = o.sdp.replace(/a=group:BUNDLE audio video/, "a=group:BUNDLE sdparta_0 sdparta_1"), o.sdp = o.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), o.sdp = o.sdp.replace(/a=mid:video/, "a=mid:sdparta_1")) : (o.sdp = o.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), o.sdp = o.sdp.replace(/a=mid:video/, "a=mid:sdparta_0")), i = { sdp: o.sdp, type: "answer" }, e.screen && "detail" === e.optimizationMode && (u.default.debug("[".concat(t.client, "] remove screen share abs ext")), o.sdp = E(i.sdp)), t.peerConnection.setRemoteDescription(new n(i), (function() { u.default.debug("[" + t.clientId + "]setRemoteDescription succeeded") }), (function(e) { u.default.info("[" + t.clientId + "]setRemoteDescription failed: " + e) })), t.state = "established") : "pr-answer" === o.messageType ? (i = { sdp: o.sdp, type: "pr-answer" }, t.peerConnection.setRemoteDescription(new n(i), (function() { u.default.debug("[" + t.clientId + "]setRemoteDescription succeeded") }), (function(e) { u.default.info("[" + t.clientId + "]setRemoteDescription failed: " + e.name) }))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (i = { sdp: o.sdp, type: "offer" }, t.peerConnection.setRemoteDescription(new n(i), (function() { u.default.debug("[" + t.clientId + "]setRemoteDescription succeeded") }), (function(e) { u.default.info("[" + t.clientId + "]setRemoteDescription failed: " + e.name) })), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
        }, t.setRtpSenderParameters = function() {
          var e = d()(s.a.mark((function e(n) {
            var r, i, o;
            return s.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (r = t.peerConnection.getSenders(), i = r.find((function(e) { return "video" === e.track.kind }))) { e.next = 4; break }
                  return e.abrupt("return");
                case 4:
                  return (o = i.getParameters()).degradationPreference = n, e.prev = 6, u.default.debug("[".concat(t.clientId, "] setParameters"), o), e.next = 10, i.setParameters(o);
                case 10:
                  e.next = 15;
                  break;
                case 12:
                  e.prev = 12, e.t0 = e.catch(6), u.default.debug("[".concat(t.clientId, "] setParameters failed, ignore"));
                case 15:
                case "end":
                  return e.stop()
              }
            }), e, null, [
              [6, 12]
            ])
          })));
          return function(t) { return e.apply(this, arguments) }
        }();
        var i = { id: "", type: "", mediaType: "opus", googCodecName: "opus", aecDivergentFilterFraction: "0", audioInputLevel: "0", bytesSent: "0", packetsSent: "0", googEchoCancellationReturnLoss: "0", googEchoCancellationReturnLossEnhancement: "0" },
          o = { id: "", type: "", mediaType: "", googCodecName: "h264" === e.codec ? "H264" : "VP8", bytesSent: "0", packetsLost: "0", packetsSent: "0", googAdaptationChanges: "0", googAvgEncodeMs: "0", googEncodeUsagePercent: "0", googFirsReceived: "0", googFrameHeightSent: "0", googFrameHeightInput: "0", googFrameRateInput: "0", googFrameRateSent: "0", googFrameWidthSent: "0", googFrameWidthInput: "0", googNacksReceived: "0", googPlisReceived: "0", googRtt: "0" },
          a = { id: "", type: "", mediaType: "", audioOutputLevel: "0", bytesReceived: "0", packetsLost: "0", packetsReceived: "0", googAccelerateRate: "0", googCurrentDelayMs: "0", googDecodingCNG: "0", googDecodingCTN: "0", googDecodingCTSG: "0", googDecodingNormal: "0", googDecodingPLC: "0", googDecodingPLCCNG: "0", googExpandRate: "0", googJitterBufferMs: "0", googJitterReceived: "0", googPreemptiveExpandRate: "0", googPreferredJitterBufferMs: "0", googSecondaryDecodedRate: "0", googSpeechExpandRate: "0" },
          c = { id: "", type: "", mediaType: "", googTargetDelayMs: "0", packetsLost: "0", googDecodeMs: "0", googMaxDecodeMs: "0", googRenderDelayMs: "0", googFrameWidthReceived: "0", googFrameHeightReceived: "0", googFrameRateReceived: "0", googFrameRateDecoded: "0", googFrameRateOutput: "0", googJitterBufferMs: "0", googCurrentDelayMs: "0", googMinPlayoutDelayMs: "0", googNacksSent: "0", googPlisSent: "0", googFirsSent: "0", bytesReceived: "0", packetsReceived: "0", googFramesDecoded: "0" },
          f = 0,
          g = 0,
          m = 0;
        t.getVideoRelatedStats = function(e) {
          t.peerConnection.getStats().then((function(n) {
            var r, i = v(n.values());
            try {
              for (i.s(); !(r = i.n()).done;) {
                var o = r.value;
                if (t.isSubscriber) {
                  if (("inbound-rtp" === o.type || "inboundrtp" === o.type) && "video" === o.mediaType) {
                    if (!t.lastReport) return void(t.lastReport = o);
                    e && e({ browser: "firefox", mediaType: "video", peerId: t.uid, isVideoMute: t.isVideoMute, frameRateReceived: Math.round(o.framerateMean) + "", frameRateDecoded: o.framesDecoded - t.lastReport.framesDecoded + "", bytesReceived: o.bytesReceived + "", packetsReceived: o.packetsReceived + "", packetsLost: o.packetsLost + "" }), t.lastReport = o
                  }
                } else if (("outbound-rtp" === o.type || "outboundrtp" === o.type) && "video" === o.mediaType) {
                  if (!t.lastReport) return void(t.lastReport = o);
                  e && e({ mediaType: "video", isVideoMute: t.isVideoMute, frameRateInput: Math.round(o.framerateMean) + "", frameRateSent: o.framesEncoded - t.lastReport.framesEncoded + "" }), t.lastReport = o
                }
              }
            } catch (e) { i.e(e) } finally { i.f() }
          }))
        }, t.getAudioRelatedStats = function(e) {
          t.peerConnection.getStats().then((function(n) {
            var r, i = v(n.values());
            try {
              for (i.s(); !(r = i.n()).done;) {
                var o = r.value;
                t.isSubscriber && ("inbound-rtp" !== o.type && "inboundrtp" !== o.type || "audio" !== o.mediaType || e && e({ browser: "firefox", mediaType: "audio", peerId: t.uid, isAudioMute: t.isAudioMute, frameDropped: o.packetsLost + "", frameReceived: o.packetsReceived + "", googJitterReceived: o.jitter + "", bytesReceived: o.bytesReceived + "", packetsReceived: o.packetsReceived + "", packetsLost: o.packetsLost + "" }))
              }
            } catch (e) { i.e(e) } finally { i.f() }
          }))
        }, t.getStatsRate = function(e) { t.getStats((function(t) { t.forEach((function(e) {})), e(t) })) }, t.getStats = function(e, n) { n = (n = n || 500) > 500 ? 500 : n, t.lastTimeGetStats && Date.now() - t.lastTimeGetStats < n ? e && e(t.filterStatsCache, t.originStatsCache) : this._getStats((function(n, r) { t.filterStatsCache = n, t.originStatsCache = r, t.lastTimeGetStats = Date.now(), e && e(n, r) })) }, t._getStats = function(n) {
          t.peerConnection.getStats().then((function(r) {
            var s, d = [],
              u = v(r.values());
            try {
              for (u.s(); !(s = u.n()).done;) {
                var l = s.value;
                d.push(l), "outbound-rtp" !== l.type && "outboundrtp" !== l.type || "video" !== l.mediaType || -1 !== l.id.indexOf("rtcp") || (o.id = l.id, o.type = l.type, o.mediaType = l.mediaType, o.bytesSent = l.bytesSent ? l.bytesSent + "" : "0", o.packetsSent = l.packetsSent ? l.packetsSent + "" : "0", o.googPlisReceived = l.pliCount ? l.pliCount + "" : "0", o.googNacksReceived = l.nackCount ? l.nackCount + "" : "0", o.googFirsReceived = l.firCount ? l.firCount + "" : "0", o.googFrameRateSent = l.framerateMean ? Math.round(l.framerateMean) + "" : "0"), "outbound-rtp" !== l.type && "outboundrtp" !== l.type || "audio" !== l.mediaType || -1 !== l.id.indexOf("rtcp") || (i.id = l.id, i.type = l.type, i.mediaType = l.mediaType, i.bytesSent = l.bytesSent ? l.bytesSent + "" : "0", i.packetsSent = l.packetsSent ? l.packetsSent + "" : "0", e.agoraStream.local && (i.audioInputLevel = Math.round(32767 * e.agoraStream.getAudioLevel()).toString())), "inbound-rtp" !== l.type && "inboundrtp" !== l.type || "audio" !== l.mediaType || l.isRemote || -1 !== l.id.indexOf("rtcp") || (a.id = l.id, a.type = l.type, a.mediaType = l.mediaType, a.bytesReceived = l.bytesReceived ? l.bytesReceived + "" : "0", a.packetsLost = l.packetsLost ? l.packetsLost + "" : "0", a.packetsReceived = l.packetsReceived ? l.packetsReceived + "" : "0", a.googJitterReceived = l.jitter ? l.jitter + "" : "0", e.agoraStream.local || (a.audioOutputLevel = Math.round(32767 * e.agoraStream.getAudioLevel()).toString())), "inbound-rtp" !== l.type && "inboundrtp" !== l.type || "video" !== l.mediaType || l.isRemote || -1 !== l.id.indexOf("rtcp") || (c.id = l.id, c.type = l.type, c.mediaType = l.mediaType, c.bytesReceived = l.bytesReceived ? l.bytesReceived + "" : "0", c.googFrameRateReceived = l.framerateMean ? Math.round(l.framerateMean) + "" : "0", c.googFramesDecoded = l.framesDecoded ? l.framesDecoded + "" : "0", Date.now() - m >= 1e3 ? (c.googFrameRateDecoded = (l.framesDecoded - f) / ((Date.now() - m) / 1e3), c.googFrameRateDecoded = Math.round(Math.max(0, c.googFrameRateDecoded)), m = Date.now(), g = c.googFrameRateDecoded, f = l.framesDecoded, c.googFrameRateDecoded = c.googFrameRateDecoded.toString()) : c.googFrameRateDecoded = g.toString(), c.packetsLost = l.packetsLost ? l.packetsLost + "" : "0", c.packetsReceived = l.packetsReceived ? l.packetsReceived + "" : "0", c.googJitterBufferMs = l.jitter ? l.jitter + "" : "0", c.googNacksSent = l.nackCount ? l.nackCount + "" : "0", c.googPlisSent = l.pliCount ? l.pliCount + "" : "0", c.googFirsSent = l.firCount ? l.firCount + "" : "0"), -1 !== l.id.indexOf("outbound_rtcp_video") && (o.packetsLost = l.packetsLost ? l.packetsLost + "" : "0")
              }
            } catch (e) { u.e(e) } finally { u.f() }
            var p = [o, i, a, c];
            p.push({ id: "time", startTime: t.connectedTime, timestamp: new Date }), n(p, d)
          }), (function(e) { u.default.error("[" + t.clientId + "]" + e) }))
        }, t.addStream = function(e) { r = !0, t.peerConnection.addStream(e), t.markActionNeeded() }, t.removeStream = function() { t.markActionNeeded() }, t.close = function() { t.state = "closed", t.peerConnection.close() }, t.markActionNeeded = function() { t.actionNeeded = !0, t.doLater((function() { t.onstablestate() })) }, t.doLater = function(e) { window.setTimeout(e, 1) }, t.onstablestate = function() {
          if (t.actionNeeded) {
            if ("new" === t.state || "established" === t.state) {
              r && (t.mediaConstraints = void 0), t.peerConnection.createOffer((function(e) {
                if (e.sdp = h(e.sdp), e.sdp = e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, "a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e), t.state = "preparing-offer", void t.markActionNeeded();
                u.default.debug("[" + t.clientId + "]Not sending a new offer")
              }), (function(e) { u.default.debug("[" + t.clientId + "]Ups! create offer failed ", e) }), t.mediaConstraints)
            } else if ("preparing-offer" === t.state) {
              if (t.moreIceComing) return;
              t.prevOffer = t.peerConnection.localDescription.sdp, t.offerCandidates = t.prevOffer.match(/a=candidate.+\r\n/g) || [], t.offerCandidates.length || (u.default.warning("[".concat(t.clientId, "]No Ice Candidate generated")), Object(p.getParameter)("SHIM_CANDIDATE") ? (u.default.debug("Shimming fake candidate"), t.prevOffer += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n") : u.default.error("[".concat(t.clientId, "]None Ice Candidate not allowed"))), t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"), t.sendMessage("OFFER", t.prevOffer), t.state = "offer-sent"
            } else if ("offer-received" === t.state) t.peerConnection.createAnswer((function(e) {
              if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) t.markActionNeeded();
              else {
                var n = new Date;
                u.default.debug("[" + t.clientId + "]" + n.getTime() + ": Starting ICE in responder"), t.iceStarted = !0
              }
            }), (function() { u.default.debug("[" + t.clientId + "]Ups! Something went wrong") }));
            else if ("offer-received-preparing-answer" === t.state) {
              if (t.moreIceComing) return;
              var e = t.peerConnection.localDescription.sdp;
              t.sendMessage("ANSWER", e), t.state = "established"
            } else t.debug("Dazed and confused in state " + t.state + ", stopping here");
            t.actionNeeded = !1
          }
        }, t.sendMessage = function(e, n) {
          var r = {};
          r.messageType = e, r.sdp = n, "OFFER" === e ? (r.offererSessionId = t.sessionId, r.answererSessionId = t.otherSessionId, r.seq = t.sequenceNumber += 1, r.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (r.offererSessionId = t.incomingMessage.offererSessionId, r.answererSessionId = t.sessionId, r.seq = t.incomingMessage.seq), t.onsignalingmessage(JSON.stringify(r))
        }, t._getSender = function(e) { if (t.peerConnection && t.peerConnection.getSenders) { var n = t.peerConnection.getSenders().find((function(t) { return t.track.kind == e })); if (n) return n } return null }, t.hasSender = function(e) { return !!t._getSender(e) }, t.replaceTrack = function(e, n, r) {
          var i = t._getSender(e.kind);
          if (!i) { return r("NO_SENDER_FOUND") }
          try { i.replaceTrack(e) } catch (e) { return r && r(e) }
          setTimeout((function() { return n && n() }), 50)
        }, t.error = function(e) { throw "Error in RoapOnJsep: " + e }, t.sessionId = t.roapSessionId += 1, t.sequenceNumber = 0, t.actionNeeded = !1, t.iceStarted = !1, t.moreIceComing = !0, t.iceCandidateCount = 0, t.onsignalingmessage = e.callback, t.peerConnection.ontrack = function(e) { t.onaddstream && t.onaddstream(e, "ontrack") }, t.peerConnection.onremovestream = function(e) { t.onremovestream && t.onremovestream(e) }, t.peerConnection.oniceconnectionstatechange = function(e) { "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date), t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState) };
        var h = function(t) {
            var n;
            if (e.video && e.maxVideoBW && (null == (n = t.match(/m=video.*\r\n/)) && (n = t.match(/m=video.*\n/)), n && n.length > 0)) {
              var r = n[0] + "b=TIAS:" + 1e3 * e.maxVideoBW + "\r\n";
              t = t.replace(n[0], r)
            }
            if (e.audio && e.maxAudioBW && (null == (n = t.match(/m=audio.*\r\n/)) && (n = t.match(/m=audio.*\n/)), n && n.length > 0)) {
              r = n[0] + "b=TIAS:" + 1e3 * e.maxAudioBW + "\r\n";
              t = t.replace(n[0], r)
            }
            return t
          },
          E = function(e) { return (e = e.replace(/a=.*abs-send-time\r\n/g, "")).replace(/a=.*goog-remb\r\n/g, "") };
        return t.onaddstream = null, t.onremovestream = null, t.state = "new", t.markActionNeeded(), t
      },
      S = n(48),
      y = n.n(S),
      R = n(25),
      T = (n(5), 103),
      I = function(e) { var t = {}; if (t.clientId = e.clientId, e.session_id = T += 1, "undefined" == typeof window || !window.navigator) throw u.default.error("[" + t.streamId + "][" + t.clientId + "]Publish/subscribe video/audio streams not supported yet"), new Error("NON_BROWSER_ENV_DETECTED"); return null !== window.navigator.userAgent.match("Firefox") ? (t.browser = "mozilla", t = _(e)) : "iOS" === r.getBrowserOS() || r.isSafari() ? (u.default.debug("[" + t.streamId + "][" + t.clientId + "]Safari"), (t = h(e)).browser = "safari") : ~window.navigator.userAgent.indexOf("Edge") ? t = new y.a(e) : (t = m(e)).browser = "chrome-stable", t },
      A = function(e, t, n) {
        var i = {};
        i.config = e, i.streamId = e.streamId, delete e.streamId, navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        var o = 0,
          a = 1,
          s = !1,
          c = null,
          d = function(e) {
            if (o++, c)
              if (c === e) u.default.debug("Using Video Source/ Audio Source");
              else {
                var n = c.getVideoTracks()[0],
                  r = c.getAudioTracks()[0],
                  i = e.getVideoTracks()[0],
                  d = e.getAudioTracks()[0];
                i && (n && c.removeTrack(n), c.addTrack(i)), d && (r && c.removeTrack(r), c.addTrack(d))
              }
            else c = e;
            o !== a || s || (s = !0, setTimeout((function() { t(c) }), 0))
          },
          l = function(e) { u.default.error("Failed to GetUserMedia", e.name, e.code, e.message, e), o++, s || (s = !0, setTimeout((function() { n && n(e) }), 0)) },
          p = function() {
            var t = { video: e.video, audio: e.audio };
            if (u.default.debug("GetUserMedia", JSON.stringify(t)), navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.mediaDevices.getUserMedia(t).then(d).catch(l);
            else if ("undefined" != typeof navigator && navigator.getMedia) navigator.getMedia(e, d, l);
            else {
              var r = { name: "MEDIA_NOT_SUPPORT", message: "Video/audio streams not supported yet" };
              u.default.error("[" + i.streamId + "]" + r.message), n && n(r)
            }
          };
        if ((e.videoSource || e.audioSource) && (c = new MediaStream, e.videoSource && c.addTrack(e.videoSource), e.audioSource && c.addTrack(e.audioSource)), e.video || e.audio || e.screen || e.screenAudio) {
          if (!e.screen && e.screenAudio) return n && n({ code: "Set screen to true before sharing the audio" });
          if (e.screen) {
            if (R.a.isElectron()) return e.screen.sourceId ? R.a.getScreenStream(e.screen.sourceId, e.screen, (function(t, n) { t ? l(t) : (e.audio && (a++, p()), d(n)) })) : R.a.shareScreen(e.screen, (function(t, n) { t ? l(t) : (e.audio && (a++, p()), d(n)) }));
            if (r.isFireFox()) {
              u.default.debug("[" + i.streamId + "]Screen access requested");
              if (!~["screen", "window", "application"].indexOf(e.screen.mediaSource)) return n && n({ code: "Invalid mediaSource, mediaSource should be one of [screen, window, application]" });
              navigator.getMedia({ video: e.screen }, (function(t) { e.audio && (a++, p()), d(t) }), l)
            } else if (r.isChromeKernel() && e.screen.extensionId) {
              if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] < 34) return void n({ code: "This browser does not support screen sharing" });
              u.default.debug("[" + i.streamId + "]Screen access on chrome stable, looking for extension");
              try {
                chrome.runtime.sendMessage(e.screen.extensionId, { getStream: !0 }, (function(t) {
                  if (void 0 === t) {
                    u.default.error("[" + i.streamId + "]No response from Chrome Plugin. Plugin not installed properly");
                    l({ name: "PluginNotInstalledProperly", message: "No response from Chrome Plugin. Plugin not installed properly." })
                  } else e.screen.mandatory.chromeMediaSourceId = t.streamId, navigator.getMedia({ video: e.screen }, (function(t) { e.audio && (a++, p()), d(t) }), l)
                }))
              } catch (e) { u.default.debug("[" + i.streamId + "]AgoraRTC screensharing plugin is not accessible"); return void n({ code: "no_plugin_present" }) }
            } else {
              if (window.navigator.mediaDevices.getDisplayMedia) { var f = {}; return "number" == typeof e.screen.width && "number" == typeof e.screen.height ? f.video = { width: { ideal: e.screen.width }, height: { ideal: e.screen.height } } : f.video = { width: e.screen.width, height: e.screen.height }, e.screen.frameRate && e.screen.frameRate.min ? f.video.frameRate = { ideal: e.screen.frameRate.max, max: e.screen.frameRate.max } : f.video.frameRate = e.screen.frameRate, e.screenAudio && (f.audio = e.screenAudio), u.default.debug("use getDisplayMedia, constraints:", f), window.navigator.mediaDevices.getDisplayMedia(f).then((function(t) {!e.screenAudio && e.audio && (a++, p()), d(t) })).catch(l) }
              u.default.error("[" + i.streamId + "]This browser does not support screenSharing"), n({ code: "This browser does not support screen sharing" })
            }
          } else p()
        } else d(c)
      }
  }, function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = r(n(0)),
      o = function() {
        function e(e, t, n) { void 0 === t && (t = ""), this.name = "AgoraRTCException", this.code = e, this.message = "AgoraRTCError " + this.code + ": " + t, this.data = n }
        return e.prototype.toString = function() { return this.data ? this.message + " data: " + JSON.stringify(this.data) : this.message }, e.prototype.throw = function() { throw i.default.error(this.toString()), this }, e
      }();
    t.AgoraRTCError = o,
      function(e) { e.UNEXPECTED_ERROR = "UNEXPECTED_ERROR", e.UNEXPECTED_RESPONSE = "UNEXPECTED_RESPONSE", e.TIMEOUT = "TIMEOUT", e.INVALID_PARAMS = "INVALID_PARAMS", e.NOT_SUPPORT = "NOT_SUPPORT", e.INVALID_OPERATION = "INVALID_OPERATION", e.OPERATION_ABORT = "OPERATION_ABORT", e.WEB_SECURITY_RESTRICT = "WEB_SECURITY_RESTRICT", e.NETWORK_ERROR = "NETWORK_ERROR", e.NETWORK_TIMEOUT = "NETWORK_TIMEOUT", e.NETWORK_RESPONSE_ERROR = "NETWORK_RESPONSE_ERROR", e.API_INVOKE_TIMEOUT = "API_INVOKE_TIMEOUT", e.ENUMERATE_DEVICES_FAILED = "ENUMERATE_DEVICES_FAILED", e.DEVICE_NOT_FOUND = "DEVICE_NOT_FOUND", e.ELECTRON_IS_NULL = "ELECTRON_IS_NULL", e.ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR = "ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR", e.STREAM_ALREADY_INITIALIZED = "STREAM_ALREADY_INITIALIZED", e.STREAM_IS_CLOSED = "STREAM_IS_CLOSED", e.ABORT_OTHER_INIT = "ABORT_OTHER_INIT", e.CHROME_PLUGIN_NO_RESPONSE = "CHROME_PLUGIN_NO_RESPONSE", e.CHROME_PLUGIN_NOT_INSTALL = "CHROME_PLUGIN_NOT_INSTALL", e.MEDIA_OPTION_INVALID = "MEDIA_OPTION_INVALID", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.CONSTRAINT_NOT_SATISFIED = "CONSTRAINT_NOT_SATISFIED", e.CAN_NOT_AUTOPLAY = "CAN_NOT_AUTOPLAY", e.HIGH_STREAM_NO_VIDEO_TRACK = "HIGH_STREAM_NO_VIDEO_TRACK", e.SCREEN_SHARE_CAN_NOT_CREATE_LOW_STREAM = "SCREEN_SHARE_CAN_NOT_CREATE_LOW_STREAM", e.TRACK_IS_DISABLED = "TRACK_IS_DISABLED", e.SHARE_AUDIO_NOT_ALLOWED = "SHARE_AUDIO_NOT_ALLOWED", e.TOKEN_GENERATOR_FUNCTION_ERROR = "TOKEN_GENERATOR_FUNCTION_ERROR", e.INVALID_UINT_UID_FROM_STRING_UID = "INVALID_UINT_UID_FROM_STRING_UID", e.CAN_NOT_GET_PROXY_SERVER = "CAN_NOT_GET_PROXY_SERVER", e.CAN_NOT_GET_GATEWAY_SERVER = "CAN_NOT_GET_GATEWAY_SERVER", e.UID_CONFLICT = "UID_CONFLICT", e.INVALID_LOCAL_TRACK = "INVALID_LOCAL_TRACK", e.INVALID_TRACK = "INVALID_TRACK", e.SENDER_NOT_FOUND = "SENDER_NOT_FOUND", e.CREATE_OFFER_FAILED = "CREATE_OFFER_FAILED", e.SET_ANSWER_FAILED = "SET_ANSWER_FAILED", e.ICE_FAILED = "ICE_FAILED", e.PC_CLOSED = "PC_CLOSED", e.SENDER_REPLACE_FAILED = "SENDER_REPLACE_FAILED", e.GATEWAY_P2P_LOST = "GATEWAY_P2P_LOST", e.NO_ICE_CANDIDATE = "NO_ICE_CANDIDATE", e.CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS = "CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS", e.INVALID_REMOTE_USER = "INVALID_REMOTE_USER", e.REMOTE_USER_IS_NOT_PUBLISHED = "REMOTE_USER_IS_NOT_PUBLISHED", e.SUBSCRIPTION_IS_IN_PROGRESS = "SUBSCRIPTION_IS_IN_PROGRESS", e.CUSTOM_REPORT_SEND_FAILED = "CUSTOM_REPORT_SEND_FAILED", e.CUSTOM_REPORT_FREQUENCY_TOO_HIGH = "CUSTOM_REPORT_FREQUENCY_TOO_HIGH", e.FETCH_AUDIO_FILE_FAILED = "FETCH_AUDIO_FILE_FAILED", e.READ_LOCAL_AUDIO_FILE_ERROR = "READ_LOCAL_AUDIO_FILE_ERROR", e.DECODE_AUDIO_FILE_FAILED = "DECODE_AUDIO_FILE_FAILED", e.EFFECT_ID_CONFLICTED = "EFFECT_ID_CONFLICTED", e.EFFECT_SOUND_ID_NOT_FOUND = "EFFECT_SOUND_ID_NOT_FOUND", e.WS_ABORT = "WS_ABORT", e.WS_DISCONNECT = "WS_DISCONNECT", e.WS_ERR = "WS_ERR", e.CAN_NOT_CONNECT_TO_LIVE_STREAMING_WORKER = "CAN_NOT_CONNECT_TO_LIVE_STREAMING_WORKER", e.LIVE_STREAMING_TASK_CONFLICT = "LIVE_STREAMING_TASK_CONFLICT", e.LIVE_STREAMING_INVALID_ARGUMENT = "LIVE_STREAMING_INVALID_ARGUMENT", e.LIVE_STREAMING_INTERNAL_SERVER_ERROR = "LIVE_STREAMING_INTERNAL_SERVER_ERROR", e.LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED = "LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED", e.LIVE_STREAMING_TRANSCODING_NOT_SUPPORT = "LIVE_STREAMING_TRANSCODING_NOT_SUPPORT", e.LIVE_STREAMING_CDN_ERROR = "LIVE_STREAMING_CDN_ERROR", e.LIVE_STREAMING_INVALID_RAW_STREAM = "LIVE_STREAMING_INVALID_RAW_STREAM", e.LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT = "LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT", e.LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE = "LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE", e.LIVE_STREAMING_WARN_FREQUENT_REQUEST = "LIVE_STREAMING_WARN_FREQUENT_REQUEST", e.WEBGL_INTERNAL_ERROR = "WEBGL_INTERNAL_ERROR", e.BEAUTY_PROCESSOR_INTERNAL_ERROR = "BEAUTY_PROCESSOR_INTERNAL_ERROR", e.CROSS_CHANNEL_WAIT_STATUS_ERROR = "CROSS_CHANNEL_WAIT_STATUS_ERROR", e.CROSS_CHANNEL_FAILED_JOIN_SRC = "CROSS_CHANNEL_FAILED_JOIN_SEC", e.CROSS_CHANNEL_FAILED_JOIN_DEST = "CROSS_CHANNEL_FAILED_JOIN_DEST", e.CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST = "CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST", e.CROSS_CHANNEL_SERVER_ERROR_RESPONSE = "CROSS_CHANNEL_SERVER_ERROR_RESPONSE", e.METADATA_OUT_OF_RANGE = "METADATA_OUT_OF_RANGE" }(t.AgoraRTCErrorCode || (t.AgoraRTCErrorCode = {}))
  }, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() { return c }));
    var r = n(0),
      i = window.AudioContext || window.webkitAudioContext,
      o = n(3),
      a = o.getParameter,
      s = o.setParameter,
      c = function() {
        return a("AUDIO_CONTEXT") || (console.log("Creating Audio Context"), s("AUDIO_CONTEXT", function() {
          if (i) {
            var e = new i;
            return window.ctx = e, new Promise((function(e) { document.body ? e() : window.addEventListener("load", e) })).then((function() {
              var t = function t() { "suspended" == e.state ? (r.default.debug("AudioContext is suspended, auto resume"), e.resume().then((function() { r.default.debug("AudioContext resume success"), document.body.removeEventListener("touchend", t, !0), document.body.removeEventListener("mousedown", t, !0) }))) : (r.default.debug("AudioContext is running"), document.body.removeEventListener("touchend", t, !0), document.body.removeEventListener("mousedown", t, !0)) };
              r.default.debug(">>> add event listener >>>>"), document.body.addEventListener("touchend", t, !0), document.body.addEventListener("mousedown", t, !0)
            })), e
          }
          throw new Error("AUDIO_CONTEXT_NOT_SUPPORTED")
        }())), a("AUDIO_CONTEXT")
      };
    c()
  }, function(e, t, n) {
    "use strict";
    var r = n(1),
      i = null,
      o = function() { try { i = window.require("electron") } catch (e) {} return i },
      a = function(e) {
        var t = r.report.reportApiInvoke(null, { callback: e, name: "getScreenSources", options: arguments, tag: "tracer" }),
          n = o();
        if (!n) return t && t("electron is null");
        try { var i = n.desktopCapturer.getSources({ types: ["window", "screen"] }) } catch (e) { console.log(e) }
        if (i instanceof Promise) console.log("electron.desktopCapturer.getSources return type is Promise"), i.then((function(e) { return t && t(null, e) })).catch((function(e) { return t && t(e) }));
        else i = n.desktopCapturer.getSources({ types: ["window", "screen"] }, (function(e, n) { console.log("electron.desktopCapturer.getSources return type is callback"), t && t(null, n) }))
      },
      s = function(e, t, n) {
        var r = t.width;
        t = { audio: !1, video: { mandatory: { chromeMediaSource: "desktop", chromeMediaSourceId: e, maxHeight: t.height, maxWidth: r, maxFrameRate: t.frameRate && t.frameRate.max, minFrameRate: t.frameRate && t.frameRate.min } } };
        navigator.webkitGetUserMedia(t, (function(e) { n && n(null, e) }), (function(e) { n && n(e) }))
      };
    t.a = {
      isElectron: function() { return !!o() },
      getElectronInstance: o,
      getScreenSources: a,
      getScreenStream: s,
      shareScreen: function(e, t) {
        a((function(n, r) {
          if (n) return t && t(n);
          ! function(e, t) {
            var n = document.createElement("div");
            n.innerText = "share screen", n.setAttribute("style", "text-align: center; height: 25px; line-height: 25px; border-radius: 4px 4px 0 0; background: #D4D2D4; border-bottom:  solid 1px #B9B8B9;");
            var r = document.createElement("div");
            r.setAttribute("style", "width: 100%; height: 500px; padding: 15px 25px ; box-sizing: border-box;");
            var i = document.createElement("div");
            i.innerText = "Agora Web Screensharing wants to share the contents of your screen with webdemo.agorabeckon.com. Choose what you'd like to share.", i.setAttribute("style", "height: 12%;");
            var o = document.createElement("div");
            o.setAttribute("style", "width: 100%; height: 80%; background: #FFF; border:  solid 1px #CBCBCB; display: flex; flex-wrap: wrap; justify-content: space-around; overflow-y: scroll; padding: 0 15px; box-sizing: border-box;");
            var a = document.createElement("div");
            a.setAttribute("style", "text-align: right; padding: 16px 0;");
            var s = document.createElement("button");
            s.innerHTML = "cancel", s.setAttribute("style", "width: 85px;"), s.onclick = function() { document.body.removeChild(c), t && t("NotAllowedError") }, a.appendChild(s), r.appendChild(i), r.appendChild(o), r.appendChild(a);
            var c = document.createElement("div");
            c.setAttribute("style", "position: absolute; z-index: 99999999; top: 50%; left: 50%; width: 620px; height: 525px; background: #ECECEC; border-radius: 4px; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%);"), c.appendChild(n), c.appendChild(r), document.body.appendChild(c), e.map((function(e) {
              if (e.id) {
                var n = document.createElement("div");
                n.setAttribute("style", "width: 30%; height: 160px; padding: 20px 0; text-align: center;box-sizing: content-box;"), n.innerHTML = '<div style="height: 120px; display: table-cell; vertical-align: middle;"><img style="width: 100%; background: #333333; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);" src=' + e.thumbnail.toDataURL() + ' /></div><span style="\theight: 40px; line-height: 40px; display: inline-block; width: 70%; word-break: keep-all; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + e.name + "</span>", n.onclick = function() { document.body.removeChild(c), t && t(null, e.id) }, o.appendChild(n)
              }
            }))
          }(r, (function(n, r) {
            if (n) return t && t(n);
            s(r, e, t)
          }))
        }))
      }
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(2);
    ! function(e) { e.TRANSCODE = "mix_streaming", e.RAW = "raw_streaming", e.INJECT = "inject_streaming" }(t.LiveStreamingServiceMode || (t.LiveStreamingServiceMode = {})), t.DEFAULT_LIVE_STREAMING_TRANSCODING_USER = { alpha: 1, height: 640, width: 360, x: 0, y: 0, zOrder: 0, audioChannel: 0 }, t.DEFAULT_LIVE_STREAMING_TRANSCODING_WATERMARK = { x: 0, y: 0, width: 160, height: 160, zOrder: 255, alpha: 1 }, t.isLiveStreamingTranscodingConfig = function(e) { return r.isEmpty(e.width) || r.checkValidNumber(e.width, "config.width", 0), r.isEmpty(e.height) || r.checkValidNumber(e.height, "config.height", 0), r.isEmpty(e.videoBitrate) || r.checkValidNumber(e.videoBitrate, "config.videoBitrate", 1, 1e6), r.isEmpty(e.videoFramerate) || r.checkValidNumber(e.videoFramerate, "config.videoFramerate"), r.isEmpty(e.lowLatency) || r.checkValidBoolean(e.lowLatency, "config.lowLatency"), r.isEmpty(e.audioSampleRate) || r.checkValidEnum(e.audioSampleRate, "config.audioSampleRate", [32e3, 44100, 48e3]), r.isEmpty(e.audioBitrate) || r.checkValidNumber(e.audioBitrate, "config.audioBitrate", 1, 128), r.isEmpty(e.audioChannels) || r.checkValidEnum(e.audioChannels, "config.audioChannels", [1, 2, 3, 4, 5]), r.isEmpty(e.videoGop) || r.checkValidNumber(e.videoGop, "config.videoGop"), r.isEmpty(e.videoCodecProfile) || r.checkValidEnum(e.videoCodecProfile, "config.videoCodecProfile", [66, 77, 100]), r.isEmpty(e.userCount) || r.checkValidNumber(e.userCount, "config.userCount", 0, 17), r.isEmpty(e.backgroundColor) || r.checkValidNumber(e.backgroundColor, "config.backgroundColor", 0, 16777215), e.transcodingUsers && !r.isEmpty(e.transcodingUsers) && (r.checkValidArray(e.transcodingUsers, "config.transcodingUsers"), e.transcodingUsers.forEach((function(e, t) { r.checkValidUID(e.uid), r.isEmpty(e.x) || r.checkValidNumber(e.x, "transcodingUser[" + t + "].x", 0, 1e4), r.isEmpty(e.y) || r.checkValidNumber(e.y, "transcodingUser[" + t + "].y", 0, 1e4), r.isEmpty(e.width) || r.checkValidNumber(e.width, "transcodingUser[" + t + "].width", 0, 1e4), r.isEmpty(e.height) || r.checkValidNumber(e.height, "transcodingUser[" + t + "].height", 0, 1e4), r.isEmpty(e.zOrder) || r.checkValidNumber(e.zOrder - 1, "transcodingUser[" + t + "].zOrder", 0, 100), r.isEmpty(e.alpha) || r.checkValidFloatNumber(e.alpha, "transcodingUser[" + t + "].alpha", 0, 1) }))), e.images && !r.isEmpty(e.images) && (r.checkValidArray(e.images, "config.images"), e.images.forEach((function(e, t) { r.checkValidString(e.url, "images[" + t + "].url", 1, 1e3, !1), r.isEmpty(e.x) || r.checkValidNumber(e.x, "images[" + t + "].x", 0, 1e4), r.isEmpty(e.y) || r.checkValidNumber(e.y, "images[" + t + "].y", 0, 1e4), r.isEmpty(e.width) || r.checkValidNumber(e.width, "images[" + t + "].width", 0, 1e4), r.isEmpty(e.height) || r.checkValidNumber(e.height, "images[" + t + "].height", 0, 1e4), r.isEmpty(e.zOrder) || r.checkValidNumber(e.zOrder, "images[" + t + "].zOrder", 0, 255), r.isEmpty(e.alpha) || r.checkValidFloatNumber(e.alpha, "images[" + t + "].alpha", 0, 1) }))), !0 }, t.DEFAULT_TRANSCODING_CONFIG = { audioBitrate: 48, audioChannels: 1, audioSampleRate: 48e3, backgroundColor: 0, height: 360, lowLatency: !1, videoBitrate: 400, videoCodecProfile: 100, videoCodecType: 1, videoFramerate: 15, videoGop: 30, width: 640, images: [], userConfigs: [], userConfigExtraInfo: "" }, t.isInjectStreamConfig = function(e) { return r.isEmpty(e.audioVolume) || r.checkValidNumber(e.audioVolume, "config.audioVolume", 0, 1e3), r.isEmpty(e.audioBitrate) || r.checkValidNumber(e.audioBitrate, "config.audioBitrate", 1, 1e4), r.isEmpty(e.audioChannels) || r.checkValidEnum(e.audioChannels, "config.audioChannels", [1, 2]), r.isEmpty(e.audioSampleRate) || r.checkValidEnum(e.audioSampleRate, "config.audioSampleRate", [32e3, 44100, 48e3]), r.isEmpty(e.width) || r.checkValidNumber(e.width, "config.width", 0, 1e4), r.isEmpty(e.height) || r.checkValidNumber(e.height, "config.height", 0, 1e4), r.isEmpty(e.videoBitrate) || r.checkValidNumber(e.videoBitrate, "config.videoBitrate", 1, 1e4), r.isEmpty(e.videoFramerate) || r.checkValidNumber(e.videoFramerate, "config.videoFramerate", 1, 1e4), r.isEmpty(e.videoGop) || r.checkValidNumber(e.videoGop, "config.videoGop", 1, 1e4), !0 }, t.DEFAULT_INJECT_CONFIG = { audioBitrate: 48, audioChannels: 2, audioVolume: 100, audioSampleRate: 48e3, height: 0, width: 0, videoBitrate: 400, videoFramerate: 15, videoGop: 30 },
      function(e) { e.WARNING = "@live_uap-warning", e.ERROR = "@line_uap-error", e.PUBLISH_STREAM_STATUS = "@live_uap-publish-status", e.INJECT_STREAM_STATUS = "@live_uap-inject-status", e.WORKER_STATUS = "@live_uap-worker-status", e.REQUEST_NEW_ADDRESS = "@live_uap-request-address" }(t.LiveStreamingUapSignalEvents || (t.LiveStreamingUapSignalEvents = {})),
      function(e) { e.REQUEST_WORKER_MANAGER_LIST = "@live_req_worker_manager" }(t.LiveStreamingInternalEvents || (t.LiveStreamingInternalEvents = {})),
      function(e) { e[e.LIVE_STREAM_RESPONSE_SUCCEED = 200] = "LIVE_STREAM_RESPONSE_SUCCEED", e[e.LIVE_STREAM_RESPONSE_ALREADY_EXISTS_STREAM = 454] = "LIVE_STREAM_RESPONSE_ALREADY_EXISTS_STREAM", e[e.LIVE_STREAM_RESPONSE_TRANSCODING_PARAMETER_ERROR = 450] = "LIVE_STREAM_RESPONSE_TRANSCODING_PARAMETER_ERROR", e[e.LIVE_STREAM_RESPONSE_BAD_STREAM = 451] = "LIVE_STREAM_RESPONSE_BAD_STREAM", e[e.LIVE_STREAM_RESPONSE_WM_PARAMETER_ERROR = 400] = "LIVE_STREAM_RESPONSE_WM_PARAMETER_ERROR", e[e.LIVE_STREAM_RESPONSE_WM_WORKER_NOT_EXIST = 404] = "LIVE_STREAM_RESPONSE_WM_WORKER_NOT_EXIST", e[e.LIVE_STREAM_RESPONSE_NOT_AUTHORIZED = 456] = "LIVE_STREAM_RESPONSE_NOT_AUTHORIZED", e[e.LIVE_STREAM_RESPONSE_FAILED_LOAD_IMAGE = 457] = "LIVE_STREAM_RESPONSE_FAILED_LOAD_IMAGE", e[e.LIVE_STREAM_RESPONSE_REQUEST_TOO_OFTEN = 429] = "LIVE_STREAM_RESPONSE_REQUEST_TOO_OFTEN", e[e.LIVE_STREAM_RESPONSE_NOT_FOUND_PUBLISH = 452] = "LIVE_STREAM_RESPONSE_NOT_FOUND_PUBLISH", e[e.LIVE_STREAM_RESPONSE_NOT_SUPPORTED = 453] = "LIVE_STREAM_RESPONSE_NOT_SUPPORTED", e[e.LIVE_STREAM_RESPONSE_MAX_STREAM_NUM = 455] = "LIVE_STREAM_RESPONSE_MAX_STREAM_NUM", e[e.LIVE_STREAM_RESPONSE_INTERNAL_SERVER_ERROR = 500] = "LIVE_STREAM_RESPONSE_INTERNAL_SERVER_ERROR", e[e.LIVE_STREAM_RESPONSE_WORKER_LOST = 501] = "LIVE_STREAM_RESPONSE_WORKER_LOST", e[e.LIVE_STREAM_RESPONSE_RESOURCE_LIMIT = 502] = "LIVE_STREAM_RESPONSE_RESOURCE_LIMIT", e[e.LIVE_STREAM_RESPONSE_WORKER_QUIT = 503] = "LIVE_STREAM_RESPONSE_WORKER_QUIT", e[e.ERROR_FAIL_SEND_MESSAGE = 504] = "ERROR_FAIL_SEND_MESSAGE", e[e.PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE = 30] = "PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE", e[e.PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT = 31] = "PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT", e[e.PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH = 32] = "PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH", e[e.PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN = 33] = "PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN" }(t.LIVE_STREAM_ERROR_CODE || (t.LIVE_STREAM_ERROR_CODE = {})),
      function(e) { e.CONNECTED = "websocket:connected", e.RECONNECTING = "websocket:reconnecting", e.WILL_RECONNECT = "websocket:will_reconnect", e.CLOSED = "websocket:closed", e.FAILED = "websocket:failed", e.ON_MESSAGE = "websocket:on_message", e.REQUEST_NEW_URLS = "websocket:request_new_urls" }(t.WebSocketManagerEvents || (t.WebSocketManagerEvents = {}))
  }, function(e, t, n) {
    var r = n(54),
      i = n(55);
    e.exports = function(e, t, n) {
      var o = t && n || 0;
      "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
      var a = (e = e || {}).random || (e.rng || r)();
      if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
        for (var s = 0; s < 16; ++s) t[o + s] = a[s];
      return t || i(a)
    }
  }, function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, o, a = r(n(0));
    ! function(e) { e.CHINA = "CHINA", e.ASIA = "ASIA", e.NORTH_AMERICA = "NORTH_AMERICA", e.EUROPE = "EUROPE", e.JAPAN = "JAPAN", e.INDIA = "INDIA", e.OCEANIA = "OCEANIA", e.SOUTH_AMERICA = "SOUTH_AMERICA", e.AFRICA = "AFRICA", e.OVERSEA = "OVERSEA", e.GLOBAL = "GLOBAL" }(i || (i = {})), t.AREAS = i,
      function(e) { e.CHINA = "CN", e.ASIA = "AS", e.NORTH_AMERICA = "NA", e.EUROPE = "EU", e.JAPAN = "JP", e.INDIA = "IN", e.OCEANIA = "OC", e.SOUTH_AMERICA = "SA", e.AFRICA = "AF", e.OVERSEA = "OVERSEA", e.GLOBAL = "GLOBAL" }(o || (o = {}));
    var s = { ASIA: { CODE: o.ASIA, WEBCS_DOMAIN: ["ap-web-1-asia.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-asia.agora.io"], PROXY_CS: ["proxy-ap-web-asia.agora.io"], CDS_AP: ["cds-ap-web-asia.agora.io", "cds-ap-web-asia2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-asia.agora.io", "sua-ap-web-asia2.agora.io"], UAP_AP: ["uap-ap-web-asia.agora.io", "uap-ap-web-asia2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-asia.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-asia.agora.io"], LOG_UPLOAD_SERVER: ["logservice-asia.agora.io"] }, NORTH_AMERICA: { CODE: o.NORTH_AMERICA, WEBCS_DOMAIN: ["ap-web-1-north-america.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-north-america.agora.io"], PROXY_CS: ["proxy-ap-web-america.agora.io"], CDS_AP: ["cds-ap-web-america.agora.io", "cds-ap-web-america2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-america.agora.io", "sua-ap-web-america2.agora.io"], UAP_AP: ["uap-ap-web-america.agora.io", "uap-ap-web-america2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-north-america.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-north-america.agora.io"], LOG_UPLOAD_SERVER: ["logservice-north-america.agora.io"] }, EUROPE: { CODE: o.EUROPE, WEBCS_DOMAIN: ["ap-web-1-europe.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-europe.agora.io"], PROXY_CS: ["proxy-ap-web-europe.agora.io"], CDS_AP: ["cds-ap-web-europe.agora.io", "cds-ap-web-europe2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-europe.agora.io", "sua-ap-web-europe.agora.io"], UAP_AP: ["uap-ap-web-europe.agora.io", "uap-ap-web-europe2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-europe.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-europe.agora.io"], LOG_UPLOAD_SERVER: ["logservice-europe.agora.io"] }, JAPAN: { CODE: o.JAPAN, WEBCS_DOMAIN: ["ap-web-1-japan.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-japan.agora.io"], PROXY_CS: ["proxy-ap-web-japan.agora.io"], CDS_AP: ["cds-ap-web-japan.agora.io", "cds-ap-web-japan2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-japan.agora.io", "sua-ap-web-japan2.agora.io"], UAP_AP: ["uap-ap-web-japan.agora.io", "\tuap-ap-web-japan2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-japan.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-japan.agora.io"], LOG_UPLOAD_SERVER: ["logservice-japan.agora.io"] }, INDIA: { CODE: o.INDIA, WEBCS_DOMAIN: ["ap-web-1-india.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-india.agora.io"], PROXY_CS: ["proxy-ap-web-india.agora.io"], CDS_AP: ["cds-ap-web-india.agora.io", "cds-ap-web-india2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-india.agora.io", "sua-ap-web-india2.agora.io"], UAP_AP: ["uap-ap-web-india.agora.io", "uap-ap-web-india2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-india.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-india.agora.io"], LOG_UPLOAD_SERVER: ["logservice-india.agora.io"] }, OVERSEA: { CODE: o.OVERSEA, WEBCS_DOMAIN: ["ap-web-1-oversea.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-oversea.agora.io"], PROXY_CS: ["proxy-ap-web-oversea.agora.io"], CDS_AP: ["cds-ap-web-oversea.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-oversea.agora.io"], UAP_AP: ["uap-ap-web-oversea.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-oversea.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oversea.agora.io"], LOG_UPLOAD_SERVER: ["logservice-oversea.agora.io"] }, GLOBAL: { CODE: o.GLOBAL, WEBCS_DOMAIN: ["webrtc2-ap-web-1.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["webrtc2-ap-web-3.agora.io"], PROXY_CS: ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"], CDS_AP: ["cds-ap-web-1.agora.io", "cds-ap-web-3.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-1.agora.io", "sua-ap-web-3.agora.io"], UAP_AP: ["uap-ap-web-1.agora.io", "uap-ap-web-3.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2.agora.io"], LOG_UPLOAD_SERVER: ["logservice.agora.io"] }, OCEANIA: { CODE: o.OCEANIA, WEBCS_DOMAIN: ["ap-web-1-oceania.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-oceania.agora.io"], PROXY_CS: ["proxy-ap-web-oceania.agora.io"], CDS_AP: ["cds-ap-web-oceania.agora.io", "cds-ap-web-oceania2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-oceania.agora.io", "sua-ap-web-oceania2.agora.io"], UAP_AP: ["uap-ap-web-oceania.agora.io", "uap-ap-web-oceania2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-oceania.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oceania.agora.io"], LOG_UPLOAD_SERVER: ["logservice-oceania.agora.io"] }, SOUTH_AMERICA: { CODE: o.SOUTH_AMERICA, WEBCS_DOMAIN: ["ap-web-1-south-america.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-south-america.agora.io"], PROXY_CS: ["proxy-ap-web-south-america.agora.io"], CDS_AP: ["cds-ap-web-south-america.agora.io", "cds-ap-web-south-america2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-south-america.agora.io", "sua-ap-web-south-america2.agora.io"], UAP_AP: ["uap-ap-web-south-america.agora.io", "uap-ap-web-south-america2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-south-america.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-south-america.agora.io"], LOG_UPLOAD_SERVER: ["logservice-south-america.agora.io"] }, AFRICA: { CODE: o.AFRICA, WEBCS_DOMAIN: ["ap-web-1-africa.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-africa.agora.io"], PROXY_CS: ["proxy-ap-web-africa.agora.io"], CDS_AP: ["cds-ap-web-africa.agora.io", "cds-ap-web-africa2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-africa.agora.io", "sua-ap-web-africa2.agora.io"], UAP_AP: ["uap-ap-web-africa.agora.io", "uap-ap-web-africa2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-africa.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-africa.agora.io"], LOG_UPLOAD_SERVER: ["logservice-south-africa.agora.io"] } };
    t.AREA_DOMAIN_MAP = s, s.CHINA = { CODE: o.CHINA, WEBCS_DOMAIN: ["webrtc2-ap-web-2.agoraio.cn"], WEBCS_DOMAIN_BACKUP_LIST: ["webrtc2-ap-web-4.agoraio.cn"], PROXY_CS: ["proxy-ap-web.agoraio.cn"], CDS_AP: ["cds-ap-web-2.agoraio.cn", "cds-ap-web-4.agoraio.cn"], ACCOUNT_REGISTER: ["sua-ap-web-2.agoraio.cn", "sua-ap-web-4.agoraio.cn"], UAP_AP: ["uap-ap-web-2.agoraio.cn", "uap-ap-web-4.agoraio.cn"], EVENT_REPORT_DOMAIN: ["statscollector-3.agoraio.cn"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-4.agoraio.cn"], LOG_UPLOAD_SERVER: ["logservice-china.agora.io"] };
    t.getAreaCodeByWebCS = function(e) {
      for (var t = Object.keys(s), n = 0; n < t.length; n++) {
        var r = t[n],
          i = s[r];
        if (i.WEBCS_DOMAIN.includes(e) || i.WEBCS_DOMAIN_BACKUP_LIST.includes(e)) return i.CODE === o.OVERSEA ? o.ASIA + "," + o.EUROPE + "," + o.AFRICA + "," + o.NORTH_AMERICA + "," + o.SOUTH_AMERICA + "," + o.OCEANIA : i.CODE
      }
    };
    t.getAreaDomainConfig = function(e) {
      var t = { WEBCS_DOMAIN: [], WEBCS_DOMAIN_BACKUP_LIST: [], PROXY_CS: [], CDS_AP: [], ACCOUNT_REGISTER: [], UAP_AP: [], EVENT_REPORT_DOMAIN: [], EVENT_REPORT_BACKUP_DOMAIN: [], LOG_UPLOAD_SERVER: [] };
      return e.map((function(e) {
        var n = s[e],
          r = Object.keys(n);
        r ? r.map((function(e) { "CODE" !== e && (t[e] = t[e].concat(n[e])) })) : a.default.info(e + " is not exist")
      })), t
    }
  }, function(e, t, n) {
    var r = n(68),
      i = n(69),
      o = n(31),
      a = n(70);
    e.exports = function(e) { return r(e) || i(e) || o(e) || a() }
  }, function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, o, a = r(n(0));
    ! function(e) { e.CHINA = "CHINA", e.ASIA = "ASIA", e.NORTH_AMERICA = "NORTH_AMERICA", e.EUROPE = "EUROPE", e.JAPAN = "JAPAN", e.INDIA = "INDIA", e.OCEANIA = "OCEANIA", e.SOUTH_AMERICA = "SOUTH_AMERICA", e.AFRICA = "AFRICA", e.OVERSEA = "OVERSEA", e.GLOBAL = "GLOBAL" }(i || (i = {})), t.AREAS = i,
      function(e) { e.CHINA = "CN", e.ASIA = "AS", e.NORTH_AMERICA = "NA", e.EUROPE = "EU", e.JAPAN = "JP", e.INDIA = "IN", e.OCEANIA = "OC", e.SOUTH_AMERICA = "SA", e.AFRICA = "AF", e.OVERSEA = "OVERSEA", e.GLOBAL = "GLOBAL" }(o || (o = {}));
    var s = { ASIA: { CODE: o.ASIA, WEBCS_DOMAIN: ["ap-web-1-asia.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-asia.agora.io"], PROXY_CS: ["proxy-ap-web-asia.agora.io"], CDS_AP: ["cds-ap-web-asia.agora.io", "cds-ap-web-asia2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-asia.agora.io", "sua-ap-web-asia2.agora.io"], UAP_AP: ["uap-ap-web-asia.agora.io", "uap-ap-web-asia2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-asia.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-asia.agora.io"], LOG_UPLOAD_SERVER: ["logservice-asia.agora.io"] }, NORTH_AMERICA: { CODE: o.NORTH_AMERICA, WEBCS_DOMAIN: ["ap-web-1-north-america.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-north-america.agora.io"], PROXY_CS: ["proxy-ap-web-america.agora.io"], CDS_AP: ["cds-ap-web-america.agora.io", "cds-ap-web-america2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-america.agora.io", "sua-ap-web-america2.agora.io"], UAP_AP: ["uap-ap-web-america.agora.io", "uap-ap-web-america2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-north-america.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-north-america.agora.io"], LOG_UPLOAD_SERVER: ["logservice-north-america.agora.io"] }, EUROPE: { CODE: o.EUROPE, WEBCS_DOMAIN: ["ap-web-1-europe.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-europe.agora.io"], PROXY_CS: ["proxy-ap-web-europe.agora.io"], CDS_AP: ["cds-ap-web-europe.agora.io", "cds-ap-web-europe2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-europe.agora.io", "sua-ap-web-europe.agora.io"], UAP_AP: ["uap-ap-web-europe.agora.io", "uap-ap-web-europe2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-europe.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-europe.agora.io"], LOG_UPLOAD_SERVER: ["logservice-europe.agora.io"] }, JAPAN: { CODE: o.JAPAN, WEBCS_DOMAIN: ["ap-web-1-japan.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-japan.agora.io"], PROXY_CS: ["proxy-ap-web-japan.agora.io"], CDS_AP: ["cds-ap-web-japan.agora.io", "cds-ap-web-japan2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-japan.agora.io", "sua-ap-web-japan2.agora.io"], UAP_AP: ["uap-ap-web-japan.agora.io", "\tuap-ap-web-japan2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-japan.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-japan.agora.io"], LOG_UPLOAD_SERVER: ["logservice-japan.agora.io"] }, INDIA: { CODE: o.INDIA, WEBCS_DOMAIN: ["ap-web-1-india.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-india.agora.io"], PROXY_CS: ["proxy-ap-web-india.agora.io"], CDS_AP: ["cds-ap-web-india.agora.io", "cds-ap-web-india2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-india.agora.io", "sua-ap-web-india2.agora.io"], UAP_AP: ["uap-ap-web-india.agora.io", "uap-ap-web-india2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-india.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-india.agora.io"], LOG_UPLOAD_SERVER: ["logservice-india.agora.io"] }, OVERSEA: { CODE: o.OVERSEA, WEBCS_DOMAIN: ["ap-web-1-oversea.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-oversea.agora.io"], PROXY_CS: ["proxy-ap-web-oversea.agora.io"], CDS_AP: ["cds-ap-web-oversea.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-oversea.agora.io"], UAP_AP: ["uap-ap-web-oversea.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-oversea.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oversea.agora.io"], LOG_UPLOAD_SERVER: ["logservice-oversea.agora.io"] }, GLOBAL: { CODE: o.GLOBAL, WEBCS_DOMAIN: ["webrtc2-ap-web-1.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["webrtc2-ap-web-3.agora.io"], PROXY_CS: ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"], CDS_AP: ["cds-ap-web-1.agora.io", "cds-ap-web-3.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-1.agora.io", "sua-ap-web-3.agora.io"], UAP_AP: ["uap-ap-web-1.agora.io", "uap-ap-web-3.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2.agora.io"], LOG_UPLOAD_SERVER: ["logservice.agora.io"] }, OCEANIA: { CODE: o.OCEANIA, WEBCS_DOMAIN: ["ap-web-1-oceania.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-oceania.agora.io"], PROXY_CS: ["proxy-ap-web-oceania.agora.io"], CDS_AP: ["cds-ap-web-oceania.agora.io", "cds-ap-web-oceania2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-oceania.agora.io", "sua-ap-web-oceania2.agora.io"], UAP_AP: ["uap-ap-web-oceania.agora.io", "uap-ap-web-oceania2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-oceania.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oceania.agora.io"], LOG_UPLOAD_SERVER: ["logservice-oceania.agora.io"] }, SOUTH_AMERICA: { CODE: o.SOUTH_AMERICA, WEBCS_DOMAIN: ["ap-web-1-south-america.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-south-america.agora.io"], PROXY_CS: ["proxy-ap-web-south-america.agora.io"], CDS_AP: ["cds-ap-web-south-america.agora.io", "cds-ap-web-south-america2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-south-america.agora.io", "sua-ap-web-south-america2.agora.io"], UAP_AP: ["uap-ap-web-south-america.agora.io", "uap-ap-web-south-america2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-south-america.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-south-america.agora.io"], LOG_UPLOAD_SERVER: ["logservice-south-america.agora.io"] }, AFRICA: { CODE: o.AFRICA, WEBCS_DOMAIN: ["ap-web-1-africa.agora.io"], WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-2-africa.agora.io"], PROXY_CS: ["proxy-ap-web-africa.agora.io"], CDS_AP: ["cds-ap-web-africa.agora.io", "cds-ap-web-africa2.agora.io"], ACCOUNT_REGISTER: ["sua-ap-web-africa.agora.io", "sua-ap-web-africa2.agora.io"], UAP_AP: ["uap-ap-web-africa.agora.io", "uap-ap-web-africa2.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-africa.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-africa.agora.io"], LOG_UPLOAD_SERVER: ["logservice-south-africa.agora.io"] } };
    t.AREA_DOMAIN_MAP = s, s.CHINA = { CODE: o.CHINA, WEBCS_DOMAIN: ["webrtc2-ap-web-2.agoraio.cn"], WEBCS_DOMAIN_BACKUP_LIST: ["webrtc2-ap-web-4.agoraio.cn"], PROXY_CS: ["proxy-ap-web.agoraio.cn"], CDS_AP: ["cds-ap-web-2.agoraio.cn", "cds-ap-web-4.agoraio.cn"], ACCOUNT_REGISTER: ["sua-ap-web-2.agoraio.cn", "sua-ap-web-4.agoraio.cn"], UAP_AP: ["uap-ap-web-2.agoraio.cn", "uap-ap-web-4.agoraio.cn"], EVENT_REPORT_DOMAIN: ["statscollector-3.agoraio.cn"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-4.agoraio.cn"], LOG_UPLOAD_SERVER: ["logservice-china.agora.io"] };
    t.getAreaCodeByWebCS = function(e) {
      for (var t = Object.keys(s), n = 0; n < t.length; n++) {
        var r = t[n],
          i = s[r];
        if (i.WEBCS_DOMAIN.includes(e) || i.WEBCS_DOMAIN_BACKUP_LIST.includes(e)) return i.CODE === o.OVERSEA ? o.ASIA + "," + o.EUROPE + "," + o.AFRICA + "," + o.NORTH_AMERICA + "," + o.SOUTH_AMERICA + "," + o.OCEANIA : i.CODE
      }
    };
    t.getAreaDomainConfig = function(e) {
      var t = { WEBCS_DOMAIN: [], WEBCS_DOMAIN_BACKUP_LIST: [], PROXY_CS: [], CDS_AP: [], ACCOUNT_REGISTER: [], UAP_AP: [], EVENT_REPORT_DOMAIN: [], EVENT_REPORT_BACKUP_DOMAIN: [], LOG_UPLOAD_SERVER: [] };
      return e.map((function(e) {
        var n = s[e],
          r = Object.keys(n);
        r ? r.map((function(e) { "CODE" !== e && (t[e] = t[e].concat(n[e])) })) : a.default.info(e + " is not exist")
      })), t
    }
  }, function(e, t, n) {
    var r = n(32);
    e.exports = function(e, t) { if (e) { if ("string" == typeof e) return r(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0 } }
  }, function(e, t) {
    e.exports = function(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
  }, function(e, t, n) {
    "use strict";
    var r = this && this.__spreadArrays || function() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
      var r = Array(e),
        i = 0;
      for (t = 0; t < n; t++)
        for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
      return r
    };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(23),
      o = function() {
        function e() { this._events = {}, this.addListener = this.on }
        return e.prototype.getListeners = function(e) { return this._events[e] ? this._events[e].map((function(e) { return e.listener })) : [] }, e.prototype.on = function(e, t) { this._events[e] || (this._events[e] = []); var n = this._events[e]; - 1 === this._indexOfListener(n, t) && n.push({ listener: t, once: !1 }) }, e.prototype.once = function(e, t) { this._events[e] || (this._events[e] = []); var n = this._events[e]; - 1 === this._indexOfListener(n, t) && n.push({ listener: t, once: !0 }) }, e.prototype.off = function(e, t) {
          if (this._events[e]) {
            var n = this._events[e],
              r = this._indexOfListener(n, t); - 1 !== r && n.splice(r, 1), 0 === this._events[e].length && delete this._events[e]
          }
        }, e.prototype.removeAllListeners = function(e) { e ? delete this._events[e] : this._events = {} }, e.prototype.emit = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          this._events[e] || (this._events[e] = []);
          for (var r = this._events[e].map((function(e) { return e })), i = 0; i < r.length; i += 1) {
            var o = r[i];
            o.once && this.off(e, o.listener), o.listener.apply(this, t || [])
          }
        }, e.prototype._indexOfListener = function(e, t) {
          for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
          return -1
        }, e
      }();

    function a(e, t) {
      for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
      var a = null,
        s = null;
      if (e.emit.apply(e, r([t], n, [function(e) { a = e }, function(e) { s = e }])), null !== s) throw s;
      if (null === a) throw new i.AgoraRTCError(i.AgoraRTCErrorCode.UNEXPECTED_ERROR, "handler is not sync");
      return a
    }
    t.EventEmitter = o, t.emitAsPromise = function(e, t) { for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o]; return 0 === e.getListeners(t).length ? Promise.reject(new i.AgoraRTCError(i.AgoraRTCErrorCode.UNEXPECTED_ERROR, "can not emit promise")) : new Promise((function(i, o) { e.emit.apply(e, r([t], n, [i, o])) })) }, t.emitAsInvokerNoResponse = function(e, t) { for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i]; return 0 === e.getListeners(t).length ? null : a.apply(void 0, r([e, t], n)) }, t.emitAsInvoker = a
  }, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }).apply(this, arguments)
      },
      i = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function a(e) { try { c(r.next(e)) } catch (e) { o(e) } }

          function s(e) { try { c(r.throw(e)) } catch (e) { o(e) } }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      o = this && this.__generator || function(e, t) {
        var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
        return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

        function s(o) {
          return function(s) {
            return function(o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { a = 0; continue }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break }
                    if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break }
                    if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                o = t.call(e, a)
              } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 }
            }([o, s])
          }
        }
      },
      a = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n(3),
      c = a(n(35)),
      d = n(23),
      u = a(n(0)),
      l = n(1);

    function p(e) { return new Promise((function(t) { window.setTimeout(t, e) })) }

    function f(e, t) { return new Promise((function(n, r) { t.timeout = t.timeout || s.getParameter("HTTP_CONNECT_TIMEOUT"), t.responseType = t.responseType || "json", t.data && (t.data = JSON.stringify(t.data)), t.headers = t.headers || {}, t.headers["Content-Type"] = "application/json", t.method = "POST", t.url = e, c.default.request(t).then((function(e) { n(e.data) })).catch((function(e) { c.default.isCancel(e) ? r(new d.AgoraRTCError(d.AgoraRTCErrorCode.OPERATION_ABORT, "cancel token canceled")) : "ECONNABORTED" === e.code ? r(new d.AgoraRTCError(d.AgoraRTCErrorCode.NETWORK_TIMEOUT, e.message)) : e.response ? r(new d.AgoraRTCError(d.AgoraRTCErrorCode.NETWORK_RESPONSE_ERROR, e.response.status)) : r(new d.AgoraRTCError(d.AgoraRTCErrorCode.NETWORK_ERROR, e.message)) })) })) }

    function g(e, n, r, a) {
      var s = this,
        c = Object.assign({}, t.DEFAULT_RETRY_CONFIG, a),
        u = c.timeout,
        l = function() {
          return i(s, void 0, void 0, (function() {
            return o(this, (function(e) {
              switch (e.label) {
                case 0:
                  return [4, p(u)];
                case 1:
                  return e.sent(), u *= c.timeoutFactor, u = Math.min(c.maxRetryTimeout, u), [2]
              }
            }))
          }))
        },
        f = !1,
        g = new Promise((function(t, a) {
          return i(s, void 0, void 0, (function() {
            var i, s, u;
            return o(this, (function(o) {
              switch (o.label) {
                case 0:
                  n = n || function() { return !1 }, r = r || function() { return !0 }, i = 0, o.label = 1;
                case 1:
                  if (!(i < c.maxRetryCount)) return [3, 12];
                  if (f) return [2, a(new d.AgoraRTCError(d.AgoraRTCErrorCode.OPERATION_ABORT))];
                  o.label = 2;
                case 2:
                  return o.trys.push([2, 7, , 11]), [4, e()];
                case 3:
                  return s = o.sent(), n(s, i) ? i + 1 === c.maxRetryCount ? [2, t(s)] : [4, l()] : [3, 5];
                case 4:
                  return o.sent(), [3, 6];
                case 5:
                  return [2, t(s)];
                case 6:
                  return [3, 11];
                case 7:
                  return u = o.sent(), r(u, i) ? i + 1 === c.maxRetryCount ? [2, a(u)] : [4, l()] : [3, 9];
                case 8:
                  return o.sent(), [3, 10];
                case 9:
                  return [2, a(u)];
                case 10:
                  return [3, 11];
                case 11:
                  return i += 1, [3, 1];
                case 12:
                  return [2]
              }
            }))
          }))
        }));
      return g.cancel = function() { return f = !0 }, g
    }

    function m(e, t) { return { addressList: e.servers.map((function(e, n) { return "wss://" + e.address.replace(/\./g, "-") + ".edge." + (n % 2 == 0 ? "agora.io" : "agoraio.cn") + ":" + e.wss + "?serviceName=" + encodeURIComponent(t) })), workerToken: e.workerToken, vid: e.vid } }
    t.wait = p, t.post = f, t.DEFAULT_RETRY_CONFIG = { timeout: 500, timeoutFactor: 1.5, maxRetryCount: 1 / 0, maxRetryTimeout: 1e4 }, t.getRetryWaitTime = function(e, t) { var n = t.timeout * Math.pow(t.timeoutFactor, e); return Math.min(t.maxRetryTimeout, n) }, t.retryable = g, t.liveStreamingServerResponseToResult = m;
    var h = 1;

    function v(e, n, a, c, p) {
      var v = this;
      void 0 === p && (p = t.DEFAULT_RETRY_CONFIG), h += 1;
      var E, _, S = { sid: a.sid, command: "convergeAllocateEdge", uid: "666", appId: a.appId, ts: Math.floor(Date.now() / 1e3), seq: h, requestId: h, version: s.VERSION, cname: a.cname },
        y = { service_name: n, json_body: JSON.stringify(S) },
        R = e[0];
      return g((function() {
        return i(v, void 0, void 0, (function() {
          var e, t, i, a, l;
          return o(this, (function(o) {
            switch (o.label) {
              case 0:
                return E = Date.now(), [4, f(R, { data: y, cancelToken: c, headers: { "X-Packet-Service-Type": "0", "X-Packet-URI": "61" } })];
              case 1:
                if (e = o.sent(), _ = Date.now() - E, 0 !== e.code) throw i = new d.AgoraRTCError(d.AgoraRTCErrorCode.UNEXPECTED_RESPONSE, "live streaming ap error, code" + e.code, { retry: !0 }), u.default.error(i.toString()), i;
                if (200 !== (t = JSON.parse(e.json_body)).code) throw i = new d.AgoraRTCError(d.AgoraRTCErrorCode.UNEXPECTED_RESPONSE, "live streaming app center error, code: " + t.code + ", reason: " + t.reason), u.default.error(i.toString()), i;
                if (!t.servers || 0 === t.servers.length) throw i = new d.AgoraRTCError(d.AgoraRTCErrorCode.UNEXPECTED_RESPONSE, "live streaming app center empty server"), u.default.error(i.toString()), i;
                if (a = m(t, n), s.getParameter("LIVE_STREAMING_ADDRESS")) try { l = JSON.parse(s.getParameter("LIVE_STREAMING_ADDRESS")), a.addressList = l } catch (e) { a.addressList = [s.getParameter("LIVE_STREAMING_ADDRESS")] }
                return [2, r(r({}, a), { responseTime: _ })]
            }
          }))
        }))
      }), (function(t, r) { return l.report.requestApWorkerEvent(a.sid, { success: !0, sc: 200, serviceName: n, responseDetail: JSON.stringify(t.addressList), firstSuccess: 0 === r, responseTime: _, serverIp: e[r % e.length] }), !1 }), (function(t, r) { return l.report.requestApWorkerEvent(a.sid, { success: !1, sc: t.data && t.data.code || 200, serviceName: n, responseTime: _, serverIp: e[r % e.length] }), !!(t.code !== d.AgoraRTCErrorCode.OPERATION_ABORT && t.code !== d.AgoraRTCErrorCode.UNEXPECTED_RESPONSE || t.data && t.data.retry) && (R = e[(r + 1) % e.length], !0) }), p)
    }
    t.requestLiveStreamingWorkerManager = v, t.getLiveStreamingWorkerMangerResult = function(e, t, n) {
      return i(this, void 0, void 0, (function() {
        var r, i;
        return o(this, (function(o) {
          switch (o.label) {
            case 0:
              r = s.getParameter("UAP_AP").map((function(e) { return t.proxyServer ? "https://" + t.proxyServer + "/ap/?url=" + e + "/api/v1?action=uap" : "https://" + e + "/api/v1?action=uap" })), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, v(r, e, t, n)];
            case 2:
              return [2, o.sent()];
            case 3:
              throw i = o.sent(), l.report.requestApWorkerEvent(t.sid, { success: !1, sc: i.data && i.data.code || 200, serviceName: e, responseTime: i.data && i.data.responseTime }), i;
            case 4:
              return [2]
          }
        }))
      }))
    }
  }, function(e, t, n) { e.exports = n(74) }, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } }
  }, function(e, t, n) {
    "use strict";
    var r = n(18);

    function i(e) { return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
    e.exports = function(e, t, n) {
      if (!t) return e;
      var o;
      if (n) o = n(t);
      else if (r.isURLSearchParams(t)) o = t.toString();
      else {
        var a = [];
        r.forEach(t, (function(e, t) { null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) { r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(i(t) + "=" + i(e)) }))) })), o = a.join("&")
      }
      if (o) { var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + o }
      return e
    }
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e) { return !(!e || !e.__CANCEL__) }
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = n(18),
        i = n(80),
        o = { "Content-Type": "application/x-www-form-urlencoded" };

      function a(e, t) {!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) }
      var s, c = {
        adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (s = n(40)), s),
        transformRequest: [function(e, t) { return i(t, "Accept"), i(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }],
        transformResponse: [function(e) {
          if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
          return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function(e) { return e >= 200 && e < 300 }
      };
      c.headers = { common: { Accept: "application/json, text/plain, */*" } }, r.forEach(["delete", "get", "head"], (function(e) { c.headers[e] = {} })), r.forEach(["post", "put", "patch"], (function(e) { c.headers[e] = r.merge(o) })), e.exports = c
    }).call(this, n(79))
  }, function(e, t, n) {
    "use strict";
    var r = n(18),
      i = n(81),
      o = n(37),
      a = n(83),
      s = n(86),
      c = n(87),
      d = n(41);
    e.exports = function(e) {
      return new Promise((function(t, u) {
        var l = e.data,
          p = e.headers;
        r.isFormData(l) && delete p["Content-Type"];
        var f = new XMLHttpRequest;
        if (e.auth) {
          var g = e.auth.username || "",
            m = e.auth.password || "";
          p.Authorization = "Basic " + btoa(g + ":" + m)
        }
        var h = a(e.baseURL, e.url);
        if (f.open(e.method.toUpperCase(), o(h, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f.onreadystatechange = function() {
            if (f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
              var n = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null,
                r = { data: e.responseType && "text" !== e.responseType ? f.response : f.responseText, status: f.status, statusText: f.statusText, headers: n, config: e, request: f };
              i(t, u, r), f = null
            }
          }, f.onabort = function() { f && (u(d("Request aborted", e, "ECONNABORTED", f)), f = null) }, f.onerror = function() { u(d("Network Error", e, null, f)), f = null }, f.ontimeout = function() {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), u(d(t, e, "ECONNABORTED", f)), f = null
          }, r.isStandardBrowserEnv()) {
          var v = n(88),
            E = (e.withCredentials || c(h)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
          E && (p[e.xsrfHeaderName] = E)
        }
        if ("setRequestHeader" in f && r.forEach(p, (function(e, t) { void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : f.setRequestHeader(t, e) })), r.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), e.responseType) try { f.responseType = e.responseType } catch (t) { if ("json" !== e.responseType) throw t }
        "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) { f && (f.abort(), u(e), f = null) })), void 0 === l && (l = null), f.send(l)
      }))
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(82);
    e.exports = function(e, t, n, i, o) { var a = new Error(e); return r(a, t, n, i, o) }
  }, function(e, t, n) {
    "use strict";
    var r = n(18);
    e.exports = function(e, t) {
      t = t || {};
      var n = {},
        i = ["url", "method", "params", "data"],
        o = ["headers", "auth", "proxy"],
        a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
      r.forEach(i, (function(e) { void 0 !== t[e] && (n[e] = t[e]) })), r.forEach(o, (function(i) { r.isObject(t[i]) ? n[i] = r.deepMerge(e[i], t[i]) : void 0 !== t[i] ? n[i] = t[i] : r.isObject(e[i]) ? n[i] = r.deepMerge(e[i]) : void 0 !== e[i] && (n[i] = e[i]) })), r.forEach(a, (function(r) { void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r]) }));
      var s = i.concat(o).concat(a),
        c = Object.keys(t).filter((function(e) { return -1 === s.indexOf(e) }));
      return r.forEach(c, (function(r) { void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r]) })), n
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) { this.message = e }
    r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, e.exports = r
  }, function(e, t) { e.exports = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } }, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function a(e) { try { c(r.next(e)) } catch (e) { o(e) } }

          function s(e) { try { c(r.throw(e)) } catch (e) { o(e) } }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      i = this && this.__generator || function(e, t) {
        var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
        return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

        function s(o) {
          return function(s) {
            return function(o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { a = 0; continue }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break }
                    if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break }
                    if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                o = t.call(e, a)
              } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 }
            }([o, s])
          }
        }
      },
      o = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } },
      a = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = o(n(56)),
      c = a(n(60)),
      d = a(n(61)),
      u = o(n(0)),
      l = n(3),
      p = s.default.Root.fromJSON(d),
      f = function() {
        function e() { this.requestArray = [], this.retryBackoffCount = 0, this.state = 0 }
        return e.prototype.setProxy = function(e) { this.proxyServer = e }, e.prototype.sendReportList = function(e) {
          var t = this,
            n = this._dataConvert("ProtoRaws", { sendTs: Math.round(Date.now() / 1e3), payloads: e.map((function(e) { return { id: c[e.type], msg: t._dataConvert(e.type, e.data) } })) });
          this.send(n)
        }, e.prototype._dataConvert = function(e, t) { var n; try { n = p.lookupType("protobuf." + e) } catch (t) { u.default.error("[send-proto] invalid proto name " + e) } var r = n.create(t); return n.encode(r).finish() }, e.prototype.send = function(e) { 0 == this.state ? this._send(e) : this.requestArray.push(e) }, e.prototype._send = function(e) {
          return r(this, void 0, void 0, (function() {
            return i(this, (function(t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 2, , 4]), this.state = 1, [4, this.request(e)];
                case 1:
                  return t.sent(), this.retryBackoffCount = 0, 0 !== this.requestArray.length ? this._send(this.requestArray.shift()) : this.state = 0, [3, 4];
                case 2:
                  return t.sent(), [4, g(this.retryBackoffCount++ < 2 ? 200 : 1e4)];
                case 3:
                  return t.sent(), this._send(e), [3, 4];
                case 4:
                  return [2]
              }
            }))
          }))
        }, e.prototype.request = function(e) {
          return r(this, void 0, void 0, (function() {
            var t, n;
            return i(this, (function(r) {
              switch (r.label) {
                case 0:
                  t = this._getAddress(), n = this._getBackupAddress(), r.label = 1;
                case 1:
                  return r.trys.push([1, 3, , 5]), [4, this._request(t, e)];
                case 2:
                  return r.sent(), [3, 5];
                case 3:
                  return r.sent(), [4, this._request(n, e)];
                case 4:
                  return r.sent(), [3, 5];
                case 5:
                  return [2]
              }
            }))
          }))
        }, e.prototype._request = function(e, t) { return this._post(e, t) }, e.prototype._post = function(e, t) {
          return new Promise((function(n, r) {
            var i = new XMLHttpRequest;
            i.timeout = l.getParameter("HTTP_CONNECT_TIMEOUT"), i.open("POST", e, !0), i.setRequestHeader("Content-type", "application/octet-stream"), i.onload = function(e) { n(i.responseText) }, i.onerror = function(e) { r(e) }, i.ontimeout = function(e) { r(e) }, i.send(t)
          }))
        }, e.prototype._getAddress = function() { return this.proxyServer ? "https://" + this.proxyServer + "/rs/?h=" + l.getParameter("EVENT_REPORT_DOMAIN") + "&p=6443&d=events/proto-raws" : "https://" + l.getParameter("EVENT_REPORT_DOMAIN") + ":6443/events/proto-raws" }, e.prototype._getBackupAddress = function() { return this.proxyServer ? "https://" + this.proxyServer + "/rs/?h=" + l.getParameter("EVENT_REPORT_BACKUP_DOMAIN") + "&p=6443&d=events/proto-raws" : "https://" + l.getParameter("EVENT_REPORT_BACKUP_DOMAIN") + ":6443/events/proto-raws" }, e
      }();
    t.default = f;
    var g = function(e) { return new Promise((function(t) { window.setTimeout(t, e) })) }
  }, function(e, t) { e.exports = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, function(e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    e.exports = function(e, t, r) { return t && n(e.prototype, t), r && n(e, r), e }
  }, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function a(e) { try { c(r.next(e)) } catch (e) { o(e) } }

          function s(e) { try { c(r.throw(e)) } catch (e) { o(e) } }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      i = this && this.__generator || function(e, t) {
        var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
        return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

        function s(o) {
          return function(s) {
            return function(o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { a = 0; continue }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break }
                    if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break }
                    if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                o = t.call(e, a)
              } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 }
            }([o, s])
          }
        }
      },
      o = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a, s = o(n(0)),
      c = n(15);
    ! function(e) { e.NEW = "new", e.PREPARING_OFFER = "preparing-offer", e.OFFER_SENT = "offer-sent", e.ESTABLISHED = "established", e.CLOSED = "closed" }(a || (a = {}));
    var d = function() {
      function e(e) { this.candidate = null, this.state = a.NEW, this.config = e, this.isSubscriber = this.config.isSubscriber, this.peerConnection = this.initPeecConnection(e), this.peerConnection.onicecandidate = this._onicecandidate.bind(this), this.peerConnection.oniceconnectionstatechange = this._oniceconnectionstatechange.bind(this), this.peerConnection.onaddstream = this._onaddstream.bind(this), this.peerConnection.ontrack = this._ontrack.bind(this), this.processSignalingMessage = this.setAnswer.bind(this), this.peerConnection.createOffer({ offerToReceiveAudio: !0, offerToReceiveVideo: !0 }).then(this.setLocalSDP.bind(this)), this.sendVideoStats = { id: "", type: "", mediaType: "", googCodecName: "h264" === this.config.codec ? "H264" : "VP8", bytesSent: "0", packetsLost: "0", packetsSent: "0", googAdaptationChanges: "0", googAvgEncodeMs: "0", googEncodeUsagePercent: "0", googFirsReceived: "0", googFrameHeightSent: "0", googFrameHeightInput: "0", googFrameRateInput: "0", googFrameRateSent: "0", googFrameWidthSent: "0", googFrameWidthInput: "0", googNacksReceived: "0", googPlisReceived: "0", googRtt: "0", googFramesEncoded: "0" }, this.sendAudioStats = { id: "", type: "", mediaType: "", googCodecName: "opus", aecDivergentFilterFraction: "0", audioInputLevel: "0", bytesSent: "0", packetsSent: "0", googEchoCancellationReturnLoss: "0", googEchoCancellationReturnLossEnhancement: "0" }, this.receiveAudioStats = { id: "", type: "", mediaType: "", audioOutputLevel: "0", bytesReceived: "0", packetsLost: "0", packetsReceived: "0", googAccelerateRate: "0", googCurrentDelayMs: "0", googDecodingCNG: "0", googDecodingCTN: "0", googDecodingCTSG: "0", googDecodingNormal: "0", googDecodingPLC: "0", googDecodingPLCCNG: "0", googExpandRate: "0", googJitterBufferMs: "0", googJitterReceived: "0", googPreemptiveExpandRate: "0", googPreferredJitterBufferMs: "0", googSecondaryDecodedRate: "0", googSpeechExpandRate: "0" }, this.receiveVideoStats = { id: "", type: "", mediaType: "", googTargetDelayMs: "0", packetsLost: "0", googDecodeMs: "0", googMaxDecodeMs: "0", googRenderDelayMs: "0", googFrameWidthReceived: "0", googFrameHeightReceived: "0", googFrameRateReceived: "0", googFrameRateDecoded: "0", googFrameRateOutput: "0", googFramesDecoded: "0", googFrameReceived: "0", googJitterBufferMs: "0", googCurrentDelayMs: "0", googMinPlayoutDelayMs: "0", googNacksSent: "0", googPlisSent: "0", googFirsSent: "0", bytesReceived: "0", packetsReceived: "0" } }
      return e.prototype.addStream = function(e) { this.peerConnection.addStream(e) }, e.prototype.setRtpSenderParameters = function(e) { return r(this, void 0, void 0, (function() { return i(this, (function(e) { return [2] })) })) }, e.prototype.setAnswer = function(e) {
        var t = JSON.parse(e);
        this.peerConnection.setRemoteDescription(new RTCSessionDescription({ sdp: t.sdp, type: "answer" })), this.onsignalingmessage && this.onsignalingmessage("")
      }, e.prototype.close = function() { this.peerConnection.close() }, e.prototype.getStats = function(e, t) {
        if (void 0 === t && (t = 500), t = t > 500 ? 500 : t, Date.now() - this.lastTimeGetStats < t) {
          var n = [];
          this.config.isSubscriber ? (n.push(this.receiveVideoStats), n.push(this.receiveAudioStats)) : (n.push(this.sendAudioStats), n.push(this.sendVideoStats)), n.push({ id: "time", startTime: this.connectedTime, timestamp: Date.now() }), e && e(n)
        } else this._getStats(e)
      }, e.prototype._getStats = function(e) {
        var t = this,
          n = [];
        this.peerConnection.getStats(null).then((function(r) {
          t.lastTimeGetStats = Date.now(), Object.keys(r).map((function(e) {
            var n = r[e];
            t.config.isSubscriber ? n.type && "inboundrtp" === n.type && n.mediaType && "audio" === n.mediaType ? (t.receiveAudioStats.id = n.id + "recv", t.receiveAudioStats.type = n.type + "", t.receiveAudioStats.mediaType = n.mediaType + "", t.receiveAudioStats.packetsReceived = n.packetsReceived + "", t.receiveAudioStats.bytesReceived = n.bytesReceived + "", t.receiveAudioStats.packetsLost = n.packetsLost + "", t.receiveAudioStats.googJitterReceived = n.jitter + "") : n.type && "inboundrtp" === n.type && n.mediaType && "video" === n.mediaType ? (t.receiveVideoStats.id = n.id + "recv", t.receiveVideoStats.type = n.type + "", t.receiveVideoStats.mediaType = n.mediaType + "", t.receiveVideoStats.packetsReceived = n.packetsReceived + "", t.receiveVideoStats.bytesReceived = n.bytesReceived + "", t.receiveVideoStats.packetsLost = n.packetsLost + "", t.receiveVideoStats.googJitterBufferMs = n.jitter + "", t.receiveVideoStats.googPlisSent = n.pliCount + "", t.receiveVideoStats.googFirsSent = n.firCount + "", t.receiveVideoStats.googNacksSent = n.nackCount + "") : n.remoteSource && n.type && "track" === n.type && n.trackIdentifier && -1 !== n.trackIdentifier.indexOf("v") ? (t.receiveVideoStats.googFrameHeightReceived = n.frameHeight + "", t.receiveVideoStats.googFrameWidthReceived = n.frameWidth + "", t.receiveVideoStats.googFrameRateDecoded = n.framesPerSecond + "", t.receiveVideoStats.googFrameRateOutput = n.framesPerSecond + "", t.receiveVideoStats.googFrameRateReceived = n.framesPerSecond + "", t.receiveVideoStats.googFramesDecoded = n.framesDecoded + "", t.receiveVideoStats.googFrameReceived = n.framesReceived + "") : n.remoteSource && n.type && "track" === n.type && n.trackIdentifier && -1 !== n.trackIdentifier.indexOf("a") && (t.receiveAudioStats.audioOutputLevel = n.audioLevel + "") : !n.isRemote && n.type && "outboundrtp" === n.type && n.mediaType && "audio" === n.mediaType ? (t.sendAudioStats.id = n.id + "send", t.sendAudioStats.type = n.type + "", t.sendAudioStats.mediaType = n.mediaType + "", t.sendAudioStats.packetsSent = n.packetsSent + "", t.sendAudioStats.bytesSent = n.bytesSent + "") : !n.isRemote && n.type && "outboundrtp" === n.type && n.mediaType && "video" === n.mediaType ? (t.sendVideoStats.id = n.id + "send", t.sendVideoStats.type = n.type + "", t.sendVideoStats.mediaType = n.mediaType + "", t.sendVideoStats.packetsSent = n.packetsSent + "", t.sendVideoStats.bytesSent = n.bytesSent + "", t.sendVideoStats.googRtt = n.roundTripTime + "", t.sendVideoStats.googPlisReceived = n.pliCount + "", t.sendVideoStats.googFirsReceived = n.firCount + "", t.sendVideoStats.googNacksReceived = n.nackCount + "") : !n.remoteSource && n.type && "track" === n.type && n.framesSent && 0 !== n.framesSent && (t.sendVideoStats.googFrameHeightSent = n.frameHeight + "", t.sendVideoStats.googFrameHeightInput = n.frameHeight + "", t.sendVideoStats.googFrameWidthSent = n.frameWidth + "", t.sendVideoStats.googFrameWidthInput = n.frameWidth + "", t.sendVideoStats.googFramesEncoded = n.framesSent + "", t.sendVideoStats.googFrameRateSent = n.framesPerSecond + "")
          })), t.config.isSubscriber ? (n.push(t.receiveVideoStats), n.push(t.receiveAudioStats)) : (n.push(t.sendAudioStats), n.push(t.sendVideoStats)), n.push({ id: "time", startTime: t.connectedTime, timestamp: Date.now() }), e && e(n)
        }))
      }, e.prototype.getStatsRate = function(e) { this.getStats(e) }, e.prototype.initPeecConnection = function(e) {
        var t = e.stunServerUrl,
          n = e.turnServer,
          r = e.iceServers;
        return this.pcConfig = { iceServers: [{ urls: "stun:webcs.agora.io:3478" }] }, r instanceof Array ? this.pcConfig.iceServers = e.iceServers : t && (t instanceof Array ? t.map((function(e) { "string" == typeof e && "" !== e && this.pcConfig.iceServers.push({ urls: e }) })) : "string" == typeof t && "" !== t && this.pcConfig.iceServers.push({ urls: t })), n && (n instanceof Array ? n.map((function(e) { "string" == typeof e.url && "" !== e.url && this.pcConfig.iceServers.push({ username: e.username, credential: e.credential, url: e.url }) })) : "auto" !== n.mode && "manual" !== n.mode || (n.udpport && this.pcConfig.iceServers.push({ username: n.username, credential: n.credential, credentialType: "password", urls: "turn:" + n.url + ":" + n.udpport + "?transport=udp" }), "string" == typeof n.tcpport && "" !== n.tcpport && this.pcConfig.iceServers.push({ username: n.username, credential: n.credential, credentialType: "password", urls: "turn:" + n.url + ":" + n.tcpport + "?transport=tcp" }), !0 === n.forceturn && (this.pcConfig.iceTransportPolicy = "relay"))), new c.RTCPeerConnection(this.pcConfig)
      }, e.prototype._ontrack = function(e) { this.onaddstream && this.onaddstream(e, "ontrack") }, e.prototype._onaddstream = function(e) { this.onaddstream && this.onaddstream(e, "onaddstream") }, e.prototype._oniceconnectionstatechange = function(e) { "connected" === e.currentTarget.iceConnectionState && (this.state = a.ESTABLISHED, this.connectedTime = Date.now()), this.oniceconnectionstatechange && this.oniceconnectionstatechange(e.currentTarget.iceConnectionState) }, e.prototype._onicecandidate = function(e) {!this.candidate && e && (this.candidate = e.candidate, this.peerConnection.createOffer({ offerToReceiveAudio: !0, offerToReceiveVideo: !0 }).then(this.editLocalSDP.bind(this)).then(this.setLocalSDP.bind(this)).then(this.sendOffer.bind(this)).catch()) }, e.prototype.setLocalSDP = function(e) { return this.peerConnection.setLocalDescription(new RTCSessionDescription({ sdp: e.sdp, type: "offer" })), this.state = a.PREPARING_OFFER, e }, e.prototype.editLocalSDP = function(e) { return e.sdp = this.setBandWidth(e.sdp), e.sdp = this.reviseOpus(e.sdp), e.sdp = this.addCandidate(e.sdp), e }, e.prototype.setSendRecv = function(e) { return e = (e = (e = e.replace(/a=recvonly\r\n/g, "a=sendrecv\r\n")).replace(/a=sendonly\r\n/g, "a=sendrecv\r\n")).replace(/a=inactive\r\n/g, "a=sendrecv\r\n") }, e.prototype.setBandWidth = function(e) {
        var t, n, r = this.config,
          i = r.codec,
          o = r.minVideoBW,
          a = r.maxVideoBW,
          c = r.maxAudioBW,
          d = r.clientId;
        if ((t = e.match(/m=video.*\r\n/)) && o && a) {
          n = t[0] + "b=AS:" + a + "\r\n";
          var u = 0,
            l = 0;
          "h264" === i ? (u = e.search(/a=rtpmap:(\d+) H264\/90000\r\n/), l = e.search(/H264\/90000\r\n/)) : "vp8" === i && (u = e.search(/a=rtpmap:(\d+) VP8\/90000\r\n/), l = e.search(/VP8\/90000\r\n/)), -1 !== u && -1 !== l && l - u > 10 && (n = n + "a=fmtp:" + e.slice(u + 9, l - 1) + " x-google-min-bitrate=" + o + "\r\n"), e = e.replace(t[0], n), s.default.debug("[" + d + "]Set Video Bitrate - min:" + o + " max:" + a)
        }
        return (t = e.match(/m=audio.*\r\n/)) && c && (n = t[0] + "b=AS:" + c + "\r\n", e = e.replace(t[0], n)), e
      }, e.prototype.reviseOpus = function(e) { return e = (e = e.replace(/a=rtpmap:102 opus\/48000\/2/g, "a=rtpmap:111 opus/48000/2")).replace(/m=audio 9 UDP\/TLS\/RTP\/SAVPF 102 0 8 97 13 118 101/g, "m=audio 9 UDP/TLS/RTP/SAVPF 111 0 8 97 13 118 101") }, e.prototype.addCandidate = function(e) { return e += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n" }, e.prototype.sendOffer = function(e) { this.config.callback(JSON.stringify({ sdp: e.sdp, messageType: "OFFER", tiebreaker: Math.floor(429496723 * Math.random() + 1) })), this.state = a.OFFER_SENT }, e
    }();
    t.default = d
  }, function(e, t, n) {
    var r = n(63),
      i = n(64),
      o = n(31),
      a = n(65);
    e.exports = function(e, t) { return r(e) || i(e, t) || o(e, t) || a() }
  }, function(e, t, n) {
    var r, i, o;
    i = this, o = function() {
      "use strict";
      var e, t = this;

      function n(e) { t.console && (t.console.error ? t.console.error(e) : t.console.log && t.console.log(e)) }

      function r(e, t, r, i) {
        var o = i || n,
          a = e.createShader(r);
        return e.shaderSource(a, t), e.compileShader(a), e.getShaderParameter(a, e.COMPILE_STATUS) ? a : (o("*** Error compiling shader '" + a + "':" + e.getShaderInfoLog(a)), e.deleteShader(a), null)
      }

      function i(e, t, r, i, o) {
        var a = o || n,
          s = e.createProgram();
        return t.forEach((function(t) { e.attachShader(s, t) })), r && r.forEach((function(t, n) { e.bindAttribLocation(s, i ? i[n] : n, t) })), e.linkProgram(s), e.getProgramParameter(s, e.LINK_STATUS) ? s : (a("Error in program linking:" + e.getProgramInfoLog(s)), e.deleteProgram(s), null)
      }(e = e || t) === e.top && (console.log("%c%s", "color:blue;font-weight:bold;", "for more about webgl-utils.js see:"), console.log("%c%s", "color:blue;font-weight:bold;", "http://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html"));
      var o, a = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
      return !document.documentMode && !!window.StyleMedia && (HTMLCanvasElement.prototype.getContext = (o = HTMLCanvasElement.prototype.getContext, function() {
        var e = arguments,
          t = e[0];
        return "webgl" === t && ((e = [].slice.call(arguments))[0] = "experimental-webgl"), o.apply(this, e)
      })), { createProgram: i, createProgramFromSources: function(e, t, n, o, s) { for (var c = [], d = 0; d < t.length; ++d) c.push(r(e, t[d], e[a[d]], s)); return i(e, c, n, o, s) } }
    }, void 0 === (r = function() { return o.call(i) }.apply(t, [])) || (e.exports = r)
  }, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function a(e) { try { c(r.next(e)) } catch (e) { o(e) } }

          function s(e) { try { c(r.throw(e)) } catch (e) { o(e) } }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      i = this && this.__generator || function(e, t) {
        var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
        return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

        function s(o) {
          return function(s) {
            return function(o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { a = 0; continue }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break }
                    if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break }
                    if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                o = t.call(e, a)
              } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 }
            }([o, s])
          }
        }
      },
      o = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = n(66),
      s = n(4),
      c = o(n(0));
    t.getSupportedCodec = function(e) {
      return r(void 0, void 0, void 0, (function() {
        var t, n, r, o, u;
        return i(this, (function(i) {
          switch (i.label) {
            case 0:
              return t = { video: [], audio: [] }, "undefined" != typeof window ? [3, 1] : ("NOT_BROWSER_ENV", c.default.error("getSupportedCodec: NOT_BROWSER_ENV"), [2, Promise.reject("NOT_BROWSER_ENV")]);
            case 1:
              try { n = a.createRTCPeerConnection({ iceServers: [] }) } catch (e) { return c.default.error("Failed to init RTCPeerConnection", e), [2, Promise.reject(e)] }
              return n ? [3, 2] : (c.default.warning("getSupportedCodec: no RTCPeerConnection constructor is detected"), [2, Promise.resolve(t)]);
            case 2:
              return e && e.stream ? [3, 7] : (r = { mandatory: { OfferToReceiveAudio: !0, OfferToReceiveVideo: !0 } }, o = void 0, (s.isSafari() || s.isFireFox() || s.isWeChatBrowser()) && n.addTransceiver ? (n.addTransceiver("audio"), n.addTransceiver("video"), [4, n.createOffer()]) : [3, 4]);
            case 3:
              return o = i.sent(), [3, 6];
            case 4:
              return [4, new Promise((function(e, t) {
                var i = setTimeout((function() { t("CREATEOFFER_TIMEOUT") }), 3e3);
                n.createOffer((function(t) { clearTimeout(i), e(t) }), (function(e) { clearTimeout(i), t(e) }), r)
              }))];
            case 5:
              o = i.sent(), i.label = 6;
            case 6:
              return n.close(), u = o.sdp, [2, d(u)];
            case 7:
              return e.stream.getTracks && n.addTrack ? e.stream.getTracks().forEach((function(t) { n.addTrack(t, e.stream) })) : n.addStream(e.stream), o = void 0, s.isSafari() || s.isFireFox() ? [4, n.createOffer()] : [3, 9];
            case 8:
              return o = i.sent(), [3, 11];
            case 9:
              return [4, new Promise((function(e, t) { n.createOffer(e, t) }))];
            case 10:
              o = i.sent(), i.label = 11;
            case 11:
              return n.close(), u = o.sdp, [2, d(u)]
          }
        }))
      }))
    };
    var d = function(e) { var t = { video: [], audio: [] }; return e.match(/ VP8/i) && t.video.push("VP8"), e.match(/ H264/i) && t.video.push("H264"), e.match(/ opus/i) && t.audio.push("OPUS"), Promise.resolve(t) }
  }, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function a(e) { try { c(r.next(e)) } catch (e) { o(e) } }

          function s(e) { try { c(r.throw(e)) } catch (e) { o(e) } }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      i = this && this.__generator || function(e, t) {
        var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
        return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

        function s(o) {
          return function(s) {
            return function(o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { a = 0; continue }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break }
                    if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break }
                    if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                o = t.call(e, a)
              } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 }
            }([o, s])
          }
        }
      },
      o = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = o(n(0)),
      s = n(71),
      c = n(23),
      d = n(1),
      u = n(26);
    t.addLiveStreamingCapability = function(e, t) {
      var n = this,
        o = function(t) {
          var n = t.type;
          if (!e.joinInfo) return new c.AgoraRTCError(c.AgoraRTCErrorCode.INVALID_OPERATION, "can not create live streaming client, please join channel first").throw();
          switch (n) {
            case u.LiveStreamingServiceMode.INJECT:
              return e._injectStreamingClient || (e._injectStreamingClient = new s.AgoraRTCLiveStreamingClient(e.joinInfo), e._injectStreamingClient.onInjectStatusChange = function(t, n, r) { e.gatewayClient.dispatchEvent({ type: "streamInjectedStatus", url: r, status: t }) }), e._injectStreamingClient;
            case u.LiveStreamingServiceMode.RAW:
              return e._liveRawStreamingClient || (e._liveRawStreamingClient = new s.AgoraRTCLiveStreamingClient(e.joinInfo), e._liveRawStreamingClient.onLiveStreamError = function(t, n) { a.default.error("LIVE_STREAMING_ERROR", n.toString()), e.gatewayClient.dispatchEvent({ type: "liveStreamingFailed", url: t, reason: n.code }) }, e._liveRawStreamingClient.onLiveStreamWarning = function(t, n) { a.default.warning("LIVE_STREAMING_WARNING", n.toString()), e.gatewayClient.dispatchEvent({ type: "liveStreamingWarning", url: t, reason: n.code }) }), e._liveRawStreamingClient;
            case u.LiveStreamingServiceMode.TRANSCODE:
              return e._liveTranscodeStreamingClient || (e._liveTranscodeStreamingClient = new s.AgoraRTCLiveStreamingClient(e.joinInfo), e._liveTranscodeStreamingClient.onLiveStreamError = function(t, n) { a.default.error("LIVE_STREAMING_ERROR", n.toString()), e.gatewayClient.dispatchEvent({ type: "liveStreamingFailed", url: t, reason: n.code }) }, e._liveTranscodeStreamingClient.onLiveStreamWarning = function(t, n) { a.default.warning("LIVE_STREAMING_WARNING", n.toString()), e.gatewayClient.dispatchEvent({ type: "liveStreamingWarning", url: t, reason: n.code }) }), e._liveTranscodeStreamingClient
          }
        };
      e.gatewayClient.addEventListener("join", (function(t) { e._injectStreamingClient && e._injectStreamingClient.resetAllTask() })), e.gatewayClient.addEventListener("stream-unpublished", (function(t) { t.options && 0 === t.options.streamType && (e._liveRawStreamingClient && e._liveRawStreamingClient.resetAllTask(), e._liveTranscodeStreamingClient && e._liveTranscodeStreamingClient.resetAllTask()) })), e.gatewayClient.addEventListener("stream-published", (function(e) {})), e.startLiveStreaming = function(n, r) { a.default.debug("startLiveTranscoding"); var i = d.report.reportApiInvoke(t.sessionId, { name: "Client.startLiveStreaming", options: arguments, tag: "tracer" }); if (e.gatewayClient && "audience" === e.gatewayClient.role) { var o = { code: 403, reason: "AUDIENCE_STREAMING_FORBIDDEN" }; throw i(o), o } var s = e._startLiveStreaming(n, r); return s.then((function(e) { i(null, e) })).catch((function(t) { a.default.error("LIVE_STREAMING_ERROR", t.toString()), e.gatewayClient.dispatchEvent({ type: "liveStreamingFailed", url: n, reason: t.code }), i(t) })), s }, e._startLiveStreaming = function(s, d) {
        return r(n, void 0, void 0, (function() {
          var n;
          return i(this, (function(r) {
            switch (r.label) {
              case 0:
                return d || ("vp8" === t.codec && a.default.warning("VP8 is not supported by raw_streaming. Subscriber side will suffer"), "rtc" === t.mode && a.default.warning("RTC mode is not supported by raw_streaming. Subscriber side will suffer")), (e._liveRawStreamingClient && e._liveRawStreamingClient.haveUrl(s) || e._liveTranscodeStreamingClient && e._liveTranscodeStreamingClient.haveUrl(s)) && new c.AgoraRTCError(c.AgoraRTCErrorCode.LIVE_STREAMING_TASK_CONFLICT).throw(), n = d ? u.LiveStreamingServiceMode.TRANSCODE : u.LiveStreamingServiceMode.RAW, [4, o({ type: n }).startLiveStreamingTask(s, n)];
              case 1:
                return r.sent(), e.gatewayClient.dispatchEvent({ type: "liveStreamingStarted", url: s }), [2]
            }
          }))
        }))
      }, e.setLiveTranscoding = function(n) {
        a.default.debug("setLiveTranscoding: " + JSON.stringify(n));
        var r = d.report.reportApiInvoke(t.sessionId, { name: "Client.setLiveTranscoding", options: arguments, tag: "tracer" }),
          i = o({ type: u.LiveStreamingServiceMode.TRANSCODE });
        return i.setTranscodingConfig(n).then((function() { e.gatewayClient.dispatchEvent({ type: "liveTranscodingUpdated" }), r(null) })).catch((function(t) { a.default.error("SET_LIVE_TRANSCODING_ERROR", t.toString()), e.gatewayClient.dispatchEvent({ type: "liveStreamingFailed", reason: t.code }), r(t) }))
      }, e.stopLiveStreaming = function(n) {
        var r = d.report.reportApiInvoke(t.sessionId, { name: "Client.stopLiveStreaming", options: arguments, tag: "tracer" }),
          i = e._stopLiveStreaming(n);
        return i.then((function(e) { r(null, e) })).catch((function(t) { a.default.error("STOP_LIVE_STREAMING_ERROR", t.toString()), e.gatewayClient.dispatchEvent({ type: "liveStreamingFailed", reason: t.code }), r(t) })), i
      }, e._stopLiveStreaming = function(t) {
        return r(this, void 0, void 0, (function() {
          var n;
          return i(this, (function(r) {
            switch (r.label) {
              case 0:
                return n = [e._liveRawStreamingClient, e._liveTranscodeStreamingClient], [4, Promise.all(n.map((function(e) { return e && e.haveUrl(t) && e.stopLiveStreamingTask(t) })))];
              case 1:
                return r.sent(), [2]
            }
          }))
        }))
      }, e.addInjectStreamUrl = function(n, r) { var i = d.report.reportApiInvoke(t.sessionId, { name: "Client.addInjectStreamUrl", options: [n, r], tag: "tracer" }); if ("audience" === e.gatewayClient.role) { var o = { code: 403, reason: "AUDIENCE_INJECTING_FORBIDDEN" }; throw i(o), o } var s = e._addInjectStreamUrl(n, r); return s.then((function(e) { i(null, e) })).catch((function(e) { a.default.error("ADD_INJECT_STREAM_ERROR", e.toString()), i(e) })), s }, e._addInjectStreamUrl = function(e, t) {
        return r(n, void 0, void 0, (function() {
          var n;
          return i(this, (function(r) {
            switch (r.label) {
              case 0:
                return (n = o({ type: u.LiveStreamingServiceMode.INJECT })).setInjectStreamConfig(t, 0), [4, n.startLiveStreamingTask(e, u.LiveStreamingServiceMode.INJECT)];
              case 1:
                return r.sent(), [2]
            }
          }))
        }))
      }, e.removeInjectStreamUrl = function(n) { return r(this, void 0, void 0, (function() { var r, o; return i(this, (function(i) { return r = d.report.reportApiInvoke(t.sessionId, { name: "Client.removeInjectStreamUrl", options: [n], tag: "tracer" }), (o = e._removeInjectStreamUrl(n)).then((function(e) { r(null, e) })).catch((function(e) { a.default.error("REMOVE_INJECT_STREAM_ERROR", e.toString()), r(e) })), [2, o] })) })) }, e._removeInjectStreamUrl = function(e) {
        return r(n, void 0, void 0, (function() {
          return i(this, (function(t) {
            switch (t.label) {
              case 0:
                return [4, o({ type: u.LiveStreamingServiceMode.INJECT }).stopLiveStreamingTask(e)];
              case 1:
                return t.sent(), [2]
            }
          }))
        }))
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = r(n(5)),
      o = r(n(0)),
      a = n(10);
    t.default = function(e, t) {
      void 0 === t && (t = { width: 160, height: 120, framerate: 15 });
      var n = t.width,
        r = t.height,
        s = t.framerate,
        c = e.stream;
      if (!c) throw i.default.INVALID_LOCAL_STREAM;
      if (!c.getVideoTracks()[0]) throw i.default.HIGH_STREAM_NOT_VIDEO_TRACE;
      var d = c.getVideoTracks()[0];
      o.default.debug("Start getLowStream");
      var u = document.createElement("video"),
        l = document.createElement("canvas");
      u.setAttribute("style", "display:none"), u.setAttribute("muted", ""), u.muted = !0, u.setAttribute("autoplay", ""), u.autoplay = !0, u.setAttribute("playsinline", ""), l.setAttribute("style", "display:none"), l.setAttribute("width", n.toString()), l.setAttribute("height", r.toString());
      var p = l.getContext("2d");
      if (!p) throw new Error("not get canvas context");
      u.srcObject = c, document.body.append(u), document.body.append(l), u.play(), o.default.debug("Start render lowStream");
      var f = a.audioTimerLoop((function() {
          return function() {
            if (u.paused && u.play(), u.videoHeight > 2 && u.videoWidth > 2) {
              var t = u.videoWidth,
                n = u.videoHeight / t,
                r = l.width * n;
              Math.abs(r - l.height) >= 2 && (o.default.debug("adjust low stream resolution", l.width + "x" + l.height + " -> " + l.width + "x" + r), l.height = r)
            }
            p.drawImage(u, 0, 0, l.width, l.height);
            var i = e.stream;
            if (i) {
              var a = i.getVideoTracks()[0];
              d !== a && (o.default.debug("adjust low stream track"), u.srcObject = i, d = a)
            }
          }()
        }), s),
        g = l.captureStream(s),
        m = g.getVideoTracks()[0];
      return m.requestFrame && m.requestFrame(), g.clean = function() { o.default.debug("Start clean lowStream"), f(), (u || u.parentNode || u.parentNode.removeChild) && u.parentNode.removeChild(u), (l || l.parentNode || l.parentNode.removeChild) && l.parentNode.removeChild(l), o.default.debug("Clean lowStream") }, g
    }
  }, function(e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
      var r = new Uint8Array(16);
      e.exports = function() { return n(r), r }
    } else {
      var i = new Array(16);
      e.exports = function() { for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255; return i }
    }
  }, function(e, t) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    e.exports = function(e, t) {
      var r = t || 0,
        i = n;
      return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
    }
  }, function(module, exports, __webpack_require__) {
    (function(global, module) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
       * protobuf.js v6.10.0 (c) 2016, daniel wirtz
       * compiled wed, 15 jul 2020 23:34:13 utc
       * licensed under the bsd-3-clause license
       * see: https://github.com/dcodeio/protobuf.js for details
       */
      ! function(undefined) {
        "use strict";
        ! function(e, t, n) {
          var r = function n(r) { var i = t[r]; return i || e[r][0].call(i = t[r] = { exports: {} }, n, i, i.exports), i.exports }(n[0]);
          r.util.global.protobuf = r, __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(59)], (__WEBPACK_AMD_DEFINE_RESULT__ = function(e) { return e && e.isLong && (r.util.Long = e, r.configure()), r }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) === undefined || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__), module && module.exports && (module.exports = r)
        }({
          1: [function(e, t, n) {
            t.exports = function(e, t) {
              var n = new Array(arguments.length - 1),
                r = 0,
                i = 2,
                o = !0;
              for (; i < arguments.length;) n[r++] = arguments[i++];
              return new Promise((function(i, a) {
                n[r] = function(e) {
                  if (o)
                    if (o = !1, e) a(e);
                    else {
                      for (var t = new Array(arguments.length - 1), n = 0; n < t.length;) t[n++] = arguments[n];
                      i.apply(null, t)
                    }
                };
                try { e.apply(t || null, n) } catch (e) { o && (o = !1, a(e)) }
              }))
            }
          }, {}],
          2: [function(e, t, n) {
            var r = n;
            r.length = function(e) { var t = e.length; if (!t) return 0; for (var n = 0; --t % 4 > 1 && "=" === e.charAt(t);) ++n; return Math.ceil(3 * e.length) / 4 - n };
            for (var i = new Array(64), o = new Array(123), a = 0; a < 64;) o[i[a] = a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : a - 59 | 43] = a++;
            r.encode = function(e, t, n) {
              for (var r, o = null, a = [], s = 0, c = 0; t < n;) {
                var d = e[t++];
                switch (c) {
                  case 0:
                    a[s++] = i[d >> 2], r = (3 & d) << 4, c = 1;
                    break;
                  case 1:
                    a[s++] = i[r | d >> 4], r = (15 & d) << 2, c = 2;
                    break;
                  case 2:
                    a[s++] = i[r | d >> 6], a[s++] = i[63 & d], c = 0
                }
                s > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, a)), s = 0)
              }
              return c && (a[s++] = i[r], a[s++] = 61, 1 === c && (a[s++] = 61)), o ? (s && o.push(String.fromCharCode.apply(String, a.slice(0, s))), o.join("")) : String.fromCharCode.apply(String, a.slice(0, s))
            };
            r.decode = function(e, t, n) {
              for (var r, i = n, a = 0, s = 0; s < e.length;) {
                var c = e.charCodeAt(s++);
                if (61 === c && a > 1) break;
                if ((c = o[c]) === undefined) throw Error("invalid encoding");
                switch (a) {
                  case 0:
                    r = c, a = 1;
                    break;
                  case 1:
                    t[n++] = r << 2 | (48 & c) >> 4, r = c, a = 2;
                    break;
                  case 2:
                    t[n++] = (15 & r) << 4 | (60 & c) >> 2, r = c, a = 3;
                    break;
                  case 3:
                    t[n++] = (3 & r) << 6 | c, a = 0
                }
              }
              if (1 === a) throw Error("invalid encoding");
              return n - i
            }, r.test = function(e) { return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e) }
          }, {}],
          3: [function(e, t, n) {
            function r(e, t) {
              "string" == typeof e && (t = e, e = undefined);
              var n = [];

              function i(e) {
                if ("string" != typeof e) { var t = o(); if (r.verbose && console.log("codegen: " + t), t = "return " + t, e) { for (var a = Object.keys(e), s = new Array(a.length + 1), c = new Array(a.length), d = 0; d < a.length;) s[d] = a[d], c[d] = e[a[d++]]; return s[d] = t, Function.apply(null, s).apply(null, c) } return Function(t)() }
                for (var u = new Array(arguments.length - 1), l = 0; l < u.length;) u[l] = arguments[++l];
                if (l = 0, e = e.replace(/%([%dfijs])/g, (function(e, t) {
                    var n = u[l++];
                    switch (t) {
                      case "d":
                      case "f":
                        return String(Number(n));
                      case "i":
                        return String(Math.floor(n));
                      case "j":
                        return JSON.stringify(n);
                      case "s":
                        return String(n)
                    }
                    return "%"
                  })), l !== u.length) throw Error("parameter count mismatch");
                return n.push(e), i
              }

              function o(r) { return "function " + (r || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + n.join("\n  ") + "\n}" }
              return i.toString = o, i
            }
            t.exports = r, r.verbose = !1
          }, {}],
          4: [function(e, t, n) {
            function r() { this._listeners = {} }
            t.exports = r, r.prototype.on = function(e, t, n) { return (this._listeners[e] || (this._listeners[e] = [])).push({ fn: t, ctx: n || this }), this }, r.prototype.off = function(e, t) {
              if (e === undefined) this._listeners = {};
              else if (t === undefined) this._listeners[e] = [];
              else
                for (var n = this._listeners[e], r = 0; r < n.length;) n[r].fn === t ? n.splice(r, 1) : ++r;
              return this
            }, r.prototype.emit = function(e) { var t = this._listeners[e]; if (t) { for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]); for (r = 0; r < t.length;) t[r].fn.apply(t[r++].ctx, n) } return this }
          }, {}],
          5: [function(e, t, n) {
            t.exports = o;
            var r = e(1),
              i = e(7)("fs");

            function o(e, t, n) { return "function" == typeof t ? (n = t, t = {}) : t || (t = {}), n ? !t.xhr && i && i.readFile ? i.readFile(e, (function(r, i) { return r && "undefined" != typeof XMLHttpRequest ? o.xhr(e, t, n) : r ? n(r) : n(null, t.binary ? i : i.toString("utf8")) })) : o.xhr(e, t, n) : r(o, this, e, t) }
            o.xhr = function(e, t, n) {
              var r = new XMLHttpRequest;
              r.onreadystatechange = function() { if (4 !== r.readyState) return undefined; if (0 !== r.status && 200 !== r.status) return n(Error("status " + r.status)); if (t.binary) { var e = r.response; if (!e) { e = []; for (var i = 0; i < r.responseText.length; ++i) e.push(255 & r.responseText.charCodeAt(i)) } return n(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e) } return n(null, r.responseText) }, t.binary && ("overrideMimeType" in r && r.overrideMimeType("text/plain; charset=x-user-defined"), r.responseType = "arraybuffer"), r.open("GET", e), r.send()
            }
          }, { 1: 1, 7: 7 }],
          6: [function(e, t, n) {
            function r(e) {
              return "undefined" != typeof Float32Array ? function() {
                var t = new Float32Array([-0]),
                  n = new Uint8Array(t.buffer),
                  r = 128 === n[3];

                function i(e, r, i) { t[0] = e, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3] }

                function o(e, r, i) { t[0] = e, r[i] = n[3], r[i + 1] = n[2], r[i + 2] = n[1], r[i + 3] = n[0] }

                function a(e, r) { return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], t[0] }

                function s(e, r) { return n[3] = e[r], n[2] = e[r + 1], n[1] = e[r + 2], n[0] = e[r + 3], t[0] }
                e.writeFloatLE = r ? i : o, e.writeFloatBE = r ? o : i, e.readFloatLE = r ? a : s, e.readFloatBE = r ? s : a
              }() : function() {
                function t(e, t, n, r) {
                  var i = t < 0 ? 1 : 0;
                  if (i && (t = -t), 0 === t) e(1 / t > 0 ? 0 : 2147483648, n, r);
                  else if (isNaN(t)) e(2143289344, n, r);
                  else if (t > 34028234663852886e22) e((i << 31 | 2139095040) >>> 0, n, r);
                  else if (t < 11754943508222875e-54) e((i << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, r);
                  else {
                    var o = Math.floor(Math.log(t) / Math.LN2);
                    e((i << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, n, r)
                  }
                }

                function n(e, t, n) {
                  var r = e(t, n),
                    i = 2 * (r >> 31) + 1,
                    o = r >>> 23 & 255,
                    a = 8388607 & r;
                  return 255 === o ? a ? NaN : i * (1 / 0) : 0 === o ? 1401298464324817e-60 * i * a : i * Math.pow(2, o - 150) * (a + 8388608)
                }
                e.writeFloatLE = t.bind(null, i), e.writeFloatBE = t.bind(null, o), e.readFloatLE = n.bind(null, a), e.readFloatBE = n.bind(null, s)
              }(), "undefined" != typeof Float64Array ? function() {
                var t = new Float64Array([-0]),
                  n = new Uint8Array(t.buffer),
                  r = 128 === n[7];

                function i(e, r, i) { t[0] = e, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3], r[i + 4] = n[4], r[i + 5] = n[5], r[i + 6] = n[6], r[i + 7] = n[7] }

                function o(e, r, i) { t[0] = e, r[i] = n[7], r[i + 1] = n[6], r[i + 2] = n[5], r[i + 3] = n[4], r[i + 4] = n[3], r[i + 5] = n[2], r[i + 6] = n[1], r[i + 7] = n[0] }

                function a(e, r) { return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], n[4] = e[r + 4], n[5] = e[r + 5], n[6] = e[r + 6], n[7] = e[r + 7], t[0] }

                function s(e, r) { return n[7] = e[r], n[6] = e[r + 1], n[5] = e[r + 2], n[4] = e[r + 3], n[3] = e[r + 4], n[2] = e[r + 5], n[1] = e[r + 6], n[0] = e[r + 7], t[0] }
                e.writeDoubleLE = r ? i : o, e.writeDoubleBE = r ? o : i, e.readDoubleLE = r ? a : s, e.readDoubleBE = r ? s : a
              }() : function() {
                function t(e, t, n, r, i, o) {
                  var a = r < 0 ? 1 : 0;
                  if (a && (r = -r), 0 === r) e(0, i, o + t), e(1 / r > 0 ? 0 : 2147483648, i, o + n);
                  else if (isNaN(r)) e(0, i, o + t), e(2146959360, i, o + n);
                  else if (r > 17976931348623157e292) e(0, i, o + t), e((a << 31 | 2146435072) >>> 0, i, o + n);
                  else {
                    var s;
                    if (r < 22250738585072014e-324) e((s = r / 5e-324) >>> 0, i, o + t), e((a << 31 | s / 4294967296) >>> 0, i, o + n);
                    else {
                      var c = Math.floor(Math.log(r) / Math.LN2);
                      1024 === c && (c = 1023), e(4503599627370496 * (s = r * Math.pow(2, -c)) >>> 0, i, o + t), e((a << 31 | c + 1023 << 20 | 1048576 * s & 1048575) >>> 0, i, o + n)
                    }
                  }
                }

                function n(e, t, n, r, i) {
                  var o = e(r, i + t),
                    a = e(r, i + n),
                    s = 2 * (a >> 31) + 1,
                    c = a >>> 20 & 2047,
                    d = 4294967296 * (1048575 & a) + o;
                  return 2047 === c ? d ? NaN : s * (1 / 0) : 0 === c ? 5e-324 * s * d : s * Math.pow(2, c - 1075) * (d + 4503599627370496)
                }
                e.writeDoubleLE = t.bind(null, i, 0, 4), e.writeDoubleBE = t.bind(null, o, 4, 0), e.readDoubleLE = n.bind(null, a, 0, 4), e.readDoubleBE = n.bind(null, s, 4, 0)
              }(), e
            }

            function i(e, t, n) { t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24 }

            function o(e, t, n) { t[n] = e >>> 24, t[n + 1] = e >>> 16 & 255, t[n + 2] = e >>> 8 & 255, t[n + 3] = 255 & e }

            function a(e, t) { return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0 }

            function s(e, t) { return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0 }
            t.exports = r(r)
          }, {}],
          7: [function(require, module, exports) {
            function inquire(moduleName) { try { var mod = eval("quire".replace(/^/, "re"))(moduleName); if (mod && (mod.length || Object.keys(mod).length)) return mod } catch (e) {} return null }
            module.exports = inquire
          }, {}],
          8: [function(e, t, n) {
            var r = n,
              i = r.isAbsolute = function(e) { return /^(?:\/|\w+:)/.test(e) },
              o = r.normalize = function(e) {
                var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
                  n = i(e),
                  r = "";
                n && (r = t.shift() + "/");
                for (var o = 0; o < t.length;) ".." === t[o] ? o > 0 && ".." !== t[o - 1] ? t.splice(--o, 2) : n ? t.splice(o, 1) : ++o : "." === t[o] ? t.splice(o, 1) : ++o;
                return r + t.join("/")
              };
            r.resolve = function(e, t, n) { return n || (t = o(t)), i(t) ? t : (n || (e = o(e)), (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? o(e + "/" + t) : t) }
          }, {}],
          9: [function(e, t, n) {
            t.exports = function(e, t, n) {
              var r = n || 8192,
                i = r >>> 1,
                o = null,
                a = r;
              return function(n) {
                if (n < 1 || n > i) return e(n);
                a + n > r && (o = e(r), a = 0);
                var s = t.call(o, a, a += n);
                return 7 & a && (a = 1 + (7 | a)), s
              }
            }
          }, {}],
          10: [function(e, t, n) {
            var r = n;
            r.length = function(e) { for (var t = 0, n = 0, r = 0; r < e.length; ++r)(n = e.charCodeAt(r)) < 128 ? t += 1 : n < 2048 ? t += 2 : 55296 == (64512 & n) && 56320 == (64512 & e.charCodeAt(r + 1)) ? (++r, t += 4) : t += 3; return t }, r.read = function(e, t, n) { if (n - t < 1) return ""; for (var r, i = null, o = [], a = 0; t < n;)(r = e[t++]) < 128 ? o[a++] = r : r > 191 && r < 224 ? o[a++] = (31 & r) << 6 | 63 & e[t++] : r > 239 && r < 365 ? (r = ((7 & r) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, o[a++] = 55296 + (r >> 10), o[a++] = 56320 + (1023 & r)) : o[a++] = (15 & r) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], a > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), a = 0); return i ? (a && i.push(String.fromCharCode.apply(String, o.slice(0, a))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, a)) }, r.write = function(e, t, n) { for (var r, i, o = n, a = 0; a < e.length; ++a)(r = e.charCodeAt(a)) < 128 ? t[n++] = r : r < 2048 ? (t[n++] = r >> 6 | 192, t[n++] = 63 & r | 128) : 55296 == (64512 & r) && 56320 == (64512 & (i = e.charCodeAt(a + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & i), ++a, t[n++] = r >> 18 | 240, t[n++] = r >> 12 & 63 | 128, t[n++] = r >> 6 & 63 | 128, t[n++] = 63 & r | 128) : (t[n++] = r >> 12 | 224, t[n++] = r >> 6 & 63 | 128, t[n++] = 63 & r | 128); return n - o }
          }, {}],
          11: [function(e, t, n) {
            var r = n,
              i = e(14),
              o = e(33);

            function a(e, t, n, r) {
              if (t.resolvedType)
                if (t.resolvedType instanceof i) {
                  e("switch(d%s){", r);
                  for (var o = t.resolvedType.values, a = Object.keys(o), s = 0; s < a.length; ++s) t.repeated && o[a[s]] === t.typeDefault && e("default:"), e("case%j:", a[s])("case %i:", o[a[s]])("m%s=%j", r, o[a[s]])("break");
                  e("}")
                } else e('if(typeof d%s!=="object")', r)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", r, n, r);
              else {
                var c = !1;
                switch (t.type) {
                  case "double":
                  case "float":
                    e("m%s=Number(d%s)", r, r);
                    break;
                  case "uint32":
                  case "fixed32":
                    e("m%s=d%s>>>0", r, r);
                    break;
                  case "int32":
                  case "sint32":
                  case "sfixed32":
                    e("m%s=d%s|0", r, r);
                    break;
                  case "uint64":
                    c = !0;
                  case "int64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", r, r, c)('else if(typeof d%s==="string")', r)("m%s=parseInt(d%s,10)", r, r)('else if(typeof d%s==="number")', r)("m%s=d%s", r, r)('else if(typeof d%s==="object")', r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", r, r, r, c ? "true" : "");
                    break;
                  case "bytes":
                    e('if(typeof d%s==="string")', r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", r, r, r)("else if(d%s.length)", r)("m%s=d%s", r, r);
                    break;
                  case "string":
                    e("m%s=String(d%s)", r, r);
                    break;
                  case "bool":
                    e("m%s=Boolean(d%s)", r, r)
                }
              }
              return e
            }

            function s(e, t, n, r) {
              if (t.resolvedType) t.resolvedType instanceof i ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", r, n, r, r) : e("d%s=types[%i].toObject(m%s,o)", r, n, r);
              else {
                var o = !1;
                switch (t.type) {
                  case "double":
                  case "float":
                    e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", r, r, r, r);
                    break;
                  case "uint64":
                    o = !0;
                  case "int64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e('if(typeof m%s==="number")', r)("d%s=o.longs===String?String(m%s):m%s", r, r, r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", r, r, r, r, o ? "true" : "", r);
                    break;
                  case "bytes":
                    e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", r, r, r, r, r);
                    break;
                  default:
                    e("d%s=m%s", r, r)
                }
              }
              return e
            }
            r.fromObject = function(e) {
              var t = e.fieldsArray,
                n = o.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
              if (!t.length) return n("return new this.ctor");
              n("var m=new this.ctor");
              for (var r = 0; r < t.length; ++r) {
                var s = t[r].resolve(),
                  c = o.safeProp(s.name);
                s.map ? (n("if(d%s){", c)('if(typeof d%s!=="object")', c)("throw TypeError(%j)", s.fullName + ": object expected")("m%s={}", c)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", c), a(n, s, r, c + "[ks[i]]")("}")("}")) : s.repeated ? (n("if(d%s){", c)("if(!Array.isArray(d%s))", c)("throw TypeError(%j)", s.fullName + ": array expected")("m%s=[]", c)("for(var i=0;i<d%s.length;++i){", c), a(n, s, r, c + "[i]")("}")("}")) : (s.resolvedType instanceof i || n("if(d%s!=null){", c), a(n, s, r, c), s.resolvedType instanceof i || n("}"))
              }
              return n("return m")
            }, r.toObject = function(e) {
              var t = e.fieldsArray.slice().sort(o.compareFieldsById);
              if (!t.length) return o.codegen()("return {}");
              for (var n = o.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), r = [], a = [], c = [], d = 0; d < t.length; ++d) t[d].partOf || (t[d].resolve().repeated ? r : t[d].map ? a : c).push(t[d]);
              if (r.length) {
                for (n("if(o.arrays||o.defaults){"), d = 0; d < r.length; ++d) n("d%s=[]", o.safeProp(r[d].name));
                n("}")
              }
              if (a.length) {
                for (n("if(o.objects||o.defaults){"), d = 0; d < a.length; ++d) n("d%s={}", o.safeProp(a[d].name));
                n("}")
              }
              if (c.length) {
                for (n("if(o.defaults){"), d = 0; d < c.length; ++d) {
                  var u = c[d],
                    l = o.safeProp(u.name);
                  if (u.resolvedType instanceof i) n("d%s=o.enums===String?%j:%j", l, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
                  else if (u.long) n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", l)("}else")("d%s=o.longs===String?%j:%i", l, u.typeDefault.toString(), u.typeDefault.toNumber());
                  else if (u.bytes) {
                    var p = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                    n("if(o.bytes===String)d%s=%j", l, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", l, p)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", l, l)("}")
                  } else n("d%s=%j", l, u.typeDefault)
                }
                n("}")
              }
              var f = !1;
              for (d = 0; d < t.length; ++d) {
                u = t[d];
                var g = e._fieldsArray.indexOf(u);
                l = o.safeProp(u.name);
                u.map ? (f || (f = !0, n("var ks2")), n("if(m%s&&(ks2=Object.keys(m%s)).length){", l, l)("d%s={}", l)("for(var j=0;j<ks2.length;++j){"), s(n, u, g, l + "[ks2[j]]")("}")) : u.repeated ? (n("if(m%s&&m%s.length){", l, l)("d%s=[]", l)("for(var j=0;j<m%s.length;++j){", l), s(n, u, g, l + "[j]")("}")) : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", l, u.name), s(n, u, g, l), u.partOf && n("if(o.oneofs)")("d%s=%j", o.safeProp(u.partOf.name), u.name)), n("}")
              }
              return n("return d")
            }
          }, { 14: 14, 33: 33 }],
          12: [function(e, t, n) {
            t.exports = function(e) {
              var t = o.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter((function(e) { return e.map })).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
              e.group && t("if((t&7)===4)")("break");
              t("switch(t>>>3){");
              for (var n = 0; n < e.fieldsArray.length; ++n) {
                var s = e._fieldsArray[n].resolve(),
                  c = s.resolvedType instanceof r ? "int32" : s.type,
                  d = "m" + o.safeProp(s.name);
                t("case %i:", s.id), s.map ? (t("if(%s===util.emptyObject)", d)("%s={}", d)("var c2 = r.uint32()+r.pos"), i.defaults[s.keyType] !== undefined ? t("k=%j", i.defaults[s.keyType]) : t("k=null"), i.defaults[c] !== undefined ? t("value=%j", i.defaults[c]) : t("value=null"), t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", s.keyType)("case 2:"), i.basic[c] === undefined ? t("value=types[%i].decode(r,r.uint32())", n) : t("value=r.%s()", c), t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), i.long[s.keyType] !== undefined ? t('%s[typeof k==="object"?util.longToHash(k):k]=value', d) : t("%s[k]=value", d)) : s.repeated ? (t("if(!(%s&&%s.length))", d, d)("%s=[]", d), i.packed[c] !== undefined && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", d, c)("}else"), i.basic[c] === undefined ? t(s.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", d, n) : t("%s.push(r.%s())", d, c)) : i.basic[c] === undefined ? t(s.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", d, n) : t("%s=r.%s()", d, c), t("break")
              }
              for (t("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0; n < e._fieldsArray.length; ++n) {
                var u = e._fieldsArray[n];
                u.required && t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", a(u))
              }
              return t("return m")
            };
            var r = e(14),
              i = e(32),
              o = e(33);

            function a(e) { return "missing required '" + e.name + "'" }
          }, { 14: 14, 32: 32, 33: 33 }],
          13: [function(e, t, n) {
            t.exports = function(e) {
              for (var t, n = o.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()"), s = e.fieldsArray.slice().sort(o.compareFieldsById), c = 0; c < s.length; ++c) {
                var d = s[c].resolve(),
                  u = e._fieldsArray.indexOf(d),
                  l = d.resolvedType instanceof r ? "int32" : d.type,
                  p = i.basic[l];
                t = "m" + o.safeProp(d.name), d.map ? (n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, d.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (d.id << 3 | 2) >>> 0, 8 | i.mapKey[d.keyType], d.keyType), p === undefined ? n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t) : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, l, t), n("}")("}")) : d.repeated ? (n("if(%s!=null&&%s.length){", t, t), d.packed && i.packed[l] !== undefined ? n("w.uint32(%i).fork()", (d.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", l, t)("w.ldelim()") : (n("for(var i=0;i<%s.length;++i)", t), p === undefined ? a(n, d, u, t + "[i]") : n("w.uint32(%i).%s(%s[i])", (d.id << 3 | p) >>> 0, l, t)), n("}")) : (d.optional && n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, d.name), p === undefined ? a(n, d, u, t) : n("w.uint32(%i).%s(%s)", (d.id << 3 | p) >>> 0, l, t))
              }
              return n("return w")
            };
            var r = e(14),
              i = e(32),
              o = e(33);

            function a(e, t, n, r) { return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, r, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, r, (t.id << 3 | 2) >>> 0) }
          }, { 14: 14, 32: 32, 33: 33 }],
          14: [function(e, t, n) {
            t.exports = a;
            var r = e(22);
            ((a.prototype = Object.create(r.prototype)).constructor = a).className = "Enum";
            var i = e(21),
              o = e(33);

            function a(e, t, n, i, o) {
              if (r.call(this, e, n), t && "object" != typeof t) throw TypeError("values must be an object");
              if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = i, this.comments = o || {}, this.reserved = undefined, t)
                for (var a = Object.keys(t), s = 0; s < a.length; ++s) "number" == typeof t[a[s]] && (this.valuesById[this.values[a[s]] = t[a[s]]] = a[s])
            }
            a.fromJSON = function(e, t) { var n = new a(e, t.values, t.options, t.comment, t.comments); return n.reserved = t.reserved, n }, a.prototype.toJSON = function(e) { var t = !!e && Boolean(e.keepComments); return o.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined]) }, a.prototype.add = function(e, t, n) {
              if (!o.isString(e)) throw TypeError("name must be a string");
              if (!o.isInteger(t)) throw TypeError("id must be an integer");
              if (this.values[e] !== undefined) throw Error("duplicate name '" + e + "' in " + this);
              if (this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);
              if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
              if (this.valuesById[t] !== undefined) {
                if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);
                this.values[e] = t
              } else this.valuesById[this.values[e] = t] = e;
              return this.comments[e] = n || null, this
            }, a.prototype.remove = function(e) { if (!o.isString(e)) throw TypeError("name must be a string"); var t = this.values[e]; if (null == t) throw Error("name '" + e + "' does not exist in " + this); return delete this.valuesById[t], delete this.values[e], delete this.comments[e], this }, a.prototype.isReservedId = function(e) { return i.isReservedId(this.reserved, e) }, a.prototype.isReservedName = function(e) { return i.isReservedName(this.reserved, e) }
          }, { 21: 21, 22: 22, 33: 33 }],
          15: [function(e, t, n) {
            t.exports = d;
            var r = e(22);
            ((d.prototype = Object.create(r.prototype)).constructor = d).className = "Field";
            var i, o = e(14),
              a = e(32),
              s = e(33),
              c = /^required|optional|repeated$/;

            function d(e, t, n, i, o, d, u) {
              if (s.isObject(i) ? (u = o, d = i, i = o = undefined) : s.isObject(o) && (u = d, d = o, o = undefined), r.call(this, e, d), !s.isInteger(t) || t < 0) throw TypeError("id must be a non-negative integer");
              if (!s.isString(n)) throw TypeError("type must be a string");
              if (i !== undefined && !c.test(i = i.toString().toLowerCase())) throw TypeError("rule must be a string rule");
              if (o !== undefined && !s.isString(o)) throw TypeError("extend must be a string");
              this.rule = i && "optional" !== i ? i : undefined, this.type = n, this.id = t, this.extend = o || undefined, this.required = "required" === i, this.optional = !this.required, this.repeated = "repeated" === i, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!s.Long && a.long[n] !== undefined, this.bytes = "bytes" === n, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = u
            }
            d.fromJSON = function(e, t) { return new d(e, t.id, t.type, t.rule, t.extend, t.options, t.comment) }, Object.defineProperty(d.prototype, "packed", { get: function() { return null === this._packed && (this._packed = !1 !== this.getOption("packed")), this._packed } }), d.prototype.setOption = function(e, t, n) { return "packed" === e && (this._packed = null), r.prototype.setOption.call(this, e, t, n) }, d.prototype.toJSON = function(e) { var t = !!e && Boolean(e.keepComments); return s.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]) }, d.prototype.resolve = function() {
              if (this.resolved) return this;
              if ((this.typeDefault = a.defaults[this.type]) === undefined && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof i ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (this.options.packed === undefined || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed, Object.keys(this.options).length || (this.options = undefined)), this.long) this.typeDefault = s.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
              else if (this.bytes && "string" == typeof this.typeDefault) {
                var e;
                s.base64.test(this.typeDefault) ? s.base64.decode(this.typeDefault, e = s.newBuffer(s.base64.length(this.typeDefault)), 0) : s.utf8.write(this.typeDefault, e = s.newBuffer(s.utf8.length(this.typeDefault)), 0), this.typeDefault = e
              }
              return this.map ? this.defaultValue = s.emptyObject : this.repeated ? this.defaultValue = s.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof i && (this.parent.ctor.prototype[this.name] = this.defaultValue), r.prototype.resolve.call(this)
            }, d.d = function(e, t, n, r) {
              return "function" == typeof t ? t = s.decorateType(t).name : t && "object" == typeof t && (t = s.decorateEnum(t).name),
                function(i, o) { s.decorateType(i.constructor).add(new d(o, e, t, n, { default: r })) }
            }, d._configure = function(e) { i = e }
          }, { 14: 14, 22: 22, 32: 32, 33: 33 }],
          16: [function(e, t, n) {
            var r = t.exports = e(17);
            r.build = "light", r.load = function(e, t, n) { return "function" == typeof t ? (n = t, t = new r.Root) : t || (t = new r.Root), t.load(e, n) }, r.loadSync = function(e, t) { return t || (t = new r.Root), t.loadSync(e) }, r.encoder = e(13), r.decoder = e(12), r.verifier = e(36), r.converter = e(11), r.ReflectionObject = e(22), r.Namespace = e(21), r.Root = e(26), r.Enum = e(14), r.Type = e(31), r.Field = e(15), r.OneOf = e(23), r.MapField = e(18), r.Service = e(30), r.Method = e(20), r.Message = e(19), r.wrappers = e(37), r.types = e(32), r.util = e(33), r.ReflectionObject._configure(r.Root), r.Namespace._configure(r.Type, r.Service, r.Enum), r.Root._configure(r.Type), r.Field._configure(r.Type)
          }, { 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 26: 26, 30: 30, 31: 31, 32: 32, 33: 33, 36: 36, 37: 37 }],
          17: [function(e, t, n) {
            var r = n;

            function i() { r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader) }
            r.build = "minimal", r.Writer = e(38), r.BufferWriter = e(39), r.Reader = e(24), r.BufferReader = e(25), r.util = e(35), r.rpc = e(28), r.roots = e(27), r.configure = i, i()
          }, { 24: 24, 25: 25, 27: 27, 28: 28, 35: 35, 38: 38, 39: 39 }],
          18: [function(e, t, n) {
            t.exports = a;
            var r = e(15);
            ((a.prototype = Object.create(r.prototype)).constructor = a).className = "MapField";
            var i = e(32),
              o = e(33);

            function a(e, t, n, i, a, s) {
              if (r.call(this, e, t, i, undefined, undefined, a, s), !o.isString(n)) throw TypeError("keyType must be a string");
              this.keyType = n, this.resolvedKeyType = null, this.map = !0
            }
            a.fromJSON = function(e, t) { return new a(e, t.id, t.keyType, t.type, t.options, t.comment) }, a.prototype.toJSON = function(e) { var t = !!e && Boolean(e.keepComments); return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]) }, a.prototype.resolve = function() { if (this.resolved) return this; if (i.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType); return r.prototype.resolve.call(this) }, a.d = function(e, t, n) {
              return "function" == typeof n ? n = o.decorateType(n).name : n && "object" == typeof n && (n = o.decorateEnum(n).name),
                function(r, i) { o.decorateType(r.constructor).add(new a(i, e, t, n)) }
            }
          }, { 15: 15, 32: 32, 33: 33 }],
          19: [function(e, t, n) {
            t.exports = i;
            var r = e(35);

            function i(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n) this[t[n]] = e[t[n]]
            }
            i.create = function(e) { return this.$type.create(e) }, i.encode = function(e, t) { return this.$type.encode(e, t) }, i.encodeDelimited = function(e, t) { return this.$type.encodeDelimited(e, t) }, i.decode = function(e) { return this.$type.decode(e) }, i.decodeDelimited = function(e) { return this.$type.decodeDelimited(e) }, i.verify = function(e) { return this.$type.verify(e) }, i.fromObject = function(e) { return this.$type.fromObject(e) }, i.toObject = function(e, t) { return this.$type.toObject(e, t) }, i.prototype.toJSON = function() { return this.$type.toObject(this, r.toJSONOptions) }
          }, { 35: 35 }],
          20: [function(e, t, n) {
            t.exports = o;
            var r = e(22);
            ((o.prototype = Object.create(r.prototype)).constructor = o).className = "Method";
            var i = e(33);

            function o(e, t, n, o, a, s, c, d) {
              if (i.isObject(a) ? (c = a, a = s = undefined) : i.isObject(s) && (c = s, s = undefined), t !== undefined && !i.isString(t)) throw TypeError("type must be a string");
              if (!i.isString(n)) throw TypeError("requestType must be a string");
              if (!i.isString(o)) throw TypeError("responseType must be a string");
              r.call(this, e, c), this.type = t || "rpc", this.requestType = n, this.requestStream = !!a || undefined, this.responseType = o, this.responseStream = !!s || undefined, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = d
            }
            o.fromJSON = function(e, t) { return new o(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment) }, o.prototype.toJSON = function(e) { var t = !!e && Boolean(e.keepComments); return i.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined]) }, o.prototype.resolve = function() { return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), r.prototype.resolve.call(this)) }
          }, { 22: 22, 33: 33 }],
          21: [function(e, t, n) {
            t.exports = u;
            var r = e(22);
            ((u.prototype = Object.create(r.prototype)).constructor = u).className = "Namespace";
            var i, o, a, s = e(15),
              c = e(33);

            function d(e, t) { if (!e || !e.length) return undefined; for (var n = {}, r = 0; r < e.length; ++r) n[e[r].name] = e[r].toJSON(t); return n }

            function u(e, t) { r.call(this, e, t), this.nested = undefined, this._nestedArray = null }

            function l(e) { return e._nestedArray = null, e }
            u.fromJSON = function(e, t) { return new u(e, t.options).addJSON(t.nested) }, u.arrayToJSON = d, u.isReservedId = function(e, t) {
              if (e)
                for (var n = 0; n < e.length; ++n)
                  if ("string" != typeof e[n] && e[n][0] <= t && e[n][1] > t) return !0;
              return !1
            }, u.isReservedName = function(e, t) {
              if (e)
                for (var n = 0; n < e.length; ++n)
                  if (e[n] === t) return !0;
              return !1
            }, Object.defineProperty(u.prototype, "nestedArray", { get: function() { return this._nestedArray || (this._nestedArray = c.toArray(this.nested)) } }), u.prototype.toJSON = function(e) { return c.toObject(["options", this.options, "nested", d(this.nestedArray, e)]) }, u.prototype.addJSON = function(e) {
              if (e)
                for (var t, n = Object.keys(e), r = 0; r < n.length; ++r) t = e[n[r]], this.add((t.fields !== undefined ? i.fromJSON : t.values !== undefined ? a.fromJSON : t.methods !== undefined ? o.fromJSON : t.id !== undefined ? s.fromJSON : u.fromJSON)(n[r], t));
              return this
            }, u.prototype.get = function(e) { return this.nested && this.nested[e] || null }, u.prototype.getEnum = function(e) { if (this.nested && this.nested[e] instanceof a) return this.nested[e].values; throw Error("no such enum: " + e) }, u.prototype.add = function(e) {
              if (!(e instanceof s && e.extend !== undefined || e instanceof i || e instanceof a || e instanceof o || e instanceof u)) throw TypeError("object must be a valid nested object");
              if (this.nested) {
                var t = this.get(e.name);
                if (t) {
                  if (!(t instanceof u && e instanceof u) || t instanceof i || t instanceof o) throw Error("duplicate name '" + e.name + "' in " + this);
                  for (var n = t.nestedArray, r = 0; r < n.length; ++r) e.add(n[r]);
                  this.remove(t), this.nested || (this.nested = {}), e.setOptions(t.options, !0)
                }
              } else this.nested = {};
              return this.nested[e.name] = e, e.onAdd(this), l(this)
            }, u.prototype.remove = function(e) { if (!(e instanceof r)) throw TypeError("object must be a ReflectionObject"); if (e.parent !== this) throw Error(e + " is not a member of " + this); return delete this.nested[e.name], Object.keys(this.nested).length || (this.nested = undefined), e.onRemove(this), l(this) }, u.prototype.define = function(e, t) {
              if (c.isString(e)) e = e.split(".");
              else if (!Array.isArray(e)) throw TypeError("illegal path");
              if (e && e.length && "" === e[0]) throw Error("path must be relative");
              for (var n = this; e.length > 0;) { var r = e.shift(); if (n.nested && n.nested[r]) { if (!((n = n.nested[r]) instanceof u)) throw Error("path conflicts with non-namespace objects") } else n.add(n = new u(r)) }
              return t && n.addJSON(t), n
            }, u.prototype.resolveAll = function() { for (var e = this.nestedArray, t = 0; t < e.length;) e[t] instanceof u ? e[t++].resolveAll() : e[t++].resolve(); return this.resolve() }, u.prototype.lookup = function(e, t, n) {
              if ("boolean" == typeof t ? (n = t, t = undefined) : t && !Array.isArray(t) && (t = [t]), c.isString(e) && e.length) {
                if ("." === e) return this.root;
                e = e.split(".")
              } else if (!e.length) return this;
              if ("" === e[0]) return this.root.lookup(e.slice(1), t);
              var r = this.get(e[0]);
              if (r) { if (1 === e.length) { if (!t || t.indexOf(r.constructor) > -1) return r } else if (r instanceof u && (r = r.lookup(e.slice(1), t, !0))) return r } else
                for (var i = 0; i < this.nestedArray.length; ++i)
                  if (this._nestedArray[i] instanceof u && (r = this._nestedArray[i].lookup(e, t, !0))) return r; return null === this.parent || n ? null : this.parent.lookup(e, t)
            }, u.prototype.lookupType = function(e) { var t = this.lookup(e, [i]); if (!t) throw Error("no such type: " + e); return t }, u.prototype.lookupEnum = function(e) { var t = this.lookup(e, [a]); if (!t) throw Error("no such Enum '" + e + "' in " + this); return t }, u.prototype.lookupTypeOrEnum = function(e) { var t = this.lookup(e, [i, a]); if (!t) throw Error("no such Type or Enum '" + e + "' in " + this); return t }, u.prototype.lookupService = function(e) { var t = this.lookup(e, [o]); if (!t) throw Error("no such Service '" + e + "' in " + this); return t }, u._configure = function(e, t, n) { i = e, o = t, a = n }
          }, { 15: 15, 22: 22, 33: 33 }],
          22: [function(e, t, n) {
            t.exports = o, o.className = "ReflectionObject";
            var r, i = e(33);

            function o(e, t) {
              if (!i.isString(e)) throw TypeError("name must be a string");
              if (t && !i.isObject(t)) throw TypeError("options must be an object");
              this.options = t, this.parsedOptions = null, this.name = e, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
            }
            Object.defineProperties(o.prototype, { root: { get: function() { for (var e = this; null !== e.parent;) e = e.parent; return e } }, fullName: { get: function() { for (var e = [this.name], t = this.parent; t;) e.unshift(t.name), t = t.parent; return e.join(".") } } }), o.prototype.toJSON = function() { throw Error() }, o.prototype.onAdd = function(e) {
              this.parent && this.parent !== e && this.parent.remove(this), this.parent = e, this.resolved = !1;
              var t = e.root;
              t instanceof r && t._handleAdd(this)
            }, o.prototype.onRemove = function(e) {
              var t = e.root;
              t instanceof r && t._handleRemove(this), this.parent = null, this.resolved = !1
            }, o.prototype.resolve = function() { return this.resolved || this.root instanceof r && (this.resolved = !0), this }, o.prototype.getOption = function(e) { return this.options ? this.options[e] : undefined }, o.prototype.setOption = function(e, t, n) { return n && this.options && this.options[e] !== undefined || ((this.options || (this.options = {}))[e] = t), this }, o.prototype.setParsedOption = function(e, t, n) {
              this.parsedOptions || (this.parsedOptions = []);
              var r = this.parsedOptions;
              if (n) {
                var o = r.find((function(t) { return Object.prototype.hasOwnProperty.call(t, e) }));
                if (o) {
                  var a = o[e];
                  i.setProperty(a, n, t)
                } else(o = {})[e] = i.setProperty({}, n, t), r.push(o)
              } else {
                var s = {};
                s[e] = t, r.push(s)
              }
              return this
            }, o.prototype.setOptions = function(e, t) {
              if (e)
                for (var n = Object.keys(e), r = 0; r < n.length; ++r) this.setOption(n[r], e[n[r]], t);
              return this
            }, o.prototype.toString = function() {
              var e = this.constructor.className,
                t = this.fullName;
              return t.length ? e + " " + t : e
            }, o._configure = function(e) { r = e }
          }, { 33: 33 }],
          23: [function(e, t, n) {
            t.exports = a;
            var r = e(22);
            ((a.prototype = Object.create(r.prototype)).constructor = a).className = "OneOf";
            var i = e(15),
              o = e(33);

            function a(e, t, n, i) {
              if (Array.isArray(t) || (n = t, t = undefined), r.call(this, e, n), t !== undefined && !Array.isArray(t)) throw TypeError("fieldNames must be an Array");
              this.oneof = t || [], this.fieldsArray = [], this.comment = i
            }

            function s(e) {
              if (e.parent)
                for (var t = 0; t < e.fieldsArray.length; ++t) e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t])
            }
            a.fromJSON = function(e, t) { return new a(e, t.oneof, t.options, t.comment) }, a.prototype.toJSON = function(e) { var t = !!e && Boolean(e.keepComments); return o.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined]) }, a.prototype.add = function(e) { if (!(e instanceof i)) throw TypeError("field must be a Field"); return e.parent && e.parent !== this.parent && e.parent.remove(e), this.oneof.push(e.name), this.fieldsArray.push(e), e.partOf = this, s(this), this }, a.prototype.remove = function(e) { if (!(e instanceof i)) throw TypeError("field must be a Field"); var t = this.fieldsArray.indexOf(e); if (t < 0) throw Error(e + " is not a member of " + this); return this.fieldsArray.splice(t, 1), (t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1), e.partOf = null, this }, a.prototype.onAdd = function(e) {
              r.prototype.onAdd.call(this, e);
              for (var t = 0; t < this.oneof.length; ++t) {
                var n = e.get(this.oneof[t]);
                n && !n.partOf && (n.partOf = this, this.fieldsArray.push(n))
              }
              s(this)
            }, a.prototype.onRemove = function(e) {
              for (var t, n = 0; n < this.fieldsArray.length; ++n)(t = this.fieldsArray[n]).parent && t.parent.remove(t);
              r.prototype.onRemove.call(this, e)
            }, a.d = function() { for (var e = new Array(arguments.length), t = 0; t < arguments.length;) e[t] = arguments[t++]; return function(t, n) { o.decorateType(t.constructor).add(new a(n, e)), Object.defineProperty(t, n, { get: o.oneOfGetter(e), set: o.oneOfSetter(e) }) } }
          }, { 15: 15, 22: 22, 33: 33 }],
          24: [function(e, t, n) {
            t.exports = c;
            var r, i = e(35),
              o = i.LongBits,
              a = i.utf8;

            function s(e, t) { return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len) }

            function c(e) { this.buf = e, this.pos = 0, this.len = e.length }
            var d, u = "undefined" != typeof Uint8Array ? function(e) { if (e instanceof Uint8Array || Array.isArray(e)) return new c(e); throw Error("illegal buffer") } : function(e) { if (Array.isArray(e)) return new c(e); throw Error("illegal buffer") },
              l = function() { return i.Buffer ? function(e) { return (c.create = function(e) { return i.Buffer.isBuffer(e) ? new r(e) : u(e) })(e) } : u };

            function p() {
              var e = new o(0, 0),
                t = 0;
              if (!(this.len - this.pos > 4)) { for (; t < 3; ++t) { if (this.pos >= this.len) throw s(this); if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e } return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e }
              for (; t < 4; ++t)
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
              if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;
              if (t = 0, this.len - this.pos > 4) {
                for (; t < 5; ++t)
                  if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
              } else
                for (; t < 5; ++t) { if (this.pos >= this.len) throw s(this); if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e }
              throw Error("invalid varint encoding")
            }

            function f(e, t) { return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0 }

            function g() { if (this.pos + 8 > this.len) throw s(this, 8); return new o(f(this.buf, this.pos += 4), f(this.buf, this.pos += 4)) }
            c.create = l(), c.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, c.prototype.uint32 = (d = 4294967295, function() { if (d = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return d; if (d = (d | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return d; if (d = (d | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return d; if (d = (d | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return d; if (d = (d | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return d; if ((this.pos += 5) > this.len) throw this.pos = this.len, s(this, 10); return d }), c.prototype.int32 = function() { return 0 | this.uint32() }, c.prototype.sint32 = function() { var e = this.uint32(); return e >>> 1 ^ -(1 & e) | 0 }, c.prototype.bool = function() { return 0 !== this.uint32() }, c.prototype.fixed32 = function() { if (this.pos + 4 > this.len) throw s(this, 4); return f(this.buf, this.pos += 4) }, c.prototype.sfixed32 = function() { if (this.pos + 4 > this.len) throw s(this, 4); return 0 | f(this.buf, this.pos += 4) }, c.prototype.float = function() { if (this.pos + 4 > this.len) throw s(this, 4); var e = i.float.readFloatLE(this.buf, this.pos); return this.pos += 4, e }, c.prototype.double = function() { if (this.pos + 8 > this.len) throw s(this, 4); var e = i.float.readDoubleLE(this.buf, this.pos); return this.pos += 8, e }, c.prototype.bytes = function() {
              var e = this.uint32(),
                t = this.pos,
                n = this.pos + e;
              if (n > this.len) throw s(this, e);
              return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n)
            }, c.prototype.string = function() { var e = this.bytes(); return a.read(e, 0, e.length) }, c.prototype.skip = function(e) {
              if ("number" == typeof e) {
                if (this.pos + e > this.len) throw s(this, e);
                this.pos += e
              } else
                do { if (this.pos >= this.len) throw s(this) } while (128 & this.buf[this.pos++]);
              return this
            }, c.prototype.skipType = function(e) {
              switch (e) {
                case 0:
                  this.skip();
                  break;
                case 1:
                  this.skip(8);
                  break;
                case 2:
                  this.skip(this.uint32());
                  break;
                case 3:
                  for (; 4 != (e = 7 & this.uint32());) this.skipType(e);
                  break;
                case 5:
                  this.skip(4);
                  break;
                default:
                  throw Error("invalid wire type " + e + " at offset " + this.pos)
              }
              return this
            }, c._configure = function(e) {
              r = e, c.create = l(), r._configure();
              var t = i.Long ? "toLong" : "toNumber";
              i.merge(c.prototype, { int64: function() { return p.call(this)[t](!1) }, uint64: function() { return p.call(this)[t](!0) }, sint64: function() { return p.call(this).zzDecode()[t](!1) }, fixed64: function() { return g.call(this)[t](!0) }, sfixed64: function() { return g.call(this)[t](!1) } })
            }
          }, { 35: 35 }],
          25: [function(e, t, n) {
            t.exports = o;
            var r = e(24);
            (o.prototype = Object.create(r.prototype)).constructor = o;
            var i = e(35);

            function o(e) { r.call(this, e) }
            o._configure = function() { i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice) }, o.prototype.string = function() { var e = this.uint32(); return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len)) }, o._configure()
          }, { 24: 24, 35: 35 }],
          26: [function(e, t, n) {
            t.exports = l;
            var r = e(21);
            ((l.prototype = Object.create(r.prototype)).constructor = l).className = "Root";
            var i, o, a, s = e(15),
              c = e(14),
              d = e(23),
              u = e(33);

            function l(e) { r.call(this, "", e), this.deferred = [], this.files = [] }

            function p() {}
            l.fromJSON = function(e, t) { return t || (t = new l), e.options && t.setOptions(e.options), t.addJSON(e.nested) }, l.prototype.resolvePath = u.path.resolve, l.prototype.fetch = u.fetch, l.prototype.load = function e(t, n, r) {
              "function" == typeof n && (r = n, n = undefined);
              var i = this;
              if (!r) return u.asPromise(e, i, t, n);
              var s = r === p;

              function c(e, t) {
                if (r) {
                  var n = r;
                  if (r = null, s) throw e;
                  n(e, t)
                }
              }

              function d(e) { var t = e.lastIndexOf("google/protobuf/"); if (t > -1) { var n = e.substring(t); if (n in a) return n } return null }

              function l(e, t) {
                try {
                  if (u.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)), u.isString(t)) {
                    o.filename = e;
                    var r, a = o(t, i, n),
                      l = 0;
                    if (a.imports)
                      for (; l < a.imports.length; ++l)(r = d(a.imports[l]) || i.resolvePath(e, a.imports[l])) && f(r);
                    if (a.weakImports)
                      for (l = 0; l < a.weakImports.length; ++l)(r = d(a.weakImports[l]) || i.resolvePath(e, a.weakImports[l])) && f(r, !0)
                  } else i.setOptions(t.options).addJSON(t.nested)
                } catch (e) { c(e) }
                s || g || c(null, i)
              }

              function f(e, t) {
                if (!(i.files.indexOf(e) > -1))
                  if (i.files.push(e), e in a) s ? l(e, a[e]) : (++g, setTimeout((function() {--g, l(e, a[e]) })));
                  else if (s) {
                  var n;
                  try { n = u.fs.readFileSync(e).toString("utf8") } catch (e) { return void(t || c(e)) }
                  l(e, n)
                } else ++g, i.fetch(e, (function(n, o) {--g, r && (n ? t ? g || c(null, i) : c(n) : l(e, o)) }))
              }
              var g = 0;
              u.isString(t) && (t = [t]);
              for (var m, h = 0; h < t.length; ++h)(m = i.resolvePath("", t[h])) && f(m);
              return s ? i : (g || c(null, i), undefined)
            }, l.prototype.loadSync = function(e, t) { if (!u.isNode) throw Error("not supported"); return this.load(e, t, p) }, l.prototype.resolveAll = function() { if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map((function(e) { return "'extend " + e.extend + "' in " + e.parent.fullName })).join(", ")); return r.prototype.resolveAll.call(this) };
            var f = /^[A-Z]/;

            function g(e, t) { var n = t.parent.lookup(t.extend); if (n) { var r = new s(t.fullName, t.id, t.type, t.rule, undefined, t.options); return r.declaringField = t, t.extensionField = r, n.add(r), !0 } return !1 }
            l.prototype._handleAdd = function(e) {
              if (e instanceof s) e.extend === undefined || e.extensionField || g(0, e) || this.deferred.push(e);
              else if (e instanceof c) f.test(e.name) && (e.parent[e.name] = e.values);
              else if (!(e instanceof d)) {
                if (e instanceof i)
                  for (var t = 0; t < this.deferred.length;) g(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                for (var n = 0; n < e.nestedArray.length; ++n) this._handleAdd(e._nestedArray[n]);
                f.test(e.name) && (e.parent[e.name] = e)
              }
            }, l.prototype._handleRemove = function(e) {
              if (e instanceof s) {
                if (e.extend !== undefined)
                  if (e.extensionField) e.extensionField.parent.remove(e.extensionField), e.extensionField = null;
                  else {
                    var t = this.deferred.indexOf(e);
                    t > -1 && this.deferred.splice(t, 1)
                  }
              } else if (e instanceof c) f.test(e.name) && delete e.parent[e.name];
              else if (e instanceof r) {
                for (var n = 0; n < e.nestedArray.length; ++n) this._handleRemove(e._nestedArray[n]);
                f.test(e.name) && delete e.parent[e.name]
              }
            }, l._configure = function(e, t, n) { i = e, o = t, a = n }
          }, { 14: 14, 15: 15, 21: 21, 23: 23, 33: 33 }],
          27: [function(e, t, n) { t.exports = {} }, {}],
          28: [function(e, t, n) { n.Service = e(29) }, { 29: 29 }],
          29: [function(e, t, n) {
            t.exports = i;
            var r = e(35);

            function i(e, t, n) {
              if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
              r.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(t), this.responseDelimited = Boolean(n)
            }(i.prototype = Object.create(r.EventEmitter.prototype)).constructor = i, i.prototype.rpcCall = function e(t, n, i, o, a) {
              if (!o) throw TypeError("request must be specified");
              var s = this;
              if (!a) return r.asPromise(e, s, t, n, i, o);
              if (!s.rpcImpl) return setTimeout((function() { a(Error("already ended")) }), 0), undefined;
              try {
                return s.rpcImpl(t, n[s.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), (function(e, n) {
                  if (e) return s.emit("error", e, t), a(e);
                  if (null === n) return s.end(!0), undefined;
                  if (!(n instanceof i)) try { n = i[s.responseDelimited ? "decodeDelimited" : "decode"](n) } catch (e) { return s.emit("error", e, t), a(e) }
                  return s.emit("data", n, t), a(null, n)
                }))
              } catch (e) { return s.emit("error", e, t), setTimeout((function() { a(e) }), 0), undefined }
            }, i.prototype.end = function(e) { return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this }
          }, { 35: 35 }],
          30: [function(e, t, n) {
            t.exports = s;
            var r = e(21);
            ((s.prototype = Object.create(r.prototype)).constructor = s).className = "Service";
            var i = e(20),
              o = e(33),
              a = e(28);

            function s(e, t) { r.call(this, e, t), this.methods = {}, this._methodsArray = null }

            function c(e) { return e._methodsArray = null, e }
            s.fromJSON = function(e, t) {
              var n = new s(e, t.options);
              if (t.methods)
                for (var r = Object.keys(t.methods), o = 0; o < r.length; ++o) n.add(i.fromJSON(r[o], t.methods[r[o]]));
              return t.nested && n.addJSON(t.nested), n.comment = t.comment, n
            }, s.prototype.toJSON = function(e) {
              var t = r.prototype.toJSON.call(this, e),
                n = !!e && Boolean(e.keepComments);
              return o.toObject(["options", t && t.options || undefined, "methods", r.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", n ? this.comment : undefined])
            }, Object.defineProperty(s.prototype, "methodsArray", { get: function() { return this._methodsArray || (this._methodsArray = o.toArray(this.methods)) } }), s.prototype.get = function(e) { return this.methods[e] || r.prototype.get.call(this, e) }, s.prototype.resolveAll = function() { for (var e = this.methodsArray, t = 0; t < e.length; ++t) e[t].resolve(); return r.prototype.resolve.call(this) }, s.prototype.add = function(e) { if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this); return e instanceof i ? (this.methods[e.name] = e, e.parent = this, c(this)) : r.prototype.add.call(this, e) }, s.prototype.remove = function(e) { if (e instanceof i) { if (this.methods[e.name] !== e) throw Error(e + " is not a member of " + this); return delete this.methods[e.name], e.parent = null, c(this) } return r.prototype.remove.call(this, e) }, s.prototype.create = function(e, t, n) {
              for (var r, i = new a.Service(e, t, n), s = 0; s < this.methodsArray.length; ++s) {
                var c = o.lcFirst((r = this._methodsArray[s]).resolve().name).replace(/[^$\w_]/g, "");
                i[c] = o.codegen(["r", "c"], o.isReserved(c) ? c + "_" : c)("return this.rpcCall(m,q,s,r,c)")({ m: r, q: r.resolvedRequestType.ctor, s: r.resolvedResponseType.ctor })
              }
              return i
            }
          }, { 20: 20, 21: 21, 28: 28, 33: 33 }],
          31: [function(e, t, n) {
            t.exports = E;
            var r = e(21);
            ((E.prototype = Object.create(r.prototype)).constructor = E).className = "Type";
            var i = e(14),
              o = e(23),
              a = e(15),
              s = e(18),
              c = e(30),
              d = e(19),
              u = e(24),
              l = e(38),
              p = e(33),
              f = e(13),
              g = e(12),
              m = e(36),
              h = e(11),
              v = e(37);

            function E(e, t) { r.call(this, e, t), this.fields = {}, this.oneofs = undefined, this.extensions = undefined, this.reserved = undefined, this.group = undefined, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null }

            function _(e) { return e._fieldsById = e._fieldsArray = e._oneofsArray = null, delete e.encode, delete e.decode, delete e.verify, e }
            Object.defineProperties(E.prototype, {
              fieldsById: {
                get: function() {
                  if (this._fieldsById) return this._fieldsById;
                  this._fieldsById = {};
                  for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
                    var n = this.fields[e[t]],
                      r = n.id;
                    if (this._fieldsById[r]) throw Error("duplicate id " + r + " in " + this);
                    this._fieldsById[r] = n
                  }
                  return this._fieldsById
                }
              },
              fieldsArray: { get: function() { return this._fieldsArray || (this._fieldsArray = p.toArray(this.fields)) } },
              oneofsArray: { get: function() { return this._oneofsArray || (this._oneofsArray = p.toArray(this.oneofs)) } },
              ctor: {
                get: function() { return this._ctor || (this.ctor = E.generateConstructor(this)()) },
                set: function(e) {
                  var t = e.prototype;
                  t instanceof d || ((e.prototype = new d).constructor = e, p.merge(e.prototype, t)), e.$type = e.prototype.$type = this, p.merge(e, d, !0), this._ctor = e;
                  for (var n = 0; n < this.fieldsArray.length; ++n) this._fieldsArray[n].resolve();
                  var r = {};
                  for (n = 0; n < this.oneofsArray.length; ++n) r[this._oneofsArray[n].resolve().name] = { get: p.oneOfGetter(this._oneofsArray[n].oneof), set: p.oneOfSetter(this._oneofsArray[n].oneof) };
                  n && Object.defineProperties(e.prototype, r)
                }
              }
            }), E.generateConstructor = function(e) { for (var t, n = p.codegen(["p"], e.name), r = 0; r < e.fieldsArray.length; ++r)(t = e._fieldsArray[r]).map ? n("this%s={}", p.safeProp(t.name)) : t.repeated && n("this%s=[]", p.safeProp(t.name)); return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]") }, E.fromJSON = function(e, t) {
              var n = new E(e, t.options);
              n.extensions = t.extensions, n.reserved = t.reserved;
              for (var d = Object.keys(t.fields), u = 0; u < d.length; ++u) n.add((void 0 !== t.fields[d[u]].keyType ? s.fromJSON : a.fromJSON)(d[u], t.fields[d[u]]));
              if (t.oneofs)
                for (d = Object.keys(t.oneofs), u = 0; u < d.length; ++u) n.add(o.fromJSON(d[u], t.oneofs[d[u]]));
              if (t.nested)
                for (d = Object.keys(t.nested), u = 0; u < d.length; ++u) {
                  var l = t.nested[d[u]];
                  n.add((l.id !== undefined ? a.fromJSON : l.fields !== undefined ? E.fromJSON : l.values !== undefined ? i.fromJSON : l.methods !== undefined ? c.fromJSON : r.fromJSON)(d[u], l))
                }
              return t.extensions && t.extensions.length && (n.extensions = t.extensions), t.reserved && t.reserved.length && (n.reserved = t.reserved), t.group && (n.group = !0), t.comment && (n.comment = t.comment), n
            }, E.prototype.toJSON = function(e) {
              var t = r.prototype.toJSON.call(this, e),
                n = !!e && Boolean(e.keepComments);
              return p.toObject(["options", t && t.options || undefined, "oneofs", r.arrayToJSON(this.oneofsArray, e), "fields", r.arrayToJSON(this.fieldsArray.filter((function(e) { return !e.declaringField })), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", n ? this.comment : undefined])
            }, E.prototype.resolveAll = function() { for (var e = this.fieldsArray, t = 0; t < e.length;) e[t++].resolve(); var n = this.oneofsArray; for (t = 0; t < n.length;) n[t++].resolve(); return r.prototype.resolveAll.call(this) }, E.prototype.get = function(e) { return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null }, E.prototype.add = function(e) { if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this); if (e instanceof a && e.extend === undefined) { if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) throw Error("duplicate id " + e.id + " in " + this); if (this.isReservedId(e.id)) throw Error("id " + e.id + " is reserved in " + this); if (this.isReservedName(e.name)) throw Error("name '" + e.name + "' is reserved in " + this); return e.parent && e.parent.remove(e), this.fields[e.name] = e, e.message = this, e.onAdd(this), _(this) } return e instanceof o ? (this.oneofs || (this.oneofs = {}), this.oneofs[e.name] = e, e.onAdd(this), _(this)) : r.prototype.add.call(this, e) }, E.prototype.remove = function(e) { if (e instanceof a && e.extend === undefined) { if (!this.fields || this.fields[e.name] !== e) throw Error(e + " is not a member of " + this); return delete this.fields[e.name], e.parent = null, e.onRemove(this), _(this) } if (e instanceof o) { if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + " is not a member of " + this); return delete this.oneofs[e.name], e.parent = null, e.onRemove(this), _(this) } return r.prototype.remove.call(this, e) }, E.prototype.isReservedId = function(e) { return r.isReservedId(this.reserved, e) }, E.prototype.isReservedName = function(e) { return r.isReservedName(this.reserved, e) }, E.prototype.create = function(e) { return new this.ctor(e) }, E.prototype.setup = function() {
              for (var e = this.fullName, t = [], n = 0; n < this.fieldsArray.length; ++n) t.push(this._fieldsArray[n].resolve().resolvedType);
              this.encode = f(this)({ Writer: l, types: t, util: p }), this.decode = g(this)({ Reader: u, types: t, util: p }), this.verify = m(this)({ types: t, util: p }), this.fromObject = h.fromObject(this)({ types: t, util: p }), this.toObject = h.toObject(this)({ types: t, util: p });
              var r = v[e];
              if (r) {
                var i = Object.create(this);
                i.fromObject = this.fromObject, this.fromObject = r.fromObject.bind(i), i.toObject = this.toObject, this.toObject = r.toObject.bind(i)
              }
              return this
            }, E.prototype.encode = function(e, t) { return this.setup().encode(e, t) }, E.prototype.encodeDelimited = function(e, t) { return this.encode(e, t && t.len ? t.fork() : t).ldelim() }, E.prototype.decode = function(e, t) { return this.setup().decode(e, t) }, E.prototype.decodeDelimited = function(e) { return e instanceof u || (e = u.create(e)), this.decode(e, e.uint32()) }, E.prototype.verify = function(e) { return this.setup().verify(e) }, E.prototype.fromObject = function(e) { return this.setup().fromObject(e) }, E.prototype.toObject = function(e, t) { return this.setup().toObject(e, t) }, E.d = function(e) { return function(t) { p.decorateType(t, e) } }
          }, { 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 18: 18, 19: 19, 21: 21, 23: 23, 24: 24, 30: 30, 33: 33, 36: 36, 37: 37, 38: 38 }],
          32: [function(e, t, n) {
            var r = n,
              i = e(33),
              o = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

            function a(e, t) {
              var n = 0,
                r = {};
              for (t |= 0; n < e.length;) r[o[n + t]] = e[n++];
              return r
            }
            r.basic = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = a([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", i.emptyArray, null]), r.long = a([0, 0, 0, 1, 1], 7), r.mapKey = a([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
          }, { 33: 33 }],
          33: [function(e, t, n) {
            var r, i, o = t.exports = e(35),
              a = e(27);
            o.codegen = e(3), o.fetch = e(5), o.path = e(8), o.fs = o.inquire("fs"), o.toArray = function(e) { if (e) { for (var t = Object.keys(e), n = new Array(t.length), r = 0; r < t.length;) n[r] = e[t[r++]]; return n } return [] }, o.toObject = function(e) {
              for (var t = {}, n = 0; n < e.length;) {
                var r = e[n++],
                  i = e[n++];
                i !== undefined && (t[r] = i)
              }
              return t
            };
            var s = /\\/g,
              c = /"/g;
            o.isReserved = function(e) { return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e) }, o.safeProp = function(e) { return !/^[$\w_]+$/.test(e) || o.isReserved(e) ? '["' + e.replace(s, "\\\\").replace(c, '\\"') + '"]' : "." + e }, o.ucFirst = function(e) { return e.charAt(0).toUpperCase() + e.substring(1) };
            var d = /_([a-z])/g;
            o.camelCase = function(e) { return e.substring(0, 1) + e.substring(1).replace(d, (function(e, t) { return t.toUpperCase() })) }, o.compareFieldsById = function(e, t) { return e.id - t.id }, o.decorateType = function(t, n) {
              if (t.$type) return n && t.$type.name !== n && (o.decorateRoot.remove(t.$type), t.$type.name = n, o.decorateRoot.add(t.$type)), t.$type;
              r || (r = e(31));
              var i = new r(n || t.name);
              return o.decorateRoot.add(i), i.ctor = t, Object.defineProperty(t, "$type", { value: i, enumerable: !1 }), Object.defineProperty(t.prototype, "$type", { value: i, enumerable: !1 }), i
            };
            var u = 0;
            o.decorateEnum = function(t) {
              if (t.$type) return t.$type;
              i || (i = e(14));
              var n = new i("Enum" + u++, t);
              return o.decorateRoot.add(n), Object.defineProperty(t, "$type", { value: n, enumerable: !1 }), n
            }, o.setProperty = function(e, t, n) {
              if ("object" != typeof e) throw TypeError("dst must be an object");
              if (!t) throw TypeError("path must be specified");
              return function e(t, n, r) {
                var i = n.shift();
                if (n.length > 0) t[i] = e(t[i] || {}, n, r);
                else {
                  var o = t[i];
                  o && (r = [].concat(o).concat(r)), t[i] = r
                }
                return t
              }(e, t = t.split("."), n)
            }, Object.defineProperty(o, "decorateRoot", { get: function() { return a.decorated || (a.decorated = new(e(26))) } })
          }, { 14: 14, 26: 26, 27: 27, 3: 3, 31: 31, 35: 35, 5: 5, 8: 8 }],
          34: [function(e, t, n) {
            t.exports = i;
            var r = e(35);

            function i(e, t) { this.lo = e >>> 0, this.hi = t >>> 0 }
            var o = i.zero = new i(0, 0);
            o.toNumber = function() { return 0 }, o.zzEncode = o.zzDecode = function() { return this }, o.length = function() { return 1 };
            var a = i.zeroHash = "\0\0\0\0\0\0\0\0";
            i.fromNumber = function(e) {
              if (0 === e) return o;
              var t = e < 0;
              t && (e = -e);
              var n = e >>> 0,
                r = (e - n) / 4294967296 >>> 0;
              return t && (r = ~r >>> 0, n = ~n >>> 0, ++n > 4294967295 && (n = 0, ++r > 4294967295 && (r = 0))), new i(n, r)
            }, i.from = function(e) {
              if ("number" == typeof e) return i.fromNumber(e);
              if (r.isString(e)) {
                if (!r.Long) return i.fromNumber(parseInt(e, 10));
                e = r.Long.fromString(e)
              }
              return e.low || e.high ? new i(e.low >>> 0, e.high >>> 0) : o
            }, i.prototype.toNumber = function(e) {
              if (!e && this.hi >>> 31) {
                var t = 1 + ~this.lo >>> 0,
                  n = ~this.hi >>> 0;
                return t || (n = n + 1 >>> 0), -(t + 4294967296 * n)
              }
              return this.lo + 4294967296 * this.hi
            }, i.prototype.toLong = function(e) { return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e) } };
            var s = String.prototype.charCodeAt;
            i.fromHash = function(e) { return e === a ? o : new i((s.call(e, 0) | s.call(e, 1) << 8 | s.call(e, 2) << 16 | s.call(e, 3) << 24) >>> 0, (s.call(e, 4) | s.call(e, 5) << 8 | s.call(e, 6) << 16 | s.call(e, 7) << 24) >>> 0) }, i.prototype.toHash = function() { return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24) }, i.prototype.zzEncode = function() { var e = this.hi >> 31; return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this }, i.prototype.zzDecode = function() { var e = -(1 & this.lo); return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this }, i.prototype.length = function() {
              var e = this.lo,
                t = (this.lo >>> 28 | this.hi << 4) >>> 0,
                n = this.hi >>> 24;
              return 0 === n ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
            }
          }, { 35: 35 }],
          35: [function(e, t, n) {
            var r = n;

            function i(e, t, n) { for (var r = Object.keys(t), i = 0; i < r.length; ++i) e[r[i]] !== undefined && n || (e[r[i]] = t[r[i]]); return e }

            function o(e) {
              function t(e, n) {
                if (!(this instanceof t)) return new t(e, n);
                Object.defineProperty(this, "message", { get: function() { return e } }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", { value: (new Error).stack || "" }), n && i(this, n)
              }
              return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", { get: function() { return e } }), t.prototype.toString = function() { return this.name + ": " + this.message }, t
            }
            r.asPromise = e(1), r.base64 = e(2), r.EventEmitter = e(4), r.float = e(6), r.inquire = e(7), r.utf8 = e(10), r.pool = e(9), r.LongBits = e(34), r.isNode = Boolean(void 0 !== global && global && global.process && global.process.versions && global.process.versions.node), r.global = r.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isInteger = Number.isInteger || function(e) { return "number" == typeof e && isFinite(e) && Math.floor(e) === e }, r.isString = function(e) { return "string" == typeof e || e instanceof String }, r.isObject = function(e) { return e && "object" == typeof e }, r.isset = r.isSet = function(e, t) { var n = e[t]; return !(null == n || !e.hasOwnProperty(t)) && ("object" != typeof n || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0) }, r.Buffer = function() { try { var e = r.inquire("buffer").Buffer; return e.prototype.utf8Write ? e : null } catch (e) { return null } }(), r._Buffer_from = null, r._Buffer_allocUnsafe = null, r.newBuffer = function(e) { return "number" == typeof e ? r.Buffer ? r._Buffer_allocUnsafe(e) : new r.Array(e) : r.Buffer ? r._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e) }, r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function(e) { return e ? r.LongBits.from(e).toHash() : r.LongBits.zeroHash }, r.longFromHash = function(e, t) { var n = r.LongBits.fromHash(e); return r.Long ? r.Long.fromBits(n.lo, n.hi, t) : n.toNumber(Boolean(t)) }, r.merge = i, r.lcFirst = function(e) { return e.charAt(0).toLowerCase() + e.substring(1) }, r.newError = o, r.ProtocolError = o("ProtocolError"), r.oneOfGetter = function(e) {
              for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
              return function() {
                for (var e = Object.keys(this), n = e.length - 1; n > -1; --n)
                  if (1 === t[e[n]] && this[e[n]] !== undefined && null !== this[e[n]]) return e[n]
              }
            }, r.oneOfSetter = function(e) { return function(t) { for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]] } }, r.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, r._configure = function() {
              var e = r.Buffer;
              e ? (r._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, n) { return new e(t, n) }, r._Buffer_allocUnsafe = e.allocUnsafe || function(t) { return new e(t) }) : r._Buffer_from = r._Buffer_allocUnsafe = null
            }
          }, { 1: 1, 10: 10, 2: 2, 34: 34, 4: 4, 6: 6, 7: 7, 9: 9 }],
          36: [function(e, t, n) {
            t.exports = function(e) {
              var t = i.codegen(["m"], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
                n = e.oneofsArray,
                r = {};
              n.length && t("var p={}");
              for (var c = 0; c < e.fieldsArray.length; ++c) {
                var d = e._fieldsArray[c].resolve(),
                  u = "m" + i.safeProp(d.name);
                if (d.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", u, d.name), d.map) t("if(!util.isObject(%s))", u)("return%j", o(d, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){"), s(t, d, "k[i]"), a(t, d, c, u + "[k[i]]")("}");
                else if (d.repeated) t("if(!Array.isArray(%s))", u)("return%j", o(d, "array"))("for(var i=0;i<%s.length;++i){", u), a(t, d, c, u + "[i]")("}");
                else {
                  if (d.partOf) {
                    var l = i.safeProp(d.partOf.name);
                    1 === r[d.partOf.name] && t("if(p%s===1)", l)("return%j", d.partOf.name + ": multiple values"), r[d.partOf.name] = 1, t("p%s=1", l)
                  }
                  a(t, d, c, u)
                }
                d.optional && t("}")
              }
              return t("return null")
            };
            var r = e(14),
              i = e(33);

            function o(e, t) { return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected" }

            function a(e, t, n, i) {
              if (t.resolvedType)
                if (t.resolvedType instanceof r) {
                  e("switch(%s){", i)("default:")("return%j", o(t, "enum value"));
                  for (var a = Object.keys(t.resolvedType.values), s = 0; s < a.length; ++s) e("case %i:", t.resolvedType.values[a[s]]);
                  e("break")("}")
                } else e("{")("var e=types[%i].verify(%s);", n, i)("if(e)")("return%j+e", t.name + ".")("}");
              else switch (t.type) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                  e("if(!util.isInteger(%s))", i)("return%j", o(t, "integer"));
                  break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", o(t, "integer|Long"));
                  break;
                case "float":
                case "double":
                  e('if(typeof %s!=="number")', i)("return%j", o(t, "number"));
                  break;
                case "bool":
                  e('if(typeof %s!=="boolean")', i)("return%j", o(t, "boolean"));
                  break;
                case "string":
                  e("if(!util.isString(%s))", i)("return%j", o(t, "string"));
                  break;
                case "bytes":
                  e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)("return%j", o(t, "buffer"))
              }
              return e
            }

            function s(e, t, n) {
              switch (t.keyType) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                  e("if(!util.key32Re.test(%s))", n)("return%j", o(t, "integer key"));
                  break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  e("if(!util.key64Re.test(%s))", n)("return%j", o(t, "integer|Long key"));
                  break;
                case "bool":
                  e("if(!util.key2Re.test(%s))", n)("return%j", o(t, "boolean key"))
              }
              return e
            }
          }, { 14: 14, 33: 33 }],
          37: [function(e, t, n) {
            var r = n,
              i = e(19);
            r[".google.protobuf.Any"] = {
              fromObject: function(e) {
                if (e && e["@type"]) {
                  var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1),
                    n = this.lookup(t);
                  if (n) { var r = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"]; return -1 === r.indexOf("/") && (r = "/" + r), this.create({ type_url: r, value: n.encode(n.fromObject(e)).finish() }) }
                }
                return this.fromObject(e)
              },
              toObject: function(e, t) {
                var n = "",
                  r = "";
                if (t && t.json && e.type_url && e.value) {
                  r = e.type_url.substring(e.type_url.lastIndexOf("/") + 1), n = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
                  var o = this.lookup(r);
                  o && (e = o.decode(e.value))
                }
                if (!(e instanceof this.ctor) && e instanceof i) { var a = e.$type.toObject(e, t); return "" === n && (n = "type.googleapis.com/"), r = n + ("." === e.$type.fullName[0] ? e.$type.fullName.substr(1) : e.$type.fullName), a["@type"] = r, a }
                return this.toObject(e, t)
              }
            }
          }, { 19: 19 }],
          38: [function(e, t, n) {
            t.exports = l;
            var r, i = e(35),
              o = i.LongBits,
              a = i.base64,
              s = i.utf8;

            function c(e, t, n) { this.fn = e, this.len = t, this.next = undefined, this.val = n }

            function d() {}

            function u(e) { this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states }

            function l() { this.len = 0, this.head = new c(d, 0, 0), this.tail = this.head, this.states = null }
            var p = function() { return i.Buffer ? function() { return (l.create = function() { return new r })() } : function() { return new l } };

            function f(e, t, n) { t[n] = 255 & e }

            function g(e, t) { this.len = e, this.next = undefined, this.val = t }

            function m(e, t, n) {
              for (; e.hi;) t[n++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
              for (; e.lo > 127;) t[n++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;
              t[n++] = e.lo
            }

            function h(e, t, n) { t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24 }
            l.create = p(), l.alloc = function(e) { return new i.Array(e) }, i.Array !== Array && (l.alloc = i.pool(l.alloc, i.Array.prototype.subarray)), l.prototype._push = function(e, t, n) { return this.tail = this.tail.next = new c(e, t, n), this.len += t, this }, g.prototype = Object.create(c.prototype), g.prototype.fn = function(e, t, n) {
              for (; e > 127;) t[n++] = 127 & e | 128, e >>>= 7;
              t[n] = e
            }, l.prototype.uint32 = function(e) { return this.len += (this.tail = this.tail.next = new g((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this }, l.prototype.int32 = function(e) { return e < 0 ? this._push(m, 10, o.fromNumber(e)) : this.uint32(e) }, l.prototype.sint32 = function(e) { return this.uint32((e << 1 ^ e >> 31) >>> 0) }, l.prototype.uint64 = function(e) { var t = o.from(e); return this._push(m, t.length(), t) }, l.prototype.int64 = l.prototype.uint64, l.prototype.sint64 = function(e) { var t = o.from(e).zzEncode(); return this._push(m, t.length(), t) }, l.prototype.bool = function(e) { return this._push(f, 1, e ? 1 : 0) }, l.prototype.fixed32 = function(e) { return this._push(h, 4, e >>> 0) }, l.prototype.sfixed32 = l.prototype.fixed32, l.prototype.fixed64 = function(e) { var t = o.from(e); return this._push(h, 4, t.lo)._push(h, 4, t.hi) }, l.prototype.sfixed64 = l.prototype.fixed64, l.prototype.float = function(e) { return this._push(i.float.writeFloatLE, 4, e) }, l.prototype.double = function(e) { return this._push(i.float.writeDoubleLE, 8, e) };
            var v = i.Array.prototype.set ? function(e, t, n) { t.set(e, n) } : function(e, t, n) { for (var r = 0; r < e.length; ++r) t[n + r] = e[r] };
            l.prototype.bytes = function(e) {
              var t = e.length >>> 0;
              if (!t) return this._push(f, 1, 0);
              if (i.isString(e)) {
                var n = l.alloc(t = a.length(e));
                a.decode(e, n, 0), e = n
              }
              return this.uint32(t)._push(v, t, e)
            }, l.prototype.string = function(e) { var t = s.length(e); return t ? this.uint32(t)._push(s.write, t, e) : this._push(f, 1, 0) }, l.prototype.fork = function() { return this.states = new u(this), this.head = this.tail = new c(d, 0, 0), this.len = 0, this }, l.prototype.reset = function() { return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(d, 0, 0), this.len = 0), this }, l.prototype.ldelim = function() {
              var e = this.head,
                t = this.tail,
                n = this.len;
              return this.reset().uint32(n), n && (this.tail.next = e.next, this.tail = t, this.len += n), this
            }, l.prototype.finish = function() { for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;) e.fn(e.val, t, n), n += e.len, e = e.next; return t }, l._configure = function(e) { r = e, l.create = p(), r._configure() }
          }, { 35: 35 }],
          39: [function(e, t, n) {
            t.exports = o;
            var r = e(38);
            (o.prototype = Object.create(r.prototype)).constructor = o;
            var i = e(35);

            function o() { r.call(this) }

            function a(e, t, n) { e.length < 40 ? i.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n) }
            o._configure = function() {
              o.alloc = i._Buffer_allocUnsafe, o.writeBytesBuffer = i.Buffer && i.Buffer.prototype instanceof Uint8Array && "set" === i.Buffer.prototype.set.name ? function(e, t, n) { t.set(e, n) } : function(e, t, n) {
                if (e.copy) e.copy(t, n, 0, e.length);
                else
                  for (var r = 0; r < e.length;) t[n++] = e[r++]
              }
            }, o.prototype.bytes = function(e) { i.isString(e) && (e = i._Buffer_from(e, "base64")); var t = e.length >>> 0; return this.uint32(t), t && this._push(o.writeBytesBuffer, t, e), this }, o.prototype.string = function(e) { var t = i.Buffer.byteLength(e); return this.uint32(t), t && this._push(a, t, e), this }, o._configure()
          }, { 35: 35, 38: 38 }]
        }, {}, [16])
      }()
    }).call(this, __webpack_require__(57), __webpack_require__(58)(module))
  }, function(e, t) {
    var n;
    n = function() { return this }();
    try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
    e.exports = n
  }, function(e, t) { e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e } }, function(e, t) {
    e.exports = r;
    var n = null;
    try { n = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports } catch (e) {}

    function r(e, t, n) { this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n }

    function i(e) { return !0 === (e && e.__isLong__) }
    r.prototype.__isLong__, Object.defineProperty(r.prototype, "__isLong__", { value: !0 }), r.isLong = i;
    var o = {},
      a = {};

    function s(e, t) { var n, r, i; return t ? (i = 0 <= (e >>>= 0) && e < 256) && (r = a[e]) ? r : (n = d(e, (0 | e) < 0 ? -1 : 0, !0), i && (a[e] = n), n) : (i = -128 <= (e |= 0) && e < 128) && (r = o[e]) ? r : (n = d(e, e < 0 ? -1 : 0, !1), i && (o[e] = n), n) }

    function c(e, t) { if (isNaN(e)) return t ? E : v; if (t) { if (e < 0) return E; if (e >= g) return T } else { if (e <= -m) return I; if (e + 1 >= m) return R } return e < 0 ? c(-e, t).neg() : d(e % f | 0, e / f | 0, t) }

    function d(e, t, n) { return new r(e, t, n) }
    r.fromInt = s, r.fromNumber = c, r.fromBits = d;
    var u = Math.pow;

    function l(e, t, n) {
      if (0 === e.length) throw Error("empty string");
      if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return v;
      if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
      var r;
      if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
      if (0 === r) return l(e.substring(1), t, n).neg();
      for (var i = c(u(n, 8)), o = v, a = 0; a < e.length; a += 8) {
        var s = Math.min(8, e.length - a),
          d = parseInt(e.substring(a, a + s), n);
        if (s < 8) {
          var p = c(u(n, s));
          o = o.mul(p).add(c(d))
        } else o = (o = o.mul(i)).add(c(d))
      }
      return o.unsigned = t, o
    }

    function p(e, t) { return "number" == typeof e ? c(e, t) : "string" == typeof e ? l(e, t) : d(e.low, e.high, "boolean" == typeof t ? t : e.unsigned) }
    r.fromString = l, r.fromValue = p;
    var f = 4294967296,
      g = f * f,
      m = g / 2,
      h = s(1 << 24),
      v = s(0);
    r.ZERO = v;
    var E = s(0, !0);
    r.UZERO = E;
    var _ = s(1);
    r.ONE = _;
    var S = s(1, !0);
    r.UONE = S;
    var y = s(-1);
    r.NEG_ONE = y;
    var R = d(-1, 2147483647, !1);
    r.MAX_VALUE = R;
    var T = d(-1, -1, !0);
    r.MAX_UNSIGNED_VALUE = T;
    var I = d(0, -2147483648, !1);
    r.MIN_VALUE = I;
    var A = r.prototype;
    A.toInt = function() { return this.unsigned ? this.low >>> 0 : this.low }, A.toNumber = function() { return this.unsigned ? (this.high >>> 0) * f + (this.low >>> 0) : this.high * f + (this.low >>> 0) }, A.toString = function(e) {
      if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
      if (this.isZero()) return "0";
      if (this.isNegative()) {
        if (this.eq(I)) {
          var t = c(e),
            n = this.div(t),
            r = n.mul(t).sub(this);
          return n.toString(e) + r.toInt().toString(e)
        }
        return "-" + this.neg().toString(e)
      }
      for (var i = c(u(e, 6), this.unsigned), o = this, a = "";;) {
        var s = o.div(i),
          d = (o.sub(s.mul(i)).toInt() >>> 0).toString(e);
        if ((o = s).isZero()) return d + a;
        for (; d.length < 6;) d = "0" + d;
        a = "" + d + a
      }
    }, A.getHighBits = function() { return this.high }, A.getHighBitsUnsigned = function() { return this.high >>> 0 }, A.getLowBits = function() { return this.low }, A.getLowBitsUnsigned = function() { return this.low >>> 0 }, A.getNumBitsAbs = function() { if (this.isNegative()) return this.eq(I) ? 64 : this.neg().getNumBitsAbs(); for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--); return 0 != this.high ? t + 33 : t + 1 }, A.isZero = function() { return 0 === this.high && 0 === this.low }, A.eqz = A.isZero, A.isNegative = function() { return !this.unsigned && this.high < 0 }, A.isPositive = function() { return this.unsigned || this.high >= 0 }, A.isOdd = function() { return 1 == (1 & this.low) }, A.isEven = function() { return 0 == (1 & this.low) }, A.equals = function(e) { return i(e) || (e = p(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low) }, A.eq = A.equals, A.notEquals = function(e) { return !this.eq(e) }, A.neq = A.notEquals, A.ne = A.notEquals, A.lessThan = function(e) { return this.comp(e) < 0 }, A.lt = A.lessThan, A.lessThanOrEqual = function(e) { return this.comp(e) <= 0 }, A.lte = A.lessThanOrEqual, A.le = A.lessThanOrEqual, A.greaterThan = function(e) { return this.comp(e) > 0 }, A.gt = A.greaterThan, A.greaterThanOrEqual = function(e) { return this.comp(e) >= 0 }, A.gte = A.greaterThanOrEqual, A.ge = A.greaterThanOrEqual, A.compare = function(e) {
      if (i(e) || (e = p(e)), this.eq(e)) return 0;
      var t = this.isNegative(),
        n = e.isNegative();
      return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
    }, A.comp = A.compare, A.negate = function() { return !this.unsigned && this.eq(I) ? I : this.not().add(_) }, A.neg = A.negate, A.add = function(e) {
      i(e) || (e = p(e));
      var t = this.high >>> 16,
        n = 65535 & this.high,
        r = this.low >>> 16,
        o = 65535 & this.low,
        a = e.high >>> 16,
        s = 65535 & e.high,
        c = e.low >>> 16,
        u = 0,
        l = 0,
        f = 0,
        g = 0;
      return f += (g += o + (65535 & e.low)) >>> 16, l += (f += r + c) >>> 16, u += (l += n + s) >>> 16, u += t + a, d((f &= 65535) << 16 | (g &= 65535), (u &= 65535) << 16 | (l &= 65535), this.unsigned)
    }, A.subtract = function(e) { return i(e) || (e = p(e)), this.add(e.neg()) }, A.sub = A.subtract, A.multiply = function(e) {
      if (this.isZero()) return v;
      if (i(e) || (e = p(e)), n) return d(n.mul(this.low, this.high, e.low, e.high), n.get_high(), this.unsigned);
      if (e.isZero()) return v;
      if (this.eq(I)) return e.isOdd() ? I : v;
      if (e.eq(I)) return this.isOdd() ? I : v;
      if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
      if (e.isNegative()) return this.mul(e.neg()).neg();
      if (this.lt(h) && e.lt(h)) return c(this.toNumber() * e.toNumber(), this.unsigned);
      var t = this.high >>> 16,
        r = 65535 & this.high,
        o = this.low >>> 16,
        a = 65535 & this.low,
        s = e.high >>> 16,
        u = 65535 & e.high,
        l = e.low >>> 16,
        f = 65535 & e.low,
        g = 0,
        m = 0,
        E = 0,
        _ = 0;
      return E += (_ += a * f) >>> 16, m += (E += o * f) >>> 16, E &= 65535, m += (E += a * l) >>> 16, g += (m += r * f) >>> 16, m &= 65535, g += (m += o * l) >>> 16, m &= 65535, g += (m += a * u) >>> 16, g += t * f + r * l + o * u + a * s, d((E &= 65535) << 16 | (_ &= 65535), (g &= 65535) << 16 | (m &= 65535), this.unsigned)
    }, A.mul = A.multiply, A.divide = function(e) {
      if (i(e) || (e = p(e)), e.isZero()) throw Error("division by zero");
      var t, r, o;
      if (n) return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? d((this.unsigned ? n.div_u : n.div_s)(this.low, this.high, e.low, e.high), n.get_high(), this.unsigned) : this;
      if (this.isZero()) return this.unsigned ? E : v;
      if (this.unsigned) {
        if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return E;
        if (e.gt(this.shru(1))) return S;
        o = E
      } else {
        if (this.eq(I)) return e.eq(_) || e.eq(y) ? I : e.eq(I) ? _ : (t = this.shr(1).div(e).shl(1)).eq(v) ? e.isNegative() ? _ : y : (r = this.sub(e.mul(t)), o = t.add(r.div(e)));
        if (e.eq(I)) return this.unsigned ? E : v;
        if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
        if (e.isNegative()) return this.div(e.neg()).neg();
        o = v
      }
      for (r = this; r.gte(e);) {
        t = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
        for (var a = Math.ceil(Math.log(t) / Math.LN2), s = a <= 48 ? 1 : u(2, a - 48), l = c(t), f = l.mul(e); f.isNegative() || f.gt(r);) f = (l = c(t -= s, this.unsigned)).mul(e);
        l.isZero() && (l = _), o = o.add(l), r = r.sub(f)
      }
      return o
    }, A.div = A.divide, A.modulo = function(e) { return i(e) || (e = p(e)), n ? d((this.unsigned ? n.rem_u : n.rem_s)(this.low, this.high, e.low, e.high), n.get_high(), this.unsigned) : this.sub(this.div(e).mul(e)) }, A.mod = A.modulo, A.rem = A.modulo, A.not = function() { return d(~this.low, ~this.high, this.unsigned) }, A.and = function(e) { return i(e) || (e = p(e)), d(this.low & e.low, this.high & e.high, this.unsigned) }, A.or = function(e) { return i(e) || (e = p(e)), d(this.low | e.low, this.high | e.high, this.unsigned) }, A.xor = function(e) { return i(e) || (e = p(e)), d(this.low ^ e.low, this.high ^ e.high, this.unsigned) }, A.shiftLeft = function(e) { return i(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? d(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : d(0, this.low << e - 32, this.unsigned) }, A.shl = A.shiftLeft, A.shiftRight = function(e) { return i(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? d(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : d(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned) }, A.shr = A.shiftRight, A.shiftRightUnsigned = function(e) { if (i(e) && (e = e.toInt()), 0 === (e &= 63)) return this; var t = this.high; return e < 32 ? d(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : d(32 === e ? t : t >>> e - 32, 0, this.unsigned) }, A.shru = A.shiftRightUnsigned, A.shr_u = A.shiftRightUnsigned, A.toSigned = function() { return this.unsigned ? d(this.low, this.high, !1) : this }, A.toUnsigned = function() { return this.unsigned ? this : d(this.low, this.high, !0) }, A.toBytes = function(e) { return e ? this.toBytesLE() : this.toBytesBE() }, A.toBytesLE = function() {
      var e = this.high,
        t = this.low;
      return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
    }, A.toBytesBE = function() {
      var e = this.high,
        t = this.low;
      return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
    }, r.fromBytes = function(e, t, n) { return n ? r.fromBytesLE(e, t) : r.fromBytesBE(e, t) }, r.fromBytesLE = function(e, t) { return new r(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t) }, r.fromBytesBE = function(e, t) { return new r(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t) }
  }, function(e) { e.exports = JSON.parse('{"PeerPublishStatus":408,"JoinChannelTimeout":407,"OnUpdateStream":356,"OnRemoveStream":355,"OnAddVideoStream":353,"OnAddAudioStream":352,"FirstAudioDecode":351,"FirstVideoDecode":350,"FirstAudioReceived":349,"FirstVideoReceived":348,"ReqUserAccount":196,"ApiInvoke":41,"RequestProxyWorkerManager":36,"RequestProxyAppCenter":35,"VideoSendingStopped":34,"AudioSendingStopped":33,"StreamSwitch":32,"FirstFrame":31,"Publish":30,"Subscribe":29,"JoinGateway":28,"JoinChooseServer":27,"Session":26,"APWorkerEvent":160,"WorkerEvent":156}') }, function(e) { e.exports = JSON.parse('{"nested":{"protobuf":{"nested":{"Session":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"eventType":{"type":"string","id":10},"version":{"type":"string","id":11},"browser":{"type":"string","id":12},"appid":{"type":"string","id":13},"mode":{"type":"string","id":14},"extend":{"type":"string","id":15},"process":{"type":"string","id":16},"build":{"type":"string","id":17},"ipv6":{"type":"string","id":18},"sourceHost":{"type":"string","id":19},"sourcePath":{"type":"string","id":20},"collectorHost":{"type":"string","id":21},"collectorName":{"type":"string","id":22}}},"JoinChooseServer":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"eventType":{"type":"string","id":10},"chooseServerAddr":{"type":"string","id":11},"chooseServerAddrList":{"type":"string","id":12},"errorCode":{"type":"string","id":13},"eventElapse":{"type":"int64","id":14}}},"JoinGateway":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"eventType":{"type":"string","id":10},"gatewayAddr":{"type":"string","id":11},"errorCode":{"type":"string","id":12},"eventElapse":{"type":"int64","id":13},"firstSuccess":{"type":"bool","id":14}}},"Subscribe":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"eventType":{"type":"string","id":10},"localSdp":{"type":"string","id":11},"remoteSdp":{"type":"string","id":12},"extend":{"type":"string","id":13},"errorCode":{"type":"string","id":14},"eventElapse":{"type":"int64","id":15},"video":{"type":"bool","id":16},"audio":{"type":"bool","id":17},"subscribeRequestid":{"type":"int32","id":18},"p2pid":{"type":"int32","id":19}}},"Publish":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"eventType":{"type":"string","id":10},"localSdp":{"type":"string","id":11},"remoteSdp":{"type":"string","id":12},"extend":{"type":"string","id":13},"errorCode":{"type":"string","id":14},"eventElapse":{"type":"int64","id":15},"videoName":{"type":"string","id":16},"audioName":{"type":"string","id":17},"screenName":{"type":"string","id":18},"video":{"type":"bool","id":19},"audio":{"type":"bool","id":20},"publishRequestid":{"type":"int32","id":21},"p2pid":{"type":"int32","id":22},"screenshare":{"type":"bool","id":23}}},"FirstFrame":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"eventType":{"type":"string","id":10},"extend":{"type":"string","id":11},"errorCode":{"type":"string","id":12},"width":{"type":"int64","id":13},"height":{"type":"int64","id":14}}},"StreamSwitch":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"eventType":{"type":"string","id":10},"isDual":{"type":"bool","id":11}}},"AudioSendingStopped":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"reason":{"type":"string","id":10},"eventType":{"type":"string","id":11}}},"VideoSendingStopped":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"reason":{"type":"string","id":10},"eventType":{"type":"string","id":11}}},"RequestProxyAppCenter":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"eventType":{"type":"string","id":10},"APAddr":{"type":"string","id":11},"workerManagerList":{"type":"string","id":12},"errorCode":{"type":"string","id":13},"eventElapse":{"type":"int64","id":14},"extend":{"type":"string","id":15},"response":{"type":"string","id":16}}},"RequestProxyWorkerManager":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"eventType":{"type":"string","id":10},"workerManagerAddr":{"type":"string","id":11},"errorCode":{"type":"string","id":12},"eventElapse":{"type":"int64","id":13},"extend":{"type":"string","id":14},"response":{"type":"string","id":15}}},"ApiInvoke":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"apiName":{"type":"string","id":9},"errorCode":{"type":"string","id":10},"options":{"type":"string","id":11},"execElapse":{"type":"int64","id":12},"execStates":{"type":"string","id":13},"execResult":{"type":"string","id":14},"invokeId":{"type":"int64","id":15}}},"ReqUserAccount":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"eventType":{"type":"string","id":9},"serverAddress":{"type":"string","id":10},"stringUid":{"type":"string","id":11},"errorCode":{"type":"string","id":12},"extend":{"type":"string","id":13}}},"FirstVideoReceived":{"fields":{"lts":{"type":"int64","id":1},"peer":{"type":"int64","id":2},"elapse":{"type":"int64","id":3},"sid":{"type":"string","id":4},"cname":{"type":"string","id":5},"cid":{"type":"int64","id":6},"uid":{"type":"int64","id":8},"subscribeRequestid":{"type":"int32","id":9},"p2pid":{"type":"int32","id":10},"subscribeElapse":{"type":"int64","id":11}}},"FirstAudioReceived":{"fields":{"lts":{"type":"int64","id":1},"sid":{"type":"string","id":2},"cname":{"type":"string","id":3},"cid":{"type":"int64","id":4},"uid":{"type":"int64","id":6},"peer":{"type":"int64","id":7},"elapse":{"type":"int64","id":8},"subscribeRequestid":{"type":"int32","id":9},"p2pid":{"type":"int32","id":10},"subscribeElapse":{"type":"int64","id":11}}},"FirstVideoDecode":{"fields":{"lts":{"type":"int64","id":1},"sid":{"type":"string","id":2},"cname":{"type":"string","id":3},"cid":{"type":"int64","id":4},"uid":{"type":"int64","id":6},"peer":{"type":"int64","id":7},"elapse":{"type":"int64","id":8},"videowidth":{"type":"int32","id":9},"videoheight":{"type":"int32","id":10},"subscribeRequestid":{"type":"int32","id":11},"p2pid":{"type":"int32","id":12},"subscribeElapse":{"type":"int64","id":13}}},"FirstAudioDecode":{"fields":{"lts":{"type":"int64","id":1},"sid":{"type":"string","id":2},"cname":{"type":"string","id":3},"cid":{"type":"int64","id":4},"uid":{"type":"int64","id":6},"peer":{"type":"int64","id":7},"elapse":{"type":"int64","id":8},"subscribeRequestid":{"type":"int32","id":9},"p2pid":{"type":"int32","id":10},"subscribeElapse":{"type":"int64","id":11}}},"OnAddAudioStream":{"fields":{"lts":{"type":"int64","id":1},"sid":{"type":"string","id":2},"cname":{"type":"string","id":3},"cid":{"type":"int64","id":4},"uid":{"type":"int64","id":6},"peer":{"type":"int64","id":7}}},"OnAddVideoStream":{"fields":{"lts":{"type":"int64","id":1},"sid":{"type":"string","id":2},"cname":{"type":"string","id":3},"cid":{"type":"int64","id":4},"uid":{"type":"int64","id":6},"peer":{"type":"int64","id":7}}},"OnRemoveStream":{"fields":{"lts":{"type":"int64","id":1},"sid":{"type":"string","id":2},"cname":{"type":"string","id":3},"cid":{"type":"int64","id":4},"uid":{"type":"int64","id":6},"peer":{"type":"int64","id":7}}},"OnUpdateStream":{"fields":{"lts":{"type":"int64","id":1},"sid":{"type":"string","id":2},"cname":{"type":"string","id":3},"cid":{"type":"int64","id":4},"uid":{"type":"int64","id":6},"peer":{"type":"int64","id":7},"audio":{"type":"bool","id":8},"video":{"type":"bool","id":9}}},"JoinChannelTimeout":{"fields":{"lts":{"type":"int64","id":1},"sid":{"type":"string","id":2},"cname":{"type":"string","id":3},"cid":{"type":"int64","id":4},"uid":{"type":"int64","id":5},"elapse":{"type":"int64","id":6},"timeout":{"type":"int32","id":7}}},"PeerPublishStatus":{"fields":{"lts":{"type":"int64","id":1},"sid":{"type":"string","id":2},"cname":{"type":"string","id":3},"cid":{"type":"int64","id":4},"uid":{"type":"int64","id":5},"peer":{"type":"int64","id":6},"elapse":{"type":"int64","id":7},"peerPublishDuration":{"type":"int64","id":8},"joinChannelSuccessElapse":{"type":"int64","id":9},"subscribeElapse":{"type":"int64","id":10},"audiotag":{"type":"int32","id":11},"videotag":{"type":"int32","id":12},"screensharetag":{"type":"int32","id":13},"firsttimetag":{"type":"int32","id":14}}},"Message":{"fields":{"id":{"type":"int64","id":1},"msg":{"type":"bytes","id":2}}},"ProtoRaws":{"fields":{"sendTs":{"type":"int64","id":1},"payloads":{"rule":"repeated","type":"Message","id":2}}},"APWorkerEvent":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"ec":{"type":"int32","id":10},"sc":{"type":"int32","id":11},"serverIp":{"type":"string","id":12},"firstSuccess":{"type":"bool","id":13},"responseTime":{"type":"int32","id":14},"serviceName":{"type":"string","id":15},"responseDetail":{"type":"string","id":16}}},"WorkerEvent":{"fields":{"sid":{"type":"string","id":1},"cname":{"type":"string","id":2},"cid":{"type":"int64","id":3},"lts":{"type":"int64","id":4},"ip":{"type":"string","id":5},"uid":{"type":"int64","id":6},"success":{"type":"bool","id":7},"elapse":{"type":"int64","id":8},"peer":{"type":"int64","id":9},"command":{"type":"string","id":10},"actionType":{"type":"string","id":11},"url":{"type":"string","id":12},"payload":{"type":"string","id":13},"serverCode":{"type":"int32","id":14},"code":{"type":"int32","id":15},"traceId":{"type":"string","id":16},"workerType":{"type":"int32","id":17},"responseTime":{"type":"int32","id":18},"requestId":{"type":"int64","id":19},"packIndex":{"type":"int32","id":20},"requestByUser":{"type":"bool","id":21},"tid":{"type":"string","id":22}}}}}}}') }, function(e, t, n) {
    var r = function(e) {
      "use strict";
      var t = Object.prototype,
        n = t.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        i = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        a = r.toStringTag || "@@toStringTag";

      function s(e, t, n, r) {
        var i = t && t.prototype instanceof u ? t : u,
          o = Object.create(i.prototype),
          a = new R(r || []);
        return o._invoke = function(e, t, n) {
          var r = "suspendedStart";
          return function(i, o) {
            if ("executing" === r) throw new Error("Generator is already running");
            if ("completed" === r) { if ("throw" === i) throw o; return I() }
            for (n.method = i, n.arg = o;;) {
              var a = n.delegate;
              if (a) { var s = _(a, n); if (s) { if (s === d) continue; return s } }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw r = "completed", n.arg;
                n.dispatchException(n.arg)
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = c(e, t, n);
              if ("normal" === u.type) { if (r = n.done ? "completed" : "suspendedYield", u.arg === d) continue; return { value: u.arg, done: n.done } }
              "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
            }
          }
        }(e, n, a), o
      }

      function c(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (e) { return { type: "throw", arg: e } } }
      e.wrap = s;
      var d = {};

      function u() {}

      function l() {}

      function p() {}
      var f = {};
      f[i] = function() { return this };
      var g = Object.getPrototypeOf,
        m = g && g(g(T([])));
      m && m !== t && n.call(m, i) && (f = m);
      var h = p.prototype = u.prototype = Object.create(f);

      function v(e) {
        ["next", "throw", "return"].forEach((function(t) { e[t] = function(e) { return this._invoke(t, e) } }))
      }

      function E(e, t) {
        var r;
        this._invoke = function(i, o) {
          function a() {
            return new t((function(r, a) {
              ! function r(i, o, a, s) {
                var d = c(e[i], e, o);
                if ("throw" !== d.type) {
                  var u = d.arg,
                    l = u.value;
                  return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) { r("next", e, a, s) }), (function(e) { r("throw", e, a, s) })) : t.resolve(l).then((function(e) { u.value = e, a(u) }), (function(e) { return r("throw", e, a, s) }))
                }
                s(d.arg)
              }(i, o, r, a)
            }))
          }
          return r = r ? r.then(a, a) : a()
        }
      }

      function _(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (t.delegate = null, "throw" === t.method) {
            if (e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method)) return d;
            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return d
        }
        var r = c(n, e.iterator, t.arg);
        if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, d;
        var i = r.arg;
        return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
      }

      function S(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
      }

      function y(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
      }

      function R(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(S, this), this.reset(!0) }

      function T(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length;)
                  if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                return t.value = void 0, t.done = !0, t
              };
            return o.next = o
          }
        }
        return { next: I }
      }

      function I() { return { value: void 0, done: !0 } }
      return l.prototype = h.constructor = p, p.constructor = l, p[a] = l.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === l || "GeneratorFunction" === (t.displayName || t.name)) }, e.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, a in e || (e[a] = "GeneratorFunction")), e.prototype = Object.create(h), e }, e.awrap = function(e) { return { __await: e } }, v(E.prototype), E.prototype[o] = function() { return this }, e.AsyncIterator = E, e.async = function(t, n, r, i, o) { void 0 === o && (o = Promise); var a = new E(s(t, n, r, i), o); return e.isGeneratorFunction(n) ? a : a.next().then((function(e) { return e.done ? e.value : a.next() })) }, v(h), h[a] = "Generator", h[i] = function() { return this }, h.toString = function() { return "[object Generator]" }, e.keys = function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t.reverse(),
          function n() { for (; t.length;) { var r = t.pop(); if (r in e) return n.value = r, n.done = !1, n } return n.done = !0, n }
      }, e.values = T, R.prototype = {
        constructor: R,
        reset: function(e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(y), !e)
            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
        },
        stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval },
        dispatchException: function(e) {
          if (this.done) throw e;
          var t = this;

          function r(n, r) { return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var o = this.tryEntries[i],
              a = o.completion;
            if ("root" === o.tryLoc) return r("end");
            if (o.tryLoc <= this.prev) {
              var s = n.call(o, "catchLoc"),
                c = n.call(o, "finallyLoc");
              if (s && c) { if (this.prev < o.catchLoc) return r(o.catchLoc, !0); if (this.prev < o.finallyLoc) return r(o.finallyLoc) } else if (s) { if (this.prev < o.catchLoc) return r(o.catchLoc, !0) } else { if (!c) throw new Error("try statement without catch or finally"); if (this.prev < o.finallyLoc) return r(o.finallyLoc) }
            }
          }
        },
        abrupt: function(e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) { var i = this.tryEntries[r]; if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) { var o = i; break } }
          o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
          var a = o ? o.completion : {};
          return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(a)
        },
        complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d },
        finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), y(n), d } },
        catch: function(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ("throw" === r.type) {
                var i = r.arg;
                y(n)
              }
              return i
            }
          }
          throw new Error("illegal catch attempt")
        },
        delegateYield: function(e, t, n) { return this.delegate = { iterator: T(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = void 0), d }
      }, e
    }(e.exports);
    try { regeneratorRuntime = r } catch (e) { Function("r", "regeneratorRuntime = r")(r) }
  }, function(e, t) { e.exports = function(e) { if (Array.isArray(e)) return e } }, function(e, t) {
    e.exports = function(e, t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try { for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } }
        return n
      }
    }
  }, function(e, t) { e.exports = function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = "object" == typeof window && window.RTCPeerConnection,
      i = "object" == typeof window && window.webkitRTCPeerConnection,
      o = "object" == typeof window && window.mozRTCPeerConnection;
    t.createRTCPeerConnection = function(e) { var t = r || i || o; return t ? new t(e) : null }
  }, function(e, t, n) {
    var r;
    /*!
     * EventEmitter v5.2.9 - git.io/ee
     * Unlicense - http://unlicense.org/
     * Oliver Caldwell - https://oli.me.uk/
     * @preserve
     */
    ! function(t) {
      "use strict";

      function i() {}
      var o = i.prototype,
        a = t.EventEmitter;

      function s(e, t) {
        for (var n = e.length; n--;)
          if (e[n].listener === t) return n;
        return -1
      }

      function c(e) { return function() { return this[e].apply(this, arguments) } }
      o.getListeners = function(e) {
        var t, n, r = this._getEvents();
        if (e instanceof RegExp)
          for (n in t = {}, r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
        else t = r[e] || (r[e] = []);
        return t
      }, o.flattenListeners = function(e) { var t, n = []; for (t = 0; t < e.length; t += 1) n.push(e[t].listener); return n }, o.getListenersAsObject = function(e) { var t, n = this.getListeners(e); return n instanceof Array && ((t = {})[e] = n), t || n }, o.addListener = function(e, t) {
        if (! function e(t) { return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && e(t.listener) }(t)) throw new TypeError("listener must be a function");
        var n, r = this.getListenersAsObject(e),
          i = "object" == typeof t;
        for (n in r) r.hasOwnProperty(n) && -1 === s(r[n], t) && r[n].push(i ? t : { listener: t, once: !1 });
        return this
      }, o.on = c("addListener"), o.addOnceListener = function(e, t) { return this.addListener(e, { listener: t, once: !0 }) }, o.once = c("addOnceListener"), o.defineEvent = function(e) { return this.getListeners(e), this }, o.defineEvents = function(e) { for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]); return this }, o.removeListener = function(e, t) { var n, r, i = this.getListenersAsObject(e); for (r in i) i.hasOwnProperty(r) && -1 !== (n = s(i[r], t)) && i[r].splice(n, 1); return this }, o.off = c("removeListener"), o.addListeners = function(e, t) { return this.manipulateListeners(!1, e, t) }, o.removeListeners = function(e, t) { return this.manipulateListeners(!0, e, t) }, o.manipulateListeners = function(e, t, n) {
        var r, i, o = e ? this.removeListener : this.addListener,
          a = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
          for (r = n.length; r--;) o.call(this, t, n[r]);
        else
          for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
        return this
      }, o.removeEvent = function(e) {
        var t, n = typeof e,
          r = this._getEvents();
        if ("string" === n) delete r[e];
        else if (e instanceof RegExp)
          for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
        else delete this._events;
        return this
      }, o.removeAllListeners = c("removeEvent"), o.emitEvent = function(e, t) {
        var n, r, i, o, a = this.getListenersAsObject(e);
        for (o in a)
          if (a.hasOwnProperty(o))
            for (n = a[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(e, r.listener), r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
        return this
      }, o.trigger = c("emitEvent"), o.emit = function(e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, o.setOnceReturnValue = function(e) { return this._onceReturnValue = e, this }, o._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, o._getEvents = function() { return this._events || (this._events = {}) }, i.noConflict = function() { return t.EventEmitter = a, i }, void 0 === (r = function() { return i }.call(t, n, t, e)) || (e.exports = r)
    }("undefined" != typeof window ? window : this || {})
  }, function(e, t, n) {
    var r = n(32);
    e.exports = function(e) { if (Array.isArray(e)) return r(e) }
  }, function(e, t) { e.exports = function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) } }, function(e, t) { e.exports = function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } }, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }).apply(this, arguments)
      },
      i = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function a(e) { try { c(r.next(e)) } catch (e) { o(e) } }

          function s(e) { try { c(r.throw(e)) } catch (e) { o(e) } }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      o = this && this.__generator || function(e, t) {
        var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
        return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

        function s(o) {
          return function(s) {
            return function(o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { a = 0; continue }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break }
                    if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break }
                    if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                o = t.call(e, a)
              } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 }
            }([o, s])
          }
        }
      },
      a = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = n(72),
      c = n(26),
      d = n(91),
      u = n(20),
      l = n(23),
      p = n(34),
      f = a(n(0)),
      g = a(n(35)),
      m = function() {
        function e(e) { this.retryTimeout = 1e4, this.streamingTasks = new Map, this.isStartingStreamingTask = !1, this.taskMutex = new d.PromiseMutex, this.cancelToken = g.default.CancelToken.source(), this.injectConfig = r({}, c.DEFAULT_INJECT_CONFIG), this.injectLoopTimes = 0, this.lastTaskId = 1, this.statusError = new Map, this.spec = e }
        return Object.defineProperty(e.prototype, "isNeedReset", {
          get: function() {
            for (var e = this, t = 0, n = Array.from(this.streamingTasks.values()); t < n.length; t++) {
              var r = n[t];
              if (r.mode === c.LiveStreamingServiceMode.INJECT) return !0;
              if (r.mode === c.LiveStreamingServiceMode.TRANSCODE)
                if ((this.transcodingConfig && (this.transcodingConfig.userConfigs || this.transcodingConfig.transcodingUsers) || []).find((function(t) { return t.uid === e.spec.uid }))) return !0
            }
            return !1
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.setTranscodingConfig = function(e) {
          return i(this, void 0, void 0, (function() {
            var t, n, i, a, s, d = this;
            return o(this, (function(o) {
              switch (o.label) {
                case 0:
                  (t = r(r({}, c.DEFAULT_TRANSCODING_CONFIG), e)).transcodingUsers || (t.transcodingUsers = t.userConfigs), 66 !== t.videoCodecProfile && 77 !== t.videoCodecProfile && 100 !== t.videoCodecProfile && (f.default.debug("[" + this.spec.clientId + "] set transcoding config, fix video codec profile: " + t.videoCodecProfile + " -> 100"), t.videoCodecProfile = 100), t.transcodingUsers && (t.transcodingUsers = t.transcodingUsers.map((function(e) { return r(r(r({}, c.DEFAULT_LIVE_STREAMING_TRANSCODING_USER), e), { zOrder: e.zOrder ? e.zOrder + 1 : 1 }) }))), t.images && (t.images = t.images.map((function(e) { return r(r({}, c.DEFAULT_LIVE_STREAMING_TRANSCODING_WATERMARK), e) })));
                  try { c.isLiveStreamingTranscodingConfig(t) } catch (e) { throw e }
                  return t.transcodingUsers && (t.userConfigs = t.transcodingUsers.map((function(e) { return r({}, e) })), t.userCount = t.transcodingUsers.length, delete t.transcodingUsers), n = (t.userConfigs || []).map((function(e) { return "number" == typeof e.uid ? Promise.resolve(e.uid) : u.getUserAccount(d.spec, null, e.uid) })), [4, this.taskMutex.lock()];
                case 1:
                  return i = o.sent(), [4, Promise.all(n)];
                case 2:
                  if (o.sent().forEach((function(e, n) { t.userConfigs && t.userConfigs[n] && (t.userConfigs[n].uid = e && e.uid || e) })), this.transcodingConfig = t, !this.connection) return i(), [2];
                  o.label = 3;
                case 3:
                  return o.trys.push([3, 5, , 6]), [4, this.connection.request("request", { clientRequest: { command: "UpdateTranscoding", transcodingConfig: this.transcodingConfig } }, !1, { command: "UpdateTranscoding", workerType: 1, requestByUser: !0, tid: Array.from(this.streamingTasks.values()).map((function(e) { return e.taskId })).join("#") })];
                case 4:
                  return a = o.sent(), i(), f.default.debug("[" + this.spec.clientId + "] update live transcoding config success, code: " + a.code + ", config:", JSON.stringify(this.transcodingConfig)), [3, 6];
                case 5:
                  if (s = o.sent(), i(), !s.data || !s.data.retry) throw s;
                  return s.data.changeAddress && this.connection.tryNextAddress(), this.streamingTasks.forEach((function(e) { f.default.warning("[" + d.spec.clientId + "] live streaming receive error", s.toString(), "try to republish", e.url), d.startLiveStreamingTask(e.url, e.mode, s).then((function() { f.default.debug("[" + d.spec.clientId + "] live streaming republish " + e.url + " success") })).catch((function(t) { f.default.error("[" + d.spec.clientId + "] live streaming republish failed", e.url, t.toString()), d.onLiveStreamError && d.onLiveStreamError(e.url, t) })) })), [3, 6];
                case 6:
                  return [2]
              }
            }))
          }))
        }, e.prototype.setInjectStreamConfig = function(e, t) { this.injectConfig = Object.assign({}, this.injectConfig, e), this.injectLoopTimes = t }, e.prototype.startLiveStreamingTask = function(e, t, n) {
          return i(this, void 0, void 0, (function() {
            var i, a, s, d, u, g, m, h, v = this;
            return o(this, (function(o) {
              switch (o.label) {
                case 0:
                  if (Array.from(this.streamingTasks.values()).find((function(e) { return e.mode === c.LiveStreamingServiceMode.INJECT })) && t === c.LiveStreamingServiceMode.INJECT) return [2, new l.AgoraRTCError(l.AgoraRTCErrorCode.LIVE_STREAMING_TASK_CONFLICT, "inject stream over limit").throw()];
                  if (!this.transcodingConfig && t === c.LiveStreamingServiceMode.TRANSCODE) throw new l.AgoraRTCError(l.AgoraRTCErrorCode.INVALID_OPERATION, "[LiveStreaming] no transcoding config found, can not start transcoding streaming task");
                  return i = { command: "PublishStream", ts: Date.now(), url: e, uid: this.spec.uid.toString(), autoDestroyTime: 30 }, f.default.debug("[" + this.spec.clientId + "] start live streaming " + e + ", mode: " + t), [4, this.taskMutex.lock()];
                case 1:
                  if (a = o.sent(), !this.connection && n) return a(), [2];
                  if (this.streamingTasks.get(e) && !n) return [2, new l.AgoraRTCError(l.AgoraRTCErrorCode.LIVE_STREAMING_TASK_CONFLICT).throw()];
                  if (!this.transcodingConfig && t === c.LiveStreamingServiceMode.TRANSCODE) throw new l.AgoraRTCError(l.AgoraRTCErrorCode.INVALID_OPERATION, "[LiveStreaming] no transcoding config found, can not start transcoding streaming task");
                  o.label = 2;
                case 2:
                  return o.trys.push([2, 5, , 6]), this.connection ? [3, 4] : (s = this, [4, this.connect(t)]);
                case 3:
                  s.connection = o.sent(), o.label = 4;
                case 4:
                  return [3, 6];
                case 5:
                  throw d = o.sent(), a(), d;
                case 6:
                  switch (t) {
                    case c.LiveStreamingServiceMode.TRANSCODE:
                      i.transcodingConfig = r({}, this.transcodingConfig);
                      break;
                    case c.LiveStreamingServiceMode.RAW:
                      break;
                    case c.LiveStreamingServiceMode.INJECT:
                      i = { cname: this.spec.cname, command: "InjectStream", sid: this.spec.sid, transcodingConfig: this.injectConfig, ts: Date.now(), url: e, loopTimes: this.injectLoopTimes }
                  }
                  this.uapResponse && this.uapResponse.vid && (i.vid = this.uapResponse.vid), this.isStartingStreamingTask = !0, u = this.lastTaskId++, o.label = 7;
                case 7:
                  return o.trys.push([7, 9, , 14]), g = new Promise((function(t, r) { p.wait(v.retryTimeout).then((function() { if (n) return r(n); var t = v.statusError.get(e); return t ? (v.statusError.delete(e), r(t)) : void 0 })) })), [4, Promise.race([this.connection.request("request", { clientRequest: i }, !0, { url: e, command: "PublishStream", workerType: t === c.LiveStreamingServiceMode.TRANSCODE ? 1 : 2, requestByUser: !n, tid: u.toString() }), g])];
                case 8:
                  return m = o.sent(), this.isStartingStreamingTask = !1, f.default.debug("[" + this.spec.clientId + "] live streaming started, code: " + m.code), this.streamingTasks.set(e, { clientRequest: i, mode: t, url: e, taskId: u }), a(), [3, 14];
                case 9:
                  if (h = o.sent(), a(), this.isStartingStreamingTask = !1, !h.data || !h.data.retry || n) throw h;
                  return h.data.changeAddress ? [3, 11] : [4, this.startLiveStreamingTask(e, t, h)];
                case 10:
                  return [2, o.sent()];
                case 11:
                  return this.connection.tryNextAddress(), [4, this.startLiveStreamingTask(e, t, h)];
                case 12:
                  return [2, o.sent()];
                case 13:
                  return [3, 14];
                case 14:
                  return [2]
              }
            }))
          }))
        }, e.prototype.stopLiveStreamingTask = function(e) {
          var t = this;
          return new Promise((function(n, r) {
            var i = t.streamingTasks.get(e);
            if (!i || !t.connection) return new l.AgoraRTCError(l.AgoraRTCErrorCode.UNEXPECTED_ERROR, "can not find streaming task to stop").throw();
            var o = i.mode;
            i.abortTask = function() { f.default.debug("[" + t.spec.clientId + "] stop live streaming success(worker exception)"), t.streamingTasks.delete(e), n() }, t.connection.request("request", { clientRequest: { command: o === c.LiveStreamingServiceMode.INJECT ? "UninjectStream" : "UnpublishStream", url: i.url } }, !1, { url: e, command: "UnPublishStream", workerType: o === c.LiveStreamingServiceMode.TRANSCODE ? 1 : 2, requestByUser: !0, tid: (t.lastTaskId++).toString() }).then((function(r) { f.default.debug("[" + t.spec.clientId + "] stop live streaming success, code: " + r.code), t.streamingTasks.delete(e), n() })).catch(r)
          }))
        }, e.prototype.controlInjectStream = function(e, t, n, r) {
          return i(this, void 0, void 0, (function() {
            var i;
            return o(this, (function(o) {
              switch (o.label) {
                case 0:
                  if (!(i = this.streamingTasks.get(e)) || !this.connection || i.mode !== c.LiveStreamingServiceMode.INJECT) throw new l.AgoraRTCError(l.AgoraRTCErrorCode.INVALID_OPERATION, "can not find inject stream task to control");
                  return [4, this.connection.request("request", { clientRequest: { command: "ControlStream", url: e, control: t, audioVolume: n, position: r } })];
                case 1:
                  return [2, o.sent().serverResponse]
              }
            }))
          }))
        }, e.prototype.resetAllTask = function() {
          var e = this,
            t = Array.from(this.streamingTasks.values());
          this.terminate();
          for (var n = function(t) { r.startLiveStreamingTask(t.url, t.mode).catch((function(n) { e.onLiveStreamError && e.onLiveStreamError(t.url, n) })) }, r = this, i = 0, o = t; i < o.length; i++) { n(o[i]) }
        }, e.prototype.terminate = function() { this.cancelToken && this.cancelToken.cancel(), this.streamingTasks = new Map, this.isStartingStreamingTask = !1, this.statusError = new Map, this.cancelToken = g.default.CancelToken.source(), this.uapResponse = void 0, this.connection && this.connection.close(), this.connection = void 0 }, e.prototype.connect = function(e) {
          return i(this, void 0, void 0, (function() {
            var t, n = this;
            return o(this, (function(r) {
              switch (r.label) {
                case 0:
                  if (this.connection) throw new l.AgoraRTCError(l.AgoraRTCErrorCode.UNEXPECTED_ERROR, "live streaming connection has already connected");
                  return [4, p.getLiveStreamingWorkerMangerResult(e, this.spec, this.cancelToken.token)];
                case 1:
                  return t = r.sent(), this.uapResponse = t, this.connection = new s.AgoraLiveStreamingUapSignal(t.workerToken, this.spec, e), this.connection.on(c.LiveStreamingUapSignalEvents.WARNING, (function(e, t) { return n.onLiveStreamWarning && n.onLiveStreamWarning(t, e) })), this.connection.on(c.LiveStreamingUapSignalEvents.PUBLISH_STREAM_STATUS, (function(e) { return n.handlePublishStreamServer(e) })), this.connection.on(c.LiveStreamingUapSignalEvents.INJECT_STREAM_STATUS, (function(e) { return n.handleInjectStreamServerStatus(e) })), this.connection.on(c.LiveStreamingUapSignalEvents.REQUEST_NEW_ADDRESS, (function(t, r) {
                    if (!n.connection) return r(new l.AgoraRTCError(l.AgoraRTCErrorCode.UNEXPECTED_ERROR, "can not get new live streaming address list"));
                    p.getLiveStreamingWorkerMangerResult(e, n.spec, n.cancelToken.token).then((function(e) { n.uapResponse = e, t(e.addressList) })).catch(r)
                  })), [4, this.connection.init(t.addressList)];
                case 2:
                  return r.sent(), [2, this.connection]
              }
            }))
          }))
        }, e.prototype.handlePublishStreamServer = function(e) {
          var t = this,
            n = e.serverStatus.url,
            r = this.streamingTasks.get(n);
          switch (e.code) {
            case c.LIVE_STREAM_ERROR_CODE.PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN:
            case c.LIVE_STREAM_ERROR_CODE.PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT:
            case c.LIVE_STREAM_ERROR_CODE.PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE:
            case c.LIVE_STREAM_ERROR_CODE.PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH:
              var i = new l.AgoraRTCError(l.AgoraRTCErrorCode.LIVE_STREAMING_CDN_ERROR, "", { code: e.code });
              if (r) return f.default.error(i.toString()), this.onLiveStreamError && this.onLiveStreamError(n, i);
              if (!this.isStartingStreamingTask) return;
              this.statusError.set(n, i);
            case c.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_WORKER_LOST:
            case c.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_WORKER_QUIT:
              if (!this.connection || 0 === this.streamingTasks.size) return;
              this.connection.tryNextAddress();
              for (var o = Array.from(this.streamingTasks.values()), a = function(n) {
                  if (n.abortTask) return n.abortTask(), "continue";
                  f.default.warning("[" + s.spec.clientId + "] publish stream status code", e.code, "try to republish", n.url), s.startLiveStreamingTask(n.url, n.mode, new l.AgoraRTCError(l.AgoraRTCErrorCode.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "", { code: e.code })).then((function() { f.default.debug("[" + t.spec.clientId + "] republish live stream success", n.url) })).catch((function(e) { f.default.error(e.toString()), t.onLiveStreamError && t.onLiveStreamError(n.url, e) }))
                }, s = this, d = 0, u = o; d < u.length; d++) { a(u[d]) }
              return
          }
        }, e.prototype.handleInjectStreamServerStatus = function(e) {
          var t = Number(e.uid),
            n = e.serverStatus && e.serverStatus.url;
          switch (e.code) {
            case 200:
              return void(this.onInjectStatusChange && this.onInjectStatusChange(0, t, n));
            case 451:
              return this.onInjectStatusChange && this.onInjectStatusChange(1, t, n), void this.streamingTasks.delete(n);
            case 453:
              return this.onInjectStatusChange && this.onInjectStatusChange(2, t, n), void this.streamingTasks.delete(n);
            case 470:
              return this.onInjectStatusChange && this.onInjectStatusChange(10, t, n), void this.streamingTasks.delete(n);
            case 499:
              return this.onInjectStatusChange && this.onInjectStatusChange(3, t, n), void this.streamingTasks.delete(n);
            default:
              return void f.default.debug("inject stream server status", e)
          }
        }, e.prototype.haveUrl = function(e) { return this.streamingTasks.has(e) || void 0 }, e
      }();
    t.AgoraRTCLiveStreamingClient = m
  }, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || { __proto__: [] }
          instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
      }, function(e, t) {
        function n() { this.constructor = e }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }),
      o = this && this.__assign || function() {
        return (o = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }).apply(this, arguments)
      },
      a = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function a(e) { try { c(r.next(e)) } catch (e) { o(e) } }

          function s(e) { try { c(r.throw(e)) } catch (e) { o(e) } }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      s = this && this.__generator || function(e, t) {
        var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
        return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

        function s(o) {
          return function(s) {
            return function(o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { a = 0; continue }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break }
                    if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break }
                    if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                o = t.call(e, a)
              } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 }
            }([o, s])
          }
        }
      },
      c = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var d = n(26),
      u = n(73),
      l = n(33),
      p = n(23),
      f = n(3),
      g = c(n(0)),
      m = n(1),
      h = function(e) {
        function t(t, n, r) {
          var i = e.call(this) || this;
          return i.reconnectMode = "retry", i.reqId = 0, i.commandReqId = 0, i.handleWebSocketOpen = function() { i.reconnectMode = "retry", i.startPingPong() }, i.handleWebSocketMessage = function(e) {
            if (e.data) {
              var t = JSON.parse(e.data);
              t.requestId ? i.emit("@" + t.requestId + "-" + t.sid, t) : i.serviceMode === d.LiveStreamingServiceMode.INJECT ? i.emit(d.LiveStreamingUapSignalEvents.INJECT_STREAM_STATUS, t) : (m.report.requestWorkerEvent(i.spec.sid, { actionType: "status", serverCode: t.code, workerType: i.serviceMode === d.LiveStreamingServiceMode.TRANSCODE ? 1 : 2 }), i.emit(d.LiveStreamingUapSignalEvents.PUBLISH_STREAM_STATUS, t))
            }
          }, i.spec = n, i.token = t, i.serviceMode = r, i.websocket = new u.AgoraWebSocketManager("live-streaming"), i.websocket.on(d.WebSocketManagerEvents.CONNECTED, i.handleWebSocketOpen), i.websocket.on(d.WebSocketManagerEvents.ON_MESSAGE, i.handleWebSocketMessage), i.websocket.on(d.WebSocketManagerEvents.REQUEST_NEW_URLS, (function(e, t) { l.emitAsPromise(i, d.LiveStreamingUapSignalEvents.REQUEST_NEW_ADDRESS).then(e).catch(t) })), i.websocket.on(d.WebSocketManagerEvents.RECONNECTING, (function() { i.websocket.reconnectMode = i.reconnectMode })), i
        }
        return i(t, e), t.prototype.init = function(e) { return this.websocket.init(e) }, t.prototype.request = function(e, t, n, r) {
          return a(this, void 0, void 0, (function() {
            var i, a, c, u, l, g, h, v, E, _ = this;
            return s(this, (function(s) {
              switch (s.label) {
                case 0:
                  if (this.reqId += 1, i = this.reqId, "request" === e && (this.commandReqId += 1), a = this.commandReqId, !i || !this.websocket) throw new p.AgoraRTCError(p.AgoraRTCErrorCode.UNEXPECTED_ERROR);
                  if (c = f.VERSION, u = o({ command: e, sdkVersion: c, seq: i, requestId: i, allocate: n, cname: this.spec.cname, appId: this.spec.appId, sid: this.spec.sid, uid: this.spec.uid.toString(), ts: Math.floor(Date.now() / 1e3) }, t), "closed" === this.websocket.state) throw new p.AgoraRTCError(p.AgoraRTCErrorCode.WS_DISCONNECT);
                  return l = function() { return new Promise((function(e, t) { _.websocket.once(d.WebSocketManagerEvents.CLOSED, (function() { return t(new p.AgoraRTCError(p.AgoraRTCErrorCode.WS_ABORT)) })), _.websocket.once(d.WebSocketManagerEvents.CONNECTED, e) })) }, "connected" === this.websocket.state ? [3, 2] : [4, l()];
                case 1:
                  s.sent(), s.label = 2;
                case 2:
                  u.clientRequest && (u.clientRequest.workerToken = this.token), g = new Promise((function(e, t) {
                    var n = function() { t(new p.AgoraRTCError(p.AgoraRTCErrorCode.WS_ABORT)) };
                    _.websocket.once(d.WebSocketManagerEvents.RECONNECTING, n), _.websocket.once(d.WebSocketManagerEvents.CLOSED, n), _.once("@" + i + "-" + _.spec.sid, (function(t) { e(t) }))
                  })), r && m.report.requestWorkerEvent(this.spec.sid, o(o({}, r), { requestId: a, actionType: "request", payload: JSON.stringify(t.clientRequest), serverCode: 0, code: 0 })), h = Date.now(), this.websocket.sendMessage(u), v = null, s.label = 3;
                case 3:
                  return s.trys.push([3, 5, , 8]), [4, g];
                case 4:
                  return v = s.sent(), [3, 8];
                case 5:
                  if (E = s.sent(), "closed" === this.websocket.state) throw E;
                  return [4, l()];
                case 6:
                  return s.sent(), [4, this.request(e, t, n, r)];
                case 7:
                  return [2, s.sent()];
                case 8:
                  return r && m.report.requestWorkerEvent(this.spec.sid, o(o({}, r), { requestId: a, actionType: "response", payload: JSON.stringify(v.serverResponse), serverCode: v.code, success: 200 === v.code, responseTime: Date.now() - h })), 200 !== v.code && this.handleResponseError(v), [2, v]
              }
            }))
          }))
        }, t.prototype.tryNextAddress = function() { this.reconnectMode = "tryNext", this.websocket.reconnect("tryNext") }, t.prototype.close = function() {
          var e = "__VERSION__" === f.VERSION ? "0.0.1" : f.VERSION;
          this.reqId += 1, "connected" === this.websocket.state ? (this.websocket.sendMessage({ command: "request", appId: this.spec.appId, cname: this.spec.cname, uid: this.spec.uid.toString(), sdkVersion: e, sid: this.spec.sid, seq: this.reqId, ts: Math.floor(Date.now() / 1e3), requestId: this.reqId, clientRequest: { command: "DestroyWorker" } }), this.websocket.close(!1, !0)) : this.websocket.close(!1), this.pingpongTimer && (window.clearInterval(this.pingpongTimer), this.pingpongTimer = void 0)
        }, t.prototype.handleResponseError = function(e) {
          switch (e.code) {
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_ALREADY_EXISTS_STREAM:
              return void g.default.warning("live stream response already exists stream");
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_TRANSCODING_PARAMETER_ERROR:
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_BAD_STREAM:
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_WM_PARAMETER_ERROR:
              return new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_INVALID_ARGUMENT, "", { code: e.code }).throw();
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_WM_WORKER_NOT_EXIST:
              if ("UnpublishStream" === e.serverResponse.command || "UninjectStream" === e.serverResponse.command) return;
              throw new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "live stream response wm worker not exist", { retry: !0 });
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_NOT_AUTHORIZED:
              return new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED, "", { code: e.code }).throw();
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_FAILED_LOAD_IMAGE:
              var t = new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE);
              return this.emit(d.LiveStreamingUapSignalEvents.WARNING, t, e.serverResponse.url);
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_REQUEST_TOO_OFTEN:
              t = new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_WARN_FREQUENT_REQUEST);
              return this.emit(d.LiveStreamingUapSignalEvents.WARNING, t, e.serverResponse.url);
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_NOT_FOUND_PUBLISH:
              throw new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "live stream response wm worker not exist", { retry: !0 });
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_NOT_SUPPORTED:
              return new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_TRANSCODING_NOT_SUPPORT, "", { code: e.code }).throw();
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_MAX_STREAM_NUM:
              t = new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT);
              return this.emit(d.LiveStreamingUapSignalEvents.WARNING, t, e.serverResponse.url);
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_INTERNAL_SERVER_ERROR:
              return new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "", { code: e.code }).throw();
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_RESOURCE_LIMIT:
              throw new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "live stream resource limit", { retry: !0, changeAddress: !0 });
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_WORKER_LOST:
            case d.LIVE_STREAM_ERROR_CODE.LIVE_STREAM_RESPONSE_WORKER_QUIT:
              if ("UnpublishStream" === e.serverResponse.command || "UninjectStream" === e.serverResponse.command) return;
              throw new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "error fail send message", { retry: !0, changeAddress: !0 });
            case d.LIVE_STREAM_ERROR_CODE.ERROR_FAIL_SEND_MESSAGE:
              if ("UnpublishStream" === e.serverResponse.command || "UninjectStream" === e.serverResponse.command) return;
              if ("UpdateTranscoding" === e.serverResponse.command || "ControlStream" === e.serverResponse.command) return new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "error fail send message", { code: e.code }).throw();
              throw new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_INTERNAL_SERVER_ERROR, "error fail send message", { retry: !0, changeAddress: !0 });
            case d.LIVE_STREAM_ERROR_CODE.PUBLISH_STREAM_STATUS_ERROR_PUBLISH_BROKEN:
            case d.LIVE_STREAM_ERROR_CODE.PUBLISH_STREAM_STATUS_ERROR_RTMP_CONNECT:
            case d.LIVE_STREAM_ERROR_CODE.PUBLISH_STREAM_STATUS_ERROR_RTMP_HANDSHAKE:
            case d.LIVE_STREAM_ERROR_CODE.PUBLISH_STREAM_STATUS_ERROR_RTMP_PUBLISH:
              return new p.AgoraRTCError(p.AgoraRTCErrorCode.LIVE_STREAMING_CDN_ERROR, "", { code: e.code }).throw()
          }
        }, t.prototype.startPingPong = function() {
          var e = this;
          this.pingpongTimer && window.clearInterval(this.pingpongTimer), this.pingpongTimer = window.setInterval((function() { "connected" === e.websocket.state && e.request("ping", {}).catch((function() {})) }), 6e3)
        }, t
      }(l.EventEmitter);
    t.AgoraLiveStreamingUapSignal = h
  }, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || { __proto__: [] }
          instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
      }, function(e, t) {
        function n() { this.constructor = e }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }),
      o = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))((function(i, o) {
          function a(e) { try { c(r.next(e)) } catch (e) { o(e) } }

          function s(e) { try { c(r.throw(e)) } catch (e) { o(e) } }

          function c(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, s)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      },
      a = this && this.__generator || function(e, t) {
        var n, r, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] };
        return o = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

        function s(o) {
          return function(s) {
            return function(o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a;) try {
                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;
                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) { a = 0; continue }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break }
                    if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break }
                    if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                o = t.call(e, a)
              } catch (e) { o = [6, e], r = 0 } finally { n = i = 0 }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 }
            }([o, s])
          }
        }
      },
      s = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var c = n(23),
      d = n(33),
      u = n(34),
      l = n(26),
      p = s(n(0)),
      f = function(e) {
        function t(t) { var n = e.call(this) || this; return n.connectionID = 0, n.currentURLIndex = 0, n.reconnectMode = "tryNext", n._state = "closed", n.retryConfig = u.DEFAULT_RETRY_CONFIG, n.reconnectCount = 0, n.name = t, n }
        return i(t, e), Object.defineProperty(t.prototype, "url", { get: function() { return this.websocket ? this.websocket.url : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "state", { get: function() { return this._state }, set: function(e) { e !== this._state && (this._state = e, "reconnecting" === this._state ? this.emit(l.WebSocketManagerEvents.RECONNECTING, this.reconnectMode) : "connected" === this._state ? this.emit(l.WebSocketManagerEvents.CONNECTED) : "closed" === this._state ? this.emit(l.WebSocketManagerEvents.CLOSED) : "failed" === this._state && this.emit(l.WebSocketManagerEvents.FAILED)) }, enumerable: !0, configurable: !0 }), t.prototype.init = function(e) {
          var t = this;
          return new Promise((function(n, r) {
            t.urls = e;
            var i = t.urls[t.currentURLIndex];
            t.state = "connecting", t.createWebSocketConnection(i).then(n).catch(r), t.once(l.WebSocketManagerEvents.CLOSED, (function() { return r(new c.AgoraRTCError(c.AgoraRTCErrorCode.WS_DISCONNECT)) })), t.once(l.WebSocketManagerEvents.CONNECTED, (function() { return n() }))
          }))
        }, t.prototype.close = function(e, t) {
          if (this.currentURLIndex = 0, this.reconnectCount = 0, this.websocket) {
            this.websocket.onclose = null, this.websocket.onopen = null, this.websocket.onmessage = null;
            var n = this.websocket;
            t ? setTimeout((function() { return n.close() }), 500) : n.close(), this.websocket = void 0
          }
          this.state = e ? "failed" : "closed"
        }, t.prototype.reconnect = function(e) {
          if (this.websocket) {
            void 0 !== e && (this.reconnectMode = e);
            var t = this.websocket.onclose;
            this.websocket.onclose = null, this.websocket.close(), t && t.bind(this.websocket)({ code: 9999 })
          } else p.default.warning("[" + this.name + "] can not reconnect, no websocket")
        }, t.prototype.sendMessage = function(e) { if (!this.websocket || this.websocket.readyState !== WebSocket.OPEN) throw new c.AgoraRTCError(c.AgoraRTCErrorCode.WS_ABORT, "websocket is not ready"); var t = JSON.stringify(e); try { this.websocket.send(t) } catch (e) { throw new c.AgoraRTCError(c.AgoraRTCErrorCode.WS_ERR, "send websocket message error" + e.toString()) } }, t.prototype.createWebSocketConnection = function(e) {
          return o(this, void 0, void 0, (function() {
            var t, n = this;
            return a(this, (function(r) {
              return this.connectionID += 1, t = this.connectionID, [2, new Promise((function(r, i) {
                n.websocket && (n.websocket.onclose = null, n.websocket.close()), p.default.debug("[" + n.name + "] start connect, url: " + e);
                try { n.websocket = new WebSocket(e), n.websocket.binaryType = "arraybuffer" } catch (e) { var s = new c.AgoraRTCError(c.AgoraRTCErrorCode.WS_ERR, "init websocket failed! Error: " + e.toString()); return p.default.error("[" + n.name + "]" + s), void i(s) }
                u.wait(5e3).then((function() { t === n.connectionID && n.websocket && n.websocket.readyState !== WebSocket.OPEN && n.websocket && n.websocket.close() })), n.websocket.onopen = function() { p.default.debug("[" + n.name + "] websockect opened:", e), n.reconnectMode = "retry", n.state = "connected", n.reconnectCount = 0, r() }, n.websocket.onclose = function(e) {
                  return o(n, void 0, void 0, (function() {
                    var t, n;
                    return a(this, (function(o) {
                      switch (o.label) {
                        case 0:
                          return p.default.debug("[" + this.name + "] websocket close " + (this.websocket && this.websocket.url) + ", code: " + e.code + ", reason: " + e.reason + ", current mode: " + this.reconnectMode), this.reconnectCount < this.retryConfig.maxRetryCount ? ("connected" === this.state && (this.state = "reconnecting"), t = d.emitAsInvokerNoResponse(this, l.WebSocketManagerEvents.WILL_RECONNECT, this.reconnectMode) || this.reconnectMode, [4, this.reconnectWithAction(t)]) : [3, 2];
                        case 1:
                          return n = o.sent(), "closed" === this.state ? (p.default.debug("[" + this.connectionID + "] ws is closed, no need to reconnect"), [2]) : n ? (r(), [3, 3]) : (i(new c.AgoraRTCError(c.AgoraRTCErrorCode.WS_DISCONNECT, "websocket reconnect failed: " + e.code)), this.close(!0), [2]);
                        case 2:
                          i(new c.AgoraRTCError(c.AgoraRTCErrorCode.WS_DISCONNECT, "websocket close: " + e.code)), this.close(), o.label = 3;
                        case 3:
                          return [2]
                      }
                    }))
                  }))
                }, n.websocket.onmessage = function(e) { n.emit(l.WebSocketManagerEvents.ON_MESSAGE, e) }
              }))]
            }))
          }))
        }, t.prototype.reconnectWithAction = function(e, t) {
          return o(this, void 0, void 0, (function() {
            var n, r, i, o;
            return a(this, (function(a) {
              switch (a.label) {
                case 0:
                  return !t && this.reconnectCount >= this.retryConfig.maxRetryCount ? [2, !1] : this.urls ? "closed" === this.state ? [2, !1] : (n = u.getRetryWaitTime(this.reconnectCount, this.retryConfig), p.default.debug("[" + this.name + "] wait " + n + "ms to reconnect websocket, mode: " + e), [4, u.wait(n)]) : [2, !1];
                case 1:
                  if (a.sent(), "closed" === this.state) return [2, !1];
                  this.reconnectCount += 1, a.label = 2;
                case 2:
                  return a.trys.push([2, 12, , 14]), "retry" !== e ? [3, 4] : (i = this.urls[this.currentURLIndex], [4, this.createWebSocketConnection(i)]);
                case 3:
                  return a.sent(), [3, 11];
                case 4:
                  return "tryNext" !== e ? [3, 8] : (this.currentURLIndex += 1, this.currentURLIndex >= this.urls.length ? [4, this.reconnectWithAction("recover")] : [3, 6]);
                case 5:
                  return [2, a.sent()];
                case 6:
                  return p.default.debug("[" + this.name + "] websocket url length: " + this.urls.length + " current index: " + this.currentURLIndex), i = this.urls[this.currentURLIndex], [4, this.createWebSocketConnection(i)];
                case 7:
                  return a.sent(), [3, 11];
                case 8:
                  return "recover" !== e ? [3, 11] : (p.default.debug("[" + this.name + "] request new urls"), r = this, [4, d.emitAsPromise(this, l.WebSocketManagerEvents.REQUEST_NEW_URLS)]);
                case 9:
                  return r.urls = a.sent(), this.currentURLIndex = 0, i = this.urls[this.currentURLIndex], [4, this.createWebSocketConnection(i)];
                case 10:
                  a.sent(), a.label = 11;
                case 11:
                  return [2, !0];
                case 12:
                  return o = a.sent(), p.default.error("[" + this.name + "] reconnect failed", o.toString()), [4, this.reconnectWithAction(e)];
                case 13:
                  return [2, a.sent()];
                case 14:
                  return [2]
              }
            }))
          }))
        }, t
      }(d.EventEmitter);
    t.AgoraWebSocketManager = f
  }, function(e, t, n) {
    "use strict";
    var r = n(18),
      i = n(36),
      o = n(75),
      a = n(42);

    function s(e) {
      var t = new o(e),
        n = i(o.prototype.request, t);
      return r.extend(n, o.prototype, t), r.extend(n, t), n
    }
    var c = s(n(39));
    c.Axios = o, c.create = function(e) { return s(a(c.defaults, e)) }, c.Cancel = n(43), c.CancelToken = n(89), c.isCancel = n(38), c.all = function(e) { return Promise.all(e) }, c.spread = n(90), e.exports = c, e.exports.default = c
  }, function(e, t, n) {
    "use strict";
    var r = n(18),
      i = n(37),
      o = n(76),
      a = n(77),
      s = n(42);

    function c(e) { this.defaults = e, this.interceptors = { request: new o, response: new o } }
    c.prototype.request = function(e) {
      "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
      var t = [a, void 0],
        n = Promise.resolve(e);
      for (this.interceptors.request.forEach((function(e) { t.unshift(e.fulfilled, e.rejected) })), this.interceptors.response.forEach((function(e) { t.push(e.fulfilled, e.rejected) })); t.length;) n = n.then(t.shift(), t.shift());
      return n
    }, c.prototype.getUri = function(e) { return e = s(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "") }, r.forEach(["delete", "get", "head", "options"], (function(e) { c.prototype[e] = function(t, n) { return this.request(r.merge(n || {}, { method: e, url: t })) } })), r.forEach(["post", "put", "patch"], (function(e) { c.prototype[e] = function(t, n, i) { return this.request(r.merge(i || {}, { method: e, url: t, data: n })) } })), e.exports = c
  }, function(e, t, n) {
    "use strict";
    var r = n(18);

    function i() { this.handlers = [] }
    i.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, i.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, i.prototype.forEach = function(e) { r.forEach(this.handlers, (function(t) { null !== t && e(t) })) }, e.exports = i
  }, function(e, t, n) {
    "use strict";
    var r = n(18),
      i = n(78),
      o = n(38),
      a = n(39);

    function s(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
    e.exports = function(e) { return s(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) { delete e.headers[t] })), (e.adapter || a.adapter)(e).then((function(t) { return s(e), t.data = i(t.data, t.headers, e.transformResponse), t }), (function(t) { return o(t) || (s(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) })) }
  }, function(e, t, n) {
    "use strict";
    var r = n(18);
    e.exports = function(e, t, n) { return r.forEach(n, (function(n) { e = n(e, t) })), e }
  }, function(e, t) {
    var n, r, i = e.exports = {};

    function o() { throw new Error("setTimeout has not been defined") }

    function a() { throw new Error("clearTimeout has not been defined") }

    function s(e) { if (n === setTimeout) return setTimeout(e, 0); if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0); try { return n(e, 0) } catch (t) { try { return n.call(null, e, 0) } catch (t) { return n.call(this, e, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : o } catch (e) { n = o } try { r = "function" == typeof clearTimeout ? clearTimeout : a } catch (e) { r = a } }();
    var c, d = [],
      u = !1,
      l = -1;

    function p() { u && c && (u = !1, c.length ? d = c.concat(d) : l = -1, d.length && f()) }

    function f() {
      if (!u) {
        var e = s(p);
        u = !0;
        for (var t = d.length; t;) {
          for (c = d, d = []; ++l < t;) c && c[l].run();
          l = -1, t = d.length
        }
        c = null, u = !1,
          function(e) { if (r === clearTimeout) return clearTimeout(e); if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e); try { r(e) } catch (t) { try { return r.call(null, e) } catch (t) { return r.call(this, e) } } }(e)
      }
    }

    function g(e, t) { this.fun = e, this.array = t }

    function m() {}
    i.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      d.push(new g(e, t)), 1 !== d.length || u || s(f)
    }, g.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) { return [] }, i.binding = function(e) { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function(e) { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 }
  }, function(e, t, n) {
    "use strict";
    var r = n(18);
    e.exports = function(e, t) { r.forEach(e, (function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) })) }
  }, function(e, t, n) {
    "use strict";
    var r = n(41);
    e.exports = function(e, t, n) { var i = n.config.validateStatus;!i || i(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) }
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, i) { return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code } }, e }
  }, function(e, t, n) {
    "use strict";
    var r = n(84),
      i = n(85);
    e.exports = function(e, t) { return e && !r(t) ? i(e, t) : t }
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) }
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }
  }, function(e, t, n) {
    "use strict";
    var r = n(18),
      i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
      var t, n, o, a = {};
      return e ? (r.forEach(e.split("\n"), (function(e) {
        if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
          if (a[t] && i.indexOf(t) >= 0) return;
          a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
        }
      })), a) : a
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(18);
    e.exports = r.isStandardBrowserEnv() ? function() {
      var e, t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");

      function i(e) { var r = e; return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } }
      return e = i(window.location.href),
        function(t) { var n = r.isString(t) ? i(t) : t; return n.protocol === e.protocol && n.host === e.host }
    }() : function() { return !0 }
  }, function(e, t, n) {
    "use strict";
    var r = n(18);
    e.exports = r.isStandardBrowserEnv() ? {
      write: function(e, t, n, i, o, a) {
        var s = [];
        s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(i) && s.push("path=" + i), r.isString(o) && s.push("domain=" + o), !0 === a && s.push("secure"), document.cookie = s.join("; ")
      },
      read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null },
      remove: function(e) { this.write(e, "", Date.now() - 864e5) }
    } : { write: function() {}, read: function() { return null }, remove: function() {} }
  }, function(e, t, n) {
    "use strict";
    var r = n(43);

    function i(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise((function(e) { t = e }));
      var n = this;
      e((function(e) { n.reason || (n.reason = new r(e), t(n.reason)) }))
    }
    i.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, i.source = function() { var e; return { token: new i((function(t) { e = t })), cancel: e } }, e.exports = i
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e) { return function(t) { return e.apply(null, t) } }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
      function e() { this.lockingPromise = Promise.resolve(), this.locks = 0 }
      return Object.defineProperty(e.prototype, "isLocked", { get: function() { return this.locks > 0 }, enumerable: !0, configurable: !0 }), e.prototype.lock = function() {
        var e, t = this;
        this.locks += 1;
        var n = new Promise((function(n) { e = function() { t.locks -= 1, n() } })),
          r = this.lockingPromise.then((function() { return e }));
        return this.lockingPromise = this.lockingPromise.then((function() { return n })), r
      }, e
    }();
    t.PromiseMutex = r
  }, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(3),
      i = n(0),
      o = n(1),
      a = n(8),
      s = n(4),
      c = function() {};
    c.prototype.set = function(e, t) {
      ["BatteryLevel"].indexOf(e) > -1 && (this[e] = t)
    };
    var d = new function() {
        var e = Object(a.b)();
        return e.states = { UNINIT: "UNINIT", INITING: "INITING", INITED: "INITED" }, e.state = e.states.UNINIT, e.batteryManager = null, e._init = function(t, n) { e.state = e.states.INITING, navigator.getBattery ? navigator.getBattery().then((function(n) { e.batteryManager = n, t && setTimeout((function() { t() }), 0) })).catch((function(e) { i.default.debug("navigator.getBattery is disabled", e), t && t() })) : (e.state = e.states.INITED, t && t()) }, e._getBatteryStats = function() { var t = {}; return e.batteryManager && e.batteryManager.level ? t.BatteryLevel = Math.floor(100 * e.batteryManager.level) : t.BatteryLevel = "UNSUPPORTED", t }, e.getStats = function(t, n) {
          var r = new c,
            i = e._getBatteryStats();
          i && i.BatteryLevel && r.set("BatteryLevel", i.BatteryLevel), t && t(r)
        }, e._init(), e
      },
      u = n(21),
      l = n(19),
      p = n(25),
      f = n(51),
      g = n(9),
      m = ["live", "rtc", "web", "interop", "h264_interop", "web-only"],
      h = ["vp8", "h264"],
      v = ["aes-128-xts", "aes-256-xts", "aes-128-ecb", "sm4-128-ecb"],
      E = n(11),
      _ = n.n(E),
      S = n(7),
      y = n.n(S),
      R = n(12),
      T = n(5),
      I = n(10),
      A = n(20),
      b = n(6),
      O = n(14),
      C = { 1001: "FRAMERATE_INPUT_TOO_LOW", 1002: "FRAMERATE_SENT_TOO_LOW", 1003: "SEND_VIDEO_BITRATE_TOO_LOW", 1005: "RECV_VIDEO_DECODE_FAILED", 2001: "AUDIO_INPUT_LEVEL_TOO_LOW", 2002: "AUDIO_OUTPUT_LEVEL_TOO_LOW", 2003: "SEND_AUDIO_BITRATE_TOO_LOW", 2005: "RECV_AUDIO_DECODE_FAILED", 3001: "FRAMERATE_INPUT_TOO_LOW_RECOVER", 3002: "FRAMERATE_SENT_TOO_LOW_RECOVER", 3003: "SEND_VIDEO_BITRATE_TOO_LOW_RECOVER", 3005: "RECV_VIDEO_DECODE_FAILED_RECOVER", 4001: "AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER", 4002: "AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER", 4003: "SEND_AUDIO_BITRATE_TOO_LOW_RECOVER", 4005: "RECV_AUDIO_DECODE_FAILED_RECOVER" },
      N = { FramerateInput: 1001, FramerateSent: 1002, SendVideoBitrate: 1003, VideoDecode: 1005, AudioIntputLevel: 2001, AudioOutputLevel: 2002, SendAudioBitrate: 2003, AudioDecode: 2005 },
      w = function(e) {
        var t = { remoteStreamStorage: {}, localStreamStorage: {} };
        return t.gatewayClient = e, t.checkAudioOutputLevel = function(e) { return !(e && parseInt(e.audioRecvBytesDelta) > 0 && parseInt(e.audioDecodingNormalDelta) > 0 && 0 === parseInt(e.audioOutputLevel)) }, t.checkAudioIntputLevel = function(e) { return !e || 0 !== parseInt(e.audioInputLevel) }, t.checkFramerateInput = function(e, t) {
          if (!e || !t.attributes) return !0;
          var n = parseInt(t.attributes.maxFrameRate),
            r = parseInt(e.googFrameRateInput);
          return !n || !r || !(n > 10 && r < 5 || n < 10 && n >= 5 && r <= 1)
        }, t.checkFramerateSent = function(e) { return !(e && parseInt(e.googFrameRateInput) > 5 && parseInt(e.googFrameRateSent) <= 1) }, t.checkSendVideoBitrate = function(e) { return !e || 0 !== parseInt(e.videoSendBytesDelta) }, t.checkSendAudioBitrate = function(e) { return !e || 0 !== parseInt(e.audioSendBytesDelta) }, t.checkVideoDecode = function(e) { return !e || 0 === parseInt(e.videoRecvBytesDelta) || 0 !== parseInt(e.googFrameRateDecoded) }, t.checkAudioDecode = function(e) { return !e || 0 === parseInt(e.audioRecvBytesDelta) || 0 !== parseInt(e.audioDecodingNormalDelta) }, t.record = function(e, n, r, i, o) {
          r[e] || (r[e] = { isPrevNormal: !0, record: [] });
          var a = r[e],
            s = t["check" + e](n, o);
          if (a.record.push(s), a.record.length >= 5) {
            a.isCurNormal = -1 !== a.record.indexOf(!0);
            var c = N[e];
            a.isPrevNormal && !a.isCurNormal && t.gatewayClient.dispatchEvent({ type: "exception", code: c, msg: C[c], uid: i }), !a.isPrevNormal && a.isCurNormal && t.gatewayClient.dispatchEvent({ type: "exception", code: c + 2e3, msg: C[c + 2e3], uid: i }), a.isPrevNormal = a.isCurNormal, a.record = []
          }
        }, t.setLocalStats = function(e) {
          var n = {};
          Object.keys(e).map((function(r) {
            var i = e[r],
              o = t.gatewayClient.localStreams[parseInt(r)],
              a = t.localStreamStorage[r] || {};
            o && o.hasVideo() && (t.record("SendVideoBitrate", i.videoStats, a, r), t.record("FramerateInput", i.videoStats, a, r, o), t.record("FramerateSent", i.videoStats, a, r)), o && o.hasAudio() && (t.record("AudioIntputLevel", i.audioStats, a, r), t.record("SendAudioBitrate", i.audioStats, a, r)), n[r] = a
          })), t.localStreamStorage = n
        }, t.setRemoteStats = function(n) {
          var r = {};
          Object.keys(n).map((function(i) {
            var o = n[i],
              a = e.remoteStreams[i],
              s = t.remoteStreamStorage[i] || {};
            a && a.hasVideo() && a.isPlaying() && t.record("VideoDecode", o.videoStats, s, i), a && a.hasAudio() && a.isPlaying() && (t.record("AudioOutputLevel", o.audioStats, s, i), t.record("AudioDecode", o.audioStats, s, i)), r[i] = s
          })), t.remoteStreamStorage = r
        }, t
      };

    function L(e) {
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = function(e, t) { if (!e) return; if ("string" == typeof e) return D(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(n); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t) }(e))) {
          var t = 0,
            n = function() {};
          return { s: n, n: function() { return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] } }, e: function(e) { throw e }, f: n }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var r, i, o = !0,
        a = !1;
      return { s: function() { r = e[Symbol.iterator]() }, n: function() { var e = r.next(); return o = e.done, e }, e: function(e) { a = !0, i = e }, f: function() { try { o || null == r.return || r.return() } finally { if (a) throw i } } }
    }

    function D(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r
    }
    var k = n(2),
      M = new function() {
        var e = Object(a.b)();
        return e.states = { UNINIT: "UNINIT", INITING: "INITING", INITED: "INITED" }, e.state = e.states.UNINIT, e.type = null, e.lastConnectedAt = null, e.lastDisconnectedAt = null, e.lastTypeChangedAt = null, e.networkChangeTimer = null, e._init = function(t, n) {
          if (e.state = e.states.INITING, navigator.connection && navigator.connection.addEventListener) {
            var r = e._getNetworkInfo();
            e.type = r && r.type, e.state = e.states.INITED, t && t()
          } else e.state = e.states.UNINIT, n && n("DO_NOT_SUPPORT")
        }, e._getNetworkInfo = function() { return navigator.connection }, e._reloadNetworkInfo = function() {
          var t = e._getNetworkInfo(),
            n = t && t.type || "UNSUPPORTED",
            r = Date.now();
          if (n !== e.type) {
            e.lastTypeChangedAt = r, "none" == n ? e.lastDisconnectedAt = r : "none" == e.type && (e.lastConnectedAt = r), e.type = n;
            var i = { type: "networkTypeChanged", networkType: n };
            e.dispatchEvent(i)
          }
        }, e.getStats = function(t, n) {
          var r = {},
            i = e._getNetworkInfo();
          i && (r.NetworkType = i.type || "UNSUPPORTED"), setTimeout((function() { t(r) }), 0)
        }, e._init((function() { navigator.connection.addEventListener("change", (function() { e._reloadNetworkInfo() })), e.networkChangeTimer = setInterval((function() { e._reloadNetworkInfo() }), 5e3) }), (function(e) {})), e
      },
      P = n(52),
      U = n(16),
      x = n(53),
      j = n.n(x),
      V = n(28),
      B = "host",
      F = function(e) {
        var t = { key: void 0, highStream: null, lowStream: null, lowStreamParameter: null, isDualStream: !1, highStreamState: 2, lowStreamState: 2, proxyServer: null, turnServers: [], useProxyServer: !1 };
        t.mode = e.mode, t.codec = e.codec, t.clientId = Object(I.generateSessionId)().slice(0, 5), t.uintUid = null, t.customReportCount = 0;
        e = y()({}, e);
        if (t.aespassword = null, t.aesmode = "none", t.hasPublished = !1, t.getSessionId = function() { return e.sessionId }, t.startChannelMediaRelay = function(n, r) {
            var i = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e) {
                if (e) return r && r(e);
                r && r()
              },
              name: "Client.startChannelMediaRelay",
              options: arguments,
              tag: "tracer"
            });
            if (!(n instanceof g.ChannelMediaRelayConfiguration)) throw "Configration should be instance of [ChannelMediaRelayConfiguration]";
            var a = n.getSrcChannelMediaInfo(),
              s = n.getDestChannelMediaInfos();
            if (Object(k.isEmpty)(a)) throw "srcChannelMediaInfo should not be empty";
            if (Object(k.isEmpty)(s) || 0 === s.length) throw "destChannelMediaInfos should not be empty";
            if (!Object(I.is32Uint)(a.uid)) throw "Invalid uid in srcChannelMediaInfo";
            if (!Object(k.isValidChannelName)(a.channelName)) throw "Invalid channelName in srcChannelMediaInfo";
            if (a.token && !Object(k.isValidToken)(a.token)) throw "Invalid token in srcChannelMediaInfo";
            if (s.forEach((function(e) { if (!Object(I.is32Uint)(e.uid)) throw "Invalid uid in destChannelMediaInfo"; if (!Object(k.isValidChannelName)(e.channelName)) throw "Invalid channelName in destChannelMediaInfo"; if (e.token && !Object(k.isValidToken)(e.token)) throw "Invalid token in destChannelMediaInfo" })), t.gatewayClient.state !== R.a.CONNECTED) throw "startChannelMediaRelay should be used after join";
            t.gatewayClient.startChannelMediaRelay(n).then((function() { i && i() })).catch((function(e) { i && i(e) }))
          }, t.updateChannelMediaRelay = function(n, r) {
            var i = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e) {
                if (e) return r && r(e);
                r && r()
              },
              name: "Client.updateChannelMediaRelay",
              options: arguments,
              tag: "tracer"
            });
            if (!(n instanceof g.ChannelMediaRelayConfiguration)) throw "Configration should be instance of [ChannelMediaRelayConfiguration]";
            var a = n.getSrcChannelMediaInfo(),
              s = n.getDestChannelMediaInfos();
            if (Object(k.isEmpty)(a)) throw "srcChannelMediaInfo should not be empty";
            if (Object(k.isEmpty)(s) || 0 === s.length) throw "destChannelMediaInfos should not be empty";
            if (!Object(I.is32Uint)(a.uid)) throw "Invalid uid in srcChannelMediaInfo";
            if (!Object(k.isValidChannelName)(a.channelName)) throw "Invalid channelName in srcChannelMediaInfo";
            if (a.token && !Object(k.isValidToken)(a.token)) throw "Invalid token in srcChannelMediaInfo";
            if (s.forEach((function(e) { if (!Object(I.is32Uint)(e.uid)) throw "Invalid uid in destChannelMediaInfo"; if (!Object(k.isValidChannelName)(e.channelName)) throw "Invalid channelName in destChannelMediaInfo"; if (e.token && !Object(k.isValidToken)(e.token)) throw "Invalid token in destChannelMediaInfo" })), t.gatewayClient.state !== R.a.CONNECTED) throw "updateChannelMediaRelay should be used after join";
            t.gatewayClient.updateChannelMediaRelay(n).then((function() { i && i() })).catch((function(e) { i && i(e) }))
          }, t.stopChannelMediaRelay = function(n) {
            var r = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e) {
                if (e) return n && n(e);
                n && n()
              },
              name: "Client.stopChannelMediaRelay",
              options: arguments,
              tag: "tracer"
            });
            t.gatewayClient.stopChannelMediaRelay().then((function() { r && r() })).catch((function(e) { r && r(e) }))
          }, t.getConnectionState = function() {
            var n = o.report.reportApiInvoke(e.sessionId, { name: "Client.getConnectionState", options: arguments, tag: "tracer" }),
              r = R.a.connetionStateMap[t.gatewayClient.state];
            return n(), r
          }, t.setClientRole = function(n, r) {
            var a = o.report.reportApiInvoke(e.sessionId, { callback: r, name: "Client.setClientRole", options: arguments, tag: "tracer" });
            if (Object(k.checkValidEnum)(n, "setClientRole", [B, "audience"]), "rtc" === t.mode) { var s = "RTC mode can not use setClientRole"; return i.default.warning("[".concat(t.clientId, "] ").concat(s)), a && a(s) }
            t.gatewayClient && t.gatewayClient.state === R.a.CONNECTED ? ("audience" === n && (0 === this.highStreamState ? this._unpublish(this.highStream, (function() { a && a(null, { role: n }) }), (function(e) { a && a(e) })) : t.gatewayClient.setClientRole("audience", a)), n === B && t.gatewayClient.setClientRole(B, a)) : (t.gatewayClient.role = n, a && a(null, { role: n }))
          }, t.getGatewayInfo = function(e) {
            if (t.gatewayClient.state !== R.a.CONNECTED) { var n = "Client is not in connected state"; return i.default.error("[".concat(t.clientId, "] ").concat(n)), void e(n) }
            t.gatewayClient.getGatewayInfo((function(t) { e(null, t) }), e)
          }, t.renewToken = function(n, r, a) {
            var s = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e, t) {
                if (e) return i.default.error("Failed to renew token ".concat(e), t), a && a(e);
                r && r(t)
              },
              name: "Client.renewToken",
              options: arguments,
              tag: "tracer"
            });
            if (!Object(k.isValidToken)(n)) throw new Error("Invalid token: Token is of the string type .Length of the string: [1,255]. ASCII characters only.");
            return t.gatewayClient ? t.key ? (t.key = n, void t.gatewayClient.renewToken(n, (function(e) { return s(null, e) }), s)) : (i.default.error("[".concat(t.clientId, "] renewToken should not be called before user join")), s(T.default.INVALID_OPERATION)) : (i.default.error("[".concat(t.clientId, "] renewToken Failed. GatewayClient not Exist")), s(T.default.INVALID_OPERATION))
          }, t.setLowStreamParameter = function(n) {
            var r = o.report.reportApiInvoke(e.sessionId, { name: "Client.setLowStreamParameter", options: arguments, tag: "tracer" });
            Object(k.checkValidObject)(n, "param");
            var a = n.width,
              s = n.height,
              c = n.framerate,
              d = n.bitrate;
            Object(k.isEmpty)(a) || Object(k.checkValidNumber)(a, "width"), Object(k.isEmpty)(s) || Object(k.checkValidNumber)(s, "height"), Object(k.isEmpty)(c) || Object(k.checkValidNumber)(c, "framerate"), Object(k.isEmpty)(d) || Object(k.checkValidNumber)(d, "bitrate", 1, 1e7), (!a && s || a && !s) && i.default.warning("[".concat(t.clientId, "] The width and height parameters take effect only when both are set")), t.lowStreamParameter = n, r()
          }, t.init = function(t, n, r) {
            var i = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e, t) {
                if (e) return r && r(e);
                n && n(t)
              },
              name: "Client.init",
              options: arguments,
              tag: "tracer"
            });
            Object(k.checkValidString)(t), Object(s.isChromeKernel)() && Object(s.getChromeKernelVersion)() <= 48 ? r ? i(T.default.BAD_ENVIRONMENT) : Object(I.popBanTip)() : (e.appId = t, e.sessionId = Object(I.generateSessionId)(), i())
          }, t.setTurnServer = function(n) {
            var r = o.report.reportApiInvoke(e.sessionId, { name: "Client.setTurnServer", options: arguments, tag: "tracer" });
            if (t.gatewayClient && t.gatewayClient.state !== R.a.DISCONNECTED) throw new Error("Set turn server before join channel");
            if (t.useProxyServer) throw new Error("You have already set the proxy");
            n instanceof Array || (n = [n]);
            var a = [];
            n.map((function(e, n) {
              Object(k.checkValidObject)(e, "turnServer");
              var r = e.turnServerURL,
                o = e.username,
                s = e.password,
                c = e.udpport,
                d = e.forceturn,
                u = e.tcpport;
              if (Object(k.checkValidString)(r, "turnServerURL"), Object(k.checkValidString)(o, "username"), Object(k.checkValidString)(s, "password"), Object(k.checkValidString)(c, "udpport"), 0 === parseInt(c)) throw new Error("udpport should not be ".concat(c));
              Object(k.isEmpty)(d) || Object(k.checkValidBoolean)(d, "forceturn");
              var l = { mode: "manual" };
              if (l.url = r, l.udpport = c, l.username = o, l.credential = s, l.forceturn = d || !1, !Object(k.isEmpty)(u)) {
                if (Object(k.checkValidString)(u, "tcpport"), 0 === parseInt(u)) throw new Error("tcpport should not be ".concat(u));
                l.tcpport = u, i.default.info("[".concat(t.clientId, "] Set turnserver[").concat(n, "] tcpurl. ").concat(l.url, ":").concat(l.tcpport))
              }
              i.default.info("[".concat(t.clientId, "] Set turnserver[").concat(n, "] udpurl. ").concat(l.url, ":").concat(l.udpport, ",username: ").concat(l.username)), a.push(l)
            })), t.turnServers = a, r()
          }, t.setProxyServer = function(n) {
            var r = o.report.reportApiInvoke(e.sessionId, { name: "Client.setProxyServer", options: arguments, tag: "tracer" });
            if (t.gatewayClient && t.gatewayClient.state !== R.a.DISCONNECTED) throw new Error("Set proxy server before join channel");
            if (!n) throw new Error("Do not set the proxyServer parameter as empty");
            if (t.useProxyServer) throw new Error("You have already set the proxy");
            Object(k.checkValidString)(n, "proxyServer"), t.proxyServer = n, o.report.setProxyServer(n), i.default.setProxyServer(n), r()
          }, t.startProxyServer = function(n) {
            var r = o.report.reportApiInvoke(e.sessionId, { name: "Client.startProxyServer", options: arguments, tag: "tracer" });
            if (t.gatewayClient && t.gatewayClient.state !== R.a.DISCONNECTED) throw new Error("Start proxy server before join channel");
            if (t.proxyServer) throw new Error("You have already set the proxy");
            t.useProxyServer = !0, t.proxyServerType = n || 1, r()
          }, t.stopProxyServer = function() {
            var n = o.report.reportApiInvoke(e.sessionId, { name: "Client.stopProxyServer", options: arguments, tag: "tracer" });
            if (t.gatewayClient && t.gatewayClient.state !== R.a.DISCONNECTED) throw new Error("Stop proxy server after leave channel");
            o.report.setProxyServer(), i.default.setProxyServer(), t.turnServers = [], t.proxyServer = null, t.useProxyServer = !1, t.proxyServerType = null, n()
          }, t.setEncryptionSecret = function(n) {
            var r = o.report.reportApiInvoke(e.sessionId, { name: "Client.setEncryptionSecret", options: arguments, tag: "tracer" });
            Object(k.checkValidString)(n, "password"), t.aespassword = n, r()
          }, t.setEncryptionMode = function(n) {
            var r = o.report.reportApiInvoke(e.sessionId, { name: "Client.setEncryptionMode", options: arguments, tag: "tracer" });
            if (Object(k.checkValidString)(n, "encryptionMode"), -1 === v.indexOf(n)) throw new Error('Invalid encryptionMode: encryptionMode should be "aes-128-xts" | "aes-256-xts" | "aes-128-ecb" | "sm4-128-ecb"');
            t.aesmode = n, r()
          }, t.configPublisher = function(n) {
            var r = o.report.reportApiInvoke(e.sessionId, { name: "Client.configPublisher", options: arguments, tag: "tracer" });
            Object(k.checkValidObject)(n, "config");
            var i = n.width,
              a = n.height,
              s = n.framerate,
              c = n.bitrate,
              d = n.publisherUrl;
            Object(k.checkValidNumber)(i, "width"), Object(k.checkValidNumber)(a, "height"), Object(k.checkValidNumber)(s, "framerate"), Object(k.checkValidNumber)(c, "bitrate", 1, 1e7), d && Object(k.checkValidString)(d, "publisherUrl"), t.gatewayClient.configPublisher(n), r()
          }, t.enableDualStream = function(n, r) {
            var a = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e, t) {
                if (e) return r && r(e);
                n && n(t)
              },
              name: "Client.enableDualStream",
              options: arguments,
              tag: "tracer"
            });
            return "iOS" === Object(s.getBrowserOS)() ? (o.report.streamSwitch(e.sessionId, { lts: (new Date).getTime(), isdual: !0, succ: !1 }), a(T.default.IOS_NOT_SUPPORT)) : Object(s.isWeChatBrowser)() ? (o.report.streamSwitch(e.sessionId, { lts: (new Date).getTime(), isdual: !0, succ: !1 }), a(T.default.WECHAT_NOT_SUPPORT)) : (o.report.streamSwitch(e.sessionId, { lts: (new Date).getTime(), isdual: !0, succ: !0 }), t.isDualStream = !0, t.highStream && (t.highStream.isDualStream = !0), void(0 === t.highStreamState ? t._publishLowStream((function(e) { return a(null, e) }), (function(e) { i.default.warning("[".concat(t.clientId, "]"), e), a(T.default.ENABLE_DUALSTREAM_FAILED) })) : 1 === t.highStreamState ? a(T.default.STILL_ON_PUBLISHING) : a(null)))
          }, t.disableDualStream = function(n, r) {
            var a = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e, t) {
                if (e) return r && r(e);
                n && n(t)
              },
              name: "Client.disableDualStream",
              options: arguments,
              tag: "tracer"
            });
            o.report.streamSwitch(e.sessionId, { lts: (new Date).getTime(), isdual: !1, succ: !0 }), t.isDualStream = !1, t.highStream && (t.highStream.isDualStream = !1), 0 === t.highStreamState ? t._unpublishLowStream((function() { t.highStream.lowStream = null, a() }), (function(e) { i.default.warning("[".concat(t.clientId, "]"), e), a(T.default.DISABLE_DUALSTREAM_FAILED) })) : 1 === t.highStreamState ? a(T.default.STILL_ON_PUBLISHING) : a()
          }, t._getLowStream = function(e, n) { t.lowStream ? e(t.lowStream) : t._createLowStream((function(n) { t.lowStream = n, e(t.lowStream) }), n) }, t._createLowStream = function(e, n) {
            if (t.highStream && t.highStream.stream) {
              var r = y()({}, t.highStream.params);
              if (r.streamID += 1, r.audio = !1, r.video)
                if (t.highStream.stream.getVideoTracks()[0]) {
                  var i = new u.a(r);
                  if (i.isLowStream = !0, i.streamId = t.highStream.getId() + 1, t.lowStreamParameter) {
                    var o = y()({}, t.lowStreamParameter);
                    o.width && o.height || (o.width = 160, o.height = 120), o.framerate = o.framerate || 15, o.bitrate = o.bitrate || 50, i.setVideoProfileCustomPlus(o)
                  } else i.setVideoProfileCustom(function(e) {
                    var t;
                    switch (e) {
                      case "120p":
                      case "120p_1":
                        t = ["120p_1", "120p_1", "120p_1"];
                        break;
                      case "120p_3":
                        t = ["120p_3", "120p_3", "120p_3"];
                        break;
                      case "180p":
                      case "180p_1":
                        t = ["90p_1", "90p_1", "180p_1"];
                        break;
                      case "180p_3":
                        t = ["120p_3", "120p_3", "180p_3"];
                        break;
                      case "180p_4":
                        t = ["120p_1", "120p_1", "180p_4"];
                        break;
                      case "240p":
                      case "240p_1":
                        t = ["120p_1", "120p_1", "240p_1"];
                        break;
                      case "240p_3":
                        t = ["120p_3", "120p_3", "240p_3"];
                        break;
                      case "240p_4":
                        t = ["120p_4", "120p_4", "240p_4"];
                        break;
                      case "360p":
                      case "360p_1":
                      case "360p_4":
                      case "360p_9":
                      case "360p_10":
                      case "360p_11":
                        t = ["90p_1", "90p_1", "360p_1"];
                        break;
                      case "360p_3":
                      case "360p_6":
                        t = ["120p_3", "120p_3", "360p_3"];
                        break;
                      case "360p_7":
                      case "360p_8":
                        t = ["120p_1", "120p_1", "360p_7"];
                        break;
                      case "480p":
                      case "480p_1":
                      case "480p_2":
                      case "480p_4":
                      case "480p_10":
                        t = ["120p_1", "120p_1", "480p_1"];
                        break;
                      case "480p_3":
                      case "480p_6":
                        t = ["120p_3", "120p_3", "480p_3"];
                        break;
                      case "480p_8":
                      case "480p_9":
                        t = ["120p_4", "120p_4", "480p_8"];
                        break;
                      case "720p":
                      case "720p_1":
                      case "720p_2":
                      case "720p_3":
                        t = ["90p_1", "90p_1", "720p_1"];
                        break;
                      case "720p_5":
                      case "720p_6":
                        t = ["120p_1", "120p_1", "720p_5"];
                        break;
                      case "1080p":
                      case "1080p_1":
                      case "1080p_2":
                      case "1080p_3":
                      case "1080p_5":
                        t = ["90p_1", "90p_1", "1080p_1"];
                        break;
                      case "1440p":
                      case "1440p_1":
                      case "1440p_2":
                        t = ["90p_1", "90p_1", "1440p_1"];
                        break;
                      case "4k":
                      case "4k_1":
                      case "4k_3":
                        t = ["90p_1", "90p_1", "4k_1"];
                        break;
                      default:
                        t = ["120p_1", "120p_1", "360p_7"]
                    }
                    return Object(s.isOpera)() ? [e, 15, 50] : Object(s.isFireFox)() ? [t[1], 15, 100] : Object(s.isSafari)() ? [t[2], 15, 50] : [t[0], 15, 50]
                  }(t.highStream.profile));
                  try { console.log(i.videoConstraint); var a = j()(t.highStream, { width: i.videoConstraint.width.ideal, height: i.videoConstraint.height.ideal, framerate: i.videoConstraint.frameRate }); return i.stream = a, t.highStream.lowStream = i, t.highStream.userMuteVideo && i.muteVideo(), e && e(i) } catch (e) { return n && n(e) }
                } else n && n(T.default.HIGH_STREAM_NOT_VIDEO_TRACE);
              else n && n(T.default.HIGH_STREAM_NOT_VIDEO_TRACE)
            } else n && n(T.default.HIGH_STREAM_NOT_VIDEO_TRACE)
          }, t._publishLowStream = function(e, n) { return 2 !== t.lowStreamState ? n && n(T.default.LOW_STREAM_ALREADY_PUBLISHED) : t.highStream && t.highStream.hasScreen() ? n && n(T.default.SHARING_SCREEN_NOT_SUPPORT) : void t._getLowStream((function(r) { t.lowStreamState = 1, t.gatewayClient.publish(r, { streamType: 1 }, (function() { t.lowStreamState = 0, e && e() }), (function(e) { 1 === t.lowStreamState && (t.lowStreamState = 2), i.default.debug("[".concat(t.clientId, "] publish low stream failed")), n && n(e) })) }), n) }, t._unpublishLowStream = function(e, n) {
            if (0 !== t.lowStreamState) return n && n(T.default.LOW_STREAM_NOT_YET_PUBLISHED);
            t.lowStream && (t.gatewayClient.unpublish(t.lowStream, { streamType: 1 }, (function() {}), (function(e) { i.default.debug("[".concat(t.clientId, "] unpublish low stream failed")), n && n(e) })), t.lowStream.close(), t.lowStream = null, t.lowStreamState = 2, e && e())
          }, t.join = function(n, r, a, s, c, d) {
            s && "function" == typeof s && (d = c, c = s, s = null);
            var u = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e, t) {
                if (e) return d && d(e);
                c && c(t)
              },
              name: "Client.join",
              options: arguments,
              tag: "tracer"
            });
            if (n && !Object(k.isValidToken)(n)) return i.default.warning("[".concat(t.clientId, "] Param channelKey should be string")), u(T.default.INVALID_PARAMETER);
            if (!Object(k.isValidChannelName)(r)) return i.default.error("Invalid Channel Name ".concat(r)), i.default.warning("[".concat(t.clientId, "] The length must be within 64 bytes. The supported characters: a-z,A-Z,0-9,space,!, #, $, %, &, (, ), +, -, :, ;, <, =, ., >, ?, @, [, ], ^, _,  {, }, |, ~, ,")), u(T.default.INVALID_PARAMETER);
            if ("string" == typeof r && "" === r) return i.default.warning("[".concat(t.clientId, "] Param channel should not be empty")), u(T.default.INVALID_PARAMETER);
            if (s && !Object(k.isValidString)(s)) return i.default.warning("[".concat(t.clientId, "] optionalInfo should be string")), u(T.default.INVALID_PARAMETER);
            if (a && !Object(I.is32Uint)(a) && !Object(k.isValidString)(a, 1, 255)) return i.default.error("Invalid UID ".concat(a, " ").concat(_()(a))), i.default.warning("[".concat(t.clientId, "] [String uid] Length of the string: [1,255]. ASCII characters only. [Number uid] The value range is [0,10000]")), u(T.default.INVALID_PARAMETER);
            if ("string" == typeof a && 0 == a.length) return i.default.warning("[".concat(t.clientId, "] String uid should not be empty")), u(T.default.INVALID_PARAMETER);
            if ("string" == typeof a && a.length > 256) return i.default.warning("[".concat(t.clientId, "] Length of string uid should be less than 255")), u(T.default.INVALID_PARAMETER);
            t.highStream = null, t.lowStream = null, t.lowStreamParameter = null, t.isDualStream = !1, t.highStreamState = 2, t.lowStreamState = 2;
            var l = Date.now(),
              p = setTimeout((function() {
                if (1 != t.gatewayClient.hasJoined) {
                  i.default.debug("[".concat(t.clientId, "] The time to join the channel is greater than 5 seconds "));
                  var n = Date.now();
                  o.report.joinChannelTimeOut({ lts: n, sid: e.sessionId, cname: r, cid: f.cid, uid: f.uid || ("string" == typeof a ? void 0 : a), elapse: n - l, timeout: 5 })
                }
              }), 5e3),
              f = { clientId: t.clientId, appId: e.appId, sid: e.sessionId, cname: r, uid: a, turnServers: t.turnServers.concat(), proxyServer: t.proxyServer, token: n || e.appId, useProxyServer: t.useProxyServer, proxyServerType: t.proxyServerType, optionalInfo: s };
            if ("string" == typeof a && (f.stringUid = a, t.uintUid ? (f.uid = t.uintUid, delete t.uintUid) : f.uid = 0), t.aespassword && "none" !== t.aesmode && y()(f, { aespassword: t.aespassword, aesmode: t.aesmode }), o.report.sessionInit(e.sessionId, { lts: (new Date).getTime(), cname: r, appid: e.appId, mode: e.mode, succ: !0 }), t.onSuccess = function(e) { clearTimeout(p), t.rtcStatsCollector.startNetworkQualityTimer(), t.onSuccess = null, u(null, e) }, t.onFailure = function(e) { return u(e) }, t.channel = r, t.gatewayClient.state !== R.a.DISCONNECTED) return i.default.error("[".concat(t.clientId, "] Client already in connecting/connected state")), u(T.default.INVALID_OPERATION), void o.report.joinGateway(e.sessionId, { lts: Date.now(), succ: !1, ec: T.default.INVALID_OPERATION, addr: null });
            t.gatewayClient.state = R.a.CONNECTING;
            var g = function(o, a) { i.default.info("[".concat(t.clientId, "] Joining channel: ").concat(r)), t.gatewayClient.dispatchEvent({ type: "config-distribute", config: a, joinInfo: f }), t.key = n || e.appId, f.cid = o.cid, f.uid || (f.uid = o.uid), f.vid = o.vid, f.clientId = t.clientId, f.apResponse = o.res, o.uni_lbs_ip && o.uni_lbs_ip[1] && (f.uni_lbs_ip = o.uni_lbs_ip[1]), f.gatewayAddr = o.gateway_addr, t.joinInfo = f, t.gatewayClient.join(f, t.key, (function(e) { i.default.info("[".concat(t.clientId, "] Join channel ").concat(r, " success, join with uid: ").concat(e, ".")), t.onSuccess = null, t.rtcStatsCollector.startNetworkQualityTimer(), u(null, e) }), (function(e) { return u(e) })) };
            f.stringUid && !f.uid ? (t.userAccountReq && !t.userAccountReq.isFinished() && t.userAccountReq.cancel(), t.userAccountReq = Object(A.getUserAccount)(f, t.gatewayClient), t.userAccountReq.then((function(e) { i.default.debug("getUserAccount Success ".concat(e.url, " ").concat(f.stringUid, " => ").concat(e.uid)), f.uid = e.uid, Object(A.getGatewayList)(f, g, (function(e) { return u(e) })) })).catch((function(e) { i.default.error("getUserAccount rejected", e), u(e) }))) : Object(A.getGatewayList)(f, g, (function(e) { return u(e) }))
          }, t.renewChannelKey = function(n, r, a) {
            var s = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e, t) {
                if (e) return a && a(e);
                r && r(t)
              },
              name: "Client.renewChannelKey",
              options: arguments,
              tag: "tracer"
            });
            Object(k.checkValidString)(n, "key", 1, 2047), void 0 === t.key ? (i.default.error("[".concat(t.clientId, "] renewChannelKey should not be called before user join")), s(T.default.INVALID_OPERATION)) : (t.key = n, t.gatewayClient.joinInfo.token = n, t.gatewayClient.key = n, t.gatewayClient.recover(), s())
          }, t.leave = function(n, a) {
            t.gatewayClient.isFirstSuccess = !0, t.gatewayClient.hasInvokeLeave = !0;
            var s = !1,
              c = o.report.reportApiInvoke(e.sessionId, {
                callback: function(e, r) {
                  if (e) return a && a(e);
                  t.gatewayClient.reconnectingCS = !1, t.gatewayClient.state = R.a.DISCONNECTED, clearTimeout(Object(A._getReconnectCSTimer)(t.clientId)), t._renewSession(), t.rtcStatsCollector.clearNetworkQualityTimer(), n && n(r)
                },
                name: "Client.leave",
                options: arguments,
                tag: "tracer"
              });
            i.default.info("[".concat(t.clientId, "] Leaving channel")), t.userAccountReq && !t.userAccountReq.isFinished() && (t.userAccountReq.cancel(), t.gatewayClient.state === R.a.CONNECTING && (t.gatewayClient.state = R.a.DISCONNECTED)), t.gatewayClient.leave((function(e) { s = !0, c(null, e) }), c), setTimeout((function() { s || (t.gatewayClient.socket && (t.gatewayClient.socket.close(), t.gatewayClient.socket = null), t.gatewayClient.state = R.a.DISCONNECTED, c(null, "LEAVE_MSG_TIMEOUT")) }), Object(r.getParameter)("LEAVE_MSG_TIMEOUT"))
          }, t._renewSession = function() {
            var n = Object(I.generateSessionId)();
            if (i.default.debug("renewSession ".concat(e.sessionId, " => ").concat(n)), e.sessionId = n, t.gatewayClient.peerPublishDurationMap.clear(), t.joinInfo && (t.joinInfo.sid = n), t.gatewayClient && (t.gatewayClient.joinInfo && (t.gatewayClient.joinInfo.sid = n), t.gatewayClient.localStreams))
              for (var r in t.gatewayClient.localStreams) {
                var o = t.gatewayClient.localStreams[r];
                o && (o.sid = n)
              }
          }, t._publish = function(n, o, a, s) {
            if (2 !== t.highStreamState) return i.default.warning("[".concat(t.clientId, "] Can't publish stream when stream already publish ").concat(n.getId())), a && a(T.default.STREAM_ALREADY_PUBLISHED);
            if (0 === t.turnServers.length && Object(r.getParameter)("FORCE_TURN") && !Object(r.getParameter)("TURN_ENABLE_TCP") && !Object(r.getParameter)("TURN_ENABLE_UDP")) throw new Error("force TURN With No TURN Configuration");
            i.default.info("[".concat(t.clientId, "] Publishing stream, uid ").concat(n.getId())), t.highStream = n, t.highStreamState = 1, t.highStream.streamId = t.joinInfo.stringUid || t.joinInfo.uid, t.hasPublished = !1;
            var c = function(n, r, o) { t.gatewayClient.publish(n, { streamType: 0 }, (function() { n.sid = e.sessionId, t.highStreamState = 0, i.default.info("[".concat(t.clientId, "] Publish success, uid: ").concat(n.getId())), t.highStream && (t.highStream.isDualStream = t.isDualStream), t.isDualStream ? t._publishLowStream((function() { r && r() }), (function(e) { i.default.warning("[".concat(t.clientId, "] "), e), U.a.replaceWithCanvasTrack(n).then((function() { r && r() })) })) : U.a.replaceWithCanvasTrack(n).then((function() { r && r() })) }), o) };
            "audience" !== t.gatewayClient.role || "live" !== t.mode || s ? c(n, o, a) : t.gatewayClient.setClientRole(B, (function(e) {
              if (e) return a && a(e);
              c(n, o, a)
            }))
          }, t._unpublish = function(e, n, r, o) {
            if (0 !== t.highStreamState) return i.default.warning("[".concat(t.clientId, "] Can't unpublish stream when stream not publish")), r && r(T.default.STREAM_NOT_YET_PUBLISHED);
            i.default.info("[".concat(t.clientId, "] Unpublish stream, uid ").concat(e.getId()));
            var a = function(e, n, r) { t.isDualStream && t.lowStream && t._unpublishLowStream(null, r), t.gatewayClient.unpublish(e, { streamType: 0 }, (function() { t.highStreamState = 2, i.default.info("[".concat(t.clientId, "] Unpublish stream success, uid: ").concat(e.getId())), n && n() }), (function(n) { i.default.info("[".concat(t.clientId, "] Unpublish stream fail, uid: ").concat(e.getId())), r && r(n) })) };
            t.gatewayClient.role !== B || "live" !== t.mode || o ? a(e, n, r) : t.gatewayClient.setClientRole("audience", (function(t) {
              if (t) return r && r(t);
              a(e, n, r)
            }))
          }, t.publish = function(n, r) {
            var i = o.report.reportApiInvoke(e.sessionId, { callback: function(e, n) { if (e) return 1 === t.highStreamState && (t.highStreamState = 2), r && r(e) }, name: "Client.publish", tag: "tracer", options: { stream: "too long to show", onFailure: !!r } });
            2 === t.highStreamState ? n._hasVideoTracks() || n._hasAudioTracks() ? (t.gatewayClient.publishRequestId = Object(I.generateId)(), t._publish(n, (function(e) { return i(null, e) }), (function(e) { return i(e) }))) : i(T.default.NO_TRACK_IN_STREAM) : i(T.default.STREAM_ALREADY_PUBLISHED)
          }, t.unpublish = function(n, r, i) {
            var a = o.report.reportApiInvoke(e.sessionId, {
              callback: function(e, t) {
                if (e) return r && r(e);
                i && i(t)
              },
              name: "Client.unpublish",
              tag: "tracer",
              options: { stream: "too long to show", onFailure: !!r }
            });
            0 === t.highStreamState ? (t.gatewayClient.publishRequestId = null, t._unpublish(n, (function(e) { return a(null, e) }), (function(e) { return a(e) }))) : a(T.default.STREAM_NOT_YET_PUBLISHED)
          }, t.subscribe = function(n, r, a) {
            var c = o.report.reportApiInvoke(e.sessionId, { callback: function(e, t) { if (e) return a && a(e) }, name: "Client.subscribe", tag: "tracer", options: { stream: "too long to show", options: r, onFailure: !!a } });
            "function" == typeof r && (a = r, r = null), Object(k.checkValidObject)(n, "stream"), Object(k.isEmpty)(r) || (Object(k.checkValidObject)(r, "options"), Object(k.isEmpty)(r.video) || Object(k.checkValidBoolean)(r.video, "options.video"), Object(k.isEmpty)(r.audio) || Object(k.checkValidBoolean)(r.audio, "options.audio"));
            var d = { video: !0, audio: !0 };
            if (!Object(k.isEmpty)(r)) { if (Object(s.isSafari)() && (!r.video || !r.audio)) { var u = "SAFARI_NOT_SUPPORTED_FOR_TRACK_SUBSCRIPTION"; return i.default.error("[".concat(t.clientId, "] "), u), void c(u) } if (!Object(k.isEmpty)(r.video) && !Object(k.isValidBoolean)(r.video) || !Object(k.isEmpty)(r.audio) && !Object(k.isValidBoolean)(r.audio) || !1 === r.audio && !1 === r.video) { u = "INVALID_PARAMETER ".concat(JSON.stringify(r)); return i.default.error("[".concat(t.clientId, "] "), u), void c(u) } }
            n.subscribeOptions ? (y()(n.subscribeOptions, d, r), t.gatewayClient.subscribeChange(n, (function(e) { return c(null, e) }), c)) : (t.gatewayClient.subscribeRequestId.set(n.getId(), Object(I.generateId)()), n.subscribeOptions = y()({}, d, r), t.gatewayClient.subscribe(n, (function(e) { return c(null, e) }), c))
          }, t.unsubscribe = function(n, r) {
            var a = o.report.reportApiInvoke(e.sessionId, { callback: function(e, t) { if (e) return r && r(e) }, name: "Client.unsubscribe", tag: "tracer", options: { stream: "too long to show", onFailure: !!r } });
            i.default.info("[".concat(t.clientId, "] Unsubscribe stream, uid: ").concat(n.getId())), t.gatewayClient.subscribeRequestId.delete(n.getId()), t.gatewayClient.unsubscribe(n, (function(e) { return a(null, e) }), a)
          }, t.setRemoteVideoStreamType = function(n, r) {
            var i = o.report.reportApiInvoke(e.sessionId, { name: "Client.setRemoteVideoStreamType", tag: "tracer", options: { stream: "too long to show", streamType: r } });
            Object(k.checkValidEnum)(r, "streamType", [0, 1]), t.gatewayClient.setRemoteVideoStreamType(n, r), i()
          }, t.setStreamFallbackOption = function(n, r) {
            var i = o.report.reportApiInvoke(e.sessionId, { name: "Client.setStreamFallbackOption", tag: "tracer", options: { stream: "too long to show", fallbackType: r } });
            Object(k.checkValidEnum)(r, "fallbackType", [0, 1, 2]), t.gatewayClient.setStreamFallbackOption(n, r), i()
          }, t.enableAudioVolumeIndicator = function(n, r) {
            var a = o.report.reportApiInvoke(e.sessionId, { name: "Client.enableAudioVolumeIndicator", options: arguments, tag: "tracer" });
            n = n || 2e3, r = r || 3, Object(k.checkValidNumber)(r, "smooth", 1, 100), Object(k.checkValidNumber)(n, "interval", 50, 1e5), t.audioVolumeIndication = t.audioVolumeIndication || { enabled: !0 }, t.audioVolumeIndication.interval = n, t.audioVolumeIndication.smooth = r, t.audioVolumeIndication = { interval: n, smooth: r }, i.default.info("[".concat(t.clientId, "] enableAudioVolumeIndicator interval ").concat(n, " smooth ").concat(r)), t.gatewayClient.enableAudioVolumeIndicator(n, r), a()
          }, t.getNetworkStats = function(e, n) { return i.default.deprecate("[".concat(t.clientId, "] client.getNetworkStats is deprecated. Use client.getTransportStats instead.")), M.getStats(e, n) }, t.getSystemStats = function(e, t) { return d.getStats(e, t) }, t.getRecordingDevices = function(e, t) { return l.a.getRecordingDevices(e, t) }, t.getPlayoutDevices = function(e, t) { return l.a.getPlayoutDevices(e, t) }, t.getCameras = function(e, t) { return l.a.getCameras(e, t) }, t.getRemoteAudioStats = function(e, n) { return t.rtcStatsCollector.getRemoteAudioStats(e, n) }, t.getLocalAudioStats = function(e, n) { return t.rtcStatsCollector.getLocalAudioStats(e, n) }, t.getRemoteVideoStats = function(e, n) { return t.rtcStatsCollector.getRemoteVideoStats(e, n) }, t.getLocalVideoStats = function(e, n) { return t.rtcStatsCollector.getLocalVideoStats(e, n) }, t._getRemoteVideoQualityStats = function(e, n) { return t.rtcStatsCollector.getRemoteVideoQualityStats(e, n) }, t._getRemoteAudioQualityStats = function(e, n) { return t.rtcStatsCollector.getRemoteAudioQualityStats(e, n) }, t.getTransportStats = function(e, n) {
            return t.rtcStatsCollector.getTransportStats((function(t) {
              return M.getStats((function(n) {
                var r = y()({}, t, n);
                e && e(r)
              }), n)
            }), n)
          }, t.getSessionStats = function(e, n) { return t.rtcStatsCollector.getSessionStats(e, n) }, t.onNetworkQuality = function() { return t.rtcStatsCollector.onNetworkQuality(onSuccess, onFailure) }, t.sendMetadata = function(n, r) {
            var i = o.report.reportApiInvoke(e.sessionId, {
              name: "Client.sendMetadata",
              tag: "tracer",
              callback: function(e) {
                if (e) return r && r(e);
                r && r()
              }
            });
            t.gatewayClient.sendMetadata(n, i)
          }, t.sendCustomReportMessage = function(n, a, s, c, d, u) { Object(r.getParameter)("CR") ? t.customReportCount > Object(r.getParameter)("CRL") ? u && u("REPORT_LIMITED") : (t.gatewayClient.hasJoined || (i.default.WARNING("Should invoke Client.sendCustomReportMessage after join"), u && u("REPORT_BEFORE_JOINED")), t.customReportTimer || (t.customReportTimer = setInterval((function() { t.customReportCount = 0 }), Object(r.getParameter)("CRI"))), Object(k.checkValidString)(n, "reportId", 0, 100, !1), Object(k.checkValidString)(a, "category", 0, 100, !1), Object(k.checkValidString)(s, "event", 0, 100, !1), Object(k.checkValidString)(c, "label", 0, 100, !1), Object(k.checkValidNumber)(d, "value", Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), t.customReportCount++, o.report.sendCustomReportMessage(e.sessionId, { reportId: n, category: a, event: s, label: c, value: d, lts: Date.now() }, (function(e) { e ? u && u("REPORT_FAILED") : u && u() }))) : u && u("REPORT_FORBIDDEN") }, e.clientId = t.clientId, t.gatewayClient = Object(R.a)(e), t.listenerLoggerTimer = null, t.listenerLoggerCache = [], t.on = function(e, n) { t.gatewayClient.on(e, n), t.listenerLoggerCache.push("".concat(e).concat(n.name ? ":" + n.name : "")), t.listenerLoggerTimer ? clearTimeout(t.listenerLoggerTimer) : i.default.info("[".concat(t.clientId, "] Adding event handler on ").concat(e)), t.listenerLoggerTimer = setTimeout((function() { t.listenerLoggerCache.length && (t.listenerLoggerTimer = null, i.default.info("[".concat(t.clientId, "] Added event handler on ").concat(t.listenerLoggerCache.join(", "))), t.listenerLoggerCache = []) }), 0) }, t.off = function(e, n) { i.default.info("remove event handler from [".concat(e, "]")), t.gatewayClient.removeEventListener(e, n) }, t.rtcStatsCollector = function(e) {
            var t = Object(a.b)();
            return t.gatewayClient = e, t.exceptionMonitor = new w(e), t.localStats = {}, t.remoteStats = {}, t.session = { sendBytes: 0, recvBytes: 0, WSSendBytes: 0, WSSendBytesDelta: 0, WSRecvBytes: 0, WSRecvBytesDelta: 0, HTTPSendBytes: 0, HTTPSendBytesDelta: 0, HTTPRecvBytes: 0, HTTPRecvBytesDelta: 0 }, t.getRemoteAudioStats = function(e) {
              var n = t.gatewayClient.traffic_stats,
                r = {};
              for (var i in t.remoteStats) {
                var o = {},
                  a = t.remoteStats[i];
                if (Object(b.b)(o, "End2EndDelay", a.peer_delay && a.peer_delay.audio_delay), Object(b.b)(o, "TransportDelay", a.peer_delay && a.peer_delay.e2e_delay), Object(b.b)(o, "PacketLossRate", a.peer_delay && a.peer_delay.e2e_audio_lost_ratio_400ms), Object(b.b)(o, "RecvLevel", a.audioStats && a.audioStats.audioOutputLevel), Object(b.b)(o, "RecvBitrate", a.audioRecvBitrate), Object(b.b)(o, "CodecType", a.audioStats && a.audioStats.googCodecName), Object(b.b)(o, "MuteState", a.audioDisabled), Object(b.b)(o, "TotalFreezeTime", a.audioStats && a.audioStats.audioTotalFreezeTime), Object(b.b)(o, "TotalPlayDuration", a.audioStats && a.audioStats.audioTotalPlayDuration), n && n.peer_delay) {
                  var s = n.peer_delay.find((function(e) { return e.peer_uid == i }));
                  if (s) {
                    var c = s.peer_publish_audio_duration + (Date.now() - n.timestamp);
                    Object(b.b)(o, "AudioPublishDuration", c)
                  } else Object(b.b)(o, "AudioPublishDuration", -1)
                }
                r[i] = o
              }
              e && e(r)
            }, t.getLocalAudioStats = function(e) {
              var n = {};
              for (var r in t.localStats) {
                var i = {},
                  o = t.localStats[r];
                Object(b.b)(i, "RecordingLevel", o.audioStats && o.audioStats.audioInputLevel), Object(b.b)(i, "SendLevel", o.audioStats && o.audioStats.totalAudioEnergy), Object(b.b)(i, "SamplingRate", o.audioStats && o.audioStats.totalSamplesDuration), Object(b.b)(i, "SendBitrate", o.audioSendBitrate), Object(b.b)(i, "CodecType", o.audioStats && o.audioStats.googCodecName), Object(b.b)(i, "MuteState", o.audioDisabled), Object(b.b)(i, "audioSendPacketsLost", o.audioStats && o.audioStats.packetsLost);
                var a = t.gatewayClient.localStreams[r];
                a && a.isPlaying() && Object(b.b)(i, "MuteState", a.userMuteAudio ? "1" : "0"), n[r] = i
              }
              e && e(n)
            }, t.getRemoteVideoStats = function(e) {
              var n = t.gatewayClient.traffic_stats,
                r = {};
              for (var i in t.remoteStats) {
                var o = {},
                  a = t.remoteStats[i];
                if (Object(b.b)(o, "End2EndDelay", a.peer_delay && a.peer_delay.video_delay), Object(b.b)(o, "TransportDelay", a.peer_delay && a.peer_delay.e2e_delay), Object(b.b)(o, "PacketLossRate", a.peer_delay && a.peer_delay.e2e_video_lost_ratio_400ms), Object(b.b)(o, "RecvBitrate", a.videoRecvBitrate), Object(b.b)(o, "RecvResolutionWidth", a.videoStats && a.videoStats.googFrameWidthReceived), Object(b.b)(o, "RecvResolutionHeight", a.videoStats && a.videoStats.googFrameHeightReceived), Object(b.b)(o, "RenderResolutionWidth", a.videoStats && a.videoStats.renderRemoteWidth), Object(b.b)(o, "RenderResolutionHeight", a.videoStats && a.videoStats.renderRemoteHeight), Object(b.b)(o, "RenderFrameRate", a.videoStats && a.videoStats.googFrameRateOutput), Object(b.b)(o, "MuteState", a.videoDisabled), Object(b.b)(o, "TotalFreezeTime", a.videoStats && a.videoStats.videoTotalFreezeTime), Object(b.b)(o, "TotalPlayDuration", a.videoStats && a.videoStats.videoTotalPlayDuration), n && n.peer_delay) {
                  var s = n.peer_delay.find((function(e) { return e.peer_uid == i }));
                  if (s) {
                    var c = s.peer_publish_video_duration + (Date.now() - n.timestamp);
                    Object(b.b)(o, "VideoPublishDuration", c)
                  } else Object(b.b)(o, "VideoPublishDuration", -1)
                }
                r[i] = o
              }
              e && e(r)
            }, t.getLocalVideoStats = function(e) {
              var n = {};
              for (var r in t.localStats) {
                var i = {},
                  o = t.localStats[r];
                Object(b.b)(i, "TargetSendBitrate", o.videoTargetSendBitrate), Object(b.b)(i, "SendFrameRate", o.videoStats && o.videoStats.googFrameRateSent), Object(b.b)(i, "SendBitrate", o.videoSendBitrate), Object(b.b)(i, "SendResolutionWidth", o.videoStats && o.videoStats.googFrameWidthSent), Object(b.b)(i, "SendResolutionHeight", o.videoStats && o.videoStats.googFrameHeightSent), Object(b.b)(i, "CaptureResolutionWidth", o.videoStats && o.videoStats.googFrameWidthInput), Object(b.b)(i, "CaptureResolutionHeight", o.videoStats && o.videoStats.googFrameHeightInput), Object(b.b)(i, "EncodeDelay", o.videoStats && o.videoStats.googAvgEncodeMs), Object(b.b)(i, "MuteState", o.videoDisabled), Object(b.b)(i, "TotalFreezeTime", o.videoStats && o.videoStats.videoTotalFreezeTime), Object(b.b)(i, "TotalDuration", o.videoStats && o.videoStats.videoTotalPlayDuration), Object(b.b)(i, "CaptureFrameRate", o.videoStats && o.videoStats.googFrameRateSent), Object(b.b)(i, "videoSendPacketsLost", o.videoStats && o.videoStats.packetsLost), o.videoStats && !o.videoStats.googFrameWidthInput && Object(b.b)(i, "CaptureResolutionWidth", o.videoStats && o.videoStats.renderLocalWidth), o.videoStats && !o.videoStats.googFrameHeightInput && Object(b.b)(i, "CaptureResolutionHeight", o.videoStats && o.videoStats.renderLocalHeight), n[r] = i
              }
              e && e(n)
            }, t.getRemoteVideoQualityStats = function(e) {
              var n = {};
              for (var r in t.remoteStats) {
                var i = {},
                  o = t.remoteStats[r];
                Object(b.b)(i, "videoReceiveDelay", o.videoStats && o.videoStats.googCurrentDelayMs), Object(b.b)(i, "VideoFreezeRate", o.videoStats && o.videoStats.videoFreezeRate), Object(b.b)(i, "FirstFrameTime", o.firstFrameTime), n[r] = i
              }
              e && e(n)
            }, t.getRemoteAudioQualityStats = function(e) {
              var n = {};
              for (var r in t.remoteStats) {
                var i = {},
                  o = t.remoteStats[r];
                Object(b.b)(i, "audioReceiveDelay", o.audioStats && o.audioStats.googCurrentDelayMs), Object(b.b)(i, "AudioFreezeRate", o.videoStats && o.videoStats.videoFreezeRate), n[r] = i
              }
              e && e(n)
            }, t.getTransportStats = function(e) {
              var n = {},
                r = {},
                i = t.gatewayClient.traffic_stats,
                o = i.peer_delay;
              if (Object(b.b)(n, "OutgoingAvailableBandwidth", t.gatewayClient.OutgoingAvailableBandwidth / 1e3), Object(b.b)(n, "RTT", i && 2 * i.access_delay), o) {
                var a, s = L(o);
                try {
                  for (s.s(); !(a = s.n()).done;) {
                    var c = a.value;
                    c.downlink_estimate_bandwidth && (r[c.peer_uid] = c.downlink_estimate_bandwidth / 1e3 + "")
                  }
                } catch (e) { s.e(e) } finally { s.f() }
              }
              n.IncomingAvailableBandwidth = r, e && e(n)
            }, t.getSessionStats = function(e) {
              var n = {},
                r = t.gatewayClient.traffic_stats,
                i = t.gatewayClient.socket,
                o = 0,
                a = 0;
              for (var s in t.remoteStats) {
                (c = t.remoteStats[s]) && c.videoStats && c.videoStats.videoRecvBytesDelta && (a += parseInt(c.videoStats.videoRecvBytesDelta)), c && c.audioStats && c.audioStats.audioRecvBytesDelta && (a += parseInt(c.audioStats.audioRecvBytesDelta))
              }
              for (var s in t.localStats) {
                var c;
                (c = t.localStats[s]) && c.videoStats && c.videoStats.videoSendBytesDelta && (o += parseInt(c.videoStats.videoSendBytesDelta)), c && c.audioStats && c.audioStats.audioSendBytesDelta && (o += parseInt(c.audioStats.audioSendBytesDelta))
              }
              var d = o + t.session.WSSendBytesDelta + t.session.HTTPSendBytesDelta,
                u = a + t.session.WSRecvBytesDelta + t.session.HTTPRecvBytesDelta,
                l = t.session.sendBytes + Object(O.getHTTPSendBytes)(),
                p = t.session.recvBytes + Object(O.getHTTPRecvBytes)();
              t.gatewayClient.socket && t.gatewayClient.socket.state === t.gatewayClient.CONNECTED && (l += i.getSendBytes(), p += i.getRecvBytes());
              var f = 1;
              r.peer_delay && (f = r.peer_delay.length, f += 1), Object(b.b)(n, "Duration", i.getDuration()), Object(b.b)(n, "UserCount", f), Object(b.b)(n, "SendBytes", l), Object(b.b)(n, "RecvBytes", p), Object(b.b)(n, "SendBitrate", 8 * d / 1e3), Object(b.b)(n, "RecvBitrate", 8 * u / 1e3), e && e(n)
            }, t.isLocalVideoFreeze = function(e, t) {
              var n = 0,
                r = 0;
              if (!e || !t) return !1;
              if (Object(s.isChrome)() || Object(s.isOpera)()) n = e.googFrameRateInput, r = e.googFrameRateSent;
              else if (Object(s.isSafari)()) n = parseInt(e.framerateMean), r = parseInt(e.framesEncoded) - parseInt(t.framesEncoded);
              else {
                if (!Object(s.isFireFox)()) return !1;
                n = parseInt(e.framerateMean), r = parseInt(e.framesEncoded) - parseInt(t.framesEncoded)
              }
              return n > 5 && r < 3
            }, t.isRemoteVideoFreeze = function(e, t) {
              var n = 0,
                r = 0;
              if (!e || !t) return !1;
              if (Object(s.isChrome)() || Object(s.isOpera)()) n = e.googFrameRateReceived, r = e.googFrameRateDecoded;
              else if (Object(s.isSafari)()) n = e.framerateMean, r = parseInt(e.framesDecoded) - parseInt(t.framesDecoded);
              else {
                if (!Object(s.isFireFox)()) return !1;
                n = parseInt(e.framesReceived) - parseInt(t.framesReceived), r = parseInt(e.framesDecoded) - parseInt(t.framesDecoded)
              }
              return n > 5 && n < 10 && r < 3 || (n > 10 && n < 20 && r < 4 || n > 20 && r < 5)
            }, t.isAudioFreeze = function(e) { if (Object(s.isChrome)() && e) { if (e.googDecodingPLC && e.googDecodingPLCCNG && e.googDecodingCTN) return (parseInt(e.googDecodingPLC) + parseInt(e.googDecodingPLCCNG)) / parseInt(e.googDecodingCTN) > .2 } else if ((Object(s.isSafari)() || Object(s.isFireFox)()) && e.packetsLost && e.packetsReceived) return parseInt(e.packetsLost) / (parseInt(e.packetsLost) + parseInt(e.packetsReceived)) > .2; return !1 }, t.isAudioDecodeFailed = function(e) { return !!((Object(s.isChrome)() || Object(s.isOpera)()) && e && parseInt(e.bytesReceived) > 0 && 0 === parseInt(e.googDecodingNormal)) }, t.startNetworkQualityTimer = function() {
              t.clearNetworkQualityTimer(), t.networkQualityTimer = setInterval((function() {
                if (t.gatewayClient.state !== R.a.CONNECTED) t.gatewayClient.dispatchEvent({ type: "network-quality", uplinkNetworkQuality: 0, downlinkNetworkQuality: 0 });
                else {
                  var e = t.gatewayClient.traffic_stats;
                  t.gatewayClient.dispatchEvent({ type: "network-quality", uplinkNetworkQuality: t.networkQualityTrans(e.uplink_network_quality), downlinkNetworkQuality: t.networkQualityTrans(e.downlink_network_quality) })
                }
              }), 2e3)
            }, t.clearNetworkQualityTimer = function() { t.networkQualityTimer && clearInterval(t.networkQualityTimer) }, t.networkQualityTrans = function(e) { return e >= 0 && e < .17 ? 1 : e >= .17 && e < .36 ? 2 : e >= .36 && e < .59 ? 3 : e >= .59 && e <= 1 ? 4 : e > 1 ? 5 : 0 }, t.getStatsTimer = setInterval((function() {
              var e = t.gatewayClient.traffic_stats,
                n = Date.now();
              t.gatewayClient.dispatchEvent({ type: "_testException" }), Object.keys(t.localStats).length && t.exceptionMonitor.setLocalStats(t.localStats), Object.keys(t.remoteStats).length && t.exceptionMonitor.setRemoteStats(t.remoteStats);
              var r = {};
              Object.keys(t.gatewayClient.remoteStreams).forEach((function(i) {
                var o = t.gatewayClient.remoteStreams[i],
                  a = t.remoteStats[i],
                  s = { id: i, updatedAt: n };
                r[i] = s, s.firstFrameTime = o.firstFrameTime, a ? (s.audioTotalPlayDuration = a.audioTotalPlayDuration + 1, s.audioTotalFreezeTime = a.audioTotalFreezeTime, s.isAudioFreeze = !1, s.isAudioDecodeFailed = !1, s.videoTotalPlayDuration = a.videoTotalPlayDuration + 1, s.videoTotalFreezeTime = a.videoTotalFreezeTime, s.isVideoFreeze = !1) : (s.audioTotalPlayDuration = 1, s.audioTotalFreezeTime = 0, s.videoTotalPlayDuration = 1, s.videoTotalFreezeTime = 0);
                var c = e && e.peer_delay && e.peer_delay.find((function(e) { return e.peer_uid == i }));
                c && (s.peer_delay = c), o && (o.isPlaying() && (s.audioDisabled = o.userMuteAudio || o.peerMuteAudio ? "1" : "0", s.videoDisabled = o.userMuteVideo || o.peerMuteVideo ? "1" : "0"), a && a.peer_delay && c && a.peer_delay.stream_type !== c.stream_type && t.gatewayClient.dispatchEvent({ type: "streamTypeChange", uid: i, streamType: c.stream_type }), o.pc && "established" == o.pc.state && o.pc.getStats((function(e) {
                  if (s.pcStats = e, s.audioStats = e.find((function(e) { return "audio" == e.mediaType && (e.id.indexOf("_recv") > -1 || e.id.toLowerCase().indexOf("inbound") > -1) })), s.videoStats = e.find((function(e) { return "video" == e.mediaType && (e.id.indexOf("_recv") > -1 || e.id.toLowerCase().indexOf("inbound") > -1) })), a && a.audioStats && s.audioStats) {
                    var n = parseInt(s.audioStats.bytesReceived) - parseInt(a.audioStats.bytesReceived),
                      r = parseInt(s.audioStats.googDecodingNormal) - parseInt(a.audioStats.googDecodingNormal);
                    if (s.audioStats.audioRecvBytesDelta = n, s.audioStats.audioDecodingNormalDelta = r, t.session.recvBytes += n, isFinite(n) && s.audioStats.timestamp) {
                      var i = s.audioStats.timestamp.getTime() - a.audioStats.timestamp.getTime();
                      s.audioRecvBitrate = Math.floor(8 * n / i)
                    }
                    t.isAudioFreeze(s.audioStats) && s.audioTotalPlayDuration > 10 && (s.audioTotalFreezeTime++, s.isAudioFreeze = !0), t.isAudioDecodeFailed(s.audioStats) && s.audioTotalPlayDuration > 10 && (s.isAudioDecodeFailed = !0), s.audioStats.audioTotalFreezeTime = s.audioTotalFreezeTime, s.audioStats.audioTotalPlayDuration = s.audioTotalPlayDuration, s.audioStats.audioFreezeRate = Math.ceil(100 * s.audioTotalFreezeTime / s.audioTotalPlayDuration)
                  }
                  if (a && a.videoStats && s.videoStats) {
                    var c = parseInt(s.videoStats.bytesReceived) - parseInt(a.videoStats.bytesReceived);
                    if (s.videoStats.videoRecvBytesDelta = c, t.session.recvBytes += c, isFinite(c) && s.videoStats.timestamp) {
                      i = s.videoStats.timestamp.getTime() - a.videoStats.timestamp.getTime();
                      s.videoRecvBitrate = Math.floor(8 * c / i)
                    }
                    t.isRemoteVideoFreeze(s.videoStats, a.videoStats) && (s.videoTotalFreezeTime++, s.isVideoFreeze = !0), s.videoStats.videoTotalFreezeTime = s.videoTotalFreezeTime, s.videoStats.videoTotalPlayDuration = s.videoTotalPlayDuration, s.videoStats.videoFreezeRate = Math.ceil(100 * s.videoTotalFreezeTime / s.videoTotalPlayDuration), o.player && o.player.video && o.player.video.videoWidth && o.player.video.videoHeight ? (s.videoStats.renderRemoteWidth = o.player.video.videoWidth, s.videoStats.renderRemoteHeight = o.player.video.videoHeight) : (s.videoStats.renderRemoteWidth = o.videoWidth || s.videoStats.googFrameWidthReceived, s.videoStats.renderRemoteHeight = o.videoHeight || s.videoStats.googFrameHeightReceived)
                  }
                })))
              })), t.remoteStats = r;
              var i = {};
              if (Object.keys(t.gatewayClient.localStreams).forEach((function(e) {
                  var r = t.gatewayClient.localStreams[e],
                    o = t.localStats[e],
                    a = { id: e, updatedAt: n };
                  i[e] = a, o ? (a.videoTotalPlayDuration = o.videoTotalPlayDuration + 1, a.videoTotalFreezeTime = o.videoTotalFreezeTime, a.isVideoFreeze = !1) : (a.videoTotalPlayDuration = 1, a.videoTotalFreezeTime = 0), r && (r.isPlaying() && (a.audioDisabled = r.userMuteAudio ? "1" : "0", a.videoDisabled = r.userMuteVideo ? "1" : "0"), r.video && r.attributes.maxVideoBW ? a.videoTargetSendBitrate = r.attributes.maxVideoBW : r.video && r.screenAttributes && (a.videoTargetSendBitrate = r.screenAttributes.maxVideoBW), r.pc && "established" == r.pc.state && r.pc.getStats((function(e) {
                    if (a.pcStats = e.reverse(), a.audioStats = e.find((function(e) { return "audio" == e.mediaType && (e.id.indexOf("_send") > -1 || e.id.toLowerCase().indexOf("outbound") > -1) })), a.videoStats = e.find((function(e) { return "video" == e.mediaType && (e.id.indexOf("_send") > -1 || e.id.toLowerCase().indexOf("outbound") > -1) })), a.audioStats && o && o.audioStats) {
                      var n = parseInt(a.audioStats.bytesSent) - parseInt(o.audioStats.bytesSent);
                      if (a.audioStats.audioSendBytesDelta = n, t.session.sendBytes += n, isFinite(n) && a.audioStats.timestamp) {
                        var i = a.audioStats.timestamp.getTime() - o.audioStats.timestamp.getTime();
                        a.audioSendBitrate = Math.floor(8 * n / i)
                      }
                    }
                    if (a.videoStats && o && o.videoStats) {
                      var s = parseInt(a.videoStats.bytesSent) - parseInt(o.videoStats.bytesSent);
                      if (a.videoStats.videoSendBytesDelta = s, t.session.sendBytes += s, isFinite(s) && a.videoStats.timestamp) {
                        i = a.videoStats.timestamp.getTime() - o.videoStats.timestamp.getTime();
                        a.videoSendBitrate = Math.floor(8 * s / i)
                      }
                      t.isLocalVideoFreeze(a.videoStats, o.videoStats) && (a.videoTotalFreezeTime++, a.isVideoFreeze = !0), a.videoStats.videoTotalFreezeTime = a.videoTotalFreezeTime, a.videoStats.videoTotalPlayDuration = a.videoTotalPlayDuration, a.videoStats.videoFreezeRate = Math.ceil(100 * a.videoTotalFreezeTime / a.videoTotalPlayDuration), a.videoStats.renderLocalWidth = r.videoWidth || a.videoStats.googFrameWidthSent, a.videoStats.renderLocalHeight = r.videoHeight || a.videoStats.googFrameHeightSent
                    }
                  })))
                })), t.localStats = i, t.session.HTTPSendBytesDelta = Object(O.getHTTPSendBytes)() - t.session.HTTPSendBytes, t.session.HTTPSendBytes = Object(O.getHTTPSendBytes)(), t.session.HTTPRecvBytesDelta = Object(O.getHTTPRecvBytes)() - t.session.HTTPRecvBytes, t.session.HTTPRecvBytes = Object(O.getHTTPRecvBytes)(), t.gatewayClient.socket && t.gatewayClient.socket.state === t.gatewayClient.CONNECTED) {
                var o = t.gatewayClient.socket;
                t.session.WSSendBytesDelta = o.getSendBytes() - t.session.WSSendBytes, t.session.WSSendBytes = o.getSendBytes(), t.session.WSRecvBytesDelta = o.getRecvBytes() - t.session.WSRecvBytes, t.session.WSRecvBytes = o.getRecvBytes()
              }
            }), 1e3), t.gatewayClient.on("join", (function() { t.session = { sendBytes: 0, recvBytes: 0, WSSendBytes: 0, WSSendBytesDelta: 0, WSRecvBytes: 0, WSRecvBytesDelta: 0, HTTPSendBytes: 0, HTTPSendBytesDelta: 0, HTTPRecvBytes: 0, HTTPRecvBytesDelta: 0 } })), t
          }(t.gatewayClient), t.configDistributManager = function(e) {
            var t = {};
            return t.client = e, t.client.gatewayClient && t.client.gatewayClient.on("config-distribute", (function(n) {
              var a = n.joinInfo,
                s = n.config;
              if (s) {
                Object(k.isEmpty)(s.uploadLog) || (Object(r.setParameter)("UPLOAD_LOG", s.uploadLog), o.report.reportApiInvoke(a.sid, { name: "_configDistribute", options: { feature: "uploadLog", value: s.uploadLog } })()), Object(k.isEmpty)(s.dualStream) || (e.isDualStream = s.dualStream, o.report.reportApiInvoke(a.sid, { name: "_configDistribute", options: { feature: "dualStream", value: s.dualStream } })()), Object(k.isEmpty)(s.streamFallbackOption) || t.client.gatewayClient && t.client.gatewayClient.on("stream-subscribed", (function(e) {
                  var n = e.stream;
                  n ? (t.client.gatewayClient.setStreamFallbackOption(n, s.streamFallbackOption), o.report.reportApiInvoke(a.sid, { name: "_configDistribute", options: { feature: "streamFallbackOption", value: s.streamFallbackOption, streamId: n.getId() } })()) : o.report.reportApiInvoke(a.sid, { name: "_configDistribute", options: { feature: "streamFallbackOption", value: s.streamFallbackOption, streamId: n.getId(), err: "invalid stream" } })()
                }));
                try { i.default.debug("[".concat(e.clientId, "] setParameter in distribution: ").concat(JSON.stringify(s))), Object.keys(s).map((function(e) { return Object(r.setParameter)(e, s[e]) })) } catch (t) { i.default.debug("[".concat(e.clientId, "] setParameter in distribution failed: ").concat(JSON.stringify(s))) }
              }
            })), t
          }(t), Object(P.addLiveStreamingCapability)(t, e), e.areaCode) {
          var n = Object(V.getAreaDomainConfig)(e.areaCode);
          Object.keys(n).map((function(e) { "LOG_UPLOAD_SERVER" == e || "EVENT_REPORT_DOMAIN" == e || "EVENT_REPORT_BACKUP_DOMAIN" == e ? Object(r.setParameter)(e, n[e][0]) : Object(r.setParameter)(e, n[e]) }))
        }
        return Object(k.isEmpty)(e.turnServer) || t.setTurnServer(e.turnServer), Object(k.isEmpty)(e.proxyServer) || t.setProxyServer(e.proxyServer), "live" === t.mode && (t.gatewayClient.role = "audience"), "rtc" === t.mode && (t.gatewayClient.role = B), t.gatewayClient.on("onMultiIP", (function(e) {
          t.gatewayClient.closeGateway(), t.gatewayClient.socket = void 0, t.gatewayClient.hasChangeBGPAddress = !0, t.joinInfo.multiIP = e.option, t.gatewayClient.state = R.a.CONNECTING;
          var n = function(e) {
            i.default.info("[".concat(t.clientId, "] Joining channel: ").concat(t.channel)), t.joinInfo.cid = e.cid, t.joinInfo.uid || (t.joinInfo.uid = e.uid), t.joinInfo.uni_lbs_ip = e.uni_lbs_ip, t.joinInfo.gatewayAddr = e.gateway_addr, t.onSuccess ? t.gatewayClient.join(t.joinInfo, t.key, (function(e) {
              i.default.info("[".concat(t.clientId, "] Join channel ").concat(t.channel, " success"));
              var n = t.onSuccess;
              t.onSuccess = null, t.onFailure = null, n(e)
            }), t.onFailure) : (t.gatewayClient.joinInfo = y()({}, t.joinInfo), t.gatewayClient.rejoin())
          };
          t.joinInfo.stringUid && !t.joinInfo.uid ? (t.userAccountReq && !t.userAccountReq.isFinished() && t.userAccountReq.cancel(), t.userAccountReq = Object(A.getUserAccount)(joinInfo, t.gatewayClient), t.userAccountReq.then((function(e) { i.default.error("getUserAccount Success ".concat(e.url, " ").concat(joinInfo.stringUid, " => ").concat(e.uid)), t.joinInfo.uid = e.uid, Object(A.getGatewayList)(t.joinInfo, n, t.onFailure) })).catch((function(e) { i.default.error("getUserAccount rejected", e), t.onFailure(e) }))) : Object(A.getGatewayList)(t.joinInfo, n, t.onFailure)
        })), t.gatewayClient.on("rejoin-start", (function() { t._renewSession(), o.report.sessionInit(e.sessionId, { lts: (new Date).getTime(), extend: { rejoin: !0 }, cname: t.channel, appid: e.appId, mode: e.mode, succ: !0 }) })), t.gatewayClient.on("recover", (function() { t._renewSession(), console.log("recover", e.sessionId), o.report.sessionInit(e.sessionId, { lts: (new Date).getTime(), extend: { recover: !0 }, cname: t.channel, appid: e.appId, mode: e.mode, succ: !0 }) })), t.gatewayClient.on("rejoin", (function() {
          var e = t.highStreamState;
          if (i.default.debug("[".concat(t.clientId, "] Client local stream preState: ").concat(e)), t.onSuccess) {
            var n = t.onSuccess;
            t.onSuccess = null, t.onFailure = null, n(t.joinInfo.uid)
          }!t.highStream || 0 !== e && 1 !== e || (i.default.info("[".concat(t.clientId, "] publish after rejoin")), t.highStreamState = 2, t.lowStreamState = 2, t.publish(t.highStream, (function(e) { e && i.default.info("[".concat(t.clientId, "] "), e) })))
        })), t.gatewayClient.on("streamPublished", (function(e) { t.hasPublished || (t.hasPublished = !0, t.gatewayClient.dispatchEvent(Object(a.e)({ type: "stream-published", stream: e.stream }))) })), t.gatewayClient.on("pubP2PLost", (function(e) { i.default.debug("[".concat(t.clientId, "] Start reconnect local peerConnection: ").concat(t.highStream.getId())), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-start", uid: t.highStream.getId() }), 1 === t.highStreamState && (t.highStreamState = 0, t.lowStreamState = 0), t._unpublish(t.highStream, (function() { t._publish(t.highStream, (function() { i.default.debug("[".concat(t.clientId, "] Reconnect local peerConnection success: ").concat(t.highStream.getId())), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", uid: t.highStream.getId(), success: !0, reason: "" }) }), (function(e) { i.default.debug("[".concat(t.clientId, "] Reconnect local peerConnection failed: ").concat(e)), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", uid: t.highStream.getId(), success: !1, reason: e }) }), !0) }), (function(e) { i.default.debug("[".concat(t.clientId, "] Reconnect local peerConnection failed: ").concat(e)), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", uid: t.highStream.getId(), success: !1, reason: e }) }), !0) })), t.gatewayClient.on("subP2PLost", (function(e) {
          i.default.debug("[".concat(t.clientId, "] Start reconnect remote peerConnection: ").concat(e.stream.getId(), " ").concat(e.stream.subscribeOptions)), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-start", uid: e.stream.getId() });
          var n = e.stream.subscribeOptions;
          console.log("Re-subscribe stream", n, e.stream), t.gatewayClient.unsubscribe(e.stream, (function() { e.stream.subscribeOptions = n, t.gatewayClient.subscribe(e.stream, (function() { i.default.debug("[".concat(t.clientId, "] Reconnect remote peerConnection success: ").concat(e.stream.getId())), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", uid: e.stream.getId(), success: !0, reason: "" }) }), (function(n) { i.default.debug("[".concat(t.clientId, "] Reconnect remote peerConnection failed: "), n), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", uid: e.stream.getId(), success: !1, reason: n }) })) }), (function(n) { i.default.debug("[".concat(t.clientId, "] Reconnect remote peerConnection failed: "), n), t.gatewayClient.dispatchEvent({ type: "stream-reconnect-end", uid: e.stream.getId(), success: !1, reason: n }) }))
        })), M.on("networkTypeChanged", (function(e) {
          t.gatewayClient && t.gatewayClient.dispatchEvent(e);
          var n = y()({}, e, { type: "network-type-changed" });
          t.gatewayClient.dispatchEvent(n)
        })), l.a.on("recordingDeviceChanged", (function(e) {
          t.gatewayClient && t.gatewayClient.dispatchEvent(e);
          var n = y()({}, e, { type: "recording-device-changed" });
          t.gatewayClient.dispatchEvent(n)
        })), l.a.on("playoutDeviceChanged", (function(e) {
          t.gatewayClient && t.gatewayClient.dispatchEvent(e);
          var n = y()({}, e, { type: "playout-device-changed" });
          t.gatewayClient.dispatchEvent(n)
        })), l.a.on("cameraChanged", (function(e) {
          t.gatewayClient && t.gatewayClient.dispatchEvent(e);
          var n = y()({}, e, { type: "camera-changed" });
          t.gatewayClient.dispatchEvent(n)
        })), t.gatewayClient.on("streamTypeChange", (function(n) {
          var r = y()({}, n, { type: "stream-type-changed" });
          t.gatewayClient.dispatchEvent(r), o.report.reportApiInvoke(e.sessionId, { name: "streamTypeChange" })(null, JSON.stringify(n))
        })), t
      },
      W = { width: 640, height: 360, videoBitrate: 400, videoFramerate: 15, lowLatency: !1, audioSampleRate: 48e3, audioBitrate: 48, audioChannels: 1, videoGop: 30, videoCodecProfile: 100, userCount: 0, userConfigExtraInfo: {}, backgroundColor: 0, transcodingUsers: [] },
      G = function(e) {
        switch (e) {
          case "h264_interop":
            return "h264";
          default:
            return "vp8"
        }
      },
      H = function(e) { return -1 === m.indexOf(e.mode) ? T.default.INVALID_CLIENT_MODE : -1 === h.indexOf(e.codec) ? T.default.INVALID_CLIENT_CODEC : "h264_interop" == e.mode && "h264" !== e.codec && T.default.CLIENT_MODE_CODEC_MISMATCH },
      q = function(e) {
        switch (e.mode) {
          case "interop":
          case "h264_interop":
            e.mode = "live";
            break;
          case "web-only":
            e.mode = "rtc"
        }
      },
      J = l.a.getDevices,
      K = p.a.getScreenSources,
      Y = JSON.parse(JSON.stringify(r.SUPPORT_RESOLUTION_LIST));
    t.default = {
      TranscodingUser: { uid: 0, x: 0, y: 0, width: 0, height: 0, zOrder: 0, alpha: 1 },
      LiveTranscoding: W,
      createClient: function(e) {
        var t = o.report.reportApiInvoke(null, { name: "createClient", options: arguments, tag: "tracer" });
        (e = y()({}, e || {})).codec || (e.codec = G(e.mode));
        var n = H(e);
        if (n) throw i.default.error("Invalid parameter setting MODE: ".concat(e.mode, " CODEC: ").concat(e.codec, " ERROR ").concat(n)), t(n), new Error(n);
        return i.default.info("Creating client, MODE: ".concat(e.mode, " CODEC: ").concat(e.codec)), q(e), t(null, e), F(e)
      },
      createStream: u.b,
      Logger: i.default,
      report: o.report,
      getDevices: J,
      getScreenSources: K,
      getParameter: r.getParameter,
      setParameter: r.setParameter,
      checkSystemRequirements: function() {
        var e = o.report.reportApiInvoke(null, { name: "checkSystemRequirements", options: arguments, tag: "tracer" }),
          t = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
          n = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
          r = window.WebSocket,
          a = !!t && !!n && !!r,
          c = !1;
        s.isChrome() && s.getBrowserVersion() >= 58 && "iOS" !== s.getBrowserOS() && (c = !0), s.isFireFox() && s.getBrowserVersion() >= 56 && (c = !0), s.isOpera() && s.getBrowserVersion() >= 45 && (c = !0), s.isSafari() && s.getBrowserVersion() >= 11 && (c = !0), s.isEdge() && (c = !0), (s.isWeChatBrowser() || s.isQQBrowser()) && "iOS" !== s.getBrowserOS() && (c = !0), s.isSupportedPC() || s.isSupportedMobile() || (c = !1), i.default.debug(s.getBrowserInfo(), "isAPISupport: " + a + ", isVendorAndVersionSupport: " + c);
        var d = a && c;
        return e(null, d), d
      },
      getSupportedCodec: f.getSupportedCodec,
      ChannelMediaRelayConfiguration: g.ChannelMediaRelayConfiguration,
      VERSION: r.VERSION,
      BUILD: r.BUILD,
      PROFILE_TABLE: Y,
      AUDIO_SAMPLE_RATE_32000: 32e3,
      AUDIO_SAMPLE_RATE_44100: 44100,
      AUDIO_SAMPLE_RATE_48000: 48e3,
      VIDEO_CODEC_PROFILE_BASELINE: 66,
      VIDEO_CODEC_PROFILE_MAIN: 77,
      VIDEO_CODEC_PROFILE_HIGH: 100,
      REMOTE_VIDEO_STREAM_HIGH: 0,
      REMOTE_VIDEO_STREAM_LOW: 1,
      REMOTE_VIDEO_STREAM_MEDIUM: 2,
      AREAS: V.AREAS,
      AREA_VERSION: "global"
    }
  }]).default
}));