import { Step } from "../src/common/step";
import { _createRange, _getParams } from "../src/common/functions";

describe("Step2 Test", () => {

    test("Test 🧪 Range --> START: 2 - END: 14", () => {
        
        // Expected Result
        const readableResult = '2 gold 4 tap tip 7 8 tip tap 11 tip gold 14';

        // Creating range
        const range = _createRange(2, 14);

        // Creating Step
        const step = new Step(range, 'step2');
        expect(step.readableResult).toEqual(readableResult);  
    });

});