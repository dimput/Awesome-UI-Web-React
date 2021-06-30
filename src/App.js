import circle from './assets/images/circle.png';
import circle2 from './assets/images/circle-2.png';
import imageLanding from './assets/images/damogo1.png';
import attributes from './assets/images/attributes-small.png';
import attributes2 from './assets/images/attributes-small-2.png';
import DemoAplikasi from './assets/images/damogo2.png';
import imageAppsUntukRestoran from './assets/images/damogo3.png';
import imageAppsUntukSupplier from './assets/images/damogo4.png';
import './assets/css/style.css';
import BlogSection from './BlogSection';
import Kerjasama from './Kerjasama';
import UntukSiapaSection from './UntukSiapaSection';
import Footer from './Footer';
import Header from './Header';
import FloatingButton from './FloatingButton';

function App() {
  return (
    <div>
      <Header/>
      <FloatingButton/>
      <div className="hiasan-kiri"></div>
      <section className="wrapper" style={{marginTop:"80px"}}>
        <div className="landing-top row">
          <div className="landing-left">
            <h1>Create taste,<br /> not <span style={{ color: "#009673" }}>waste</span></h1>
            <p>Selamatkan makanan lezat, makanan tidak terjual dari restaurant
              favoritmu, toko, dan pertanian agar tidak terbuang sia-sia serta
              dapatkan harga hemat hingga 90% dari harga reguler!</p>
            <div className="row" style={{ marginTop: "50px" }}>
              <button className="btn btn-primary">Buat janji temu!</button>
              <button className="btn btn-outline-primary" style={{ marginLeft: "20px" }}>Bertemu tim kami</button>
            </div>
          </div>
          <div className="landing-right">
            <div className="rectangle-landing"></div>
            <div className="img-circle">
              <img src={imageLanding} alt="circle" className="image-damogo" />
              <img src={attributes} alt="circle" className="image-damogo attribute-small" style={{ opacity: "0.3" }} />
              <img src={attributes2} alt="circle" className="image-damogo attribute-small" />
              <img src={circle} alt="circle" />
            </div>
          </div>
        </div>
        <div className="demo-aplikasi">
          <div className="hiasan-kanan"></div>
          <div className="sub-title">
            <div className="title-company-name">DAMOGO</div>
            <div className="title-content">Demo Aplikasi</div>
          </div>
          <div className="row" style={{ marginTop: "70px" }}>
            <div className="content-left">
              <div className="img-demo-aplikasi">
                <img src={circle2} alt="circle" />
                <img src={DemoAplikasi} alt="demo-aplikasi" className="img-damogo-aplikasi" />
              </div>
            </div>
            <div className="content-right">
              <div className="wrapper-content">
                <p><span className="company-name">DamoGo</span> adalah sistem yang membantu proses pengadaan bahan makanan lebih mudah dan efisien!
                  <br />
                  <br />
                  Atur semua pesanan dari supplier maupun bahan dari kamu ke franchise secara online.</p>
                <button className="btn btn-primary" style={{ marginTop: "30px" }}>Lihat demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogSection />
      <Kerjasama />
      <UntukSiapaSection
        untukSiapa      = "Untuk Restoran"
        colorBackground = "#00A3F4"
        content         = "Aplikasi gratis kami adalah cara paling efisien untuk memesan
                          dari semua pemasok Anda. Selesaikan pesanan lebih cepat,
                          tidur lebih awal. "
        imageApps       = {imageAppsUntukRestoran}
        />
      <UntukSiapaSection
        untukSiapa      = "Untuk Supplier"
        colorBackground = "#009673"
        content         = "Baik Anda adalah pertanian milik keluarga atau distributor
                          nasional, platform khusus kami akan mengubah cara Anda
                          berbisnis. Hemat waktu untuk tugas manual, kurangi kesalahan
                          pesanan, dan jual lebih banyak produk. "
        position        = "right"
        imageApps       = {imageAppsUntukSupplier}
      />
      <Footer />
    </div>
  );
}

export default App;
