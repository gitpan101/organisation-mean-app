const { ObjectID } = require("mongodb");
import express from "express";
import cors from "cors";
import mongoose from "./db/mongoose";
import bodyParser from "body-parser";

import Department from "./models/department";
import Employee from "./models/employee";
import department from "./models/department";

const app = express();
const router = express.Router();

var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

router.route("/departments").get((req, res) => {
  Department.find().then(
    departments => {
      res.json(departments);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/departments/:id").get((req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Department.findById().then(
    department => {
      if (!department) {
        return res.status(404).send(department);
      }

      res.json(department);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/departments").post((req, res) => {
  let department = new Department(req.body);

  department.save().then(
    doc => {
      res.json(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/departments/:id").delete((req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Department.findByIdAndDelete(id).then(
    department => {
      if (!department) {
        return res.status(404).send(department);
      }

      res.json(department);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/departments/:id").patch((req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Department.findByIdAndUpdate(id, { $set: req.body }, { new: true }).then(
    department => {
      if (!department) {
        res.status(404).send(department);
      }

      res.json(department);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.use("/api", router);
app.listen(3000, () => console.log("Server up on port 3000"));
