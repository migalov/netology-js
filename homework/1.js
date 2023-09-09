// Task 1

let username = "Michel",
    bonusBalance = 1000;

console.log(
  `Пользователь ${username}\nБаланс ${bonusBalance}
`);

// Task 2
let DAYS_COUNT = 7; // Количество дней

const POINTS_FOR_PURCHASE = 50, // Увеличение баллов за покупку
      DAILY_POINT_DEDUCTION = 3; // Величина ежедневного списания баллов

const currentBalance = (
  daysCount, // Количество дней
  purchaseFrequency, // Частота покупок прим. (2 - раз в два дня)
) => {
  
    let sumPointsforPurchase = 0; // Баллы за покупку
    let sumDailyPointDeduction = daysCount * DAILY_POINT_DEDUCTION; // Сумма списанных баллов за [daysCount] дней

    for(i = 0; i < daysCount; i++) {

      if(i % purchaseFrequency === 0) {
           sumPointsforPurchase += POINTS_FOR_PURCHASE
       }
    }
  
  return bonusBalance + sumPointsforPurchase - sumDailyPointDeduction;
}

console.log(`Через ${DAYS_COUNT} дней ваш баланс будет равен ${currentBalance(DAYS_COUNT, 2)}`);