const express = require("express");

const app = express();

const port = 3001;

app.use(express.json());

const hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

const logger = function (req, res, next) {
  console.log("this is logger");
  next();
};
app.use(logger);

app.get("/hewan", (req, res) => {
    try {
        res.status(200).json({ message: "success", hewan: hewan });
    } catch (error) {
        res.status(500).send({ massage: error });
    }
});

app.get("/hewan/:id", (req, res) => {
    try {
        const hewanId = req.params.id;
        const data = hewan.find((u) => u.id === Number(hewanId));
        res.status(200).json({ message: "success", hewan: data });
    } catch (error) {
        res.status(500).send({ massage: error });
    }
});

        var postChecker = (req, res, next) => {
        const spesies = req.body.spesies;
            if (spesies == "kucing" || spesies == "kelinci" || spesies == "anjing") {
                next();
            } else {
                res.status(400).send({ error: "Spesies not valid" });
            }
        };

app.post("/hewan", postChecker, (req, res) => {
    const body = req.body;
    const addHewan = {
        id: hewan[hewan.length - 1].id + 1,
        nama: body.nama,
        spesies: body.spesies,
    };

    try {
        hewan.push(addHewan);
        res.status(200).json({ message: "success", hewan: hewan });
    } catch (error) {
        res.status(500).send({ massage: error });
    }
});

app.put("/hewan/:id", (req, res) => {
    try {
        const hewanId = req.params.id;
        const body = req.body;
        const find = hewan.findIndex((u) => u.id === Number(hewanId));
        const update = {
        nama: body[find],
        spesies: body[find],
        };

        if (find) {
            found.map((e) => {
            e.nama = update.nama;
            e.spesies = update.spesies || hewan[find].spesies;
            });
        }
        res.status(200).json({ message: "success", hewan: update });
    } catch (error) {
        res.status(500).send({ massage: error });
    }
});

app.delete("/hewan/:id", (req, res) => {
    try {
        const hewanId = req.params.id;
        const find = hewan.filter((u) => u.id === Number(hewanId));

        hewan.pop(find);
        res.status(200).json({ message: "success", find });
    } catch (error) {
        res.status(500).send({ massage: error });
    }
});

app.listen(port, () => {
    console.log("server run");
});