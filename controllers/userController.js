const Controller = require('./base');
const UserRepository = require('../repositories/userRepository');
const userRepository = new UserRepository();

class UserController extends Controller {
    constructor() {
        super();
    }

    addUser = async (req, res) => {
        const { user_id, user_name, balance } = req.body;
        this.handleRequest(res, async () => {
            const result = await userRepository.addUser(user_id, user_name, balance);
            this.handleResponse(result, res);
        });
    };
}

module.exports = UserController;