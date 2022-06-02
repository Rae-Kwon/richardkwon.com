import { useState } from "react";
import ContactForm from "./ContactForm";
import Success from "./Success";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  return (
    <div className="flex flex-col h-full items-center justify-center">
      {success ? (
        <Success setSuccess={setSuccess} />
      ) : (
        <ContactForm setSuccess={setSuccess} />
      )}
    </div>
  );
};
export default Contact;
