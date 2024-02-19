"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  promptuary: z.string().regex(/^(SC)\\d{6,7}$/).transform((value) => {
    return value.slice(0, 2).toUpperCase() + value.slice(2);
  }),
  password: z.string().nonempty("A senha não pode ser vazia"),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function login(values: z.infer<typeof formSchema>) {
    if (values) {
      toast.success("Login efetuado com sucesso!", {
        dismissible: true,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(login)}
        className="flex flex-1 flex-col space-y-4"
      >
        <FormField
          control={form.control}
          name="promptuary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prontuário</FormLabel>
              <FormControl>
                <Input placeholder="Digite o seu prontuário..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite sua senha..."
                  {...field}
                  type="password"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center gap-6">
          <Button
            type="reset"
            className="flex flex-1"
            variant="destructive"
            asChild
          >
            <Link href="/">Voltar</Link>
          </Button>
          <Button type="submit" className="flex flex-1" asChild>
            <Link href="/home">Salvar</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
