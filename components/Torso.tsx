import styles from './Torso.module.css'
import { SaberArm } from '.'

export default function Torso () {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start">
            <div className="lg:w-1/2 w-full h-4/5 flex flex-col items-center relative bottom-5">
                <div className={styles["torso"]}>
                  <div className={styles['torso-top']}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>  

                  <div className={styles['torso-bottom']}>
                    <div className={styles['left-arm']}>
                        <div className={styles['left-arm-shape']}></div>
                    </div>
                    <div className={styles['armor']}>
                        <div className={styles['armor-shape']}>
                            <div className={styles['armor-top']}>
                               <div className={styles['armor-top-line']}>
                                <div className={styles['armor-above-cpu']}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles['armor-cpu']}>
                                    <div className={styles['armor-cpu-top']}>
                                        <div className={styles['armor-cpu-top-left']}>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className={styles['armor-cpu-top-right']}>
                                            <div className={styles['green']}></div>
                                            <div className={styles['red']}></div>
                                        </div>
                                    </div>
                                    <div className={styles['armor-cpu-bottom']}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className={styles['armor-bellow-cpu']}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                               </div>
                            </div>
                            <div className={styles['armor-bottom']}>
                               <div className={styles['belt']}></div> 
                            </div>
                        </div>
                    </div>
                    <div className={styles['right-arm']}>
                        {<SaberArm />}
                    </div> 
                  </div>
                </div>
            </div>
        </div>
    )
}