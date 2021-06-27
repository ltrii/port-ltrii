import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")
    const [status, setstatus] = useState("Idle. Waiting to send email...")

    const send_email = (e) => {
        e.preventDefault();
        setstatus("Sending email...")
        emailjs.send('service_l1scgwa', 'template_8ydffyq', {
            "email": email,
            "subject": subject,
            "message": message
        }, 'user_Nt7Az2NoUhoc2zZGlFBNr')
            .then((result) => {
                console.log(result.text);
                setstatus("Email sent successfully!")
                setemail("")
                setsubject("")
                setmessage("")
            }, (error) => {
                setstatus("Email send failed. My email is lelandtr@gmail.com")
                console.log(error.text);
            });
    }
    return (
        <div id="contact" onSubmit={e => send_email(e)}>
            <p>You can find me on <a href="https://www.linkedin.com/in/leland-rogers/">LinkedIn</a>.</p>
            You may also contact me here:
            <form>
                <label>Your email</label>
                <input value={email} onChange={(e) => setemail(e.target.value)} />
                <label>Subject</label>
                <input value={subject} onChange={(e) => setsubject(e.target.value)} />
                <label>Message</label>
                <textarea value={message} onChange={(e) => setmessage(e.target.value)} />
                <div id="emailstatus">
                    <button>Send</button>
                    <div id="statusdisplay">{status}</div>
                </div>
            </form>
        </div>
    )
}
