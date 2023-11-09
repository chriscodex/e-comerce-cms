'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useStoreModal } from '@/hooks/use-store-modal';
import { Modal } from '@/components/ui/modal';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function StoreModal() {
  const { isOpen, onClose } = useStoreModal();

  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    name: z.string().min(1, {
      message: 'Name is required',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: async (data, context, options) => {
    //   // await zodResolver(formSchema)(data, context, options);
    //   return zodResolver(formSchema)(data, context, options);
    // },
    // resolver: async (data, context, options) => {
    //   console.log('validation result', await zodResolver(formSchema)(data, context, options))
    //   return zodResolver(formSchema)(data, context, options)
    // },
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="E-Comerce"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant={'outline'}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
}
