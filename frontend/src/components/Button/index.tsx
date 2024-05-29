interface ButtonProps {
  title: string;
}

export default function HeaderButton({ title }: ButtonProps) {
  return (
    <button
      type="submit"
      className="border-2 border-[#02274F] bg-[#02274F] text-white py-1 px-20 rounded-md hover:bg-[#011A36] font-semibold"
    >
      {title}
    </button>
  );
}
