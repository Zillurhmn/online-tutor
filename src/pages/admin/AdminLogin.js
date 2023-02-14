import React from 'react';

const AdminLogin = ({setAdmin,setIsLoggedin}) => {
    const handleAdmin=(e)=>{
        e.preventDefault();
        const checkEmail = 'admin@tutor.org'
        const checkPassword = "123"
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        
        if(checkEmail === email && checkPassword=== password){
            setAdmin(true) ;
             setIsLoggedin(true);
        } else{
            alert('Admin login Failed') 
        }
            
      }
    return (
        <div className='text-center m-10'>
            <form onSubmit={handleAdmin} className='border p-4 bg-slate-300'>
                <label htmlFor="email" className='form-label text-slate-800 pb-2 text-lg'>Email</label><br /><br />
                <input name='email' type="email" required className=' w-96 pl-5 py-2'/><br /><br />
                <label htmlFor="password" className='form-label text-slate-800 pb-2 text-lg'>Password</label><br /><br />
                <input name='password' type="password" required className=' w-96 pl-5 py-2'/><br /><br />
                <input  type="submit" value={"login"} className='btn' />
            </form>
        </div>
    );
};

export default AdminLogin;