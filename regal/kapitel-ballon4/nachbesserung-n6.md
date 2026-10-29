# Nachbesserung n6 – Kapitel LGS Ballon 4: Musterweg und Größe des Schritts (28.10.2026, 10:40–10:56 UTC)

Grundlage: Auftrag n6, Register 28.10.1–2, allgemein.md 2.3a (11) und 2.4b, alltagsblatt.md 3.3a und § 5. Geändert nur in
bau/teil1–5.py und bau/hilfe.py (neu: `Teil.mw` für den Musterweg als Daten, `Teil.zusammen(a, b)` legt Nr. b als
Teilaufgaben an Nr. a und rückt die späteren Nummern auf); erzeugt, `alltagsblatt-pruef.py --weg-a`: alle fünf Teile 0 HALT.
Formstopp gehalten: keine Aufgabe neu oder gestrichen, Reihenfolge gleich.

## Kästen je Teil (vorher: Tafelbild als tex; nachher: Musterweg)

| Teil | vorher | nachher voll | nachher Erweiterung (nur der neue Schritt, Kern daneben) |
|---|---|---|---|
| 1 | 2 Tafelbilder | Zeichnen und ablesen (Skizze rechts); Lösungen zählen (die drei Bildchen rechts) | – |
| 2 | 2 | Gleichsetzen | Vorher umstellen → weiter wie Gleichsetzen |
| 3 | 2 | Einsetzen | Vorher umstellen → weiter wie Einsetzen |
| 4 | 2 | Addieren | Vorher vervielfachen: II′ = 3 · II, darunter „oder“ beide (I′ = 5 · I, II′ = (−2) · II) → weiter wie Addieren |
| 5 | 3 | Aufstellen; Sachaufgabe lösen (Lösen eine Zeile „z. B. einsetzen“); Gleichung als Satz lesen | – |

Gleiche Schritte heißen gleich: „I = II:“, „I in II:“, „I + II:“, „in I:“/„in II:“, „I nach $y$:“, Vermerk „nach $x$
auflösen“. Rückeinsetzen steht als eine Zeile mit Ergebnis (y = 8), weil der Kern daneben in halber Breite sonst über den
Rand lief. Teil 5 Block 2 bleibt voll: der neue Schritt kommt danach (lösen, antworten), nicht davor (2.4b (2) passt nicht).

## Zusammengelegte Nummern (2.4b (1): nur ein kleiner Stolperstein, je Teilaufgabe einer)

- T1: 5 → 4c (erst nach y umstellen, dann zeichnen).
- T2: 4 → 3c–d (negatives x, Komma); 7 → 5c–d (Vorzahl vor y, beide umstellen).
- T3: 4 → 3c–e (x allein, Minus vor der Klammer, negatives x); 6 → 4c–d (II statt I umstellen, Vorzeichen).
- T4: 4 → 3c–d (x fällt weg, negative Zahlen); 6 → 4c–d (mal (−1), x statt y wegschaffen).
- T5: 4 → 3c–e (Unterschied, Vielfaches, Reihenfolge im Text).

## Verbliebene Stufung-Warnungen

Keine (vorher 8: T1 1, T2 2, T3 2, T4 2, T5 1).

## Seiten

kapitel.pdf **30 S. vorher, 31 S. nachher**: Teil 5 6 → 7 (der Musterweg „Gleichung als Satz lesen“ ist mit Kopf Geg./Ges.
eine Zeile und den Phasenabstand höher als das alte Tafelbild; 9b mit 5 Rechenzeilen rutscht auf S. 7 – Geg. schon in einer
Zeile, Vermerke gekürzt; Rechenzeilen nicht gekürzt, weil die Lösung 5 Schritte hat). Übrige gleich:
T1 5, T2 5, T3 5, T4 5. loesungen.pdf 7 → 7 S.

## Offen fürs Werkzeug (nicht umgangen)

- Kern daneben in 0,49 Breite ist eng: T3 Einsetzen ragt 21 pt über seine Spalte (Overfull, Bild S. 3 geprüft: innerhalb des
  Satzspiegels, berührt nichts). Vorschlag: vorrat-satz.py teilt die Breite nach Inhalt statt hälftig.
- Zeilen mit fremden Namen oder Text (m_I; „x = Preis …“) zählt H11 als „nicht nachrechenbar“: T1 Lösungen zählen 1 Zeile,
  T5 Aufstellen 2 Zeilen (Warnung, kein Fehler); alle übrigen Zeilen an `loesung` nachgerechnet.
