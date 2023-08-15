export interface Props {
	sectionTitle: string;
	children?: React.ReactNode;
}

export default function CharacterSectionContainer({ sectionTitle, children }: Props) {
	return (
		<section className="bg-content2 border-2 border-content3">
			<h2 className="text-center">{sectionTitle}</h2>
			<div className="flex flex-wrap justify-center bg-content4">
				{children}
			</div >
		</section >
	)
}