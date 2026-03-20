import { Resend } from 'resend';
import type { RequestHandler } from './$types';
import { RESEND_API_KEY , TO_EMAIL} from '$env/static/private';

interface RequestBody {
	name: string;
	email: string;
	subject: string;
	message: string;
	company: string | null;
}

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	if (request.method !== 'POST') {
		return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
	}

	try {
		const { name, email, subject, message, company }: RequestBody = await request.json();

		// Honeypot
		if (company) return new Response(JSON.stringify({ ok: true }), { status: 200 });

		if (!name || !email || !message) {
			return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
		}

		const res = await resend.emails.send({
			from: 'Portfolio <onboarding@resend.dev>',
			to: [TO_EMAIL],
			subject: subject || 'New Contact Message',
			replyTo: email,
			text: `Name: ${name}\nEmail: ${email}\n\n${message}`
		});

		if (res.error)
			return new Response(JSON.stringify({ error: res.error.message }), {
				status: res.error.statusCode || 500
			});

		return new Response(JSON.stringify({ success: true, message: 'Successfully sent email' }), {
			status: 200
		});
	} catch (error) {
		return new Response(
			JSON.stringify({
				error: error instanceof Error ? error.message : 'An error occurred'
			}),
			{ status: 500 }
		);
	}
};
