import { useEffect, useState } from "react"
import { CharacterEldenRing } from "../../models/characters/character-eldenring.model"
import { Spinner } from "@nextui-org/react"
import { EldenRingService } from "../../services/characters/elden-ring.service"
import CardCharacterList from "../../components/characters/CardCharacterList"

export default function HomePage() {


  const [chars, setChars] = useState<CharacterEldenRing[]>([])
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    getChars()
  }, [])

  const getChars = async () => {
    setLoading(true)
    try {
      const { data, result } = await EldenRingService.getCharacters();
      if (result) {
        setChars(data)
      }
    } catch (error) {
      console.error('error getting elden chars', error)
    }
    setLoading(false)
  }


  if (loading)
    return <div className="flex flex-row justify-center items-center flex-grow">
      <Spinner />
    </div>

  if (chars.length <= 0)
    return <div className="flex flex-row justify-center items-center flex-grow">
      <h1 className="text-4xl text-center">No characters found</h1>
    </div>

  return (
    <div className="grid gap-2 justify-items-center" style={{ gridTemplateColumns: "repeat(auto-fill , minmax(200px, 1fr))" }}>
      {
        chars.map((char, index) => {
          return <CardCharacterList key={index} character={char} showCreator />
        })
      }
    </div>
  )
}