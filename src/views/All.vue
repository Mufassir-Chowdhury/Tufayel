<template>
  <div class="all">
    <div id="nav">
        <Navbar Page="all"/>
    </div>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div class="py-8 flex flex-wrap md:flex-nowrap" v-for="(blog, index) in blogs" :key="blog.id">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col border-r border-gray-300">
              <span class="font-semibold title-font text-gray-700">{{index}}{{blog.catagory}}</span>
              <span class="mt-1 text-gray-500 text-sm">{{blog.date}}</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{blog.name}}</h2>
              <p class="leading-relaxed">{{blog.post}}</p>
              <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/navbar';
import { loadBlogs } from '@/main'

export default {
  components: {Navbar},
  name: 'All',
  setup() {
    const blogs = loadBlogs();
    function toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

    return { 
      blogs,
      toDateTime 
    }
  }
}
</script>
