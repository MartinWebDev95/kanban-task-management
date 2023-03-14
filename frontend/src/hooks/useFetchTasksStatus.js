import {
  doc, query, where, collection, onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

function useFetchTasksStatus(boardId) {
  const [taskStatus, setTaskStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the reference of the selected board
    const boardRef = doc(db, `boards/${boardId}`);

    // Get all status that belong to the selected board
    const q = query(
      collection(db, 'status'),
      where('boardsId', 'array-contains', boardRef),
    );

    const unsub = onSnapshot(q, (querySnapshot) => {
      const collectionTaskStatus = [];

      querySnapshot.forEach((document) => {
        collectionTaskStatus.push(
          {
            uid: document.id,
            title: document.data().title,
          },
        );
      });

      setTaskStatus(collectionTaskStatus);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, [boardId]);

  return {
    taskStatus, loadingTaskStatus: loading,
  };
}

export default useFetchTasksStatus;
