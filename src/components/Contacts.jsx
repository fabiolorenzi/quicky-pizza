import React from "react";

function Contacts() {
    return(
        <div id="contacts" className="contacts_container">
            <h1>CONTACTS</h1>
            <div className="singleContacts">
                <a id="facebook" href="https://www.facebook.com/" rel="noreferrer" target="_blank"><h2>FACEBOOK</h2></a>
                <a id="instagram" href="https://www.instagram.com/" rel="noreferrer" target="_blank"><h2>INSTAGRAM</h2></a>
                <a id="mail" href="mailto:unexistentemailtomakeanexample@gmail.com" rel="noreferrer" target="_blank"><h2>EMAIIL</h2></a>
            </div>
        </div>
    );
};

export default Contacts;