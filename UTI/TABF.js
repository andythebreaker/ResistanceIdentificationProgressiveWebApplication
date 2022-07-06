var Table = require('cli-table');

module.exports = {
    ohint: function (posi) {
        // instantiate
        var table = new Table({
            head: ['hint']//, 'TH 2 label']
            , colWidths: [8]//, 20]
        });

        // table is an Array, so you can `push`, `unshift`, `splice` and friends
        table.push(
           // ['hint', posi],['hint', posi]
           [posi]
        );

        console.log(table.toString());
    }
}