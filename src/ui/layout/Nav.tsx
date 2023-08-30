
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { PublicRoutes, PrivateRoutes } from "../../models/routes";
import { AppStore } from "../../redux/store";
import { Case, Default, Switch } from "..";
import DarkModeSwitch from "../../components/ui/DarkModeSwitch";
import { Divider } from "@nextui-org/react";


export default function Nav() {

  const userState = useSelector((store: AppStore) => store.user)

  const links: Map<string, Links> = new Map([
    ['home', { name: 'Home', to: PublicRoutes.HOME }],
    ['register', { name: 'Register', to: PublicRoutes.REGISTER }],
    ['login', { name: 'Login', to: PublicRoutes.LOGIN }],
    ['profile', { name: 'Profile', to: `${PublicRoutes.PROFILE}/${userState.id}` }],
    ['character-create', { name: 'Create', to: PrivateRoutes.CHARACTER_CREATE }],
    ['logout', { name: 'Logout', to: PrivateRoutes.LOGOUT }]
  ])


  return (
    <>
      <nav className={`hidden sm:flex flex-row items-center gap-2`}>
        <Switch>
          <Case condition={Boolean(userState.username)}>
            <>
              <NL data={links.get('home')!} />
              <NL data={links.get('profile')!} />
              <NL data={links.get('character-create')!} />

              <Divider className="h-8" orientation="vertical" />
              <NL data={links.get('logout')!} />
            </>
          </Case>

          <Default>
            <>
              <NL data={links.get('home')!} />
              <NL data={links.get('register')!} />
              <NL data={links.get('login')!} />
            </>
          </Default>
        </Switch>

        <DarkModeSwitch className="ml-6 justify-self-end" />
      </nav >
    </>
  )
}

interface NLProps {
  data: Links
}

type Links = {
  name: string,
  to: string
}

function NL({ data }: NLProps) {
  const baseStyle = "text-foreground text-lg border-b-2 hover:border-foreground transition-colors duration-300";
  return (
    <NavLink
      className={
        ({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
      }
      to={data.to}>
      {data.name}
    </NavLink>
  )
}