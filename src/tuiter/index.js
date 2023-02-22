import { Link } from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./NavigationSidebar";
function Tuiter() {
  return (
    <div>
      <Nav />
      <NavigationSidebar active="home" />
      <h1>Tuiter</h1>
    </div>
  );
}
export default Tuiter;
