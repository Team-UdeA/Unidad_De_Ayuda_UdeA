export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Unidad De Ayuda",
	description: "Pagina de ayuda, para universitarios donde hay material de las clases, talleres , monitorias y el temario de los cursos",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Materias",
      href: "/docs",
    },
    {
      label: "Fechas De Examenes",
      href: "/pricing",
    },

	],
	navMenuItems: [
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://www.udea.edu.co/"
	},
};
