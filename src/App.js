import React from "react";
import tanjiro from './tanjiro.png';
function App() {
  return (
    <div className="h-screen p-4 parent">
      <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md  grayscale hover:grayscale-0">
        <img src={tanjiro} alt="" className="w-64 mg-4"/>
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my div</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-cyan-500/50 opacity-50 text-white">Say hello</button>
      </div>
      {/* <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md  brightness-50 hover:brightness-100">
        <img src={tanjiro} alt="" className="w-64 mg-4"/>
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my div</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-cyan-500/50 opacity-50 text-white">Say hello</button>
      </div> */}
      {/* <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md blur hover:blur-none">
        <img src={tanjiro} alt="" className="w-64 mg-4"/>
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my div</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-cyan-500/50 opacity-50 text-white">Say hello</button>
      </div> */}
    </div>
  );
}
export default App;
