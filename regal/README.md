# Regal – eingefrorene Bauweisen, die belegt gute Blätter lieferten

Angelegt 29.10.2026 (Lehrer 29.10. „ja“ auf Weg A′; mathe-nachhilfe plan.md Register 29.10.1, Jetzt 1).

**Warum.** Seit dem 21.10. wurde viermal der Bauweg gewechselt und immer an derselben Bauanweisung weitergeschrieben; dabei
verwischte, was schon einmal gut war (Lehrer 28.10.: „immer an demselben bauplan arbeiten verwischt doch das, was vielleicht
schon mal gut war“). Das Regal hält jede belegte Fassung so fest, dass sie sich jederzeit genau so wieder aufrufen lässt.

**Beispiel.** „Bau nach Regal kapitel-ballon4: Quadratische Gleichungen, Kl. 9 OS / Kl. 9 Gym“ – der Lauf holt mit
`sh holen.sh kapitel-ballon4 <ziel>` alle Repos auf dem eingefrorenen Stand und baut nach dem Auftrag dieser Fassung, egal was
seitdem an alltagsblatt.md oder den Werkzeugen geändert wurde.

**Grenze.** Eine Regalfassung wird nie geändert. Eine bessere Fassung kommt als neuer Ordner daneben, erst nach einem
Blindvergleich, den sie gewonnen hat. Ins Regal kommt nur, was ein Urteil des Lehrers am Blatt trägt; das Abnahmewort je Blatt
steht in mathe-nachhilfe `abnahme.csv` (Spalten `fassung` = Ordnername hier, `bauweise` = einzeln/serie).

## Fassungen

| Ordner | baut | Beleg |
|---|---|---|
| `abschnittsblatt-v1.2a-einzeln/` | ein Abschnittsblatt (ein Abschnitt einer Lerneinheit), ein Blatt je Lauf | Lehrer blind 6 : 0 gegen dieselben Abschnitte in Serie (aufgabenbank bau/einzelbau-2026-10-26/README.md); v1 einzeln 2 : 0 gegen den alten Prompt (25.10.) |
| `kapitel-ballon4/` | ein Kapitel: eine Lerneinheit in Teilen, je Teil etwa eine Sitzung, mit Verzeichnis | Kapitel LGS Kl. 9 OS / Kl. 8 Gym, Lehrer 29.10. „nicht schlecht“ (35 Kommentare zum Stand n5 in aufgabenbank bau/kapitel-lgs-b4-2026-10-27/kommentare-2026-10-28/); Stand n6 = 31 S. |

Der alte Prompt (v4.4) liegt unverändert in `../alt/erzeugeUnterrichtsblatt.md` und bleibt Gegner und Quelle der Messlatte.

## Aufrufen

1. `sh holen.sh <fassung> <ziel>` legt aufgabenbank, blattbau und mathe-nachhilfe als Arbeitsbäume auf den Commits aus
   `<fassung>/stand.txt` an und prüft, dass die Dateien im Regal dem Stand gleichen (sonst HALT).
2. Der Lauf arbeitet im Arbeitsbaum, schreibt sein Blatt aber in einen eigenen Klon von aufgabenbank auf dem neuesten Stand
   (Ordner `bau/regal-<fassung>-<datum>/…`), damit nichts auf einem alten Commit landet.
3. Was je Fassung fest und was je Bestellung neu ist, steht in ihrem README.
