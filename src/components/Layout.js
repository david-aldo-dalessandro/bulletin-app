/* Layout.js
 * David D'Alessandro
 * March 23, 2024
 * Component to represent all child components of app
 */

import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
