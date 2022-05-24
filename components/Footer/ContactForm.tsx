import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import { Dispatch, useEffect } from "react";

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  setSuccess: Dispatch<boolean>;
}

const ContactForm = ({ setSuccess }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await send(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        data,
        process.env.EMAILJS_PUBLIC_KEY as string
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="grid grid-cols-2 gap-6 pt-5 pb-10 px-10 mb-8">
        <legend className="text-4xl text-white font-subheadings">
          Contact Me
        </legend>
        <p className="col-span-2 text-white font-text w-1/2">
          Send me a message so we can connect and talk about coding!
        </p>
        <input
          {...register("name", { required: true })}
          placeholder={errors.name ? "What's your name?" : "Name"}
          aria-label="Name"
          className={`bg-dark-cerulean dark:bg-light-cyan px-5 h-14 col-span-2 xs:col-span-1 text-white dark:text-black font-text focus:outline-none ${
            errors.name
              ? "placeholder:text-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              : "placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400"
          }`}
        />
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          })}
          placeholder={errors.email ? "What's your email?" : "Email"}
          aria-label="Email"
          className={`bg-dark-cerulean dark:bg-light-cyan px-5 h-14 col-span-2 xs:col-span-1 font-text focus:outline-none ${
            errors.email
              ? "text-red-500 placeholder:text-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              : "text-white dark:text-black placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400"
          }`}
        />
        <input
          {...register("subject", { required: true })}
          placeholder={errors.subject ? "What is this about?" : "Subject"}
          aria-label="Subject"
          className={`bg-dark-cerulean dark:bg-light-cyan col-span-2 px-5 h-14 text-white dark:text-black font-text focus:outline-none  ${
            errors.subject
              ? "placeholder:text-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              : "placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400"
          }`}
        />
        <textarea
          {...register("message", { required: true })}
          className={`resize-none bg-dark-cerulean dark:bg-light-cyan col-span-2 p-5 h-40 text-white dark:text-black font-text focus:outline-none ${
            errors.message
              ? "placeholder:text-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              : "placeholder:text-gray-300 dark:placeholder:text-gray-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400"
          }`}
          placeholder={errors.message ? "What's on your mind?" : "Message"}
          aria-label="Message"
        />
        <input
          type="submit"
          role="button"
          className="col-span-2 w-40 px-5 py-2 rounded justify-self-center bg-dark-cerulean dark:bg-light-cyan text-white dark:text-black font-text active:ring-2 active:ring-sky-400"
          value="Send Message"
        />
      </fieldset>
    </form>
  );
};

export default ContactForm;
