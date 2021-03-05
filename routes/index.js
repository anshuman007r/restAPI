import restController from '../controllers/restController';

export default (app) => {
    app.route('/rest')
        .get(restController.getAllNotes)
        .post(restController.createNote);

    app.route('/rest/restId')
        .get(restController.getNote)
        .put(restController.updateNote)
        .delete(restController.deleteNote);
};