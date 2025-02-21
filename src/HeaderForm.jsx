export default function HeaderForm(){
    return (
        <form className="font-sans max-w-md mx-auto p-5 shadow-md">
            <div className="flex overflow-hidden border-b py-2 border-gray-400">
                <div className="flex items-center gap-3 ">
                    <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full text-center text-white bg-sky-500">1</div>
                    <p>Header</p>
                    <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full text-center text-gray-500 bg-gray-200">2</div>
                    <p>Education</p>
                    <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full text-center text-gray-500 bg-gray-200">3</div>
                    <p>Experience</p>
                    <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full text-center text-gray-500 bg-gray-200">4</div>
                    <p>Experience</p>
                </div>
            </div>
            <section>
                {/* First Name and Last Name */}
                <h2 className="mt-6 mb-2 font-semibold text-xl">Personal Information</h2>
                <label className="block mb-4" htmlFor="firstName">
                    Firstname:
                    <input id="firstName" className="block w-full shadow-sm" type="text" name="firstName" placeholder="Jane"/>
                </label>

                <label htmlFor="lastName">
                    Lastname:
                    <input id="lastName" className="block w-full shadow-sm" type="text" name="lastName" placeholder="Doe"/>
                </label>

                {/* Contact Info */}
                <h2 className="mt-6 mb-2 font-semibold text-xl">Contact Information</h2>
                <label className="block mb-2" htmlFor="phone">
                    Phone:
                    <input id="phone" className="block w-full shadow-sm" type="tel" name="phone" placeholder="123-456-7890"/>
                </label>
                <label htmlFor="email">
                    Email:
                    <input id="email" className="block w-full shadow-sm" type="email" name="email" placeholder="jane@gmail.com"/>
                </label>

                <label htmlFor="links">
                    <h2 className="mt-6 mb-2 font-semibold text-xl">Additional Links</h2>
                    <input id="links" className="block w-full shadow-sm" type="url" name="links" placeholder="github.com/jane"/>
                </label>

                <button type="submit" className="text-xl font-semibold rounded-sm mt-6 p-4 w-full bg-sky-500">Next</button>
            </section>
        </form>
    );
}