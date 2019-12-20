import { Calendar } from './calendar';
export declare class Litepicker extends Calendar {
    protected triggerElement: any;
    protected backdrop: any;
    constructor(options: any);
    private onInit;
    private parseInput;
    private updateInput;
    private isSamePicker;
    private shouldShown;
    private shouldResetDatePicked;
    private shouldSwapDatePicked;
    private shouldCheckLockDays;
    private onClick;
    private showTooltip;
    private hideTooltip;
    private shouldAllowMouseEnter;
    private shouldAllowRepick;
    private onMouseEnter;
    private onMouseLeave;
    private onKeyDown;
    private onInput;
    private isShowning;
}
