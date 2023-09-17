import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Notes from "./Notes";
import SideBar from "./SideBar";
import { createContext, useState } from "react";
import ArrayData from "./ArrayData";
export const data1 = createContext();
export const data2 = createContext();
export const data3 = createContext();

function App() {
  const [values, setValue] = useState(ArrayData);
  const [addBtn, addBtnValues] = useState(false);
  const [editBtn, editBtnValues] = useState(true);

  return (
    <>
      <div>
        <data2.Provider value={[addBtn, addBtnValues]}>
          <data3.Provider value={[editBtn, editBtnValues]}>
            <SideBar />
          </data3.Provider>
        </data2.Provider>
      </div>
      <div>
        <data1.Provider value={[values, setValue]}>
          <data2.Provider value={[addBtn, addBtnValues]}>
            <data3.Provider value={[editBtn, editBtnValues]}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/note" element={<Notes />} />
              </Routes>
            </data3.Provider>
          </data2.Provider>
        </data1.Provider>
      </div>
    </>
  );
}

export default App;
