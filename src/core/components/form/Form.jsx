import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import Alert from 'react-bootstrap/Alert';
import { UseForm } from '../../../../hooks/UseForm';


const Form = () => {

    const {formState, onInputChange} = UseForm({
        user_name:"name",
        phone_number:"123456",
        user_email:"ejm@google.com"
    
    })

    const {user_name, phone_number, user_email} = formState
    // const [error, setError] = useState(false)

    // const validationForm = () =>{
      
    //   // console.log(e.target.name)

    //   if (formState === null || formState === "") {
    //     setError(true)
    //   }
    // }

    const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_8lu6llw', 'template_r5qub8o', form.current, 'Sv1FponG5Anp4MxYU')
          .then((result) => {
              console.log("RUESULTADO EXITOSO",result.text);
          }, (error) => {
            
            console.log("ERROR",error.text);
          });
          // validationForm()
          e.target.reset() //de esta manera limpiamos el formulario 
      };

    
  return (
    <div className='form mt-2'> 
          <form ref={form} onSubmit={sendEmail} >
          <label for="formGroupExampleInput2" className="form-label">Services</label>
          <select className="form-select" aria-label="Default select example" name='service'>
            <option selected>Select a service</option>,.
            <option value="Hail / Dent Repair">Hail / Dent Repair</option>
            <option value="Detailing">Detailing</option>
            <option value="Ceramic Coatings (Ceramic Pro)">Ceramic Coatings (Ceramic Pro)</option>
            <option value="Paint Correction">Paint Correction</option>
            <option value="Window Tinting">Window Tinting</option>
            <option value="Vehicle Restoration">Vehicle Restoration</option>
          </select>

          <div style={{width:"100%", display:"flex", flexWrap:"wrap"}}> 
            <div className="mb-3 makeYear">
              <label for="formGroupExampleInput" className="form-label">Make</label>
              <input type="text" className="form-control" id="make" placeholder="Make" name='make'/>
            </div>

            <div className="mb-3 makeYear" >
              <label for="formGroupExampleInput" className="form-label">Year</label>
              <input type="number" className="form-control" id="year" placeholder="year" name='year'/>
            </div>
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">Model</label>
            <input type="text" className="form-control" id="model" placeholder="Model"name='model'/>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" name="user_email" className="form-control" id="email" placeholder="name@example.com" onChange={onInputChange}/>
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Phone number</label>
            <input type="number" name="phone_number" className="form-control" id="phone" placeholder="Phone number" onChange={onInputChange}/>
          </div>

          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Full name</label>
            <input type="text" name="user_name" className="form-control" id="name" placeholder="Full name" onChange={onInputChange}/>
          </div>

          {/* <div className="mb-3">
            <label for="formFile" className="form-label">Policy Card Image Upload</label>
            <input className="form-control" type="file" id="formFile" name="messaage"/>
          </div> */}

          {/* <div className="mb-3">
            <label for="formFile" className="form-label">Insurance Estimate Image/PDF Upload</label>
            <input className="form-control" type="file" id="formFile" name="messaage"/>
          </div> */}

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Describe the damage</label>
            <textarea className="form-control" id="damage" rows="3" name="message"></textarea>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
            <label className="form-check-label" for="flexCheckIndeterminate">
                I consent to receiving calls & text messages from Collision Center & PDR regarding the service for my vehicle.
            </label>
          </div>

          <button type="submit" value="Send" className="btn btn-secondary btn-lg">Send</button>

        </form>

        </div>
  )
}

export default Form