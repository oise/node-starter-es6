//import path from "path";

const config = {};

//config.logFileDir = path.join(__dirname, '../../log');
//config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbUser = process.env.dbUser || 'root';
config.dbPassword = process.env.dbPassword || '';
config.dbName = process.env.dbName || 'team_league';
config.serverPort = process.env.serverPort || 3000;
config.url = '/api/v1';

export default config;
