import { FC } from "react";
import { TodoType } from "./types/todo";

export const Todo: FC<Omit<TodoType, "id">> = (
    //props: Pick<TodoType, "userId" | "title" | "completed" >
    props
) => {
  const {title, userId, completed = false} = props;
  const completeMark = completed ? "[FIN]" : "[NoN]";
  return <p>{`${completeMark} ${title}(User:${userId})`}</p>;
};