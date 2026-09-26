# Referenzblätter

Hier liegen Blätter, die mit dem Stand v3.35 (Tag `v3.35-vor-katalogumbau`) gebaut wurden,
als Vergleichsmaßstab nach jedem Umbauschritt.

Je Blatt ein PDF und das zugehörige `protokoll.txt`, Dateiname mit Datum.

## Probeblatt der Vorlage (seit Stufe 6)

- `probeblatt.tex`, `probeblatt.pdf` – zeigt jeden dokumentierten Baustein der Anleitung genau
  einmal, in ihrer Reihenfolge, je Baustein mit seinem Namen in einer kleinen grauen Zeile
  darüber. Lesestück für den Lehrer und Kompilierprobe: Jeder Vorlagen-Auftrag ergänzt hier seine
  neuen Bausteine, kompiliert (mathblatt.sty daneben, zweimal xelatex) und committet das PDF mit.
  Zählgrenze 12 Seiten.
- `probeblatt-pruef.py` – Gegenprobe: vergleicht die Bausteine der Anleitung (öffentliche Namen
  aus `mathblatt.sty` in den Code-Blöcken und im Fließtext) mit den Namenszeilen des Probeblatts
  und nennt Fehlende, Überzählige, Doppelte, die Reihenfolge und die →-Zeilen des Kopfteils.
  Aufruf aus dem Ordner `blattbau`: `python referenz/probeblatt-pruef.py` (mit `-v` die Listen).
