export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen text-white">
      <div className="container flex">
        <div className="p-10 h-screen md:w-[55.93%]">{children}</div>
        <div className="p-10 h-screen md:w-[44.07%] border-l border-l-gray-600">
          <ul>
            <li className="flex justify-between">
              <div>
                Liderança Positiva
              </div>
              <div>
                R$127,70
              </div>
            </li>
            <li className="flex justify-between">
              <div>
                Gestão Financeira Eficaz
              </div>
              <div>
                R$127,70
              </div>
            </li>
            <li className="flex justify-between">
              <div>
                Expert em Excel
              </div>
              <div>
                R$127,70
              </div>
            </li>
          </ul>
          <div className="mt-10 border-t border-t-gray-600 py-5">
            <div className="flex justify-between mt-5">
              <div className="font-bold">Total</div>
              <div className="font-bold">R$383,10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
