var jsforce = require('jsforce');

class SalesforceConnect {
    async login() {

        var conn = new jsforce.Connection({
        oauth2 : {
            loginUrl : 'https://test.salesforce.com',
            clientId :  process.env.clientId,
            clientSecret : process.env.clientSecret,
            redirectUri : '<callback URI is here>'
        }
        });
        try {
            return await new Promise(function (resolve, reject) {
                conn.login(process.env.salesforceUser, process.env.SalesforcePassword, (err, userInfo) => {
                    if (err) {
                        reject(err);
                    } else {
                        let formationObject = { "User": userInfo, "AccessToken": conn.accessToken, "InstanceUrl": conn.instanceUrl };
                        resolve(formationObject);
                    }
                    
                });
            });
        } catch (error) {
            throw error;
        }
    }
}




module.exports = SalesforceConnect;

module.exports.login = async (req, res) => {
    console.log('login')
    console.log('process.env.clientId ',process.env.clientId)
    console.log('process.env.clientSecret ',process.env.clientSecret)
    console.log('process.env.salesforceUser ',process.env.salesforceUser)
    console.log('process.env.SalesforcePassword ',process.env.SalesforcePassword)
    var conn = new jsforce.Connection({
        oauth2 : {
            loginUrl : process.envsalesforceURL,
            clientId :  process.env.clientId,
            clientSecret : process.env.clientSecret,
            redirectUri : '<callback URI is here>'
        }
    });
    try {
        let response = await new Promise(function (resolve, reject) {
            conn.login(process.env.salesforceUser, process.env.SalesforcePassword, (err, userInfo) => {
                if (err) {
                    reject(err);
                } else {
                    let formationObject = { "User": userInfo, "AccessToken": conn.accessToken, "InstanceUrl": conn.instanceUrl };
                    resolve(formationObject);
                }
                
            });
        });
        console.log('response',response);
        res.send(response).end();
    }catch (error) { 
        console.log('error',error)
        return res.send(error).end();
    }
    
}