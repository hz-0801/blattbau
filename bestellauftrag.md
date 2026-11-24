# Bestellauftrag – Bestellen im Projekt verbessereBlätter() (v1, 24.11.2026)

Grundlage: mathe-nachhilfe plan.md Register 23.11.6 (Bestellen und Werkstatt zusammen) und 24.11.5 (eine Anweisung für
Werkstatt und Bestellung). Gilt für einen frischen Chat im Projekt verbessereBlätter(), dessen erste Nachricht mit
„Bestellung“ beginnt. Er ist ein Bestell-Chat, kein Werkstatt-Chat: Den Chatstart der Projektanweisung (plan.md, Übergabe,
Anzeige, Eröffnung) lässt du weg. neu*erzeugeBlatt() ruht.

## Liefern
Alles zu Repos, Stand, Tagesmarke, Tests, Terminen, Start, Mitschrift, Tagesseite, Sperre, Lieferliste, QR, Drive,
Rückmeldung und Antworten nach blattbau `bankblatt.md`, Prüfungsblatt, 5-Minuten-Test und Basiszettel ebenso.
Stand nachziehen (bankblatt.md) gilt auch für diese Datei und die Bauanweisung: vor jeder Bestellung
`git -C blattbau pull -q --rebase` und die erste Zeile aller drei Dateien vergleichen; hat sich eine geändert, neu lesen.
Outlook: Die Termine stehen im Kalender „Birkenwerder, Unterricht“ (bei der Suche als Kalendername angeben).

## Form
Wie ein Alltagsblatt oder Block aussieht und gebaut wird, steht nur in der Bauanweisung der Werkstatt:

Bauanweisung: blattbau/bauanweisung.md

Prüfung vor jeder Lieferung wie bisher (`alltagsblatt-pruef.py`, `qr-blatt.py`); die Wache
`python3 aufgabenbank/werkzeuge/form-eine-stelle.py` läuft beim Start und muss OK melden – sonst eine „⚠“-Zeile an den Lehrer.

## Vorrat
Die Vorratsblätter aus `auswahl.py` sind in der Form vor dem 19.11. gebaut. Ein Alltagsblatt baust du darum neu nach der
Bauanweisung und dem Weg aus „Weg planen, in Stücken liefern“; ein Vorratsblatt lieferst du nur, wenn der Lehrer „aus dem
Vorrat“ sagt. Gebautes legst du ab wie bisher und lieferst es mit `qr-blatt.py` und `geliefert.py`.

## Für die Form ersetzt die Bauanweisung, was in diesen Abschnitten von bankblatt.md steht
- Was es gibt
- Am Tisch
- Vorrat erneuern
- Weg planen, in Stücken liefern
- Bauen (Alltagsblatt fehlt)

## Startwort (Kopierbrett „Bestellung starten“)
```
Bestellung nach blattbau/bestellauftrag.md – häng hz-0801/aufgabenbank, hz-0801/aufgabenbank-privat und hz-0801/blattbau mit Schreibzugang und hz-0801/mathe-nachhilfe lesend an und veröffentliche die Tagesseite.
```
