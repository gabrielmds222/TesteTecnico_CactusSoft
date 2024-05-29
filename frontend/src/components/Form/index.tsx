import Button from "../Button";

export default function Form() {
  return (
    <form action="#" className="w-full p-5 text-gray-500">
      <div className="w-full mb-3">
        <label className="block mb-2">Nome do Cliente:</label>
        <input
          type="text"
          placeholder="Digite o nome do cliente"
          className="border border-gray-400 py-1 px-2 w-full"
        />
      </div>

      {/* ///////////////////////////////////////////////////// */}

      <div className="grid grid-cols-2 gap-5 w-full">
        <div>
          <label className="block mb-2">Cidade:</label>
          <input
            type="text"
            placeholder="Digite sua cidade"
            className="border border-gray-400 py-1 px-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Bairro:</label>
          <input
            type="text"
            placeholder="Digite seu bairro"
            className="border border-gray-400 py-1 px-2 w-full"
          />
        </div>
      </div>

      {/* ////////////////////////////////////////////////////// */}

      <div className="grid grid-cols-2 gap-5 w-full mt-3">
        <div>
          <label className="block mb-2">Plano de contrato:</label>
          <select
            //   value={planoContrato}
            //   onChange={(e) => setPlanoContrato(e.target.value)}
            className="border border-gray-400 py-1 px-2 w-full"
          >
            <option value="">Selecione o plano de contrato</option>
            <option value="30 MB Internet">30 MB Internet</option>
            <option value="50 MB Internet">50 MB Internet</option>
            <option value="100 MB Internet">100 MB Internet</option>
            <option value="300 MB Internet">300 MB Internet</option>
            <option value="Plano Personalizado">Plano Personalizado</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Status de internet:</label>
          <select
            //   value={statusInternet}
            //   onChange={(e) => setStatusInternet(e.target.value)}
            className="border border-gray-400 py-1 px-2 w-full"
          >
            <option value="">Selecione o status de internet</option>
            <option value="0">Desconhecido</option>
            <option value="1">Ativo</option>
            <option value="2">Desativado</option>
            <option value="3">Bloqueio Manual</option>
            <option value="4">Bloqueio Automático</option>
            <option value="5">Financeiro em Atraso</option>
            <option value="6">Aguardando Assinatura</option>
          </select>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////// */}

      <div className="grid grid-cols-2 gap-5 w-full mt-5">
        <Button title="Buscar Clientes" />
      </div>
    </form>
  );
}

// import { z, ZodError } from "zod";
// import { Formik, Field, Form as FormikForm } from "formik";
// import Button from "../Button";

// const ValidationSchema = z.object({
//   nomeCliente: z.string().min(3, "Nome muito curto"),
//   cidadeCliente: z.string(),
//   bairroCliente: z.string(),
// });

// type FormValues = z.infer<typeof ValidationSchema>;

// export default function Form() {
//   const validateForm = (values: FormValues) => {
//     try {
//       ValidationSchema.parse(values);
//     } catch (error) {
//       if (error instanceof ZodError) {
//         return error.formErrors.fieldErrors;
//       }
//     }
//   };
//   return (
//     <Formik
//       initialValues={{
//         nomeCliente: "",
//         cidadeCliente: "",
//         bairroCliente: "",
//         planoContrato: "",
//         statusInternet: "",
//       }}
//       validate={validateForm}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       <FormikForm action="#" className="w-full p-5 text-gray-500">
//         <div className="w-full mb-3">
//           <label className="block mb-2">Nome do Cliente:</label>
//           <Field
//             type="text"
//             placeholder="Digite o nome do cliente"
//             className="border border-gray-400 py-1 px-2 w-full"
//           />
//         </div>

//         {/* ///////////////////////////////////////////////////// */}

//         <div className="grid grid-cols-2 gap-5 w-full">
//           <div>
//             <label className="block mb-2">Cidade:</label>
//             <Field
//               type="text"
//               placeholder="Digite sua cidade"
//               className="border border-gray-400 py-1 px-2 w-full"
//             />
//           </div>
//           <div>
//             <label className="block mb-2">Bairro:</label>
//             <Field
//               type="text"
//               placeholder="Digite seu bairro"
//               className="border border-gray-400 py-1 px-2 w-full"
//             />
//           </div>
//         </div>

//         {/* ////////////////////////////////////////////////////// */}

//         <div className="grid grid-cols-2 gap-5 w-full mt-3">
//           <div>
//             <label className="block mb-2">Plano de contrato:</label>
//             <Field
//               //   value={planoContrato}
//               //   onChange={(e) => setPlanoContrato(e.target.value)}
//               className="border border-gray-400 py-1 px-2 w-full"
//             >
//               <option value="">Selecione o plano de contrato</option>
//               <option value="30 MB Internet">30 MB Internet</option>
//               <option value="50 MB Internet">50 MB Internet</option>
//               <option value="100 MB Internet">100 MB Internet</option>
//               <option value="300 MB Internet">300 MB Internet</option>
//               <option value="Plano Personalizado">Plano Personalizado</option>
//             </Field>
//           </div>
//           <div>
//             <label className="block mb-2">Status de internet:</label>
//             <Field
//               //   value={statusInternet}
//               //   onChange={(e) => setStatusInternet(e.target.value)}
//               className="border border-gray-400 py-1 px-2 w-full"
//             >
//               <option value="">Selecione o status de internet</option>
//               <option value="0">Desconhecido</option>
//               <option value="1">Ativo</option>
//               <option value="2">Desativado</option>
//               <option value="3">Bloqueio Manual</option>
//               <option value="4">Bloqueio Automático</option>
//               <option value="5">Financeiro em Atraso</option>
//               <option value="6">Aguardando Assinatura</option>
//             </Field>
//           </div>
//         </div>

//         {/* //////////////////////////////////////////////////////////// */}

//         <div className="grid grid-cols-2 gap-5 w-full mt-5">
//           <Button title="Buscar Clientes" />
//         </div>
//       </FormikForm>
//     </Formik>
//   );
// }
