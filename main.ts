// 서로 다른 로직의 함수라 하더라도, 전달되는 인수와 return 값이 매번 동일한 패턴이라고 한다면, 함수마다 각각 타입 지정을 해주는 것은 번거롭고 비효율적임.
// interface로 특정 함수의 타입을 지정해서 재활용 할 수 있음.
interface Calc {
	// 리턴의 타입을 number | void; 로 지정함으로서, 리턴 값이 있을 땐 리턴의 타입이 number로 설정되고, return 값이 없으면 void로 지정됨으로써 오류 안 뜨게 처리.
	(n1: number, n2: number): number | void;
}

const plus: Calc = (n1, n2) => {
	console.log(n1 + n2);
	return n1 + n2;
};

const minus: Calc = (n1, n2) => {
	return n1 - n2;
};

const multiply: Calc = (n1, n2) => {
	console.log(n1 * n2);
};

const divider: Calc = (n1, n2) => {
	return n1 / n2;
};

/*
	return 값에 타입을 지정하지 않는 이유, 
	return 값에 대한 타입 지정이 해도 되고 안 해도 되는 거긴 하지만 안 하는 게 훨씬 바람직함. 
	리턴에 타입 지정하면 결과에서 에러가 뜨기 때문에, 
	리턴에 타입 지정을 안 해야 인수 단계에서 에러가 떠서 에러 잡기 수월. 
*/
