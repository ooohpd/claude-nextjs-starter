/** 날짜·숫자 표시 헬퍼 */

const defaultDateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

/**
 * 로케일 기본값 ko-KR. 잘못된 날짜는 Invalid Date 문자열이 될 수 있음.
 */
export function formatDate(
  date: Date | string | number,
  locale = "ko-KR",
  options: Intl.DateTimeFormatOptions = defaultDateOptions,
): string {
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat(locale, options).format(d);
}

export function formatNumber(
  value: number,
  locale = "ko-KR",
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}
