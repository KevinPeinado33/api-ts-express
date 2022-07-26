import { Sequelize } from 'sequelize'

const db = new Sequelize(
    'bixppsoab13t8jismkob', 
    'ugvhgalkp6pwu1gv', 
    '7lmiE5A0EAlYlVy9jinO', 
    {
        host: 'bixppsoab13t8jismkob-mysql.services.clever-cloud.com',
        dialect: 'mysql',
        //logging: false
    }
)

export default db