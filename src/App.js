import './assets/styles/App.css';
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from './components/Navbar';

function App() {
  const [sidebarShowed, setShowed] = useState(true)
  return (
    <div className="w-screen h-screen bg-varyLightGray">
      <Navbar />
      {sidebarShowed ? <Sidebar toggle={() => setShowed(!sidebarShowed)} /> : <></>}
    </div>

  );
}

export default App;
