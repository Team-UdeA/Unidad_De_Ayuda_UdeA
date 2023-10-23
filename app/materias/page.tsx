import { title } from "@/components/primitives";
import React from "react";
import {Image} from "@nextui-org/image";
import { Chip } from '@nextui-org/chip';
import imagenalgebra from './img/algebra-trigo-l.jpg'

const callouts = [
	{
	  name: '',
	  description: '',
	  imageSrc: 'https://i.imgur.com/B7MoOlj.jpg',
	  imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
	  href: '#',
	  chipTitle: 'D. la Física',
	},
	{
	  name: '',
	  description: '',
	  imageSrc: 'https://i.imgur.com/RMbJBv4.jpg',
	  imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
	  href: '#',
	  chipTitle: 'G. Vectorial',
	},
	{
	  name: '',
	  description: '',
	  imageSrc: 'https://i.imgur.com/KuIceJr.jpg',
	  imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
	  href: '#',
	  chipTitle: 'C. Diferencial',
	},
	{
		name: '',
		description: '',
		imageSrc: 'https://i.imgur.com/GZjiTw0.jpg',
		imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
		href: '#',
		chipTitle: 'Algebra y T',
	  },
	  {
		name: '',
		description: '',
		imageSrc: 'https://i.imgur.com/VNSapZE.jpg',
		imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
		href: '#',
		chipTitle: 'A. Lineal',
	  },
	  {
		name: '',
		description: '',
		imageSrc: 'https://i.imgur.com/tASsRUz.jpg',
		imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
		href: '#',
		chipTitle: 'C. Integral',
	  },
	  {
		name: '',
		description: '',
		imageSrc: 'https://i.imgur.com/uQ70PEL.jpg',
		imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
		href: '#',
		chipTitle: 'F. Mecánica',
	  },
	  {
		name: '',
		description: '',
		imageSrc: 'https://i.imgur.com/yRy945s.jpg',
		imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
		href: '#',
		chipTitle: 'Teoría  PyC',
	  },
	  {
		name: '',
		description: '',
		imageSrc: 'https://i.imgur.com/YMDKw8u.jpg',
		imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
		href: '#',
		chipTitle: 'E. Diferenciales',
	  },
	  {
		name: '',
		description: '',
		imageSrc: 'https://i.imgur.com/Ku35Rzb.jpg',
		imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
		href: '#',
		chipTitle: 'M. Estadísticos',
	  },
  ]
  export default function Materias() {
	return (
	  <div className="bg-gray-100">
		<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
		  <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10">
			<h2 className="text-2xl font-bold text-gray-900">Materias Tronco Común</h2>
  
			<div className="mt-6 space-y-12 lg:grid lg:grid-cols-5 lg:gap-x-6 lg:space-y-0">
			  {callouts.map((callout) => (
				<div key={callout.name} className="group relative">
				  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
					<div className="relative">
					  <Image
						isZoomed
						width={240}
						style={{ height: '320px' }}
						src={callout.imageSrc}
						alt={callout.imageAlt}
					  />
					  <div
						className="absolute top-4 left-4 z-10"
						style={{
							width: '120px',

						  	background: 'linear-gradient(45deg, #6574cd, #f66d9b)',
						  	border: '1px solid white',
						  	boxShadow: '0 2px 5px rgba(255, 105, 180, 0.3)',
						  	borderRadius: '4px',
						  	color: 'white',
						  	padding: '4px',
						}}
					  >
						<div style={{ textAlign: 'left' }}>{callout.chipTitle}</div> {/* Utiliza el título personalizado del chip */}
					  </div>
					</div>
				  </div>
				  <h3 className="mt-6 text-sm text-gray-500">
					<a href={callout.href}>
					  <span className="absolute inset-0" />
					  {callout.name}
					</a>
				  </h3>
				  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
				</div>
			  ))}
			</div>
		  </div>
		</div>
	  </div>
	);
  }