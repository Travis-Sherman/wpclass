export default function Purchase(){

    return(

        <div>
            <header>
                <h1>Purchase an Album</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/FavSongs">Favortie Songs</a>
                    <a href="/Albums">Albums</a>
                    <a className="currenttab" href="/Drip">Drip</a>
                </nav>
            </header>
            <body id="body">
                <form>
                    <fieldset>
                        <legend>Shipping Information</legend>
                        <label for ="shippingName">Name:</label>
                        <input type = "text" name = "shipName" id = "shippingName" required/><br/>
                        <label for = "shippingzip">Zip code:</label>
                        <input type = "text" name = "shipZip" id = "shippingZip" pattern = "[0-9]{5}" required/><br/>
                    </fieldset>
                    <input type="checkbox" id="same" name="same" onChange={()=> billingFunction()}/>
                    <label for = "same" >Is the Billing Information the Same?</label>
                            
                    <fieldset> 
                        <legend>Billing Information</legend>
                        <label for ="billingName">Name:</label>
                        <input type = "text" name = "billName" id = "billingName" required/><br/>
                        <label for = "billingzip">Zip code:</label>
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
