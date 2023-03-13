import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

async function updateDoneSubtask({ subtaskId, subtaskDone }) {
  const subtaskRef = doc(db, 'subtasks', subtaskId);

  // Update the done field of the subtask selected
  if (subtaskDone) {
    await updateDoc(subtaskRef, {
      done: false,
    });
  } else {
    await updateDoc(subtaskRef, {
      done: true,
    });
  }
}

export default updateDoneSubtask;
