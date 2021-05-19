import React, { Component, useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Searchshows from "../components/Searchshows/Searchshows";
import Itemlist from "../components/Items/Itemlist";
import Errorpage from "../components/Errorpage/Errorpage";
import Showdetails from "../components/Detailepage/Showdetails";
import Actordetails from "../components/Detailepage/Actordetails";
import tachyons from "tachyons";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        let page = Math.floor(Math.random() * 100);
        const fetchData = async () => {
            await fetch(`https://api.tvmaze.com/shows?page=${page}`)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ data: data });
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
                        <Route path="/shows/:id" exact component={Showdetails} />
                        <Route path="/shows/actor/:id" exact component={Actordetails} />
                        <Route path="/actor/:id" exact component={Actordetails} />
                        <Redirect from="/" exact to="/home" />
                        <Redirect from="/tvquest" exact to="/home" />
                        <Route to="/error" component={Errorpage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
