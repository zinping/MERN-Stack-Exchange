const { getClient } = require('../db');

const createIdea = async (idea) => {
  const client = await getClient();
  const collection = client.collection("ideas");
  const result = await collection.insertOne({
    ...idea,
    votes: 0
  });
  return result.ops[0];
}

exports.createIdeaHandler = async (req, res) => {
  try {
    const result = await createIdea(req.body);
    res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}