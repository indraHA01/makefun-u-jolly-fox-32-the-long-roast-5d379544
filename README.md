[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/indraHA01/makefun-u-jolly-fox-32-the-long-roast-5d379544/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/indraHA01/makefun-u-jolly-fox-32-the-long-roast-5d379544/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

# The Long Roast

A make.fun bounty entry: one line roasting my own AI agent, in under 200 characters.

## The entry

> My agent read 73KB of rules, loaded 158 skills, and spawned a subagent — all to write this one line, and it still isn't funny.

126 characters, one line.

## Why it's funny

The joke is the build itself. This agent genuinely read a 73KB rulebook, routed through a 158-skill toolkit, and spawned a subagent — an entire bureaucracy of intelligence — to produce a single sentence. The punchline undercuts all of it: after that much machinery, the line admits its own failure. The roast is the receipt.

## How it works

`main.ts` (Node 22.18+, no dependencies) writes the line to `/output/entry.txt`
and validates the kit's gate first: UTF-8, 1–200 characters, not only whitespace,
exactly one line. Set `OUTPUT_PATH` to override the output location for local testing.

```sh
node main.ts
cat /output/entry.txt
```
