// 함수의 parameter에는 무조건 타입을 지정해줘야 함.
// return 값이 있는 함수면, 파라미터 뒤에 :을 붙여서 return 값의 타입 지정 가능.
// return 값이 없다면, return 값의 타입을 void 로 지정하면 됨.
// 그러나 일반적으로 인수 자체가 제대로 전달되면, return 값이 잘못 나올 리가 없고
// return에 타입을 지정해서 return 단에서 에러가 잡혀봤자 이미 에러가 난 상황이기 때문에 return에 타입 지정을 하는 것이 무의미할 수 있음.

const plus = (n1: number, n2: number): number => {
	console.log(n1 + n2);
	return n1 + n2;
};

const minus = (n1: number, n2: number) => {
	return n1 - n2;
};

const multiply = (n1: number, n2: number) => {
	return n1 * n2;
};

const divider = (n1: number, n2: number) => {
	return n1 / n2;
};

/*
	return 값에 타입을 지정하지 않는 이유, 
	return 값에 대한 타입 지정이 해도 되고 안 해도 되는 거긴 하지만 안 하는 게 훨씬 바람직함. 
	리턴에 타입 지정하면 결과에서 에러가 뜨기 때문에, 
	리턴에 타입 지정을 안 해야 인수 단계에서 에러가 떠서 에러 잡기 수월. 
*/
