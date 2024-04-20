import { useState } from "react";
import { toast } from "react-toastify";
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

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    textarea: "",
    isVis: true,
    mode: "",
    favCar: "",
  });
  function changeHandle(event) {
    console.log(form);
    const { name, value, checked, type } = event.target;
    setForm((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("after submitting");
    console.log(form);
    setForm({ name: "", email: "", subject: "", textarea: "" });
    toast.success("Form Submitted");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputName">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          id="nameArea"
          onChange={changeHandle}
          value={form.name}
          required
        />
        <input
          type="text"
          placeholder="Your email"
          name="email"
          id="emailArea"
          onChange={changeHandle}
          value={form.email}
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
          value={form.subject}
          required
        />
      </div>
      <div className="inputName">
        <textarea
          name="textarea"
          id="textArea"
          rows={6}
          placeholder="Write your message"
          onChange={changeHandle}
          value={form.textarea}
          required
        ></textarea>
      </div>
      <button className="subBtn cardBtn">Send Message</button>
    </form>
  );
}
