import axios from "axios";
import { useState } from "react";

const Search = (props) => {
    const setRepositories = props.setRepositories
    const setIsLoading = props.setIsLoading
    const [search, setSearch] = useState("")
    const submitHandler = (event) => {
        event.preventDefault()
        setIsLoading(true)
        let apiBasePath = process.env.REACT_APP_API_BASE_PATH
        console.log("apiBasePath: ", apiBasePath);
        axios.get(`${apiBasePath}/special-search/repositories?q=${search}`)
            .then(data => {
                console.log("repos: ", data);
                setRepositories(data.data.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log("error: ", error);
                setIsLoading(false)
            })
    }
    return (
        <>
            <div>
                <form>
                    <div className="search-container">
                        <input type="text" id="search-input" placeholder="Search for a ripository..." onChange={event => setSearch(event.target.value)} />
                        <button type="submit" id="search-button" onClick={submitHandler}><i className="fas fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Search;
