import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/tasks";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {topic, title, description} = await request.json();
    await connectMongoDB();
    await Task.create({ topic, title, description })
    return NextResponse.json({ message: "Task Created" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const tasks = await Task.find();
    return NextResponse.json({ tasks });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Task Deleted"}, { status: 200 })
}