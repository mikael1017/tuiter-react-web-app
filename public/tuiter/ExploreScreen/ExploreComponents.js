import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
  <div class="search-bar-container row">
  <div class="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11">
    <div class="input-group">
      <div class="input-group-text wd-rounded-border-left">
        <i class="fas fa-search text-secondary"></i>
      </div>
      <input
        type="text"
        class="form-control wd-rounded-border-right"
        placeholder="Search Twitter"
      />
    </div>
  </div>
  <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 align-self-center">
    <i class="fas fa-cog text-primary fa-2xl"></i>
  </div>
</div>
<div class="navbar-container pt-2">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="../for-you.html">For you</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../trending.html">Trending</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../news.html">News</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../sports.html">Sports</a>
    </li>
    <li class="nav-item">
      <a class="nav-link d-none d-md-block" href="../entertainment.html"
        >Entertainment</a
      >
    </li>
  </ul>
</div>
    <div class="main-poster-container position-relative pt-2">
        <img src="../../images/poster.jpeg" class="img-fluid h-100 w-100" />
        <h2 class="left-0 bottom-0 position-absolute text-white">
        SpaceX's Starship
        </h2>
    </div>
    ${PostSummaryList()}
    `;
};
export default ExploreComponent;
