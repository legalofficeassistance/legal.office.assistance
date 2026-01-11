const posts = [
  {
    title: "Cela bez okna – naruszenie podstawowych praw",
    date: "2024-11-10",
    tags: ["Cela", "Warunki", "Słowenia"],
    content: "Osadzony przebywał przez 23 godziny na dobę w celi bez dostępu do światła dziennego..."
  },
  {
    title: "Brak tłumacza przy podpisywaniu dokumentów",
    date: "2024-11-18",
    tags: ["Język", "Procedura"],
    content: "Podczas przyjęcia do zakładu karnego nie zapewniono tłumacza języka polskiego..."
  }
];

const box = document.getElementById("posts");

posts.forEach(p => {
  box.innerHTML += `
    <article class="post">
      <h2>${p.title}</h2>
      <time>${p.date}</time>
      <div>${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <p>${p.content}</p>
    </article>
  `;
});
