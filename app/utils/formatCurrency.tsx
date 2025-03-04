export default function formatCurrencyString(amountString: string) {
	if (typeof amountString !== 'string' || !/^\d+$/.test(amountString)) {
		return 'Invalid input'
	}

	const parts = []

	for (let i = amountString.length; i > 0; i -= 3) {
		parts.unshift(amountString.substring(Math.max(0, i - 3), i))
	}

	return 'Rp' + parts.join('.') + ',-'
}
