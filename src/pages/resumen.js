import { ResumenProducto } from "@/components/ResumenProducto";
import useQuiosco from "@/hooks/useQuiosco";
import Layout from "../layout/Layout";

export default function Resumen() {
  const { pedido } = useQuiosco();
  return (
    <Layout pagina={"Resumen del Pedido"}>
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa Tu Pedido</p>
      {pedido.length === 0 ? (
        <p></p>
      ) : (
        pedido.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
