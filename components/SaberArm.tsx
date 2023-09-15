import styles from './SaberArm.module.css';

export default function SaberArm () {
    return (
        <div 
        className="w-full h-full flex justify-end items-center">
            <div className={styles['right-arm-shape']}>
                <div className={styles['right-arm']}></div>
                <div className={styles['right-hand']}>
                    <div className={styles['lightsaber-box']}></div>
                </div>
            </div>
        </div>
    )
}