import { useRouter } from "next/router";
const pasos = [
  {
    paso: 1,
    nombre: "Menú",
    url: "/",
  },
  {
    paso: 2,
    nombre: "Resumen",
    url: "/resumen",
  },
  {
    paso: 3,
    nombre: "Datos y Total",
    url: "/total",
  },
];
export const Pasos = () => {
  const router = useRouter();

  const calcularProgreso = () => {
    // const porcentaje = (paso / 3) * 100;
    let valor;
    if (router.pathname === "/") {
      valor = 2;
    } else if (router.pathname === "/resumen") {
      valor = 50;
    } else {
      valor = 100;
    }

    return valor;
  };

  return (
    <>
      <div className="flex justify-between mt-10 mb-5 mx-20">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url);
            }}
            className="text-2xl font-bold hover:bg-amber-300 p-5 rounded-md"
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white "
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  );
};
