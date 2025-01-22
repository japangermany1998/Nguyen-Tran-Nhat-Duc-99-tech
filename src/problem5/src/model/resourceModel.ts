import sequelize from "../sequelize";
import {DataTypes} from "sequelize";

export const resource = sequelize.define('resources', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
});

(async () => {
    sequelize.sync()
        .then(() => {
            console.log('Database synced!');
        })
        .catch(err => console.error('Unable to connect to the database:', err));
})()
