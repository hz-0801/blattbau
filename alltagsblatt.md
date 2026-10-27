# Alltagsblatt – Bauanweisung v2

Stand 27.10.2026 (v2: Komplett- und Abschnittsblatt, Reihenfolge und Mengen, Rechenzeilen je Teilaufgabe, Schreibweise,
„Stimmt das?“ nur wo es passt, Voraussetzungen nur von davor – Register 27.10.2–10; v1.2a 26.10.). Du baust ein
Alltagsblatt für eine Lerneinheit (Komplettblatt) oder einen ihrer Abschnitte (Abschnittsblatt) – für den Vorrat oder live
bei einer Bestellung. Das Warum steht in mathe-nachhilfe `allgemein.md` § 2; hier steht, was du tust. Du schreibst nur den
Inhalt, als Daten. Setzen, Layout, Seitenumbruch und die Prüfung des Handwerks übernimmt aufgabenbank
`werkzeuge/alltagsblatt-pruef.py`.

## 1 Wofür das Blatt da ist

Ein Schüler bekommt das Blatt am Tisch; der Lehrer sitzt daneben und hilft an den neuen und schweren Stellen. Die Schüler
kommen nicht lückenlos, und niemand pflegt Vorgaben: Jedes Blatt trägt für sich und wiederholt selbst, was es braucht.
- **Komplettblatt:** alle Abschnitte, die es zur Lerneinheit braucht, für alle Schüler gleich, am Ende gemischt. Der Lehrer
  kann es immer vorlegen, auch wenn er nicht weiß, wo der Schüler steht. Gedruckt wird nur der Block, der heute dran ist.
- **Abschnittsblatt:** vertieft einen Abschnitt des Komplettblatts – dieselbe Reihenfolge, dasselbe Beispiel, mehr Übung,
  keine gleiche Aufgabe.
Gelungen ist das Blatt, wenn der Lehrer es ohne Nachbessern an den Tisch legt. Jede Aufgabe muss dem Schüler nützen.

## 2 Was du bekommst

- **Bestellung** (im Auftrag oder in der Nachricht): Katalogeintrag und Einheit, **Blattart** (komplett oder abschnitt;
  fehlt sie: abschnitt, wenn ein Abschnitt genannt ist, sonst komplett), beim Abschnittsblatt der Abschnitt, Klasse,
  Schulform oder Bildungsgang (OS, GYM; Sek II: Abitur GK oder LK, FOS), das Buch des Schülers, wenn bekannt, Zusätze
  („schwach“, Foto einer Schulaufgabe) und einen Kurznamen für den Lauf.
- **Gruppenprofil**, wenn der Auftrag eines nennt: wenige Zeilen zur Jahrgangsgruppe – Schule und Buch, was die
  Klassenarbeit fragt, typische Fehler, Schreibweisen des Lehrers. Nutze es wie eine Angabe der Bestellung.
- **Unterlage:** `python3 werkzeuge/unterlage.py <eintrag> <einheit> <abschnitt|komplett> --klasse <k> --schulform <s>
  [--werk <werk>] --aus <ordner>` schreibt `unterlage.md` in deinen Ordner. Lies sie ganz; sie ist deine Quelle: Abschnitte
  mit Kette, Typen und Stolperstellen (Merkmale), Voraussetzungen, typische Fehler, Originale mit Niveau, Niveaustufe,
  Satzmuster und Schwereprofil der Bücher, Buchaufgaben des Kapitels als Daten.
- Andere Regeldateien, den alten Prompt und die Bank liest du nicht; was du brauchst, steht hier und in der Unterlage.

## 3 Das Blatt

**3.1 Aufbau, immer gleich.** „Das kennst du schon“ → je Abschnitt ein Block in der Folge der Unterlage → beim
Komplettblatt „Zum Schluss“. Ein Abschnitt, der nur mischt, rückwärts fragt oder nur die Prüfungshöhe bringt, wird beim
Komplettblatt kein Block: gemischt geht in den Schluss, eine Sache in die Spitze des passenden Blocks, rückwärts wird eine
Schlussaufgabe (Beispiel Gleichungssysteme Einheit 2: Blöcke Einsetzen · Umstellen · Gleichsetzen, dann Schluss; der
Abschnitt „Rückwärts, gemischt und Preise“ wird kein Block). Die Länge folgt aus dem Inhalt; der Satz setzt jeden Block auf
eine neue Seite.

**3.2 Das kennst du schon** (block 0, höchstens eine halbe Seite): nur die Vorstufen, die dieses Blatt braucht, als
kurze Aufgaben mit 2–3 Teilen. Beim Abschnittsblatt gehört hierher auch, was es aus früheren Abschnitten braucht.

**3.3 Ein Block**, in dieser Folge (rolle in Klammern):
- **Blockkopf:** das Verfahren in Schülersprache („Erst umstellen, dann einsetzen“).
- **Beispiel:** der einfachste Fall, ganz vorgerechnet als Tafelbild (Schreibweise 4.3), mit Antwort; in Geometrie mit
  Skizze. Das Abschnittsblatt nimmt dasselbe Beispiel wie das Komplettblatt.
- **Formelzeile**, nur wo eine Formel den Block trägt: der Name, dann die Formel wie im Tafelwerk; keine umgestellte Form,
  kein erklärender Text.
- **Erkennen** (erkennen), nur wenn das Verfahren einen Erkennungsschritt hat: 3–4 Teilaufgaben ohne Rechnung an den
  Varianten, die danach kommen („Welche Gleichung stellst du um?“).
- **Kette** – eine Nummer, eine Aufforderung: zuerst der **Grundfall** (grundfall, ohne Merkmal), dann die
  **Stolperstellen** (stolper, je Teilaufgabe die Stolperstelle als Merkmal), am Ende die **Probe** (probe): eine Nummer mit
  zwei Teilaufgaben, je eine der wichtigsten Stolperstellen des Blocks – wer sie kann, geht zum nächsten Block. Die
  Überschrift der Probe sagt das in Schülersprache; „Probe“ nur, wo das Wort im Verfahren nichts anderes heißt.
- **Sache** (sache): eine Sachaufgabe, deren Mathematik die Sache trägt.
- **Spitze** (spitze): die schwerste Aufgabe des Blocks (Maßstab 3.5).
- **„Stimmt das?“** (stimmt), nur wo der Block einen typischen Fehler hat: eine Behauptung oder eine kurze Rechnung mit
  diesem Fehler oder ohne ihn; der Schüler entscheidet und begründet.

**3.4 Mengen.**

| | Komplettblatt | Abschnittsblatt |
|---|---|---|
| Grundfall | 2× bei kurzen oder seltenen Verfahren, 3–4× bei fester Schreibform, die sitzen muss | 3–4× |
| jede Stolperstelle des Abschnitts | 1× | 2–3× |
| Probe | 2 Teilaufgaben | 2 Teilaufgaben |
| Sache, Spitze, „Stimmt das?“ | je höchstens 1 | je höchstens 1 |
| Zum Schluss | 5–6 gemischte Teilaufgaben | – |

Der erste Grundfall ist so leicht wie das Beispiel; danach ist keiner ganz gleich (Namen f, g, h oder r, s; Reihenfolge der
Glieder; auch mal anders dargestellt). Stolperstellen im Rechenweg (Vorzeichen, Klammer, Umstellen) kommen vor
Zahl-Stolperstellen (Komma, Bruch, Runden), seltene zuletzt; reine Zahlwechsel nur beim Grundfall. Der Schluss mischt die
Blöcke, verrät das Verfahren nicht und bringt die wichtigsten Stolperstellen ein zweites Mal. Als Prüfwert, nicht als
Vorgabe: etwa ein Drittel leicht (Das kennst du schon, Erkennen, Grundfall), gut ein Drittel Stolperstellen und Probe,
knapp ein Drittel Klassenarbeitshöhe (Sache, Spitze, „Stimmt das?“, Schluss).

**3.5 Maßstab der Spitze:** das Schwierigste, was im Unterricht dieser Klasse und Schulform drankommen kann – greifbar über
die Niveaustufe der Unterlage und die schwersten regulären Buchaufgaben des Kapitels, nicht Vertiefung oder Knobelei. Geht
das nur am Gymnasium oder im Erweiterungskurs dran, darfst du die Aufgabe so kennzeichnen (Feld `kennzeichen`). Im
Prüfungsjahr (Kl. 10 Oberschule bei einem P10-Thema, Q-Phase bei Abitur oder FHR) ist ein verfremdetes Original der
Unterlage ein guter Anker – aber nur, wo es zum Block passt; Prüfungshöhe ist nicht immer richtig. Die Anker stehen in der
Unterlage unter „Anker der Spitze“ (Originale, schwerste Buchaufgaben); die Spitze liegt auf ihrer Höhe, nicht leichter und
nicht darüber. Der Bericht nennt je Block den Anker oder „kein Anker“.

**3.6 Voraussetzungen nur von davor.** Ein Block setzt nur voraus, was auf dem Blatt davor oder in „Das kennst du schon“
steht, nie Stoff eines späteren Abschnitts.

**3.7 Vielfalt.** In der Kette eine Aufforderung; ab der Sache wechselt die Form: rechnen, ablesen (Tabelle, Diagramm,
Graph, Skizze), ankreuzen (eine echte Entscheidung, höchstens vier Optionen), zuordnen, ergänzen, Aussage prüfen und
begründen, schätzen. Zwei Nummern hintereinander beginnen nie mit derselben Aufforderung. Der Text verrät die Entscheidung
nicht („Löse das Gleichungssystem“, nicht „Stelle II nach y um“, wenn das Wählen geübt wird). Die Satzmuster der
Unterlage sind Vorbild für die Form; der Wortlaut ist immer dein eigener.

**3.8 Nicht aufs Blatt:** „Wo steckt der Fehler?“ als eigener Typ, Rätsel, Herleitungsbilder, Ergebnisformen, die einen
Schritt ersparen („c² = __, c = __“), Merkkasten mit Text, „Wiederholung“ am Ende, Fundstellen, Zeitmarken, Sätze über das
Blatt („kannst du überspringen“), Aufgaben über dem Maßstab.

## 4 Aufgaben schreiben

**4.1 Zahlen.** Ganze Zahlen und glatte Ergebnisse bis zur ersten Zahl-Stolperstelle; Dezimalzahlen, Brüche und Runden
erst als Stolperstelle. Denk vom Ende her: Welches Ergebnis soll herauskommen, welche Angabe führt dorthin? Exakt zuerst,
dann gerundet („√65 ≈ 8,1“).

**4.2 Sprache.** Kurze ganze Sätze, erst die Lage, dann eine Aufforderung; Du-Form; Operatoren wie in der Prüfung
(berechne, gib an, begründe, entscheide); ein Fachwort beim ersten Mal mit dem Alltagswort; Buchstaben und Schreibweise wie
im Buch des Schülers, sonst wie im Tafelwerk; Division als Bruch.

**4.3 Schreibweise in Beispiel und Lösung.** Was im Kopf geht, steht in einer Zeile („|u⃗| = √(0,6² + 0,8²) = 1“);
Umformungen stehen untereinander, am Gleichheitszeichen ausgerichtet, mit Auftragsstrich. ⇒ steht, wo ein Schritt Wissen
anwendet statt zu rechnen (Nullprodukt, Wurzel ziehen, Ablesen), nicht zwischen Umformungen; nie ⇔. Gleichungssysteme und
Proben untereinander, zwei Ergebnisse untereinander. Formelzeile: erst der Name, auch der im Unterricht übliche, dann die
Formel; eine gängige Eselsbrücke dahinter, sparsam („Spitze minus Fuß“). p-q-Formel: zuerst die Normalform
x² + px + q = 0 (wenn nötig erst durch a geteilt), dann p und q ausdrücklich, dann einsetzen; übt ein Block einen kürzeren
Weg, steht unter dem Beispiel nur „Geht auch: ausmultiplizieren und p-q-Formel.“ Vektorgleichungen: Spaltenvektoren
nebeneinander, Komponenten zeilenweise ausgerichtet.

**4.4 Darstellung.** In Geometrie hat jede Aufgabe eine Figur (deine Skizze oder ein Skizzenfeld); sonst bekommt die erste
Aufgabe eines Blocks ein Bild, wo es trägt. Was die Skizze zeigt, steht nicht noch einmal im Text.

**4.5 Sachaufgaben.** Echte Größen, eine sinnvolle Frage, nie zweimal hintereinander dieselbe Sache; eine Sache nur, wenn
die Mathematik einen Wert oder eine Entscheidung in der Sache liefert.

**4.6 Herkunft.** Alles auf dem Blatt ist frei: eigene Aufgaben oder freie Zwillinge der Buchaufgaben (neue Werte, eigener
Wortlaut, eigene Sache bei erzählten Sachtexten, Abbildungen selbst gezeichnet). Ein Prüfungsoriginal steht nur verfremdet
da, mit seiner Kennung in `ursprung`. Nie ein ganzes Buchkapitel in derselben Auswahl und Folge.

**4.7 Sek II.** Wie oben; die Spitze ist eine Aufgabe mit Stamm und Teilaufgaben a), b), c) im Stil der Prüfung des
Bildungsgangs (Abitur Teil A oder B, FHR), Zwischenergebnisse zur Kontrolle, wo die Prüfung sie gibt. Kein Stoff eines
anderen Bildungsgangs (FOS: keine e-Funktion, keine Vektoren, keine Kettenregel).

**4.8 schwach** (nur auf Zuruf): gleicher Stoff, anderer Bau – Grundfall einmal mehr, neben den ersten eine Darstellung, an
der gerechnet wird (Streifen, Tabelle, Skizze), ein Fachwort erst dort, wo es gebraucht wird.

## 5 Ausgabe: Daten, kein LaTeX-Blatt

In deinen Ordner schreibst du:

- **`blattart.txt`** – `komplett` oder `abschnitt`.
- **`plaetze.jsonl`** – eine Zeile je Platz. Ein Platz ist eine Teilaufgabe, sobald sie gerechnet wird (der Satz setzt die
  Rechenzeilen direkt darunter); nur kurze Antworten ohne Rechnung (Erkennen, Ankreuzen, Ablesen) dürfen mehrere
  Teilaufgaben in einem Platz haben. Felder:
  `id` (`<eintrag>-e<einheit>-<lauf>-NNN`), `nr`, `teil` („a“, „a-c“ oder „“), `abschnitt` (wie in der Unterlage),
  `block` (0 Das kennst du schon, 1–8 die Blöcke in Blattfolge, 10 Zum Schluss), `rolle` (vorstufe, erkennen, grundfall,
  stolper, probe, sache, spitze, stimmt, schluss), `typ` (aus den Typen der Unterlage), `merkmale` (Stolperstellen aus der
  Unterlage; leer beim Grundfall), `titel` (Überschrift der Nummer: die Aufforderung in Schülersprache), `aufgabe` (LaTeX
  mit den Bausteinen von mathblatt.sty; mehrere Teilaufgaben eines Platzes mit `\teil`; keine Schreibzeilen),
  `grafik` (TikZ oder Baustein, sonst „“), `antwort` (Antwortfeld bei kurzen Antworten, sonst „“), `platz` (Rechenzeilen
  dieser Teilaufgabe: Schritte der Lösung + 1, höchstens 16; 0 ohne Rechnung), `loesung` („a) … \quad b) …“ – Ergebnis und
  Ansatz, kein Satz), `ergebnis` (Liste je Teilaufgabe, kurz, mit Einheit), `pruef` (Liste je Teilaufgabe: ein
  Python-Ausdruck mit sympy, der wahr sein muss, z. B. `"Rational(4+7+9+12, 4) == 8"`; bei Begründungen `""`),
  `haengt_an` (id des Platzes, auf den sich die Aufgabe bezieht, sonst „“), `sache`, `kennzeichen` („“, „Gymnasium“ oder
  „Erweiterungskurs“; 3.5), `ursprung` (`{"art": "eigen" | "zwilling" | "verfremdet", "werk": "", "seite": "", "nr": ""}`),
  `eintrag`, `einheit`. Ein Merkmal, das in der Unterlage fehlt, trägst du in `merkmale_neu` ein
  (kennung;abschnitt;merkmal;art;hinweis).
- **`rahmen.jsonl`** – eine Zeile je Rahmenteil in Blattfolge: `pos`, `art` (zone, block, beispiel, merksatz, schluss),
  `vor_nr` (die Nummer, vor der er steht), `tex`. `block` ist der Blockkopf (3.3), `beispiel` das Tafelbild (mit
  `\rechnung{…}`), `merksatz` die Formelzeile; `zone` und `schluss` mit leerem `tex` (die Überschrift setzt der Satz).
- **`titel.txt`** (Name des Blatts, kurz: die Lerneinheit oder der Abschnitt, z. B. „Gleichungssysteme lösen“) und
  **`klasse.txt`** (Klasse der Bestellung).
- **`bericht.md`**, höchstens 12 Zeilen: je Block Beispiel, Stolperstellen in ihrer Folge und die Spitze mit ihrem Anker
  (oder „kein Anker“); welche Abschnitte kein Block wurden; Prüfergebnis, Seiten je Block, Teilaufgaben,
  Wanduhr, Unsicheres.

Kopf, Fuß, Kennung, Nummern, Buchstaben, Rechenzeilen, Seitenumbruch (jeder Block auf neuer Seite), die Seitenangaben je
Block (`seiten.txt`), das Lösungsblatt und die Ergebnisse im Fuß setzt das Skript.

## 6 Ablauf – so wenige Schritte wie möglich

1. `date -u` als erste Zeile in `zeiten.txt`; Unterlage erzeugen und ganz lesen.
2. Plane im Kopf, bevor du schreibst: die Blöcke; je Block Beispiel, Grundfälle, die Stolperstellen in ihrer Folge, Probe,
   Sache, Spitze (3.5), ob „Stimmt das?“ passt; beim Komplettblatt den Schluss.
3. Schreib die Daten in einem Zug.
4. `python3 werkzeuge/alltagsblatt-pruef.py <ordner>`. Meldet es HALT, berichtigst du die Daten und rufst es erneut auf;
   Warnungen prüfst du und entscheidest. Das Skript setzt `blatt.pdf` und `loesung.pdf`, schreibt `seiten.txt` und nennt
   die Seiten mit Grafik.
5. Sieh nur diese Seiten an; passt eine Figur nicht zu den Zahlen oder ist sie abgeschnitten, berichtigen.
6. Anfänger-Test im Kopf: Schafft der Schüler den ersten Grundfall jedes Blocks allein mit dem Beispiel? Gibt es einen
   Sprung zwischen zwei Teilaufgaben? Setzt ein Block etwas voraus, das erst später kommt?
7. `date -u` in `zeiten.txt`, Bericht, fertig. Live lieferst du `blatt.pdf`, `loesung.pdf` und die Zeile aus `seiten.txt`.
