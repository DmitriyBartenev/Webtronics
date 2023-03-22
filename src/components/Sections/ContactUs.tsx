import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

import { baseURL } from '../../config/server';
import { schema } from '../../services/validation';
import { IInputs } from '../../models/IInputs';

import styles from '../../styles/ContactUs.module.scss';

const ContactUs: React.FC = () => {
	const [isSubmitted, setSubmitted] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IInputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<IInputs> = async (data) => {
		try {
			const response = await axios.post(baseURL, data);

			if (response.status === 201) {
				setSubmitted(true);
			}
		} catch (err) {
			console.log(err);
		}

		setTimeout(() => {
			setSubmitted(false);
			reset();
		}, 2000);
	};

	return (
		<section className={styles.form} id="getintouch">
			<div className={styles.form__container}>
				<h2>Contact us</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>Do you have any kind of help please contact with us.</label>
					<input
						type="text"
						placeholder="Name"
						className={errors.name?.message ? styles['error'] : 'no error'}
						{...register('name')}
					/>
					<p>{errors.name?.message}</p>
					<input
						type="tel"
						placeholder="Phone"
						className={errors.phone?.message ? styles['error'] : 'no error'}
						{...register('phone')}
					/>
					<p>{errors.phone?.message}</p>
					<input
						type="email"
						placeholder="E-mail"
						className={errors.email?.message ? styles['error'] : 'no error'}
						{...register('email')}
					/>
					<p>{errors.email?.message}</p>
					{isSubmitted && <p>Your data has been successfully sent</p>}
					<button type="submit" disabled={isSubmitted}>
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactUs;
