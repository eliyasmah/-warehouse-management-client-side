import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import UpdateInventory from "./Pages/UpdateInventory/UpdateInventory";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import InventoryStock from "./Pages/InventoryStock/InventoryStock";
import RequirAuth from "./Pages/Login/RequirAuth/RequirAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/update/:updateId"
          element={
            <RequirAuth>
              <UpdateInventory></UpdateInventory>
            </RequirAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/stock"
          element={<InventoryStock></InventoryStock>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/account" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
