"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CountryCombobox } from "../ui/country-combobox"

const formSchema = z.object({
  email: z.string().email(),
  address: z.object({
    country: z.string(),
    state: z.string(),
    city: z.string(),
    zip_code: z.string().regex(/^\d+$/, "Apenas números são permitidos para o CEP."),
    line_1: z.string().regex(
      /^(\d+)\s*,\s*(.*)\s*,\s*(.*)$/,
      "Campo 'Line 1' deve seguir o formato: Número, Rua, Bairro"
    ),
    line_2: z.string().optional(),
  })
})

export const UserPayment: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: {
        country: "BR",
      }
    }
  })

  const { control } = form
  // 2. Define a função de envio do formulário.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Faça algo com os valores do formulário.
    // ✅ Isso será seguro em termos de tipo e validado.
    console.log(values)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-10">
            <h2 className="text-xl font-bold">Contato</h2>
            <FormField
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite seu e-mail" className="w-full px-4 py-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold">Endereço de Cobrança</h2>
            <FormField
              name="address.country"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>País</FormLabel>
                  <FormControl>
                    <div>
                      <CountryCombobox {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="address.line_1"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linha 1 (Rua, Número, Bairro)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite o endereço linha 1" className="w-full px-4 py-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="address.line_2"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linha 2 (Complemento, Referências)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite o endereço linha 2 (opcional)" className="w-full px-4 py-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-3 gap-3.5">
              <FormField
                name="address.state"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite o estado" className="w-full px-4 py-6" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="address.city"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite a cidade" className="w-full px-4 py-6" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="address.zip_code"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CEP</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite o CEP" className="w-full px-4 py-6" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button className="mt-10 bg-green-400 font-bold" type="submit">Ir para o pagamento</Button>
        </form>
      </Form>
    </div>
  )
}
