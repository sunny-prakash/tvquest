import React, { useState } from "react";
import "./Searchshows.css";
import Searcheditems from "../Searcheditems/Searcheditems";

const Searchshows = () => {
    const [radioInput, setradioInput] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [searchedData, setSearchedData] = useState([]);

    const onChangeInput = (e) => {
        setSearchInput(e.target.value);
    };
    const clearInput = () => {
        window.location.reload();
    };
    const getInputForSearch = () => {
        fetchData();
    };
    const fetchData = async () => {
        await fetch(`http://api.tvmaze.com/search/${radioInput}?q=${searchInput}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchedData(data);
            });
    };
    const radioInputSelect = (e) => {
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
                        className="mx-2"
                        type="text"
                    />
                    <button
                        onClick={() => {
                            getInputForSearch();
                        }}
                        className="btn btn-info fw6 mx-2"
                    >
                        {"Search"}
                    </button>
                    {searchedData.length ? (
                        <button
                            onClick={() => {
                                clearInput();
                            }}
                            className="btn btn-info fw6 mx-2"
                        >
                            {"Clear"}
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            {searchedData.length ? <Searcheditems data={searchedData} type={radioInput} /> : ""}
        </div>
    );
};

export default Searchshows;
