$(document).ready(function() {
  // Make the navbar sticky
  $(".navbar").sticky({ topSpacing: 0 });

  // Create Recent Posts content dynamically using JavaScript
  const recentPostsContainer = document.querySelector(".recent-posts .post-list");

  const postsData = [
    { imageSrc: "pic2.png", title: "Adventures in the Mountains", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { imageSrc: "pic3.png", title: "Urban Exploration", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { imageSrc: "pic4.png", title: "A Glimpse of the Ocean", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
  ];

  for (const post of postsData) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const postImage = document.createElement("img");
    postImage.src = post.imageSrc;
    postImage.alt = post.title;

    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;

    const postContent = document.createElement("p");
    postContent.textContent = post.content;

    postElement.appendChild(postImage);
    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    recentPostsContainer.appendChild(postElement);
  }
});
