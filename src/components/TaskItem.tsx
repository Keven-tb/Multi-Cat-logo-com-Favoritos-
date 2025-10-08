import { useTasks } from '../context/TasksContext'; // Importe o hook
import { type Task } from '../types';

interface TaskItemProps {
  task: Task; 
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask, toggleCompleted, toggleFavorito } = useTasks();

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <div className="task-actions">
        <button onClick={() => toggleFavorito(task.id)} className="favorite-btn">{task.favorito ? '★' : '☆'}</button>
        <button onClick={() => toggleCompleted(task.id)} className="complete-btn">{task.completed ? 'Desfazer' : 'Concluir'}</button>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">Excluir</button>
      </div>
    </li>
  );
};
export default TaskItem;