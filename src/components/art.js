function Art(props) {
  return (
    <div className="art-section">
      <div className="art-container">
        <div className="artist-info card">
          <h2>{"By: " + props.author}</h2>
        </div>
        <div className="art-picture card">
          <img className="main-image" src={props.image} alt="unsplash"></img>
        </div>
      </div>
    </div>
  );
}

export default Art;
