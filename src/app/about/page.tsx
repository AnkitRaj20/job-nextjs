import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />
        </div>
      </div>

      <div className="md:pt-8">
        <p className="text-center font-bold text-indigo-500 md:text-left">Who we are</p>

        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">About Us</h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        Looking for the perfect job? Your search ends here, India's largest and fastest-growing job opportunities platform. Trusted by over 5 crore job seekers.<br /><br />

          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, impedit. Rem iusto tempore tempora nobis nostrum, consequatur ipsum. Mollitia, ea inventore. Perferendis blanditiis quam quos architecto? Quod eveniet dolorem corporis.<a href="#" className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a> or Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, sunt!
        </p>

        {/* <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">About us</h2>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p> */}
      </div>
    </div>
  </div>
</div>

<section className="py-6 px-10 ml-16 rounded-lg mr-16 bg-indigo-500 text-gray-900">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
		<h1 className="text-3xl font-semibold leadi text-center lg:text-left text-white">Any Question?</h1>
        <a href="../contact/">
		<button className="px-8 py-3 text-lg font-semibold rounded bg-white ">Contact</button></a>
	</div>
</section>
<Footer />
    </div>
  )
}

export default page