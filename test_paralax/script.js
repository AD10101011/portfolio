gsap.set(".image", { x:350});
gsap.set(".image-reverse", { x:-350});

function toggleAnimationOn() {
    console.log("toggleAnimationOn !");
    
    // Utilisez GSAP pour vérifier la visibilité au lieu de la propriété style.display
    if (gsap.getProperty(".image", "display") === 'none') {
        console.log("ok!");
        
        // Utilisez GSAP pour afficher l'image
        gsap.set(".image", { display: 'block' });
        gsap.set(".image-reverse", { display: 'block' });
    }
    gsap.to(".image", {x: 0,duration:5} );
    gsap.to(".image-reverse", {x: 0,duration:5} );
}

function toggleAnimationOff(){
    console.log("toggleAnimationOff !");
   
    gsap.to(".image", { x: 350,duration:2});
    gsap.to(".image-reverse", { x: -350,duration:2});
}
