# -*- coding: utf-8 -*-
"""Gegenprobe zum Probeblatt der Vorlage (seit Stufe 6).

Vergleicht die dokumentierten Bausteine der Anleitung mit den Namenszeilen (\\pbz{...}, \\pbzn{...}, \\pbfig{...}{...}{...}) in
referenz/probeblatt.tex und meldet Zahl, Fehlende, Überzählige, Doppelte und die Reihenfolge.

Baustein = ein öffentlicher Name aus mathblatt.sty (Befehl oder Umgebung, nicht mb…), der in einem
Code-Block der Anleitung steht oder im Fließtext in `…` genannt ist. Reihenfolge = erste Nennung in
einem Code-Block, für nur im Fließtext genannte Namen die erste Nennung dort.
Umgebungen heißen in beiden Listen =name (im Probeblatt \\pbz{=ksys}).

Aufruf aus dem Ordner blattbau:  python referenz/probeblatt-pruef.py
Ausgabe zusätzlich: Zahl der Zeilen mit → im Kopfteil (erster Code-Block, Grundgerüst).
Rückgabewert 1, wenn ein Baustein fehlt, überzählig oder doppelt ist.
"""
import os, re, sys

HIER = os.path.dirname(os.path.abspath(__file__))
WURZEL = os.path.dirname(HIER)
STY = os.path.join(WURZEL, 'mathblatt.sty')
ANL = os.path.join(WURZEL, 'Anleitung_mathblatt.md')
PB = os.path.join(HIER, 'probeblatt.tex')
KEIN_BAUSTEIN = {'x'}          # \x ist die Variable in \funktion, kein Baustein


def lies(p):
    with open(p, encoding='utf-8') as f:
        return f.read()


def bausteine_anleitung():
    sty = lies(STY)
    anl = lies(ANL)
    befehle = set(re.findall(
        r'\\(?:newcommand|renewcommand|providecommand|NewDocumentCommand|RenewDocumentCommand)\*?\{?\\([A-Za-z]+)',
        sty)) | set(re.findall(r'\\def\\([A-Za-z]+)', sty))
    befehle = {b for b in befehle if not b.startswith('mb') and not b.startswith('end')} - KEIN_BAUSTEIN
    umgebungen = set(re.findall(r'\\newenvironment\{([A-Za-z0-9]+)\}', sty))
    if re.search(r'\\def\\endbeispiel', sty):
        umgebungen.add('beispiel')
    pos = {}
    # Code-Blöcke
    for m in re.finditer(r'```\n(.*?)```', anl, re.S):
        for n in re.finditer(r'\\begin\{([A-Za-z0-9]+)\}|\\([A-Za-z]+)', m.group(1)):
            name = ('=' + n.group(1)) if n.group(1) else n.group(2)
            if (n.group(1) and n.group(1) in umgebungen) or (n.group(2) and n.group(2) in befehle):
                pos.setdefault(name, (0, m.start(1) + n.start()))
    # Fließtext: `\name` außerhalb der Code-Blöcke, nur Namen, die kein Code-Block nennt
    ohne_code = re.sub(r'```\n.*?```', lambda m: ' ' * len(m.group(0)), anl, flags=re.S)
    for m in re.finditer(r'`[^`\n]*`', ohne_code):
        for n in re.finditer(r'\\([A-Za-z]+)', m.group(0)):
            name = n.group(1)
            if name in befehle and name not in pos:
                pos[name] = (1, m.start())
    # Reihenfolge: Code-Nennung; Fließtext-Namen an ihrer Stelle im Text einsortiert
    return [k for k, _ in sorted(pos.items(), key=lambda kv: kv[1][1])]


def kopfteil_pfeile():
    anl = lies(ANL)
    kopf = re.search(r'```\n(.*?)```', anl, re.S).group(1)
    return [z for z in kopf.split('\n') if '→' in z]


def randnotizen():
    t = lies(PB)
    t = '\n'.join(z.split('%')[0] if not z.lstrip().startswith('\\newcommand') else '' for z in t.split('\n'))
    namen = []
    # \pbz{namen}, \pbzn{namen} und \pbfig{breite}{namen}{grafik}
    for m in re.finditer(r'\\pbzn?\{([^{}]*)\}|\\pbfig\{[^{}]*\}\{([^{}]*)\}', t):
        feld = m.group(1) if m.group(1) is not None else m.group(2)
        namen += [n.strip() for n in feld.split(',') if n.strip()]
    return namen


def main():
    soll = bausteine_anleitung()
    ist = randnotizen()
    pf = kopfteil_pfeile()
    print('Bausteine der Anleitung:      %d' % len(soll))
    print('Randnotizen im Probeblatt:    %d' % len(ist))
    print('Zeilen mit → im Kopfteil:     %d' % len(pf))
    fehlt = [n for n in soll if n not in ist]
    zuviel = [n for n in ist if n not in soll]
    doppelt = sorted({n for n in ist if ist.count(n) > 1})
    print('fehlen im Probeblatt:         %s' % (' '.join(fehlt) or '–'))
    print('nicht in der Anleitung:       %s' % (' '.join(zuviel) or '–'))
    print('doppelt im Probeblatt:        %s' % (' '.join(doppelt) or '–'))
    # Reihenfolge: Namen, die im Probeblatt vor einem Namen stehen, der in der Anleitung früher kommt
    rang = {n: i for i, n in enumerate(soll)}
    folge = [rang[n] for n in ist if n in rang]
    aus = [ist[i] for i in range(1, len(folge)) if folge[i] < max(folge[:i])] if folge else []
    print('außer der Reihe (früher in der Anleitung, später im Probeblatt): %s' % (' '.join(aus) or '–'))
    # Die →-Zeilen stehen nur im Kopfteil (Grundgerüst); die übrigen Abschnitte der Anleitung
    # führen ihre Bausteine in Code-Blöcken ohne →. Welche Bausteine keine →-Zeile haben:
    mit_pfeil = set()
    for z in pf:
        for n in re.finditer(r'\\begin\{([A-Za-z0-9]+)\}|\\([A-Za-z]+)', z):
            mit_pfeil.add(('=' + n.group(1)) if n.group(1) else n.group(2))
    ohne = [n for n in soll if n not in mit_pfeil]
    print('Bausteine mit →-Zeile im Kopfteil: %d, ohne: %d' % (len(soll) - len(ohne), len(ohne)))
    if '-v' in sys.argv:
        print('ohne →-Zeile: ' + ' '.join(ohne))
    if '-v' in sys.argv:
        for i, n in enumerate(soll, 1):
            print('%3d %s' % (i, n))
    return 1 if (fehlt or zuviel or doppelt) else 0


if __name__ == '__main__':
    sys.exit(main())
