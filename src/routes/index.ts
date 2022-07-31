import type { RequestHandler } from '@sveltejs/kit'
import type { Error } from '$lib/types'

export const POST: RequestHandler = async ({ request }) => {
	const form = await request.formData()
	const name = form.get('name')
	const password = form.get('password')

	const errors: Error = {}

	if (typeof name !== 'string' || typeof password !== 'string') {
		errors.credentials = 'You entered invalid credentials.'
	}

	if (name !== 'Tim') {
		errors.name = 'You entered the wrong name.'
	}

	if (password !== '1234') {
		errors.password = 'You entered the wrong password.'
	}

	if (Object.keys(errors).length) {
		return {
			status: 400,
			body: { errors }
		}
	}

	return {}
}
