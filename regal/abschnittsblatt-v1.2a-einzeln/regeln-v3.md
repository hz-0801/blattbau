# Vorratsrunde 3 (26.10.2026 abends) – gemeinsame Regeln aller Bau-Läufe v3a–v3g

Lies zuerst `/tmp/claude-0/-home-claude/ddcac7d1-8494-5770-b407-b0762352a17f/scratchpad/r3/gemeinsam.md` (Arbeitsort,
Commit, Nachweis). Dein Klon: `/home/claude/klone/<lauf>/`. Du schreibst nur in `aufgabenbank`.

Anlass: mathe-nachhilfe plan.md Linie 13, Register 26.10.1 (ein Abschnitt je Blatt), 26.10.2 (keine Wiederholung), 26.10.3
(Opus mit Gruppenprofil), 26.10.5 (brauchbare Blätter auf Vorrat haben Vorrang); Lehrer 26.10. „go“. Bauweg: blattbau
`alltagsblatt.md` (gilt in der Fassung deines Klons). Ziel: Blätter, die der Lehrer ohne Nachbessern an den Tisch legt.

Dein Auftrag nennt Lauf, Gruppenprofil, Eintrag, Einheit, Abschnitte (in dieser Folge), Klasse, Schulform und ob du zuerst
den Einheitsordner zuschneidest. Keine Änderung an Regeldateien, Werkzeugen, Prompts, Profilen oder Einheitsordnern
anderer Läufe.

## Zuschnitt (nur wenn dein Auftrag „Zuschnitt ja“ sagt und `bank/vorrat/<eintrag>-e<einheit>/` fehlt)
Vorbild `bank/vorrat/funktionsklassen-und-eigenschaften-e2/` (abschnitte.txt, abschnitte.csv, typen.csv, merkmale.csv;
Format in `bank/vorrat/README.md`); anlegen mit `python3 werkzeuge/vorrat-einheit.py --eintrag … --einheit …` (mit
`--abschnitte`, wenn der Katalog keine Abschnittstabelle für die Einheit hat), dann abschnitte.csv (Name, Kette). Quelle
allein der Katalog `mathe-nachhilfe/katalog/<eintrag>.md` (Lerneinheit, „Typen je Lerneinheit“, Kette für schwache
Schüler, Typische Fehler): Zone `<X><n>-0`, dann ein Abschnitt je Verfahren oder enger Gruppe in der Folge des Katalogs.
Keine Aufgaben. Danach `python3 werkzeuge/unterlage.py … --aus /tmp/u-<lauf>` einmal: jede Rubrik gefüllt oder „keine“.
Commit des Einheitsordners vor dem ersten Blatt. „erste zwei/drei/vier“ im Auftrag meint die ersten Abschnitte nach der
Zone in deinem Zuschnitt.

## Blatt
- Zielordner `bau/vorrat-breite/<eintrag>-e<einheit>/<abschnitt klein>-k<klasse>/`; der Ordnername ist der Kurzname in den
  ids (`<eintrag>-e<einheit>-<ordnername>-NNN`).
- Lies vorher einmal ganz das Gruppenprofil `bank/vorrat/profile/<profil>.md` und nutze es wie eine Angabe der Bestellung
  (alltagsblatt.md § 2). Bestellung: Eintrag, Einheit, Abschnitt, Klasse, Schulform aus dem Auftrag, Buch laut Profil.
- Unterlage: `python3 werkzeuge/unterlage.py <eintrag> <einheit> <abschnitt> --klasse <k> --schulform <s> --aus <ziel>`.
- Befolge alltagsblatt.md genau (Ablauf § 6, Ausgabe § 5). Kein „Das kennst du schon“, außer es ist der erste Abschnitt
  einer Einheit; keine Wiederholung am Ende.
- Prüfen: `python3 werkzeuge/alltagsblatt-pruef.py <ziel>` bis 0 HALT, ohne Schalter. Die Warnungen W1–W7 (neu 26.10.,
  Kopf des Skripts) sind Handwerk nach geltenden Regeln aus den Kommentaren des Lehrers: jede beheben oder im Bericht
  begründen. Alle übrigen Warnungen prüfst du und entscheidest.
- Rechne jede Lösung mit sympy nach (Feld `pruef`), auch Sachaufgaben.
- Zeiten in `zeiten.txt` wie in § 6; Richtung je Blatt 20 min. Blätter nacheinander, das nächste erst nach dem Commit des
  vorigen. Commit nach jedem Blatt: Nachricht „Vorrat v3 <lauf>: <eintrag> <abschnitt> k<klasse>“.

## Grenzen
Harte Grenze für den ganzen Lauf: 2 h ab Start (`date -u` als erste Zeile in `bau/vorrat-breite/zeiten-<lauf>.txt`, am
Ende eine zweite). Was dann nicht fertig ist, committen und melden. Hält ein Werkzeug ohne Schuld deiner Daten an:
Werkzeug nicht ändern, im Bericht nennen. Nicht lesen: andere Blätter unter `bau/` (auch nicht frühere Abschnitte deiner
Einheit), `aufgabenbank-privat/`, den alten Prompt, andere Profile.

## Antwort an den Chat
Höchstens 8 Zeilen: letzter Commit; je Blatt Ordner · Prüfzeile (HALT/Warnungen, welche W offen mit Grund) · Seiten ·
Teilaufgaben · Bauzeit; was du aus dem Profil genutzt hast (eine Zeile); Unsicheres.
