<script>
const ul = document.querySelector('aside ul');
let posicion = 0;
const velocidad = 2; // pixeles por frame

function moverCarrusel() {
    posicion -= velocidad;
    ul.style.transform = `translateX(${posicion}px)`;
    
    // Calcular ancho de un set de logos
    const anchoTotal = ul.scrollWidth / 2;
    
    // Si pasó la mitad, reiniciar posición sin salto visual
    if (Math.abs(posicion) >= anchoTotal) {
        posicion = 0;
        ul.style.transform = `translateX(0px)`;
    }
    
    requestAnimationFrame(moverCarrusel);
}

moverCarrusel();
</script>