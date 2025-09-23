import React from "react";
// import NavBar from "./components/NavBar";
// import NavBarScroll from "./components/NavBarScroll";
// import AxiosPrac from "./AxiosPrac";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewDetails from "./practice1/ViewDeatils";
import NavHos from "./practice1/NavHos";
import AddDetails from "./practice1/AddDeatils";
import FindBlood from "./practice1/FindBlood";
import EditDetails from "./practice1/EditDetails";
// import NavHos from "./practice1/NavHos";
// import CredOpt from "./practice/CredOpt";
// import CreateStudent from "./practice/CreateStudent";
// import EditStudent from "./practice/EditStudent";
// import ViewDetails from "./practice/ViewDetails";
// import NavBar3 from "./components/NavBar3";
// import MainBody from "./components/MainBody";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <NavHos/>
    <Routes>
      {/* <Route path='/' element={<CredOpt/>} />
      <Route path='/student/create' element={<CreateStudent/>} />
      <Route path="/student/edit/:studentid" element={<EditStudent/>}/>
      <Route path="/student/view/:studentid" element={<ViewDetails/>}/> */}
      
      {/* hostpital */}
      <Route path="/" element={<ViewDetails/>} />
      <Route path="/adddeatils" element={<AddDetails/>} />
      <Route path="/findblood" element={<FindBlood/>} />
      <Route path="/editdetails" element={<EditDetails/>} />

    </Routes>
    </BrowserRouter>
  );
};

export default App;
