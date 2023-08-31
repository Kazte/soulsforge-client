import { Helmet } from "react-helmet"

interface Props {
  children: React.ReactNode
  title: string
}

export default function SEO({ children, title }: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}