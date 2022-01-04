const express = require("express")
const instructorRouter = express.Router()
const controller = require("../controllers/instructor")

instructorRouter.get("/", controller.getInstructors)
instructorRouter.get("/:id", controller.getInstructor)
instructorRouter.post("/", controller.postInstructor)
instructorRouter.patch("/:id", controller.patchInstructor)
instructorRouter.delete("/:id", controller.deleteInstructor)

module.exports = instructorRouter