// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장합니다. []
console.log('HEROPY');
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(new Date('2021-01-30').getDay());
console.log(new Date('2021-01-31').getDay());
console.log(new Date('2021-02-01').getDay());

// String(문자 데이터)
// 따옴표를 사용합니다.
let myName = "HEROPY";
let email = "thsecond@gmail.com";
let hello = `Hello ${myName}?!` // 보관법

console.log(myName);
console.log(email);
console.log(hello);

// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냅니다.
let number = 123;
let opacity = 1.57; // 부동 소수점

console.log(number);
console.log(opacity);

// Boolean(불린 데이터)
// true, false 두 가지 값밖에 없는 논리 데이터
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined
// 값이 할당되지 않은 상태를 나타냅니다.
let undef;
let obj = { abc: 123 };

console.log(undef);   // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

// Null
// 어떤 값이 의도적으로 비어있음을 의미합니다.
let empty = null;

console.log(empty);   // null

// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장합니다. { }
let user = {
  // Key: Value
  name: 'HEROPY',
  age: 85,
  isValid: true
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);

// 변수: 데이터를 저장하고 참조하는 데이터의 이름(var, let, const)
// 변수 선언
let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//  값의 재할당 가능
a = 12;
console.log(a);

// 예약어: 특별한 의미를 가지고있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
// 함수: 특정 동작을 수행하는 일부 코드의 집합
// 함수 호출
function helloFunc() {
  console.log(1234);
}

// 함수 호출
helloFunc(); // 1234

function returnFunc() {
  return 123;
}

let c = returnFunc();

console.log(c); // 123

// 매개 변수 a, b
function sum(a, b) {
  return a + b;
}

// 재사용
let d = sum(1, 2);
let e = sum(7, 12);

console.log(d, e);

// 이름이 있는 함수
// 함수 선언
function Hello() {
  console.log("Hello~");
}

// 익명함수
// 함수 선언
let world = function() {
  console.log('World~');
}

// 함수 호출
Hello();
world();

const heropy = {
  name: 'HEROPY',
  age: 85,
  // 메소드
  getName: function() {
    return this.name; // name변수의 HEROPY를 의미한다.
  }
};

const hisName = heropy.getName();
console.log(hisName); // HEROPY
console.log(heropy.getName()); // HEROPY

// 조건문: 조건의 결과에 따라 다른 코드를 실행하는 구문(if, else)
let show = true;
let check = false;

if(show) {
  console.log('Show!');
}

if(check) {
  console.log("Checked!");
}

show = false;

if(show) {
  console.log('Show!');
}

else {
  console.log('Hide?');
}

// DOM API(Document Object Model): 자바스크립트에서 html을 제어하는 명령
// HTML 요소 1개 검색/찾기
let boxEl = document.querySelector('.box');

// HTML 요소에 적용할 수 있는 메소드
// boxEl.addEventListener();

console.log(boxEl);

// 인수를 추가 가능
// boxEl.addEventListener(1, 2);

//  1 - 이벤트(Event, 상황)
// boxEl.addEventListener('click', 2);

// 2 - 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function() {
  console.log("click~");
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
});

// HTML 요소 검색/찾기
// const boxEl = document.querySelector('.box');

// 요소의 클래스 정보객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains);

// HTML요소 모두 검색/찾기
const boxEls = document.querySelectorAll('.boxx');
console.log(boxEls);

// 찾은 요소를 반복해서 함수 실행
// 익명 함수를 인수로 추가
// boxEls.forEach(function () {});

// 첫 번째 매개변수: 반복 중인 요소
// 두 번째 매개변수: 반복 중인 번호
// boxEls.forEach(function(boxEl, index) {});

// 출력
boxEls.forEach(function(boxEl, index) {
  // console.log(index, boxEl);
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
})

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);

// Setter, 값을 저장하는 용도
boxEl.textContent = 'HEROPY?!'
console.log(boxEl.textContent); // HEROPY?!

// 메소드 체이닝
const f = 'Hello~';
// split: 문자를 인수 기준으로 쪼개 배열로 반환
// reverse: 배열을 뒤집기.
// join: 배열을 인수 기준으로 문자로 병합해 반환
const g = f.split('').reverse().join(''); // 메소드 체이닝

console.log(a); // Hello~
console.log(b); // ~olleH

const boxE = document.querySelector('.box');
console.log(boxE.textContent);

boxE.addEventListener('click', function(){
  console.log('Hello~');
  boxE.textContent = 'Hello';
});

if(boxE.classList.contains('active')) {
  console.log('포함됨!');
}
else {
  console.log('포함 되지 않음');``
}