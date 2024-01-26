// 타입을 지정하는 이유 : 어떤 값이 들어올지 사전에 미리 알 수 있게 하여 메모리를 좀 더 효율적으로 할당하기 위함. (기존엔 큰 값이든 작은 값이든 무조건 동일한 메모리 할당했었음. )
let student1 = {
    name: 'Andy',
    age: 40,
    isFemale: false,
    score: 'F',
};
// type으로 설정해둔 값 외에 다른 값이 들어오면 오류 뜨게 됨.
student1.score = 'C';
