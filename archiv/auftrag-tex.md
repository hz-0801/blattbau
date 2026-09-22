# Auftrag tex – TeX und Renderer auf diesem Rechner prüfen

## Ausgangslage

Ordner blattbau. In der Wurzel liegt mathblatt.sty, die Vorlage
für alle Blätter. Für den nächsten Auftrag (Vorlage Stufe 4)
muss Claude Code die Vorlage selbst kompilieren und das
Ergebnis ansehen können. Ob das geht, ist offen.

Geprüft wird an einem abgelegten Blatt-Quelltext aus dem Repo
mathe-nachhilfe (Lernblatt Daten, 22.09.2026). Die Quelltexte
werden per curl geholt, nicht aus einem lokalen Ordner.
Kompiliert wird außerhalb des Repos; im Repo entsteht keine
einzige neue Datei außer dieser Auftragsdatei.

## Schritte

1. Werkzeuge suchen. Führe aus und notiere je Befehl Treffer
   oder Fehlanzeige:
   where.exe pdflatex
   where.exe latexmk
   where.exe xelatex
   where.exe tex
   where.exe pdftoppm
   where.exe mutool
   where.exe magick
   Bei einem Treffer für pdflatex zusätzlich: pdflatex --version
   (erste Zeile).

2. Findet Schritt 1 kein pdflatex, sieh an diesen Orten nach,
   ob eine Installation liegt (nur nachsehen, nichts starten):
   %LocalAppData%\Programs\MiKTeX\miktex\bin\x64
   %ProgramFiles%\MiKTeX\miktex\bin\x64
   C:\texlive
   Findet auch das nichts: überspringe die Schritte 3 bis 6 und
   geh zu Schritt 7.

3. Python-Renderer prüfen. Führe aus:
   "%LocalAppData%\Programs\Python\Python312\python.exe" -c
   "import fitz; print('pymupdf', fitz.__doc__)"
   Fehler ist ein zulässiges Ergebnis; notiere ihn kurz.

4. Arbeitsordner anlegen: im Temp-Ordner des Nutzers (%TEMP%
   bzw. $env:TEMP) den Unterordner mathblatt-test. Gibt es ihn
   schon, benutze ihn weiter. Kopiere mathblatt.sty aus der
   Repo-Wurzel hinein. Hole dort diese neun Dateien mit
   curl.exe -L -o <name> <url>:
   https://raw.githubusercontent.com/hz-0801/mathe-nachhilfe/main/blaetter/daten/2026-09-22/src/Daten_Blatt0.tex
   https://raw.githubusercontent.com/hz-0801/mathe-nachhilfe/main/blaetter/daten/2026-09-22/src/blatt0_a.tex
   https://raw.githubusercontent.com/hz-0801/mathe-nachhilfe/main/blaetter/daten/2026-09-22/src/Daten_Gesamt.tex
   https://raw.githubusercontent.com/hz-0801/mathe-nachhilfe/main/blaetter/daten/2026-09-22/src/eigene.sty
   https://raw.githubusercontent.com/hz-0801/mathe-nachhilfe/main/blaetter/daten/2026-09-22/src/e1_a.tex
   https://raw.githubusercontent.com/hz-0801/mathe-nachhilfe/main/blaetter/daten/2026-09-22/src/e2_a.tex
   https://raw.githubusercontent.com/hz-0801/mathe-nachhilfe/main/blaetter/daten/2026-09-22/src/e3_a.tex
   https://raw.githubusercontent.com/hz-0801/mathe-nachhilfe/main/blaetter/daten/2026-09-22/src/e4_a.tex
   https://raw.githubusercontent.com/hz-0801/mathe-nachhilfe/main/blaetter/daten/2026-09-22/src/e5_a.tex

5. Kleiner Lauf: im Arbeitsordner
   pdflatex -interaction=nonstopmode Daten_Blatt0.tex
   Notiere Exitcode und ob Daten_Blatt0.pdf entstanden ist.

6. Großer Lauf: zweimal nacheinander
   pdflatex -interaction=nonstopmode Daten_Gesamt.tex
   Notiere Exitcode, ob Daten_Gesamt.pdf entstanden ist, und aus
   Daten_Gesamt.log die Zeile „Output written on" mit der
   Seitenzahl. Sammle aus beiden .log-Dateien:
   - jede Zeile mit „! " (Fehler), höchstens die ersten fünf
   - jede Meldung über eine fehlende Datei oder ein fehlendes
     Paket (File ... not found)
   - die Anzahl der Zeilen mit „Overfull \hbox"

7. Verschiebe auftrag-tex.md nach archiv/ und committe mit der
   Nachricht „Auftrag tex archiviert".

## Prüfungen

- Nach Schritt 4: die zehn Dateien liegen im Arbeitsordner und
  keine ist kleiner als 100 Byte (ein Fehler-HTML von GitHub
  wäre klein). Stimmt das nicht, brich ab und berichte.
- Nach Schritt 7: git status im Repo zeigt keine Änderung außer
  der verschobenen Auftragsdatei.

## Bericht

Erste Zeile: das Modell, mit dem der Auftrag lief.
Dann, knapp:
1. Welche der sieben Werkzeuge erreichbar sind, mit Pfad; bei
   pdflatex die Versionszeile. Ist keines da, sag das in einem
   Satz und überspring die Punkte 2 bis 4.
2. Ergebnis von Schritt 3 (pymupdf vorhanden oder nicht).
3. Kleiner Lauf und großer Lauf: Exitcode, PDF entstanden,
   Seitenzahl des großen Laufs.
4. Fehlerzeilen, fehlende Pakete, Zahl der Overfull-Meldungen.
5. Abweichungen und Annahmen.
Letzte Zeile: Push origin drücken.

## Regeln

- Lösche nichts.
- Ändere keine Datei im Repo; die einzige erlaubte Änderung ist
  das Verschieben dieser Auftragsdatei nach archiv/.
- Installiere nichts nach. Will MiKTeX ein Paket nachinstallieren
  und wartet auf eine Eingabe, brich den Lauf ab und melde,
  welches Paket fehlt.
- Läuft ein Befehl länger als drei Minuten, brich ihn ab und
  melde es.
- Berichte, was war, auch wenn nichts funktioniert hat; ein
  negatives Ergebnis ist hier ein brauchbares Ergebnis.
