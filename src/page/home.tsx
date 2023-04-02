import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
// import { product } from "../data/shopProduct";
import { IProduct } from "../model";
import { Shop } from "../Shop";
import { Header } from "./header";

export const Home = () => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  async function FetchRes() {
    try {
      setError("");
      setLoading(true);
      const responce = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=20"
      );
      setProduct(responce.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    FetchRes();
  }, []);

  const searchProduct = product.filter((searched) => {
    return searched.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <Header />
      <div className="pt-28">
        <h1 className="text-3xl font-bold text-center mb-20">Outfits</h1>
        <div className="flex items-start justify-start  ml-12 ">
          <div className="relative ml-12">
            <input
              id="search"
              type={"text"}
              className="border-b py-1 focus:outline-none focus:border-purple-600 peer "
              onChange={(e) => setValue(e.target.value)}
            />
            <label
              htmlFor="search"
              className="absolute left-0 top-1 peer-focus:text-xs peer-focus:-top-4 transition-all"
            >
              Search product
            </label>
          </div>
        </div>
        {error && <p className="text-center font-bold text-2xl">{error}</p>}
        {Loading && (
          <p className="text-center font-bold text-2xl">Loading...</p>
        )}

        {searchProduct.map((pro) => (
          <Shop productOne={pro} key={pro.id} />
        ))}

        {/* <Shop productOne={product[0]} />
      <Shop productOne={product[1]} />
      <Shop productOne={product[2]} />
      <Shop productOne={product[3]} />
      <Shop productOne={product[4]} /> */}
      </div>
    </>
  );
};
