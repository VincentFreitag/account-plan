// Stage navigation: track scroll position, mark the active deal stage,
// and fill the progress bar. That's the whole script.
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

  // Deal progress: how far through the motion the reader is.
  const bar = document.querySelector(".stages .progress");
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0).toFixed(2) + "%";
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Open an objection card if it's the link target (e.g. from a shared URL).
  if (location.hash) {
    const t = document.querySelector(location.hash + " details");
    if (t) t.open = true;
  }
})();
