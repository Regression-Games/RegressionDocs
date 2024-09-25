
import React, { useState, useEffect, Suspense } from 'react';
import styles from './styles.module.css';

const Markdown = React.lazy(() => import('react-markdown'));

type AccordionProps = {
    title: string,
    content: any;
};

export default function Accordion({title, content}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [remarkGFM, setRemarkGFM] = useState<any>(null);

    useEffect(() => {
        import('remark-gfm').then(module => setRemarkGFM(() => module.default));
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className={styles.accordion}>
            <button className={styles.title} onClick={handleClick}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Markdown children={title}/>
                </Suspense>
                <span className={styles.arrow}>
                    <div className={isOpen ? styles.open : styles.closed}>
                        &#9660; {/* Down arrow */}
                    </div>
                </span>
            </button>
            {isOpen && (
                <Suspense fallback={<div>Loading...</div>}>
                    <Markdown className={styles.content} remarkPlugins={[remarkGFM]} children={content}/>
                </Suspense>
            )}
        </div>
    );
}