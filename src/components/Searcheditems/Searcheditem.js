import React from "react";

const Searcheditem = (props) => {
    let item = props.item;
    let type = props.type;
    return (
        <div className="col">
            {type === "shows" ? (
                <div className="card" style={{ width: "10rem" }}>
                    <img src={Boolean(item.show.image) ? item.show.image.medium : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} className="card_img" alt="card_img" />
                    <div className="card-body">
                        <h5 className="card-title">{item.show.name}</h5>
                        <p className="card-text card_text">{item.show.summary.replaceAll(/(<([^>]+)>)/gi, "")} </p>
                        <a href="#" className="btn btn-primary">
                            {"Movie detail"}
                        </a>
                    </div>
                </div>
            ) : (
                <div className="card" style={{ width: "10rem" }}>
                    <img src={Boolean(item.person.image) ? item.person.image.medium : "https://cdn.pixabay.com/photo/2016/09/16/00/17/movie-1673024_960_720.jpg"} className="card_img" alt="card_img" />
                    <div className="card-body">
                        <h5 className="card-title">{item.person.name}</h5>
                        <p className="card-text card_text">{item.person.url} </p>
                        <a href="#" className="btn btn-primary">
                            {"Show detail"}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Searcheditem;
