// Resume Header
// Expects full name, phone, email, and a list of extras,
// like linkedin, github, etc.

export default function Header(props){
    return (
        <header>
            {/* User's full name */}
            <h1>{props.name}</h1>
            
            <ul>
                {/* Phone */}
                <li key={props.phone}>
                    <p>{props.phone}</p>
                </li>

                {/* Email */}
                <li key={props.email}>
                    <a href={`mailto:${props.email}`}>{props.email}</a>
                </li>

                {/* Map additional links to li */}
                {
                    props.links.map(link => {
                        return (
                            <li key={link}>
                                <a href={link}>{link}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </header>
    );
}