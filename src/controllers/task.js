const { response } = require(`../middleware/common`);
const {
  insertTask,
  selectAllTask,
  countAll,
  findTask,
  selectDetailTask,
  updateTask,
  deleteTask,
} = require(`../models/task`);
const { v4: uuidv4 } = require('uuid');

const taskControllers = {
  add: async (req, res, next) => {
    try {
      const { judul, deskripsi } = req.body;

      const dataTask = {
        id: uuidv4(),
        judul,
        deskripsi,
      };

      let {
        rows: [tasks],
      } = await findTask(req.body.judul);

      if (req.body.judul.length == 0) {
        response(res, 404, false, [], 'value judul required');
      } else if (tasks) {
        return response(
          res,
          404,
          false,
          'name tasks already use',
          'register fail'
        );
      }

      await insertTask(dataTask);
      response(res, 200, true, dataTask, 'insert tasks success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, [], 'insert tasks failed');
    }
  },
  get: async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 0;
      const limit = parseInt(req.query.limit) || 12;
      const sortBy = req.query.sortBy || 'created_at';
      const sortOrder = req.query.sortOrder || 'DESC';
      const search = req.query.search || '';
      const offset = page * limit;

      const result = await selectAllTask({
        search,
        sortBy,
        sortOrder,
        limit,
        offset,
      });

      const {
        rows: [count],
      } = await countAll(search);
      const totalRows = parseInt(count.total);
      const totalPage = Math.ceil(totalRows / limit);
      const pagination = {
        page: page,
        limit,
        totalRows,
        totalPage,
      };

      response(res, 200, true, result.rows, 'get tasks success', pagination);
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, 'get tasks failed');
    }
  },
  detail: async (req, res, next) => {
    try {
      const { id } = req.params;

      const {
        rows: [tasks],
      } = await selectDetailTask(id);

      if (!tasks) {
        return response(res, 404, false, [], 'tasks not found');
      }

      response(res, 200, true, tasks, 'get data tasks success');
    } catch (error) {
      response(res, 404, false, null, ' get data tasks failed');
    }
  },
  edit: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { judul, deskripsi, selesai } = req.body;

      const {
        rows: [tasks],
      } = await selectDetailTask(id);

      if (!tasks) {
        return response(res, 404, false, [], 'tasks not found');
      }

      const dataTask = {
        id,
        judul,
        deskripsi,
        selesai,
      };

      await updateTask(dataTask);
      response(res, 200, true, dataTask, 'edit tasks success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, [], 'edit tasks failed');
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      deleteTask(id);
      response(res, 200, true, deleteTask, 'delete tasks success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, [], 'delete tasks failed');
    }
  },
};

exports.taskControllers = taskControllers;
