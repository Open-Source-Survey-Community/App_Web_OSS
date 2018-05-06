/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
    "use strict";
     // ============================================================== 
    // Visitor
    // ============================================================== 
    
    var chart = c3.generate({
        bindto: '#visitor',
        data: {
            columns: [
                ['Other', 30],
                ['Desktop', 10],
                ['Tablet', 40],
                ['Mobile', 50],
            ],
            
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            label: {
                show: false
              },
            title:"Visits",
            width:20,
            
        },
        
        legend: {
          hide: true
          //or hide: 'data1'
          //or hide: ['data1', 'data2']
        },
        color: {
              pattern: ['#eceff1', '#745af2', '#26c6da', '#1e88e5']
        }
    });
  	  
    
    
});
