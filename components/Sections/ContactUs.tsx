import React, {useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

import styles from '../../styles/ContactUs.module.scss';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup.string().email().required('E-mail is a required field'),
});

type Inputs = {
    name: string,
    phone: string,
    email: string
}

const ContactUs: React.FC = () => {
    
    const [isSubmitted, setSubmitted] = useState(false);

    const { register, handleSubmit, reset, formState: {errors} } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const submitForm: SubmitHandler<Inputs> = async(data) => {

        try{

            const response = await axios.post('http://localhost:3004/feedback', data);

            if(response.status === 201){
                setSubmitted(true)
            }

        }catch(err){
            console.log(err)
        }

        setTimeout(() => {
            setSubmitted(false)
            reset();
        },2000)
    }

    return(
        <section className={styles.form} id='getintouch'>
            <div className={styles.form__container}>
                <h2>Contact us</h2>
                <form onSubmit={handleSubmit(submitForm)}>
                    <label>Do you have any kind of help please contact with us.</label>
                    <input
                        type='text'
                        placeholder='Name'
                        className={errors.name?.message ? styles['error'] : 'no error'}
                        {...register('name')}
                    />
                    <p>{errors.name?.message}</p>
                    <input
                        type='tel'  
                        placeholder='Phone'
                        className={errors.phone?.message ? styles['error'] : 'no error'}
                        {...register('phone')} 
                    />
                    <p>{errors.phone?.message}</p>
                    <input
                        type='email'
                        placeholder='E-mail'
                        className={errors.email?.message ? styles['error'] : 'no error'}
                        {...register('email')}
                    />
                    <p>{errors.email?.message}</p>
                    {isSubmitted && <p>Your data has been successfully sent</p>}
                    <button type='submit' disabled={isSubmitted}>
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs;