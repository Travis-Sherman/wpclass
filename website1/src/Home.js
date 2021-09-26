import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FavSongs from './FavSongs.js';
import Albums from './Albums';
import Drip from './Drip';

function Home() {
  return (
 <div>
    <header>
        <h1>Gunna Wunna Drip</h1> 
        <nav>
          <a className="currenttab" href="/">Home</a>
          <a href="/FavSongs">Favortie Songs</a>
          <a href="/Albums">Albums</a>
          <a href="/Drip">Drip</a>
        </nav>
      </header>
    
 
      <body>
        <div>

            <section>
                <div>
                    <h2>About</h2>
                    <ul>
                        <li>Named Sergio Giavanni Kitchens</li>
                        <li>Born June 14, 1993 (age 28 years) in College Park, Ga</li>
                        <li>Heavily Associated with YSL, Young Thug, Lil Baby</li>
                    </ul>
                </div>

                <div>
                    <h2>Interviews</h2>
                    <ul>
                        <li>
                        <a href="https://youtu.be/_hYs5I__DKo" target="_blank" rel="noreferrer">10 Things Gunna Can't Live Without</a>
                        </li>

                        <li>
                        <a href="https://youtu.be/cCQf-pJRmtU" target="_blank" rel="noreferrer">Gunna's Worst and Best Purchases</a>
                        </li>

                        <li>
                        <a href="https://hypebeast.com/2020/6/gunna-wunna-album-interview" target="_blank" rel="noreferrer">Gunna talks about most recent album 'Wunna'</a>
                        </li>

                        <li>
                        <a href="https://www.interviewmagazine.com/music/gunna-and-young-thug-share-rules-to-live-by-smoke-after-sex-keep-your-kitchen-lit" target="_blank" rel="noreferrer">Gunna and Young Thug talk about Rules to Live By</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2>Social Media</h2>

                    <ul>
                        <li>
                            <a className ="a" href="https://www.instagram.com/gunna/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
                        </li>

                        <li>
                            <a className ="a" href="https://twitter.com/1gunnagunna?lang=en" target="_blank" rel="noreferrer">Twitter</a>
                        </li>

                        <li>
                            <a  className ="a" href="https://www.youtube.com/channel/UCAkIMkEaa9sZmjcy7mfd5lQ" target="_blank" rel="noreferrer">Youtube</a>
                        </li>

                        <li>
                            <a  className ="a" href="https://www.facebook.com/gunnaofficial/" target="_blank" rel="noreferrer">Facebook</a>
                        </li>
                    </ul>

                        
                        

                    
                </div>
                
            </section>
          
        </div>
        
        <section classname="media">
          <iframe width="75%" height="515" //To autoplay a youtube video I added autoplay=1 to the src link below
            src="https://www.youtube.com/embed/3BOuz4dBkkE?start=25&autoplay=1&mute=1" title="Gunna Baby Birkin">
              Your browser does not allow video.
          </iframe>
          
        </section> 
          
      </body>

      <footer>
        <p>This page was created by Travis Sherman</p>
      </footer>
    </div>

  );
}

export default Home;