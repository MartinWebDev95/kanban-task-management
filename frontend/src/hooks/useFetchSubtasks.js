import {
  collection, query, where, doc, onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

function useFetchSubtasks({ taskId }) {
  const [subtasks, setSubtasks] = useState([{}]);

  useEffect(() => {
    // Get the reference of the selected task
    const taskRef = doc(db, `tasks/${taskId}`);

    // Get all subtasks that belong to the selected task
    const q = query(
      collection(db, 'subtasks'),
      where('taskRef', '==', taskRef),
    );

    const unsub = onSnapshot(q, (querySnapshot) => {
      const collectionSubtasks = [];

      // Add to collectionSubtasks all subtasks
      querySnapshot.forEach((document) => {
        collectionSubtasks.push(
          {
            idSubtask: document.id,
            titleSubtask: document.data().title,
            doneSubtask: document.data().done,
          },
        );
      });

      setSubtasks(collectionSubtasks);
    });

    return () => {
      unsub();
    };
  }, [taskId]);

  return { subtasks, setSubtasks };
}

export default useFetchSubtasks;
