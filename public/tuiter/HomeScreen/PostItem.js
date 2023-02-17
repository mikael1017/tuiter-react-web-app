export default function PostItem(post) {
  return `
                <div class="row px-2">
                  <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 align-self-center">
                    <img
                    src="${post.avatarIcon}"
                    class="rounded-circle"
                    height="50px"
                    width="50px"
                    />
                  </div>

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
                </div>
              `;
}
