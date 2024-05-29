import Button from "../Button";

export default function Navbar() {
  return (
    <header className="absolute top-0 w-full bg-white flex justify-end items-center h-16 px-8">
      <Button title="Logout" />
    </header>
  );
}
