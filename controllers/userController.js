const Controller = require('./base');
const UserRepository = require('../repositories/userRepository');
const userRepository = new UserRepository();

class UserController extends Controller {
    constructor() {
        super();
    }

    addUser = async (req, res) => {
        this.handleRequest(res, async () => {
            const { user_id, user_name,balance } = req.body;
            const result = await userRepository.addUser(user_id, user_name, balance);
            this.handleResponse(result, result.success?result.data[0]:null, res, 201, 500);
        }
        );
        
        
    };
}

module.exports = UserController;