'use client'
import {
	Autocomplete,
	AutocompleteProps,
	Avatar,
	Group,
	Text,
} from '@mantine/core'
import { useState } from 'react'

const usersData: Record<string, { image: string; email: string }> = {
	'AMD Ryzen 9 9950x3D': {
		image: 'https://negroup.co.id/cni-content/uploads/modules/product/20240826045906.png',
		email: 'Rp9.000.000,-',
	},
	'Ava Rodriguez': {
		image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
		email: 'ava_rose@gmail.com',
	},
	'Olivia Chen': {
		image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
		email: 'livvy_globe@gmail.com',
	},
	'Ethan Barnes': {
		image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
		email: 'ethan_explorer@gmail.com',
	},
	'Mason Taylor': {
		image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
		email: 'mason_musician@gmail.com',
	},
}

const renderAutocompleteOption: AutocompleteProps['renderOption'] = ({
	option,
}) => (
	<Group gap='sm'>
		<Avatar src={usersData[option.value].image} size={36} radius='xl' />
		<div>
			<Text size='sm'>{option.value}</Text>
			<Text size='xs' opacity={0.5}>
				{usersData[option.value].email}
			</Text>
		</div>
	</Group>
)

export default function AutoComplete() {
	const [value, setValue] = useState('')
	return (
		<div>
			value : {value}
			<Autocomplete
				value={value}
				onChange={setValue}
				data={[
					{
						group: 'Frontend',
						items: ['AMD Ryzen 9 9950x3D', 'Ava Rodriguez'],
					},
					{
						group: 'Backend',
						items: ['Olivia Chen', 'Ethan Barnes', 'Mason Taylor'],
					},
				]}
				renderOption={renderAutocompleteOption}
				//maxDropdownHeight={100}
				label='Employee of the month'
				placeholder='Search for employee'
				withScrollArea={false}
				styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
			/>
		</div>
	)
}
