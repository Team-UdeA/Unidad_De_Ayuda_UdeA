export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex items-center justify-center w-full">
			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
	);
}
