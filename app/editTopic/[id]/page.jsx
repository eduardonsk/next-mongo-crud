import EditTopicForm from "@/components/EditTaskForm";

const getTaskById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: 'no-store',
        });

        if(!res.ok) {
            throw new Error("Failed to fetch task");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}


export default async function EditTask({ params }) {
    const { id } = params;
    const task = await getTaskById(id);
    const { topic, title, description } = task;
    return (
        <EditTopicForm id={id} topic={topic} title={title} description={description} />
    );
}