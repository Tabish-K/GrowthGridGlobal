import { Building2, Users, Brain, Trophy, Heart } from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote / San Francisco",
      type: "Full-time"
    },
    {
      title: "Digital Marketing Strategist",
      department: "Marketing",
      location: "Remote / London",
      type: "Full-time"
    }
  ];

  const values = [
    { icon: Brain, title: "Innovation", description: "We pioneer new ways to solve old problems using AI and data." },
    { icon: Trophy, title: "Excellence", description: "We set high standards and continuously strive to surpass them." },
    { icon: Building2, title: "Integrity", description: "We build trust through transparency, honesty, and ethical practices." },
    { icon: Users, title: "Collaboration", description: "We believe that the best ideas come from diverse teams working together." },
    { icon: Heart, title: "Empathy", description: "We care about our clients, our colleagues, and our community." }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div 
        className="min-h-[20rem] md:h-[22rem] bg-cover bg-center flex justify-start items-center px-4 md:px-8 lg:px-16 relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1638864616271-04a85f133205?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        <div className="relative z-10 w-full max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Join the Growth Grid Team
          </h1>
          <p className="text-xl text-white/90">
            Where Innovation Meets Opportunity
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Growth Grid, we're not just building AI-powered solutions—we're reimagining the future of business. Our team of digital architects, data scientists, creative strategists, and technology enthusiasts is on a mission to empower businesses with breakthrough automation, predictive analytics, and transformative digital strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <value.icon className="w-8 h-8 text-[#CC0000] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perks & Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Competitive Compensation",
              "Comprehensive Healthcare",
              "Flexible Work Arrangements",
              "Professional Development",
              "Mental Health Support",
              "Team Events & Activities"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-[#CC0000] rounded-full mr-3" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Open Positions
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {openPositions.map((position, index) => (
            <div 
              key={index} 
              className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200 flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6"
            >
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-semibold">
                  {position.title}
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-4 text-sm text-gray-600">
                  <span>{position.department}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{position.location}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{position.type}</span>
                </div>
              </div>
              
              {/* <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-full md:w-auto">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default CareersPage;