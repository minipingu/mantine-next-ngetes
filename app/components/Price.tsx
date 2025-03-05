import { TextInput } from '@mantine/core'
import RupiahIcon from './Rupiah'

export default function Price() {
	return (
		<TextInput
			styles={{ input: { textAlign: 'right' } }}
			value={99999999}
			size='lg'
			leftSection={<RupiahIcon />}
			disabled
			placeholder='999.999.999'
		/>
	)
}
