import React from "react";
function App() {
  return (
    // <div className="parent">
    //   <div>Header</div>
    //   <div className="flex">
    //     <div className="basis-1/4">Sidebar</div>
    //     <div className="basis-2/4">Main Content</div>
    //     <div className="basis-1/4">Another Sidebar</div>
    //   </div>
    // </div>
    <div className="parent">
      <div>Header</div>
      <div className="flex flex-col md:flex-row">
        <div className="w-32 bg-sky-500">Sidebar</div>
        <div className="w-full bg-red-500">Main content</div>
      </div>
    </div>
  );
}
export default App;
