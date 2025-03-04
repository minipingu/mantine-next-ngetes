import { Box } from '@mantine/core'

export default function Demo() {
	return (
		<Box bg='primary' c='white' p='md' fw={700}>
			This box has virtual background color, it is pink in dark mode and cyan
			in light mode
		</Box>
	)
}
