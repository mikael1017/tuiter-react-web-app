import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
  return `
             <ul class="list-group">
              ${exploreItems
                .map((data) => {
                  return PostSummaryItem(data);
                })
                .join("")}
             </ul>
  `;
};
export default PostSummaryList;
