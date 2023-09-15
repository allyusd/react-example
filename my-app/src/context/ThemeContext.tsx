import { ReactNode, createContext, useContext, useState } from "react";

export const ThemeContext = createContext('');

export default function useTheme() {
  return useContext(ThemeContext)
}

export  function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
    { children }
    <label>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={(e) => {
          setTheme(e.target.checked ? 'dark' : 'light')
        }}
      />
      Use dark mode
    </label>
  </ThemeContext.Provider>
  )
}
