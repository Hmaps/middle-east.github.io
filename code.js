

let map,view,options,result,box,label,li,thebox,mylayer;
let locateWidget;

require(["esri/widgets/Directions","esri/widgets/Sketch","esri/widgets/Editor","esri/widgets/BasemapGallery", "esri/widgets/Search","esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/request","esri/widgets/Home",
"esri/widgets/Locate","esri/widgets/Expand","dojo/domReady!"] ,
function(Directions,Sketch,Editor,BasemapGallery,Search,Map,MapView,FeatureLayer,esriRequest,Home,locate,Expand){


    //widgets   
    map=new Map({basemap: 'satellite' })
    view= new MapView(
        {map:map, zoom:4,center: [45.3134765624967,24.21275956676295],container:"view" }
    )   
    
    
        //search
        let search = new Search({view:view});
        var expandsearch = new Expand({
            expandIconClass: "esri-icon-search",
            expandTooltip: "gps",
            view: view,
            content: search
            });
            view.ui.add(expandsearch,"top-right")
             
            var homeWidget = new Home({
            view: view
            });
            view.ui.add(homeWidget, "top-right");
               
        // locate
        locateWidget = new locate({
        view: view      
        });
        view.ui.add(locateWidget,"top-right");


        //basemap
        var basemapGallery = new BasemapGallery({
            view: view,
            source: {
            portal: {
            url: "https://www.arcgis.com",
            useVectorBasemaps: true 
                    }
                    }
                    }); 
        var expand4 = new Expand({
            expandIconClass: "esri-icon-basemap",
            expandTooltip: "basemaps",
            view: view,
            content: basemapGallery
        });      
        $('.basemap').click(function(){
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                view.ui.add(expand4,'top-left');
               
            }else{
                view.ui.remove(expand4);
               
            }
        })

        //edit
        var editor = new Editor({
            view: view,})
            var expand7 = new Expand({
                expandIconClass: "esri-icon-edit",
                expandTooltip: "edit",
                view: view,
                content: editor
            });	
            $('.edit').click(function(){
                $(this).toggleClass('active');
                if($(this).hasClass('active')){
                    view.ui.add(expand7,'top-left');
                    
                }else{
                    view.ui.remove(expand7);
                    
                }
            })


            //directions
            // var directionsWidget = new Directions({
            //     view: view, routeServiceUrl:
            //     "https://utility.arcgis.com/usrsvcs/appservices/srsKxBIxJZB0pTZ0/rest/services/World/Route/NAServer/Route_World"
            //   });             
            // var expand8 = new Expand({
            //     expandIconClass: "esri-icon-directions",
            //     expandTooltip: "edit",
            //     view: view,
            //     content: directionsWidget})
            // $('.directions').click(function(){
            //                 $(this).toggleClass('active');
            //                 if($(this).hasClass('active')){
            //                     view.ui.add(expand8,'top-left');
                                
            //                 }else{
            //                     view.ui.remove(expand8);
                                
            //                 }
            //             })
            

        let lebanon= new FeatureLayer({ 
            url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/6?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
            ,/*popupTemplate: template1*/outFields: ["*"]});
        let turkey= new FeatureLayer({ 
            url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/0?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
            ,/*popupTemplate: template1*/outFields: ["*"]});    
        let iran= new FeatureLayer({ 
            url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/3?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
            ,/*popupTemplate: template1*/outFields: ["*"]});
        let syria= new FeatureLayer({ 
            url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/9?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
            ,/*popupTemplate: template1*/outFields: ["*"]});
            let iraq= new FeatureLayer({ 
                url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/16?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
                ,/*popupTemplate: template1*/outFields: ["*"]});
        let yemen= new FeatureLayer({ 
            url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/13?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
            ,/*popupTemplate: template1*/outFields: ["*"]});
        let ksa= new FeatureLayer({ 
            url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/19?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
            ,/*popupTemplate: template1*/outFields: ["*"]});

        let palestine= new FeatureLayer({ 
            url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/21?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
            ,/*popupTemplate: template1*/outFields: ["*"]});
        let jordan= new FeatureLayer({ 
            url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/23?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
            ,/*popupTemplate: template1*/outFields: ["*"]});
            let isreal= new FeatureLayer({ 
                url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/25?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
                ,/*popupTemplate: template1*/outFields: ["*"]});
        map.addMany([lebanon,syria,iran,iraq,turkey,isreal,palestine,jordan,ksa,yemen])

        



        //populating the layers list
        let url = "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer?f=json&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg..";
        
        options = {responseType: "json"};
        esriRequest(url, options).then(populateMapServices);

        function populateMapServices (response){
            result = response.data;
            let lstservices = document.getElementById("dropDown");
            let ul= $('.myul')
          

            for (let i = 0; i< result.layers.length; i++)
            {
                li= $("<li></li>");
                 box= $('<input type="checkbox" >');
                 label= $('<label ></label>');
                box.addClass('check'+result.layers[i].name);
                box.addClass("mybox");
                box.attr('index',result.layers[i].id)
                box.attr('id','box'+result.layers[i].id)              
                label.text(result.layers[i].name);label.addClass(result.layers[i].name);
                label.attr('num',result.layers[i].id)
                label.addClass('mylabel')
                li.append(box); li.append(label);
                ul.append(li);              
            }   

          //adding the layers to map
            $('input[type="checkbox"]').each(function(){                     
                $(this).change(function(){
                    a=$(this).attr('index')
                    if($(this).prop('checked')){
                        mylayer=new FeatureLayer({ 
                            url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/"+a+"?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
                            ,/*popupTemplate: template1*/outFields: ["*"]});
                            map.add(mylayer)
                            // mylayer.when(function() {
                            //     return mylayer.queryExtent();
                            // }).then(function(response) {
                            //     view.goTo(response.extent);
                            // });
                    }else{
                        map.remove(mylayer);
                    }
                
                })
               
            });

          
        
            

            $('.removeAll').click (function(){
                map.removeAll();
            })
            // $('label').each(function () {
            //     $(this).dblclick(function () {
            //       let b= $(this).attr('num');
            //      var zlayer=new FeatureLayer({ 
            //         url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/"+b+"?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
            //         ,/*popupTemplate: template1*/outFields: ["*"]});
                   
            //        zlayer.when(function() {
            //                     return zlayer.queryExtent();
            //                 }).then(function(response) {
            //                     view.goTo(response.extent);
            //                 });
            //                 view.goTo(zlayer.extent);   
            //     })
            // }

            // )

          
           
             
            
           
              }
              
              
          
           // onChangeServiceMap();
        
        

      






});