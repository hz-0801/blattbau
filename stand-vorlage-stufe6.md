# Stand Auftrag Vorlage Stufe 6

Auftrag: auftrag-vorlage-stufe6.md. Ein Neustart liest diese Datei zuerst.
Beginn: 2026-09-26 05:54 (Get-Date).

| Teil | Stand | letzter fertiger Punkt | Commit |
|---|---|---|---|
| 1 Anweisungszeile | erledigt | Gegenprobe: Probestück in allen vier Umgebungen, c) beginnt links unter der Anweisung; elf Quelltexte gleich der Basis | d33f77b |
| 2 Rechenplatz | erledigt | Gegenprobe: \rechenplatz{4} misst 48,0 mm (600 dpi), bei 100 dpi 189 px vom Blockanfang bis zur letzten Linie, 192 px ab der Zeile davor; elf Quelltexte gleich der Basis | 0c42126 |
| 3 Verfahrensüberschrift | erledigt | Gegenprobe: zwei Verfahren à zwei Hauptnummern, \abhakauto zeigt zwei Gruppenzeilen mit je zwei Zeilen; Überschrift rückt mit ihrer Hauptnummer um; elf Quelltexte gleich der Basis | 4e602cd |
| 4 Kopfzeile mit Einheit | erledigt | Gegenprobe: Eingabe 3 kompiliert (32 Seiten); Kopfzeile „2 Prozentwert berechnen" ab Seite 15 im Gesamt-Blatt (Verzeichnis: Einheit 2 Seiten 15–19), ab Seite 9 im Lernblatt; elf Quelltexte gleich der Basis | fdfa1b9 |
| 5 Beispielblock | erledigt | Gegenprobe: Probestück mit Angabe, Streifen, \rechnung, Antwortzeile – ein Block, Rahmen schließt alles ein; \beispiel als Befehl unverändert; elf Quelltexte gleich der Basis | 8cde209 |
| 6 Streifen | erledigt | Gegenprobe: \streifenleer[0] ohne Teilstriche mit 0 %/100 %, \zahlenstrahl[xmin=7.6,xmax=8,xstep=0.01]{} zeichnet (vorher „Dimension too large"), Endstrich bei xmax auf dem Raster, \streifenwertreihe mit leerem Ganz- und Teilwert zeigt Felder; elf Quelltexte gleich der Basis | 0482e82 |
| 7 Probeblatt | erledigt | Gegenprobe: 154 Bausteine der Anleitung, 154 Randnotizen, keine fehlt, keine doppelt (probeblatt-pruef.py); 23 →-Zeilen im Kopfteil decken 35 Bausteine; 12 Seiten; elf Quelltexte gleich der Basis | a160dea |
| 8 Versionszeile, Anleitung, CHANGELOG | erledigt | mathblatt.sty Zeile 1 „Stufe 6", Versionszeile 2026-09-28a je Baustein, \ProvidesPackage; Anleitung Kopf, Absatz Probeblatt, „Noch nicht in Stufe 6"; CHANGELOG, README; elf Quelltexte und Probeblatt kompilieren | „vorlage: Stufe 6, Anleitung, CHANGELOG" |
| Abschluss | offen | – | – |

## Verlauf

- 2026-09-26 05:54 Auftrag angelegt, Standdatei angelegt. befund-testlauf-2026-09-25.md liegt in mathe-nachhilfe noch nicht vor; es gilt die Liste des Auftrags.
- 2026-09-26 05:58 Kompilierbasis: elf Quelltexte (t01–t10, b4) mit umbau.py/bau.ps1 aus dem Stufe-5-Scratchpad neu hergestellt; Seitenzahlen gleich der Spalte „nach Teil 4" des Berichts Stufe 5 (21, 17, 32, 24, 12, 18, 7, 23, 20, 20, 4).
- 2026-09-26 06:04 Teil 1 fertig.
- 2026-09-26 06:09 Teil 2 fertig.
- 2026-09-26 06:14 Teil 3 fertig.
- 2026-09-26 06:20 Teil 4 fertig. Die „Seite 9" des Auftrags ist die Seitenzahl im Lernblatt (ohne die sechs Zonen-Seiten); im Gesamt-Blatt beginnt Einheit 2 auf Seite 15.
- 2026-09-26 06:23 Teil 5 fertig.
- 2026-09-26 06:29 Teil 6 fertig. Seitenzahlen nach Teil 6: 21, 17, 32, 24, 12, 18, 7, 23, 20, 20, 4 (gleich der Basis).
- 2026-09-26 06:49 Teil 7 fertig. Dabei die Kopfzeile (Teil 4) von der letzten auf die erste Einheit der Seite umgestellt (\FirstMark): im Probeblatt beginnen auf einer Seite drei Einheiten, die Kopfzeile nannte die dritte. Eingabe 3 unverändert (Seite 15/Lernblatt Seite 9).
- 2026-09-26 06:52 Teil 8 fertig.
