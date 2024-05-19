import React from 'react'
import "./FormTable.css"
import { MdClose } from 'react-icons/md'

const FormTable = ({handelSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
              <form onSubmit={handelSubmit}>
                <div className="close-btn" onClick={handleclose}><MdClose /></div>
                <label htmlFor="id">ID : </label>
                <input type="text" id="id" name="id" onChange={handleOnChange} value={rest.id} />

                <label htmlFor="name">Name : </label>
                <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>

                <label htmlFor="email">Email : </label>
                <input type="email" id="email" name="email" onChange={handleOnChange} value={rest.email}/>

                <label htmlFor="mobile">Mobile.No : </label>
                <input type="text" id="gender" name="mobile" onChange={handleOnChange} value={rest.mobile}/>

                <label htmlFor="dob">Data-of-Birth : </label>
                <input type="text" id="status" name="dob" onChange={handleOnChange} value={rest.dob}/>

                <button className="btn">Submit</button>
              </form>
            </div>
  )
}

export default FormTable