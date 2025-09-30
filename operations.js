// Stateless Mathematical operations that are fully testable in isolation
// We will use modern JS methods for clearer syntax
// Arrow functions allow us to achieve this with very few lines of code

export const add = (a, b) => a + b;  
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => {
	if (b === 0) throw new Error("Division by zero");
	return a / b;
};

// Map sign → function (Here, we use an Object to create a relation between a sign and its corresponding function)

const OPS = { "+": add, "-": sub, "*": mul, "×": mul, "/": div, "÷": div };

// A single dispatcher that takes (a, op, b)
export function compute(a, op, b) {
	const fn = OPS[op];
	if (!fn) throw new Error(`Unknown operator: ${op}`);
	return fn(a, b);
}
