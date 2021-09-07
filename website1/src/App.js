
import './App.css';

function App() {
  return (
  <div classname="App">
      <header>
        <h1>Gunna Wunna Drip</h1>
      </header>

      <body>
        <div>
          <h2>About Gunna's Lifestyle</h2>
          <ul>
            <li>Named Sergio Giavanni Kitchens</li>
            <li>Born June 14, 1993 (age 28 years) in College Park, Ga</li>
            <li>Heavily Associated with YSL, Young Thug, Lil Baby and many other artist from Atlanta, Ga</li>
          </ul>
        </div>
        
        <section classname="media">
          <iframe width="75%" height="515" //To autoplay a youtube video I added autoplay=1 to the src link below
            src="https://www.youtube.com/embed/3BOuz4dBkkE?start=25&autoplay=1&mute=1" title="Gunna Baby Birkin">
              Your browser does not allow video.
          </iframe>
          
        </section>

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
          </ul>
        </div>

        <div>
          <h2>Albums and Mixtapes</h2>
          <table classname="table">
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

    </div>
  );
}

export default App;
