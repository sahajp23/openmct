/**
 * This bundle adds the Hyperlink object type, which can be used to add hyperlinks as a domain Object type
 and into display Layouts as either a button or link that can be chosen to open in either the same tab or
 create a new tab to open the link in
 * @namespace platform/features/hyperlink
 */
define(
    [],
    function () {
        function HyperlinkController($scope) {
          this.$scope = $scope
        }

        /**Function to analyze the location in which to open the hyperlink
        @returns true if the hyperlink is chosen to open in a different tab, false if the same tab
        **/
        HyperlinkController.prototype.openNewTab = function()
        {
          if(this.$scope.domainObject.getModel().openNewTab[0]=="thisTab"){
                return false
            }
            else{
              return true
            }
        }
        /**Function to specify the format in which the hyperlink should be created
        @returns true if the hyperlink is chosen to be created as a button, false if a link
        **/
        HyperlinkController.prototype.isButton = function()
        {
          if(this.$scope.domainObject.getModel().displayFormat[0]=="link"){
              return false
          }
          return true
        }
        return HyperlinkController;
  }

);
