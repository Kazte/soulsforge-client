import { Divider } from "@nextui-org/react";

export interface Prop {
  title: string;
  children?: React.ReactNode;
}

export default function CharacterSection({ title, children }: Prop) {
  return (
    <div className="flex flex-col items-center justify-center bg-content4 m-2 h-[55px]">
      <h2>{title}</h2>
      <Divider />
      <span className="w-full h-full text-center flex items-center justify-center">
        {children}
      </span>
    </div>
  )
}