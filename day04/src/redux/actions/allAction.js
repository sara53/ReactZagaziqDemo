export function increaseAction(payload) {
	return {
		type: "INCREASE",
		payload,
	};
}
export function decreaseAction(payload) {
	return {
		type: "DECREASE",
		payload,
	};
}
