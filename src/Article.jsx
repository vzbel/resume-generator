// Section article (Ex. Undergrad research assistant (with bullet points and dates))
// Bullet points are optional, but date, location, title, subheading are not
export default function Article(props){
    return (
        <article>
            <div>
                {
                    props.technologies ?
                        /* If the article is a project or skills section,
                        it must have a list of technologies used. Render them as a list next to the header */
                        <div>
                            <h3>{props.title}</h3>
                            <ul>
                                {props.technologies.map(technology => <li key={technology}>{technology}</li>)}
                            </ul>
                        </div>
                        :
                        <div>
                            <h3>{props.title}</h3>
                            {props.description ? <i>{props.description}</i>: <></>}
                        </div>
                }
                <div>
                    {/* If the article has a date range, render it */}
                    {props.dateRange ? <p>{props.dateRange}</p> : <></>}
                    {/* If the article has a location, render it */}
                    {props.location ? <i>{props.location}</i> : <></>}
                </div>
            </div>



            {/* If the article has bullet points, render them */}
            {
                props.bulletPoints ?
                    <ul>{props.bulletPoints.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
                :
                    <></>
            }

        </article>
    )
}