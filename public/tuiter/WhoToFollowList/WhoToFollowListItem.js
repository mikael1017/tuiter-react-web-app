export default function WhoToFollowListItem(data) {
  return `
    <div class="list-group-item">
          <div class="row aling-self-center">
            <div class="image-parent col-xxl-2 col-xl-2 col-lg-2">
              <img
                src="${data.avatarIcon}"
                class="rounded-circle"
                height="50px"
                width="50px"
              />
            </div>

            <div class="col-xxl-10 col-xl-10 col-lg-10">
              <div class="row align-items-center">
                <div class="info col-xxl-9 col-xl-9 col-lg-9">
                  <div class="fw-bold overflow-visible">
                    ${data.userName} <i class="fas fa-circle-check"></i>
                  </div>
                  <div class="handle text-secondary">@${data.handle}</div>
                </div>

                <div class="button-container col-xxl-3 col-xl-3 col-lg-3">
                  <button
                    type="submit"
                    class="btn btn-primary rounded-pill float-end"
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
}
