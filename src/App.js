import './assets/styles/App.css';
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from './components/Navbar';
import NewBoardModal from './components/NewBoardModal';
import { useSelector } from 'react-redux';
import Main from './components/Main';
import NewTaskModal from './components/NewTaskModal';
import TaskDetailsModal from './components/TaskDetailsModal';
import ShowSidebar from './components/ShowSidebar';
import clsx from 'clsx';
import NewTaskGroupModal from './components/NewTaskGroupModal';

function App() {
  const [sidebarShowed, setShowed] = useState(true)
  const createBoardModalVisible = useSelector(state => state.ui.createBoardModalVisible)
  const createTaskModalVisible = useSelector(state => state.ui.createTaskModalVisible)
  const createTaskGroupModal = useSelector(state => state.ui.createTaskGroupModal)

  const selectedTask = useSelector(state => state.ui.selectedTask)
  const theme = useSelector(state => state.ui.theme)
  const mainWrapperCls = clsx("flex", theme === 'light' ? "bg-light-grey" : "bg-veryDarkBlue")
  const sideBarCls = clsx("flex flex-col align-center border-r w-[300px] shrink-0 dark:bg-darkBluePrimary min-h-[calc(100vh-100px)] w-64", "lg:w-[300px]", theme === 'light' ? "bg-white" : "bg-darkBluePrimary", sidebarShowed ? "sticky left-0" : "left-[-300px]", "pb-10 sm:flex sm:flex-col border-r-lines-light dark:border-r-lines-dark absolute transition-all duration-2000 z-10")

  return (
    <div className="bg-varyLightGray w-full h-full">
      <Navbar />
      <main className={mainWrapperCls}>
        <Sidebar className={sideBarCls} toggle={() => setShowed(!sidebarShowed)} visible={sidebarShowed} />
        <Main />
      </main>
      {createBoardModalVisible ? <NewBoardModal /> : <></>}
      {createTaskModalVisible ? <NewTaskModal /> : <></>}
      {selectedTask && <TaskDetailsModal task={selectedTask} />}
      {createTaskGroupModal && <NewTaskGroupModal />}
      {!sidebarShowed ? <ShowSidebar toggle={() => setShowed(!sidebarShowed)} /> : <></>}

    </div>

  );
}

export default App;
