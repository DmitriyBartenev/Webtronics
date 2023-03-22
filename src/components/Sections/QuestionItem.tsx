import React, { useState } from 'react';
import Image from 'next/image';

import styles from '../../styles/Questions.module.scss';

import { icons } from '../../public';

interface QuestionItemProps {
	title: string;
	name: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ title, name }) => {
	const [isOpen, setOpen] = useState(true);

	const { minus, xMark } = icons;

	return (
		<div className={styles.questionItem}>
			<h4>{title}</h4>
			{!isOpen && <p>{name}</p>}
			<Image
				src={!isOpen ? minus : xMark}
				alt="close"
				onClick={() => setOpen(!isOpen)}
				draggable={false}
			/>
		</div>
	);
};

export default QuestionItem;
