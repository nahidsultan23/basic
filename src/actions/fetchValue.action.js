export const fetchValue = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await fetch("https://google.com", requestOptions);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    return {
      statusCode: 502,
      data: {},
      message: "Could not connect to the server",
    };
  }
};
