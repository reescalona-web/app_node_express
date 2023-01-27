import { Router } from "express";
import {
    getEmployees,
    getEmployee,
    addEmployees,
    updateEmployees,
    deleteEmployees
}
    from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees)

router.get("/employee/:id", getEmployee)

router.post("/employees", addEmployees)

router.put("/employee/:id", updateEmployees)

router.delete("/employees/:id", deleteEmployees)

export default router;