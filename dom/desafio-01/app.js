new Vue({
    el: '#desafio',
    data: {
        nome: 'Aylla',
        idade: 21,
        imagem: 'https://i0.wp.com/cdn-images-1.medium.com/max/1600/1*OnKi-u0DHkKf9U_GlVfK0Q.png?ssl=1'
    },
    methods: {
        geraValor() {
            return Math.random();
        }
    }
});