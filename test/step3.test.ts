import { Step } from "../src/common/step";
import { _createRange, _getParams } from "../src/common/functions";
import { TipTapValue } from "../src/common/types";

describe("Step3 Test", () => {

    test("Test 🧪 Range --> START: 1 - END: 20", () => {
        
        // Expected Result
        const readableResult = '1 2 gold 4 tap tip 7 8 tip tap 11 tip gold 14 tiptap 16 17 tip 19 tap';
        const report = new Map<TipTapValue, number>([
            ["tip", 4],
            ["tap", 3],
            ["tiptap", 1],
            ["gold", 2],
            ["integer", 10]
        ]);

        // Creating range
        const range = _createRange(1, 20);

        // Creating Step
        const step = new Step(range, 'step3');

        // Check Test
        expect(step.readableResult).toEqual(readableResult); 

        // Check Report
        expect(step.report.get('tip')).toEqual(report.get('tip'));  
        expect(step.report.get('tap')).toEqual(report.get('tap'));  
        expect(step.report.get('tiptap')).toEqual(report.get('tiptap'));  
        expect(step.report.get('gold')).toEqual(report.get('gold')); 
        expect(step.report.get('integer')).toEqual(report.get('integer'));  
    });

});