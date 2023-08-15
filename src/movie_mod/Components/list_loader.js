import "./list_loader.css";
export default () => (
  <div className="my-2 pt-1 grid-display main-item">
    {Array.from(Array(14)).map((x, i) => (
      <div className="movie-card-animate-container">
        <div className="animated-background">
          <div className="background-masker"></div>
        </div>
        <div className="p-2">
          <div className="animated-background level-list-1 mt-2" />
          <div className="animated-background level-list-2 mt-1" />
          <div className="animated-background level-list-2 mt-1" />
        </div>
      </div>
    ))}
  </div>
);
