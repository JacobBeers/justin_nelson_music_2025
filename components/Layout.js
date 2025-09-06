import Footer2 from "./Footer2";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer2 />
    </>
  );
};

export default Layout;