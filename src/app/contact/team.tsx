const team = [
    {
        name: "Arpit Yadav",
        role: "Frontend Engineer Intern",
        image: "https://i.pravatar.cc/300?img=56",
        quote: "Loves clean UI and memes.",
    },
    {
        name: "Riya Sharma",
        role: "Backend Engineer",
        image: "https://i.pravatar.cc/300?img=24",
        quote: "Can turn coffee into code.",
    },
    {
        name: "Ajay Krishna",
        role: "UI Designer",
        image: "https://i.pravatar.cc/300?img=3",
        quote: "Design less, deliver more.",
    },
    {
        name: "Kabir Mehra",
        role: "AI Chatbot Lead",
        image: "https://i.pravatar.cc/300?img=12",
        quote: "Chatbots are my spirit animal.",
    },
];

export default function TeamSection() {
    return (
        <section className="py-12">
        <h2 className="text-3xl font-bold text-center font-poppins mb-10">Meet the Team</h2>
        <div className="flex gap-6 overflow-x-auto p-4 scrollbar-hide">
            {team.map((member, idx) => (
            <div
                key={idx}
                className="min-w-[250px] bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
                <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center font-poppins">{member.name}</h3>
                <p className="text-sm text-gray-600 text-center font-afacad">{member.role}</p>
                <p className="mt-3 text-sm italic text-gray-500 text-center font-afacad">
                {member.quote}
                </p>
            </div>
            ))}
        </div>
        </section>
    );
}
