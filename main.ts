// 특정 parameter 값을 ? 로 optional 처리하게 되면, type에서의 오류는 넘어갈 수 있지만, optional 처리한 값을 코드 내부적으로 예외처리하지 않으면 오류가 발생함.
// 없을 수도 있는 값에 대해서는, 타입 부분에서만 옵셔널 처리를 해주고 끝나는 게 아니라 코드 내부적으로도 반드시 예외처리를 해주어야 함.
const test = (n1: number, n2: number, n3?: number): number => {
	// const result = n1 + n2 + n3;
	const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
	return result;
};

console.log(test(1, 2));
