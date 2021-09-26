import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './App.js'
import Albums from './Albums';


export default function Drip(){

    return(
        <div>
            <header>
                <h1>Drip</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/FavSongs">Favortie Songs</a>
                    <a href="/Albums">Albums</a>
                    <a className="currenttab" href="/Drip">Drip</a>
                </nav>
            </header>
            <body>
                <h2>Gunna's outifts influence a lot of people inclding me.</h2>
                <p>Some of my favorite pieces of his are the Amiri Skelton bone sneakers, which I purchased myself, and Dior Shirst and Pants</p>
            </body>

            <footer>
                <p>This page was created by Travis Sherman</p>
            </footer>
        </div>
    );
}