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

//text.innerText = solution4(40);

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
/*
text.innerText = solution5(-10); //0
text.innerText += solution5(20.5); //0
text.innerText += solution5(20); //1
text.innerText += solution5(90); //2
text.innerText += solution5(110); //3
text.innerText += solution5(180); //4
*/

/*filter 이용해 푸는 경우도 있음*/
function solution6(angle) {
    return [0, 90, 91, 180].filter(x => angle >= x).length;
}

//두 수의 나눗셈
//정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1000 을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

function solution7(num1, num2) {
    var answer = 0;
    if ((num1 > 0 && num1 <= 100) && (num2 > 0 && num2 <= 100)) {
        answer = Math.floor((num1 / num2) * 1000)
        return answer;
    } else return false
}

//Math.floor() 주어진 숫자와 같거나 작은 정수중 가장 큰 수를 반환
//Math.trunc() 주어진 값의 소수 부분 제거하고 정수 부분을 반환한다.

//짝수의 합
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
//let even = 2n;

function solution8(n) {
    var answer = 0;
    if (Number.isInteger(n)==true) {
        if (n > 0 && n <= 1000) {
                for (var i = 1; i <= n; i++) {
                    if (i % 2 == 0) {
                        answer += i;
                        
                    }
                }
                return answer;
        } else return false
    } else return false
}

//n%2 == 0 짝수  
// 수열공식 이용해서 푸는 방법도 있음  

// function solution(n) {
//     var half = Math.floor(n / 2);
//     return half * (half + 1);
// }


//배열의 평균값
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// function solutions(n) {
//     var answer = 0;
//     for (var i = 0; i <= n; i++) {
//         answer += i
//     }
//     return answer / (n + 1)
// }

var numbers = [];

function solution9(numbers) {
    var answer = 0;
    for (var i = 0; i < numbers.length; i++) {
        answer += numbers[i];
    }
    return answer / (numbers.length)
}

console.log(solution9([0,1]));

//for of 사용

function solution(numbers) {
    var answer = 0;
    for (i of numbers) {
        answer += i
    }
    return answer / numbers.length;

}

//reduce 사용해서 풀수 있음
function solution(numbers) {
    var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    return answer;
}

//array.reduce() 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과 값을 반환
