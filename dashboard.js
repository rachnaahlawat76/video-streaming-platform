function uploadVideo() {
  const file = document.getElementById("uploadVideo").files[0];
  const formData = new FormData();
  formData.append("video", file);

  fetch("/api/upload", { method: "POST", body: formData })
    .then(res => res.json())
    .then(data => alert("Upload successful: " + data.url));
}
