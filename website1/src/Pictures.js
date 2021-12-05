import './App.css';
import gunnapic1 from './images/Gunnapic1.jpg'
import gunnapic2 from './images/Gunnapic2.jpg'
import gunnapic3 from './images/Gunnapic3.jpg'
import yslpic from './images/yslpic.jpg'


export default function Pictures(){

    return(
        <div>
             <header>
                <h1>Gunna's Best Pictures</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/FavSongs">Favortie Songs</a>
                    <a href="/Albums">Albums</a>
                    <a href="/Drip">Drip</a>
                    <a href="/Purchase">Purchase</a>
                    <a className="currenttab" href="/Pictures">Pictures</a>
                </nav>
            </header>

            <body>
                <p>Here are some of my favorite pictures of Gunna and his homies.</p>
                <div>
                    <img src={gunnapic1} className='img-reponsive' alt='Gunna Portrait' style={{padding: '1%'}}/>
                    <img src={gunnapic3} className='img-reponsive' alt='Gunna and Lil Baby' style={{padding: '1%'}}/>
                    <img src={gunnapic2} className='img-reponsive' alt='Gunna Skybox' style={{padding: '1%'}}/>
                    
                    <img src={yslpic} className='img-reponsive' alt='Slime Language 2 album cover' style={{padding: '1%'}}/>
                </div>
            </body>

            <footer>
                <p>This page was created by Travis Sherman</p>
            </footer>
        </div>
    );
}