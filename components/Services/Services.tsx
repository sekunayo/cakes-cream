import styles from './Services.module.scss';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "online delivery",
            link: "order online"
        },
        {
            id: 2,
            title: "click & collect",
            link: "takeout order"
        },
        {
            id: 3,
            title: "in-house purchase",
            link: "book a table"
        }
    ]
    return (
        <section className={styles["services"]}>
            <div className={styles["services__container"]}>
                <div className={styles["services__box"]}>
                    <h2 className={styles["services__heading"]}>Bringing Happiness To You</h2>
                    <p className={styles["services__heading-description"]}>Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus.</p>
                </div>
                {
                    services.map(element => {
                        return (
                            <div className={styles['services__box']} key={element.id}>
                                <div className={styles['services__box-circle']}>
                                    <p>a</p>
                                </div>
                                <h3 className={styles['services__box-title']}>{element.title}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services
