# blattbau

> **Einstieg (19.10.2026).** Für Blätter, Bank und Katalog gelten diese
> Dateien, in dieser Rangfolge: `mathe-nachhilfe/plan.md` (Ziel, Linien,
> Offenes, Register der Entscheidungen) → `mathe-nachhilfe/pruefung.md`
> (Sorte Prüfung; P10-Kapitelblatt) →
> `mathe-nachhilfe/fhr/loesung/auftrag-kurvendiskussion.md` (Lösungen
> Sek II) → `mathe-nachhilfe/gemeinsam.md` (Handwerk) → aufgabenbank
> `bank.md` (Zeilenform) → `mathe-nachhilfe/begriffe.md` (Wörter).
> aufgabenbank `bau/bauauftrag.md` ruht bis zum Lernblatt (plan.md
> 18.10. q). Betrieb: `blattbau/bankblatt.md`. Ein Chat führt alles
> (plan.md 19.10. a); eine Übergabe: `mathe-nachhilfe/uebergabe.md`. Alles
> andere ist Beleg oder Archiv.

Prompts und LaTeX-Vorlage, die aus den Katalogen (Repo `mathe-nachhilfe`) oder ohne
Katalog Arbeitsblätter bauen. Ausgelagert am 19.09.2026; davor lag alles flach im
Repo `mathe-nachhilfe`.

- `unterrichtsblatt.md` – alter Prompt (Lernblatt und Fokus aus dem Themenkatalog), **nicht mehr aktiv**; nur Steinbruch. Bleibt in der Wurzel, weil `aufgabenbank/werkzeuge/mappe.py` ihn als Maßstab per Raw-URL liest; erst nach Umbau dieses Skripts ins Archiv.
- `bankblatt.md` – Bank-Prompt v9 (20.10.2026: Kapitelblatt bestellen, Folgeangebot nach der Lieferung; v8, v7, v6 in archiv/): Projektanweisung für neu*erzeugeBlatt(); je Bestellung ruft der Chat aufgabenbank `werkzeuge/bestellen.py` (Rückfragen als Knöpfe, Zeile „Du bekommst: …“, `--ausfuehren` setzt und schreibt die Lieferzeile) und baut nur ein fehlendes Lernblatt nach aufgabenbank `bau/bauauftrag.md`.
- `alt/erzeugePruefungsblatt.md`, `alt/erzeugeUnterrichtsblatt.md` – Wortlaut der beiden alt*-Projekte (Stand 20.10.2026, vom Lehrer übergeben), nur zum Nachlesen; die alt*-Projekte bleiben in Gebrauch, bis neu*erzeugeBlatt() Alltagsblatt und Sek II liefert.
- `archiv/pruefungsblatt.md` – alter Prompt für P10-Hefte aus dem msa-Katalog; seit 19.10.2026 im Archiv, **nicht mehr aktiv**; nur Steinbruch.
- `mathblatt.sty`, `Anleitung_mathblatt.md` – die LaTeX-Vorlage und ihre Anleitung. Der Bank-Prompt `bankblatt.md` lädt sie per Abruf aus diesem Repo (die beiden alten Prompts taten es auch). Stufe 5 (Version 2026-09-27a) führt die Bausteine, die sich die Blattsitzungen des Testlaufs vom 25.09.2026 noch selbst gebaut hatten: `\zweigzeile`, Sprungziel am `\einheitenkopf`, `\verzeichniszeile` mit `\verz`, die Umgebung `abhakseite` mit `\abhak` (dazu `\abhakauto`), `\streifenfeld` und die Schwach-Bausteine `\swz`, `\swa`, `\swb`, `\swfrage`; im `gleichungsraster` steht jetzt auch unter der letzten Schreibzeile Platz. Stufe 6 (Version 2026-09-28a) setzt die Lesebefunde des Lehrers vom 26.09.2026 um: `\anweisung` zwischen Teilaufgaben, `\rechenplatz` statt gedrucktem Beispiel, `\verfahren` als Verfahrensüberschrift, Kopfzeile mit der Einheit, Umgebung `beispiel`, `\streifenleer[0]` und drei Reparaturen an Zahlenstrahl und Streifen.
- `referenz/probeblatt.tex`, `referenz/probeblatt.pdf` – Probeblatt der Vorlage (seit Stufe 6): jeder Baustein der Anleitung genau einmal mit seinem Namen; Lesestück für den Lehrer und Kompilierprobe jeder Stufe, `referenz/probeblatt-pruef.py` gleicht es mit der Anleitung ab. Die übrigen Dateien in `referenz/` sind Vergleichsblätter von v3.35.
- `CHANGELOG.md` – Versionsgeschichte des Unterrichtsblatt-Prompts und der Vorlage.
- `bericht-vorlage-stufe5-2026-09-27.md` – Bericht zum Umbau der Vorlage auf Stufe 5 (Bausteine aus dem Testlauf vom 25.09.2026, Tiefe im `gleichungsraster`); Auftrag und Standdatei liegen unter `archiv/`.
- `bericht-vorlage-stufe6-2026-09-28.md` – Bericht zur Stufe 6 (sechs Bausteine aus den Lesebefunden vom 26.09.2026, Streifen-Reparaturen, Probeblatt); Auftrag und Standdatei liegen unter `archiv/`.
- `Bewertung_Masterprompt_v3-34.md`, `Testauswertung_Masterprompt_Mathe_2026-09-07.md`, `Testauswertung_Masterprompt_Mathe_2026-09-08.md`, `Testauswertung_2026-09-22.md` – Werkstattzettel aus dem Testzyklus, eingefroren.

**Beim Anlegen des Repos prüfen:** Die Abruf-URLs in `unterrichtsblatt.md` (Abschnitt 1.2 und 4.5) und
`archiv/pruefungsblatt.md` (Zeilen 75 und 219) nehmen an, dass dieses Repo `hz-0801/blattbau`
heißt und der Branch `main`. Heißt es anders, dort ändern.

**Stand vor dem Katalogumbau:** Der Zustand vom 19.09.2026 (`unterrichtsblatt.md` v3.35,
`pruefungsblatt.md` v0.15) ist unter dem Tag `v3.35-vor-katalogumbau` dauerhaft abrufbar.
Ein Rückschritt besteht darin, die Datei von dort zu kopieren und zu committen:

```
https://raw.githubusercontent.com/hz-0801/blattbau/v3.35-vor-katalogumbau/unterrichtsblatt.md
https://raw.githubusercontent.com/hz-0801/blattbau/v3.35-vor-katalogumbau/pruefungsblatt.md
```

**Bekannte Abweichungen:**

- Die Kopfzeile von `archiv/pruefungsblatt.md` (Zeile 2) nennt als Masterfassung noch „Repo
  hz-0801/mathe-nachhilfe". Seit der Auslagerung am 19.09.2026 liegt der Prompt in diesem
  Repo (`hz-0801/blattbau`). Die Zeile wird erst im Katalogumbau angepasst, nicht vorher.
