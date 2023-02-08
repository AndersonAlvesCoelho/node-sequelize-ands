import { Model, DataTypes } from "sequelize";

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        use_uuid: {
          type: DataTypes.UUIDV4,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        use_name: { type: DataTypes.STRING },
        use_email: { type: DataTypes.STRING },
        use_password: { type: DataTypes.STRING },
        pl_uuid: { type: DataTypes.UUIDV4 },
      },
      {
        sequelize,
        schema: "public",
        freezeTableName: true, // mantém o nome da tabela singular
        tableName: "users", // nome da tabela
        timestamps: false,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.ProfileLevel, {
      foreignKey: "pl_uuid",
      as: "profile_level",
    });
  }
}
export default Users;
