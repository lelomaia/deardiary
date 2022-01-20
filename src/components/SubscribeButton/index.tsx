import styles from './styles.module.scss';
import { CgTrophy } from "react-icons/cg";

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    return(
        <button
            type="button"
            className={styles.subscribleButton}
        >
            <CgTrophy />
            Seja Premium
        </button>
    );
}