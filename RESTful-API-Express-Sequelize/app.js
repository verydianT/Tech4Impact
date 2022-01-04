const express = require("express");
const app = express();
const HEWAN_MODEL = require("./models").hewan;
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const sequlize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  database: "hewan",
  username: "root",
  password: ""
});

sequlize
  .authenticate()
  .then(() => {
      console.log("connection has been established successfully");
  })
  .then(() => {
      Hewan.sync().then(() => console.log("table Hewan created"));
  })
  .catch((err) => {
      console.log("unable to connect", err);
  });

const Hewan = sequlize.define(
  "hewans", {
      id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
      },
      nama: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      namaSpesies: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      umur: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
      }
  }
);

//Get All
app.get("/hewan", (req, res) => {
  HEWAN_MODEL.findAll().then((result) => {
    res.json({
      message: "OK",
      data: result,
    });
  });
});

//Get by ID
app.get("/hewan/:id", (req, res) => {
  const hewanId = req.params.id;
  HEWAN_MODEL.findOne({
    where: {
      id: hewanId,
    },
  })
    .then((result) => {
      res.send({
        message: "OK",
        data: result,
      });
    })
    .catch((error) => {
      res.send({
        message: error,
      });
    });
});

// Create
app.post("/hewan", async (req, res) => {
  const body = req.body;
  const hewan = {
    name: body["name"],
    nameSpesies: body["nameSpesies"],
    umur: body["umur"],
  };

  try {
    await HEWAN_MODEL.create(hewan);
    res.status(201).send(hewan);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// Update
app.patch("/hewan/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    const body = req.body;
    const hewan = {
      name: body["name"],
      nameSpesies: body["nameSpesies"],
    };

    await HEWAN_MODEL.update(hewan, {
      where: {
        id: todoId,
      },
    });
    res.status(200).json({
      message: "Updated Success",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// Delete
app.delete("/hewan/:id", async (req, res) => {
  try {
    const todoId = req.params.id;

    await HEWAN_MODEL.destroy({
      where: {
        id: todoId,
      },
    });

    res.status(200).json({
      message: "Deleted Success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen("3001", () => {
  console.log(`server listening on port ${port}`);
});
