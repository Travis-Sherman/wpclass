import './App.css'
import DripDrown2 from './images/DriporDrown2.jpg';
import Wunna from './images/Wunna.jpeg';
import SL2 from './images/Slime_Lang2.jpeg';
import DripHarder from './images/Drip_Harder.jpg';

export default function Purchase(){

    return(

        <div>
            <header>
                <h1>Purchase an Album</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/FavSongs">Favortie Songs</a>
                    <a href="/Albums">Albums</a>
                    <a href="/Drip">Drip</a>
                    <a className="currenttab" href="/Purchase">Purchase</a>
                    <a href="/Pictures">Pictures</a>
                </nav>
            </header>

            <body id="body">

                <h2>Select an album to purchase and input your shipping information. No Payment required :)
                </h2>  {/* Pictures of Gunna's projects */}

                <img class = "preview" src={DripDrown2} alt="Drip or Drown 2 album cover"/>
                
                <img class = "preview" src={Wunna} alt="Wunna album cover"/>
                
                <img class = "preview" src={SL2} alt="Slime Language 2 album cover"/>

                <img class = "preview" src={DripHarder} alt="Drip Harder album cover"/>

                <form>  {/* form to take in user's name and zipcode for shipping and billing */}
                    <fieldset>
                        <legend>Shipping and Purchase Information</legend>
                        <label for="Album">Choose an Album/Mixtape: </label>
                        <select name="Album" id="album" required>
                            <option value="Drip or Drown 2">Drip or Drown 2</option>
                            <option value="Wunna">Wunna</option>
                            <option value="Drip Harder">Drip Harder</option>
                            <option value="Slime Language 2">Slime Language 2</option>
                        </select><br/>
                        <label for ="shippingName">Name: </label>
                        <input type = "text" name = "shipName" id = "shippingName" required/><br/>
                        <label for = "shippingzip">Zip code: </label>
                        <input type = "text" name = "shipZip" id = "shippingZip" pattern = "[0-9]{5}" required/><br/>
                    </fieldset>
                    <input type="checkbox" id="same" name="same" onChange={()=> billingFunction()}/>
                    <label for = "same" >Is the Billing Information the Same?</label>
                            
                    <fieldset> 
                        <legend>Billing Information</legend>
                        <label for ="billingName">Name: </label>
                        <input type = "text" name = "billName" id = "billingName" required/><br/>
                        <label for = "billingzip">Zip code: </label>
                        <input type = "text" name = "billZip" id = "billingZip" pattern = "[0-9]{5}" required/><br/>
                        </fieldset>
                    <input type = "submit" value = "Verify" />
                </form>
            </body>

            <footer>
                <p>This page was created by Travis Sherman</p>
            </footer>
        </div>
    );
}

 {/* Function that takes a person's shipping info and copies it to their billing info if tick box is checked*/}
function billingFunction(){
    if (document.getElementById('same').checked){
        var shippingName =  document.getElementById('shippingName').value;
        var shippingZip = document.getElementById('shippingZip').value;
  
        document.getElementById('billingName').value = shippingName;
        document.getElementById('billingZip').value = shippingZip;
        
    }
    else{ 
        document.getElementById('billingName').value = "";
        document.getElementById('billingZip').value = "";
    }
}
