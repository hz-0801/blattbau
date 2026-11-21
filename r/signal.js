/* signal.js – gemeinsamer Baustein der Web-Apps unter blattbau r/ (Register 21.11.11; Paket Montag, Werkstatt 83).
   Was an einer App beschlossen wird, gilt für alle, auch für künftige (Lehrer 21.11. W82: „das übertragen wir dann auch auf
   alle zukünftigen Apps … wir versuchen das zu vereinheitlichen“). Muster: r/runde vom 21.11.

   Signal nach „Prüfen“: eine Sekunde der ganze Bildschirm grün mit weißem ✓ oder rot mit weißem ✗ – das ✗ wackelt, damit es
   nicht nur an der Farbe hängt. Vibration nur bei falsch (Android; das iPhone kann es nicht). Lösung: bei falsch erst auf
   „Lösung zeigen“, bei richtig keine.

   Einbinden: <script src="../signal.js"></script> vor dem eigenen Skript der App, dann
     Signal.blitz(ok)                  Blitz und (bei falsch) Vibration
     Signal.knopf(ziel, inhalt, nachher) Knopf „Lösung zeigen“ ans Ende von ziel; ein Tipp ersetzt ihn durch inhalt (HTML
                                       oder eine Funktion, die den neuen span füllt) und ruft nachher(span) – z. B. Formeln
                                       setzen, die richtige Wahl markieren, die Figur färben
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
    ".sig-loes:active{background:#e6eef6}.sig-loes-text{display:block;margin-top:6px}";
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

  function knopf(ziel, inhalt, nachher) {
    var k = document.createElement("button");
    k.type = "button";
    k.className = "sig-loes";
    k.textContent = "Lösung zeigen";
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

  window.Signal = { blitz: blitz, knopf: knopf };
})();
