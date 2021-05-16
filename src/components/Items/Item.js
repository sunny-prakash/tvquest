import React from "react";

const Item = (props) => {
    let item = props.item;
    return (
        <div className="col">
            <div className="card" style={{ width: "10rem" }}>
                <img src={Boolean(item.image) ? item.image.medium : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} className="card_img" alt="card_img" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text card_text">{item.summary.replaceAll(/(<([^>]+)>)/gi, "")} </p>
                    <a href="#" className="btn btn-primary">
                        {"Show detail"}
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Item;
