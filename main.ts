// 타입을 지정하는 이유 : 어떤 값이 들어올지 사전에 미리 알 수 있게 하여 메모리를 좀 더 효율적으로 할당하기 위함. (기존엔 큰 값이든 작은 값이든 무조건 동일한 메모리 할당했었음. )

// 해당 property에 들어갈 값이 명확하다고 하면, 특정 타입을 지정해둘 수 있음.

// 특정 커스터마이징된 자료형을 새로 선언할 때, type을 사용.
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

/* 
	interface 형식 대신, type으로도 객체 타입을 선언할 수 있음.

	(*) interface로 선언하는 방식과, type으로 선언하는 방식의 차이점 
	- interface : 객체에만 적용 가능. 
	- type : 자료형에 구애받지 않고 모두 적용 가능. 

	모두 적용이 가능한 거면 type이 좋아보이는데도 불구하고 type

	커스텀자료형을 만들어야 할 때, 객체는 가급적 interface, 그외의 자료형은 type으로 선언하는 것이 바람직함. 
*/

/*
interface Student {
	name: string;
	age: number;
	readonly isFemale: boolean;
	score: Grade;
}
*/

type Student = {
	name: string;
	age: number;
	readonly isFemale: boolean;
	score: Grade;
};

let student1: Student = {
	name: 'Andy',
	age: 40,
	isFemale: false,
	score: 'F',
};

// type으로 설정해둔 값 외에 다른 값이 들어오면 오류 뜨게 됨.
student1.score = 'C';
