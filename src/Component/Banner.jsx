 export default function Banner(){


   return(
<>
<div className='banner'>
<div id="carouselExample" className=" carousel slide " >
  <div className="carousel-inner" >
    <div className="carousel-item active">
    <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
   
    <img src="./slide_01.jpg" className="d-block w-100" alt="img1" style={{'height':'400px'}} />
    
    </div>
    <div className="carousel-item ">
    <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
   
    <img src="./slide_02.jpg" className="d-block w-100" alt="img2" style={{'height':'400px'}} />
    
    </div>
   
    <div className="carousel-item ">
    <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
   
    <img src="./slide_02.jpg" className="d-block w-100" alt="img2" style={{'height':'400px'}} />
    
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="/carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="/carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className="latest-products">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Latest Products</h2>
              <a href="/">view all products <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="product-item">
              <a href="/"><img src="./product_01.jpg" alt=""/></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$25.75</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                
                <ul className="stars ml-0">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  
                </ul>
                <span>Reviews (24)</span>
                
              
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src="./product_02.jpg" alt=""/></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$30.25</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (21)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src="./product_03.jpg" alt=""/></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$20.45</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (36)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src="./product_04.jpg" alt=""/></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$15.25</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (48)</span>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src="./product_05.jpg" alt=""/></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$12.50</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars ">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (16)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src="./product_06.jpg" alt=""/></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$22.50</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (32)</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="best-features">
      <div className="container">
            <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>About Our site Shopping</h2>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="left-content">
              <h4>Looking for the best products?</h4>
              <p><a rel="nofollow" href="https://templatemo.com/tm-546-sixteen-clothing" target="_parent">This template</a> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. <a rel="nofollow" href="https://templatemo.com/contact">Contact us</a> for more info.</p>
              <ul className="featured-list">
                <li><a href="/">Lorem ipsum dolor sit amet</a></li>
                <li><a href="/">Consectetur an adipisicing elit</a></li>
                <li><a href="/">It aquecorporis nulla aspernatur</a></li>
                <li><a href="/">Corporis, omnis doloremque</a></li>
                <li><a href="/">Non cum id reprehenderit</a></li>
              </ul>
              <a href="about.html" className="filled-button">Read More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img src="./feature-image.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content">
              <div className="row">
                <div className="col-md-8">
                  <h4>Creative &amp; Unique <em>Sixteen</em> Products</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                </div>
                <div className="col-md-4">
                  <a href="/" className="filled-button">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

 <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-content">
              <p>Copyright &copy; 2023 Sixteen Clothing Co., Ltd.
            
            - Design: <a rel="nofollow noopener" href="/" target="_blank">Website</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>


</>


   )



 }