import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import { SearchProvider } from './Context/SearchContext'

function App() {
  return <>
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/search' element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  </>
}

export default App
