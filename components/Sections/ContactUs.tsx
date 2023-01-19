
import styles from '../../styles/ContactUs.module.scss';

const ContactUs = () => {
    


    return(
        <section className={styles.form}>
            <h2>Contact us</h2>
            <form>
                <label>Do you have any kind of help please contact with us.</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                />
                <input
                    type='tel' 
                    name='phone'   
                    placeholder='Phone'
                />
                <input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                />
                <button type='submit'>
                    Send
                </button>
            </form>
        </section>
    )
}

export default ContactUs;