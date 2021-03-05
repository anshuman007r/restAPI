import mongoose from 'mongoose'; 
import rest from '../models/restModel';

exports.getNote = (req, res) => {
    rest.findById(req.params.restId, (err, rest) => {
        if (err) {
            res.send(err);
        }

        res.json(rest);
    });
};

exports.getAllNotes = (req, res) => {
    rest.find({}, (err, rest) => {
        if (err) {
            res.send(err);
        }

        res.json(rest);
    });
};

exports.createNote = (req, res) => {
    const newRest = new rest(req.body);

    newRest.save((err, rest) => {
        if (err) {
            res.send(err);
        }

        res.json(rest);
    });
};

exports.updateNote = (req, res) => {
    rest.findOneAndUpdate({
        _id: req.params.restId
    }, req.body,
        (err, rest) => {
            if (err) {
                res.send(err);
            }

            res.json(rest);
        });
};

exports.deleteNote = (req, res) => {
    rest.remove({
        _id: req.params.restId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `note ${req.params.restId} successfully deleted`
        });
    });
};