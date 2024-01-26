// || 연산자로 예외처리 했을 때 문제가 발생할 수 있는 상황
const introduce = (name, age) => {
    console.log(`This is ${name}`);
    console.log(`${name} is ${age !== null && age !== void 0 ? age : 'default'} years old`);
};
/*
    기존 || 연산자보다 null 병합 연산자를 사용해야 하는 이유

    - || 연산자는, 빈 문자나 0 처럼 실제적인 값이 있는 값조차도 false로 인식해서 예외처리하므로, 예상치 못 한 문제가 발생할 수 있음.
    - ?? (null 병합 연산자) 는 무조건 undefined 나 null 같이 실제로 에러가 발생할만한 상황에서만 예외처리를 함.

    --> ?? 를 사용하는 것이 좀 더 디테일하게 예외처리를 할 수 있음.
*/
introduce('my Baby', 0);
