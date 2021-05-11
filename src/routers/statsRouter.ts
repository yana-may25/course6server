import express from 'express';
import StatsService from "../services/StatsService";
const statsRouter = express.Router();


statsRouter.get('/', async (req, res) => {
  try {
  const stats = await StatsService.getAllStats();

    if (!stats.length) {
      return res.status(404).send('No ratings are specified for this user');
    }
    console.log(stats);
    return res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

statsRouter.get('/max', async (req, res) => {
  try {
  const stats = await StatsService.getMaxStats();

    if (!stats.length) {
      return res.status(404).send('No ratings are specified for this user');
    }
    console.log(stats);
    return res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

statsRouter.get('/min', async (req, res) => {
  try {
  const stats = await StatsService.getMinStats();

    if (!stats.length) {
      return res.status(404).send('No ratings are specified for this user');
    }
    console.log(stats);
    return res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default statsRouter;
