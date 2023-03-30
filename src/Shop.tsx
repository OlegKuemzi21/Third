import { IProduct } from "./model";
import { useState } from "react";

interface ProductProps {
  productOne: IProduct;
}

export const Shop = (prop: ProductProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="py-4 inline-flex ml-12 box-border ">
      <div className="w-52 ">
        <ul className="max-w-sm">
          <li className="border-2 rounded-lg py-4 border-borderB ">
            <img
              src={prop.productOne.image}
              alt={prop.productOne.title}
              className=" pb-6 block mx-auto object-scale-down h-40 w-40 "
            />
            <p className="font-bold border-t-2 px-4  pt-4 border-borderB leading-5 break-word ">
              {prop.productOne.title}
            </p>
            <p className="pl-4 text-lg italic my-2">
              Price:{prop.productOne.price}$
            </p>
            <button
              className="py-2 px-4 border bg-blue-400 rounded ml-2 "
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? "Hide details" : "Show details"}
            </button>

            {show && (
              <div className="pl-2 ">
                <p>{prop.productOne.description}</p>
              </div>
            )}
          </li>

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
        </ul>
      </div>
    </div>
  );
};
