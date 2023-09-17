import styles from './Head.module.css'

export default function Head ( {turnOn} : any ) {
    return (
        <div className="w-full h-1/3 flex flex-col items-center justify-end z-10">
            <div className="lg:w-1/5 w-2/5 h-2/3 flex flex-col items-center">
                <div className={styles['vaderMaskTop']}>
                    <div className={styles["vaderMaskTopL"]}></div>
                    <div className={styles["vaderMaskTopC"]}></div>
                    <div className={styles["vaderMaskTopR"]}></div>
                </div>

                <div className={styles["vaderMaskBottom"]}>
                    <div className={styles["maskFullLeft"]}></div>
                    <div className={styles["maskLeft"]}></div>
                    <div className={styles["maskMain"]}>
                        <div className={styles["eyes"]}>
                            <div className={turnOn ? styles["left-eye-red"] : styles["left-eye"]}></div>
                            <div className={styles["between-eyes"]}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={turnOn ? styles["right-eye-red"] : styles["right-eye"]}></div>
                        </div>
                        <div className={styles["nose"]}>
                            <div className={styles["nose-dot"]}></div>
                        </div>
                        <div className={styles["mouth"]}>
                            <div className={styles["mouth-triangle"]}>
                                <div className={styles["mouth-top"]}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles["mouth-bottom"]}>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["maskRight"]}></div>
                    <div className={styles["maskFullRight"]}></div>
                </div>
            </div>
        </div>
    )
}