const express = require("express");
const cors = require("cors");
const axios = require("axios")
const app = express(); 

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "ecd029bf-249a-4f8b-ad6f-df6d9fe5fb23" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  // const { secret } = req.body;
  // return res.json({username:username, secret:"shaq1111"});
});

app.listen(3001);
