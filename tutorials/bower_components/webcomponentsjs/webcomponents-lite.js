'use strict';

/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.7.24
!function () {
  window.WebComponents = window.WebComponents || { flags: {} };var e = "webcomponents-lite.js",
      t = document.querySelector('script[src*="' + e + '"]'),
      n = {};if (!n.noOpts) {
    if (location.search.slice(1).split("&").forEach(function (e) {
      var t,
          o = e.split("=");o[0] && (t = o[0].match(/wc-(.+)/)) && (n[t[1]] = o[1] || !0);
    }), t) for (var o, r = 0; o = t.attributes[r]; r++) {
      "src" !== o.name && (n[o.name] = o.value || !0);
    }if (n.log && n.log.split) {
      var i = n.log.split(",");n.log = {}, i.forEach(function (e) {
        n.log[e] = !0;
      });
    } else n.log = {};
  }n.register && (window.CustomElements = window.CustomElements || { flags: {} }, window.CustomElements.flags.register = n.register), WebComponents.flags = n;
}(), function (e) {
  "use strict";
  function t(e) {
    return void 0 !== h[e];
  }function n() {
    s.call(this), this._isInvalid = !0;
  }function o(e) {
    return "" == e && n.call(this), e.toLowerCase();
  }function r(e) {
    var t = e.charCodeAt(0);return t > 32 && t < 127 && [34, 35, 60, 62, 63, 96].indexOf(t) == -1 ? e : encodeURIComponent(e);
  }function i(e) {
    var t = e.charCodeAt(0);return t > 32 && t < 127 && [34, 35, 60, 62, 96].indexOf(t) == -1 ? e : encodeURIComponent(e);
  }function a(e, a, s) {
    function c(e) {
      g.push(e);
    }var d = a || "scheme start",
        l = 0,
        u = "",
        w = !1,
        _ = !1,
        g = [];e: for (; (e[l - 1] != p || 0 == l) && !this._isInvalid;) {
      var b = e[l];switch (d) {case "scheme start":
          if (!b || !m.test(b)) {
            if (a) {
              c("Invalid scheme.");break e;
            }u = "", d = "no scheme";continue;
          }u += b.toLowerCase(), d = "scheme";break;case "scheme":
          if (b && v.test(b)) u += b.toLowerCase();else {
            if (":" != b) {
              if (a) {
                if (p == b) break e;c("Code point not allowed in scheme: " + b);break e;
              }u = "", l = 0, d = "no scheme";continue;
            }if (this._scheme = u, u = "", a) break e;t(this._scheme) && (this._isRelative = !0), d = "file" == this._scheme ? "relative" : this._isRelative && s && s._scheme == this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data";
          }break;case "scheme data":
          "?" == b ? (this._query = "?", d = "query") : "#" == b ? (this._fragment = "#", d = "fragment") : p != b && "\t" != b && "\n" != b && "\r" != b && (this._schemeData += r(b));break;case "no scheme":
          if (s && t(s._scheme)) {
            d = "relative";continue;
          }c("Missing scheme."), n.call(this);break;case "relative or authority":
          if ("/" != b || "/" != e[l + 1]) {
            c("Expected /, got: " + b), d = "relative";continue;
          }d = "authority ignore slashes";break;case "relative":
          if (this._isRelative = !0, "file" != this._scheme && (this._scheme = s._scheme), p == b) {
            this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._username = s._username, this._password = s._password;break e;
          }if ("/" == b || "\\" == b) "\\" == b && c("\\ is an invalid code point."), d = "relative slash";else if ("?" == b) this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = "?", this._username = s._username, this._password = s._password, d = "query";else {
            if ("#" != b) {
              var y = e[l + 1],
                  E = e[l + 2];("file" != this._scheme || !m.test(b) || ":" != y && "|" != y || p != E && "/" != E && "\\" != E && "?" != E && "#" != E) && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password, this._path = s._path.slice(), this._path.pop()), d = "relative path";continue;
            }this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._fragment = "#", this._username = s._username, this._password = s._password, d = "fragment";
          }break;case "relative slash":
          if ("/" != b && "\\" != b) {
            "file" != this._scheme && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password), d = "relative path";continue;
          }"\\" == b && c("\\ is an invalid code point."), d = "file" == this._scheme ? "file host" : "authority ignore slashes";break;case "authority first slash":
          if ("/" != b) {
            c("Expected '/', got: " + b), d = "authority ignore slashes";continue;
          }d = "authority second slash";break;case "authority second slash":
          if (d = "authority ignore slashes", "/" != b) {
            c("Expected '/', got: " + b);continue;
          }break;case "authority ignore slashes":
          if ("/" != b && "\\" != b) {
            d = "authority";continue;
          }c("Expected authority, got: " + b);break;case "authority":
          if ("@" == b) {
            w && (c("@ already seen."), u += "%40"), w = !0;for (var L = 0; L < u.length; L++) {
              var N = u[L];if ("\t" != N && "\n" != N && "\r" != N) {
                if (":" != N || null !== this._password) {
                  var M = r(N);null !== this._password ? this._password += M : this._username += M;
                } else this._password = "";
              } else c("Invalid whitespace in authority.");
            }u = "";
          } else {
            if (p == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
              l -= u.length, u = "", d = "host";continue;
            }u += b;
          }break;case "file host":
          if (p == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
            2 != u.length || !m.test(u[0]) || ":" != u[1] && "|" != u[1] ? 0 == u.length ? d = "relative path start" : (this._host = o.call(this, u), u = "", d = "relative path start") : d = "relative path";continue;
          }"\t" == b || "\n" == b || "\r" == b ? c("Invalid whitespace in file host.") : u += b;break;case "host":case "hostname":
          if (":" != b || _) {
            if (p == b || "/" == b || "\\" == b || "?" == b || "#" == b) {
              if (this._host = o.call(this, u), u = "", d = "relative path start", a) break e;continue;
            }"\t" != b && "\n" != b && "\r" != b ? ("[" == b ? _ = !0 : "]" == b && (_ = !1), u += b) : c("Invalid code point in host/hostname: " + b);
          } else if (this._host = o.call(this, u), u = "", d = "port", "hostname" == a) break e;break;case "port":
          if (/[0-9]/.test(b)) u += b;else {
            if (p == b || "/" == b || "\\" == b || "?" == b || "#" == b || a) {
              if ("" != u) {
                var T = parseInt(u, 10);T != h[this._scheme] && (this._port = T + ""), u = "";
              }if (a) break e;d = "relative path start";continue;
            }"\t" == b || "\n" == b || "\r" == b ? c("Invalid code point in port: " + b) : n.call(this);
          }break;case "relative path start":
          if ("\\" == b && c("'\\' not allowed in path."), d = "relative path", "/" != b && "\\" != b) continue;break;case "relative path":
          if (p != b && "/" != b && "\\" != b && (a || "?" != b && "#" != b)) "\t" != b && "\n" != b && "\r" != b && (u += r(b));else {
            "\\" == b && c("\\ not allowed in relative path.");var O;(O = f[u.toLowerCase()]) && (u = O), ".." == u ? (this._path.pop(), "/" != b && "\\" != b && this._path.push("")) : "." == u && "/" != b && "\\" != b ? this._path.push("") : "." != u && ("file" == this._scheme && 0 == this._path.length && 2 == u.length && m.test(u[0]) && "|" == u[1] && (u = u[0] + ":"), this._path.push(u)), u = "", "?" == b ? (this._query = "?", d = "query") : "#" == b && (this._fragment = "#", d = "fragment");
          }break;case "query":
          a || "#" != b ? p != b && "\t" != b && "\n" != b && "\r" != b && (this._query += i(b)) : (this._fragment = "#", d = "fragment");break;case "fragment":
          p != b && "\t" != b && "\n" != b && "\r" != b && (this._fragment += b);}l++;
    }
  }function s() {
    this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1;
  }function c(e, t) {
    void 0 === t || t instanceof c || (t = new c(String(t))), this._url = e, s.call(this);var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");a.call(this, n, null, t);
  }var d = !1;if (!e.forceJURL) try {
    var l = new URL("b", "http://a");l.pathname = "c%20d", d = "http://a/c%20d" === l.href;
  } catch (u) {}if (!d) {
    var h = Object.create(null);h.ftp = 21, h.file = 0, h.gopher = 70, h.http = 80, h.https = 443, h.ws = 80, h.wss = 443;var f = Object.create(null);f["%2e"] = ".", f[".%2e"] = "..", f["%2e."] = "..", f["%2e%2e"] = "..";var p = void 0,
        m = /[a-zA-Z]/,
        v = /[a-zA-Z0-9\+\-\.]/;c.prototype = { toString: function toString() {
        return this.href;
      }, get href() {
        if (this._isInvalid) return this._url;var e = "";return "" == this._username && null == this._password || (e = this._username + (null != this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment;
      }, set href(e) {
        s.call(this), a.call(this, e);
      }, get protocol() {
        return this._scheme + ":";
      }, set protocol(e) {
        this._isInvalid || a.call(this, e + ":", "scheme start");
      }, get host() {
        return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host;
      }, set host(e) {
        !this._isInvalid && this._isRelative && a.call(this, e, "host");
      }, get hostname() {
        return this._host;
      }, set hostname(e) {
        !this._isInvalid && this._isRelative && a.call(this, e, "hostname");
      }, get port() {
        return this._port;
      }, set port(e) {
        !this._isInvalid && this._isRelative && a.call(this, e, "port");
      }, get pathname() {
        return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData;
      }, set pathname(e) {
        !this._isInvalid && this._isRelative && (this._path = [], a.call(this, e, "relative path start"));
      }, get search() {
        return this._isInvalid || !this._query || "?" == this._query ? "" : this._query;
      }, set search(e) {
        !this._isInvalid && this._isRelative && (this._query = "?", "?" == e[0] && (e = e.slice(1)), a.call(this, e, "query"));
      }, get hash() {
        return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment;
      }, set hash(e) {
        this._isInvalid || (this._fragment = "#", "#" == e[0] && (e = e.slice(1)), a.call(this, e, "fragment"));
      }, get origin() {
        var e;if (this._isInvalid || !this._scheme) return "";switch (this._scheme) {case "data":case "file":case "javascript":case "mailto":
            return "null";}return e = this.host, e ? this._scheme + "://" + e : "";
      } };var w = e.URL;w && (c.createObjectURL = function (e) {
      return w.createObjectURL.apply(w, arguments);
    }, c.revokeObjectURL = function (e) {
      w.revokeObjectURL(e);
    }), e.URL = c;
  }
}(self), "undefined" == typeof WeakMap && !function () {
  var e = Object.defineProperty,
      t = Date.now() % 1e9,
      n = function n() {
    this.name = "__st" + (1e9 * Math.random() >>> 0) + (t++ + "__");
  };n.prototype = { set: function set(t, n) {
      var o = t[this.name];return o && o[0] === t ? o[1] = n : e(t, this.name, { value: [t, n], writable: !0 }), this;
    }, get: function get(e) {
      var t;return (t = e[this.name]) && t[0] === e ? t[1] : void 0;
    }, "delete": function _delete(e) {
      var t = e[this.name];return !(!t || t[0] !== e) && (t[0] = t[1] = void 0, !0);
    }, has: function has(e) {
      var t = e[this.name];return !!t && t[0] === e;
    } }, window.WeakMap = n;
}(), function (e) {
  function t(e) {
    b.push(e), g || (g = !0, m(o));
  }function n(e) {
    return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(e) || e;
  }function o() {
    g = !1;var e = b;b = [], e.sort(function (e, t) {
      return e.uid_ - t.uid_;
    });var t = !1;e.forEach(function (e) {
      var n = e.takeRecords();r(e), n.length && (e.callback_(n, e), t = !0);
    }), t && o();
  }function r(e) {
    e.nodes_.forEach(function (t) {
      var n = v.get(t);n && n.forEach(function (t) {
        t.observer === e && t.removeTransientObservers();
      });
    });
  }function i(e, t) {
    for (var n = e; n; n = n.parentNode) {
      var o = v.get(n);if (o) for (var r = 0; r < o.length; r++) {
        var i = o[r],
            a = i.options;if (n === e || a.subtree) {
          var s = t(a);s && i.enqueue(s);
        }
      }
    }
  }function a(e) {
    this.callback_ = e, this.nodes_ = [], this.records_ = [], this.uid_ = ++y;
  }function s(e, t) {
    this.type = e, this.target = t, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null;
  }function c(e) {
    var t = new s(e.type, e.target);return t.addedNodes = e.addedNodes.slice(), t.removedNodes = e.removedNodes.slice(), t.previousSibling = e.previousSibling, t.nextSibling = e.nextSibling, t.attributeName = e.attributeName, t.attributeNamespace = e.attributeNamespace, t.oldValue = e.oldValue, t;
  }function d(e, t) {
    return E = new s(e, t);
  }function l(e) {
    return L ? L : (L = c(E), L.oldValue = e, L);
  }function u() {
    E = L = void 0;
  }function h(e) {
    return e === L || e === E;
  }function f(e, t) {
    return e === t ? e : L && h(e) ? L : null;
  }function p(e, t, n) {
    this.observer = e, this.target = t, this.options = n, this.transientObservedNodes = [];
  }if (!e.JsMutationObserver) {
    var m,
        v = new WeakMap();if (/Trident|Edge/.test(navigator.userAgent)) m = setTimeout;else if (window.setImmediate) m = window.setImmediate;else {
      var w = [],
          _ = String(Math.random());window.addEventListener("message", function (e) {
        if (e.data === _) {
          var t = w;w = [], t.forEach(function (e) {
            e();
          });
        }
      }), m = function m(e) {
        w.push(e), window.postMessage(_, "*");
      };
    }var g = !1,
        b = [],
        y = 0;a.prototype = { observe: function observe(e, t) {
        if (e = n(e), !t.childList && !t.attributes && !t.characterData || t.attributeOldValue && !t.attributes || t.attributeFilter && t.attributeFilter.length && !t.attributes || t.characterDataOldValue && !t.characterData) throw new SyntaxError();var o = v.get(e);o || v.set(e, o = []);for (var r, i = 0; i < o.length; i++) {
          if (o[i].observer === this) {
            r = o[i], r.removeListeners(), r.options = t;break;
          }
        }r || (r = new p(this, e, t), o.push(r), this.nodes_.push(e)), r.addListeners();
      }, disconnect: function disconnect() {
        this.nodes_.forEach(function (e) {
          for (var t = v.get(e), n = 0; n < t.length; n++) {
            var o = t[n];if (o.observer === this) {
              o.removeListeners(), t.splice(n, 1);break;
            }
          }
        }, this), this.records_ = [];
      }, takeRecords: function takeRecords() {
        var e = this.records_;return this.records_ = [], e;
      } };var E, L;p.prototype = { enqueue: function enqueue(e) {
        var n = this.observer.records_,
            o = n.length;if (n.length > 0) {
          var r = n[o - 1],
              i = f(r, e);if (i) return void (n[o - 1] = i);
        } else t(this.observer);n[o] = e;
      }, addListeners: function addListeners() {
        this.addListeners_(this.target);
      }, addListeners_: function addListeners_(e) {
        var t = this.options;t.attributes && e.addEventListener("DOMAttrModified", this, !0), t.characterData && e.addEventListener("DOMCharacterDataModified", this, !0), t.childList && e.addEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.addEventListener("DOMNodeRemoved", this, !0);
      }, removeListeners: function removeListeners() {
        this.removeListeners_(this.target);
      }, removeListeners_: function removeListeners_(e) {
        var t = this.options;t.attributes && e.removeEventListener("DOMAttrModified", this, !0), t.characterData && e.removeEventListener("DOMCharacterDataModified", this, !0), t.childList && e.removeEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.removeEventListener("DOMNodeRemoved", this, !0);
      }, addTransientObserver: function addTransientObserver(e) {
        if (e !== this.target) {
          this.addListeners_(e), this.transientObservedNodes.push(e);var t = v.get(e);t || v.set(e, t = []), t.push(this);
        }
      }, removeTransientObservers: function removeTransientObservers() {
        var e = this.transientObservedNodes;this.transientObservedNodes = [], e.forEach(function (e) {
          this.removeListeners_(e);for (var t = v.get(e), n = 0; n < t.length; n++) {
            if (t[n] === this) {
              t.splice(n, 1);break;
            }
          }
        }, this);
      }, handleEvent: function handleEvent(e) {
        switch (e.stopImmediatePropagation(), e.type) {case "DOMAttrModified":
            var t = e.attrName,
                n = e.relatedNode.namespaceURI,
                o = e.target,
                r = new d("attributes", o);r.attributeName = t, r.attributeNamespace = n;var a = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;i(o, function (e) {
              if (e.attributes && (!e.attributeFilter || !e.attributeFilter.length || e.attributeFilter.indexOf(t) !== -1 || e.attributeFilter.indexOf(n) !== -1)) return e.attributeOldValue ? l(a) : r;
            });break;case "DOMCharacterDataModified":
            var o = e.target,
                r = d("characterData", o),
                a = e.prevValue;i(o, function (e) {
              if (e.characterData) return e.characterDataOldValue ? l(a) : r;
            });break;case "DOMNodeRemoved":
            this.addTransientObserver(e.target);case "DOMNodeInserted":
            var s,
                c,
                h = e.target;"DOMNodeInserted" === e.type ? (s = [h], c = []) : (s = [], c = [h]);var f = h.previousSibling,
                p = h.nextSibling,
                r = d("childList", e.target.parentNode);r.addedNodes = s, r.removedNodes = c, r.previousSibling = f, r.nextSibling = p, i(e.relatedNode, function (e) {
              if (e.childList) return r;
            });}u();
      } }, e.JsMutationObserver = a, e.MutationObserver || (e.MutationObserver = a, a._isPolyfilled = !0);
  }
}(self), function () {
  function e(e) {
    switch (e) {case "&":
        return "&amp;";case "<":
        return "&lt;";case ">":
        return "&gt;";case " ":
        return "&nbsp;";}
  }function t(t) {
    return t.replace(u, e);
  }var n = "undefined" == typeof HTMLTemplateElement;/Trident/.test(navigator.userAgent) && !function () {
    var e = document.importNode;document.importNode = function () {
      var t = e.apply(document, arguments);if (t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var n = document.createDocumentFragment();return n.appendChild(t), n;
      }return t;
    };
  }();var o = function () {
    if (!n) {
      var e = document.createElement("template"),
          t = document.createElement("template");t.content.appendChild(document.createElement("div")), e.content.appendChild(t);var o = e.cloneNode(!0);return 0 === o.content.childNodes.length || 0 === o.content.firstChild.content.childNodes.length;
    }
  }(),
      r = "template",
      i = function i() {};if (n) {
    var a = document.implementation.createHTMLDocument("template"),
        s = !0,
        c = document.createElement("style");c.textContent = r + "{display:none;}";var d = document.head;d.insertBefore(c, d.firstElementChild), i.prototype = Object.create(HTMLElement.prototype), i.decorate = function (e) {
      if (!e.content) {
        e.content = a.createDocumentFragment();for (var n; n = e.firstChild;) {
          e.content.appendChild(n);
        }if (e.cloneNode = function (e) {
          return i.cloneNode(this, e);
        }, s) try {
          Object.defineProperty(e, "innerHTML", { get: function get() {
              for (var e = "", n = this.content.firstChild; n; n = n.nextSibling) {
                e += n.outerHTML || t(n.data);
              }return e;
            }, set: function set(e) {
              for (a.body.innerHTML = e, i.bootstrap(a); this.content.firstChild;) {
                this.content.removeChild(this.content.firstChild);
              }for (; a.body.firstChild;) {
                this.content.appendChild(a.body.firstChild);
              }
            }, configurable: !0 });
        } catch (o) {
          s = !1;
        }i.bootstrap(e.content);
      }
    }, i.bootstrap = function (e) {
      for (var t, n = e.querySelectorAll(r), o = 0, a = n.length; o < a && (t = n[o]); o++) {
        i.decorate(t);
      }
    }, document.addEventListener("DOMContentLoaded", function () {
      i.bootstrap(document);
    });var l = document.createElement;document.createElement = function () {
      "use strict";
      var e = l.apply(document, arguments);return "template" === e.localName && i.decorate(e), e;
    };var u = /[&\u00A0<>]/g;
  }if (n || o) {
    var h = Node.prototype.cloneNode;i.cloneNode = function (e, t) {
      var n = h.call(e, !1);return this.decorate && this.decorate(n), t && (n.content.appendChild(h.call(e.content, !0)), this.fixClonedDom(n.content, e.content)), n;
    }, i.fixClonedDom = function (e, t) {
      if (t.querySelectorAll) for (var n, o, i = t.querySelectorAll(r), a = e.querySelectorAll(r), s = 0, c = a.length; s < c; s++) {
        o = i[s], n = a[s], this.decorate && this.decorate(o), n.parentNode.replaceChild(o.cloneNode(!0), n);
      }
    };var f = document.importNode;Node.prototype.cloneNode = function (e) {
      var t = h.call(this, e);return e && i.fixClonedDom(t, this), t;
    }, document.importNode = function (e, t) {
      if (e.localName === r) return i.cloneNode(e, t);var n = f.call(document, e, t);return t && i.fixClonedDom(n, e), n;
    }, o && (HTMLTemplateElement.prototype.cloneNode = function (e) {
      return i.cloneNode(this, e);
    });
  }n && (window.HTMLTemplateElement = i);
}(), function (e) {
  "use strict";
  if (!window.performance || !window.performance.now) {
    var t = Date.now();window.performance = { now: function now() {
        return Date.now() - t;
      } };
  }window.requestAnimationFrame || (window.requestAnimationFrame = function () {
    var e = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;return e ? function (t) {
      return e(function () {
        t(performance.now());
      });
    } : function (e) {
      return window.setTimeout(e, 1e3 / 60);
    };
  }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function () {
    return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (e) {
      clearTimeout(e);
    };
  }());var n = function () {
    var e = document.createEvent("Event");return e.initEvent("foo", !0, !0), e.preventDefault(), e.defaultPrevented;
  }();if (!n) {
    var o = Event.prototype.preventDefault;Event.prototype.preventDefault = function () {
      this.cancelable && (o.call(this), Object.defineProperty(this, "defaultPrevented", { get: function get() {
          return !0;
        }, configurable: !0 }));
    };
  }var r = /Trident/.test(navigator.userAgent);if ((!window.CustomEvent || r && "function" != typeof window.CustomEvent) && (window.CustomEvent = function (e, t) {
    t = t || {};var n = document.createEvent("CustomEvent");return n.initCustomEvent(e, Boolean(t.bubbles), Boolean(t.cancelable), t.detail), n;
  }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || r && "function" != typeof window.Event) {
    var i = window.Event;window.Event = function (e, t) {
      t = t || {};var n = document.createEvent("Event");return n.initEvent(e, Boolean(t.bubbles), Boolean(t.cancelable)), n;
    }, window.Event.prototype = i.prototype;
  }
}(window.WebComponents), window.HTMLImports = window.HTMLImports || { flags: {} }, function (e) {
  function t(e, t) {
    t = t || p, o(function () {
      i(e, t);
    }, t);
  }function n(e) {
    return "complete" === e.readyState || e.readyState === w;
  }function o(e, t) {
    if (n(t)) e && e();else {
      var r = function r() {
        "complete" !== t.readyState && t.readyState !== w || (t.removeEventListener(_, r), o(e, t));
      };t.addEventListener(_, r);
    }
  }function r(e) {
    e.target.__loaded = !0;
  }function i(e, t) {
    function n() {
      c == d && e && e({ allImports: s, loadedImports: l, errorImports: u });
    }function o(e) {
      r(e), l.push(this), c++, n();
    }function i(e) {
      u.push(this), c++, n();
    }var s = t.querySelectorAll("link[rel=import]"),
        c = 0,
        d = s.length,
        l = [],
        u = [];if (d) for (var h, f = 0; f < d && (h = s[f]); f++) {
      a(h) ? (l.push(this), c++, n()) : (h.addEventListener("load", o), h.addEventListener("error", i));
    } else n();
  }function a(e) {
    return u ? e.__loaded || e["import"] && "loading" !== e["import"].readyState : e.__importParsed;
  }function s(e) {
    for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
      c(t) && d(t);
    }
  }function c(e) {
    return "link" === e.localName && "import" === e.rel;
  }function d(e) {
    var t = e["import"];t ? r({ target: e }) : (e.addEventListener("load", r), e.addEventListener("error", r));
  }var l = "import",
      u = Boolean(l in document.createElement("link")),
      h = Boolean(window.ShadowDOMPolyfill),
      f = function f(e) {
    return h ? window.ShadowDOMPolyfill.wrapIfNeeded(e) : e;
  },
      p = f(document),
      m = { get: function get() {
      var e = window.HTMLImports.currentScript || document.currentScript || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);return f(e);
    }, configurable: !0 };Object.defineProperty(document, "_currentScript", m), Object.defineProperty(p, "_currentScript", m);var v = /Trident/.test(navigator.userAgent),
      w = v ? "complete" : "interactive",
      _ = "readystatechange";u && (new MutationObserver(function (e) {
    for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
      t.addedNodes && s(t.addedNodes);
    }
  }).observe(document.head, { childList: !0 }), function () {
    if ("loading" === document.readyState) for (var e, t = document.querySelectorAll("link[rel=import]"), n = 0, o = t.length; n < o && (e = t[n]); n++) {
      d(e);
    }
  }()), t(function (e) {
    window.HTMLImports.ready = !0, window.HTMLImports.readyTime = new Date().getTime();var t = p.createEvent("CustomEvent");t.initCustomEvent("HTMLImportsLoaded", !0, !0, e), p.dispatchEvent(t);
  }), e.IMPORT_LINK_TYPE = l, e.useNative = u, e.rootDocument = p, e.whenReady = t, e.isIE = v;
}(window.HTMLImports), function (e) {
  var t = [],
      n = function n(e) {
    t.push(e);
  },
      o = function o() {
    t.forEach(function (t) {
      t(e);
    });
  };e.addModule = n, e.initializeModules = o;
}(window.HTMLImports), window.HTMLImports.addModule(function (e) {
  var t = /(url\()([^)]*)(\))/g,
      n = /(@import[\s]+(?!url\())([^;]*)(;)/g,
      o = { resolveUrlsInStyle: function resolveUrlsInStyle(e, t) {
      var n = e.ownerDocument,
          o = n.createElement("a");return e.textContent = this.resolveUrlsInCssText(e.textContent, t, o), e;
    }, resolveUrlsInCssText: function resolveUrlsInCssText(e, o, r) {
      var i = this.replaceUrls(e, r, o, t);return i = this.replaceUrls(i, r, o, n);
    }, replaceUrls: function replaceUrls(e, t, n, o) {
      return e.replace(o, function (e, o, r, i) {
        var a = r.replace(/["']/g, "");return n && (a = new URL(a, n).href), t.href = a, a = t.href, o + "'" + a + "'" + i;
      });
    } };e.path = o;
}), window.HTMLImports.addModule(function (e) {
  var t = { async: !0, ok: function ok(e) {
      return e.status >= 200 && e.status < 300 || 304 === e.status || 0 === e.status;
    }, load: function load(n, o, r) {
      var i = new XMLHttpRequest();return (e.flags.debug || e.flags.bust) && (n += "?" + Math.random()), i.open("GET", n, t.async), i.addEventListener("readystatechange", function (e) {
        if (4 === i.readyState) {
          var n = null;try {
            var a = i.getResponseHeader("Location");a && (n = "/" === a.substr(0, 1) ? location.origin + a : a);
          } catch (e) {
            console.error(e.message);
          }o.call(r, !t.ok(i) && i, i.response || i.responseText, n);
        }
      }), i.send(), i;
    }, loadDocument: function loadDocument(e, t, n) {
      this.load(e, t, n).responseType = "document";
    } };e.xhr = t;
}), window.HTMLImports.addModule(function (e) {
  var t = e.xhr,
      n = e.flags,
      o = function o(e, t) {
    this.cache = {}, this.onload = e, this.oncomplete = t, this.inflight = 0, this.pending = {};
  };o.prototype = { addNodes: function addNodes(e) {
      this.inflight += e.length;for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
        this.require(t);
      }this.checkDone();
    }, addNode: function addNode(e) {
      this.inflight++, this.require(e), this.checkDone();
    }, require: function require(e) {
      var t = e.src || e.href;e.__nodeUrl = t, this.dedupe(t, e) || this.fetch(t, e);
    }, dedupe: function dedupe(e, t) {
      if (this.pending[e]) return this.pending[e].push(t), !0;return this.cache[e] ? (this.onload(e, t, this.cache[e]), this.tail(), !0) : (this.pending[e] = [t], !1);
    }, fetch: function fetch(e, o) {
      if (n.load && console.log("fetch", e, o), e) {
        if (e.match(/^data:/)) {
          var r = e.split(","),
              i = r[0],
              a = r[1];a = i.indexOf(";base64") > -1 ? atob(a) : decodeURIComponent(a), setTimeout(function () {
            this.receive(e, o, null, a);
          }.bind(this), 0);
        } else {
          var s = function (t, n, r) {
            this.receive(e, o, t, n, r);
          }.bind(this);t.load(e, s);
        }
      } else setTimeout(function () {
        this.receive(e, o, { error: "href must be specified" }, null);
      }.bind(this), 0);
    }, receive: function receive(e, t, n, o, r) {
      this.cache[e] = o;for (var i, a = this.pending[e], s = 0, c = a.length; s < c && (i = a[s]); s++) {
        this.onload(e, i, o, n, r), this.tail();
      }this.pending[e] = null;
    }, tail: function tail() {
      --this.inflight, this.checkDone();
    }, checkDone: function checkDone() {
      this.inflight || this.oncomplete();
    } }, e.Loader = o;
}), window.HTMLImports.addModule(function (e) {
  var t = function t(e) {
    this.addCallback = e, this.mo = new MutationObserver(this.handler.bind(this));
  };t.prototype = { handler: function handler(e) {
      for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
        "childList" === t.type && t.addedNodes.length && this.addedNodes(t.addedNodes);
      }
    }, addedNodes: function addedNodes(e) {
      this.addCallback && this.addCallback(e);for (var t, n = 0, o = e.length; n < o && (t = e[n]); n++) {
        t.children && t.children.length && this.addedNodes(t.children);
      }
    }, observe: function observe(e) {
      this.mo.observe(e, { childList: !0, subtree: !0 });
    } }, e.Observer = t;
}), window.HTMLImports.addModule(function (e) {
  function t(e) {
    return "link" === e.localName && e.rel === l;
  }function n(e) {
    var t = o(e);return "data:text/javascript;charset=utf-8," + encodeURIComponent(t);
  }function o(e) {
    return e.textContent + r(e);
  }function r(e) {
    var t = e.ownerDocument;t.__importedScripts = t.__importedScripts || 0;var n = e.ownerDocument.baseURI,
        o = t.__importedScripts ? "-" + t.__importedScripts : "";return t.__importedScripts++, "\n//# sourceURL=" + n + o + ".js\n";
  }function i(e) {
    var t = e.ownerDocument.createElement("style");return t.textContent = e.textContent, a.resolveUrlsInStyle(t), t;
  }var a = e.path,
      s = e.rootDocument,
      c = e.flags,
      d = e.isIE,
      l = e.IMPORT_LINK_TYPE,
      u = "link[rel=" + l + "]",
      h = { documentSelectors: u, importsSelectors: [u, "link[rel=stylesheet]:not([type])", "style:not([type])", "script:not([type])", 'script[type="application/javascript"]', 'script[type="text/javascript"]'].join(","), map: { link: "parseLink", script: "parseScript", style: "parseStyle" }, dynamicElements: [], parseNext: function parseNext() {
      var e = this.nextToParse();e && this.parse(e);
    }, parse: function parse(e) {
      if (this.isParsed(e)) return void (c.parse && console.log("[%s] is already parsed", e.localName));var t = this[this.map[e.localName]];t && (this.markParsing(e), t.call(this, e));
    }, parseDynamic: function parseDynamic(e, t) {
      this.dynamicElements.push(e), t || this.parseNext();
    }, markParsing: function markParsing(e) {
      c.parse && console.log("parsing", e), this.parsingElement = e;
    }, markParsingComplete: function markParsingComplete(e) {
      e.__importParsed = !0, this.markDynamicParsingComplete(e), e.__importElement && (e.__importElement.__importParsed = !0, this.markDynamicParsingComplete(e.__importElement)), this.parsingElement = null, c.parse && console.log("completed", e);
    }, markDynamicParsingComplete: function markDynamicParsingComplete(e) {
      var t = this.dynamicElements.indexOf(e);t >= 0 && this.dynamicElements.splice(t, 1);
    }, parseImport: function parseImport(e) {
      if (e["import"] = e.__doc, window.HTMLImports.__importsParsingHook && window.HTMLImports.__importsParsingHook(e), e["import"] && (e["import"].__importParsed = !0), this.markParsingComplete(e), e.__resource && !e.__error ? e.dispatchEvent(new CustomEvent("load", { bubbles: !1 })) : e.dispatchEvent(new CustomEvent("error", { bubbles: !1 })), e.__pending) for (var t; e.__pending.length;) {
        t = e.__pending.shift(), t && t({ target: e });
      }this.parseNext();
    }, parseLink: function parseLink(e) {
      t(e) ? this.parseImport(e) : (e.href = e.href, this.parseGeneric(e));
    }, parseStyle: function parseStyle(e) {
      var t = e;e = i(e), t.__appliedElement = e, e.__importElement = t, this.parseGeneric(e);
    }, parseGeneric: function parseGeneric(e) {
      this.trackElement(e), this.addElementToDocument(e);
    }, rootImportForElement: function rootImportForElement(e) {
      for (var t = e; t.ownerDocument.__importLink;) {
        t = t.ownerDocument.__importLink;
      }return t;
    }, addElementToDocument: function addElementToDocument(e) {
      var t = this.rootImportForElement(e.__importElement || e);t.parentNode.insertBefore(e, t);
    }, trackElement: function trackElement(e, t) {
      var n = this,
          o = function o(r) {
        e.removeEventListener("load", o), e.removeEventListener("error", o), t && t(r), n.markParsingComplete(e), n.parseNext();
      };if (e.addEventListener("load", o), e.addEventListener("error", o), d && "style" === e.localName) {
        var r = !1;if (e.textContent.indexOf("@import") == -1) r = !0;else if (e.sheet) {
          r = !0;for (var i, a = e.sheet.cssRules, s = a ? a.length : 0, c = 0; c < s && (i = a[c]); c++) {
            i.type === CSSRule.IMPORT_RULE && (r = r && Boolean(i.styleSheet));
          }
        }r && setTimeout(function () {
          e.dispatchEvent(new CustomEvent("load", { bubbles: !1 }));
        });
      }
    }, parseScript: function parseScript(t) {
      var o = document.createElement("script");o.__importElement = t, o.src = t.src ? t.src : n(t), e.currentScript = t, this.trackElement(o, function (t) {
        o.parentNode && o.parentNode.removeChild(o), e.currentScript = null;
      }), this.addElementToDocument(o);
    }, nextToParse: function nextToParse() {
      return this._mayParse = [], !this.parsingElement && (this.nextToParseInDoc(s) || this.nextToParseDynamic());
    }, nextToParseInDoc: function nextToParseInDoc(e, n) {
      if (e && this._mayParse.indexOf(e) < 0) {
        this._mayParse.push(e);for (var o, r = e.querySelectorAll(this.parseSelectorsForNode(e)), i = 0, a = r.length; i < a && (o = r[i]); i++) {
          if (!this.isParsed(o)) return this.hasResource(o) ? t(o) ? this.nextToParseInDoc(o.__doc, o) : o : void 0;
        }
      }return n;
    }, nextToParseDynamic: function nextToParseDynamic() {
      return this.dynamicElements[0];
    }, parseSelectorsForNode: function parseSelectorsForNode(e) {
      var t = e.ownerDocument || e;return t === s ? this.documentSelectors : this.importsSelectors;
    }, isParsed: function isParsed(e) {
      return e.__importParsed;
    }, needsDynamicParsing: function needsDynamicParsing(e) {
      return this.dynamicElements.indexOf(e) >= 0;
    }, hasResource: function hasResource(e) {
      return !t(e) || void 0 !== e.__doc;
    } };e.parser = h, e.IMPORT_SELECTOR = u;
}), window.HTMLImports.addModule(function (e) {
  function t(e) {
    return n(e, a);
  }function n(e, t) {
    return "link" === e.localName && e.getAttribute("rel") === t;
  }function o(e) {
    return !!Object.getOwnPropertyDescriptor(e, "baseURI");
  }function r(e, t) {
    var n = document.implementation.createHTMLDocument(a);n._URL = t;var r = n.createElement("base");r.setAttribute("href", t), n.baseURI || o(n) || Object.defineProperty(n, "baseURI", { value: t });var i = n.createElement("meta");return i.setAttribute("charset", "utf-8"), n.head.appendChild(i), n.head.appendChild(r), n.body.innerHTML = e, window.HTMLTemplateElement && HTMLTemplateElement.bootstrap && HTMLTemplateElement.bootstrap(n), n;
  }var i = e.flags,
      a = e.IMPORT_LINK_TYPE,
      s = e.IMPORT_SELECTOR,
      c = e.rootDocument,
      d = e.Loader,
      l = e.Observer,
      u = e.parser,
      h = { documents: {}, documentPreloadSelectors: s, importsPreloadSelectors: [s].join(","), loadNode: function loadNode(e) {
      f.addNode(e);
    }, loadSubtree: function loadSubtree(e) {
      var t = this.marshalNodes(e);f.addNodes(t);
    }, marshalNodes: function marshalNodes(e) {
      return e.querySelectorAll(this.loadSelectorsForNode(e));
    }, loadSelectorsForNode: function loadSelectorsForNode(e) {
      var t = e.ownerDocument || e;return t === c ? this.documentPreloadSelectors : this.importsPreloadSelectors;
    }, loaded: function loaded(e, n, o, a, s) {
      if (i.load && console.log("loaded", e, n), n.__resource = o, n.__error = a, t(n)) {
        var c = this.documents[e];void 0 === c && (c = a ? null : r(o, s || e), c && (c.__importLink = n, this.bootDocument(c)), this.documents[e] = c), n.__doc = c;
      }u.parseNext();
    }, bootDocument: function bootDocument(e) {
      this.loadSubtree(e), this.observer.observe(e), u.parseNext();
    }, loadedAll: function loadedAll() {
      u.parseNext();
    } },
      f = new d(h.loaded.bind(h), h.loadedAll.bind(h));if (h.observer = new l(), !document.baseURI) {
    var p = { get: function get() {
        var e = document.querySelector("base");return e ? e.href : window.location.href;
      }, configurable: !0 };Object.defineProperty(document, "baseURI", p), Object.defineProperty(c, "baseURI", p);
  }e.importer = h, e.importLoader = f;
}), window.HTMLImports.addModule(function (e) {
  var t = e.parser,
      n = e.importer,
      o = { added: function added(e) {
      for (var o, r, i, a, s = 0, c = e.length; s < c && (a = e[s]); s++) {
        o || (o = a.ownerDocument, r = t.isParsed(o)), i = this.shouldLoadNode(a), i && n.loadNode(a), this.shouldParseNode(a) && r && t.parseDynamic(a, i);
      }
    }, shouldLoadNode: function shouldLoadNode(e) {
      return 1 === e.nodeType && r.call(e, n.loadSelectorsForNode(e));
    }, shouldParseNode: function shouldParseNode(e) {
      return 1 === e.nodeType && r.call(e, t.parseSelectorsForNode(e));
    } };n.observer.addCallback = o.added.bind(o);var r = HTMLElement.prototype.matches || HTMLElement.prototype.matchesSelector || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
}), function (e) {
  function t() {
    window.HTMLImports.importer.bootDocument(o);
  }var n = e.initializeModules;e.isIE;if (!e.useNative) {
    n();var o = e.rootDocument;"complete" === document.readyState || "interactive" === document.readyState && !window.attachEvent ? t() : document.addEventListener("DOMContentLoaded", t);
  }
}(window.HTMLImports), window.CustomElements = window.CustomElements || { flags: {} }, function (e) {
  var t = e.flags,
      n = [],
      o = function o(e) {
    n.push(e);
  },
      r = function r() {
    n.forEach(function (t) {
      t(e);
    });
  };e.addModule = o, e.initializeModules = r, e.hasNative = Boolean(document.registerElement), e.isIE = /Trident/.test(navigator.userAgent), e.useNative = !t.register && e.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
}(window.CustomElements), window.CustomElements.addModule(function (e) {
  function t(e, t) {
    n(e, function (e) {
      return !!t(e) || void o(e, t);
    }), o(e, t);
  }function n(e, t, o) {
    var r = e.firstElementChild;if (!r) for (r = e.firstChild; r && r.nodeType !== Node.ELEMENT_NODE;) {
      r = r.nextSibling;
    }for (; r;) {
      t(r, o) !== !0 && n(r, t, o), r = r.nextElementSibling;
    }return null;
  }function o(e, n) {
    for (var o = e.shadowRoot; o;) {
      t(o, n), o = o.olderShadowRoot;
    }
  }function r(e, t) {
    i(e, t, []);
  }function i(e, t, n) {
    if (e = window.wrap(e), !(n.indexOf(e) >= 0)) {
      n.push(e);for (var o, r = e.querySelectorAll("link[rel=" + a + "]"), s = 0, c = r.length; s < c && (o = r[s]); s++) {
        o["import"] && i(o["import"], t, n);
      }t(e);
    }
  }var a = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";e.forDocumentTree = r, e.forSubtree = t;
}), window.CustomElements.addModule(function (e) {
  function t(e, t) {
    return n(e, t) || o(e, t);
  }function n(t, n) {
    return !!e.upgrade(t, n) || void (n && a(t));
  }function o(e, t) {
    g(e, function (e) {
      if (n(e, t)) return !0;
    });
  }function r(e) {
    L.push(e), E || (E = !0, setTimeout(i));
  }function i() {
    E = !1;for (var e, t = L, n = 0, o = t.length; n < o && (e = t[n]); n++) {
      e();
    }L = [];
  }function a(e) {
    y ? r(function () {
      s(e);
    }) : s(e);
  }function s(e) {
    e.__upgraded__ && !e.__attached && (e.__attached = !0, e.attachedCallback && e.attachedCallback());
  }function c(e) {
    d(e), g(e, function (e) {
      d(e);
    });
  }function d(e) {
    y ? r(function () {
      l(e);
    }) : l(e);
  }function l(e) {
    e.__upgraded__ && e.__attached && (e.__attached = !1, e.detachedCallback && e.detachedCallback());
  }function u(e) {
    for (var t = e, n = window.wrap(document); t;) {
      if (t == n) return !0;t = t.parentNode || t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host;
    }
  }function h(e) {
    if (e.shadowRoot && !e.shadowRoot.__watched) {
      _.dom && console.log("watching shadow-root for: ", e.localName);for (var t = e.shadowRoot; t;) {
        m(t), t = t.olderShadowRoot;
      }
    }
  }function f(e, n) {
    if (_.dom) {
      var o = n[0];if (o && "childList" === o.type && o.addedNodes && o.addedNodes) {
        for (var r = o.addedNodes[0]; r && r !== document && !r.host;) {
          r = r.parentNode;
        }var i = r && (r.URL || r._URL || r.host && r.host.localName) || "";i = i.split("/?").shift().split("/").pop();
      }console.group("mutations (%d) [%s]", n.length, i || "");
    }var a = u(e);n.forEach(function (e) {
      "childList" === e.type && (N(e.addedNodes, function (e) {
        e.localName && t(e, a);
      }), N(e.removedNodes, function (e) {
        e.localName && c(e);
      }));
    }), _.dom && console.groupEnd();
  }function p(e) {
    for (e = window.wrap(e), e || (e = window.wrap(document)); e.parentNode;) {
      e = e.parentNode;
    }var t = e.__observer;t && (f(e, t.takeRecords()), i());
  }function m(e) {
    if (!e.__observer) {
      var t = new MutationObserver(f.bind(this, e));t.observe(e, { childList: !0, subtree: !0 }), e.__observer = t;
    }
  }function v(e) {
    e = window.wrap(e), _.dom && console.group("upgradeDocument: ", e.baseURI.split("/").pop());var n = e === window.wrap(document);t(e, n), m(e), _.dom && console.groupEnd();
  }function w(e) {
    b(e, v);
  }var _ = e.flags,
      g = e.forSubtree,
      b = e.forDocumentTree,
      y = window.MutationObserver._isPolyfilled && _["throttle-attached"];e.hasPolyfillMutations = y, e.hasThrottledAttached = y;var E = !1,
      L = [],
      N = Array.prototype.forEach.call.bind(Array.prototype.forEach),
      M = Element.prototype.createShadowRoot;M && (Element.prototype.createShadowRoot = function () {
    var e = M.call(this);return window.CustomElements.watchShadow(this), e;
  }), e.watchShadow = h, e.upgradeDocumentTree = w, e.upgradeDocument = v, e.upgradeSubtree = o, e.upgradeAll = t, e.attached = a, e.takeRecords = p;
}), window.CustomElements.addModule(function (e) {
  function t(t, o) {
    if ("template" === t.localName && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(t), !t.__upgraded__ && t.nodeType === Node.ELEMENT_NODE) {
      var r = t.getAttribute("is"),
          i = e.getRegisteredDefinition(t.localName) || e.getRegisteredDefinition(r);if (i && (r && i.tag == t.localName || !r && !i["extends"])) return n(t, i, o);
    }
  }function n(t, n, r) {
    return a.upgrade && console.group("upgrade:", t.localName), n.is && t.setAttribute("is", n.is), o(t, n), t.__upgraded__ = !0, i(t), r && e.attached(t), e.upgradeSubtree(t, r), a.upgrade && console.groupEnd(), t;
  }function o(e, t) {
    Object.__proto__ ? e.__proto__ = t.prototype : (r(e, t.prototype, t["native"]), e.__proto__ = t.prototype);
  }function r(e, t, n) {
    for (var o = {}, r = t; r !== n && r !== HTMLElement.prototype;) {
      for (var i, a = Object.getOwnPropertyNames(r), s = 0; i = a[s]; s++) {
        o[i] || (Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i)), o[i] = 1);
      }r = Object.getPrototypeOf(r);
    }
  }function i(e) {
    e.createdCallback && e.createdCallback();
  }var a = e.flags;e.upgrade = t, e.upgradeWithDefinition = n, e.implementPrototype = o;
}), window.CustomElements.addModule(function (e) {
  function t(t, o) {
    var c = o || {};if (!t) throw new Error("document.registerElement: first argument `name` must not be empty");if (t.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(t) + "'.");if (r(t)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(t) + "'. The type name is invalid.");if (d(t)) throw new Error("DuplicateDefinitionError: a type with name '" + String(t) + "' is already registered");return c.prototype || (c.prototype = Object.create(HTMLElement.prototype)), c.__name = t.toLowerCase(), c["extends"] && (c["extends"] = c["extends"].toLowerCase()), c.lifecycle = c.lifecycle || {}, c.ancestry = i(c["extends"]), a(c), s(c), n(c.prototype), l(c.__name, c), c.ctor = u(c), c.ctor.prototype = c.prototype, c.prototype.constructor = c.ctor, e.ready && v(document), c.ctor;
  }function n(e) {
    if (!e.setAttribute._polyfilled) {
      var t = e.setAttribute;e.setAttribute = function (e, n) {
        o.call(this, e, n, t);
      };var n = e.removeAttribute;e.removeAttribute = function (e) {
        o.call(this, e, null, n);
      }, e.setAttribute._polyfilled = !0;
    }
  }function o(e, t, n) {
    e = e.toLowerCase();var o = this.getAttribute(e);n.apply(this, arguments);var r = this.getAttribute(e);this.attributeChangedCallback && r !== o && this.attributeChangedCallback(e, o, r);
  }function r(e) {
    for (var t = 0; t < y.length; t++) {
      if (e === y[t]) return !0;
    }
  }function i(e) {
    var t = d(e);return t ? i(t["extends"]).concat([t]) : [];
  }function a(e) {
    for (var t, n = e["extends"], o = 0; t = e.ancestry[o]; o++) {
      n = t.is && t.tag;
    }e.tag = n || e.__name, n && (e.is = e.__name);
  }function s(e) {
    if (!Object.__proto__) {
      var t = HTMLElement.prototype;if (e.is) {
        var n = document.createElement(e.tag);t = Object.getPrototypeOf(n);
      }for (var o, r = e.prototype, i = !1; r;) {
        r == t && (i = !0), o = Object.getPrototypeOf(r), o && (r.__proto__ = o), r = o;
      }i || console.warn(e.tag + " prototype not found in prototype chain for " + e.is), e["native"] = t;
    }
  }function c(e) {
    return _(N(e.tag), e);
  }function d(e) {
    if (e) return E[e.toLowerCase()];
  }function l(e, t) {
    E[e] = t;
  }function u(e) {
    return function () {
      return c(e);
    };
  }function h(e, t, n) {
    return e === L ? f(t, n) : M(e, t);
  }function f(e, t) {
    e && (e = e.toLowerCase()), t && (t = t.toLowerCase());var n = d(t || e);if (n) {
      if (e == n.tag && t == n.is) return new n.ctor();if (!t && !n.is) return new n.ctor();
    }var o;return t ? (o = f(e), o.setAttribute("is", t), o) : (o = N(e), e.indexOf("-") >= 0 && g(o, HTMLElement), o);
  }function p(e, t) {
    var n = e[t];e[t] = function () {
      var e = n.apply(this, arguments);return w(e), e;
    };
  }var m,
      v = (e.isIE, e.upgradeDocumentTree),
      w = e.upgradeAll,
      _ = e.upgradeWithDefinition,
      g = e.implementPrototype,
      b = e.useNative,
      y = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"],
      E = {},
      L = "http://www.w3.org/1999/xhtml",
      N = document.createElement.bind(document),
      M = document.createElementNS.bind(document);m = Object.__proto__ || b ? function (e, t) {
    return e instanceof t;
  } : function (e, t) {
    if (e instanceof t) return !0;for (var n = e; n;) {
      if (n === t.prototype) return !0;n = n.__proto__;
    }return !1;
  }, p(Node.prototype, "cloneNode"), p(document, "importNode"), document.registerElement = t, document.createElement = f, document.createElementNS = h, e.registry = E, e["instanceof"] = m, e.reservedTagList = y, e.getRegisteredDefinition = d, document.register = document.registerElement;
}), function (e) {
  function t() {
    i(window.wrap(document)), window.CustomElements.ready = !0;var e = window.requestAnimationFrame || function (e) {
      setTimeout(e, 16);
    };e(function () {
      setTimeout(function () {
        window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles: !0 }));
      });
    });
  }var n = e.useNative,
      o = e.initializeModules;e.isIE;if (n) {
    var r = function r() {};e.watchShadow = r, e.upgrade = r, e.upgradeAll = r, e.upgradeDocumentTree = r, e.upgradeSubtree = r, e.takeRecords = r, e["instanceof"] = function (e, t) {
      return e instanceof t;
    };
  } else o();var i = e.upgradeDocumentTree,
      a = e.upgradeDocument;if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function (e) {
    return e;
  }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function (e) {
    e["import"] && a(wrap(e["import"]));
  }), "complete" === document.readyState || e.flags.eager) t();else if ("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
    var s = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";window.addEventListener(s, t);
  } else t();
}(window.CustomElements), function (e) {
  var t = document.createElement("style");t.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var n = document.querySelector("head");n.insertBefore(t, n.firstChild);
}(window.WebComponents);
