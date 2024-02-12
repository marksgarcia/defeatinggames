export const getDonorList = async () => {
  const donorList = await fetch(
    "https://june-bot.herokuapp.com/get-donor-list",
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return donorList.json();
};
