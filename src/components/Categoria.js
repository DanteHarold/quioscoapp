import useQuiosco from "@/hooks/useQuiosco";
import Image from "next/image";

export const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useQuiosco();
  const { nombre, icono, id } = categoria;
  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-300" : ""
      } flex item-center gap-4 w-full border p-5 hover:bg-amber-300`}
    >
      <Image
        width={100}
        height={100}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen Icono"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};
