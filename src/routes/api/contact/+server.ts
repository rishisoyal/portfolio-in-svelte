import { json } from '@sveltejs/kit'; // Use the SvelteKit helper
import { Resend } from 'resend';
import type { RequestHandler } from './$types';
import { RESEND_API_KEY, TO_EMAIL } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, subject, message, company } = await request.json();

		// Honeypot check
		if (company) {
			return json({ success: true }, { status: 200 });
		}

		if (!name || !email || !message) {
			return json({ error: 'Missing fields' }, { status: 400 });
		}

		const resend = new Resend(RESEND_API_KEY);

		const { data, error } = await resend.emails.send({
			from: 'Portfolio <onboarding@resend.dev>',
			to: [TO_EMAIL],
			subject: subject || 'New Contact Message',
			replyTo: email,
			text: `Name: ${name}\nEmail: ${email}\n\n${message}`
		});

		if (error) {
			return json({ error: error.message }, { status: 400 });
		}

		return json({ success: true });
	} catch (err) {
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};
