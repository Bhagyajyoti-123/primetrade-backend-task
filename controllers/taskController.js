const db = require("../config/db");

exports.createTask = (req, res) => {

  const { title, description } = req.body;
  const userId = req.user.id;

  const sql = "INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)";

  db.query(sql, [title, description, userId], (err, result) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Task created successfully"
    });

  });

};

exports.getTasks = (req, res) => {

  const userId = req.user.id;

  const sql = "SELECT * FROM tasks WHERE user_id = ?";

  db.query(sql, [userId], (err, result) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(result);

  });

};

exports.updateTask = (req, res) => {

  const { id } = req.params;
  const { title, description } = req.body;

  const sql = "UPDATE tasks SET title=?, description=? WHERE id=?";

  db.query(sql, [title, description, id], (err, result) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Task updated"
    });

  });

};

exports.deleteTask = (req, res) => {

  const { id } = req.params;

  const sql = "DELETE FROM tasks WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Task deleted"
    });

  });

};