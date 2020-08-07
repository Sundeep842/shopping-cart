import React from 'react';
import Messi from  "./messi.jpg";
import Avatar from '@material-ui/core/Avatar';
//import "./Messi.jpg";

function Shape() {
    
        return(<div className="header">
            <p>
            <tr>
            <img src="https://www.pdvg.it/wp-content/uploads/2020/02/amazon-prime-video-pdvg.png" alt="logo" height="80"
            width="200"/>
            <th>Home</th>
            
            <th>TV Shows</th>
            <th>Movies</th>
            <th>Kids</th>
            <th>
                <input type ="text"  />
                </th>
            <Avatar src={Messi} alt="Avatar1" className="avatar1"/>    
            </tr>

            </p>            
            </div>
        )
    
}

export default Shape;