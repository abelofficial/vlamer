import cors from 'cors';
import nc from 'next-connect';

const onError = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err });
};

const onNoMatch = (req, res, next) => {
  res.status(404).json({ message: 'The requested endpoint is not supported.' });
};
const handler = nc({ onNoMatch, onError })
  .use(cors())
  .get(async (req, res) => {
    const [...queries] = req.query.params;
    try {
      res.status(200).json({
        message: 'Api call Not available',
        quires: queries
      });
    } catch (error) {
      res.status(401).json({ error });
    }
  });

export default handler;
