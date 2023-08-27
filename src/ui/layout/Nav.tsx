
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { PublicRoutes, PrivateRoutes } from "../../models/routes";
import { AppStore } from "../../redux/store";
import { Case, Default, Switch } from "..";
import DarkModeSwitch from "../../components/ui/DarkModeSwitch";
import { Divider } from "@nextui-org/react";

export default function Nav() {

  const userState = useSelector((store: AppStore) => store.user)



  const baseStyle = "text-foreground text-lg border-b-2 hover:border-foreground transition-colors duration-300";

  return (
    <nav className="hidden sm:flex flex-row items-center gap-2 ">
      <Switch>
        <Case condition={Boolean(userState.username)}>
          <>
            <NavLink
              className={
                ({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
              }
              to={PublicRoutes.HOME}>Home</NavLink>
            <NavLink
              className={
                ({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
              }
              to={`${PublicRoutes.PROFILE}/${userState.id}`}>Profile</NavLink>
            <NavLink
              className={
                ({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
              }
              to={`${PrivateRoutes.CHARACTER_CREATE}`}>Create</NavLink>
            <Divider className="h-8" orientation="vertical" />
            <NavLink
              className={
                ({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
              }
              to={PrivateRoutes.LOGOUT}>Logout</NavLink>
          </>
        </Case>

        <Default>
          <>
            <NavLink
              className={
                ({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
              }
              to={PublicRoutes.HOME}>Home</NavLink>
            <NavLink
              className={
                ({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
              }
              to={PublicRoutes.LOGIN}>Login</NavLink>
            <NavLink
              className={
                ({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
              }
              to={PublicRoutes.REGISTER}>Register</NavLink>
          </>
        </Default>
      </Switch>

      <DarkModeSwitch className="ml-6 justify-self-end" />
    </nav>
  )
}