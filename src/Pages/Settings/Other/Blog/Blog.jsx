import React from 'react'
import { NavLink } from 'react-router-dom'
import { TabTitleFunction } from '../../../../utils/TabTitle'
import './Blog.css'

function Blog() {
	TabTitleFunction('Настройки блога')
	return (
		<div className='Blog'>
			<div className='Blog-title'>
				<NavLink to='/settings'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
					>
						<path
							d='M6 12H18M6 12L11 7M6 12L11 17'
							stroke='#c9cccf'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</NavLink>
				<h2>Блог</h2>
			</div>
			<ul className='Blog-catalog'></ul>
		</div>
	)
}

export default Blog
