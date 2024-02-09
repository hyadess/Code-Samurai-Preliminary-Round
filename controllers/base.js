class Controller {
    constructor() {}
    handleResponse(result,body, res,success,failure,errorBody="internal server error") {
      if (result.success) {
        res.status(success).json(body);
      } else {
        res.status(failure).json(errorBody);
      }
    }
  
    handleRequest = async (res, action) => {
      try {
        await action();
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    };
  }
  
  module.exports = Controller;
  