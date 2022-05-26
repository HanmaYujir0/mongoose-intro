const Student = require('../models/Student.model');

module.exports.studentsController = {
    getStudents: (req, res) => {
        Student.find().then((data) => {
            res.json(data)
        });
    },
    postStudents: (req, res) => {
        Student.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age
        }).then(() => {
            res.json('студент добавлен')
        });
    },
    deleteStudentsId: (req, res) => {
        Student.findByIdAndRemove(req.params.id).then(() =>{
            res.json('Студент удален')
        });
    },
    patchStudentsId: (req, res) => {
        Student.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age
        }).then(() =>{
            res.json('Студент изменен')
        });
    },
};