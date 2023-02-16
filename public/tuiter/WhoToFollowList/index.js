import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
  return `
           <div class="list-group">
            ${who
              .map((data) => {
                return WhoToFollowListItem(data);
              })
              .join("")}
           </ul>
`;
};
export default WhoToFollowList;
