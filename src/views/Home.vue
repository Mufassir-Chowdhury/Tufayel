<template>
  <div class="home">
    <div id="nav">
        <Navbar Page="home"/>
        <Home_Sections/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar';
import Home_Sections from '../components/home';

export default {
  components: {Navbar, Home_Sections},
  name: 'Home',
}
</script>
