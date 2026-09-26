# Auftrag Vorlage Stufe 5: Bausteine aus dem Testlauf in
# mathblatt.sty aufnehmen

Modell: Opus (LaTeX-Bausteine mit Lesart; Anleitung ist Prosa).
Läuft ohne den Lehrer: keine Rückfrage, Standdatei, Commit je
Teil, Fehlerregel je Teil. Ordner: blattbau. Das Repo
mathe-nachhilfe liegt daneben (../mathe-nachhilfe); du liest dort,
schreibst dort nichts – parallel läuft dort ein anderer Auftrag.

## Ausgangslage

Der Testlauf vom 25.09.2026 (../mathe-nachhilfe/
bericht-testlauf-2026-09-25.md, Abschnitt „Vorlage";
blaetter/testlauf-2026-09-25/<n>-<name>/*.tex) hat zehn Blätter
mit Prompt v4.3 gebaut. Alle zehn Sitzungen definierten die
Zweigzeile im Vorspann selbst, die neun Lernblatt-Sitzungen dazu
Abhakseite und Verzeichniszeile, unter verschiedenen Namen; fünf
melden im gleichungsraster, dass die letzte Schreibzeile einer
Reihe in die nächste Zeile läuft. Das Blatt prozentrechnung vom
24.09. definiert \streifenfeld, das Blatt 3 des Testlaufs die
Schwach-Bausteine \swz, \swa, \swb, \swfrage. Diese Bausteine
kommen in die Vorlage, damit der Prompt sie nennt statt sie je
Lauf zu bauen (Werkzeuggrenze). ziel.md § 2 in mathe-nachhilfe
sagt, was die Bausteine leisten (Zweigzeile, Abhakseite „Das kann
ich", Option „schwach").

Namen sind festgelegt (der Prompt v4.4 wird sie so nennen):
\zweigzeile, Umgebung abhakseite mit \abhak, \verzeichniszeile mit
\verz, \streifenfeld, \swfrage (und die drei Schwach-Helfer).

## Regeln

- Shell PowerShell: kein Heredoc, kein sed. Dateien schreiben mit
  [System.IO.File]::WriteAllText(pfad, text,
  (New-Object System.Text.UTF8Encoding($false))); Zeilenenden LF;
  nach dem Schreiben prüfen (keine BOM, kein CR).
- git über die git.exe von GitHub Desktop, mit -c core.pager=cat;
  Commit-Nachrichten mit Umlaut über commit -F aus einer
  UTF-8-Datei, nie -m; kein Push.
- xelatex, pdftotext, pdfinfo, pdftoppm unter
  %LocalAppData%\Programs\MiKTeX\miktex\bin\x64; Python nur
  %LocalAppData%\Programs\Python\Python312\python.exe.
- Nichts löschen; verschieben nur mit git mv. Kompilate im
  Scratchpad, nicht im Repo.
- Grenzen sind Zählgrenzen, nie Zeit. Fehlerregel: ein Schritt,
  der zweimal scheitert, wird als „offen" mit Grund in Standdatei
  und Bericht eingetragen; der nächste Punkt folgt.
- Standdatei stand-vorlage-stufe5.md in der Wurzel: je Teil eine
  Zeile „offen / läuft / erledigt" mit dem letzten fertigen Punkt
  und dem Commit; Uhrzeiten nur aus Get-Date; ein Neustart liest
  sie zuerst.
- Bestehende Makros ändern nur, wo dieser Auftrag es sagt. Jeder
  neue Baustein steht in mathblatt.sty mit Kommentar und
  Aufrufbeispiel (Stil der Datei) und in Anleitung_mathblatt.md.
- Abgeleitete Prüfung: die zehn Gesamt-/Fokus-Quelltexte des
  Testlaufs und die vier Blätter unter
  ../mathe-nachhilfe/blaetter/<thema>/<datum>/src/ müssen mit der
  neuen Vorlage weiter kompilieren; dafür je Quelltext eine Kopie
  im Scratchpad, in der die eigenen Definitionen des Vorspanns,
  die den neuen Namen entsprechen, entfernt und die Aufrufe auf
  die Vorlagennamen umgestellt sind. Seitenzahl vor/nach in den
  Bericht.

## Teil 1: .gitattributes und Kompilierbasis

1. .gitattributes mit „* text=auto eol=lf" anlegen (faellig.md in
   mathe-nachhilfe, Posten blattbau); prüfen, dass git danach
   keine Änderung an bestehenden Dateien meldet (sonst
   normalisieren und im Bericht nennen).
2. Basislauf: alle vierzehn Quelltexte (oben) mit der heutigen
   Vorlage kompilieren, Seitenzahlen notieren. Das ist der
   Vergleichswert für jeden weiteren Teil.

Commit „vorlage: .gitattributes".

## Teil 2: Zweigzeile und Verzeichniszeile

1. \zweigzeile{text}: zweite Zeile unmittelbar unter
   \einheitenkopf (beide Formen), kleiner Grad (\small), kein
   Seitenumbruch zwischen Kopf und Zweigzeile, \medskip danach.
   Muster: die Definitionen in den zehn Quelltexten (\zweigzeile,
   \zweigkopf); wähle die Form, die in allen zehn Blättern gut
   aussieht, und nenne im Bericht, welche du genommen hast.
2. \einheitenkopf bekommt ein optionales Ziel: \einheitenkopf
   [e2]{Einheit 2 von 5 · …} setzt \hypertarget{e2}; ohne Option
   wie bisher. Sternform gleich.
3. \verzeichniszeile{\verz{e1}{Einheit 1 · Titel} · \verz{e2}{…}}:
   eine Zeile unter dem Blattkopf, klickbar (hyperref ist geladen
   oder wird geladen – prüfen, nicht doppelt), Umbruch erlaubt.

Gegenprobe Teil 2: die zehn Testlauf-Quelltexte kompilieren mit
den Vorlagennamen; Seitenzahl je Blatt gleich dem Basislauf oder
um höchstens eine Seite verschieden (Abweichung mit Grund in den
Bericht). pdftotext zeigt jede Zweigzeile direkt unter ihrem
Kopf.

Commit „vorlage: zweigzeile, verzeichniszeile, einheitenkopf mit
Ziel".

## Teil 3: Abhakseite

Umgebung abhakseite: beginnt auf neuer Seite mit der Überschrift
„Das kann ich" (Überschrift als optionales Argument
überschreibbar), darin \abhak{12}{Ich kann den Prozentsatz am
Streifen ablesen} als Zeile mit Kästchen, Nummer, Titel; Gruppen
mit \abhakgruppe{Einheit 2 · Prozentwert} als Zwischenzeile.
Muster: die neun Lernblatt-Quelltexte (\abhak, \abhakzeile,
\abhakgruppe, minipage/tabular in Eingabe 4). Zusatz, nur wenn er
mit allen vierzehn Quelltexten kompiliert: \abhakauto sammelt die
Titel aller \aufgabe-Köpfe des Blatts über eine Hilfsdatei
(.abh, wie ein Inhaltsverzeichnis, zweiter xelatex-Lauf) und
setzt die Seite ohne Handliste; die Handform bleibt.

Gegenprobe Teil 3: Eingabe 1, 3, 4, 8 hatten die Abhakseite über
zwei Seiten (bericht-testlauf-2026-09-25.md); mit der Vorlage
darf sie nicht länger werden. pdftotext: „Das kann ich" genau
einmal je Gesamt-Blatt, im Fokus (Eingabe 7) nicht.

Commit „vorlage: abhakseite".

## Teil 4: gleichungsraster, streifenfeld, Schwach-Bausteine

1. gleichungsraster: unter der letzten Schreibzeile einer Reihe
   fehlt die Tiefe, die letzte Schreiblinie liegt auf dem
   Folgetext (Eingabe 1, 2, 3, 7, 10, je im Aufruf ausgeglichen
   mit \rule{0pt}{2mm}, \noalign{\vspace{5mm}} u. ä.). Ursache in
   \schreibzeilen/\gl finden und in der Vorlage beheben, damit
   der Aufruf ohne Zusatz auskommt. Bestehende Blätter mit
   Zusatzabstand dürfen dadurch etwas Luft mehr bekommen, nicht
   weniger.
2. \streifenfeld aus ../mathe-nachhilfe/blaetter/prozentrechnung/
   2026-09-24/src/fokus_a.tex (Vorspann, Zeile 5) übernehmen, an
   die Streifen-Familie der Vorlage angleichen (gleicher Rahmen
   \mbstreifenrahmen), Anleitung.
3. Schwach-Bausteine aus blaetter/testlauf-2026-09-25/3-prozent-
   7-schwach/Prozentrechnung_Gesamt.tex Zeile 9–12: \swz, \swa,
   \swb, \swfrage – Teilaufgabe mit Raster (eine Schreibzeile je
   Schritt) und Darstellung daneben (ziel.md § 2 „schwach"). Die
   Teilaufgabe zählt mit dem teil-Zähler der Vorlage, damit
   blatt-pruef.py sie zählt (Eingabe 3 zählte 34 statt aller
   Teilaufgaben). Namen behalten; Aufrufform in der Anleitung mit
   einem Beispiel je Baustein.

Gegenprobe Teil 4: Eingabe 3 kompiliert mit den Vorlagenbausteinen
ohne eigenen Vorspann; Seitenzahl 32 ± 1 (bericht-testlauf-
2026-09-25.md). Ein Probeblatt im Scratchpad mit gleichungsraster
ohne Zusatzabstand, drei Reihen: pdftoppm-Bild ansehen, keine
Linie berührt den Folgetext.

Commit „vorlage: gleichungsraster-Tiefe, streifenfeld,
Schwach-Bausteine".

## Teil 5: Versionszeile, Anleitung, CHANGELOG

- mathblatt.sty Kopf: neue Versionszeile „Stufe 5, Version
  2026-09-27a" mit einer Zeile je Baustein (Stil der Datei);
  „Stufe 3" in Zeile 1 auf „Stufe 5" (Stufe 4 war der Umbau vom
  22.09., in den Versionszeilen e–h).
- Anleitung_mathblatt.md: je Baustein ein Absatz mit Aufruf und
  Bild; Verweis der Zweigzeile auf ziel.md § 2.
- CHANGELOG.md: Abschnitt Vorlage, eine Zeile mit allen
  Bausteinen und dem Anlass (Testlauf 25.09.).
- README.md: Satz zur Stufe 5.

Commit „vorlage: Stufe 5, Anleitung, CHANGELOG".

## Abschluss

- stand-vorlage-stufe5.md und diesen Auftrag nach archiv/
  verschieben (git mv; bei Namensgleichheit „b" anhängen).
- Bericht bericht-vorlage-stufe5-2026-09-27.md in der Wurzel,
  README-Zeile. Commit „archiv: auftrag-vorlage-stufe5, Bericht".

## Bericht

bericht-vorlage-stufe5-2026-09-27.md und im Chat. Erste Zeile das
Modell. Tabelle: die vierzehn Quelltexte mit Seitenzahl Basislauf
und nach Teil 4. Je Baustein: gewählte Form mit Grund, welche
Quelltext-Definition Vorbild war. Teil 4: die Ursache im
gleichungsraster in zwei Sätzen. Eigene Entscheidungen, offene
Punkte mit Grund. Letzte Zeile: „Push origin drücken".
