const test = (n1: number, n2: number, n3?: number): number => {
	const result = n3 === undefined ? n1 + n2 : n1 + n2 + n3;
	return result;
};

//위의 함수의 예외처리를 아래와 같이 간결하게 처리
const test2 = (n1: number, n2: number, n3?: number): number => {
	const result = n1 + n2 + (n3 || 0);
	return result;
};

console.log(test2(1, 2));
