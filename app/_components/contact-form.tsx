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
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <Card className="bg-transparent pt-4">
      <CardContent>
        <form onSubmit={sendEmail} className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            exit={{ opacity: 0, y: 10, x: -50 }}
          >
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              className="bg-transparent"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ opacity: 0, y: 10, x: -50 }}
          >
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              className="bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            exit={{ opacity: 0, y: 10, x: -50 }}
          >
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              className="bg-transparent"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </motion.div>

          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
