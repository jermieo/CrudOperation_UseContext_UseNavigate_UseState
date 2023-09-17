import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Notes from "./Notes";
import SideBar from "./SideBar";
import { createContext, useState } from "react";
import ArrayData from "./ArrayData";
export const data1 = createContext();
function App() {
  const [values, setValue] = useState(ArrayData);
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div>
        <data1.Provider value={[values, setValue]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note" element={<Notes />} />
          </Routes>
        </data1.Provider>
      </div>
    </>
  );
}

export default App;
