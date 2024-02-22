"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useAddComment } from "@/hooks/commentHooks/useAddComment";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

const FormSchema = z.object({
  content: z.string().min(2, "Content must be at least 2 characters."),
});

export function InputForm({ companyId }: { companyId: string }) {
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: "",
    },
  });

  const { mutateAsync } = useAddComment();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!session?.user.id) return console.log("User not logged in");
    await mutateAsync({
      companyId,
      userId: session?.user.id,
      content: data.content,
    });
    //refresh page
    window.location.reload();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="eg interesting ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#2c54ea]" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

{
  /*




"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddComment } from "@/hooks/commentHooks/useAddComment";

const FormSchema = z.object({
  content: z.string().min(60, {
    message: "Content must be at least 60 characters.",
  }),
});

export function InputForm({ companyId }: { companyId: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
     useAddComment(companyId, data.content);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="eg interesting ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#2c54ea]" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}





*/
}
