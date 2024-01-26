// 객체로 구성된 배열의 타입 지정.
// 각각의 Interface로 구성된 타입을 지정
// (실무에서 가장 많이 쓰이는 패턴 : DB나 API에서 데이터를 가져올 때)
const classInfo = [
    { name: 'David', age: 20, isFemale: false, address: 'Seoul' },
    { name: 'Michael', age: 30, isFemale: false },
    { name: 'Julia', age: 32, isFemale: true },
];
// 단순 문자타입으로 구성된 배열
const names = ['red', 'green', 'blue'];
const getArrayInfo = (arr) => {
    console.log(arr);
};
// Generic 으로 interface 자체도 타입으로 전달해서 호출 가능 (해당 패턴을 가장 많이 사용)
// 이렇게 해야 다양한 형태의 데이터에 대해서 범용적으로 활용할 수 있음.
getArrayInfo(classInfo);
getArrayInfo(names);
