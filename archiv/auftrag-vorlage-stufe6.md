# Auftrag Vorlage Stufe 6: Bausteine aus den Lesebefunden vom
# 26.09., Probeblatt der Vorlage

Modell: Opus (LaTeX-Bausteine mit Lesart). Läuft ohne den Lehrer:
keine Rückfrage, Standdatei, Commit je Teil, Fehlerregel je Teil.
Ordner: blattbau. Das Repo mathe-nachhilfe liegt daneben
(../mathe-nachhilfe); du liest dort, schreibst dort nichts –
parallel läuft dort ein anderer Auftrag.

## Ausgangslage

Stufe 5 (bericht-vorlage-stufe5-2026-09-27.md) hat Zweigzeile,
Verzeichniszeile, Abhakseite, gleichungsraster-Tiefe,
streifenfeld und die Schwach-Bausteine aufgenommen. Der Lehrer
hat am 26.09. zwei Testlauf-Blätter gelesen; die Befunde stehen
in ../mathe-nachhilfe/befund-testlauf-2026-09-25.md (Abschnitt
„Vorlage"; liegt dort, sobald der parallele Auftrag Teil 1
committet hat – sonst gilt die Liste in diesem Auftrag, sie ist
dieselbe). Sechs Bausteine fehlen, und die Vorlage hat kein
Lesestück, an dem der Lehrer sie prüfen kann. Die Namen legt
dieser Auftrag fest; der Prompt v4.4 nennt sie so.

## Regeln

- Shell PowerShell: kein Heredoc, kein sed. Dateien schreiben mit
  [System.IO.File]::WriteAllText(pfad, text,
  (New-Object System.Text.UTF8Encoding($false))); Zeilenenden LF;
  nach dem Schreiben prüfen (keine BOM, kein CR).
- git über die git.exe von GitHub Desktop, mit -c core.pager=cat;
  Commit-Nachrichten mit Umlaut über commit -F aus einer
  UTF-8-Datei, nie -m; kein Push.
- xelatex, pdftotext, pdfinfo, pdftoppm unter
  %LocalAppData%\Programs\MiKTeX\miktex\bin\x64.
- Nichts löschen; verschieben nur mit git mv. Kompilate im
  Scratchpad, außer das Probeblatt (Teil 7).
- Grenzen sind Zählgrenzen, nie Zeit. Fehlerregel: ein Schritt,
  der zweimal scheitert, wird als „offen" mit Grund in Standdatei
  und Bericht eingetragen; der nächste Punkt folgt.
- Standdatei stand-vorlage-stufe6.md in der Wurzel: je Teil eine
  Zeile „offen / läuft / erledigt" mit dem letzten fertigen Punkt
  und dem Commit; Uhrzeiten nur aus Get-Date; ein Neustart liest
  sie zuerst.
- Bestehende Makros ändern nur, wo dieser Auftrag es sagt. Jeder
  neue Baustein steht in mathblatt.sty mit Kommentar und
  Aufrufbeispiel (Stil der Datei) und in Anleitung_mathblatt.md
  mit Aufruf und Bild.
- Kompilierbasis wie Stufe 5: die zehn Gesamt-/Fokus-Quelltexte
  des Testlaufs und fokus_a (Stufe-5-Fassungen aus dem Scratchpad
  neu herstellen, wie der Bericht Stufe 5 es beschreibt) müssen
  nach jedem Teil kompilieren; Seitenzahl vor/nach in den
  Bericht, Basis ist die Spalte „nach Teil 4" des Berichts
  Stufe 5. b1–b3 bleiben außen vor (eigene.sty).

## Teil 1: Anweisungszeile zwischen Teilaufgaben

\anweisung{Rechne mit dem Taschenrechner. Runde auf eine Stelle.}
– eine Zeile in Textbreite, einzeilig oder umbrechend, die
innerhalb von teile, teilezwei, gleichungsraster und geruest
zwischen zwei Teilaufgaben steht, ohne den Zähler zu berühren
und ohne die Spaltenordnung zu brechen (in zweispaltigen
Umgebungen: die Zeile beendet die laufende Reihe, die nächste
Teilaufgabe beginnt links). Vor der Zeile ein kleiner Abstand,
danach keiner. Befund: Eingabe 7 Nr. 5, 6, 16 (Anweisung „bei b)
…" im Titel oder frei zwischen den Teilaufgaben, Schreibzeilen
gehören danach zu nichts).

Gegenprobe Teil 1: Probestück im Scratchpad mit vier Teilaufgaben
und einer Anweisung nach b) in allen vier Umgebungen; pdftoppm-
Bild ansehen: c) beginnt links unter der Anweisung.

Commit „vorlage: anweisung zwischen Teilaufgaben".

## Teil 2: Rechenplatz

\rechenplatz{4} – ein leerer Block mit vier Zeilen à 12 mm, in
Textbreite, mit hellgrauen Linien wie \schreibzeilen; optional
\rechenplatz[halb]{4} in halber Breite für die zweispaltige
Umgebung. Er steht nach dem Ich-kann-Satz und der Anweisung an
der Stelle, an der bisher das Beispiel stand; der Lehrer
schreibt das Gerüst hinein (Beschluss 26.09.: kein gedrucktes
Beispiel im Regelfall). Kein Seitenumbruch im Block; passt er
nicht mehr, rutscht er ganz. \schreibzeilen bleibt bei 9 mm.

Gegenprobe Teil 2: \rechenplatz{4} misst 48 mm plus Abstände
(pdftoppm, Pixel bei 100 dpi nachmessen: 189 ± 4 px).

Commit „vorlage: rechenplatz".

## Teil 3: Verfahrensüberschrift

\verfahren{Nullstellen aus der Scheitelpunktform} – Zwischenzeile
zwischen Einheitenkopf und Hauptnummern, kleiner als der Kopf,
größer als der Text, halbfett, mit Abstand davor, kein Umbruch
danach. Die Abhakseite kennt sie: \abhakauto sammelt sie als
Gruppenzeile (wie \abhakgruppe) zwischen den Hauptnummern; die
Handform bleibt. Befund: der Fokus (Eingabe 7) reiht drei
Verfahren ohne sichtbaren Wechsel.

Gegenprobe Teil 3: Probestück mit zwei Verfahren à zwei
Hauptnummern und \abhakauto: die Abhakseite zeigt zwei
Gruppenzeilen mit je zwei Zeilen darunter.

Commit „vorlage: verfahren, abhakauto mit Gruppen".

## Teil 4: Kopfzeile mit Einheit

\einheitenkopf (beide Formen) merkt sich die Kurzform des Kopfs
für die Seitenkopfzeile: ab der Seite, auf der die Einheit
beginnt, zeigt die Kopfzeile „Thema · Lernblatt · 1 Prozentsatz".
Kurzform = Nummer und Titel ohne „Einheit" und ohne „von n"; ein
optionales Argument setzt sie ausdrücklich
(\einheitenkopf[e1][1 Prozentsatz]{…} oder eine andere Form,
wenn die Optionsfolge von Stufe 5 dagegen steht – im Bericht
nennen). Die Zone trägt „Kennst du schon", die Abhakseite „Das
kann ich". Der Fokus (\einheitenkopf ohne „von") ebenso.

Gegenprobe Teil 4: Eingabe 3 (Prozentrechnung_Gesamt) kompiliert;
pdftotext zeigt auf Seite 9 die Kopfzeile mit „2 Prozentwert"
(Verzeichnis der Eingabe 3: Einheit 2 ab Seite 9 – nach Stufe 5
kann die Seite um eins abweichen, dann die neue nennen).

Commit „vorlage: Kopfzeile mit Einheit".

## Teil 5: Beispielblock

Umgebung beispiel: eingerückt (etwa 1 em), heller Rahmen oder
linke Linie in Grau, darin die Teilaufgaben-Gestalt – der
Inhalt ist frei, die Umgebung liefert nur Einrückung, Rahmen und
das Wort „Beispiel:" als erste Zeile; \beispiel (Rechnung) und
\rechnung bleiben und dürfen darin stehen. Kein Seitenumbruch im
Block. Befund: Eingabe 3 Nr. 13, 14 – Angabe links, „Beispiel:"
darunter, Streifen rechts, Rechnung links: vier Blickorte.

Gegenprobe Teil 5: Probestück mit Angabe, Streifen, \rechnung,
Antwortzeile in der Umgebung; pdftoppm-Bild: ein Block, Rahmen
schließt alles ein.

Commit „vorlage: beispiel-Umgebung".

## Teil 6: Streifen ohne Einteilung und Streifen-Prüfung

1. \streifenleer und \streifen bekommen ein optionales Argument
   für die Zahl der Teilstriche wie \streifenfeld; 0 ergibt
   einen Streifen ohne Teilstriche, nur 0 % und 100 % beschriftet
   (zum Einteilen durch den Schüler). Befund: Eingabe 3 Nr. 12
   verlangt Einteilen in 50-%-Schritte an einem Zehnerstreifen.
2. Die Befunde der Eingabe 3 zur Streifen-Familie
   (lesezettel.md, Ausgabeblock 3): \zahlenstrahl mit xstep 0.01
   ab xmin 7.6 zeichnet nichts; letzter Teilstrich fehlt, wenn
   xmax genau auf dem Raster liegt; \streifenwertreihe zeigt bei
   leerem Ganzwert kein Feld; \setcounter{aufgabe}{n} ergibt
   Nr. n+1 (das ist so gewollt – in der Anleitung sagen). Die
   ersten drei beheben, mit je einem Probestück.

Gegenprobe Teil 6: Probestück mit \streifenleer[0],
\zahlenstrahl[xmin=7.6,xmax=8,xstep=0.01]{} und
\streifenwertreihe mit leerem Ganzwert; Bilder ansehen.

Commit „vorlage: streifen ohne Einteilung, Streifen-Reparaturen".

## Teil 7: Probeblatt der Vorlage

referenz/probeblatt.tex und referenz/probeblatt.pdf: ein Blatt,
das jeden dokumentierten Baustein der Vorlage genau einmal zeigt,
in der Reihenfolge der Anleitung, je Baustein mit seinem Namen
als kleiner grauer Randnotiz (\marginpar oder eine Zeile
darüber), Inhalt aus der Anleitung (die Beispiele dort). Zweck:
Lesestück für den Lehrer und Kompilierprobe jeder künftigen
Stufe – ab jetzt verlangt jeder Vorlagen-Auftrag, dass das
Probeblatt kompiliert und um die neuen Bausteine wächst.
Seitenzahl in den Bericht; Zählgrenze: höchstens 12 Seiten, sonst
Beispiele kürzen, keinen Baustein weglassen. Das PDF wird
committet (einzige Ausnahme von „Kompilate im Scratchpad").

Gegenprobe Teil 7: die Zahl der Bausteine in der Anleitung
(Zeilen mit „→" im Kopfteil) und die Zahl der Randnotizen im
Probeblatt sind gleich; Abweichung mit Liste in den Bericht.

Commit „vorlage: Probeblatt".

## Teil 8: Versionszeile, Anleitung, CHANGELOG

mathblatt.sty Kopf: „Stufe 6, Version 2026-09-28a" mit einer
Zeile je Baustein; Anleitung: je Baustein ein Absatz, dazu der
Absatz zum Probeblatt; CHANGELOG.md Abschnitt Vorlage; README
Satz zu Stufe 6 und zum Probeblatt.

Commit „vorlage: Stufe 6, Anleitung, CHANGELOG".

## Abschluss

- stand-vorlage-stufe6.md und diesen Auftrag nach archiv/
  verschieben (git mv; bei Namensgleichheit „b" anhängen).
- Bericht bericht-vorlage-stufe6-2026-09-28.md in der Wurzel,
  README-Zeile. Commit „archiv: auftrag-vorlage-stufe6, Bericht".

## Bericht

bericht-vorlage-stufe6-2026-09-28.md und im Chat. Erste Zeile das
Modell. Tabelle: elf Quelltexte mit Seitenzahl Basis (Stufe 5)
und nach Teil 6. Je Baustein: Name, Aufruf, gewählte Form mit
Grund. Teil 7: Seitenzahl und die Bausteinliste. Eigene
Entscheidungen, offene Punkte mit Grund. Letzte Zeile: „Push
origin drücken".
