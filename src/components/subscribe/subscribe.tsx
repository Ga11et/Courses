import { Field, Form, Formik } from "formik"
import { FC } from "react"
import css from './subscribe.module.css'
import subscribeLargeIcon from '../../assets/findCourse/subscribeIconLarge.jpg'
import subscribeMediumIcon from '../../assets/findCourse/subscribeIconMedium.jpg'

type SubscribePropsType = {

}
export const Subscribe: FC<SubscribePropsType> = ({ }) => {

    const initialValues = { email: '' }

    return <>
        <section className={css.subcribeContainer}>
            <div className={css.left}>
                <span className={css.news}>Получайте все новости</span>
                <h2 className={css.heading}>Подпишитесь на email рассылку</h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values))
                        setSubmitting(false)
                    }}
                >
                    <Form className={css.form}>
                        <Field name='email'
                            type="email" className={css.input} 
                            placeholder="Ваш email"
                        />
                        <button type="submit" className={css.button}>Подписаться</button>
                    </Form>
                </Formik>
            </div>
            <picture>
                <source media="(max-width: 1280px)" srcSet={subscribeMediumIcon} />
                <img className={css.right} alt='subscribe icon' src={subscribeLargeIcon} />
            </picture>
        </section>

    </>
}