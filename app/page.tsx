import { Box, Center, Stack } from '@mantine/core'
import AutoComplete from './components/AutoComplete'
import ToggleColorScheme from './components/ToggleColorScheme/ToggleColorScheme'

export default function Demo() {
	return (
		<Box bg='primary' c='white' p='md' fw={700}>
			<ToggleColorScheme />
			<Stack align='stretch' justify='center' gap='xs'>
				<Center>
					This box has virtual background color, it is pink in dark mode
					and cyan in light mode
				</Center>
				<AutoComplete />
			</Stack>
		</Box>
	)
}
