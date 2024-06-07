import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import { SearchProvider } from './Context/SearchContext'
import QueryResults from './pages/QueryResults'
import ImageResult from './pages/ImageResult'

function App() {
  return <>
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='search' element={<SearchResults />} >
            <Route path='query/:query' element={<QueryResults />} />
            <Route path='id/:id' element={<ImageResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  </>
}

export default App
