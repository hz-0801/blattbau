# Auftrag: Unterrichtsblatt-Prompt v4.1 ablegen

Modell: Sonnet (Ablage, Mechanik).

## Ausgangslage

Repo hz-0801/blattbau. unterrichtsblatt.md liegt bis jetzt als
v3.35 (Stand vor dem Katalogumbau, Tag v3.35-vor-katalogumbau).
Am 22.09.2026 wurde der Prompt zu v4.0 umgebaut (Abschnitt 0–2
neu aus ziel.md des Repos mathe-nachhilfe, 3–6 angepasst) und mit
dem Lernblatt Prozentrechnung getestet; v4.1 zieht die Befunde
dieses Laufs nach. Beide Fassungen lagen nur als Projektanweisung
vor; dieser Auftrag legt v4.1 ins Repo, schreibt die
Versionsgeschichte und die Testauswertung. Die Vorlage
mathblatt.sty wird in diesem Auftrag nicht angefasst; ihr Umbau
(Stufe 4) folgt in einem eigenen Auftrag.

## Schritte

1. Datei 2 (unterrichtsblatt.md) und Datei 3
   (Testauswertung_2026-09-22.md) liegen aus dem Block in der
   Wurzel. Prüfe: Die erste Zeile von unterrichtsblatt.md lautet
   „# UNTERRICHTSBLATT v4.1 – PROMPT FÜR LERNBLATT UND FOKUS",
   und die Datei enthält die Zeichenkette
   „Unterrichtsblatt-Prompt v4.1" in Abschnitt 6.3. Beides im
   Bericht.
2. CHANGELOG.md: Unter der Überschrift „## masterprompt.md" als
   erste zwei Einträge, vor der Zeile zu v3.35, die beiden
   folgenden Zeilen einfügen (wortgleich, je eine Zeile, mit dem
   Aufzählungsstrich wie die vorhandenen Einträge):

   - 2026-09-22 v4.1 (nach Lauf 2 Prozentrechnung mit v4.0, Opus 5): Bereitstellung neu – Blatt 0 früh als PDF, Einheiten ohne eigenes PDF, am Ende Gesamt mit klickbarem Verzeichnis und Seitenbereichen je Einheit, Lösungen als eigene Datei mit Lösungstiefe nach ziel.md § 4; Einheits-PDF nur auf Zuruf „E n", „gesamt" und „lösungen" nach Abbruch. 2.3 a Vorstufe einmal bei der ersten Einheit ihres Bereichs, im Fokus bei der fokussierten Einheit. 2.3 e Titelregel „Kurzname – Formwort" auch für Pflichtelemente, keine Werkstattnamen. 2.2 Dreisatz-Zahlen im Kopf rechenbar. 4.3 Streifen: Antwortfeld in der Streifenzeile, Zwanzigerstreifen für Anteile außerhalb der Zehnerschritte. 4.5 eigene Bausteine in eigene.sty, ins Archiv. 6.3 Zeitstempel je Übergabe in zeiten.txt, Archiv entsteht auch ohne Messung. Ungetestet.
   - 2026-09-22 v4.0 (Katalogumbau, nach Lauf 1 Prozentrechnung mit v3.34, Opus 5; Grundlage ziel.md in mathe-nachhilfe): Abschnitt 0–2 neu. Quelle ist der Themenkatalog (1.2 Abruf über katalog/index.md, genau ein Eintrag; Rückfall ohne Katalog). Zwei Blätter: Lernblatt mit allen Einheiten und Blatt 0, Fokus. Kein Budget, kein Schnitt, Bau in Reihe (2.7). Blatt 0 nur aus Fertigkeiten, je eine Hauptnummer, Reihenfolge nach erster Verwendung; Erkennungsschritte als Vorstufe der Einheit. Kette aus den Sprossen des Eintrags; Prüfungshöhe als verfremdetes Original mit Jahr; keine Zahl aus Kasten, Beispiel oder Original in einer Teilaufgabe. Titel je Hauptnummer, Einheitenkopf, Verzeichnis. Gestrichen: Übung als Aufgabe 1, Teilauswahl und „weiter", Eingangscheck, Lernblatt kurz und lang, Testformat, Sterne und Legende, Übersichtskasten (nur „mit kasten"), Hilfe-Seite. Vorlagen-URL zeigt auf blattbau. Getestet mit Lauf 2, siehe Testauswertung_2026-09-22.md.

3. README.md, drei Änderungen, sonst nichts:
   a) Die Zeile, die mit „- `unterrichtsblatt.md`" beginnt, wird
      ersetzt durch:
      - `unterrichtsblatt.md` – Lernblatt und Fokus aus dem Themenkatalog (`mathe-nachhilfe/katalog/`, Abruf per Raw-URL); ohne Katalog als Rückfall. Unterricht, Klassenarbeiten, Oberstufe.
   b) In der Zeile, die mit „- `Bewertung_Masterprompt_v3-34.md`"
      beginnt, wird nach „`Testauswertung_Masterprompt_Mathe_2026-09-08.md`"
      eingefügt: „, `Testauswertung_2026-09-22.md`".
   c) Im Absatz „Beim Anlegen des Repos prüfen" wird
      „`unterrichtsblatt.md` (Zeile 274)" ersetzt durch
      „`unterrichtsblatt.md` (Abschnitt 1.2 und 4.5)". Unter
      „Bekannte Abweichungen" wird im Aufzählungspunkt zu den
      Kopfzeilen „`unterrichtsblatt.md` und " gestrichen und der
      Satz so angepasst, dass er nur noch pruefungsblatt.md
      betrifft (Einzahl: „Die Kopfzeile von `pruefungsblatt.md`
      (Zeile 2) nennt …"; „beide Prompts" → „der Prompt").
4. Lege den Ordner archiv/ an, falls er fehlt, und verschiebe
   auftrag-v41.md dorthin.
5. Commit mit der Nachricht „Unterrichtsblatt v4.1 (Katalogumbau):
   Prompt, CHANGELOG, Testauswertung 2026-09-22".

## Prüfungen

- unterrichtsblatt.md: erste Zeile und Versionsstring wie in
  Schritt 1; keine Zeile enthält „Lernblatt kurz", „Teil 2 von 3"
  oder „\blattkopf*" (Reste der alten Fassung).
- CHANGELOG.md: beide neuen Zeilen stehen unter
  „## masterprompt.md" vor der v3.35-Zeile; die Datei hat genau
  zwei Zeilen mehr als vorher.
- README.md: die drei Änderungen aus Schritt 3, keine weitere.
- git status nach dem Commit: sauber.

## Bericht

Erste Zeile: das Modell, mit dem der Auftrag lief. Dann die
Ergebnisse der Prüfungen, die Commit-Kennung, Abweichungen und
Annahmen mit Grund; was außer den genannten Dateien geändert
wurde, oder „nichts". Letzte Zeile: „Push origin drücken".

## Regeln

Keine Rückfragen; bei Unklarheit die naheliegende Annahme, im
Bericht genannt. mathblatt.sty, Anleitung_mathblatt.md,
pruefungsblatt.md und referenz/ werden nicht angefasst. Nichts
wird gelöscht. Dateien UTF-8 mit LF.
