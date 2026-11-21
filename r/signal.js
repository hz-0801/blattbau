/* signal.js – gemeinsamer Baustein der Web-Apps unter blattbau r/ (Register 21.11.11; Paket Montag, Werkstatt 83).
   Was an einer App beschlossen wird, gilt für alle, auch für künftige (Lehrer 21.11. W82: „das übertragen wir dann auch auf
   alle zukünftigen Apps … wir versuchen das zu vereinheitlichen“). Muster: r/runde vom 21.11.

   Signal nach „Prüfen“: eine Sekunde der ganze Bildschirm grün mit weißem ✓ oder rot mit weißem ✗ – das ✗ wackelt, damit es
   nicht nur an der Farbe hängt. Vibration nur bei falsch (Android; das iPhone kann es nicht). Lösung: bei falsch erst auf
   „Lösung zeigen“, bei richtig keine.
   Für jede App gilt dazu (W83, Lehrer 21.11.): nach richtig geht es nach dem Blitz von selbst zur nächsten Aufgabe („Warum muss
   man denn eigentlich weiter drücken?“); nach falsch verschwindet die Eingabe (Tastatur, Regler, übrige Auswahl), es bleiben
   Frage, eigene Antwort und Rückmeldung („Fokus auf das, was falsch gemacht wurde“); „Aufhören“ beendet ohne Gegenfrage.

   Einbinden: <script src="../signal.js"></script> vor dem eigenen Skript der App, dann
     Signal.blitz(ok)                  Blitz und (bei falsch) Vibration
     Signal.knopf(ziel, inhalt, nachher) Knopf „Lösung zeigen“ ans Ende von ziel; ein Tipp ersetzt ihn durch inhalt (HTML
                                       oder eine Funktion, die den neuen span füllt) und ruft nachher(span) – z. B. Formeln
                                       setzen, die richtige Wahl markieren, die Figur färben
                                       Optional als 4. Argument die Aufschrift (Vorgabe „Lösung zeigen“; W84 runde: „Rechenweg“).
   Grenze: Inhalt und Aufgabenart bleiben je App eigen. Eine Änderung hier trifft alle Apps zugleich: danach jede App einmal
   prüfen (aufgabenbank werkzeuge/signal-probe.py). */
(function () {
  "use strict";
  var css =
    ".sig-blitz{position:fixed;inset:0;z-index:99;display:flex;align-items:center;justify-content:center;pointer-events:none;" +
    "color:#fff;font-family:system-ui,-apple-system,sans-serif;font-weight:800;font-size:42vmin;line-height:1;" +
    "animation:sigblitz 1s ease-out forwards}" +
    ".sig-blitz.r{background:rgba(22,163,74,.93)}.sig-blitz.f{background:rgba(214,40,40,.93)}" +
    ".sig-blitz.f span{display:inline-block;animation:sigwackel .45s ease-in-out}" +
    "@keyframes sigblitz{0%{opacity:0}8%{opacity:1}75%{opacity:1}100%{opacity:0}}" +
    "@keyframes sigwackel{0%,100%{transform:translateX(0)}20%{transform:translateX(-9%)}40%{transform:translateX(8%)}" +
    "60%{transform:translateX(-6%)}80%{transform:translateX(4%)}}" +
    "@media (prefers-reduced-motion:reduce){.sig-blitz.f span{animation:none}}" +
    ".sig-loes{display:inline-block;margin-top:8px;background:#fff;border:1px solid #c9d6e2;border-radius:10px;" +
    "padding:6px 12px;font:inherit;font-size:1rem;color:#18324a;cursor:pointer;min-height:0;width:auto;height:auto}" +
    ".sig-loes:active{background:#e6eef6}.sig-loes-text{display:block;margin-top:6px}" +
    ".sig-geg{display:grid;grid-template-columns:auto auto auto;justify-content:center;align-items:center;column-gap:12px;" +
    "row-gap:8px;margin:10px 0 4px;font-size:30px;font-weight:700;font-variant-numeric:tabular-nums}" +
    ".sig-geg .c1{justify-self:end}.sig-geg .c3{justify-self:start}.sig-geg .lab{font-size:15px;font-weight:600;color:#4a6378}" +
    ".sig-geg .f{color:#b42318}.sig-geg .r{color:#14633a}" +
    ".sig-ring{position:absolute;right:10px;top:50%;margin-top:-14px;width:28px;height:28px;pointer-events:none}" +
    ".sig-ring circle{fill:none;stroke-width:5}.sig-ring .bg{stroke:#d5e1ec}" +
    ".sig-ring .vg{stroke:#1f5f8b;stroke-dasharray:100;stroke-dashoffset:100;transform:rotate(-90deg);transform-origin:center;" +
    "animation:sigring 1.5s linear forwards}@keyframes sigring{to{stroke-dashoffset:0}}";
  var st = document.createElement("style");
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  function blitz(ok) {
    var b = document.createElement("div");
    b.className = "sig-blitz " + (ok ? "r" : "f");
    b.setAttribute("aria-hidden", "true");
    var s = document.createElement("span");
    s.textContent = ok ? "✓" : "✗";
    b.appendChild(s);
    document.body.appendChild(b);
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 1000);
    if (!ok && navigator.vibrate) { try { navigator.vibrate(180); } catch (x) { /* kein Gerät */ } }
  }

  function knopf(ziel, inhalt, nachher, aufschrift) {
    var k = document.createElement("button");
    k.type = "button";
    k.className = "sig-loes";
    k.textContent = aufschrift || "Lösung zeigen";
    k.addEventListener("click", function (ev) {
      ev.stopPropagation();
      var s = document.createElement("span");
      s.className = "sig-loes-text";
      if (typeof inhalt === "function") inhalt(s); else s.innerHTML = inhalt;
      k.parentNode.replaceChild(s, k);
      if (nachher) nachher(s);
    });
    ziel.appendChild(k);
    return k;
  }

  // W84 (Register 22.11.1, 22.11.2; L 22.11. „in allen Web-Apps“): Ring statt „Prüfen“ und Gegenüberstellung nach falsch.
  // ringer({feld, bereit, voll, dann}): plane() nach jedem Tastendruck – ist die Eingabe so lang wie die richtige Antwort
  // (voll()), füllt sich im Feld sofort ein Ring 1,5 s, sonst nach 3 s Ruhe; dann ruft er dann(). stoppe() bricht ab.
  function ringer(o) {
    var uhr = null, ruhe = null, el = null;
    function stoppe() { clearTimeout(uhr); clearTimeout(ruhe); uhr = ruhe = null; if (el && el.parentNode) el.parentNode.removeChild(el); el = null; }
    function los() {
      stoppe(); var f = o.feld(); if (!f) return;
      if (getComputedStyle(f).position === "static") f.style.position = "relative";
      el = document.createElementNS("http://www.w3.org/2000/svg", "svg"); el.setAttribute("class", "sig-ring");
      el.setAttribute("viewBox", "0 0 36 36"); el.setAttribute("aria-hidden", "true");
      el.innerHTML = '<circle class="bg" cx="18" cy="18" r="14"/><circle class="vg" cx="18" cy="18" r="14" pathLength="100"/>';
      f.appendChild(el); uhr = setTimeout(function () { stoppe(); o.dann(); }, 1500);
    }
    function plane() { stoppe(); if (!o.bereit()) return; if (o.voll()) los(); else ruhe = setTimeout(los, 3000); }
    return { plane: plane, stoppe: stoppe };
  }
  // gegen(ziel, zeilen): deine Rechnung rot über der richtigen grün, „=“ untereinander. zeile = [links, rechts, "f"|"r"];
  // ist links leer, steht „deine Antwort“ bzw. „richtig“ als Beschriftung.
  function gegen(ziel, zeilen) {
    var g = document.createElement("div"); g.className = "sig-geg"; g.setAttribute("role", "status");
    zeilen.forEach(function (z) {
      var a = document.createElement("span"), b = document.createElement("span"), c = document.createElement("span");
      if (z[0]) { a.className = "c1 " + z[2]; a.textContent = z[0]; b.className = "c2 " + z[2]; b.textContent = "="; }
      else { a.className = "c1 lab"; a.textContent = z[2] === "f" ? "deine Antwort" : "richtig"; }
      c.className = "c3 " + z[2]; c.textContent = z[1]; g.appendChild(a); g.appendChild(b); g.appendChild(c);
    });
    ziel.innerHTML = ""; ziel.appendChild(g); return g;
  }
  // loes(ziel, fn): Knopf „Lösung zeigen“ im zweiten Versuch; ein Tipp ruft fn (meist: Gegenüberstellung)
  function loes(ziel, fn) {
    var k = document.createElement("button"); k.type = "button"; k.className = "sig-loes"; k.textContent = "Lösung zeigen";
    k.addEventListener("click", function (ev) { ev.stopPropagation(); if (k.parentNode) k.parentNode.removeChild(k); fn(); });
    ziel.appendChild(k); return k;
  }

  window.Signal = { blitz: blitz, knopf: knopf, ringer: ringer, gegen: gegen, loes: loes };
})();
