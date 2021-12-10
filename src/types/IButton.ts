export interface IButton {
    value: string;
    settingQuotes(value: string): void;
    disabled?: boolean;
}
