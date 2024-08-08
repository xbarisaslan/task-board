export async function addTask(task) {
  try {
    const response = await fetch(
      "https://api.management.parse25proje.link/api/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyOCwiaWF0IjoxNzIzMDE1MTEwfQ.8Chh9H4GqAKmRtikZVtTGC_cIeJkIfnk7EgrY34jsFU",
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
