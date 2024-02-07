import { sendMessage } from "../store";

export const Two = () => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const message = formData.get("message");
    console.log(message);
    sendMessage(message);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="message" />
      <button>Send Message</button>
    </form>
  );
};
