/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';

function TeamSize() {
    const [preferredSkills, setPreferredSkills] = useState([
        { name: '5-10', selected: false },
        { name: '10-50', selected: false },
        { name: '50-100', selected: false },
        { name: '>500', selected: false },
        { name: '>1000', selected: false },
        
      ]);
      const [userPreferredSkills, setUserPrefferedSkills] = useState([]);
      const [totalPreferredSkills, setTotalPreferredSkills] = useState(0);
      const [autocomplete, setAutocomplete] = useState({
        disabled: true,
        data: [],
      });
      const [inputValue, setInputValue] = useState('');
    
      const updatePreferredSkills = (roleNames) => {
        const arr = roleNames.split(',');
        arr.reverse();
        arr.map((roleName)=>{
            let flag = 1 ;
            for(let i=0 ; i<preferredSkills.length ; i++)
            {
              const x = preferredSkills[i];
              if(x.name == roleName)
              {
                flag = 0;
                break;
              }
            }
            if(flag) preferredSkills.unshift({name : roleName , selected : false})  
        })

        var newData ;

        arr.map((roleName)=>{
            newData = preferredSkills.map((role) => {
                if (role.name === roleName)
                  if (!role.selected && totalPreferredSkills === 7);
                  else role.selected = !role.selected;
          
                return role;
              });
        })
        setPreferredSkills(newData);
        setInputValue('');
        setAutocomplete({
          disabled: true,
          data: [],
        });
      };
    
      useEffect(() => {
        // skills.forEach((name) => updatePreferredSkills(name));
        // setUserPrefferedSkills(
        //   skills.map((name) => ({
        //     name,
        //     selected: true,
        //   }))
        // );
        // setTotalPreferredSkills(skills.length);
      }, []);
    
      const handlePreferredRolesSave = async () => {
        const userSkills = preferredSkills.filter((role) => role.selected);
        const newSkills = userSkills.map((skill) => skill.name);
    
        try {
          await updateProfile({ skills: newSkills });
          setUserPrefferedSkills(userSkills);
          setInputValue('');
          setshowskills('');
          setAutocomplete({ disabled: true, data: [] });
        } catch (error) {
          console.log(error.response);
        }
      };
    
      const closePreferredRolesModal = () => {
        const rolesList = userPreferredSkills.map((role) => role.name);
        const updatedRoles = preferredSkills.map((role) => {
          if (rolesList.includes(role.name)) role.selected = true;
          else role.selected = false;
          return role;
        });
        setPreferredSkills(updatedRoles);
    
        setInputValue('');
        setAutocomplete({ disabled: true, data: [] });
      };
    
      useEffect(() => {
        let temp = 0;
    
        preferredSkills.forEach((role) => {
          if (role.selected) temp++;
        });
        setTotalPreferredSkills(temp);
      }, [preferredSkills]);
    
      const handleInputValueChange = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.trim() === '')
          setAutocomplete({ disabled: true, data: [] });
        else {
          const autocompleteData = [];
          const regex = new RegExp(e.target.value, 'i');
    
          preferredSkills.forEach((role) => {
            if (regex.test(role.name)) autocompleteData.push(role.name);
          });
    
          setAutocomplete({
            disabled: false,
            data: [e.target.value, ...autocompleteData],
          });
        }
      };
  return (
    <div>
          {/* <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay"> */}
            {/* <div className="relative max-h-[746px] flex-col h-[94%] rounded-lg w-[640px] overflow-y-auto bg-white z-10 text-black min-w-[640px] my-6 mx-auto font-inter">
              <div className="p-6 max-w-full"> */}
                {/* CONTENT START */}
                
                  <div className="relative flex-auto">
                    <input
                    //   className="w-[90%] ml-[0.5rem] mt-[7px] mb-[7px] text-[#6b7280] outline-none rounded-[0.3125rem] border-1 border-[#ddd] h-10 text-[0.875rem] pl-[13px]"
                    className="appearance-none px-3 py-2 mt-[7px] mb-[7px] placeholder-[#6B7280] text-[#030303]  placeholder-opacity-90 relative w-full bg-white rounded text-sm border-[1.5px]  focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200  ease-in bg-transparent"

                      type="text"
                      value={inputValue}
                      onChange={handleInputValueChange}
                      placeholder="Example:5-10 , 10-50 "
                    />
                    <div
                      className={`${
                        autocomplete.disabled ? 'hidden' : ''
                      } ml-[0.5rem] w-[90%] absolute z-10 border rounded-md  py-1 bg-white
                       max-h-60 overflow-y-scroll`}
                    >
                      {autocomplete.data.map((item, index) => (
                        <div
                          key={index}
                          className="px-3 mt-1 h-10 flex items-center cursor-pointer 
                          font-medium text-sm hover:bg-gray-100"
                          onClick={() => updatePreferredSkills(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ml-1">
                    <div className="w-full ml-[-10px]">
                      {preferredSkills.map((role, index) => (
                        <span
                          key={index}
                          className="preferred_roles"
                          style={{
                            background: role.selected ? '#61a0ff' : '',
                            color: role.selected ? '#fff' : '',
                          }}
                          onClick={() => updatePreferredSkills(role.name)}
                        >
                          {role.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

            //   {/* CONTENT END */}
            // </div>
        //   </div>
    
    // </div>
  );
}

export default TeamSize;
