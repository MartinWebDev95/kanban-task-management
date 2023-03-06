import { doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

async function addNewTask({ boardId, titleTask, descriptionTask }) {
  // Get a document reference of the selected board
  const boardRef = doc(db, `boards/${boardId}`);

  // Add a new document in collection "tasks"
  await addDoc(collection(db, 'tasks'), {
    title: titleTask,
    description: descriptionTask,
    boardRef,
  });
}

export default addNewTask;
