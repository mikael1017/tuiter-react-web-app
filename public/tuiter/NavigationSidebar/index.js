const NavigationSidebar = () => {
  return `
  <div class="list-group wd-left-sidebar">
  <a class="list-group-item list-group-item-action" href="#">
    <i class="fab fa-brands fa-twitter wd-twitter-blue fa-2x"></i>
  </a>
  <a
    class="list-group-item list-group-item-action"
    href="#"
  >
    <i class="fas fa-home pe-2 float-start"></i>
    <span class="d-none d-xl-block">Home</span>
  </a>
  <a
    class="list-group-item list-group-item-action active"
    href="#"
  >
    <i class="fas fa-hashtag pe-2 float-start"></i>
    <span class="d-none d-xl-block">Explore</span>
  </a>
  <a
    class="list-group-item list-group-item-action "
    href="#"
  >
    <i class="far fa-bell pe-2 float-start"></i>
    <span class="d-none d-xl-block">Notifications</span>
  </a>
  <a
    class="list-group-item list-group-item-action"
    href="#"
  >
    <i class="far fa-envelope pe-2 float-start"></i>
    <span class="d-none d-xl-block">Messages</span>
  </a>
  <a
    class="list-group-item list-group-item-action"
    href="#"
  >
    <i class="far fa-bookmark pe-2 float-start"></i>
    <span class="d-none d-xl-block">Bookmarks</span>
  </a>
  <a
    class="list-group-item list-group-item-action "
    href="#"
  >
    <i class="fas fa-list pe-2 float-start"></i>
    <span class="d-none d-xl-block">Lists</span>
  </a>
  <a
    class="list-group-item list-group-item-action "
    href="#"
  >
    <i class="far fa-user pe-2 float-start"></i>
    <span class="d-none d-xl-block">Profile</span>
  </a>
  <a
    class="list-group-item list-group-item-action"
    href="#"
  >
    <i class="fas fa-angles-right pe-2 float-start"></i>
    <span class="d-none d-xl-block">More</span>
  </a>
</div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `;
};
export default NavigationSidebar;
