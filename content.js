document.addEventListener("keydown", (e) => {
  console.log("KEY:", e.key);

  if (e.key === "/") {
    console.log("SLASH DETEKTIRAN");

    e.preventDefault();

    const searchInput = document.querySelector(
      'input[name="search_query"]'
    );

    console.log("INPUT:", searchInput);

    if (searchInput instanceof HTMLInputElement) {
      searchInput.focus();
      searchInput.value = "";
    }
  }
});