# Alltagsblatt – Bauanweisung v1

Stand 25.10.2026 (v1, Pilot). Du baust ein Alltagsblatt für einen Abschnitt einer Lerneinheit – für den Vorrat oder live
bei einer Bestellung. Das Warum steht in mathe-nachhilfe `allgemein.md`; hier steht, was du tust. Du schreibst nur den
Inhalt, als Daten. Setzen, Layout und die Prüfung des Handwerks übernimmt aufgabenbank `werkzeuge/alltagsblatt-pruef.py`.

## 1 Wofür das Blatt da ist

Ein Schüler bekommt das Blatt am Tisch, meist am Anfang einer neuen Unterrichtseinheit; der Lehrer sitzt daneben und
hilft an den neuen und schweren Stellen. Das Blatt holt ihn mit einem Einstieg ab, den er allein schafft, führt ihn in
kleinen Schritten bis zu dem, was seine Klasse in der Klassenarbeit verlangt, und ist nach etwa einer Sitzung zu Ende.
Jede Aufgabe muss ihm nützen; im Zweifel weglassen. Gelungen ist das Blatt, wenn der Lehrer es ohne Nachbessern an den
Tisch legt.

## 2 Was du bekommst

- **Bestellung** (im Auftrag oder in der Nachricht): Katalogeintrag und Einheit, Abschnitt, Klasse, Schulform oder
  Bildungsgang (OS, GYM; Sek II: Abitur GK oder LK, FOS), das Buch des Schülers, wenn bekannt, Zusätze („schwach“,
  „mit Wiederholung“, Foto einer Schulaufgabe) und einen Kurznamen für den Lauf.
- **Unterlage:** `python3 werkzeuge/unterlage.py <eintrag> <einheit> <abschnitt> --klasse <k> --schulform <s>
  [--werk <werk>] --aus <ordner>` schreibt `unterlage.md` in deinen Ordner. Lies sie ganz; sie ist deine Quelle. Sie
  enthält: Einheit und Abschnitt mit Typen und Kette aus dem Katalog, die Voraussetzungen, typische Fehler, Originale mit
  Niveau (P10, Abitur, FHR), die Niveaustufe des Rahmenlehrplans, Satzmuster und Schwereprofil aus den Büchern,
  Buchaufgaben des Kapitels als Daten (wenn ein Buch vorliegt) und die Typen und Merkmale der Einheit.
- Andere Regeldateien, den alten Prompt und die Bank liest du nicht; was du brauchst, steht hier und in der Unterlage.

## 3 Das Blatt

**3.1 Zuschnitt.** Ein Abschnitt: ein bis drei Verfahren, je Verfahren ein Block. Richtung: 2–4 Seiten, etwa 15–30
Teilaufgaben. Länger nur mit Grund (im Bericht). Mehr Übung kommt über „mehr“ und spätere Blätter, nicht über Länge.

**3.2 Maßstab.** Die oberste Aufgabe jedes Blocks hat das Niveau, das der Rahmenlehrplan für Klasse und Schulform des
Schülers verlangt. Greifbar wird es über die Niveaustufe in der Unterlage und die schwersten regulären Buchaufgaben des
Kapitels, nicht über Vertiefung oder Knobelei. Nichts darüber, was eine Klassenarbeit dieser Klasse verlangen kann. Im
Prüfungsjahr (Kl. 10 Oberschule bei einem P10-Thema, Q-Phase bei Abitur oder FHR) ist ein verfremdetes Original aus der
Unterlage der Anker der obersten Aufgabe.

**3.3 Ein Block**, in dieser Folge:
- **Beispiel:** der einfachste Fall, sauber vorgerechnet als Tafelbild – Gleichheitszeichen untereinander, Umformungen mit
  Auftragsstrich, jede Zeile ausgerechnet, am Ende die Antwort; in Geometrie mit Skizze. Ein Beispiel mit einem
  Rechenschritt bleibt einzeilig. Es zeigt die Schreibweise, die der Schüler übernehmen soll.
- **Merksatz** nur, wo eine Formel den Block trägt: eine Zeile, die Formel genau wie im Tafelwerk. Nie eine umgestellte
  Form zum Merken (das Umstellen zeigt das Beispiel), nie erklärender Text.
- **Päckchen:** 3–4 Teilaufgaben gleichen Baus mit wenig Text. Die erste ist so leicht wie das Beispiel, mit anderen
  Werten. Jede weitere bringt genau ein neues Merkmal (aus den Merkmalen der Unterlage) gegenüber der ersten oder der
  vorigen; zwei Merkmale zusammen höchstens in der letzten. Der Text verrät die Entscheidung nicht („Berechne die
  fehlende Seite“, nicht „die fehlende Kathete“, wenn das Finden geübt wird).
- **Steigerung:** 2–4 Aufgaben bis zum Maßstab (3.2), jede in anderer Form (3.4); eine davon eine Sachaufgabe, deren
  Mathematik die Sache trägt.
- **„Stimmt das?“:** höchstens eine je Block – eine Behauptung, die einen typischen Fehler der Unterlage enthält oder
  nicht; der Schüler entscheidet und begründet.

**3.4 Vielfalt.** Wechsle von Aufgabe zu Aufgabe Aufforderung, Antwortform und Darstellung: rechnen, ablesen (Tabelle,
Diagramm, Graph, Skizze), ankreuzen (eine echte Entscheidung, höchstens vier Optionen), zuordnen, ergänzen, Aussage
prüfen und begründen, schätzen. Zwei Nachbarn beginnen nie mit derselben Aufforderung. Die Satzmuster der Unterlage sind
Vorbild für die Form; der Wortlaut ist immer dein eigener.

**3.5 Rahmen.** Auf dem ersten Blatt einer Einheit oder bei „mit Wiederholung“ steht vorn „Das kennst du schon“: nur die
Vorstufen, die dieses Blatt braucht, je eine kurze Aufgabe mit 2–3 Teilen, zusammen höchstens eine halbe Seite. Am Ende
„Von früher“: eine oder zwei Aufgaben aus früheren Abschnitten der Einheit (aus der Unterlage); gibt es keine, entfällt
es. Keine Fundstellen, keine Zeitmarken, kein Satz über das Blatt („kannst du überspringen“).

**3.6 Nicht aufs Blatt:** Fehler-finden-Aufgaben als eigener Typ, Rätsel, Herleitungsbilder, Ergebnisformen, die einen
Schritt ersparen („c² = __, c = __“), Merkkasten mit Text, Aufgaben über dem Maßstab.

## 4 Aufgaben schreiben

**4.1 Zahlen.** Ganze Zahlen und glatte Ergebnisse zuerst; Dezimalzahlen, Brüche und Runden erst als Merkmal und
sparsam. Denk vom Ende her: Welches Ergebnis soll herauskommen, welche Angabe führt dorthin? Exakt zuerst, dann gerundet
(„√65 ≈ 8,1“). Werte, die im Kopf gehen, wo nicht gerade das Rechnen selbst geübt wird.

**4.2 Sprache.** Kurze ganze Sätze, erst die Lage, dann eine Aufforderung; Du-Form; Operatoren wie in der Prüfung
(berechne, gib an, begründe, entscheide); ein Fachwort beim ersten Mal mit dem Alltagswort; Buchstaben und Schreibweise
wie im Buch des Schülers, sonst wie im Tafelwerk; Division als Bruch.

**4.3 Darstellung.** In Geometrie hat jede Aufgabe eine Figur (deine Skizze oder ein Skizzenfeld); sonst bekommt die
erste Aufgabe eines Blocks ein Bild, wo es trägt. Was die Skizze zeigt, steht nicht noch einmal im Text.

**4.4 Sachaufgaben.** Echte Größen, eine sinnvolle Frage, nie zweimal hintereinander dieselbe Sache. Eine Sache nur,
wenn die Mathematik einen Wert oder eine Entscheidung in der Sache liefert.

**4.5 Herkunft.** Alles auf dem Blatt ist frei: eigene Aufgaben oder freie Zwillinge der Buchaufgaben (neue Werte, eigener
Wortlaut, wo der Satz mehr als eine Floskel ist, eigene Sache bei erzählten Sachtexten, Abbildungen selbst gezeichnet).
Ein Prüfungsoriginal steht nur verfremdet da (neue Werte, eigener Wortlaut), mit seiner Kennung in `ursprung`. Nie ein
ganzes Buchkapitel in derselben Auswahl und Folge.

**4.6 Sek II.** Päckchen je Handgriff wie oben; die Steigerung endet mit einer Aufgabe mit Stamm und Teilaufgaben a), b),
c) im Stil der Prüfung des Bildungsgangs (Abitur Teil A oder B, FHR), Zwischenergebnisse zur Kontrolle, wo die Prüfung
sie gibt. Kein Stoff eines anderen Bildungsgangs (FOS: keine e-Funktion, keine Vektoren, keine Kettenregel).

**4.7 schwach** (nur auf Zuruf): gleicher Stoff, anderer Bau – Päckchen bis 5 Teilaufgaben, neben den ersten eine
Darstellung, an der gerechnet wird (Streifen, Tabelle, Skizze), ein Fachwort erst dort, wo es gebraucht wird.

## 5 Ausgabe: Daten, kein LaTeX-Blatt

In deinen Ordner schreibst du:

- **`plaetze.jsonl`** – eine Zeile je Platz: Teilaufgaben einer Nummer mit gleicher Kennzeichnung (im Päckchen meist eine
  Zeile je Teilaufgabe). Felder:
  `id` (`<eintrag>-e<einheit>-<lauf>-NNN`), `nr`, `teil` („a“, „a-c“ oder „“), `abschnitt` (wie in der Unterlage),
  `block` (1–3; 0 für „Das kennst du schon“, 9 für „Von früher“), `rolle` (vorstufe, grundfall, sprosse, wechsel,
  begruenden, ziel, wiederholung), `typ` (aus den Typen der Unterlage), `merkmale` (Liste aus den Merkmalen der Unterlage,
  leer beim Grundfall), `titel` (Überschrift der Nummer in Schülersprache), `aufgabe` (LaTeX mit den Bausteinen von
  mathblatt.sty; mehrere Teilaufgaben in `teile` mit `\teil`), `grafik` (TikZ oder Baustein, sonst „“), `antwort`
  (Antwortraum oder „“), `platz` (Rechenzeilen = Schritte der Lösung + 1, höchstens 8; 0 ohne Rechnung), `loesung`
  („a) … \quad b) …“ – Ergebnis und Ansatz, kein Satz), `ergebnis` (Liste je Teilaufgabe, kurz, mit Einheit), `pruef`
  (Liste je Teilaufgabe: ein Python-Ausdruck mit sympy, der wahr sein muss, z. B. `"Rational(4+7+9+12, 4) == 8"`;
  bei Begründungen `""`), `haengt_an` (id des Platzes, auf den sich die Aufgabe bezieht, sonst „“), `sache`,
  `ursprung` (`{"art": "eigen" | "zwilling" | "verfremdet", "werk": "", "seite": "", "nr": ""}`), `eintrag`, `einheit`.
  Ein Merkmal, das in der Unterlage fehlt, trägst du in `merkmale_neu` ein (kennung;abschnitt;merkmal;art;hinweis).
- **`rahmen.jsonl`** – eine Zeile je Rahmenteil in Blattfolge: `pos`, `art` (zone, block, beispiel, merksatz,
  vonfrueher), `vor_nr` (die Nummer, vor der er steht), `tex`. `block` ist die Überschrift des Blocks in Schülersprache
  (der Handgriff, nicht der Typname), `beispiel` das Tafelbild (mit `\rechnung{…}`), `merksatz` die eine Formelzeile.
- **`titel.txt`** (Name des Blatts, kurz: das Werkzeug oder die Sache, z. B. „Mittelwert“) und **`klasse.txt`** (Klasse
  der Bestellung).
- **`bericht.md`**, höchstens 10 Zeilen: je Block Beispiel, Merkmale des Päckchens und die oberste Aufgabe mit dem Grund,
  warum sie dem Maßstab entspricht; Prüfergebnis, Seiten, Teilaufgaben, Wanduhr, Unsicheres.

Kopf, Fuß, Kennung, Nummern, Buchstabenspalte, Rechenplatz, Lösungsblatt und die Ergebnisse im Fuß setzt das Skript.

## 6 Ablauf – so wenige Schritte wie möglich

1. `date -u` als erste Zeile in `zeiten.txt`; Unterlage erzeugen und ganz lesen.
2. Plane im Kopf, bevor du schreibst: die Blöcke; je Block das Beispiel, die Merkmale des Päckchens in ihrer Folge, die
   Steigerung und die oberste Aufgabe (3.2).
3. Schreib die Daten in einem Zug.
4. `python3 werkzeuge/alltagsblatt-pruef.py <ordner>`. Meldet es HALT, berichtigst du die Daten und rufst es erneut auf;
   Warnungen prüfst du und entscheidest. Das Skript setzt `blatt.pdf` und `loesung.pdf` und nennt die Seiten mit Grafik.
5. Sieh nur diese Seiten an; passt eine Figur nicht zu den Zahlen oder ist sie abgeschnitten, berichtigen.
6. Anfänger-Test im Kopf: Schafft der Schüler die erste Päckchenaufgabe jedes Blocks allein mit dem Beispiel? Gibt es
   einen Sprung zwischen zwei Teilaufgaben?
7. `date -u` in `zeiten.txt`, Bericht, fertig. Live lieferst du `blatt.pdf` und `loesung.pdf`.
