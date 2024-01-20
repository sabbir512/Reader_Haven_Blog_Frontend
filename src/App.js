import Home from "./page/homePage";
import Register from "./page/register";
import Login from "./page/login";
import BlogWritePage from "./page/blogWritePage";
import SinglePage from "./page/singlePage";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/write" element={<BlogWritePage />}></Route>
          <Route path="/post/:id" element={<SinglePage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
