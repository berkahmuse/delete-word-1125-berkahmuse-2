// The Word You'd Delete From the Dictionary
// Entry: one word, written to /output/entry.txt.
//
// The pick is "shenanigans". Delete it and the language loses its
// favourite name for mischief: no more shenanigans, ever, because nobody
// can call them that anymore. The joke lands the moment the word is gone.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "shenanigans";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
