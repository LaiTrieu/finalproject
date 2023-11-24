// routes/projectRoutes.js

const router = require("express").Router();
const projectController = require("../controllers/projectsController")
const authMiddleware = require("../middlewares/authMiddleware");

// Create a project
router.post("/create-project", authMiddleware, projectController.createProject);

// Get all projects
router.post("/get-all-projects", authMiddleware, projectController.getAllProjects);

// Get project by ID
router.post("/get-project-by-id", authMiddleware, projectController.getProjectById);

// Get projects by role
router.post("/get-projects-by-role", authMiddleware, projectController.getProjectsByRole);

// Edit a project
router.post("/edit-project", authMiddleware, projectController.editProject);

// Delete a project
router.post("/delete-project", authMiddleware, projectController.deleteProject);

// Add a member to a project
router.post("/add-member", authMiddleware, projectController.addMemberToProject);

// Remove a member from a project
router.post("/remove-member", authMiddleware, projectController.removeMemberFromProject);

module.exports = router;
