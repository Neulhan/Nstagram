<script>
  export let post;
</script>

<style>
  .post {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 3px;
    margin-bottom: 15px;
  }
  .post > .post-head {
    height: 60px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    color: #888;
  }
  .post > .post-image {
    background-color: #eee;
    width: 100%;
    padding-bottom: 100%;
  }
  .post > .post-text {
    padding: 1rem;
  }
  .post > .post-text > .title {
    font-weight: bold;
  }
  .post > .post-text .content {
    margin-top: 0.25rem;
  }
  .post > .post-text .created {
    color: #888;
    margin-top: 0.25rem;
    text-align: right;
    font-size: 13px;
  }
</style>

<div class="post">
  <div class="post-head">#{post.author.name}</div>
  <div class="post-image" />
  <div class="post-text">
    <p class="title">{post.title}</p>
    <p class="content">{post.content}</p>
    <p class="created">{post.createdAt}</p>
  </div>
</div>
