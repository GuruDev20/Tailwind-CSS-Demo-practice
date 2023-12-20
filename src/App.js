import React from "react";
function App() {
  return (
    <div>
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p className="text-base">This is a paragraph</p>
      <div>
        <button>This is button</button>
      </div>
      <div>
        <input type="tex"/>
      </div>
      <div>
        <input type="checkbox" id="checkbox"/>
        <label for="checkbox">CheckBox</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <h1>This is another title</h1>
      <h2>This is a subtitle</h2>
    </div>
  );
}
export default App;
