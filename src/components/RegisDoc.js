import { useReducer , useState} from "react";
import {  useNavigate, Outlet } from "react-router-dom";

export default function DoctorRegistrationComp(){

    const init = {
        fname_:{value:"",touched:false,valid:false,error:""},
        lname_:{value:"",touched:false,valid:false,error:""},
        qualification_:{value:"",touched:false,valid:false,error:""},
        email_:{value:"",touched:false,valid:false,error:""},
        password_:{value:"",touched:false,valid:false,error:""},
        cpassword_:{value:"",touched:false,valid:false,error:""},
        contact_:{value:"",touched:false,valid:false,error:""},
        gender_:{value:"",touched:false,valid:false,error:""},
        address_:{value:"",touched:false,valid:false,error:""},
        location_id_:{value:"",touched:false,valid:false,error:""},
        specialities_id_:{value:"",touched:false,valid:false,error:""},
        role_id_:{value:"",touched:false,valid:false,error:""},
        question_id_:{value:"",touched:false,valid:false,error:""},
        answer_:{value:"",touched:false,valid:false,error:""},
        experience_:{value:"",touched:false,valid:false,error:""},
        description_:{value:"",touched:false,valid:false,error:""},
        
        formvalid:false
        
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
                                error = "First letter should be capital"
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
                                error = "contact_ do not match"
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
          
           
              case 'experience_':
                            var pattern = /^[0-9]{1,2}$/
                                if(pattern.test(value) )
                                {
                                     valid = true;
                                         error = "";
                                } 
                              else
                               {
                                     valid = false;
                                         error = "Please enter valid Experience";
                               }     
                                    break;
                                             
              
            }                  
          
        
        return {valid, error};
    }

    const reducer=(state,action)=> {
        switch(action.type)
        {
            case 'update':
                const {name, value, touched, valid,error,formvalid} = action.data
                //console.log(formvalid)
                return {...state, [name]: {value, touched, valid, error}, formvalid }
                //return {...state,[action.fld]:action.val}
            case 'reset':
                return init;
        }
        
    }

    const handleChange = (name,value) => {
        const {valid,error} = validateData(name,value)
        let formvalid = true;
        /*if(state.firstName.valid === true && state.lastName.valid === true && state.email_.valid === true && state.password_.valid === true && state.confirmpassword.valid === true)
            formvalid = true;*/
        for(const key in info)
        {
            console.log(key+" : "+info[key].valid )
            if(info[key].valid === false)
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
       // if(state.firstName.valid === true && state.lastName.valid === true && state.email_.valid === true && state.password_.valid === true && state.confirmpassword.valid === true)
            formvalid = true;
        for(const key in info)
        {
            console.log(key+" : "+info[key].valid )
            if(info[key].valid === false)
            {
                formvalid = false;
                break;
            }
        }  
        dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
    }


        const [info,dispatch]=useReducer(reducer,init);
        //const [msg,setMsg]=useState("");
        const navigate= useNavigate();

        const sendData=(e) =>{
            e.preventDefault();

            const reqOptions={
                method:'POST',
                mode: 'cors',
                headers:{'content-type':'application/json'},
                
                body:JSON.stringify({
                                   fname_:info.fname_.value,
                                    lname_:info.lname_.value,
                                    email_:info.email_.value,
                                    password_:info.password_.value,
                                    contact_:info.contact_.value,
                                    gender_:info.gender_.value,
                                    address_:info.address_.value,
                                    location_id_:info.location_id_.value,
                                    role_id_:info.role_id_.value,
                                    question_id_:info.question_id_.value,
                                    answer_:info.answer_.value,
                                    qualification_:info.qualification_.value,
                                    specialities_id_:info.specialities_id_.value,
                                    experience_:info.experience_.value,
                                    description_:info.description_.value,
                                    
                                })
            }
            
            fetch("http://localhost:8080/saveDoctor",reqOptions)
            .then(resp=>{
                console.log("data send");
                alert("Registration Successful...");
            })
            .then(()=>{navigate("/login")})                                               
        }

    return(
    <div className="doc">
            <br/>
            <div className="container-fluid">
            <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  {/* <div className="col-12 col-md-9 col-lg-7 col-xl-6"> */}
                    <div className="card" >
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Doctor Registration Form</h2>
        
        <form action="">
        
        <input type="hidden" name="role_id_" value="2"/>
            <div className="mb-3 mt-3">
                <label for="fname_" class="form-label">First Name:</label>
                <input type="text" class="form-control" id="fname_" placeholder="Enter first name..."  name="fname_" value={info.fname_.value}
            
                onChange={(e)=>handleChange("fname_",e.target.value)}/>
                <div className="error-msg"> {info.fname_.error}</div> 
                
            </div>

            <div class="mb-3">
                <label for="lname_" class="form-label">Last Name:</label>
                <input type="text" class="form-control" id="lname_" placeholder="Enter last name..."  name="lname_" value={info.lname_.value}
               
                onChange={(e)=>handleChange("lname_",e.target.value)}/>
                <div className="error-msg"> {info.lname_.error}</div> 
            </div>

            <div class="mb-3">
                <label for="email_" class="form-label">Email:</label>
                <input type="email_" class="form-control" id="email_" placeholder="Enter email_..."  name="email_" value={info.email_.value}
                 
                 onChange={(e)=>handleChange("email_",e.target.value)}/>
                 <div className="error-msg"> {info.email_.error}</div> 
            </div>

            <div class="mb-3">
                <label for="contact_" class="form-label">Contact No.:</label>
                <input type="text" class="form-control" id="contact_" placeholder="Enter contact no..."  name="contact_" value={info.contact_.value}
                
                onChange={(e)=>handleChange("contact_",e.target.value)}/>
                <div className="error-msg"> {info.contact_.error}</div> 
            </div>

            <div class="mb-3">
                <label class="form-label" for="gender_"> Gender :- </label>
                <input class="form-check-input" type="radio" name="gender_" id="gender_" value="Male"
                   onChange={(e)=>dispatch({type: 'update', data: {name:"gender_",value:e.target.value,touched: true, valid:true, error:""} })}/> Male
                
                <input class="form-check-input" type="radio" name="gender_" id="gender_" value="Female"
                    onChange={(e)=>dispatch({type: 'update', data: {name:"gender_",value:e.target.value,touched: true, valid:true, error:""} })}/> Female
                  
                    
            </div>

            <div class="mb-3">
                <label for="qualification_" class="form-label">Qualification_ :</label>
                <select style={{width:200}}  onChange={(e)=>dispatch({type: 'update', data: {name:"qualification_",value:e.target.value,touched: true, valid:true, error:""} })}>
                        <option value="select">Select</option>
                        <option value="MD">MD</option>
                        <option value="DNB">DNB</option>
                        <option value="MBBS">MBBS</option>
                        <option value="MDS">MDS</option>
                        <option value="BDS">BDS</option>
                        <option value="BHMS">BHMS</option>
                        <option value="BAMS">BAMS</option>
                </select>
                </div>
                <div class="mb-3">
                <label for="description_" class="form-label">Description:</label>
                <input type="textarea" class="form-control" id="description_" placeholder="Enter description..."  name="description_" value={info.description_.value}
            
                onChange={(e)=>handleChange("description_",e.target.value)}/>
                <div className="error-msg"> {info.description_.error}</div> 
                
                </div>
                <div class="mb-3">
                <label for="address_" class="form-label">Addres:</label>
                <input type="text" class="form-control" id="address_" placeholder="Enter Address..."  name="address_" value={info.address_.value}
            
                onChange={(e)=>handleChange("address_",e.target.value)}/>
                <div className="error-msg"> {info.address_.error}</div> 
                
                </div>

                <div class="mb-3">
                <label for="location_id_" class="form-label">Area :</label>
                <select style={{width:200}}  onChange={(e)=>dispatch({type: 'update', data: {name:"location_id_",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}>
                        <option value="select">Select Area</option>
                        <option value="1">Pimpri-Chinchwad</option>
                        <option value="2">Viman Nagar</option>
                        <option value="3">Baner</option>
                        <option value="4">Koregoan Park</option>
                        <option value="5">Hadapsar</option>
                        <option value="6">Kothrud</option>
                        <option value="7">kharadi</option>
                        <option value="8">Hinjewadi</option>
                        <option value="9">Shivaji Nagar</option>
                        <option value="10">Deccan</option>
                </select>
                </div>


            <div class="mb-3">
                <label for="experience_" class="form-label">Experience:</label>
                <input type="number" class="form-control" id="email_" placeholder="Enter experience_..."  name="experience_" value={info.experience_.value}
                 
                 onChange={(e)=>handleChange("experience_",e.target.value)}/>
                 <div className="error-msg"> {info.experience_.error}</div> 
            </div>

          
                 
            <div class="mb-3">
                <label for="specialities_id_" class="form-label">Sepcialization :</label>
                <select style={{width:200}}   onChange={(e)=>dispatch({type: 'update', data: {name:"specialities_id_",value:e.target.value,touched: true, valid:true, error:""} })}>
                        <option value="select">Select Sepciality</option>
                        <option value="1">Dermatology</option>
                        <option value="2">Cardiology</option>
                        <option value="3">Neurology</option>
                        <option value="4">Orthopedics</option>
                        <option value="5">gynaecology</option>
                        <option value="6">Oncologist</option>
                        <option value="7">Gastroenterologist</option>
                        <option value="8">Pediatrics</option>
               
                        <option value="9">Radiology</option>
                        
                        <option value="10">Endocrinologists</option>
               
               
                </select>
                </div>

            <div class="mb-3">
                <label for="password_" class="form-label">Password.:</label>
                <input type="password" class="form-control" id="password_" placeholder="Enter password_"  name="password_" value={info.password_.value}
                 
                 onChange={(e)=>handleChange("password_",e.target.value)}/>
                 <div className="error-msg"> {info.password_.error}</div> 
            </div>

            <div class="mb-3">
                 <label for="cpassword_" class="form-label">Confirm Password.:</label>
                <input type="password"  class="form-control" id="cpassword_" placeholder="Enter Confirm password_"   name="cpassword_" 
                       
                       
                        onChange={(e)=> handleChange("cpassword_", e.target.value)}
                        onBlur={(e)=> onFocusout("cpassword_", e.target.value)} />

                        <div className="error-msg"> {info.cpassword_.error}</div>  
                                  
                </div>


            <div class="mb-3">
                <label class="form-label" for="question_id_"> Security Question :- </label>
                <select class="form-control" id="question_id_" name="question_id_"
                 onChange={(e)=>dispatch({type: 'update', data: {name:"question_id_",value:e.target.value,touched: true, valid:true, error:""} })} >
                    <option value="0">Select</option>
                    <option value="1">What is your nickname ?</option>
                    <option value="2">What is your native place ?</option>
                    <option value="3">What is your favourite movie ? </option>
                    <option value="4">Who is your favourite actor ? </option>
                    <option value="5">What is your favourite color ? </option>
                </select>
            </div>

            <div class="mb-3">
                <label for="answer_" class="form-label">Answer:</label>
                <input type="text" class="form-control" id="answer_" placeholder="Enter answer_..."  name="answer_" value={info.answer_.value}
                onChange={(e)=>dispatch({type: 'update', data: {name:"answer_",value:e.target.value,touched: true, valid:true} })}/>
            </div>

            
            <button type="submit" class="btn btn-primary" disabled={info.formvalid?false:true} onClick={(e)=>{sendData(e)}}>Submit</button>
            <button type="reset" class="btn btn-primary" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
        </form>
        </div>
                     </div>
                  </div>
                </div>
             </div>
             
          
     <p>{JSON.stringify(info)}</p>
        
        </div>

)
}







