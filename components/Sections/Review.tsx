import Image from 'next/image';

import styles from '../../styles/Review.module.scss';

import leftArrow from '../../public/leftArrow.svg';
import rightArrow from '../../public/rightArrow.svg';
import Photo1 from '../../public/photo1.png';
import Photo2 from '../../public/photo2.png';

const Review = () => {
    
    
    return(
        <section className={styles.review}>
            <h2>Review</h2>
            <div className={styles.review__container}>
                <div className={styles.text}>
                    <h4>Best courses ever</h4>
                    <p>Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.</p>
                </div>
                <div className={styles.slider}>
                    <div className={styles.slider__header}>
                        <p>1/3</p>
                        <div className={styles.arrow_container}>
                            <Image src={leftArrow} alt='left arrow'/>
                            <Image src={rightArrow} alt='right arrow'/>
                        </div>
                    </div>
                    <div className={styles.photos}>
                        <Image src={Photo1} alt='person'/>
                        <Image src={Photo2} alt='person'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review;