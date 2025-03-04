import { Box, Center, Stack } from '@mantine/core'
import AutoComplete from './components/AutoComplete'
import ToggleColorScheme from './components/ToggleColorScheme/ToggleColorScheme'
import { CustomOptionSelect } from './components/CustomOptionSelect'
import { SelectDropdownSearch } from './components/SelectDropdownSearch'
import { SelectOptionComponent } from './components/SearchableSelect'
import BuildingComboBox from './components/BuildingComboBox'

export default function Demo() {
	return (
		<Box c='white' p='md' fw={700}>
			<ToggleColorScheme />
			<Stack align='stretch' justify='center' gap='xs'>
				<Center>
					This box has virtual background color, it is pink in dark mode
					and cyan in light mode
				</Center>
				<AutoComplete />

				<SelectOptionComponent />
				<SelectOptionComponent />
				<SelectOptionComponent />
				<SelectOptionComponent />
				<SelectOptionComponent />
				<BuildingComboBox />
			</Stack>
		</Box>
	)
}
