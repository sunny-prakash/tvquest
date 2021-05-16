import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    let show = props.item;
    return (
        <div className="col">
            <div className="card" style={{ width: "10rem" }}>
                <img src={Boolean(show.image) ? show.image.medium : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} className="card_img" alt="card_img" />
                <div className="card-body">
                    <h5 className="card-title">{show.name}</h5>
                    <p className="card-text card_text">{show.summary.replaceAll(/(<([^>]+)>)/gi, "")} </p>
                    <Link to={`shows/${show.id}`} className="btn btn-primary">
                        {"Show detail"}
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Item;
