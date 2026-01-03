import "./App.css";
import GalleryList from "./components/GalleryList";
import Modal from "./components/shared/Modal";
import TaskBar from "./components/TaskBar";
import GalleryContextProvider from "./utils/GalleryReducer";

function App() {
  return (
    <GalleryContextProvider>
      <main>
        <TaskBar />
        <div className="">
          <GalleryList />
        </div>
        <Modal />
      </main>
    </GalleryContextProvider>
  );
}

export default App;
