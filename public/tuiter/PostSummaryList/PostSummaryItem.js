export default function PostSummaryItem(post) {
  return `
          <li class="list-group-item">
              <div class="row px-2">
                <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10">
                  <div class="topic text-secondary">${post.topic}</div>
                  <div class="name fw-bold">
                    ${post.userName} <i class="fas fa-circle-check"></i>
                    <span class="text-secondary fw-normal">- ${post.time}</span>
                  </div>
                  <div class="desc fw-bold">
                  ${post.title}
                  </div>
                </div>
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 align-self-center">
                  <div class="float-end">
                  <img
                  src="${post.image}"
                  width="100px"
                  height="100px"
                  class="rounded-3 h-100 w-100"
                />
                  </div>
                </div>
              </div>
            </li>`;
}
