function Home() {
    return (
        <>
            <div className="bg-red-100 flex justify-center mt-8">
                <div className='container grid grid-cols-2 '>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Farmácia flaviofarma
                        </h2>
                        <p className='text-xl'>
                            Compre aqui remédios e produtos de higiene
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded border-red-500 border-solid border-2 py-2 px-4'>
                                Ver produtos
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://play-lh.googleusercontent.com/2prl4Lzt_8Jp0J5j39glDPH2JbG0qrgyY9g8cfjmWV5pgqaCSvGQcNiFI1OV4wffZA8"
                            alt="Imagem Página Home"
                            className=''
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home