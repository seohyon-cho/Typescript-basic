// 기본 타입
let txt: string = 'hello';
let num: number = 0;
let isFemale: boolean = false;

// 참조형
let likes: string[] = ['game', 'music', 'movie'];
let unlikes: Array<string> = ['study', 'sports', 'homework'];
let odd: Array<number> = [1, 3, 5];
let even: number[] = [2, 4, 6];
// tuple: 배열의 들어갈 타입을 각각 개별적으로 지정.
let combined: [number, string, boolean] = [3, 'homework', false]; // 튜플

// 유니온 타입
// <number | string> 숫자형 또는 문자형 둘 다 들어올 수 있게 해서,
// 유니온 타입으로 들어갈 수 있는 자료형을 복수 개 지정.
let random: Array<number | string> = [4, '5', '3', 7]; // 어느 순서에 어떤 타입의 값이 있을지 모르는 상태

// 인터페이스
// 객체 처럼 복잡한 구조의 타입을 지정해야 할 때, 직접 특정 경우에 대한 커스텀 타입을 제작해서 재활용하는 것을 의미함.

interface Student {
	name: string;
	age: number;
	readonly isFemale: boolean; // 변경되지 않을, 수정되면 안 되는 값은 property명 앞에 readonly를 붙여서 읽기 전용으로 지정. (맹점: 수정하려면 수정할 수는 있는데, 다만 수정하려고 할 때 에러를 띄워줌.)
	address?: string; // ? 를 붙여서 해당 property를 선택사항으로 지정. (꼭 넣지 않아도 에러가 아님.)
}

// 객체명 뒤에, 내가 설정한 interface의 이름을 달아주면 됨.
let student1: Student = {
	name: 'David',
	age: 20,
	isFemale: false,
	address: 'Seoul',
};

let student2: Student = {
	name: 'Emily',
	age: 30,
	isFemale: true,
};
