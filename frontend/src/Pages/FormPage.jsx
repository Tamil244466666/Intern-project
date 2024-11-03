import { useEffect, useState } from "react";
import axios from 'axios'

 const FormPage = ()=>{

    const [allData,setallData] = useState([]);
    const [formdata] = useState({Name:"",Role:"",Email:"",Phone_Number:"",Course:"",Status:""});

    const collectdata = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        formdata[`${name}`] = value;
        console.log(formdata);
    }
    
    useEffect(()=>{
        const source = axios.CancelToken.source();

        axios.get('https://intern-project-a6a0.onrender.com/form/',{cancelToken:source.token}).then((res)=>{
            setallData([...res.data.all_formData]);
        }).catch((err)=>{
            console.log(err)
        });
        
        return()=>{
            source.cancel('Operation canceled')
        }
    },[allData])


const submitHandler = (event)=>{
    // event.preventDefault();
    axios.post('https://intern-project-a6a0.onrender.com/form/',{FormData:formdata})
    .then((res)=>{
        // alert(res.data.status);
    }).catch((err)=>{
        console.log(err)
    })
}


const deleteHandler = (value)=>{
    axios.delete(`https://intern-project-a6a0.onrender.com/form/${value}`).then((res)=>{
        // alert((res.data.status));
    }).catch((err)=>{
        console.log(err);
    })
}


return(<>
    <div className="formPage">
        <div className="form-container">
            <div className="form">
                <p>Fill This Form</p>
                <form onSubmit={submitHandler}>
                    <div>
                    <label htmlFor="Name">Name:</label>
                    <input type="text" id="Name" name="Name" className="Name" onChange={collectdata} placeholder="Enter your name"/>
                    </div>
                    <div>
                    <label htmlFor="Role">Role:</label>
                    <input type="text" id="Role" name="Role" className="Role" onChange={collectdata} placeholder="Enter your role "/>
                    </div>
                    <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" id="Email" name="Email" className="Email" onChange={collectdata}placeholder="Enter your Email"/>
                    </div>
                    <div>
                    <label htmlFor="Phone_Number">Phone Number:</label>
                    <input type="text" id="Phone_Number" name="Phone_Number" className="Phone_Number" onChange={collectdata} placeholder="Enter your phone number"/>
                    </div>
                    <div>
                    <label htmlFor="Course">Course:</label>
                    <select id="Course" name="Course" className="Course" onChange={collectdata}>
                        <option value="" >Select a Cource</option>
                        <option value="React Basics" >React Basics</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
                        <option value="Advanced CSS">Advanced CSS</option>
                        <option value="Backend Development">Backend Development</option>
                    </select>
                    </div>
                    <div>
                    <label htmlFor='Status'>Status:</label>
                    <select id="Status" name="Status" className="Status" onChange={collectdata}>
                        <option value="">select a status</option>
                        <option value="Unplaced">Unplaced</option>
                        <option value="Placed">Placed</option>
                    </select>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>

        <ul>
            {allData.map((val,index)=>{
                return (
                     <li key={index+1}>
                        <div><div>{(val.Name).charAt(0)}</div><h2>{val.Name}</h2></div>
                        <p><b>Role: </b>{val.Role}</p>
                        <p><b>Email: </b>{val.Email}</p>
                        <p><b>Phone Number: </b>{val.Phone_Number}</p>
                        <p><b>Course: </b>{val.Course}</p>
                        <p><b>Status: </b>{val.Status}</p>  
                        <button onClick={()=>{deleteHandler(val._id)}}>Delete</button>
                    
            </li>)
             }) }
        </ul>
    </div>
</>)

}

export default FormPage;
