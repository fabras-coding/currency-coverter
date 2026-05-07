
export default function ThemeToggle({theme, toggleTheme} : {theme: string, toggleTheme: () => void}) {
    return(
        <button className="border-2 hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:active:border-gray-700 dark:hover:bg-gray-600 px-1 py-1 rounded-md mt-2 shadow-lg" onClick={() => toggleTheme()}>
             {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}</button>
    )
}