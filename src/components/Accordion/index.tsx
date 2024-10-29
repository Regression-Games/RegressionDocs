
import React, { useState, useEffect, Suspense } from 'react';
import styles from './styles.module.css';

type AccordionProps = {
    title: string,
    content: any;
};

export default function Accordion({title, content}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [Markdown, setMarkdown] = useState<any>(null);
    const [remarkGFM, setRemarkGFM] = useState<any>(null);

    useEffect(() => {
        import('remark-gfm').then(module => setRemarkGFM(() => module.default));
        import('react-markdown').then(module => setMarkdown(() => module.default));

    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className={styles.accordion}>
            <button className={styles.title} onClick={handleClick}>
                {Markdown &&
                    <Markdown children={title}/>
                }
                <span className={styles.arrow}>
                    <div className={isOpen ? styles.open : styles.closed}>
                        &#9660; {/* Down arrow */}
                    </div>
                </span>
            </button>
            {isOpen && Markdown && (
                <Markdown className={styles.content} remarkPlugins={[remarkGFM]} children={content}/>
            )}
        </div>
    );
}