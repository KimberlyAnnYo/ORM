const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      product_id: {
        type: DataTypes.INTEGER,
        

      },
      tag_id: {
        type: DataTypes.INTEGER,
        },
      },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
ProductTag.belongsTo(Product, { foreignKey: 'product_id'});
ProductTag.belongsTo(Tag, { foreignKey: 'tag_id'});
module.exports = ProductTag;