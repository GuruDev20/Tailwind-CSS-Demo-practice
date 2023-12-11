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
    // <div className="parent">
    //   <div>Header</div>
    //   <div className="flex flex-col md:flex-row">
    //     <div className="w-32 bg-sky-500">Sidebar</div>
    //     <div className="w-full bg-red-500">Main content</div>
    //   </div>
    // </div>
    // <div className="parent">
    //   <div>Header</div>
    //   <div className="flex flex-col md:flex-row">
    //     <div className="flex flex-nowrap w-full">
    //       <div className="w-full grow">01</div>
    //       <div className="w-full grow">02</div>
    //       <div className="w-full grow">03</div>
    //     </div>
    //   </div>
    // </div>
    <div className="parent">
      <div>Header</div>
      <div className="flex items-center justify-evenly">
        <div>Sidebar</div>
        <div>
          <h1>Main content</h1>
          <p>Loreum ipsum </p>
        </div>
        <div>Another Sidebar</div>
      </div>
    </div>
  );
}
export default App;
