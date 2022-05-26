/**
 * Format a number as an integer, rounding to the closest integer if necessary.
 *
 * @example
 * formatInteger(1.9)   // "2"
 * formatInteger(1.1)   // "1"
 * formatInteger(15999) // "15,999"
 *
 * @param value Number to format
 * @returns Formatted number (as string)
 */
export function formatInteger(value: number): string {
  return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

/**
 * Format a number using fixed point notation.
 *
 * @example
 * formatDecimal(1.2345)    // "1.23"
 * formatDecimal(1.2345, 3) // "1.235"
 *
 * @param value Number to format
 * @param places (optional) Number of decimal places to round to (defaults to 2)
 * @param options (optional) Object of international number formatting options (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
 * @returns Formatted decimal (as string)
 */

export function formatDecimal(value: number, places?: number): string;
export function formatDecimal(
  value: number,
  options?: Intl.NumberFormatOptions
): string;
export function formatDecimal(
  value: number,
  placesOrOptions: number | Intl.NumberFormatOptions = 2
): string {
  return typeof placesOrOptions === "number"
    ? new Intl.NumberFormat(undefined, {
        maximumFractionDigits: placesOrOptions,
      }).format(value)
    : new Intl.NumberFormat(undefined, placesOrOptions).format(value);
}

/**
 * Format a percentage representation of a number.
 *
 * The number is multiplied by 100 to create a percentage.
 *
 * @example
 * formatPercent(0.85)      // 85%
 * formatPercent(0.1234)    // 12%
 * formatPercent(0.8567, 2) // 85.67%
 *
 * @param value Number to format
 * @param places (optional) Number of decimal places to round to (defaults to 0)
 * @param options (optional) Object of international number formatting options (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
 * @returns Formatted percentage (as string)
 */

export function formatPercent(value: number, places?: number): string;
export function formatPercent(
  value: number,
  options?: Intl.NumberFormatOptions
): string;
export function formatPercent(
  value: number,
  placesOrOptions: number | Intl.NumberFormatOptions = 0
): string {
  return typeof placesOrOptions === "number"
    ? new Intl.NumberFormat(undefined, {
        style: "percent",
        maximumFractionDigits: placesOrOptions,
      }).format(value)
    : new Intl.NumberFormat(undefined, {
        style: "percent",
        ...placesOrOptions,
      }).format(value);
}

/**
 * Format a number in millions.
 *
 * @example
 * formatMillions(1_555_000) // "1.56"
 * formatMillions(1_555_000, { minimumFractionDigits: 3 }) // "1.555"
 *
 * @param value Number to format
 * @param places (optional) Number of decimal places to round to (defaults to 3)
 * @param options (optional) Object of international number formatting options (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
 * @returns Formatted number (as string)
 */

export function formatMillions(value: number, places?: number): string;
export function formatMillions(
  value: number,
  options?: Intl.NumberFormatOptions
): string;
export function formatMillions(
  value: number,
  placesOrOptions: number | Intl.NumberFormatOptions = 2
): string {
  const millifiedValue = value / 1_000_000;
  return typeof placesOrOptions === "number"
    ? new Intl.NumberFormat(undefined, {
        maximumFractionDigits: placesOrOptions,
      }).format(millifiedValue)
    : new Intl.NumberFormat(undefined, placesOrOptions).format(millifiedValue);
}

/**
 * Format a number in billions.
 *
 * @example
 * formatBillions(1_888_000_000) // "1.88"
 * formatBillions(1_888_000_000, { minimumFractionDigits: 3 }) // "1.888"
 *
 * @param value Number to format
 * @param places (optional) Number of decimal places to round to (defaults to 3)
 * @param options (optional) Object of international number formatting options (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
 * @returns Formatted number (as string)
 */

export function formatBillions(value: number, places?: number): string;
export function formatBillions(
  value: number,
  options?: Intl.NumberFormatOptions
): string;
export function formatBillions(
  value: number,
  placesOrOptions: number | Intl.NumberFormatOptions = 2
): string {
  const billifiedValue = value / 1_000_000_000;
  return typeof placesOrOptions === "number"
    ? new Intl.NumberFormat(undefined, {
        maximumFractionDigits: placesOrOptions,
      }).format(billifiedValue)
    : new Intl.NumberFormat(undefined, placesOrOptions).format(billifiedValue);
}