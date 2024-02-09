const Repository = require('./base');

class TrainRepository extends Repository {
    constructor() {
        super();
    }

    addTrain = async () => {
        const query = `
            INSERT INTO "Participants" ("contestId", "participantId", "type")
            VALUES ($1 ,$2, $3);
            `;
        const params = [contestId, userId, 1];
        const result = await this.query(query, params);
        return result;
      };





}