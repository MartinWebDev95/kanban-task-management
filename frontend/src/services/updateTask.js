import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

async function updateTask({ taskId, newTaskName, newTaskDescription }) {
  const taskRef = doc(db, 'tasks', taskId);

  // Update the name and description field of the task selected
  await updateDoc(taskRef, {
    title: newTaskName,
    description: newTaskDescription,
  });
}

export default updateTask;
