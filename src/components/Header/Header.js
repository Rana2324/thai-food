import React from 'react';
import './Header.css';



const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
 
    <a className="navbar-brand" href="#"><img src={require('../assest/arrowBack.png')} /></a>
   
    
      <ul className="navbar-nav text-center mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">タイの定番料理♪ガパオライス</a>
        </li>
        
      </ul>
    
      <form className="d-flex">
     
       <img className="mx-1" src={require('../assest/shareOutline.png')} />

        <img  className="mx-1" src={require('../assest/heartImage.png')} />


      </form>
   
  </div>
</nav>

<div id="banner" className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-lg-6">
        <div className="banner-title">
          <p className='lead'>タイの定番料理</p>
          <h1 className="title">ガパオライス</h1>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-section">
  <div className="row">
    <div className="col-md-12">
      <div class="btn-group mb-4 " role="group" aria-label="Basic example">
      <button type="button" class="btn  bg-warning rounded-pill p-3 buttonimg">
     <img  className="m-100 " src={require('../assest/recordVoice.png')} />
     音声ガイドで料理を作る
     </button>
     </div>
    </div>
    <div className="col-md-3 col-sm-3">
      <div className="materials-box">
        <div className="card">
          <div className="card-body">
          <img  className="" src={require('../assest/timer.png')} />
        <p>調理時間</p>
        <h5>約30分</h5>
          </div>
        </div>
      </div>

    </div>
    <div className="col-md-3 col-sm-3">
      <div className="materials-box">
      <div className="card boxcard">
          <div className="card-body">
          <img  className="" src={require('../assest/timer.png')} />
          <p>エネルギー</p>
          <h5>704kcal</h5>
          </div>
        </div>
      
        

      </div>

    </div>
    <div className="col-md-sm-3 col-sm-3">
      <div className="materials-box">
    <div className="card">
        <div className="card-body">
        <img  className="" src={require('../assest/spoon.png')} />
        <p>塩分</p>
        <h5>2.0g</h5>
        </div>
    </div>

     

      </div>

    </div>
    <div className="col-md-3 col-sm-3">
      <div className="materials-box">

        <div className="card">
          <div className="card-body">
          <img  className="" src={require('../assest/spoonFork.png')} />
        <p>保存目安</p>
        <h5>2日</h5>
          </div>
        </div>
     

      </div>

    </div>
    <div className="col-md-12 mb-5 ml-0">
    <div class="btn-group" role="group" aria-label="Basic outlined example">
    <button type="button" class="btn btn-outline-secondary">#エスニック</button>
    <button type="button" class="btn btn-outline-secondary">#栄養満点</button>
    <button type="button" class="btn btn-outline-secondary">#超簡単</button>
    <button type="button" class="btn btn-outline-secondary">#主菜</button>
    <button type="button" class="btn btn-outline-secondary">#ワンプレート</button>
</div>
    </div>

  </div>
</div>

  <div className="">
  <div class="row">
    <div class="col-6 mb-4 ">
      <h3>¥780</h3>
      
    </div>
    <div class="col-6  mb-4">
    
     <button className='btnmilkit'>ミールキットをカートに追加</button>
    </div>
    <table class="table  table-borderless table-responsive">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>ごはん</td>
      <td>---------------------------</td>
      <td>@お茶碗2杯(300g)</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td> 豚ひき肉</td>
      <td>---------------------------</td>
      <td>200g</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>卵</td>
      <td>---------------------------</td>
      <td>2個</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td> 玉ねぎ</td>
      <td>---------------------------</td>
      <td>1/4個</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td> ピーマン</td>
      <td>---------------------------</td>
      <td>1個</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td> 赤パプリカ</td>
      <td>---------------------------</td>
      <td>1/2個</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>  バジル</td>
      <td>---------------------------</td>
      <td> 12枚</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td> サラダ油(目玉焼き用)</td>
      <td>---------------------------</td>
      <td>1かけ</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>サラダ油</td>
      <td>---------------------------</td>
      <td>大さじ1/2(7.5ml)</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td> 唐辛子(輪切り)</td>
      <td>---------------------------</td>
      <td>大さじ1(15ml)</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>  塩こしょう</td>
      <td>---------------------------</td>
      <td>適量</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>サラダ油</td>
      <td>---------------------------</td>
      <td>大さじ1/2(7.5ml)</td>
    </tr>
  </tbody>
</table>
    
    <div className="row">
    <div class="col-6 "> 
    <p className="">☆調味料</p>
      </div>
       
    </div>
    

    <table class="table table-borderless table-responsive">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>  ナンプラー</td>
      <td>---------------------------</td>
      <td>大さじ2(10ml)</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td> オイスターソース</td>
      <td>---------------------------</td>
      <td>  大さじ1(15ml)</td>
    </tr>
    
    <tr>
      <th scope="row"></th>
      <td>しょうゆ</td>
      <td>---------------------------</td>
      <td>大さじ1/2(7.5ml)</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td> 唐辛子(輪切り)</td>
      <td>---------------------------</td>
      <td>大さじ1(15ml)</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>    しょうゆ</td>
      <td>---------------------------</td>
      <td> 小さじ1(5ml)</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td> 塩こしょう</td>
      <td>---------------------------</td>
      <td>小さじ1/2(1.5g)</td>
    </tr>
  </tbody>
</table>
    
 
  <div className="row">
    <div className="col-12">
    <img  className="" src={require('../assest/作り方.png')} />
    </div>
  </div>
  
  
  <div className="row">
    <div className="col-12 ">
      <h3>このレシピのミールキット</h3>
    </div>
    <div className="col-12">
    <img  className="" src={require('../assest/ミ-ルキット.png')} />
      
    </div>

    <div className="row textpart d-flex">
    <div className="">
      <div>
      <p className="">タイの定番料理♪ガパオライス</p>
      </div>      
      <div className=" ">
          <h3 className="">¥780</h3>
      </div>
      
    </div>
    
    </div>
    
      <div className="col-12">
      <div class="btn-group mb-4 " role="group" aria-label="Basic example">
  <button type="button" class="btn  bg-warning rounded-pill">
     <img  className="m-100" src={require('../assest/shoppingCart.png')} />ミールキットを購入する
     </button>

  
</div>
    </div>
  </div>
<div className="row">
  <div className="col-6">
    <h3>このレシピに使われている商品</h3>
  </div>

  <div className="col-12 mb-5">
      <div className="card">
        <div className="card-body">
          <div className="row">

            <div className="col-3 mb-3">
            <img  className="mx-1" src={require('../assest/img1.png')} />
            </div>
            <div className="col-3 mb-3">
            <p>豚ひき肉</p>
            <h6>¥398</h6>
            <div className="w-100 ">
            <button className="button1">商品情報</button>
            </div>
            <div className="w-100">
            <button className="button2">購入する</button>
            </div>
            </div>

            <div className="col-3 mb-3">
            <img  className="mx-1" src={require('../assest/img1.png')} />
            </div>
            <div className="col-3 mb-3">
            <p>豚ひき肉</p>
            <h6>¥398</h6>
            <div className="w-100">
            <button className="button1">商品情報</button>
            </div>
            <div className="w-100">
            <button className="button2">購入する</button>
            </div>
            </div>
            <div className="col-3 mb-3">
            <img  className="mx-1" src={require('../assest/img1.png')} />
            </div>
            <div className="col-3 mb-3">
            <p>豚ひき肉</p>
            <h6>¥398</h6>
            <div className="w-100">
            <button className="button1">商品情報</button>
            </div>
            <div className="w-100">
            <button className="button2">購入する</button>
            </div>
            </div>
            <div className="col-3 mb-3">
            <img  className="mx-1" src={require('../assest/img1.png')} />
            </div>
            <div className="col-3 mb-3">
            <p>豚ひき肉</p>
            <h6>¥398</h6>
            <div className="w-100">
            <button className="button1">商品情報</button>
            </div>
            <div className="w-100">
            <button className="button2">購入する</button>
            </div>
            </div>
            <div className="col-3 mb-3">
            <img  className="mx-1" src={require('../assest/img1.png')} />
            </div>
            <div className="col-3 mb-3">
            <p>豚ひき肉</p>
            <h6>¥398</h6>
            <div className="w-100">
            <button className="button1">商品情報</button>
            </div>
            <div className="w-100">
            <button className="button2">購入する</button>
            </div>
            </div>
            <div className="col-3 mb-3">
            <img  className="mx-1" src={require('../assest/img1.png')} />
            </div>
            <div className="col-3 mb-3">
            <p>豚ひき肉</p>
            <h6>¥398</h6>
            <div className="w-100">
            <button className="button1">商品情報</button>
            </div>
            <div className="w-100">
            <button className="button2">購入する</button>
            </div>
            </div>


          </div>
        </div>
      </div>

  </div>
  
</div>



</div>
  </div>
 


        </div>
    );
};

export default Header;