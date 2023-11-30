import React, { useState } from 'react';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
const Contact = () => {
  const [isOpen, setIsOpen] = useState(null)

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div  className='contact d-flex' onClick={handleOpen}>
      <MdOutlineLocalPostOffice className='contact-icon  '/>
      {/* <Link to='/contact' className='contact-link'>Contact us</Link> */}
      <button className='contact-link'>Contact us</button>
      </div>
      {isOpen ? (
        <div className='contact-dropdown'>

         </div>
      ) : null}

    </div>
  )
}

export default Contact
