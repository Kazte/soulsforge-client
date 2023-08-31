import { NavLink } from "react-router-dom";
import { Link as LinkUI } from "@nextui-org/react";
import { PublicRoutes } from "../../../models/routes";
import SEO from "../../../utilities/SEO";

export default function NotFoundPage() {
  return (
    <SEO title="Not Found - SoulsForge">
      <div
        className="flex flex-col items-center justify-center flex-grow h-full w-full"
      >
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-xl font-bold">
          Go back to the{' '}
          <LinkUI as={NavLink} to={PublicRoutes.HOME} color="primary">Homepage</LinkUI>
        </p>
      </div>
    </SEO>
  )
}