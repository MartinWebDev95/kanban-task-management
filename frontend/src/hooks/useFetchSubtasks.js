import {
  collection, query, where, getDocs, doc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

function useFetchSubtasks({ taskId }) {
  const [subtasks, setSubtasks] = useState([{}]);

  const getSubtasks = async () => {
    // Get the reference of the selected task
    const taskRef = doc(db, `tasks/${taskId}`);

    // Get all subtask of the selected task
    const q = query(collection(db, 'subtasks'), where('taskRef', '==', taskRef));

    const querySnapshot = await getDocs(q);

    const data = [];

    // Add to data collection all subtasks
    querySnapshot.forEach((document) => {
      data.push({
        idSubtask: document.id,
        titleSubtask: document.data().title,
        doneSubtask: document.data().done,
      });
    });

    return data;
  };

  useEffect(() => {
    getSubtasks()
      .then((data) => {
        setSubtasks(data);
      }).catch((err) => {
        throw new Error(err.message);
      });
  }, []);

  return { subtasks, setSubtasks };
}

export default useFetchSubtasks;
