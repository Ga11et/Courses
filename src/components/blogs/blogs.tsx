import { FC } from "react"
import { useAppSelector, useWindowSize } from "../../hooks/hooks"
import { Blog } from "./blog/blog"
import css from './blogs.module.css'

type BlogsPropsType = {
    
}
export const Blogs: FC<BlogsPropsType> = ({  }) => {

    const { blogs } = useAppSelector(state => state.findCourseReducer)

    const width = useWindowSize();

    return <>
        <section className={css.blogsContainer}>
            <h2 className={css.heading}>Блог</h2>
            <div className={css.blogs}>
                {width > 1280 
                ? blogs.map( el => (el.id <= 4) && <Blog key={el.id} data={el} />)
                : blogs.map( el => (el.id <= 3) && <Blog key={el.id} data={el} />)
                }   
            </div>
        </section>
    </>
}


