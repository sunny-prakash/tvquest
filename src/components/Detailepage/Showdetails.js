import React, { Component } from "react";
import "./Detailpage.css";
import { Link } from "react-router-dom";

class Showdetails extends Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        this.state = {
            showDetail: {},
        };
    }
    componentWillMount() {
        (async () => {
            await fetch(`http://api.tvmaze.com/shows/${this.id}?embed[]=seasons&embed[]=cast`)
                .then((resp) => resp.json())
                .then((data) => {
                    this.setState({ showDetail: data });
                });
        })();
    }

    render() {
        const { showDetail } = this.state;
        return (
            <div className="mv3  helvetica">
                {Boolean(showDetail.name) ? (
                    <div>
                        <div className="d-flex justify-content-center white">
                            <img className="detail_img mt4" src={Boolean(showDetail.image) ? showDetail.image.original : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} alt="show_img" />

                            <div className="mh5">
                                <h1 className="fw7">{showDetail.name}</h1>
                                <h4 className="fw6">{`Language : ${showDetail.language}`}</h4>
                                <p>
                                    {"Genres : "}
                                    {showDetail.genres.map((genre) => {
                                        return <span>{`${genre}   `}</span>;
                                    })}
                                </p>
                                <p>{`Status : ${showDetail.status}`}</p>
                                <p>{`Ratings : ${showDetail.rating.average}`}</p>
                                <div>{showDetail.summary.replaceAll(/(<([^>]+)>)/gi, "")}</div>
                            </div>
                        </div>
                        <div>
                            <h1 className="white fw7">{"Seasons :"}</h1>
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 my-2">
                                {showDetail._embedded.seasons.map((season) => {
                                    return (
                                        <div className="col">
                                            <div className="card" style={{ width: "10rem" }}>
                                                <img src={Boolean(season.image) ? season.image.medium : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} className="card_img" alt="card_img" />
                                                <div className="card-body">
                                                    <h5 className="card-title fw6">{`Season : ${season.number}`}</h5>
                                                    <p className="card-text fw6">{`Episodes : ${season.episodeOrder}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <h1 className="white fw7">{"Casts :"}</h1>
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 my-2">
                                {showDetail._embedded.cast.map((cast) => {
                                    return (
                                        <div className="col">
                                            <div className="card" style={{ width: "10rem" }}>
                                                <img src={Boolean(cast.person.image) ? cast.person.image.medium : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} className="card_img" alt="card_img" />
                                                <div className="card-body">
                                                    <h5 className="card-title fw6">{cast.person.name}</h5>
                                                    <p className="card-text fw6">{`As : ${cast.character.name}`}</p>
                                                    <Link to={`actor/${cast.person.id}`} className="btn btn-primary">
                                                        {"Show detail"}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>{"Loading...."}</h1>
                )}
            </div>
        );
    }
}

export default Showdetails;
