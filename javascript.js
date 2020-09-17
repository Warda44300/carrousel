$(document).ready(function(){
    
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    $navigation = $('.navigation'), // on cible l'élément de navigation
    $precedent = $ ('#precedent'),  // on cible un élément précis
    $suivant = $ ('#suivant'),  // on cible un élément précis
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

$img.css('display', 'none'); // on cache les images
$currentImg.css('display', 'block'); // on affiche seulement l'image courante

// $carrousel.append('<div class="controls"> <span class="prev">dedant</span> <span class="next">Suivant</span> </div>');

$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

});
// if( i =>0) si tu es la première image 
//i= 0 donner une valeur à l'image
//else i=$img.length(permet decible le num d'élément dans mon tableau)-1 permet de passer à l'mage une à la dernière
$('#precedent').click(function(){ // image précédente

    if( i >= 0 ){
        i--;
    } else{
        i = $img.length -1;
    }

    $img.css('display', 'none');
    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');

});
// if( i == $img.length -1 ) si tu es à la dernière images elle reveins à 0
//i= 0 donner une valeur à i
//else i=i+1 donc je lui dit si tu es à 3 tu reveins à 0

$('#suivant').click(function(){
    if( i == $img.length -1 ){
        i = 0;
    } else{
        i= i+1 ;
    }
    $img.css('display', 'none');
    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block'); 
});

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
                        
     if(i < indexImg){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
    }
    else{ // sinon, on le remet à 0 (première image)
        i = 0;
    }

    $img.css('display', 'none');

    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');

    slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 7000); // on définit l'intervalle à 7000 millisecondes (7s)
}

slideImg(); // enfin, on lance la fonction une première fois

});