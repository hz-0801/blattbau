# Runde 26.10.2026 abends – gemeinsame Regeln aller Läufe (Auswahl au, Satz sz, Prüfskript ps, Vorrat v3*)

Anlass: mathe-nachhilfe plan.md § 4 Jetzt 0/1, Register 26.10.4 (Bestellung holt aus dem Vorrat) und 26.10.5 (Vorrat vor
Bereitstellung); Lehrer 26.10. „go“. Ziel des Projekts (plan.md § 1): brauchbare Alltagsblätter, die der Lehrer ohne
Nachbessern an den Tisch legt.

## Arbeitsort
- Eigener Klon: `/home/claude/klone/<lauf>/` mit `aufgabenbank`, `mathe-nachhilfe`, `blattbau`, `aufgabenbank-privat`
  nebeneinander (schon angelegt, Remote = GitHub). Schreib nur in die Repos, die dein Auftrag nennt; die anderen nur lesen.
- Vorher einmal `python3 -c "import sympy"`; scheitert es: `pip install -q --break-system-packages sympy`.
- Nicht lesen: `archiv/`, `eingang/`, `mappen/` und alte Läufe unter `bau/`, außer dein Auftrag nennt sie; andere Klone.

## Commit
- Commit nach jedem Teilschritt; vor dem Push `git pull --rebase`, Push auf origin main. „429“ oder „too many concurrent“:
  15 s warten, höchstens dreimal. Nachricht „<lauf>: <was>“, am Ende genau diese zwei Zeilen:
  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01XCaP6Bf71k8Uou49UBiX2R
- Namen von Schülern nur in `aufgabenbank-privat`; überall sonst (Dateien, Ausgaben, Commits) die Nummer.
- Erzeugte Dateien (Kopfzeile oder Skript im Repo): die Quelle ändern, dann neu erzeugen.

## Nachweis
Die Wirkung zeigst du am Ergebnis (Neusatz, Zählung, Prüfskript), nicht nur an der geänderten Datei. Hält ein Werkzeug
an, ist das ein Befund, kein Hindernis zum Umgehen. Keine Änderung an Regeldateien (plan.md, allgemein.md, gemeinsam.md,
alltagsblatt.md, bank.md, Profile), außer dein Auftrag nennt sie.

## Zeit
Erste Zeile von `zeiten-<lauf>.txt` im Ordner deines Auftrags: `date -u` beim Start, am Ende eine zweite. Harte Grenze
steht im Auftrag; was dann nicht fertig ist, committen und melden.
