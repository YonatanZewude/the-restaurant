import { Outlet } from "react-router-dom";
import "../styles/_main.scss";
import { Nav } from "./nav";

export const Layout = () => {
  return (
    <div> 
      <Nav />
      <main>
       
        <Outlet />
      </main>
    </div>
  );
};
