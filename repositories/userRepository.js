
const Repository = require('./base');


class UserRepository extends Repository {
    constructor() {
        super();
    }
    addUser = async (user_id, user_name,balance) => {
        const query = `
            INSERT INTO users (user_id, user_name, balance)
            VALUES ($1 ,$2, $3)
            RETURNING *;
            `;
        const params = [user_id, user_name, balance];
        const result = await this.query(query, params);
        return result;
    };

    getUser = async (user_id) => {
        const query = `
            SELECT * FROM users
            WHERE user_id = $1;
            `;
        const params = [user_id];
        const result = await this.query(query, params);
        return result;
    }
    
}

module.exports = UserRepository;