const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    Activity = sequelize.define('activity', {
        // id:{
        //     type: DataTypes.STRING,
        //     primaryKey: true
             
        // },  
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),

        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.ENUM("summer", "autumn", "winter", "spring"),
        },
    }, { timestamps: false});
}