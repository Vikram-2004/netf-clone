import { FC } from "react";

interface inputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Inputs: FC<inputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        id={id}
        className="
        block
        rounded-lg
        px-6
        pt-6
        pb-1
        w-full
        text-white
        bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        text-md
        "
        placeholder=" "
        type={type}
      />
      <label
        htmlFor={id}
        className="
        absolute 
        text-base
        text-zinc-400
        duration-150
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
      "
      >
        {label}
      </label>
    </div>
  );
};

export default Inputs;
