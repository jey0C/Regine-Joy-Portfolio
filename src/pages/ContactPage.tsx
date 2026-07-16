import { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== '';

  return (
    <div className="pt-24 pb-12 w-full min-h-screen flex items-center justify-center bg-brand-burgundy relative overflow-hidden">
      
      {/* Container for the Postcard and the stamps */}
      <div className="w-full max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
        
        {/* Postcard Container */}
        <div className="relative w-full max-w-[800px] shrink-0">
          
          {/* Locket Image */}
          <div className="absolute -top-[10%] -left-[12%] z-20 w-48 md:w-64 pointer-events-none drop-shadow-xl select-none">
             <img src="/images/postcard image.png" alt="Locket" className="w-full h-auto object-contain" />
          </div>

          {/* Postcard Background Outer (Pink) */}
          <div className="bg-[#dfbbc0] rounded-3xl p-3 shadow-2xl relative">
            
            {/* Postcard Background Inner (Cream) */}
            <div className="bg-[#efe7db] rounded-2xl p-8 md:p-12 relative overflow-hidden border border-[#6b1b26]/20 min-h-[500px]">
              
              {/* Decorative inner border - dashed/dotted */}
              <div className="absolute inset-x-3 inset-y-3 rounded-xl pointer-events-none" style={{ border: '1px solid rgba(107, 27, 38, 0.4)' }} />
              
              {/* Header / Title */}
              <div className="absolute top-10 w-full flex flex-col items-center justify-center pointer-events-none z-10 pr-24">
                 <h2 className="font-title text-[#6b1b26] text-5xl md:text-6xl -rotate-2">Postcard</h2>
                 <p className="font-heading text-[#6b1b26] text-xl font-medium tracking-wide mt-1">Regine Moises</p>
              </div>

              {/* Stamp Placeholder */}
              <div className="absolute top-12 right-12 w-20 h-28 border border-[#6b1b26]/60 flex items-center justify-center pointer-events-none z-0">
                 {/* Decorative dots on borders */}
                 {[0, 25, 50, 75, 100].map(pos => (
                   <div key={`t-${pos}`} className="absolute w-1 h-1 bg-[#6b1b26] rounded-full" style={{ left: `${pos}%`, top: 0, transform: 'translate(-50%, -50%)' }} />
                 ))}
                 {[0, 25, 50, 75, 100].map(pos => (
                   <div key={`b-${pos}`} className="absolute w-1 h-1 bg-[#6b1b26] rounded-full" style={{ left: `${pos}%`, bottom: 0, transform: 'translate(-50%, 50%)' }} />
                 ))}
                 {[25, 50, 75].map(pos => (
                   <div key={`l-${pos}`} className="absolute w-1 h-1 bg-[#6b1b26] rounded-full" style={{ top: `${pos}%`, left: 0, transform: 'translate(-50%, -50%)' }} />
                 ))}
                 {[25, 50, 75].map(pos => (
                   <div key={`r-${pos}`} className="absolute w-1 h-1 bg-[#6b1b26] rounded-full" style={{ top: `${pos}%`, right: 0, transform: 'translate(50%, -50%)' }} />
                 ))}
                 
                 <p className="font-comodo text-[#6b1b26]/70 text-center text-[10px] leading-tight px-1 tracking-widest uppercase">
                   PLACE<br/>STAMP<br/>HERE
                 </p>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-32 relative z-10">
                
                {/* Left Side: Handwritten Text & Socials */}
                <div className="flex flex-col justify-center items-center h-full pt-10 text-center relative">
                   <p className="font-playwrite text-[#3c3c3c] text-[17px] md:text-[20px] leading-[1.8] -rotate-[3deg] max-w-[280px]">
                     Want to work with me?<br/>
                     Send me a message or<br/>
                     just say hi! :)
                   </p>

                   <div className="mt-14 flex flex-col items-center">
                     <p className="font-comodo text-[#6b1b26] tracking-widest text-sm mb-4 uppercase font-bold">Let's Connect</p>
                     <div className="flex gap-5 text-[#6b1b26]">
                       <a href="https://www.linkedin.com/in/regine-moises-3633412a1/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                         {/* Using custom square design for Linkedin to match the reference */}
                         <div className="w-8 h-8 rounded text-white bg-[#6b1b26] flex items-center justify-center"><Linkedin className="w-5 h-5 fill-current" /></div>
                       </a>
                       <a href="https://www.facebook.com/regina.moises.98" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                         <div className="w-8 h-8 rounded-full text-white bg-[#6b1b26] flex items-center justify-center"><Facebook className="w-5 h-5 fill-current border-none" /></div>
                       </a>
                       <a href="https://www.instagram.com/its.me.joy28/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity text-[#6b1b26]">
                         <Instagram className="w-9 h-9 border-2 border-transparent p-0.5" strokeWidth={2.5} />
                       </a>
                     </div>
                   </div>
                </div>

                {/* Vertical Divider Line */}
                <div className="hidden md:block absolute left-1/2 top-[10%] bottom-[0%] w-[2px] bg-[#6b1b26] -translate-x-1/2" />

                {/* Right Side: Form */}
                <div className="flex flex-col mt-4 md:pl-6 text-[#6b1b26]">
                  <h3 className="font-heading text-lg mb-4">Address</h3>
                  <form className="space-y-6 font-subheading" onSubmit={async (e) => {
                    e.preventDefault();
                    if (isFormValid) {
                      try {
                        const response = await fetch('/api/contact', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(formData),
                        });
                        
                        if (response.ok) {
                          alert("Message Sent!");
                          setFormData({ name: '', email: '', message: '' });
                        } else {
                          alert("Failed to send message. Please try again later.");
                        }
                      } catch (error) {
                        console.error("Error submitting form:", error);
                        alert("An error occurred. Please try again later.");
                      }
                    }
                  }}>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-[#6b1b26]/30 py-2 text-[#6b1b26] placeholder-[#6b1b26]/70 focus:outline-none focus:border-[#6b1b26]"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="E-Mail"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-[#6b1b26]/30 py-2 text-[#6b1b26] placeholder-[#6b1b26]/70 focus:outline-none focus:border-[#6b1b26]"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-[#6b1b26]/30 py-2 text-[#6b1b26] placeholder-[#6b1b26]/70 focus:outline-none focus:border-[#6b1b26] resize-none"
                      />
                    </div>
                    <div className="pt-2">
                       <button 
                         type="submit"
                         disabled={!isFormValid}
                         className="w-full bg-[#6b1b26] text-[#efe7db] py-3.5 font-sans font-bold text-[13px] tracking-wide hover:bg-[#832734] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                       >
                         Send Message
                       </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Stamps Area */}
        <div className="flex flex-col items-center md:items-start shrink-0 z-20">
           <p className="font-comodo text-white text-[15px] leading-tight mb-8 tracking-widest uppercase text-center md:text-left">
             Pick A Stamp & Drag It<br/>On The Post Card
           </p>

           <div className="grid grid-cols-2 gap-x-6 gap-y-8 pl-0 md:pl-2">
              <motion.img 
                drag
                dragConstraints={{ left: -1000, right: 100, top: -500, bottom: 500 }}
                dragElastic={0.1}
                dragMomentum={false}
                whileDrag={{ scale: 1.1, zIndex: 50, rotate: 5 }}
                src="/images/postcard_sticker3.png" 
                alt="Stamp 3" 
                className="w-24 md:w-[110px] h-auto cursor-grab active:cursor-grabbing drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] z-20 relative select-none" 
              />
              <motion.img 
                drag
                dragConstraints={{ left: -1000, right: 100, top: -500, bottom: 500 }}
                dragElastic={0.1}
                dragMomentum={false}
                whileDrag={{ scale: 1.1, zIndex: 50, rotate: -5 }}
                src="/images/postcard_sticker5.png" 
                alt="Stamp 5" 
                className="w-24 md:w-[110px] h-auto cursor-grab active:cursor-grabbing drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] z-20 relative select-none -mt-4 md:-mt-6" 
              />
              <motion.img 
                drag
                dragConstraints={{ left: -1000, right: 100, top: -500, bottom: 500 }}
                dragElastic={0.1}
                dragMomentum={false}
                whileDrag={{ scale: 1.1, zIndex: 50, rotate: 3 }}
                src="/images/postcard_sticker2.png" 
                alt="Stamp 2" 
                className="w-24 md:w-[110px] h-auto cursor-grab active:cursor-grabbing drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] z-20 relative select-none" 
              />
              <motion.img 
                drag
                dragConstraints={{ left: -1000, right: 100, top: -500, bottom: 500 }}
                dragElastic={0.1}
                dragMomentum={false}
                whileDrag={{ scale: 1.1, zIndex: 50, rotate: -8 }}
                src="/images/postcard_sticker1.png" 
                alt="Stamp 1" 
                className="w-24 md:w-[110px] h-auto cursor-grab active:cursor-grabbing drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] z-20 relative select-none mt-2 md:mt-0" 
              />
           </div>
        </div>

      </div>
    </div>
  );
}
