import styles from './SaberArm.module.css';

export default function SaberArm () {
    return (
        <div 
        className="w-full h-full flex justify-end items-center overflow-visible">
            <div className={styles['right-arm-shape']}>
                <div className={styles['right-arm']}></div>
                <div className={styles['right-hand']}>
                    <div className={styles['lightsaber']}></div>
                    <div className={styles['hand']}>
                        <div className={styles['hand-stripes']}></div>
                    </div>
                    <div className={styles['saber-end']}></div>
                </div>
            </div>
        </div>
    )
}