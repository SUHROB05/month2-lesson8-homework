import express from "express"
import { createDebtController, debtAllController, deletDebtControllerId, getDebtControllerId, updateDebtControllerId } from "../controllers/debt.controllers.js"


export const debtRouter =  express.Router()




debtRouter.get("/getAll",debtAllController)
debtRouter.post("/new",  createDebtController)
debtRouter.get("/get/:id",  getDebtControllerId)
debtRouter.put("/update/:id",  updateDebtControllerId)
debtRouter.delete("/delete/:id",  deletDebtControllerId)


