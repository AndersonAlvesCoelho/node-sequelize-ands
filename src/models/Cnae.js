import { Model, DataTypes } from "sequelize";

class Cnae extends Model {
  static init(sequelize) {
    super.init(
      {
        cna_uuid: {
          type: DataTypes.UUIDV4,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        cna_section: { type: DataTypes.CHAR },
        cna_division: { type: DataTypes.INTEGER },
        cna_group: { type: DataTypes.STRING },
        cna_class: { type: DataTypes.STRING },
        cna_subclass: { type: DataTypes.STRING },
        cna_name: { type: DataTypes.STRING },
      },
      {
        sequelize,
        schema: "public",
        freezeTableName: true, // mantém o nome da tabela singular
        tableName: "cna_cnae", // nome da tabela
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
export default Cnae;
