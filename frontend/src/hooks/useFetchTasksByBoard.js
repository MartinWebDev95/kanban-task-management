import {
  doc, query, where, collection, onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

function useFetchTasksByBoards(boardId) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the reference of the selected board
    const boardRef = doc(db, `boards/${boardId}`);

    // Get all tasks that belong to the selected board
    const q = query(
      collection(db, 'tasks'),
      where('boardRef', '==', boardRef),
    );

    const unsub = onSnapshot(q, (querySnapshot) => {
      const collectionTasks = [];

      querySnapshot.forEach((document) => {
        collectionTasks.push(
          {
            uid: document.id,
            title: document.data().title,
            description: document.data().description,
          },
        );
      });

      setTasks(collectionTasks);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, [boardId]);

  return {
    tasks, loadingTask: loading,
  };
}

export default useFetchTasksByBoards;
