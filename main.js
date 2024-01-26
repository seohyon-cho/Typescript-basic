// 기본 타입
let txt = 'hello';
let num = 0;
let isFemale = false;
// 참조형
let likes = ['game', 'music', 'movie'];
let unlikes = ['study', 'sports', 'homework'];
let odd = [1, 3, 5];
let even = [2, 4, 6];
// tuple: 배열의 들어갈 타입을 각각 개별적으로 지정.
let combined = [3, 'homework', false]; // 튜플
// 유니온 타입
// <number | string> 숫자형 또는 문자형 둘 다 들어올 수 있게 해서,
// 유니온 타입으로 들어갈 수 있는 자료형을 복수 개 지정.
let random = [4, '5', '3', 7]; // 어느 순서에 어떤 타입의 값이 있을지 모르는 상태
// 객체명 뒤에, 내가 설정한 interface의 이름을 달아주면 됨.
let student1 = {
    name: 'David',
    age: 20,
    isFemale: false,
    address: 'Seoul',
};
let student2 = {
    name: 'Emily',
    age: 30,
    isFemale: true,
};
