interface Calc {
	// 파라미터로 전달되는 인수의 갯수를 특정할 수 없을 때, 아래처럼 rest 파라미터를 지정하고, 배열 타입을 설정해주면 됨. (아래 두 줄 둘 다 가능한 형식)
	(...n: Array<string | number>): number | void;
	// (...n: number[]): number | void;
}

const plus: Calc = (n1, n2) => {
	console.log(n1);
	console.log(n2);
};

plus(2, 3, 4, 5);
plus(2, '3');
