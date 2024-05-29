import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F1F5F9]">
      <Navbar />
      <div className="flex w-full p-10 mt-4">
        <Form />
      </div>
      <div className="flex w-full p-4 mt-2 overflow-hidden">
        <div className="w-full px-10 overflow-y-auto">
          <table className="w-full bg-white border border-gray-200">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-2 border-b border-gray-200">
                  Nome do cliente
                </th>
                <th className="px-4 py-2 border-b border-gray-200">Status</th>
                <th className="px-4 py-2 border-b border-gray-200">Bairro</th>
                <th className="px-4 py-2 border-b border-gray-200">Cidade</th>
                <th className="px-4 py-2 border-b border-gray-200">Plano</th>
                <th className="px-4 py-2 border-b border-gray-200">
                  Valor do Plano
                </th>
              </tr>
            </thead>
            <Table />
          </table>
        </div>
      </div>
    </div>
  );
}
