"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";

const formSchema = z.object({
  promptuary: z.string().regex(/^(SC)\\d{6,7}$/).transform((value) => {
    return value.slice(0, 2).toUpperCase() + value.slice(2);
  }),
  password: z.string().min(1, {message: "A senha não pode ser vazia."} ),
});

export function RegisterForm() {

    const { register, handleSubmit } = useForm();
    const { signUp } = useContext(AuthContext)
  
    async function handleSignIn(data) {
      try {
        console.log(data);
        const response = await signUp(data);
        console.log(response);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  
    return (
            <form className="flex flex-1 flex-col space-y-4" onSubmit={handleSubmit(handleSignIn)}>
              <div className="space-y-2">
                <div>
                  <p>Nome</p>
                  <input
                    {...register('name')}
                    id="nane"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                    placeholder="Insira seu nome inteiro..."
                  />
                </div>

                <div>
                  <p>Prontuário</p>
                  <input
                    {...register('promptuary')}
                    id="promptuary"
                    name="promptuary"
                    type="text"
                    autoComplete="promptuary"
                    required
                    className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                    placeholder="Insira seu prontuário..."
                  />
                </div>

                <div>
                    <p>Ocupação</p>
                    <select
                        {...register('role')}
                        id="role"
                        name="role"
                        required
                        className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                    >
                        <option value="ADMIN">Administrador</option>
                        <option value="STUDENT">Estudante</option>
                        <option value="PROFESSOR">Professor</option>
                    </select>
                </div>
                
                <div>
                  <p>Senha</p>
                  <input
                    {...register('password')}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                    placeholder="Insira sua senha..."
                  />
                </div>
              </div>
    
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  
                  Cadastrar
                </button>
              </div>
            </form>
      )
}