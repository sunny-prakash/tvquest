import React, { useState } from "react";
import "./Searchshows.css";
import Searcheditemslist from "../Searcheditems/Searcheditemslist";

const Searchshows = () => {
    const [radioInput, setradioInput] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [searchedData, setSearchedData] = useState();
    const [showNotFound, setShowNotFound] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [noInputError, setNoInputError] = useState(false);

    const onChangeInput = (e) => {
        setSearchInput(e.target.value);
    };
    const clearInput = () => {
        window.location.reload();
    };
    const getInputForSearch = () => {
        if (radioInput === "" || searchInput === "") {
            setNoInputError(true);
            return;
        }
        setNoInputError(false);
        fetchData();
    };
    const fetchData = async () => {
        await fetch(`https://api.tvmaze.com/search/${radioInput}?q=${searchInput}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length) {
                    setSearchedData(data);
                    setShowNotFound(false);
                    setShowContent(true);
                } else {
                    setSearchedData([]);
                    setShowNotFound(true);
                    setShowContent(false);
                }
            });
    };
    const radioInputSelect = (e) => {
        e.preventDefault();
        setradioInput(e.target.value);
    };
    return (
        <div className="container my-3">
            <div className="search_bar">
                <div className="d-flex justify-content-center flex-wrap my-3 white fw6">
                    <div>
                        <span>{"Search By :"}</span>
                    </div>
                    <div>
                        <label className="mx-3" htmlFor="searchtype">
                            {"Actor"}
                        </label>
                        <input
                            onChange={(e) => {
                                radioInputSelect(e);
                            }}
                            id="actors"
                            type="radio"
                            name="searchtype"
                            value="people"
                        />
                    </div>
                    <div>
                        <label className="mx-3" htmlFor="shows">
                            {"Shows"}
                        </label>
                        <input
                            onChange={(e) => {
                                radioInputSelect(e);
                            }}
                            id="shows"
                            type="radio"
                            name="searchtype"
                            value="shows"
                        />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    <input
                        onChange={(e) => {
                            onChangeInput(e);
                        }}
                        className="m-2"
                        type="text"
                    />
                    <button
                        onClick={() => {
                            getInputForSearch();
                        }}
                        className="btn btn-info fw6 m-2"
                    >
                        {"Search"}
                    </button>
                    {!showNotFound && showContent ? (
                        <button
                            onClick={() => {
                                clearInput();
                            }}
                            className="btn btn-info fw6 m-2"
                        >
                            {"Clear"}
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            {noInputError ? <h1 className="white fw7">{"Search is empty"}</h1> : ""}
            {showNotFound && !showContent ? <h1 className="white fw7">{"Seacrhed Item Not Found"}</h1> : ""}
            {!showNotFound && showContent ? <Searcheditemslist data={searchedData} type={radioInput} /> : ""}
        </div>
    );
};

export default Searchshows;
