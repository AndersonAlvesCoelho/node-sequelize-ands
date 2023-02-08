import Users from "../models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();

class UsersController {
 
  async login(req, res) {
    const { use_email, use_password } = req.body;
    
    const userExist = await Users.findOne({ where: { use_email: use_email } });
 
    if (!userExist) {
      return res.status(404).json({ message: "Este email não existe!" });
    }

    const checkPassword = await bcrypt.compare(
      use_password,
      userExist.use_password
    );

    if (!checkPassword) {
      return res.status(404).json({ message: "Senha inválida" });
    }
    try {
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: userExist._id,
        },
        secret
      );

      res.status(200).json({ message: "Autenticado!", token });
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });

    }
  }
}
export default new UsersController();
