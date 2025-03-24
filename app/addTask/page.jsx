"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [topic, setTopic] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!topic || !title || !description){
            alert("Topic, title and description are required");
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/tasks', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ topic, title, description }),
            });

            if (res.ok) {   
                router.push('/');
            } else {
                console.log("Failed");
            }
           
        } catch (error) {
            console.log(Error)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="bg-[#24292F]/40 border border-[#24292F]/50 rounded-xl font-medium px-10 py-3"
                type="text" 
                placeholder="Title" 
            />

            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="bg-[#24292F]/40 border border-[#24292F]/20 rounded-xl font-medium px-10 py-3"
                type="text" 
                placeholder="Description"
            />

            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Topic</button>
        </form>
    );
}