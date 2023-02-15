export const toStringDateDay = (date: Date | undefined) => {
  if (date) {
    const dateTask = new Date(date);
    const day =
      dateTask.getDate() > 9 ? dateTask.getDate() : `0${dateTask.getDate()}`;
    const month =
      dateTask.getMonth() > 9 ? dateTask.getMonth() : `0${dateTask.getMonth()}`;
    return `${day}.${month}.${dateTask.getFullYear()}`;
  }
};

export const toStringDateTime = (date: Date | undefined) => {
  if (date) {
    const dateTask = new Date(date);
    const hour =
      dateTask.getHours() > 9 ? dateTask.getHours() : `0${dateTask.getHours()}`;
    const minutes =
      dateTask.getMinutes() > 9
        ? dateTask.getMinutes()
        : `0${dateTask.getMinutes()}`;
    return `${hour}:${minutes}`;
  }
};
