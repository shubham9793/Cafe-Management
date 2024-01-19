import BasePage from "../Pages/BasePage";

const Home = () => {
  return (
    <BasePage>
      <div className="container  homeContainer">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
              Welcome to Our Coffee Haven
            </h1>
            <p className="lead">
              Immerse yourself in the world of delightful flavors and cozy
              ambiance. Experience the art of coffee at its best with Bootstrap,
              the toolkit that powers responsive and stylish websites. Explore a
              range of prebuilt components and unleash the potential of your
              online presence.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <div className="card">
              <img
                className="card-img-top rounded-lg-3 homeImg"
                src="../../public/cafe.avif"
                alt="Cafe Interior"
              />
            </div>
          </div>
        </div>
      </div>
    </BasePage>
  );
};

export default Home;
