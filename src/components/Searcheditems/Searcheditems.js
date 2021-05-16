import React from "react";
import Searcheditem from "./Searcheditem";
import "../Items/Items.css";

const Searcheditems = (props) => {
    let data = props.data;
    let type = props.type;
    return (
        <div className="container">
            <h1 className="fw7">{"Search result :"}</h1>
            <div className="row row-cols-2 row-cols-md-5 g-4 my-5">
                {data.length
                    ? data.map((item) => {
                          return <Searcheditem key={item.id} item={item} type={type} />;
                      })
                    : ""}
            </div>
        </div>
    );
};
export default Searcheditems;
