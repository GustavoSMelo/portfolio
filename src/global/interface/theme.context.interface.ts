export interface IThemeContext {
    theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}
