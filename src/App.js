import { useState } from "react";
import { emojiDB } from "./emojiDB";
import "./styles.css";

var emojisDataBase = emojiDB; //dictionary of emojis
var emojisWeKnowList = Object.keys(emojisDataBase); //list of emojis

export default function App() {
  //Meaning of an emoji, setting Initial state
  var [meaning, setMeaning] = useState("Emoji Meaning Displayed Here"); //react processing

  /* This function takes in whatever the user has inputted as emoji
  If the emoji is present in DB it finds it and sets meaning on view
  and then displays it */
  function emojiInputHandler(event) {
    var inputEmoji = event.target.value; //emoji inputted by user

    if (inputEmoji in emojisDataBase) {
      setMeaning(emojisDataBase[inputEmoji]); //output
    } else {
      setMeaning("Emoji not in our database"); //output when emoji not found in DB
    }
  }

  /* This function takes the emoji clicked by the user
  It finds it in the db and prints the meaning */
  function emojiClickHandler(emojiClicked) {
    //I have to set meaning again
    if (emojiClicked in emojisDataBase) {
      setMeaning(emojisDataBase[emojiClicked]);
    } else {
      setMeaning("Emoji not in our database");
    }
  }

  return (
    <div className="App">
      <div className="header-style">Inside Out</div>

      <input
        onChange={emojiInputHandler}
        placeholder="Input Any Emoji Here"
      ></input>
      <div className="emoticon-meaning-style">{meaning}</div>
      <div className="emoticon-list-style">
        <div className="emoticon-list-style-heading">
          {" "}
          List Of Emojis We Know{" "}
        </div>
        {/* I also want that when I click on emoji I know what emoji is it, so we need to pass emoji */}
        <div>
          {emojisWeKnowList.map((emoji) => {
            return (
              <span
                key={emoji}
                onClick={() => emojiClickHandler(emoji)}
                className="emoji-style"
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
