import "./newpost.css"
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material"

function Newpost() {
    return (
        <div className="newPost">
            <div className="newPostContainer">
{/*TOP New post*/}
                <div className="newPostTop">
                <img className="newPostProfileImg" src="./assets/pexels-thyrone-paas-1722198.jpg" alt="" />
                <input
                    placeholder="Title"
                    className="newPostTitle"
                />
                </div>
{/*Middle New post*/}

                <div className="newPostMiddle">
                    <textarea
                        placeholder="Write main code here"
                        className="newPostBlockInput"
                    />
                    <hr className="newPostHr"/>
                </div>

{/*Bottom New post*/}
                <div className="newPostBottom">
                    <div className="newPostOptions">
                    <div className="newPostOption">
                    <PermMedia htmlColor="tomato" className="newPostIcon"/>
                  <span className="newPostOptionText">Photo or Video</span>
                  </div>
                  <div className="newPostOption">
                      <Label htmlColor="blue" className="newPostIcon"/>
                      <span className="newPostOptionText">Tag</span>
                  </div>
                  <div className="newPostOption">
                      <Room htmlColor="green" className="newPostIcon"/>
                      <span className="newPostOptionText">Location</span>
                  </div>
                  <div className="newPostOption">
                      <EmojiEmotions htmlColor="goldenrod" className="newPostIcon"/>
                      <span className="newPostOptionText">Feelings</span>
                  </div>
                    </div>
                        <button className="newPostButton">Share</button>
                    
                    <div className="Lwer partNewPost"></div>
                </div>
            </div>
        </div>  
    )
}

export default Newpost
