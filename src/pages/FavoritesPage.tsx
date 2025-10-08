import { useTasks } from '../context/TasksContext'; 
import TaskItem from '../components/TaskItem';

const FavoritesPage = () => {
  const { tasks } = useTasks(); 
  const tarefasFavoritas = tasks.filter(task => task.favorito);

  return (
    <div className="page-container">
      <h1>Tarefas Favoritas</h1>
      <div className="task-list-container">
        <h3>Favoritas ({tarefasFavoritas.length})</h3>
        <ul className="task-list">
          {tarefasFavoritas.map(task =>
            <TaskItem key={task.id} task={task} />
          )}
        </ul>
      </div>
    </div>
  );
};
export default FavoritesPage;