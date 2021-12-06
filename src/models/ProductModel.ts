import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index';

interface IProductModel extends Model{
    no_codigo: number;
    tx_descricao: string;
    no_quantidade: number;
    no_valor: number;
}

const ProductModel = sequelize.define<IProductModel>(
    'cad_produtos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        no_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tx_descricao: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        no_quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        no_valor: {
            type: DataTypes.FLOAT(10,2),
            allowNull: false
        }
    },
    {
        schema: 'teste_produtos'
    }
)

export default ProductModel;