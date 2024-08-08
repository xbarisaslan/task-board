export async function fetchProfile() {
  try {
    const response = await fetch(
      "https://api.management.parse25proje.link/api/auth/profile",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyOCwiaWF0IjoxNzIzMDE1MTEwfQ.8Chh9H4GqAKmRtikZVtTGC_cIeJkIfnk7EgrY34jsFU",
        },
      }
    );

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
