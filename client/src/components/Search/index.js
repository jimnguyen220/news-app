import React, { useState, useContext } from "react";
import ArticleContext from "../../utils/ArticleContext";
import "./style.css";
require('dotenv').config();


function Search() {

    const [search, setSearch] = useState();
    const {articles, setArticles} = useContext(ArticleContext)

    
    const handleInputChange = event => {

        const { value } = event.target;
        setSearch(value);
    }

    const handleOnClick = event => {
        event.preventDefault();
        //Call API here with value from search
        // console.log(search)
        fetch('/api/articles/search/' + search)
            .then(res => res.json())
            .then(result =>setArticles(result))
            .catch(err => console.log(err));
    };



    return (
        <form className="d-flex">
            <input
                className="form-control me-2"
                value={search}
                onChange={handleInputChange}
                placeholder="Search"
            />
            <button
                className="btn btn-success"
                type="submit"
                onClick={handleOnClick}
            >
                Search
        </button>
        </form>
    )
}

export default Search;