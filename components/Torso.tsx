import styles from './Torso.module.css'
import { SaberArm } from '.'

export default function Torso () {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start">
            <div className="lg:w-2/5 w-4/5 h-2/3 flex flex-col items-center relative bottom-5 z-1">
                <div className={styles["torso"]}>
                  <div className={styles['torso-top']}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>  

                  <div className={styles['torso-bottom']}>
                    <div className={styles['left-arm']}></div>
                    
                    <div className={styles['armor']}></div>

                    <div className={styles['right-arm']}>
                        {<SaberArm />}
                    </div> 
                  </div>
                </div>
            </div>
        </div>
    )
}