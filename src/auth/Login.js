import React,{ useState } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} 
from 'mdb-react-ui-kit';
import {FaMicrosoft, FaApple, FaGoogle} from 'react-icons/fa';
import '../Auth.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    let response;
    if(email != "" || password!=""){
      try {
        // Make an API request to your backend
        response = await axios.post('http://localhost:5000/login', {
          email: email,
          password: password,
        });
      
      
        // Display success message
        Swal.fire({
          timer: 3000,
          title: 'Registration!',
          text: response.data.user || 'Login successful', 
          icon: 'success',
        });
        window.location.href = '/start';
      } catch (error) {
        // Display error message
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.response.data.error,
        });
      }
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Empty Form',
        text: "Please Fill the Form",
      });
    }
      
    };
  
  return (
    <> 
    <MDBContainer className="my-5">

      <MDBRow className='main-bac ' >
      <MDBCol col='6' className="mb-5">
        
          <div className="d-flex flex-column  justify-content-center  h-100 mb-4">
          
             
          
       
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
            <h4 className=" mb-2 text-white text-2xl"> Satori</h4>
              <h4 class="mb-4 text-white">We are more than just a company</h4>
              <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Empower Your Business with Satori, FluidIntellect's Cutting-Edge 
                  Generative AI. Drive Innovation, <br/>Enhance 
                   Efficiency,<br/> and Achieve Unprecedented Success. 
                  Explore the  <br/> Future of AI for Business Today!
          </p>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5  mt-5 m-4">
          <div className="d-flex flex-column ms-5">
          <div className="text-center">
             <h4 className="mt-4 mb-5 pb-1 text-white text-2xl">Login</h4>
          </div> 
            <p>Please login to your account</p>


            <MDBInput wrapperClass='mb-4 mt-2' placeholder='Email address' id='form1' type='email' required onChange={(e) => setEmail(e.target.value)}/>
            <MDBInput wrapperClass='mb-4 mt-2' placeholder='Password' id='form2' type='password' required onChange={(e) => setPassword(e.target.value)}/>


            <div className="text-center pt-1 mb-5 pb-1 row">
              <MDBBtn className="mb-4 w-50 text-white " onClick={handleLogin} >
                <Link >Sign In </Link> 
              </MDBBtn>
              <a className=" text-white" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0 text-white">Don't have an account?</p>
              <MDBBtn outline className='mx-2 text-white' >
              <Link to='/signup'>Sign Up</Link> 
              </MDBBtn>
            </div>
            <div className="text-center">

                <p>or sign up with:</p>
                <div className='flex'>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                      <FaMicrosoft size={28}/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                      <FaGoogle size={28}/>
                    </MDBBtn> 
                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                      <FaApple size={28}/>
                    </MDBBtn> 
                </div>
 
              </div>

          </div>

        </MDBCol> 
      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default SignIn;