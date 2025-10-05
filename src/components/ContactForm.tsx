export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white text-center px-4">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
      <form className="flex flex-col items-center gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Name" className="w-full p-3 rounded text-gray-900 bg-gray-500" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded text-gray-900 bg-gray-500" />
        <textarea placeholder="Message" className="w-full p-3 rounded text-gray-900 bg-gray-500"></textarea>
        <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition">
          Send
        </button>
      </form>
    </section>
  );
}
