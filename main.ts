/* 
	Generic 
	: 공통된 규칙인데, 호출할 때 들어갈 자료형을 매번 산정하기 어려울 때, 일일히 타입을 따로 지정하는 것이 비효율적이므로, 타입 지정 자체를 호출할 때 지정하는 틀. 

	틀은 정해져있는데, 그 안에 들어갈 값 자체가 산정하기 어려울 때
	generic은 큰 틀만 처음에 정의해두고, 자료형은 호출할 때 정하는 형태.
*/

// 하단의 케이스는, 배열의 들어가는 자료값이 일정하지 않으므로, 동일한 구조임에도 불구하고 타입에 따른 함수를 여러 개 만들어야 하는 번거로움이 있음.
const getLength = (arr: number[]) => {
	return arr.length;
};

const getLength2 = (arr: string[]) => {
	return arr.length;
};

// Any 타입으로 지정함으로서 위의 문제점을 해결할 수 있긴 함.
// 다만 정상적이지 않은 값이 들어와도 컴파일 시 에러를 잡지 못 하므로 바람직하지 않은 방법.
const getAnyLength = (arr: any[]) => {
	return arr.length;
};

const numbers = [1, 2, 3, 4, 5];
const letters = ['a', 'b', 'c'];
const weired = [false, 3, '3'];
getAnyLength(numbers);
getAnyLength(letters);
getAnyLength(weired);

// Generic을 활용하여, 호출 시에 타입을 지정하도록 함으로서 위의 문제점을 해결할 수 있음.
// Generic으로 호출 시, 상세 타입을 파라미터로 전달.

const getGenericLength = <t>(arr: t[]) => {
	return arr.length;
};

// " 함수 호출 시 미리 지정한 경로 타입을 전달하는 구조 "
// 문자열 타입으로 지정하고 싶은 경우
getGenericLength<string>(['a', 'b']);
// 숫자 타입으로 지정하고 싶은 경우
getGenericLength<number>([1, 2]);
// 어떤 값이 들어올지 산정하기 어려울 경우 (유니온 타입 사용)
getGenericLength<number | string>([1, '2']);
