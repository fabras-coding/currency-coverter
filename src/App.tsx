import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

function App() {

  const [theme, setTheme] =useState("light");

  function toggleTheme(){
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <section id="center">
        <div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-purple-600">Currency Converter</h1>
          <p>
          Fill in the amount and select the currencies.
          </p>
        </div>
        <div>
          <CurrencyConverter />
        </div>
      
      
      </section>

    </>
  )
}

export default App
