/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useTodo } from "../context";
import { Button, Input } from "./index";

export const AddTodo = () => {
  const [input, setInput] = useState<any>();
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input) {
      addTodo(input);
      setInput("");
      toast.success("Tarefa adicionada com sucesso!");
    } else {
      toast.error("A tarefa não pode ser vazia!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="Digite algo..."
        />
        <Button label={"Enviar"} type="secondary" />
      </div>
    </form>
  );
};
