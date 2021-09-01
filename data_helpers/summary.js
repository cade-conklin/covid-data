require('dotenv').config();
const request = require('request');
const token = process.env['COVID_KEY'];

function get_all_states_summary() {
    const request_uri = 'https://api.covidactnow.org/v2/states.json?apiKey=' + token
    console.log(request_uri)

    request(request_uri, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        return body
        });
}
exports.get_all_states_summary = get_all_states_summary;