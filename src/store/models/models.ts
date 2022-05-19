export type courseType = {
    id: number
    direction: string
    details: string[]
    name: string
    score: number,
    count: number
    startDate: string
    duration: string
    lessons: string
    format: string
    peculiarities: string
    images: {
        large: string
        medium: string
    }
    price: string
    pricePerMonth: string
}
export type blogType = {
    id: number
    image: string
    heading: string
    text: string
    link: string
}
export type pathItemType = {
    text: string
    moveTo: string
}
export type questionItemType = {
    id: number
    question: string
    answer1: string
    answer2: string
}
export type schoolItemContentType = {
    id: number
    schoolName: string
    countCurses: number
    rating: number
    countRatings: number
    description: string
    countReviews: number
}
export type schoolReviewType = {
    id: number
    reviewerName: string
    isPositive: boolean
    date: string
    reviewContent: string
}