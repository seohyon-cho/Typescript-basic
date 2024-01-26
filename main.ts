// 객체로 구성된 배열의 타입 지정.

// 먼저, 개별 객체의 타입인 interface 지정
interface Student {
	name: string;
	age: number;
	isFemale: boolean;
	address?: string;
}

// 각각의 Interface로 구성된 타입을 지정
// (실무에서 가장 많이 쓰이는 패턴 : DB나 API에서 데이터를 가져올 때)
const classInfo: Student[] = [
	{ name: 'David', age: 20, isFemale: false, address: 'Seoul' },
	{ name: 'Michael', age: 30, isFemale: false },
	{ name: 'Julia', age: 32, isFemale: true },
];

// 단순 문자타입으로 구성된 배열
const names: string[] = ['red', 'green', 'blue'];
const names2: number[] = [1, 2, 3];

const getArrayInfo = <t>(arr: t[]) => {
	console.log(arr);
};

// Generic 으로 interface 자체도 타입으로 전달해서 호출 가능 (해당 패턴을 가장 많이 사용)
// 이렇게 해야 다양한 형태의 데이터에 대해서 범용적으로 활용할 수 있음.
getArrayInfo<Student>(classInfo);
getArrayInfo<string>(names);
// 아래처럼 우리가 의도한 값과 다른 값이 함수에 들어올 때, generic을 활용해 오류 파악이 가능해짐.
getArrayInfo<string>(names2);
