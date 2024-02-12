"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  promptuary: z.string(),
  password: z.string(),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Login efetuado com sucesso!", {
      dismissible: true,
    });
  }

  return (
    <div className="flex flex-1 flex-col space-y-4 h-screen items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-1/3 flex-col space-y-4"
        >
          <FormField
            control={form.control}
            name="promptuary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Promptuary</FormLabel>
                <FormControl>
                  <Input placeholder="Prontuário..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Senha..." {...field} type="password" />
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
            <Button type="submit" className="flex flex-1">
              Início
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
