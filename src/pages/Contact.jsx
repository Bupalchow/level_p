import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-0">
      {/* Main Section with Map and Form */}
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-16 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="flex flex-wrap -mx-4 justify-center">
            {/* Map */}
            {/* <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
            >
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  title="LVL UP Design Studio Location" 
                  marginHeight="0" 
                  marginWidth="0" 
                  scrolling="no" 
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Lvl+Up+Design+Studio,5M,East+of+NGEF+Layout,Kasturi+Nagar,Bengaluru,Karnataka+560016,India"
                ></iframe>
              </div>
            </motion.div> */}
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full md:w-1/2 px-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm h-[400px] overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={4}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full text-white bg-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-primary/10 text-primary rounded-md"
                    >
                      Thank you for your message! We'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Info Blocks Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Contact Information</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Our Office</h3>
              <p className="text-gray-600">
              5M, East of NGEF Layout, Kasturi Nagar,<br/> Bengaluru, Karnataka 
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Email</h3>
              <p className="text-gray-600">
              admin@lvlupdesignstudio.com
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Phone</h3>
              <p className="text-gray-600">
              +91 7019792265
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Working Hours</h3>
              <p className="text-gray-600">
                Mon-Fri: 9:00 AM - 6:00 PM<br/>
                Sat: 10:00 AM - 2:00 PM<br/>
                Sun: Closed
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
