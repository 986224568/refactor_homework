const rankTest = require('ava');
const {voyageRisk} = require('../src/rank');
const {hasChina} = require('../src/rank');

rankTest('voyageRisk case 1. should return 4 when voyageRisk given voyage length = 9 and voyage zone = china', t => {
    const voyage = {
        zone: 'china',
        length: 9,
    };
    const result = voyageRisk(voyage);
    t.is(result, 8);
});
