import { useReducer , useState} from "react";
import {  useNavigate } from "react-router-dom";

export default function PatientReges(){

    const init = {
        role_id_:{value:"",touched:false,valid:false,error:""},
        question_id_:{value:"",touched:false,valid:false,error:""},
        status_:{value:"",touched:false,valid:false,error:""},
        fname_:{value:"",touched:false,valid:false,error:""},
        lname_:{value:"",touched:false,valid:false,error:""},
        gender_:{value:"",touched:false,valid:false,error:""},
        email_:{value:"",touched:false,valid:false,error:""},
        password_:{value:"",touched:false,valid:false,error:""},
        cpassword_:{value:"",touched:false,valid:false,error:""},
        address_:{value:"",touched:false,valid:false,error:""},
        contact_:{value:"",touched:false,valid:false,error:""},       
        answer_:{value:"",touched:false,valid:false,error:""},
        dob_:{value:"",touched:false,valid:false,error:""}
    }

    const validateData = (name,value) => {
        let valid = false;
        let error = "";
        switch(name) {
            case 'fname_': var pattern = /^[A-Z][a-z]{2,15}$/
                              if(pattern.test(value))
                              {
                                 valid = true;
                                 error = "";
                              }
                              else
                              {
                                 valid = false;
                                 error = "First letter should be Capital"
                              }
                              break;
            case 'lname_':  var pattern = /^[A-Z][a-z]{2,15}$/
                              if(pattern.test(value))
                              {
                                valid = true;
                                error = "";
                               }
                               else
                               {
                                valid = false;
                                error = "First letter should be Capital"
                               }
                              break;
            case 'email_':     var pattern = /^[A-Za-z0-9_.-]{3,15}@gmail.com$/
                              if(pattern.test(value))
                              {
                                valid = true;
                                error = "";
                              }
                              else
                              {
                                valid = false;
                                error = "Email invalid"
                              }
                              break;
            case 'password_':  var pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/
                                if(pattern.test(value))
                                {
                                valid = true;
                                error = "";
                                }
                                else
                                {
                                valid = false;
                                error = "Password invalid"
                                }
                              break;
            case 'contact_':
                             var pattern = /^[0-9]{10}$/
                              if(pattern.test(value) )
                              {
                                valid = true;
                                error = "";
                              } 
                              else
                              {
                                valid = false;
                                error = "contact no do not match"
                              }     
                              break;
                            
            case 'cpassword_':
                               if(info.password_.value === value)
                                     {
                                            valid = true;
                                            error = "";
                                     } 
                                            else
                                             {
                                               valid = false;
                                                error = "Passwords do not match"
                                             }     
                                                break;

            
                                                
                        }
                             return {valid, error};

    }

    const navigate= useNavigate();

    const reducer=(state,action)=>  {
        switch(action.type)
        {
            case 'update':
               // return {...state,[action.fld]:action.val}
               const {name, value, touched, valid,error,formvalid} = action.data
                
                return {...state, [name]: {value, touched, valid, error}, formvalid }
            case 'reset':
                return init;
        }
        
    }
    const handleChange = (name,value) => {
        const {valid,error} = validateData(name,value)
        let formvalid = true;
        
        for(const key in info)
        {
            console.log(key+" : "+info[key].valid )
            if(info[key].error === false)
            {
                formvalid = false;
                break;
            }
        }  
        console.log(formvalid)  
        dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
    }

    const onFocusout = (name,value) => {
        const {valid,error} = validateData(name,value)
        let formvalid = true;
            
        for(const key in info)
        {
            console.log(key+" : "+info[key].valid )
            if(info[key].valid === true)
            {
                formvalid = false;
                break;
            }
        }  
        dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
    }


        const [info,dispatch]=useReducer(reducer,init);
        //const [msg,setMsg]=useState("");
       // const navigate= useNavigate();

        const sendData=(e) =>{
            e.preventDefault();

            const reqOptions={
                method:'POST',
                mode: 'cors',
                headers:{'content-type':'application/json'},
                
                body:JSON.stringify({


                    role_id_:info.role_id_.value,
                    question_id_:info.question_id_.value,
                    status_:info.status_.value,
                    fname_:info.fname_.value,
                    lname_:info.lname_.value,
                    gender_:info.gender_.value,
                    email_:info.email_.value,
                    password_:info.password_.value,
                    address_:info.address_.value,
                    contact_:info.contact_.value,       
                    answer_:info.answer_.value,
                    dob_:info.dob_.value,


                   

                })
            }
            fetch("http://localhost:8080/regPatient",reqOptions)
            .then(resp=>{if(resp.ok){
                            console.log("data send");
                            alert("Registration Successful...");
                            }
                            else{
                                alert("Registration failed...");
                            }
                        })
            .then(()=>{navigate("/login")})                                             //pending
        }


       
    return(
        <div className="pat">
            <br/>
            <p className="pat1">
            <div className="container-fluid">
            <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  
                    <div class="card" >
                      <div class="card-body p-5">
                   
                        <h2 class="text-uppercase text-center mb-5">Patient Registration Form</h2>
        
        <form action="" className="pat1">
            <div class="mb-3 mt-3 ">
                <label for="fname_" class="form-label">First Name:</label>
                <input type="text" class="form-control" id="fname_" placeholder="Enter first name..." name="fname_" value={info.fname_.value}
               // onChange={(e)=>{dispatch({type:'update',fld:'fname',val:e.target.value})}}/>
               onChange={(e)=>handleChange("fname_",e.target.value)}/>
               <div className="error-msg" style={{color:"red"}}> {info.fname_.error}</div> 
            </div>

            <div class="mb-3">
               
                <label for="lname_" class="form-label">Last Name:</label>
                <input type="text" class="form-control" id="lname_" placeholder="Enter last name..." name="lname_" value={info.lname_.value}
                // onChange={(e)=>{dispatch({type:'update',fld:'lname',val:e.target.value})}}/>
                onChange={(e)=>handleChange("lname_",e.target.value)}/>
                <div className="error-msg"> {info.lname_.error}</div> 

            </div>

            <div class="mb-3">
                <label for="email_" class="form-label">Email:</label>
                <input type="email_" class="form-control" id="email_" placeholder="Enter email..." name="email_" value={info.email_.value}
                // onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
                onChange={(e)=>handleChange("email_",e.target.value)}/>
                <div className="error-msg"> {info.email_.error}</div> 
            </div>

            <div class="mb-3">
                <label for="contact_" class="form-label">Contact No.:</label>
                <input type="text" class="form-control" id="contact_" placeholder="Enter contact no..." name="contact_" value={info.contact_.value}
                // onChange={(e)=>{dispatch({type:'update',fld:'contactNo',val:e.target.value})}}/>
                onChange={(e)=>handleChange("contact_",e.target.value)}/>
                <div className="error-msg"> {info.contact_.error}</div> 
            </div>

            <div class="mb-3">
                <label class="form-label" for="gender_"> Gender :- </label>
                <input class="form-check-input" type="radio" name="gender_" id="gender_" value="Male"
                     onChange={(e)=>dispatch({type: 'update', data: {name:"gender_",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}/> Male


                <input class="form-check-input" type="radio" name="gender_" id="gender_" value="Female"
                     onChange={(e)=>dispatch({type: 'update', data: {name:"gender_",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}/> Female
            </div>

            <div class="mb-3">
                <label for="dob_" class="form-label">BirthDate:</label>
                <input type="date" class="form-control" id="dob_" placeholder="Enter birthdate..." name="dob_" value={info.dob_.value}
                  onChange={(e)=>dispatch({type: 'update', data: {name:"dob_",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}/>
            </div>

           
           

            

            <div class="mb-3">
                <label for="address_" class="form-label">Address:</label>
                <input type="text" class="form-control" id="address_" placeholder="Enter area..." name="address_" value={info.address_.value}
                 onChange={(e)=>dispatch({type: 'update', data: {name:"address_",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}/>
            </div>

          


           




            <div class="mb-3">
                <label for="password_" class="form-label">Password.:</label>
                <input type="password" class="form-control" id="password_" placeholder="Enter password" name="password_" value={info.password_.value}
                 //onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}/>
                 onChange={(e)=>handleChange("password_",e.target.value)}/>
                 <div className="error-msg"> {info.password_.error}</div> 
            </div>

            <div class="mb-3">
                 <label for="cpassword_" class="form-label">Confirm Password.:</label>
                <input type="password"  class="form-control" id="cpassword_" placeholder="Enter Confirm password"   name="cpassword_" 
                       
                       
                        onChange={(e)=> handleChange("cpassword_", e.target.value)}
                        onBlur={(e)=> onFocusout("cpassword_", e.target.value)} />

                        <div className="error-msg"> {info.cpassword_.error}</div>  
                                  
                </div>

            <div class="mb-3">
                <label class="form-label" for="question_id_"> Security Question :- </label>
                <select class="form-control" id="question_id_" name="question_id_" onChange={(e)=>dispatch({type: 'update', data: {name:"question_id_",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })} >
                    <option value="0">Select Question</option>
                    <option value="1">What is your favourite color ?</option>
                    <option value="2">What is your pet's name?</option>
                    <option value="3">What city were you born in? </option>
                </select>
            </div>

            <div class="mb-3">
                <label for="answer_" class="form-label">Answer:</label>
                <input type="text" class="form-control" id="answer_" placeholder="Enter answer..." name="answer_" value={info.answer_.value}
                 onChange={(e)=>dispatch({type: 'update', data: {name:"answer_",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}/>
            </div>

            
            <button type="submit" className="btn btn-primary btn-lg ms-2" disabled={info.formvalid?false:true} onClick={(e)=>{sendData(e)}}>Submit</button>
            <button type="reset" className="btn btn-primary btn-lg ms-2" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
        </form>
        
        </div>
                    </div>
                 </div>
              </div>
          

        </div>

        {/* <p>{JSON.stringify(info)}</p>  */}
</p>
        </div>

    )
}

