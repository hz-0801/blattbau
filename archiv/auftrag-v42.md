# Auftrag v42 – Prompt v4.2 ins Repo, Anleitung auf Stufe 4

Modell: Sonnet (reine Mechanik).

## Ausgangslage

Der Unterrichtsblatt-Prompt v4.2 läuft seit 23.09.2026 als
Projektanweisung in erzeugeUnterrichtsblatt(). Im Repo liegt noch
v4.1 (unterrichtsblatt.md, 1022 Zeilen). Anleitung_mathblatt.md
gehört zur Vorlage 2026-09-22h (Stufe 4), trägt aber in Zeile 1
und im Schlussabschnitt noch „Stufe 3". Die Datei
unterrichtsblatt.md in der Repo-Wurzel ist mit diesem Auftrag
neu angelegt worden und enthält v4.2; sie ersetzt die alte
Fassung bereits.

## Schritte

1. Prüfe, dass unterrichtsblatt.md jetzt v4.2 ist: Zeile 1
   lautet „# UNTERRICHTSBLATT v4.2 – PROMPT FÜR LERNBLATT UND
   FOKUS", Zeile 2 beginnt mit „Version 23.09.2026 (v4.2)".
   Zähle die Zeilen und nenne die Zahl im Bericht.
2. CHANGELOG.md: Füge im Abschnitt „## masterprompt.md" als
   ersten Spiegelstrich, vor der Zeile „- 2026-09-22 v4.1 …",
   diesen Eintrag ein (eine Zeile, Umbruch beliebig):

   - 2026-09-23 v4.2 (nach Lauf 3 Daten mit v4.1, Opus 5, und
     einem Lauf Nullstellen Kl. 10 mit 30 Seiten): 1.3 Planfrage
     vor dem Bau – gefragt wird nur, wo der Eintrag eine Spanne
     trägt, die die Eingabe nicht auflöst: Umfang (nacktes Thema,
     vier oder mehr Einheiten), Stufe (Eintrag „Sek I + II" ohne
     Klasse und Schulform), Bildungsgang (ab Kl. 11 ohne
     gymnasium/abitur/osz/fos); Rückfälle alle Einheiten, Sek I,
     Abitur GK. 1.5 Stufenschnitt als Regel; Kursart: ohne Zuruf
     GK, LK-Stoff nur auf „lk" (Widerspruch „GK und LK gemeinsam"
     aufgelöst); Satz „Schulform filtert bis Kl. 10 nichts"
     ersetzt durch den Befund, dass die Niveaustufen des RLP die
     Schulformen unterscheiden, der Katalog sie aber noch nicht
     als Marke trägt. 2.3 g Halbseitenmaß je Hauptnummer, Teilung
     an Kettenstellen (Befund halb leere Seiten Lauf 3). 2.7
     Bereitstellung in drei Antworten: Plan(-frage), Blatt 0 mit
     Zeile „Weiter baut …", nach „weiter" Lernblatt ohne Blatt 0,
     Gesamt, Lösungen, Archiv; Einheit 1 als frühes PDF entfällt;
     Aufrufplan je Einheit zwei Aufrufe, ein Prüfskript. 4.5
     Vorlage Stufe 4: keine eigene.sty, fehlender Baustein im
     Vorspann der Rahmendatei mit Meldung; Dateinamen Blatt0,
     Lernblatt, Gesamt, Loesungen. 2.3 a Vorstufe ohne Ergebnis;
     3.5 gemeinte Grafik wird gezeichnet; 6.3 Zählregel
     Lösungsdatei, Stempel „weiter". Beispiel je Typ bleibt (eigene
     Zahlen, nicht aus dem Kasten). Ungetestet.

3. Anleitung_mathblatt.md: Ersetze in Zeile 1 „(Stufe 3)" durch
   „(Stufe 4)". Ersetze die Überschrift „Noch nicht in Stufe 3"
   durch „Noch nicht in Stufe 4" und im Satz danach „Die
   Bausteinliste Stufe 3 ist damit abgearbeitet." durch „Die
   Bausteinlisten Stufe 3 und 4 sind damit abgearbeitet." Sonst
   nichts ändern.
4. Verschiebe auftrag-v42.md nach archiv/ (Ordner anlegen, falls
   er fehlt; trifft er auf eine gleichnamige Datei, hängt der neue
   Name das Datum an).
5. Commit mit der Nachricht „Prompt v4.2; Anleitung auf Stufe 4".

## Prüfungen

- `grep -n "Stufe 3" Anleitung_mathblatt.md` liefert keine Zeile.
- `grep -c "v4.2" unterrichtsblatt.md` ist mindestens 3.
- `grep -n "eigene.sty" unterrichtsblatt.md` liefert keine Zeile.
- CHANGELOG.md hat genau einen neuen Eintrag, die alten sind
  unverändert (git diff zeigt nur eingefügte Zeilen).
- Zeilen mit mehr als 72 Zeichen in unterrichtsblatt.md: nur
  die drei curl-Zeilen und die drei LaTeX-Musterzeilen des
  Gleichungsrasters; jede andere ist ein Befund, wird gemeldet,
  nicht geändert.

## Bericht

Erste Zeile: das Modell, mit dem der Auftrag lief. Dann:
Zeilenzahl unterrichtsblatt.md, Ergebnis jeder Prüfung, git
status nach dem Commit, Abweichungen und Annahmen. Letzte Zeile:
„Push origin drücken".

## Regeln

- Nichts löschen; verschieben ja.
- git über die git.exe von GitHub Desktop (der PATH kennt sie
  oft nicht); kein Push.
- Keine inhaltliche Änderung an unterrichtsblatt.md; sie ist
  die Wahrheit, auch wo sie dir unplausibel scheint. Befunde in
  den Bericht.
