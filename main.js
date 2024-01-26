const plus = (n1, n2) => {
    console.log(n1 + n2);
    return n1 + n2;
};
const minus = (n1, n2) => {
    return n1 - n2;
};
const multiply = (n1, n2) => {
    console.log(n1 * n2);
};
const divider = (n1, n2) => {
    return n1 / n2;
};
/*
    return 값에 타입을 지정하지 않는 이유,
    return 값에 대한 타입 지정이 해도 되고 안 해도 되는 거긴 하지만 안 하는 게 훨씬 바람직함.
    리턴에 타입 지정하면 결과에서 에러가 뜨기 때문에,
    리턴에 타입 지정을 안 해야 인수 단계에서 에러가 떠서 에러 잡기 수월.
*/
