const SchedSchema = require("./models/schedule");

const sched_post = (req, res) => {
  const event = new SchedSchema(req.body);
  event
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({ message: "Event saved successfully", result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
};

const sched_get = (req, res) => {
  SchedSchema.find()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
};

const sched_delete = (req, res) => {
  const id = SchedSchema.id;
  SchedSchema.findByIdAndDelete(id)
    .then((result) => {
      console.log(result);
      res.json({ message: "Event deleted successfully", result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
};

module.exports = {
  sched_post,
  sched_get,
  sched_delete,
};
