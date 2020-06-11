const list = (req, res) => {
    const races = [
        {
            id:1,
            name:'Campeonato de Galicia',
            date: '01/08/2020',
            start: 'Gondomar'
        },
        {
            id:2,
            name: 'Vuelta a España',
            date: '01/10/2020',
            start: 'Murcia'
        }
    ]

    let result = [...races];

    const { name } = req.query;
    const { start } = req.query;

    const filterByName = race => race.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    const filterByStart = race => race.start.toLowerCase().indexOf(start.toLowerCase()) !== -1;

    const filters = {
        'name': filterByName,
        'start': filterByStart
    }

    for (let param of Object.keys(req.query)) {
        if (!filters[param]) {
            continue
        }

        result = result.filter( filters[param] )  
    }

    res.json(result);
}

module.exports = {
    list
}
