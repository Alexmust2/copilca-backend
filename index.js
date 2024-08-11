const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PuzzlePiece, Achievement, PuzzleState } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Route to get the current puzzle state
app.get('/puzzle-state', async (req, res) => {
  try {
    const puzzleState = await PuzzleState.findOne({ where: { id: 1 } });
    const puzzlePieces = await PuzzlePiece.findAll();
    const achievements = await Achievement.findAll();

    res.json({
      puzzleState,
      puzzlePieces,
      achievements,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to update the puzzle state
app.post('/save-puzzle', async (req, res) => {
  try {
    const { puzzlePieces, currentAmount, goalAmount, achievements } = req.body;

    await PuzzleState.upsert({ id: 1, currentAmount, goalAmount });
    await PuzzlePiece.destroy({ where: {}, truncate: true });
    await PuzzlePiece.bulkCreate(puzzlePieces);
    await Achievement.destroy({ where: {}, truncate: true });
    await Achievement.bulkCreate(achievements.map((name) => ({ name })));

    res.status(200).json({ message: 'Puzzle state saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});