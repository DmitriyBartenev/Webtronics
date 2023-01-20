import React, {useState} from 'react';
import Image from 'next/image';

import styles from '../../styles/Review.module.scss';

import leftArrow from '../../public/leftArrow.svg';
import rightArrow from '../../public/rightArrow.svg';
import Photo1 from '../../public/photo1.png';
import Photo2 from '../../public/photo2.png';
import Photo3 from '../../public/photo3.png';

const Review: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/bigPhoto1.png',
        '/bigPhoto2.png',
        '/bigPhoto3.png'
    ]
    
    const smallImages = [
        '/photo1.png',
        '/photo2.png',
        '/photo3.png'
    ]
    
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
                        <p>{currentIndex+1}/3</p>
                        <div className={styles.arrow_container}>
                            <button 
                                className={styles.left_arrow}
                                disabled={currentIndex === 0}
                                onClick={() => setCurrentIndex(currentIndex - 1)}/>
                            <button 
                                className={styles.right_arrow}
                                disabled={currentIndex === 2}
                                onClick={() => setCurrentIndex(currentIndex + 1)}/>
                        </div>
                    </div>
                    <div className={styles.photos}>
                        <Image src={images[currentIndex]} alt='person' width={392} height={422}/>
                        <Image src={currentIndex === 1 ? smallImages[2] : '' || currentIndex === 2 ? smallImages[0] : '' || currentIndex === 0 ? smallImages[1] : ''} alt='person' width={184} height={422}/>
                        <Image src={currentIndex === 1 ? smallImages[0] : '' || currentIndex === 2 ? smallImages[1] : '' || currentIndex === 0 ? smallImages[2] : ''} alt='person' width={184} height={422}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review;