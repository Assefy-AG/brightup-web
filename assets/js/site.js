/* Brightup — Verhalten der Seite. Keine externen Abhängigkeiten, keine Cookies, keine Analyse. */
(function () {
  "use strict";

  // Mobile Navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reiter (Vorgehen)
  document.querySelectorAll("[data-tabs]").forEach(function (root) {
    var tabs = root.querySelectorAll("[role=tab]");
    var panels = root.querySelectorAll("[role=tabpanel]");
    function select(id) {
      tabs.forEach(function (t) { t.setAttribute("aria-selected", t.getAttribute("aria-controls") === id ? "true" : "false"); });
      panels.forEach(function (p) { p.hidden = p.id !== id; });
    }
    tabs.forEach(function (t) {
      t.addEventListener("click", function () { select(t.getAttribute("aria-controls")); });
      t.addEventListener("keydown", function (e) {
        var list = Array.prototype.slice.call(tabs);
        var i = list.indexOf(t);
        if (e.key === "ArrowRight") { list[(i + 1) % list.length].focus(); list[(i + 1) % list.length].click(); }
        if (e.key === "ArrowLeft") { list[(i - 1 + list.length) % list.length].focus(); list[(i - 1 + list.length) % list.length].click(); }
      });
    });
  });

  // Zertifizierungs-Kacheln
  document.querySelectorAll("[data-certs]").forEach(function (root) {
    var tiles = root.querySelectorAll(".cert-tile");
    var name = root.querySelector("[data-cert-name]");
    var title = root.querySelector("[data-cert-title]");
    var text = root.querySelector("[data-cert-text]");
    tiles.forEach(function (tile) {
      tile.addEventListener("click", function () {
        tiles.forEach(function (t) { t.setAttribute("aria-selected", "false"); });
        tile.setAttribute("aria-selected", "true");
        name.textContent = tile.getAttribute("data-name");
        title.textContent = tile.getAttribute("data-title");
        text.textContent = tile.getAttribute("data-text");
      });
    });
  });

  // Balken erst füllen, wenn die Karte im Bild ist
  var card = document.querySelector(".erw");
  if (card) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { card.classList.add("is-visible"); io.disconnect(); }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
      io.observe(card);
    } else {
      card.classList.add("is-visible");
    }
  }

  // Karussell der Cases
  var peek = document.querySelector("[data-peek]");
  if (peek) {
    var track = peek.querySelector(".peek__track");
    var step = function () { var c = track.querySelector(".case"); return c ? c.getBoundingClientRect().width + 20 : 360; };
    var atEnd = function () { return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4; };
    peek.querySelector("[data-prev]").addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    peek.querySelector("[data-next]").addEventListener("click", function () { if (atEnd()) { track.scrollTo({ left: 0, behavior: "smooth" }); } else { track.scrollBy({ left: step(), behavior: "smooth" }); } });
    var paused = false;
    ["mouseenter", "focusin", "touchstart", "pointerdown"].forEach(function (ev) { peek.addEventListener(ev, function () { paused = true; }, { passive: true }); });
    ["mouseleave", "focusout"].forEach(function (ev) { peek.addEventListener(ev, function () { paused = false; }); });
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      setInterval(function () {
        if (paused || document.hidden) { return; }
        if (atEnd()) { track.scrollTo({ left: 0, behavior: "smooth" }); } else { track.scrollBy({ left: step(), behavior: "smooth" }); }
      }, 4500);
    }
  }

  // Jahr in der Fusszeile
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  // Video: auf Geräten mit reduzierter Bewegung nicht abspielen
  var video = document.querySelector(".hero__media video");
  if (video && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.removeAttribute("autoplay");
    video.pause();
  }
})();
