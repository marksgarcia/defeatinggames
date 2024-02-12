export const getCampaignStatus = async () => {
  const campaignStatus = await fetch(
    "https://june-bot.herokuapp.com/get-campaign-details",
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return campaignStatus.json();
};
