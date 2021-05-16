import React, { Component, useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Searchshows from "../components/Searchshows/Searchshows";
import Itemlist from "../components/Items/Itemlist";
import Error from "../components/Error/Error";
import tachyons from "tachyons";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        const fetchData = async () => {
            await fetch("http://api.tvmaze.com/shows")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ data });
                });
        };
        fetchData();
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/search" exact render={(props) => <Searchshows {...props} />} />
                        <Route path="/home" exact render={(props) => <Itemlist {...props} data={data} />} />
                        <Redirect from="/" exact to="/home" />
                        <Redirect to="/error" exact component={Error} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
