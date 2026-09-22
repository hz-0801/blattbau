# Auftrag vorlage4c – vier Layoutfehler der Vorlage

## Ausgangslage

Ordner blattbau. mathblatt.sty steht auf 2026-09-22f und ist
gepusht; der Blatt-Prompt holt sie bei jedem Lauf frisch. Ein
Fehler darin trifft sofort jedes neue Blatt – deshalb wird vor
dem Commit mit xelatex kompiliert und angesehen.

Am Lernblatt Daten (blaetter/daten/2026-09-22/ im Repo
mathe-nachhilfe) sind vier Fehler der Vorlage aufgefallen. Sie
sind Gegenstand dieses Auftrags. Ein fünfter Befund – halbe
Seiten bleiben leer, weil Grafiken nicht umbrechen – gehört
nicht dazu und wird nicht angefasst.

Anders als in den Vorläufen änderst du hier bestehendes
Verhalten. Das ist erlaubt, aber nur an den vier genannten
Stellen.

Eigenheiten dieses Rechners: xelatex und git stehen unter
Umständen nicht im PATH der Sitzung; MiKTeX liegt in
%LocalAppData%\Programs\MiKTeX\miktex\bin\x64, git hier:
C:\Users\holge\AppData\Local\GitHubDesktop\app-3.6.5\resources\app\git\cmd\git.exe
Python nur über den vollen Pfad
%LocalAppData%\Programs\Python\Python312\python.exe (py -3 gibt
es nicht). Den PATH nur für die eigene Sitzung ergänzen, nicht
am System ändern.

## Schritte

1. Arbeitsordner %TEMP%\stufe4c anlegen und dort
   git clone --depth 1 https://github.com/hz-0801/mathe-nachhilfe.git
   ausführen. Sieh dir zu jedem der vier Punkte die Stelle im
   abgelegten Quelltext und im abgelegten PDF an, bevor du
   etwas änderst.

2. teilezwei bei ungerader Zahl von Teilaufgaben. Beobachtet:
   Die letzte Teilaufgabe steht allein, und die folgenden
   Zeilen rutschen mit anderem Einzug darunter (Blatt 0 Nr. 5
   e–g und Nr. 6 e–f, Gesamt Nr. 24 e–i). Ziel: Buchstabe und
   Textanfang fluchten in teilezwei mit denen der Umgebung
   teile, eine allein stehende letzte Teilaufgabe sieht aus wie
   eine Zeile aus teile, und ein Block, der auf teilezwei
   folgt, beginnt wieder am gewohnten Einzug. Die zweispaltige
   Aufteilung und die Buchstabenzählung über alle Blöcke
   hinweg bleiben, wie sie sind.

3. Winkel antragen. Im Blatt hat der Prompt den Strahl selbst
   mit tikz gezeichnet, weil die Vorlage keinen Baustein dafür
   hat; dabei lag der Scheitel falsch. Bau einen Baustein
   \winkelstrahl: Scheitel links, beschriftet (Vorgabe S),
   waagerechter Strahl nach rechts, Länge als optionales
   Argument, genug Platz darüber, dass ein Schüler mit dem
   Geodreieck einen Winkel anträgt. Kein Pfeil, der nach links
   zeigt.

4. Strichliste mit Fünferbündeln. Bisher setzt \strichliste
   sein Argument nur in Schreibmaschinenschrift; die Bündel
   fehlen (vier Striche mit Querstrich). Das neue Makro zeichnet
   die Liste: vier senkrechte Striche, der fünfte quer darüber,
   Bündel mit Abstand. Es nimmt eine Zahl als Argument. Die
   abgelegten Blätter übergeben die Striche als Text
   (\strichliste{|||||\ ||}); damit sie weiter kompilieren,
   erkennt das Makro ein Argument, das nur aus Strichen und
   Abständen besteht, zählt die Striche und zeichnet daraus die
   Liste.

5. Beschriftung der x-Achse in \saeulenab. Beobachtet: Lange
   Kategorienamen laufen ineinander; im Vorlauf war die
   Abhilfe, die Breite von Hand hochzusetzen. Ziel: Der
   Aufrufer muss nichts von Hand setzen – lange Namen bleiben
   lesbar, weil das Makro sie umbricht, dreht oder die Säulen
   auseinanderrückt. Welchen Weg du wählst, entscheidest du am
   Bild; nenn ihn im Bericht. Kurze Namen sollen aussehen wie
   bisher.

6. Anleitung_mathblatt.md nachziehen: \winkelstrahl als neue
   Zeile mit der Regel, dass ein Winkel zum Antragen über
   diesen Baustein kommt und nicht selbst gezeichnet wird; die
   Zeilen zu teilezwei, \strichliste und \saeulenab an das
   geänderte Verhalten anpassen. Wo die Anleitung bisher zur
   Handarbeit riet (Breite hochsetzen), fällt der Rat weg.
   Standzeile von .sty und Anleitung auf 2026-09-22g.

7. Musterdatei: schreib in %TEMP%\stufe4c eine test-4c.tex, die
   jeden der vier Punkte zeigt – teilezwei mit fünf und mit
   sieben Teilaufgaben, jeweils gefolgt von einem teile-Block;
   \winkelstrahl in zwei Längen; \strichliste einmal mit Zahl
   und einmal in der alten Strich-Schreibweise; \saeulenab mit
   kurzen und mit sehr langen Kategorienamen. Kompiliere mit
   xelatex -interaction=nonstopmode, rendere jede Seite mit
   pdftoppm und sieh sie dir an. Bessere nach, bis jeder Punkt
   erkennbar behoben ist.

8. Gegenprobe mit bekannten Werten an den beiden abgelegten
   Blättern: Quelltextordner kopieren, \usepackage{eigene} aus
   der Hauptdatei entfernen, neue mathblatt.sty daneben legen,
   zweimal mit xelatex kompilieren. Erwartet: daten 21 Seiten,
   prozentrechnung 16 Seiten, keine Fehlerzeile. Die Strichliste
   sieht jetzt anders aus als im abgelegten PDF – das ist
   gewollt; alles andere soll gleich aussehen. Sieh dir an:
   daten Seite 5 (Strichliste), Seite 8 (Säulen), die Seiten
   mit den Nummern 5, 6 und 24 (teilezwei) und die Seite mit
   dem Winkelstrahl. Weicht die Seitenzahl ab, ist das ein
   Befund – nenn ihn mit der Stelle, statt die Erwartung
   anzupassen.

9. Committe mathblatt.sty und Anleitung_mathblatt.md mit der
   Nachricht „Vorlage Stufe 4: teilezwei, Winkelstrahl,
   Strichliste, Achsenbeschriftung“. Verschiebe
   auftrag-vorlage4c.md nach archiv/ und committe das mit.
   Nicht pushen.

## Prüfungen

- Nach Schritt 7: test-4c.tex kompiliert ohne Fehlerzeile, und
  du hast jede Seite als Bild gesehen.
- Nach Schritt 8: beide Blätter kompilieren ohne Fehlerzeile
  und mit der erwarteten Seitenzahl.
- Nach Schritt 9: git status zeigt nur die drei erwarteten
  Änderungen.

## Bericht

Erste Zeile: das Modell, mit dem der Auftrag lief.
Dann, knapp:
1. Je Punkt: was du geändert hast, und woran du im Bild
   erkannt hast, dass es behoben ist.
2. Bei \saeulenab: welchen Weg du gewählt hast und warum.
3. Was du in der Anleitung geändert hast.
4. Gegenprobe: je Blatt Seitenzahl erwartet und erhalten,
   Fehlerzeilen, was die angesehenen Seiten zeigten.
5. Stellen, an denen du ein bestehendes Makro außerhalb der
   vier Punkte anfassen musstest, einzeln.
6. Abweichungen und Annahmen.
Letzte Zeile: Push origin drücken.

## Regeln

- Lösche nichts und benenne kein bestehendes Makro um.
- Ändere die Wirkung bestehender Makros nur an den vier
  genannten Stellen.
- Kompiliere mit xelatex und sieh dir das Ergebnis an, bevor du
  committest; ein Commit ohne gesehenes Kompilat ist nicht
  zulässig.
- Wartet ein Befehl auf eine Eingabe, brich ab und melde, worauf
  er wartet.
- Berichte, was war, auch wenn es scheiterte.
