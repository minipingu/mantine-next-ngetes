import '@mantine/core/styles.css'
import React from 'react'
import {
	MantineProvider,
	ColorSchemeScript,
	mantineHtmlProps,
	Container,
	useMantineColorScheme,
} from '@mantine/core'
import { theme } from '../theme'

export const metadata = {
	title: 'COBA',
	description: 'I am using Mantine with Next.js!',
}

export default function RootLayout({ children }: { children: any }) {
	return (
		<html lang='en' {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
				<link rel='shortcut icon' href='/favicon.svg' />
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
				/>
			</head>
			<body>
				<MantineProvider theme={theme} defaultColorScheme='auto'>
					<Container size='xl'>{children}</Container>
				</MantineProvider>
			</body>
		</html>
	)
}
