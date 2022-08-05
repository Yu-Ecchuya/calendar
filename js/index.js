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
    "2022-07-01",
    "2022-08-20",
    "2022-08-30",
    "2022-09-10",
    "2025-01-10",
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
 * TODO: select要素 開始年月日/終了年月日
 */

/**
 * TODO: カレンダー作成
 */
