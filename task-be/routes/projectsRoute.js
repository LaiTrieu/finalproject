const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projectsController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/create-project",
  authMiddleware,
  projectsController.createProject
);
router.post(
  "/get-all-projects",
  authMiddleware,
  projectsController.getAllProjects
);
router.post(
  "/get-project-by-id",
  authMiddleware,
  projectsController.getProjectById
);
router.post(
  "/get-projects-by-role",
  authMiddleware,
  projectsController.getProjectsByRole
);
router.post("/edit-project", authMiddleware, projectsController.editProject);
router.post(
  "/delete-project",
  authMiddleware,
  projectsController.deleteProject
);
router.post(
  "/add-member",
  authMiddleware,
  projectsController.addMemberToProject
);
router.post(
  "/remove-member",
  authMiddleware,
  projectsController.removeMemberFromProject
);

module.exports = router;
