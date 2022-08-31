import React from 'react';
import './MoreItems.css';


import {Carousel, Image } from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




import data from '../recipes.json';

const foodResults = data.result;

const MoreItems = () => {

      return (
        
                <div>
                         <HikinikuImage image={foodResults}></HikinikuImage> 
                    
                </div>
            );
      }

function HikinikuImage(props) {
    


console.log(props)
    return(
        <div>
           

            

<div className="row">

<div className="col-6 ">
  <h3 className="moreproduct">あともう一品…</h3>
</div>

</div>



<OwlCarousel className='owl-theme' nav dots loop margin={10} autoplay ={true} >


   
   <div class='item'>
        <img src={props.image[0].foodImageUrl}   alt={props.image[0].recipeTitle}/>
    </div>
    <div class='item'>
        <img src={props.image[1].foodImageUrl} alt={props.image[1]}/>
    </div>
    <div class='item'>
        <img src={props.image[2].foodImageUrl}/>
    </div>

    <div class='item'>
        <img src={props.image[3].foodImageUrl}/>
    </div> 
      
</OwlCarousel>



        </div>
    )
}



export default MoreItems;