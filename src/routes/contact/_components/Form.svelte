<script lang="ts">
	import { z } from 'zod';
	import type { ContactForm } from '../types';
	import ToolTipWrapper from './ToolTipWrapper.svelte';
	import { showToast, toast } from '../../../store';

	type FormErrors = Partial<Record<keyof ContactForm, string>>;

	let formData = $state<ContactForm>({
		name: '',
		email: '',
		subject: '',
		message: '',
		company: null
	});
	let loading = $state(false);
	let formError = $state<FormErrors>({});

	function validateForm() {
		const form = z.object({
			name: z
				.string()
				.trim()
				.nonempty('Name is required')
				.max(20, 'Name can not be more than 20 characters'),
			email: z.email('Invalid email').trim().nonempty('Email is required'),
			subject: z
				.string()
				.trim()
				.nonempty('Subject is required')
				.max(100, 'Subject can not be more than 100 characters'),
			message: z
				.string()
				.trim()
				.nonempty('Message is required')
				.max(500, 'Message can not be more than 500 characters'),
			company: z.string().or(z.null())
		});

		const result = form.safeParse(formData);
		if (!result.success) {
			const fieldErrors: FormErrors = {};

			result.error.issues.forEach((issue) => {
				const field = issue.path[0] as keyof ContactForm;
				fieldErrors[field] = issue.message;
			});

			formError = fieldErrors;
			return false;
		}

		formError = {};
		return true;
	}

	async function handleFormSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (!validateForm()) return;

		try {
			loading = true;
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
				signal: AbortSignal.timeout($toast.duration) // request timeout
			});

			if (!res.ok) {
				showToast((await res.json()).error, 'error');
			} else {
				showToast('Successfully sent your message', 'success');
			}
		} catch (error) {
			showToast(error instanceof Error ? error.message : 'Some error occurred', 'error');
		} finally {
			formData = {
				name: '',
				email: '',
				subject: '',
				message: '',
				company: null
			};
			loading = false;
		}
	}
</script>

<div class="w-full">
	<form onsubmit={handleFormSubmit} class="flex flex-col gap-2">
		<div class="flex w-full flex-col gap-4 py-1 md:flex-row lg:p-2">
			<ToolTipWrapper open={!!formError.name} tooltip={formError.name!}>
				<input
					bind:value={formData.name}
					type="text"
					name="name"
					id="name"
					placeholder="YOUR NAME"
					class={`transition-border w-full rounded-full border-2 bg-gray-300 p-3 px-6 text-[12px] text-black duration-200 outline-none focus:border-[#5160b2] sm:py-4 sm:text-[14px] dark:bg-[#313244] dark:text-white ${formError.name === '' ? 'border-[#d20f3982]' : 'border-transparent'} cursor-input hover:scale-102 focus:scale-102 custom-cursor:cursor-none`}
				/>
			</ToolTipWrapper>

			<ToolTipWrapper tooltip={formError.email!} open={!!formError.email}>
				<input
					bind:value={formData.email}
					type="text"
					name="email"
					id="email"
					placeholder="YOUR EMAIL"
					class={`transition-border w-full rounded-full border-2 bg-gray-300 p-3 px-6 text-[12px] text-black duration-200 outline-none focus:border-[#5160b2] sm:py-4 sm:text-[14px] dark:bg-[#313244] dark:text-white ${formError.email === '' ? 'border-[#d20f3982]' : 'border-transparent'} cursor-input hover:scale-102 focus:scale-102 custom-cursor:cursor-none`}
				/>
			</ToolTipWrapper>
		</div>
		<div class="w-full flex-col py-1 md:flex-row lg:p-2">
			<ToolTipWrapper tooltip={formError.subject!} open={!!formError.subject}>
				<input
					bind:value={formData.subject}
					type="text"
					name="subject"
					id="subject"
					placeholder="YOUR SUBJECT"
					class={`transition-border w-full rounded-full border-2 bg-gray-300 p-3 px-6 text-[12px] text-black duration-200 outline-none focus:border-[#5160b2] sm:py-4 sm:text-[14px] dark:bg-[#313244] dark:text-white ${formError.subject === '' ? 'border-[#d20f3982]' : 'border-transparent'} cursor-input hover:scale-102 focus:scale-102 custom-cursor:cursor-none`}
				/>
			</ToolTipWrapper>
		</div>
		<div class="w-full py-1 lg:p-2">
			<ToolTipWrapper tooltip={formError.message!} open={!!formError.message}>
				<textarea
					bind:value={formData.message}
					name="message"
					id="message"
					placeholder="YOUR MESSAGE"
					class={`transition-border min-h-40 w-full rounded-4xl border-2 bg-gray-300 p-3 px-6 text-[12px] text-black duration-200 outline-none focus:border-[#5160b2] sm:py-4 sm:text-[14px] dark:bg-[#313244] dark:text-white ${formError.message === '' ? 'border-[#d20f3982]' : 'border-transparent'} cursor-input hover:scale-102 focus:scale-102 custom-cursor:cursor-none`}
					rows={6}
					maxLength={500}
				></textarea>
			</ToolTipWrapper>
		</div>
		<!-- Honeypot for spam detection  -->
		<div class="hidden">
			<input
				bind:value={formData.company}
				type="text"
				name="company"
				id="company"
				placeholder="HONEYPOT"
			/>
		</div>
		<div
			class={`flex w-full flex-col p-4 md:flex-row ${loading && 'pointer-events-none opacity-50'}`}
		>
			<button
				type="submit"
				class="primary-btn cursor-pointer rounded-full before:rounded-full md:hover:text-white custom-cursor:cursor-none"
			>
				<span class="font-semibold">SEND MESSAGE</span>
				<span
					class={`absolute right-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#5160b2] text-xl text-white ${loading && 'animate-spin'}`}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"
						><path
							fill="currentColor"
							d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2"
						/></svg
					>
				</span>
			</button>
		</div>
	</form>
</div>
