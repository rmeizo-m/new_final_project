import * as React from 'react';
import "../../../assets/messageButton/Path1.png";
import "../../../assets/messageButton/Path.png";


export default function NewsForm() {
    return <form className="news-message" id="message-form">
          <div className="left-content">
            <input className="input-text" id="input" type="text" placeholder="Write a message..."/>                    
          </div>
          <div className="text-load">
            <div id="indicator"></div>
          </div>
          <div className="right-content">
            <input id="button" className="button" type="submit" value="" disabled="true"/>
          </div>                
        </form>;
}