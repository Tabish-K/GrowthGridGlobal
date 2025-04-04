import React from 'react'

function page() {
    // const approachNavLinks = [
    //     { id: "services", label: "Our Services" },
    //     { id: "team", label: "Our Expert Team" },
    //     { id: "tech-stack", label: "Tech Stack" },
    // ];
    
    return (
        <main>
            {/* Hero Section */}
            <div 
                id="hero"
                className="min-h-[20rem] w-full md:h-[22rem] bg-cover bg-center flex justify-start items-center relative"
                style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1638864616275-9f0b291a2eb6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                }}
            >
                <div className="absolute inset-0 bg-black/20" />
                <div className="max-w-7xl relative mt-12 right-0 left-0 mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl mx-4 md:mx-6 font-bold bg-gradient-to-r from-white drop-shadow-2xl to-transparent text-transparent bg-clip-text">Leadership</h1>
                </div>
            </div>

                {/* why-us */}
                <section id='services'>
                    <div className='h-[80dvh] w-full bg-white'>
                        <h1 className='text-6xl font-semibold text-[#CC0012] drop-shadow-2xl'>Our Services</h1>
                    </div>
                </section>

                {/* partenership */}
                <section id='team'>
                    <div className='h-[80dvh] w-full bg-[#CC0012]'>
                        <h1 className='text-6xl font-semibold text-white drop-shadow-2xl'>Our Expert Team</h1>
                    </div>
                </section>

                {/* approach */}
                <section id='tech-stack'>
                    <div className='h-[80dvh] w-full bg-white'>
                        <h1 className='text-6xl font-semibold text-[#CC0012] drop-shadow-2xl'>Tech Stack</h1>
                    </div>
                </section>
            </main>
    )
}

export default page
