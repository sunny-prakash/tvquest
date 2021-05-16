import React, { useState } from "react";
import Item from "./Item";
import "./Items.css";

const Itemlist = (props) => {
    let data = props.data;

    return (
        <div className="container">
            <h1 className="fw7">{"Shows you might like :"}</h1>
            <div className="row row-cols-2 row-cols-md-5 g-4 my-5">
                {data.length
                    ? data.map((item) => {
                          if (item.id <= 31) {
                              return <Item key={item.id} item={item} />;
                          }
                      })
                    : ""}
            </div>
        </div>
    );
};
export default Itemlist;
