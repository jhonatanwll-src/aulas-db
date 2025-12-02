const db = {
  id: "aula-02-12-25",
  professor: "Jhonatan",
  clima: "chuvoso",
  sentimento: "felicidade pura",
  vontade: "estudar",
};

const body = document.getElementById("body");
body.innerHTML = JSON.stringify(db);
