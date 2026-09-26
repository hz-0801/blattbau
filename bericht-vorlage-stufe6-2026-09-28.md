Modell: Claude Opus 5.5 (claude-opus-5-5)

# Bericht Vorlage Stufe 6: Bausteine aus den Lesebefunden vom 26.09., Probeblatt der Vorlage

Auftrag: `archiv/auftrag-vorlage-stufe6.md` (Standdatei daneben). Ordner `blattbau`, Commits
d33f77b, 0c42126, 4e602cd, fdfa1b9, 8cde209, 0482e82, a160dea, dbac9c1 und der Commit dieses
Berichts. Kein Push. Im Repo `mathe-nachhilfe` wurde nur gelesen.

Die Vorlage heißt jetzt Stufe 6, Version 2026-09-28a. Der Auftrag nennt dieses Datum; die
Systemuhr zeigte beim Lauf den 26.09.2026 (05:54–06:55). Die Namen bleiben wie beauftragt, die
Uhrzeiten in der Standdatei stammen aus `Get-Date`. Die Befunddatei
`mathe-nachhilfe/befund-testlauf-2026-09-25.md` lag beim Lauf noch nicht vor; es galt die Liste
des Auftrags.

## Seitenzahlen der elf Quelltexte

Basis: Spalte „nach Teil 4" des Berichts Stufe 5. Die Stufe-5-Fassungen sind mit `umbau.py` und
`bau.ps1` aus dem Stufe-5-Scratchpad neu hergestellt (nur die elf, ohne b1–b3); der Neubau mit
der Stufe-5-Vorlage ergab genau die Basiswerte. Je Quelltext zwei xelatex-Läufe, nach jedem Teil
alle elf.

| Kürzel | Quelltext | Basis (Stufe 5) | nach Teil 6 |
|---|---|---|---|
| t01 | testlauf 1-quadgl-9-os/gesamt.tex | 21 | 21 |
| t02 | testlauf 2-quadgl-9-gym/QuadratischeGlg_Gesamt.tex | 17 | 17 |
| t03 | testlauf 3-prozent-7-schwach/Prozentrechnung_Gesamt.tex | 32 | 32 |
| t04 | testlauf 4-linfkt-8-neu/gesamt.tex | 24 | 24 |
| t05 | testlauf 5-kreis-8-ausblick/Kreis_Gesamt.tex | 12 | 12 |
| t06 | testlauf 6-daten-7/Daten_Gesamt.tex | 18 | 18 |
| t07 | testlauf 7-nullstellen-fokus/QuadratischeFkt_Fokus_Nullstellen.tex | 7 | 7 |
| t08 | testlauf 8-potenz-10/gesamt.tex | 23 | 23 |
| t09 | testlauf 9-kurven-12-be/Kurvenuntersuchung_Gesamt.tex | 20 | 20 |
| t10 | testlauf 10-ka-terme-8-gym/TermeBinomischeFormeln_Gesamt.tex | 20 | 20 |
| b4 | blaetter/prozentrechnung/2026-09-24/src/fokus_a.tex | 4 | 4 |

Keine Abweichung, auch nach Teil 1 bis 5, 7 und 8 nicht. Die neuen Bausteine benutzt noch kein
Quelltext; geändert haben sich für sie nur die Kopfzeile (jetzt mit Einheit) und die
Zahlenstrahl-Striche in Eingabe 3.

## Die Bausteine: Aufruf, gewählte Form, Grund

**`\anweisung{Rechne mit dem Taschenrechner. Runde auf eine Stelle.}`** (Teil 1) – Zeile über die
volle Breite der Hauptnummer, linksbündig mit der Nummer, normaler Grad, aufrecht; davor 3 pt
(`\mbanwabstand`), danach nichts; der Buchstabenzähler bleibt unberührt. Die vier Umgebungen
melden sich über `\mbanwmodus` (das ist die einzige Änderung an ihnen): in `teile` ist die Zeile
ein leerer Listenpunkt mit einer Box über die volle Breite, in `teilezwei`/`gleichungsraster` eine
`\multicolumn` über zwei, in `geruest` über drei Spalten. „Die Zeile beendet die laufende Reihe"
habe ich wörtlich genommen: `\anweisung` darf direkt hinter der letzten Teilaufgabe der Reihe
stehen, mit oder ohne `\\` davor – die Vorlage erkennt am Gruppentyp (`\currentgrouptype`), ob sie
am Reihenanfang steht oder die Reihe erst schließen muss. Grund für aufrecht statt kursiv: Die
Anweisung ist Aufgabentext wie der Titel, kein Kommentar. Gegenprobe: Probestück mit vier
Teilaufgaben und Anweisung nach b) in allen vier Umgebungen, dazu nach a) und im weit-Modus;
im Bild beginnt c) jeweils links unter der Anweisung.

**`\rechenplatz{4}`, `\rechenplatz[halb]{4}`** (Teil 2) – ein einziger Kasten (`\vbox`), Zeilen
im Abstand von genau 12 mm (die Linienstärke ist abgezogen), Linien in `black!40` wie
`\schreibzeilen`, das bei 9 mm bleibt. Davor 1 pt plus Zeilenabstand, kein Absatzabstand. `[halb]`
ist 0,46 Textbreite statt der Hälfte: in `teilezwei` stoßen die Spalten ohne Zwischenraum
aneinander, mit 0,48 liefen die Linien der beiden Zellen zu einer Linie zusammen; 0,46 ist auch
die Spaltenbreite des `gleichungsraster`. Gegenprobe: bei 600 dpi gemessen 48,0 mm vom
Blockanfang bis zur vierten Linie; bei 100 dpi 189 px, ab der Zeile davor 192 px (Soll 189 ± 4).

**`\verfahren{Nullstellen aus der Scheitelpunktform}`** (Teil 3) – den Namen gab es schon als
fette Zwischenzeile der Hilfe-Seite; der Auftrag legt ihn fest, also ist das bestehende Makro
umgebaut und gilt für beide Stellen. Halbfett ist der echte Demi-Schnitt von Latin Modern
(`Latin Modern Roman Demi`, unter xelatex vorhanden; sonst fett), der Grad die Mitte zwischen
Text und `\large` des Kopfs, davor 10 pt. „Kein Umbruch danach" ist wirklich gesichert: Folgt
(auch nach Leerzeilen) ein `\begin{aufgabe}`, setzt die Vorlage die Zeile oben in den Kasten
dieser Hauptnummer, und beide rücken nur zusammen um; dazu nimmt die Umgebung `aufgabe` dann den
Abstand der Überschrift statt 5 pt. Ein bloßes `\nobreak` hätte nicht gereicht, weil das
`\Needspace` der Hauptnummer davor eine Umbruchstelle setzt. Sonst (Hilfe-Seite vor `schritte`)
steht die Zeile sofort mit `\nobreak`. `\abhakauto` schreibt jedes `\verfahren` als `\abhakgruppe`
in `\jobname.abh`; eine Gruppe ohne folgende Hauptnummer (Hilfe-Seite am Blattende) fällt beim
Einlesen weg. Gegenprobe: zwei Verfahren à zwei Hauptnummern, die Abhakseite zeigt zwei
Gruppenzeilen mit je zwei Zeilen darunter; eine dritte Überschrift am Seitenende rückt mit ihrer
Hauptnummer auf die nächste Seite.

**Kopfzeile mit Einheit, `\einheitenkopf[e2][2 Prozentwert]{…}`** (Teil 4) – Die Optionsfolge
von Stufe 5 (`[Ziel]`) steht nicht dagegen: Das zweite optionale Argument ist die Kurzform, genau
in der Form des Auftrags; ohne Ziel bleibt das erste leer (`\einheitenkopf*[][Zone]{…}`). Ohne
Kurzform bildet die Vorlage sie selbst (l3regex): „Einheit n [von m] · Titel" wird „n Titel", auch
mitten im Kopf („Ausblick Einheit 4 von 4 · …" → „Ausblick 4 …"); Köpfe ohne „Einheit n" stehen
wörtlich, also trägt die Zone „Kennst du schon" (bzw. den Kopf, den das Blatt ihr gibt), die
Abhakseite „Das kann ich", die Verzeichnisseite „Inhalt". Technik: eigene Markenklasse
`mbeinheit` (`\NewMarkClass`, LaTeX ab 2022-06; ältere Kerne fallen auf `\markboth` zurück); die
Marke trägt nur die laufende Nummer, die Kurzform liegt in einem Makro. Mit `\markboth`/`\leftmark`
brach der erste Versuch ab: Im aktuellen Kern (2025-11) liefert `\leftmark` die Marke über
`\mark_use_last:nn`, und `\ifnum` stieß auf ein `\protect` statt auf die Zahl. Die Kopfzeile zeigt die erste
Einheit, die auf der Seite beginnt – zuerst hatte ich die letzte genommen; das Probeblatt mit
drei Köpfen auf einer Seite zeigte, dass dann eine Seite, die mit Einheit 3 beginnt, „5 …" im Kopf
trägt (in Teil 7 umgestellt, Eingabe 3 unverändert). `\begleitteil` und `\hilfeseite` setzen die
Kopfzeile auf „Thema · Bezeichnung" zurück (sonst trügen die Ergebnisse „Das kann ich").
`\blattfuss` bleibt ohne Einheit. Gegenprobe: Eingabe 3 kompiliert (32 Seiten); im Gesamt-Blatt
beginnt Einheit 2 auf **Seite 15** (Verzeichnis: „Seiten 15–19"), dort und bis Seite 19 zeigt
pdftotext „Prozentrechnung · Gesamt · 2 Prozentwert berechnen". Die „Seite 9" des Auftrags ist die
Seitenzahl im Lernblatt ohne die sechs Zonen-Seiten: Im mitkompilierten
`Prozentrechnung_Lernblatt.tex` zeigt Seite 9 dieselbe Kopfzeile.

**Umgebung `beispiel`** (Teil 5) – `\begin{beispiel} … \end{beispiel}`: tcolorbox, um 1 em
eingerückt (`enlarge left by`), weißer Grund, hellgrauer Rahmen (`black!30`, 0,5 pt) rundum,
erste Zeile „Beispiel:", unzerbrechlich. Voller Rahmen statt linker Linie, weil die Gegenprobe
verlangt, dass der Rahmen alles einschließt. Umgebung und Befehl heißen gleich; `\beispiel`
erkennt am `\@currenvir`, ob es von `\begin{beispiel}` aufgerufen wird, und setzt sonst wie
bisher die Rechnung – auch innerhalb des Blocks. Teilaufgaben im Block verbrauchen keinen
Buchstaben (der Zähler wird nach dem Block zurückgesetzt), damit das Beispiel „a)" zeigen darf
und die Übung trotzdem bei a) beginnt. Gegenprobe: Probestück mit Angabe, `\streifen`,
`\rechnung`, Antwortzeile – ein Block, der Rahmen schließt alles ein.

**`\streifenleer[0]`** (Teil 6.1) – `\streifenleer` nimmt die Zahl der Teile (Voreinstellung 10,
kurze Eckstriche wie bisher); `[0]` zeichnet keine Teilstriche und beschriftet nur 0 % und 100 %,
bei anderen Zahlen bleibt die Marke 50 %. `\streifen` hatte das optionale Argument schon seit
Stufe 4, und `\streifen[0]` zeichnete schon ohne Teilstriche – dort ist nur die Dokumentation
nachgetragen.

**Reparaturen der Streifen-Familie** (Teil 6.2) –
- `\zahlenstrahl[xmin=7.6,xmax=8,xstep=0.01]{}` brach mit „Dimension too large" ab (7,6 Einheiten
  à 80 cm liegen über TeX' Längengrenze von 575 cm); in der Blattsitzung mit nonstopmode fehlte
  der Strahl einfach. `zahlengerade` zeichnet jetzt relativ zu `xmin`, und ist der Strahl breiter
  als die Zeile, setzt die Vorlage `karo` herab (hier 0,8 → 0,4 cm). Folge: Eigenes TikZ in
  `zahlengerade` rechnet relativ zu `xmin` (`({7.7-\zsxmin},0)`), in der Anleitung vermerkt; kein
  Quelltext nutzt das.
- Letzter Teilstrich fehlte, wenn `xmax` auf dem Raster lag: `\foreach` in Dezimalschritten
  verfehlte den Endwert durch Rundung. Die Striche laufen jetzt über ganze Schrittzahlen
  (`xmax=1` bei `xstep=0.1` zeigt den Strich bei 1, `xmax=1.35` bei 0,05 den bei 1,35).
- `\streifenwertreihe` zeigte bei leerem Ganzwert nichts; bei leerem Teilwert ebenso. Beide
  setzen jetzt eine Schreiblinie von 1,2 cm an die Stelle des Werts, wie es die Anleitung schon
  versprach.
- `\setcounter{aufgabe}{n}` ergibt Nr. n+1: gewollt, jetzt in der Anleitung beim Absatz zu
  `aufgabe` erklärt.

Gegenprobe Teil 6: Probestück mit `\streifenleer[0]`, dem Zahlenstrahl 7,6…8 in 0,01-Schritten
und `\streifenwertreihe` mit leerem Ganz- und Teilwert, dazu die Regressionsfälle aus Eingabe 3
(0…1, 0,8…1,35, 19…20,25) und Intervalle; alle Bilder angesehen.

## Teil 7: Probeblatt

`referenz/probeblatt.tex` und `referenz/probeblatt.pdf`, **12 Seiten** (Zählgrenze 12 genau
erreicht). Je Baustein eine kleine graue Namenszeile darüber (Umgebungen als `\begin{name}`), die
Inhalte aus den Beispielen der Anleitung, Grafiken verkleinert und nebeneinander. Die Abschnitte
der Anleitung stehen als Einheiten 1–14 mit `\einheitenkopf`, sodass das Blatt nebenbei die
Kopfzeile mit Einheit und die Verzeichniszeile vorführt. Seite 1 trägt die Fußzeile von
`\blattfuss`, ab Seite 2 gilt `\blattkopf*`. Die vier Seitenbausteine (`abhakseite`, `\abhakauto`,
`\begleitteil`, `\hilfeseite`) stehen am Ende, ihre Namenszeile am Fuß der Seite davor mit
„(nächste Seite)".

Bausteinliste (154, Reihenfolge der Anleitung; `=` Umgebung):
Grundgerüst: blattfuss blattkopf einheitenkopf verz zweigzeile verfahren verzeichniszeile
verztrenn =abhakseite abhakgruppe abhak abhakauto weit uebersichtskasten =aufgabe =teile teil
steil =teilezwei tz leerfeld feld stz =geruest gz gzs =gleichungsraster gl sgl anweisung
rechenplatz beispiel rechnung =beispiel streifen feldl punktfeld janein kreuz mnliste
nullstellenliste punktprobenliste begleitteil erg hilfeseite =schritte schritt achtung ·
Wertetabelle: wertetabelle wertetabelleleer · ksys: =ksys gerade punkt steigungsdreieck parabel
funktion funktionab ksysabstand · ksys3: =ksys3 rpunkt rvektor rvektorab rgerade rebene rebenepar
rquader rpyramide · Körper: dreieckrw dreieck quader zylinder prismadreieck pyramide kegel kugel ·
Kreis: =kreis mittelpunkt kreispunkt radius durchmesser sehne tangente sektor bogen
geradenkreuzung parallelenpaar winkel winkelstrahl mittelpunktswinkel umfangswinkel · Vierecke:
viereck parallelogramm rechteck trapez raute drachen netzquader netzwuerfel netzpyramide
netzzylinder strahlensatz · Stochastik: baumzwei saeulen saeulenab balkenab liniendia
baumdreigleich baumdrei kreisdiagramm kreisdiagrammleer kreisleer sachtabelle leerzelle
strichliste kreissektor vierfeldertafel binomialverteilung normalverteilung · Boxplot:
=boxplots bp histogramm · Analysis: ableitungspaar flaeche flaechezwischen tangentean hochpunkt
tiefpunkt wendepunkt asymptote · Zahlen: zahlenstrahl =zahlengerade intervall intervallo
bruchkreis bruchrechteck termbaum tb · Trigonometrie: einheitskreis sinus kosinus · Prozent:
streifenleer streifenvoll streifenfrage streifenfeld streifenreihe streifenwertreihe =dreisatz
dsz dsp dsleer · schwach: swz swa swb swfrage.

Was als Baustein zählt, legt das neue Prüfskript `referenz/probeblatt-pruef.py` fest: jeder
öffentliche Name aus `mathblatt.sty` (Befehl oder Umgebung, nicht `mb…`), der in einem Code-Block
der Anleitung steht (151, ohne `\x`, die Variable in `\funktion`) oder nur im Fließtext in `…`
genannt ist (`\ksysabstand`, `\mittelpunktswinkel`, `\umfangswinkel`). `beispiel` zählt zweimal:
als Befehl und als Umgebung. `\einheitskopf` (Altlast, bewusst undokumentiert), `\eng`,
`\sternlegende`, `\schreibzeilen` stehen in keinem Code-Block und fehlen deshalb.

**Gegenprobe Teil 7 – Abweichung:** Die Zeilen mit „→" im Kopfteil der Anleitung (der erste
Code-Block, Grundgerüst) sind **23**; die Randnotizen im Probeblatt sind **154**. Die 23 Zeilen
nennen 35 Bausteine; die übrigen 119 stehen in den späteren Abschnitten der Anleitung in
Code-Blöcken ohne „→", eine Zeile je Aufruf. Deshalb vergleicht das Prüfskript die Bausteine der
ganzen Anleitung mit den Randnotizen: **154 = 154**, keiner fehlt, keiner ist überzählig, keiner
doppelt. Liste der 119 ohne →-Zeile: uebersichtskasten =geruest gz gzs mnliste nullstellenliste
punktprobenliste begleitteil erg hilfeseite =schritte schritt achtung, dazu alle Bausteine ab
„Wertetabelle" in der Liste oben. Reihenfolge: Wo Grafiken nebeneinander stehen, weicht sie um
wenige Plätze ab; das Skript nennt: verz verfahren weit geradenkreuzung parallelenpaar winkel
winkelstrahl kreisdiagrammleer sachtabelle leerzelle strichliste und die vier Seitenbausteine
mit ihren Unterbausteinen (abhakseite abhakgruppe abhak abhakauto begleitteil erg hilfeseite
schritte schritt achtung).

## Eigene Entscheidungen

1. **Auftragsdatei in der Wurzel von `blattbau`** angelegt (UTF-8 ohne BOM, LF, geprüft); dort
   verlangt der Abschluss sie für das Verschieben nach `archiv/`.
2. **`\verfahren` umgebaut statt neu benannt.** Der Auftrag legt den Namen fest; das alte Makro
   der Hilfe-Seite sieht jetzt genauso aus wie die neue Überschrift (größer, halbfett).
3. **Eingriffe in bestehende Makros, die der Auftrag mittelbar verlangt:** die vier Umgebungen
   von Teil 1 (je eine Zuweisung), `aufgabe` (Verfahrensüberschrift im Kasten, deren Abstand),
   `\blattkopf` (Einheit in der Kopfzeile), `\begleitteil`/`\hilfeseite` (Kopfzeile ohne
   Einheit), `\mbabhaksammle`/`\mbabhaklesen` (Gruppen), `zahlengerade`/`\zahlenstrahl`/
   `\mbintervall` (Reparatur), `\streifenleer` (optionales Argument). Kein anderes Makro geändert.
4. **Kopfzeile zeigt die erste Einheit der Seite**, nicht die letzte (siehe Teil 4).
5. **`\rechenplatz[halb]` = 0,46 Textbreite**, Teilung genau 12 mm (siehe Teil 2).
6. **Beispielblock mit vollem Rahmen, Zähler nach dem Block zurückgesetzt** (siehe Teil 5).
7. **Probeblatt: Namenszeile statt `\marginpar`.** Der Rand ist 18 mm breit; Namen wie
   `\kreisdiagrammleer` passen dort auch in `\tiny` nicht. Der Auftrag lässt „eine Zeile darüber"
   zu. Die Namenszeile ist Hilfsmakro des Probeblatts (`\pbz`, `\pbzn`, `\pbfig` im Vorspann),
   nicht der Vorlage.
8. **Prüfskript ins Repo** (`referenz/probeblatt-pruef.py`, `referenz/README.md` nachgetragen): Da
   jeder künftige Vorlagen-Auftrag das Probeblatt wachsen lassen muss, braucht er dieselbe
   Gegenprobe; im Scratchpad wäre sie verloren.
9. **Probeblatt-PDF aus Teil 7.** Teil 8 hat an der Vorlage nur Kommentarzeilen und
   `\ProvidesPackage` geändert; das Probeblatt kompiliert damit weiter mit 12 Seiten, das PDF ist
   nicht neu erzeugt.
10. **Kompilierbasis ohne b1–b3** wie beauftragt; die Hilfsskripte (`umbau.py`, `bau.ps1`,
    `basis11.ps1`, `probe.ps1`, Messskripte) liegen im Scratchpad, nicht im Repo.

## Offene Punkte

- **`\einheitenkopf` kann am Seitenende allein stehen.** Passt die erste Hauptnummer nicht mehr
  unter den Kopf, bricht das `\Needspace` der Hauptnummer nach dem Kopf um (im Probeblatt in
  einer Zwischenfassung gesehen, Seite 8). Für `\verfahren` ist das gelöst, für den
  Einheitenkopf nicht – er war nicht beauftragt. Dieselbe Vorausschau wie bei `\verfahren` würde
  es beheben; Vorschlag für Stufe 7.
- **Probeblatt an der Zählgrenze** (12 von 12 Seiten). Die nächste Stufe muss beim Hinzufügen
  kürzen (Beispiele kleiner, mehr nebeneinander) oder die Grenze anheben.
- **Prompt v4.4 und `blatt-pruef.py`** (Repo `mathe-nachhilfe`) kennen die neuen Namen noch nicht:
  der Prompt soll `\anweisung`, `\rechenplatz`, `\verfahren`, die Kurzform am `\einheitenkopf`,
  `beispiel` und `\streifenleer[0]` nennen; das Prüfskript sollte `\anweisung` nicht als
  Teilaufgabe zählen und `\verfahren` als Zwischenzeile kennen. Nach dem Push wirkt die Vorlage
  erst, wenn der Lehrer die Live-Fassung des Prompts nachzieht.
- **Achsen im `ksys`** zählen ihre Striche noch mit `\foreach` in Dezimalschritten wie bis heute
  der Zahlenstrahl; ob dort bei krummen `xstep` der letzte Strich fehlt, ist nicht geprüft (nicht
  beauftragt).
- **b1–b3** bleiben im Repo `mathe-nachhilfe` unkompilierbar (Stufe-5-Befund, unverändert).

## Nachgeführt

`mathblatt.sty` (Zeile 1 „Stufe 6", Versionszeile 2026-09-28a mit einer Zeile je Baustein,
`\ProvidesPackage`), `Anleitung_mathblatt.md` (Kopf, Grundgerüst-Zeilen, je Baustein ein Absatz,
Absatz „Probeblatt der Vorlage", „Noch nicht in Stufe 6"), `CHANGELOG.md` (Abschnitt Vorlage),
`README.md` (Satz zu Stufe 6, Probeblatt, Berichtszeile), `referenz/README.md`. Auftrag und
Standdatei liegen unter `archiv/`.

Push origin drücken
