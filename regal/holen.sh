#!/bin/sh
# Regal: legt die Repos einer Regalfassung als Arbeitsbäume auf den eingefrorenen Commits an.
# Aufruf: sh holen.sh <fassung> <ziel>   (z. B. sh holen.sh kapitel-ballon4 /home/claude/regal-b4)
# Quelle der Commits: <fassung>/stand.txt. Die Repos liegen als Klone neben blattbau (/home/claude/<repo>).
set -e
hier=$(cd "$(dirname "$0")" && pwd)
fassung=$1; ziel=$2
[ -f "$hier/$fassung/stand.txt" ] || { echo "HALT: $fassung/stand.txt fehlt"; exit 1; }
[ -n "$ziel" ] && [ ! -e "$ziel" ] || { echo "HALT: Ziel fehlt oder ist belegt: $ziel"; exit 1; }
wurzel=$(dirname "$(dirname "$hier")")
mkdir -p "$ziel"
grep -v '^#' "$hier/$fassung/stand.txt" | while read repo commit; do
  [ -z "$repo" ] && continue
  git -C "$wurzel/$repo" cat-file -e "$commit^{commit}" 2>/dev/null || git -C "$wurzel/$repo" fetch -q --depth=1 origin "$commit"
  git -C "$wurzel/$repo" worktree add -q --detach "$ziel/$repo" "$commit"
  echo "$repo $(git -C "$ziel/$repo" log -1 --format='%h %ad' --date=short)"
done
# Gegenprobe: die eingefrorenen Dateien müssen dem Stand entsprechen, sonst HALT.
for f in "$hier/$fassung"/*.md "$hier/$fassung"/*.txt; do
  n=$(basename "$f"); [ "$n" = stand.txt ] || [ "$n" = README.md ] && continue
  t=$(find "$ziel" -name "$n" -path '*kapitel-lgs-b4-2026-10-27*' -o -name "$n" -path '*auftraege*' -o -name "$n" -path "$ziel/blattbau/$n" | head -1)
  [ -z "$t" ] && { echo "Hinweis: $n im Stand nicht gefunden (nur im Regal)"; continue; }
  cmp -s "$f" "$t" && echo "gleich: $n" || { echo "HALT: $n weicht vom Stand ab"; exit 1; }
done
