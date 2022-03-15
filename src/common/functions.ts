export const _getParams = () => {
    const params = process.argv.slice(2);
    const start = Number(params[0]);
    const end = Number(params[1]);
    return { start, end };
}

export const _createRange = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
