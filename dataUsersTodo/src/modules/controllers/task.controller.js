const Task = require("../../db/models/taskModel/index");

module.exports.getDataUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send({ data: tasks });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports.createNewTask = async (req, res) => {
  try {
    const { login, checkBox, textTask } = req.body;
    const task = await Task.create({
      login,
      checkBox,
      textTask,
      date: new Date(),
    });
    res.status(200).send({ data: task });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports.changeTaskInfo = async (req, res, next) => {
  try {
    const { checkBox, textTask, _id } = req.body;

    await Task.findByIdAndUpdate(_id, {
      checkBox,
      textTask,
    });

    const newTask = await Task.findById(_id);
    res.status(200).send(newTask);
  } catch (error) {
    next(error);
    res.status(400).send({ message: error.message });
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const id = req.body._id;
    const task = await Task.findById(id);
    await Task.deleteOne({ _id: id });
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
