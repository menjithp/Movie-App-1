import "./detail_loader.css";

export default () => (
  <div className="movie-detail-container d-flex">
    <div className="animated-background_detail" />
    <div className="movie-details flex-grow-1">
      <div>
        <div className="animated-background_detail level-1"></div>
        <div className="mt-3 animated-background_detail level-1"></div>
      </div>
      <div className="mt-3 animated-background_detail level-1" />
      <div className="mt-3 animated-background_detail level-2" />
    </div>
  </div>
);
