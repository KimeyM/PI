const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("activity", {  
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {len: [0, 32]}
        },
        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            // get(){
            //     let diff = this.getDataValue('difficulty')
            //     switch(diff){
            //         case "1": return "Very Easy"
            //         case "2": return "Easy"
            //         case "3": return "Medium"
            //         case "4": return "Hard"
            //         default: return "Very Hard"
            //     }
            // }
        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.ENUM("summer", "autumn", "winter", "spring"),
            // get(){
            //     return this.getDataValue('season').charAt(0).toUpperCase() + this.getDataValue('season').slice(1)
            // }
        }
    });
}