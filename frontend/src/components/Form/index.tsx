import Button from "../Button";

export default function Form() {
  return (
    <form action="#" className="w-full p-5">
      <div className="w-full mb-5">
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-400 py-1 px-2 w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 w-full">
        <input
          type="text"
          placeholder="Firstname"
          className="border border-gray-400 py-1 px-2 w-full"
        />
        <input
          type="text"
          placeholder="Surname"
          className="border border-gray-400 py-1 px-2 w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 w-full mt-5">
        <input
          type="text"
          placeholder="Additional Field 1"
          className="border border-gray-400 py-1 px-2 w-full"
        />
        <input
          type="text"
          placeholder="Additional Field 2"
          className="border border-gray-400 py-1 px-2 w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 w-full mt-5">
        <input
          type="text"
          placeholder="Additional Field 3"
          className="border border-gray-400 py-1 px-2 w-full"
        />
        <input
          type="text"
          placeholder="Additional Field 4"
          className="border border-gray-400 py-1 px-2 w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 w-full mt-5">
        <input
          type="text"
          placeholder="Additional Field 5"
          className="border border-gray-400 py-1 px-2 w-full"
        />
        <Button title="Buscar Clientes" />
      </div>
    </form>
  );
}
