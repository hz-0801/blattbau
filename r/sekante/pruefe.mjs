// Prüft die Rechnung der Web-App „Sekante wird Tangente“ (index.html, Block RECHNUNG) gegen exakte Bruchrechnung.
// Aufruf: node r/sekante/pruefe.mjs   – Ausgabe: Zahl der Fälle, Fehler; Rückgabewert 1 bei Fehlern.
// Fälle: alle vier f, x₀ ∈ {−2, …, 3}, h aus der ganzen Schieberliste (enthält ±2, ±1, ±0,5, ±0,1, ±0,01).
// Geprüft: angezeigtes m = (f(x₀+h) − f(x₀)) : h (Zeichenkette wie angezeigt), dazu f(x₀+h), Δy und f′(x₀);
// Grenzwert: |m − f′(x₀)| fällt für |h| = 1; 0,5; 0,1; 0,01 echt und ist bei |h| = 0,01 kleiner als 0,1.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
const datei = fileURLToPath(new URL("./index.html", import.meta.url));
const html = readFileSync(datei, "utf8");
const a = html.indexOf("/* RECHNUNG – Anfang"), e = html.indexOf("/* RECHNUNG – Ende */");
if (a < 0 || e < a) { console.error("Block RECHNUNG nicht gefunden"); process.exit(1); }
const S = new Function(html.slice(a, e) + "\nreturn {FUNK,HW,X0,FOLGE,rechne,zahl,zH,texDQ};")();

// exakte Rechnung: Zahlen als Bruch [Zähler, Nenner] mit BigInt
const g = (x, y) => { x = x < 0n ? -x : x; y = y < 0n ? -y : y; while (y) [x, y] = [y, x % y]; return x || 1n; };
const kurz = ([z, n]) => { if (n < 0n) { z = -z; n = -n; } const t = g(z, n); return [z / t, n / t]; };
const mal = (p, q) => kurz([p[0] * q[0], p[1] * q[1]]);
const plus = (p, q) => kurz([p[0] * q[1] + q[0] * p[1], p[1] * q[1]]);
const minus = (p, q) => plus(p, [-q[0], q[1]]);
const durch = (p, q) => kurz([p[0] * q[1], p[1] * q[0]]);
const B = v => [BigInt(v), 1n];
const EXAKT = {
  "x2": x => mal(x, x), "2x2": x => mal(B(2), mal(x, x)),
  "x2-3x": x => minus(mal(x, x), mal(B(3), x)), "x3": x => mal(x, mal(x, x)),
};
const ABL = { "x2": x => 2 * x, "2x2": x => 4 * x, "x2-3x": x => 2 * x - 3, "x3": x => 3 * x * x };
function dezimal([z, n]) {   // endlicher Dezimalbruch als Zeichenkette wie zahl(): "-0.5", "6.01"
  let k = 0, p = 1n; while ((p * z) % n !== 0n) { p *= 10n; k++; if (k > 12) throw new Error("kein endlicher Bruch"); }
  const w = (p * z) / n, neg = w < 0n, s = (neg ? -w : w).toString().padStart(k + 1, "0");
  let r = k ? s.slice(0, -k) + "." + s.slice(-k) : s; if (k) r = r.replace(/0+$/, "").replace(/\.$/, "");
  return (neg && r !== "0" ? "-" : "") + r;
}
const hBruch = h => kurz([BigInt(Math.round(h * 100)), 100n]);

let faelle = 0, fehler = 0;
const melde = t => { fehler++; if (fehler <= 20) console.log("FEHLER", t); };
for (const fk of Object.keys(EXAKT)) for (const x0 of S.X0) {
  for (const h of S.HW) {
    faelle++;
    const hb = hBruch(h), x1 = plus(B(x0), hb), y0 = EXAKT[fk](B(x0)), y1 = EXAKT[fk](x1), dy = minus(y1, y0), m = durch(dy, hb);
    const r = S.rechne(fk, x0, h);
    const soll = { x1: dezimal(x1), y0: dezimal(y0), y1: dezimal(y1), dy: dezimal(dy), m: dezimal(m), abl: String(ABL[fk](x0)) };
    for (const k of Object.keys(soll)) if (S.zahl(r[k]) !== soll[k]) melde(`${fk} x0=${x0} h=${h} ${k}: angezeigt ${S.zahl(r[k])}, exakt ${soll[k]}`);
    const tex = S.texDQ(fk, x0, h);   // die angezeigte Formel endet mit \mathbf{m}
    if (!tex.includes("\\mathbf{" + soll.m.replace(".", "{,}") + "}")) melde(`${fk} x0=${x0} h=${h}: Formel zeigt nicht m = ${soll.m}`);
  }
  for (const s of [1, -1]) {   // Grenzwert gegen f′(x₀)
    const ab = [1, 0.5, 0.1, 0.01].map(b => Math.abs(S.rechne(fk, x0, s * b).m - ABL[fk](x0)));
    for (let i = 1; i < ab.length; i++) if (!(ab[i] < ab[i - 1])) melde(`${fk} x0=${x0} h-Vorzeichen ${s}: |m − f′| fällt nicht (${ab})`);
    if (!(ab[3] < 0.1)) melde(`${fk} x0=${x0}: |m − f′| bei h = ${s * 0.01} ist ${ab[3]}`);
  }
}
for (const h of [2, 1, 0.5, 0.1, 0.01]) for (const s of [1, -1]) if (!S.HW.includes(s * h)) melde(`h = ${s * h} fehlt im Schieber`);
if (S.HW.includes(0)) melde("h = 0 im Schieber");
console.log(`Fälle: ${faelle} (4 f × ${S.X0.length} x₀ × ${S.HW.length} h), Grenzwert je f, x₀ und Vorzeichen; Fehler: ${fehler}`);
process.exit(fehler ? 1 : 0);
