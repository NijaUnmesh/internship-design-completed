import { Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <section className="px-50 blog">
    <footer className="bg-[#111216] text-white px-20 py-16 rounded-t-[40px]">

     
      <div className="flex items-center justify-between mb-12">

       
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white clip-star"></div>
          <h2 className="text-xl font-bold">Positivus</h2>
        </div>


        <nav className="flex gap-10 text-sm">
          <a href="#" className="hover:text-lime-300">About us</a>
          <a href="#" className="hover:text-lime-300">Services</a>
          <a href="#" className="hover:text-lime-300">Use Cases</a>
          <a href="#" className="hover:text-lime-300">Pricing</a>
          <a href="#" className="hover:text-lime-300">Blog</a>
        </nav>

      
        <div className="flex items-center gap-6 text-white">
          <Linkedin className="hover:text-lime-300 cursor-pointer" size={20} />
          <Facebook className="hover:text-lime-300 cursor-pointer" size={20} />
          <Twitter className="hover:text-lime-300 cursor-pointer" size={20} />
        </div>
      </div>


      <div className="flex justify-between items-start bg-[#191A23] p-10 rounded-3xl mb-12">

        <div className="text-sm leading-relaxed">
          <p className="bg-lime-300 text-black px-3 py-1 inline-block rounded-md font-semibold mb-4">
            Contact us:
          </p>

          <p className="mb-3">Email: info@positivus.com</p>
          <p className="mb-3">Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St  
            <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>

    
        <div className="bg-[#111216] p-6 rounded-2xl flex items-center gap-4 w-[380px]">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-3 rounded-xl bg-transparent border border-gray-500 outline-none text-white text-sm"
          />
          <button className="bg-lime-300 text-black px-4 py-3 rounded-xl font-semibold hover:bg-lime-400">
            Subscribe to news
          </button>
        </div>
      </div>

  
      <div className="border-t border-gray-600 pt-6 flex items-center justify-between text-sm text-gray-400">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="hover:text-lime-300">Privacy Policy</a>
      </div>

    </footer>
    </section>
  );
}
