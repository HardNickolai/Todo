const User = require("../../db/models/userModel/index");

module.exports.getDataUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send({ data: users });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports.createNewUser = async (req, res, next) => {
  try {
    const [login, password] = [req.body.login, req.body.password];

    const user = await User.create({
      login,
      password,
      date: new Date()
    });
    res.status(200).send({data: user});
  } catch (error) {
    next(error);
    res.status(500).send({ message: error.message });
  }
};

// module.exports.changeTaskInfo = async (req, res, next) => {
//     try {
//         const [place, cost, date, id] = [req.body.place, Number(req.body.cost), new Date(req.body.date), req.body._id];
//         let weekLater = new Date(date);
//         weekLater.setDate(weekLater.getDate() + 7);

//         let weekAgo = new Date(date);
//         weekAgo.setDate(weekAgo.getDate() - 7);
//         const checkDateFormat = date.toString() === 'Invalid Date' || date >= weekLater || date <= weekAgo;
//         if (cost >= 0) {
//             if (checkDateFormat) {
//                 res.status(400).send({message: 'Ошибка ввода даты. Формат ввода: "2022-12-31'});
//             }
//             await Task.findByIdAndUpdate(id, {place: place, cost: cost, date: date});
//             const newTask = await Task.findById(id);
//             res.status(200).send(newTask);
//         } else {
//             res.status(400).send({message: 'Ошибка ввода данных "text_expenses", только числовой формат и больше нуля'})
//         }
//     } catch (error) {
//         next(error);
//         res.status(400).send({message: error.message});
//     }
// };

module.exports.deleteUser = async (req, res, next) => {
    try {
        const id = req.body._id;
        const user = await User.findById(id);
        await User.deleteOne({_id: id});
        res.status(200).send(user);
    } catch (error) {
        next(error);
        res.status(500).send({message: error.message});
    }
};
