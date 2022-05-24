import type { Dispatch } from "react";

interface SuccessProps {
  setSuccess: Dispatch<boolean>;
}

const Success = ({ setSuccess }: SuccessProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center items-center h-72 w-72 bg-green-600 rounded-full border-8 ring-white">
        <div className="inline-block">
          <div className="absolute left-95px bottom-16 h-20 w-10 bg-white -rotate-45"></div>
          <div className="absolute right-22 top-20 h-1/2 w-10 bg-white rotate-45"></div>
        </div>
      </div>
      <p className="mt-5 text-white font-text">Need to send another message?</p>
      <button
        type="button"
        className="w-40 px-5 py-2 mt-5 rounded bg-dark-cerulean dark:bg-light-cyan text-white dark:text-black font-text active:ring-2 active:ring-sky-400"
        onClick={() => setSuccess(false)}
      >
        Back to form
      </button>
    </div>
  );
};
export default Success;
