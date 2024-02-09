const Controller = require('./base');
const UserRepository = require('../repositories/userRepository');
const userRepository = new UserRepository();

class WalletController extends Controller {
    constructor() {
        super();
    }

    getUser = async (req, res) => {
        this.handleRequest(res, async () => {
            const { user_id } = req.params;
            const result = await userRepository.getUser(user_id);
            const data={
                wallet_id:result.data[0].user_id,
                balance:result.data[0].balance,
                wallet_user:{
                    user_id:result.data[0].user_id,
                    user_name:result.data[0].user_name 
                }
            }
            this.handleResponse(result, result.success?data:null, res, 200, 500);
        });
    };
}

module.exports = WalletController;