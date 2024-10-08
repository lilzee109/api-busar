import { Sequelize } from "sequelize";
import db from "../database/index.js";

const { DataTypes } = Sequelize;

const Address = db.define("address", {
    uuidUser: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    numberPhone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    subdistrict: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    codePos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    completeAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    courierNote: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    addressLabel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    main: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    choice: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    }
}, {
    freezeTableName: true
});

export default Address;