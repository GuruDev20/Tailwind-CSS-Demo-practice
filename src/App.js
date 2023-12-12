import React from "react";
function App() {
  return (
    <div className="h-screen text-white parent bg-slate-900">
      {/* <div className="container px-2 columns-3">
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div> */}
      {/* <div className="container px-2 pt-10">
        <div className="relative bg-red-500 rounded-lg p-8 w-32 h-32">
          <div className="w-24 h-24 bg-green-500 rounded-lg absolute -left-2 -top-2"></div>
        </div>
        <div className="relative bg-red-500 rounded-lg mt-10 p-8 w-32 h-32">
          <div className="w-24 h-24 bg-green-500 rounded-lg absolute inset-4"></div>
        </div>
      </div> */}
      <div className="container flex">
        <div className="bg-red-500 z-40 rounded-full border-white">05</div>
        <div className="bg-red-500 z-30 rounded-full border-white">04</div>
        <div className="bg-red-500 z-20 rounded-full border-white">03</div>
        <div className="bg-red-500 z-10 rounded-full border-white">02</div>
        <div className="bg-red-500 z-0 rounded-full border-white">01</div>
      </div>
    </div>
  );
}
export default App;
