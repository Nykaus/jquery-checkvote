/*
exemple!
$('#temoignage_produit').formVote({"nombre":5,"class_on":"fa fa-star","class_off":"fa fa-star-o"});
<input type="hidden" name="temoignage_note" id="temoignage_produit" class="formVote" />
 */

(function($){
    var options = {
          nombre             : 5    // Default le nombre d'etoile
         ,class_on    : ""   // class pour afficher une etoile pleine
         ,class_off   : ""   // class pour afficher une etoile vide
         ,taille_etoiles   : "29"   // font size de l'etoile
         ,display_note   : false    // afficher la note ou pas
    };

    $.formVote = function(el,options) {};
    $.formVote.options = options;

    $.fn.formVote = function(opts){
        return this.each(function(){
            var options = $.extend({},$.formVote.options,opts);
            var composant=$(this);
            var Currentpos=0;

            var html='<div class="formVote_body" style="font-size: '+options.taille_etoiles+'px">';
            for(var nbEtoile=1;nbEtoile<=options.nombre;nbEtoile++){
                html=html+'<span style="display: inline-block;cursor:pointer;" id="note'+nbEtoile+'" class="note '+options.class_off+'"></span>';
            }
            html=html+'</div>';

            if(options.display_note==true){
                html=html+'<span id="display_note_'+composant.attr('id')+'">0/'+options.nombre+'</span>';
            }

            //creation des etoiles
            composant.after(html);
            var blocstars=composant.next(".formVote_body");
            var stars=blocstars.find(".note");

            stars.mouseout(function(){
                stars.removeClass(options.class_on).addClass(options.class_off);
                blocstars.find(".select_note").removeClass(options.class_off).addClass(options.class_on);
            });

            stars.mouseover(function(){
                var id=$(this).attr("id").split("note");
                id=id[1];
                composant.val("0");
                if(options.display_note==true){
                    $("#display_note_"+composant.attr('id')).html('0/'+options.nombre);
                }
                stars.removeClass("select_note");
                stars.removeClass(options.class_on).addClass(options.class_off);
                for(var cptStar=1;cptStar<=id;cptStar++){
                    blocstars.find("#note"+cptStar).removeClass(options.class_off).addClass(options.class_on);
                }
                //
                for(var cptStar=1;cptStar<=Currentpos;cptStar++){
                    blocstars.find("#note"+cptStar).addClass("select_note");
                }
                composant.val(Currentpos);

            });
            stars.click(function(){
                var id=$(this).attr("id").split("note");
                id=id[1];
                stars.removeClass("select_note");
                for(var cptStar=1;cptStar<=id;cptStar++){
                    blocstars.find("#note"+cptStar).addClass("select_note");
                }
                composant.val(id);
                Currentpos=id;
                if(options.display_note==true){
                    $("#display_note_"+composant.attr('id')).html(id+'/'+options.nombre);
                }

            });

        });
    };
})(jQuery);