import React, { useState } from 'react'
import axios from 'axios'
import qs from 'qs'

const ContactComponent = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [comment, setComment] = useState("")

    const inputNameHandler = (e) => {
        setName(e.target.value)
    }
    const inputEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const inputSubjectHandler = (e) => {
        setSubject(e.target.value)
    }
    const inputCommentHandler = (e) => {
        setComment(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()

        axios({
            method: "post",
            url: "http://localhost:3000/contact",
            data: qs.stringify({
              name: name,
              email: email,
              subject: subject,
              comment: comment,
            }),
          }).then((res)=> {
            setName("");
            setEmail("");
            setSubject("");
            setComment("");
            alert("Your message has been send");
          }).catch((err) => {
            console.log(err);
          });
    }
    return (
        <div className="w3-container w3-padding-32" id="contact">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
            <p>Lets get in touch and talk about your next project.</p>
            <form onSubmit={formSubmitHandler}>
                <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" value={name} onChange={inputNameHandler}/>
                <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" value={email} onChange={inputEmailHandler}/>
                <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" value={subject} onChange={inputSubjectHandler}/>
                <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" value={comment} onChange={inputCommentHandler}/>
                <button className="w3-button w3-black w3-section" type="submit">
                    <i className="fa fa-paper-plane" /> SEND MESSAGE
                </button>
            </form>
        </div>
    )
}

export default ContactComponent
