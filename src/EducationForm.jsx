import {PlusIcon, CalendarDateRangeIcon} from '@heroicons/react/24/solid' 

export default function EducationForm(){
    return (
        <form className="font-sans max-w-md mx-auto p-5 shadow-md">
            <div className="flex overflow-hidden border-b py-2 border-gray-400">
                <div className="flex items-center gap-3 ">
                    <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full text-center text-white bg-sky-500">2</div>
                    <p>Education</p>
                    <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full text-center text-gray-500 bg-gray-200">3</div>
                    <p>Experience</p>
                    <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full text-center text-gray-500 bg-gray-200">4</div>
                    <p>Projects</p>
                    <div className="w-10 h-10 flex flex-col justify-center items-center rounded-full text-center text-gray-500 bg-gray-200">5</div>
                    <p>Experience</p>
                </div>
            </div>
            <section>
                {/* First Name and Last Name */}
                <h2 className="mt-6 mb-2 font-semibold text-xl">Education</h2>
                <label className="block mb-4" htmlFor="eduTitle">
                    Title:
                    <input id="eduTitle" className="block w-full shadow-sm" type="text" name="eduTitle" placeholder="Operations Manager"/>
                </label>

                <label className="block mb-4" htmlFor="eduLocation">
                    Location:
                    <input id="eduLocation" className="block w-full shadow-sm" type="text" name="eduLocation" placeholder="El Paso, Texas"/>
                </label>

                {/* Contact Info */}
                <label className="block mb-4" htmlFor="eduDescription">
                    Description:
                    <textarea id="eduDescription" className="block w-full shadow-sm" name="eduDescription"></textarea>
                </label>

                <div className="flex gap-5">
                    <label htmlFor="eduStartDate">
                        Start Date:
                        <input id="eduStartDate" className="block w-full shadow-sm" type="url" name="links" placeholder="May 20, 2020"/>
                    </label>

                    <label htmlFor="eduEndDate">
                        End Date:
                        <input id="eduEndDate" className="block w-full shadow-sm" type="url" name="links" placeholder="May 20, 2023"/>
                    </label>
                </div>

                <button type="button" className="bg-black text-lg font-semibold rounded-sm mt-6 mb-12 p-4 w-full text-left">
                    <PlusIcon className="w-8 inline mr-2"/>
                    <span>Add to Education List</span>
                </button>

                <div className="flex gap-4">
                    <button type="button" className="text-xl font-semibold rounded-sm mt-6 p-4 grow text-gray-200">Back</button>
                    <button type="submit" className="text-xl font-semibold rounded-sm mt-6 p-4 grow-2 bg-sky-500">Next</button>
                </div>
            </section>
        </form>
    );
}