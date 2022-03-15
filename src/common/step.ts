import { TipTapValue, StepValue } from "./types";

export class Step {

    type: StepValue;
    result: TipTapValue[];

    constructor(range: number[], type: StepValue = 'step1') { 
        this.type = type;
        this._map(range);
    }
    
    private _map(range: number[]): void {
        this.result = range.map(item => {

            if (this.type !== 'step1' && item.toString().includes('3')) {
                return 'gold';
            } else {
                if (item % 15 === 0) {
                    return 'tiptap';
                }
            
                if (item % 5 === 0) {
                    return 'tap';
                }
            
                if (item % 3 === 0) {
                    return 'tip';
                }
            }
        
            return item;
        });
    }

    get readableResult(): string {
        return this.result.join(' ');
    }

    get report(): Map<TipTapValue, number> {
        return this.result.reduce((map: Map<TipTapValue, number>, value: TipTapValue) => {
            const index = typeof value === "number" ? 'integer' : value;
            map.set(index, (map.get(index) || 0) + 1);
            return map;
        }, new Map<TipTapValue, number>());
    }

}

export interface Report {
    integer: number
}