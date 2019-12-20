export declare class DateTime extends Date {
    static parseDateTime(date: any, format?: string, lang?: string): Date;
    static convertArray(array: any, format: any): any;
    protected lang: any;
    constructor(date?: any, format?: any, lang?: string);
    getWeek(firstDay: any): number;
    clone(): DateTime;
    isBetween(date1: any, date2: any, check?: string): boolean;
    isBefore(date: any, unit?: string): boolean;
    isSameOrBefore(date: any, unit?: string): boolean;
    isAfter(date: any, unit?: string): boolean;
    isSameOrAfter(date: any, unit?: string): boolean;
    isSame(date: any, unit?: string): boolean;
    add(duration: any, unit?: string): this;
    subtract(duration: any, unit?: string): this;
    diff(date: any, unit?: string): number;
    format(format: any, lang?: string): string;
}