# blattbau

Prompts und LaTeX-Vorlage, die aus den Katalogen (Repo `mathe-nachhilfe`) oder ohne
Katalog Arbeitsblätter bauen. Ausgelagert am 19.09.2026; davor lag alles flach im
Repo `mathe-nachhilfe`.

- `unterrichtsblatt.md` – Lernblatt und Fokus aus dem Themenkatalog (`mathe-nachhilfe/katalog/`, Abruf per Raw-URL); ohne Katalog als Rückfall. Unterricht, Klassenarbeiten, Oberstufe.
- `pruefungsblatt.md` – P10-Hefte aus dem msa-Katalog. Lädt die Kataloge per Abruf aus `mathe-nachhilfe/msa/`.
- `mathblatt.sty`, `Anleitung_mathblatt.md` – die LaTeX-Vorlage und ihre Anleitung. Beide Prompts laden sie per Abruf aus diesem Repo. Stufe 5 (Version 2026-09-27a) führt die Bausteine, die sich die Blattsitzungen des Testlaufs vom 25.09.2026 noch selbst gebaut hatten: `\zweigzeile`, Sprungziel am `\einheitenkopf`, `\verzeichniszeile` mit `\verz`, die Umgebung `abhakseite` mit `\abhak` (dazu `\abhakauto`), `\streifenfeld` und die Schwach-Bausteine `\swz`, `\swa`, `\swb`, `\swfrage`; im `gleichungsraster` steht jetzt auch unter der letzten Schreibzeile Platz.
- `CHANGELOG.md` – Versionsgeschichte des Unterrichtsblatt-Prompts und der Vorlage.
- `bericht-vorlage-stufe5-2026-09-27.md` – Bericht zum Umbau der Vorlage auf Stufe 5 (Bausteine aus dem Testlauf vom 25.09.2026, Tiefe im `gleichungsraster`); Auftrag und Standdatei liegen unter `archiv/`.
- `Bewertung_Masterprompt_v3-34.md`, `Testauswertung_Masterprompt_Mathe_2026-09-07.md`, `Testauswertung_Masterprompt_Mathe_2026-09-08.md`, `Testauswertung_2026-09-22.md` – Werkstattzettel aus dem Testzyklus, eingefroren.

Die Heft-Phase ist in `mathe-nachhilfe/blatt-konzept.md` geregelt; bei Widerspruch zum Prüfungsblatt-Prompt gilt sie.

**Beim Anlegen des Repos prüfen:** Die Abruf-URLs in `unterrichtsblatt.md` (Abschnitt 1.2 und 4.5) und
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

- Die Kopfzeile von `pruefungsblatt.md` (Zeile 2) nennt als Masterfassung noch „Repo
  hz-0801/mathe-nachhilfe". Seit der Auslagerung am 19.09.2026 liegt der Prompt in diesem
  Repo (`hz-0801/blattbau`). Die Zeile wird erst im Katalogumbau angepasst, nicht vorher.
