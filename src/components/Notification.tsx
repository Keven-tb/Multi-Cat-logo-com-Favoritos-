import { useTasks } from '../context/TasksContext';
import '../App.css';

const Notification = () => {
  const { notification } = useTasks();

  if (!notification) {
    return null;
  }

  return (
    <div className="notification-container">
      {notification}
    </div>
  );
};

export default Notification;