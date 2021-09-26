import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './App.js'
import Albums from './Albums';
import Drip from './Drip';

export default function FavSongs(){

    return(
        <div>
            <header>
                <h1>Favorite Songs</h1>
                <nav>
                    <a href="/">Home</a>
                    <a  className="currenttab" href="/FavSongs">Favortie Songs</a>
                    <a href="/Albums">Albums</a>
                    <a href="/Drip">Drip</a>
                </nav>
            </header>
            <body>
            <div>
          <h2 className="header2">My Ranking of my Favorite Songs from Gunna</h2>
          <table classname="table">
            <tr>
              <th>Name</th>
              <th>Album</th>
              <th>Favorite Lyric</th>
              <th>The Sherman Ranking</th>
            </tr>
            <tr>
              <td>Richard Millie Plain</td>
              <td>Drip or Drown 2</td>
              <td>"Did the dash and I blowed the brains. Countin' cash on a private plane. Couple M's on the sound exchange. Richard Millie no time to explain"</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Stackin It with Nechie</td>
              <td>Shady Baby</td>
              <td>"Stars in the ceiling, they galaxy (Stars). B****es with differnt nationalities (Woah)"</td>
              <td>2</td>
            </tr>
            <tr>
              <td>200 for Lunch</td>
              <td>Wunna</td>
              <td>"I had two hunnid for lunch ... 24 shows in a month. Looked at the time, it was crunch (Time). Ice, diamonds is crushed (Ice)"</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Baby Birkin</td>
              <td>Drip or Drown 2</td>
              <td>"Young Gunna wunna jumped in head-first. From the streets, I finally found my worth"</td>
              <td>4</td>
            </tr>
            <tr>
              <td>One Call</td>
              <td>Drip or Drown 2</td>
              <td>"You need to stop livin' a lie (Lie) ... I knew I'd be rich before I die (Die). They won't repsect you till you try"</td>
              <td>5</td>
            </tr>
            </table>
            </div>
            </body>

            <footer>
                <p>This page was created by Travis Sherman</p>
            </footer>
        </div>
    );
}