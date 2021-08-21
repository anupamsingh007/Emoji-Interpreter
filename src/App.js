import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "French Fries",
  "🌭": "HotDog",
  "🎂": "Cake",
  "🍰": "Pastry",
  "🍺": "Beer",
  "🍸": "Cocktail",
  "🍌": "Banana",
  "🥕": "Carrot",
  "🍗": "Chicken"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var matchedMeaning = emojiDictionary[userInput];
    if (matchedMeaning === undefined) {
      matchedMeaning = "this emoji is not in our database";
    }
    setMeaning(matchedMeaning);
  }

  function clickEmojiHandler(emoji) {
    var matchedEmoji = emojiDictionary[emoji];

    setMeaning(matchedEmoji);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <p>
        Search for food items with emoji or click on emoji to see the name of
        the food.
      </p>
      <input onChange={inputEmojiHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      <div className="emojis">
        {emojisWeKnow.map((emoji) => {
          return (
            <span onClick={() => clickEmojiHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
