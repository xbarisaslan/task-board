export async function fetchBoards() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/boards`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
