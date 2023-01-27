import { pool } from "../db.js"

export const getEmpleados = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM employee");
    res.json(result);
}

export const addEmployees = (req,res)=>{
    res.send("add employees")
}

export const updateEmployees = (req,res)=>{
    res.send("update employees")
}

export const deleteEmployees = (req,res)=>{
    res.send("delete employees")
}