// A section on a resume
// Ex. "Experience" section, "Education" section, etc.

import Article from "./Article" // Section article (Ex. Undergrad research assistant (with bullet points and dates))

export default function Section(props){
    return (
        <section>
            {/* Section title */}
            <h2>{props.title.toUpperCase()}</h2>
            <hr />

            {/* Map section content to individual articles */}
            {
                props.content.map(object => {
                    return (
                        <Article 
                            key={object.title}
                            {...object} 
                        />
                    )
                })
            }

        </section>
    );
}