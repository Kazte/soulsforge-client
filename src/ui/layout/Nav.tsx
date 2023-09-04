
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { PublicRoutes, PrivateRoutes } from "../../models/routes";
import { AppStore } from "../../redux/store";
import { Case, Default, Switch } from "..";
import DarkModeSwitch from "../../components/ui/DarkModeSwitch";
import { Button, Divider, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Nav() {

  const userState = useSelector((store: AppStore) => store.user)

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const links: Map<string, Links> = new Map([
    ['home', { name: 'Home', to: PublicRoutes.HOME }],
    ['register', { name: 'Register', to: PublicRoutes.REGISTER }],
    ['login', { name: 'Login', to: PublicRoutes.LOGIN }],
    ['profile', { name: 'Profile', to: `${PublicRoutes.PROFILE}/${userState.username}` }],
    ['character-create', { name: 'Create', to: PrivateRoutes.CHARACTER_CREATE }],
    ['logout', { name: 'Logout', to: PrivateRoutes.LOGOUT }]
  ])

  return (
    <Navbar
      shouldHideOnScroll
      isBlurred
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="sm:hidden"

        />
        <NavbarBrand>
          <Link to={links.get('home')!.to} className="font-bold text-inherit text-lg">SoulsForge</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Switch>
          <Case condition={Boolean(userState.username)}>
            <NavbarItem>
              <NL data={links.get('home')!} />
            </NavbarItem>
            <NavbarItem>
              <NL data={links.get('profile')!} />
            </NavbarItem>
            <NavbarItem>
              <NL data={links.get('character-create')!} />
            </NavbarItem>
            <Button as={NavLink} to={links.get('logout')!.to}>
              {links.get('logout')!.name}
            </Button>
          </Case>
          <Default>
            <NavbarItem>
              <NL data={links.get('home')!} />
            </NavbarItem>
            <NavbarItem>
              <NL data={links.get('register')!} />
            </NavbarItem>
            <NavbarItem>
              <NL data={links.get('login')!} />
            </NavbarItem>
          </Default>
        </Switch>
        <DarkModeSwitch />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <DarkModeSwitch />
      </NavbarContent>

      <NavbarMenu>
        <Switch>
          <Case condition={Boolean(userState.username)}>
            <NavbarMenuItem>
              <NL onClick={() => setIsMenuOpen(false)} data={links.get('home')!} />
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NL onClick={() => setIsMenuOpen(false)} data={links.get('profile')!} />
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NL onClick={() => setIsMenuOpen(false)} data={links.get('character-create')!} />
            </NavbarMenuItem>
            <Divider />
            <NavbarMenuItem>
              <NL onClick={() => setIsMenuOpen(false)} data={links.get('logout')!} />
            </NavbarMenuItem>
          </Case>
          <Default>
            <NavbarMenuItem>
              <NL onClick={() => setIsMenuOpen(false)} data={links.get('home')!} />
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NL onClick={() => setIsMenuOpen(false)} data={links.get('register')!} />
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NL onClick={() => setIsMenuOpen(false)} data={links.get('login')!} />
            </NavbarMenuItem>
          </Default>
        </Switch>
      </NavbarMenu>
    </Navbar >
  )
}

interface NLProps {
  data: Links
  onClick?: () => void
}

type Links = {
  name: string,
  to: string,
}

function NL({ data, onClick }: NLProps) {
  const baseStyle = "text-foreground text-lg border-b-2 hover:border-foreground transition-colors duration-300";
  return (
    <NavLink
      onClick={() => {
        console.log("asd");
        if (onClick !== undefined)
          onClick()
      }}
      className={
        ({ isActive }) => isActive ? baseStyle + ' border-foreground' : baseStyle + ' border-transparent'
      }
      to={data.to}>
      {data.name}
    </NavLink>
  )
}