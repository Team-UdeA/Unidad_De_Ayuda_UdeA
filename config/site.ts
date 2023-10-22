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
		instagram: "https://www.instagram.com/udea/",
		twitter: "https://twitter.com/UdeA",
		facebook: "https://www.facebook.com/universidaddeantioquia",
        udea: "https://www.udea.edu.co/"
	},
};
