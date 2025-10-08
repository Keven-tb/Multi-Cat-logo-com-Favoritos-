import { useTasks } from '../context/TasksContext'; // Importe o hook
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

const AllTasksPage = () => {
  const { tasks } = useTasks();

  return (
    <div className="page-container">
      <h1>Lista de Tarefas</h1>
      <TaskForm />
      <div className="task-list-container">
        <h3>Todas as Tarefas ({tasks.length})</h3>
        <ul className="task-list">
          {tasks.map(task => 
            <TaskItem key={task.id} task={task} />
          )}
        </ul>
      </div>
    </div>
  );
};
export default AllTasksPage;