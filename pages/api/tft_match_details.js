const TFTMatchDetails = async (req, res) => {
  let apiKey = "RGAPI-e214c86c-a32c-4ea0-bc9f-7d5ec024902e";
  let URL = "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/";
  //   b2_-gkNZhsVXT_1nTbcTWaGD0HcDvUhXffYuQYcLZxu0AwE4VAR3teWyakfuxUIeWUoQ8ugLtnZvzw/ids?count=20

  let count = "/ids?count=20";
  let puuid = req.query.puuid;
  let requestURL = `${URL}${puuid}${count}`;
  try {
    const responseData = await fetch(requestURL, {
      headers: {
        "X-Riot-Token": apiKey,
      },
    });

    if (!responseData.ok) {
      res.status(201).json({ message: "!ok" });
      throw new Error("Something went wrong!");
    }
    if (responseData.ok) {
      const matchHistory = await responseData.json();

      //res status is the one that returns the info

      res.status(200).json({ matchHistory });
      // res.status(200).json({requestType})
      //return matchInfo doesnt do anything
    }
  } catch (err) {
    res.status(200).json({ message: "err" });
    console.log(err);
    return err;
  }
  res.end();
};

export default TFTMatchDetails;