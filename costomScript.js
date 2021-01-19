$(window).on("load", function (e) {
    $('#example').DataTable({
      ordering: false,
      dom: 'Bfrtip',
        "searching":true,
        "paging":true,

        buttons: [
        ['copy', 'csv', 'excel', 'pdf', 'print']
        ]
    });
 });