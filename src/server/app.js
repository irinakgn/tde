const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Excel = require('exceljs');
const app = express();

app.options('*', cors()); //TODO: fix
app.use(cors());
app.use(bodyParser());

const port = process.env.PORT || 5000;


app.post('/api/get-excel-file', (req, res) => {

    const content = req.body;

    const workbook = new Excel.Workbook();

    workbook.creator = 'Me';
    workbook.lastModifiedBy = 'Her';
    workbook.created = new Date(1985, 8, 30);
    workbook.modified = new Date();
    workbook.lastPrinted = new Date(2016, 9, 27);
    workbook.properties.date1904 = true;

    workbook.views = [
        {
            x: 0, y: 0, width: 10000, height: 20000,
            firstSheet: 0, activeTab: 1, visibility: 'visible'
        }
    ];
    const worksheet = workbook.addWorksheet('My Sheet');
    // worksheet.columns = [
    //     {header: 'Id', key: 'id',},
    //     {header: 'Name', key: 'name', width: 32},
    //     {header: 'D.O.B.', key: 'dob', width: 10, outlineLevel: 1, type: 'date', formulae: [new Date(2016, 0, 1)]}
    // ];

    const headerColumns = [];
    for (const key of Object.values(content)) {
        headerColumns.push({
            header: key,
            key: key,
            width: 10

        })
    }
    worksheet.columns = headerColumns;


    // worksheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970, 1, 1) });
    // worksheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7) });


    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
    workbook.xlsx.write(res)
        .then(function (data) {
            res.end();
            console.log('File write done........');
        });

});


app.listen(port, () => console.log(`Listening on port ${port}`));