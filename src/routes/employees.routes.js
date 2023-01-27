import { Router } from "express";
import {
    getEmpleados,
    addEmployees,
    updateEmployees,
    deleteEmployees
}
    from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmpleados)

router.post("/employees", addEmployees)

router.put("/employees", updateEmployees)

router.delete("/employees", deleteEmployees)

export default router;