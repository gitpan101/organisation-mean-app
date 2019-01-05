import { ObjectID } from "mongodb";
import express from "express";
import cors from "cors";
import mongoose from "./db/mongoose";
import bodyParser from "body-parser";

import Department from "./models/department";
import Employee from "./models/employee";

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
        return res.status(404).send(department);
      }

      res.json(department);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/employees").get((req, res) => {
  Employee.find().then(
    employees => {
      res.json(employees);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/employees/:id").get((req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Employee.findById(id).then(
    employee => {
      if (!employee) {
        return res.status(404).send(employee);
      }

      res.json(employee);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/employees").post((req, res) => {
  let employee = new Employee(req.body);

  employee.save().then(
    doc => {
      res.json(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/employees/:id").delete((req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Employee.findByIdAndDelete(id).then(
    employee => {
      if (!employee) {
        return res.status(404).send(employee);
      }

      res.json(employee);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/employees/:id").patch((req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Employee.findByIdAndUpdate(id, { $set: req.body }, { new: true }).then(
    employee => {
      if (!employee) {
        res.status(404).send(employee);
      }

      res.json(employee);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

router.route("/employeesByDept/:id").get((req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Employee.find({ department: id })
    //.populate("department", "deptName")
    .then(
      employee => {
        if (!employee) {
          res.status(404).send(employee);
        }

        res.json(employee);
      },
      err => {
        res.status(400).send(err);
      }
    );
});

app.use("/api", router);
app.listen(3000, () => console.log("Server up on port 3000"));
