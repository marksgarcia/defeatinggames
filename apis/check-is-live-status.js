export const checkForLiveStreamers = async () => {
  const liveStreamers = await fetch("https://june-bot.herokuapp.com/get-live-streams", {
    method: "GET",
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  });
  return liveStreamers.json()
};

