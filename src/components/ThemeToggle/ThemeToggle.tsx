
export default function ThemeToggle({theme, toggleTheme} : {theme: string, toggleTheme: () => void}) {
    return(
        <button className="border-2 bg-purple-700" onClick={() => toggleTheme()}>
             {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}</button>
    )
}