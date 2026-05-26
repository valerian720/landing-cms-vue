<template>
  <section id="blog" class="bg-white py-5">
    <div class="container">
      <h2 class="section-title text-center w-100">Блог</h2>
      <div class="row g-4 mt-2">
        <template v-for="(post, index, key) in posts.posts" :key="key">
          <div class="col-md-6 col-lg-4" v-if="index < posts.displayLimit">
            <div class="card blog-card h-100 border-0 shadow-sm">
              <img :src="post.img" class="card-img-top" :alt="post.title" :title="post.title">
              <div class="card-body">
                <span class="badge bg-success mb-2 me-1" v-for="(tag, tagKey) in post.tags" :key="tagKey">{{ tag
                }}</span>
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.shortDescription }}</p>
                <a :href="post.link" class="stretched-link text-danger" :title="post.title">Читать →</a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>


<script>
export default {

  props: {
    posts: Object,
  }
}
</script>