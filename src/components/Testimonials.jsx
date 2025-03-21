import { LinkedinIcon } from "lucide-react";

export default function Testimonials() {
  return (
    <div id="testimonials" className="">
      <section className="bg-white py-16 w-full">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our <br />
            <span className="bg-gradient-to-r from-red-700 via-red-500 to-red-400 text-transparent bg-clip-text">Satisfied Clients Say?</span>
          </h2>

          {/* Subheading */}
          <p className="text-gray-700 tracking-wide max-w-3xl mx-auto mb-8 sm:mb-10">
            {`Real success stories from businesses we've helped grow. Hear firsthand how our expertise in marketing, automation, and technology has transformed their operations, increased efficiency, and driven measurable results.`}
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-xl shadow-lg overflow-hidden relative">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Client"
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-40 text-gray-900 p-4 w-[90%] text-sm rounded-lg shadow-md">
                    <p className="italic text-xs tracking-wide">
                      {`'We have been working with Growth Grid for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and they care about our success.'`}
                    </p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between w-full">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
                    <p className="text-sm text-gray-500">Founder & CEO</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <LinkedinIcon/>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <span key={index} className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-red-600' : 'bg-gray-300'}`} />
            ))}
          </div>

          {/* See All Testimonials Button */}
          <div className="flex justify-center mt-6">
            <button className="flex items-center gap-2 px-7 py-2 border-2 border-red-500 rounded-full text-black-500 font-bold hover:bg-red-500 hover:text-white transition-all relative">
              <span className="text-md">See all Testimonials</span>
              <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-l from-red-600 to-red-400 text-white rounded-full">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
