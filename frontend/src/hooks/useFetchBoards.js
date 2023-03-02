import {
  collection, query, where, doc, orderBy, onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import useAuthContext from './useAuthContext';

function useFetchBoards() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuthContext();

  useEffect(() => {
    // Get the reference of the current user
    const userRef = doc(db, `users/${currentUser.uid}`);

    // Get all boards that belong to the current user order by creation date
    const q = query(
      collection(db, 'boards'),
      where('userRef', '==', userRef),
      orderBy('timeStamp'),
    );

    const unsub = onSnapshot(q, (querySnapshot) => {
      const collectionBoards = [];

      querySnapshot.forEach((document) => {
        collectionBoards.push({ uid: document.id, name: document.data().name });
      });

      setBoards(collectionBoards);
      setSelectedBoard(collectionBoards[0]);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  return {
    boards, loading, selectedBoard, setSelectedBoard,
  };
}

export default useFetchBoards;
