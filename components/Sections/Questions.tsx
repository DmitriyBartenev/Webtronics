import React, { useState } from 'react';
import Image from 'next/image';
import QuestionMark from '../../public/questionMark.png';

import styles from '../../styles/Questions.module.scss';
import QuestionItem from './QuestionItem';

const Questions: React.FC = () => {

    const [questions, setQuestions] = useState([
        {id: 1, title: 'What is the price?', name:'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
        {id: 2, title: 'What is the price?', name:'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
        {id: 3, title: 'What is the price?', name:'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
        {id: 4, title: 'What is the price?', name:'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
        {id: 5, title: 'What is the price?', name:'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'}
    ]);

    return (
    <section className={styles.questions} id='questions'>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.questions__box}>
            <div className={styles.questions__box__help}>
                <p>Do you have any kind of questions?<br/>We are here to help.</p>
                <Image src={QuestionMark} alt='question mark'/>
            </div>
            <div>
                {
                    questions.map(item => (
                        <QuestionItem {...item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    </section>
    )
}

export default Questions