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
            //console.log(result);
        
            if (result.data.length > 0) {
                const data = {
                    wallet_id: result.data[0].user_id,
                    wallet_balance: result.data[0].balance,
                    wallet_user: {
                        user_id: result.data[0].user_id,
                        user_name: result.data[0].user_name
                    
                    }
                }
                res.status(200).json(data);
              } else {
                const f={
                    message: `wallet with id: ${user_id} was not found`
                
                }
                res.status(404).json(f);
              }
        });
    };

    addBalance = async (req, res) => {
        this.handleRequest(res, async () => {
            const { user_id } = req.params;
            const { recharge } = req.body;

            if(recharge < 100 || recharge > 10000 ){
                const data = {
                    message: `invalid amount: ${recharge}`
                }
                res.status(400).json(data);
            }
            else
            {
                const result = await userRepository.addBalance(user_id, recharge);
                if (result.data.length > 0) {
                    const data = {
                        wallet_id: result.data[0].user_id,
                        wallet_balance: result.data[0].balance,
                        wallet_user: {
                            user_id: result.data[0].user_id,
                            user_name: result.data[0].user_name
                        
                        }
                    }
                    res.status(200).json(data);
                  } else {
                    const f={
                        message: `wallet with id: ${user_id} was not found`
                    
                    }
                    res.status(404).json(f);
                  }

            }
            
        });
    };
}

module.exports = WalletController;