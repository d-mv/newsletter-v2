const express = require('express');

const router = new express.Router();

const authenticate = require('../middleware/direct');

router.get('/', async (req: any, res: any) => {
  try {
    const result = await authenticate(req.query.id);
    //.assign message
    const message = 'Thank for verifying';

    // TODO: refactor
    if (
      result.message
        .toString()
        .split(' ')
        .includes('malformed')
    )
      res.status(400).render('malformed', { message: result.message });

    res.status(201).render(result.message, { message });
  } catch (error) {
    res.status(400).render('malformed', { message: error });
  }
});

export default router;
