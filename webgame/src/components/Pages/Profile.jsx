import React from 'react';
import { CgProfile } from 'react-icons/cg';
import CartProfile from './CartProfile';
import Contact from './Contact';
import './Profile.css';
const Profile = () => {

  function openProfile() {
    document.getElementById("mySideProfile").style.width = "400px";
}

function closeProfile() {
  document.getElementById("mySideProfile").style.width = "0";
}
   return (
    <div>
     <a onClick={openProfile}><CgProfile className='icon me-4 h-menu'

       />Profile</a>
     <div id="mySideProfile" className="sideProfile">


           <a href="javascript:void(0)" className="closebtn" onClick={closeProfile}>&times;</a>


           <h4 className='welcome'>Welcome to your Game account</h4>

          <div className='mt-5 d-flex justify-content-center'>
            <CartProfile/>

           </div>
           <div >
             <Contact />
           </div>
         </div>


    </div>
  )
}

export default Profile
