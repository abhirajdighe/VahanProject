import { useEffect, useState } from 'react';
import './Table.css';
import axios from 'axios'
import FormTable from '../FormTable/index';


axios.defaults.baseURL = "http://localhost:5000/api/v1/vahan"
function App() {


  const [editSection,setEditSection]=useState(false)
  const [addSection, setAddSection] = useState(false)
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    dob: "",
  })

  const [formDataEdit, setFormDataEdit] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    dob: "",
  })

  const [dataList, setDataList] = useState([])
  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  const handelSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("/", formData)
    // console.log(data)
    if (data.data.success) {
      
      setAddSection(false)
      getFetchData()
    }
  }

  const getFetchData = async () => {
    const data = await axios.get("/")
    // console.log(data)
    if (data.data.success) {
      setDataList(data.data.data)
    }
  }

  useEffect(() => {
    getFetchData()
  }, [])

  const handleDelete = async (id) => {
    const data = await axios.delete("/" + id)
    if (data.data.success) {
      
      getFetchData()
      
    }
  }

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const data = await axios.put("/", formDataEdit)
    // console.log(formDataEdit.id)
    if (data.data.success) {
      await getFetchData()
      setEditSection(false)
    }
  }

  const handleEditOnChange = async(e)=>{
    const { value, name } = e.target
    setFormDataEdit((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleEdit =(el)=>{
    setFormDataEdit(el)
    setEditSection(true)
  }

  return (
    <>
      <div className="Container">
        <button className="btn btn-add"  onClick={() => {setAddSection(true)}}>Add</button>
        {
          addSection && (
            <FormTable
            handelSubmit={handelSubmit}
            handleOnChange={handleOnChange}
            handleclose={()=>setAddSection(false)}
            rest={formData}
            />
          )
        }
        {
          editSection &&(
            <FormTable
            handelSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose={()=>setEditSection(false)}
            rest={formDataEdit}
            />
          )
        }

        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile.No</th>
                <th>Date-of-Birth</th>
              </tr>
            </thead>
            <tbody>
              {
                dataList[0] ? (
                  dataList.map((el) => {
                    return (
                      <tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.mobile}</td>
                        <td>{(el.dob)}</td>
                        <p>
                          <button className='btn btn-edit' onClick={()=>handleEdit(el)}><i class="ri-edit-line"></i> Edit</button>
                          <button className='btn btn-delete' onClick={() => {handleDelete(el.id)}}><i class="ri-delete-bin-line"></i> Delete</button>
                        </p>
                      </tr>
                    )
                  })
                ):(
                  <p>No Data</p>
                )
                
              }
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}

export default App;
