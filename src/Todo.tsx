type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
}

export const Todo = (props: TodoType) => {
  const {title, userId, completed = false} = props;
  const completeMark = completed ? "[FIN]" : "[NoN]";
  return <p>{`${completeMark} ${title}(User:${userId})`}</p>;
};