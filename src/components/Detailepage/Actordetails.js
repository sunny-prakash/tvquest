import React, { Component } from "react";
import "./Detailpage.css";

class Actordetails extends Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        this.state = {
            actorDetail: {},
            actorShows: [],
        };
    }
    componentWillMount() {
        // console.log(this.id);
        (async () => {
            await fetch(`https://api.tvmaze.com/people/${this.id}`)
                .then((resp) => resp.json())
                .then((data) => {
                    this.setState({ actorDetail: data });
                });
        })();
        (async () => {
            await fetch(`https://api.tvmaze.com/people/${this.id}/castcredits?embed=show`)
                .then((resp) => resp.json())
                .then((data) => {
                    // console.log("actorhsows", data);
                    this.setState({ actorShows: data });
                });
        })();
    }

    render() {
        const { actorDetail, actorShows } = this.state;
        return (
            <div className="mv3 white helvetica">
                {Boolean(actorDetail.name) ? (
                    <div>
                        <div className="d-flex justify-content-center">
                            <div>
                                <img className="detail_img" src={Boolean(actorDetail.image) ? actorDetail.image.original : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} alt="show_img" />
                            </div>
                            <div className="mh5">
                                <h1 className="fw7">{actorDetail.name}</h1>
                                <h4 className="fw6">{`Country : ${actorDetail.country.name}`}</h4>
                                <p>{`Birthday : ${Boolean(actorDetail.birthday) ? actorDetail.birthday : "NA"}`}</p>
                                <p>{`Gender : ${Boolean(actorDetail.gender) ? actorDetail.gender : "NA"}`}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>{"Loading...."}</h1>
                )}
                {
                    <div className="black">
                        <h1 className="white fw7">{"Starred In :"}</h1>
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 my-2">
                            {actorShows.map((elem) => {
                                return (
                                    <div className="col">
                                        <div className="card" style={{ width: "10rem" }}>
                                            <img src={Boolean(elem._embedded.show.image) ? elem._embedded.show.image.medium : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} className="card_img" alt="card_img" />
                                            <div className="card-body">
                                                <h5 className="card-title fw6">{elem._embedded.show.name}</h5>
                                                <p className="card-text card_text">{elem._embedded.show.summary.replaceAll(/(<([^>]+)>)/gi, "")} </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Actordetails;
