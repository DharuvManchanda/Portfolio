import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";

const emptyForm = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

export default function Form() {
  const [formData, setFormData] = useState(emptyForm);
  const [message, setMessage] = useState(false);

  function changeHandle(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    const spinToast = toast.loading("Sending...", { position: "top-center" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Error in submission");
      }
      setFormData(emptyForm);
      toast.success("Message sent!", { position: "top-center" });
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 5000);
    } catch (error) {
      toast.error(error.message || "Error in submission", {
        position: "top-center",
      });
      console.log(error);
    } finally {
      toast.dismiss(spinToast);
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="inputName">
        <input
          type="text"
          placeholder="Your name"
          name="from_name"
          id="nameArea"
          onChange={changeHandle}
          value={formData.from_name}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          name="from_email"
          id="emailArea"
          onChange={changeHandle}
          value={formData.from_email}
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
          value={formData.subject}
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
          value={formData.message}
          required
        ></textarea>
      </div>
      <button className="subBtn cardBtn">
        {message ? "Message Sent!" : "Send Message"}
      </button>
    </form>
  );
}
