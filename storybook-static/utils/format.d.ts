/**
 * Formats a number as currency
 */
export declare const formatCurrency: (amount: number, currency?: string, locale?: string) => string;
/**
 * Formats a date to a readable string
 */
export declare const formatDate: (date: Date | string | number, options?: Intl.DateTimeFormatOptions, locale?: string) => string;
/**
 * Truncates a string to a specified length
 */
export declare const truncateString: (str: string, length: number) => string;
