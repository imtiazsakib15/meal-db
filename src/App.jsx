import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="bg-[#2d2013] text-white">
        <div className="container mx-auto px-16 py-14">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
