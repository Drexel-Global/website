export const routeToIndex = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    let navbarHeight = 0;
    if (id === "logo") navbarHeight = 50;
    const offset = element.offsetTop - navbarHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};
