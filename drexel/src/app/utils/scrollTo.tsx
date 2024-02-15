export const routeToIndex = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    let navbarHeight = 400;
    if (id === "services") navbarHeight = 200;
    if (id === "logo") navbarHeight = 50;
    if (id === "investor") navbarHeight = 65;
    const offset = element.offsetTop - navbarHeight;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};
