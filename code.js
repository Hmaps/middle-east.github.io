

let map,view,options,result,box,label,li,thebox,mylayer;
let locateWidget;

require(["esri/widgets/Fullscreen","esri/widgets/FeatureTable","esri/views/SceneView","esri/widgets/DistanceMeasurement2D","esri/widgets/AreaMeasurement2D","esri/widgets/Editor","esri/widgets/BasemapGallery", "esri/widgets/Search","esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/request","esri/widgets/Home",
"esri/widgets/Locate","esri/widgets/Expand","dojo/domReady!"] ,
function(Fullscreen,FeatureTable,SceneView,line,AreaMeasurement2D,Editor,BasemapGallery,Search,Map,MapView,FeatureLayer,esriRequest,Home,locate,Expand){
   
    map=new Map({basemap: 'satellite' })
    view= new MapView(
        {map:map, zoom:4,center: [45.3134765624967,24.21275956676295],container:"view" }
    ) 

    view.ui.remove('zoom');
   

    //2d 3d
    $('.scene').on("click",function(){
        map.ground= "world-elevation";
        scene=new SceneView({map:map,zoom:view.zoom, center:[view.center.longitude,view.center.latitude],
            container:"view"});
            
        
    });
    $('.map').click(function(){
        
        view= new MapView(            
            {map:map,zoom:view.zoom, center:[view.center.longitude,view.center.latitude],
                container:"view"}
        ) 
        
    })


    //widgets   
    


        //FULLSCREEN
        fullscreen = new Fullscreen({
            view: view
          });
          view.ui.add(fullscreen, "top-right"); 
    
        //search
        let search = new Search({
            view:view,container:"search"
        });
        var expandsearch = new Expand({
            expandIconClass: "esri-icon-search",
            expandTooltip: "search",
            view: view,
            content: search,
            });
            //view.ui.add(expandsearch,"top-right")
             
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

            //measure
            var area = new AreaMeasurement2D({
                view: view,unit: "square-meters"
              });
            var line = new line({
            view: view,unit:"metric"
            });
            var expandmeasure = new Expand({
                expandIconClass: "esri-icon-measure",
                expandTooltip: "measure",
                view: view,
                content: line
            });	

            var expandarea = new Expand({
                expandIconClass: "esri-icon-measure-area",
                expandTooltip: "measure",
                view: view,
                content: area
            });	
            $('.measure').click(function(){
                $(this).toggleClass('active');
                if($(this).hasClass('active')){
                    view.ui.add([expandarea,expandmeasure],'top-left');
                    
                }else{
                    view.ui.remove([expandarea,expandmeasure]);
                    
                }
            }) ;                              
            

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
        map.addMany([lebanon,syria,iran,iraq,turkey,isreal,palestine,jordan,ksa,yemen]);


       
        



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
                 tablebtn=$('<button></button>');
                 tablebtn.text('Table');
                 tablebtn.attr('table',i);
                 tablebtn.addClass("attrtable")
                box.addClass('check'+result.layers[i].name);
                box.addClass("mybox");
                box.attr('index',result.layers[i].id);
                box.attr('id','box'+result.layers[i].id);             
                label.text(result.layers[i].name);label.addClass(result.layers[i].name);
                label.attr('num',result.layers[i].id);
                label.addClass('mylabel');
                li.append(tablebtn); li.append(box); li.append(label);
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
                $("input[type='checkbox']").prop("checked",false)
            })


             //ATTRIBUTES table
           $('.attrtable').each(function(){
            
            $(this).click(function(){
                $("#tableDiv").children().remove();
                $("#tableDiv").slideDown(500);
               var c=$(this).attr('table');
                $(this).toggleClass("activeT");
                if($(this).hasClass('activeT')){
                    $(this).css("border","3px solid black")
                    Tlayer=new FeatureLayer({ 
                        url: "https://services9.arcgis.com/BwlqFPXTnyyoy8fL/ArcGIS/rest/services/MiddleEast/FeatureServer/"+c+"?f=pjson&token=JdeFYHAVcgVdq4juH9CoT9fKCW8Ja8aUHNplJiSVdG5lmgkwds4PsuU2XOXvNWkc7teP2bJ7YFtMfHA6pcSV9AqGm4X8txj532LcqRMVSHjuhUrPqzSNutc-iS27JIClmtRlPanI8_K9WRhhEF2de4DMOE-Ra7OOyPVOYeYLiWAic6LIccuijO8US-iauDIsOO__6G_sxiA1GimmxEbJQ2oOt6MEY6Z6YwP2yXVAQJ3z7VW8sRxWwnYQhoCvudfnC5_OYEhJtjwQV2dc_qslTg.."
                        ,/*popupTemplate: template1*/outFields: ["*"]});
                    
                        const featureTable = new FeatureTable({
                            layer: Tlayer,
                            container: "tableDiv"
                          });


                }else{ $("#tableDiv").children().remove();
                $("#tableDiv").slideUp(500);
                $(this).css("border","")
                        }

            })           
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