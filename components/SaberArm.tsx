import styles from './SaberArm.module.css';

export default function SaberArm ({turnOn} : any ) {
    return (
        <div 
        className="w-full h-full z-200 flex justify-end items-center overflow-visible">
            <div className={styles['right-arm-shape']}>
                <div className={styles['right-arm']}></div>
                <div className={styles['right-hand']}>
                    <div className={!turnOn ? styles['lightsaber'] : styles['lightsaber-red']}></div>
                    <div className={styles['hand']}>
                        <div className={styles['hand-stripes']}>
                           <div></div> 
                           <div></div> 
                           <div></div> 
                           <div></div> 
                        </div>
                    </div>
                    <div className={styles['saber-end']}></div>
                </div>
            </div>
        </div>
    )
}