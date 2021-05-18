import React from "react";
import Searcheditem from "./Searcheditem";
import "../Items/Items.css";

const Searcheditemslist = (props) => {
    let data = props.data;
    let type = props.type;
    return (
        <div className="container">
            <h1 className="fw7 white">{"Search result :"}</h1>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 my-5">
                {data.length
                    ? data.map((item) => {
                          return <Searcheditem key={type === "shows" ? item.show.id : item.person.id} item={item} type={type} />;
                      })
                    : ""}
            </div>
        </div>
    );
};
export default Searcheditemslist;
