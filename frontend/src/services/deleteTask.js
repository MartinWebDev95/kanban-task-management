import {
  deleteDoc, doc, query, where, collection, getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';

async function deleteTask({ taskId }) {
  // Ref of the task that is going to be deleted
  const taskRef = doc(db, 'tasks', taskId);

  // Get all subtasks that belong to the task that is going to be deleted
  const q = query(collection(db, 'subtasks'), where('taskRef', '==', taskRef));

  const querySnapshot = await getDocs(q);

  // Iterate all subtasks and delete every one by his id
  querySnapshot.forEach(async (document) => {
    await deleteDoc(doc(db, 'subtasks', document.id));
  });

  // Finally the task is deleted by his id
  await deleteDoc(doc(db, 'tasks', taskId));
}

export default deleteTask;
