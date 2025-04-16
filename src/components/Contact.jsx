import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <section id="contact" className="p-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 border rounded"
        />
        <Button type="submit" className="w-full">
          Send
        </Button>
      </form>
      <div className="mt-4">
        <p>Or reach out via:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-500">
            LinkedIn
          </a>
          <a href="#" className="text-blue-400">
            Twitter
          </a>
          <a href="#" className="text-pink-600">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
