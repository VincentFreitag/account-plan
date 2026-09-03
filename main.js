// Stage navigation: track scroll position, mark the active deal stage.
// That's the whole script — this page needs nothing else.
(() => {
  const links = document.querySelectorAll(".stages a");
  const byId = {};
  links.forEach((a) => (byId[a.getAttribute("href").slice(1)] = a));

  const visible = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) =>
        e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)
      );
      // Active = the first stage (in document order) currently in view.
      const order = ["discovery", "qualification", "proof", "objections", "close"];
      const current = order.find((id) => visible.has(id));
      links.forEach((a) => a.classList.remove("active"));
      if (current) byId[current].classList.add("active");
    },
    { rootMargin: "-15% 0px -35% 0px" }
  );
  document.querySelectorAll("main section").forEach((s) => observer.observe(s));

  // Open an objection card if it's the link target (e.g. from a shared URL).
  if (location.hash) {
    const t = document.querySelector(location.hash + " details");
    if (t) t.open = true;
  }
})();
