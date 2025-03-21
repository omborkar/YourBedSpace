import React, { useState } from "react";

const PostBedSpace = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bed Space Posted:", { name, location, price, description, whatsapp });
    alert("Your bed space has been posted!");
    setName("");
    setLocation("");
    setPrice("");
    setDescription("");
    setWhatsapp("");
  };

  return (
    <div className="container mx-auto p-6 max-w-lg mt-10">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Post Your Bed Space</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-lg font-medium">Name of Bed Space:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mt-2 bg-transparent focus:outline-none"
            placeholder="Enter bed space name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-lg font-medium">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 mt-2 bg-transparent focus:outline-none"
            placeholder="Enter location"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-lg font-medium">Price (per month):</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 mt-2 bg-transparent focus:outline-none"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-lg font-medium">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mt-2 bg-transparent focus:outline-none"
            placeholder="Enter a description of your bed space"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="whatsapp" className="block text-gray-700 text-lg font-medium">WhatsApp Number:</label>
          <input
            type="text"
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full p-3 mt-2 bg-transparent focus:outline-none"
            placeholder="Enter your WhatsApp number"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 focus:outline-none"
        >
          Post Bed Space
        </button>
      </form>
    </div>
  );
};

export default PostBedSpace;
