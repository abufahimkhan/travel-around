import "./App.css";
function Explore() {
  return (
    <div className="container">
      <div className="explore-container">
        <div className="cards-header">
          <h1>Explore the world</h1>
          <p>Plan Easy Pay Less & Experience More</p>
        </div>
        <div className="explore">
          <input
            type="search"
            placeholder="Enter Your Email Here"
            id="search"
          />
          <button type="button">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
