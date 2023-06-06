const { Router } = require("express");
const uploadConfig = require("../configs/upload");
const multer = require("multer");

const UsersControllers = require("../controllers/UsersController") ;
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const UserAvatarController = require("../controllers/UserAvatarController");


const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersControllers()
const userAvatarController = new UserAvatarController()


usersRoutes.post("/", usersController.create) 
usersRoutes.put("/", usersController.update)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'),userAvatarController.update)

module.exports = usersRoutes