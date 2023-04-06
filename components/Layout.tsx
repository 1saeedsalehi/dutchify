import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Header/>
      {children}
      <Footer/>
    </div>
    
  );
}
