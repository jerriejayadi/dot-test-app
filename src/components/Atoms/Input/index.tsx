import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  className: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  withLabel?: boolean;
  id?: string;
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = "text",
  className,
  placeholder,
  id,
  onChange,
}: InputProps) {
  return (
    <>
      <input
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        type={type}
        className={`${className} w-full px-6 py-4 border border-gray-500 rounded-lg focus:outline-blue-500`}
      />
    </>
  );
}
