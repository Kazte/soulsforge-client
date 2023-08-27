import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Skeleton } from "@nextui-org/react"
import { CharacterBase } from "../../models/characters/character-base.model"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models/routes"
import { useState } from "react"
import { User } from "../../models/user.model"

interface Props {
  character: CharacterBase
  showCreator?: boolean
}

export default function CardCharacterList({ character, showCreator = false }: Props) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false)

  const handleClick = () => {
    navigate(`/${PublicRoutes.CHARACTER}/${PublicRoutes.ELDEN_RING}/${character._id}`)
  }


  return (
    <Card
      shadow="sm"
      radius="none"
      className="max-w-[240px] min-w-[200px] max-h-fit hover:scale-105 transition duration-300 ease-in-out cursor-pointer" isPressable disableRipple onPress={handleClick}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{character.name}</h4>

        <small className="text-default-500">{character.game}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Skeleton isLoaded={loading}>
          <Image
            alt="Card background"
            className="rounded-none"
            src={character.imageUrl}
            onLoad={() => setLoading(true)}
          />
        </Skeleton>
      </CardBody>
      {
        showCreator && (
          <>
            <Divider />
            <CardFooter className="flex-col items-start">
              <p className="text-default-500">Created by: {(character.user as User).username}</p>
            </CardFooter>
          </>
        )
      }
    </Card>
  )
}