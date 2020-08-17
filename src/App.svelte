<script>
  import PostComponent from "./Post.svelte";
  import { getPostList } from "./services/post";
  import { onMount } from "svelte";
  let postList = [];

  onMount(async () => {
    const res = await getPostList();
    postList = res.data;
  });
</script>

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
  }
  .post-list {
    width: 600px;
  }
  @media (max-width: 630px) {
    .post-list {
      width: 100%;
      padding: 15px;
    }
  }
</style>

<div class="container">
  <div class="post-list">
    {#each postList as post}
      <PostComponent {post} />
    {/each}
  </div>
</div>
