interface Student {
	name: string;
	age: number;
}

interface Student {
	name: string;
	age: number;
	isFemale: boolean;
}

let student1: Student = {
	name: 'David',
	age: 30,
	isFemale: false,
};

/*
	interface 선언 방식은, 확장이 가능함. (최초 선언 이후로, property 추가할 수도 있음.)
	interface 같은 경우, 객체 전용이므로, 객체의 property 확장에 따른 구조 변경이 간단함. 
*/
