// 해당 로직에서 중요하게 다룰 Post 데이터 객체의 타입을 미리 interface로 선언.
// HTML 요소를 변수에 담을 시, TypeScript에 내장되어 있는 Node 요소 타입을 가져와서, generic으로 설정 가능. (<HTML~Element>)
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const input = document.querySelector('#title');
// JSON.parse 는 무조건 파라미터로 인수가 문자값만 넘어오도록 강제되어 있음.
// 따라서 빈 배열조차도 문자화해서 대체값으로 지정.
let tasks = JSON.parse(localStorage.getItem('TASKS') || '[]');
tasks.forEach((task) => addListItem(task));
// DOM에 담겨있는 변수의 경우에는, 그 값 자체가 Web API를 통해 외부에서 가져오는 값이기 때문에, 자바스크립트 자체적으로 처리하는 게 아니라서 (자바스크립트는 DOM에 대한 제어 권한이 없어서) 항상 값이 null일 수도 있다는 가능성을 전제로 두고 있기 때문에 optional chaining 처리가 필수임.
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value.trim()) === '')
        return alert('할일을 입력하세요.');
    const newTask = {
        id: performance.now(),
        title: (input === null || input === void 0 ? void 0 : input.value) || '',
        createAt: new Date(),
        complete: false,
    };
    tasks.push(newTask);
    addListItem(newTask);
    saveTasks();
    // input 요소도 DOM에서 가져온 것이므로 optional chaining을 하면 된다고 생각할 수 있는데, 아래의 경우에는 불가능함.
    // 대입연산자의 좌항에는 optional chaining 처리가 불가한데, 아래 경우가 바로 대입연산자를 사용한 경우이기 때문임.
    // 대입연산자는 우항에 있는 값을 좌항에 담는 건데, 설사 우항에 undefined 더라도 그 자체도 자료형이므로 문제 없음.
    // 그런데 좌항은 값을 담을 공간을 의미하는 것이나 마찬가지인데, 값이 없는 건 가능해도 값을 담을 공간 자체가 없다는 건 말이 안 되므로 optional chaining 자체가 말이 안 되는 것.
    // 따라서 optional chaining을 할 게 아니고, DOM이 있을 때만 && 연산자로 해당 구문이 실행되게끔 만들고, 또한 && 연산자와 = 연산자를 하나의 식에서 같이 쓸 수 없으므로 대입연산자식을 괄호로 묶어서 우선순위로 처리되게끔 하면 됨.
    input && (input.value = '');
});
function addListItem(task) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const button = document.createElement('button');
    button.innerText = '삭제';
    if (task.complete) {
        item.style.textDecoration = 'line-through';
        checkbox.checked = true;
        item.append(button);
    }
    else {
        item.style.textDecoration = 'none';
        checkbox.checked = false;
    }
    // 위의 form(DOM에서 만든 요소)와는 달리 checkbox는 스크립트로 동적으로 만들어진 것이므로 optional chaining 처리 안 해도 됨.
    checkbox.addEventListener('change', () => {
        var _a;
        task.complete = checkbox.checked;
        if (task.complete) {
            item.style.textDecoration = 'line-through';
            const button = document.createElement('button');
            button.innerText = '삭제';
            item.append(button);
            button.addEventListener('click', (e) => {
                var _a;
                const del_id = task.id;
                tasks = tasks.filter((el) => el.id !== del_id);
                saveTasks();
                // 타입스크립트에서는 event 객체 안쪽의 property 를 읽지 못 하는 버그가 존재함.
                // 해결 방법 : 해당 event 객체를 변수로 옮겨담아 직접 타입을 지정하면 해결됨.
                const eventTarget = e.currentTarget;
                (_a = eventTarget.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            });
        }
        else {
            item.style.textDecoration = 'none';
            // item은 스크립트가 만든 거라 optional chaining 대상이 아니고, 그 뒤의 querySelector로 선택한 button이 DOM에서 생성되는 요소이기 때문에 이에 대해 optional chaining 처리하면 됨.
            (_a = item.querySelector('button')) === null || _a === void 0 ? void 0 : _a.remove();
        }
        saveTasks();
    });
    const newText = task.title;
    item.prepend(checkbox, newText);
    list === null || list === void 0 ? void 0 : list.append(item);
}
function saveTasks() {
    localStorage.setItem('TASKS', JSON.stringify(tasks));
}
