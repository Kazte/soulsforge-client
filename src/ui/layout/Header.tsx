import { Link } from "react-router-dom";

import Nav from "./Nav";
import { PublicRoutes } from "../../models/routes";

export default function Header() {
  return (
    <header className=" h-[4rem] bg-content1 flex justify-center items-center">
      <div className="flex flex-row justify-around items-center p-2 w-full">
        <Link to={PublicRoutes.HOME} className="flex flex-row items-center">
          {/* <img src="https://avatars.githubusercontent.com/u/76891822?s=200&v=4" alt="logo" className="w-8 h-8 mr-2" /> */}
          <h1 className="text-2xl font-bold">SoulsForge</h1>
        </Link>

        <Nav />

      </div>
    </header>
  )
}