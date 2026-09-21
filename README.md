# blattbau

Prompts und LaTeX-Vorlage, die aus den Katalogen (Repo `mathe-nachhilfe`) oder ohne
Katalog Arbeitsblätter bauen. Ausgelagert am 19.09.2026; davor lag alles flach im
Repo `mathe-nachhilfe`.

- `unterrichtsblatt.md` – Arbeitsblätter zu Themen ohne Katalog (Unterricht, Klassenarbeiten, Oberstufe).
- `pruefungsblatt.md` – P10-Hefte aus dem msa-Katalog. Lädt die Kataloge per Abruf aus `mathe-nachhilfe/msa/`.
- `mathblatt.sty`, `Anleitung_mathblatt.md` – die LaTeX-Vorlage und ihre Anleitung. Beide Prompts laden sie per Abruf aus diesem Repo.
- `CHANGELOG.md` – Versionsgeschichte des Unterrichtsblatt-Prompts.
- `Bewertung_Masterprompt_v3-34.md`, `Testauswertung_Masterprompt_Mathe_2026-09-07.md`, `Testauswertung_Masterprompt_Mathe_2026-09-08.md` – Werkstattzettel aus dem Testzyklus, eingefroren.

Die Heft-Phase ist in `mathe-nachhilfe/blatt-konzept.md` geregelt; bei Widerspruch zum Prüfungsblatt-Prompt gilt sie.

**Beim Anlegen des Repos prüfen:** Die Abruf-URLs in `unterrichtsblatt.md` (Zeile 274) und
`pruefungsblatt.md` (Zeilen 75 und 219) nehmen an, dass dieses Repo `hz-0801/blattbau`
heißt und der Branch `main`. Heißt es anders, dort ändern.

**Stand vor dem Katalogumbau:** Der Zustand vom 19.09.2026 (`unterrichtsblatt.md` v3.35,
`pruefungsblatt.md` v0.15) ist unter dem Tag `v3.35-vor-katalogumbau` dauerhaft abrufbar.
Ein Rückschritt besteht darin, die Datei von dort zu kopieren und zu committen:

```
https://raw.githubusercontent.com/hz-0801/blattbau/v3.35-vor-katalogumbau/unterrichtsblatt.md
https://raw.githubusercontent.com/hz-0801/blattbau/v3.35-vor-katalogumbau/pruefungsblatt.md
```

**Bekannte Abweichungen:**

- Die Kopfzeilen von `unterrichtsblatt.md` und `pruefungsblatt.md` (jeweils Zeile 2) nennen
  als Masterfassung noch „Repo hz-0801/mathe-nachhilfe". Seit der Auslagerung am 19.09.2026
  liegen beide Prompts in diesem Repo (`hz-0801/blattbau`). Die Zeilen werden erst im
  Katalogumbau angepasst, nicht vorher.
