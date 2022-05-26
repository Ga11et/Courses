import { Field, FieldProps, Form, Formik } from "formik"
import { FC, useState } from "react"
import css from './reviewForm.module.css'
import { ReactComponent as StarSVG } from '../../../../assets/findCourse/star.svg'
import { RateButton } from "./rateStars/ratebutton"

type ReviewFormPropsType = {

}
export const ReviewForm: FC<ReviewFormPropsType> = ({ }) => {

    const [rating, setRating] = useState(0)

    const initialValues = {
        comment: '',
        name: '',
        email: '',
        rating: 0
    }

    return <>
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                alert(JSON.stringify(values))
            }}
        >
            <Form className={css.formContainer}>
                <h2 className={css.heading}>Оставить отзыв</h2>
                <p className={css.topParagraph}>Ваш адрес email не будет опубликован. Обязательные поля помечены *</p>
                <Field name="comment" type="text" className={css.input}
                    placeholder="Комментарий"
                />
                <Field name="name" type="text" className={css.input}
                    placeholder="Имя *"
                />
                <Field name="email" type="email" className={css.input}
                    placeholder="Email *"
                />
                <p className={css.bottomParagraph}>Рейтинг *</p>
                <Field name="rating" type="number" hidden>
                    {({ form: { setFieldValue } }: FieldProps) => {
                        return <RateButton
                            countStars={rating}
                            handleClick={(value) => {
                                setFieldValue("rating", value)
                                setRating(value)
                            }}
                        />
                    }}
                </Field>
                <button className={css.submit} type="submit">
                    Оставить отзыв
                </button>
            </Form>
        </Formik>
    </>
}