import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

async function updateSubtask({ subtaskId, subtaskTitle }) {
  const subtaskRef = doc(db, 'subtasks', subtaskId);

  // Update the title field of the subtask
  await updateDoc(subtaskRef, {
    title: subtaskTitle,
  });
}

export default updateSubtask;
