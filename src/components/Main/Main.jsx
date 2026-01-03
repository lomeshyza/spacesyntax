import { NavLink } from "react-router-dom";
import "./Main.scss";
import Blocks from "../Blocks/Blocks";
import News from "../News/News";

export default function Main() {
    return (
        <div className="content">
            <Blocks />
            <News />
        </div>
    );
}
