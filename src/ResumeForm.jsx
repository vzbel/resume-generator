export default function ResumeForm(){
    return (
        <form className="bg-red-50 font-sans">
            <div>
                <div className="flex items-center gap-3 bg-red-100">
                    <div className="w-12 h-12 flex flex-col justify-center items-center rounded-full text-center text-white bg-sky-500">1</div>
                    <p>Header</p>
                </div>
            </div>
            <section>
                {/* First Name and Last Name */}
                <h2>Personal Information</h2>
                <label htmlFor="firstName">
                    Firstname:
                    <input id="firstName" className="block" type="text" name="firstName" placeholder="Jane"/>
                </label>

                <label htmlFor="lastName">
                    Lastname:
                    <input id="lastName" className="block" type="text" name="lastName" placeholder="Doe"/>
                </label>

                {/* Contact Info */}
                <h2>Contact Information</h2>
                <label htmlFor="phone">
                    Phone:
                    <input id="phone" className="block" type="tel" name="phone" placeholder="123-456-7890"/>
                </label>
                <label htmlFor="email">
                    Email:
                    <input id="email" className="block" type="email" name="email" placeholder="jane@gmail.com"/>
                </label>

                <h2>Additional Links</h2>
                <label htmlFor="links">
                    <input id="links" className="block" type="url" name="links" placeholder="github.com/jane"/>
                </label>

                <button type="submit" className="bg-sky-500">Next</button>
            </section>
        </form>
    );
}