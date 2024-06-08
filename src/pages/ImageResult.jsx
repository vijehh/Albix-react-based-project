import { useContext, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom"
import { SearchContext } from "../Context/SearchContext";
import styles from './ImageResult.module.scss'
import TagButtons from "../ui/TagButtons";
import RelevantResults from "../ui/RelevantResults";

const API_KEY = '42857731-1529682eb076fe57ea890d75d';
const URL = 'https://pixabay.com/api/?key=';


function ImageResult() {
    const [_, id] = useOutletContext();
    console.log(id);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState();

    useEffect(()=>{
        
        const fetchData = async () =>{
            try {
                setIsLoading(true);
                const response = await fetch(`${URL}${API_KEY}&id=${id}`);
                const imgData = await response.json();
                setResult(imgData.hits[0]);
                console.log(imgData.hits[0]);
            }

            catch(error){
                console.error('smth happened')
            }

            finally{
                setIsLoading(false);
            }

            
        }
        fetchData();
        // setIsLoading(false);
    }, [id])


    
    // console.log(tags);

    // console.log(results);

    // const [result] = results.filter(el=>el.id==id);
    // console.log(result);

    // console.log(id);

    if(!result) return <div>No result...</div>

    if(isLoading) return <div>loading....</div>

    return (<>
        <div className={styles.searchview__sizer}></div>
        <img className="search-view__image image--main" src={result.largeImageURL} alt="smth"></img>
        <TagButtons result={result} />
        {/* <RelevantResults /> */}
        
    </>
    )
}

export default ImageResult
