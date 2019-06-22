// ここに、スプレッドシートにチャートを作成するように実装する。
function createChart(){
    let chart=Charts.newDataTable()
        .addColumn(Charts.ColumnType.STRING,'日付')
        .addColumn(Charts.ColumnType.NUMBER,'出費')
    // for()
    // chart.addRow()
    chart.build()

}