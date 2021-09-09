import styles from './Features.module.scss';

const Features = () => {
    const features = [
        {
            id: 1,
            title: "freshly baked cakes",
            description: "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum.",
        },
        {
            id: 2,
            title: 'sumptuous desserts',
            description: "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum."
        },
        {
            id: 3,
            title: 'variety of flavours',
            description: "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum."
        }

    ]
    return (
        <div className={styles["features"]}>
            <div className={styles["features__container"]}>
                {
                    features.map(element => {
                        return (
                            <div className={styles["features__box"]}>
                                <div className={styles["features__box-circle"]}>
                                </div>
                                <h3 className={styles["features__box-title"]}>{element.title}</h3>
                                <p className={styles["features__box-description"]}>{element.description}</p>
                            </div>
                        )
                    }
                    )
                }

            </div>
        </div>
    )
}

export default Features
