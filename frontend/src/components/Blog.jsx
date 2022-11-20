import React from 'react';
import styles from "../style";

export const Blog = () => {
    return (
        <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <h1 className='text-white '> Blogs</h1>
            </div>
        </div>
    )
}
