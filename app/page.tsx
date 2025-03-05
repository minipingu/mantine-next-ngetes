import {
	Container,
	Grid,
	GridCol,
	Group,
	Input,
	Skeleton,
	TextInput,
	Title,
	Text,
	Select,
} from '@mantine/core'
import ToggleColorScheme from './components/ToggleColorScheme/ToggleColorScheme'

import { SelectOptionComponent } from './components/SearchableSelect'

import Price from './components/Price'
const child = <Skeleton height={140} radius='md' animate />

export default function Demo() {
	return (
		<Container py='xl' size='lg'>
			<ToggleColorScheme />
			<Text size='33px' fw={900} variant='gradient'>
				Simulasi Rakit
			</Text>
			<Text mt='xs'>Mainboard</Text>
			<Grid align='center'>
				<GridCol span={{ base: 12, xs: 9 }}>
					<SelectOptionComponent />
				</GridCol>
				<GridCol span={{ base: 4, xs: 1 }}>
					<Input
						styles={{ input: { textAlign: 'center' } }}
						type='number'
						size='lg'
					/>
				</GridCol>
				<GridCol span={{ base: 8, xs: 2 }}>
					<Price />
				</GridCol>
			</Grid>
			<Text mt='xs'>Prosesor</Text>

			<Grid align='center'>
				<GridCol span={{ base: 12, xs: 9 }}>
					<SelectOptionComponent />
				</GridCol>
				<GridCol span={{ base: 12, xs: 1 }}>
					<Input type='number' size='lg' />
				</GridCol>
				<GridCol span={{ base: 12, xs: 2 }}>
					<Price />
				</GridCol>
			</Grid>
			<Grid align='center'>
				<GridCol span={{ base: 12, xs: 9 }}>
					<Select
						placeholder='Pick value'
						data={['React', 'Angular', 'Vue', 'Svelte']}
						searchable
						size='lg'
					/>
				</GridCol>
				<GridCol span={{ base: 12, xs: 1 }}>
					<Input type='number' size='lg' />
				</GridCol>
				<GridCol span={{ base: 12, xs: 2 }}>
					<Price />
				</GridCol>
			</Grid>
		</Container>
	)
}
