'use client'
import {
	IconAlignCenter,
	IconAlignJustified,
	IconAlignLeft,
	IconAlignRight,
	IconCheck,
} from '@tabler/icons-react'
import { Group, Select, SelectProps } from '@mantine/core'

const iconProps = {
	stroke: 1.5,
	color: 'currentColor',
	opacity: 0.6,
	size: 18,
}

const icons: Record<string, React.ReactNode> = {
	left: <IconAlignLeft {...iconProps} />,
	center: <IconAlignCenter {...iconProps} />,
	right: <IconAlignRight {...iconProps} />,
	justify: <IconAlignJustified {...iconProps} />,
}

const renderSelectOption: SelectProps['renderOption'] = ({
	option,
	checked,
}) => (
	<Group flex='1' gap='xs'>
		{icons[option.value]}
		{option.label}
		{checked && (
			<IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />
		)}
	</Group>
)

export default function Demo() {
	return (
		<Select
			label='Select with renderOption'
			placeholder='Select text align'
			data={[
				{ value: 'left', label: 'Left' },
				{ value: 'center', label: 'Center' },
				{ value: 'right', label: 'Right' },
				{ value: 'justify', label: 'Justify' },
			]}
			renderOption={renderSelectOption}
			searchable
			nothingFoundMessage='nothing found here...'
			checkIconPosition='left'
			withScrollArea={false}
			styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
		/>
	)
}
