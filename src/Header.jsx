// Resume Header
// Expects full name, phone, email, and a list of extras,
// like linkedin, github, etc.

export default function Header(props){
    return (
        <header className="flex flex-col items-center mb-7">
            {/* User's full name */}
            <h1 className="mb-2 text-5xl">{props.name}</h1>
            <ul className="flex flex-wrap justify-center sm:leading-4">
                {/* Phone */}
                <li key={props.phone}>
                    <p className="inline-block mx-1">{props.phone}</p>
                    <span>|</span>
                </li>

                {/* Email */}
                <li key={props.email}>
                    <a href={`mailto:${props.email}`} className="mx-1">{props.email}</a>
                    <span>|</span>
                </li>
                
                {/* Map additional links to li */}
                {
                    props.links.map((link, i) => {
                        return (
                            <li key={link}>
                                <a href={link} className="mx-1">{link}</a>
                                {/* Don't render a | next to the last li */}
                                {(i < (props.links.length - 1)) ? <span>|</span> : <></>}
                            </li>
                        );
                    })
                }
            </ul>
        </header>
    );
}