import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout title="About">

    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 py-5">
            <h1> About </h1>
            <p> Deskripsi - Baca Selengkapnya... </p>
          </div>
          <div className="col-md-6 mt-3">
            <img src="/gambar/11-2.png" className="img-fluid " width="500" alt="Gambar about" />
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default about;
