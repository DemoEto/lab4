var dbconfig = {
    development: {
        server: '172.20.10.6',
        database:'team1_web_labDB',
        user:'sa',
        password:'Wachirawit2002',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '172.20.10.6'  // SQL Server instance name
        }
    },
    production: {
        server: '172.20.10.6',
        database:'team1_web_labDB',
        user:'sa',
        password:'Wachirawit2002',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '172.20.10.6'  // SQL Server instance name
        }
    },

};
module.exports = dbconfig;
