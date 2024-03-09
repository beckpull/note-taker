// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {
  const cyan = '\x1b[36m';
  const magenta = "\x1b[35m";
  const red = "\x1b[31m";
  const yellow = "\x1b[43m";

  
  switch (req.method) {
    case 'GET': {
      console.info(`${cyan}${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      console.info(`${magenta}${req.method} request to ${req.path}`);
      break;
    }
    case 'DELETE': {
      console.info(`${red}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`${yellow}${req.method} request to ${req.path}`);
  }

  next();
};

exports.clog = clog;
