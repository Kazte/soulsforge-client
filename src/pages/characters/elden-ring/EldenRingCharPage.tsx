import { Spinner, Divider, Skeleton, Button, Textarea, Input, Modal, useDisclosure, ModalContent, ModalHeader, ModalFooter } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import KLink from "../../../components/ui/KLink"
import { CharacterEldenRing } from "../../../models/characters/character-eldenring.model"
import { PublicRoutes } from "../../../models/routes"
import { AppStore } from "../../../redux/store"
import { EldenRingService } from "../../../services/characters/elden-ring.service"
import { KButton } from "../../../components/ui/KButton"
import EldenRingCharDetail from "./components/EldenRingCharDetail"
import { toast } from 'react-toastify'
import { Case, Default, Switch } from "../../../ui"
import { HeartIcon } from "../../../icons"
import { User } from "../../../models/user.model"

export default function EldenRingCharPage() {
  const params = useParams()
  const userState = useSelector((store: AppStore) => store.user)
  const navigate = useNavigate();

  const [eldenChar, setEldenChar] = useState<CharacterEldenRing | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [loadedImage, setLoadedImage] = useState<boolean>(false)
  const [myChar, setMyChar] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [lastEldenCharValue, setLastEldenCharValue] = useState<CharacterEldenRing | null>(eldenChar);

  const [liked, setLiked] = useState<boolean>();

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')

  const [saving, setSaving] = useState<boolean>(false)
  const [deleting, setDeleting] = useState<boolean>(false)



  useEffect(() => {

    if (!params.id)
      return;

    getCharacter(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])

  const getCharacter = async (id: string) => {
    setLoading(true);
    try {
      const { data, result } = await EldenRingService.getCharacter(id);

      if (result) {
        setEldenChar(data);
        setMyChar(data.user._id == userState.id)
        setName(data.name);
        setDescription(data.description);
        setImageUrl(data.imageUrl);
      }


    } catch (err) {
      console.error('error getting elden char', err)
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (char: CharacterEldenRing) => {
    setEldenChar(char);
  }



  async function handleSaveEdit() {
    if (eldenChar === null)
      return;

    try {
      setSaving(true);

      if (!eldenChar._id) {
        throw new Error('Character not found');
      }

      const response = await EldenRingService.updateCharacter(eldenChar._id, eldenChar);

      if (response.result) {
        toast('Character updated', { type: 'success' })
      }
    }
    catch (err) {
      console.error('error updating character', err);
    }
    finally {
      setSaving(false);
      setIsEditing(false);
    }
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEldenChar(lastEldenCharValue)
  }

  async function handleDelete() {
    if (eldenChar === null)
      return;

    try {
      setDeleting(true);

      // wait 4 seconds
      await new Promise(resolve => setTimeout(resolve, 4000));

      if (!eldenChar._id) {
        throw new Error('Character not found');
      }

      const response = await EldenRingService.deleteCharacter(eldenChar._id);

      if (response.result) {
        toast('Character deleted', { type: 'success' })
        setEldenChar(null);
      }
    }
    catch (err) {
      console.error('error deleting character', err);
    }
    finally {
      setDeleting(false);
    }
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (loading)
    return <article className="flex flex-col gap-4 container m-auto">
      <Spinner />
    </article>

  if (!eldenChar)
    return <article className="flex flex-col gap-4 container m-auto">
      <h1 className="text-4xl text-center">Character not found</h1>
    </article>

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose => (
            <>
              <ModalHeader>Are you sure?</ModalHeader>
              <ModalFooter>
                <KButton color="danger"
                  isLoading={deleting}
                  onClick={async () => {
                    await handleDelete()
                    onClose()
                    navigate(PublicRoutes.HOME)

                  }}>
                  {deleting ? 'Deleting...' : 'Delete'}
                </KButton>

                <KButton color="success" onClick={async () => {

                  onClose()
                }}>
                  Cancel
                </KButton>
              </ModalFooter>
            </>
          ))}
        </ModalContent>
      </Modal>
      <article className="flex flex-col gap-4 container m-auto">
        {

          myChar ? (
            <section className="flex flex-row justify-end gap-2">
              {
                isEditing && (
                  <>
                    <KButton color="success" onClick={handleSaveEdit} isLoading={saving}>
                      {saving ? 'Saving...' : 'Save'}
                    </KButton>
                    <KButton color="danger" onClick={handleCancelEdit}>
                      Cancel
                    </KButton>
                  </>
                )
              }
              {
                !isEditing && (
                  <>
                    <KButton
                      color={isEditing ? 'danger' : 'success'}
                      onClick={() => {
                        setLastEldenCharValue(eldenChar)
                        setIsEditing(!isEditing)
                      }}>
                      {
                        isEditing ? 'Cancel' : 'Edit'
                      }
                    </KButton>
                    <KButton
                      color="danger"
                      onPress={onOpen}
                    >
                      Delete
                    </KButton>
                  </>
                )
              }
            </section>
          ) : (

            <Switch>
              <Case condition={Boolean(userState.id)}>
                <section className="flex flex-row justify-end gap-2">
                  <Button
                    isIconOnly
                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                    radius="full"
                    variant="light"
                    onPress={() => setLiked((v) => !v)}
                  >
                    <HeartIcon className={liked ? "[&>path]:stroke-transparent" : ""}
                      fill={liked ? "currentColor" : "none"} />
                  </Button>
                </section>
              </Case>
            </Switch>
          )
        }
        <section className="flex flex-row justify-center items-center gap-2">
          {
            isEditing ? (
              <Input
                type="text"
                classNames={{
                  input: 'text-2xl text-center'
                }}
                value={name}
                onValueChange={setName}
                onBlur={() => handleChange({ ...eldenChar, name: name })}
              />
            ) : (
              <h1 className="text-2xl text-center py-2">{eldenChar?.name}</h1>
            )
          }
        </section>
        <Divider className="" />

        <section className="flex flex-wrap flex-col-reverse sm:flex-row gap-2 justify-between">
          <span className="flex-1 sm:w-[75ch]">
            {
              isEditing ? (
                <Textarea
                  type="underlined"
                  autoFocus
                  className="h-full"
                  classNames={
                    {
                      input: 'h-full flex-1',
                      inputWrapper: 'h-full flex-1'
                    }
                  }
                  label="Description"
                  placeholder="Description"
                  value={description}
                  onValueChange={setDescription}
                  onBlur={() => handleChange({ ...eldenChar, description: description })}
                />
              ) : (
                <p className="">
                  {eldenChar?.description}
                </p>
              )
            }
          </span>
          <Switch>
            <Case condition={isEditing}>
              <Input
                label='Image URL'
                className="flex-3"
                size="sm"
                value={imageUrl}
                onValueChange={setImageUrl}
                onBlur={() => handleChange({ ...eldenChar, imageUrl: imageUrl })}
              />
            </Case>
            <Default>
              <picture className="flex flex-col gap-2 sm:w-[200px] w-1/2 mx-auto">
                <Skeleton isLoaded={loadedImage} className="">
                  <img src={eldenChar?.imageUrl} alt={eldenChar?.name}
                    onLoad={() => setLoadedImage(true)} />
                  <p>
                    {loadedImage}
                  </p>
                </Skeleton>
                <p className="self-end mx-2">
                  <strong>Created by:</strong> <KLink to={`/${PublicRoutes.PROFILE}/${(eldenChar?.user as User)._id}`}>{(eldenChar?.user as User).username}</KLink>
                </p>
              </picture>
            </Default>
          </Switch>


        </section>

        <Divider />

        <section className="flex flex-wrap gap-2">
          <EldenRingCharDetail eldenChar={eldenChar} editing={isEditing} onChange={handleChange} />
        </section>
      </article>
    </>
  )
}