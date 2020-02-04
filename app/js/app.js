document.addEventListener("DOMContentLoaded", function (event) {
    'use strict';
    //do work
    let money = +prompt("Ваш бюджет на месяц?", ""),
        time = prompt("YYYY-MM-DD", "");

    document.appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false,
    };


    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");


        if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            document.appData.expenses[a] = b;
        } else {
            --i;
        }
    }

    document.appData.moneyPerDay = document.appData.budget / 30;

    alert("Бюджет на 1 день составляет" + Math.round(document.appData.moneyPerDay) + " " + "грн");

    if (document.appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (document.appData.moneyPerDay > 100 && document.appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (document.appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
});

// let i = 0;
// while (i < 2) { 
//   i++;

//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//   b = prompt("Во сколько обойдется?", "");


// if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//   console.log("done");
//   document.appData.expenses[a] = b;
// }
// else{
//   --i;
// }
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");


//   if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//     console.log("done");
//     document.appData.expenses[a] = b;
//   }
//   else{
//     --i;
//   }
//   i++;
// } while (i < 2)
