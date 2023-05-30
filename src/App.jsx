import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Layout from './layout/Layout'
import News from './routes/News'
import Home from './routes/Home'
import UnderConstruction from './routes/Under'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/AKKS' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='news' element={<News />}/>
            <Route path='under' element={<UnderConstruction />}/>
            <Route path='*' element={<h1>404</h1>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
