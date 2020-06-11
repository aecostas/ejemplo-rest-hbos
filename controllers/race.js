const list = (req, res) => {
    const races = [
        {
            name:'Campeonato de Galicia',
            date: '01/08/2020',
            start: 'Gondomar'
        },
        {
            name: 'Vuelta a España',
            date: '01/10/2020',
            start: 'Murcia'
        }
    ]

    const { name } = req.query;
    const { start } = req.query;

    if ((!name) && (!start)){
        res.json(races);
        return;
    } 
    
    if (!name && start) {
        res.json(races.filter(race => race.start.toLowerCase().indexOf(start.toLowerCase()) !== -1) );
        return;
    } 

    if (name && !start) {
        res.json(races.filter(race => race.name.toLowerCase().indexOf(name.toLowerCase()) !== -1) );
        return;
    } 

    res.json(races.filter(race => {
        return ((race.name.toLowerCase().indexOf(name.toLowerCase()) !== -1) && 
            ((race.start.toLowerCase().indexOf(start.toLowerCase()) !== -1)))
    }))

}

module.exports = {
    list
}
