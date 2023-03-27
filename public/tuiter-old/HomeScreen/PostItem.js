export default function PostItem(post) {
  return `
                <div class="row px-2 border-top border-secondary py-2">
                  <div class=" col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <img
                    src="${post.avatarIcon}"
                    class="rounded-circle"
                    height="50px"
                    width="50px"
                    />
                  </div>

                  <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 ms-3">
                    <div class="img-post-container">
                      <div class="fw-bold">
                        ${post.id} <i class="fas fa-circle-check"></i>
                        <span class="text-secondary fw-normal">@${post.handle} - ${post.time}</span>
                      </div>
                      <div class="">
                        ${post.tweet}
                      </div>
                      <div class="image-container">
                        <img
                        class="border border-secondary rounded-top"
                        src="${post.postImg}"
                        width="462.66px"
                        height="264px"
                        />
                      </div>
                      <div class="img-description ps-2 border border-top-0 border-secondary rounded-bottom">
                        <div class="img-title">
                          ${post.imgTitle}
                        </div>
                        <div class="img-info text-secondary">
                          ${post.imgDesc}
                        </div>
                        <div class="img-link text-secondary">
                          
                          ${post.postLink}
                        </div>
                      </div>
                    </div>
                    <div class="action-row d-flex justify-content-between mt-2">
                      <div>
                        <a class="text-secondary" href="#">
                          <i class="fa-regular fa-comment"></i>
                          <span class="wd-num">${post.comments}</span>
                        </a>
                      </div>
                      <div>
                        <a class="text-secondary" href="#"
                          ><i class="fa-solid fa-retweet"></i>
                          <span class="wd-num">${post.retweets}</span></a
                        >
                      </div>

                      <!-- red -->
                      <a class="text-secondary" href="#">
                        <i class="fa-solid fa-heart"></i>
                        <span class="wd-num">${post.likes}</span>
                      </a>
          
                      <a class="text-secondary" href="#">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                      </a>
                      <div></div>
                    </div>
                    
                  </div>
                </div>
              `;
}
