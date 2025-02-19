/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ForwardedRef, forwardRef } from "react"
import Image from "next/image"

// Função para buscar os países
const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const data = await response.json()
  return data.map((country: { name: { common: string }; cca2: string, flags: { png: string } }) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flags.png,
  }))
}

const CountryCombobox = forwardRef(
  (
    { value, onChange, onBlur, ...props }: any, // Tipando as propriedades
    ref: ForwardedRef<any>
  ) => {
    const [open, setOpen] = React.useState(false)
    const [countries, setCountries] = React.useState<{ value: string; label: string; flag: string }[]>([])

    React.useEffect(() => {
      const loadCountries = async () => {
        const countries = await fetchCountries()
        setCountries(countries)
      }
      loadCountries()
    }, [])

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            aria-expanded={open}
            className="w-full px-4 py-6 justify-between"
            {...props}
          >
            {countries.find((country) => country.value === value)?.label || "Select country..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={`h-4 w-4 ${value === country.value ? "opacity-100" : "opacity-0"}`}
                    />
                    <Image
                      width={24}
                      height={16}
                      src={country.flag}
                      alt={`Flag of ${country.label}`}
                      className="mr-2"
                    />
                    {country.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)

CountryCombobox.displayName = "CountryCombobox"

export { CountryCombobox }
