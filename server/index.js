const { db } = require('./db');
const PORT = process.env.PORT || 3000;
const app = require('./app');

const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () =>
      console.log(`Listening on port ${PORT} || localhost:${PORT}`)
    );
  } catch (ex) {
    console.log(ex);
  }
};

init();