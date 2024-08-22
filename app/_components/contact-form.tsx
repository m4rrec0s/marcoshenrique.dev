import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <Card className="bg-transparent pt-4">
      <CardContent>
        <form action="" className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            exit={{ opacity: 0, y: 10, x: -50 }}
          >
            <Label htmlFor="name">Nome</Label>
            <Input type="text" id="name" className="bg-transparent" required/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ opacity: 0, y: 10, x: -50 }}
          >
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" className="bg-transparent" required/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            exit={{ opacity: 0, y: 10, x: -50 }}
          >
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" className="bg-transparent" required/>
          </motion.div>

          <Button type="submit">Enviar</Button>
        </form>
        
      </CardContent>
    </Card>
  );
};

export default ContactForm;
