<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
              <ul role="list" class="mt-4 space-y-4">
                <!-- <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                    {{ item.name }}
                  </a>
                </li> -->
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul role="list" class="mt-4 space-y-4">
                <!-- <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                    {{ item.name }}
                  </a>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul role="list" class="mt-4 space-y-4">
                <!-- <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                    {{ item.name }}
                  </a>
                </li> -->
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul role="list" class="mt-4 space-y-4">
                <!-- <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">
                    {{ item.name }}
                  </a>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Subscribe to our newsletter</h3>
          <p class="mt-4 text-base text-gray-500">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form class="mt-4 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input type="email" name="email-address" id="email-address" autocomplete="email" required="" class="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400" placeholder="Enter your email" />
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button type="submit" class="w-full bg-indigo-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
        <!-- <div class="flex space-x-6 md:order-2">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div> -->
        <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">&copy; 2020 Workflow, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>