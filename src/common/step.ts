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

    get report(): any {
        return this.result.reduce((res: any, value: TipTapValue) => {
            const index = typeof value === "number" ? 'integer' : value;
            res[index] = (res[index] || 0) + 1;
            return res;
        }, {});
    }

}