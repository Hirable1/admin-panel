import { useState } from "react";

function KeyPeople() {
    const [people, setPeople] = useState([""]);
    return (
        <div>
            <div className="flex flex-col space-y-6 flex-1 py-10 justify-end relative">
                <p className="text-[#62d5bc] text-[12px] font-bold cursor-pointer right-8 absolute top-8" onClick={()=>setPeople([...people, ""])}>
                    +Add new members
                </p>

                <div className="flex items-center mb-2 px-2 flex-col space-y-2">
                    {people.map((item) => (
                        <PeopleForm key={item.id} />
                    ))}
                    <PeopleForm />
                </div>
            </div>
        </div>
    );
}

export default KeyPeople;

const PeopleForm = () => {
    return (
        <div className="grid gap-x-2 grid-cols-5">
            <input
                type="text"
                placeholder="Name"
                className="px-3 py-2 placeholder-[#6B7280] text-[#030303]  placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px]  focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full  transition duration-200 ease-in"
            />
            <input
                type="text"
                placeholder="Role"
                className="px-3 py-2 placeholder-[#6B7280] text-[#030303]  placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px]  focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full  transition duration-200 ease-in"
            />
            <input
                type="text"
                placeholder="Email"
                className="px-3 py-2 placeholder-[#6B7280] text-[#030303]  placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px]  focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full  transition duration-200 ease-in"
            />
            <input
                type="text"
                placeholder="Alternate Email"
                className="px-3 py-2 placeholder-[#6B7280] text-[#030303]  placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px]  focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full  transition duration-200 ease-in"
            />
            <input
                type="text"
                placeholder="LinkedIn"
                className="px-3 py-2 placeholder-[#6B7280] text-[#030303]  placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px]  focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full  transition duration-200 ease-in"
            />
        </div>
    );
};
