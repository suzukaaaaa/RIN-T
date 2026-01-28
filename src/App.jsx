import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import './index.css'
import PL from './pl'
import PLMAIN from './lp-main'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div style={{ paddingTop: '81px' }}>
        <PL />
      </div>
      <PLMAIN />
      <Footer />
      {/* <h1>今からサンプル作ってみるよ！</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <a href='/' className="read-the-docs">
        Click on the Vite and React logos to learn more
      </a> */}
    </>
  )
}

export default App
