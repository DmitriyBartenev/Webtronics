import React, {useState} from 'react';
import Image from 'next/image';

import xMark from '../../public/xMark.svg';
import minus from '../../public/minus.svg';

import ExtendedBackground from '../../public/extended.png';
import SmallBackground from '../../public/small.png';

import styles from '../../styles/Questions.module.scss';

interface QuestionItemProps {
    title: string,
    name: string
}


const QuestionItem: React.FC<QuestionItemProps> = ({title, name}) => {

    const [isOpen, setOpen] = useState(true);

    const backgroundStyle = {backgroundImage: isOpen ? "url('/extended.png')" : "url('/small.png')"}

    return(
        <div className={styles.questionItem} style={backgroundStyle}>
            <h4>{title}</h4>
            {!isOpen && (
                <p>
                    {name}
                </p>
            )}
            <Image src={!isOpen ? minus : xMark} alt='close' onClick={() => setOpen(!isOpen)}/>
        </div>
    )
}

export default QuestionItem;