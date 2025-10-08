import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { type Task } from '../types';

interface ITasksContext {
  tasks: Task[];
  notification: string;
  addTask: (text: string) => void;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
  toggleFavorito: (id: number) => void;
}

const TasksContext = createContext<ITasksContext | null>(null);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (!notification) return;

    const timerId = setTimeout(() => {
      setNotification('');
    }, 3000);

    return () => clearTimeout(timerId);
  }, [notification]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(), text, completed: false, favorito: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };
  
  const toggleFavorito = (id: number) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        const updatedTask = { ...task, favorito: !task.favorito };
        
        if (updatedTask.favorito) {
          setNotification(`Tarefa "${updatedTask.text}" adicionada aos favoritos!`);
        }

        return updatedTask;
      }
      return task;
    }));
  };
  
  const value = {
    tasks,
    notification,
    addTask,
    deleteTask,
    toggleCompleted,
    toggleFavorito
  };

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks deve ser usado dentro de um TasksProvider');
  }
  return context;
};