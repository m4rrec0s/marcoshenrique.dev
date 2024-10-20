import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_9imxb9n",
        "template_xzh95cr",
        templateParams,
        "SwASm4lOIMWCS8BU-"
      )
      .then(
        (response) => {
          toast("Message sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          toast("Failed to send message: " + err);
        }
      );
  };

  return (
    <div className="w-full max-w-[700px] mt-6 px-5">
      <form onSubmit={sendEmail} className="flex flex-col gap-6 justify-end">
        <div className="flex justify-between gap-6 max-md:flex-col">
          <div className="w-full">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              className="bg-transparent"
              placeholder="Michael Scott"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="w-full">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              className="bg-transparent"
              placeholder="michael@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            className="bg-transparent"
            placeholder="Hello, I would like to talk to you about..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
        </div>

        <div className="w-full flex justify-end">
          <Button type="submit" className="w-fit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
