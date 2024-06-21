export async function getAnimeData(resource, query) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const result = await response.json();
  const animeData = result.data;
  return animeData;
}

export async function getAnimePagination(resource, query) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const result = await response.json();
  const animePagination = result.pagination;
  return animePagination;
}
