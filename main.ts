// 기본 타입
let txt: string = 'hello';
let num: number = 0;
let isFemale: boolean = false;

// 참조형
let likes: string[] = ['game', 'music', 'movie'];
let unlikes: Array<string> = ['study', 'sports', 'homework'];
let odd: Array<number> = [1, 3, 5];
let even: number[] = [2, 4, 6];
// tuple: 배열의 들어갈 타입을 각각 개별적으로 지정.
let combined: [number, string, boolean] = [3, 'homework', false]; // 튜플

// 기본 타입 지정, 인터페이스, 제네릭(호출할 때 타입을 만드는 것), 클래스, 유니온타입, ...
