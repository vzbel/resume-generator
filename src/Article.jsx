// Section article (Ex. Undergrad research assistant (with bullet points and dates))
// Bullet points are optional, but date, location, title, subheading are not
export default function Article(props){
    return (
        <article className="ml-3 mr-2 my-2">
            <div className="flex justify-between ">
                {
                    props.technologies ?
                        /* If the article is a project or skills section,
                        it must have a list of technologies used. Render them as a list next to the header */
                        <div className="flex">
                            <h3 className="font-semibold mr-2">{props.title}:</h3>
                            <ul className="flex">
                                {props.technologies.map((technology, i) => {
                                        return (
                                            // Don't show comma next to last list item
                                            i < props.technologies.length - 1 ?
                                                <li key={technology} className="mr-1">{technology},</li>
                                            :
                                                <li key={technology} className="mr-1">{technology}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        :
                        <div>
                            <h3 className="font-semibold">{props.title}</h3>
                            {props.description ? <i>{props.description}</i>: <></>}
                        </div>
                }
                <p className="text-right">
                    {/* If the article has a date range, render it */}
                    {props.dateRange ? <p>{props.dateRange}</p> : <></>}
                    {/* If the article has a location, render it */}
                    {props.location ? <i>{props.location}</i> : <></>}
                </p>
            </div>



            {/* If the article has bullet points, render them */}
            {
                props.bulletPoints ?
                    <ul className="list-disc ml-8">{props.bulletPoints.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
                :
                    <></>
            }

        </article>
    )
}