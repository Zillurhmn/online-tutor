import React from 'react';

const ProfileEdit = ({setProfileEditData, setIsEditProfile,userObj,setUser,handleSetIsEditProfile,openEditButton,setOpenEditButton}) => {
    const id = userObj._id;
    const user = userObj.user;
    console.log("user data ", userObj)
    const handleProfileEdit = (e)=>{
        e.preventDefault();
        // const user = e.target.user.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject?.value;
        const education = e.target.education.value;
        const description = e.target.description.value;
        const newTutorProfile= {
            name:name,
            email:email,
            subject:subject,
            education:education,
            description:description
        }
        const newStudentProfile= {
            name:name,
            email:email,
            education:education,
            description:description
        }
        const url = `http://localhost:5000/${(user === "tutor")?"editTutorProfile":"editStudentProfile"}/${id}`
        console.log("Fetching URL is",url)
         fetch(url,{
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-type': 'application/json', 
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify((user === 'tutor')?newTutorProfile:newStudentProfile),
        })
            .then((res) => res.json())
            .then(EditedPost => {
                setProfileEditData(EditedPost);
                setIsEditProfile(false);
                setUser(EditedPost);//Setting user Data again
                handleSetIsEditProfile();
            })
          .catch(e=> console.log("Error is", e))

        console.log("user sending body is", (user === 'tutor')?newTutorProfile:newStudentProfile)
     e.target.name.value = "";
     e.target.email.value ="" ;
     e.target.subject.value ="";
     e.target.education.value ="";
     e.target.description.value ="";
     setOpenEditButton(false)
    }
    return (
        <>
            <div className='flex justify-center items-center bg-yellow-100 p-10'>
                <form onSubmit={handleProfileEdit}>
                    <input placeholder={"Name"} name='name'  type="text" defaultValue={userObj?.name || ""} className="input input-bordered mb-5 mt-3 w-[90%]" required  />
                    <br />
                    <input type="text" placeholder={"Email"} name='email' defaultValue={userObj?.email || ""}  className="input input-bordered mb-5 mt-3 w-[90%]" required />
                    <br />
                    <input type="text" placeholder={"Education"} name='education' defaultValue={userObj?.education || ""}  className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                    <br />
                    {
                        user === "tutor" &&
                        <input type="text" placeholder={"Subject"} name={'subject'} defaultValue={userObj?.subject || ""} className="input input-bordered mb-5 mt-3 w-[90%]"  required />
                    }
                    <br />
                    
                    <textarea name='description' placeholder="Enter Post Description" defaultValue={userObj?.description || ""}  className='border p-2 text-gray-600 rounded-lg w-[90%]' id="description" cols="30" rows="10" required></textarea>
                    <input  type="submit" value={"Update Profile"} className='w-32 h-10 border-0 rounded font-semibold bg-button-bg text-black hover:bg-[#ddc660] hover:text-white cursor-pointer mt-5 ' />
                </form>
            </div>
        </>
    );
};

export default ProfileEdit;