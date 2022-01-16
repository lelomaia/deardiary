import styles from '../Header/styles.module.scss';

import Image from 'next/image';

import { SignInButton } from '../SignInButton';

export function Header() {
    return(
        <header className={styles.headeContainer}>
            <div className={styles.headerContent}>
                <Image
                    src="/images/logo-deardiary.png"
                    alt="logotipo deardiary"
                    width={132}
                    height={31}
                />
                <nav>
                    <a href='#' className={styles.active}>Home</a>
                    <a href='#' >Posts</a>
            </nav>
            <SignInButton />
            </div>
        </header>
    );
}