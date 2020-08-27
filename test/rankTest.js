const rankTest = require('ava');
const {voyageRisk} = require('../src/rank');
const {hasChina} = require('../src/rank');
const {captainHistoryRisk} = require('../src/rank');
const {voyageProfitFactor} = require('../src/rank');
const {rating} = require('../src/rank');


rankTest('voyageRisk case 1. should return 4 when voyageRisk given voyage length = 9 and voyage zone = china', t => {
    const voyage = {
        zone: 'china',
        length: 9,
    };
    const result = voyageRisk(voyage);
    t.is(result, 8);
});

rankTest('voyageRisk case 2. should return 5 when voyageRisk given voyage length = 1 and voyage zone = china', t => {
    const voyage = {
        zone: 'china',
        length: 1,
    };
    const result = voyageRisk(voyage);
    t.is(result, 5);
});

rankTest('voyageRisk case 3. should return 7 when voyageRisk given voyage length = 5 and voyage zone = china', t => {
    const voyage = {
        zone: 'china',
        length: 5,
    };
    const result = voyageRisk(voyage);
    t.is(result, 7);
});

rankTest('hasChina case 1. should return true when hasChina given history include china', t => {
    const history = [
        {
            zone: 'china',
            profit: -2,
        }
    ];
    const result = hasChina(history);
    t.is(result, true);
});

rankTest('hasChina case 2. should return true when hasChina given history no include china', t => {
    const history = [
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];
    const result = hasChina(history);
    t.is(result, false);
});

rankTest('hasChina case 3. should return true when hasChina given history no include china', t => {
    const history = [
        {
            zone: 'west-indies',
            profit: 15,
        }
    ];
    const result = hasChina(history);
    t.is(result, false);
});

rankTest('hasChina case 4. should return true when hasChina given history no include china', t => {
    const history = [
        {
            zone: 'east-indies',
            profit: 15,
        }
    ];
    const result = hasChina(history);
    t.is(result, false);
});

rankTest('captainHistoryRisk case 1. should return 5 given voyage zone china length 5 history zone west-indies profit 15', t => {
    const voyage = {
        zone: 'china',
        length: 5,
    };
    const history = [
        {
            zone: 'west-indies',
            profit: 15,
        }
    ];
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 5);
});

rankTest('captainHistoryRisk case 2. should return 5 given voyage zone china length 5 history zone west-indies profit 15', t => {
    const voyage = {
        zone: 'china',
        length: 5,
    };
    const history = [
        {
            zone: 'west-indies',
            profit: 15,
        }
    ];
    const result = captainHistoryRisk(voyage, history);
    t.is(result, 5);
});

rankTest('rating case 1. should return A when rating given voyage with china 19 history length 5', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
})

rankTest('rating case 2. should return A when rating given voyage with china 12 and history length 5 ', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 12,
  };
  const history = [
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('A', result);
})

rankTest('rating case 3. should return A when rating given voyage with china 12 and empty history  cover the voyageProfitFactor', t => {
  //given
  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const history = [
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
})

