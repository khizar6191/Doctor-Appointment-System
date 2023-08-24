import { useReducer , useState} from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./slice";
import { Link } from "react-router-dom";

export default function  LoginComp (){

    const init = {
        email_:"",
        password_:""
    }

    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state,[action.fld]:action.val}
            case 'reset':
                return init;
        }
        
    }
        const [info,dispatch]=useReducer(reducer,init);
        const [msg,setMsg]=useState("");
        const navigate= useNavigate();
        const reduxAction=useDispatch();
        
       const sendData=(e) =>{
            e.preventDefault();

            const reqOptions={
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(info)
            }
            // we getting here object of users

            fetch("http://localhost:8080/login",reqOptions)
            .then(resp=>resp.text())
            .then(text=>text.length ? JSON.parse(text):{})
            .then(obj => {
                if(Object.keys(obj).length === 0)
                 {
                    setMsg("Wrong Uid/Password");
                    alert("Please Enter Uid & Password");
                 }
                 else
                 {
                     reduxAction(login());

                     localStorage.setItem("loggedUser",JSON.stringify(obj));
                 
                            if(obj.role_id_.id_ === 1)
                            {
                                    navigate("/Ahame");
                            }
                            else if(obj.role_id_.id_ === 2 )
                            {    if(obj.status_==1)
                                     navigate("/Dhame");
                                 if(obj.status_==0)
                                 {
                                    alert("Admin Aprroval is pending!!!!!")
                                    navigate("/login");
                                 }

                            }
                            else if(obj.role_id_.id_ === 3)
                            {
                                navigate("/Phame");
                            }
                        
                 }
            })
        }

    return(
        <div className="pat">    
        <br/>
        {/*  
        <form action="">
            <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value={info.email}
                onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
                <div id="emailhelp" className="form-text">We will Never share your email with anyone else</div>
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" value={info.password}
                 onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}/>
            </div>
            <div class="form-check mb-3">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember"/> Remember me
                </label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Submit</button>
            <button type="reset" class="btn btn-primary" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
        </form>
        */}


<div className="container-fluid">
            <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">          
                  {/* <div class="col-12 col-md-9 col-lg-7 col-xl-6"> */}
                    <div className="card" >
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Login</h2>

                        <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="email"><b> Email</b></label>
                                    <input type="email" id="email" placeholder="Enter email" name="email" value={info.email_} class="form-control form-control-lg"
                                    onChange={(e)=>{dispatch({type:'update',fld:'email_',val:e.target.value})}} />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" for="password"><b>Password</b></label>
                                    <input type="password" id="password" placeholder="Enter password" name="password" value={info.password_} class="form-control form-control-lg" 
                                        onChange={(e)=>{dispatch({type:'update',fld:'password_',val:e.target.value})}}/>
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="reset" className="btn btn-light btn-lg" onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
                                    <button type="submit" className="btn btn-info btn-lg ms-2" onClick={(e)=>{sendData(e)} }>Submit</button>
                                </div>

                                <p style={{color:"red"}}><b>{msg}</b></p>
                            

                        </form>
                        <Link to="/forgetPassword" className="nav-link px-3">Forget Password</Link>
                        <Link to="/patientRegistration" className="nav-link px-3">New Patient ? Register here ...</Link>
                        <p> {JSON.stringify(info)}</p>
                       </div>
                     </div>
                  </div>
               </div>
               </div>
             
           
       
             {/*<p>{JSON.stringify(info)}</p>*/}  
        
    </div>    
    )
}