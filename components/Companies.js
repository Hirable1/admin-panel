import Link from "next/link";
import { useState, useEffect } from "react";
import AddCompany from "./AddCompany";
import Modal from "./Modal";

function Companies() {
    const [companyList, setCompanyList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(()=> {
        console.log(companyList)
    }, [companyList, modalOpen])
    return (
        <div className="w-4/5">
            {/* top */}
            <div className="h-1/4 bg-white"></div>
            <Modal
                companyList={companyList}
                setCompanyList={setCompanyList}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
            />
            {/* bottom */}
            <div className="flex justify-end px-8 pt-5">
                <button
                    className="bg-collabi-green px-2 text-white h-9 w-32 rounded-md text-sm font-medium"
                    onClick={() => setModalOpen(true)}
                >
                    Add Company
                </button>
            </div>

            {/* companies */}
            <div className="columns-3">
                {companyList.map((element) => (
                    <Link key={element.companyName} href={`/dashboard/company/${element.companyName}`} passHref><p>
                        {element.companyName}</p></Link>
                ))}
            </div>
        </div>
    );
}

export default Companies;
