let text = document.querySelector("p");
let num1, num2;

//두 수의 차 
function solution(num1, num2) {
    var answer = 0;

    if ((num1 >= -50000 & num1 <= 50000) && (num2 >= -50000 & num2 <= 50000)) {
        answer = num1 - num2;
        text.innerText = answer;
        return answer;
    } else {
        console.log("write other number");
        throw new Error; //에러를 뜨게 함
    }
}

//solution (500, -50050)

//나머지 구하기
function solution2(num1, num2) {
    var answer = -1;

    if ((num1 > 0 && num1 <= 100) && (num2 > 0 && num2 <= 100)) {
        answer = num1 % num2;
        text.innerHTML = answer;
        return answer;
    } else {
        console.log("write other number");
    }
}

let solution3 = (num1,num2) => {
    var answer = 1;
    if ((num1 > 0 && num1 <= 100) && (num2 > 0 && num2 <= 100)) {
        answer = num1 % num2;
        text.innerHTML = answer;
        return answer;
    } else {
        console.log("write other number");
    }
}

// solution2 (-1, 105)
// solution2 (3, 2)
// console.log(solution3 (3 , 2));


//나이 주어질 때 2022년 기준 출생연도 구하기
var age; //나이, 0 < age <=120
const criteriaYear = 2022; // 태어날 연도

//40 - 1983, 2022 - 1983 + 1 
//23 - 2000, 2022 - 2000 + 1

function solution4(age) {
    var answer = 0;
    if (age > 0 && age <=120) {
        answer = (criteriaYear - age)+ 1;
        return answer;
    } else {
        console.log("write other number")
    } 
}

text.innerText = solution4(40);

/* new Date().getFullYear() 
새로운 Date 생성 +  주어진 날짜의 현지 시간 기준 연도를 반환 */

//각도 구하기
/*
예각: 0 < angle < 90  // 1 return
직각: angle = 90 // 2 return
둔각: 90 < angle < 180 // 3 return
평각: angle = 180 // 4 return
*/

function solution5(angle) {
    var answer = 0; //초기값

    if (angle % 2 == 0 || angle % 2 == 1) {
        if (angle > 0 && angle < 90) {
            // return answer = 1;
            answer = 1;
        } else if (angle == 90) {
            // return answer = 2;
            answer = 2;
        } else if (angle > 90 && angle < 180) {
            // return answer = 3;
            answer = 3;
        } else if (angle == 180) {
            // return answer = 4;
            answer = 4;
        }  return answer;
    } else {
        return answer; //초기값
    }
}

text.innerText = solution5(-10); //0
text.innerText += solution5(20.5); //0
text.innerText += solution5(20); //1
text.innerText += solution5(90); //2
text.innerText += solution5(110); //3
text.innerText += solution5(180); //4


/*filter 이용해 푸는 경우도 있음*/
function solution6(angle) {
    return [0, 90, 91, 180].filter(x => angle >= x).length;
}
