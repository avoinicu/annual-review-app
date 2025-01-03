export const updateUrl = (data: string) => {
  const url = new URLSearchParams();
  url.set('data', data);
  window.history.pushState({}, '', `${window.location.pathname}?${url.toString()}`);
};
