<template>
  <Section v-for="(section, index) in sections" :key="index" :name="section"/>
</template>
<script>
import Section from './home/Section';

export default {
    name: 'home-sections',
    components: { Section },
    setup() {
      let sections = ["New", "ইসলাম পূর্ণাঙ্গ জীবনব্যবস্থা", "খেলাফত", "ইকামাতে দ্বীন", "ইসলামী সংগঠন ", "ইসলামী অর্থনীতি ", "ইসলামী সমাজ", "ইসলামী রাষ্ট্র", "জাতিরাষ্ট্র", "জাতিরাষ্ট্রে ইসলাম", "গণতান্ত্রিক রাষ্ট্রে ইসলাম", "গণতন্ত্র ও ইসলাম", "সেক্যুলারিজম", "জাতীয়তাবাদ", "চরমপন্থা", "জীবনি"];
      return {
        sections
      }
    }
}
</script>

<style>

</style>