export interface DateRange {
    startDate: string | null;
    endDate: string | null;
}

export interface DateRangePickerProps {
    value: DateRange;
    onChange: (value: DateRange) => void;
    placeholder?: string;
    className?: string;
}
