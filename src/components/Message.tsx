import { useStore } from "../store";

export const Message = () => {
  const { message } = useStore();

  console.log(message);

  return <div>{message.message}</div>;
};
