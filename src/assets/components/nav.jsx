import image1 from "../images/406609302_1093511218330570_7452378060859813937_n.jpg"
import image2 from "../images/406617176_683329910614025_8713898965726010393_n.jpg"
import image3 from "../images/406841418_271559975902488_4912867414393012277_n.jpg"
import '../style/custom.css'
const nav = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge text-bg-success fs-5">Lovely</span><span className="ps-1 fw-bold">Gallery</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#Home">Home</a>
        <a className="nav-link" href="#About">About</a>
        <a className="nav-link" href="#">qwerty</a>
      </div>
    </div>
  </div>
</nav>

<section className="firstSection" id="Home">
<div className="container-lg mt-5 pt-5 pb-3">
    <div className="row justify-content-center">
        <div className="col-md-6">
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-90 mx-auto" alt="..." height="350rem"/>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-90 mx-auto" alt="..."height="350rem"/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-90 mx-auto" alt="..."height="350rem"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
</div>
<div className="container-lg">
  <div className="row justify-content-center">
    <div className="col-lg6 text-center pb-5  ">
  
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  view Ranran's msg
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Dimpol maylabs</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      "Grateful for your love and everything you do. You mean the world to me."
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
</section>

<section className="secondSection" id="About">
<div className="container-lg pt-5 pb-2">
  <div className="row justify-content-center">
    <div className="col-md-6 text-center">
      <h1 className="fw-bold text-success" >SAMPLE TEXT</h1>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem quis iste cupiditate, natus incidunt iusto sed tempore veniam culpa asperiores minus nobis molestiae voluptatum officiis animi in quisquam ipsam totam, pariatur, ducimus tenetur voluptate. Labore amet nisi sequi consequuntur provident doloremque aspernatur! Cum consequatur temporibus eum, accusamus obcaecati voluptatum laudantium id dignissimos possimus, dolorem nisi ullam dolor voluptatibus nostrum culpa quia officia vitae soluta qui beatae veritatis quos. Corrupti ad, maxime quasi, nostrum voluptas quam laudantium tenetur reiciendis mollitia neque asperiores cum dignissimos fugiat ullam atque, fuga consequatur eaque culpa! Molestias repudiandae necessitatibus, vero facere blanditiis rem maiores animi.</p>
    </div>
  </div>
</div>
<div className="container-lg pb-5 ">
  <div className="row justify-content-center">
    <div className="col-md-4 text-center">
    <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">More about Dimpol & Ranran</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">...</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
    </div>
  </div>
</div>
</section>
    </div>
  )
}

export default nav
