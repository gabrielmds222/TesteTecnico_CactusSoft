import Form from "../components/Form";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <div className="flex justify-center p-10 items-center h-screen bg-[#F1F5F9]">
      <header className="absolute top-0 w-full bg-white flex justify-end items-center h-16 px-8">
        <Button title="Logout" />
      </header>
      <div className="flex w-full p-10 absolute top-0 mt-14">
        <Form />
      </div>
    </div>
  );
}
