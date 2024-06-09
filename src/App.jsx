import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
// import { SearchProvider } from './Context/SearchContext'
import QueryResults from './pages/QueryResults'
import ImageResult from './pages/ImageResult'
// import Footer from './ui/Footer'
// import Navbar from './ui/Navbar'

function App() {
  return <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='search' element={<SearchResults />} >
            
            <Route path='query/:queryNav' element={<QueryResults />} />
            <Route path='id/:idNav' element={<ImageResult />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    
  </>
}

export default App
