'use client'
import { useState, useRef } from 'react'
import {
	Avatar,
	Combobox,
	Group,
	Input,
	InputBase,
	Text,
	TextInput,
	useCombobox,
	ActionIcon,
} from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import formatCurrencyString from '../utils/formatCurrency'

interface Item {
	emoji: string
	value: string
	price: string
}

const groceries: Item[] = [
	{
		emoji: 'https://negroup.co.id/cni-content/uploads/modules/product/20240826045906.png',
		value: 'AMD Ryzen 7 7800X3D ',
		price: '334534534',
	},
	{
		emoji: 'https://negroup.co.id/cni-content/uploads/modules/product/20240826045906.png',
		value: 'AMD Ryzen 5 7800X3D ',
		price: '123123342',
	},
	{
		emoji: 'https://negroup.co.id/cni-content/uploads/modules/product/20240826045906.png',
		value: 'AMD Ryzen 1 7800X3D ',
		price: '5235235',
	},
	{
		emoji: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
		value: 'Carrots',
		price: '456456',
	},
]

function SelectOption({ emoji, value, price }: Item) {
	return (
		<Group>
			<Avatar src={emoji} size={36} radius='xl' />
			<div>
				<Text fz='sm' fw={500}>
					{value}
				</Text>
				<Text fz='xs' opacity={0.6}>
					{formatCurrencyString(price)}
				</Text>
			</div>
		</Group>
	)
}

export function SelectOptionComponent() {
	const [search, setSearch] = useState('')
	const [value, setValue] = useState<string | null>(null)
	const combobox = useCombobox({
		onDropdownClose: () => combobox.resetSelectedOption(),
	})
	const inputRef = useRef<HTMLInputElement>(null)

	const selectedOption = groceries.find((item) => item.value === value)

	const options = groceries
		.filter((item) =>
			item.value.toLowerCase().includes(search.toLowerCase().trim())
		)
		.map((item) => (
			<Combobox.Option value={item.value} key={item.value}>
				<SelectOption {...item} />
			</Combobox.Option>
		))

	const handleClear = () => {
		setValue(null)
		setSearch('')
		inputRef.current?.focus()
	}

	return (
		<Combobox
			transitionProps={{ transition: 'pop', duration: 200 }}
			dropdownPadding={10}
			shadow='md'
			store={combobox}
			withinPortal={false}
			onOptionSubmit={(val) => {
				setValue(val)
				combobox.closeDropdown()
			}}>
			<Combobox.Target>
				<InputBase
					label='Prosesor'
					component='button'
					type='button'
					pointer
					leftSection={
						value ? (
							<ActionIcon
								onClick={handleClear}
								size='sm'
								variant='subtle'>
								<IconX size='0.8rem' />
							</ActionIcon>
						) : undefined
					}
					rightSection={<Combobox.Chevron />}
					onClick={() => combobox.toggleDropdown()}
					multiline>
					{selectedOption ? (
						<SelectOption {...selectedOption} />
					) : (
						<Input.Placeholder>Pick value</Input.Placeholder>
					)}
				</InputBase>
			</Combobox.Target>

			<Combobox.Dropdown>
				<Combobox.Search
					onBlur={() => setSearch('')}
					value={search}
					onChange={(event) => setSearch(event.currentTarget.value)}
					placeholder='Cari Prosesor'
					ref={inputRef}
				/>
				<Combobox.Options>
					{options.length > 0 ? (
						options
					) : (
						<Combobox.Empty>Nothing found</Combobox.Empty>
					)}
				</Combobox.Options>
			</Combobox.Dropdown>
		</Combobox>
	)
}
