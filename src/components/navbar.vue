<template>
  <nav id="header" class="w-full z-50 top-0 py-1">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

            <label for="menu-toggle" class="cursor-pointer md:hidden block">
                <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                        <li><router-link to="/" class="inline-block no-underline hover:text-black hover:underline py-2 px-4" v-bind:class="(Page=='about')?'text-white':'text-black'">Home</router-link></li>
                        <li><router-link to="/all" class="inline-block no-underline hover:text-black hover:underline py-2 px-4" v-bind:class="(Page=='about')?'text-white':'text-black'">All blogs</router-link></li>
                        <li><router-link to="/about" class="inline-block no-underline hover:text-black hover:underline py-2 px-4" v-bind:class="(Page=='about')?'text-white':'text-black'">About</router-link></li>
                    </ul>
                </nav>
            </div>

            <div class="order-1 md:order-2 uppercase font-logo">
                <a class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-xl " v-bind:class="(Page=='about')?'text-white':'text-black'" href="#">
                    <!-- <svg class="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                    </svg> -->
                    <div class="font-logo">
                    Saifullah Tufayel
                    </div>
                </a>
            </div>

            <div class="order-2 md:order-3 flex items-center" id="nav-content" v-bind:class="(Page=='about')?'text-white':'text-blue-500'">
              <a class="inline-block no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" data-tippy-content="@twitter_handle" href="https://twitter.com/intent/tweet?url=#">
                <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
              </a>
              <a class="inline-block no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 " data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
                <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
              </a>
            </div>
        </div>
        <hr>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
      Page: {
          type: String,
          required: true,
      }
  }
}
</script>

<style>
</style>
