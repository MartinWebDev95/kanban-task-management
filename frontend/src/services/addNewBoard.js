import { doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

async function addNewBoard({ userId, nameBoard }) {
  // Get a document reference of the current user
  const userRef = doc(db, `users/${userId}`);

  // Add a new document in collection "boards"
  await addDoc(collection(db, 'boards'), {
    name: nameBoard,
    userRef,
  });
}

export default addNewBoard;
