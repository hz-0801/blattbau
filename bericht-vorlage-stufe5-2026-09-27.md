Modell: Claude Opus 5 (claude-opus-5)

# Bericht Vorlage Stufe 5: Bausteine aus dem Testlauf in mathblatt.sty

Auftrag: `archiv/auftrag-vorlage-stufe5.md` (Standdatei daneben). Ordner `blattbau`,
Commits eaa74fc, 96b25f5, 6c2df31, 1809394, eb76a5e und der Commit dieses Berichts.
Kein Push. Im Repo `mathe-nachhilfe` wurde nur gelesen.

Die Vorlage heißt jetzt Stufe 5, Version 2026-09-27a. Der Auftrag nennt dieses Datum;
die Systemuhr zeigte beim Lauf den 26.09.2026. Die Namen bleiben wie beauftragt, die
Uhrzeiten in der Standdatei stammen aus `Get-Date`.

## Seitenzahlen der vierzehn Quelltexte

Basislauf: heutige Vorlage (2026-09-22h), Quelltexte unverändert. Nach Teil 4: Vorlage
2026-09-27a, Quelltexte im Scratchpad ohne die eigenen Vorspann-Definitionen und mit den
Vorlagennamen. Je Quelltext zwei xelatex-Läufe.

| Kürzel | Quelltext | Basis | nach Teil 4 | Abweichung und Grund |
|---|---|---|---|---|
| t01 | testlauf 1-quadgl-9-os/gesamt.tex | 22 | 21 | −1: Abhakseite passt jetzt auf eine Seite (vorher zwei) |
| t02 | testlauf 2-quadgl-9-gym/QuadratischeGlg_Gesamt.tex | 16 | 17 | +1: Tiefe im gleichungsraster |
| t03 | testlauf 3-prozent-7-schwach/Prozentrechnung_Gesamt.tex | 32 | 32 | – (Auftrag: 32 ± 1) |
| t04 | testlauf 4-linfkt-8-neu/gesamt.tex | 24 | 24 | – |
| t05 | testlauf 5-kreis-8-ausblick/Kreis_Gesamt.tex | 12 | 12 | – |
| t06 | testlauf 6-daten-7/Daten_Gesamt.tex | 18 | 18 | – |
| t07 | testlauf 7-nullstellen-fokus/QuadratischeFkt_Fokus_Nullstellen.tex | 7 | 7 | – |
| t08 | testlauf 8-potenz-10/gesamt.tex | 23 | 23 | – |
| t09 | testlauf 9-kurven-12-be/Kurvenuntersuchung_Gesamt.tex | 20 | 20 | – |
| t10 | testlauf 10-ka-terme-8-gym/TermeBinomischeFormeln_Gesamt.tex | 18 | 20 | +2: 35 `gleichungsraster` mit 56 Gleichungen, die meisten aller vierzehn |
| b1 | blaetter/daten/2026-09-22/src/Daten_Gesamt.tex | 21 | 21 | – |
| b2 | blaetter/nullstellen/2026-09-22/src/gesamt.tex | 20 | 23 | +3: 21 `gleichungsraster` mit 41 Gleichungen, keine Ausgleichszeile im Aufruf – jede Reihe bekommt die fehlende Zeilenhöhe zurück |
| b3 | blaetter/prozentrechnung/2026-09-22/src/gesamt.tex | 16 | 16 | – |
| b4 | blaetter/prozentrechnung/2026-09-24/src/fokus_a.tex | 4 | 4 | – |

Die zehn Basiswerte stimmen mit der Spalte „Seiten Gesamt" in
`mathe-nachhilfe/bericht-testlauf-2026-09-25.md` überein.

Alle Zuwächse stammen aus Teil 4: Die behobene Tiefe im `gleichungsraster` gibt jeder
Rasterreihe die Zeilenhöhe zurück, die vorher fehlte. Das ist gewollt – vorher lag die
Linie auf dem Folgetext. Die Abhakseite wird nirgends länger, bei t01 kürzer.

## Die Bausteine: gewählte Form, Grund, Vorbild

**`\zweigzeile{...}`** – Vorbild der Form: Eingabe 2, 3 und 5
(`\par\noindent{\small #1}\par\medskip`), das ist die Fassung, die sieben der zehn
Sitzungen in kleinen Abwandlungen gebaut haben. Nicht übernommen habe ich den festen
negativen Abstand, mit dem 7 (`\vspace{-2mm}`), 8 (`-1.5mm`) und 9
(`-0.2\baselineskip`) die Zeile an den Kopf heranziehen: Der richtige Wert ist der
Abstand, den der Kopf selbst gesetzt hat, und der ist bei `\einheitenkopf` und
`\einheitenkopf*` verschieden. Deshalb merkt sich der Kopf seinen Abstand in
`\mbkopfsprung`, und `\zweigzeile` nimmt genau ihn zurück; damit sitzt die Zeile in
beiden Kopfformen gleich. Dazu hängt der Kopf am Folgenden (`\nobreak`), zwischen Kopf
und Zweigzeile bricht die Seite nicht mehr um. Was in die Zeile gehört, sagt `ziel.md`
§ 2 im Repo `mathe-nachhilfe`; die Vorlage legt nur die Form fest.

**`\einheitenkopf[e2]{...}`** – Vorbild: Eingabe 5
(`\einheitenkopf*{\hypertarget{e1}{}Einheit 1 …}`), also das Ziel im Kopf statt in einer
eigenen Zeile davor. Die anderen setzten `\hypertarget{e1}{}` als eigene Zeile vor den
Kopf; das ist im vertikalen Modus eine eigene Zeile und kostet Abstand. Das Ziel steht
jetzt im Kopfsatz selbst, kostet also nichts. Ohne die Option ist der Kopf unverändert,
die Sternform nimmt sie genauso.

**`\verzeichniszeile{...}` mit `\verz{ziel}{text}`** – Vorbild der Klickzeile: Eingabe 2,
3, 9, 10 (`\hyperlink{#1}{#2}`), Vorbild der Trennung: die Aufrufform aus dem Auftrag.
Die Zeile ist eine fortlaufende, umbrechende Zeile; `\verztrenn` setzt einen Trennpunkt
zwischen die Einträge. Gewählt habe ich für den Trenner einen Aufzählungspunkt statt des
Mittelpunkts aus dem Auftragsbeispiel: Die Einträge enthalten selbst schon Mittelpunkte
(„Einheit 1 · Prozentsatz · Seiten 4–6"), und mit demselben Zeichen wäre nicht zu sehen,
wo ein Eintrag endet. Wer lieber eine Zeile je Einheit hat (so machten es alle neun
Lernblatt-Sitzungen), ruft `\verzeichniszeile` mehrfach auf.

`hyperref` lädt die Vorlage jetzt selbst mit `hidelinks`, aber nur, wenn das Blatt es
nicht schon geladen hat. Alle vierzehn Quelltexte laden es mit derselben Option, ein
zweites `\usepackage[hidelinks]{hyperref}` im Blatt bleibt also folgenlos.

**Umgebung `abhakseite` mit `\abhakgruppe` und `\abhak`** – Vorbild der Zeile: Eingabe 9
und 10, die beiden knappsten der neun Handformen (`\small`, `\parskip` 0, hängender
Einzug). Eingabe 4 (minipage/tabular je Einheit) habe ich nicht genommen: Die Tabelle
setzt das Kästchen rechts und bricht lange Titel schlechter um. Zwei Dinge sind neu
gegenüber allen neun: Die Vorlage misst die Breite der Nummer, damit „Z1" (Eingabe 1)
und dreistellige Nummern nicht ins Kästchen laufen, und der hängende Einzug richtet sich
nach dieser Breite, damit die Folgezeile unter dem Titel beginnt. Die Umgebung setzt
selbst `\clearpage`, `\eng`, die Überschrift „Das kann ich" und das Sprungziel `abhaken`.

Gegenprobe: Die Abhakseite von Eingabe 1, 3, 4 und 8 (bisher zwei Seiten) wird nirgends
länger; bei Eingabe 1 wird sie eine Seite. „Das kann ich" steht in jedem der neun
Gesamt-Blätter genau einmal als Seitenüberschrift, im Fokus (Eingabe 7) gar nicht.

**`\abhakauto`** – der Zusatz aus dem Auftrag, aufgenommen, weil er die Bedingung
erfüllt: Alle vierzehn Quelltexte kompilieren damit. Die Vorlage schreibt in jedem
`\begin{aufgabe}` eine Zeile `\abhak{Nummer}{Titel}` in `\jobname.abh` und liest die
Datei beim nächsten Lauf zu Beginn des Dokuments wieder ein (wie ein
Inhaltsverzeichnis, aber vor dem Öffnen der Schreibdatei, weil die Seite am Blattende
steht). Probe: Die vierzehn gesammelten Listen tragen genau so viele Zeilen wie die
Handlisten der Blätter (t01 42, t02 40, t03 52, t04 49, t05 34, t06 34, t08 51, t09 47,
t10 46) und setzen sich fehlerfrei. Die Handform bleibt die erste Wahl, sobald Gruppen
oder eigene Formulierungen dazukommen.

**`\streifenfeld`** – wortgleich aus `blaetter/prozentrechnung/2026-09-24/src/fokus_a.tex`
übernommen; es benutzte schon `\mbstreifenrahmen` der Vorlage, angeglichen wurde nur die
Schreibweise an die übrige Streifen-Familie. Posten aus `faellig.md` § 2, erledigt.

**`\swz`, `\swa`, `\swb`, `\swfrage`** – aus
`blaetter/testlauf-2026-09-25/3-prozent-7-schwach/Prozentrechnung_Gesamt.tex`, Zeile 9–12,
Namen behalten, neuer Abschnitt Q. Nicht übernommen habe ich die Bauweise des Originals:
Dort steckte ein `gleichungsraster` in einer `minipage` von 0,76 Textbreite, die in einer
`\makebox` von 0,34 Textbreite stand – der Kasten log über die Breite, damit das Raster
schmal genug aussah. In der Vorlage setzen alle vier Bausteine dasselbe Paar aus zwei
`minipage` (`\mbswlinks` 0,34 und `\mbswrechts` 0,62), und die Schreibzeilen kommen
direkt aus `\schreibzeilen`. `\swz`, `\swa` und `\swfrage` zählen mit dem `teil`-Zähler
der Vorlage und fluchten wie `teile`/`teilezwei` (`\mbtzkopf`); `\swb` ist das
vorgerechnete Beispiel und zählt nicht mit. Gegenprobe: Eingabe 3 kompiliert ohne eigenen
Vorspann mit 32 Seiten (Auftrag: 32 ± 1).

## Teil 4: die Ursache im gleichungsraster

Die Schreibzeilen stehen im Inneren einer `p`-Spalte, und jede Zeile setzt
`\nointerlineskip` (`\prevdepth` = −1000 pt), damit der 9-mm-Abstand exakt gilt. Beim
Schließen der Spalte hängt LaTeX mit `\@finalstrut` eine Abschlussstrebe an und zieht
vorher eine ganze `\baselineskip` ab, weil es mit der Zeilenschaltung dieser Strebe
rechnet – die bei `\prevdepth` = −1000 pt aber ausfällt, sodass die Spalte rund eine
Zeile oberhalb der letzten Linie endete und die Linie auf der nächsten Rasterreihe oder
auf dem Folgetext lag.

Behoben in `\schreibzeilen`: Es schließt mit einem unsichtbaren Kasten der Tiefe
`\mbschreibtiefe` (1 mm) und setzt `\prevdepth` auf null, damit die Rechnung von
`\@finalstrut` wieder aufgeht. Unter der letzten Linie steht dann 1 mm plus die Tiefe der
Rasterstrebe, zusammen etwa so viel wie zwischen zwei Schreibzeilen. Der Aufruf braucht
keinen Zusatzabstand mehr; Blätter, die einen tragen (`\rule{0pt}{2mm} & \\`,
`\noalign{\vspace{5mm}}`), bekommen dadurch mehr Luft, nie weniger. Probeblatt im
Scratchpad mit drei Reihen ohne Zusatzabstand, eng und weit, als Bild angesehen: keine
Linie berührt den Folgetext.

## Eigene Entscheidungen

1. **Die drei abgelegten Blätter vom 22.09. kompilieren auch mit der heutigen Vorlage
   nicht.** `blaetter/daten`, `blaetter/nullstellen` und `blaetter/prozentrechnung`
   (jeweils 2026-09-22) haben ein eigenes `eigene.sty`, dessen Makros seit Stufe 4 in der
   Vorlage stehen; xelatex bricht mit „Command \einheitenkopf already defined" ab. Das ist
   älter als dieser Auftrag. Für den Basislauf und für die Gegenprobe steht im Scratchpad
   je eine Kopie, in der `\newcommand`/`\NewDocumentCommand` zu
   `\providecommand`/`\ProvideDocumentCommand` und `\newenvironment{dreisatz}` zu
   `\renewenvironment{dreisatz}` geändert ist; damit gewinnt die Vorlage, und die Aufrufe
   laufen auf die Vorlagennamen. Im Repo `mathe-nachhilfe` wurde nichts geändert.
2. **Verzeichniszeile als eine Zeile.** Der Auftrag beschreibt eine Zeile für alle
   Einträge; so ist die Gegenprobe gebaut. Weil die Einträge selbst Mittelpunkte
   enthalten, trennt `\verztrenn` mit einem Aufzählungspunkt. Die Seitenzahl ändert das
   in keinem Blatt, weil das Verzeichnis überall auf einer eigenen Seite steht.
3. **`abhakseite` setzt das Sprungziel `abhaken` selbst.** Der Auftrag nennt nur die
   Überschrift als Argument. Alle neun Handformen benutzen genau diesen Zielnamen, und
   ohne ihn bräuchte jedes Blatt wieder ein eigenes `\hypertarget`.
4. **`\abhakauto` sammelt nur die Aufgabentitel, keine Gruppen.** So steht es im Auftrag.
   Ein Sammeln der Einheitenköpfe hätte auch „Inhalt" und die Überschrift der Abhakseite
   eingesammelt; wer Gruppen will, nimmt die Handform.
5. **`\mbschreibtiefe` = 1 mm.** Gemessen an vier Blättern: 0 mm ergibt bei Eingabe 3
   31 Seiten (der Auftrag will 32 ± 1, die Linien liegen dann aber knapp), 1,5 mm treibt
   t10 auf 21 Seiten, 1 mm hält Eingabe 3 bei 32 und t10 bei 20. Mit der Tiefe der
   Rasterstrebe zusammen steht unter der letzten Linie dann etwa so viel Platz wie
   zwischen zwei Schreibzeilen.
6. **`\ProvidesPackage` nachgezogen.** Die Zeile trug noch `2026-09-06e`; sie nennt jetzt
   dieselbe Version wie Zeile 2. Die Anleitung verweist weiter auf Zeile 2.
7. **`.gitattributes` nur mit der beauftragten Zeile.** `* text=auto eol=lf`; ein
   `*.pdf binary` wie im Repo `mathe-nachhilfe` ist hier unnötig, weil `text=auto`
   Binärdateien selbst erkennt (dort steht `* text eol=lf`, das erzwingt Text). Nach dem
   Anlegen meldet git keine Änderung an bestehenden Dateien (`git add --renormalize .`
   ohne Wirkung).
8. **Gegenprobe im Scratchpad automatisiert.** `umbau.py` baut die vierzehn Kopien aus den
   Quellen und stellt Definitionen und Aufrufe um, `bau.ps1` kompiliert, `pruef-zweig.py`
   und `pruef-abhak.py` messen. Die Skripte liegen im Scratchpad, nicht im Repo; sie sind
   Prüfwerkzeug dieses Laufs, kein Bestandteil der Vorlage.

## Offene Punkte

- **`blatt-pruef.py` zählt `\swz` und `\swa` weiterhin nicht als Teilaufgaben.** Die
  Fassung v0.3 in `mathe-nachhilfe/werkzeuge/` führt in `TEILZAEHLER` nur `swfrage`. In
  der Vorlage zählen jetzt `\swz`, `\swa` und `\swfrage` mit dem `teil`-Zähler, im
  Quelltext sieht das Skript aber nur den Makronamen. Damit Eingabe 3 vollständig gezählt
  wird, müssten `swz` und `swa` in die Liste – das ist eine Änderung im Repo
  `mathe-nachhilfe`, das dieser Auftrag nicht anfasst.
- **b1, b2, b3 bleiben im Repo `mathe-nachhilfe` unkompilierbar** (Entscheidung 1). Der
  Posten gehört dorthin, nicht in die Vorlage.
- **`\abhakauto` ist ungetestet am Tisch.** Er kompiliert in allen vierzehn Quelltexten,
  aber kein Blatt benutzt ihn bisher; der Prompt v4.4 sollte die Handform nennen und
  `\abhakauto` nur als Abkürzung.

## Nachgeführt

`mathblatt.sty` (Zeile 1, Versionszeile 2026-09-27a, `\ProvidesPackage`),
`Anleitung_mathblatt.md` (Kopf, Grundgerüst, je Baustein ein Absatz, Abschnitt „Option
schwach"), `CHANGELOG.md` (Abschnitt Vorlage), `README.md` (Satz zur Stufe 5 und
Berichtszeile), `.gitattributes`. Auftrag und Standdatei liegen unter `archiv/`.

Push origin drücken
