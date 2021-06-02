<template>
  <div class="about min-h-full min-w-full bg-blend-darken">
    <div class="fixed pin z-40 overflow-auto bg-gray-500 bg-opacity-75 w-full h-full">
      <div id="nav" class="w-full">
          <Navbar Page="about" class="w-full"/>
      </div>
      <div class=" h-4/6 w-full px-20 bg-cover text-white">
        <div class="w-full h-full flex flex-row justify-between px-10 bg-black bg-opacity-30">
          <div class="h-full w-full px-14 flex flex-col justify-center">
            <div class="flex flex-col">
              <div class="uppercase text-left text-2xl">Saifullah Mohammad Tufayel</div>
              <hr class="my-8">
              <div class="w-full flex flex-col justify-start">
                <div class="w-full py-2 flex flex-row justify-start">
                  <div class="w-40 font-bold text-left">Phone</div>
                  <div class="text-left">+8801917223377</div>
                </div>
                <div class="w-full py-2 flex flex-row justify-start">
                  <div class="w-40 font-bold text-left">Address</div>
                  <div class="text-left">Sylhet</div>
                </div>
                <div class="w-full py-2 flex flex-row justify-start">
                  <div class="w-40 font-bold text-left">Email</div>
                  <div class="text-left">saifullah.tufayel@gmail.com</div>
                </div>
                <div class="w-full py-2 flex flex-row justify-start">
                  <div class="w-40 font-bold text-left">Website</div>
                  <div class="text-left">safullahtufayel.com</div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-full w-96 flex flex-col justify-center">
            <div class="aspect-w-1 aspect-h-1 bg-green-200">
              <img src="../assets/80595280_1474931042675717_5212886967766745088_n.jpg" alt="" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar';

export default {
  components: {Navbar},
  name: 'About',
}
</script>

<style>
.about {
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/80595280_1474931042675717_5212886967766745088_n.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.back {
  background-image: url('../assets/80595280_1474931042675717_5212886967766745088_n.jpg');
}
</style>