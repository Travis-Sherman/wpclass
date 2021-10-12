import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from './App.js';
import FavSongs from './FavSongs';
import Drip from './Drip';


export default function Albums(){

    return(
        <div>
            <header>
                <h1>Albums and Mixtapes</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/FavSongs">Favortie Songs</a>
                    <a className="currenttab" href="/Albums">Albums</a>
                    <a href="/Drip">Drip</a>
                </nav>
            </header>


            <body>
            <div>
          <h2 className="header2">Gunna's Projects</h2>
          <p>Gunna Has Charted Multiple Times in His Career and isn't Slowing Down Anytime Soon.</p>
          <table class="table">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Details</th>
              <th>Peak U.S. Chart Position</th>
            </tr>
            <tr>
              <td>Drip or Drown 2</td>
              <td>Album</td>
              <td>
                <ul>
                  <li>Released: February 22, 2019</li>
                  <li>Label: YSL, 300</li>
                  <li>Certified RIAA: Gold</li>
                </ul>
              </td>
              <td>3</td>
            </tr>
            <tr>
              <td>Wunna</td>
              <td>Album</td>
              <td>
                <ul>
                  <li>Released: May 22, 2020</li>
                  <li>Label: YSL, 300</li>
                  <li>Certified RIAA: Platium</li>
                </ul>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>Drip Season 4</td>
              <td>Album</td>
              <td>
                <ul>
                  <li>Expected Date: 2021</li>
                  <li>Label: YSL, 300</li>
                  <li>To be Released</li>
                </ul>
              </td>
              <td>To be released</td>
            </tr>
            <tr>
              <td>
                Slime Laguage 2
                <p>(with YSL Records and Young Thug)</p>
              </td>
              <td>Album</td>
              <td>
                <ul>
                  <li>Released: April 16, 2021</li>
                  <li>Label: YSL, 300, Atlantic</li>
                  <li>N/A</li>
                </ul>
              </td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                Drip Harder
                <p>(with Lil Baby)</p>
              </td>
              <td>Mixtape</td>
              <td>
                <ul>
                  <li>Released: October 5, 2018</li>
                  <li>Label: YSL, 300</li>
                  <li>
                    Certified
                    <ul>
                      <li>RIAA: Platinum</li>
                      <li>MC: Gold</li>
                    </ul>
                  </li>
                </ul>
              </td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                Super Slimey: Surfer Edition
                <p>(with Young Thug, Future and Lil Baby)</p>
              </td>
              <td>Mixtape</td>
              <td>
                <ul>
                  <li>Expected Date: 2021</li>
                  <li>Label: YSL Records, Freebandz, Quality Control Music</li>
                  <li>To be released</li>
                </ul>
              </td>
              <td>To be released</td>
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
