<template>
  <Navbar Page="create"/>

<section class="text-gray-600 body-font relative flex flex-row">
  <div class="container px-5 py-24 mx-auto w-3/4">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create a new post</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Title</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="catagory" class="leading-7 text-sm text-gray-600">Catagory</label>
            <input type="text" id="catagory" name="catagory" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="date" class="leading-7 text-sm text-gray-600">Date</label>
            <input type="date" id="date" name="date" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Post</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </div>
    </div>
  </div>
  <div class="w-1/4 py-24">
    <div >
      <p>Add an image:</p>
      <input type="file" @change="previewImage" class="my-4 flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" accept="image/*" >
    </div>
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <button @click="onUpload" class="my-4 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Upload</button>
    <div v-if="imageData!=null">
        <img class="preview w-52" :src="picture">
        {{this.picture}}
        <br>
    </div>
  </div>
</section>
</template>

<script>
import Navbar from '../components/navbar';
// import { reactive } from '@vue/reactivity';
// import { createUser } from '@/main'
// import { useRouter } from 'vue-router';


export default {
    name: 'Create',
    components: { Navbar },
    data(){
      return{
          imageData: null,
          picture: null,
          uploadValue: 0
      }
      },
      methods:{
        previewImage(event) {
          this.uploadValue=0;
          this.picture=null;
          this.imageData = event.target.files[0];
        },

        onUpload(){
          this.picture=null;
          const storageRef=firebase.storage().ref(`catagory/meme/${this.imageData.name}`).put(this.imageData);
          storageRef.on(`state_changed`,snapshot=>{
            this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          }, error=>{console.log(error.message)},
          ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.picture =url;
            });
          }
          );
        }

  }
}
</script>

<style>

</style>