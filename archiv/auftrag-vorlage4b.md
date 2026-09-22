# Auftrag vorlage4b – Alias und Gegenprobe mit xelatex

## Ausgangslage

Ordner blattbau. Der Vorlauf (auftrag-vorlage4a, jetzt in
archiv/) hat die Bausteine beider eigene.sty in mathblatt.sty
übernommen, Standzeile 2026-09-22e. Zwei Commits liegen lokal,
noch nicht gepusht. Zwei Befunde aus seinem Bericht sind offen:

1. Geprüft wurde mit pdflatex. Die Blätter entstehen aber mit
   xelatex – so steht es in Anleitung_mathblatt.md, Zeile 4,
   wegen Umlauten, ß, € und der Textextraktion. Die Gegenprobe
   muss deshalb mit xelatex wiederholt werden.
2. Die Entscheidung „\einheitskopf entfällt" war falsch: sie
   bricht sieben Aufrufstellen im abgelegten Blatt
   prozentrechnung. Der Name bleibt als Weiterleitung erhalten.

Die Layoutfehler der Vorlage sind nicht Gegenstand dieses
Auftrags; sie kommen als eigener Auftrag.

Eigenheiten dieses Rechners: pdflatex, xelatex und git stehen
unter Umständen nicht im PATH der Sitzung; MiKTeX liegt in
%LocalAppData%\Programs\MiKTeX\miktex\bin\x64, git hier:
C:\Users\holge\AppData\Local\GitHubDesktop\app-3.6.5\resources\app\git\cmd\git.exe
Python nur über den vollen Pfad
%LocalAppData%\Programs\Python\Python312\python.exe (py -3 gibt
es nicht). Den PATH nur für die eigene Sitzung ergänzen, nicht
am System ändern.

## Schritte

1. Weiterleitung einbauen. \einheitskopf bekommt in
   mathblatt.sty die Signatur, die es in
   blaetter/prozentrechnung/2026-09-22/src/eigene.sty hatte, und
   ruft die Fassung von \einheitenkopf auf, die dasselbe Bild
   ergibt wie vorher (nach dem Bericht von 4a ist das die
   Sternform). Setz einen Kommentar daneben: Altlast für
   abgelegte Blätter, in der Anleitung bewusst nicht
   dokumentiert. Die Anleitung bleibt unverändert – der Prompt
   soll den neuen Namen lernen.
   Setz die Standzeile der Datei auf 2026-09-22f.

2. xelatex prüfen: where.exe xelatex, sonst im MiKTeX-Ordner
   suchen. Fehlt xelatex, brich ab und berichte das.

3. Arbeitsordner %TEMP%\stufe4b anlegen und dort
   git clone --depth 1 https://github.com/hz-0801/mathe-nachhilfe.git
   ausführen.

4. Gegenprobe mit bekannten Werten, beide abgelegten Blätter,
   diesmal mit xelatex. Je Blatt: Quelltextordner kopieren, in
   der Hauptdatei (Daten_Gesamt.tex bzw. gesamt.tex) die Zeile
   \usepackage{eigene} entfernen, die neue mathblatt.sty
   daneben legen, zweimal
   xelatex -interaction=nonstopmode <datei>.tex
   Erwartet: daten 21 Seiten, prozentrechnung 16 Seiten, keine
   Fehlerzeile, insbesondere kein „Undefined control sequence"
   mehr. Weicht etwas ab, ist das ein Befund – nicht ein Grund,
   die Erwartung anzupassen.

5. Sichtprüfung: Rendere mit pdftoppm je Blatt drei Seiten und
   sieh sie dir an – zwei mit Grafiken der neuen Bausteine und
   eine, auf der Umlaute, ß oder € vorkommen. Vergleiche mit
   den abgelegten PDFs im geklonten Repo. Achte darauf, ob €
   und Umlaute richtig erscheinen.

6. Musterdatei: nimm test-stufe4.tex aus dem Vorlauf, falls sie
   noch in %TEMP%\stufe4 liegt, sonst schreib sie neu, und
   kompiliere sie mit xelatex. Sieh dir jede Seite an.

7. Weicht etwas ab: liegt die Ursache an den in 4a
   übernommenen Bausteinen, bessere sie nach und prüfe erneut.
   Liegt sie woanders, ändere nichts und berichte die Stelle.

8. Committe mathblatt.sty mit der Nachricht „Vorlage Stufe 4:
   einheitskopf-Alias, mit xelatex gegengeprüft". Verschiebe
   auftrag-vorlage4b.md nach archiv/ und committe das mit.
   Nicht pushen.

## Prüfungen

- Nach Schritt 4: beide Blätter kompilieren unter xelatex ohne
  Fehlerzeile und mit der erwarteten Seitenzahl.
- Nach Schritt 6: die Musterdatei kompiliert unter xelatex ohne
  Fehlerzeile, und du hast jede Seite als Bild gesehen.
- Nach Schritt 8: git status zeigt nur die erwarteten
  Änderungen.

## Bericht

Erste Zeile: das Modell, mit dem der Auftrag lief.
Dann, knapp:
1. Wie die Weiterleitung aussieht, mit der Zeile im Wortlaut.
2. Gegenprobe: je Blatt Seitenzahl erwartet und erhalten,
   Fehlerzeilen unter xelatex.
3. Was die angesehenen Seiten zeigten, besonders bei Umlauten,
   ß und €, und ob das Bild dem abgelegten PDF entspricht.
4. Unterschiede, die dir zwischen pdflatex und xelatex
   aufgefallen sind – auch solche, die kein Fehler sind.
5. Nachbesserungen, die du gemacht hast, und Stellen, die du
   nur gemeldet hast.
6. Abweichungen und Annahmen.
Letzte Zeile: Push origin drücken.

## Regeln

- Lösche nichts und benenne kein bestehendes Makro um.
- Ändere die Wirkung bestehender Makros nicht; brauchst du dafür
  eine Ausnahme, mach sie und berichte sie einzeln.
- Kompiliere und sieh dir das Ergebnis an, bevor du committest;
  ein Commit ohne gesehenes Kompilat ist nicht zulässig.
- Wartet ein Befehl auf eine Eingabe, brich ab und melde, worauf
  er wartet.
- Berichte, was war, auch wenn es scheiterte.
