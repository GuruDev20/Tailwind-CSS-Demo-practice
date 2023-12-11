import React from "react";
function App() {
  return (
    <div className="h-screen text-white parent bg-slate-900">
      <div className="container mx-auto">
        {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div className="bg-sky-500 p-6 rounded-lg">1</div>
          <div className="bg-sky-500 p-6 rounded-lg">2</div>
          <div className="bg-sky-500 p-6 rounded-lg">3</div>
          <div className="bg-red-500 p-6 rounded-lg col-span-2">4</div>
          <div className="bg-sky-500 p-6 rounded-lg">5</div>
          <div className="bg-sky-500 p-6 rounded-lg">6</div>
          <div className="bg-green-500 p-6 rounded-lg col-span-2">7</div>
        </div> */}
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
          <div className="p-6 bg-sky-500 rounded-lg col-span-2">01</div>
          <div className="p-6 bg-sky-500 rounded-lg col-span-2">02</div>
          <div className="p-6 bg-sky-500 rounded-lg">03</div>
          <div className="p-6 bg-sky-500 rounded-lg">04</div>
          <div className="p-6 bg-sky-500 rounded-lg">05</div>
          <div className="p-6 bg-sky-500 rounded-lg col-span-2">06</div>
          <div className="p-6 bg-sky-500 rounded-lg">07</div>
          <div className="p-6 bg-sky-500 rounded-lg">08</div>
          <div className="p-6 bg-sky-500 rounded-lg">09</div>
          <div className="p-6 bg-sky-500 rounded-lg col-span-2">10</div>
          <div className="p-6 bg-sky-500 rounded-lg">11</div>
          <div className="p-6 bg-sky-500 rounded-lg">12</div>
        </div>
      </div>
    </div>
  );
}
export default App;
