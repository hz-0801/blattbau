# Testauswertung 22.09.2026 – Katalogumbau, Lauf 1 und 2

Thema beider Läufe: Prozentrechnung (katalog/prozentrechnung.md,
Kl. 7, fünf Einheiten), Projekt erzeugeUnterrichtsblatt(), Modell
Opus 5. Befunde für den Katalog stehen in mathe-nachhilfe/
befund-testlauf-2026-09-22.md; hier stehen die Befunde für den
Prompt.

## Lauf 1 – v3.34, Eintrag per Raw-URL als Zuruf-Quelle

Eingabe: Raw-URL des Eintrags als maßgebliche Quelle, Lernblatt
mit Blatt 0, drei Dateien. Ergebnis: Blatt 0 (11 Hauptnummern,
3 Seiten), Lernblatt Teil 1 von 3 (Einheit 1–2, 6 Hauptnummern),
Gesamt; 511 s, 19 Schritte; fachlich fehlerfrei. Vorlage nicht
erreichbar (URL zeigte noch auf mathe-nachhilfe), Ersatzlayout,
drei babel-Korrekturrunden.

Befunde gegen ziel.md, alle in v4.0 umgesetzt:
- Schnitt in drei Teile nach Budget; ziel.md kennt keine Teile.
  → kein Budget, Bau in Reihe.
- Blatt 0 mit allen fünf Erkennungsschritten, darunter solche zu
  Einheit 4 und 5; führte Begriffe ein, die das Blatt erst lehrt.
  → Erkennungsschritte als Vorstufe der Einheit; Blatt 0 nur
  Fertigkeiten.
- Verfremdung: 2018-OS-K7a mit Originalzahlen und -kontext, ohne
  Jahr (Quelle „Typische Fehler"). → keine Zahl aus Kasten,
  Beispiel oder Original; Jahr am Original.
- Anweisungen gebündelt „(a–d) … (e–h)" (Aufgabe-1-Regel).
  → Anweisung gilt für die unmittelbar folgenden Teilaufgaben.
- Kettenlücken: Umkehrung (Einheit 2), höhere Marke Einheit 1.
  → jeder Typ hat Sprosse oder Hauptnummer.
- Dreisatz ohne Tabelle trotz Eintrag „in einer Tabelle".
  → Schreibform aus dem Eintrag.
- Beispiele: eigene Zahlen; Merkkasten als Beispielquelle nicht
  gebraucht.
- Bauzeit: Blatt 0 nach ~5,5 min (mit Störungen), Teil 1 in 2.

## Lauf 2 – v4.0, Eingabe „prozentrechnung"

Ergebnis: acht Dateien (Blatt 0, E1–E5, Lern, Gesamt), 38 Haupt-
nummern in fünf Einheiten, je Einheit zwei Aufgabenseiten plus
Ergebnisseite, Lern 13 Seiten, Gesamt 16, Verzeichnis mit Seiten-
zahlen. Kein Stern, kein Kasten, keine Hilfe-Seite. Blatt 0,
Einheit 1 und 5 vollständig nachgerechnet: fehlerfrei. Zeiten
verloren (t0.txt), Archiv erst auf Zuruf „protokoll" nachgebaut.

Bestätigt:
- Blatt 0 aus sechs Fertigkeiten plus Fehler finden, Reihenfolge
  nach erster Verwendung, Anweisungen am Ort, kein Themenbegriff.
- Alle fünf Erkennungsschritte als Vorstufe an ihrer Einheit
  (Nr. 8, 16, 23, 30, 31); „Gemischt" (29); Umkehrung (11);
  höhere Marke Einheit 1 (7).
- Zehn Originale verfremdet, alle mit Jahr; Zielmarke 2026 in
  33e.
- Titel ab Einheit 2 durchgehend „Kurzname – Formwort".
- Einheit 5 folgt der Kette bis Steigung und Prozentpunkte;
  Qualität hinten hält.
- Eigene Bausteine: Streifen, Streifenreihe, Dreisatz-Schema,
  Einheitenkopf in eigene.sty (im Archiv) – Kandidaten für
  Vorlage Stufe 4.

Befunde, in v4.1 umgesetzt:
- Einzel-PDFs je Einheit nicht gebraucht; Lehrer druckt aus dem
  Gesamt nach Seitenbereichen. Aber: Der Lehrer baut am Stunden-
  anfang, und während des Baus ist kein Zuruf möglich – nach
  Blatt 0 fehlt Material. → vier Dateien: Blatt 0, Einheit 1
  (früh), Gesamt (Verzeichnis klickbar, Seitenbereiche),
  Lösungen; weitere „E n" auf Zuruf; „gesamt"/„lösungen" nach
  Abbruch.
- Lösungen auf jeder Einheit stören beim Drucken. → eigene
  Lösungsdatei, Lösungstiefe nach ziel.md § 4.
- Erkennungsschritte mehrfach vergeben („vor Einheit 2 bis 5");
  Chat setzte richtig einmal. → Regel in 2.3 a.
- Drei Titel in Einheit 1 ohne Einheitsbezug, einer ein
  Werkstattname. → Titelregel 2.3 e für alle Hauptnummern.
- Dreisatz auf Blatt 0 mit 2,50 € · 7 an der Kante des Kopf-
  rechnens; Schema ohne Rahmenlinien. → Zahlenregel 2.2;
  gerahmtes Schema in der Vorlage.
- Streifenfelder als Block unter den Streifen; 65 % auf Zehner-
  streifen. → 4.3.
- t0.txt verloren, Archiv entfiel. → zeiten.txt mit Stempel je
  Übergabe, Archiv entsteht immer.
- Kopfzeile der Einheits- und Gesamt-PDF „Lernblatt". → 4.1.

## Offen

- Bauzeit je Einheit: in keinem Lauf gemessen.
- v4.x nur an Prozentrechnung getestet – bestgelesener Eintrag.
  Nächster Lauf: ein Thema mit mehr Einheiten und unsortierten
  Fertigkeiten (daten.md) oder ein Sek-II-Eintrag mit Profilen;
  Fokus, „schwach", Bild-Upload, Rückfall ohne Katalog ungetestet.
- hyperref gegen mathblatt.sty ungetestet; Vorlage Stufe 4
  (Streifen, gerahmter Dreisatz, Einheitenkopf, Verzeichnis)
  steht als eigener Auftrag an.
- Prompt hat rund 55 000 Zeichen; ob lange Läufe hinten
  verlieren, hat Lauf 2 nicht gezeigt, aber nicht widerlegt.
- Ablage der Blätter im Repo (blaetter/<thema>/, PDFs und
  Quelltexte, Index) als Einsortier-Auftrag; Aktualisieren aus
  Quelltext erst, wenn der Prompt zwischen zwei Versionen nur
  noch in Abschnitt 3–6 ändert.
