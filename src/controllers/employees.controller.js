import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employee");
        res.json(rows);
    } catch (error) {
        res.status(500).send("Something goes wrong")
    }
}

export const getEmployee = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [req.params.id]);

        rows.length == 0
            ? res.status(404).json({ message: "Employee not found" })
            : res.send(rows);
    } catch (error) {
        res.status(500).send("Something goes wrong")
    }
}

export const addEmployees = async (req, res) => {
    try {
        const { nombre, salary } = req.body;
        const [rows] = await pool.query("INSERT INTO employee (nombre, salary) VALUES (?,?)", [nombre, salary]);
        res.send({ rows })
    } catch (error) {
        res.status(500).send("Something goes wrong")
    }
}

export const updateEmployees = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, salary } = req.body;
        const [result] = await pool.query("UPDATE employee SET nombre = IFNULL(?,nombre), salary = IFNULL(?,salary) WHERE id = ?", [nombre, salary, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }
        const [updatedEmployee] = await pool.query("SELECT * FROM employee WHERE id = ?", [req.params.id]);
        res.send(updatedEmployee);
    } catch (error) {
        res.status(500).send("Something goes wrong")
    }
}

export const deleteEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [req.params.id]);
        rows.affectedRows == 0
            ? res.send("Employee not found")
            : res.send("Employee eliminated successfully")
    } catch (error) {
        res.status(500).send("Something goes wrong")
    }
}