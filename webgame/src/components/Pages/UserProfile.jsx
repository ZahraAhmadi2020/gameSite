import axios from 'axios';
import React, { useState } from 'react';
const UserProfile = () => {

  const [image, setImage] = useState()
  const[progress,setPtrogress]=useState(0)

  const uploadImageHandler = (e) => {

  
    const file = e.target.files[0]
    const formData = new FormData()
setImage(URL.createObjectURL(file))

    formData.append('file', file)
    axios.post('url', formData, {
      headers: {
        "Content-Type":"multipart/form-data"
      },
      onUploadProgress: e => {
        setPtrogress(Math.round(100 * e.loaded)/e.total)
      }
    }).then(res => setImage(URL.createObjectURL(file)))
      .catch(err => console.log(err))


  }
  return (
    <div>
      {/* <Formi  console.log(image);k initialValues={initialValues} onSubmit={handleSubmit}>
           <Form>
             <div>
               <label htmlFor="email">Email</label>
               <Field type="email" id="email" name="email" />
             </div>

             <div>
               <label htmlFor="password">Password</label>
               <Field type="password" id="password" name="password" />
             </div>

             <div>
               <label htmlFor="playerId">playerId</label>
               <Field type="number" id="playerIdr" name="playerId" />
             </div>

             <div>
               <label htmlFor="profilePicture">My Picture</label>
               <Field type="file" id="profilePicture" name="profilePicture" />
             </div>

             <button type="submit">Save</button>
           </Form>
         </Formi> */}

      <form  className='profile-form'>
        <div className='d-inline-grid'>
          <label htmlFor='img' className='profile-image '>
           {image && (
          <div >
            <img src={image} alt='image'/>
          </div>
        )}
          </label>

        <input id='img' type='file' className='d-none' accept='image/png,image/jpg,image/jpeg '
            onChange={uploadImageHandler} />
          <button className='btn'>Edit Profile</button>
        </div>
        <div className='mt-3'>
          <span>Player Id:7864</span>
          <input type='text' placeholder='joun' className='name-input' />
          <input type='email' placeholder='joun1515@gmail.com' className='email-input'/>
        </div>
        <div  >
          {/* <label className='label'>Wallet</label> */}
          <input  className='wallet-input' type='text' placeholder='0x8Ef0986c165Ekoiohg595a6d10'/>
        </div>

      </form>
    </div>
  )
}

export default UserProfile
