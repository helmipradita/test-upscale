const Pool = require(`../config/db`);

const insertTask = (data) => {
  const { id, judul, deskripsi } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO tasks
          (id, judul,  deskripsi, 
            created_at, updated_at) 
        VALUES('${id}', '${judul}', '${deskripsi}', 
            NOW(), NOW())`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const selectAllTask = ({ limit, offset, sortBy, sortOrder, search }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT 
        tasks.id, tasks.judul, tasks.deskripsi, tasks.selesai,
        to_char( tasks.created_at, 'day, DD Mon YYYY, HH24:MI' ) AS created_at, 
        to_char( tasks.updated_at, 'day, DD Mon YYYY, HH24:MI' ) AS updated_at
      FROM tasks AS tasks
      WHERE tasks.judul 
      ILIKE '%${search}%' ORDER BY ${sortBy} ${sortOrder} 
      LIMIT ${limit} OFFSET ${offset}`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const countAll = (search) => {
  return Pool.query(
    `SELECT COUNT(*) AS total FROM tasks WHERE judul 
            ILIKE '%${search}%' `
  );
};

const findTask = (judul) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM tasks WHERE judul='${judul}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const selectDetailTask = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT 
        tasks.id, tasks.judul, tasks.deskripsi, tasks.selesai,
        to_char( tasks.created_at, 'day, DD Mon YYYY, HH24:MI' ) AS created_at, 
        to_char( tasks.updated_at, 'day, DD Mon YYYY, HH24:MI' ) AS updated_at
      FROM tasks AS tasks
      WHERE tasks.id='${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const updateTask = ({ id, judul, deskripsi, selesai }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE tasks 
      SET judul ='${judul}', deskripsi ='${deskripsi}', selesai ='${selesai}', 
        updated_at =NOW()
      WHERE id='${id}' `,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const deleteTask = (id) => Pool.query(`DELETE FROM tasks WHERE id ='${id}'`);

module.exports = {
  insertTask,
  selectAllTask,
  countAll,
  findTask,
  selectDetailTask,
  updateTask,
  deleteTask,
};
