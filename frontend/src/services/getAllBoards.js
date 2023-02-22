import {
  collection, query, where, getDocs, doc,
} from 'firebase/firestore';
import { db } from '../firebase';

async function getAllBoards({ userId }) {
  const userRef = doc(db, `users/${userId}`);

  // Get all boards that belong to the current user
  const q = query(
    collection(db, 'boards'),
    where('userRef', '==', userRef),
  );

  const querySnapshot = await getDocs(q);

  let boards = [];

  querySnapshot.forEach((document) => {
    boards = [...boards, { uid: document.id, name: document.data().name }];
  });

  return boards;
}

export default getAllBoards;
