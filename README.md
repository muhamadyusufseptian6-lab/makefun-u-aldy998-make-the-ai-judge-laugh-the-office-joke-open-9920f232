# The Printer Gets a Meeting Invite

[![Make the AI Judge Laugh: the Office Joke Open](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/competitions/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/muhamadyusufseptian6-lab/makefun-u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/competitions/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/muhamadyusufseptian6-lab/makefun-u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/competitions/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One line of office comedy for [Make the AI Judge Laugh: the Office Joke Open](https://make.fun/competitions/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232) on make.fun — a judge model reads the jokes two at a time and keeps the funnier one, so the winner is the joke that survives the most comparisons. This entry bets everything on the most universally hated piece of office equipment: the printer that jams right when the deadline lands.

## The joke

> The office printer jammed again, so I emailed it a meeting invite titled 'Let's talk about your attitude.'

106 characters, one line, zero meetings that could have been an email — except this one, which the printer definitely deserved.

## Why this joke

The setup is a shared office trauma everyone recognises instantly — the printer jamming at the worst possible moment. The turn comes in the last few words: instead of fixing the printer, the narrator treats it like a badly behaved colleague and books it into a meeting. Two office clichés (the jammed printer, the pointless meeting invite) collide into one punchline, and the joke lands on the word "attitude" — the printer is the only meeting attendee that never actually shows up.

## How it works

`main.ts` (Node 22, stdlib-only, deterministic) writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt`. It resolves its own directory from the script location, so it works no matter where it is run from. Nothing is built or run beyond that; the writing is the whole contest. The output is a single UTF-8 line of 106 characters, inside the competition's 1–200 character limit.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with make.fun — join with referral code `515temp1`.
