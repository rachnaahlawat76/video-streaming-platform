async function loadRecommendations(userId) {
  const res = await fetch(`/api/recommendations?user=${userId}`);
  const data = await res.json();
  const recContainer = document.getElementById("recommendations");
  recContainer.innerHTML = data.map(video =>
    `<div class="rec-card">
       <img src="${video.thumbnail}" alt="${video.title}">
       <p>${video.title}</p>
     </div>`
  ).join("");
}
