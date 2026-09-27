# Vorschlag: Bausteine für Sek II

Stand 2026-09-27. Grundlage: `hz-0801/aufgabenbank` auf 8c77e08 (2026-09-27), 43 Sek-II-Einträge (alle 70 Einträge ohne die 27 der Liste `SEK1` in `werkzeuge/befunde.py`), 6 880 Bankzeilen; Vorlage `mathblatt.sty` 2026-09-28a mit `Anleitung_mathblatt.md`. Entwurf: `vorschlag-bausteine-sek2.sty`, **nicht kompiliert** (kein LaTeX in der Sitzung), Prüfung im Code-Tab.

## Ergebnis in drei Sätzen

Von den sieben Wünschen aus dem Auftrag sind drei schon da (Integralfläche `\flaeche`, Verteilungen als Stäbe/Säulen `\binomialverteilung`/`\saeulenab`, Ebene im Schrägbild `\rebene`/`\rebenepar`); keine `stand.md` nennt Integralfläche, Balken oder Pfadwahrscheinlichkeiten als fehlend. Neu gebraucht werden elf Bausteine für neun Wünsche; der mit Abstand größte Umschreibposten ist die Matrix-Satzform (115 Zeilen) und – nur falls die Schreibweise umgestellt wird – der Spaltenvektor (rund 880 Zeilen). Der häufigste Wunsch überhaupt ist gar kein Vorlagenbaustein: `\binom`, `\int`, `\lim` & Co. sind LaTeX-Standard (amsmath lädt die Vorlage), sie fehlen nur in der Liste `STANDARD` des Prüfskripts.

## Tabelle Wunsch × Häufigkeit × Lösung

„Einträge“ = Zahl der Sek-II-Einträge, deren `stand.md` den Wunsch nennt (alle Abschnitte, nicht nur Befunde/Offene Punkte). Beispielzeile = eine Bankzeile, an der der Wunsch sichtbar wird.

| Nr | Wunsch | Einträge | Beispielzeile | Lösung | Signatur | Offene Fragen an den Lehrer |
|---|---|--:|---|---|---|---|
| 1 | Binomialkoeffizient (und `\sum`) | 7 | kombinatorik-e2-k1-s1-v1 | vorhanden (LaTeX-Standard) | `$\binom{4}{2}$`, `$\sum_{k=0}^{3}$` | Prüfskript `STANDARD` und `_bausteine.md` ergänzen – freigeben? |
| 2 | Integralzeichen `\int` | 8 | flaecheninhalt-durch-integration-e3-k2-s4-v1 | vorhanden (LaTeX-Standard) | `$\int_0^2 f(x)\,\mathrm{d}x$` | Einheitliche Schreibweise festlegen (`\mathrm{d}x` oder `dx`), dann Prüfskript |
| 3 | Grenzwert `\lim` | 6 | ableitung-und-aenderungsrate-e3-k1-s0-v3 | vorhanden (LaTeX-Standard) | `$\lim_{x \to \infty} f(x)$` | Bleibt der Pfeil als Schülerschreibweise, `\lim` nur ab E-Phase? |
| 4 | Weitere Standardbefehle `\ln`, `\tan`, `\max`, `\middle`, `\iff`, `\cos` | 9 | tangente-normale-schnittwinkel-e4-k1-s1-v1 | vorhanden (LaTeX-Standard) | `$\ln x$`, `$\tan^{-1}(2)$` | bank.md-Regel „sin, cos, ln als `\mathrm{…}`“ aufheben? |
| 5 | Schrägbild-Konvention, bezifferte Achsen, Ebene im Schrägbild | 2 | ebenen-e3-k2-s4-v2 | vorhanden (`ksys3`, `\rebene`, `\rebenepar`) | `\begin{ksys3}[xyz]\rebene{3}{6}{2}{E}\end{ksys3}` | V-003/V-004 in der Bank schließen (Konvention steht in der Anleitung, Abschnitt Koordinatensystem 3D) |
| 6 | Integralfläche | 0 | flaecheninhalt-durch-integration-e3-k2-s4-v1 | vorhanden (`\flaeche`, `\flaechezwischen`) | `\flaeche{0.5*\x^2+1}{0}{2}{A_1}` | – |
| 7 | Verteilung als Stab-/Säulendiagramm | 0 | binomialverteilung-e3-k4-s4-v2 | vorhanden (`\binomialverteilung`, `\saeulenab`, `\histogramm`) | `\binomialverteilung[markiere=5:12]{12}{0.35}` | Kumulierte Verteilung bleibt über `\saeulenab` mit gerundeten Werten – genügt das? |
| 8 | Matrix | 1 | matrizen-und-uebergangsprozesse-e1-k1-s1-v1 | **neu** | `\matrize{2,1;3,4}` | Bank umschreiben oder der Zusammenbau übersetzt `((a \| b), (c \| d))` (Z-039)? Prüfskript muss `\matrize` als Baustein kennen |
| 9 | Spaltenvektor | 1 | vektoren-und-rechenoperationen-e2-k2-s1-v3 | **neu** | `\spaltenvektor{2,2,1}` | Zeilentupel `(2 \| 2 \| 1)` wie im Merkkasten behalten oder auf Spalten umstellen? Wenn umstellen: überall oder nur bei Matrizen |
| 10 | Vektorpfeil im ebenen ksys | 1 | vektoren-und-rechenoperationen-e1-k3-s3-v2 | **neu** | `\vektor[pos]{x,y}{L}`, `\vektorab[pos]{x1,y1}{x2,y2}{L}` | – |
| 11 | Übergangs- und Verflechtungsdiagramm | 1 | matrizen-und-uebergangsprozesse-e4-k1-s1-v1 | **neu** | `\uebergangsdiagramm[r]{A,B}{A>A/0{,}9, A>B/0{,}1, …}`, `\verflechtungsdiagramm{R_1,R_2;Z_1,Z_2}{R_1>Z_1/2, …}` | Zustandsnamen als Wörter (Larve, Puppe) im Kreis oder Kürzel mit Legende? Ab vier Zuständen lesbar? |
| 12 | Baum mit drei Ästen je Knoten | 1 | zufallsexperimente-und-pfadregeln-e2-k1-s0-v2 | **neu** | `\baummehr{Stufe 1}{Liste; Liste; …}` | Reichen zwei Stufen, oder braucht es drei Stufen mit drei Ästen (27 Pfade)? |
| 13 | Pfadwahrscheinlichkeit am Pfadende | 0 | zufallsexperimente-und-pfadregeln-e6-k1-s1-v1 | **neu** (in `\baummehr`) | `K/0{,}4/0{,}12` als dritter Eintrag | Sollen Lösungsgrafiken sie tragen oder bleibt die Pfadregel im Lösungstext? |
| 14 | Graph der Verteilungsfunktion | 1 | normalverteilung-und-sigma-regeln-e3-k1-s1-v4 | **neu** | `\verteilungsfunktion[x]{mu}{sigma}{F}` (im ksys) | – |
| 15 | Vieleck im Schrägbild (Schnittfigur) | 2 | scharen-von-geraden-und-ebenen-e4-k1-s1-v1 | **neu** | `\rvieleck[pos]{P1; P2; P3}{L}` | Schnittfigur grau gefüllt (wie `\rebene`) oder nur Rand? |
| 16 | Koordinatensystem ohne Achsenzahlen | 1 | kenngroessen-von-verteilungen-e3-k1-s5-v1 | **neu** (Schlüssel) | `\begin{ksys}[…,ohnezahlen]` | – |
| 17 | Karofeld ohne Achsen, Figur ohne Achsen | 1 | funktionsklassen-und-eigenschaften-e6-k1-s6-v2 | **neu** (Umgebung) | `\begin{karofeld}[Schlüssel wie ksys] … \end{karofeld}` | Karo 5 mm (Heft) oder 8 mm (Vorlage) als Voreinstellung? |

Neue Bausteine: **11** – `\spaltenvektor`, `\matrize`, `\vektor`, `\vektorab`, `\verteilungsfunktion`, `\rvieleck`, `\baummehr`, `\uebergangsdiagramm`, `\verflechtungsdiagramm` (neun Befehle), die Umgebung `karofeld` und der ksys-Schlüssel `ohnezahlen`. Signaturen und je ein Beispielaufruf aus einer Bankzeile stehen im Kopfkommentar jedes Blocks der `.sty`.

Abgleich mit `befunde.md` (Liste „Bausteine, die Sek II braucht“, 37 Punkte): jeder Punkt fällt unter eine Zeile oben. Zusätzlich hier: skalarprodukt-und-winkel (Sachbilder e3 s3, s5 „würden eine Skizze mit `\rpyramide` oder `\rebene` stützen“) unter Nr. 5.

## Wo der Auftrag und die Bank auseinandergehen

- **Integralfläche, Balkenverteilung, Pfadwahrscheinlichkeiten** stehen in keiner `stand.md` als Wunsch. Die ersten beiden sind gebaut und in Gebrauch (`\flaeche` in 13 Zeilen, `\flaechezwischen` in 1, `\binomialverteilung` in 37, `\saeulenab` in 30). Pfadwerte am Baum fehlen der Vorlage tatsächlich; `\baummehr` nimmt sie mit, ein eigener Wunsch der Sitzungen ist es nicht.
- **„Schrägbild mit Ebene“** ist vorhanden. Was die Sitzungen vermissen, ist das **Vieleck** im Schrägbild (Schnittfiguren, Nr. 15) und der Beleg der Konvention in `_bausteine.md` der Bank – Letzteres ist Bankpflege, kein Makro.
- **Der häufigste Posten liegt im Prüfskript, nicht in der Vorlage** (Nr. 1–4, 22 verschiedene Einträge): die Befehle funktionieren in `mathblatt.sty` schon. Wer hier eine Vorlagenstufe plant, löst das Hauptproblem der Sek-II-Einträge nicht.

## Bankzeilen, die nach Einführung umgeschrieben werden müssten

„umschreiben“ = die Zeile trägt heute eine Ersatzform (Tupel, Pfeilliste, Worte, leere Grafik, Behelf), die der Baustein ersetzt. „ergänzen möglich“ = die Zeile ist richtig, bekäme aber eine bessere Grafik. Zählung per Suchmuster über `aufgabe`, `loesung`, `grafik`, `loesungsgrafik`; wo ein Muster unscharf ist, steht „Schätzung“.

| Baustein | Eintrag | umschreiben | ergänzen möglich | Was sich ändert |
|---|---|--:|--:|---|
| `\matrize` | matrizen-und-uebergangsprozesse | 115 | | `((a \| b), (c \| d))` → `\matrize{a,b;c,d}` |
| `\spaltenvektor` | matrizen-und-uebergangsprozesse | 46 | | Vektoren neben Matrizen, `v = (1 \| 2)` |
| `\spaltenvektor` (nur bei Umstellung, Schätzung) | vektoren-und-rechenoperationen 43, geraden 106, ebenen 95, punkte-und-strecken-im-koordinatensystem 87, orthogonalitaet 85, skalarprodukt-und-winkel 80, schnittmengen 69, abstaende 68, lagebeziehungen 54, scharen-von-geraden-und-ebenen 51, spiegelung 49, linearkombination-und-lineare-abhaengigkeit 37, flaecheninhalt-und-volumen-im-raum 14 | 838 | | Vektortupel nach `=`, `+`, `\cdot`, `\circ` oder nach `\vec`, „Richtungsvektor“ usw.; Punkte `A(…)` nicht gezählt |
| `\uebergangsdiagramm`, `\verflechtungsdiagramm` | matrizen-und-uebergangsprozesse | 11 | 3 | 6 Zeichenaufträge bekommen die Lösungsgrafik (e3-k1-s2-v2, e4-k1-s1-v1…v5), 5 Pfeillisten im Text werden Grafik (e3-k1-s2-v1, e4-k1-s2-v1…v3, e4-k2-s1-v1); 3 Ankreuzzeilen mit einem Pfeil (e3-k1-s0-v1, -v4, e4-k1-s0-v2) |
| `\vektorab` | vektoren-und-rechenoperationen | 2 | | e1-k3-s3-v1 (Pfeil in der Grafik), e1-k3-s3-v2 (Lösungsgrafik) |
| `\vektorab` | spiegelung | 2 | | e2-k1-s5-v1, -v2: Lösungsgrafik mit der Raute |
| `\rvieleck` | scharen-von-geraden-und-ebenen | 5 | | e4-k1-s1-v1…v5: Lösungsgrafik bisher leer |
| `\rvieleck` | spiegelung | 3 | | e3-k1-s3-v1…v3: Lösungsgrafik bisher leer |
| `\rvieleck` | schnittmengen | | 6 | e3-k1-s4-v1…v3, e3-k1-s5-v1…v3: Schnittfigur heute aus `\rgerade[0:1]`-Kanten |
| `\rvieleck` | punkte-und-strecken-im-koordinatensystem | | 4 | e5-k1-s8-v7…v10: Schnittvielecke ohne Grafik |
| `\verteilungsfunktion` | normalverteilung-und-sigma-regeln | 2 | | e3-k1-s1-v4, -v5: logistische Näherung (Fehler bis 0,01) |
| `ohnezahlen` | kenngroessen-von-verteilungen | 2 | | e3-k1-s5-v1, -v2: grafik leer, Graph „in Kästchen beschrieben“ |
| `ohnezahlen` | funktionsklassen-und-eigenschaften | 2 | | e6-k1-s10-v5, -v6: „Zeichnung ohne Skalen“ ohne Grafik |
| `karofeld` | funktionsklassen-und-eigenschaften | 8 | | e6-k1-s4-v1…v3 und e6-k1-s10-v1, -v2 (Zeichenfläche zusätzlich zu `\wertetabelleleer`), e6-k1-s6-v1…v3 (Graph ohne Achsen) |
| `\baummehr` | zufallsexperimente-und-pfadregeln | 0 | 14 | dreiwertige Stufen hat die Bank vermieden (Stand, Entscheidung 10); 14 Lösungsgrafiken mit Baum könnten Pfadwerte tragen |
| `\binom` (Prüfskript) | kombinatorik 42, binomialverteilung 32, hypergeometrische-verteilung 17, zufallsexperimente-und-pfadregeln 16, kenngroessen-von-verteilungen 1 | 108 | | „(n über k)“ mit `\text`, `pmatrix` in der Lösung, Fakultätenbruch |
| `\int` (Prüfskript) | stammfunktion-und-hauptsatz 66, flaecheninhalt-durch-integration 53, rekonstruktion-von-bestaenden 44, rotationsvolumen 41, uneigentliche-integrale 17, integrationsregeln 8, funktionsscharen-und-ortskurven 5, umkehrfunktion 4 | 238 | | 178 Zeilen „Integral von … bis … über …“, 60 Zeilen Unicode-∫ (rekonstruktion 44, uneigentliche 16) |
| `\lim`, `\ln`, `\tan` … | 6 bzw. 9 Einträge | nicht gezählt | | Pfeil- und Wortschreibweise ist nicht sicher per Muster zu finden; `\mathrm{ln}` sieht gesetzt fast gleich aus |

Summe ohne die Spaltenvektor-Umstellung und ohne Prüfskript-Posten: 198 Zeilen umschreiben (davon 115 Matrix-Satzform), 27 ergänzen möglich. Mit Spaltenvektor-Umstellung kommen rund 840 Zeilen hinzu, mit `\binom`/`\int` weitere 346.

## Was vor dem Einbau zu prüfen ist

Nicht kompiliert. Beim ersten Lauf im Code-Tab auf diese Stellen achten:

1. **expl3-Teile** (`\matrize`, `\spaltenvektor`, `\rvieleck`, `\baummehr`, beide Diagramme): Listen werden mit `\seq_set_split:Nnn` zerlegt; `0{,}5` bleibt ganz, weil das Komma in Klammern steht. Leere Einträge ergeben das Feld zum Eintragen.
2. **`\verteilungsfunktion`**: nutzt die pgf-Funktion `sign` und kappt bei |z| = 3,5, damit `exp` nicht überläuft. Rechnet pgf `sign` nicht, stattdessen `ifthenelse(\x<mu,-1,1)` einsetzen.
3. **`ohnezahlen`** hängt sich per `\apptocmd` an `\mbksysrechnen`; bei der Aufnahme in `mathblatt.sty` die eine Zeile direkt dort einbauen.
4. **Schleifen im Übergangsdiagramm** nutzen den TikZ-Stil `loop` (Bibliothek topaths, lädt TikZ selbst); Lage der Werte an Schleifen und gebogenen Pfeilen am Bild prüfen.
5. **Prüfskript**: jeder neue Baustein muss in `_bausteine.md` der Bank stehen, sonst lehnt `bank-pruef.py` die Zeilen ab (wie heute `\int`).
6. **Probeblatt**: je Baustein Namenszeile und Beispiel in `referenz/probeblatt.tex` nachtragen (Regel der Anleitung, Abschnitt Probeblatt).
