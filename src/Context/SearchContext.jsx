import { createContext, useState } from "react"

const API_KEY = '42857731-1529682eb076fe57ea890d75d';
const URL = 'https://pixabay.com/api/?key=';
const SearchContext = createContext();



function SearchProvider({ children }) {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState();
    // const [tag, setTag] = useState();
    const [tagRes, setTagRes] = useState();

    async function searchQuery(){
        const response = await fetch(`${URL}${API_KEY}&q=${query}`);
        const imgData = await response.json();
        setResults(imgData.hits);
        // console.log(results);
        
    }

    async function searchTag(tag){
        const response = await fetch(`${URL}${API_KEY}&q=${tag}`);
        const imgData = await response.json();
        setTagRes(imgData.hits);
        // console.log(results);
    }

    return (
        <SearchContext.Provider value={{
            query,
            setQuery,
            searchQuery,
            results,
            tagRes,
            searchTag
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export {SearchProvider, SearchContext}
