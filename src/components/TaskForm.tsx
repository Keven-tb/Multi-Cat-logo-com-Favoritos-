import { useState } from 'react';
import { useTasks } from '../context/TasksContext';

const TaskForm = () => {
  const { addTask } = useTasks();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Adicionar nova tarefa..." />
      <button type="submit">Adicionar</button>
    </form>
  );
};
export default TaskForm;