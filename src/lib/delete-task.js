export async function deleteTask(taskId) {
  try {
    const response = await fetch(
      `https://api.management.parse25proje.link/api/tasks/${taskId}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyOCwiaWF0IjoxNzIzMDE1MTEwfQ.8Chh9H4GqAKmRtikZVtTGC_cIeJkIfnk7EgrY34jsFU",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Network response was not ok: ${response.statusText}. Details: ${errorData.message}`
      );
    }

    // Optionally, return some confirmation or the response data
    return { success: true };
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}
