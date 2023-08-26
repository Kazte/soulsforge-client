import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image, Button, Skeleton } from "@nextui-org/react"
import { CharacterBase } from "../../models/characters/character-base.model"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models/routes"
import { useState } from "react"

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
              <p className="text-default-500">Created by: {character.user.username}</p>
            </CardFooter>
          </>
        )
      }
    </Card>
  )


  return (
    <Card shadow="sm" className="max-w-[400px] min-w-[200px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer" isPressable disableRipple onPress={handleClick}>
      <Chip color="primary" className="m-2 self-end">
        {character.game}
      </Chip>
      <CardHeader>
        {character.name}
      </CardHeader>
      <Divider />
      <CardBody>
        {
          character._id
        }
      </CardBody>
      <Divider />
      <CardFooter>
        <small>Created by: {character.user.username}</small>
      </CardFooter>
    </Card >
  )
}