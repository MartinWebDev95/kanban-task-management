import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

async function addSubtask({ taskId, subtaskId, subtaskTitle }) {
  // Get a document reference of the selected task
  const taskRef = doc(db, `tasks/${taskId}`);

  // Add a new document in collection "subtasks"
  await setDoc(doc(db, 'subtasks', subtaskId), {
    title: subtaskTitle,
    taskRef,
  });
}

export default addSubtask;
