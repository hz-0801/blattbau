# Stand: Auftrag Vorlage Stufe 5

Auftrag: `auftrag-vorlage-stufe5.md`. Uhrzeiten aus `Get-Date` (Systemuhr
zeigt 26.09.2026; der Auftrag nennt die Namen mit 27.09.2026, sie bleiben
wie beauftragt). Ein Neustart liest diese Datei zuerst.

| Teil | Stand | Letzter fertiger Punkt | Commit | Zeit |
|---|---|---|---|---|
| 1 .gitattributes und Kompilierbasis | erledigt | 1.2 Basislauf, alle vierzehn Quelltexte | eaa74fc | 2026-09-26 04:05 |
| 2 Zweigzeile und Verzeichniszeile | erledigt | Gegenprobe: 14 von 14 Seitenzahlen gleich dem Basislauf, 43 von 43 Zweigzeilen direkt unter ihrem Kopf | „vorlage: zweigzeile, verzeichniszeile, einheitenkopf mit Ziel" | 2026-09-26 04:34 |
| 3 Abhakseite | erledigt | Gegenprobe: Abhakseite nirgends länger (Eingabe 1: 2 → 1 Seite), „Das kann ich" genau einmal je Gesamt-Blatt, im Fokus gar nicht; \abhakauto sammelt in allen vierzehn Quelltexten genau die Zeilen der Handliste | „vorlage: abhakseite" | 2026-09-26 05:26 |
| 4 gleichungsraster, streifenfeld, Schwach | erledigt | Gegenprobe: Eingabe 3 mit den Vorlagenbausteinen 32 Seiten (Auftrag: 32 ± 1); Probeblatt mit drei Reihen ohne Zusatzabstand, keine Linie berührt den Folgetext | „vorlage: gleichungsraster-Tiefe, streifenfeld, Schwach-Bausteine" | 2026-09-26 06:31 |
| 5 Versionszeile, Anleitung, CHANGELOG | erledigt | mathblatt.sty Zeile 1 „Stufe 5", Versionszeile 2026-09-27a je Baustein; Anleitung, CHANGELOG-Abschnitt Vorlage, README | „vorlage: Stufe 5, Anleitung, CHANGELOG" | 2026-09-26 06:58 |
| Abschluss | erledigt | Bericht `bericht-vorlage-stufe5-2026-09-27.md`, README-Zeile, Auftrag und Standdatei nach `archiv/` | „archiv: auftrag-vorlage-stufe5, Bericht" | 2026-09-26 07:12 |

## Basislauf (Teil 1.2)

Alle vierzehn Quelltexte, kompiliert im Scratchpad mit der Vorlage
2026-09-22h (zwei xelatex-Läufe je Quelltext).

| Kürzel | Quelltext | Seiten |
|---|---|---|
| t01 | testlauf 1-quadgl-9-os/gesamt.tex | 22 |
| t02 | testlauf 2-quadgl-9-gym/QuadratischeGlg_Gesamt.tex | 16 |
| t03 | testlauf 3-prozent-7-schwach/Prozentrechnung_Gesamt.tex | 32 |
| t04 | testlauf 4-linfkt-8-neu/gesamt.tex | 24 |
| t05 | testlauf 5-kreis-8-ausblick/Kreis_Gesamt.tex | 12 |
| t06 | testlauf 6-daten-7/Daten_Gesamt.tex | 18 |
| t07 | testlauf 7-nullstellen-fokus/QuadratischeFkt_Fokus_Nullstellen.tex | 7 |
| t08 | testlauf 8-potenz-10/gesamt.tex | 23 |
| t09 | testlauf 9-kurven-12-be/Kurvenuntersuchung_Gesamt.tex | 20 |
| t10 | testlauf 10-ka-terme-8-gym/TermeBinomischeFormeln_Gesamt.tex | 18 |
| b1 | blaetter/daten/2026-09-22/src/Daten_Gesamt.tex | 21 |
| b2 | blaetter/nullstellen/2026-09-22/src/gesamt.tex | 20 |
| b3 | blaetter/prozentrechnung/2026-09-22/src/gesamt.tex | 16 |
| b4 | blaetter/prozentrechnung/2026-09-24/src/fokus_a.tex | 4 |

Die zehn Testlauf-Werte stimmen mit der Spalte „Seiten Gesamt" in
`bericht-testlauf-2026-09-25.md` überein.

## Offene Punkte

- b1, b2, b3 tragen ein eigenes `eigene.sty`, dessen Makros seit der Stufe 4
  in der Vorlage stehen; mit der heutigen Vorlage bricht xelatex mit
  „already defined" ab. Für den Basislauf ist im Scratchpad in der Kopie
  `\newcommand`/`\NewDocumentCommand` zu `\providecommand`/
  `\ProvideDocumentCommand` und `\newenvironment{dreisatz}` zu
  `\renewenvironment{dreisatz}` geändert; damit gewinnt die Vorlage, und
  die Aufrufe laufen auf die Vorlagennamen. Kein Eingriff im Repo
  mathe-nachhilfe.
