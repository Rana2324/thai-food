import React from 'react';
import './HikiNikuRecipe.css';
import {Carousel, Image } from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




import data from '../recipes.json';

const foodResults = data.result;

const HikiNikuRecipe = () => {

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
  <h3 className="moreproduct">｢ひき肉｣を使った関連レシピ</h3>
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

<div className="row">
<div class="col-12 ml-0 mb-4">
    <button type="button" class="btn btn-outline-secondary"> #ひき肉 </button>
    <button type="button" class="btn btn-outline-secondary">#卵   </button>
    <button type="button" class="btn btn-outline-secondary">#ピーマン</button>
    <button type="button" class="btn btn-outline-secondary">#ナンプラー</button>
    <button type="button" class="btn btn-outline-secondary">#オイスターソース</button>

    </div>
</div>  

        </div>
    )
}

export default HikiNikuRecipe;