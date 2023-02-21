import {
  collection, query, where, getDocs, doc,
} from 'firebase/firestore';
import { db } from '../firebase';

async function getAllBoards({ userId }) {
  const userRef = doc(db, `users/${userId}`);

  const q = query(
    collection(db, 'boards'),
    where('userRef', '==', userRef),
  );

  const querySnapshot = await getDocs(q);

  return querySnapshot;
}

export default getAllBoards;
