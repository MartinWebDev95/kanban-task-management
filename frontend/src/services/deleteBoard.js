import {
  deleteDoc, doc, query, where, collection, getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';

async function deleteBoard({ boardId }) {
  // Ref of the board that is going to be deleted
  const boardRef = doc(db, 'boards', boardId);

  // Get all tasks that belong to the board that is going to be deleted
  const q = query(collection(db, 'tasks'), where('boardRef', '==', boardRef));

  const querySnapshot = await getDocs(q);

  // Iterate all tasks and delete every one by his id
  querySnapshot.forEach(async (document) => {
    await deleteDoc(doc(db, 'tasks', document.id));
  });

  // Finally the board is deleted by his id
  await deleteDoc(doc(db, 'boards', boardId));
}

export default deleteBoard;
