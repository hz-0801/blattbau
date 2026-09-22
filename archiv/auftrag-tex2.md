# Auftrag tex2 – Kompilat nach der MiKTeX-Installation

## Ausgangslage

Ordner blattbau. In der Wurzel liegt mathblatt.sty, die Vorlage
für alle Blätter. Der Vorlauf (auftrag-tex, jetzt in archiv/)
fand keine TeX-Installation. Inzwischen ist MiKTeX 25.12 per
winget installiert und [MPM]AutoInstall=1 gesetzt; MiKTeX lädt
fehlende Pakete also selbst nach.

Geprüft wird an einem abgelegten Blatt-Quelltext aus dem Repo
mathe-nachhilfe (Lernblatt Daten, 22.09.2026), der per curl
geholt wird. Kompiliert wird außerhalb des Repos; im Repo
entsteht keine Datei außer dieser Auftragsdatei.

Die Shell dieser Sitzung kennt git unter Umständen nicht im
PATH. Dann nimm die git.exe von GitHub Desktop:
C:\Users\holge\AppData\Local\GitHubDesktop\app-3.6.5\resources\app\git\cmd\git.exe

## Schritte

1. Werkzeuge prüfen und notieren:
   where.exe pdflatex
   where.exe pdftoppm
   where.exe mutool
   where.exe magick
   pdflatex --version (erste Zeile)
   Fehlt pdflatex weiterhin, brich nach Schritt 6 sinngemäß ab
   und berichte das.

2. Python-Renderer prüfen:
   "%LocalAppData%\Programs\Python\Python312\python.exe" -c
   "import fitz; print('pymupdf ok')"
   Ein Fehler ist ein zulässiges Ergebnis; notiere ihn kurz.

3. Arbeitsordner: im Temp-Ordner des Nutzers (%TEMP% bzw.
   $env:TEMP) den Unterordner mathblatt-test anlegen oder
   weiterbenutzen. Kopiere mathblatt.sty aus der Repo-Wurzel
   hinein. Hole dort diese neun Dateien mit
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
   Prüfung: zehn Dateien liegen da, keine kleiner als 100 Byte.

4. Kleiner Lauf im Arbeitsordner:
   pdflatex -interaction=nonstopmode Daten_Blatt0.tex
   Der erste Lauf kann lange dauern, weil MiKTeX Pakete
   nachlädt; gib ihm bis zu fünfzehn Minuten. Notiere
   Exitcode, ob Daten_Blatt0.pdf entstand, und wie lange es
   dauerte.

5. Großer Lauf, zweimal nacheinander:
   pdflatex -interaction=nonstopmode Daten_Gesamt.tex
   Notiere Exitcode, ob Daten_Gesamt.pdf entstand, und aus
   Daten_Gesamt.log die Zeile „Output written on" mit der
   Seitenzahl.

6. Aus beiden .log-Dateien sammeln:
   - die ersten fünf Zeilen mit „! " (Fehler)
   - jede Meldung „File ... not found" oder fehlendes Paket
   - die Anzahl der Zeilen mit „Overfull \hbox"

7. Sichtprüfung testen: Wandle Seite 1 von Daten_Gesamt.pdf in
   ein PNG um, mit dem Werkzeug, das nach Schritt 1 und 2 da
   ist (pdftoppm, mutool, magick oder pymupdf). Öffne das PNG
   mit deinem Lesewerkzeug und beschreibe in zwei Sätzen, was
   auf der Seite zu sehen ist. Geht keines davon, sag das.

8. Verschiebe auftrag-tex2.md nach archiv/ und committe mit der
   Nachricht „Auftrag tex2 archiviert".

## Prüfungen

- Nach Schritt 5: Daten_Gesamt.pdf existiert und ist größer als
  50 KB.
- Nach Schritt 8: git status zeigt keine Änderung außer der
  verschobenen Auftragsdatei.

## Bericht

Erste Zeile: das Modell, mit dem der Auftrag lief.
Dann, knapp:
1. pdflatex-Version und welche Renderer erreichbar sind.
2. Kleiner Lauf: Exitcode, PDF, Dauer.
3. Großer Lauf: Exitcode, PDF, Seitenzahl.
4. Fehlerzeilen, fehlende Pakete, Zahl der Overfull-Meldungen.
5. Schritt 7: welches Werkzeug, und die zwei Sätze zur Seite.
6. Abweichungen und Annahmen.
Letzte Zeile: Push origin drücken.

## Regeln

- Lösche nichts.
- Ändere keine Datei im Repo; erlaubt ist nur das Verschieben
  dieser Auftragsdatei nach archiv/.
- Wartet ein Befehl auf eine Eingabe, brich ab und melde, worauf
  er wartet.
- Berichte, was war, auch wenn es scheiterte.
