import Header from "./Header" // Header with user name and contact info
import Section from "./Section" // Resume section (Ex. Education section) 

export default function Resume(){
    const user = {
        name: "Jake Ryan",
        phone: "123-456-7890",
        email: "jake@su.edu",
        links: [
            "https://linkedin.com/in/jake",
            "https://github.com/jake"
        ],
        education: [
            {
                title: "Southwestern University",
                location: "Georgetown, TX",
                description: "Bachelor of Arts in Computer Science, Minor in Business",
                dateRange: "Aug. 2018 - May 2021"
            },
            {
                title: "Blinn College",
                location: "Bryan, TX",
                description: "Associate's in Liberal Arts",
                dateRange: "Aug. 2014 - May 2018"
            }
        ], 
        experience: [
            {
                title: "Undergraduate Research Assistant",
                location: "College Station, TX",
                description: "Texas A&M University",
                dateRange: "June 2020 - Present",
                bulletPoints: [
                    "Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems",
                    "Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data",
                    "Explored ways to visualize GitHub collaboration in a classroom setting"
                ]
            },
            {
                title: "Information Technology Support Specialist",
                location: "Georgetown, TX",
                description: "Southwestern University",
                dateRange: "Sep. 2018 – Present",
                bulletPoints: [
                    "Communicate with managers to set up campus computers used on campus",
                    "Assess and troubleshoot computer problems brought by students, faculty and staff",
                    "Maintain upkeep of computers, classroom equipment, and 200 printers across campus"
                ]
            },
            {
                title: "Artificial Intelligence Research Assistant",
                location: "Georgetown, TX",
                description: "Southwestern University",
                dateRange: "May 2019 – July 2019",
                bulletPoints: [
                    "Explored methods to generate video game dungeons based off of The Legend of Zelda",
                    "Developed a game in Java to test the generated dungeons",
                    "Contributed 50K+ lines of code to an established codebase via Git",
                    "Conducted a human subject study to determine which video game dungeon generation technique is enjoyable",
                    "Wrote an 8-page paper and gave multiple presentations on-campus",
                    "Presented virtually to the World Conference on Computational Intelligence"
                ],
            }
        ],
        projects: [
            {
                title: "Gitlytics",
                technologies: ["Python", "Flask", "React", "PostgreSQL", "Docker"],
                dateRange: "June 2020 – Present",
                bulletPoints: [
                    "Developed a full-stack web application using with Flask serving a REST API with React as the frontend",
                    "Implemented GitHub OAuth to get data from user’s repositories",
                    "Visualized GitHub data to show collaboration",
                    "Used Celery and Redis for asynchronous tasks"
                ]
            },
            {
                title: "Simple Paintball",
                technologies: ["Spigot API", "Java", "Maven", "TravisCI", "Git"],
                dateRange: "May 2018 – May 2020",
                bulletPoints: [
                    "Developed a Minecraft server plugin to entertain kids during free time for a previous job",
                    "Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review",
                    "Implemented continuous delivery using TravisCI to build the plugin upon new a release",
                    "Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin"
                ]
            }
        ],
        skills: [
            {
                title: "Languages",
                technologies: ["Java","Python","C/C++","SQL (Postgres)","JavaScript","HTML/CSS","R"]
            },
            {
                title: "Frameworks",
                technologies: ["React","Node.js","Flask","JUnit","WordPress","Material-UI","FastAPI"] 
            },
            {
                title: "Developer Tools",
                technologies: ["Git","Docker","TravisCI","Google Cloud Platform","VS Code","Visual Studio","PyCharm","IntelliJ","Eclipse"] 
            },
            {
                title: "Libraries",
                technologies: ["pandas","NumPy","Matplotlib"] 
            }
        ] 
    };

    return (
        <main className="max-w-5xl mx-auto py-12 sm:px-12">
            {/* Header with user's name, contact info, and links*/}
            <Header 
                name={user.name}
                phone={user.phone}
                email={user.email}
                links={user.links}
            />

            {/* Education */}
            <Section 
                title="Education"
                content={user.education}
            />

            {/* Experience */}
            <Section 
                title="Experience"
                content={user.experience}
            />

            {/* Projects */}
            <Section 
                title="Projects"
                content={user.projects}
            />

            {/* Technical Skills */}
            <Section 
                title="Skills"
                content={user.skills}
            />
        </main>
    );
}