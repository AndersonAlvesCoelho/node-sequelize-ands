import { Model, DataTypes } from "sequelize";

class Cnpj extends Model {
  static init(sequelize) {
    super.init(
      {
        cj_uuid: {
          type: DataTypes.UUIDV4,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        cj_cnpj: { type: DataTypes.STRING },
        cj_data: { type: DataTypes.JSON },
      },
      {
        sequelize,
        schema: "public",
        freezeTableName: true, // mantém o nome da tabela singular
        tableName: "cj_cnpj", // nome da tabela
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    //   this.hasMany(models.Generation, {
    //     foreignKey: "dev_uuid",
    //     as: "generation",
    //   });
    // }
  }
}
export default Cnpj;
