"use client";
import { useMutation } from "@/app/liveblocks.config";
import { LiveObject } from "@liveblocks/client";
import { FormEvent } from "react";
import uniqid from "uniqid";

export default function NewColumnForm() {
  const addColumn = useMutation(({ storage }, columnName) => {
    const columns = storage.get("columns").push(
      new LiveObject({
        name: columnName,
        id: uniqid.time(),
        index: 0,
      })
    );
  }, []);
  function handleNewColumn(ev: FormEvent) {
    ev.preventDefault();
    const input = (ev.target as HTMLFormElement).querySelector("input");
    if (input) {
      const columnName = input?.value;
      addColumn(columnName);
      input.value = "";
    }
  }

  return (
    <form onSubmit={handleNewColumn} className="max-w-xs">
      <label className="block mb-2">
        <span className="text-gray-600 block">Ονομα Στηλης</span>
      </label>
      <input type="text" placeholder="νεα στηλη" />
      <button type="submit" className="mt-2 block w-full ">
        Νεα Στηλη
      </button>
    </form>
  );
}
