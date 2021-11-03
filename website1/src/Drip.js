import './App.css'
import Home from './App.js'
import Drip1 from './images/gunnaDrip1.jpg';
import Drip2 from './images/gunnaDrip2.jpg';
import Drip3 from './images/gunnaDrip3.jpg';


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
            <body id="body">
                <h2>Gunna's Drip has influenced many people around the world</h2>
                <div id = "image">
                    Hover over an image below to display here.
                </div>
	
                <img class = "preview" src={Drip1} alt="Wool Coat"
                    onMouseEnter={() => upDatePic(Drip1, 'Wool Coat')}
                    onMouseOut={() => unDo()}/>
                
                <img class = "preview" src={Drip2} alt="B/W Nikes" 
                    onMouseEnter={() => upDatePic(Drip2, 'B/W Nikes')}
                    onMouseOut={() => unDo()}/>
                
                <img class = "preview" src={Drip3} alt="B/W LV Shoes" 
                    onMouseEnter={() => upDatePic(Drip3, 'B/W LV Shoes')} 
                    onMouseOut={() => unDo()}/>

            </body>

            <footer>
                <p>This </p>
            </footer>
        </div>
    );
}

function upDatePic(previewPic, previewAlt) {
    document.getElementById('image').innerHTML = previewAlt ;
    document.getElementById('image').style.backgroundImage = "url(" + previewPic + ")";
}

function unDo() {

    document.getElementById('image').style.backgroundImage = "url('')"
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
}