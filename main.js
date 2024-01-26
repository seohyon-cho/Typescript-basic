// 타입 지정 시, type 을 주로 사용하는 경우
// 1. 기존 객체 타입의 property를 추가하는 것이 아니라, 서로 다른 객체를 합쳐서 새로운 타입을 만들어야 할 때.
// 2. 객체가 아닌 일반 자료형일 때
let student1 = {
    name: 'Emily',
    age: 30,
    isFemale: false,
};
const test = (info) => {
    console.log(info);
};
