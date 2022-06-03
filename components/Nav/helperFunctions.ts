const navTo = (link: string) => {
  if (link === "home") {
    return "/";
  }
  if (link === "resume") {
    return "/RichardKwonResume.pdf";
  }

  return `/#${link}`;
};

export { navTo };
