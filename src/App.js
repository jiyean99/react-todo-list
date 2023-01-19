// import React from "react";
// import Items from "./components/Items";
// import Header from "./components/Header";
// import CreateItem from "./components/CreateItem";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// function App() {
//   return (
//     <BrowserRouter>
//         <div className="App">
//             <Header/>
//             <Routes>
//                 <Route path="/" element={<Items/>}/>
//                 <Route path="/todo" element={<Items/>}/>
//                 <Route path="/done" element={<Items/>}/>
//                 <Route path="/create_item" element={<CreateItem/>}/>
//             </Routes>
//         </div>
//     </BrowserRouter>
//   )
// }

// export default App;

import React from "react";
import Items from "./component/Items";
import Header from "./component/Header";
import CreateItem from "./component/CreateItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Items status="todo&status=done"/>} />
          <Route path="/todo" element={<Items status="todo" />} />
          <Route path="/done" element={<Items status="done" />} />
          <Route path="/create_item" element={<CreateItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}