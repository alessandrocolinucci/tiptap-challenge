import { _createRange, _getParams } from "../common/functions";
import { Step } from "../common/step";

// Getting Params
const params = _getParams();

// Creating range
const range = _createRange(params.start, params.end);

// Creating Step
const step = new Step(range);

// Logging result
console.log(`Result 👉   ${step.readableResult}`);
