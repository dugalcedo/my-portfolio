import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Background from './components/Background'
import About from './routes/About'
import Projects from './routes/Projects'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Background />
      <div id="tooltip"></div>
      <div id="wrapper">
        <BrowserRouter>
          <div id="top">
          </div>
          <div id="middle">
            <div id="middle-inner">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects/*" element={<Projects />} />
              </Routes>
            </div>
          </div>
          <div id="bottom">
            <Nav />
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
