"use client";

import { redirect } from "next/navigation";
import { createBoard } from "../actions/boardActions";

export default function NewBoardPage() {
  async function handleNewBoardSubmit(formData: FormData) {
    const boardName = formData.get("name")?.toString() || "";

    const roomInfo = await createBoard(boardName);
    if (roomInfo) {
      redirect(`/boards/${roomInfo.id}`);
    }
  }
  return (
    <div>
      <form action={handleNewBoardSubmit} className="max-w-xs block">
        <h1 className="text-2xl mb-4">Δημιουργια Νεου Πινακα</h1>
        <input type="text" name="name" placeholder="πινακας" />
        <button type="submit" className="mt-2 w-full">
          Δημιουργια Πινακα
        </button>
      </form>
    </div>
  );
}
