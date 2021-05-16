import React, { Component } from "react";
import "./Detailpage.css";

class Actordetails extends Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        this.state = {
            actorDetail: {},
        };
    }
    componentWillMount() {
        console.log(this.id);
        (async () => {
            await fetch(`http://api.tvmaze.com/people/${this.id}`)
                .then((resp) => resp.json())
                .then((data) => {
                    this.setState({ actorDetail: data });
                });
        })();
    }

    render() {
        const { actorDetail } = this.state;
        return (
            <div className="mv3 white helvetica">
                {Boolean(actorDetail.name) ? (
                    <div className="d-flex justify-content-center">
                        <div>
                            <img className="detail_img" src={Boolean(actorDetail.image) ? actorDetail.image.original : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} alt="show_img" />
                        </div>
                        <div className="mh5">
                            <h1 className="fw7">{actorDetail.name}</h1>
                            <h4 className="fw6">{`Country : ${actorDetail.country.name}`}</h4>
                            <p>{`Birthday : ${Boolean(actorDetail.birthday) ? actorDetail.birthday : "NA"}`}</p>
                            <p>{`Birthday : ${Boolean(actorDetail.gender) ? actorDetail.gender : "NA"}`}</p>
                        </div>
                    </div>
                ) : (
                    <h1>{"Loading...."}</h1>
                )}
            </div>
        );
    }
}

export default Actordetails;
