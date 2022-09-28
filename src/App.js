import './assets/styles/App.css';
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from './components/Navbar';
import NewBoardModal from './components/NewBoardModal';
import { useSelector } from 'react-redux';
import Main from './components/Main';
import NewTaskModal from './components/NewTaskModal';
import TaskDetailsModal from './components/TaskDetailsModal';

function App() {
  const [sidebarShowed, setShowed] = useState(true)
  const createBoardModalVisible = useSelector(state => state.ui.createBoardModalVisible)
  const createTaskModalVisible = useSelector(state => state.ui.createTaskModalVisible)
  const selectedTask = useSelector(state => state.ui.selectedTask)
  return (
    <div className="bg-varyLightGray">
      <Navbar />
      <div className='flex w-full'>
        <Sidebar toggle={() => setShowed(!sidebarShowed)} visible={sidebarShowed} />
        <Main />
      </div>
      {createBoardModalVisible ? <NewBoardModal /> : <></>}
      {createTaskModalVisible ? <NewTaskModal /> : <></>}
      {selectedTask && <TaskDetailsModal task={selectedTask} />}
    </div>

  );
}

export default App;
