import { useEffect, useState } from "react"
import { CharacterGame, CharacterGameKeys } from "../../models/characters/character-base.model"
import { Button, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, Input, Textarea } from "@nextui-org/react"
import { KButton } from "../../components/ui/KButton"
import { EldenRingCharDetail } from ".."
import defaultEldenCharacter, { CharacterEldenRing } from "../../models/characters/character-eldenring.model"
import { Case, Default, Switch } from "../../ui"
import { EldenRingService } from "../../services/characters/elden-ring.service"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { AppStore } from "../../redux/store"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models/routes"


export default function CreatePage() {
  const userState = useSelector((state: AppStore) => state.user)
  const navigate = useNavigate();

  const [game, setGame] = useState<CharacterGame>(CharacterGame.EldenRing)
  const [eldenChar, setEldenChar] = useState<CharacterEldenRing>(defaultEldenCharacter)
  const [saving, setSaving] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")


  const handleChange = (char: CharacterEldenRing) => {

    char = {
      ...char,
      user: userState.id,
      game: game,
      name: name,
      description: description,
      imageUrl: imageUrl
    }

    console.log(char);

    setEldenChar(char);
  }

  async function handleCreateEdit() {
    try {
      setSaving(true)
      const response = await EldenRingService.createCharacter(eldenChar)
      if (response.result) {
        toast('Character created', { type: 'success' })
        navigate(`/${PublicRoutes.CHARACTER}/${PublicRoutes.ELDEN_RING}/${response.data._id}`)
      } else {
        toast(response.message, { type: 'error' })
      }
    } catch (error) {
      console.error(error)
      toast('Something went wrong', { type: 'error' })
    } finally {
      setSaving(false)
    }

  }

  function handleCancelEdit() { }


  return (
    <article className='flex flex-col items-center justify-center gap-2 mx-auto w-full h-full container'>
      <section className="flex flex-col justify-center items-start gap-2 w-full">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-full">
          <Dropdown
            classNames={
              {
                base: 'w-full',
              }
            }
          >
            <DropdownTrigger>
              <Button variant="bordered">
                {
                  game
                }
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dropdown game"
              disabledKeys={[CharacterGameKeys[1], CharacterGameKeys[2], CharacterGameKeys[3], CharacterGameKeys[4]]}
            >
              <DropdownItem key={CharacterGameKeys[0]} onPress={() => setGame(CharacterGame.EldenRing)}>{CharacterGameKeys[0]}</DropdownItem>
              <DropdownItem key={CharacterGameKeys[1]} onPress={() => setGame(CharacterGame.DarkSouls3)}>{CharacterGameKeys[1]}</DropdownItem>
              <DropdownItem key={CharacterGameKeys[2]} onPress={() => setGame(CharacterGame.DarkSouls2)}>{CharacterGameKeys[2]}</DropdownItem>
              <DropdownItem key={CharacterGameKeys[3]} onPress={() => setGame(CharacterGame.DarkSouls)}>{CharacterGameKeys[3]}</DropdownItem>
              <DropdownItem key={CharacterGameKeys[4]} onPress={() => setGame(CharacterGame.Bloodborne)}>{CharacterGameKeys[4]}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input
            label='Character Name'
            className="flex-4"
            size="sm"
            value={name}
            onValueChange={setName}
            onBlur={() => { handleChange(eldenChar) }}
          />
          <Input
            label='Image URL'
            className="flex-3"
            size="sm"
            value={imageUrl}
            onValueChange={setImageUrl}
            onBlur={() => { handleChange(eldenChar) }}
          />
        </div>

        <Textarea
          label='Description'
          maxRows={3}
          size="sm"
          value={description}
          onValueChange={setDescription}
          onBlur={() => { handleChange(eldenChar) }}
        />
      </section>

      <section className="flex flex-wrap gap-2">
        <Switch>
          <Case condition={game === CharacterGame.EldenRing}>
            <EldenRingCharDetail eldenChar={eldenChar} editing={true} onChange={handleChange} />
          </Case>
          <Default>
            <p>Select a game!</p>
          </Default>
        </Switch>
      </section>

      <section className="w-full">
        <div className="flex flex-row  justify-center items-end gap-2">
          <KButton color="success" onClick={handleCreateEdit} isLoading={saving}>
            Save
          </KButton>
          <KButton color="danger" onClick={handleCancelEdit}>
            Cancel
          </KButton>
        </div>
      </section>

    </article>
  )
}