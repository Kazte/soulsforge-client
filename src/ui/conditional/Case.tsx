interface Props {
  condition: boolean;
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Case({ children, condition }: Props) {
  condition
  return <>{children}</>;
}