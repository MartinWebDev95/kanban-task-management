import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

async function deleteSubtask({ subtaskId }) {
  // Subtask is deleted by his id
  await deleteDoc(doc(db, 'subtasks', subtaskId));
}

export default deleteSubtask;
