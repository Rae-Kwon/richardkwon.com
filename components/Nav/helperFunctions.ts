const navTo = (link: string) => {
  if (link === "home") {
    return "/";
  }

  return `/#${link}`;
};

export { navTo };
