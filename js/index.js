/**
 * カレンダー
 * 1. 空きが出るマスを埋める
 * 2. 3ヶ月分表示
 * 3. 日にちをクリックで背景色をつける（再度クリックで元に戻す）
 * X月チェックボックス
 * 1. X月をクリックで全ての日付に背景色をつける/戻す
 * allCheckBox
 * 1. 全ての月の日付に対して背景色を付ける
 * 2. 全ての月の日付に対して背景色を戻す
 */

"use strict";

/**
 * API 取得データ
 */
const data = {
  eventDate: [
    // "2022-07-01",
    // "2022-08-20",
    // "2022-08-30",
    // "2022-09-10",
    // "2025-01-10",
  ],
};

/**
 * 年月日 共通
 */
const newDate = new Date();
const year = newDate.getFullYear();
const month = newDate.getMonth() + 1;
const startDate = new Date(year, month - 1, 1);
const endDate = new Date(year, month, 0);
const endDayCount = endDate.getDate();
const startDay = startDate.getDay();

/**
 * APIのデータ選択年月日から年/月のみ抽出
 * 配列から最初,最後の値を取得
 * @param {string} apiData API内の選択年月日
 * @returns 年(20XX)月(01~12)を返す
 */
const dataSelectYM = (apiData) => {
  const arrey = [];
  const eventDate = data.eventDate;

  /**
   * data.eventDate 値が 無or有
   * 無: デフォルトで3ヶ月分の値を格納
   * 有: eventDateの値を格納
   */
  if (eventDate.length === 0) {
    for (let i = 0; i <= 2; i++) {
      // 値が無い場合 デフォルトで今月から3ヶ月分の値を格納
      arrey.push([year, month + i]);
    }
  } else {
    apiData.map((value, index) => {
      const yyyy = value.substr(0, 4);
      const mm = value.substr(5, 2);
      arrey.push([yyyy, mm]);
    });
  }

  const FirstAndLast = [
    // arrey配列 最初
    [arrey[0][0], arrey[0][1]],
    // arrey配列 最後
    [arrey[arrey.length - 1][0], arrey[arrey.length - 1][1]],
  ];

  return FirstAndLast;
};
// APIデータから最初と最後の年,月を格納
const apiYM = dataSelectYM(data.eventDate);

/**
 * TODO: select要素 開始年月日/終了年月日
 */
const startYear = document.getElementById("startYear");
const endYear = document.getElementById("endYear");
const startMonth = document.getElementById("startMonth");
const endMonth = document.getElementById("endMonth");

// API 選択年
const firstYYYY = apiYM[0][0];
const endYYYY = apiYM[1][0];

// API 選択月 0埋め
const firstMM = apiYM[0][1].toString().padStart(2, "0");
const endMM = apiYM[1][1].toString().padStart(2, "0");

console.log(firstMM);

// 年 option要素を生成
for (let i = 0; i < 10; i++) {
  const years = [startYear, endYear];
  years.map((value, index) => {
    value.insertAdjacentHTML(
      "beforeend",
      `<option value="${year + i}">${year + i}年</option>`
    );
  });
}
// 月 option要素を生成
for (let i = 1; i <= 12; i++) {
  const months = [startMonth, endMonth];
  months.map((value, index) => {
    const zeropadd = i.toString().padStart(2, "0");

    value.insertAdjacentHTML(
      "beforeend",
      `<option value="${zeropadd}">${i}月</option>`
    );
  });
}

// 選択年
const strSelectedYYYY = (startYear.querySelector(
  `option[value='${firstYYYY}']`
).selected = true);
const endSelectedYYYY = (endYear.querySelector(
  `option[value='${endYYYY}']`
).selected = true);

// 選択月
const strSelectedMM = (startMonth.querySelector(
  `option[value='${firstMM}']`
).selected = true);
const endSelectedMM = (endMonth.querySelector(
  `option[value='${endMM}']`
).selected = true);

/**
 * TODO: カレンダー作成
 */
