# Auftrag vorlage4a – Bausteine in die Vorlage holen

## Ausgangslage

Ordner blattbau. mathblatt.sty (Stand 2026-09-07d) ist die
LaTeX-Vorlage für alle Blätter; der Blatt-Prompt holt sie bei
jedem Lauf frisch aus dem Repo. Ein Fehler darin trifft sofort
jedes neue Blatt – deshalb wird vor dem Commit kompiliert und
angesehen.

In zwei Läufen hat sich der Prompt Bausteine selbst gebaut, weil
die Vorlage sie nicht hat; sie liegen als eigene.sty bei den
abgelegten Blättern im Repo mathe-nachhilfe:
- blaetter/daten/2026-09-22/src/eigene.sty (136 Zeilen):
  saeulenab, balkenab, liniendia, streifenleer, streifenvoll,
  kreisleer, einheitenkopf, strichliste, mbstreifenrahmen
- blaetter/prozentrechnung/2026-09-22/src/eigene.sty (118
  Zeilen): einheitskopf, streifen, streifenfrage, streifenreihe,
  streifenwertreihe, dsleer, dsz, dsp, Umgebung dreisatz

Diese Bausteine sollen in mathblatt.sty aufgehen, damit kein
Blatt sich mehr eine eigene.sty schreiben muss. Die Layoutfehler
der Vorlage sind nicht Gegenstand dieses Auftrags.

MiKTeX 25.12 ist installiert. Zwei Eigenheiten dieses Rechners:
pdflatex und git stehen unter Umständen nicht im PATH der
Sitzung; MiKTeX liegt in %LocalAppData%\Programs\MiKTeX\miktex\
bin\x64, git hier:
C:\Users\holge\AppData\Local\GitHubDesktop\app-3.6.5\resources\app\git\cmd\git.exe
Den PATH nur für die eigene Sitzung ergänzen, nicht am System
ändern.

## Schritte

1. Lies mathblatt.sty ganz und Anleitung_mathblatt.md ganz.
   Halte fest, wie die Datei gegliedert ist, wie Makros benannt
   sind (öffentlich kurz, intern mit Präfix mb) und wie die
   Anleitung je Baustein eine Zeile schreibt. Die neuen
   Bausteine fügen sich in diese Ordnung ein, nicht umgekehrt.

2. Arbeitsordner %TEMP%\stufe4 anlegen und dort
   git clone --depth 1 https://github.com/hz-0801/mathe-nachhilfe.git
   ausführen. Daraus kommen die beiden eigene.sty und die
   Quelltexte der beiden abgelegten Blätter.

3. Bausteine zusammenführen. Für jeden Baustein aus beiden
   Dateien: in mathblatt.sty übernehmen, in den Abschnitt, der
   thematisch passt. Regeln:
   - Ein Name je Baustein. Gibt es zwei Fassungen desselben
     Bausteins, nimm die reichere und mach die ärmere durch
     Vorgabewerte zu ihrem Sonderfall.
   - Entschieden: \einheitenkopf gilt, \einheitskopf entfällt.
     Die Streifen-Bausteine beider Blätter werden eine Familie
     mit gemeinsamem Rahmenmaß; die Namen wählst du so, dass
     ihr Zusammenhang sichtbar ist, und berichtest sie.
   - Interne Hilfsmakros bekommen das Präfix mb.
   - Kollidiert ein Name mit einem bestehenden Makro der
     Vorlage, benenne den neuen um, nie den bestehenden.
   - \strichliste kommt unverändert mit; die fehlenden
     Fünferbündel sind Sache des nächsten Auftrags.
   - Alle Pakete, die die Bausteine brauchen, lädt die Vorlage
     selbst; prüfe, ob sie schon geladen sind, bevor du eine
     Zeile ergänzt.
   Setze die Standzeile der Datei auf 2026-09-22e.

4. Anleitung_mathblatt.md nachziehen: je neuem Baustein eine
   Zeile im Stil der Datei, mit Aufruf, Wirkung und der Regel,
   wann er genommen wird. Der Blatt-Prompt liest nur diese
   Anleitung, nicht die .sty – was hier fehlt, existiert für
   ihn nicht.

5. Musterdatei: schreib in %TEMP%\stufe4 eine test-stufe4.tex,
   die jeden neuen Baustein mindestens einmal aufruft, mit
   realistischen Werten (Säulen mit langen Kategorienamen,
   Balken, Linien, Streifen leer und gefüllt, leerer Kreis,
   Einheitenkopf, Strichliste, Dreisatz). Kompiliere mit
   pdflatex -interaction=nonstopmode, rendere jede Seite mit
   pdftoppm als PNG und sieh sie dir an. Bessere nach, bis das
   Kompilat fehlerfrei ist und jeder Baustein erkennbar richtig
   aussieht.

6. Regressionstest an den beiden abgelegten Blättern. Für jedes:
   kopiere den Quelltextordner nach %TEMP%\stufe4, entferne in
   der Hauptdatei die Zeile \usepackage{eigene}, lösche die
   eigene.sty aus der Kopie nicht, sondern lass sie ungenutzt
   liegen, leg die neue mathblatt.sty daneben und kompiliere
   zweimal. Vergleiche die Seitenzahl mit dem abgelegten PDF im
   geklonten Repo. Rendere aus jedem Blatt zwei Seiten mit
   Grafiken und sieh sie dir an.
   Erwartung: gleiche Seitenzahl, keine Fehlerzeile, die
   Grafiken sehen aus wie vorher. Weicht etwas ab, berichte es
   mit der Stelle, statt es zu übergehen.

7. Committe in blattbau mathblatt.sty und
   Anleitung_mathblatt.md mit der Nachricht „Vorlage Stufe 4:
   Bausteine aus beiden eigene.sty". Verschiebe
   auftrag-vorlage4a.md nach archiv/ und committe das mit.
   Nicht pushen.

## Prüfungen

- Nach Schritt 5: test-stufe4.tex kompiliert ohne Fehlerzeile,
  und du hast jede Seite als Bild gesehen.
- Nach Schritt 6: beide Blätter kompilieren ohne
  \usepackage{eigene} und haben die Seitenzahl ihres PDFs.
- Nach Schritt 7: git status zeigt nur die drei erwarteten
  Änderungen.

## Bericht

Erste Zeile: das Modell, mit dem der Auftrag lief.
Dann, knapp:
1. Tabelle der übernommenen Bausteine: Name, Signatur, Herkunft,
   und bei zusammengeführten Fassungen, was gewonnen und was
   Vorgabewert wurde.
2. Was du in der Anleitung ergänzt hast, in einer Zeile je
   Baustein.
3. Musterdatei: Kompilat sauber, was die Bilder zeigten, welche
   Nachbesserungen nötig waren.
4. Regressionstest: je Blatt Seitenzahl vorher/nachher,
   Fehlerzeilen, was die angesehenen Seiten zeigten.
5. Abweichungen und Annahmen, besonders jede Stelle, an der du
   ein bestehendes Makro anfassen musstest.
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
