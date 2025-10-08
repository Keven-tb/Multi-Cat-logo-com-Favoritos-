import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TasksProvider } from './context/TasksContext';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import AllTasksPage from './pages/AllTaskPage';
import FavoritesPage from './pages/FavoritesPage';

const Router = () => {
  return (
    <BrowserRouter>
      <TasksProvider>
        <Navbar />
        <Notification />
        <main>
          <Routes>
            <Route path="/" element={<AllTasksPage />} />
            <Route path="/favoritos" element={<FavoritesPage />} />
          </Routes>
        </main>
      </TasksProvider>
    </BrowserRouter>
  );
};

export default Router;