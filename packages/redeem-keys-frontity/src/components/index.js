import { Global, css, connect, styled, Head } from "frontity";

import '../index.css'
import Nav from "./nav";

const Root = ({state}) => {
    return (
        <>
            <Nav></Nav>
            <main class="flex items-center justify-center py-10">
  <section class="bg-white w-1/2 space-y-3 px-6 py-4 rounded-3xl shadow-lg border flex flex-col">
    <img src="https://tailwindui.com/img/components/home-screens.02-card-layout-with-sidebar-xl.png" class="w-full h-32 object-cover rounded-xl hover:filter hover:brightness-75 transition" />
    <div class="flex justify-between items-center">
      <h3 class="font-semibold">Presentation for MARS company</h3>
      <div class="font-extrabold">...</div>
    </div>
    <ul class="flex space-x-2">
      <li class="bg-blue-400 text-white text-md px-4 rounded-3xl">iOS App</li>
      <li class="bg-green-400 text-white text-md px-4 rounded-3xl">Android</li>
    </ul>
    <div class="text-gray-600 font-light">Request content for presentation from the Product Manager. Get it done by Wednesday so that it can be presented in the meetings with VC capitalists.</div>
    <button class="bg-gray-800 text-white py-1 rounded-2xl">MARK DONE</button>
  </section>
</main>
        </>
    );
};


export default connect(Root);