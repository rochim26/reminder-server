import Route from "@ioc:Adonis/Core/Route";

Route.post("user/login", "UsersController.login");
Route.post("user/daftar", "UsersController.daftar");
Route.resource("user", "UsersController").apiOnly();
