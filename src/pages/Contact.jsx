import React from "react";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <Form method="post" className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Message:</label>
          <input
            name="message"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
        >
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default Contact;
