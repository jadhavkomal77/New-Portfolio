const { getProjects, addProjects, updateProjects, delteProjects } = require("../controller/adminController");

const router = require("express").Router();

router
    .get("/", getProjects)
    .post("/add-projects", addProjects)
    .put("/update-projects/:userId", updateProjects)
    .delete("/delete-projects/:userId", delteProjects);

module.exports = router;
