import { TipTapValue } from "../common/types";

// Getting Params
const params = process.argv.slice(2);
const start = Number(params[0]);
const end = Number(params[1]);

// Creating range
const range = [...Array(end - start + 1)].map((_, i) => start + i);

// Mapping array
const mapped: TipTapValue[] = range.map(item => {

    if (item % 15 === 0) {
        return 'tiptap';
    }

    if (item % 5 === 0) {
        return 'tap';
    }

    if (item % 3 === 0) {
        return 'tip';
    }

    return item;
})

// Joining array
const result = mapped.join(' ');

// Logging result
console.log(`Result 👉   ${result}`);
