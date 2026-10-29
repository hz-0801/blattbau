# Bauauftrag Ballon 4 – Kapitel „Lineare Gleichungssysteme“ neu, knapp (27.10.2026)

Grundlage: mathe-nachhilfe plan.md Jetzt 0, Register 27.10.11–15, aufgabenbank bau/befunde-M7.md.
Ordner: aufgabenbank bau/kapitel-lgs-b4-2026-10-27/. Gleicher Auftrag wie Ballon 3; geändert sind nur die Beispiele und
vier Zwecke (Abholen, Nummern, wie viel üben, letzte Aufgabe).

## Lage
Zwei Gruppen in Brandenburg, Klasse 9 Oberschule und Klasse 8 Gymnasium. Sie kommen nicht lückenlos. Der Lehrer sitzt daneben
und hilft an den neuen und schweren Stellen. Am Tisch schlägt er das Verzeichnis auf, findet den Teil, der heute dran ist, und
druckt nur ihn.

## Zweck
Ein Kapitel, das der Lehrer ohne Änderung an den Tisch legt, für beide Gruppen; was nur eine braucht, trägt ein Kennzeichen.
Das Kapitel ist knapp, der Grundgang. Wer mehr oder gezielt üben muss, bekommt später ein eigenes Abschnittsblatt – das baust
du nicht. Darum: wenige Aufgaben, jede mit einem Zweck, und Beispiele, die man mit einem Blick überschaut.

## Was du baust
Die Teile aus gliederung.md § 3 ohne den ersten, in dieser Folge: 1 Grafisch lösen · 2 Gleichsetzen · 3 Einsetzen ·
4 Addieren · 5 Sachaufgaben · Auf einen Blick · Zum Schluss. Was der erste Teil der Gliederung brachte – ein Zahlenpaar prüfen,
nach y umstellen –, steht in „Das kennst du schon“ von Teil 1. Keine, eine, unendlich viele Lösungen gehören in den Kern; drei
Variablen nicht.

## Wie du planst
- Vom Ende her: je Teil zuerst die Aufgabe, die der Schüler am Ende kann (Anker der Unterlage oder Messlatte), dann die
  Teilfertigkeiten dahin, dann je Aufgabe ein Halbsatz: was übt sie, das die vorige nicht übt? Ohne eigenen Zweck fällt sie weg.
- Der Teil ist der Grundgang: so viel, dass der Schüler das Verfahren in einer Sitzung sicher kann – einschließlich der
  Stolperstellen, an denen er sonst scheitert. Jede Sache übt er, bis sie sitzt, nicht länger; was darüber hinausgeht (mehr vom
  Gleichen, tiefer), gehört in ein Abschnittsblatt.
- Beispiele: Das Beispiel ist ein Geländer, keine Erklärung. Es führt ein Verfahren vor, als knappe Lösungsskizze ohne Prosa;
  der Schüler hangelt sich Zeile für Zeile daran entlang und überträgt es auf die Aufgaben danach – darum kommt jeder Schritt,
  den diese Aufgaben verlangen, im Beispiel vor. Gelernt wird die Schrittfolge, nicht die Zahlen: Gleiche Schritte heißen in
  jedem Beispiel gleich. Es zeigt den Kern des Verfahrens; die Probe ist ein eigenes Verfahren und gehört nicht hinein.
  Erklärt wird am Tisch. Wo kein neuer Schritt vorkommt, braucht es kein Beispiel. Anschauung, wie der Lehrer Muster
  schreibt: `muster.txt` im Ordner – nicht abschreiben, eigene Zahlen; wie du es im Datenformat setzt, entscheidest du.
- Teilaufgaben sind einzeln lösbar, außer die Abhängigkeit ist gerade der Zweck.
- Die Probe steht in Aufgaben nur, wo sie etwas bringt – etwa nach dem Ablesen am Graphen, weil Ablesen ungenau ist.
- Jede Teilaufgabe fragt eine Sache klar; eine Erkennen-Aufgabe fragt, was vor dem Rechnen wirklich zu entscheiden ist.
- Die letzte Aufgabe eines Abschnitts zeigt, ob der Schüler ihn ganz kann. Die Spitze fürs Gymnasium erreicht die
  Gymnasial-Messlatte, auch bei Sachaufgaben.
- Der Schüler soll jederzeit sehen, wo er im Teil steht und was noch kommt; an den Nummern sieht er, wann etwas Neues kommt.
  Gib den Blöcken kurze Titel, aus ihnen setzt das Werkzeug den Fahrplan unter dem Titel des Teils.
- Am Ende des grafischen Teils soll der Schüler vor dem Rechnen sagen können, ob ein System genau eine, keine oder unendlich
  viele Lösungen hat und woran er das erkennt; wie du das festhältst, entscheidest du.
- Jeder Teil steht für sich: Sein „Das kennst du schon“ holt ab, was der Teil voraussetzt – der Schüler soll merken, ob er es
  kann; erklärt wird am Tisch. Alle Teile sind aufeinander abgestimmt (Bezeichnungen, Zahlen, keine Aufgabe doppelt). Rechnen,
  Üben und Sache im Gleichgewicht; Stolperstellen über das Kapitel verteilt.
- Schreibweise: Gleichungen des Systems I und II; Geraden y = mx + n, durchgängig ab dem ersten „Das kennst du schon“; statt
  „Gegenzahlen“ „dieselbe Zahl mit anderem Vorzeichen“. Gilt ein Teil an der Oberschule nur im Erweiterungskurs, schreib das
  einmal in `kopf.txt` des Teils („Kl. 9 OS: nur E-Kurs · Kl. 8 Gym: alle“) und in `kennzeichen.txt`, nicht an jede
  Nummer.
- Länge als Richtung: ein Teil etwa eine Sitzung, eher kürzer.

## Was du liest
- Die Unterlagen: `python3 werkzeuge/unterlage.py lineare-gleichungssysteme <1–4> komplett --klasse 9 --schulform OS
  --aus <ordner>/unterlage-e<n>/` – Ketten, Stolperstellen, Fehler, Anker, Satzmuster.
- gliederung.md und muster.txt im Ordner.
- Messlatten, nur fürs Niveau: aufgabenbank-privat buecher/schnittpunkt9-2017/blick-ins-buch/ (Oberschule) und
  fundamente8-2024/blick-ins-buch/ (Gymnasium). Nichts übernehmen.
- blattbau alltagsblatt.md § 5 (Datenformat, verbindlich) und mathe-nachhilfe allgemein.md 2.3a (Schreibweise); beides prüft das
  Skript. Sonst keine Regeldatei, keinen früheren Bau (keinen anderen kapitel-lgs-Ordner) und keine befunde-*.md.

## Ablauf
1. `date -u` nach `zeiten.txt`. Plan nach `plan.md`, bevor eine Aufgabe entsteht: Verzeichnis (je Teil ein Satz, was der Schüler
   danach kann), Bezeichnungen, je Teil Zielaufgabe, Teilfertigkeiten, Aufgaben mit Zweck, Beispiel ja/nein. Commit.
2. Teil für Teil, nicht parallel; vor jedem Teil `plan.md` lesen. Ordner `teil<n>` mit `blattart.txt` = `teil`, Daten nach § 5,
   dann `python3 werkzeuge/alltagsblatt-pruef.py <ordner> --weg-a`; HALT berichtigen, Warnungen entscheiden, Seiten mit Grafik
   ansehen. Unter „Gedächtnis“ in `plan.md` höchstens fünf Zeilen (Systeme, Zahlen, Sachen, Abweichungen mit Grund). Commit je Teil.
3. `blick` und `schluss` ebenso; dann `python3 werkzeuge/kapitel-verzeichnis.py <ordner>`. Commit.
4. Anfänger-Test je Teil im Kopf: schafft ein Schüler mit nur diesem Teil die erste Aufgabe?
5. `date -u`, `bericht.md` je Teil drei Zeilen: Seiten, Zahl der Aufgaben, was du weggelassen hast und warum. Commit, fertig.

Commit nach jedem Teil; ein Neustart darf nur den laufenden Teil kosten. Harte Uhrzeit: siehe Auftragsdatei der Runde.
