// 타입 지정 시, type 을 주로 사용하는 경우
// 1. 기존 객체 타입의 property를 추가하는 것이 아니라, 서로 다른 객체를 합쳐서 새로운 타입을 만들어야 할 때.
// 2. 객체가 아닌 일반 자료형일 때

interface StudentA {
	name: string;
	age: number;
}
interface StudentB {
	name: string;
	isFemale: boolean;
}

// type을 이용해 두 개의 인터페이스에서 Intersection으로 && 처럼 합쳐서 새로운 타입 지정
type StudentTotal = StudentA & StudentB;

let student1: StudentTotal = {
	name: 'Emily',
	age: 30,
	isFemale: false,
};

// 객체는 아니지만, 특정 커스터마이징 된 타입을 재활용해야 할 경우, type으로 직접 지정해서 활용해도 됨.
type commonType = string | null;

const test = (info: commonType) => {
	console.log(info);
};
