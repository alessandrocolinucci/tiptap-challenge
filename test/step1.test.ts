import { Step } from "../src/common/step";
import { _createRange, _getParams } from "../src/common/functions";

describe("Step1 Test", () => {

    test("Test 🧪 Range --> START: 2 - END: 16", () => {
        
        // Expected Result
        const readableResult = '2 tip 4 tap tip 7 8 tip tap 11 tip 13 14 tiptap 16';

        // Creating range
        const range = _createRange(2, 16);

        // Creating Step
        const step = new Step(range);
        expect(step.readableResult).toEqual(readableResult);  
    });

});