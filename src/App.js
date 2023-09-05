import "./styles.css";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState("");
  const [array, setarray] = useState(["hai", "hello"]);
  const [data, setData] = useState("");
  const handleItems = (y) => {
    const data = array.filter((x, z) => {
      return y !== z;
    });
    setarray(data);
    return data;
  };

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (text !== "") {
            setarray([...array, text]);
          }
          setText("");
        }}
      >
        Add
      </button>
      <br />
      {array.length === 0 ? (
        <h3>Add List</h3>
      ) : (
        array.map((x, y) => {
          return (
            <>
              <button
                onClick={() => {
                  handleItems(y);
                }}
              >
                {x}
              </button>
              <br />
              <br />
            </>
          );
        })
      )}
    </div>
  );
}
