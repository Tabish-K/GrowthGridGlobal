import React from 'react'

function page() {
    const whyUsNavLinks = [
        { id: "study-1", label: "Study 1" },
        { id: "study-2", label: "Study 2" },
        { id: "study-3", label: "Study 3" },
    ];
    
    return (
        <main>
            {/* Hero Section */}
            <div 
                id="hero"
                className="min-h-[20rem] w-full md:h-[22rem] bg-cover bg-center flex justify-start items-center relative"
                style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1689443111025-e3093c108915?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="max-w-7xl relative mt-12 right-0 left-0 mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl mx-4 md:mx-6 font-bold bg-gradient-to-r from-white drop-shadow-2xl to-transparent text-transparent bg-clip-text">Case Study</h1>
                </div>
            </div>

            {/* why-us */}
            <section id='study-1'>
                <div className='h-[80dvh] w-full bg-white'>
                    <h1 className='text-6xl font-semibold text-[#CC0012] drop-shadow-2xl'>STUDY 1</h1>
                </div>
            </section>

            {/* partenership */}
            <section id='study-2'>
                <div className='h-[80dvh] w-full bg-[#CC0012]'>
                    <h1 className='text-6xl font-semibold text-white drop-shadow-2xl'>STUDY 2</h1>
                </div>
            </section>

            {/* approach */}
            <section id='study-3'>
                <div className='h-[80dvh] w-full bg-white'>
                    <h1 className='text-6xl font-semibold text-[#CC0012] drop-shadow-2xl'>STUDY 3</h1>
                </div>
            </section>
        </main>
    )
}

export default page
