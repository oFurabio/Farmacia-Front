function Navbar() {

    return (
        <>
            <div className="flex bg-gray-200 justify-evenly items-center text-sm">
                <div className="flex gap-3 p-2 font-bold">
                    <p className="cursor-pointer hover:underline">FAQ</p>
                    <p>|</p>
                    <p className="cursor-pointer hover:underline">Fale com o Flávio</p>
                    <p>|</p>
                    <p className="cursor-pointer hover:underline">Atendimento por E-mail</p>
                    <p>|</p>
                    <p className="cursor-pointer hover:underline">Nossas Lojas</p>
                    <p>|</p>
                    <p className="cursor-pointer hover:underline">Acompanhe seu pedido</p>
                </div>
                <div className="py-1 flex flex-col items-center text-xs">
                    <div className="flex">
                        <p className="font-bold">
                            *Você está vendo os preços de SP.&#160;
                        </p>
                        <p className="cursor-pointer font-bold underline">
                            Clique Aqui
                        </p>
                        <p className="font-bold">
                            &#160;para alterar.
                        </p>
                    </div>
                    <p>
                        ATENÇÃO: Os preços podem variar por estado.
                    </p>
                </div>
            </div>
            <div className="w-full bg-white text-white flex justify-center py-4">
                <div className="container flex justify-between text-lg items-center">
                    <h1 className="text-red-600 font-bold text-5xl">flaviofarma</h1>
                    <h1 className="text-black font-bold text-md">____________________________________________________________________________</h1>
                    <h1 className="text-black font-bold text-md">Cadastre-se | Login</h1>
                    <h1 className="text-black font-bold text-md">R$ 0,00</h1>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar