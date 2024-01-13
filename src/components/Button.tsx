type ButtonProps = {
  label: string;
  type: "primary" | "secondary";
};

export const Button = ({ label, type }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`px-5 py-2 text-sm font-normal border-2 active:scale-95 rounded-xl ${type}`}
    >
      {label}
    </button>
  );
};
