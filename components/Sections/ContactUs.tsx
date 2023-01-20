import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from '../../styles/ContactUs.module.scss';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup.string().email().required(),
});

type Inputs = {
    name: string,
    phone: string,
    email: string
}

const ContactUs = () => {
    
    const { register, handleSubmit, formState: {errors} } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const submitForm: SubmitHandler<Inputs> = (data) => {
        //fetch data here ( with axios ^_^ )
        console.log(data)
    }

    return(
        <section className={styles.form}>
            <h2>Contact us</h2>
            <form onSubmit={handleSubmit(submitForm)}>
                <label>Do you have any kind of help please contact with us.</label>
                <input
                    type='text'
                    placeholder='Name'
                    {...register('name')}
                />
                <p>{errors.name?.message}</p>
                <input
                    type='tel'  
                    placeholder='Phone'
                    {...register('phone')} 
                />
                <p>{errors.phone?.message}</p>
                <input
                    type='email'
                    placeholder='E-mail'
                    {...register('email')}
                />
                <p>{errors.email?.message}</p>
                <button type='submit'>
                    Send
                </button>
            </form>
        </section>
    )
}

export default ContactUs;