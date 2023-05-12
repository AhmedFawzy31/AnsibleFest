import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { ClipLoader } from "react-spinners";
const EventForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    timeZone: "",
    title: "",
    type: "",
    proficiency: "",
    topics: "",
    link: "",
    description: "",
    room: "",
  });
  const eventsRef = collection(db, "events");
  const addNewEvent = useMutation({
    mutationFn: async () => {
      const topics = formData.topics.split(",");
      const newEvent = { ...formData, topics: topics };
      await addDoc(eventsRef, newEvent);
    },
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewEvent.mutate();
  };

  return (
    <div className="flex-grow mt-[55px] px-[25px] text-light">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg flex flex-col gap-4"
        >
          <div className="grid gap-3 grid-cols-5">
            <div>
              <label
                htmlFor="date"
                className="block text-gray-400 font-semibold mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
                placeholder="YYYY-MM-DD"
              />
            </div>
            <div>
              <label
                htmlFor="startTime"
                className="block text-gray-400 font-semibold mb-2"
              >
                Start Time
              </label>
              <input
                type="text"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
                placeholder="HH:MM AM/PM"
              />
            </div>
            <div>
              <label
                htmlFor="endTime"
                className="block text-gray-400 font-semibold mb-2"
              >
                End Time
              </label>
              <input
                type="text"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
                placeholder="HH:MM AM/PM"
              />
            </div>
            <div>
              <label
                htmlFor="timeZone"
                className="block text-gray-400 font-semibold mb-2"
              >
                Time Zone
              </label>
              <input
                type="text"
                id="timeZone"
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
                className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
                placeholder="EDT"
              />
            </div>
            <div>
              <label
                htmlFor="room"
                className="block text-gray-400 font-semibold mb-2"
              >
                Room
              </label>
              <input
                type="text"
                id="room"
                name="room"
                value={formData.room}
                onChange={handleChange}
                className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
                placeholder="207"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-1">
              <label
                htmlFor="type"
                className="block text-gray-400 font-semibold mb-2"
              >
                Type
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
                placeholder="Workshop"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="proficiency"
                className="block text-gray-400 font-semibold mb-2"
              >
                Proficiency
              </label>
              <input
                type="text"
                id="proficiency"
                name="proficiency"
                value={formData.proficiency}
                onChange={handleChange}
                className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
                placeholder="Intermediate"
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="title"
                className="block text-gray-400 font-semibold mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
                placeholder="Introduction to automation controller"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="topics"
              className="block text-gray-400 font-semibold mb-2"
            >
              Topics
            </label>
            <input
              type="text"
              id="topics"
              name="topics"
              value={formData.topics}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
              placeholder="Automation,Ansible,Red Hat"
            />
          </div>
          <div>
            <label
              htmlFor="link"
              className="block text-gray-400 font-semibold mb-2"
            >
              Link
            </label>
            <input
              type="text"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
              placeholder="https://events.experiences.redhat.com/widget/redhat/sum23/SessionCatalog2023/session/1673034155591001BQqj"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-400 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-gray-700 text-gray-200 rounded p-2 mb-4 w-full"
              placeholder="If you’re new to Red Hat Ansible Automation Platform, this workshop follows the Writing your first Ansible Playbook workshop and can help you apply what you’ve learned to implement automation controller in enterprise use cases. In this workshop, you will get started on automation controller and learn to understand: Inventory and credential management, Projects, Job templates, Surveys, Workflows, and more. Please bring your own laptop to this workshop."
              rows={4}
            />
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-teal text-black py-2 px-4 rounded mr-4"
            >
              Submit
            </button>
            {addNewEvent.isLoading && <ClipLoader color="#5BBEC0"></ClipLoader>}
            {addNewEvent.isSuccess && <p className="text-teal">Record added</p>}
            {addNewEvent.isError && (
              <p className="text-[#dc2626]">Error occured</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
