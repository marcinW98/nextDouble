export const checkLoggedStatus = async () => {
  try {
    const response = await fetch("http://localhost:3000/checkloggedstatus", {
      method: "GET",
      credentials: "include",
    });

    if (response.status === 401) {
      return { isAuthenticated: false };
    }

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Failed to check logged status: ${response.status} - ${errorDetails}`);
    }

    const data = await response.json();

    if (!data || typeof data.isAuthenticated !== "boolean") {
      throw new Error("Invalid response format");
    }

    return data;
  } catch (error) {
    console.error("Error checking logged status:", error);
    return { isAuthenticated: false };
  }
};
