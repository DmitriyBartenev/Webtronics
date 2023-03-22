import React, { useState } from 'react';
import Image from 'next/image';

import QuestionItem from './QuestionItem';
import { fakeQuestions } from '../../data';

import styles from '../../styles/Questions.module.scss';

import { images } from '../../public';

const Questions: React.FC = () => {
	const [questions, setQuestions] = useState(fakeQuestions);

	const { QuestionMark } = images;

	return (
		<section className={styles.questions} id="questions">
			<h2>Frequently Asked Questions</h2>
			<div className={styles.questions__box}>
				<div className={styles.questions__box__help}>
					<Image src={QuestionMark} alt="question mark" draggable={false} />
				</div>
				<div>
					{questions.map((item) => (
						<QuestionItem {...item} key={item.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Questions;
