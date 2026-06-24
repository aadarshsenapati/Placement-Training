import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const name ="app"
  return (
    <>  
      <div><Navbar/></div>
      <div><Hero/></div>
      <div><Footer/></div>
    </>
  );
}

export default App;