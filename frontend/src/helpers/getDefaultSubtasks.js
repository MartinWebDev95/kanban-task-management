function getDefaultSubtasks(subtasks) {
  if (subtasks.length > 0) {
    return subtasks.map((subtask) => (
      {
        idInput: subtask.idSubtask,
        nameInput: `taskName-${subtask.idSubtask}`,
        done: subtask.doneSubtask,
        valueInput: subtask.titleSubtask,
      }
    ));
  }

  return (
    [
      {
        idInput: crypto.randomUUID(),
        nameInput: `taskName-${crypto.randomUUID()}`,
        done: false,
        valueInput: '',
      },
    ]
  );
}

export default getDefaultSubtasks;
