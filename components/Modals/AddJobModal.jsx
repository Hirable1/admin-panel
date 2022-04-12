import { Editor } from 'draft-js';
import React, {  useRef, useState } from 'react';
import RichEditor from '../General/Editor';

function AddJobModal({
  showAddJobModal,
  setShowAddJobModal,
  jobs,
  curItem,
  isEdit,
  index
}) {
    const [jobTitle , setJobTitle] = useState('')
    const [jobType, setjobType] = useState(
      [ 
        { name: 'Fulltime', selected: false},
        { name: 'Internship', selected: false}
      ]
    );

    const [ jobname ,setJobName ]= useState('');


    const [autocomplete, setAutocomplete] = useState({
      disabled: true,
      data: [],
    });

      const [description, setDescription] = useState("");
      const handleDescriptionChange = (htmlContent) => {
          setDescription(htmlContent);
      };
      const [responsibilities, setResponsibilities] = useState("");
      const handleResponsibilityChange = (htmlContent) => {
        setResponsibilities(htmlContent);
      };

    
      const [inputValue, setInputValue] = useState('');

      const handleInputValueChange = (e) => {
      setInputValue(e.target.value);
      if (e.target.value.trim() === '')
        setAutocomplete({ disabled: true, data: [] });
      else {
        const autocompleteData = [];
        const regex = new RegExp(e.target.value, 'i');
  
        jobType.forEach((role) => {
          if (regex.test(role.name)) autocompleteData.push(role.name);
        });
  
        setAutocomplete({
          disabled: false,
          data: [e.target.value, ...autocompleteData],
        });
      }
    };

      const updatejobType = (roleName) => {
       
        const newData = jobType.map((role) => {
            if (role.name === roleName)
                role.selected = !role.selected;
            if(role.selected === true) setJobName(role.name)
      
            return role;
          });
          setInputValue('');
          setAutocomplete({
            disabled: true,
            data: [],
          });

          setjobType(newData);


      };

      const handleSaveJobClick = () => {
        console.log(jobTitle)
        console.log(jobname);
        var newData = jobType ;
        
        const newJob = {title : jobTitle , jobType : jobname ,  description : description , responsibilities : responsibilities};
        setShowAddJobModal(0);

        console.log(newJob)

        if(isEdit)
        {
          if(newJob.title !== '')jobs[index].title = newJob.title;
          if(newJob.jobType !== '')jobs[index].jobType = newJob.jobType;
          if(newJob.description !== '')jobs[index].description = newJob.description;
          if(newJob.responsibilities !== '')jobs[index].responsibilities = newJob.responsibilities;
        }
        else{          
          var type ;

          jobType.map((job)=>{
            if(job.selected === true)type = job.name ;
          })

          jobs.unshift(newJob)

        }
     
        setShowAddJobModal(0);
        setJobTitle('');

        jobType.map((role) => {
          role.selected = false;
          return role;
        })
   
        setDescription('');
        setResponsibilities('');

      }
  
  return (
    <div>
      {showAddJobModal ? (
        <>
          <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
            <div className="relative max-h-[784px] flex-col h-[94%] rounded-lg w-[37.5rem] overflow-y-auto bg-white z-10 text-black">
              <div className="top-0 sticky z-50 flex items-center justify-between p-5 bg-[#eff2f6] py-[9px] px-6 rounded-t-lg max-h-[60px] rounded-b-sm my-auto h-[200px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  aria-label="Close modal"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-5 right-5 w-[32px] h-[32px] pt-0 z-50 text-[#808080] cursor-pointer"
                  onClick={() => setShowAddJobModal(false)}
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                <h3 className="text-[0.875rem] leading-5 font-semibold m-0">
                  Add Job
                </h3>
              </div>

              <div className="px-10 w-full  mt-[10px]">
                <div className="w-full mt-[15px]">
                    <p className="text-[15px] font-semibold text-[#201e27]">
                        Job Title
                    </p>  
                    <input
                        type="text"
                        defaultValue = {curItem.title}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Job Title"
                        className="appearance-none px-3 py-2 placeholder-[#6B7280] text-[#030303]  placeholder-opacity-90 relative w-full bg-white rounded text-sm border-[1.5px]  focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200  ease-in mt-1 bg-transparent"
                    />
                </div>
                <div className="w-full mt-[25px]">
                    <p className="text-[15px] font-semibold text-[#201e27]">
                        Type
                    </p>
                    <input
                        type="text"
                        defaultValue={curItem.jobType}
                        // value={inputValue}
                        onChange={handleInputValueChange}
                        placeholder="Fulltime , Internship"
                        className="appearance-none px-3 py-2 placeholder-[#6B7280] text-[#030303]  placeholder-opacity-90 relative w-full bg-white rounded text-sm border-[1.5px]  focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200  ease-in mt-1 bg-transparent"
                    />

                      <div
                        className={`${
                          autocomplete.disabled ? 'hidden' : ''
                        } ml-[0.5rem] w-[90%] absolute z-10 border rounded-md  py-1 bg-white
                        max-h-60 overflow-y-scroll`}
                      >
                        {autocomplete.data.map((item, index) => {
                         
                          return (
                          <div
                            key={index}
                            className="px-3  h-[2rem] flex items-center cursor-pointer 
                            font-medium text-sm hover:bg-gray-100"
                            onClick={() => updatejobType(item)}
                          >
                            {item}
                          </div>
                        )})}
                      </div>
                    
                    <div className="w-full ml-[-10px]">
                      {jobType.map((role, index) => {
                        return (
                        <span
                          key={index}
                          className="preferred_roles"
                          style={{
                            background: role.selected ? '#61a0ff' : '',
                            color: role.selected ? '#fff' : '',
                          }}
                          onClick={() => updatejobType(role.name)}
                        >
                          {role.name}
                        </span>
                      )})}
                    </div>
                </div>

                <div className='mt-[25px]'>
                  <p className="text-[15px] mb-[5px] font-semibold text-[#201e27]">Description</p>
                  <RichEditor
                      htmlContent={curItem.description}
                      handleEditorChange={handleDescriptionChange}
                  />
                </div>
                <div className='mt-[25px]'>
                  <p className="text-[15px] mb-[5px] font-semibold text-[#201e27]">Responsibilities</p>
                  <RichEditor
                      htmlContent={curItem.responsibilities}
                      handleEditorChange={handleResponsibilityChange}
                  />
                </div>
            </div>
            <hr/>
              <button className="save-button float-right m-[20px] py-[10px] " onClick={handleSaveJobClick}>
                  Save
              </button> 
            </div>
            
          </div>
        </>
      ) : null}
    </div>
  );
}

export default AddJobModal;
