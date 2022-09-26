import './assets/styles/App.css';
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from './components/Navbar';
import NewBoardModal from './components/NewBoardModal';
import { useSelector } from 'react-redux';

function App() {
  const [sidebarShowed, setShowed] = useState(true)
  const createBoardModalVisible = useSelector(state => state.ui.createBoardModalVisible)
  return (
    <div className="w-screen h-screen bg-varyLightGray">
      <Navbar />
      <Sidebar toggle={() => setShowed(!sidebarShowed)} visible={sidebarShowed} />
      {createBoardModalVisible ? <NewBoardModal /> : <></>}
    </div>

  );
}

export default App;
