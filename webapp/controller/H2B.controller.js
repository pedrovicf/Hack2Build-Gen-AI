sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("hack2build.controller.H2B", {
            onInit: function () {

            },
            onPress:function(){
                var varA = this.getView().byId("rawMaterialInput").getValue();
                var varB = this.getView().byId("regionInput").getValue();

                $.ajax({
                    method: "GET",
                    url: "https://api.worldnewsapi.com/search-news?text=" + varA + ' ' + varB,
                    headers: { 
                        'Content-Type': 'application/json',
                        'X-Api-Key': '35688e4e32d44002beeec326abee2973'
                    },
                    success: function (dados) {
                      
                        console.log(dados);
                    },
                    error: function (erro) {
                        console.log(erro);
                    }
    
                });
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteResult", {} );
                
                //console.log("funfo");
            }
        });
    });
