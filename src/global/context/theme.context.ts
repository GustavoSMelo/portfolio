import { createContext } from "react";
import { type IThemeContext } from "../interface/theme.context.interface";

const ThemeContext = createContext<IThemeContext>({
    setTheme: (): void => undefined,
    theme: "dark",
});

export default ThemeContext;
