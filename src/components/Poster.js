import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
class Poster extends Component{
    render()
{
    const images=[
        {url:"https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_BirdsofPreyPD/aa563de3-8a66-4b52-bf93-d595dc48fd8a._UR3000,600_SX1500_FMjpg_.jpg"},
        {url:"https://sdfsfsf.s3.ap-south-1.amazonaws.com/24d6b495-ef7d-41fc-80d5-a54b6480b290._UR3000%2C600_SX1500_FMjpg_.jpg"}
    ];
    return(
        <div>
            
            <SimpleImageSlider className="slider" height={300} width={1400} images={images}/>

            <img src="https://sdfsfsf.s3.ap-south-1.amazonaws.com/24d6b495-ef7d-41fc-80d5-a54b6480b290._UR3000%2C600_SX1500_FMjpg_.jpg"
            alt="not"
        className="poster"/>
        </div>
            )
}
}

export default Poster;




