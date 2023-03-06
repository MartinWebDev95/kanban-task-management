import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

async function updateBoard({ boardId, newBoardName }) {
  const boardRef = doc(db, 'boards', boardId);

  // Update the name field of the board selected
  await updateDoc(boardRef, {
    name: newBoardName,
  });
}

export default updateBoard;
