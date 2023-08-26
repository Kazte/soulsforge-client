import { useEffect, useState, useMemo } from "react"
import { useParams } from "react-router-dom"
import { Divider, Spinner } from "@nextui-org/react";
import CardCharacterList from "../../../components/characters/CardCharacterList";
import { ProfileService } from "../../../services/profile/profile.service";
import { User } from "../../../models/user.model";
import { Case, Default, Switch } from "../../../ui";

export default function ProfilePage() {
  const params = useParams()

  // TODO: CHANGE FOR USER
  const [user, setUser] = useState<User | null>(null);
  const [fetching, setFetching] = useState(false);

  const userId = useMemo(() => {
    return params.id;
  }, [params])

  useEffect(() => {
    fetchUserData();
  }, [userId])

  const fetchUserData = async () => {
    // TODO: Change for route user

    setFetching(true);

    try {
      if (!params.id) return;

      const response = await ProfileService.getProfile(params.id);

      if (response.result) {
        setUser(response.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('error getting user', error);
    } finally {
      setFetching(false);
    }
  }

  return (
    <Switch>
      <Case condition={fetching}>
        <Container>
          <Spinner />
        </Container>
      </Case>

      <Case condition={Boolean(user)}>
        <h1 className="text-3xl font-bold text-center m-2">Profile of {user?.username}</h1>
        <Divider />
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Characters</h2>
          <div className="grid gap-2 justify-items-center" style={{ gridTemplateColumns: "repeat(auto-fill , minmax(200px, 1fr))" }}>
            {

              user?.characters_eldenRing.map((character, index) => {
                return <CardCharacterList key={index} character={character} />
              })
            }
          </div>
        </div>
      </Case>

      <Default>
        <Container>
          <h1 className="text-3xl font-bold">User not found</h1>
        </Container>
      </Default>
    </Switch>
  )
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col justify-center items-center">
      {children}
    </article>
  )
}