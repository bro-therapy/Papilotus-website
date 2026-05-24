/* ============================================================
   PAPI LOTUS — script.js
   Minimal vanilla JS. No frameworks, no build step.
   ============================================================ */

(function () {
  "use strict";

  // ---- Live local time (replaces placeholder 03:17 AM after load) ----
  function fmtTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var period = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return (
      (h < 10 ? "0" + h : h) +
      ":" +
      (m < 10 ? "0" + m : m) +
      " " +
      period
    );
  }
  function tickTime() {
    var el = document.getElementById("nav-time");
    if (el) el.textContent = fmtTime();
  }
  tickTime();
  setInterval(tickTime, 30000);

  // ---- Copyright year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Scroll-triggered reveals ----
  // Mark sections + key children to fade in as they enter viewport.
  var revealTargets = document.querySelectorAll(
    ".release-grid, .signal-grid, .afterhours-content, .footer-grid"
  );
  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.15 }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback for very old browsers
    revealTargets.forEach(function (el) { el.classList.add("in-view"); });
  }

  // ---- Email form: handle Formspree (or any AJAX endpoint) gracefully ----
  var form = document.querySelector(".email-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      // If the form action still has the placeholder, prevent submit + nudge user
      if (action.indexOf("YOUR_FORM_ID") !== -1) {
        e.preventDefault();
        showFormMessage(
          "form not connected yet — see README to wire up your email service.",
          true
        );
        return;
      }

      // If Formspree or similar AJAX endpoint, intercept and submit via fetch
      // so we can stay on-page and show inline success.
      if (action.indexOf("formspree.io") !== -1 || form.dataset.ajax === "true") {
        e.preventDefault();
        var btn = form.querySelector("button");
        var originalBtnText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = "<span>transmitting…</span>";

        fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        })
          .then(function (r) {
            if (r.ok) {
              form.reset();
              showFormMessage("signal received. welcome to the afterhours list.", false);
            } else {
              showFormMessage("transmission failed. try again.", true);
            }
          })
          .catch(function () {
            showFormMessage("network error. try again.", true);
          })
          .finally(function () {
            btn.disabled = false;
            btn.innerHTML = originalBtnText;
          });
      }
      // Otherwise let the default browser submission happen.
    });
  }

  function showFormMessage(text, isError) {
    if (!form) return;
    var existing = form.parentNode.querySelector(".form-success");
    if (existing) existing.remove();

    var box = document.createElement("div");
    box.className = "form-success";
    box.textContent = text;
    if (isError) {
      box.style.borderColor = "var(--text-mid)";
      box.style.color = "var(--text-mid)";
    }
    form.parentNode.appendChild(box);
  }

  // ---- Smooth-scroll polish for in-page anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ---- Subtle parallax on hero glow ----
  // Only on devices with a real pointer (skip touchscreens for battery + perf)
  if (window.matchMedia("(pointer: fine)").matches) {
    var glows = document.querySelectorAll(".hero-glow");
    document.addEventListener("mousemove", function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 20;
      var y = (e.clientY / window.innerHeight - 0.5) * 20;
      glows.forEach(function (el, i) {
        var mul = i === 0 ? 1 : -1.4;
        el.style.transform =
          "translate(calc(-50% + " + x * mul + "px), calc(-50% + " + y * mul + "px))";
      });
    });
  }

  // ---- Countdown to next release (HATE ME teaser) ----
  var cd = document.getElementById("countdown");
  if (cd) {
    var target = new Date(cd.getAttribute("data-target")).getTime();
    var elDays = document.getElementById("cd-days");
    var elHours = document.getElementById("cd-hours");
    var elMins = document.getElementById("cd-mins");
    var elSecs = document.getElementById("cd-secs");
    var cdTimer;

    function pad(n) { return n < 10 ? "0" + n : "" + n; }

    function tickCountdown() {
      if (isNaN(target)) return;
      var diff = target - Date.now();
      if (diff <= 0) {
        cd.classList.add("is-live");
        if (cdTimer) clearInterval(cdTimer);
        return;
      }
      var s = Math.floor(diff / 1000);
      if (elDays) elDays.textContent = pad(Math.floor(s / 86400));
      if (elHours) elHours.textContent = pad(Math.floor((s % 86400) / 3600));
      if (elMins) elMins.textContent = pad(Math.floor((s % 3600) / 60));
      if (elSecs) elSecs.textContent = pad(s % 60);
    }

    tickCountdown();
    cdTimer = setInterval(tickCountdown, 1000);
  }
})();
