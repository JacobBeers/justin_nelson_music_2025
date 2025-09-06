import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


export default function Contact() {
    
//   async function handleOnSubmit(e) {
//     e.preventDefault();
//     const formData = {}
//     Array.from(e.currentTarget.elements).forEach(field => {
//       if ( !field.name ) return;
//       formData[field.name] = field.value;
//     });
//     fetch('/api/mail', {
//       method: 'post',
//       body: JSON.stringify(formData)
//     })
//     console.log(formData);
    
//   }
  
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
});

const [formSuccess, setFormSuccess] = useState(false)
const [formSuccessMessage, setFormSuccessMessage] = useState("")

const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
        ...prevState,
        [fieldName]: fieldValue
    }));
}

const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()
  
    const formURL = e.target.action
    const data = new FormData()
  
    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })
  
    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then(() => {
      setFormData({ 
        name: "", 
        email: "", 
        message: "" 
      })
      setFormSuccess(true)
      setFormSuccessMessage(data.submission_text)
    })
  }
  
  
  
  
  return (
      
        <main className={styles.main}>
        
      
        {formSuccess ? <h1 className = {styles.title}>Thanks for your submission.</h1>
        
        : <h1 className={styles.title}>
          Get in touch with us.
        </h1>}

        <div className={styles.gridForm}>
          <form method="POST"  action="https://formspree.io/f/xaygwozq" onSubmit={submitForm}>
            <p>
              <label className={styles.labelStyles} htmlFor="name">Name</label>
              <input type="text" name="name" onChange={handleInput} value={formData.name} className={styles.contactInputs}/>
            </p>
            <p>
              <label className={styles.labelStyles} htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleInput} value={formData.email} className={styles.contactInputs}/>
            </p>
            <p>
              <label className={styles.labelStyles} htmlFor="message">Message</label>
              <textarea name="message" onChange={handleInput} value={formData.message} className={styles.contactInputsMessage}/>
            </p>
            <button className={styles.buttonStyles}>Submit</button>
          </form>
        </div>

        

   

      </main>
      
    );
};