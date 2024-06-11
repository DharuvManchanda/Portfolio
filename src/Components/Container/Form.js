import { useState } from "react";
import { toast } from "react-toastify";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Form() {
  // function changeHandle(event){
  //     setForm(prevData=>{
  //         return {
  //             ...prevData,
  //             [event.target.name]:event.target.value
  //         }
  //     })
  // }
  {
    /* <br />
<br />
<input type="checkbox" checked={form.isVis} name="isVis" onChange={changeHandle} id="isVis" />
<label htmlFor="isVis">Am i checked?</label>
<br />
<br />
<input type="radio" name="mode" id="online" value="online" checked={form.mode==="online"} onChange={changeHandle}/>
<label htmlFor="online">ONline</label> 
  <br />
<br />
<input type="radio" name="mode" id="offline" value="offline" checked={form.mode==="offline"} onChange={changeHandle}/>
<label htmlFor="offline">offline</label>
<br />
<br />
<select name="favCar" id="favCar" value={form.favCar} onChange={changeHandle}>
    <option value="swift">Swift</option>
    <option value="nano">nano</option>
    <option value="thar">Thar</option>
    <option value="verna">varn</option>
</select>
<br /> */
  }
  const [setForm, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [formm, setForm] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   textarea: "",
  //   isVis: true,
  //   mode: "",
  //   favCar: "",
  // });
  function changeHandle(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  // function changeHandle(event) {
  //   console.log(formm);
  //   const { name, value, checked, type } = event.target;
  //   setForm((prevData) => {
  //     return {
  //       ...prevData,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("after submitting");
  //   console.log(form);
  //   setForm({ name: "", email: "", subject: "", textarea: "" });
  //   toast.success("Form Submitted");
  // }

const form = useRef();
    const sendEmail = (e) => {
    const spinToast = toast.loading("Loading", { position: "top-center" });
    e.preventDefault();
    emailjs
      .sendForm("service_13kdy6m", "template_pw8r8vq", form.current, {
        publicKey: "KjQ-oC8LFvSz_wg_p",
      })
      .then(
        () => {
          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
          toast.success("Form Submitted",{ position: "top-center"    
        });
          setMessage(true);
          toast.dismiss(spinToast);
          setTimeout(() => {
            setMessage(false);
          }, 5000);
        },
        (error) => {
          toast.error("Error in submission");
          toast.dismiss(spinToast);
          console.log(error);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="inputName">
        <input
          type="text"
          placeholder="Your name"
          name="from_name"
          id="nameArea"
          onChange={changeHandle}
          value={setForm.from_name}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          name="from_email"
          id="emailArea"
          onChange={changeHandle}
          value={setForm.from_email}
          required
        />
      </div>
      <div className="inputName">
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Your subject"
          onChange={changeHandle}
          value={setForm.subject}
          required
        />
      </div>
      <div className="inputName">
        <textarea
          name="message"
          id="textArea"
          rows={6}
          placeholder="Write your message"
          onChange={changeHandle}
          value={setForm.message}
          required
        ></textarea>
      </div>
      <button className="subBtn cardBtn">
        {message ? "Messsage Sent!" : "Send Message"}
      </button>
    </form>
  );
}
