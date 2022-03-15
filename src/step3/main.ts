import { _createRange, _getParams } from "../common/functions";
import { Step } from "../common/step";

// Getting Params
const params = _getParams();

// Creating range
const range = _createRange(params.start, params.end);

// Creating Step
const step = new Step(range, 'step3');

// Logging result
console.log(`Result 👉   ${step.readableResult}`);

// Logging report
console.log(`Report 👉   ${JSON.stringify(step.report)}`);