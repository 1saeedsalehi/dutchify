import Footer from "./Footer";
import Header from "./Header";
import { FC, ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className="bg-white">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
