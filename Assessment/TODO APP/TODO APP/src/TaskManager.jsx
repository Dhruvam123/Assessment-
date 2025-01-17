import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios';
import {Container,Form} from 'react-bootstrap'
import Swal from 'sweetalert2';
import ManageData from './ManageData';
export default function TaskManager() {
//  stored data 
const[data,setData]=useState([]);
const taskname=useRef("");
const priority=useRef("");
const added_date=useRef("");
const details=useRef("")
const status=useRef("")

// create a formHandeler
const AddTaskHendeler=(e)=>{
    e.preventDefault();
    var insert={
        taskname:taskname.current.value,
        details:details.current.value,
        priority:priority.current.value,
        status:status.current.value,
        added_date:added_date.current.value

        
    }

    // call api to add data using axios.post()
     axios.post(`http://localhost:8000/added-task`,insert).then(()=>{
        //   setData(response.data);
        console.log(data);
        // pass a message
        Swal.fire({
            title: "wow",
            text: "Your Task successfully created",
            icon: "success"
          });

     },[]);

     e.target.reset();
}
  return (
    <div>
      {/* add to list */}
      <Container className="p-5 mt-5">
        <h1>Add New Tasks Here</h1>
       <Form onSubmit={AddTaskHendeler}>
        <div className='form-group mt-3'>
            <label className='bi bi-pencil'>Todo</label>
            <input type='text' ref={taskname} placeholder='Write your task....' className='form-control' />
        </div> 
        <div className='form-group mt-3'>
            <label className='bi bi-pencil'>Details</label>
            <input type='text' ref={details} placeholder='enter task details....' className='form-control' />
        </div> 
        
        <div className='form-group mt-3'>
            <label className='bi bi-watch'>Priority</label>
            <select ref={priority}  placeholder='Write your task....' className='form-control'>
                <option value="">-select priority-</option>
                <option value="High">High</option>
                <option value="Low">Low</option>

            </select>
        </div> 
        <div className='form-group mt-3'>
            <label className='bi bi-watch'>Status</label>
            <select ref={status}  placeholder='enter task status' className='form-control'>
                <option value="">-select status-</option>
                <option value="High">Pending</option>
                <option value="Low">Completed</option>

            </select>
        </div> 

        <div className='form-group mt-3'>
            <label className='bi bi-pencil'>Added Date</label>
            <input type='date' ref={added_date} placeholder='Write your task....' className='form-control' />
        </div> 

        <div className='form-group mt-3'>
           
            <input type='submit' value="Save" placeholder='Write your task....' className='btn btn-sm btn-success' />
        </div> 
       </Form>
       {/* display list */}
       <ManageData />        
      </Container>
    </div>
  )
}
