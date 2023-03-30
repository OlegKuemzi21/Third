import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="bg-mainColor flex items-center justify-between py-4 border-b-2 border-b-borderB ">
      <h1 className="text-2xl italic font-bold text-textColor mx-80 hover:text-blue-300">
        <Link to={"/"}>Project</Link>
      </h1>

      <ul className=" text-textColor flex items-center gap-x-8 gap-y-5 font-medium mx-80 text-xl italic ">
        <li className="hover:text-blue-300">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-blue-300">
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};
