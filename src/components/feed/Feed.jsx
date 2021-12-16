import Newpost from "../NewPost/Newpost";
import "./feed.css";

function Feed() {
    return (
        <div className="feed">
            <div className="feedContainer">
            <Newpost/>
            </div>
        </div>
    )
}

export default Feed
