<script setup>
const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("posts"));
});

const posts = await queryContent("posts").find();

// const { data: postItems } = await useAsyncData("", () => queryContent("posts"));
</script>
<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="text-center">
        <h1
          class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"
        >
          From the blog
        </h1>

        <p class="max-w-lg mx-auto mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          veritatis sint autem nesciunt, laudantium quia tempore delect
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
        
        <div
          v-for="(n, i) in posts"
          :key="`postItem-${n._path}-${i}`"
        >
          <img
            class="relative z-10 object-cover w-full rounded-md h-96"
            :src="n.img"
            alt=""
          />

          <div
            class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900"
          >
            <NuxtLink
              :to="`/blogs${n._path}`"
              class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
            >
              {{ n.title }}
            </NuxtLink>

            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {{ n.description }}
            </p>

            <p class="mt-3 text-sm text-blue-500">21 October 2019</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>