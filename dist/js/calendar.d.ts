import { DateTime } from './datetime';
export declare class Calendar {
    protected options: any;
    protected calendars: DateTime[];
    protected picker: HTMLElement;
    protected datePicked: DateTime[];
    protected render(): void;
    protected renderMonth(date: DateTime): HTMLDivElement;
    protected renderDay(date: DateTime): HTMLAnchorElement;
    protected renderFooter(): HTMLDivElement;
    protected renderWeekNumber(date: any): HTMLDivElement;
    protected renderTooltip(): HTMLDivElement;
    private weekdayName;
    private calcSkipDays;
}
