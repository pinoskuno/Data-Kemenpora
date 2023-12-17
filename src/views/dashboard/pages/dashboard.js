// import homeDashboardFunctions from "../../../scripts/utils/homeDashboardFunctions";

import dashboardHomescreenFunctions from "../../../scripts/utils/dashboardHomescreenFunctions";

const dashboardHome = {

    async render() {
      return `<section class="hero-section hero-section-full-height">
      <div class="container-fluid">
          <div class="row">

              <div class="col-lg-12 col-12 p-0">
                  <div id="hero-slide" class="carousel carousel-fade slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                          <div clazss="carousel-item active">
                              <img src="../assets/img/slide/slider_asean_web_v1.jpg" class="carousel-image img-fluid" alt="...">
                                
                              <div class="carousel-caption d-flex flex-column justify-content-end">
                                  <h2>SISTEM INFORMASI</h2>
                                    
                                  <p>DIVISI MRO PT IMSS</p>
                              </div>
                          </div>

                          <div class="carousel-item">
                              <img src="../assets/img/slide/background-kereta1.png" class="carousel-image img-fluid" alt="..."> 
                              
                              <div class="carousel-caption d-flex flex-column justify-content-end">
                                  <h2>LRT JABODETABEK</h2>
                                  
                                  <p>DIVISI MRO PT IMSS</p>
                              </div>
                          </div>
                      </div>

                      <button class="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>

                      <button class="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button>
                  </div>
              </div>

          </div>
      </div>
  </section>

  <section class="bg-jargon bg-section" id="jargon">
        <div class="container-fluid text-center">
        </br>

            <div class="row jargon-round-3 slideanim" style="margin-top:65px;">
                <div class="col-sm-4 text-center round">
                    <div class="jargon-round b-party">
                        <span class="fa-4x fa-stack" style="color:#dc3545;">
                            <i class="fa fa-user fa-stack-1x"></i>
                            <i class="fa fa-circle-o fa-stack-2x"></i>
                        </span>
                    </div>
                    <h4 style="color:#dc3545;">Tanggap</h4>
                </div>
                <div class="col-sm-4 text-center round">
                    <div class="jargon-round wedding">
                        <span class="fa-4x fa-stack" style="color:#dc3545;">
                            <i class="fa fa-users fa-stack-1x"></i>
                            <i class="fa fa-circle-o fa-stack-2x"></i>
                        </span>
                    </div>    
                    <h4 style="color:#dc3545;">Tangkas</h4>
                </div>
                <div class="col-sm-4 text-center round">
                    <div class="jargon-round b-dinner">
                        <span class="fa-4x fa-stack" style="color:#dc3545;">
                            <i class="fa fa-thumbs-up fa-stack-1x"></i>
                            <i class="fa fa-circle-o fa-stack-2x"></i>
                        </span>
                    </div>
                    <h4 style="color:#dc3545;">Berkualitas</h4>
                </div>
            </div>
        </div>
        </br>
    </section>

  <section class="section-padding section-bg" id="section_2">
      <div class="container">
          <div class="row" id='daftarMenu'>

              <div class="col-lg-12 col-12 text-center mx-auto">
                  <h2 class="mb-5">MENU</h2>
              </div>

          </div>
      </div>
  </section>

  <div class="container">
  <div class="row">
      <!-- Kotak pertama untuk chart -->
      <div class="col-lg-6">
          <div class="card">
              <div class="card-body">
                  <!-- Tempatkan kode chart pertama di sini -->
              </div>
          </div>
      </div>
      <!-- Kotak kedua untuk chart -->
      <div class="col-lg-6">
          <div class="card">
              <div class="card-body">
                  <!-- Tempatkan kode chart kedua di sini -->
              </div>
          </div>
      </div>
  </div>
</div>


    <section class="cta-section section-padding section-bg" style="padding-bottom:100px;">
        <div class="container">
            <div class="row justify-content-center align-items-center" id='daftarData'>

                <div class="col-lg-10 col-12 text-center mx-auto">
                    <h2 class="mb-5">DATA LAINNYA</h2>
                </div>

            </div>
        </div>
    </section>

    <section id="gallery" class="gallery">
        <div class="container" data-aos="fade-up">

            <div class="col-lg-10 col-12 text-center mx-auto">
                <h2 class="mb-5">Gambar Bergerak</h2>
            </div>

            <div class="gallery-slider swiper">
                <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide"><a class="gallery-lightbox" href="../../public/assets/img/gallery/gallery-1.jpg"><img src="../../public/assets/img/gallery/gallery-1.jpg" class="img-fluid" alt=""></a></div>
                <div class="swiper-slide"><a class="gallery-lightbox" href="../../public/assets/img/gallery/gallery-2.jpg"><img src="../../public/assets/img/gallery/gallery-2.jpg" class="img-fluid" alt=""></a></div>
                <div class="swiper-slide"><a class="gallery-lightbox" href="../../public/assets/img/gallery/gallery-3.jpg"><img src="../../public/assets/img/gallery/gallery-3.jpg" class="img-fluid" alt=""></a></div>
                <div class="swiper-slide"><a class="gallery-lightbox" href="../../public/assets/img/gallery/gallery-4.jpg"><img src="../../public/assets/img/gallery/gallery-4.jpg" class="img-fluid" alt=""></a></div>
                <div class="swiper-slide"><a class="gallery-lightbox" href="../../public/assets/img/gallery/gallery-5.jpg"><img src="../../public/assets/img/gallery/gallery-5.jpg" class="img-fluid" alt=""></a></div>
                <div class="swiper-slide"><a class="gallery-lightbox" href="../../public/assets/img/gallery/gallery-6.jpg"><img src="../../public/assets/img/gallery/gallery-6.jpg" class="img-fluid" alt=""></a></div>
                <div class="swiper-slide"><a class="gallery-lightbox" href="../../public/assets/img/gallery/gallery-7.jpg"><img src="../../public/assets/img/gallery/gallery-7.jpg" class="img-fluid" alt=""></a></div>
                <div class="swiper-slide"><a class="gallery-lightbox" href="../../public/assets/img/gallery/gallery-8.jpg"><img src="../../public/assets/img/gallery/gallery-8.jpg" class="img-fluid" alt=""></a></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>

        </div>
    </section>`;
    },
  
    async afterRender() {
        console.log('kode jalan');

        const daftarMenuContainer = document.getElementById('daftarMenu');
        const fetchedMenu = await dashboardHomescreenFunctions.getAllMenu();
        fetchedMenu.forEach((data) => {
          daftarMenuContainer.innerHTML += `
          <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4" >
          <div class="featured-block d-flex justify-content-center align-items-center">
                      <a href="${data.data().link}" target="_blank" class="d-block">
                          <img src="${data.data().gambar}" class="featured-block-image img-fluid" alt="" style="object-fit:cover;width:150px;height:150px;">

                          <p class="featured-block-text text-uppercase"><strong>${data.data().nama_menu}</strong></p>
                      </a>
          </div>
          </div>`
        })
      
        const daftarDataContainer = document.getElementById('daftarData');
        const fetchedData = await dashboardHomescreenFunctions.getAllData();
        fetchedData.forEach((doc) => {
          daftarDataContainer.innerHTML += `
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <a role="button" class="btn  custom-btn smoothscroll" style='width:100%; margin-top:20px;' href='${doc.data().link}' target='_blank'>${doc.data().nama_data}</button>
          </div>`;
        })
      
    },
  };
  
  export default dashboardHome;