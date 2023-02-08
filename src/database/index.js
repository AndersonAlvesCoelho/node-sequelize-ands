import { Sequelize } from "sequelize";
import dbConfig from "../config/database";

import Users from "../models/Users";
import Cnae from "../models/Cnae";
import Cnpj from "../models/Cnpj";
import ProfileLevel from "../models/ProfileLevel";

const modelsDbMayaEnergy = [Users, Cnae, Cnpj, ProfileLevel ];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // models para o banco
    const dbMayaEnergy = new Sequelize(dbConfig);
    modelsDbMayaEnergy
      .map((model) => model.init(dbMayaEnergy))
      .map((model) => {
        if (model.associate) model.associate(dbMayaEnergy.models);
        return model;
      });
  }
}

export default new Database();
