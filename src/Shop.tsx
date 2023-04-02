import { IProduct } from "./model";
import { useState } from "react";

interface ProductProps {
  productOne: IProduct;
}

export const Shop = (prop: ProductProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="inline-flex ">
      <ul className="border-2 rounded-lg py-4 border-borderB ml-24 my-6 w-64">
        <li className="h-70">
          <img
            src={prop.productOne.image}
            alt={prop.productOne.title}
            className=" pb-6 p-2 block mx-auto object-scale-down h-36  w-36 "
          />

          <p className="font-bold border-t-2 pl-2 pt-4 border-borderB overflow-hidden max-h-10">
            {prop.productOne.title}
          </p>

          <p className="pl-2 font-bold text-base italic my-2">
            Price:{prop.productOne.price}$
          </p>
          <button
            className="py-2 px-4 border bg-blue-400 rounded-lg ml-1 "
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? "Hide details" : "Show details"}
          </button>

          {show && (
            <div className="pl-2 font-medium ">
              <p>{prop.productOne.description}</p>
            </div>
          )}
        </li>
      </ul>

      {/* <li className="border-2 rounded-lg  border-borderB">
          <img
            src={prop.productOne.image}
            alt=" There are photo"
            className="w-52 pb-6 block mx-auto py-4"
          />
          <h1 className="font-bold border-t-2 pt-4 px-4 border-borderB">
            {prop.productOne.title}
          </h1>
          <h4 className="pl-4 text-lg italic">
            Price:{prop.productOne.price}$
          </h4>
        </li> */}
    </div>
  );
};

//  max-w-xs
