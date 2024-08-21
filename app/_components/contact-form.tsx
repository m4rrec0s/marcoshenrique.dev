import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Envie uma mensagem aqui</CardTitle>
        <CardDescription className="max-w-[80%] text-gray-500">
          Insira algumas informações para poder-mos entrar em contato!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" className="flex flex-col gap-6">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input type="text" id="name" />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" />
          </div>

          <div>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" />
          </div>

          <Button type="submit">Enviar</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
