const Repository = require('./base');

class TrainRepository extends Repository {
    constructor() {
        super();
    }

    addTrain = async (train_id,train_name,capacity) => {
        const query = `
            INSERT INTO trains (train_id, train_name, capacity)
            VALUES ($1 ,$2, $3)
            RETURNING *;
            `;
        const params = [train_id, train_name, capacity];
        const result = await this.query(query, params);
        return result;
      };

    





}

module.exports = TrainRepository;