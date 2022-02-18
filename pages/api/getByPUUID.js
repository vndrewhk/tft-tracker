const getByPUUID = async (req, res) => {
  let apiKey = "RGAPI-88770496-6896-4852-b3a3-b2fafc5cd6a8";
  let URL =
    "https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/";

  let puuid = req.query.puuid;
  let requestURL = `${URL}${puuid}`;
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
      const userInfo = await responseData.json();

      //res status is the one that returns the info

      res.status(200).json({ userInfo });
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

export default getByPUUID;