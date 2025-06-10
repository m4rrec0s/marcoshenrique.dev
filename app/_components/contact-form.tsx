import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/m4rrec0s",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/marcos-henrique-araujo",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/marcos_henrique_eu",
      color: "hover:text-pink-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:riquecrft@gmail.com",
      color: "hover:text-green-400",
    },
  ];

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    try {
      const response = await emailjs.send(
        "service_9imxb9n",
        "template_xzh95cr",
        templateParams,
        "SwASm4lOIMWCS8BU-"
      );

      toast.success("Mensagem enviada com sucesso!");
      console.log("SUCCESS!", response.status, response.text);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      toast.error("Falha ao enviar mensagem. Tente novamente.");
      console.error("FAILED...", err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Seção de Informações e Redes Sociais */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Links das Redes Sociais */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Conecte-se comigo
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-black/30 ${social.color}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Informações de contato direto */}
          <div className="p-4 rounded-lg bg-gradient-to-r from-[#038C7F]/10 to-indigo-500/10 border border-white/10">
            <p className="text-sm text-gray-300">
              <Mail className="inline h-4 w-4 mr-2" />
              Resposta em até 24 horas
            </p>
          </div>
        </motion.div>

        {/* Formulário de Contato */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-black/20 backdrop-blur-sm border-white/10 shadow-2xl">
            <CardContent className="p-6">
              <form onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-medium">
                      Nome
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 focus:border-[#038C7F] focus:ring-[#038C7F]/20 transition-all duration-300"
                      placeholder="Seu nome completo"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-medium">
                      E-mail
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 focus:border-[#038C7F] focus:ring-[#038C7F]/20 transition-all duration-300"
                      placeholder="seu@email.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-medium">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 focus:border-[#038C7F] focus:ring-[#038C7F]/20 transition-all duration-300 min-h-[120px] resize-none"
                    placeholder="Olá! Gostaria de conversar sobre..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                    disabled={isLoading}
                  />
                </div>

                <motion.div
                  className="flex justify-end"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#038C7F] to-[#A9D9D0] hover:from-[#027366] hover:to-[#98CCC5] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
